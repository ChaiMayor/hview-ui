<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
});

const decoded = computed(() => {
  return decodeURIComponent(props.source);
});
</script>

<template>
  <div class="example-source-wrapper">
    <div class="example-source" v-html="decoded" />
  </div>
</template>

<style scoped lang="less">
.example-source {
  overflow-x: scroll;
  position: relative;
  color: var(--code-color);
  background-color: var(--vp-code-block-bg) !important;
  padding: 1em;
  padding-top: 1.2em;
  font-size: 14px;
}
</style>
