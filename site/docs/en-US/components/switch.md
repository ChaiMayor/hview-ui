<script setup>
import basic from 'exam/switch/basic.vue'
import disabled from 'exam/switch/disabled.vue'
import size from 'exam/switch/size.vue'
import textSwitch from 'exam/switch/text-switch.vue'
import icon from 'exam/switch/icon.vue'
</script>

# Switch

Represents a switch between two opposing states, mostly used to trigger "on/off"

## Basic usage

Bind v-model to a variable of type Boolean
::: code switch/basic
<basic></basic>
:::

## Disabled state

Set the disabled attribute, accept a Boolean, set true to disable
::: code switch/disabled
<disabled></disabled>
:::

## Word description

Use the active-text attribute and inactive-text attribute to set the text description of the switch, and use the active-color attribute and inactive-color attribute to set the background color of the switch

::: code switch/text-switch
<textSwitch></textSwitch>
:::

## Size

Use the size attribute to change the size. In addition to the default size, there are two other options: large, small

::: code switch/size
<size></size>
:::

## Show custom icon

Use the inactive-icon and active-icon attributes to add icons. Use the inline-prompt property to control the icons displayed within the dots.

::: code switch/icon
<icon></icon>
:::

## API

### Attribute

| parameter      | illustrate                          | type      | optional value          | Defaults |
| -------------- | ----------------------------------- | --------- | ----------------------- | -------- |
| v-model        | bind value                          | `boolean` | true / false            | —        |
| disabled       | Whether to disable                  | `boolean` | true / false            | false    |
| active-text    | switch Text description when opened | `string`  | —                       | —        |
| inactive-text  | switch Text description when closed | `string`  | —                       | —        |
| active-icon    | switch icon when open               | `string`  | —                       | —        |
| inactive-icon  | switch icon when closed             | `string`  | —                       | —        |
| active-color   | switch Background color when opened | `string`  | —                       | #409EFF  |
| inactive-color | switch Background color when closed | `string`  | —                       | #C0CCDA  |
| size           | The size of the switch              | `string`  | large / default / small | —        |

<br/>

### Events

| 事件名称 | 说明                                            | 回调参数                   |
| -------- | ----------------------------------------------- | -------------------------- |
| change   | Callback function when the switch state changes | the value of the new state |
