# 本地开发

## 启动项目

使用命令

```bash
pnpm i
```

为该项目将安装所有依赖

## 网站预览

使用命令

```bash
pnpm docs:dev
```

该项目将启动网站，网站内你可以预览全部现有组件

## 本地开发

1. 使用命令

```bash
pnpm dev
```

将启动本地开发环境

2. 将你的组件添加到 examples/src/App.vue
   > App.vue

```vue
<template>
  <div class="preImg">
    <h-image
      :previewSrcList="urls"
      style="width: 100px; height: 100px"
      :zoomRate="1.2"
      :initial-index="4"
      fit="cover"></h-image>
  </div>
</template>

<script lang="ts" setup>
const urls = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];
</script>
```

根据需要修改 `App.vue` 文件让开发过程顺利进行
