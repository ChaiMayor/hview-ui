<script setup>
  import basic from 'exam/input-number/basic.vue'
  import disabled from 'exam/input-number/disabled.vue'
  import step from 'exam/input-number/step.vue'
  import stepStrictly from 'exam/input-number/step-strictly.vue'
  import precision from 'exam/input-number/precision.vue'
  import size from 'exam/input-number/size.vue'
  import controlsPosition from 'exam/input-number/controls-position.vue'
</script>

# Input Number 数字输入框

仅允许输入标准的数字值，可定义范围。

## 基础用法

要使用它，只需要在 `<h-input-number>` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。

::: code input-number/basic
<basic></basic>
:::

## 禁用状态

`disabled` 属性接受一个 `Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置 `min` 属性和 `max` 属性， 默认最小值为 `0`。

::: code input-number/disabled
<disabled></disabled>
:::

## 步进

允许定义递增递减的步进控制

设置 `step` 属性可以控制步长。

::: code input-number/step
<step></step>
:::

## 严格步进

`step-strictly` 属性接受一个 `Boolean`。 如果这个属性被设置为 `true`，则只能输入步进的倍数。

::: code input-number/step-strictly
<stepStrictly></stepStrictly>
:::

## 精度

设置 `precision` 属性可以控制数值精度，接收一个 `Number`。

::: code input-number/precision
<precision></precision>
:::

:::tip
precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。
:::

## 不同的输入框尺寸

使用 `size` 属性额外配置尺寸，可选的尺寸大小为：`large` 或 `small`

::: code input-number/size
<size></size>
:::

## 按钮位置

设置 `controls-position` 属性可以控制按钮位置。

::: code input-number/controls-position
<controlsPosition></controlsPosition>
:::

## API

### 属性

| 属性名                | 说明                            | 类型                   | 可选值                  | 默认值     |
| --------------------- | ------------------------------- | ---------------------- | ----------------------- | ---------- |
| model-value / v-model | 选中项绑定值                    | `number` / `undefined` | —                       | —          |
| min                   | 设置计数器允许的最小值          | `number`               | —                       | `Infinity` |
| max                   | 设置计数器允许的最大值          | `number`               | —                       | `Infinity` |
| step                  | 计数器步长                      | `number`               | —                       | 1          |
| step-strictly         | 是否只能输入 step 的倍数        | `boolean`              | —                       | false      |
| precision             | 数值精度                        | `number`               | —                       | —          |
| size                  | 计数器尺寸                      | `string`               | large / default / small | default    |
| readonly              | 原生 ` readonly` 属性，是否只读 | `boolean`              | —                       | false      |
| disabled              | 是否禁用状态                    | `boolean`              | —                       | false      |
| controls              | 是否使用控制按钮                | `boolean`              | —                       | true       |
| controls-position     | 控制按钮位置                    | `string`               | right                   | —          |
| name                  | 等价于原生 input `name` 属性    | `string`               | —                       | —          |
| label                 | 输入框关联的 label 文字         | `string`               | —                       | —          |
| placeholder           | 输入框默认 placeholder          | `string`               | —                       | —          |

### 事件

| 事件名 | 说明                        | 回调参数                                               |
| ------ | --------------------------- | ------------------------------------------------------ |
| change | 绑定值被改变时触发          | (currentValue: number \| NaN, oldValue: number \| NaN) |
| blur   | 在组件 Input 失去焦点时触发 | (event: FocusEvent)                                    |
| focus  | 在组件 Input 获得焦点时触发 | (event: FocusEvent)                                    |

### 方法

| 方法名 | 说明                  | 参数 |
| ------ | --------------------- | ---- |
| focus  | 使 input 组件获得焦点 | —    |
| blur   | 使 input 组件失去焦点 | —    |
