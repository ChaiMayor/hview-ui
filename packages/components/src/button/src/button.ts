import { ExtractPropTypes } from "vue";

export const ButtonType = ["default", "primary", "success", "warning", "danger"];

export const ButtonSize = ["large", "normal", "small", "mini"];

/**
 * 定义button的参数
 */
export const buttonProps = {
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
  disabled: Boolean,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
