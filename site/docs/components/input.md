<script setup>
import basic from 'exam/input/basic.vue'
import disabled from 'exam/input/disabled.vue'
import clearable from 'exam/input/clearable.vue'
import icon from 'exam/input/icon.vue'
import size from 'exam/input/size.vue'
import InputTextarea from 'exam/input/textarea.vue'
import password from 'exam/input/password.vue'
</script>

# Input 输入框

通过鼠标或键盘输入字符。

::: tip

Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用 v-model）否则，输入框内显示的值将不会改变。

不支持 v-model 修饰

:::

## 基础用法

::: code input/basic
<basic></basic>
:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 `input` 组件

::: code input/disabled
<disabled></disabled>
:::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

::: code input/clearable
<clearable></clearable>
:::

## 密码框

在 type 中使用`password`,即可变成密码框

::: code input/password
<password></password>
:::

## 带 Icon 的输入框

可以通过 `iconAfter` 和 `iconBefore` 属性在 `input` 组件首部和尾部增加显示图标

::: code input/icon
<icon></icon>
:::

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`

::: code input/textarea
<InputTextarea></InputTextarea>
:::

## 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项：`large`, `small`

::: code input/size
<size></size>
:::

## API

### 属性

| 参数       | 说明             | 类型      | 可选值                     | 默认  |
| ---------- | ---------------- | --------- | -------------------------- | ----- |
| size       | 尺寸             | `string`  | large / small              | —     |
| type       | 类型             | `string`  | text / password / textarea | —     |
| clearable  | 是否显示清空按钮 | `boolean` | —                          | false |
| disabled   | 是否禁用         | `boolean` | —                          | false |
| iconAfter  | 在后面增加图标   | `string`  | —                          | —     |
| iconBefore | 在前面增加图标   | `string`  | —                          | —     |

<style>
.h-icon-h, .h-after{
  right: 6px!important;
}
</style>
