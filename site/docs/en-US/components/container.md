<script setup>
  import basic1 from 'exam/container/basic1.vue'
  import basic2 from 'exam/container/basic2.vue'
  import basic3 from 'exam/container/basic3.vue'
  import basic4 from 'exam/container/basic4.vue'
  import basic5 from 'exam/container/basic5.vue'
  import basic6 from 'exam/container/basic6.vue'
  import basic7 from 'exam/container/basic7.vue'
</script>

# Container

Container components for scaffolding basic structure of the page:

`<h-container>`：wrapper container. When nested with a `<h-header>` or `<h-footer>` , all its child elements will be vertically arranged. Otherwise horizontally.

`<h-header>`：container for headers.

`<h-aside>`：container for side sections (usually a side nav).

`<h-main>`：container for main sections.

`<h-footer>`：container for footers.

::: tip
These components use flex for layout, so please make sure your browser supports it.
:::

## Common layouts

::: code container/basic1
<basic1></basic1>
:::
::: code container/basic2
<basic2></basic2>
:::
::: code container/basic3
<basic3></basic3>
:::
::: code container/basic4
<basic4></basic4>
:::
::: code container/basic5
<basic5></basic5>
:::
::: code container/basic6
<basic6></basic6>
:::
::: code container/basic7
<basic7></basic7>
:::

## Container API

### Container Attributes

| Name      | Description                         | Type   | Default                                                                 |
| --------- | ----------------------------------- | ------ | ----------------------------------------------------------------------- |
| direction | layout direction for child elements | `enum` | vertical when nested with `h-header` or `h-footer` horizontal otherwise |

### Container Slots

| Name    | Description               | Subtags                                    |
| ------- | ------------------------- | ------------------------------------------ |
| default | customize default content | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| Name   | Description          | Type     | Default |
| ------ | -------------------- | -------- | ------- |
| height | height of the header | `string` | 60px    |

### Header Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Aside API

### Aside Attributes

| Name  | Description               | Type     | Default |
| ----- | ------------------------- | -------- | ------- |
| width | width of the side section | `string` | 300px   |

### Aside Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Main API

### Main Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Footer API

### Footer Attributes

| Name   | Description          | Type     | Default |
| ------ | -------------------- | -------- | ------- |
| height | height of the footer | `string` | 60px    |

### Footer Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
