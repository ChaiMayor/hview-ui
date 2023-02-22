<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <span class="demonstration">default</span>
      <h-image :src="src"></h-image>
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <h-image :src="src">
        <template #placeholder>
          <div class="loading-slot">
            <h-icon name="loading"></h-icon>
          </div>
        </template>
        <template #error>
          <div class="error-slot">
            <h-icon name="image"></h-icon>
          </div>
        </template>
      </h-image>
    </div>
  </div>
</template>

<script setup lang="ts">
const src =
  "https://cube.hemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
</script>

<style scoped>
.demo-image__placeholder {
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 100%;
}
.block {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block .h-image {
  margin-top: 15px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block .h-image .loading-slot {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
