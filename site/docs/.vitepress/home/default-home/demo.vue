<template>
  <div class="home-demo">
    <div class="home-demo__header">
      <p class="home-demo__header--title">{{ data.title }}</p>
      <p class="home-demo__header--subtitle">{{ data.subtitle }}</p>
    </div>
    <div class="home-demo__body">
      <MacContainer>
        <div class="home-demo__content">
          <div id="output">{{ obj.output }}</div>
        </div>
      </MacContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import MacContainer from "./mac-container.vue";
import EasyTyper from "easy-typer-js";

const typing = `
<p>// main.ts</p>
import { createApp } from "vue"; 
import HviewPlus from "hview-plus";
import "hview-plus/theme-chalk/style.css";

import App from "./App.vue";

const app = createApp(App);

app.use(HviewPlus);
app.mount("#app");
`;

const data = ref({
  title: "代码演示",
  subtitle: "使用你喜欢的依赖包进行下载，快速构建网站项目",
});

const obj: any = reactive({
  output: "",
  type: "normal",
  isEnd: false,
  speed: 80,
  backSpeed: 40,
  sleep: 3000,
  singleBack: false,
  sentencePause: false,
});

onMounted(() => {
  const typed = new EasyTyper(
    obj,
    typing,
    () => {},
    (output, instance) => {
      // console.log(output);
      // console.log(instance);
      // console.log(document.getElementById("output"));
      // `${output} <span class="easy-typed-cursor">|</span>`;
    },
  );
});
</script>

<style lang="less" scoped>
.home-demo {
  width: 100%;
  max-width: 1152px;
  // opacity: 0;
  margin: 0 auto;
  margin-top: 120px;
  padding-top: 120px;
  border-top: 1px solid rgba(28, 31, 35, 0.08);
  &__header {
    text-align: center;
    &--title {
      font-size: 32px;
      color: rgba(28, 31, 35, 1);
    }
    &--subtitle {
      margin-top: 32px;
      color: rgba(28, 31, 35, 1);
      font-size: 18px;
      margin-bottom: 72px;
    }
  }
}

.fade-in {
  opacity: 1;
  transition: opacity 0.8s 0.2s ease;
}

#output {
  display: inline-flex;
  position: relative;
  &::after {
    position: absolute;
    right: -4px;
    /* 水平垂直居中 */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    width: 1.4px;
    height: 70%;
    background: #000;
    animation: flicker 0.6s linear infinite;
  }
}

@keyframes flicker {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
