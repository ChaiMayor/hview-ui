<template>
  <div class="plain">
    <h-tag
      class="tag"
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      theme="plain"
      >{{ item.label }}</h-tag
    >
  </div>
  <div class="dark">
    <h-tag
      class="tag"
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      theme="dark"
      >{{ item.label }}</h-tag
    >
  </div>
</template>

<script lang="ts" setup>
const items = [
  { type: "primary", label: "Tag 1" },
  { type: "success", label: "Tag 2" },
  { type: "info", label: "Tag 3" },
  { type: "danger", label: "Tag 4" },
  { type: "warning", label: "Tag 5" },
];
</script>

<style scoped>
.tag {
  margin-top: 8px;
  margin-left: 10px;
}
</style>
