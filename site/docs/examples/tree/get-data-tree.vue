<template>
  <h-tree
    ref="treeRef"
    :data="list"
    node-key="id"
    show-checkbox
    default-expand-all
    style="margin-bottom: 20px">
  </h-tree>
  <br />
  <h-button type="default" plain @click="setCheckedKeys">set node</h-button>
  <h-button type="default" plain @click="getCheckedNodes">get data</h-button>
  <h-button type="default" plain @click="getCheckedKeys">get keys</h-button>
  <h-button type="default" plain @click="resetChecked">clear</h-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const treeRef = ref(null);

const list = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 10,
            label: "Level three 1-1-1",
          },
          {
            id: 11,
            label: "Level three 1-1-2",
          },
        ],
      },
      {
        id: 5,
        label: "Level two 1-2",
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 6,
        label: "Level two 2-1",
        children: [
          {
            id: 12,
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        id: 7,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 8,
        label: "Level two 3-1",
      },
      {
        id: 9,
        label: "Level two 3-2",
      },
    ],
  },
];

const setCheckedKeys = () => {
  treeRef.value.setCheckedKeys([4]);
};

const getCheckedNodes = () => {
  const nodes = treeRef.value.getCheckedNodes();
  alert(JSON.stringify(nodes));
  console.log(nodes);
};

const getCheckedKeys = () => {
  const keys = treeRef.value.getCheckedKeys();
  alert(JSON.stringify(keys));
  console.log(keys);
};

const resetChecked = () => {
  treeRef.value.setCheckedKeys([]);
};
</script>
