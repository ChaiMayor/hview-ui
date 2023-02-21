<template>
  <div ref="homeDemo" :class="['home-demo', { 'fade-in': isShow }]">
    <div class="home-demo__header">
      <p class="home-demo__header--title">{{
        isEn ? dataEn.title : data.title
      }}</p>
      <p class="home-demo__header--subtitle">{{
        isEn ? dataEn.subtitle : data.subtitle
      }}</p>
    </div>
    <div class="home-demo__body">
      <MacContainer>
        <div id="demo-editor" ref="domRef">
          <div class="terminal">
            <pre
              ref="block"
              style="border: 0; margin: 0; background-color: transparent"
              class="language-vue extra-class"></pre>
          </div>
        </div>
      </MacContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypeIt from "typeit";
import { El } from "typeit/dist/types";
import { ref, onMounted, watch } from "vue";
import { useInViewport } from "vue-hooks-plus";
import MacContainer from "./mac-container.vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useIsEn, useData } from "../hooks/use-is-en";

const homeDemo = ref(null);
const isShow = ref<boolean>(false);

const { isEn } = useIsEn();
const { data, dataEn } = useData(
  {
    title: "快速使用",
    subtitle: "使用你喜欢的包管理工具进行下载，快速构建网站项目",
  },
  {
    title: "Quick use",
    subtitle:
      "Use your favorite package management tool to download and quickly build website projects",
  },
);

useIntersectionObserver(homeDemo, ([{ isIntersecting }]) => {
  isShow.value = isIntersecting;
});

const domRef = ref(null);
const isMount = ref(false);
const isFirst = ref(true);
const [inViewport] = useInViewport(domRef);

const block = ref<El>();

watch([inViewport, isMount], (curr) => {
  if (curr?.[0] && curr?.[1] && isFirst.value === true) {
    isFirst.value = false;
    if (block.value)
      new TypeIt(block.value, {
        speed: 50,
        startDelay: 900,
        // afterStep: () => {
        //   console.log(
        //     JSON.parse(JSON.stringify(block.value!.innerText.replace("|", ""))),
        //   );
        // },
      })
        .type(
          '<h1 style="opacity: 0.5;color: var(--vi-welcome-color)">Welcome use Hview UI!</h1><br /><br />',
          {
            delay: 100,
          },
        )
        .type(
          `<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> { createApp } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">"vue"</span><span style="color:var(--shiki-color-text);">;</span></span>  <br /><br />`,
        )
        .type(
          '<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> HviewPlus </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">"hview-plus"</span><span style="color:var(--shiki-color-text);">;</span></span><br /><br />',
          {
            delay: 100,
          },
        )
        .type(
          `<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">"hview-plus/theme-chalk/style.css"</span><span style="color:var(--shiki-color-text);">;</span></span><br /><br />`,
        )
        .type(
          `<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> App </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">"./App.vue"</span><span style="color:var(--shiki-color-text);">;</span></span><br /><br /><br />`,
        )
        .type(
          `<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">createApp</span><span style="color:var(--shiki-color-text);">(App);</span></span>`,
        )
        .type(
          `<br /><br /><span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-function);">.use</span><span style="color:var(--shiki-color-text);">(HviewPlus);</span></span>`,
        )
        .type(
          `<br /><br /><span class="line"><span style="color:var(--shiki-token-constant);">app</span><span style="color:var(--shiki-token-function);">.mount</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">"#app"</span><span style="color:var(--shiki-color-text);">);</span></span>`,
        )
        .go();
  }
});

onMounted(() => {
  isMount.value = true;
});
</script>

<style lang="less" scoped>
.home-demo {
  width: 100%;
  max-width: 1152px;
  opacity: 0;
  margin: 0 auto;
  margin-top: 120px;
  padding-top: 120px;
  border-top: 1px solid rgba(28, 31, 35, 0.08);
  &__header {
    text-align: center;
    &--title {
      font-size: 32px;
      color: var(--vi-color-primary);
    }
    &--subtitle {
      margin-top: 32px;
      color: var(--vi-color-primary);
      font-size: 18px;
      margin-bottom: 72px;
    }
  }
  &__body {
    height: 432px;
  }
}

.fade-in {
  opacity: 1;
  transition: opacity 0.8s 0.2s ease;
}

#demo-editor {
  display: flex;
  overflow: hidden;
}

.terminal {
  & > pre {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .terminal {
    font-size: 12px;
    margin: 12px 12px;
  }
}
@media (max-width: 370px) {
  .terminal {
    font-size: 12px;
    margin: 12px 12px;
  }
}
</style>
