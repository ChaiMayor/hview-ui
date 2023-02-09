<script setup>
import basic from 'exam/card/basic.vue'
import simple from 'exam/card/simple.vue'
import pictureCard from 'exam/card/picture-card.vue'
import shadow from 'exam/card/shadow.vue'
</script>

# Card 卡片

将信息在卡片容器中展示。

## 基础用法

卡片包含标题，内容及操作区域。

Card 组件包括 `header`,`body`,`handle`。`header` 与 `handle` 是可选的。

::: code card/basic
<basic></basic>
:::

## 简单卡片

只有内容区域。

::: code card/basic
<simple></simple>
:::

## 包含图片的卡片

可以展示更多的内容
通过 `body-style` 自定义 body 的样式，可使内容更加多样

::: code card/picture-card
<pictureCard></pictureCard>
:::

## 带阴影的卡片

可以自定义卡片阴影的展示。
通过 `shadow` 属性设置卡片阴影，属性值为：`always`、`hover`、`never`。

::: code card/shadow
<shadow></shadow>
:::

## API

### 属性

| 属性名     | 说明                                                            | 类型     | 可选值                 | 默认值 |
| ---------- | --------------------------------------------------------------- | -------- | ---------------------- | ------ |
| header     | 卡片的标题，可以由 `header` 传入，也可以通过插槽 `#header` 传入 | `string` | -                      | —      |
| body-style | body 的 CSS 样式                                                | `object` | -                      | —      |
| shadow     | 设置阴影的显示                                                  | `string` | always / hover / never | always |

### 事件

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义内容     |
| header  | 卡片的标题区域 |
| handle  | 卡片的操作区域 |
