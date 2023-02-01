<script setup>
  import basic from "exam/progress/basic.vue"
  import inline from "exam/progress/inline.vue"
  import color from "exam/progress/color.vue"
  import round from "exam/progress/round.vue"
  import dashboard from "exam/progress/dashboard.vue"
  import animation from "exam/progress/animation.vue"
</script>

# Progress

Used to show progress and inform the user of the current status.

## Basic Usage

The `percentage` property indicates the percentage corresponding to the progress bar. This attribute is required and must be in the range 0-100. You can customize the text display format by `format`.

::: code progress/basic
<basic></basic>
:::

## Display text in the progress bar

The Progress component `stroke-width` can change the height of the progress bar through the `text-inside` property, and can change the text inside the progress bar through the property.

::: code progress/inline
<inline></inline>
:::

## Custom color

The color of the progress bar can be set via the `color` property , which can accept hexadecimal color values, functions and arrays.

::: code progress/color
<color></color>
:::

## Circular progress bar

The Progress component can specify the use of a circular progress bar through the `type` property , and in the circular progress bar, the size can also be set through the property `width`.

::: code progress/round
<round></round>
:::

## Dashboard progress bar

You can also assign `type` properties to the `ashboard` progress bar using the control panel.

::: code progress/dashboard
<dashboard></dashboard>
:::

## Animation progress bar

Animate using the `intermediate` property `duration` to control the animation duration.

::: code progress/animation
<animation></animation>
:::

## API

### Attributes

| Name           | Description                                                                           | Type                        | Accepted Values       | Default |
| -------------- | ------------------------------------------------------------------------------------- | --------------------------- | --------------------- | ------- |
| percentage     | percentage(**required**)                                                              | `number`                    | (0-100)               | 0       |
| type           | the type of progress bar                                                              | `string`                    | line/circle/dashboard | line    |
| stroke-width   | the width of progress bar                                                             | `number`                    | —                     | 6       |
| text-inside    | whether to place the percentage inside progress bar, only works when `type` is 'line' | `boolean`                   | —                     | false   |
| status         | the current status of progress bar                                                    | `string`                    | success/error/warning | —       |
| indeterminate  | set indeterminate progress                                                            | `boolean`                   | -                     | false   |
| duration       | control the animation duration of indeterminate progress                              | `number`                    | -                     | 3       |
| color          | background color of progress bar. Overrides `status` prop                             | `string`/`function`/`array` | —                     | ''      |
| width          | the canvas width of circle progress bar                                               | `number`                    | —                     | 126     |
| show-text      | whether to show percentage                                                            | `boolean`                   | —                     | true    |
| stroke-linecap | circle/dashboard type shape at the end path                                           | `string`                    | butt/round/square     | round   |
| format         | custom text format                                                                    | `function`(percentage)      | —                     | —       |

### Slots

| Name    | Description                                       |
| ------- | ------------------------------------------------- |
| default | Customized content, parameter is `{ percentage }` |
