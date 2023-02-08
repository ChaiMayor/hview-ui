import { ExtractPropTypes, PropType } from "vue";
export interface OptionsItem {
	label: string;
	id: number;
	disabled?: boolean;
}

export const RadioProps = {
	modelValue: {
		type: [String, Number],
		default: -1,
	},
	options: {
		type: Array as PropType<OptionsItem[]>,
		default: () => [],
	},
	inline: {
		type: Boolean,
		default: true,
	},
	// customColor: {
	//   type: String,
	//   default: "",
	// },
};

export type RadioProps = ExtractPropTypes<typeof RadioProps>;
