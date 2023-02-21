<template>
  <div ref="homeJoin" :class="['home-join', { 'fade-in': isShow }]">
    <div class="home-join__header">
      <p class="home-join__header--title">{{
        isEn ? dataEn.title : data.title
      }}</p>
      <p class="home-join__header--subtitle">{{
        isEn ? dataEn.subtitle : data.subtitle
      }}</p>
    </div>
    <div class="home-join__image">
      <a href="https://github.com/ChaiMayor/hview-ui">
        <img
          width="240"
          style="margin: 0 auto; max-width: 100%"
          src="https://camo.githubusercontent.com/ee17883bd5b6024ceffd61799f3f0bcb475d9b55fd2ae37ea1a7895bf8eb35d0/68747470733a2f2f6f73732e7a686973686979752e6f6e6c696e652f636f6d6d6f6e2f68766965772d75692e706e67"
          data-canonical-src="https://contrib.rocks/image?repo=ChaiMayor/hview-ui" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useIsEn, useData } from "../hooks/use-is-en";

const { isEn } = useIsEn();
const { data, dataEn } = useData(
  {
    title: "如何加入我们",
    subtitle: "飞书扫码加入开发群聊，参与后续开发维护开源项目",
  },
  {
    title: "How to join us",
    subtitle:
      "Fly book scan code to join the development group chat, participate in the follow-up development and maintenance of open source projects",
  },
);

const homeJoin = ref(null);
const isShow = ref<boolean>(false);

useIntersectionObserver(homeJoin, ([{ isIntersecting }]) => {
  isShow.value = isIntersecting;
});
</script>

<style lang="less" scoped>
.home-join {
  width: 100%;
  opacity: 0;
  max-width: 1152px;
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
      margin-bottom: 62px;
    }
  }
}

.fade-in {
  opacity: 1;
  transition: opacity 0.8s 0.2s ease;
}
</style>
