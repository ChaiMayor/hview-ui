<template>
  <transition name="h-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div 
      :class="['h-message', type ? `h-message--${type}` : '']"
      v-show="visible"
    >
      <i :class="typeClass"></i>
      <slot>
        <p class="h-message__content">{{ message }}</p>
      </slot>
    </div>  
  </transition>
</template>
<script setup lang="ts">
import { MessageProps } from './message'
import { toRefs, computed, onMounted, ref, onUnmounted, defineComponent } from 'vue';
import '../style/index.less';
const props = defineProps(MessageProps);
const { message, type, duration } = toRefs(props);

let visible = ref(false);
let timer: any = null;

const typeClass = computed(() => {
  return type ? `h-message__icon h-icon-${type}` : "";
})

const startTimer = () => {
  visible.value = true;
  if (duration.value > 0) {
    timer = setTimeout(() => {
      if (!closed) {
        visible.value = false;
      }
    }, duration.value);
  }
}

onMounted(() => {
  startTimer();
})

onUnmounted(() => {
  clearTimeout(timer);
})
</script>
<script lang="ts">
export default defineComponent({
  name: "HMessage",
})
</script>