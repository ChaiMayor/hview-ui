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

export interface virtualTableType {
  itemSize: number;
  tableHeight: number;
  isVritual: boolean;
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
    default: false,
  },
  tableRowClassName: {
    type: Function,
    default: () => void 0,
  },
  virtualTable: {
    type: Object as () => virtualTableType,
    default: () => ({
      itemSize: 0,
      tableHeight: 300,
      isVritual: false,
    }),
  },
};
export type TableProps = ExtractPropTypes<typeof TableProps>;
