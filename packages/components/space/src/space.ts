import { ExtractPropTypes } from "vue";

export const SpaceProps = {
  direction: {
    type: String,
  },
  size: {
    type: Number,
  },
  wrap: Boolean,
};

export type SpaceProps = ExtractPropTypes<typeof SpaceProps>;
