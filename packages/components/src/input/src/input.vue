<template>
  <div class="h-form-input">
    <input class="h-input" :type="type" :value="text" @input="handerInput" />
  </div>
</template>

<script setup lang="ts">
import "../style/index.less";
import { InputProps } from "./input";
import { defineComponent, toRefs, ref, watchEffect } from "vue";

const props = defineProps(InputProps);
const emit = defineEmits(["update:modelValue"]);
const { modelValue } = toRefs(props);
const text = ref();

watchEffect(() => {
  // text.value = modelValue!.value,
  text.value = modelValue! ? modelValue.value : "";
});

const handerInput = (e: any) => {
  text.value = e ? e.target.value : "";
  emit("update:modelValue", text.value);
};
</script>

<script lang="ts">
export default defineComponent({
  name: "HInput",
});
</script>
