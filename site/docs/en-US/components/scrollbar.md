<script setup>
import basic from 'exam/scrollbar/basic.vue'
import scrollbarX from 'exam/scrollbar/scrollbar-x.vue'
import maxHeight from 'exam/scrollbar/max-height.vue'
// import  from './'
</script>

# Scrollbar

Used to replace the browser's native scrollbar.

## Basic usage

Use `height` property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.

::: code scrollbar/basic
<basic></basic>
:::

## Horizontal scroll

Display horizontal scroll bar can not set `height` and `max-height`，When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.

::: code scrollbar/scrollbar-x
<scrollbarX></scrollbarX>
:::

## Max height

The scrollbar is displayed only when the element height exceeds the max height.

::: code scrollbar/max-height
<maxHeight></maxHeight>
:::

## API

### Attributes

| Name       | Description                                                                                                                     | Type                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| height     | height of scrollbar                                                                                                             | `string` / `number` | —       |
| max-height | max height of scrollbar                                                                                                         | `string` / `number` | —       |
| native     | whether to use the native scrollbar style                                                                                       | `boolean`           | false   |
| wrap-style | style of wrap container                                                                                                         | `string` / `object` | —       |
| wrap-class | class of wrap container                                                                                                         | `string`            | —       |
| view-style | style of view                                                                                                                   | `string` / `object` | —       |
| view-class | class of view                                                                                                                   | `string`            | —       |
| noresize   | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | `boolean`           | false   |
| tag        | element tag of the view                                                                                                         | `string`            | div     |
| always     | always show scrollbar                                                                                                           | `boolean`           | false   |
| min-size   | minimum size of scrollbar                                                                                                       | `number`            | 20      |

### Events

| Name   | Description                                           | Type       |
| ------ | ----------------------------------------------------- | ---------- |
| scroll | triggers when scrolling, return distance of scrolling | `function` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Exposes

| Name          | Description                 | Type       |
| ------------- | --------------------------- | ---------- |
| setScrollTop  | Set distance to scroll top  | `function` |
| setScrollLeft | Set distance to scroll left | `function` |
| wrapRef       | scrollbar wrap ref          | `object`   |

<style lang="less">
  html.dark {
    p.h-scrollbar-demo-item {
      background-color: #18222c; 
    }
    .scrollbar-flex-content{
      .scrollbar-demo-item{
        background-color: #2b1d1d;
      }
    }
    .h-scrollbar__view{
      .scrollbar-demo-item{
        background-color: #18222c; 
      }
    }
  }
</style>
