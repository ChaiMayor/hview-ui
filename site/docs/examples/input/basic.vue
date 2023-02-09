<template>
  <h-input v-model="input" placeholder="请输入内容"></h-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
