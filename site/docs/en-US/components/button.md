<script setup>
import basic from 'exam/button/basic.vue'
import disabled from 'exam/button/disabled.vue'
import size from 'exam/button/size.vue'
import icon from 'exam/button/icon.vue'
</script>

# Button

Commonly used action buttons.

## Basic usage

Buttons can set different colors according to `type`, `primary` `success` `info` `danger` `warning` `text`

Set the `plain` attribute to set the hollow button, set the `round` attribute to set the rounded button

::: code button/basic
<basic></basic>
:::

## Disabled state

You can use the `disabled` attribute to define whether the button is disabled or not.

Use the `disabled` attribute to control whether the button is disabled. This property accepts a value of type `Boolean`.

::: code button/disabled
<disabled></disabled>
:::

## Resize

The button changes size according to `size`, providing `medium` `small` `mini` three kinds

::: code button/size
<size></size>
:::

## Icon button

::: code button/icon
<icon></icon>
:::

## Attributes

| parameter | illustrate                  | Type    | optional value                                     | default |
| --------- | --------------------------- | ------- | -------------------------------------------------- | ------- |
| size      | size                        | string  | medium / small / mini                              | —       |
| type      | type                        | string  | primary / success / warning / danger / info / text | —       |
| plain     | Whether plain button        | boolean | —                                                  | false   |
| round     | Whether to round the button | boolean | —                                                  | false   |
| disabled  | Whether to disable          | boolean | —                                                  | false   |
| icon      | icon type                   | string  | —                                                  | —       |
