import { ExtractPropTypes } from "vue";

export const InputProps = {
	type: String,
	maxlength: Number,
	iconBefore: String,
	iconAfter: String,
	size: String,
	clearable: Boolean,
	modelValue: [String, Number],
};

export type InputProps = ExtractPropTypes<typeof InputProps>;
