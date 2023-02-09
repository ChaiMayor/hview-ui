<template>
  <div class="radio-container">
    <h-radio v-model="value1" :options="options1"></h-radio>
    <h-radio v-model="value2" :options="options2"></h-radio>
    <h-radio v-model="value3" :options="options3"></h-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface OptionsItem {
  label: string;
  id: number;
  disabled?: boolean;
}

const value1 = ref<string>("1");
const value2 = ref<string>("1");
const value3 = ref<string>("2");

const options1 = ref<OptionsItem[]>([
  {
    label: "Option 1",
    id: 1,
  },
  {
    label: "Option 2",
    id: 2,
  },
]);

const options2 = ref<OptionsItem[]>([
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
    disabled: true,
  },
]);

const options3 = ref<OptionsItem[]>([
  {
    label: "Option 1",
    id: 1,
    disabled: true,
  },
  {
    label: "Option 2",
    id: 2,
    disabled: true,
  },
  {
    label: "Option 3",
    id: 3,
    disabled: true,
  },
]);
</script>

<style>
.radio-container > div {
  margin-bottom: 24px;
}
.radio-container > div:last-of-type {
  margin-bottom: 0;
}
</style>
