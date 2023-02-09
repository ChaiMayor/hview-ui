<script setup>
import basic from 'exam/slider/basic.vue'
import disperse from 'exam/slider/disperse.vue'
import site from 'exam/slider/site.vue'
import inputBox from 'exam/slider/input-box.vue'
import sizes from 'exam/slider/sizes.vue'
import scope from 'exam/slider/scope.vue'
import vertical from 'exam/slider/vertical.vue'
import tag from 'exam/slider/tag.vue'
// import  from './'
</script>

# Slider

Drag the slider within a fixed range.

## Basic usage

The current value is displayed when the slider is being dragged.

Customize the initial value of the slider by setting the binding value.

::: code slider/basic
<basic></basic>
:::

## Discrete values

The options can be discrete.

Set step size with the `step` attribute. You can display breakpoints by setting the `show-stops` attribute.

::: code slider/disperse
<disperse></disperse>
:::

## Slider with input box

Set value via a input box.

Set the `show-input` attribute to display an input box on the right.

::: code slider/input-box
<inputBox></inputBox>
:::

## Sizes

::: code slider/sizes
<sizes></sizes>
:::

## Placement

You can custom tooltip placement.

::: code slider/site
<site></site>
:::

## Range selection

Selecting a range of values is supported.

Setting the `range` attribute activates range mode, where the binding value is an array made up of two boundary values.

::: code slider/scope
<scope></scope>
:::

## Vertical mode

Setting the `vertical` attribute to `true` enables vertical mode. In vertical mode, the `height` attribute is required.

::: code slider/vertical
<vertical></vertical>
:::

## Show marks

Setting this `marks` attribute can show mark on slider.

::: code slider/tag
<tag></tag>
:::

## API

### Attributes

| Name                  | Description                                                                                              | Type              | Accepted Values                                                                                           | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| model-value / v-model | binding value                                                                                            | `number`          | —                                                                                                         | 0       |
| min                   | minimum value                                                                                            | `number`          | —                                                                                                         | 0       |
| max                   | maximum value                                                                                            | `number`          | —                                                                                                         | 100     |
| disabled              | whether Slider is disabled                                                                               | `boolean`         | —                                                                                                         | false   |
| step                  | step size                                                                                                | `number`          | —                                                                                                         | 1       |
| show-input            | whether to display an input box, works when `range` is false                                             | `boolean`         | —                                                                                                         | false   |
| show-input-controls   | whether to display control buttons when `show-input` is true                                             | `boolean`         | —                                                                                                         | true    |
| size                  | size of the slider wrapper, will not work in vertical mode                                               | `string`          | large / default / small                                                                                   | default |
| input-size            | size of the input box, when set `size`, the default is the value of `size`                               | `string`          | large / default / small                                                                                   | default |
| show-stops            | whether to display breakpoints                                                                           | `boolean`         | —                                                                                                         | false   |
| show-tooltip          | whether to display tooltip value                                                                         | `boolean`         | —                                                                                                         | true    |
| format-tooltip        | format to display tooltip value                                                                          | `function(value)` | —                                                                                                         | —       |
| range                 | whether to select a range                                                                                | `boolean`         | —                                                                                                         | false   |
| vertical              | vertical mode                                                                                            | `boolean`         | —                                                                                                         | false   |
| height                | Slider height, required in vertical mode                                                                 | `string`          | —                                                                                                         | —       |
| tooltip-class         | custom class name for the tooltip                                                                        | `string`          | —                                                                                                         | —       |
| placement             | position of Tooltip                                                                                      | `string`          | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top     |
| marks                 | marks, type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style | `object`          | —                                                                                                         | —       |

### Events

| Name   | Description                                                                                                       | Parameters           |
| ------ | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| change | triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released) | value after changing |
| input  | triggers when the data changes (It'll be emitted in real time during sliding)                                     | value after changing |
