<template>
  <h-checkbox-group v-model="checkList1" @change="checkChange">
    <h-checkbox label="复选框 A" style="margin-right: 10px"></h-checkbox>
    <h-checkbox label="复选框 B" style="margin-right: 10px"></h-checkbox>
    <h-checkbox label="复选框 C" style="margin-right: 10px"></h-checkbox>
    <h-checkbox
      label="复选框 D"
      style="margin-right: 10px"
      disabled></h-checkbox>
    <h-checkbox
      label="复选框 E"
      style="margin-right: 10px"
      disabled></h-checkbox>
  </h-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkList1 = ref(["复选框 A", "复选框 E"]);

const checkChange = (e: boolean) => {
  console.log(e);
};
</script>
