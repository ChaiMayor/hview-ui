<script setup>
import basic from 'exam/tooltip/basic.vue'
import positionShow from 'exam/tooltip/position-show.vue'
import settingWidth from 'exam/tooltip/setting-width.vue'
</script>

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

::: tip

使用时，您需要将组件包裹在 `h-tooltip` 之中
:::

## 基本使用

::: code tooltip/basic
<basic></basic>
:::

## 位置展示

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：[方向]-[对齐位置]；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

::: code tooltip/position-show
<positionShow></positionShow>
:::

## 设置宽度

展示多行文本或者是设置文本内容的格式，可以设置`tooltip`的宽度

::: code tooltip/setting-width
<settingWidth></settingWidth>
:::

## API

### 属性

| 参数      | 说明           | 类型     | 可选值                                                                                                    | 默认   |
| --------- | -------------- | -------- | --------------------------------------------------------------------------------------------------------- | ------ |
| content   | 内容           | `string` |                                                                                                           | -----  |
| placement | 工具提示的位置 | `string` | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
