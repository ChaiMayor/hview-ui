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
        { text: "国际化", link: "/docs/i18n" },
        { text: "暗黑模式", link: "/docs/dark" },
      ],
    },
    {
      text: "开发",
      items: [
        { text: "开发指南", link: "/docs/guide" },
        { text: "开发常见问题", link: "/docs/faq" },
      ],
    },
  ],
  "/components/": [
    {
      text: "基础组件",
      items: [
        { text: "Button 按钮", link: "/components/button" },
        { text: "Color 色彩", link: "/components/color" },
        { text: "Icon 图标", link: "/components/icon" },
        { text: "Link 链接", link: "/components/link" },
        { text: "Container 布局容器", link: "/components/container" },
        { text: "ScrollBar 滚动条", link: "/components/scrollbar" },
        // { text: "Space 间距", link: "/components/space" },
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
        { text: "Avatar 头像", link: "/components/avatar" },
        { text: "Card 卡片", link: "/components/card" },
        { text: "Carousel 走马灯", link: "/components/carousel" },
        { text: "Descriptions 描述列表", link: "/components/descriptions" },
        { text: "Empty 空状态", link: "/components/empty" },
        { text: "Message 消息", link: "/components/message" },
        { text: "Progress 进度条", link: "/components/progress" },
        { text: "Result 结果", link: "/components/result" },
        { text: "Tag 标签", link: "/components/tag" },
        { text: "Timeline 时间线", link: "/components/timeline" },
        { text: "Tree 树形控件", link: "/components/tree" },
        { text: "Badge 徽章", link: "/components/badge" },
        { text: "Image 图片", link: "/components/image" },
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
        // { text: "Modal 模态框", link: "/components/modal" },
        { text: "Popover 弹出框", link: "/components/popover" },
        { text: "Dialog 对话框", link: "/components/dialog" },
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
        { text: "i18n", link: "/docs/i18n" },
        { text: "Dark Mode", link: "/docs/dark" },
        // { text: "Theming", link: "/docs/" },
      ],
    },
    {
      text: "Development",
      items: [
        { text: "Development Guide", link: "/docs/guide" },
        { text: "Development FAQ", link: "/docs/faq" },
      ],
    },
  ],
  "/en-US/components/": [
    {
      text: "Basic",
      items: [
        { text: "Button", link: "/components/button" },
        { text: "Color", link: "/components/color" },
        { text: "Icon", link: "/components/icon" },
        { text: "Link", link: "/components/link" },
        { text: "Container", link: "/components/container" },
        { text: "ScrollBar", link: "/components/scrollbar" },
        // { text: "Space", link: "/components/space" },
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
        { text: "Avatar", link: "/components/avatar" },
        { text: "Card", link: "/components/card" },
        { text: "Carousel", link: "/components/carousel" },
        { text: "Descriptions", link: "/components/descriptions" },
        { text: "Empty", link: "/components/empty" },
        { text: "Message", link: "/components/message" },
        { text: "Progress", link: "/components/progress" },
        { text: "Result", link: "/components/result" },
        { text: "Tag", link: "/components/tag" },
        { text: "Timeline", link: "/components/timeline" },
        { text: "Tree", link: "/components/tree" },
        { text: "Badge", link: "/components/badge" },
        { text: "Image", link: "/components/image" },
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
        // { text: "Modal", link: "/components/modal" },
        { text: "Popover", link: "/components/popover" },
        { text: "Dialog", link: "/components/dialog" },
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
