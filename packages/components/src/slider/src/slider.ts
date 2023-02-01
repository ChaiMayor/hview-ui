import { definePropType } from "@hview-plus/utils";
import type { SliderMarkerProps } from "./marker";
import { ExtractPropTypes } from "vue";

type BasePlacement = "top" | "bottom" | "right" | "left";
type AutoPlacement = "auto" | "auto-start" | "auto-end";
type VariationPlacement =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end";
type Arrayable<T> = T | T[];

export type Placement = AutoPlacement | BasePlacement | VariationPlacement;

const placements = Array<Placement>;

type SliderMarks = Record<number, string | SliderMarkerProps["mark"]>;

export const SliderProps = {
  modelValue: {
    // type: [Number, Array<Number>],
    type: definePropType<Arrayable<number>>([Number, Array]),
    default: 0,
  },
  id: {
    type: String,
    default: undefined,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  showInput: Boolean,
  showInputControls: {
    type: Boolean,
    default: true,
  },
  showStops: Boolean,
  showTooltip: {
    type: Boolean,
    default: true,
  },
  formatTooltip: {
    type: definePropType<(val: number) => number | string>(Function),
    default: undefined,
  },
  disabled: Boolean,
  range: Boolean,
  vertical: Boolean,
  height: {
    type: Number,
    default: 6,
  },
  width: Number,
  debounce: {
    type: Number,
    default: 300,
  },
  label: {
    type: String,
    default: undefined,
  },
  rangeStartLabel: {
    type: String,
    default: undefined,
  },
  rangeEndLabel: {
    type: String,
    default: undefined,
  },
  formatValueText: {
    type: definePropType<(val: number) => string>(Function),
    default: undefined,
  },
  tooltipClass: {
    type: String,
    default: undefined,
  },
  placement: {
    type: String,
    values: placements,
    default: "top",
  },
  marks: {
    type: definePropType<SliderMarks>(Object),
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
};

export type SliderProps = ExtractPropTypes<typeof SliderProps>;
