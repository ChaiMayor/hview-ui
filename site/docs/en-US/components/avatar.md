<script setup>
import basic from 'exam/avatar/basic.vue'
import display from 'exam/avatar/display.vue'
import fit from 'exam/avatar/fit.vue'
</script>

# Avatar

It is used to display the avatar, and supports using pictures, icons or text as the avatar.

## Basic usage

Use the `shape` and `size` attributes to set the shape and size of the avatar.

::: code avatar/basic
<basic></basic>
:::

## Display type

Supports using pictures, icons or text as avatars.
::: code avatar/display
<display></display>
:::

## Adapt container

When using an image as an avatar, set how the image is displayed in the container.

::: code avatar/fit
<fit></fit>
:::

## API

### Attributes

| Name    | Description                                       | Type                   | Accepted Values                            | Default Values |
| ------- | ------------------------------------------------- | ---------------------- | ------------------------------------------ | -------------- |
| icon    | Set the icon type of the avatar                   | `string` / `Component` | —                                          | default        |
| size    | avatar size                                       | `number` / ` string`   | large / default / small                    | circle         |
| shape   | avatar shape                                      | `string`               | circle / square                            | —              |
| border  | avatar border                                     | `string`               | none / solid / dot                         | solid          |
| src     | The source address of the picture                 | `string`               | —                                          | —              |
| src-set | Native `srcset` properties                        | `string`               | —                                          | —              |
| alt     | Native `alt` properties                           | `string`               | —                                          | —              |
| fit     | Sets how the avatar image fits into the container | `string`               | fill / contain / cover / none / scale-down | cover          |

### Events

| Name  | Description                           | Type       |
| ----- | ------------------------------------- | ---------- |
| error | Event triggered when image load fails | `Function` |

### Slots

| Name    | Description           |
| ------- | --------------------- |
| default | Custom Avatar Content |
