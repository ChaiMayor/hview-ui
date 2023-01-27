<template>
  <div class="container">
    <div class="con">
      <h-tag closable theme="dark" size="small" round @click="clickT">primary</h-tag>
      <h-tag closable theme="dark" size="small" type="success" round @close="closeT">primary</h-tag>
      <h-tag closable theme="dark" size="small" type="info" round>primary</h-tag>
      <h-tag closable theme="dark" size="small" type="warning" round>primary</h-tag>
      <h-tag closable theme="dark" size="small" type="danger" round>primary</h-tag>
    </div>
    <div class="con">
      <h-tag closable theme="dark">primary</h-tag>
      <h-tag closable theme="dark" type="success">primary</h-tag>
      <h-tag closable theme="dark" type="info">primary</h-tag>
      <h-tag closable theme="dark" type="warning">primary</h-tag>
      <h-tag closable theme="dark" type="danger">primary</h-tag>
    </div>
    <div class="con">
      <h-tag closable theme="plain" size="large">primary</h-tag>
      <h-tag closable theme="plain" size="large" type="success">primary</h-tag>
      <h-tag closable theme="plain" size="large" type="info">primary</h-tag>
      <h-tag closable theme="plain" size="large" type="warning">primary</h-tag>
      <h-tag closable theme="plain" size="large" type="danger">primary</h-tag>
    </div>
  </div>
</template>
<script lang="ts" setup>
const clickT = () => {
  console.log("点击");
};
const closeT = () => {
  console.log("关闭");
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  .con {
    margin: 2px auto;
    display: block;
  }
}
</style>
