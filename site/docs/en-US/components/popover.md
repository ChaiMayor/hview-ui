<script setup>
import basic from 'exam/popover/basic.vue'
import insertAction from 'exam/popover/insert-action.vue'
import insertComponent from 'exam/popover/insert-component.vue'
</script>

# Popover

## Basic usage

Popover provides different directions of presentation and trigger methods. For detailed information, see the document below.
::: code popover/basic
<basic></basic>
:::

## Nested information

You can nest other components inside the Popover,here's an example of a nested tree component.
::: code popover/insert-component
<insertComponent></insertComponent>
:::

## Nested operations

You can nest operations in a Popover

::: code popover/insert-action
<insertAction></insertAction>
:::

## API

### Attributes

| Name        | Description                                                      | Type          | Accepted Values                                                                                           | Default         |
| ----------- | ---------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- | --------------- |
| v-model     | When the trigger mode is manual, V-model can be used to control. | boolean       | true / false                                                                                              | false           |
| width       | The width of the Popover                                         | string/number | —                                                                                                         | min-width 150px |
| placement   | Display position                                                 | string        | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top             |
| content     | Show the text content in Popover                                 | string        | —                                                                                                         | —               |
| popperClass | Add class name to Popover                                        | string        | —                                                                                                         | —               |
| title       | The title of Popover                                             | string        | —                                                                                                         | —               |

### Events

| Name        | Description                                      |
| ----------- | ------------------------------------------------ |
| after-enter | Triggered when the display animation is finished |
| after-leave | Triggered when the hiden animation is finished   |
|             |                                                  |
