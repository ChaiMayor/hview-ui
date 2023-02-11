<template>
  <h-time-picker
    v-model="value1"
    disabled
    placeholder="请选择时间"></h-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref("00:00:00");
</script>
