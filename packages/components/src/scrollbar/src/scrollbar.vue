<template>
  <div class="h-scrollbar" ref="scrollbar">
    <div :class="[wrapClass, 'h-scrollbar__wrap', { native }]" ref="scrollbar_wrap" :style="[height_style, wrapStyle]">
      <component :is="tag" :class="[viewClass, 'h-scrollbar__view']" ref="scrollbar_view" :style="viewStyle">
        <slot> </slot>
      </component>
    </div>
    <HThumb
      ref="scrollThumb"
      @setScrollViewTop="setScrollViewTop"
      @setScrollViewLeft="setScrollViewLeft"
      :always="always"
      v-model:isDraw="isDraw"
      :height="height"
      :maxHeight="maxHeight"
      :width="width"
      :noresize="noresize"
      :viewHeight="viewHeight"
      :viewWidth="viewWidth"
      :thumbWidth="thumbWidth"
      :native="props.native"
      :move="move"
      :retio="retio"
      :thumbHeight="thumbHeight"></HThumb>
  </div>
</template>

<script setup lang="ts">
import "../style/index.less";
import { ref, watch, onMounted, onUnmounted, computed, nextTick } from "vue";
import { ScrollBarProps } from "./scrollbar";
import HThumb from "./scroll-thumb.vue";
import { toFixed } from "@hview-plus/utils";

const props = defineProps(ScrollBarProps);
const emits = defineEmits(["scroll"]);
const scrollbar_wrap = ref<null | HTMLDivElement>(null);
const scrollbar_view = ref<null | HTMLDivElement>(null);
const scrollThumb = ref<any>(null);

// 将传入的高度提取出来
const height = ref<number>(Number(parseInt(props.height as string)));
// 将传入的最大高度提取出来
const maxHeight = ref<number>(Number(parseInt(props.maxHeight as string)));
// view视口宽度
const width = ref<number>(0);
// 视图view总体高度
const viewHeight = ref<number>(0);
// 视图view总体宽度
const viewWidth = ref<number>(0);
// 是否正在拖动中
const isDraw = ref<boolean>(false);
// 滚动条空白区域所占范围（根据设置的thumb的高度来算 25% = 0.75 | 20% = 0.80）
const retio = ref<number>(0);
// thumb高度
const thumbHeight = ref<number>(0);
// thumb宽度
const thumbWidth = ref<number>(0);
// 当时是否正在重新计算各种值
const isCount = ref<boolean>(false);
// 判断当前应该展示什么方向的滚动条
const move = computed(() => (!props.height && !props.maxHeight ? "moveX" : "moveY"));
// 设置当前盒子的高度
const height_style = computed(() => {
  return !height.value
    ? {}
    : {
        height: `${height.value}px`,
      };
});

// 设置滚动条位置
const setScrollTop = (top: number) => {
  scrollThumb.value.handleDrawScrollVal(top, "moveY");
  isDraw.value = false;
};
const setScrollLeft = (left: number) => {
  scrollThumb.value.handleDrawScrollVal(left, "moveX");
  isDraw.value = false;
};
// 设置滚动条的thumb的函数
const setScrollTumb = () => {
  if (isDraw.value) return;
  const sTop =
    move.value === "moveX"
      ? Number(scrollbar_wrap.value!.scrollLeft.toFixed(5))
      : Number(scrollbar_wrap.value!.scrollTop.toFixed(5));
  move.value === "moveX" ? scrollThumb.value.setScrollLeft(sTop) : scrollThumb.value.setScrollTop(sTop);
  // 返回滚动的值
  emits("scroll", { scrollTop: scrollbar_wrap.value!.scrollTop, scrollLeft: scrollbar_wrap.value!.scrollLeft });
};
// 设置当前的滚动视口top
const setScrollViewTop = (top: number) => {
  scrollbar_wrap.value!.scrollTop = top;
};
// 设置当前的滚动视口left
const setScrollViewLeft = (left: number) => {
  scrollbar_wrap.value!.scrollLeft = left;
};

// 重新计算各种高度问题
const countAllHeight = () => {
  isCount.value = true;
  // 可视区域宽度
  width.value = scrollbar_view.value!.offsetWidth;
  // 视口内容总体高度
  viewHeight.value = scrollbar_view.value?.offsetHeight!;
  // 视口内容总体宽度
  viewWidth.value = scrollbar_view.value?.scrollWidth!;
  // thumb高度
  thumbHeight.value = toFixed((height.value * height.value) / viewHeight.value, 0);
  if (height.value !== -1) {
    if (thumbHeight.value <= props.minSize) thumbHeight.value = props.minSize;
  }
  // thumb宽度
  thumbWidth.value = toFixed((width.value * width.value) / viewWidth.value, 0);
  if (thumbWidth.value <= props.minSize) thumbWidth.value = props.minSize;
  // 计算是否到达maxHeight
  if (maxHeight.value) {
    if (viewHeight.value >= maxHeight.value) height.value = maxHeight.value;
    else {
      height.value = 0;
      thumbHeight.value = 0;
    }
  }
  // 滚动条空白区域所占范围比例
  retio.value =
    1 -
    (move.value === "moveX"
      ? toFixed(thumbWidth.value / width.value, 2)
      : toFixed(thumbHeight.value / height.value, 2));
  isCount.value = false;
};

// 监听传入的内容发生变化
watch(
  () => props.height,
  () => {
    if (props.noresize) return;
    height.value = Number(parseInt(props.height as string));
    countAllHeight();
    // 重新计算滚动条位置
    setScrollTumb();
  },
);
watch(
  () => props.maxHeight,
  () => {
    if (props.noresize) return;
    maxHeight.value = Number(parseInt(props.maxHeight as string));
    height.value = Number(parseInt(props.height as string)) || 0;
    countAllHeight();
    setScrollTumb();
  },
);
// 监听slot内容变化
let observer: MutationObserver | null = null;
// 设置滚动条thumb的top值
onMounted(() => {
  countAllHeight();
  scrollbar_wrap.value?.addEventListener("scroll", setScrollTumb);
  // 监听slot内容变化
  observer = new MutationObserver(callback);
  function callback() {
    if (props.noresize) return;
    countAllHeight();
    setScrollTumb();
  }
  nextTick(() => {
    observer!.observe(scrollbar_view.value!, {
      childList: true, // 监听子节点的变化(增加，删除)
      characterData: true, // 监听节点的内容或文本变化
    });
  });
});
// 当页面卸载时删除监听事件
onUnmounted(() => {
  scrollbar_wrap.value?.removeEventListener("scroll", setScrollTumb);
  observer!.disconnect();
});
// 向外暴露方法
defineExpose({
  setScrollTop,
  setScrollLeft,
  wrapRef: scrollbar_wrap,
});
</script>

<script lang="ts">
export default {
  name: "HScrollbar",
};
</script>
