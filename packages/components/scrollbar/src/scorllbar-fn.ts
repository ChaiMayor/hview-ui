import type { Ref } from "vue";

export type HandleScroll = () => void;
export type ScrollTo = (
  options: ScrollToOptions | number,
  yCoord?: number,
) => void;
export type SetScrollTop = (scrollTop: number) => void;
export type SetScrollLeft = (scrollTop: number) => void;
export type Update = () => void;
export type WrapRef = () => Ref<HTMLDivElement>;
