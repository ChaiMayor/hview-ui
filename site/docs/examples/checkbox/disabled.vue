<template>
  <h-checkbox v-model="checked1" style="margin-right: 10px" disabled
    >备选项</h-checkbox
  >
  <h-checkbox v-model="checked2" style="margin-right: 10px" disabled
    >备选项</h-checkbox
  >
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
</script>
