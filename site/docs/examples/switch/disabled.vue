<template>
  <h-switch v-model="switchVal1" disabled></h-switch>
  <br />
  <h-switch v-model="switchVal2" disabled></h-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal1 = ref(true);
const switchVal2 = ref(false);
</script>
