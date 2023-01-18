<template>
  <div class="h-form-input">
    <template v-if="type !== 'textarea'">
      <input class="h-input" :type="type" :value="text" @input="handerInput" />
    </template>
    <template v-else>
      <textarea class="h-textarea" v-bind="$attrs" :value="text" :maxlength="maxlength" @input="handerInput"></textarea>
      <span>{{ textLength }} / {{ maxlength }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import "../style/index.less";
import { InputProps } from "./input";
import { defineComponent, toRefs, ref, watchEffect, computed } from "vue";

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

const textLength = computed(() => text.value.length);
</script>

<script lang="ts">
export default defineComponent({
  name: "HInput",
});
</script>
