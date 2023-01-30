<template>
  <div class="container">
    <div class="con">
      <h-progress :percentage="10" :indeterminate="true" :duration="1" />
      <h-progress :percentage="10"> 进度 </h-progress>
      <h-progress :percentage="10" strokeWidth="26" :text-inside="true"> 进度 </h-progress>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="less" scoped>
.container {
  display: flex;
  .con {
    margin: 2px auto;
    display: block;
    width: 50%;
  }
}
</style>
