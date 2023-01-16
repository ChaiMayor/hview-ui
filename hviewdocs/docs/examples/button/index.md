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
  margin: 5px;
}
details {
  text-align: right;
}
details > summary:first-of-type {
  font-size: 10px;
  padding: 8px 0;
  cursor: pointer;
  color: #1989fa;
}
</style>

# h-button 按钮

> 常用的操作按钮。

## 基础用法

> 按钮可以根据 `type` 来设置不同的颜色，提供了 6 种类型的按钮 `primary` `success` `info` `danger` `warning` `text`

> 设置 `plain` 属性可以设置镂空按钮,设置 `round` 属性可以设置圆角按钮


<div class="example">
  <div>
    <h-button>默认按钮</h-button>
    <h-button type="primary">Primary</h-button>
    <h-button type="success">Success</h-button>
    <h-button type="info">Info</h-button>
    <h-button type="warning">Warning</h-button>
    <h-button type="danger">Danger</h-button>
    <h-button type="text">Text</h-button>
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

<details>
<summary>显示代码</summary>

```vue
<template>
  <div>
    <h-button>Default</h-button>
    <h-button type="primary">Primary</h-button>
    <h-button type="success">Success</h-button>
    <h-button type="info">Info</h-button>
    <h-button type="warning">Warning</h-button>
    <h-button type="danger">Danger</h-button>
    <h-button type="text">Text</h-button>

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

</details>

## 禁用状态
> 设置 `disabled` 属性达到按钮不可点击状态

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


<details>
<summary>显示代码</summary>

```vue
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

</details>

## 调整尺寸
> 按钮根据`size`来变换尺寸，提供了 `medium` `small` `mini`三种
<div class="example">
  <div>
    <h-button>Default</h-button>
    <h-button size="medium">Medium</h-button>
    <h-button size="small">Small</h-button>
    <h-button size="mini">mini</h-button>
  </div>
</div>

<details>
<summary>显示代码</summary>

```vue
<template>
  <div>
    <h-button>Default</h-button>
    <h-button size="medium">Medium</h-button>
    <h-button size="small">Small</h-button>
    <h-button size="mini">mini</h-button>
  </div>
</template>
```

</details>
