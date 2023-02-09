<script setup>
import basic from 'exam/message/basic.vue'
import type from 'exam/message/type.vue'
import ShowClose from 'exam/message/show-close.vue'
import CenterMessage from 'exam/message/center-message.vue'
import HTMLString from 'exam/message/html-string.vue'
</script>

# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失，Message 可以接收一个字符串作为参数，它会被显示为正文内容。

::: code message/basic
<basic></basic>
:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为 info。

::: code message/type
<type></type>
:::

## 可关闭的消息提示

我们还可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true。

::: code message/show-close
<ShowClose></ShowClose>
:::

## 文字居中

使用 center 属性让文字水平居中。

::: code message/center-message
<CenterMessage></CenterMessage>
:::

## 使用 HTML 片段作为正文内容

message 还支持使用 HTML 字符串作为正文内容。

将 dangerouslyUseHTMLString 属性设置为 true,message 就会被当作 HTML 片段处理。

::: code message/html-string
<HTMLString></HTMLString>
:::

## API

### 属性

| 参数      | 说明                                          | 类型       | 可选值                                    | 默认  |
| --------- | --------------------------------------------- | ---------- | ----------------------------------------- | ----- |
| message   | 消息文字                                      | `string`   |                                           | —     |
| type      | 消息类型                                      | `string`   | success / warning / info / danger / error | —     |
| duratio   | 显示时间，单位为毫秒。 设为 0 则不会自动关闭  | `number`   | —                                         | 3000  |
| center    | 文字是否居中                                  | `boolean`  | —                                         | false |
| ShowClose | 是否显示关闭按钮                              | `boolean`  | —                                         | false |
| on-close  | 关闭时的回调函数, 参数为被关闭的 message 实例 | `function` | —                                         | —     |
