<template>
  <router-view></router-view>
  <h-breadcrumb>
    <h-breadcrumb-item to="/about">homepage</h-breadcrumb-item>
    <h-breadcrumb-item>promotion management</h-breadcrumb-item>
    <h-breadcrumb-item>promotion list</h-breadcrumb-item>
    <h-breadcrumb-item>promotion detail</h-breadcrumb-item>
  </h-breadcrumb>
  <h-breadcrumb separator="*">
    <h-breadcrumb-item :to="{ path: '/' }">homepage</h-breadcrumb-item>
    <h-breadcrumb-item><a href="/">promotion management</a></h-breadcrumb-item>
    <h-breadcrumb-item>promotion list</h-breadcrumb-item>
    <h-breadcrumb-item>promotion detail</h-breadcrumb-item>
  </h-breadcrumb>
  <br />
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
