import { isNumber } from "@vueuse/core";
import { ExtractPropTypes, PropType } from "vue";

type useSizeProp = "large" | "default" | "small";

export const inputNumberEmits = {
	blur: (e: FocusEvent) => e instanceof FocusEvent,
	focus: (e: FocusEvent) => e instanceof FocusEvent,
};
export type InputNumberEmits = typeof inputNumberEmits;

export const InputNumberProps = {
	id: {
		type: String,
		default: undefined,
	},
	step: {
		type: Number,
		default: 1,
	},
	stepStrictly: {
		type: Boolean,
		default: false,
	},
	max: {
		type: Number,
		default: Number.POSITIVE_INFINITY,
	},
	min: {
		type: Number,
		default: Number.NEGATIVE_INFINITY,
	},
	modelValue: [Number, String],
	readonly: Boolean,
	disabled: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<useSizeProp>,
		default: "default",
	},
	controls: {
		type: Boolean,
		default: true,
	},
	controlsPosition: {
		type: String,
		default: "",
		values: ["", "right"],
	},
	valueOnClear: {
		type: [String, Number, null],
		validator: (val: "min" | "max" | number | null) =>
			val === null || isNumber(val) || ["min", "max"].includes(val),
		default: null,
	},
	name: String,
	label: String,
	placeholder: String,
	precision: {
		type: Number,
		default: 0,
		validator: (val: number) =>
			val >= 0 && val === Number.parseInt(`${val}`, 10),
	},
	validateEvent: {
		type: Boolean,
		default: true,
	},
};

export type InputNumberProps = ExtractPropTypes<typeof InputNumberProps>;
