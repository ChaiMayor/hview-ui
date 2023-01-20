<style scoped>
.container-style{
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding:20px
}
.h-header,
.h-aside,
.h-main,
.h-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.h-main {
  height:150px
}

</style>

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

<div class="container-style">
  <h-container>
    <h-header>Header</h-header>
    <h-main>Main</h-main>
  </h-container>
</div>

::: details 显示代码

```html
<template>
  <div class="container-style">
    <h-container>
      <h-header>Header</h-header>
      <h-main>Main</h-main>
    </h-container>
  </div>
</template>
```

:::

<div class="container-style">
  <h-container>
    <h-header>Header</h-header>
    <h-main>Main</h-main>
    <h-footer>Footer</h-footer>
  </h-container>
</div>

::: details 显示代码

```html
<template>
  <div class="container-style">
    <h-container>
      <h-header>Header</h-header>
      <h-main>Main</h-main>
      <h-footer>Footer</h-footer>
    </h-container>
  </div>
</template>
```

:::

<div class="container-style">
  <h-container>
    <h-aside width="200px">Aside</h-aside>
    <h-main>Main</h-main>
  </h-container>
</div>

::: details 显示代码

```html
<template>
  <div class="container-style">
    <h-container>
      <h-aside width="200px">Aside</h-aside>
      <h-main>Main</h-main>
    </h-container>
  </div>
</template>
```

:::

<div class="container-style">
  <h-container>
    <h-header>Header</h-header>
    <h-container>
      <h-aside width="200px">Aside</h-aside>
      <h-container>
        <h-main>Main</h-main>
        <h-footer>Footer</h-footer>
      </h-container>
    </h-container>
  </h-container>
</div>

::: details 显示代码

```html
<template>
  <div class="container-style">
    <h-container>
      <h-header>Header</h-header>
      <h-container>
        <h-aside width="200px">Aside</h-aside>
        <h-container>
          <h-main>Main</h-main>
          <h-footer>Footer</h-footer>
        </h-container>
      </h-container>
    </h-container>
  </div>
</template>
```

:::

<div class="container-style">
  <h-container>
    <h-aside width="200px">Aside</h-aside>
    <h-container>
      <h-header>Header</h-header>
      <h-main>Main</h-main>
    </h-container>
  </h-container>
</div>

::: details 显示代码

```html
<template>
  <div class="container-style">
    <h-container>
      <h-aside width="200px">Aside</h-aside>
      <h-container>
        <h-header>Header</h-header>
        <h-main>Main</h-main>
      </h-container>
    </h-container>
  </div>
</template>
```

:::

<div class="container-style">
  <h-container>
    <h-aside width="200px">Aside</h-aside>
    <h-container>
      <h-header>Header</h-header>
      <h-main>Main</h-main>
      <h-footer>Footer</h-footer>
    </h-container>
  </h-container>
</div>

::: details 显示代码

```html
<template>
  <div class="container-style">
    <h-container>
      <h-aside width="200px">Aside</h-aside>
      <h-container>
        <h-header>Header</h-header>
        <h-main>Main</h-main>
        <h-footer>Footer</h-footer>
      </h-container>
    </h-container>
  </div>
</template>
```

:::

## Container API

### Container Attributes

| 属性名    | 说明             | 类型 | 默认                                                                 |
| --------- | ---------------- | ---- | -------------------------------------------------------------------- |
| direction | 子元素的排列方向 | enum | 子元素中有 `h-header` 或 `h-footer` 时为 vertical，否则为 horizontal |

### Container Slots

| 插槽名  | 说明           | 子标签                                     |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| 属性名 | 说明     | 类型   | 默认 |
| ------ | -------- | ------ | ---- |
| height | 顶栏高度 | string | 60px |

### Header Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Aside API

### Aside Attributes

| 属性名 | 说明       | 类型   | 默认  |
| ------ | ---------- | ------ | ----- |
| width  | 侧边栏宽度 | string | 300px |

### Aside Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Main API

### Main Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Footer API

### Footer Attributes

| 属性名 | 说明     | 类型   | 默认 |
| ------ | -------- | ------ | ---- |
| height | 底栏高度 | string | 60px |

### Footer Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
