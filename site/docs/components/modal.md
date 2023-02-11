<script setup>
import basic from 'exam/modal/basic.vue'
import sloContent from 'exam/modal/slot-content.vue'
import custom from 'exam/modal/custom.vue'
</script>

# Modal 弹窗

用来展示一个模态弹窗

## 基本使用

::: code modal/basic
<basic></basic>
:::

## 自定义插槽内容

使用具名插槽 #header 、 #content 、#footer 可对模态框内容进行自定义。

::: code modal/slot-content
<sloContent></sloContent>
:::

## 自定义弹窗结构

如果不需要 header、footer。可以通过设置 title、footer 来取消。

::: code modal/custom
<custom></custom>
:::

## API

### 属性

| 属性名  | 描述                 | 类型      | 可选值 | 默认值          |
| ------- | -------------------- | --------- | ------ | --------------- |
| show    | modal 是否显示       | `boolean` | -      | false           |
| zIndex  | 遮罩层的层级         | `number`  | -      | 1               |
| bgColor | 遮罩层背景颜色       | `string`  | -      | rgba(0,0,0,0.6) |
| title   | 是否禁用 header 插槽 | `boolean` | -      | true            |
| footer  | 是否禁用 footer 插槽 | `boolean` | -      | true            |

### 插槽

| 插槽名 | 说明                           |
| ------ | ------------------------------ |
| header | 可自定义消息弹框的 header 内容 |
| body   | 可自定义消息弹框的 body 内容   |
| footer | 可自定义消息弹框的 footer 内容 |

### 事件

| 事件名  | 说明            |
| ------- | --------------- |
| onClose | 关闭 modal 触发 |
