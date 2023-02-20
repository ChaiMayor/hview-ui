<script setup>
  import basic from 'exam/dialog/basic.vue'
  import textCenter from 'exam/dialog/text-center.vue'
  import alignCenter from 'exam/dialog/align-center.vue'
  import draggable from 'exam/dialog/draggable.vue'
  import customHeader from 'exam/dialog/custom-header.vue'
  import customContent from 'exam/dialog/custom-content.vue'
</script>

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基本使用

::: code dialog/basic
<basic></basic>
:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Hview plus 的树形控件。
::: code dialog/custom-content
<customContent ></customContent >
:::

## 自定义头部

header 可用于自定义显示标题的区域。
为了保持可用性，可以使用 showClose=false 来去掉关闭按钮。
::: code dialog/custom-header
<customHeader></customHeader>
:::

## 内容居中

对话框的内容可以居中。

将 center 设置为 true 即可使标题和底部居中。 center 仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。
::: code dialog/text-center
<textCenter></textCenter>
:::

## 居中对话框

从屏幕中心打开对话框。

设置 align-center 为 true 使对话框水平垂直居中。 由于对话框垂直居中在弹性盒子中，所以 top 属性将不起作用。

::: code dialog/align-center
<alignCenter></alignCenter>
:::

## 可拖拽对话框

设置 draggable 属性为 true,可实现拖拽功能。

::: code dialog/draggable
<draggable ></draggable>
:::

## API

### 属性

| 属性名               | 描述                           | 类型              | 可选值         | 默认值 |
| -------------------- | ------------------------------ | ----------------- | -------------- | ------ |
| modelValue / v-model | 是否显示 Dialog                | `boolean`         | true / false   | false  |
| title                | Dialog 对话框的标题            | `string`          | —              | title  |
| width                | Dialog 的宽度                  | `string / number` | —              | 30%    |
| align                | title 和 footer 内容的排列方式 | string            | `center`       | —      |
| alignCenter          | 是否弹框全屏居中               | `boolean`         | true / false   | false  |
| top                  | Dialog 对话框距离顶部的距离    | `string`          | —              | 25%    |
| showClose            | 是否显示关闭按钮               | `boolean`         | `true/false`   | true   |
| scrollLock           | 弹窗显示时是否锁定滚动条       | `boolean`         | `true / false` | true   |
| customClass          | Dialog 的自定义类名            | `string`          | —              | —      |
| closeOnModal         | 是否可通过遮罩层关闭弹窗       | `boolean`         | `true / false` | true   |
| draggable            | Dialog 对话框是否可拖拽        | `boolean`         | `true/false`   | false  |

### 插槽

| 插槽名  | 说明                                                    |
| ------- | ------------------------------------------------------- |
| header  | Dialog 标题的内容，会替换标题部分，但不会移除关闭按钮。 |
| content | Dialog 主体内容                                         |
| footer  | Dialog 按钮操作区的内容                                 |

### 事件

| 事件名 | 说明             | 回调函数 |
| ------ | ---------------- | -------- |
| open   | 打开 Dialog 触发 | () =>{}  |
| close  | 关闭 Dialog 触发 | () =>{}  |
