import { ExtractPropTypes } from "vue";

export const DividerProps = {
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal",
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center",
  },
  borderStyle: {
    type: String,
    values: ["solid", "dashed", "dotted"],
    default: "solid",
  },
};

export type DividerProps = ExtractPropTypes<typeof DividerProps>;
