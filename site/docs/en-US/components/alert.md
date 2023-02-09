<script setup>
  import basic from 'exam/alert/basic.vue'
  import theme from 'exam/alert/theme.vue'
  import customizClose from 'exam/alert/customiz-close.vue'
  import withIcon from 'exam/alert/with-icon.vue'
  import centerText from 'exam/alert/center-text.vue'
  import withDescription from 'exam/alert/with-description.vue'
  import iconAndDescription from 'exam/alert/icon-and-description.vue'
</script>
# Alert

Displays important alert messages.

## Basic Usage

Alert components are non-overlay elements in the page that does not disappear automatically.

Alert provides 4 types of themes defined by `type`, whose default value is `info`.

::: code alert/basic
<basic></basic>
:::

## Theme

Alert provide two different themes, `light` and `dark`.

Set `effect` to change theme, default is `light`.

::: code alert/theme
<theme></theme>
:::

## Customizable Close Button

Customize the close button as texts or other symbols.

Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. `closable` attribute decides if the component can be closed or not. It accepts `Boolean`, and the default is `false` You can set `close-text` attribute to replace the default cross symbol as the close button. Be careful that `close-text` must be a string. `close` event fires when the component is closed.

::: code alert/customiz-close
<customiz-close></customiz-close>
:::

## With Icon

Displaying an icon improves readability.

Setting the `show-icon` attribute displays an icon that corresponds with the current Alert type.

::: code alert/with-icon
<with-icon></with-icon>
:::

## Centered Text

Use the `center` attribute to center the text.

::: code alert/center-text
<center-text></center-text>
:::

## With Description

Description includes a message with more detailed information.

Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.

::: code alert/with-description
<with-description></with-description>
:::

## With Icon and Description

At last, this is an example with both icon and description.

::: code alert/icon-and-description
<icon-and-description></icon-and-description>
:::

## API

### Attributes

| Name        | Description                              | Type      | Accepted Values                  | Default |
| :---------- | :--------------------------------------- | :-------- | -------------------------------- | :------ |
| title       | alert title.                             | `string`  | —                                | —       |
| type        | alert type.                              | `enum`    | success / warning / info / error | `info`  |
| description | descriptive text.                        | `string`  | —                                | —       |
| closable    | whether alert can be dismissed.          | `boolean` | —                                | `true`  |
| center      | whether content is placed in the center. | `boolean` | —                                | `false` |
| close-text  | customized close button text.            | `string`  | —                                | —       |
| show-icon   | whether a type icon is displayed.        | `boolean` | —                                | `false` |
| effect      | theme style.                             | `enum`    | light / dark                     | `light` |

### Events

| Name  | Description                   | Type       |                               |
| :---- | :---------------------------- | :--------- | ----------------------------- |
| close | trigger when alert is closed. | `Function` | `(event: MouseEvent) => void` |

### Slots

| Name    | Description                       |
| :------ | :-------------------------------- |
| default | content of the alert description. |
| title   | content of the alert title.       |
