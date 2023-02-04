<script setup>
  import basic from "exam/tag/basic.vue"
  import closable from "exam/tag/closable.vue"
  import edit from "exam/tag/edit.vue"
  import size from "exam/tag/size.vue"
  import theme from "exam/tag/theme.vue"
  import round from "exam/tag/round.vue"
</script>

# Tag 标签

用于标记和选择。

## 基础用法

通过 `type` 属性制定 tag 的类型。 或通过 `color` 属性自定义背景色。
::: code tag/basic
<basic></basic>
:::

## 可关闭标签

可以通过添加 closable 变为可关闭标签。可关闭标签具有 close 事件。
::: code tag/closable
<closable></closable>
:::

## 动态增删标签

用数组生成一组标签，可以动态添加和删除。
动态删除可以通过点击标签关闭按钮后触发的 close 事件来实现。
::: code tag/edit
<edit></edit>
:::

## 不同尺寸

Tag 组件提供了多种尺寸，可以根据需要选择不同大小的 Tag。

::: code tag/size
<size></size>
:::

## 主题

Tag 组件提供了两种的主题：dark 和 plain。
通过设置 theme 属性来改变主题，默认为 plain。
::: code tag/theme
<theme></theme>
:::

## 圆形标签

Tag 的边框可以变为圆形。

::: code tag/round
<round></round>
:::

## API

### 属性

| 属性名              | 说明           | 类型      | 可选值                      | 默认值  |
| ------------------- | -------------- | --------- | --------------------------- | ------- |
| type                | 类型           | `string`  | success/info/warning/danger | —       |
| closable            | 是否可关闭     | `boolean` | —                           | false   |
| disable-transitions | 是否禁用动画   | `boolean` | —                           | false   |
| color               | 背景色         | `string`  | —                           | —       |
| size                | 尺寸           | `string`  | large / default / small     | default |
| theme               | 主题           | `string`  | dark / plain                | plain   |
| round               | Tag 是否为圆形 | `boolean` | —                           | false   |

### 事件

| 事件名 | 说明                  | 参数 |
| ------ | --------------------- | ---- |
| click  | 点击 Tag 时触发的事件 | —    |
| close  | 关闭 Tag 时触发的事件 | —    |

### 插槽

| 插槽名 | 说明       |
| ------ | ---------- |
| —      | 自定义内容 |
