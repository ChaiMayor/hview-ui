import { addNavPrefix } from "./route";

const version = "v1.0.0";

const nav = [
  {
    text: "首页",
    activeMatch: "",
    link: "/",
  },
  {
    text: "指南",
    activeMatch: "^/docs/",
    link: "/docs/installation",
  },
  {
    text: "组件库",
    activeMatch: "^/components/",
    link: "/components/button",
  },
  {
    text: "演武场",
    link: "https://playground.zhishiyu.online/",
  },
  {
    text: version,
    items: [
      {
        text: "更新日志",
        link: "https://github.com/ChaiMayor/hview-ui/blob/dev/CHANGELOG.md",
      },
      { text: "作者", link: "https://github.com/ChaiMayor" },
    ],
  },
];

const navEN = [
  {
    text: "Home",
    activeMatch: "",
    link: "/",
  },
  {
    text: "Guide",
    activeMatch: "^/en-US/docs/",
    link: "/docs/installation",
  },
  {
    text: "Component",
    activeMatch: "^/en-US/components/",
    link: "/components/button",
  },
  {
    text: "Playground",
    link: "https://playground.zhishiyu.online/",
  },
  {
    text: version,
    items: [
      {
        text: "Releases",
        link: "https://github.com/ChaiMayor/hview-ui/blob/dev/CHANGELOG.md",
      },
      { text: "Author", link: "https://github.com/ChaiMayor" },
    ],
  },
];

export const getNavRouter = (langPrefix: string = "/") => {
  return langPrefix === "/"
    ? addNavPrefix(langPrefix, nav)
    : addNavPrefix(langPrefix, navEN);
};
