<template>
  <h-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </h-scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px 0;
  margin-right: 10px;
  text-align: center;
  border-radius: 4px;
  background: #fef0f0;
  color: #f56c6c;
}
.scrollbar-demo-item:last-of-type {
  margin-right: 0;
}
</style>
