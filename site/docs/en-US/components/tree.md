<script setup>
import basic from 'exam/tree/basic.vue'
import selectTree from 'exam/tree/select-tree.vue'
import settingTree from 'exam/tree/setting-tree.vue'
import disabled from 'exam/tree/disabled.vue'
import getDataTree from 'exam/tree/get-data-tree.vue'
import renderTree from 'exam/tree/render-tree.vue'
</script>

# Tree

Present information in a clear hierarchy that can be expanded or collapsed.

## Basic usage

Basic tree structure display.

::: code tree/basic
<basic></basic>
:::

## Optional tree

It is suitable for use when a level needs to be selected. Set the show-checkbox property to true. And you can customize the key name of the data structure, the default is label and children

::: code tree/select-tree
<selectTree></selectTree>
:::

## Expanded and selected by default

It supports default expansion and selection, but the node-key attribute must be set. Support to expand all options by default

::: code tree/setting-tree
<settingTree></settingTree>
:::

## Disabled state tree

Through the disabled attribute, some nodes of the Tree can be set to a disabled state.

::: code tree/disabled
<disabled></disabled>
:::

## Setting and getting tree nodes

::: code tree/get-data-tree
<getDataTree></getDataTree>
:::

## Custom node content

The content of the node supports customization, and you can add buttons or icons to the node area.

::: code tree/render-tree
<renderTree></renderTree>
:::

## API

### Attributes

| parameter             | illustrate                                                                                      | Type                              | optional value | default  |
| --------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------- | -------------- | -------- |
| data                  | display data                                                                                    | array                             | —              | —        |
| label                 | Define the key name of the child node name in the data data object                              | string                            | —              | label    |
| children              | Define the key name of the child node data in the data data object                              | string                            | —              | children |
| show-checkbox         | Whether the node can be selected                                                                | boolean                           | —              | false    |
| node-key              | Each tree node is used as a uniquely identified attribute, and the entire tree should be unique | string                            | —              | —        |
| default-expand-all    | Whether to expand all nodes by default                                                          | boolean                           | —              | false    |
| default-expanded-keys | default expansion                                                                               | array                             | —              | —        |
| default-checked-keys  | default selection                                                                               | array                             | —              | —        |
| disabled              | Whether to disable                                                                              | boolean                           | —              | false    |
| render-content        | The rendering function of the content area of the custom tree node                              | Function(h, { data, parentData }) | —              | —        |

<br/>

### Events

| event name     | illustrate                                        | Callback function parameters                   |
| -------------- | ------------------------------------------------- | ---------------------------------------------- |
| toggle-change  | Triggered when a child node is expanded/collapsed | current node                                   |
| checked-change | Triggered when a node is selected/unselected      | Array of all selected nodes, current node data |

<br/>

### Methods

| method name     | illustrate                                     | parameters |
| --------------- | ---------------------------------------------- | ---------- |
| setCheckedKeys  | Set the selected node by key                   | key array  |
| getCheckedKeys  | Returns an array of keys of all selected nodes | -          |
| getCheckedNodes | Returns an array of data of all selected nodes | -          |
