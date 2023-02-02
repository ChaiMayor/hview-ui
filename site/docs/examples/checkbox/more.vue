<template>
  <h-checkbox-group v-model="checkList1" @change="checkChange">
    <h-checkbox label="复选框 A"></h-checkbox>
    <h-checkbox label="复选框 B"></h-checkbox>
    <h-checkbox label="复选框 C"></h-checkbox>
    <h-checkbox label="复选框 D" disabled></h-checkbox>
    <h-checkbox label="复选框 E" disabled></h-checkbox>
  </h-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkList1 = ref(["复选框 A", "复选框 E"]);

const checkChange = (e: boolean) => {
  console.log(e);
};
</script>
