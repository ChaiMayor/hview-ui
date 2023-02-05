<template>
  <div class="h-date-picker">
    <input class="h-ipt" type="text" @click="visible = true" :value="preFormDate" />
    <Teleport to="body">
      <div class="h-picker-body" v-if="visible" ref="calendarRef">
        <div class="h-picker-header">
          <span class="notSel" @click="changeYM(-1, 'year')">&lt;&lt;</span>
          <span class="notSel" @click="changeYM(-1, 'month')">&lt;</span>
          <span>{{ dateInfo[0] }}年</span>
          <span>{{ dateInfo[1] }}月</span>
          <span class="notSel" @click="changeYM(1, 'month')">&gt;</span>
          <span class="notSel" @click="changeYM(1, 'year')">&gt;&gt;</span>
        </div>
        <div class="h-picker-content">
          <table class="h-picker-details">
            <tbody>
              <tr class="weeksRow">
                <th class="notSel" v-for="item in tableHeader" :key="item">{{ item }}</th>
              </tr>
              <tr v-for="(row, index) in tableHoleDays" :key="index">
                <td
                  :class="[dayClass(cell), { beSel: preDay === cell.date }]"
                  v-for="(cell, index) in row"
                  :key="index"
                  @click="selectDay(cell)"
                  >{{ getDays(cell) }}</td
                >
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import "../style/index.less";
import { onClickOutside } from "@vueuse/core";
import { ref, defineComponent, defineProps, computed } from "vue";
import { ICell, datePickerProps, DatePickerProps } from "./datePicker";
import * as dateTimePicker from "../utils/dateTimePicker";
import { toMatrix } from "../utils/toMatrix";
import { tableHeader } from "../utils/tableHeader";
import { useCtrlStyle } from "../hooks/useCtrlStyle";

const props: DatePickerProps = defineProps(datePickerProps);

//控制日期面板的展示
const visible = ref(false);
const calendarRef = ref();
onClickOutside(calendarRef, () => {
  visible.value = false;
});
// 日期面板的制作
let time = ref(props.time);
let dateInfo = computed(() => {
  return dateTimePicker.getDateInfo(time.value);
});
//输入框的显示
let preFormDate = ref(dateTimePicker.getFormatDate(...dateInfo.value));

let formDate = computed({
  get() {
    return dateTimePicker.getFormatDate(...dateInfo.value);
  },
  set(newValue) {
    preFormDate.value = newValue;
  },
});
let curRestDays = computed(() => {
  return dateTimePicker.getCurMonthDayArr(dateInfo.value[0], dateInfo.value[1]);
});
let preRestDays = computed(() => {
  return dateTimePicker.getPreMonthDays(dateInfo.value[0], dateInfo.value[1]);
});
let nextRestDays = computed(() => {
  return dateTimePicker.getNextMonthDays(dateInfo.value[0], dateInfo.value[1]);
});
let tableHoleDays = computed(() => {
  return toMatrix([...preRestDays.value, ...curRestDays.value, ...nextRestDays.value], 7);
});

// 切换月份或年份
const changeYM = (val: number, yam: string) => {
  let timestamp;
  const [year, month] = dateTimePicker.getDateInfo(time.value);
  if (yam === "month") {
    timestamp = dateTimePicker.cloneDate(time.value!).setMonth(month - 1 + val);
  } else {
    timestamp = dateTimePicker.cloneDate(time.value!).setFullYear(year + val);
  }
  time.value = new Date(timestamp);
};

//日期面板的一些样式
let preDay = ref();
const { getDays, dayClass } = useCtrlStyle();
const selectDay = (date: ICell) => {
  preDay.value = date.date;
  const beSelectDay = dateTimePicker.getDateInfo(date.date);
  formDate.value = dateTimePicker.getFormatDate(...beSelectDay);
};
</script>

<script lang="ts">
export default defineComponent({
  name: "HDatePicker",
});
</script>

<style scoped></style>
