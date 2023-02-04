<script setup>
  import basic from 'exam/result/basic.vue'
  import customize from 'exam/result/customize.vue'
</script>

# Result 结果

用于对用户操作结果或者异常状态做反馈。

## 基础用法

::: code result/basic
<basic></basic>
:::

## 自定义内容

::: code result/customize
<customize></customize>
:::

## API

### 属性

| 属性名    | 说明     | 类型     | 可选值                           | 默认 |
| --------- | -------- | -------- | -------------------------------- | ---- |
| title     | 标题     | `string` | —                                | —    |
| sub-title | 二级标题 | `string` | —                                | —    |
| icon      | 图标类型 | `string` | success / warning / info / error | info |

### 插槽

| 属性名    | 说明               |
| --------- | ------------------ |
| icon      | 自定义图标         |
| title     | 自定义标题         |
| sub-title | 自定义二级标题     |
| extra     | 自定义底部额外区域 |
