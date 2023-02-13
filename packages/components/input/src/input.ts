import { ExtractPropTypes } from "vue";

export const InputProps = {
  type: String,
  maxlength: Number,
  iconBefore: String,
  iconAfter: String,
  size: String,
  clearable: Boolean,
  modelValue: {
    type: [String, Number],
    default: "",
  },
};

export type InputProps = ExtractPropTypes<typeof InputProps>;
