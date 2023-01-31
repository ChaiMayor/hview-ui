<script setup>
import basic from 'exam/link/basic.vue'
import disabled from 'exam/link/disabled.vue'
import underline from 'exam/link/underline.vue'
</script>

# Link 文字链接

text hyperlink

## 基础用法

::: code link/basic
<basic></basic>
:::

## 禁用状态

::: code link/disabled
<disabled></disabled>
:::

## 下划线

::: code link/underline
<underline></underline>
:::

## Attributes

| parameter | illustrate                   | Type    | optional value                              | default |
| --------- | ---------------------------- | ------- | ------------------------------------------- | ------- |
| type      | Type                         | string  | primary / success / warning / danger / info | —       |
| disabled  | Whether to disable           | boolean | —                                           | false   |
| underline | Whether to display underline | boolean | —                                           | false   |

<style>
.example a {
  margin-right:10px;
}

.primary {
  color: #409eff!important;
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

.primary-distbled:hover {
  color: #a0cfff!important;
}

.success-distbled:hover {
  color: #95d475!important;
}

.info-distbled:hover {
  color: #b1b3b8!important;
}

.danger-distbled:hover {
  color: #f89898!important;
}

.warning-distbled:hover {
  color: #eebe77!important;
}
</style>
