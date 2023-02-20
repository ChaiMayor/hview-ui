<template>
  <div class="demo-popover">
    <h-popover v-model="visible" trigger="manual" placement="bottom-start">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <h-button size="mini" @click="visible = false">取消</h-button>
        <h-button type="primary" size="mini" @click="visible = false"
          >确定</h-button
        >
      </div>
      <template #reference>
        <h-button size="medium" @click="handler">删除</h-button>
      </template>
    </h-popover>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);

function handler() {
  visible.value = !visible.value;
  console.log(visible.value);
}
</script>
