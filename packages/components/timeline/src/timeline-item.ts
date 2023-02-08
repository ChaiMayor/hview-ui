import type { ExtractPropTypes } from "vue";
import type TimelineItem from "./timeline-item.vue";

export const timelineItemProps = {
	// 时间戳
	timestamp: {
		type: String,
		default: "",
	},
	// 是否隐藏时间戳
	hideTimestamp: {
		type: Boolean,
		default: false,
	},
	// 是否垂直居中
	center: {
		type: Boolean,
		default: false,
	},
	// 时间戳的位置
	placement: {
		type: String,
		values: ["top", "bottom"],
		default: "bottom",
	},
	// 节点的类型
	type: {
		type: String,
		values: ["primary", "success", "warning", "danger", "info"],
		default: "",
	},
	// 节点颜色
	color: {
		type: String,
		default: "",
	},
	// 节点大小
	size: {
		type: String,
		values: ["normal", "large"],
		default: "normal",
	},
	// 图标
	icon: {
		type: String,
	},
	// 是否为空心点
	hollow: {
		type: Boolean,
		default: false,
	},
};
export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;

export type TimelineItemInstance = InstanceType<typeof TimelineItem>;
