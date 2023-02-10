<template>
  <h-switch v-model="switchVal1" active-text="启用" inactive-text="停用">
  </h-switch>
  <h-switch
    v-model="switchVal2"
    active-text="启用"
    inactive-text="停用"
    active-color="#13ce66"
    inactive-color="#ff4949"
    style="display: block; margin-top: 10px">
  </h-switch>
  <h-switch
    v-model="switchVal3"
    inline-prompt
    active-text="开"
    inactive-text="关"
    style="display: block; margin-top: 10px">
  </h-switch>
  <h-switch
    v-model="switchVal4"
    inline-prompt
    active-text="开"
    inactive-text="关"
    active-color="#13ce66"
    inactive-color="#ff4949"
    style="display: block; margin-top: 10px">
  </h-switch>
  <h-switch
    v-model="switchVal3"
    inline-prompt
    active-text="Y"
    inactive-text="N"
    style="display: block; margin-top: 10px">
  </h-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal1 = ref(true);
const switchVal2 = ref(true);
const switchVal3 = ref(true);
const switchVal4 = ref(true);
</script>
