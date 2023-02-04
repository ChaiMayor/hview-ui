import { ExtractPropTypes } from "vue";

interface ICell {
  date: Date;
  status: string;
}

export const datePickerProps = {
  time: {
    type: Date,
  },
};

export { ICell };
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
