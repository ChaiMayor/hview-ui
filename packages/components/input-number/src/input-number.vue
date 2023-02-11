<template>
  <div
    :class="[
      'h-input-number',
      { 'is-disabled': isDisabled },
      { small: size === 'small' },
      { large: size === 'large' },
      { right: controlsPosition === 'right' },
      { controls: !controls },
    ]">
    <template v-if="!props.controlsPosition">
      <span
        :class="[
          'h-input-number__decrease',
          { 'is-disabled': disabledClass === 'decrease' },
        ]"
        @click="decrease(step)">
        <h-icon name="jian"></h-icon>
      </span>
      <h-input
        v-model="numberValue"
        type="number"
        :readonly="readonly"
        :name="name"
        :label="label"
        :placeholder="placeholder"
        :disabled="isDisabled"
        ref="input"
        @focus="focusInput"
        @blur="blurInput"></h-input>
      <span
        :class="[
          'h-input-number__increase',
          { 'is-disabled': disabledClass === 'increase' },
        ]"
        @click="increase(step)">
        <h-icon name="jia"></h-icon>
      </span>
    </template>
    <template v-else>
      <h-input
        v-model="numberValue"
        ref="input2"
        type="number"
        :name="name"
        :label="label"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="isDisabled"
        @blur="blurInput"></h-input>
      <div class="crease_container">
        <span
          :class="[
            'h-input-number__increase',
            { 'is-disabled': disabledClass === 'increase' },
          ]"
          @click="increase(step)">
          <h-icon name="xiangshang2"></h-icon>
        </span>
        <span
          :class="[
            'h-input-number__decrease',
            { 'is-disabled': disabledClass === 'decrease' },
          ]"
          @click="decrease(step)">
          <h-icon name="xiangxia1"></h-icon>
        </span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import HInput from "../../input";
import HIcon from "../../icon";
import { InputNumberProps } from "./input-number";
import { nextTick, onMounted, ref, watch } from "vue";
import { toFixed } from "@hview-plus/utils";

const props = defineProps(InputNumberProps);
const emits = defineEmits(["change", "blur", "focus"]);

const disabledClass = ref<string>("");
const isDisabled = ref<boolean>(props.disabled);
const min = ref<number>(props.min);
const max = ref<number>(props.max);
const step = ref<number>(props.step);
const stepStrictly = ref<boolean>(props.stepStrictly);
const precision = ref<number>(props.precision);
const controls = ref<boolean>(props.controls);
const readonly = ref<boolean>(props.readonly);
const numberValue = ref<number | string>(props.modelValue);
const oldVal = ref<number | string | "NaN">("NaN");
const input = ref<any>(null);
const input2 = ref<any>(null);

// 补零
const repairDigit = (num: number) => {
  if (precision.value) {
    let n = 0;
    let r = String(num);
    if (/\./.test(String(num))) {
      const res = String(num).split(".")[1];
      n += res.length;
    } else {
      r += ".";
    }

    for (let i = n; i < precision.value; i++) {
      r += "0";
    }

    return r;
  }
};

// 判断左右
type Location = "start" | "end";
const judgeLocation = (val: number, start: number, end: number): Location => {
  const middle = (end - start) / 2;
  return val > start + middle ? "end" : "start";
};

// 获取左右值
const getSideValue = (val: number, step: number, maxVal: number) => {
  if (val >= maxVal - step && val <= maxVal) {
    return [maxVal - step, maxVal];
  }
  return getSideValue(val, step, maxVal + step);
};

// 减少
const decrease = (num: number) => {
  if (isDisabled.value || readonly.value) return;
  if (!isTriggerLimit(Number(numberValue.value) - num)) {
    numberValue.value = Number(numberValue.value) - num;
    update();
  }
};

// 增加
const increase = (num: number) => {
  if (isDisabled.value || readonly.value) return;
  if (!isTriggerLimit(Number(numberValue.value) + num)) {
    numberValue.value = Number(numberValue.value) + num;
    update();
  }
};

// input 失去焦点
const blurInput = (e: FocusEvent) => {
  if (stepStrictly.value && step.value > 1) {
    const res = getSideValue(Number(numberValue.value), step.value, step.value);
    const location = judgeLocation(Number(numberValue.value), res[0], res[1]);
    location === "start"
      ? (numberValue.value = res[0])
      : (numberValue.value = res[1]);
  }
  emits("blur", e);
  update();
};

// input 获得焦点
const focusInput = (e: FocusEvent) => {
  emits("focus", e);
};

const isTriggerLimit = (num: number) => {
  if (num < min.value) return true;
  else if (num > max.value) return true;
  disabledClass.value = "";
  return false;
};

// 更新value
const update = () => {
  nextTick(() => {
    if (isDisabled.value || readonly.value) return;
    numberValue.value <= min.value &&
      ((disabledClass.value = "decrease"), (numberValue.value = min.value));
    numberValue.value >= max.value &&
      ((disabledClass.value = "increase"), (numberValue.value = max.value));
    emits("change", numberValue.value, oldVal.value);

    if (precision.value >= 1) {
      numberValue.value = toFixed(numberValue.value, precision.value);
      numberValue.value = repairDigit(numberValue.value);
    }
  });
};

// input 获取焦点
const inputGetFocus = () => {
  input.value?.inputGetFocus();
  input2.value?.inputGetFocus();
};

// input 失去焦点
const inputGetBlur = () => {
  input.value?.inputGetBlur();
  input2.value?.inputGetBlur();
};

// 热更新
watch(
  [
    () => props.disabled,
    () => props.min,
    () => props.max,
    () => props.step,
    () => props.stepStrictly,
    () => props.precision,
    () => props.controls,
    () => props.readonly,
  ],
  () => {
    isDisabled.value = props.disabled;
    min.value = props.min;
    max.value = props.max;
    step.value = props.step;
    stepStrictly.value = props.stepStrictly;
    precision.value = props.precision;
    controls.value = props.controls;
    readonly.value = props.readonly;
  },
);

watch(
  () => numberValue.value,
  (newVal, oldValue) => {
    oldVal.value = oldValue;
  },
);

watch(
  () => props.modelValue,
  (newVal) => {
    numberValue.value = newVal;
    update();
  },
);

onMounted(() => {
  update();
});

defineExpose({
  inputGetFocus,
  inputGetBlur,
});
</script>

<script lang="ts">
export default {
  name: "HInputNumber",
};
</script>
