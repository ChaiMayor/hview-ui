<template>
  <div class="h-color-picker">
    <div class="h-color-picker-select" @click="() => (isShow = !isShow)">
      <div ref="show2" class="h-color-picker-main"></div>
    </div>
    <div class="h-color-picker-container" v-show="isShow">
      <canvas
        @click="mainCanvasClick"
        ref="mainCanvas"
        class="main-canvas"></canvas>
      <canvas
        @click="subCanvasClick"
        ref="subCanvas"
        width="20"
        height="160"
        class="sub-canvas"></canvas>
      <div ref="slider" class="sub-picker-slider"></div>
      <canvas
        ref="opacityCanvas"
        width="200"
        height="20"
        class="opacity-canvas"></canvas>
      <div ref="oSlider" class="opacity-picker-slider"></div>
      <div ref="show" class="h-color-picker-main show"></div>
      <div class="picker-input">
        <h-input
          v-model="input"
          size="small"
          style="display: inline; width: 180px"></h-input>
        <h-button class="btn" size="mini" @click="closeShow">OK</h-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
import { copyText } from "@hview-plus/utils";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  RGB: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
const mainCanvas = ref();
const subCanvas = ref();
const opacityCanvas = ref();
const slider = ref();
const oSlider = ref();
const input = ref(props.modelValue);
const show = ref();
const show2 = ref();
const rgb = ref([10, 95, 206, 1]);
let color = ref("");
const isShow = ref(false);
const instance = getCurrentInstance();
const { $message } = instance!.appContext.config.globalProperties;
const SuccessClick = (text: string) => {
  $message({
    message: `复制样式成功 ${text}`,
    type: "success",
    duration: 2000,
  });
};

const closeShow = () => {
  isShow.value = !isShow.value;
  const text = props.RGB ? `rbga(${rgb.value.join(",")})` : color.value;
  SuccessClick(text);
  copyText(text);
  emit("update:modelValue", input.value);
};

const setMainCanvasColor = (color: string | null) => {
  color = color || "red";
  const ctx = mainCanvas.value.getContext("2d");
  const width = mainCanvas.value.width;
  const height = mainCanvas.value.height;
  const linearGra = ctx.createLinearGradient(0, 0, width, height);
  linearGra.addColorStop(0.0, "#fff");
  linearGra.addColorStop(0.5, color);
  linearGra.addColorStop(1.0, "#000");
  ctx.fillStyle = linearGra;
  ctx.fillRect(0, 0, width, height);
  ctx.fill();
};

const setSubCanvasColor = () => {
  const ctx = subCanvas.value.getContext("2d");
  const width = subCanvas.value.width;
  const height = subCanvas.value.height;
  const linearGra = ctx.createLinearGradient(0, 0, 0, height);
  const colors = [
    "#FF3333",
    "#F3FF33",
    "#33FF33",
    "#3333FF",
    "#FF33F3",
    "#FF3333",
  ];
  let diff = 0.0;
  for (const color of colors) {
    linearGra.addColorStop(diff, color);
    diff += 0.2;
  }
  ctx.fillStyle = linearGra;
  ctx.fillRect(0, 0, width, height);
  ctx.fill();
};

const formatData = (str: string) => (str.length == 2 ? str : "0" + str);

const getSubCanvasColor = (x: number, y: number) => {
  if (x < 0 || x > subCanvas.value.width) x = 10;
  const ctx = subCanvas.value.getContext("2d");
  ctx.getContextAttributes().willReadFrequently = true;
  const data = ctx.getImageData(x, y, 1, 1).data;
  color.value = "#";
  const t: any = [];
  for (let i = 0; i < data.length - 1; i++) {
    t.push(data[i]);
    color.value += formatData(data[i].toString(16));
  }
  t.push(rgb.value[3]);
  rgb.value = t;
  setMainCanvasColor(color.value);
};

const mainCanvasClick = (e: MouseEvent) => {
  const ctx = mainCanvas.value.getContext("2d");
  ctx.getContextAttributes().willReadFrequently = true;

  const data = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
  color.value = "#";
  const t: any = [];
  for (let i = 0; i < data.length - 1; i++) {
    t.push(data[i]);
    color.value += formatData(data[i].toString(16));
  }
  t.push(rgb.value[3]);
  rgb.value = t;
  render();
  setOpactiyCanvasColor(rgb.value);
};

const render = () => {
  input.value = props.RGB ? `rgba(${rgb.value.join(",")})` : color.value;
  show.value.style.backgroundColor = color.value;
  show2.value.style.backgroundColor = color.value;
};

const subCanvasClick = (e: MouseEvent) => {
  getSubCanvasColor(e.offsetX, e.offsetY);
};

const drag = () => {
  const sliderOriginTop = slider.value.offsetTop;
  slider.value.addEventListener("mousedown", (e: MouseEvent) => {
    const y = e.clientY - slider.value.offsetTop;
    const x = e.clientX - slider.value.offsetLeft;
    const move = (e: MouseEvent) => {
      slider.value.style.top = e.clientY - y + "px";
      getSubCanvasColor(e.clientX - x, e.clientY - y - sliderOriginTop);
      slider.value.style.top =
        Math.min(
          Math.max(e.clientY - y, sliderOriginTop),
          subCanvas.value.height + sliderOriginTop,
        ) + "px";
    };
    document.addEventListener("mousemove", move); // 小细节，更换绑定在document上，解决鼠标拖动太快事件不会触发的bug
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  });

  const oSliderOriginLeft = oSlider.value.offsetLeft;
  // 第二个滑块
  oSlider.value.addEventListener("mousedown", (e: MouseEvent) => {
    const x = e.clientX - oSlider.value.offsetLeft;
    const move = (e: MouseEvent) => {
      getOCanvasOpacity(e.clientX - x - oSliderOriginLeft);
      oSlider.value.style.left =
        Math.min(
          Math.max(e.clientX - x, oSliderOriginLeft),
          oSliderOriginLeft + opacityCanvas.value.width,
        ) + "px";
    };
    document.addEventListener("mousemove", move); // 小细节，更换绑定在document上，解决鼠标拖动太快事件不会触发的bug
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  });
};

const getOCanvasOpacity = (x: number) => {
  const opacity = x / opacityCanvas.value.width;
  rgb.value[3] = opacity;
  render();
};

const drawOpacityBlocks = (rgb: number[]) => {
  const ctx = opacityCanvas.value.getContext("2d");
  // 小方块的宽度和高度
  const blockWidth = 10;
  const blockHeight = 10;

  // 计算小方块的位置
  const numBlocks = 10; // 可以根据需要调整小方块的数量
  const gap =
    (opacityCanvas.value.width - numBlocks * blockWidth) / (numBlocks - 1);
  let x = 0;
  // 绘制小方块
  for (let k = 0; k < 2; k++) {
    x = k * blockHeight;
    for (let i = 0; i < numBlocks; i++) {
      const value = i / (numBlocks - 1);
      // const color = `rgba(233, 234, 234, ${value})`;
      const color = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${value})`;
      ctx.fillStyle = color;
      ctx.fillRect(
        x,
        k * (opacityCanvas.value.height - blockHeight),
        blockWidth,
        blockHeight,
      );
      x += blockWidth + gap;
    }
  }
};

const setOpactiyCanvasColor = (rgb: number[]) => {
  const ctx = opacityCanvas.value.getContext("2d");
  // 渐变的起始和结束颜色
  const startColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0)`;
  const endColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;

  // 创建线性渐变对象，从左到右渐变
  const gradient = ctx.createLinearGradient(0, 0, opacityCanvas.value.width, 0);
  gradient.addColorStop(0, startColor);
  gradient.addColorStop(1, endColor);

  // 填充Canvas
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, opacityCanvas.value.width, opacityCanvas.value.height);
  // 绘制透明度条的小方块
  drawOpacityBlocks(rgb);
};
onMounted(() => {
  setMainCanvasColor(null);
  setSubCanvasColor();
  setOpactiyCanvasColor(rgb.value);
  drag();
});
</script>
<script lang="ts">
export default {
  name: "HColorPicker",
};
</script>
