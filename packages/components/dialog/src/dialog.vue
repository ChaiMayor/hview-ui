<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        :class="['h-dialog-default', customClass]"
        v-if="modelValue"
        @click="closeModal($event)">
        <div
          class="h-dialog-contentbox"
          :style="contentStyle"
          :class="[centerClass, draggableClass]"
          :ref="(el) => (dragEl = el)">
          <div class="h-dialog-header">
            <p class="h-dialog-title" :class="styleClass">
              <slot name="header" v-if="$slot['header']"></slot>
              <span v-else>{{ title }}</span>
            </p>
            <h-icon
              class="h-dialog-close"
              name="close1"
              @click="close"
              v-if="showClose">
            </h-icon>
          </div>
          <div class="h-dialog-content">
            <slot name="content"></slot>
          </div>
          <div class="h-dialog-footer" :class="styleClass">
            <slot name="footer" v-if="$slot['footer']"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
<script setup lang="ts">
import {
  useSlots,
  ref,
  watch,
  watchEffect,
  onMounted,
  computed,
  nextTick,
} from "vue";
import { dialogProps } from "./dialog";
const props = defineProps(dialogProps);
const emit = defineEmits(["update:modelValue", "open", "close"]);
const dragEl = ref<any>();
const styleClass: any = computed(() => {
  return {
    [`h-dialog-text--${props.align}`]: props.align,
  };
});
const centerClass = computed(() => {
  return {
    "h-dialog-contentbox-center": props.alignCenter,
  };
});
const contentStyle = computed(() => {
  //设置了align属性就不能更改top了
  if (props.alignCenter) {
    return {
      width: props.width,
      backgroundColor: props.bgColor,
    };
  }
  return {
    width: props.width,
    top: props.top,
    backgroundColor: props.bgColor,
  };
});
const draggableClass = computed(() => {
  return {
    "h-dialog-contentbox-draggable": props.draggable,
  };
});
const $slot = useSlots();
const close = () => {
  emit("close");
  emit("update:modelValue", false);
};
onMounted(() => {
  watchEffect(() => {
    if (props.modelValue) {
      if (props.scrollLock) {
        if (typeof document !== "undefined") {
          document.body.style["overflow"] = "hidden";
        }
      }
    } else {
      if (typeof document !== "undefined") {
        document.body.style["overflow"] = "initial";
      }
    }
  });
});
const closeModal = (e) => {
  if (props.closeOnModal) {
    if (e.target.className == "h-dialog-default") {
      emit("update:modelValue", false);
      emit("close");
    }
  }
};
watch(
  () => props.modelValue,
  (val) => {
    if (!val) return;
    nextTick(() => {
      if (dragEl.value) {
        draggable(dragEl.value);
      }
    });
    emit("open");
  },
);

const draggable = (el: HTMLElement) => {
  if (!props.draggable) return;
  //修改鼠标状态
  // el.style.setProperty("--cursor-value", "move");

  let moveEl = el.firstElementChild as HTMLElement;
  const mouseDown = (e: MouseEvent) => {
    //mouseDown定义在这里
    //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
    let X = e.clientX - el.offsetLeft; //减去初始值
    let Y = e.clientY - el.offsetTop;
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX - X + "px";
      el.style.top = e.clientY - Y + "px";
    };
    document.addEventListener("mousemove", move); //鼠标按下
    document.addEventListener("mouseup", () => {
      //鼠标抬起
      document.removeEventListener("mousemove", move); //鼠标抬起就清除掉mousemove事件
    });
  };
  //当我们对着header区域按下鼠标准备移动，绑定事件进行调用
  moveEl.addEventListener("mousedown", mouseDown); //mouseDown事件定义在上方，mouseDown是参数一的一个事件类型，下方有事件类型大全
};
onMounted(() => {});
</script>
<script lang="ts">
export default {
  name: "HDialog",
};
</script>
