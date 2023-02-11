<template>
  <div class="h-time-picker-rel" v-inside>
    <div
      class="h-time-picker"
      :class="selectInputClass"
      @mouseenter="inputHovering = true"
      @mouseleave="inputHovering = false">
      <span class="h-input__prefix">
        <i class="h-timepick__icon h-icon-time"></i>
      </span>
      <input
        type="text"
        class="h-input__inner"
        :value="inputText"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly" />
      <span class="h-input__suffix" @click="handleClear" v-if="showClose">
        <i class="h-timepick__icon h-icon-close"></i>
      </span>
    </div>
    <transition name="slide-fade">
      <div
        class="h-time-panel"
        :class="{
          'is-range': isRange,
          'is-confirm': confirm,
        }"
        v-if="isShow"
        @click.stop>
        <div class="h-time-panel-body">
          <timeSpinner
            ref="startPicker"
            :title="isRange ? '开始时间' : undefined"
            :hours="startValue && startValue[0]"
            :minutes="startValue && startValue[1]"
            :seconds="startValue && startValue[2]"
            @item-click="
              (type, item, scroll) =>
                handlePickerClick('start', type, item, scroll)
            ">
          </timeSpinner>
          <timeSpinner
            class="end-picker-time"
            v-if="isRange"
            ref="endPicker"
            :title="isRange ? '结束时间' : undefined"
            :hours="endValue && endValue[0]"
            :minutes="endValue && endValue[1]"
            :seconds="endValue && endValue[2]"
            @item-click="
              (type, item, scroll) =>
                handlePickerClick('end', type, item, scroll)
            ">
          </timeSpinner>
        </div>
        <div class="h-time-panel__footer" v-if="confirm">
          <button class="h-time-panel__btn" @click="handleClear">清空</button>
          <button class="h-time-panel__btn btn__confirm" @click="handleConfirm"
            >确定</button
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import timeSpinner from "./time-spinner.vue";
import { computed, nextTick, reactive, ref, toRefs, watch } from "vue";
import {
  deepCopy,
  isString,
  withinNum,
  formatOutputValue,
  compareArrJoined,
} from "@hview-plus/utils";
const emits = defineEmits(["on-change", "on-confirm", "on-clear"]);
const props = defineProps({
  modelValue: [String, Array],
  placeholder: {
    type: String,
    default: "请选择",
  },
  // 类型，单时间和时间范围选择
  type: {
    type: String,
    default: "time",
    validator: (val: string) => ["time", "timerange"].includes(val),
  },
  // 展示的时间格式
  format: {
    type: String,
    default: "HH:mm:ss",
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  confirm: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // 选择范围时的分隔符
  separator: {
    type: String,
    default: " - ",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const inputHovering = ref(false);
const isShow = ref(false);
const startPicker = ref<any>(null);
const endPicker = ref<any>(null);

type stateType = {
  inputText: string;
  startValue: Array<number> | undefined;
  endValue: Array<number> | undefined;
};
const state = reactive<stateType>({
  inputText: "",
  startValue: undefined,
  endValue: undefined,
});

const selectInputClass = computed(() => {
  return {
    "h-time-picker-disabled": props.disabled,
  };
});

const showClose = computed(() => {
  return props.clearable && state.inputText && inputHovering.value;
});

// 是否选择时间范围
const isRange = computed(() => props.type === "timerange");

watch(
  () => props.modelValue,
  (newVal) => {
    nextTick(() => {
      updateCurrentValue(newVal);
    });
  },
  { immediate: true, deep: true },
);

watch(
  () => state.startValue,
  (val) => {
    nextTick(() => {
      calcInputText();
    });
  },
  { immediate: true },
);

watch(
  () => state.endValue,
  (val) => {
    nextTick(() => {
      calcInputText();
    });
  },
  { immediate: true },
);

const vInside = {
  beforeMount(el: any) {
    el.handler = (e: any) => {
      if (props.disabled || props.readonly) return;
      if (el.contains(e.target)) {
        isShow.value = true;
        initEvent();
      } else {
        isShow.value = false;
      }
    };
    if (typeof document !== "undefined") {
      document.addEventListener("click", el.handler);
    }
  },
  unmounted(el: any) {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", el.handler);
    }
  },
};

const handlePickerClick = (type: string, ...arg: any) => {
  const RowColIdx = arg[0] === "hour" ? 0 : arg[0] === "minute" ? 1 : 2;

  let emitVal = null;
  let startVal = null;
  let endVal = null;
  // 点击开始时间项
  if (type === "start") {
    const start = fill(deepCopy(state.startValue));
    start[RowColIdx] = arg[1].text;
    const startVal = getValue(start);
    if (isRange.value) {
      // 当切换开始值大于结束值时，结束值自动取开始值
      if (compareArrJoined(start, state.endValue)) {
        const endVal = deepCopy(startVal);
        emitVal = [startVal, endVal];
        nextTick(() => endPicker.value!.resetScroll(start));
      } else {
        emitVal = [startVal, getValue(state.endValue)];
      }
    } else {
      emitVal = startVal;
    }
  }
  // 点击结束时间项
  if (type === "end") {
    const start = fill(deepCopy(state.startValue));
    const end = fill(deepCopy(state.endValue));
    end[RowColIdx] = arg[1].text;
    // 结束时间项不能比开始时间小
    if (compareArrJoined(start, end)) return;
    emitVal = [getValue(start), getValue(end)];
  }

  updateCurrentValue(emitVal);
  arg[2]();
  emits("on-change", emitVal);
};

const fill = (arr: any) => {
  for (let i = 0; i < 3; i++) {
    arr[i] = arr[i] || 0;
  }
  return arr;
};

const getValue = (val: any) => {
  return formatOutputValue(val, props.format);
};

// 初始化事件
const initEvent = () => {
  nextTick(() => {
    if (startPicker.value) {
      startPicker.value.resetScroll(state.startValue);
    }
    if (endPicker.value) {
      endPicker.value.resetScroll(state.endValue);
    }
  });
};

// 计算inputText的值
const calcInputText = () => {
  const startText = formatOutputValue(state.startValue, props.format);
  if (!isRange.value) {
    state.inputText = startText;
    return;
  }
  const endText = formatOutputValue(state.endValue, props.format);
  state.inputText =
    !startText && !endText ? "" : `${startText}${props.separator}${endText}`;
};

// 更新startValue和endValue值
const updateCurrentValue = (newVal: any) => {
  if (isRange.value) {
    // 时间范围选择
    state.startValue = getCorrectTime(newVal[0]);
    state.endValue = getCorrectTime(newVal[1]);
  } else {
    // 单个时间选择
    state.startValue = getCorrectTime(newVal);
  }
};

// 获取正确的时间
const getCorrectTime = (val: any) => {
  if (!val) return [];
  // 当传递的为字符串时
  if (isString(val)) {
    return pickNumberInString(val).slice(0, 3);
  }
};

// 提取字符串中的数字
const pickNumberInString = (str: string) => {
  const timeString = str.replace(/[^\d]+/g, () => ",");
  return (
    timeString
      .split(",")
      .filter((e) => e !== "")
      // 去掉开头的0, 且值控制在合法区域内
      .map((e, i) => withinNum(parseInt(e, 10), 0, i === 0 ? 23 : 59))
  );
};

// 清空
const handleClear = (event: any) => {
  if (props.disabled) return;
  event.stopPropagation();
  isShow.value = false;
  state.inputText = "";
  state.startValue = [];
  state.endValue = [];
  emits("on-clear");
};

const handleConfirm = () => {
  isShow.value = false;
  const emitVal = getEmitValue();
  emits("on-confirm", emitVal);
};

// 触发emit事件应该派发的值
const getEmitValue = () => {
  return isRange.value
    ? [getValue(state.startValue), getValue(state.endValue)]
    : getValue(state.startValue);
};

const { inputText, startValue, endValue } = toRefs(state);
</script>

<script lang="ts">
export default {
  name: "HTimePicker",
};
</script>
