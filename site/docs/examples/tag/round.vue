<template>
  <h-tag
    class="tag"
    v-for="item in tags1"
    :key="item.name"
    :type="item.type"
    round
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
</script>

<style scoped>
.tag {
  margin-left: 8px;
}
</style>
