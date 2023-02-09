<script setup>
  import basic from 'exam/breadcrumb/basic.vue'
  import iconSeparator from 'exam/breadcrumb/icon-separator.vue'
</script>

# Breadcrumb

Displays the location of the current page, making it easier to browser back.

## Basic usage

In `h-breadcrumb`, each `h-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.
::: code breadcrumb/basic
<basic></basic>
:::

## Icon separator

Set `separator-icon` to use svg icon as the separator，it will cover `separator`

::: code breadcrumb/icon-separator
<icon-separator></icon-separator>
:::

## Breadcrumb API

### Breadcrumb Attributes

| Name           | Description                      | Type     | Default |
| :------------- | :------------------------------- | :------- | :------ |
| separator      | separator character              | `string` | /       |
| separator-icon | icon component of icon separator | `string` | —       |

### Breadcrumb Slots

| Name    | Description               | Subtags         |
| :------ | :------------------------ | --------------- |
| default | customize default content | Breadcrumb Item |

## BreadcrumbItem API

### BreadcrumbItem Attributes

| Name    | Description                                               | Type                | Default |
| :------ | :-------------------------------------------------------- | :------------------ | :------ |
| to      | target route of the link, same as `vue-router` of `to`    | `string` / `object` | ''      |
| replace | if `true`, the navigation will not leave a history record | `boolean`           | false   |

### BreadcrumbItem Slots

| Name    | Description               |
| :------ | :------------------------ |
| default | customize default content |
