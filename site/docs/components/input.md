# Input 输入框

::: tip

Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用 v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰
:::

## 基础用法

<ClientOnly>
<div class="example">
  <div>
    <h-input v-model="input" placeholder="请输入内容"></h-input>
  </div>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input v-model="input" placeholder="请输入内容"></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<ClientOnly>
<div class="example">
    <div>
        <h-input v-model="input" disabled placeholder="请输入内容"></h-input>
    </div>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input v-model="input" disabled placeholder="请输入内容"></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 一键清空

使用`clearable`属性即可得到一个可一键清空的输入框

<ClientOnly>
<div class="example">
  <h-input placeholder="请输入内容" class="icon-right" type="text" clearable></h-input>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input placeholder="请输入内容" type="text" clearable></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 密码框

在 type 中使用`password`,即可变成密码框

<ClientOnly>
<div class="example">
  <h-input v-model="input" type="password" placeholder="请输入内容"></h-input>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input v-model="input" type="password" placeholder="请输入内容"></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 带 Icon 的输入框

可以通过 `iconAfter` 和 `iconBefore` 属性在 input 组件首部和尾部增加显示图标

<ClientOnly>
  <div class="example">
    <h-input v-model="value" placeholder="请输入" type="text" 
      iconBefore="user"></h-input>
    <br />
    <br />
    <h-input v-model="value" placeholder="请输入" type="text" 
      iconAfter="calendar"></h-input>
    </div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <div class="example">
    <h-input v-model="value" placeholder="请输入" type="text" 
      iconBefore="user"></h-input>
    <h-input v-model="value" placeholder="请输入" type="text" 
      iconAfter="calendar"></h-input>
    </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 文本域

用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
<ClientOnly>

  <div class="example">
    <h-input placeholder="请输入" type="textarea" rows="7" cols="40" :maxlength="40" />
  </div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input placeholder="请输入" type="textarea" rows="7" cols="40" :maxlength="40" />
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项：large, small。

<ClientOnly>
<div class="example">
  <h-input placeholder="请输入内容" type="text" size="large"></h-input>
  <br />
  <h-input placeholder="请输入内容" type="text"></h-input>
  <br />
  <h-input placeholder="请输入内容" type="text" size="small"></h-input>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input placeholder="请输入内容" type="text" size="large" v-model="input"></h-input>
  <h-input placeholder="请输入内容" type="text" v-model="input"></h-input>
  <h-input placeholder="请输入内容" type="text" size="small" v-model="input"></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

<style>
.h-icon-h, .h-after{
  right: 6px!important;
}
</style>
