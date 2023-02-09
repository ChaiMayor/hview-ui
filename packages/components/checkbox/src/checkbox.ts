import { ExtractPropTypes } from "vue";

export const CheckBoxProps = {
  modelValue: Boolean,
  label: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
};

export type CheckBoxProps = ExtractPropTypes<typeof CheckBoxProps>;
