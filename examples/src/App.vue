<template>
  <h-input-number v-model="num" ref="inp" class="mx-4" :min="1" :max="10" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const num = ref(1);
const inp = ref<any>(null);
const handleChange = (value: number) => {
  console.log(value);
};
</script>
