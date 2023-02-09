<template>
  <div
    class="h-from-input"
    :class="{
      'h-input-icon-before': iconBefore && iconBefore !== '',
      'h-input-icon-after': (iconAfter && iconAfter !== '') || clearable,
    }">
    <template v-if="type !== 'textarea'">
      <input
        class="h-input"
        v-bind="$attrs"
        :type="type"
        :value="text"
        :class="size"
        ref="input"
        @input.stop="handerInput"
        @blur.stop="handlerBlur"
        @focus.stop="handlerFocus" />
      <i
        class="h-after"
        :class="`h-icon-${iconAfter}`"
        v-if="iconAfter && iconAfter !== ''"></i>
      <i
        class="h-before"
        :class="`h-icon-${iconBefore}`"
        v-if="iconBefore && iconBefore !== ''"></i>
      <transition name="fade">
        <span
          class="h-icon-h"
          v-if="clearable && textLength > 0"
          @click.stop="handerInput"></span>
      </transition>
    </template>
    <template v-else>
      <textarea
        class="h-textarea"
        v-bind="$attrs"
        :value="text"
        :maxlength="maxlength"
        @input="handerInput">
      </textarea>
      <span class="h-textarea-maxlength">{{ textLength }}/{{ maxlength }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { InputProps } from "./input";
import { toRefs, ref, watchEffect, computed } from "vue";

const props = defineProps(InputProps);
const emit = defineEmits(["update:modelValue", "change", "blur", "focus"]);
const { modelValue } = toRefs(props);
const text = ref();
const size = computed(() => {
  return {
    [`h-input-${props.size}`]: props.size,
  };
});
const input = ref<any>(null);

watchEffect(() => {
  // text.value = modelValue!.value,
  text.value = modelValue! ? modelValue.value : "";
});

const handerInput = (e: any) => {
  text.value = e ? e.target.value : "";
  emit("update:modelValue", Number(text.value));
  emit("change", Number(text.value));
};

const handlerBlur = (e: any) => {
  emit("blur", e);
};

const handlerFocus = (e: any) => {
  emit("focus", e);
};

const inputGetFocus = () => {
  input.value.focus();
};

const inputGetBlur = () => {
  input.value.blur();
};

const textLength = computed(() => {
  return text.value === undefined ? 0 : text.value.length;
});

defineExpose({
  inputGetFocus,
  inputGetBlur,
});
</script>

<script lang="ts">
export default {
  name: "HInput",
};
</script>
