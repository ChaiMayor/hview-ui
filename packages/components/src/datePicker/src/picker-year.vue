<template>
  <div class="h-picker-year">
    <div class="h-picker-year-header"
      ><span class="arrow" @click="$emit('yearRedOne')"> &lt;&lt;</span>
      <span>{{ curYear }}</span>
      <span class="arrow" @click="$emit('yearAddOne')">&gt;&gt;</span>
    </div>
    <table class="pickerYearTab">
      <tbody>
        <tr v-for="(row, index) in allYear" :key="`${row} - ${index}`">
          <td
            v-for="(cell, index) in row"
            :key="`${cell} - ${index}`"
            @click="$emit('selectYear', ['yearMark', cell])"
            >{{ cell }}</td
          >
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import "../style/pickerYear.less";
import { defineComponent, computed } from "vue";
import { toMatrix } from "../utils/toMatrix";
import { pickerMonthAndYearProps } from "./datePicker";
const props = defineProps(pickerMonthAndYearProps);

let curYear: any = computed(() => {
  return props.dateInfo[0];
});
let startYear = computed(() => {
  return curYear.value - (curYear.value % 10);
});
let endYear = computed(() => {
  return startYear.value + 9;
});

let allYear = computed(() => {
  let arr = [];
  for (let i = startYear.value; i <= endYear.value; i++) {
    arr.push(i);
  }
  return toMatrix(arr, 4);
});
</script>
<script lang="ts">
export default defineComponent({
  name: "PickerYear",
});
</script>
<style scoped></style>
