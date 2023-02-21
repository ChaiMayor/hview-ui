<template>
  <div ref="homeTeam" :class="['home-team', { 'fade-in': isShow }]">
    <div class="home-team__header">
      <p class="home-team__header--title">{{
        isEn ? dataEn.title : data.title
      }}</p>
      <p class="home-team__header--subtitle">{{
        isEn ? dataEn.subtitle : data.subtitle
      }}</p>
    </div>
    <div class="home-team__image">
      <a href="https://github.com/ChaiMayor/hview-ui/graphs/contributors">
        <img
          src="https://camo.githubusercontent.com/7c68b98dc7c8bb91dc5c69e991bab828da5547d43c1c4d241b9249ce0999a72f/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d436861694d61796f722f68766965772d7569"
          data-canonical-src="https://contrib.rocks/image?repo=ChaiMayor/hview-ui"
          style="margin: 0 auto; max-width: 100%" />
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
    title: "开发团队",
    subtitle: "感谢参与开发的每一位成员，每一行代码都成就了该项目",
  },
  {
    title: "Development team",
    subtitle:
      "Thanks to everyone involved, every line of code made the project happen",
  },
);

const homeTeam = ref(null);
const isShow = ref<boolean>(false);

useIntersectionObserver(homeTeam, ([{ isIntersecting }]) => {
  isShow.value = isIntersecting;
});
</script>

<style lang="less" scoped>
.home-team {
  width: 100%;
  max-width: 1152px;
  opacity: 0;
  margin: 0 auto;
  padding-top: 120px;
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
}

.fade-in {
  opacity: 1;
  transition: opacity 0.8s 0.2s ease;
}
</style>
