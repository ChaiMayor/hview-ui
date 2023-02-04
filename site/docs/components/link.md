<script setup>
import basic from 'exam/link/basic.vue'
import disabled from 'exam/link/disabled.vue'
import underline from 'exam/link/underline.vue'
</script>

# Link 文字链接

文字超链接。

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

## API

### 属性

| 参数      | 说明           | 类型      | 可选值                                      | 默认  |
| --------- | -------------- | --------- | ------------------------------------------- | ----- |
| type      | 类型           | `string`  | primary / success / warning / danger / info | —     |
| disabled  | 是否禁用       | `boolean` | —                                           | false |
| underline | 是否显示下划线 | `boolean` | —                                           | false |

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
