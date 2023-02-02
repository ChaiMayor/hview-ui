<template>
  <h-checkbox v-model="checked" @change="checkChange">备选项</h-checkbox>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(true);

const checkChange = (e: boolean) => {
  console.log(e);
};
</script>
