<template>
  <div class="demo-modal">
    <h-button @click="openModal">open modal</h-button>
    <h-modal v-model:show="visible">
      <template #header>
        <span>Welcome to Madal</span>
      </template>
      <template #body>
        <span>Modal body</span>
      </template>
      <template #footer>
        <span>Footer</span>
      </template>
    </h-modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref<boolean>(false);
const openModal = () => {
  visible.value = !visible.value;
};
</script>
