<template>
  <div class="shake">
    <h-shake v-model="isshake" @click="isshake = true">点击抖动</h-shake>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isshake = ref(false);
</script>
