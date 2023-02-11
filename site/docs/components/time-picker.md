<script setup>
import basic from 'exam/time-picker/basic.vue'
import disabled from 'exam/time-picker/disabled.vue'
import format from 'exam/time-picker/format.vue'
import confirm from 'exam/time-picker/confirm.vue'
import timerange from 'exam/time-picker/timerange.vue'
</script>

# TimePicker 时间选择器

用于选择或输入日期

## 基础用法

可以选择任意时间, 默认情况下通过鼠标滚轮进行选择

::: code time-picker/basic
<basic></basic>
:::

## 时间格式

设置属性 format 可以改变时间的显示格式。

::: tip

注意，format 只是改变显示的格式，并非改变 value 值。

:::

::: code time-picker/format
<format></format>
:::

## 禁用状态

可以设置 disabled 属性来实现禁用状态

::: code time-picker/disabled
<disabled></disabled>
:::

## 时间范围

设置 type 为 timerange 可开启时间范围选择

::: code time-picker/timerange
<timerange></timerange>
:::

## 确认按钮

设置属性 confirm，选择器会有清空和确定按钮。确认按钮并没有影响时间的正常选择。

::: code time-picker/confirm
<confirm></confirm>
:::

## API

### 属性

| 参数        | 说明                                   | 类型               | 可选值                         | 默认值     |
| ----------- | -------------------------------------- | ------------------ | ------------------------------ | ---------- |
| v-model     | 绑定值                                 | `string` / `array` | —                              | —          |
| type        | 类型，支持选择单个时间或者选择时间范围 | `string`           | time / timerange               | —          |
| placeholder | 选择时的占位符                         | `string`           | —                              | —          |
| readonly    | 完全只读，开启后不会弹出选择器         | `boolean`          | —                              | false      |
| disabled    | 禁用                                   | `boolean`          | —                              | false      |
| format      | 时间格式化                             | `string`           | 小时：`HH`，分：`mm`，秒：`ss` | 'HH:mm:ss' |
| clearable   | 是否显示清除按钮                       | `boolean`          | —                              | true       |
| separator   | 选择范围时的分隔符                     | `string`           | —                              | '-'        |

### 事件

| 事件名     | 说明               | 参数           |
| ---------- | ------------------ | -------------- |
| on-change  | 时间发生变化时触发 | 格式化后的时间 |
| on-confirm | 点击确定按钮时触发 | 格式化后的时间 |
| on-clear   | 在清空时间时触发   | —              |
