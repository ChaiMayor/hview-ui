<script setup>
import basic from 'exam/carousel/basic.vue'
import indicator from 'exam/carousel/indicator.vue'
import arrow from 'exam/carousel/arrow.vue'
import direction from 'exam/carousel/direction.vue'

</script>

# Carousel

Display the same type of text, pictures and other content in the area.

## Basic usage

Combine the `h-carousel` and `h-carousel-item` tags and you have a carousel. Its content is completely customizable, just put the content to be displayed in the `h-carousel-item` tag .

::: code carousel/basic
<basic></basic>
:::

## Indicator

The display position of the indicator can be customized through the `indicator-position`property , and the optional values ​​are `none`、`outside`, and the indicator is displayed internally by default. `indicator-type` Properties to customize the shape of the indicator.

::: code carousel/indicator
<indicator></indicator>
:::

## Toggle arrow

You can set the display timing of the arrow through the `arrow` property . The default value is `hover` that the arrow will be displayed after the mouse is hovered. Set this value to `always` to make the arrow always display.

::: code carousel/arrow
<arrow></arrow>
:::

## Layout

The layout of the carousel can be changed by setting the `direction` property , which is by default `horizontal`. By setting `direction` to `vertical` , the carousel can be displayed vertically.

::: code carousel/direction
<direction></direction>
:::

## Carousel API

### Carousel Attributes

| Name               | Description                                               | Type      | Accepted Values        | Default    |
| ------------------ | --------------------------------------------------------- | --------- | ---------------------- | ---------- |
| height             | the height of the carousel                                | `string`  | —                      | —          |
| initial-index      | starting index                                            | `number`  | —                      | 0          |
| trigger            | How the indicator is triggered                            | `string`  | hover / click          | hover      |
| autoplay           | Whether to enable automatic switching                     | `boolean` | —                      | true       |
| interval           | Interval time for automatic switching                     | `number`  | —                      | 3000       |
| indicator-position | Where the indicator shows                                 | `string`  | outside / none         | —          |
| indicator-type     | type of indicator                                         | `string`  | rect / circle          | circle     |
| arrow              | Toggle the display timing of arrows                       | `string`  | always / hover / never | hover      |
| loop               | Whether to cycle display                                  | `boolean` | -                      | true       |
| direction          | How the carousel is laid out                              | `string`  | horizontal / vertical  | horizontal |
| pause-on-hover     | Whether to stop automatic switching when the mouse hovers | `boolean` | -                      | true       |

### Carousel Events

| Name   | Description         | Callback Parameter            |
| ------ | ------------------- | ----------------------------- |
| change | Triggered on toggle | current index, original index |

### Carousel Methods

| Name          | Description        | Parameter                                                               |
| ------------- | ------------------ | ----------------------------------------------------------------------- |
| setActiveItem | switch manually    | The index to switch to; or `h-carousel-item` the `name` attribute value |
| prev          | switch to previous | —                                                                       |
| next          | switch to next     | —                                                                       |

### Carousel Slots

| Name | Description    | Subtag        |
| ---- | -------------- | ------------- |
| -    | custom content | Carousel-Item |

## Carousel-Item API

### Carousel-Item Attributes

| Name  | Description                                                              | Type     | Accepted Values | Default |
| ----- | ------------------------------------------------------------------------ | -------- | --------------- | ------- |
| name  | The name of the `carousel-item` can be used as `setActiveItem` parameter | `string` | —               | —       |
| label | text of the corresponding indicator                                      | `string` | —               | —       |

### Carousel-Item Slots

| Name | Description    |
| ---- | -------------- |
| —    | custom content |
