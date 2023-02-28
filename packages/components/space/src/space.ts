import { ExtractPropTypes, PropType } from "vue";

interface sizeItem {
  row: number;
  column: number;
}

export const SpaceProps = {
  direction: {
    type: String,
    value: ["row", "column"],
    default: "row",
  },
  size: {
    type: Array as PropType<sizeItem[]>,
    default: () => [10, 10],
  },
  wrap: Boolean,
};

export type SpaceProps = ExtractPropTypes<typeof SpaceProps>;
