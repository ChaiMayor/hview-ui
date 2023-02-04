<script setup>
import basic from 'exam/icon/basic.vue'
import changeColor from 'exam/icon/change-color.vue'
import badge from 'exam/icon/badge.vue'
import iconList from 'exam/icon/icon-list.vue'
</script>

<style scoped>
.icon-example {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 30px;
}
</style>

# Icon 图标

Hview UI 提供了一套常用的图标集合。

## 基础使用

图标根据传入不同的 name 值，来动态展示不同的图标

::: code icon/basic
<basic></basic>
:::

## 改变图标颜色

h-icon 根据传入不同的 color 值，来动态展示对应颜色的图标

::: code icon/change-color
<changeColor></changeColor>
:::

## 添加图标徽标

h-icon 传入 dot，图标右上角展示徽标红点，badge 值用于徽标显示详情值

::: code icon/badge
<badge></badge>
:::

## 图标集合

<iconList></iconList>

## API

### 属性

| 参数  | 说明             | 类型            | 可选值 | 默认  |
| ----- | ---------------- | --------------- | ------ | ----- |
| name  | 图标名称         | `string`        | —      | —     |
| color | 图标颜色         | `string`        | —      | —     |
| dot   | 图标是否展示徽标 | `boolean`       | —      | false |
| badge | 徽标 value       | `string/number` | —      | —     |
