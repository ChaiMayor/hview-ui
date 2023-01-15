<template>
  <button class="h-button h-button--primary h-button-text is-disabled">测试按钮{{ val }}</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const val = ref<string>("xiaochai");
</script>

<script lang="ts">
export default {
  name: "HButton",
};
</script>

<style lang="less">
@import "./style/style.less";
</style>
