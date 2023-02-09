import { ExtractPropTypes } from "vue";

export const LinkType = ["primary", "success", "info", "warning", "danger"];

/**
 * 定义Link的参数
 */
export const LinkProps = {
  type: {
    type: String,
    validator(value: string) {
      return LinkType.includes(value);
    },
  },
  disabled: Boolean,
  underline: Boolean,
};

export type LinkProps = ExtractPropTypes<typeof LinkProps>;
