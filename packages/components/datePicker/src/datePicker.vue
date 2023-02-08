<template>
	<div class="h-date-picker">
		<input
			class="h-ipt"
			type="text"
			@click="visible = true"
			:value="preFormDate" />
		<Teleport to="body">
			<div
				class="h-picker-body"
				v-if="visible === true && mode === 'date'"
				ref="calendarRef">
				<div class="h-picker-header">
					<span @click="selectYM(['year', -1])">&lt;&lt;</span>
					<span @click="selectYM(['month', -1])">&lt;</span>
					<span class="showInfo" @click="pickerYM('pickerYear')"
						>{{ dateInfo[0] }}年</span
					>
					<span class="showInfo" @click="pickerYM('pickerMonth')"
						>{{ dateInfo[1] }}月</span
					>
					<span @click="selectYM(['month', 1])">&gt;</span>
					<span @click="selectYM(['year', 1])">&gt;&gt;</span>
				</div>
				<div class="h-picker-content">
					<table class="h-picker-details">
						<tbody>
							<tr class="weeksRow">
								<th class="notSel" v-for="item in tableHeader" :key="item">{{
									item
								}}</th>
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
			<div
				><PickerMonth
					v-if="mode === 'pickerMonth'"
					@year-red-one="selectYM(['year', -1])"
					@year-add-one="selectYM(['year', 1])"
					@select-month="selectYM"
					@jump="pickerYM('pickerYear')"
					:dateInfo="dateInfo"></PickerMonth
			></div>
			<div
				><PickerYear
					v-if="mode === 'pickerYear'"
					:date-info="dateInfo"
					@year-red-one="selectYM(['year', -1])"
					@year-add-one="selectYM(['year', 1])"
					@select-year="selectYM"></PickerYear
			></div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import PickerMonth from "./picker-month.vue";
import PickerYear from "./picker-year.vue";
import { onClickOutside } from "@vueuse/core";
import { ref, defineComponent, defineProps, computed } from "vue";
import { ICell, datePickerProps } from "./datePicker";
import * as dateTimePicker from "../utils/dateTimePicker";
import { toMatrix } from "../utils/toMatrix";
import { tableHeader, monthMap } from "../utils/tableHeader";
import { useCtrlStyle } from "../hooks/useCtrlStyle";

const props = defineProps(datePickerProps);
const mode = ref(props.type);

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
	return toMatrix(
		[...preRestDays.value, ...curRestDays.value, ...nextRestDays.value],
		7,
	);
});

// 控制子组件的跳转
const selectYM = (args: [string, number?, string?]) => {
	let timestamp: number;
	let newMonth = monthMap.get(args[2]);
	const [year, month] = dateTimePicker.getDateInfo(time.value);
	switch (args[0]) {
		case "yearMark":
			mode.value = "pickerMonth";
			timestamp = dateTimePicker.cloneDate(time.value).setFullYear(args[1]);
			break;
		case "monthMark":
			mode.value = "date";
			timestamp = dateTimePicker.cloneDate(time.value).setMonth(newMonth);
			break;
		case "year":
			timestamp = dateTimePicker
				.cloneDate(time.value)
				.setFullYear(year + args[1]);
			break;
		case "month":
			timestamp = dateTimePicker
				.cloneDate(time.value)
				.setMonth(month - 1 + args[1]);
			break;
	}
	time.value = new Date(timestamp);
};

const pickerYM = (val: string) => {
	mode.value = val;
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
