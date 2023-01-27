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
  p.h-scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 0 10px;
    margin-bottom:10px;
    text-align: center;
    border-radius: 4px;
    background: #ecf5ff;
    color: #409eff;
  }
  p.h-scrollbar-demo-item:last-of-type{
    margin-bottom:0;
  }
  .scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px 0;
  margin-right:10px;
  text-align: center;
  border-radius: 4px;
  background: #fef0f0;
  color: #f56c6c;
}
.scrollbar-demo-item:last-of-type{
  margin-right:0;
}
</style>

# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

<div class="example_scrollbar">
  <div style="margin-bottom:20px;display:block;">
    <h-scrollbar height="400px">
      <p v-for="item in 20" :key="item" class="h-scrollbar-demo-item">{{ item }}</p>
    </h-scrollbar>
  </div>
</div>

::: details 显示代码

```html
<template>
  <h-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="h-scrollbar-demo-item">{{ item }}</p>
  </h-scrollbar>
</template>

<style scoped>
  p.h-scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 0 10px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 4px;
    background: #ecf5ff;
    color: #409eff;
  }
  p.h-scrollbar-demo-item:last-of-type {
    margin-bottom: 0;
  }
</style>
```

:::

## 横向滚动

显示横向滚动条不可设置 `height` 和 `max-height`，当元素宽度大于滚动条宽度时，会显示横向滚动条。

<div class="example_scrollbar">
  <h-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </h-scrollbar>
</div>

::: details 显示代码

```html
<template>
  <h-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item"> {{ item }} </p>
    </div>
  </h-scrollbar>
</template>

<style scoped>
  .scrollbar-flex-content {
    display: flex;
  }
  .scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px 0;
    margin-right: 10px;
    text-align: center;
    border-radius: 4px;
    background: #fef0f0;
    color: #f56c6c;
  }
  .scrollbar-demo-item:last-of-type {
    margin-right: 0;
  }
</style>
```

:::

## 最大高度

当元素高度超过最大高度，才会显示滚动条。

<div class="example_scrollbar example_scrollbar2">
  <div style="display: flex; margin-bottom: 12px">
    <h-button @click="add" style="margin-right: 12px">Add Item</h-button>
    <h-button @click="onDelete">Delete Item</h-button>
  </div>
  <h-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </h-scrollbar>
</div>

<script setup>
import { ref } from "vue";
const count = ref(3);

const add = () => {
  count.value++;
};
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style lang="less" scoped>
  .example_scrollbar2{
    .scrollbar-demo-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 0 10px;
      width:100%;
      margin-bottom: 10px;
      text-align: center;
      border-radius: 4px;
      background: #ecf5ff;
      color: #409eff;
    }
    .scrollbar-demo-item:last-of-type {
      margin-bottom: 0;
    }
  }
</style>

::: details 显示代码

```html
<template>
  <div style="display: flex; margin-bottom: 12px">
    <h-button @click="add" style="margin-right: 12px">Add Item</h-button>
    <h-button @click="onDelete">Delete Item</h-button>
  </div>
  <h-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item"> {{ item }} </p>
  </h-scrollbar>
</template>

<script setup>
  import { ref } from "vue";
  const count = ref(3);

  const add = () => {
    count.value++;
  };
  const onDelete = () => {
    if (count.value > 0) {
      count.value--;
    }
  };
</script>

<style scoped>
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 0 10px;
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 4px;
    background: #ecf5ff;
    color: #409eff;
  }
  .scrollbar-demo-item:last-of-type {
    margin-bottom: 0;
  }
</style>
```

:::

## Attributes

| 参数       | 说明                                                                 | 类型                | 默认  |
| ---------- | -------------------------------------------------------------------- | ------------------- | ----- |
| height     | 滚动条高度                                                           | `string` / `number` | —     |
| max-height | 滚动条最大高度                                                       | `string` / `number` | —     |
| native     | 是否使用原生滚动条样式                                               | `boolean`           | false |
| wrap-style | 包裹容器的自定义样式                                                 | `Object`            | —     |
| wrap-class | 包裹容器的自定义类名                                                 | `string`            | —     |
| view-style | 视图的自定义样式                                                     | `Object`            | —     |
| view-class | 视图的自定义类名                                                     | `string`            | —     |
| noresize   | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 | `boolean`           | false |
| tag        | 视图的元素标签                                                       | `string`            | div   |
| always     | 滚动条总是显示                                                       | `boolean`           | false |
| min-size   | 滚动条最小尺寸                                                       | `number`            | 20    |

## Events

| 参数   | 说明                             | 类型       |
| ------ | -------------------------------- | ---------- |
| scroll | 当触发滚动事件时，返回滚动的距离 | `function` |

## Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Exposes

| 参数          | 说明                   | 类型       |
| ------------- | ---------------------- | ---------- |
| setScrollTop  | 设置滚动条到顶部的距离 | `function` |
| setScrollLeft | 设置滚动条到左边的距离 | `function` |
| wrapRef       | 滚动条包裹的 ref 对象  | `object`   |
