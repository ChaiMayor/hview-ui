<template>
  <div class="h-picker-month">
    <div class="h-picker-month-header">
      <span @click="$emit('yearRedOne')">&lt;&lt;</span>
      <span @click="$emit('jump')">{{ month }}</span>
      <span @click="$emit('yearAddOne')">&gt;&gt;</span>
    </div>
    <table class="pickerMonTab">
      <tbody>
        <tr v-for="(row, index) in allMonth" :key="`${row} - ${index}`">
          <td
            v-for="(cell, index) in row"
            :key="`${cell} - ${index}`"
            @click="$emit('selectMonth', ['monthMark', dateInfo[0], cell])"
            >{{ cell }}</td
          >
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { toMatrix } from "../utils/toMatrix";
import { monthTable } from "../utils/tableHeader";
import { pickerMonthAndYearProps } from "./datePicker";
const props = defineProps(pickerMonthAndYearProps);

const month = computed(() => {
  return props.dateInfo[0];
});
const allMonth = toMatrix(monthTable, 4);
</script>

<script lang="ts">
export default {
  name: "PickerMonth",
};
</script>
