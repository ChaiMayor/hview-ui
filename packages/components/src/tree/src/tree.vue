<template>
  <div class="h-tree">
    <tree-node
      v-for="(item, index) in copyData"
      :key="index"
      :items="item"
      :label="label"
      :children="children"
      :show-checkbox="showCheckbox"
      :index="0"
      :node-key="nodeKey"
      :render-content="renderContent"
      :parent-data="copyData">
    </tree-node>
  </div>
</template>

<script setup lang="ts">
import "../style/index.less";
import { ref, onMounted, provide, watch } from "vue";
import treeNode from "./treeNode.vue";
import { deepCopy } from "../../../../utils";
// import { TreeProps } from "./tree";
// const props = defineProps(TreeProps);
const props = defineProps({
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
});
const copyData = ref([]);
const checkedKeys = ref(props.defaultCheckedKeys);

watch(
  () => props.data,
  (newVal) => {
    console.log(newVal);
  },
  { immediate: true },
);

onMounted(() => {
  initFn(deepCopy(props.data));
});

const initFn = (data: any) => {
  // data经过深拷贝后再使用，不会影响外界传入的数据.
  copyData.value = data.map((item: any) => {
    item.children = item[props.children] || [];
    item.label = item[props.label];
    item.id = item[props.nodeKey];
    item.isOpen = false;
    item.isChecked = false;
    if (item.children && item.children.length) {
      initFn(item.children);
    }
    return {
      id: item.id,
      label: item.label,
      children: item.children,
      isOpen: item.isOpen,
      isChecked: item.isChecked,
      disabled: item.disabled,
    };
  });
};

// 子有一个选中，父为半选
// 子全选中，父为全选
// 子一个都没选中，父不选
const updateChecked = (data: any) => {
  data.forEach((item: any) => {
    let checked;
    let indeterminate;
    let checkedNodes;
    if (item.children && item.children.length) {
      updateChecked(item.children);
      const children = item.children;
      // 过滤出选中的
      checkedNodes = children.filter((child: any) => child.isChecked);
      if (checkedNodes.length === 0) {
        checked = false;
        indeterminate = false;
      } else if (checkedNodes.length === children.length) {
        checked = true;
        indeterminate = false;
      } else {
        checked = false;
        indeterminate = true;
      }
      item.isChecked = checked;
      item.indeterminate = indeterminate;
    }
  });
};

// 对外暴露，获取选中项的数据数组
const getCheckedNodes = () => {
  const checkedNodes: Object[] = [];
  const traverse = function (copyData: any) {
    copyData.forEach((item: any) => {
      if (item.isChecked) {
        checkedNodes.push({
          id: item.id,
          label: item.label,
          children: item.children ? item.children : [],
        });
      }
      if (item.children && item.children.length) {
        traverse(item.children);
      }
    });
  };

  traverse(copyData.value);

  return checkedNodes;
};
</script>

<script lang="ts">
export default {
  name: "HTree",
};
</script>
