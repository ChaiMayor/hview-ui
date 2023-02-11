<template>
  <h-time-picker
    type="timerange"
    v-model="value1"
    placeholder="请选择时间范围"></h-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(["00:11:22", "23:44:55"]);
</script>
