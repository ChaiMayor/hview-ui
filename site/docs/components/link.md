# Link 文字链接

## 基础用法

<div class="example">
  <div>
    <h-link type="primary" class="primary">primary</h-link>
    <h-link type="success" class="success">success</h-link>
    <h-link type="warning" class="warning">warning</h-link>
    <h-link type="danger" class="danger">danger</h-link>
    <h-link type="info" class="info">info</h-link>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-link type="primary">primary</h-link>
    <h-link type="success">success</h-link>
    <h-link type="warning">warning</h-link>
    <h-link type="danger">danger</h-link>
    <h-link type="info">info</h-link>
  </div>
</template>
```

:::

## 禁用状态

<div class="example">
  <h-link type="primary" class="primary-distbled" disabled>primary</h-link>     
  <h-link type="success" class="success-distbled"  disabled>success</h-link>     
  <h-link type="warning" class="warning-distbled" disabled>warning</h-link>     
  <h-link type="danger" class="danger-distbled"  disabled>danger</h-link>     
  <h-link type="info" class="info-distbled"  disabled>info</h-link>     
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-link type="primary" disabled>primary</h-link>
    <h-link type="success" disabled>success</h-link>
    <h-link type="warning" disabled>warning</h-link>
    <h-link type="danger" disabled>danger</h-link>
    <h-link type="info" disabled>info</h-link>
  </div>
</template>
```

:::

## 下划线

<div class="example">
  <div>  
    <h-link type="primary" class="primary " underline>primary</h-link>     
    <h-link type="success" class="sucesss" underline>success</h-link>     
    <h-link type="warning" class="warning"  underline>warning</h-link>     
    <h-link type="danger" class="danger"  underline>danger</h-link>     
    <h-link type="info" class="info" underline>info</h-link>  
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-link type="primary" underline>primary</h-link>
    <h-link type="success" underline>success</h-link>
    <h-link type="warning" underline>warning</h-link>
    <h-link type="danger" underline>danger</h-link>
    <h-link type="info" underline>info</h-link>
  </div>
</template>
```

:::

<style>
.example a {
  margin-right:10px;
}

.primary {
  color: #409eff!important;
}

.success {
  color: #67c23a!important;
}

.info {
  color: #909399!important;
}

.danger {
  color: #f56c6c!important;
}
.warning {
  color: #e6a23c!important;
}

.primary-distbled:hover {
  color: #a0cfff!important;
}

.success-distbled:hover {
  color: #95d475!important;
}

.info-distbled:hover {
  color: #b1b3b8!important;
}

.danger-distbled:hover {
  color: #f89898!important;
}

.warning-distbled:hover {
  color: #eebe77!important;
}
</style>
