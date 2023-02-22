<template>
  <div class="h-image-viewer">
    <h-modal
      v-model:show="modelVisable"
      :title="false"
      :footer="false"
      contentBgColor="transparent"
      @onClose="closeModal">
      <template #body>
        <div class="content">
          <div class="arrow">
            <span @click="prev" class="arrowLeft">
              <h-icon name="xiangshang2"></h-icon>
            </span>
            <span @click="next" class="arrowRight">
              <h-icon name="xiangxia1"></h-icon>
            </span>
          </div>
          <div class="actions">
            <h-icon @click="handleActions('zoomOut')" name="zoomOut"></h-icon>
            <h-icon @click="handleActions('zoomIn')" name="zoomIn"> </h-icon>
            <h-icon @click="handleActions('reset')" name="fullScreen"></h-icon>
            <h-icon
              @click="handleActions('anticlockwise')"
              name="refreshLeft"></h-icon>
            <h-icon
              @click="handleActions('clockwise')"
              name="refreshRight"></h-icon>
          </div>
          <div class="canvs" ref="canvs">
            <img
              v-for="(url, i) in urlList"
              v-show="i === activeIndex"
              :ref="(el) => (imgRefs[i] = el as HTMLImageElement)"
              :key="url"
              :src="url" />
          </div>
        </div>
        <slot></slot>
      </template>
    </h-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { imageViewerProps } from "./image-viewer";
import HIcon from "../../icon";

const props = defineProps(imageViewerProps);
const emits = defineEmits(["update:visable", "closePreview", "switch"]);

const activeIndex = ref(props.initialIndex);
const transform = ref({
  scale: 1.2,
  deg: 0,
  enableTransition: false,
});
const canvs = ref<HTMLElement>(null);
const imgRefs = ref<HTMLElement[]>([]);
const modelVisable = ref<boolean>(false);
const openModal = () => {
  if (props.visable === true) {
    modelVisable.value = true;
  }
};
const closeModal = () => {
  if (modelVisable.value === false) {
    emits("closePreview");
  }
};
onMounted(() => {
  openModal();
});
// 第一张预览照片
const isFirst = computed(() => {
  return activeIndex.value === 0;
});
// 最后一张预览照片
const isLast = computed(() => {
  return activeIndex.value === props.urlList.length - 1;
});

const setActiveItem = (index: number) => {
  const len = props.urlList.length;
  //让照片可以循环切换
  activeIndex.value = (index + len) % len;
};
//预览图片的五个操作处理
function handleActions(action: string, options = {}) {
  // if (loading.value) return;
  const { zoomRate, rotateDeg, enableTransition } = {
    zoomRate: props.zoomRate,
    rotateDeg: 90,
    enableTransition: true,
    ...options,
  };
  switch (action) {
    case "zoomOut":
      if (transform.value.scale < 7) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale * zoomRate).toFixed(3),
        );
        if (!canvs.value) break;
        canvs.value.style.setProperty(
          "--scale",
          transform.value.scale.toString(),
        );
      }
      break;
    case "zoomIn":
      if (transform.value.scale > 0.2) {
        transform.value.scale = Number.parseFloat(
          (transform.value.scale / zoomRate).toFixed(3),
        );
        if (!canvs.value) break;
        canvs.value.style.setProperty(
          "--scale",
          transform.value.scale.toString(),
        );
      }
      break;
    case "clockwise":
      transform.value.deg += rotateDeg;
      canvs.value.style.setProperty("--deg", transform.value.deg + "deg");
      break;
    case "anticlockwise":
      transform.value.deg -= rotateDeg;
      canvs.value.style.setProperty("--deg", transform.value.deg + "deg");
      break;
    case "reset":
      resetImg();
      break;
  }
  transform.value.enableTransition = enableTransition;
}
//重置图片的尺寸和角度
const resetImg = () => {
  canvs.value.style.setProperty("--deg", 0 + "deg");
  canvs.value.style.setProperty("--scale", "1.2");
  transform.value.enableTransition = false;
};
//上一张图片
const prev = () => {
  if (isFirst.value && !props.infinite) return;
  setActiveItem(activeIndex.value - 1);
  resetImg();
  //分发事件
  emits("switch");
};
// 下一张图片
const next = () => {
  if (isLast.value && !props.infinite) return;
  setActiveItem(activeIndex.value + 1);
  resetImg();
  //分发事件
  emits("switch");
};
//节流函数
function throttle(func: any, time: number, immediate = false) {
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
const mousewheelHandler = throttle((e: WheelEvent) => {
  const delta = e.deltaY || e.deltaX;
  handleActions(delta < 0 ? "zoomIn" : "zoomOut", {
    zoomRate: props.zoomRate,
  });
}, 30);
onMounted(() => {
  //监听鼠标滚动事件
  window.addEventListener("mousewheel", mousewheelHandler);
});
</script>
<script lang="ts">
export default {
  name: "HImageViewer",
};
</script>
