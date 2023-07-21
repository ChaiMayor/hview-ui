<template>
  <h-table :data="params" :columns="columns" :tag="true"></h-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface dataType {
  id: number;
  name: string;
  number: number;
  tags: { name: string; type: string }[];
}
const params = ref<dataType[]>([]);
const tag1 = [
  { name: "Tag1", type: "" },
  { name: "Tag2", type: "success" },
];
const tag2 = [{ name: "Tag1", type: "" }];

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
    title: "Tags",
    dataIndex: "tags",
  },
  {
    title: "Number",
    dataIndex: "number",
  },
];
params.value = [
  { id: 1, name: "Tom", tags: tag2, number: 123 },
  { id: 2, name: "Jack", tags: tag2, number: 43 },
  { id: 3, name: "Ezzc", tags: tag1, number: 133 },
  { id: 4, name: "Ream", tags: tag2, number: 53 },
  { id: 5, name: "Crim", tags: tag1, number: 131 },
];
</script>
