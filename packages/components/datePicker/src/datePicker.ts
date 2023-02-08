import { ExtractPropTypes, PropType } from "vue";

interface ICell {
	date: Date;
	status: string;
}
interface IDateInfo {
	[index: number]: number;
}
export const datePickerProps = {
	type: {
		type: String,
		default: "date",
	},
	time: {
		type: Date,
	},
};
export const pickerMonthAndYearProps = {
	dateInfo: {
		type: Array as PropType<IDateInfo>,
	},
};
export { ICell };
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
