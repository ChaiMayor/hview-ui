<template>
  <h-time-picker
    v-model="value1"
    placeholder="请选择时间"
    @on-change="onChange"></h-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref("11:22:33");

const onChange = (val: any) => {
  console.log(val);
};
</script>
