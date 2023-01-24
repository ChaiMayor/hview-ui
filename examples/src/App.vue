<template>
  <div>
    <h-carousel height="300px" indicator-type="rect" trigger="click" indicator-position="outside">
      <h-carousel-item>
        <div class="item">123</div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">456</div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">789</div>
      </h-carousel-item>
    </h-carousel>
  </div>
</template>
<script lang="ts" setup>
import "./base.less";
</script>
<style scoped>
.item {
  width: 100%;
  height: 100%;
  background-color: #bfa;
}
.container {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 600px;
}

.container .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container .center {
  justify-content: center;
}

.container .box-item {
  margin: 10px;
}
</style>
