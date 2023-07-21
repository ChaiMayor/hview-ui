<template>
  <div class="h-table" :style="tableClass">
    <table class="h-table--thead" :class="borderClass">
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
                :style="{
                  borderBottomColor: arrowUp ? '#409eff' : '#a8abb2',
                }"
                @click="sortTable(item.sorter.Compare)"></div>
              <div
                class="down"
                :style="{ borderTopColor: !arrowUp ? '#409eff' : '#a8abb2' }"
                @click="sortTable(item.sorter.Compare, true)"></div>
            </div>
          </div>
        </th>
      </thead>
    </table>
    <div ref="tableList" class="h-table--body" @scroll="scrollEvent">
      <div
        class="h-infinite-list-phantom"
        :style="{ height: listHeight + 'px' }"></div>
      <table :class="borderClass" :style="{ transform: getTransform }">
        <tbody>
          <tr
            v-for="(item, i) in canVisibleList"
            :key="i"
            :class="[props.tableRowClassName(i)]">
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
              <div v-else-if="info === item.checked">
                <h-checkbox
                  v-model="item.checked"
                  @change="handleCheckedChange"></h-checkbox>
              </div>
              <div v-else>
                {{ info }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, onMounted, toRefs } from "vue";
import { TableProps, dataType } from "./table";
import { deepCopy } from "@hview-plus/utils";
const props = defineProps(TableProps);
const isTag = ref(props.tag);
const isShowCheckBox = ref(props.checkbox);
const params = ref(deepCopy(props.data));
const columns = ref(deepCopy(props.columns));
const checkAll = ref(false);
const isIndeterminate = ref(false);
const arrowUp = ref(false);
const data = ref(
  params.value.map((item: dataType) => {
    if (isShowCheckBox.value) {
      return reactive({
        checked: false,
        ...item,
      });
    } else {
      return reactive(item);
    }
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

let screenHeight = ref(0); //可视区域高度
let start = ref(0),
  end = ref(0); // 开始,结束索引
let startOffset = ref(0); // 可视区域偏移量
let tableList = ref(null);
const { itemSize, tableHeight, isVritual } = toRefs(
  reactive(props.virtualTable),
);

const tableClass = computed(() => {
  return {
    height: tableHeight.value + "px",
  };
});

let listHeight = computed(() => {
  return isVritual.value
    ? data.value.length * itemSize.value // 列表总高度
    : 0;
});

const canVisibleListCnt = computed(() => {
  return isVritual.value
    ? Math.ceil(screenHeight.value / itemSize.value) // 可视列表数量
    : 0;
});
const canVisibleList = computed(() => {
  return isVritual.value
    ? data.value.slice(start.value, Math.min(end.value, data.value.length))
    : data.value;
});
const getTransform = computed(() => {
  return `translate3d(0,${startOffset.value}px,0)`;
});

onMounted(() => {
  if (isVritual.value) {
    screenHeight.value = tableList.value.clientHeight;
    start.value = 0;
    end.value = start.value + canVisibleListCnt.value;
  }
});

const scrollEvent = () => {
  if (isVritual.value) {
    let scrollTop = tableList.value.scrollTop;
    //此时的开始索引
    start.value = Math.floor(scrollTop / itemSize.value);
    //此时的结束索引
    end.value = start.value + canVisibleListCnt.value;
    //此时的偏移量
    startOffset.value = scrollTop - (scrollTop % itemSize.value);
  }
};
</script>
<script lang="ts">
export default {
  name: "HTable",
};
</script>
