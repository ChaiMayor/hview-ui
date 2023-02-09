<template>
  <transition>
    <div v-show="visible" :class="alertClass" :style="effectStyle">
      <h-icon v-if="showIcon" :name="type" :class="iconClass"></h-icon>
      <div class="content">
        <span v-if="title || $slots.title" :class="titleClass">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" class="description">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div v-if="closeText" class="close-btn is-customed" @click="close">
            {{ closeText }}
          </div>
          <h-icon v-else name="close1" class="close-btn" @click="close">
          </h-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";
import { AlertProps, AlertEmits } from "./alert";
const props = defineProps(AlertProps);
const emit = defineEmits(AlertEmits);
const slots = useSlots();
const visible = ref(true);

// 容器
const alertClass = computed(() => {
  return {
    "h-alert": true,
    [`h-alert--${props.type}`]: props.type,
    "is-center": props.center,
    [`is-${props.effect}`]: props.effect,
  };
});
// 主题样式(样式有问题，现在能实现效果，以后优化)
const effectStyle = computed(() => {
  return {
    opacity: visible.value ? 1 : 0,
    "background-color":
      props.effect === "light"
        ? `var(--hv-color-${props.type}-light-9)`
        : `var(--hv-color-${props.type})`,
    color: props.effect === "light" ? `var(--hv-color-${props.type})` : "white",
  };
});

// 标题前面的图标
const iconClass = computed(() => {
  return {
    icon: !!props.description || !!slots.default,
  };
});

// 标题
const titleClass = computed(() => {
  return {
    title: true,
    "is-bold": !!props.description || !!slots.default,
  };
});

// 关闭alert提示
const close = (event: MouseEvent) => {
  visible.value = false;
  emit("close", event);
};
</script>

<script lang="ts">
export default {
  name: "HAlert",
};
</script>
