import { ExtractPropTypes } from "vue";

export const MessageType = ["success", "info", "warning", "error"];

export const MessageProps = {
  message: String,
  type: {
    type: String,
    validator(value: string) {
      return MessageType.includes(value);
    },
  },
  duration: {
    type: Number,
    default: 1500,
  },
  onClose: {
    type: Function,
  },
};

export type MessageProps = ExtractPropTypes<typeof MessageProps>;
