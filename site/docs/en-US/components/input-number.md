<script setup>
  import basic from 'exam/input-number/basic.vue'
  import disabled from 'exam/input-number/disabled.vue'
  import step from 'exam/input-number/step.vue'
  import stepStrictly from 'exam/input-number/step-strictly.vue'
  import precision from 'exam/input-number/precision.vue'
  import size from 'exam/input-number/size.vue'
  import controlsPosition from 'exam/input-number/controls-position.vue'
</script>

# Input Number

Input numerical values with a customizable range.

## Basic usage

Bind a variable to `v-model` in `<el-input-number>` element and you are set.

::: code input-number/basic
<basic></basic>
:::

## Disabled

The `disabled` attribute accepts a `boolean`, and if the value is `true`, the component is disabled. If you just need to control the value within a range, you can add `min` attribute to set the minimum value and `max` to set the maximum value. By default, the minimum value is `0`.

::: code input-number/disabled
<disabled></disabled>
:::

## Steps

Allows you to define incremental steps.

Add `step` attribute to set the step.

::: code input-number/step
<step></step>
:::

## Step strictly

The `step-strictly` attribute accepts a `boolean`. if this attribute is `true`, input value can only be multiple of step.

::: code input-number/step-strictly
<stepStrictly></stepStrictly>
:::

## Precision

Add `precision` attribute to set the precision of input value.

::: code input-number/precision
<precision></precision>
:::

:::tip
precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。
:::

## Size

Use attribute `size` to set additional sizes with `large` or `small`.

::: code input-number/size
<size></size>
:::

## Controls Position

Set `controls-position` to decide the position of control buttons.

::: code input-number/controls-position
<controlsPosition></controlsPosition>
:::

## API

### Attributes

| Name                  | Description                                      | Type                   | Accepted Values         | Default    |
| --------------------- | ------------------------------------------------ | ---------------------- | ----------------------- | ---------- |
| model-value / v-model | binding value                                    | `number` / `undefined` | —                       | —          |
| min                   | the minimum allowed value                        | `number`               | —                       | `Infinity` |
| max                   | the maximum allowed value                        | `number`               | —                       | `Infinity` |
| step                  | incremental step                                 | `number`               | —                       | 1          |
| step-strictly         | whether input value can only be multiple of step | `boolean`              | —                       | false      |
| precision             | precision of input value                         | `number`               | —                       | —          |
| size                  | size of the component                            | `string`               | large / default / small | default    |
| readonly              | same as `readonly` in native input               | `boolean`              | —                       | false      |
| disabled              | whether the component is disabled                | `boolean`              | —                       | false      |
| controls              | whether to enable the control buttons            | `boolean`              | —                       | true       |
| controls-position     | position of the control buttons                  | `string`               | right                   | —          |
| name                  | same as `name` in native input                   | `string`               | —                       | —          |
| label                 | label text                                       | `string`               | —                       | —          |
| placeholder           | placeholder in input                             | `string`               | —                       | —          |

### Events

| Name   | Description                     | Parameters                                             |
| ------ | ------------------------------- | ------------------------------------------------------ |
| change | triggers when the value changes | (currentValue: number \| NaN, oldValue: number \| NaN) |
| blur   | triggers when Input blurs       | (event: FocusEvent)                                    |
| focus  | triggers when Input focuses     | (event: FocusEvent)                                    |

### Methods

| Method | Description                      | Parameters |
| ------ | -------------------------------- | ---------- |
| focus  | get focus the input component    | —          |
| blur   | remove focus the input component | —          |
