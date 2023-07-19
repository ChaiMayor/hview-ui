import { ExtractPropTypes, Ref } from "vue";

export interface tagType {
  name: string;
  type: string;
  size?: string;
  round?: boolean;
}

export interface dataType {
  tags?: tagType[];
  checked?: Ref<boolean> | boolean;
}

export const TableProps = {
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array as () => dataType[],
    default: () => [],
  },
  tag: {
    type: Boolean,
    default: false,
  },
  checkbox: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
  },
  tableRowClassName: {
    type: Function,
  },
};
export type TableProps = ExtractPropTypes<typeof TableProps>;
