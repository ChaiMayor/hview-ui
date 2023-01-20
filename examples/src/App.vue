<template>
  <div>
    <h-tooltip  content="这是文字提示" placement="right">
      <h-button type="default" plain>right</h-button>
    </h-tooltip>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import "./base.less";
const value = ref();
</script>
