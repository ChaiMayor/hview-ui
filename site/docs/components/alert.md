<script setup>
  import basic from 'exam/alert/basic.vue'
  import theme from 'exam/alert/theme.vue'
  import customizClose from 'exam/alert/customiz-close.vue'  
  import withIcon from 'exam/alert/with-icon.vue'
  import centerText from 'exam/alert/center-text.vue'
  import withDescription from 'exam/alert/with-description.vue'
  import iconAndDescription from 'exam/alert/icon-and-description.vue'
</script>

# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。

::: code alert/basic
<basic></basic>
:::

## 主题

Alert 组件提供了两个不同的主题：`light` 和 `dark`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

::: code alert/theme
<theme></theme>
:::

## 自定义关闭按钮

你可以自定义关闭按钮为文字或其他符号。

你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 `Boolean`，默认为 `false`。 你可以设置 `close-text` 属性来代替右侧的关闭图标， 需要注意的是 `close-text` 必须是一个字符串。 当 Alert 组件被关闭时会触发 `close` 事件。

::: code alert/customiz-close
<customiz-close></customiz-close>
:::

## 使用图标

你可以通过为 Alert 组件添加图标来提高可读性。

通过设置 `show-icon` 属性来显示 Alert 的 `icon`，这能更有效地向用户展示你的显示意图。

::: code alert/with-icon
<with-icon></with-icon>
:::

## 文字居中

使用 `center` 属性来让文字水平居中。

::: code alert/center-text
<center-text></center-text>
:::

## 文字描述

为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

除了必填的 `title` 属性外，你可以设置 `description` 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

::: code alert/with-description
<with-description></with-description>
:::

## 带图标和描述

在最后, 这是一个带有图标和描述的例子。

::: code alert/icon-and-description
<icon-and-description></icon-and-description>
:::

## API

### 属性

| 名称        | 说明               | 类型      | 可选值                           | 默认值  |
| :---------- | :----------------- | :-------- | -------------------------------- | :------ |
| title       | Alert 标题。       | `string`  | —                                | —       |
| type        | Alert 类型。       | `enum`    | success / warning / info / error | `info`  |
| description | 描述性文本         | `string`  | —                                | —       |
| closable    | 是否可以关闭       | `boolean` | —                                | `true`  |
| center      | 文字是否居中       | `boolean` | —                                | `false` |
| close-text  | 自定义关闭按钮文本 | `string`  | —                                | —       |
| show-icon   | 是否显示类型图标   | `boolean` | —                                | `false` |
| effect      | 主题样式           | `enum`    | light / dark                     | `light` |

### 事件

| 名称  | 描述                    | 类型       |                               |
| :---- | :---------------------- | :--------- | ----------------------------- |
| close | 关闭 Alert 时触发的事件 | `Function` | `(event: MouseEvent) => void` |

### 插槽

| 名称    | 描述           |
| :------ | :------------- |
| default | Alert 内容描述 |
| title   | 标题的内容     |
