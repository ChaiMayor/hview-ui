import type Tag from "./tag.vue";

import type { ExtractPropTypes } from "vue";

export const tagProps = {
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", "primary"],
    default: "primary",
  },
  border: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    values: ["medium", "small", "large"],
    default: "medium",
  },
  theme: {
    type: String,
    values: ["dark", "plain"],
    default: "plain",
  },
  round: Boolean,
};
export type TagProps = ExtractPropTypes<typeof tagProps>;

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
export type TagEmits = typeof tagEmits;

export type TagInstance = InstanceType<typeof Tag>;
