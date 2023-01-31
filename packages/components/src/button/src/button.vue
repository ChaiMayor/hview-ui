<template>
  <button class="h-button" :class="styleClass">
    <span class="">
      <h-icon v-if="!icon" :name="icon"></h-icon>
    </span>
    <slot />
  </button>
</template>
<script setup lang="ts">
import "../style/index.less";
import { computed, toRefs } from "vue";
import { ButtonProps } from "./button";
const props = defineProps(ButtonProps);
const { icon } = toRefs(props);
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
export default {
  name: "HButton",
};
</script>
