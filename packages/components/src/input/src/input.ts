import { ExtractPropTypes } from "vue";

export const InputProps = {
  type: String,
  maxlength: Number,
  modelValue: [String, Number],
};

export type InputProps = ExtractPropTypes<typeof InputProps>;
