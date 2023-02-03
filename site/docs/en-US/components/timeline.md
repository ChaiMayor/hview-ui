<script setup>
  import basic from "exam/timeline/basic.vue"
  import custom from "exam/timeline/custom.vue"
  import middle from "exam/timeline/middle.vue"
  import timestamp from "exam/timeline/timestamp.vue"
</script>

# Timeline

Display time flow information vertically.

## Basic Usage

Timeline can be split into multiple activities arranged by timestamp, which is an important feature that distinguishes it from other controls.

::: code timeline/basic
<basic></basic>
:::

## Custom node styles

You can customize the size and color of nodes, or use icons directly.

::: code timeline/custom
<custom></custom>
:::

## Custom timestamp

Timestamps can be placed on top of content when the content is too tall vertically.

::: code timeline/timestamp
<timestamp></timestamp>
:::

## Vertical center

Center the Timeline-Item vertically.

::: code timeline/middle
<middle></middle>
:::

## API

### Timeline Slots

| Name | Description                 | Subtags       |
| ---- | --------------------------- | ------------- |
| —    | Custom content for timeline | Timeline-Item |

### Timeline-Item Attributes

| Name           | Description                 | Type      | Accepted Values                             | Default |
| -------------- | --------------------------- | --------- | ------------------------------------------- | ------- |
| timestamp      | timestamp content           | `string`  | —                                           | —       |
| hide-timestamp | whether to show timestamp   | `boolean` | —                                           | false   |
| center         | Whether vertically centered | `boolean` | —                                           | false   |
| placement      | position of timestamp       | `string`  | top / bottom                                | bottom  |
| type           | node type                   | `string`  | primary / success / warning / danger / info | —       |
| color          | background color of node    | `string`  | hsl / hsv / hex / rgb                       | —       |
| size           | node size                   | `string`  | normal / large                              | normal  |
| icon           | icon component              | `string`  | —                                           | —       |
| hollow         | icon is hollow              | `boolean` | —                                           | false   |

### Timeline-Item Slots

| Name | Description                      |
| ---- | -------------------------------- |
| —    | Custom content for timeline item |
| dot  | Custom defined node              |
