<template>
  <div
    ref="slider"
    :class="['h-slider', { 'is-vertical': vertical }, { 'is-disabled': disabled }, { 'is-clicking': clicking }]">
    <div class="h-slider__runway_wraper" ref="runway_wraper">
      <HSliderRunway
        ref="runway"
        :modelValue="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :showTooltip="showTooltip"
        :showStops="showStops"
        :disabled="disabled"
        :formatTooltip="formatTooltip"
        :range="range"
        :vertical="vertical"
        :width="runway_wraper_width"
        :height="height"
        :tooltipClass="tooltipClass"
        :placement="placement"
        :marks="marks"
        :runway_wraper="runway_wraper"></HSliderRunway>
    </div> </div
></template>

<script setup lang="ts">
import "../style/index.less";
import { ref, watch, nextTick } from "vue";
import { SliderProps } from "./slider";
import HSliderRunway from "./runway.vue";
import { isOutBounds } from "./utils";
import { isArray } from "lodash";

const props = defineProps(SliderProps);

const modelValue = ref<number | number[]>(props.modelValue);
const runway = ref<any>(null);
const slider = ref<any>(null);
const runway_wraper = ref<any>(null);
const runway_wraper_width = ref<number>(0);
const clicking = ref<boolean>(false);

const updateState = () => {
  nextTick(() => {
    runway_wraper_width.value = props.vertical ? props.height : runway_wraper.value.offsetWidth;
  });
};

watch(
  () => props.modelValue,
  () => {
    isArray(modelValue.value)
      ? modelValue.value.forEach((i) => {
          isOutBounds(i, props.min, props.max);
        })
      : isOutBounds(modelValue.value, props.min, props.max);
    if (props.range && (modelValue.value as number[]).length !== 2) {
      throw new Error("有range字段则必须传入modelValue一个数组参数");
    }
    updateState();
  },
  {
    immediate: true,
  },
);
watch([() => props.range], () => {
  runway.value!.update();
});
watch([() => props.vertical, () => props.height], () => {
  updateState();
});
</script>

<script lang="ts">
export default {
  name: "HSlider",
};
</script>
