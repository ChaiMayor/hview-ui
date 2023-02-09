<template>
  <div class="demo">
    <h-carousel class="carousel">
      <h-carousel-item>
        <div class="item">
          <div class="text"> 1 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 2 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 3 </div>
        </div>
      </h-carousel-item>
    </h-carousel>
    <h-carousel
      class="carousel"
      indicator-position="outside"
      indicator-type="rect">
      <h-carousel-item>
        <div class="item">
          <div class="text"> 1 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 2 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 3 </div>
        </div>
      </h-carousel-item>
    </h-carousel>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #99a9bf;
}
.item .text {
  margin: auto;
  font-weight: bold;
  font-size: 30px;
}
.carousel {
  margin-top: 10px;
}
</style>
