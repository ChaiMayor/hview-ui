<template>
  <div class="slider-demo-block">
    <h-slider v-model="value1" />
  </div>
  <div class="slider-demo-block">
    <h-slider v-model="value2" placement="bottom" />
  </div>
  <div class="slider-demo-block">
    <h-slider v-model="value3" placement="right" />
  </div>
  <div class="slider-demo-block">
    <h-slider v-model="value4" placement="left" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
</script>

<style scoped>
.slider-demo-block {
  display: block;
  margin-bottom: 36px;
}
.slider-demo-block .h-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block:first-of-type {
  margin-top: 16px;
}
.slider-demo-block:last-of-type {
  margin-bottom: 16px;
}
</style>
