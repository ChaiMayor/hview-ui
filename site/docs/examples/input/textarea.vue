<template>
  <h-input
    placeholder="请输入"
    v-model="input"
    type="textarea"
    rows="7"
    cols="40"
    :maxlength="40" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
