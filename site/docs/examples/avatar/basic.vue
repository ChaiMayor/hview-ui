<template>
  <div class="demo">
    <div v-for="i in size" :key="i" class="block">
      <h-avatar class="avatar" shape="circle" :size="i" :src="url" />
    </div>
    <div v-for="i in size" :key="i" class="block">
      <h-avatar class="avatar" shape="square" :size="i" :src="url" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";

const state = reactive({
  size: ["small", "", "large"],
  url: "https://img1.baidu.com/it/u=3898423942,4076211846&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
});

const { size, url } = toRefs(state);
</script>

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

.avatar {
  margin: auto 0;
}
</style>
