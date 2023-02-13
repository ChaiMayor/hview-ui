<template>
  <p v-for="item in 20" :key="item" class="h-scrollbar-demo-item">{{ item }}</p>
</template>

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
