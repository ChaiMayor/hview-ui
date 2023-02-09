<template>
  <div>
    <h-checkbox v-model="checked1" border>Option1</h-checkbox>
    <h-checkbox v-model="checked2" border>Option2</h-checkbox>
  </div>
  <div style="margin-top: 20px">
    <h-checkbox-group v-model="checkboxGroup1">
      <h-checkbox label="Option1" border></h-checkbox>
      <h-checkbox label="Option2" border disabled></h-checkbox>
    </h-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <h-checkbox-group v-model="checkboxGroup2" disabled>
      <h-checkbox label="Option1" border></h-checkbox>
      <h-checkbox label="Option2" border></h-checkbox>
    </h-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked1 = ref(true);
const checked2 = ref(false);
const checkboxGroup1 = ref(["Option1"]);
const checkboxGroup2 = ref([]);
</script>
