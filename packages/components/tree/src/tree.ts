import { ExtractPropTypes } from "vue";

export const TreeProps = {
  data: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: "label",
  },
  children: {
    type: String,
    default: "children",
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  nodeKey: {
    type: String,
    default: "",
  },
  // 默认展开项
  defaultExpandedKeys: {
    type: Array,
    default: () => [],
  },
  // 默认选中项
  defaultCheckedKeys: {
    type: Array,
    default: () => [],
  },
  // 默认展开所有
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  // 自定义渲染函数
  renderContent: {
    type: Function,
  },
  isLazy: {
    type: Boolean,
    default: false,
  },
};

export type TreeProps = ExtractPropTypes<typeof TreeProps>;
