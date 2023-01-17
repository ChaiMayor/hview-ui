import { nav } from "./utils/nav";
import { sidebar } from "./utils/sidebar";

import { defineConfig } from "vitepress";
import { mdPlugin } from "./config/plugins";

export default defineConfig({
  title: "Hview UI",
  base: process.env.NODE_ENV === "production" ? "/hviewui/" : "/",
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
    lastUpdatedText: "最后更新时间",
    nav,
    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ChaiMayor/hview-ui",
      },
    ],
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
});
