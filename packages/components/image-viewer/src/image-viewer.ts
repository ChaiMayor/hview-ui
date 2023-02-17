import type { ExtractPropTypes } from "vue";
import { PropType } from "vue";
export const imageViewerProps = {
  //预览图片
  visable: {
    type: Boolean,
  },
  // 用于预览的图片链接列表
  urlList: {
    type: Array as PropType<string[]>,
    default: [],
  },
  // 预览时遮罩层的 z-index
  zIndex: {
    type: Number,
    default: 0,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  // 是否可以无限循环预览
  infinite: {
    type: Boolean,
    default: true,
  },
  //	缩放事件的缩放速度
  zoomRate: {
    type: Number,
    default: 1.2,
  },
  //是否可以通过esc按钮关闭预览
  closeOnPressEscape: {
    type: Boolean,
    default: false,
  },
};
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;
