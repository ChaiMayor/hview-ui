<script setup>
import basic from 'exam/result/basic.vue'
import customize from 'exam/result/customize.vue'
</script>

## Result

Used to give feedback on the result of user's operation or access exception.

## Basic usage

::: code result/basic
<basic></basic>
:::

## Customized content

::: code result/customize
<customize></customize>
:::

## Result Attributes

| 属性名    | 说明     | 类型   | 可选值                           | 默认 |
| --------- | -------- | ------ | -------------------------------- | ---- |
| title     | 标题     | string | —                                | —    |
| sub-title | 二级标题 | string | —                                | —    |
| icon      | 图标类型 | string | success / warning / info / error | info |

## Result Slots

| 属性名    | 说明               |
| --------- | ------------------ |
| icon      | 自定义图标         |
| title     | 自定义标题         |
| sub-title | 自定义二级标题     |
| extra     | 自定义底部额外区域 |
