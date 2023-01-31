<script setup>
  import basic from "exam/tag/basic.vue"
  import closable from "exam/tag/closable.vue"
  import edit from "exam/tag/edit.vue"
  import size from "exam/tag/size.vue"
  import theme from "exam/tag/theme.vue"
  import round from "exam/tag/round.vue"
</script>

# Tag

Used for marking and selection.

## Basic usage

Specify the type of tag through the `type` attribute . Or customize the background color through the `color` attribute .

::: code tag/basic
<basic></basic>
:::

## Closable tag

Can be made closable by adding `closable`. Closeable tags have a `close` event.

::: code tag/closable
<closable></closable>
:::

## Dynamically edit tags

Use an array to generate a set of tags that can be added and removed dynamically. Dynamic deletion can be achieved through the `close` event triggered after the tab close button is clicked.

::: code tag/edit
<edit></edit>
:::

## Different sizes

The Tag component provides a variety of sizes, and you can choose Tags of different sizes according to your needs.

::: code tag/size
<size></size>
:::

## Theme

The Tag component provides two themes: `dark` and `plain`. Change the theme by setting the theme attribute, which defaults to `plain`.
::: code tag/theme
<theme></theme>
:::

## Circular tag

The border of the Tag can be changed to a circle.

::: code tag/round
<round></round>
:::

## API

### Attributes

| Name                | Description                   | Type      | Accepted Values             | Default |
| ------------------- | ----------------------------- | --------- | --------------------------- | ------- |
| type                | component type                | `string`  | success/info/warning/danger | —       |
| closable            | whether Tag can be removed    | `boolean` | —                           | false   |
| disable-transitions | whether to disable animations | `boolean` | —                           | false   |
| color               | background color of the Tag   | `string`  | —                           | —       |
| size                | tag size                      | `string`  | large / default / small     | default |
| theme               | component theme               | `string`  | dark / plain                | plain   |
| round               | whether Tag is rounded        | `boolean` | —                           | false   |

### Events

| Name  | Description                  | Parameters |
| ----- | ---------------------------- | ---------- |
| click | triggers when Tag is clicked | —          |
| close | triggers when Tag is removed | —          |

### Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
