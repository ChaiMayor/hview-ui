import { nav } from "./utils/nav";
import { sidebar } from "./utils/sidebar";

import { defineConfig } from "vitepress";
import { mdPlugin } from "./config/plugins";

// import shiki from "shiki";

// const t = shiki.loadTheme("./material-theme.json");

export default defineConfig({
  title: "Hview UI",
  base: process.env.NODE_ENV === "production" ? "/hview-ui/" : "/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0,user-scalable=no",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // algolia: {
    //   apiKey: "aea12a0a4281c855b5d23789e868f378",
    //   indexName: "interview-questions-record",
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: "XQYLP2L9WC",
    // },
    lastUpdatedText: "最后更新时间",
    nav,
    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ChaiMayor/hview-ui",
      },
    ],
    outline: [1, 3],
    outlineTitle: "CONTENTS",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present 芜湖起飞",
    },
  },
  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //     title: "Web 前端开发",
  //     description: "总结 web 前端相关面试题，以及个人技术的文章总结。",
  //   },
  //   "/en/": {
  //     lang: "en-US",
  //     title: "Web front-end development",
  //     description:
  //       "Summarize web front-end related interview questions, as well as personal technical article summaries.",
  //   },
  // },
  markdown: {
    // "dark-plus" vscode黑暗
    // slack-dark vscode黑暗
    // css-variables 自定义
    theme: "css-variables",
    config: (md) => mdPlugin(md),
  },
});
