<script setup>
  import basic1 from 'exam/container/basic1.vue'
  import basic2 from 'exam/container/basic2.vue'
  import basic3 from 'exam/container/basic3.vue'
  import basic4 from 'exam/container/basic4.vue'
  import basic5 from 'exam/container/basic5.vue'
  import basic6 from 'exam/container/basic6.vue'
  import basic7 from 'exam/container/basic7.vue'
</script>

# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<h-container>`：外层容器。 当子元素中包含 `<h-header>` 或 `<h-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<h-header>`：顶栏容器。

`<h-aside>`：侧边栏容器。

`<h-main>`：主要区域容器。

`<h-footer>`：底栏容器。

::: tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。
:::

## 常见页面布局

::: code container/basic1
<basic1></basic1>
:::
::: code container/basic2
<basic2></basic2>
:::
::: code container/basic3
<basic3></basic3>
:::
::: code container/basic4
<basic4></basic4>
:::
::: code container/basic5
<basic5></basic5>
:::
::: code container/basic6
<basic6></basic6>
:::
::: code container/basic7
<basic7></basic7>
:::

## Container API

### Container 属性

| 属性名    | 说明             | 类型   | 默认                                                                 |
| --------- | ---------------- | ------ | -------------------------------------------------------------------- |
| direction | 子元素的排列方向 | `enum` | 子元素中有 `h-header` 或 `h-footer` 时为 vertical，否则为 horizontal |

### Container 插槽

| 插槽名  | 说明           | 子标签                                     |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header 属性

| 属性名 | 说明     | 类型     | 默认 |
| ------ | -------- | -------- | ---- |
| height | 顶栏高度 | `string` | 60px |

### Header 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Aside API

### Aside 属性

| 属性名 | 说明       | 类型     | 默认  |
| ------ | ---------- | -------- | ----- |
| width  | 侧边栏宽度 | `string` | 300px |

### Aside 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Main API

### Main 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Footer API

### Footer 属性

| 属性名 | 说明     | 类型     | 默认 |
| ------ | -------- | -------- | ---- |
| height | 底栏高度 | `string` | 60px |

### Footer 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

<style>
.h-header,
.h-aside,
.h-main,
.h-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.h-main {
  height: 150px;
}
</style>
