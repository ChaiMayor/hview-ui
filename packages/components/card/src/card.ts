import type { ExtractPropTypes, StyleValue, PropType } from "vue";
const definePropType = <T>(val: any): PropType<T> => val;
export const cardProps = {
  // 头部标题
  header: {
    type: String,
    default: "",
  },
  // 操作区域
  handle: {
    type: String,
    default: "",
  },
  // 给卡片的body添加的样式
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: "",
  },
  // 是否展示卡片阴影
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always",
  },
};
export type CardProps = ExtractPropTypes<typeof cardProps>;
