<script setup>
import basic from 'exam/badge/basic.vue'
import maxValue from 'exam/badge/max-value.vue'
import diy from 'exam/badge/diy.vue'
import isDot from 'exam/badge/is-dot.vue'
</script>

# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

可以用来展示新消息的数量。数量值可接受 Number 或 String。
::: code badge/basic
<basic></basic>
:::

## 最大值

你还可以自定义最大值。由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。
::: code badge/max-value
<maxValue></maxValue>
:::

## 自定义显示内容

你也可以展示除数字以外你想要展示的任何值。
当 value 是 String 时，可以显示自定义文字。
::: code badge/diy
<diy></diy>
:::

## 小红点

通过一个小红点标记来告知用户有新内容。使用 is-dot 属性,是个布尔值。
::: code badge/is-dot
<isDot></isDot>
:::

## API

### 属性

| 属性名 | 描述                                                                  | 类型                | 可选值                                      | 默认值 |
| ------ | --------------------------------------------------------------------- | ------------------- | ------------------------------------------- | ------ |
| value  | 显示值                                                                | `string` / `number` | -                                           | -      |
| max    | 最大值，超过最大值会显示 `{max}+`。 只有当 value 是数字类型时起作用。 | `number`            | -                                           | 99     |
| isDot  | 是否显示小圆点。                                                      | `boolean`           | -                                           | false  |
| hidden | 是否隐藏 Badge。                                                      | `boolean`           | -                                           | false  |
| type   | badge 的类型.                                                         | `string`            | primary / success / warning / danger / info | danger |

### 插槽

| 属性名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
