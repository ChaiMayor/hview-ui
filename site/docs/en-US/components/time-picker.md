<script setup>
import basic from 'exam/time-picker/basic.vue'
import disabled from 'exam/time-picker/disabled.vue'
import format from 'exam/time-picker/format.vue'
import confirm from 'exam/time-picker/confirm.vue'
import timerange from 'exam/time-picker/timerange.vue'
</script>

# TimePicker

to select or enter a date

## Basic usage

Any time can be selected, by default it is selected with the mouse wheel

::: code time-picker/basic
<basic></basic>
:::

## Time format

Setting the attribute format can change the display format of time.

::: tip

Note that format only changes the displayed format, not the value.

:::

::: code time-picker/format
<format></format>
:::

## Disabled state

The disabled attribute can be set to achieve a disabled state

::: code time-picker/disabled
<disabled></disabled>
:::

## Time limit

Set type to timerange to enable time range selection

::: code time-picker/timerange
<timerange></timerange>
:::

## confirm button

Set the property confirm, the selector will have clear and OK buttons. The confirm button does not affect the normal selection of time.

::: code time-picker/confirm
<confirm></confirm>
:::

## API

### Attributes

| parameter   | illustrate                                                       | type           | optional value                      | Defaults   |
| ----------- | ---------------------------------------------------------------- | -------------- | ----------------------------------- | ---------- |
| v-model     | bind value                                                       | string / array | —                                   | —          |
| type        | Type, supports selecting a single time or selecting a time range | string         | time / timerange                    | —          |
| placeholder | placeholder for selection                                        | string         | —                                   | —          |
| readonly    | Completely read-only, no selector will pop up after opening      | boolean        | —                                   | false      |
| disabled    | disabled                                                         | boolean        | —                                   | false      |
| format      | time formatting                                                  | string         | Hour:`HH`,minute:`mm`，second：`ss` | 'HH:mm:ss' |
| clearable   | Whether to show the clear button                                 | boolean        | —                                   | true       |
| separator   | Separator when selecting a range                                 | string         | —                                   | '-'        |

### Events

| event name | illustrate                              | parameter      |
| ---------- | --------------------------------------- | -------------- |
| on-change  | Triggered when the time changes         | formatted time |
| on-confirm | Triggered when the OK button is clicked | formatted time |
| on-clear   | Triggered when the time is cleared      | —              |
