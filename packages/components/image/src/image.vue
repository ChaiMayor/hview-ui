<template>
  <div ref="container" class="h-image">
    <!-- 正常展示图片 -->
    <img
      v-if="imageSrc !== undefined && !hasLoadError && !lazy"
      :src="imageSrc"
      v-bind="$attrs"
      :style="imageStyle"
      @click="clickHandler"
      @load="handleLoad"
      @error="handleError"
      class="main-img" />
    <div class="lazy-imgs" v-if="lazy" ref="scrollContainer">
      <div class="content">
        <div v-for="(url, index) in lazyList" :key="index" class="lazyImg">
          <img :data-src="url" alt="加载中" />
        </div>
      </div>
    </div>

    <!-- 无法正常展示：处于加载中或者加载错误 -->
    <div v-if="isLoading || hasLoadError" class="wrapper">
      <slot v-if="isLoading" name="placeholder">
        <div class="placeholder">图片加载中</div>
      </slot>
      <slot v-else-if="hasLoadError" name="error">
        <div class="error">图片加载失败</div>
      </slot>
    </div>

    <!-- 图片预览 -->
    <template v-if="preview">
      <h-image-viewer
        v-if="showViewer"
        :visable="showViewer"
        :z-index="zIndex"
        :initial-index="imageIndex"
        :infinite="infinite"
        :zoom-rate="zoomRate"
        :url-list="previewSrcList"
        @closePreview="updateVisable"
        @switch="switchImg">
        <div v-if="$slots.viewer">
          <slot name="viewer"></slot>
        </div>
      </h-image-viewer>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, ref } from "vue";
import { ImageProps } from "./image";
import HImageViewer from "../../image-viewer";

const props = defineProps(ImageProps);
const emits = defineEmits(["load", "error", "switch", "close"]);

const imageSrc = ref<string | undefined>();
const hasLoadError = ref(false);
const isLoading = ref(true);

const showViewer = ref<boolean>(null);
// 获取容器结点
const container = ref<any>(null);

const scrollContainer = ref<any>(null);

// 动态加载图片的fit样式
const imageStyle = computed(() => {
  const { fit } = props;
  if (fit) {
    return { objectFit: fit };
  }
  return {};
});
// 预览图片
const preview = computed(() => {
  const { previewSrcList } = props;
  return Array.isArray(previewSrcList) && previewSrcList.length > 0;
});
//默认展示图片的预览位置
const imageIndex = computed(() => {
  const { previewSrcList, initialIndex } = props;
  let previewIndex = initialIndex;
  if (initialIndex > previewSrcList.length - 1) {
    previewIndex = 0;
  }
  return previewIndex;
});
//获取图片src，更新图片状态
const loadImage = () => {
  //重置加载状态
  isLoading.value = true;
  hasLoadError.value = false;
  imageSrc.value = props.src;
};
const handleLoad = (event: Event) => {
  isLoading.value = false;
  hasLoadError.value = false;
  emits("load", event);
};

const clickHandler = () => {
  //如果preview为false，不预览图片
  if (!preview.value) return;
  //阻止body滚动
  document.body.style.overflow = "hidden";
  //打开预览界面
  showViewer.value = !showViewer.value;
};

const handleError = () => {
  isLoading.value = false;
  hasLoadError.value = true;
  emits("error", event);
};
//获取所有懒加载图片的结点
const query = (selector: any) => {
  return Array.from(document.querySelectorAll(selector));
};

//节流函数
function throttle(func: Function, time: number, immediate = false) {
  if (immediate) {
    let prevTime = 0;
    return (...args: any) => {
      let nowTime = Date.now();
      if (nowTime - prevTime >= time) {
        func.apply(this, args);
        prevTime = nowTime;
      }
    };
  } else {
    let timer: number | null = null;
    return (...args: any) => {
      if (!timer) {
        func.apply(this, args);
        timer = window.setTimeout(() => {
          if (timer) clearInterval(timer);
          timer = null;
        }, time);
      }
    };
  }
}
// 懒加载核心处理函数
function lazyHandleFn() {
  query("img[data-src]").forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      img.src = img.dataset.src;
      //img[data-src]查找所有img标签的，渲染后就删除data-src可减少forEach循环的计算成本
      img.removeAttribute("data-src");
    }
  });
  isLoading.value = false;
  hasLoadError.value = false;
}
const lazyLoad = (elRef) => {
  // 默认展示第一张图片
  const fristImg = query("img[data-src]")[0];
  if (fristImg) {
    fristImg.src = fristImg.dataset.src;
  }
  const root = elRef;
  // 监听滚动事件，做节流处理
  root.addEventListener("scroll", throttle(lazyHandleFn, 200, true));
};

watch(
  () => props.scrollContainer,
  () => {
    //拿到滚动容器的dom
    let containerDom: any = null;
    if (props?.scrollContainer) {
      containerDom = props?.scrollContainer;
    } else {
      containerDom = window;
    }
    lazyLoad(containerDom);
  },
);

// onMounted(() => {
//   nextTick(() => {

//   });
// });
//初始预览图像索引
const initialSrc = () => {
  if (preview.value) {
    imageSrc.value = props.previewSrcList[imageIndex.value];
  }
};
const updateVisable = () => {
  showViewer.value = false;
  emits("close");
};
const switchImg = () => {
  emits("switch");
};
onMounted(() => {
  loadImage();
  initialSrc();
});
</script>
<script lang="ts">
export default {
  name: "HImage",
};
</script>
