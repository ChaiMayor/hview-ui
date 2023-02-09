<script setup>
  import basic from 'exam/empty/basic.vue'
  import myPicture from 'exam/empty/my-picture.vue'
  import size from 'exam/empty/size.vue'
  import bottom from 'exam/empty/bottom.vue'
</script>

# Empty 空状态

空状态时展示的占位图。

## 基本使用

::: code empty/basic
<basic></basic>
:::

## 自定义图片

通过 `image` 属性传入图片的 URL。

::: code empty/my-picture
<myPicture></myPicture>
:::

## 图片尺寸

通过 `image-size` 属性控制图片大小。

::: code empty/size
<size></size>
:::

## 底部内容

使用默认插槽在底部插入自定义内容。

::: code empty/bottom
<bottom></bottom>
:::

## API

### 属性

| 属性名      | 说明     | 类型     | 可选值 | 默认值 |
| ----------- | -------- | -------- | ------ | ------ |
| image       | 图片地址 | `string` | —      | —      |
| image-size  | 图片大小 | `number` | —      | —      |
| description | 描述内容 | `string` | —      | —      |

### 插槽

| 插槽名      | 说明           |
| ----------- | -------------- |
| default     | 自定义底部内容 |
| image       | 自定义图片     |
| description | 自定义描述     |
