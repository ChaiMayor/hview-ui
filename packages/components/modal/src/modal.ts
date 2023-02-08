import { ExtractPropTypes } from "vue";

export const modalProps = {
	//modal是否显示
	show: {
		type: Boolean,
		default: false,
	},
	// 层级
	zIndex: {
		type: Number,
		default: 1,
	},
	//遮罩层背景颜色
	bgColor: {
		type: String,
		default: "rgba(0,0,0,0.6)",
	},
	// 是否使用title
	title: {
		type: Boolean,
		default: true,
	},
	// 是否使用footer
	footer: {
		type: Boolean,
		default: true,
	},
};

export type ModalProps = ExtractPropTypes<typeof modalProps>;
