<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <h-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
const fits = ["fill", "contain", "cover", "none", "scale-down"];
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<style scoped>
.demo-image {
  display: flex;
  justify-content: space-around;
}
.demo-image .block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}
</style>
