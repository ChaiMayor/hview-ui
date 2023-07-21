<template>
  <h-table :data="params" :columns="columns" :checkbox="true"></h-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface dataType {
  id: number;
  name: string;
  number: number;
  address: string;
}
const params = ref<dataType[]>([]);
const columns = [
  {
    title: "Data",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "number",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
params.value = [
  { id: 1, name: "Tom", number: 123, address: "address" },
  { id: 2, name: "Jack", number: 43, address: "address" },
  { id: 3, name: "Ezzc", number: 133, address: "address" },
  { id: 4, name: "Ream", number: 53, address: "address" },
  { id: 5, name: "Crim", number: 131, address: "address" },
];
</script>
