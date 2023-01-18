import { ExtractPropTypes } from "vue";

export const InputProps = {
  type: String,
  modelValue: [String, Number],
};

export type InputProps = ExtractPropTypes<typeof InputProps>;
