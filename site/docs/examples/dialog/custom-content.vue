<template>
  <h-button @click="openModal">open dialog</h-button>
  <h-dialog v-model="dialogShow" title=" Show treeList">
    <template #content>
      <h-tree :data="list"></h-tree>
    </template>
  </h-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const list = [
  {
    label: "Level one 1",
    children: [
      {
        label: "Level two 1-1",
        children: [
          {
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        label: "Level two 2-2",
      },
    ],
  },
  {
    label: "Level one 3",
    children: [
      {
        label: "Level two 3-1",
        children: [
          {
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        label: "Level two 3-2",
        children: [
          {
            label: "Level three 3-2-1",
          },
        ],
      },
    ],
  },
];
const dialogShow = ref(false);
const openModal = () => {
  dialogShow.value = true;
};
</script>
<style scoped></style>
