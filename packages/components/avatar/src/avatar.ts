import type { ExtractPropTypes, PropType } from "vue";
import Avatar from "..";
const definePropType = <T>(val: any): PropType<T> => val;

type FitProperty = "contain" | "cover" | "fill" | "none" | "scale-down";

export const AvatarSize = ["", "default", "small", "large"];
export const AvatarShape = ["circle", "square"];
export const AvatarBorder = ["none", "solid", "dot"];

export const avatarProps = {
  // 头像尺寸
  size: {
    type: [Number, String],
    values: AvatarSize,
    default: "default",
  },
  // 头像形状
  shape: {
    type: String,
    values: AvatarShape,
    default: "circle",
  },
  // 头像边框
  border: {
    type: String,
    value: AvatarBorder,
    default: "solid",
  },
  // 图标类型
  icon: {
    type: String,
  },
  // 图片源地址
  src: {
    type: String,
    default: "",
  },
  // srcSet属性
  srcSet: String,
  // alt属性
  alt: String,
  // 设置图片适应方案
  fit: {
    type: definePropType<FitProperty>(String),
    default: "cover",
  },
};
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
};
export type AvatarEmits = typeof avatarEmits;
