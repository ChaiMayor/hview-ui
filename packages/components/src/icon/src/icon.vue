<template>
  <div class="hview-icon">
    <svg class="icon" :style="iconColor" aria-hidden="true">
      <use :xlink:href="IconName"></use>
    </svg>
    <div v-if="dot" class="hview-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, defineComponent } from "vue";

// 引入图标样式
import "../style/index.less";
// 导入类型
import { iconProps } from "./icon";
const props = defineProps(iconProps);

//获取传入的name，渲染对应的图标
const IconName = computed(() => {
  return `#icon-${props.name}`;
});
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
  return { color: props.color };
});
onMounted(() => {
  import("../../../asset/js/iconfont.js" as any).then((module) => {
    defineComponent({
      setup() {
        return {
          badge,
        };
      },
    });
  });
});
</script>

<script lang="ts">
export default {
  name: "HIcon",
};
</script>
<style lang="less" scoped></style>
