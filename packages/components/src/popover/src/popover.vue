<template>
  <div>
    <div class="popover-box" @mouseenter="hoverTriggerEnterHandler" @mouseleave="hoverTriggerLeaveHandler">
      <!-- popover内部元素 -->
      <transition :name="transition" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
        <div
          v-show="!disabled && showPopover"
          :class="['popover-outbox', placement, popperClass]"
          :aria-hidden="disabled || !showPopover ? 'true' : 'false'">
          <div class="popover-arrow" ref="popoverArrow"></div>
          <div :class="['popover-box-content']" :style="popoverStyles">
            <div v-if="title" v-text="title" class="popover-title"></div>
            <slot>{{ content }}</slot>
          </div>
        </div>
      </transition>

      <!--触发popover元素-->
      <div
        ref="reference"
        class="reference-content"
        @click="clickTriggerHandler"
        @mousedown="focusTriggerHandler"
        @mouseup="blurTriggerHandler">
        <slot name="reference"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, CSSProperties } from "vue";
import "../style/index.less";

import { popoverProps } from "./popover";
const props = defineProps(popoverProps);
const emit = defineEmits(["after-enter", "after-leave"]);
const visible = ref(false);

const showPopover = computed(() => {
  if (props.trigger !== "manual") {
    return visible.value;
  } else {
    console.log(props.modelValue);
    //自定义触发
    return props.modelValue;
  }
});
const popoverStyles = computed(() => {
  let style: CSSProperties = {};
  if (props.width ?? null) {
    style.width = props.width + "px";
  }
  return style;
});

//计算arrow的位置
const reference = ref(null);
const popoverArrow = ref(null);

onMounted(() => {
  // console.log(reference.value.clientWidth);
  if (props.placement.includes("top") || props.placement.includes("bottom")) {
    let clientWidth = reference.value.clientWidth;
    // 设置箭头的位置为触发popover元素的中间
    popoverArrow.value.style.setProperty("--geticonsite", clientWidth / 2 + "px");
  } else if (props.placement.includes("left") || props.placement.includes("right")) {
    let clientHeight = reference.value.clientHeight;
    popoverArrow.value.style.setProperty("--geticonsite", clientHeight / 2 + "px");
  }
});

const timer = ref(null);
//点击触发
function clickTriggerHandler() {
  if (props.trigger.toLowerCase() == "click") {
    if (!props.disabled) {
      visible.value = !visible.value;
    }
  }
}
//聚焦触发
function focusTriggerHandler() {
  if (props.trigger.toLowerCase() == "focus") {
    if (!props.disabled) {
      visible.value = true;
    }
  }
}
//失焦消失
function blurTriggerHandler() {
  if (props.trigger.toLowerCase() == "focus") {
    if (!props.disabled) {
      visible.value = false;
    }
  }
}
//hover——鼠标移入触发
function hoverTriggerEnterHandler() {
  if (props.trigger.toLowerCase() == "hover") {
    if (!props.disabled) {
      clearTimeout(timer.value);
      visible.value = true;
    }
  }
}
//hover——鼠标移出,关闭popover tips:当鼠标移出时，有个300ms的延时，如果在期间再次移入，则清空定时器，并当再次移出时，重新计时
function hoverTriggerLeaveHandler() {
  if (props.trigger.toLowerCase() == "hover") {
    if (!props.disabled) {
      timer.value = setTimeout(() => {
        visible.value = false;
      }, 300);
    }
  }
}
//弹窗显示时触发
function handleAfterEnter() {
  emit("after-enter");
}
//弹窗消时时触发
function handleAfterLeave() {
  emit("after-leave");
}
</script>
<script lang="ts">
export default {
  name: "HPopover",
};
</script>

<style lang="scss" scoped></style>
