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

# ColorPicker

Used for color selection, supports multiple formats.

## Basic usage

Copy the color value after a successful click
::: code color-picker/basic
<basic></basic>
:::

## transparency

::: code color-picker/rgba
<RGBA></RGBA>
:::

## API

### Attributes

| parameter | illustrate          | type      | optional value | Defaults |
| --------- | ------------------- | --------- | -------------- | -------- |
| RGB       | toggle transparency | `boolean` | —              | false    |
