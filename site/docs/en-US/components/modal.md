<script setup>
import basic from 'exam/modal/basic.vue'
import sloContent from 'exam/modal/slot-content.vue'
import custom from 'exam/modal/custom.vue'
</script>

# Modal

Use to show a modal popover.

## Basic usage

::: code modal/basic
<basic></basic>
:::

## Customize the slot content

Use the named slot(#header 、 #content 、#footer) to customize the modal content.

::: code modal/slot-content
<sloContent></sloContent>
:::

## Customize the popover structure

If don't need header or footer.You can set title or footer to false.

::: code modal/custom
<custom></custom>
:::

## API

### Attributes

| Name    | Description                     | Type      | Accepted Values | Default         |
| ------- | ------------------------------- | --------- | --------------- | --------------- |
| show    | Display modal                   | `boolean` | -               | false           |
| zIndex  | The mask layer z-index          | `number`  | -               | 1               |
| bgColor | The mask layer background-color | `string`  | -               | rgba(0,0,0,0.6) |
| title   | Forbidden header slot           | `boolean` | -               | true            |
| footer  | Forbidden footer slot           | `boolean` | -               | true            |

### Slots

| Name   | Description                             |
| ------ | --------------------------------------- |
| header | Customize header content of the popover |
| body   | Customize body content of the popover   |
| footer | Customize footer content of the popover |

### Events

| Name    | Description         |
| ------- | ------------------- |
| onClose | Close modal trigger |
