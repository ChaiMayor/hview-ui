<template>
  <h-tag
    class="tag"
    v-for="item in tags"
    :key="item.name"
    :type="item.type"
    closable
    >{{ item.name }}</h-tag
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tags = ref([
  { name: "Tag 1", type: "" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "danger" },
]);
</script>

<style scoped>
.tag {
  margin-left: 5px;
}
</style>
