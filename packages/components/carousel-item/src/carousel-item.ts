import type { ExtractPropTypes } from "vue";

export const carouselItemProps = {
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: "",
  },
};

export type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>;
