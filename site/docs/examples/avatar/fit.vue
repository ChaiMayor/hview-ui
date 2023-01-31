<template>
  <div class="demo">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <h-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}
.demo .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
.avatar {
  margin: auto 0;
}
</style>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";

const state = reactive({
  fits: ["fill", "contain", "cover", "none", "scale-down"],
  url: "https://img1.baidu.com/it/u=3898423942,4076211846&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
});

const { fits, url } = toRefs(state);
</script>
