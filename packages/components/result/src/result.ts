import type { ExtractPropTypes } from "vue";

/**
 * 定义result的参数
 */
export const ResultProps = {
	title: {
		type: String,
		default: "",
	},
	subTitle: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		values: ["success", "warning", "info", "error"],
		default: "info",
	},
};

export type ResultProps = ExtractPropTypes<typeof ResultProps>;
