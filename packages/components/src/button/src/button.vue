<template>
  <button class="h-button h-button--primary h-button-text is-disabled">测试按钮{{ val }}</button>
</template>

<script lang="ts" setup>
import "../style/index.less";
import { defineComponent, ref } from "vue";
const val = ref<string>("xiaochai");
</script>

<script lang="ts">
export default defineComponent({
  name: "HButton",
});
</script>
