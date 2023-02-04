<script setup>
import basic from 'exam/checkbox/basic.vue'
import disabled from 'exam/checkbox/disabled.vue'
import more from 'exam/checkbox/more.vue'
import interate from 'exam/checkbox/interate.vue'
import border from 'exam/checkbox/border.vue'
</script>

# Checkbox 复选框

常用从一组数据中选择多个数据

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍
单一的 checkbox 中，默认绑定变量的值会是 Boolean，选中为 true

::: code checkbox/basic
<basic></basic>
:::

## 禁用状态

多选框不可用状态，设置 disabled 属性即可

::: code checkbox/disabled
<disabled></disabled>
:::

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项

::: code checkbox/more
<more></more>
:::

## 中间状态

indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

::: code checkbox/interate
<interate></interate>
:::

## 带有边框

设置 border 属性可以渲染为带有边框的多选框

::: code checkbox/border
<border></border>
:::

## Checkbox API

### Checkbox 属性

| 参数          | 说明                                                                  | 类型                            | 可选值 | 默认值 |
| ------------- | --------------------------------------------------------------------- | ------------------------------- | ------ | ------ |
| v-model       | 绑定值                                                                | `boolean`                       | —      | —      |
| label         | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | `string` / `number` / `boolean` | —      | —      |
| disabled      | 是否禁用                                                              | `boolean`                       | —      | false  |
| border        | 是否显示边框                                                          | `boolean`                       | —      | false  |
| name          | 原生 name 属性                                                        | `string`                        | —      | —      |
| checked       | 当前是否勾选                                                          | `boolean`                       | —      | false  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制                               | `boolean`                       | —      | false  |

<br/>

### Checkbox 事件

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |

<br/>

## Checkbox-group API

### Checkbox-group 属性

| 参数            | 说明     | 类型      | 可选值 | 默认值 |
| --------------- | -------- | --------- | ------ | ------ |
| value / v-model | 绑定值   | `array`   | —      | —      |
| disabled        | 是否禁用 | `boolean` | —      | false  |

<br/>

### Checkbox-group 事件

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |
