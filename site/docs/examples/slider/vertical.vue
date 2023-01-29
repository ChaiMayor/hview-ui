<template>
  <div class="slider-demo-block">
    <h-slider v-model="value" vertical :height="200" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(0);
</script>

<style scoped>
.slider-demo-block {
  display: block;
  margin: 12px 0;
}
.slider-demo-block .h-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
