import { ExtractPropTypes } from "vue";

export const MessageType = ["success", "info", "warning", "error"];

export const MessageProps = {
	message: String,
	type: {
		type: String,
		validator(value: string) {
			return MessageType.includes(value);
		},
		default: "info",
	},
	duration: {
		type: Number,
		default: 3000,
	},
	center: {
		type: Boolean,
		default: false,
	},
	dangerouslyUseHTMLString: {
		type: Boolean,
		default: false,
	},
	showClose: {
		type: Boolean,
		default: false,
	},
	onClose: {
		type: Function,
	},
};

export type MessageProps = ExtractPropTypes<typeof MessageProps>;
