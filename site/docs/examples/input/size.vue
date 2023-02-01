<template>
  <h-input placeholder="请输入内容" type="text" size="large" v-model="input"></h-input>
  <br />
  <h-input placeholder="请输入内容" type="text" v-model="input"></h-input>
  <br />
  <h-input placeholder="请输入内容" type="text" size="small" v-model="input"></h-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
