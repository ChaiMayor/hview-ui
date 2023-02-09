<template>
  <h-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="h-scrollbar-demo-item">{{
      item
    }}</p>
  </h-scrollbar>
</template>

<style scoped>
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
}
p.h-scrollbar-demo-item:last-of-type {
  margin-bottom: 0;
}
</style>
