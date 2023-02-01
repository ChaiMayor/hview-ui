<script setup>
  import basic from 'exam/empty/basic.vue'
  import myPicture from 'exam/empty/myPicture.vue'
  import size from 'exam/empty/size.vue'
  import bottom from 'exam/empty/bottom.vue'
</script>

# Empty

Display placeholder image in empty state.

## Basic Usage

::: code empty/basic
<basic></basic>
:::

## Custom image

Use `image` prop to set image URL.

::: code empty/myPicture
<myPicture></myPicture>
:::

## Image size

Use `image-size` prop to control image size.

::: code empty/size
<size></size>
:::

## Bottom content

Use the default slot to insert content at the bottom.

::: code empty/bottom
<bottom></bottom>
:::

## API

### Attributes

| Name        | Description        | Type     | Acceptable Value | Default |
| ----------- | ------------------ | -------- | ---------------- | ------- |
| image       | image URL          | `string` | —                | —       |
| image-size  | image size (width) | `number` | —                | —       |
| description | description        | `string` | —                | —       |

### Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
