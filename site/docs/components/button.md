<style scoped>
.example {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding:20px;
}
.example div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2px;
}
</style>

# Button 按钮

常用的操作按钮。

## 基础用法

按钮可以根据 `type` 来设置不同的颜色, `primary` `success` `info` `danger` `warning` `text`

设置 `plain` 属性可以设置镂空按钮,设置 `round` 属性可以设置圆角按钮

<div class="example">
  <div>
    <h-button>Default</h-button>
    <h-button type="primary">Primary</h-button>
    <h-button type="success">Success</h-button>
    <h-button type="info">Info</h-button>
    <h-button type="warning">Warning</h-button>
    <h-button type="danger">Danger</h-button>
  </div>
  <div>
    <h-button plain>Plain</h-button>
    <h-button type="primary" plain>Primary</h-button>
    <h-button type="success" plain>Success</h-button>
    <h-button type="info" plain>Info</h-button>
    <h-button type="warning" plain>Warning</h-button>
    <h-button type="danger" plain>Danger</h-button>
  </div>
  <div>
    <h-button round>Round</h-button>
    <h-button type="primary" round>Primary</h-button>
    <h-button type="success" round>Success</h-button>
    <h-button type="info" round>Info</h-button>
    <h-button type="warning" round>Warning</h-button>
    <h-button type="danger" round>Danger</h-button>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button>Default</h-button>
    <h-button type="primary">Primary</h-button>
    <h-button type="success">Success</h-button>
    <h-button type="info">Info</h-button>
    <h-button type="warning">Warning</h-button>
    <h-button type="danger">Danger</h-button>

    <h-button plain>Plain</h-button>
    <h-button type="primary" plain>Primary</h-button>
    <h-button type="success" plain>Success</h-button>
    <h-button type="info" plain>Info</h-button>
    <h-button type="warning" plain>Warning</h-button>
    <h-button type="danger" plain>Danger</h-button>

    <h-button round>Round</h-button>
    <h-button type="primary" round>Primary</h-button>
    <h-button type="success" round>Success</h-button>
    <h-button type="info" round>Info</h-button>
    <h-button type="warning" round>Warning</h-button>
    <h-button type="danger" round>Danger</h-button>
  </div>
</template>
```

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个`Boolean` 类型的值。

<div class="example">
  <div>
    <h-button disabled>Default</h-button>
    <h-button type="primary" disabled>Primary</h-button>
    <h-button type="success" disabled>Success</h-button>
    <h-button type="info" disabled>Info</h-button>
    <h-button type="warning" disabled>Warning</h-button>
    <h-button type="danger" disabled>Danger</h-button>
    <br>
    <h-button disabled>Default</h-button>
    <h-button type="primary" disabled plain>Primary</h-button>
    <h-button type="success" disabled plain>Success</h-button>
    <h-button type="info" disabled plain>Info</h-button>
    <h-button type="warning" disabled plain>Warning</h-button>
    <h-button type="danger" disabled plain>Danger</h-button>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button disabled>Default</h-button>
    <h-button type="primary" disabled>Primary</h-button>
    <h-button type="success" disabled>Success</h-button>
    <h-button type="info" disabled>Info</h-button>
    <h-button type="warning" disabled>Warning</h-button>
    <h-button type="danger" disabled>Danger</h-button>

    <h-button disabled>Default</h-button>
    <h-button type="primary" disabled plain>Primary</h-button>
    <h-button type="success" disabled plain>Success</h-button>
    <h-button type="info" disabled plain>Info</h-button>
    <h-button type="warning" disabled plain>Warning</h-button>
    <h-button type="danger" disabled plain>Danger</h-button>
  </div>
</template>
```

:::

## 调整尺寸

按钮根据`size`来变换尺寸，提供了 `medium` `small` `mini`三种

<div class="example">
  <div>
    <h-button>Default</h-button>
    <h-button size="medium">Medium</h-button>
    <h-button size="small">Small</h-button>
    <h-button size="mini">mini</h-button>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button>Default</h-button>
    <h-button size="medium">Medium</h-button>
    <h-button size="small">Small</h-button>
    <h-button size="mini">mini</h-button>
  </div>
</template>
```

:::

## 图标按钮

<div class="example">
  <div>
    <h-button icon="edit" type="primary"></h-button>
    <h-button icon="edit" type="primary" plain>编辑</h-button>
    <h-button icon="share" type="primary" round></h-button>
    <h-button icon="share" type="success">分享</h-button>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-button icon="edit" type="primary"></h-button>
    <h-button icon="edit" type="primary" plain>编辑</h-button>
    <h-button icon="share" type="primary" round></h-button>
    <h-button icon="share" type="success">分享</h-button>
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
