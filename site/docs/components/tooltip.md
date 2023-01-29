# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

::: tip

使用时，您需要将组件包裹在 `h-tooltip` 之中
:::

## 基本使用

<div class="example">
  <h-tooltip content="这是文字提示" placement="right">
    <h-button type="primary" plain>文字提示</h-button>
  </h-tooltip>
</div>

::: details 显示代码

```html
<h-tooltip content="这是文字提示" placement="right">
  <h-button type="primary" plain>文字提示</h-button>
</h-tooltip>
```

:::

## 位置展示

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：[方向]-[对齐位置]；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

<div class="example">
  <div class="Container">
    <div class="row center">
      <h-tooltip class="box-item" content="top-start" placement="top-start">
        <h-button type="default" plain>top-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="top" placement="top">
        <h-button type="default" plain>top</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="top-end" placement="top-end">
        <h-button type="default" plain>top-end</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left-start" placement="left-start">
        <h-button type="default" plain>left-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right-start" placement="right-start">
        <h-button type="default" plain>right-start</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left" placement="left">
        <h-button type="default" plain>left</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right" placement="right">
        <h-button type="default" plain>right</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left-end" placement="left-end">
        <h-button type="default" plain>left-end</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right-end" placement="right-end">
        <h-button type="default" plain>right-end</h-button>
      </h-tooltip>
    </div>
    <div class="row center">
      <h-tooltip class="box-item" content="bottom-start" placement="bottom-start">
        <h-button type="default" plain>bottom-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="bottom" placement="bottom">
        <h-button type="default" plain>bottom</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="bottom-end" placement="bottom-end">
        <h-button type="default" plain>bottom-end</h-button>
      </h-tooltip>
    </div>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div class="Container">
    <div class="row center">
      <h-tooltip class="box-item" content="top-start" placement="top-start">
        <h-button type="default" plain>top-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="top" placement="top">
        <h-button type="default" plain>top</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="top-end" placement="top-end">
        <h-button type="default" plain>top-end</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left-start" placement="left-start">
        <h-button type="default" plain>left-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right-start" placement="right-start">
        <h-button type="default" plain>right-start</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left" placement="left">
        <h-button type="default" plain>left</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right" placement="right">
        <h-button type="default" plain>right</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left-end" placement="left-end">
        <h-button type="default" plain>left-end</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right-end" placement="right-end">
        <h-button type="default" plain>right-end</h-button>
      </h-tooltip>
    </div>
    <div class="row center">
      <h-tooltip class="box-item" content="bottom-start" placement="bottom-start">
        <h-button type="default" plain>bottom-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="bottom" placement="bottom">
        <h-button type="default" plain>bottom</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="bottom-end" placement="bottom-end">
        <h-button type="default" plain>bottom-end</h-button>
      </h-tooltip>
    </div>
  </div>
</template>

<style>
  .container {
    width: 600px;
  }
  .container .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container .center {
    justify-content: center;
  }

  .container .box-item {
    margin: 10px;
  }
</style>
```

:::

## 设置宽度

展示多行文本或者是设置文本内容的格式，可以设置`tooltip`的宽度

<div class="example">
  <h-tooltip content="这是一段非常长的文字提示，主要是用于演示" width="180px" placement="right" >
    <h-button type="primary" plain>文本提示</h-button>
  </h-tooltip>
</div>

::: details 显示代码

```html
<h-tooltip content="这是一段非常长的文字提示，主要是用于演示" width="180px" placement="right">
  <h-button type="primary" plain>文本提示</h-button>
</h-tooltip>
```

:::

<style>
.container .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container .center {
  justify-content: center;
}

.container .box-item {
  margin: 10px;
}
</style>
