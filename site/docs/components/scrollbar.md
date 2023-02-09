<script setup>
import basic from 'exam/scrollbar/basic.vue'
import scrollbarX from 'exam/scrollbar/scrollbar-x.vue'
import maxHeight from 'exam/scrollbar/max-height.vue'
import manual from 'exam/scrollbar/manual.vue'
// import  from './'
</script>

# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

::: code scrollbar/basic
<basic></basic>
:::

## 横向滚动

显示横向滚动条不可设置 `height` 和 `max-height`，当元素宽度大于滚动条宽度时，会显示横向滚动条。

::: code scrollbar/scrollbar-x
<scrollbarX></scrollbarX>
:::

## 最大高度

当元素高度超过最大高度，才会显示滚动条。

::: code scrollbar/max-height
<maxHeight></maxHeight>
:::

## 手动滚动

通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。

::: code scrollbar/manual
<manual></manual>
:::

## API

### 属性

| 属性名     | 描述                                                                 | 类型                | 默认  |
| ---------- | -------------------------------------------------------------------- | ------------------- | ----- |
| height     | 滚动条高度                                                           | `string` / `number` | —     |
| max-height | 滚动条最大高度                                                       | `string` / `number` | —     |
| native     | 是否使用原生滚动条样式                                               | `boolean`           | false |
| wrap-style | 包裹容器的自定义样式                                                 | `Object`            | —     |
| wrap-class | 包裹容器的自定义类名                                                 | `string`            | —     |
| view-style | 视图的自定义样式                                                     | `Object`            | —     |
| view-class | 视图的自定义类名                                                     | `string`            | —     |
| noresize   | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 | `boolean`           | false |
| tag        | 视图的元素标签                                                       | `string`            | div   |
| always     | 滚动条总是显示                                                       | `boolean`           | false |
| min-size   | 滚动条最小尺寸                                                       | `number`            | 20    |

### 事件

| 参数   | 说明                             | 类型       |
| ------ | -------------------------------- | ---------- |
| scroll | 当触发滚动事件时，返回滚动的距离 | `function` |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### 对外暴露的方法

| 参数          | 说明                   | 类型       |
| ------------- | ---------------------- | ---------- |
| setScrollTop  | 设置滚动条到顶部的距离 | `function` |
| setScrollLeft | 设置滚动条到左边的距离 | `function` |
| wrapRef       | 滚动条包裹的 ref 对象  | `object`   |

<style lang="less">
  html.dark {
    p.h-scrollbar-demo-item {
      background-color: #18222c; 
    }
    .scrollbar-flex-content{
      .scrollbar-demo-item{
        background-color: #2b1d1d;
      }
    }
    .h-scrollbar__view{
      .scrollbar-demo-item{
        background-color: #18222c; 
      }
    }
  }
</style>
