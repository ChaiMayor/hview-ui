<template>
  <h-tree
    :data="list"
    node-key="id"
    show-checkbox
    default-expand-all
    :render-content="renderContent">
  </h-tree>
</template>

<script setup lang="ts">
import { ref } from "vue";

let id = 1000;
const list = ref([
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
]);

const renderContent = (h: any, { data, parentData }) => {
  return h(
    "div",
    {
      class: "custom-tree__item",
    },
    [
      h(
        "span",
        {
          class: "custom-tree__label",
        },
        data.label,
      ),
      h(
        "div",
        {
          style: {
            color: "#409eff",
            fontSize: "14px",
          },
        },
        [
          h(
            "span",
            {
              style: {
                margin: "0 10px",
              },
              onClick: (e) => append(data, e),
            },
            "append",
          ),
          h(
            "span",
            {
              onClick: (e) => remove(data, parentData, e),
            },
            "delete",
          ),
        ],
      ),
    ],
  );
};

const append = (data: any, e: any) => {
  e.stopPropagation();
  let children = data.children || [];
  children.push({
    id: id++,
    label: "children-node",
  });
  list.value = [...list.value];
};

const remove = (data: any, parentData: any, e: any) => {
  e.stopPropagation();
  const index = parentData.indexOf(data);
  if (index > -1) {
    parentData.splice(index, 1);
  }
};
</script>

<style>
.custom-tree__item {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
</style>
