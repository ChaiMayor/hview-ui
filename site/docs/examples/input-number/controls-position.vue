<template>
  <div class="input-container">
    <h-input-number
      v-model="num"
      :min="1"
      :max="10"
      controls-position="right"
      size="large"
      @change="handleChange" />
    <h-input-number
      v-model="num"
      class="mx-4"
      :min="1"
      :max="10"
      controls-position="right"
      @change="handleChange" />
    <h-input-number
      v-model="num"
      :min="1"
      :max="10"
      size="small"
      controls-position="right"
      @change="handleChange" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const num = ref(1);
const handleChange = (value: number) => {
  console.log(value);
};
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: baseline;
}
.input-container > * {
  margin-right: 12px;
}
</style>
