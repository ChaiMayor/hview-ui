<template>
  <div>
    <h-switch
      v-model="switchVal"
      size="large"
      active-text="启用"
      inactive-text="停用">
    </h-switch>
    <h-switch
      v-model="switchVal"
      inline-prompt
      active-text="开"
      inactive-text="关"
      size="large"
      style="display: inline-block; margin: 12px">
    </h-switch>
  </div>
  <div>
    <h-switch
      v-model="switchVal"
      active-text="启用"
      inactive-text="停用"
      style="display: inline-block; margin-top: 10px">
    </h-switch>
    <h-switch
      v-model="switchVal"
      inline-prompt
      active-text="开"
      inactive-text="关"
      style="display: inline-block; margin: 12px">
    </h-switch>
  </div>
  <div>
    <h-switch
      v-model="switchVal"
      size="small"
      active-text="启用"
      inactive-text="停用"
      style="display: inline-block; margin-top: 10px">
    </h-switch>
    <h-switch
      v-model="switchVal"
      inline-prompt
      active-text="开"
      inactive-text="关"
      size="small"
      style="display: inline-block; margin: 12px">
    </h-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal = ref(true);
</script>
