<template>
  <div>
    <h-badge :value="10">
      <h-button type="default">message</h-button>
    </h-badge>
    <h-badge :value="2" type="success">
      <h-button type="default">message</h-button>
    </h-badge>
    <h-badge :value="3" type="warning">
      <h-button type="default">message</h-button>
    </h-badge>
    <h-badge :value="8" type="primary">
      <h-button type="default">message</h-button>
    </h-badge>
    <h-badge :value="4" type="info">
      <h-button type="default">message</h-button>
    </h-badge>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const number = ref<number>(66);
</script>
