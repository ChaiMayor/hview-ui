<script setup>
import basic from 'exam/slider/basic.vue'
import disperse from 'exam/slider/disperse.vue'
import inputBox from 'exam/slider/input-box.vue'
import sizes from 'exam/slider/sizes.vue'
import site from 'exam/slider/site.vue'
import scope from 'exam/slider/scope.vue'
import vertical from 'exam/slider/vertical.vue'
import tag from 'exam/slider/tag.vue'
// import  from './'
</script>

# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

## 基础用法

在拖动滑块时，显示当前值

通过设置绑定值自定义滑块的初始值

::: code slider/basic
<basic></basic>
:::

## 离散值

选项可以是离散的

改变`step`的值可以改变步长， 通过设置 `show-stops` 属性可以显示间断点

::: code slider/disperse
<disperse></disperse>
:::

## 带有输入框的滑块

通过输入框输入来改变当前的值。

设置 `show-input` 属性会在右侧显示一个输入框

::: code slider/input-box
<inputBox></inputBox>
:::

## 不同尺寸

::: code slider/sizes
<sizes></sizes>
:::

## 位置

您可以自定义 Tooltip 提示的位置。

::: code slider/site
<site></site>
:::

## 范围选择

你还可以选择一个范围值

配置 `range` 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。

::: code slider/scope
<scope></scope>
:::

## 垂直模式

配置 `vertical` 属性为 `true` 启用垂直模式。 在垂直模式下，必须设置 `height` 属性。

::: code slider/vertical
<vertical></vertical>
:::

## 显示标记

设置 `marks` 属性可以在滑块上显示标记。

::: code slider/tag
<tag></tag>
:::

## API

### 属性

| 属性名                | 描述                                                                                      | 类型              | 可选值                                                                                                    | 默认    |
| --------------------- | ----------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| model-value / v-model | 选中项绑定值                                                                              | `number`          | —                                                                                                         | 0       |
| min                   | 最小值                                                                                    | `number`          | —                                                                                                         | 0       |
| max                   | 最大值                                                                                    | `number`          | —                                                                                                         | 100     |
| disabled              | 是否禁用                                                                                  | `boolean`         | —                                                                                                         | false   |
| step                  | 步长                                                                                      | `number`          | —                                                                                                         | 1       |
| show-input            | 是否显示输入框，仅在非范围选择时有效                                                      | `boolean`         | —                                                                                                         | false   |
| show-input-controls   | 在显示输入框的情况下，是否显示输入框的控制按钮                                            | `boolean`         | —                                                                                                         | true    |
| size                  | slider 包装器的大小，垂直模式下该属性不可用                                               | `string`          | large / default / small                                                                                   | default |
| input-size            | 输入框的大小，如果设置了 `size` 属性，默认值自动取 `size`                                 | `string`          | large / default / small                                                                                   | default |
| show-stops            | 是否显示间断点                                                                            | `boolean`         | —                                                                                                         | false   |
| show-tooltip          | 是否显示提示信息                                                                          | `boolean`         | —                                                                                                         | true    |
| format-tooltip        | 格式化提示信息                                                                            | `function(value)` | —                                                                                                         | —       |
| range                 | 是否开启选择范围                                                                          | `boolean`         | —                                                                                                         | false   |
| vertical              | 垂直模式                                                                                  | `boolean`         | —                                                                                                         | false   |
| height                | 滑块高度，垂直模式必填                                                                    | `number`          | —                                                                                                         | 6       |
| debounce              | 输入时的去抖延迟，毫秒，仅在 `show-input` 等于 true 时有效                                | `number`          | —                                                                                                         | 300     |
| tooltip-class         | tooltip 的自定义类名                                                                      | `string`          | —                                                                                                         | —       |
| placement             | Tooltip 出现的位置                                                                        | `string`          | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top     |
| marks                 | 标记， key 的类型必须为 `number` 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式 | `object`          | —                                                                                                         | —       |

### 事件

| 事件名 | 说明                                               | 参数            |
| ------ | -------------------------------------------------- | --------------- |
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | val，新状态的值 |
| input  | 数据改变时触发（使用鼠标拖曳时，活动过程实时触发） | val，改变后的值 |
