import { ExtractPropTypes } from "vue";
import type { StyleValue } from "vue";
import { definePropType } from "@hview-plus/utils";

// export type CSSSProperties = CSSProperties | CSSProperties[] | string[];

export const ScrollBarProps = {
  height: {
    type: [String, Number],
    default: "",
  },
  maxHeight: {
    type: [String, Number],
    default: "",
  },
  native: {
    type: Boolean,
    default: false,
  },
  wrapStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: "",
  },
  wrapClass: {
    type: String,
    default: "",
  },
  viewStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: "",
  },
  viewClass: {
    type: String,
    default: "",
  },
  noresize: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: "div",
  },
  always: {
    type: Boolean,
    default: false,
  },
  minSize: {
    type: Number,
    default: 20,
  },
};

export type ButtonProps = ExtractPropTypes<typeof ScrollBarProps>;
