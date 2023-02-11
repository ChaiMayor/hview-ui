<template>
  <div class="h-time-panel__wrap">
    <div class="h-time-panel__title" v-if="title">{{ title }}</div>
    <div class="h-time-panel__content">
      <div class="h-time-spinner__wrapper" ref="hourCol">
        <ul class="h-time-spinner__ul">
          <li
            v-for="(item, index) in hoursList"
            :class="getCellCls(item)"
            :key="index"
            @click="handleClick('hour', item, index)">
            {{ formatTime(item.text) }}
          </li>
        </ul>
      </div>
      <div class="h-time-spinner__wrapper" ref="minuteCol">
        <ul class="h-time-spinner__ul">
          <li
            v-for="(item, index) in minutesList"
            :class="getCellCls(item)"
            :key="index"
            @click="handleClick('minute', item, index)">
            {{ formatTime(item.text) }}
          </li>
        </ul>
      </div>
      <div class="h-time-spinner__wrapper" ref="secondCol">
        <ul class="h-time-spinner__ul">
          <li
            v-for="(item, index) in secondsList"
            :class="getCellCls(item)"
            :key="index"
            @click="handleClick('second', item, index)">
            {{ formatTime(item.text) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { deepCopy } from "@hview-plus/utils";

const emits = defineEmits(["on-change", "item-click"]);
const props = defineProps({
  hours: {
    type: [Number, String],
    default: NaN,
  },
  minutes: {
    type: [Number, String],
    default: NaN,
  },
  seconds: {
    type: [Number, String],
    default: NaN,
  },
  title: String,
});

const hourCol = ref(null);
const minuteCol = ref(null);
const secondCol = ref(null);

const hoursList = computed(() => {
  let hours = [];
  const hour_tmpl = {
    text: 0,
    selected: false,
    disabled: false,
    hide: false,
  };
  for (let i = 0; i < 24; i++) {
    const hour = deepCopy(hour_tmpl);
    hour.text = i;

    if (props.hours == i) hour.selected = true;
    hours.push(hour);
  }
  return hours;
});

const minutesList = computed(() => {
  let minutes = [];
  const minute_tmpl = {
    text: 0,
    selected: false,
    disabled: false,
    hide: false,
  };
  for (let i = 0; i < 60; i++) {
    const minute = deepCopy(minute_tmpl);
    minute.text = i;

    if (props.minutes == i) minute.selected = true;
    minutes.push(minute);
  }
  return minutes;
});

const secondsList = computed(() => {
  let seconds = [];
  const second_tmpl = {
    text: 0,
    selected: false,
    disabled: false,
    hide: false,
  };
  for (let i = 0; i < 60; i++) {
    const second = deepCopy(second_tmpl);
    second.text = i;

    if (props.seconds == i) second.selected = true;
    seconds.push(second);
  }
  return seconds;
});

const getCellCls = (cell: any) => {
  return [
    "h-time-spinner__item",
    {
      "cell-selected": cell.selected,
      "cell-disabled": cell.disabled,
    },
  ];
};

const formatTime = (text: number) => {
  return text < 10 ? "0" + text : text;
};

const handleClick = (type: string, item: any, index: number) => {
  if (item.disabled) return;
  const targetMaps = {
    hour: hourCol.value,
    minute: minuteCol.value,
    second: secondCol.value,
  };
  const target = (targetMaps as any)[type];

  const scroll = () => {
    if (target) {
      scrollTo(target, index);
    }
  };
  emits("item-click", type, item, scroll);
};

// 重置滚动位置
const resetScroll = (arr: any) => {
  nextTick(() => {
    [hourCol, minuteCol, secondCol].forEach((ref, index) => {
      scrollTo(ref.value, Number(arr[index]));
    });
  });
};

// 滚动到顶部
const scrollTo = (target: any, index: number) => {
  const firstItemHeight = target.querySelector(
    ".h-time-spinner__item",
  ).clientHeight;
  nextTick(() => {
    target.scrollTop = index * firstItemHeight;
  });
};

defineExpose({
  resetScroll,
});
</script>
