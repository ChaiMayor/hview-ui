<template>
  <div class="h-radio">
    <div
      class="h-item-radio"
      v-for="(item, index) in options"
      :key="index"
      :style="inlineStyle()"
      @click="change(item, item.id)"
      :class="[
        { active: radioIndex === String(item.id) },
        { 'h-item-disabled-radio': item.disabled },
        // { 'h-item-radio-custom': props.customColor },
      ]">
      <span :class="['h-radio-item-button']"></span>
      <span class="h-radio-item-label">
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../style/index.less";
import { ref } from "vue";
import { RadioProps, OptionsItem } from "./radio";

const props = defineProps(RadioProps);
const emit = defineEmits(["change"]);

const radioIndex = ref(props.modelValue);
const isInline = ref("inline-flex");

const inlineStyle = () => {
  props.inline ? isInline.value : (isInline.value = "flex");
  return { display: `${isInline.value}` };
};

// const colorStyleButton = (id: number) => {
//   return (
//     props.customColor &&
//     radioIndex.value === String(id) && {
//       backgroundColor: props.customColor,
//       borderColor: props.customColor,
//       color: props.customColor,
//     }
//   );
// };

// const colorStyleLabel = (id: number) => {
//   return (
//     props.customColor &&
//     radioIndex.value === String(id) && {
//       color: props.customColor,
//     }
//   );
// };

const change = (item: OptionsItem, index: number): void => {
  if (!item.disabled) {
    radioIndex.value = String(index);
  }
  emit("change", item);
};
</script>

<script lang="ts">
export default {
  name: "HRadio",
};
</script>

<style scoped></style>
