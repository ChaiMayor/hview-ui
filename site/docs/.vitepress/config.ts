import { getNavRouter } from "./utils/nav";
import { getSidebarRouter } from "./utils/sidebar";

import { defineConfig } from "vitepress";
import { mdPlugin } from "./config/plugins";

export default defineConfig({
  // refer: https://vitepress.vuejs.org/guide/i18n
  // issue: https://github.com/vuejs/vitepress/issues/1860
  title: "Hview UI",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        // @ts-ignore
        nav: getNavRouter(),
        // @ts-ignore
        sidebar: getSidebarRouter(),
        lastUpdatedText: "最后更新时间",
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
      },
    },
    "en-US": {
      label: "English",
      lang: "en-US",
      themeConfig: {
        // @ts-ignore
        nav: getNavRouter("/en-US/"),
        // @ts-ignore
        sidebar: getSidebarRouter("/en-US/"),
        lastUpdatedText: "Last update time",
        docFooter: {
          prev: "Previous article",
          next: "Next article",
        },
      },
    },
  },
  base: process.env.NODE_ENV === "production" ? "/hview-ui/" : "/",
  head: [
    ["link", { rel: "icon", href: "https://oss.zhishiyu.online/common/hview-logo.png" }],
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
    //   locales: {
    //     root: {
    //       placeholder: "搜索文档",
    //       translations: {
    //         button: {
    //           buttonText: "搜索文档",
    //           buttonAriaLabel: "搜索文档",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //             reportMissingResultsText: "你认为该查询应该有结果？",
    //             reportMissingResultsLinkText: "点击反馈",
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
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
