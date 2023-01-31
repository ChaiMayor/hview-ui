<template>
  <transition name="h-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div :class="['h-message', type ? `h-message--${type}` : '', center ? 'is-center' : '']" v-show="visible">
      <i :class="typeClass"></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="h-message__content">{{ message }}</p>
        <p v-else v-html="message" class="h-message__content"></p>
      </slot>
      <i v-if="showClose" class="h-message__closeBtn iconfont h-icon-close" @click="close"></i>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { MessageProps } from "./message";
import { toRefs, computed, onMounted, ref, onUnmounted } from "vue";
import "../style/index.less";
const props = defineProps(MessageProps);
const { message, showClose, type, duration, center, dangerouslyUseHTMLString, onClose } = toRefs(props);

let visible = ref(false);
let timer: any = null;

const typeClass = computed(() => {
  return type!.value ? `h-message__icon h-icon-${type!.value}` : "";
});

const startTimer = () => {
  visible.value = true;
  if (duration.value > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, duration.value);
  }
};

const close = () => {
  visible.value = false;
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>
<script lang="ts">
export default {
  name: "HMessage",
};
</script>
