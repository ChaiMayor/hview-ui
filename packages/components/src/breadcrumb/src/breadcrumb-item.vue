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
import "../style/index.less";
import { computed, inject, toRefs, getCurrentInstance, onMounted } from "vue";
import { useRouter, useRoute, createRouter } from "vue-router";
import { BreadcrumbItemProps } from "./breadcrumb-item";
const props = defineProps(BreadcrumbItemProps);
const instance = getCurrentInstance();
const router = instance.appContext.config.globalProperties.$router;
const route = useRoute();
const breadcrumbProps = inject("breadcrumbProps", undefined);
const { separator, separatorIcon } = toRefs(breadcrumbProps);
const innerClass = computed(() => {
  return {
    item__inner: true,
    "is-link": !!props.to,
  };
});
const onClick = () => {
  if (!props.to || !router) return;
  props.replace ? router.replace(props.to) : router.push(props.to);
};
// onMounted(() => {
//   const router1 = createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes, // `routes: routes` 的缩写
//   });
// });
</script>

<script lang="ts">
export default {
  name: "HBreadcrumbItem",
};
</script>
