<script setup>
import basic from 'exam/switch/basic.vue'
import disabled from 'exam/switch/disabled.vue'
import size from 'exam/switch/size.vue'
import textSwitch from 'exam/switch/text-switch.vue'
import icon from 'exam/switch/icon.vue'
</script>

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」

## 基本用法

绑定 v-model 到一个 Boolean 类型的变量
::: code switch/basic
<basic></basic>
:::

## 禁用状态

设置 disabled 属性，接受一个 Boolean，设置 true 即可禁用
::: code switch/disabled
<disabled></disabled>
:::

## 文字描述

使用 active-text 属性与 inactive-text 属性来设置开关的文字描述，使用 active-color 属性与 inactive-color 属性来设置开关的背景色

::: code switch/text-switch
<textSwitch></textSwitch>
:::

## 尺寸大小

使用 size 属性改变尺寸大小。 除了默认大小外，还有另外两个选项： large, small

::: code switch/size
<size></size>
:::

## 显示自定义图标

使用 inactive-icon 和 active-icon 属性来添加图标。 使用 inline-prompt 属性来控制图标显示在点内。

::: code switch/icon
<icon></icon>
:::

## API

### 属性

| 参数           | 说明                    | 类型      | 可选值                  | 默认值  |
| -------------- | ----------------------- | --------- | ----------------------- | ------- |
| v-model        | 绑定值                  | `boolean` | true / false            | —       |
| disabled       | 是否禁用                | `boolean` | true / false            | false   |
| active-text    | switch 打开时的文字描述 | `string`  | —                       | —       |
| inactive-text  | switch 关闭时的文字描述 | `string`  | —                       | —       |
| active-icon    | switch 打开时的图标     | `string`  | —                       | —       |
| inactive-icon  | switch 关闭时的图标     | `string`  | —                       | —       |
| active-color   | switch 打开时的背景色   | `string`  | —                       | #409EFF |
| inactive-color | switch 关闭时的背景色   | `string`  | —                       | #C0CCDA |
| size           | switch 的大小           | `string ` | large / default / small | —       |

<br/>

### 事件

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |
