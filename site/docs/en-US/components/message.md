<script setup>
import basic from 'exam/message/basic.vue'
import type from 'exam/message/type.vue'
import ShowClose from 'exam/message/show-close.vue'
import CenterMessage from 'exam/message/center-message.vue'
import HTMLString from 'exam/message/HTMLString.vue'
</script>

# Message

It is often used as a feedback prompt after an active operation.

## Basic usage

Appears from the top and disappears automatically after 3 seconds. Message can receive a string as a parameter, which will be displayed as the body content.

::: code message/basic
<basic></basic>
:::

## Different states

It is used to display the operation feedback of "success, warning, message, error".

When more properties need to be customized, Message can also receive an object as a parameter. For example, setting the type field can define different states, and the default is info.

::: code message/type
<type></type>
:::

## Closable message prompt

We can also add a close button.

The default Message cannot be closed manually. If you need to manually close the function, you can set showClose to true.

::: code message/show-close
<ShowClose></ShowClose>
:::

## Center text

Use the center property to center the text horizontally.

::: code message/center-message
<CenterMessage></CenterMessage>
:::

## Use HTML fragments as body content

message also supports HTML strings as body content.

By setting the dangerouslyUseHTMLString property to true, the message will be treated as an HTML fragment.

::: code message/HTMLString
<HTMLString></HTMLString>
:::

## Attributes

| parameter | illustrate                                                                       | Type     | optional value                            | default |
| --------- | -------------------------------------------------------------------------------- | -------- | ----------------------------------------- | ------- |
| message   | message text                                                                     | string   |                                           | —       |
| type      | message type                                                                     | string   | success / warning / info / danger / error | —       |
| duratio   | Display time in milliseconds. Set to 0 to not automatically close                | number   | —                                         | 3000    |
| center    | Whether the text is centered                                                     | boolean  | —                                         | false   |
| ShowClose | Whether to display the close button                                              | boolean  | —                                         | false   |
| on-close  | The callback function when closing, the parameter is the closed message instance | function | —                                         | —       |
