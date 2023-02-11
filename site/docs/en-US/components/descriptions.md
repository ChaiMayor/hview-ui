<script setup>
  import basic from 'exam/descriptions/basic.vue'
  import size from 'exam/descriptions/size.vue'
  import vertical from 'exam/descriptions/vertical.vue'
  import custom from 'exam/descriptions/custom.vue'
</script>

# Descriptions

Display multiple read-only fields as a list.

## Basic Usage

::: code descriptions/basic
<basic></basic>
:::

## Custom size

Customized size, suitable for display in various containers.

::: code descriptions/size
<size></size>
:::

## Vertical list.

vertical list.

::: code descriptions/vertical
<vertical></vertical>
:::

## Custom style

::: code descriptions/custom
<custom></custom>
:::

## API

### Descriptions Attributes

| Name      | Description                                | Type      | Accepted Values         | Default    |
| --------- | ------------------------------------------ | --------- | ----------------------- | ---------- |
| border    | with or without border                     | `boolean` | —                       | false      |
| column    | numbers of `Descriptions Item` in one line | `number`  | —                       | 3          |
| direction | direction of list                          | `string`  | vertical / horizontal   | horizontal |
| size      | size of list                               | `string`  | large / default / small | default    |
| title     | title text, display on the top left        | `string`  | —                       | —          |
| extra     | extra text, display on the top right       | `string`  | —                       | —          |

### Descriptions Slots

| Name  | Description                                 | Subtags           |
| ----- | ------------------------------------------- | ----------------- |
| —     | customize default content                   | Descriptions Item |
| title | custom title, display on the top left       | —                 |
| extra | custom extra area, display on the top right | —                 |

### Descriptions Item Attributes

| Name             | Description                                                                                                                                                                                  | Type                | Accepted Values       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------- | ------- |
| label            | label text                                                                                                                                                                                   | `string`            | —                     | —       |
| span             | colspan of column                                                                                                                                                                            | `number`            | —                     | 1       |
| width            | column width, the width of the same column in different rows is set by the max value (If no `border`, width contains label and content)                                                      | `string` / `number` | —                     | —       |
| min-width        | column minimum width, columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion (If no`border`, width contains label and content) | `string` / `number` | —                     | —       |
| align            | column content alignment (If no `border`, effective for both label and content)                                                                                                              | `string`            | left / center / right | left    |
| label-align      | column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute)                                                  | `string`            | left / center / right | —       |
| class-name       | column content custom class name                                                                                                                                                             | `string`            | —                     | —       |
| label-class-name | column label custom class name                                                                                                                                                               | `string`            | —                     | —       |

### Descriptions Item Slots

| Name  | Description               |
| ----- | ------------------------- |
| —     | customize default content |
| label | custom label              |
