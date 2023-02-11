<script setup>
import App from "./App.vue";
import { installHviewUI } from "./hview-plus.js";

if (installHviewUI) {
  installHviewUI();
}
</script>

<template>
  <App />
</template>
