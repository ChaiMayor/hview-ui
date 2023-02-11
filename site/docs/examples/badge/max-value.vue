<template>
  <div>
    <h-badge :value="number">
      <h-button type="default">message</h-button>
    </h-badge>
    <h-badge :value="number" :max="200">
      <h-button type="default">message</h-button>
    </h-badge>
    <h-badge :value="string">
      <h-button type="default">message</h-button>
    </h-badge>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const number = ref<number>(100);
const string = ref<string>("666");
</script>
