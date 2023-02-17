<template>
  <h-button @click="openModal">Open Dialog</h-button>
  <h-dialog v-model="dialogShow" title="dialog title">
    <template #content>This is content area!</template>
    <template #footer>
      <h-button
        size="small"
        style="margin-right: 15px"
        @click="dialogShow = false"
        plain
        >cancel</h-button
      >
      <h-button type="primary" size="small" @click="dialogShow = false"
        >comfire</h-button
      >
    </template>
  </h-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const dialogShow = ref(false);
const openModal = () => {
  dialogShow.value = true;
};
</script>
