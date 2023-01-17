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

## 可清空

<ClientOnly>
<div class="example">
<demoVue1 />
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

## 密码框

<ClientOnly>
<div class="example">
<demoVue2 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input v-model="input" show-password placeholder="请输入内容"></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 带 Icon 的输入框

可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标

<ClientOnly>
<div class="example">
<h-input v-model="input" style="width:202px" prefix-icon="edit" placeholder="请输入内容"></h-input>
<br />
<br />
<h-input v-model="input" style="width:202px" suffix-icon="error" placeholder="请输入内容"></h-input>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input
    v-model="input"
    prefix-icon="edit"
    placeholder="请输入内容"
  ></h-input>
  <h-input
    v-model="input"
    suffix-icon="error"
    placeholder="请输入内容"
  ></h-input>
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
<demoVue3 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input v-model="input" type="textarea" placeholder="请输入内容"></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 可自适应文本高度的文本域

通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。

<ClientOnly>
<div class="example">
<demoVue4 />
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input
    v-model="input"
    autosize
    type="textarea"
    placeholder="请输入内容"
  ></h-input>
  <h-input
    v-model="input"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="请输入内容"
  ></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 复合型输入框

<ClientOnly>
<div class="example">
  <h-input placeholder="请输入内容" v-model="input">
   <template v-slot:prepend>
            http://
    </template>
  </h-input>
  <br />
  <br />
  <h-input placeholder="请输入内容" v-model="input">
   <template #append>
           .com
    </template>
  </h-input>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input placeholder="请输入内容" v-model="input">
    <template #prepend> http:// </template>
  </h-input>
  <h-input placeholder="请输入内容" v-model="input">
    <template #append> .com </template>
  </h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

## 尺寸

用于输入多行文本信息，通过将 type 属性的值指定为 textarea。

<ClientOnly>
<div class="example">
<h-input placeholder="请输入内容" size="medium" v-model="input"></h-input>
<br />
<br />
<h-input placeholder="请输入内容" size="medium" v-model="input"></h-input>
<br />
<br />
<h-input placeholder="请输入内容" size="small" v-model="input"></h-input>
<br />
<br />
<h-input placeholder="请输入内容" size="mini" v-model="input"></h-input>
</div>
</ClientOnly>

::: details 显示代码

```html
<template>
  <h-input placeholder="请输入内容" size="medium" v-model="input"></h-input>
  <h-input placeholder="请输入内容" size="medium" v-model="input"></h-input>
  <h-input placeholder="请输入内容" size="small" v-model="input"></h-input>
  <h-input placeholder="请输入内容" size="mini" v-model="input"></h-input>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  const input = ref("");
</script>
```

:::

<script setup lang="ts">
  import demoVue1 from './demo/inputdemo1.vue'
  import demoVue2 from './demo/inputdemo2.vue'
  import demoVue3 from './demo/inputdemo3.vue'
  import demoVue4 from './demo/inputdemo4.vue'
</script>
