<template>
  <div
    ref="scrollbar_bar"
    :class="[
      'h-scrollbar__bar',
      move === 'moveX' ? 'is-horizontal' : 'is-vertical',
      { show: isDraw },
      { hide: isHide },
      { native },
      { always: always },
    ]"
    :style="scrollbar_style">
    <div
      ref="scrollbar_thumb"
      class="h-scrollbar__thumb"
      :style="scrollbarThumb_style">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch, onMounted, nextTick, computed } from "vue";
import { SetScrollTop, SetScrollLeft } from "./scorllbar-fn";
import { throttle } from "lodash-es";

const props = defineProps<{
  // 传入的height高度
  height?: string | number;
  maxHeight?: number;
  // 传入的width高度
  width?: string | number;
  // 视口总体高度
  viewHeight?: number;
  // 视口总体宽度
  viewWidth?: number;
  // thumb高度
  thumbHeight?: number;
  // thumb宽度
  thumbWidth?: number;
  // 是否使用原生滚动条
  native?: boolean;
  // 是否一直显示滚动条
  always?: boolean;
  // 是否关闭监听容器响应式变化
  noresize?: boolean;
  // 比例
  retio?: number;
  // 移动的方向
  move?: "moveX" | "moveY";
}>();

const emits = defineEmits([
  "update:isDraw",
  "setScrollViewTop",
  "setScrollViewLeft",
  "setScrollTumb",
]);
const scrollTop = ref<number>(0);
const scrollLeft = ref<number>(0);

// 设置滚动条top值
const setScrollTop: SetScrollTop = (top: number) => {
  const sHeight = props.viewHeight - height.value;
  const val = (top * height.value * props.retio) / sHeight;

  // fix: 解决滚轮可以滚动到底，拉动滚动条没法到底，一直留有10px边距
  if (val >= thumbMax.value) {
    return (scrollTop.value = thumbMax.value);
  }
  scrollTop.value = val;
};
// 设置滚动条left值
const setScrollLeft: SetScrollLeft = (left: number) => {
  const sWidth = props.viewWidth - width.value;
  const val = (left * width.value * props.retio) / sWidth;

  // fix: 解决滚轮可以滚动到底，拉动滚动条没法到底，一直留有10px边距
  if (val >= thumbMax.value) {
    return (scrollLeft.value = thumbMax.value);
  }
  scrollLeft.value = val;
};
// 根据top值设置view视图滚动位置
const setTopToViewTop = (top: number) => {
  const viewTop = Number((top * props.viewHeight) / height.value).toFixed(5);
  emits("setScrollViewTop", viewTop);
};
// 根据left值设置view视图滚动位置
const setLeftToViewLeft = (left: number) => {
  const viewLeft = Number((left * props.viewWidth) / width.value).toFixed(5);
  emits("setScrollViewLeft", viewLeft);
};
// 处理拖拽滚动条中的值
const handleDrawScrollVal = (val: number, move: "moveX" | "moveY") => {
  // 视口view的滚动高度
  let vY = val;
  if (val <= 0) {
    val = 0;
  }
  if (val >= thumbMax.value) {
    val = thumbMax.value;
    vY = move === "moveX" ? width.value : height.value;
  }
  move === "moveX" ? (scrollLeft.value = val) : (scrollTop.value = val);
  isDraw.value = true;
  emits("update:isDraw", isDraw.value);
  move === "moveX" ? setLeftToViewLeft(vY) : setTopToViewTop(vY);
};

// thumb移动
const scrollbar_thumb = ref<any | HTMLDivElement>({});
const scrollbar_bar = ref<null | HTMLDivElement>(null);
// 将传入的高度提取出来
const height = ref<number>(Number(parseInt(props.height as string)));
// 将传入的宽度提取出来
const width = ref<number>(Number(parseInt(props.width as string)));
// thumb可以滚动到的最大位置top
const thumbMax = ref<number>(0);
// 当时是否正在重新计算各种值
const isCount = ref<boolean>(false);
// 是否正在拖拽中
const isDraw = ref<boolean>(false);

// 处理横向滚动和竖向滚动样式问题
const scrollbar_style = computed(() => {
  return props.move === "moveX"
    ? {
        width: `${props.width}px`,
      }
    : {
        height: `${props.height}`,
      };
});
// 处理横向滚动和竖向滚动样式问题
const scrollbarThumb_style = computed(() => {
  return props.move === "moveX"
    ? {
        width: `${props.thumbWidth}px`,
        left: `${scrollLeft.value}px`,
      }
    : {
        height: `${props.thumbHeight}px`,
        top: `${scrollTop.value}px`,
      };
});
// 判断是否隐藏滚动条
const isHide = computed(() => {
  return props.viewWidth
    ? !props.height && !props.maxHeight && props.viewWidth <= width.value
    : !props.height && !props.maxHeight;
});

// 设置拖拽滚动条thumb事件
function setDrawScrollThumb(dom: HTMLDivElement, move: "moveX" | "moveY") {
  dom.onmousedown = function (ev: MouseEvent) {
    let pTop =
      move === "moveX" ? ev.pageX - dom.offsetLeft : ev.pageY - dom.offsetTop;
    document.onmousemove = throttle(function (e: MouseEvent) {
      // thumb的滚动高度
      let Y = move === "moveX" ? e.pageX - pTop : e.pageY - pTop;
      handleDrawScrollVal(Y, move === "moveX" ? "moveX" : "moveY");
      return false;
    }, 20);
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
      document.onmousedown = null;
      nextTick(() => {
        isDraw.value = false;
        emits("update:isDraw", isDraw.value);
      });
      return false;
    };
    return false;
  };
}
// 重新计算各种高度问题
const countAllHeight = () => {
  if (isCount.value) return;
  isCount.value = true;
  width.value = Number(parseInt(props.width as string));
  height.value = Number(parseInt(props.height as string));
  // 获取thumb能滚动的最大值
  nextTick(() => {
    thumbMax.value =
      props.move === "moveX"
        ? width.value - scrollbar_thumb.value!.offsetWidth
        : height.value - scrollbar_thumb.value!.offsetHeight;
  });
  isCount.value = false;
};

// 传入高度发生变化则重新计算滚动距离
watch(
  () => props.height,
  () => {
    if (props.noresize) return;
    countAllHeight();
  },
);
// view高度发生变化则重新计算滚动距离
watch(
  () => props.viewHeight,
  () => {
    if (props.noresize) return;
    countAllHeight();
  },
);

onMounted(() => {
  // 创建thumb拖动事件
  setDrawScrollThumb(
    scrollbar_thumb.value!,
    props.move === "moveX" ? "moveX" : "moveY",
  );
  countAllHeight();
});
onUnmounted(() => {
  if (!scrollbar_thumb.value) return;
  scrollbar_thumb.value!.onmousedown = null;
});
defineExpose({
  setScrollTop,
  setScrollLeft,
  handleDrawScrollVal,
});
</script>

<script lang="ts">
export default {
  name: "HThumb",
};
</script>
