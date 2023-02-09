<template>
  <h-tree
    :data="list"
    node-key="id"
    show-checkbox
    :default-expanded-keys="[1, 2, 6]"
    :default-checked-keys="[2]">
  </h-tree>
</template>

<script setup lang="ts">
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
    disabled: true,
    children: [
      {
        id: 6,
        label: "Level two 2-1",
        disabled: true,
        children: [
          {
            id: 12,
            label: "Level three 2-1-1",
            disabled: true,
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
</script>
