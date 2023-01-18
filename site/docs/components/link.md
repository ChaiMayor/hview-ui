# Link 文字链接

## 基础用法

<div class="example">
    <div>
        <h-link type="primary"  class="primary">主要链接</h-link>
    </div>

</div>

::: details 显示代码

```html
<template>
  <div>
    <h-link type="primary">主要链接</h-link>
  </div>
</template>
```

:::

## 禁用状态

<div class="example">
    <div>
        <h-link type="primary" disabled>主要链接</h-link>
    </div>

</div>

::: details 显示代码

```html
<template>
  <div>
    <h-link type="primary" disabled>主要链接</h-link>
  </div>
</template>
```

:::

## 下划线

<div class="example">
    <div>
        <h-link type="primary"  class="primary" underline>有下划线</h-link>
        <h-link type="primary"  class="primary" >无下划线</h-link>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-link type="primary" disabled>主要链接</h-link>
  </div>
</template>
```

:::

<style>
   .example a {
        margin-right:10px;
    }
   .primary{
        color:#5d80f4 !important
   }
   
</style>
