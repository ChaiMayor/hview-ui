<template>
  <h-tag class="tag" v-for="item in tags1" :key="item.name" :type="item.type">{{
    item.name
  }}</h-tag>
  <h-tag
    class="tag"
    v-for="item in tags2"
    :key="item.name"
    :color="item.color"
    >{{ item.name }}</h-tag
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tags1 = ref([
  { name: "Tag 1", type: "" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "danger" },
]);
const tags2 = ref([
  { name: "Tag 1", color: "#fff0f6" },
  { name: "Tag 2", color: "#fff7e6" },
  { name: "Tag 3", color: "#fcffe6" },
  { name: "Tag 4", color: "#e6fffb" },
  { name: "Tag 5", color: "#f9f0ff" },
]);
</script>

<style scoped>
.tag {
  margin-left: 8px;
}
</style>
