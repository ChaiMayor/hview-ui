import { getNavRouter } from "./utils/nav";
import { getSidebarRouter } from "./utils/sidebar";

import { defineConfig } from "vitepress";
import { mdPlugin } from "./config/plugins";

export default defineConfig({
  locales: {
    "/": {
      label: "中文",
      lang: "zh-CN",
      title: "Hview UI",
    },
    "/en-US/": {
      label: "English",
      lang: "en-US",
      title: "Hview UI",
    },
  },
  base: process.env.NODE_ENV === "production" ? "/hview-ui/" : "/",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
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
    algolia: {
      apiKey: "aea12a0a4281c855b5d23789e868f378",
      indexName: "interview-questions-record",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "XQYLP2L9WC",
    },
    localeLinks: {
      text: "",
      items: [
        {
          link: "/",
          text: "简体中文",
        },
        {
          link: "/en-US/",
          text: "English",
        },
      ],
    },
    // @ts-ignore
    locales: {
      "/": {
        label: "中文",
        nav: getNavRouter(),
        sidebar: getSidebarRouter(),
      },
      "/en-US/": {
        label: "English",
        nav: getNavRouter("/en-US/"),
        sidebar: getSidebarRouter("/en-US/"),
      },
    },
    lastUpdatedText: "最后更新时间",
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
  markdown: {
    // dark-plus vscode
    // css-variables custom
    theme: "css-variables",
    config: (md) => mdPlugin(md),
  },
  async buildEnd(siteConfig) {},
  async transformHtml(code, id, context) {},
  async transformPageData(pageData) {},
});
