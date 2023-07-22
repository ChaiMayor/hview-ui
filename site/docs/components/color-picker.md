<script setup>
import basic from 'exam/color-picker/basic.vue'
import RGBA from 'exam/color-picker/rgba.vue'
</script>
<style>
.opacity-canvas {
  width: 200px;
  height: 20px;
  margin-left: 8px;
  margin-top: 10px;
}
.show {
  margin-left: 10px;
  margin-top: 8px !important;
}

.picker-input {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
</style>

# ColorPicker 取色器

用于颜色选择，支持多种格式。

## 基础用法

点击成功后复制颜色值

::: code color-picker/basic
<basic></basic>
:::

## 获取透明度

::: code color-picker/rgba
<RGBA></RGBA>
:::

## API

### 属性

| 参数 | 说明       | 类型      | 可选值 | 默认值 |
| ---- | ---------- | --------- | ------ | ------ |
| RGB  | 切换透明度 | `boolean` | —      | false  |
