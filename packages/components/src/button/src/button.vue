<template>
  <button class="h-button" :class="styleClass">
    <slot />
  </button>
</template>
<script setup lang="ts">
import "../style/index.less";
import { computed, defineComponent } from "vue";
import { ButtonProps } from "./button";
const props = defineProps(ButtonProps);
const styleClass = computed(() => {
  return {
    [`h-button--${props.type}`]: props.type,
    [`h-button--${props.size}`]: props.size,
    "is-plain": props.plain,
    "is-round": props.round,
    "is-disabled": props.disabled,
  };
});
</script>

<script lang="ts">
export default defineComponent({
  name: "HButton",
});
</script>
