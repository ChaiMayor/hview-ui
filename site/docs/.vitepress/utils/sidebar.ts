import { addSidebarPrefix } from "./route";

const sidebar = {
  "/docs/": [
    {
      text: "基础",
      items: [
        { text: "设计", link: "/docs/design" },
        { text: "安装", link: "/docs/installation" },
        { text: "快速上手", link: "/docs/quickstart" },
      ],
    },
    {
      text: "进阶",
      items: [
        { text: "国际化", link: "/docs/" },
        { text: "主题", link: "/docs/" },
        { text: "更新日志", link: "/docs/" },
      ],
    },
    {
      text: "开发",
      items: [{ text: "开发指南", link: "/docs/" }],
    },
  ],
  "/components/": [
    {
      text: "基础组件",
      items: [
        { text: "Button 按钮", link: "/components/button" },
        { text: "Icon 图标", link: "/components/icon" },
        { text: "Link 链接", link: "/components/link" },
        { text: "Container 布局容器", link: "/components/container" },
        { text: "ScrollBar 滚动条", link: "/components/scrollbar" },
      ],
    },
    {
      text: "Form 表单组件",
      items: [
        { text: "Input 输入框", link: "/components/input" },
        { text: "Radio 单选框", link: "/components/radio" },
        { text: "Slider 滑块", link: "/components/slider" },
        { text: "Upload 上传", link: "/components/upload" },
      ],
    },
    {
      text: "Data 数据展示",
      items: [
        { text: "Card 卡片", link: "/components/card" },
        { text: "Avatar 头像", link: "/components/avatar" },
      ],
    },
    {
      text: "Feedback 反馈组件",
      items: [{ text: "Tooltip 文字提示", link: "/components/tooltip" }],
    },
  ],
};
const sidebarEN = {
  "/en-US/docs/": [
    {
      text: "Basic",
      items: [
        { text: "Design", link: "/docs/design" },
        { text: "Installation", link: "/docs/installation" },
        { text: "Quick Start", link: "/docs/quickstart" },
      ],
    },
    {
      text: "Advanced",
      items: [
        { text: "i18n", link: "/docs/" },
        { text: "Theming", link: "/docs/" },
        { text: "Release", link: "/docs/" },
      ],
    },
    {
      text: "Development",
      items: [{ text: "Development Guide", link: "/docs/" }],
    },
  ],
  "/en-US/components/": [
    {
      text: "Basic",
      items: [
        { text: "Button", link: "/components/button" },
        { text: "Icon", link: "/components/icon" },
        { text: "Link", link: "/components/link" },
        { text: "Container", link: "/components/container" },
        { text: "ScrollBar", link: "/components/scrollbar" },
      ],
    },
    {
      text: "Form",
      items: [
        { text: "Input", link: "/components/input" },
        { text: "Radio", link: "/components/radio" },
        { text: "Slider", link: "/components/slider" },
        { text: "Upload", link: "/components/upload" },
      ],
    },
    {
      text: "Data",
      items: [
        { text: "Card", link: "/components/card" },
        { text: "Avatar", link: "/components/avatar" },
      ],
    },
    {
      text: "Feedback",
      items: [{ text: "Tooltip", link: "/components/tooltip" }],
    },
  ],
};

export const getSidebarRouter = (langPrefix: string = "/") => {
  return langPrefix === "/" ? addSidebarPrefix(langPrefix, sidebar) : addSidebarPrefix(langPrefix, sidebarEN);
};
