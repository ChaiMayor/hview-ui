<script setup>
import basic from 'exam/image/basic.vue'
import loadError from 'exam/image/load-error.vue'
import lazyImgs from 'exam/image/lazy-imgs.vue'
import imgPreview from'exam/image/img-preview.vue'
</script>

# Image 图片

图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等

## 基本使用

可通过 fit 确定图片如何适应到容器框，同原生 object-fit。

::: code image/basic
<basic></basic>
:::

## 加载失败

可通过 slot = error 可自定义加载失败内容
::: code image/load-error
<loadError></loadError>
:::

## 懒加载

可通过 lazy 开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 scroll-container 来设置滚动容器， 若未定义，默认为 window
::: code image/lazy-imgs
<lazyImgs></lazyImgs>
:::

## 图片预览

可通过 previewSrcList 开启预览大图的功能。 你可以通过 initial-index 初始化第一张预览图片.。 默认初始位置为 0。
::: code image/img-preview
<imgPreview></imgPreview>
:::

## API

### Image 属性

| 属性名          | 说明                                                                                                     | 类型       | 默认值       |
| --------------- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------ | ------- | ------ | ------------- | --- |
| src             | 图片源地址，同原生属性一致                                                                               | `string`   | —            |
| fit             | 确定图片如何适应容器框，同原生[object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit). | `'fill'    | 'contain'    | 'cover' | 'none' | 'scale-down'` | —   |
| lazy            | 是否使用懒加载                                                                                           | `boolean`  | `false`      |
| scrollContainer | 开启懒加载功能后，监听 scroll 事件的容器                                                                 | `string    | HTMLElement` | window  |
| alt             | 原生属性 `alt`                                                                                           | `string`   | —            |
| previewSrcList  | 开启图片预览功能                                                                                         | `string[]` | —            |
| zIndex          | 设置图片预览的 z-index                                                                                   | `number`   | 0            |
| initialIndex    | 初始预览图像索引，小于 `url-list` 的长度                                                                 | `number`   | 0            |

### Image 事件

| 事件名   | 说明                | 类型                      |
| -------- | ------------------- | ------------------------- |
| `load`   | 图片加载成功触发    | `(e: Event) => void`      |
| `error`  | 图片加载失败触发    | `(e: Error) => void`      |
| `switch` | 切换图像时触发。    | `(index: number) => void` |
| `close`  | 当点击 X 按钮时触发 | `() => void`              |

### Image 插槽

| 插槽名        | 说明                                 |
| ------------- | ------------------------------------ |
| `placeholder` | 当图像尚未加载时，自定义的占位符内容 |
| `error`       | 自定义图像加载失败的内容             |

### ImageViewer 属性

| 属性名       | 说明                                    | 类型       | 默认值  |
| ------------ | --------------------------------------- | ---------- | ------- | --- |
| visable      | 是否预览图片                            | `boolean`  | —       |
| urlList      | 用于预览的图片链接列表                  | `string[]` | [ ]     |
| zIndex       | 预览时遮罩层的 z-index                  | `number    | string` | —   |
| initialIndex | 初始预览图像索引，小于 `urlList` 的长度 | `number`   | `0`     |
| infinite     | 是否可以无限循环预览                    | `boolean`  | true    |
| zoomRate     | 缩放事件的缩放速度                      | `number`   | 1.2     |

### ImageViewer 事件

| 事件名       | 说明             | 类型         |
| ------------ | ---------------- | ------------ |
| closePreview | 关闭预览页面触发 | `() => void` |
| `switch`     | 切换图像时触发。 | `() => void` |
