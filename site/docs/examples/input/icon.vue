<template>
  <div>
    <h-input v-model="input" placeholder="请输入" type="text" iconBefore="user"></h-input>
    <br />
    <h-input v-model="input" placeholder="请输入" type="text" iconAfter="calendar"></h-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
