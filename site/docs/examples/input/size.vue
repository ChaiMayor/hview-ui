<template>
  <h-input
    placeholder="请输入内容"
    type="text"
    size="large"
    v-model="input1"></h-input>
  <br />
  <h-input placeholder="请输入内容" type="text" v-model="input2"></h-input>
  <br />
  <h-input
    placeholder="请输入内容"
    type="text"
    size="small"
    v-model="input3"></h-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
</script>
