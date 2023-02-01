<script setup>
import basic from 'exam/input/basic.vue'
import disabled from 'exam/input/disabled.vue'
import clearable from 'exam/input/clearable.vue'
import icon from 'exam/input/icon.vue'
import size from 'exam/input/size.vue'
import InputTextarea from 'exam/input/textarea.vue'
import password from 'exam/input/password.vue'
</script>

# Input

Enter characters via mouse or keyboard

::: tip

Input is a controlled component that will always display the Vue bound value.

Normally, you should handle the input event and update the component's bound value (or use v-model). Otherwise, the value displayed in the input box will not change.

Does not support v-model decoration

:::

## Basic usage

::: code input/basic
<basic></basic>
:::

## Disabled state

Specify whether to disable the input component through the `disabled` attribute

::: code input/disabled
<disabled></disabled>
:::

## One key to clear

Use the `clearable` attribute to get an input box that can be cleared with one click

::: code input/clearable
<clearable></clearable>
:::

## password box

Use `password` in type to become a password box

::: code input/password
<password></password>
:::

## Input box with Icon

Icons can be added to the head and tail of the input component through the `iconAfter` and `iconBefore` properties

::: code input/icon
<icon></icon>
:::

## text field

Used to enter multi-line text information by specifying the value of the type attribute as textarea.

::: code input/textarea
<InputTextarea></InputTextarea>
:::

## size

Use the size attribute to change the size of the input box. In addition to the default size, there are two other options: large, small.

::: code input/size
<size></size>
:::

## Attributes

| parameter  | illustrate                          | Type    | optional value             | default |
| ---------- | ----------------------------------- | ------- | -------------------------- | ------- |
| size       | size                                | string  | large / small              | —       |
| type       | type                                | string  | text / password / textarea | —       |
| clearable  | Whether to display the clear button | boolean | —                          | false   |
| disabled   | Whether to disable                  | boolean | —                          | false   |
| iconAfter  | add icon after                      | string  | —                          | —       |
| iconBefore | add icon in front                   | string  | —                          | —       |

<style>
.h-icon-h, .h-after{
  right: 6px!important;
}
</style>
