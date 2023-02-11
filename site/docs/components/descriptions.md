<script setup>
  import basic from 'exam/descriptions/basic.vue'
  import size from 'exam/descriptions/size.vue'
  import vertical from 'exam/descriptions/vertical.vue'
  import custom from 'exam/descriptions/custom.vue'
</script>

# Descriptions 描述列表

以列表形式展示多个只读字段。

## 基础用法

::: code descriptions/basic
<basic></basic>
:::

## 自定义尺寸

自定义尺寸，适应在各种容器中展示。

::: code descriptions/size
<size></size>
:::

## 垂直列表

垂直的列表。

::: code descriptions/vertical
<vertical></vertical>
:::

## 自定义样式

::: code descriptions/custom
<custom></custom>
:::

## Descriptions API

### Descriptions 属性

| 属性名    | 说明                           | 类型      | 可选值                  | 默认值     |
| --------- | ------------------------------ | --------- | ----------------------- | ---------- |
| border    | 是否有边框                     | `boolean` | —                       | false      |
| column    | 一行包含几个 Descriptions Item | `number`  | —                       | 3          |
| direction | 排列的方向                     | `string`  | vertical / horizontal   | horizontal |
| size      | 列表尺寸                       | `string`  | large / default / small | default    |
| title     | 标题文本，显示在左上方         | `string`  | —                       | —          |
| extra     | 操作区文本，显示在右上方       | `string`  | —                       | —          |

### Descriptions 插槽

| 插槽名 | 说明           | 子标签            |
| ------ | -------------- | ----------------- |
| —      | 自定义默认内容 | Descriptions Item |
| title  | 自定义标题     | —                 |
| extra  | 自定义操作区   | —                 |

## Descriptions Item API

### Descriptions Item 属性

| 属性名           | 说明                                                 | 类型                | 可选值                | 默认值 |
| ---------------- | ---------------------------------------------------- | ------------------- | --------------------- | ------ |
| label            | 标签文本                                             | `string`            | —                     | —      |
| span             | 列的数量                                             | `number`            | —                     | 1      |
| width            | 列的宽度，不同行相同列的宽度按最大值设定             | `string` / `number` | —                     | —      |
| min-width        | 列的最小宽度                                         | `string` / `number` | —                     | —      |
| align            | 列的内容对齐方式                                     | `string`            | left / center / right | left   |
| label-align      | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式 | `string`            | left / center / right | —      |
| class-name       | 列的内容自定义类名                                   | `string`            | —                     | —      |
| label-class-name | label 自定义类名                                     | `string`            | —                     | —      |

### Descriptions Item 插槽

| Name  | Description    |
| ----- | -------------- |
| —     | 自定义默认内容 |
| label | 自定义标签     |
