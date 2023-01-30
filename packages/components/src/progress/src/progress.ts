import type { ExtractPropTypes, SVGAttributes } from "vue";
import type Progress from "./progress.vue";
import type { PropType } from "vue";

export type ProgressColor = { color: string; percentage: number };
export type ProgressFn = (percentage: number) => string;
const definePropType = <T>(val: any): PropType<T> => val;

export const progressProps = {
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"],
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100,
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "warning", "error"],
  },
  // 动画进度条
  indeterminate: {
    type: Boolean,
    default: false,
  },
  // 动画持续时间
  duration: {
    type: Number,
    default: 3,
  },
  // 宽度
  strokeWidth: {
    type: Number,
    default: 6,
  },
  // 边框终点的形状
  strokeLinecap: {
    type: definePropType<NonNullable<SVGAttributes["stroke-linecap"]>>(String),
    default: "round",
  },
  textInside: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 126,
  },
  showText: {
    type: Boolean,
    default: true,
  },
  color: {
    type: definePropType<string | ProgressColor[] | ProgressFn>([String, Array, Function]),
    default: "",
  },
  // 进度条文字内容
  format: {
    type: definePropType<ProgressFn>(Function),
    default: (percentage: number): string => `${percentage}%`,
  },
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
export type ProgressInstance = InstanceType<typeof Progress>;
