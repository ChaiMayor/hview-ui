<template>
  <div class="radio-container">
    <h-radio v-model="value" :options="options" :inline="false"></h-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface OptionsItem {
  label: string;
  id: number;
  disabled?: boolean;
}

const value = ref<string>("1");

const options = ref<OptionsItem[]>([
  {
    label: "Option 1",
    id: 1,
  },
  {
    label: "Option 2",
    id: 2,
  },
  {
    label: "Option 3",
    id: 3,
  },
]);
</script>

<style>
.radio-container .h-item-radio {
  margin-bottom: 12px;
}
.radio-container .h-item-radio:last-of-type {
  margin-bottom: 0;
}
</style>
