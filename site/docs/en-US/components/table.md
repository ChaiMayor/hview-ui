<script setup>
import basic from 'exam/table/basic.vue'
import checkbox from 'exam/table/checkbox.vue'
import sort from 'exam/table/sort.vue'
import rowClass from 'exam/table/rowclass.vue'
import border from 'exam/table/border.vue'
import virtual from 'exam/table/virtual.vue'
</script>

# Table

It is used to display multiple pieces of data with similar structures, and can sort, filter, compare or perform other custom operations on the data.

## basic usage

Basic table display usage.
::: code table/basic
<basic></basic>
:::

## border

By default, the Table component does not have a vertical border. If necessary, you can use the border property and set this property to true to enable it.
::: code table/border
<border></border>
:::

## optional

Enable checkbox
::: code table/checkbox
<checkbox></checkbox>
:::

## row status

You can add a class to a row in the Table by specifying the tableRowClassName property of the Table component, so that you can customize the style of each row。
::: code table/rowClass
<rowClass></rowClass>
:::

## sort table

Sort the table to quickly find or compare data.
::: code table/sort
<sort></sort>
:::

## table v2

In the field of front-end development, tables have always been a high-frequency component, especially in middle-background and data analysis scenarios. However, for Table, when there are more than 1,000 data records in one screen, there will be performance problems such as freezing, and the experience is not very good.

By virtualizing table components, large data rendering will no longer be a headache, no matter how huge the data is

::: code table/virtual
<virtual></virtual>
:::

<style>
.h-table {
  width: 652px!important;
  height: 300px!important;
  font-size: 16px!important;
  border-spacing: 0!important;
  border-collapse: collapse!important;
}

.h-table ::-webkit-scrollbar {
  width: 6px!important;
}
.h-table ::-webkit-scrollbar-thumb {
  background-color: #dddee0!important;
  border-radius: 10px!important;
}
.h-table table {
  width: 100%!important;
}
.h-table .h-table--thead {
  width: 100%!important;
}
.h-table .h-table--body {
  position: relative!important;
  width: 100%!important;
  height: inherit!important;
  overflow-y: auto!important;
}
.h-table .h-table--body .h-infinite-list-phantom {
  position: absolute!important;
  top: 0!important;
  right: 0!important;
  left: 0!important;
  z-index: -1 !important;
}
.h-table td,
.h-table th {
  width: 100px!important;
  padding: 6px!important;
  color: #606266!important;
  text-align: center!important;
  border-bottom: 1px solid #ebeef5!important;
}
.h-table thead {
  position: sticky!important;
  top: 0!important;
  z-index: 1!important;
}
.h-table tr {
  height: 50px!important;
}
.h-table tr:hover {
  background-color: #f5f7fa!important;
}
.h-table .parent {
  position: relative!important;
  top: -8px !important;
  left: 3px!important;
  display: inline-flex !important;
  margin: -10px 0 !important;
}
.h-table .child {
  display: flex!important;
  flex-direction: column!important;
  justify-content: space-around !important;
}
.h-table .up {
  display: inline-block !important;
  width: 0!important;
  height: 0!important;
  margin-bottom: 4px!important;
  cursor: pointer!important;
  border: 6px solid transparent!important;
  border-bottom: 6px solid #409eff!important;
}
.h-table .down {
  display: inline-block !important;
  width: 0!important;
  height: 0!important;
  cursor: pointer!important;
  border: 6px solid transparent!important;
  border-top: 6px solid #a8abb2!important;
}
.h-table--border {
  border-right: 1px solid #ebeef5!important;
  border-left: 1px solid #ebeef5!important;
}
.h-table--zebra {
  background-color: #fdf6ec!important;
} 

.vp-doc table {
  display: table !important;
  margin: 0 !important;
  border-collapse: collapse;
}

.vp-doc th, .vp-doc td {
  border: none !important;
  padding: 8 !important;
}
.vp-doc th {
    /* text-align: left; */
    /* font-size: 14px; */
    /* font-weight: 600; */
    /* color: var(--vp-c-text-2); */
    /* background-color: var(--vp-c-bg-soft); */
}
.vp-doc th {
  text-align: left;
  font-size: 16px !important;
  font-weight: 900 !important;
  background-color: #FFFFFF !important;
}

.vp-doc tr:nth-child(2n) {
  background-color: transparent !important;
}
</style>
