<script setup>
import basic from 'exam/button/basic.vue'
import disabled from 'exam/button/disabled.vue'
import size from 'exam/button/size.vue'
import icon from 'exam/button/icon.vue'
</script>

# Button 按钮

常用的操作按钮。

## 基础用法

按钮可以根据 `type` 来设置不同的颜色, `primary` `success` `info` `danger` `warning` `text`

设置 `plain` 属性可以设置镂空按钮,设置 `round` 属性可以设置圆角按钮

::: code button/basic
<basic></basic>
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个`Boolean` 类型的值。

::: code button/disabled
<disabled></disabled>
:::

## 调整尺寸

按钮根据`size`来变换尺寸，提供了 `medium` `small` `mini`三种

::: code button/size
<size></size>
:::

## 图标按钮

::: code button/icon
<icon></icon>
:::

## API

### 属性

| 参数     | 说明         | 类型      | 可选值                                             | 默认  |
| -------- | ------------ | --------- | -------------------------------------------------- | ----- |
| size     | 尺寸         | `string`  | medium / small / mini                              | —     |
| type     | 类型         | `string`  | primary / success / warning / danger / info / text | —     |
| plain    | 是否朴素按钮 | `boolean` | —                                                  | false |
| round    | 是否圆角按钮 | `boolean` | —                                                  | false |
| disabled | 是否禁用     | `boolean` | —                                                  | false |
| icon     | 图标类型     | `string`  | —                                                  | —     |
