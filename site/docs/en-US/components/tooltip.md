<script setup>
import basic from 'exam/tooltip/basic.vue'
import positionShow from 'exam/tooltip/position-show.vue'
import settingWidth from 'exam/tooltip/setting-width.vue'
</script>

# Tooltip

It is often used to display the prompt information when the mouse hovers.

::: tip

To use, you need to wrap the component in `h-tooltip`
:::

## Basic use

::: code tooltip/basic
<basic></basic>
:::

## Location display

Here we provide 9 display methods in different directions, which can be understood through the following complete examples and choose the effect you want.

Use the `content` property to determine the tooltip on `hover`. The display effect is determined by the `placement` attribute: `placement` attribute value: [direction]-[alignment position]; four directions: `top`, `left`, `right`, `bottom`; three alignment positions: `start`, `end`, default is empty. Such as `placement="left-end"`, the hint appears on the left side of the target element, and the bottom of the hint is aligned with the bottom of the target element.

::: code tooltip/position-show
<positionShow></positionShow>
:::

## Set width

展示多行文本或者是设置文本内容的格式，可以设置`tooltip`的宽度

::: code tooltip/setting-width
<settingWidth></settingWidth>
:::

## API

### Attributes

| parameter | illustrate              | Type     | optional value                                                                                            | default |
| --------- | ----------------------- | -------- | --------------------------------------------------------------------------------------------------------- | ------- |
| content   | content                 | `string` |                                                                                                           | -----   |
| placement | position of the tooltip | `string` | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom  |
