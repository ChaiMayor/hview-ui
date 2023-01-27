# Radio 单选框

在一组备选项中进行单选

## 基础用法

使用 radio 组件，只需要传入每个选项的选项值即可

<div class="example">
    <div>
        <h-radio :options="options"></h-radio>
    </div>
</div>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      lable: "张三",
      id: 1,
    },
    {
      lable: "李四",
      id: 2,
    },
    {
      lable: "王五",
      id: 3,
      disabled: true,
    }
  ],
});

const { options } = state;

</script>

::: details 显示代码

```vue
<template>
  <div>
    <h-radio :options="options"></h-radio>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      lable: "张三",
      id: 1,
    },
    {
      lable: "李四",
      id: 2,
    },
    {
      lable: "王五",
      id: 3,
    },
  ],
});
</script>
```

:::

## 禁用状态

disabled 属性可以用来控制单选框的禁用状态，只需要为单选框设置 disabled 属性值为 true 就能设置为禁用状态。

<div class="example">
    <div>
        <h-radio :options="options"></h-radio>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <h-radio :options="options"></h-radio>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      lable: "张三",
      id: 1,
    },
    {
      lable: "李四",
      id: 2,
    },
    {
      lable: "王五",
      id: 3,
      disabled: true,
    },
  ],
});
</script>
```

:::

## 垂直排列

设置 inline 属性值为 false 即可开启垂直排列

<div class="example">
    <div>
        <h-radio :options="options" :inline="false"></h-radio>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <h-radio :options="options" :inline="false"></h-radio>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      lable: "张三",
      id: 1,
    },
    {
      lable: "李四",
      id: 2,
    },
    {
      lable: "王五",
      id: 3,
      disabled: true,
    },
  ],
});
</script>
```

:::

## 自定义颜色

更改 customColor 属性即可自定义颜色

<div class="example">
    <div>
        <h-radio :options="options" customColor="red"></h-radio>
    </div>
</div>

::: details 显示代码

```vue
<h-radio :options="options" customColor="red"></h-radio>
```

:::

## Attributes

| 属性名      | 说明           | 类型                            | 默认值 |
| ----------- | -------------- | ------------------------------- | ------ |
| label       | 单选框对应的值 | `string` / `number` / `boolean` | —      |
| disabled    | 是否禁用单选框 | `boolean`                       | false  |
| customColor | 单选框的颜色   | `string`                        | —      |
| inline      | 单选框的列方式 | `boolean`                       | true   |

## Events

| 事件名 | 说明     | 回调参数                |
| ------ | -------- | ----------------------- |
| change | 选中事件 | 选中的 Radio 的各参数值 |
