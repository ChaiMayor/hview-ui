<template>
  <div class="a"></div>
  <h-button type="default" @click="handerClick">Show Message</h-button>
  <h-backtop :visibilityHeight="500" :right="200" :bottom="200">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      ">
      UP
    </div>
  </h-backtop>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
const handerClick = () => {
  $message("Hello,This is a message");
};
</script>
<style scoped>
.a {
  width: 100%;
  height: 1800px;
  background-color: aqua;
}
</style>
