import type { ExtractPropTypes } from "vue";

export const BacktopProps = {
	// 触发滚动的对象
	// target: {
	//   type: String,
	//   default: "",
	// },
	// 滚动达到此参数值才出现
	visibilityHeight: {
		type: Number,
		default: 200,
	},
	// 距离页面右边距
	right: {
		type: Number,
		default: 40,
	},
	// 距离页面底部距离
	bottom: {
		type: Number,
		default: 40,
	},
};

export type BacktopProps = ExtractPropTypes<typeof BacktopProps>;

export const BacktopEmits = {
	click: (event: MouseEvent) => event instanceof MouseEvent,
};
export type BacktopEmits = typeof BacktopEmits;
