<script setup>
import basic from 'exam/popover/basic.vue'
import insertAction from 'exam/popover/insert-action.vue'
import insertComponent from 'exam/popover/insert-component.vue'
</script>

# Popover 弹出框

## 基础使用

popover 提供不同方向的展示方式和触发方法，详细信息见下方文档
::: code popover/basic
<basic></basic>
:::

## 嵌套信息

在 Popover 中可以嵌套其他组件，以下为嵌套 tree 组件的例子。
::: code popover/insert-component
<insertComponent></insertComponent>
:::

## 嵌套操作

在 Popover 中可以嵌套操作

::: code popover/insert-action
<insertAction></insertAction>
:::

## API

### 属性

| 属性名      | 描述                                                 | 类型          | 可选值                                                                                                    | 默认值         |
| ----------- | ---------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| v-model     | 当触发方式为手动的时候,可以使用 v-model 进行控制触发 | boolean       | true / false                                                                                              | false          |
| width       | 弹框的宽度                                           | string/number | —                                                                                                         | 最小宽度 150px |
| placement   | 出现位置                                             | string        | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top            |
| content     | 要展示的文案内容                                     | string        | —                                                                                                         | —              |
| popperClass | 为 popper 弹出框 添加类名                            | string        | —                                                                                                         | —              |
| title       | 标题                                                 | string        | —                                                                                                         | —              |

### 事件

| 事件名      | 说明                   |
| ----------- | ---------------------- |
| after-enter | 显示动画播放完毕后触发 |
| after-leave | 隐藏动画播放完毕后触发 |
