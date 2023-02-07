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
        @change="change"
        @input="input"
        :range="range"
        :vertical="vertical"
        :width="runway_wraper_width"
        :height="height"
        :tooltipClass="tooltipClass"
        :placement="placement"
        :marks="marks"
        :runway_wraper="runway_wraper"></HSliderRunway>
    </div>
    <InputNumber
      v-if="showInput"
      v-model="numberValue"
      :max="max"
      :min="min"
      :size="inputSize"
      :controls="showInputControls"
      @change="changeNumberValue"></InputNumber> </div
></template>

<script setup lang="ts">
import "../style/index.less";
import { ref, watch, nextTick } from "vue";
import InputNumber from "../../input-number";
import { SliderProps } from "./slider";
import HSliderRunway from "./runway.vue";
import { isOutBounds } from "./utils";
// eslint-disable-next-line vue/prefer-import-from-vue
import { isArray } from "@vue/shared";
import { throttle } from "lodash-es";
const numberValue = ref<string | number>(1);

const props = defineProps(SliderProps);
const emits = defineEmits(["input", "change"]);

const modelValue = ref<number | number[]>(props.modelValue);
const runway = ref<any>(null);
const slider = ref<any>(null);
const runway_wraper = ref<any>(null);
const runway_wraper_width = ref<number>(0);
const clicking = ref<boolean>(false);

const change = (val: number | string, val2: number | string) => {
  emits("change", val, val2);
};

const input = (val: number | string, val2: number | string) => {
  numberValue.value = val;
  emits("input", val, val2);
};

// 数值输入框值变化
const changeNumberValue = (val: number) => {
  modelValue.value = val;
};

const updateState = () => {
  nextTick(() => {
    runway_wraper_width.value = props.vertical ? props.height : runway_wraper.value.offsetWidth;
    modelValue.value = props.modelValue;

    numberValue.value = isArray(props.modelValue) ? props.modelValue[0] : props.modelValue;
  });
};

watch(
  () => props.modelValue,
  throttle(() => {
    nextTick(() => {
      isArray(modelValue.value)
        ? modelValue.value.forEach((i) => {
            isOutBounds(i, props.min, props.max);
          })
        : isOutBounds(modelValue.value, props.min, props.max);
      if (props.range && (modelValue.value as number[]).length !== 2) {
        throw new Error("有range字段则必须传入modelValue一个数组参数");
      }
      updateState();
    });
  }, 20),
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
