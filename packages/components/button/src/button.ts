import { ExtractPropTypes } from "vue";

export const ButtonType = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
];

export const ButtonSize = ["large", "normal", "small", "mini"];

/**
 * 定义button的参数
 */
export const ButtonProps = {
  type: {
    type: String,
    values: ButtonType,
  },
  size: {
    type: String,
    values: ButtonSize,
  },
  plain: Boolean,
  round: Boolean,
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
};

export type ButtonProps = ExtractPropTypes<typeof ButtonProps>;
