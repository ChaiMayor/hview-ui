<template>
  <table class="h-table" :class="borderClass">
    <thead>
      <th v-if="isShowCheckBox">
        <h-checkbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"></h-checkbox>
      </th>
      <th v-for="(item, index) in columns" :key="index">
        {{ item.title }}
        <div v-if="item.sorter" class="parent">
          <div class="child">
            <div
              class="up"
              :style="{ borderBottomColor: arrowUp ? '#409eff' : '#a8abb2' }"
              @click="sortTable(item.sorter.Compare)"></div>
            <div
              class="down"
              :style="{ borderTopColor: !arrowUp ? '#409eff' : '#a8abb2' }"
              @click="sortTable(item.sorter.Compare, true)"></div>
          </div>
        </div>
      </th>
    </thead>
    <tbody>
      <tr
        v-for="(item, i) in data"
        :key="i"
        :class="[props.tableRowClassName(i)]">
        <td v-if="isShowCheckBox"
          ><h-checkbox
            v-model="item.checked"
            @change="handleCheckedChange"></h-checkbox
        ></td>
        <td v-for="(info, j) in item" :key="j">
          <div v-if="isTag && info === item.tags">
            <h-tag
              class="tag"
              style="margin-right: 4px"
              v-for="tag in info"
              :key="tag.name"
              :type="tag.type"
              :size="tag.size"
              :round="tag.round"
              >{{ tag.name }}</h-tag
            >
          </div>
          <div v-else-if="info !== item.checked">
            {{ info }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { TableProps, dataType } from "./table";
import { deepCopy } from "@hview-plus/utils";

const props = defineProps(TableProps);
const isTag = ref(props.tag);
const isShowCheckBox = ref(props.checkbox);
const checkAll = ref(false);
const isIndeterminate = ref(false);
const arrowUp = ref(false);
const params = ref(deepCopy(props.data));
const columns = ref(deepCopy(props.columns));

const data = ref(
  params.value.map((item: dataType) => {
    return reactive({
      ...item,
      checked: false,
    });
  }),
);

const borderClass = computed(() => {
  return {
    [`h-table--border`]: props.border,
  };
});

const sortTable = (compare: (a, b) => number, rev?: boolean) => {
  rev = rev === void 0 ? false : true;
  data.value.sort(compare);
  if (rev) {
    data.value.reverse();
    arrowUp.value = false;
  } else arrowUp.value = true;
};

const handleCheckAllChange = (val: boolean) => {
  if (val) {
    data.value.forEach((item: dataType) => {
      item.checked = true;
    });
    isIndeterminate.value = false;
    checkAll.value = true;
  } else {
    data.value.forEach((item: dataType) => {
      item.checked = false;
    });
    checkAll.value = false;
  }
};

const handleCheckedChange = () => {
  let flag = true;
  isIndeterminate.value = false;
  data.value.forEach((item: dataType) => {
    if (!item.checked) {
      flag = false;
    } else isIndeterminate.value = true;
  });
  if (flag) isIndeterminate.value = false;
  checkAll.value = flag;
};
</script>
<script lang="ts">
export default {
  name: "HTable",
};
</script>
