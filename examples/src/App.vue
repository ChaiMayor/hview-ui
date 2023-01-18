<template>
  <div>
    <h-button type="success" :round="true">Success</h-button>
    <h-input v-model="value" placeholder="Please input"></h-input>
    {{ value }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const value = ref();
</script>
