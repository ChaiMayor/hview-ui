<template>
  <div style="display: flex; margin-bottom: 12px">
    <h-button @click="add" style="margin-right: 12px">Add Item</h-button>
    <h-button @click="onDelete">Delete Item</h-button>
  </div>
  <h-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </h-scrollbar>
</template>

<script setup>
import { ref } from "vue";
const count = ref(3);

const add = () => {
  count.value++;
};
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 10px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
.scrollbar-demo-item:last-of-type {
  margin-bottom: 0;
}
</style>
