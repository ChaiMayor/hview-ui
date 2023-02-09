<script setup>
  import basic from 'exam/backtop/basic.vue'
  import custom from 'exam/backtop/custom.vue'
</script>

# Backtop

A button to back to top.

## Basic Usage

Scroll down to see the bottom-right button.
::: code backtop/basic
<basic></basic>
:::

## Customizations

Display area is 40px \* 40px.

::: code backtop/custom
<custom></custom>
:::

## API

### Attributes

| Name              | Description                                                          | Type     | Default |
| :---------------- | :------------------------------------------------------------------- | :------- | :------ |
| visibility-height | the button will not show until the scroll height reaches this value. | `number` | 200     |
| right             | right distance.                                                      | `number` | 40      |
| bottom            | bottom distance.                                                     | `number` | 40      |

### Events

| Name  | Description          | Parameters |                               |
| :---- | :------------------- | :--------- | ----------------------------- |
| click | triggers when click. | `Function` | `(event: MouseEvent) => void` |

### Slots

| Name    | Description                |
| :------ | :------------------------- |
| default | customize default content. |
