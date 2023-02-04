<script setup>
  import basic from 'exam/divider/basic.vue'
  import custom from 'exam/divider/custom.vue'
  import dashed from 'exam/divider/dashed.vue'
  import vertical from 'exam/divider/vertical.vue'

</script>

# Divider

The dividing line that separates the content.

## Basic usage

Divide the text of different paragraphs.
::: code divider/basic
<basic></basic>
:::

## Custom content

You can customize the content on the divider line.
::: code divider/custom
<custom></custom>
:::

## dashed line

You can set the style of divider.
::: code divider/dashed
<dashed></dashed>
:::

## Vertical divider

::: code divider/vertical
<vertical></vertical>
:::

## API

### Attributes

| Name             | Description            | Type     | Accepted Values       | Default    |
| :--------------- | :--------------------- | :------- | :-------------------- | :--------- |
| direction        | 设置分割线方向         | `string` | horizontal / vertical | horizontal |
| border-style     | 设置分隔符样式         | `string` | solid/dashed/dotted   | solid      |
| content-position | 自定义分隔线内容的位置 | `string` | left / right / center | center     |

### Slots

| Name | Description          |
| :--- | :------------------- |
| —    | 设置分割线文案的位置 |
