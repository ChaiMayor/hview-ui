<template>
  <div
    class="h-progress"
    :class="progressClasses"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100">
    <div v-if="type === 'line'" class="h-progress-bar">
      <div class="h-progress-bar-outer" :style="{ height: `${strokeWidth}px` }">
        <div
          class="h-progress-bar-inner"
          :class="{ [`h-progress-bar-innerindeterminate`]: indeterminate }"
          :style="barStyle">
          <div
            v-if="(showText || $slots.default) && textInside"
            class="h-progress-bar-innerText">
            <slot :percentage="percentage">
              <span>{{ content }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="h-progress-circle"
      :style="{ height: `${width}px`, width: `${width}px` }">
      <svg viewBox="0 0 100 100">
        <path
          class="h-progress-circle-track"
          :d="trackPath"
          stroke="#e5e9f2"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle" />
        <path
          class="h-progress-circle-path"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :opacity="percentage ? 1 : 0"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle" />
      </svg>
    </div>
    <div
      v-if="(showText || $slots.default) && !textInside"
      class="h-progress-text"
      :style="{ fontSize: `${progressTextSize}px` }">
      <slot :percentage="percentage">
        <span v-if="!status">{{ content }}</span>
        <h-icon v-else :name="statusIcon"></h-icon>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
// eslint-disable-next-line vue/prefer-import-from-vue
import { isFunction, isString } from "@vue/shared";
import { progressProps } from "./progress";
import type { CSSProperties } from "vue";
import type { ProgressColor } from "./progress";

const STATUS_COLOR_MAP: Record<string, string> = {
  success: "#67c23a",
  error: "#f56c6c",
  warning: "#e6a23c",
  default: "#20a0ff",
};

const props = defineProps(progressProps);

const progressClasses = computed(() => {
  const { status, type, showText, textInside } = props;
  return {
    [`h-progress--${type}`]: type,
    [`h-progress--${status}`]: status,
    [`h-progress-without-text`]: !showText,
    [`h-progress-text-inside`]: textInside,
  };
});

const barStyle = computed<CSSProperties>(() => ({
  width: `${props.percentage}%`,
  animationDuration: `${props.duration}s`,
  backgroundColor: getCurrentColor(props.percentage),
}));

const relativeStrokeWidth = computed(() =>
  ((props.strokeWidth / props.width) * 100).toFixed(1),
);

const radius = computed(() => {
  if (["circle", "dashboard"].includes(props.type)) {
    return Number.parseInt(
      `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
      10,
    );
  }
  return 0;
});
// path绘制路径
const trackPath = computed(() => {
  const r = radius.value;
  const isDashboard = props.type === "dashboard";
  return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
});

const perimeter = computed(() => 2 * Math.PI * radius.value);

const rate = computed(() => (props.type === "dashboard" ? 0.75 : 1));

const strokeDashoffset = computed(() => {
  const offset = (-1 * perimeter.value * (1 - rate.value)) / 2;
  return `${offset}px`;
});

const trailPathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
}));

const circlePathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${
    perimeter.value * rate.value * (props.percentage / 100)
  }px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
  transition:
    "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s",
}));

const stroke = computed(() => {
  let ret: string;
  if (props.color) {
    ret = getCurrentColor(props.percentage);
  } else {
    ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
  }
  return ret;
});

// 图标
const statusIcon = computed(() => {
  if (props.status === "warning") {
    return "warning";
  }
  return props.status === "success" ? "success" : "close";
});

const progressTextSize = computed(() => {
  return props.type === "line"
    ? 12 + props.strokeWidth * 0.4
    : props.width * 0.111111 + 2;
});

const content = computed(() => props.format(props.percentage));

function getColors(color: ProgressColor[]) {
  const span = 100 / color.length;
  const seriesColors = color.map((seriesColor, index) => {
    if (isString(seriesColor)) {
      return {
        color: seriesColor,
        percentage: (index + 1) * span,
      };
    }
    return seriesColor;
  });
  return seriesColors.sort((a, b) => a.percentage - b.percentage);
}

const getCurrentColor = (percentage: number) => {
  const { color } = props;
  if (isFunction(color)) {
    return color(percentage);
  } else if (isString(color)) {
    return color;
  } else {
    const colors = getColors(color);
    for (const color of colors) {
      if (color.percentage > percentage) return color.color;
    }
    return colors[colors.length - 1]?.color;
  }
};
</script>

<script lang="ts">
export default {
  name: "HProgress",
};
</script>
