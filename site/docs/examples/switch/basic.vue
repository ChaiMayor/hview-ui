<template>
  <h-switch v-model="switchVal"></h-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal = ref(true);
</script>
