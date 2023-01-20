<template>
  <div class="h-radio">
    <div
      class="h-item-radio"
      v-for="(item, index) in (options as any)"
      :key="index"
      :style="inlineStyle()"
      :class="{ 'h-item-disabled-radio': item.disabled }"
    >
      <span :style="colorStyle(index)" :class="{ active: radioIndex == index }" @click="change(item, index)"></span
      >{{ item.lable }}
    </div>
  </div>
</template>

<script setup lang="ts">
import "../style/index.less";
import { ref, defineComponent } from "vue";
import { radioProps, IItem } from "./radio";

const props = defineProps(radioProps);
const emit = defineEmits(["change"]);

const radioIndex = ref(-1);
const isInline = ref("inline-flex");

const inlineStyle = () => {
  props.inline ? isInline.value : (isInline.value = "flex");
  return { display: `${isInline.value}` };
};
const colorStyle = (index: number) => {
  if (radioIndex.value == index) {
    return { backgroundColor: props.customColor };
  } else return {};
};
const change = (item: IItem, index: number): void => {
  if (!item.disabled) {
    radioIndex.value = index;
  }
  emit("change", item);
};
</script>

<script lang="ts">
export default defineComponent({
  name: "HRadio",
});
</script>

<style scoped></style>
