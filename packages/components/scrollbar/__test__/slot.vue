<template>
  <p v-for="item in arr" :key="item" class="h-scrollbar-demo-item">{{
    item
  }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const arr = ref<number[]>(Array.from({ length: 20 }, (_, i) => 1 + i));

// setTimeout(() => {
//   arr.value = Array.from({ length: 30 }, (_, i) => 1 + i);
// }, 100);
</script>

<style lang="less" scoped>
p.h-scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 10px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
