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
        { text: "Input Number 数字输入框", link: "/components/input-number" },
        { text: "Radio 单选框", link: "/components/radio" },
        { text: "Slider 滑块", link: "/components/slider" },
        { text: "Checkbox 复选框", link: "/components/checkbox" },
        { text: "Switch 开关", link: "/components/switch" },
        { text: "TimePicker 时间选择器", link: "/components/time-picker" },
      ],
    },
    {
      text: "Data 数据展示",
      items: [
        { text: "Card 卡片", link: "/components/card" },
        { text: "Avatar 头像", link: "/components/avatar" },
        { text: "Carousel 走马灯", link: "/components/carousel" },
        { text: "Tag 标签", link: "/components/tag" },
        { text: "Progress 进度条", link: "/components/progress" },
        { text: "Empty 空状态", link: "/components/empty" },
        { text: "Result 结果", link: "/components/result" },
        { text: "Message 消息", link: "/components/message" },
        { text: "Timeline 时间线", link: "/components/timeline" },
        { text: "Tree 树形控件", link: "/components/tree" },
      ],
    },
    {
      text: "Navigation 导航",
      items: [
        { text: "Backtop 回到顶部", link: "/components/backtop" },
        { text: "Breadcrumb 面包屑", link: "/components/breadcrumb" },
      ],
    },
    {
      text: "Feedback 反馈组件",
      items: [
        { text: "Alert 提示", link: "/components/alert" },
        { text: "Tooltip 文字提示", link: "/components/tooltip" },
      ],
    },
    {
      text: "Ohters 其他",
      items: [{ text: "Divider 分割线", link: "/components/divider" }],
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
        { text: "Input Number", link: "/components/input-number" },
        { text: "Radio", link: "/components/radio" },
        { text: "Slider", link: "/components/slider" },
        { text: "Checkbox", link: "/components/checkbox" },
        { text: "Switch", link: "/components/switch" },
        { text: "TimePicker", link: "/components/time-picker" },
      ],
    },
    {
      text: "Data",
      items: [
        { text: "Card", link: "/components/card" },
        { text: "Avatar", link: "/components/avatar" },
        { text: "Carousel", link: "/components/carousel" },
        { text: "Tag", link: "/components/tag" },
        { text: "Progress", link: "/components/progress" },
        { text: "Empty", link: "/components/empty" },
        { text: "Result", link: "/components/result" },
        { text: "Message", link: "/components/message" },
        { text: "Timeline", link: "/components/timeline" },
        { text: "Tree", link: "/components/tree" },
      ],
    },
    {
      text: "Navigation ",
      items: [
        { text: "Backtop", link: "/components/backtop" },
        { text: "Breadcrumb", link: "/components/breadcrumb" },
      ],
    },
    {
      text: "Feedback",
      items: [
        { text: "Alert", link: "/components/alert" },
        { text: "Tooltip", link: "/components/tooltip" },
      ],
    },
    {
      text: "Ohters",
      items: [{ text: "Divider", link: "/components/divider" }],
    },
  ],
};

export const getSidebarRouter = (langPrefix: string = "/") => {
  return langPrefix === "/"
    ? addSidebarPrefix(langPrefix, sidebar)
    : addSidebarPrefix(langPrefix, sidebarEN);
};
