<template>
  <div class="demo-modal">
    <h-button @click="openModal">open modal</h-button>
    <h-modal v-model:show="visible" :title="false" :footer="false">
      <template #body>
        <span>Only modal body</span>
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
