<template>
  <div class="input-container">
    <h-input-number v-model="num1" size="large" />
    <h-input-number v-model="num2" class="mx-4" />
    <h-input-number v-model="num3" size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const num1 = ref(1);
const num2 = ref(2);
const num3 = ref(3);
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: baseline;
}
.input-container > * {
  margin-right: 12px;
}
</style>
