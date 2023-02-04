<script setup>
import basic from 'exam/radio/basic.vue'
import disabled from 'exam/radio/disabled.vue'
import vertical from 'exam/radio/vertical.vue'
// import  from './'
</script>

# Radio

Single selection among multiple options.

## Basic

Radio should not have too many options. Otherwise, use the Select component instead.

Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of label of the chosen radio. The type of label is `String` or `Number`.

::: code radio/basic
<basic></basic>
:::

## Disabled

`disabled` attribute is used to disable the radio.

You just need to add the `disabled` attribute.

::: code radio/disabled
<disabled></disabled>
:::

## Vertical

To enable vertical alignment, set the value of the `inline` property to `false`

::: code radio/vertical
<vertical></vertical>
:::

## API

### Attributes

| Name                  | Description                       | Type                | Default |
| --------------------- | --------------------------------- | ------------------- | ------- |
| model-value / v-model | binding value                     | `string` / `number` | —       |
| label                 | The value of the option box       | `string` / `number` | —       |
| disabled              | Whether to disable the option box | `boolean`           | false   |
| inline                | Column mode of the radio box      | `boolean`           | true    |

### Events

| Name   | Description  | CallbackType                                   |
| ------ | ------------ | ---------------------------------------------- |
| change | Select event | Values of the parameters of the selected Radio |
