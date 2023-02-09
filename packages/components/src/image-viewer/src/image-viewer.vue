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
          <!-- ARROW -->
          <div class="arrow">
            <span @click="prev" class="arrowLeft">
              <h-icon name="ArrowLeft"></h-icon>
            </span>
            <span @click="next">
              <h-icon name="ArrowRight" class="arrowRight"></h-icon>
            </span>
          </div>
          <!-- ACTIONS -->
          <div class="actions">
            <h-icon @click="handleActions('zoomOut')" name="zoomOut"></h-icon>
            <h-icon @click="handleActions('zoomIn')" name="zoomIn"> </h-icon>
            <h-icon @click="handleActions('reset')" name="fullScreen"></h-icon>
            <h-icon @click="handleActions('anticlockwise')" name="refreshLeft"></h-icon>
            <h-icon @click="handleActions('clockwise')" name="refreshRight"></h-icon>
          </div>
          <!-- CANVAS -->
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
import "../style/index.less";
import { imageViewerProps } from "./image-viewer";
const props = defineProps(imageViewerProps);
const emits = defineEmits(["update:visable", "closePreview", "switch"]);

const activeIndex = ref(props.initialIndex);
const transform = ref({
  scale: 1,
  deg: 0,
  enableTransition: false,
});
const canvs = ref<HTMLElement>(null);
const imgRefs = ref<HTMLElement[]>([]);
const modelVisable = ref<Boolean>(false);
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
        transform.value.scale = Number.parseFloat((transform.value.scale * zoomRate).toFixed(3));
        canvs.value.style.setProperty("--scale", transform.value.scale.toString());
      }
      break;
    case "zoomIn":
      if (transform.value.scale > 0.2) {
        transform.value.scale = Number.parseFloat((transform.value.scale / zoomRate).toFixed(3));
        canvs.value.style.setProperty("--scale", transform.value.scale.toString());
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
  canvs.value.style.setProperty("--scale", "1");
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
</script>
<script lang="ts">
export default {
  name: "HImageViewer",
};
</script>
<style lang="scss" scoped></style>
