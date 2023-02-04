<script setup>
import basic from 'exam/icon/basic.vue'
import changeColor from 'exam/icon/change-color.vue'
import badge from 'exam/icon/badge.vue'
import iconList from 'exam/icon/icon-list.vue'
</script>

<style scoped>
.icon-example {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 30px;
}
</style>

# Icon

Hview UI provides a set of commonly used icons.

## Basic use

Icons dynamically display different icons according to different name values

::: code icon/basic
<basic></basic>
:::

## Change icon color

`h-icon` dynamically displays the icon of the corresponding color according to the incoming `color` value

::: code icon/change-color
<changeColor></changeColor>
:::

## Add icon logo

The `h-icon` is passed in dot, the red dot of the logo is displayed on the upper right corner of the icon, and the value of badge is used to display the details of the logo

::: code icon/badge
<badge></badge>
:::

## Icon collection

<iconList></iconList>

## API

### Attributes

| parameter | illustrate                         | Type            | optional | default |
| --------- | ---------------------------------- | --------------- | -------- | ------- |
| name      | icon name                          | `string`        | —        | —       |
| color     | icon color                         | `string`        | —        | —       |
| dot       | Whether the icon displays the logo | `boolean`       | —        | false   |
| badge     | badge value                        | `string/number` | —        | —       |
