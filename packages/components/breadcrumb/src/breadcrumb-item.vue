<template>
  <span class="h-breadcrumb__item">
    <span :class="innerClass" @click="onClick">
      <slot />
    </span>
    <span class="item__separator">
      <h-icon v-if="separatorIcon" :name="separatorIcon"></h-icon>
      <span v-else>{{ separator }}</span>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed, inject, toRefs, getCurrentInstance, onMounted } from "vue";
import { BreadcrumbItemProps } from "./breadcrumb-item";

const props = defineProps(BreadcrumbItemProps);
// 接收父组件props
const breadcrumbProps = inject("breadcrumbProps", undefined);
const { separator, separatorIcon } = toRefs(breadcrumbProps);
// 获取vue实例
const instance = getCurrentInstance();
// const router = instance.appContext.config.globalProperties.$router;
// 文本内容样式类
const innerClass = computed(() => {
  return {
    item__inner: true,
    "is-link": !!props.to,
  };
});
// 点击事件
const onClick = () => {
  //   if (!props.to || !router) return;
  //   props.replace ? router.replace(props.to) : router.push(props.to);
};

onMounted(() => {
  // console.log();
});
</script>

<script lang="ts">
export default {
  name: "HBreadcrumbItem",
};
</script>
