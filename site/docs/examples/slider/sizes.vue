<template>
  <div class="slider-container">
    <h-slider v-model="value" show-input input-size="large" />
    <h-slider v-model="value" show-input />
    <h-slider v-model="value" show-input input-size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(0);
</script>

<style scoped>
.el-slider {
  margin-top: 20px;
}

.el-slider:first-child {
  margin-top: 0;
}
</style>
<style scoped>
.slider-container {
  display: flex;
  flex-direction: column;
}

.slider-container > * {
  margin-bottom: 20px;
}

.slider-container > .h-slider:last-of-type {
  margin-bottom: 0;
}
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
