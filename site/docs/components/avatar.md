<script setup>
import basic from 'exam/avatar/basic.vue'
import display from 'exam/avatar/display.vue'
import fit from 'exam/avatar/fit.vue'
</script>

# Avatar 头像

用于展示头像，支持使用图片、图标或者文字作为头像。

## 基础用法

通过 `shape` 和 `size` 属性来设置头像的形状和大小。

::: code avatar/basic
<basic></basic>
:::

## 展示类型

支持使用图片、图标或者文字作为头像
::: code avatar/display
<display></display>
:::

## 适应容器

使用图片作为头像时，设置该图片如何在容器中展示。

::: code avatar/basic
<fit></fit>
:::

## API

### 属性

| 属性名  | 说明                     | 类型                   | 可选值                                     | 默认值  |
| ------- | ------------------------ | ---------------------- | ------------------------------------------ | ------- |
| icon    | 设置头像的图标类型       | `string` / `Component` | —                                          | default |
| size    | 头像大小                 | `number` / ` string`   | large / default / small                    | circle  |
| shape   | 头像形状                 | `string`               | circle / square                            | —       |
| border  | 头像边框                 | `string`               | none / solid / dot                         | solid   |
| src     | 图片的源地址             | `string`               | —                                          | —       |
| src-set | 图片的原生 `srcset` 属性 | `string`               | —                                          | —       |
| alt     | 图片的原生 `alt` 属性    | `string`               | —                                          | —       |
| fit     | 设置头像图片如何适应容器 | `string`               | fill / contain / cover / none / scale-down | cover   |

### 事件

| 事件名 | 说明                     | 类型       |
| ------ | ------------------------ | ---------- |
| error  | 图片加载失败时触发的事件 | `Function` |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义头像内容 |
