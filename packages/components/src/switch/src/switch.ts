import { ExtractPropTypes } from "vue";

export const SwitchProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
  activeText: {
    type: String,
    default: "",
  },
  activeIcon: {
    type: String,
    default: "",
  },
  inactiveText: {
    type: String,
    default: "",
  },
  inactiveIcon: {
    type: String,
    default: "",
  },
  activeColor: {
    type: String,
    default: "",
  },
  inactiveColor: {
    type: String,
    default: "",
  },
  inlinePrompt: {
    type: Boolean,
    default: false,
  },
  size: String,
  modelValue: Boolean,
};

export type SwitchProps = ExtractPropTypes<typeof SwitchProps>;
