import { ExtractPropTypes } from "vue";

export const TooltipType = ["right"];

export const TooltipProps = {
  placement: {
    type: String,
    values: TooltipType,
  },
  modelValue: {
    type: Boolean,
    default: null,
  },
  content: [String, Number],
  width: String,
};

export type TooltipProps = ExtractPropTypes<typeof TooltipProps>;
