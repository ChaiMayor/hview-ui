import type { ExtractPropTypes, PropType } from "vue";

export const ColorProps = {
  main: {
    type: String,
    default: "#5d80f4",
  },
  mainTitle: {
    type: String,
    default: "Brand Color",
  },
  content: {
    type: Array as PropType<string[]>,
    require: false,
    default: [],
  },
};

export type ColorProps = ExtractPropTypes<typeof ColorProps>;
