<template>
  <h-button type="default" @click="handerClick">Use HTML String</h-button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
const handerClick = () => {
  $message({
    type: "success",
    message: "<strong>This is HTML string</strong>",
    dangerouslyUseHTMLString: true,
  });
};
</script>
