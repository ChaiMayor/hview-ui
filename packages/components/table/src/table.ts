import { ExtractPropTypes } from "vue";

// type dataType {
//   id: number;
//   name: string;
//   tags: tagType[];
//   address: string;
//   checked?: Ref<boolean>;
// }
// interface tagType {
//   name: string;
//   type: string;
//   size?: string;
//   round?: boolean;
// }

export const TableProps = {
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
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
};

export type TableProps = ExtractPropTypes<typeof TableProps>;
