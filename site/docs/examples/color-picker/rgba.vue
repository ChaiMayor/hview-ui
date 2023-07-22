<template>
  <h-color-picker v-model="value" RGB></h-color-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>
