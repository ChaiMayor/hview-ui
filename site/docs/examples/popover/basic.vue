<template>
  <div class="demo-popover">
    <h-popover
      class="space"
      trigger="hover"
      placement="top-start"
      content="hover激活">
      <template #reference>
        <h-button size="medium">hover激活</h-button>
      </template>
    </h-popover>
    <h-popover
      class="space"
      trigger="click"
      placement="bottom"
      content="click激活"
      title="标题">
      <template #reference>
        <h-button size="medium">click激活</h-button>
      </template>
    </h-popover>
    <h-popover
      class="space"
      trigger="focus"
      placement="right"
      content="focus激活">
      <template #reference>
        <h-button size="medium">focus激活</h-button>
      </template>
    </h-popover>
    <h-popover
      class="space"
      trigger="manual"
      v-model="visible"
      placement="bottom"
      content="手动激活">
      <template #reference>
        <h-button size="medium" @click="handler">手动激活</h-button>
      </template>
    </h-popover>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const visible = ref<boolean>(false);

function handler() {
  visible.value = !visible.value;
  // console.log(visible.value);
}
</script>

<style scoped>
.demo-popover {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.space {
  padding: 16px;
}
</style>
