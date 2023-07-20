<template>
  <h-table
    :data="params"
    :columns="columns"
    :tag="true"
    :border="true"
    :zebra="true"
    :tableRowClassName="tableRowClassName"></h-table>
</template>
<script setup lang="ts">
import { ref } from "vue";
interface dataType {
  id: number;
  name: string;
  address: string;
}
// const virtualTable = reactive({
//   itemSize: 60,
//   tableHeight: 500,
//   isVirtual: true,
// });

const columns = [
  {
    title: "Data",
    dataIndex: "id",
    sorter: {
      Compare: (a: dataType, b: dataType) => a.id - b.id,
    },
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    tag: true,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const tableRowClassName = (rowIndex: number) => {
  if (rowIndex === 1) {
    return "h-table--zebra";
  }
  return "";
};

const tag1 = [
  { name: "Tag1", type: "" },
  { name: "Tag2", type: "success" },
];

const params = ref([]);

for (let i = 0; i < 10; i++) {
  params.value.push({
    id: i + Math.floor(Math.random() * 1000),
    name: "Tom",
    tags: tag1,
    address: "No. 189, Grove St, Los Angeles",
  });
}
</script>
<!-- <style>
/* 固定表头 */
thead {
  position: sticky;
}

/* 可滚动的容器 */
.scrollable-container {
  overflow-y: auto;
  width: 100%;
  max-height: 500px;
}
/* 设置每一行的高度 */
tr {
  height: 40px; /* 根据需要设置每一行的高度 */
}

/* 可根据需要设置表格的宽度 */
table {
  width: 100%;
}

.transparent-thead {
  width: 99%;
}

.container-table {
  width: 50%;
}
</style>

<template>
  <div class="container-table">
    <table class="transparent-thead">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
    </table>
    <div class="scrollable-container">
      <table>
        <tbody>
          <tr v-for="(item, i) in data" :key="i">
            <td>{{ item.column1 }}</td>
            <td>{{ item.column2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const columns = ["Column 1", "Column 2"]; // 替换为实际的表头列数据
const data = ref([]);
for (let i = 0; i < 100; i++) {
  data.value.push({ column1: "column1", column2: "column2" });
}
</script> -->
