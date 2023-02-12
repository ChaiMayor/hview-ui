import { ExtractPropTypes } from "vue";

export const iconProps = {
  //图标名
  name: {
    type: String,
    default: "",
  },
  // 图标右上角展示小红点
  dot: {
    type: Boolean,
  },
  // 图标右上角展示徽标
  badge: {
    type: [String, Number],
  },
  // 图标颜色
  color: {
    type: String,
  },
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
