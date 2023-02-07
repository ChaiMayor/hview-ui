<template>
  <div class="slider-demo-block">
    <h-slider v-model="value" range :marks="marks" showStops />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { CSSProperties } from "vue";

interface Mark {
  style: CSSProperties;
  label: string;
}

type Marks = Record<number, Mark | string>;

const value = ref([30, 60]);
const marks = reactive<Marks>({
  0: "0°C",
  8: "8°C",
  37: "37°C",
  50: {
    style: {
      color: "#5d80f4",
    },
    label: "50%",
  },
});
</script>

<style scoped>
.slider-demo-block {
  display: block;
  margin: 14px 0;
}
.slider-demo-block .h-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
