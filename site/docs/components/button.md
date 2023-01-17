# 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <h-button>默认按钮</h-button>
        <h-button icon="edit" type="primary">主要按钮</h-button>
        <h-button type="success">成功按钮</h-button>
        <h-button type="info">信息按钮</h-button>
        <h-button type="warning">警告按钮</h-button>
        <h-button type="danger">危险按钮</h-button>
        <h-button type="text">文字按钮</h-button>
        <br>
        <br>
        <h-button plain>朴素按钮</h-button>
        <h-button type="primary" plain>主要按钮</h-button>
        <h-button type="success" plain>成功按钮</h-button>
        <h-button type="info" plain>信息按钮</h-button>
        <h-button type="warning" plain>警告按钮</h-button>
        <h-button type="danger" plain>危险按钮</h-button>
        <br>
        <br>
        <h-button round>圆角按钮</h-button>
        <h-button type="primary" round>主要按钮</h-button>
        <h-button type="success" round>成功按钮</h-button>
        <h-button type="info" round>信息按钮</h-button>
        <h-button type="warning" round>警告按钮</h-button>
        <h-button type="danger" round>危险按钮</h-button>
    </div>

</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button>默认按钮</h-button>
    <h-button type="primary">主要按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="info">信息按钮</h-button>
    <h-button type="warning">警告按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
    <h-button type="text">文字按钮</h-button>

    <h-button plain>朴素按钮</h-button>
    <h-button type="primary" plain>主要按钮</h-button>
    <h-button type="success" plain>成功按钮</h-button>
    <h-button type="info" plain>信息按钮</h-button>
    <h-button type="warning" plain>警告按钮</h-button>
    <h-button type="danger" plain>危险按钮</h-button>

    <h-button round>圆角按钮</h-button>
    <h-button type="primary" round>主要按钮</h-button>
    <h-button type="success" round>成功按钮</h-button>
    <h-button type="info" round>信息按钮</h-button>
    <h-button type="warning" round>警告按钮</h-button>
    <h-button type="danger" round>危险按钮</h-button>
  </div>
</template>
```

:::

## 禁用状态

使用`disabled`控制按钮是否可以点击

<div class="example">
    <div>
        <h-button disabled>禁用按钮</h-button>
        <h-button type="primary" disabled>主要按钮</h-button>
        <h-button type="success" disabled>成功按钮</h-button>
        <h-button type="info" disabled>信息按钮</h-button>
        <h-button type="warning" disabled>警告按钮</h-button>
        <h-button type="danger" disabled>危险按钮</h-button>
        <br>
        <br>
        <h-button disabled>禁用按钮</h-button>
        <h-button type="primary" disabled plain>主要按钮</h-button>
        <h-button type="success" disabled plain>成功按钮</h-button>
        <h-button type="info" disabled plain>信息按钮</h-button>
        <h-button type="warning" disabled plain>警告按钮</h-button>
        <h-button type="danger" disabled plain>危险按钮</h-button>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button disabled>禁用按钮</h-button>
    <h-button type="primary" disabled>主要按钮</h-button>
    <h-button type="success" disabled>成功按钮</h-button>
    <h-button type="info" disabled>信息按钮</h-button>
    <h-button type="warning" disabled>警告按钮</h-button>
    <h-button type="danger" disabled>危险按钮</h-button>
    <br />
    <br />
    <h-button disabled>禁用按钮</h-button>
    <h-button type="primary" disabled plain>主要按钮</h-button>
    <h-button type="success" disabled plain>成功按钮</h-button>
    <h-button type="info" disabled plain>信息按钮</h-button>
    <h-button type="warning" disabled plain>警告按钮</h-button>
    <h-button type="danger" disabled plain>危险按钮</h-button>
  </div>
</template>
```

:::

## 调整尺寸

使用`size`控制按钮大小

<div class="example">
    <div>
        <h-button>默认按钮</h-button>
        <h-button size="medium">中等按钮</h-button>
        <h-button size="small">小型按钮</h-button>
        <h-button size="mini">超小按钮</h-button>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button>默认按钮</h-button>
    <h-button size="medium">中等按钮</h-button>
    <h-button size="small">小型按钮</h-button>
    <h-button size="mini">超小按钮</h-button>
  </div>
</template>
```

:::

## 图标按钮

<div class="example">
    <div>
        <h-button icon="edit" type="primary"></h-button>
        <h-button icon="edit" icon-position="right" type="success">编辑</h-button>
        <h-button icon="edit" icon-position="left">编辑</h-button>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button icon="edit" type="primary"></h-button>
    <h-button icon="edit" icon-position="right" type="success">编辑</h-button>
    <h-button icon="edit" icon-position="left">编辑</h-button>
  </div>
</template>
```

:::

## Attributes

| 参数          | 说明         | 类型    | 可选值                                             | 默认  |
| ------------- | ------------ | ------- | -------------------------------------------------- | ----- |
| size          | 尺寸         | string  | medium / small / mini                              | —     |
| type          | 类型         | string  | primary / success / warning / danger / info / text | —     |
| plain         | 是否朴素按钮 | boolean | —                                                  | false |
| round         | 是否圆角按钮 | boolean | —                                                  | false |
| disabled      | 是否禁用     | boolean | —                                                  | false |
| icon          | 图标类型     | string  | —                                                  | —     |
| icon-position | 图标位置     | string  | left/right                                         | left  |
