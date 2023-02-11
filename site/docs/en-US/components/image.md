<script setup>
import basic from 'exam/image/basic.vue'
import loadError from 'exam/image/load-error.vue'
import lazyImgs from 'exam/image/lazy-imgs.vue'
import imgPreview from'exam/image/img-preview.vue'
</script>

# Image

Besides the native features of img, support lazy load, custom placeholder and load failure, etc.

## Basic Usage

Indicate how the image should be resized to fit its container by fit, same as native object-fit.
::: code image/basic
<basic></basic>
:::

## Loading failed

Custom failed content when error occurs to image load by slot = error
::: code image/load-error
<loadError></loadError>
:::

## Lazy load

可通过 lazy 开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 scroll-container 来设置滚动容器， 若未定义，默认为 window
::: code image/lazy-imgs
<lazyImgs></lazyImgs>
:::

##Image preview
Use lazy load by lazy = true. Image will load until scroll into view when set. You can indicate scroll container that adds scroll listener to by scroll-container. If undefined, default value is window.
::: code image/img-preview
<imgPreview></imgPreview>
:::

## API

### Image Attributes

| Name            | Description                                                                                                                                       | Type       | Default      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------ | ------- | ------ | ------------- | --- |
| src             | image source, same as native.                                                                                                                     | `string`   | —            |
| fit             | indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit). | `'fill'    | 'contain'    | 'cover' | 'none' | 'scale-down'` | —   |
| lazy            | whether to use lazy load.                                                                                                                         | `boolean`  | `false`      |
| scrollContainer | the container to add scroll listener when using lazy load.                                                                                        | `string    | HTMLElement` | window  |
| alt             | native attribute `alt`.                                                                                                                           | `string`   | —            |
| previewSrcList  | allow big image preview.                                                                                                                          | `string[]` | —            |
| zIndex          | set image preview z-index.                                                                                                                        | `number`   | —            |
| initialIndex    | initial preview image index, less than the length of `url-list`.                                                                                  | `number`   | 0            |

### Image Events

| name     | Description                           | Type                 |
| -------- | ------------------------------------- | -------------------- |
| `load`   | same as native load.                  | `(e: Event) => void` |
| `error`  | same as native error.                 | `(e: Error) => void` |
| `switch` | trigger when switching images.        | `() => void`         |
| `close`  | trigger when clicking on close button | `() => void`         |

### Image Slots

| 插槽名        | 说明                                                     |     |     |     |
| ------------- | -------------------------------------------------------- | --- | --- | --- |
| `placeholder` | custom placeholder content when image hasn't loaded yet. |     |     |     |
| `error`       | custom image load failed content.                        |     |     |     |

### Image-viewer Attributes

| Name                  | Description                                                                      | Type       | Default |
| --------------------- | -------------------------------------------------------------------------------- | ---------- | ------- | --- |
| visable               | preview images                                                                   | `boolean`  | -       |
| `url-list`            | preview link list.                                                               | `string[]` | `[]`    |
| `z-index`             | preview backdrop z-index.                                                        | `number    | string` | —   |
| `initial-index`       | the initial preview image index, less than or equal to the length of `url-list`. | `number`   | `0`     |
| `infinite`            | whether preview is infinite.                                                     | `boolean`  | `true`  |
| `hide-on-click-modal` | whether user can emit close event when clicking backdrop.                        | `boolean`  | `false` |
| `zoom-rate`           | the zoom rate of the image viewer zoom event                                     | `number`   | `1.2`   |

### Image -viewer Events

| name         | Description                           | Type         |
| ------------ | ------------------------------------- | ------------ |
| closePreview | trigger when clicking on close button | `() => void` |
| `switch`     | trigger when switching images.        | （）=> void  |
