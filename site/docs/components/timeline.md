<script setup>
  import basic from "exam/timeline/basic.vue"
  import custom from "exam/timeline/custom.vue"
  import middle from "exam/timeline/middle.vue"
  import timestamp from "exam/timeline/timestamp.vue"
</script>

# Timeline 时间线

垂直展示时间流信息。

## 基础用法

Timeline 可拆分成多个按照时间戳排列的活动， 时间戳是其区分于其他控件的重要特征。

::: code timeline/basic
<basic></basic>
:::

## ⾃定义节点样式

可以⾃定义节点尺⼨、颜⾊，或直接使⽤图标。

::: code timeline/custom
<custom></custom>
:::

## 自定义时间戳

当内容在垂直⽅向上过⾼时，可以将时间戳置于内容之上。

::: code timeline/timestamp
<timestamp></timestamp>
:::

## 垂直居中

使 Timeline-Item 垂直居中。

::: code timeline/middle
<middle></middle>
:::

## Timeline API

### Timeline 插槽

| 插槽名 | 说明             | 子标签        |
| ------ | ---------------- | ------------- |
| —      | 自定义时间线内容 | Timeline-Item |

## Timeline-Item API

### Timeline-Item 属性

| 属性名         | 说明           | 类型      | 可选值                                      | 默认值 |
| -------------- | -------------- | --------- | ------------------------------------------- | ------ |
| timestamp      | 时间戳         | `string`  | —                                           | —      |
| hide-timestamp | 是否隐藏时间戳 | `boolean` | —                                           | false  |
| center         | 是否垂直居中   | `boolean` | —                                           | false  |
| placement      | 时间戳位置     | `string`  | top / bottom                                | bottom |
| type           | 节点类型       | `string`  | primary / success / warning / danger / info | —      |
| color          | 节点颜色       | `string`  | hsl / hsv / hex / rgb                       | —      |
| size           | 节点大小       | `string`  | normal / large                              | normal |
| icon           | 节点图标       | `string`  | —                                           | —      |
| hollow         | 节点是否隐藏   | `boolean` | —                                           | false  |

### Timeline-Item 插槽

| 插槽名 | 说明                        |
| ------ | --------------------------- |
| —      | 自定义 Timeline-Item 的内容 |
| dot    | 自定义节点                  |
