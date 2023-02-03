import type { ExtractPropTypes } from "vue";

export const AlertProps = {
  title: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    values: ["success", "warning", "info", "error"],
    default: "info",
  },
  // 描述性文本
  description: {
    type: String,
    default: "",
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: true,
  },
  // 文字是否居中
  center: Boolean,
  // 自定义关闭按钮文本
  closeText: {
    type: String,
    default: "",
  },
  // 是否显示类型图标
  showIcon: Boolean,
  // 主题样式
  effect: {
    type: String,
    values: ["light", "dark"],
    default: "light",
  },
};

export type AlertProps = ExtractPropTypes<typeof AlertProps>;

export const AlertEmits = {
  close: (event: MouseEvent) => event instanceof MouseEvent,
};
export type AlertEmits = typeof AlertEmits;
