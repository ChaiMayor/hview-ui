<script setup>
  import basic from 'exam/dialog/basic.vue'
  import textCenter from 'exam/dialog/text-center.vue'
  import alignCenter from 'exam/dialog/align-center.vue'
  import draggable from 'exam/dialog/draggable.vue'
  import customHeader from 'exam/dialog/custom-header.vue'
  import customContent from 'exam/dialog/custom-content.vue'
</script>

# Dialog

Informs users while preserving the current page state.

## Basic usage

::: code dialog/basic
<basic></basic>
:::

## Customized Content

The content of Dialog can be anything, even a table or a form. This example shows how to use Hview Plus Tree component.

::: code dialog/custom-content
<customContent ></customContent >
:::

## Customized Header

The `header` slot can be used to customize the area where the title is displayed. In order to maintain accessibility, use the `title` attribute in addition to using this slot，And you can set showClose value to false to hidden the close Icon.

::: code dialog/custom-header
<customHeader></customHeader>
:::

## Centered content

Dialog's content can be centered.

Setting `center` to `true` will center dialog's header and footer horizontally. `center` only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.

::: code dialog/text-center
<textCenter></textCenter>
:::

## Align Center dialog

Open dialog from the center of the screen.

Setting `align-center` to `true` will center the dialog both horizontally and vertically. The prop `top` will not work at the same time because the dialog is vertically centered in a flexbox.

::: code dialog/align-center
<alignCenter></alignCenter>
:::

## Draggable Dialog

Set draggable value to true.Then you can drag the dialog.

::: code dialog/draggable
<draggable ></draggable>
:::

## API

### Attributes

| Name                 | Description                                                                     | Type              | Accepted Values | Default |
| -------------------- | ------------------------------------------------------------------------------- | ----------------- | --------------- | ------- |
| modelValue / v-model | display Dialog                                                                  | `boolean`         | true / false    | false   |
| title                | title of Dialog. Can also be passed with a named slot (see the following table) | `string`          | —               | title   |
| width                | width of Dialog                                                                 | `string / number` | —               | 30%     |
| align                | whether to align the header and footer in center                                | string            | `center`        | —       |
| alignCenter          | whether to align the dialog both horizontally and vertically                    | `boolean`         | true / false    | false   |
| top                  | value for `top` of Dialog CSS                                                   | `string`          | —               | 25%     |
| showClose            | whether to show a close button                                                  | `boolean`         | `true/false`    | true    |
| scrollLock           | whether scroll of body is disabled while Dialog is displayed                    | `boolean`         | `true / false`  | true    |
| customClass          | custom Dialog class name                                                        | `string`          | —               | —       |
| closeOnModal         | whether the Dialog can be closed by clicking the mask                           | `boolean`         | `true / false`  | true    |
| draggable            | whether the Dialog can drag                                                     | `boolean`         | `true/false`    | false   |

### Slots

| Name    | Description                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------- |
| header  | content of the Dialog header. Replacing this removes the title, but does not remove the close button. |
| content | main content of the Dialog                                                                            |
| footer  | content of the Dialog footer                                                                          |

### Events

| Name  | Description                     | Callback  |
| ----- | ------------------------------- | --------- |
| open  | triggers when the Dialog opens  | `() =>{}` |
| close | triggers when the Dialog closes | `() =>{}` |
