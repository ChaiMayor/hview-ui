<script setup lang="ts">
import { ref } from "vue";

const content = ref([
  "#4763be",
  "#7998ff",
  "#91aaff",
  "#abbfff",
  "#c6d3ff",
  "#e0e7ff",
]);

const content1 = ref([
  "#529b2e",
  "#95d475",
  "#b3e19d",
  "#d1edc4",
  "#e1f3d8",
  "#f0f9eb",
]);

const content2 = ref([
  "#b88230",
  "#eebe77",
  "#f3d19e",
  "#f8e3c5",
  "#faecd8",
  "#fdf6ec",
]);

const content3 = ref([
  "#c45656",
  "#f89898",
  "#fab6b6",
  "#fcd3d3",
  "#fde2e2",
  "#fef0f0",
]);

const content4 = ref([
  "#73767a",
  "#b1b3b8",
  "#c8c9cc",
  "#dedfe0",
  "#e9e9eb",
  "#f4f4f5",
]);


const neutral1 = ref([
  { title: "Primary Text", main: "#303133" },
  { title: "Regular Text", main: "#606266" },
  { title: "Secondary Text", main: "#909399" },
  { title: "Placeholder Text", main: "#A8ABB2" },
  { title: "Disabled Text", main: "#C0C4CC" },
]);


const neutral2 = ref([
  { title: "Darker Border", main: "#CDD0D6" },
  { title: "Dark Border", main: "#D4D7DE" },
  { title: "Base Border", main: "#DCDFE6" },
  { title: "Light Border", main: "#E4E7ED" },
  { title: "Lighter Border", main: "#EBEEF5" },
  { title: "Extra-light Border", main: "#F2F6FC" },
]);

const neutral3 = ref([
  { title: "Darker Fill", main: "#E6E8EB" },
  { title: "Dark Fill", main: "#EBEDF0" },
  { title: "Base Fill", main: "#F0F2F5" },
  { title: "Light Fill", main: "#F5F7FA" },
  { title: "Lighter Fill", main: "#FAFAFA" },
  { title: "Extra-light Fill", main: "#FAFCFF" },
  { title: "Blank Fill", main: "#FFFFFF" },
]);

const neutral4 = ref([
  { title: "Basic Black", main: "#000000" },
  { title: "Basic White", main: "#FFFFFF" },
  { title: "Transparent", main: "transparent" },
  { title: "Page Background", main: "#F2F3F5" },
  { title: "Base Background", main: "#FFFFFF" },
  { title: "Overlay Background", main: "#FFFFFF" },
]);
</script>

<style scoped>
.auxiliary > div {
  flex: 1,
}

.container2 {
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
}

.container2 > div {
  display: flex;
  gap: 8px;
  width: 100%;
  flex-direction: column;
}
</style>


# Color

To avoid visual differences, Hview UI uses a specific palette to specify colors, providing a consistent look and feel for the products you're building.

## Dominant color

The default theme color for the Hview UI is an understated, mysterious blue-purple color.

<div style="color: #fff">
  <h-color :content="content"></h-color>
</div>

## Auxiliary color

In addition to the main color, you need to use different scene colors in different scenarios (for example, a dangerous color indicates a dangerous action)


<div class="auxiliary" style="display: flex; width: 100%; justify-content: space-between; gap: 20px; color: #fff">
  <h-color :content="content1" title="Success" main="#67C23A"></h-color>
  <h-color :content="content2" title="Warning" main="#E6A23C"></h-color>
  <h-color :content="content3" title="Danger" main="#F56C6C"></h-color>
  <h-color :content="content4" title="Info" main="#909399"></h-color>
</div>


## Neutral color

Neutral colors are used for text, background, and border colors. The hierarchy is represented by the use of different neutral colors.

<div class="container2">
  <div class="container_one" style="color: #fff">
    <h-color  
    v-for="(item, index) in neutral1"
      :key="index"
      :main="item.main"
      :title="item.title"></h-color>
  </div>
  <div class="container_two" style="color: #000">
    <h-color
      v-for="(item, index) in neutral2"
      :key="index"
      :main="item.main"
      :title="item.title"></h-color>
  </div>
  <div class="container_three">
    <h-color
      v-for="(item, index) in neutral3"
      :key="index"
      :main="item.main"
      :title="item.title"></h-color>
  </div>
  <div class="container_four">
    <h-color
      v-for="(item, index) in neutral4"
      :style="index === 0 ? 'color: #fff' : ''"
      :key="index"
      :main="item.main"
      :title="item.title"></h-color>
  </div>
</div>