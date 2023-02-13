<script setup>
import basic from 'exam/tree/basic.vue'
import selectTree from 'exam/tree/select-tree.vue'
import settingTree from 'exam/tree/setting-tree.vue'
import disabled from 'exam/tree/disabled.vue'
import getDataTree from 'exam/tree/get-data-tree.vue'
import renderTree from 'exam/tree/render-tree.vue'
</script>

# Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

基础的树形结构展示。

::: code tree/basic
<basic></basic>
:::

## 可选择的树

适用于需要选择层级时使用。设置 show-checkbox 属性为 true。并且可自定义数据结构的键名，默认为 label 和 children

::: code tree/select-tree
<selectTree></selectTree>
:::

## 默认展开和选中

支持默认展开和选中，但是必须要设置 node-key 属性。 支持默认展开所有选项

::: code tree/setting-tree
<settingTree></settingTree>
:::

## 禁用状态

通过 disabled 属性，可将 Tree 的某些节点设置为禁用状态。

::: code tree/disabled
<disabled></disabled>
:::

## 树节点的设置和获取

::: code tree/get-data-tree
<getDataTree></getDataTree>
:::

## 自定义节点内容

节点的内容支持自定义，可以在节点区添加按钮或图标等内容。

::: code tree/render-tree
<renderTree></renderTree>
:::

## API

### 属性

| 参数                  | 说明                                                 | 类型                                | 可选值 | 默认值   |
| --------------------- | ---------------------------------------------------- | ----------------------------------- | ------ | -------- |
| data                  | 展示数据                                             | `array`                             | —      | —        |
| label                 | 定义子节点名称在 data 数据对象中的键名               | `string`                            | —      | label    |
| children              | 定义子节点数据在 data 数据对象中的键名               | `string`                            | —      | children |
| show-checkbox         | 节点是否可被选择                                     | `boolean`                           | —      | false    |
| node-key              | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | `string`                            | —      | —        |
| default-expand-all    | 是否默认展开所有节点                                 | `boolean`                           | —      | false    |
| default-expanded-keys | 默认的展开项                                         | `array`                             | —      | —        |
| default-checked-keys  | 默认的选中项                                         | `array`                             | —      | —        |
| disabled              | 是否禁用                                             | `boolean`                           | —      | false    |
| render-content        | 自定义树节点的内容区的渲染 Function                  | `Function(h, { data, parentData })` | —      | —        |

<br/>

### 事件

| 事件名         | 说明                  | 回调函数参数                     |
| -------------- | --------------------- | -------------------------------- |
| toggle-change  | 展开/收起子节点时触发 | 当前节点                         |
| checked-change | 节点选中/取消时触发   | 所有选中节点的数组、当前节点数据 |

<br/>

### 方法

| 方法名          | 说明                              | 参数     |
| --------------- | --------------------------------- | -------- |
| setCheckedKeys  | 通过 key 设置选中的节点           | key 数组 |
| getCheckedKeys  | 返回所有选中节点的 key 组成的数组 | -        |
| getCheckedNodes | 返回所有选中节点的数据组成的数组  | -        |
