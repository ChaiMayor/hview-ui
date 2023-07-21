<template>
  <h-table
    :data="params"
    :columns="columns"
    :tag="true"
    :virtualTable="virtualTable"></h-table>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
interface dataType {
  id: number;
  name: string;
  tags: { name: string; type: string }[];
  address: string;
}
const virtualTable = reactive({
  itemSize: 50,
  tableHeight: 500,
  isVritual: true,
});

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
    tag: true,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const tag1 = [
  { name: "Tag1", type: "" },
  { name: "Tag2", type: "success" },
];

const params = ref<dataType[]>([]);

for (let i = 0; i < 10000; i++) {
  params.value.push({
    id: i,
    name: "Tom Eason",
    tags: tag1,
    address: "China",
  });
}
</script>
