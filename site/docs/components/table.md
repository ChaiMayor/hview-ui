<script setup>
import basic from 'exam/table/basic.vue'
import checkbox from 'exam/table/checkbox.vue'
import sort from 'exam/table/sort.vue'
import rowClass from 'exam/table/rowclass.vue'
import border from 'exam/table/border.vue'
import virtual from 'exam/table/virtual.vue'
</script>

# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定操作。

## 基本用法

基础的表格展示用法。
::: code table/basic
<basic></basic>
:::

## 带边框

默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 border 属性，把该属性设置为 true 即可启用。
::: code table/border
<border></border>
:::

## 复选框

开启复选框
::: code table/checkbox
<checkbox></checkbox>
:::

## 带状态

可以通过指定 Table 组件的 tableRowClassName 属性来为 Table 中的某一行添加 class， 这样就可以自定义每一行的样式了。
::: code table/rowClass
<rowClass></rowClass>
:::

## 排序表格

对表格进行排序，可快速查找或对比数据。
::: code table/sort
<sort></sort>
:::

## 虚拟化表格

在前端开发领域，表格一直都是一个高频出现的组件，尤其是在中后台和数据分析场景。 但是，对于 Table 来说，当一屏里超过 1000 条数据记录时，就会出现卡顿等性能问题，体验不是很好。

通过虚拟化表格组件，超大数据渲染将不再是一个头疼的问题,再巨大的数据也不在话下

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
