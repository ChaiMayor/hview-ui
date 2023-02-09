<template>
  <div class="hview-icon">
    <i :class="`h-icon-${props.name}`" :style="iconColor"></i>
    <div v-if="dot" class="hview-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { iconProps } from "./icon";
const props = defineProps(iconProps);

//展示图标右上方小红点
const styleDot = computed(() => {
  return { [`hview-dot`]: props.dot && !props.badge };
});
// 消息徽标
const badge = computed(() => {
  return props.badge;
});
// 图标颜色
const iconColor = computed(() => {
  return {
    color: props.color,
  };
});
</script>

<script lang="ts">
export default {
  name: "HIcon",
};
</script>
