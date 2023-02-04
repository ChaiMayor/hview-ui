<script setup>
import basic from 'exam/link/basic.vue'
import disabled from 'exam/link/disabled.vue'
import underline from 'exam/link/underline.vue'
</script>

# Link

text hyperlink.

## Basic usage

::: code link/basic
<basic></basic>
:::

## Disabled state

::: code link/disabled
<disabled></disabled>
:::

## Underline

::: code link/underline
<underline></underline>
:::

## API

### Attributes

| parameter | illustrate                   | Type      | optional value                              | default |
| --------- | ---------------------------- | --------- | ------------------------------------------- | ------- |
| type      | Type                         | `string`  | primary / success / warning / danger / info | —       |
| disabled  | Whether to disable           | `boolean` | —                                           | false   |
| underline | Whether to display underline | `boolean` | —                                           | false   |

<style>
.example a {
  margin-right:10px;
}
.success {
  color: #67c23a!important;
}

.info {
  color: #909399!important;
}

.danger {
  color: #f56c6c!important;
}
.warning {
  color: #e6a23c!important;
}

</style>
