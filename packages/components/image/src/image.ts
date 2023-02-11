import type { ExtractPropTypes } from "vue";
import { definePropType } from "@hview-plus/utils";
import { PropType } from "vue";

export const ImageProps = {
  src: {
    type: String,
    default: "",
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: "",
  },
  loading: {
    type: String,
    values: ["eager", "lazy"],
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  scrollContainer: {
    type: definePropType<HTMLElement>(null),
  },
  // 懒加载的图片地址列表
  lazyList: {
    type: Array as PropType<string[]>,
    default: [],
  },
  previewSrcList: {
    type: Array as PropType<string[]>,
    default: [],
  },
  zIndex: {
    type: Number,
    default: 0,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  infinite: {
    type: Boolean,
    default: true,
  },
  zoomRate: {
    type: Number,
    default: 1.2,
  },
};

export type ImageProps = ExtractPropTypes<typeof ImageProps>;
