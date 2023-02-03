<template>
  {{ $t("colorpicker.confirm") }}
  <h-tree :data="list"></h-tree>
  <h-empty></h-empty>
  <div>
    <span>Rain</span>
    <h-divider direction="vertical" />
    <span>Home</span>
    <h-divider direction="vertical" border-style="dashed" />
    <span>Grass</span>
  </div>
  <h-alert title="success alert" type="success" description="more text description" show-icon />
  <h-alert title="info alert" type="info" description="more text description" show-icon />
  <h-alert title="warning alert" type="warning" description="more text description" show-icon />
  <h-alert title="error alert" type="error" description="more text description" show-icon />
</template>

<script setup lang="ts">
const hello = () => {
  // eslint-disable-next-line no-alert
  alert("Hello World!");
};
const list = [
  {
    label: "一级 1",
    children: [
      {
        label: "二级 1-1",
        children: [
          {
            label: "三级 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "一级 2",
    children: [
      {
        label: "二级 2-1",
        children: [
          {
            label: "三级 2-1-1",
          },
        ],
      },
      {
        label: "二级 2-2",
      },
    ],
  },
  {
    label: "一级 3",
    children: [
      {
        label: "二级 3-1",
        children: [
          {
            label: "三级 3-1-1",
          },
        ],
      },
      {
        label: "二级 3-2",
        children: [
          {
            label: "三级 3-2-1",
          },
        ],
      },
    ],
  },
];
</script>
