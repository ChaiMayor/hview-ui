<template>
  <h-table :data="params" :columns="columns" :tag="true"></h-table>
</template>
<script setup lang="ts">
import { Ref } from "vue";
interface dataType {
  id: number;
  name: string;
  tags: tagType[];
  address: string;
  checked?: Ref<boolean>;
}
interface tagType {
  name: string;
  type: string;
  size?: string;
  round?: boolean;
}
const columns = [
  {
    title: "Data",
    dataIndex: "id",
    sorter: {
      Compare: (a: dataType, b: dataType) => a.id - b.id,
    },
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
const tag1: tagType[] = [
  { name: "Tag1", type: "", round: true },
  { name: "Tag2", type: "success", size: "mini" },
];
const tag2: tagType[] = [{ name: "Tag2", type: "success" }];
const params = [
  { id: 1, name: "Tom", tags: tag1, address: "No. 189, Grove St, Los Angeles" },
  { id: 3, name: "Tom", tags: tag1, address: "No. 189, Grove St, Los Angeles" },
  { id: 4, name: "Tom", tags: tag1, address: "No. 189, Grove St, Los Angeles" },
  { id: 2, name: "Tom", tags: tag2, address: "No. 189, Grove St, Los Angeles" },
];
</script>
