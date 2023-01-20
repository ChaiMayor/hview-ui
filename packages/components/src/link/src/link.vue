<template>
  <a class="h-link" v-bind="attrs" :class="styleClass">
    <slot />
  </a>
</template>
<script setup lang="ts">
import "../style/index.less";
import { computed, defineComponent, useAttrs } from "vue";
import { LinkProps } from "./link";
const props = defineProps(LinkProps);
const attrs = useAttrs();
const styleClass = computed(() => {
  return {
    [`h-link--${props.type}`]: props.type,
    "is-disabled": props.disabled,
    "is-underline": props.underline,
  };
});
</script>

<script lang="ts">
export default defineComponent({
  name: "HLink",
});
</script>
