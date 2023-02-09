<template>
  <h-tree :data="list" label="name" children="children" show-checkbox></h-tree>
</template>

<script setup lang="ts">
const list = [
  {
    name: "Level one 1",
    children: [
      {
        name: "Level two 1-1",
        children: [
          {
            name: "Level three 1-1-1",
          },
          {
            name: "Level three 1-1-2",
          },
        ],
      },
      {
        name: "Level two 1-2",
      },
    ],
  },
  {
    name: "Level one 2",
    children: [
      {
        name: "Level two 2-1",
        children: [
          {
            name: "Level three 2-1-1",
          },
        ],
      },
      {
        name: "Level two 2-2",
      },
    ],
  },
  {
    name: "Level one 3",
    children: [
      {
        name: "Level two 3-1",
      },
      {
        name: "Level two 3-2",
      },
    ],
  },
];
</script>
