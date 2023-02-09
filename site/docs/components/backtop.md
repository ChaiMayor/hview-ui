<script setup>
  import basic from 'exam/backtop/basic.vue'
  import custom from 'exam/backtop/custom.vue'
</script>

# Backtop 回到顶部

返回页面顶部的操作按钮。

## 基础用法

通过滑动来查看容器右下角的按钮。
::: code backtop/basic
<basic></basic>
:::

## 自定义内容

显示区域被固定为 40px \* 40px 的区域，其中的内容可支持自定义。

::: code backtop/custom
<custom></custom>
:::

## API

### 属性

| 名称              | 说明                             | 类型     | 默认值 |
| :---------------- | :------------------------------- | :------- | :----- |
| visibility-height | 滚动高度达到此参数值才出现       | `number` | 200    |
| right             | 控制其显示位置，距离页面右边距   | `number` | 40     |
| bottom            | 控制其显示位置，距离页面底部距离 | `number` | 40     |

### 事件

| 名称  | 描述               | 类型       |                               |
| :---- | :----------------- | :--------- | ----------------------------- |
| click | 点击按钮触发的事件 | `Function` | `(event: MouseEvent) => void` |

### 插槽

| 名称    | 描述           |
| :------ | :------------- |
| default | 自定义默认内容 |
