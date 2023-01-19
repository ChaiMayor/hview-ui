# 抖动

用于提醒用户某个信息没有填写

## 使用方法

<div class="example">
<demoVue />
</div>

::: details 显示代码

```html
<template>
  <div class="shake">
    <h-shake v-model="isshake" @click="isshake = true">点击抖动</h-shake>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const isshake = ref(false);
</script>
```

:::

<script setup lang="ts">
  import demoVue from './demo/shake.vue'
</script>
