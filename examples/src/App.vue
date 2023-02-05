<template>
  <h-button type="default" @click="handerClick">Show Message</h-button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
const handerClick = () => {
  $message("Hello,This is a message");
};
</script>
