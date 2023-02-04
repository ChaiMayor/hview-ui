<script setup>
import basic from 'exam/radio/basic.vue'
import disabled from 'exam/radio/disabled.vue'
import vertical from 'exam/radio/vertical.vue'
// import  from './'
</script>

# Radio 单选框

在一组备选项中进行单选。

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 `Radio` 组件，只需要设置 `v-model` 绑定变量， 选中意味着变量的值为相应 Radio label 属性的值， label 可以是 `String` 或 `Number`

::: code radio/basic
<basic></basic>
:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

::: code radio/disabled
<disabled></disabled>
:::

## 垂直排列

设置 `inline` 属性值为 `false` 即可开启垂直排列

::: code radio/vertical
<vertical></vertical>
:::

## API

### 属性

| 属性名                | 说明           | 类型                | 默认值 |
| --------------------- | -------------- | ------------------- | ------ |
| model-value / v-model | 选中项绑定值   | `string` / `number` | —      |
| label                 | 单选框对应的值 | `string` / `number` | —      |
| disabled              | 是否禁用单选框 | `boolean`           | false  |
| inline                | 单选框的列方式 | `boolean`           | true   |

### 事件

| 事件名 | 说明     | 回调参数                |
| ------ | -------- | ----------------------- |
| change | 选中事件 | 选中的 Radio 的各参数值 |
