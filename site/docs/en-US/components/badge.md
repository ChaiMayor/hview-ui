<script setup>
import basic from 'exam/badge/basic.vue'
import maxValue from 'exam/badge/max-value.vue'
import diy from 'exam/badge/diy.vue'
import isDot from 'exam/badge/is-dot.vue'
</script>

# Badge

A number or status mark on buttons and icons.

## Basic usage

Displays the amount of new messages.

The amount is defined with value which accepts Number or String.
::: code badge/basic
<basic></basic>
:::

## Max Value

You can customize the max value.
The max value is defined by property max which is a Number. Note that it only works when value is also a Number.
::: code badge/max-value
<maxValue></maxValue>
:::

## Customizations

Displays text content other than numbers.
When value is a String, it can display customized text.
::: code badge/diy
<diy></diy>
:::

## Red Dot

Use a red dot to mark content that needs to be noticed.
Use the attribute is-dot. It is a Boolean.
::: code badge/is-dot
<isDot></isDot>
:::

## API

### Attributes

| Name   | Description                                                                   | Type                | Accepted Values                             | Default |     |
| ------ | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------- | ------- | --- |
| value  | display value.                                                                | `string` / `number` | -                                           | -       |     |
| max    | maximum value, shows `{max}+` when exceeded. Only works if value is a number. | `number`            | -                                           | 99      |     |
| isDot  | if a little dot is displayed.                                                 | `boolean`           | -                                           | false   |     |
| hidden | hidden badge.                                                                 | `boolean`           | -                                           | false   |     |
| type   | badge type.                                                                   | `string`            | primary / success / warning / danger / info | danger  |     |
|        |                                                                               |                     |                                             |         |     |

### Slots

| Name    | Description |
| ------- | ----------- |
| default | default     |
