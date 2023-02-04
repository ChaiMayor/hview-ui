<script setup>
  import basic from 'exam/divider/basic.vue'
  import custom from 'exam/divider/custom.vue'
  import dashed from 'exam/divider/dashed.vue'
  import vertical from 'exam/divider/vertical.vue'

</script>

# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。
::: code divider/basic
<basic></basic>
:::

## 设置文案

可以在分割线上自定义文本内容。
::: code divider/custom
<custom></custom>
:::

## 虚线

您可以设置分隔符的样式。
::: code divider/dashed
<dashed></dashed>
:::

## 垂直分隔线

::: code divider/vertical
<vertical></vertical>
:::

## API

### 属性

| 属性名           | 说明                   | 类型     | 可选值                | 默认值     |
| :--------------- | :--------------------- | :------- | :-------------------- | :--------- |
| direction        | 设置分割线方向         | `string` | horizontal / vertical | horizontal |
| border-style     | 设置分隔符样式         | `string` | solid/dashed/dotted   | solid      |
| content-position | 自定义分隔线内容的位置 | `string` | left / right / center | center     |

### 插槽

| 事件名 | 说明                 |
| :----- | :------------------- |
| —      | 设置分割线文案的位置 |
