<template>
  <h-time-picker
    v-model="value1"
    format="HH时mm分ss秒"
    placeholder="请选择时间"></h-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref("03:12:30");
</script>
