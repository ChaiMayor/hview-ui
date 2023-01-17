<style scoped>
.example {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding:20px;
}
.example div {
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2px;
}


.card{
  width: 400px;
}
</style>

# Card 卡片

> 将信息在卡片容器中展示。

## 基础用法

卡片包含标题，内容及操作区域。

Card 组件包括 `header`,`body`,`handle`。`header`与`handle` 是可选的。

<div class="example">
    <div >
        <h-card class="card">
          <template #header>
            <div class="card-header">
              <div>标题</div>
            </div>
          </template>
          <div v-for="i in 4">
            {{ '内容' + i}}
          </div>
          <template #handle>
            <div class="card-handle">
              <h-button>操作</h-button>
            </div>
          </template>
        </h-card>
    </div>
</div>

::: details 显示代码

```html
<template>
  <h-card class="card">
    <template #header>
      <div class="card-header">
        <div>标题</div>
      </div>
    </template>
    <div v-for="i in 4">{{ '内容' + i}}</div>
    <template #handle>
      <div class="card-handle">
        <h-button>操作</h-button>
      </div>
    </template>
  </h-card>
</template>

<style>
  .card {
    width: 400px;
  }
</style>
```

:::

## 简单卡片

只有内容区域。

<div class="example">
    <div >
        <h-card class="card">
          <div v-for="i in 4">
            {{ '内容' + i}}
          </div>
        </h-card>
    </div>
</div>

::: details 显示代码

```html
<template>
  <h-card class="card">
    <div v-for="i in 4">{{ '内容' + i}}</div>
  </h-card>
</template>

<style>
  .card {
    width: 400px;
  }
</style>
```

:::

## 包含图片的卡片

可以展示更多的内容
通过`body-style`自定义 body 的样式，可使内容更加多样

<div class="example">
    <div >
        <h-card class="card" :body-style="{ padding: '0px' }">
          <img src="https://t8.baidu.com/it/u=1876327120,31941088&fm=193"/>
        </h-card>
    </div>
</div>

::: details 显示代码

```html
<template>
  <h-card class="card" :body-style="{ padding: '0px' }">
    <img src="https://t8.baidu.com/it/u=1876327120,31941088&fm=193" />
  </h-card>
</template>

<style>
  .card {
    width: 400px;
  }
</style>
```

:::

## 带阴影的卡片

可以自定义卡片阴影的展示。
通过`shadow`属性设置卡片阴影，属性值为：`always`、`hover`、`never`。

<div class="example">
    <div >
        <h-card shadow="always">
          always
        </h-card>
        <h-card shadow="hover">
          hover
        </h-card>
        <h-card shadow="never">
          never
        </h-card>
    </div>
</div>

::: details 显示代码

```html
<template>
  <h-card shadow="always"> always </h-card>
  <h-card shadow="hover"> hover </h-card>
  <h-card shadow="never"> never </h-card>
</template>
```

:::

## API

### Attributes

| 属性名     | 说明                                                        | 类型     | 可选值                   | 默认值   |
| ---------- | ----------------------------------------------------------- | -------- | ------------------------ | -------- |
| header     | 卡片的标题，可以由`header`传入，也可以通过插槽`#header`传入 | `string` | -                        | —        |
| body-style | body 的 CSS 样式                                            | `object` | -                        | —        |
| shadow     | 设置阴影的显示                                              | `string` | `always`/`hover`/`never` | `always` |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义内容     |
| header  | 卡片的标题区域 |
| handle  | 卡片的操作区域 |
