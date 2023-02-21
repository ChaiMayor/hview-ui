<script setup>
import DefaultTheme from "vitepress/theme";
// import Divider from "../home/default-home/divider.vue";
import Team from "../home/default-home/team.vue";
import JoinUs from "../home/default-home/join-us.vue";
import DemoEditor from "../home/default-home/demo-editor.vue";
import Projects from "../home/default-home/projects.vue";

const { Layout } = DefaultTheme;

// refer: https://vitepress.vuejs.org/guide/theme-team-page
// const members = [
//   {
//     avatar: "https://www.github.com/yyx990803.png",
//     name: "Evan You",
//     title: "Creator",
//     links: [
//       { icon: "github", link: "https://github.com/yyx990803" },
//       { icon: "twitter", link: "https://twitter.com/youyuxi" },
//     ],
//   },
// ];
</script>

<template>
  <!-- refer: https://vitepress.vuejs.org/guide/theme-introduction#extending-the-default-theme -->
  <Layout>
    <!-- 首页下面 -->
    <template #home-features-after>
      <DemoEditor> </DemoEditor>
      <Projects></Projects>
      <Team></Team>
      <JoinUs></JoinUs>
    </template>
    <!-- 文档页面最后 -->
    <!-- <template #doc-footer-before> </template> -->
    <!-- 左侧导航栏上面 -->
    <!-- <template #sidebar-nav-before> </template> -->
    <!-- 右侧大纲上面 -->
    <!-- <template #aside-top> </template> -->
    <!-- 导航末尾 -->
    <!-- <template #nav-bar-content-after> </template> -->
  </Layout>
</template>
