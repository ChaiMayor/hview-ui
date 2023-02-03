<template>
  <div class="h-divider" :class="dividerClass" :style="dividerStyle">
    <div v-if="$slots.default && direction !== 'vertical'" class="h-divider-content" :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "../style/index.less";
import { computed } from "vue";
import { DividerProps } from "./divider";
import type { CSSProperties } from "vue";

const props = defineProps(DividerProps);
// 分割线显示方向
const dividerClass = computed(() => {
  return {
    [`direction--${props.direction}`]: props.direction,
  };
});
// 分割线样式（使用css变量）
const dividerStyle = computed(() => {
  return {
    "--border-style": props.borderStyle,
  } as CSSProperties;
});
// 插槽内容位置
const contentClass = computed(() => {
  return {
    [`content-position--${props.contentPosition}`]: props.contentPosition,
  };
});
</script>

<script lang="ts">
export default {
  name: "HDivider",
};
</script>
