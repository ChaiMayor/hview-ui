<template>
  <div class="icon_content">
    <div class="icon_list" v-for="(icon, index) in iconList" :key="index">
      <h-icon :name="icon"></h-icon>
      <div class="icon_name">{{ icon }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iconList } from "./data";
</script>
<style scoped>
.icon_content {
  overflow: hidden;
  border-top: 1px solid #f5f5f5;
  border-left: 1px solid #f5f5f5;
}
.icon_content .icon_list {
  float: left;
  width: 20%;
  height: 110px;
  border-right: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  padding: 20px;
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  cursor: pointer;
}

.icon_name {
  color: gray;
  font-size: 12px;
  width: 100%;
  text-align: center;
}
</style>
