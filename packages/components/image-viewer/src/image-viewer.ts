import type { ExtractPropTypes } from "vue";
import { PropType } from "vue";
export const imageViewerProps = {
  //预览图片
  visable: {
    type: Boolean,
    // default: false,
  },
  // 用于预览的图片链接列表
  urlList: {
    type: Array as PropType<string[]>,
    default: [],
  },
  // 预览时遮罩层的 z-index
  zIndex: {
    type: Number,
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
  // 是否可以通过点击遮罩层关闭预览
  hideOnClickModal: {
    type: Boolean,
    default: false,
  },
  teleported: {
    type: Boolean,
    default: false,
  },
  //   closeOnPressEscape: {
  //     type: Boolean,
  //     default: true,
  //   },
  //
  //	缩放事件的缩放速度
  zoomRate: {
    type: Number,
    default: 1.2,
  },
};
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;
