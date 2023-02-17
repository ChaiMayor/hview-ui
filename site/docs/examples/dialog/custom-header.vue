<template>
  <h-button @click="openModal">open dialog</h-button>
  <h-dialog v-model="dialogShow" :showClose="false">
    <template #header>
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <h-button icon="close1" type="primary" size="mini" @click="close"
          >关闭</h-button
        >
      </div>
    </template>
    <template #content> This is content!</template>
    <template #footer>
      <h-button
        size="small"
        style="margin-right: 15px"
        @click="dialogShow = false"
        >取消</h-button
      >
      <h-button type="primary" size="small" @click="dialogShow = false"
        >确认</h-button
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
const close = () => {
  dialogShow.value = false;
};
</script>
<style scoped>
.my-header {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
