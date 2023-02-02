<template>
  <header class="h-header" :style="style">
    <slot />
  </header>
</template>
<script lang="ts" setup>
import "../style/index.less";
import { computed } from "vue";
import { HeaderProps } from "./container";

const props = defineProps(HeaderProps);
const style = computed(() => {
  return {
    height: props.height,
  };
});
</script>

<script lang="ts">
export default {
  name: "HHeader",
};
</script>
