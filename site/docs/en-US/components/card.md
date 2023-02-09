<script setup>
import basic from 'exam/card/basic.vue'
import simple from 'exam/card/simple.vue'
import pictureCard from 'exam/card/picture-card.vue'
import shadow from 'exam/card/shadow.vue'
</script>

# Card

Display information in a card container.

## Bacic usage

Cards contain title, content and action areas.

Card components include `header`,`body`,`handle`。`header` and `handle` are optional.

::: code card/basic
<basic></basic>
:::

## Simple Card

Only the content area.

::: code card/basic
<simple></simple>
:::

## Cards with pictures

More content can be displayed.
Use `body-style` customizing the style of the body, the content can be more diverse.

::: code card/picture-card
<pictureCard></pictureCard>
:::

## Shaded card

The display of the card shadow can be customized.
Set the card shadow through the `shadow` attribute, the attribute value is: `always`、`hover`、`never`.

::: code card/shadow
<shadow></shadow>
:::

## API

### Attributes

| Name       | Description                                                                             | Type     | Accepted Values        | Default |
| ---------- | --------------------------------------------------------------------------------------- | -------- | ---------------------- | ------- |
| header     | The title of the card, which can be `header` passed in by or through the `#header` slot | `string` | -                      | —       |
| body-style | CSS styles for body                                                                     | `object` | -                      | —       |
| shadow     | Set the display of shadows                                                              | `string` | always / hover / never | always  |

### Slots

| Slot    | Description                      |
| ------- | -------------------------------- |
| default | custom content                   |
| header  | The title area of ​​the card     |
| handle  | The operating area of ​​the card |
