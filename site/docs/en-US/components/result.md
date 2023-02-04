<script setup>
  import basic from 'exam/result/basic.vue'
  import customize from 'exam/result/customize.vue'
</script>

# Result

Used to give feedback on the result of user's operation or access exception.

## Basic usage

::: code result/basic
<basic></basic>
:::

## Customized content

::: code result/customize
<customize></customize>
:::

## API

### Attributes

| Name      | Description | Type     | Accepted Values                  | Default |
| --------- | ----------- | -------- | -------------------------------- | ------- |
| title     | title       | `string` | —                                | —       |
| sub-title | sub title   | `string` | —                                | —       |
| icon      | icon type   | `string` | success / warning / info / error | info    |

### Slots

| Name      | Description       |
| --------- | ----------------- |
| icon      | custom icon       |
| title     | custom title      |
| sub-title | custom sub title  |
| extra     | custom extra area |
