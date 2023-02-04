<script setup>
import basic from 'exam/checkbox/basic.vue'
import disabled from 'exam/checkbox/disabled.vue'
import more from 'exam/checkbox/more.vue'
import interate from 'exam/checkbox/interate.vue'
import border from 'exam/checkbox/border.vue'
</script>

# Checkbox

Commonly used to select multiple data from a set of data

## Basic usage

It can be used alone to indicate the switch between two states, and the content written in the label is the introduction after the checkbox button
In a single checkbox, the value of the default binding variable will be Boolean, which is true if selected

::: code checkbox/basic
<basic></basic>
:::

## Disabled state

The multi-selection box is not available, just set the disabled attribute

::: code checkbox/disabled
<disabled></disabled>
:::

## Checkbox group

Applicable to the scenario where multiple checkboxes are bound to the same array, and the selected items in this group of options are indicated by whether they are checked or not

::: code checkbox/more
<more></more>
:::

## Intermediate state

The indeterminate attribute is used to indicate the indeterminate state of the checkbox, which is generally used to achieve the effect of selecting all

::: code checkbox/interate
<interate></interate>
:::

## with border

Setting the border property can be rendered as a multi-select box with a border

::: code checkbox/border
<border></border>
:::

## Checkbox API

### Checkbox Attributes

| parameter     | illustrate                                                                                        | Type                            | optional value | default |
| ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------- | -------------- | ------- |
| v-model       | bind value                                                                                        | `boolean`                       | —              | —       |
| label         | The value of the checked state (only valid when `checkbox-group` or bound object type is `array`) | `string` / `number` / `boolean` | —              | —       |
| disabled      | Whether to disable                                                                                | `boolean`                       | —              | false   |
| border        | Whether to display the border                                                                     | `boolean`                       | —              | false   |
| name          | native name attribute                                                                             | `string`                        | —              | —       |
| checked       | Is it currently checked                                                                           | `boolean`                       | —              | false   |
| indeterminate | Set the indeterminate state, only responsible for style control                                   | `boolean`                       | —              | false   |

<br/>

### Checkbox Events

| event name | illustrate                           | callback parameter |
| ---------- | ------------------------------------ | ------------------ |
| change     | Event fired when bound value changes | updated value      |

<br/>

## Checkbox-group API

### Checkbox-group Attributes

| parameter       | illustrate         | Type      | optional value | default |
| --------------- | ------------------ | --------- | -------------- | ------- |
| value / v-model | bind value         | `array`   | —              | —       |
| disabled        | Whether to disable | `boolean` | —              | false   |

<br/>

### Checkbox-group Events

| event name | illustrate                           | callback parameter |
| ---------- | ------------------------------------ | ------------------ |
| change     | Event fired when bound value changes | updated value      |
