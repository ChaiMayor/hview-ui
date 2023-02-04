<script setup>
  import basic from "exam/progress/basic.vue"
  import inline from "exam/progress/inline.vue"
  import color from "exam/progress/color.vue"
  import round from "exam/progress/round.vue"
  import dashboard from "exam/progress/dashboard.vue"
  import animation from "exam/progress/animation.vue"
</script>

# Progress 进度条

用于展示进度，告知用户当前状态。

## 基本使用

Progress 组件中的 `percentage` 属性，表示进度条对应的百分比。 该属性必填，并且必须在 0-100 的范围内。 可以通过设置 `format` 来自定义文字显示的格式。

::: code progress/basic
<basic></basic>
:::

## 进度条内显示文字

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来改变进度条内部的文字。

::: code progress/inline
<inline></inline>
:::

## 自定义颜色

可以通过 `color` 属性设置进度条的颜色，该属性可以接受十六进制颜色值，函数和数组。

::: code progress/color
<color></color>
:::

## 环形进度条

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。
::: code progress/round
<round></round>
:::

## 仪表盘形进度条

您也可以指定 `type` 属性到 `dashboard` 使用控制面板进度栏。
::: code progress/dashboard
<dashboard></dashboard>
:::

## 动画进度条

使用 `intermediate` 属性设置动画， `duration` 来控制动画持续时间。
::: code progress/animation
<animation></animation>
:::

## API

### 属性

| 属性名         | 说明                                                          | 类型                        | 可选值                | 默认值 |
| -------------- | ------------------------------------------------------------- | --------------------------- | --------------------- | ------ |
| percentage     | 百分比(**必填**)                                              | `number`                    | (0-100)               | 0      |
| type           | 进度条类型                                                    | `string`                    | line/circle/dashboard | line   |
| stroke-width   | 进度条的宽度                                                  | `number`                    | —                     | 6      |
| text-inside    | 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）      | `boolean`                   | —                     | false  |
| status         | 进度条当前状态                                                | `string`                    | success/error/warning | —      |
| indeterminate  | 是否为动画进度条                                              | `boolean`                   | -                     | false  |
| duration       | 控制动画进度条速度                                            | `number`                    | -                     | 3      |
| color          | 进度条背景色 （会覆盖 `status` 颜色）                         | `string`/`function`/`array` | —                     | ''     |
| width          | 环形进度条画布宽度（仅在 type 为 circle 或 dashboard 时可用） | `number`                    | —                     | 126    |
| show-text      | 是否显示进度条文字内容                                        | `boolean`                   | —                     | true   |
| stroke-linecap | 类型为 circle/dashboard 时路径两端的形状                      | `string`                    | butt/round/square     | round  |
| format         | 指定进度条文字内容                                            | `function`(percentage)      | —                     | —      |

### 插槽

| 插槽名  | 说明                                |
| ------- | ----------------------------------- |
| default | 自定义内容，参数为 `{ percentage }` |
