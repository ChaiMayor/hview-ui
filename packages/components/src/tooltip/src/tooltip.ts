import { ExtractPropTypes } from "vue";

export const TooltipType = [
  "left-start",
  "left",
  "left-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
];

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
