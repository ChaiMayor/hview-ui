import { ICell } from "../src/datePicker";

// 获取当前月需要显示的天数
const getCurrMonthDayCount = (year: number, month: number) => {
	const date = new Date(year, month, 0);
	return date.getDate();
};
const getCurMonthDayArr = (year: number, month: number) => {
	const currMonthDayCount = getCurrMonthDayCount(year, month);
	const restDays: ICell[] = [];
	for (let i = 1; i <= currMonthDayCount; i++) {
		restDays.push({ date: new Date(year, month - 1, i), status: "cur" });
	}
	return restDays;
};
// 获取当月第一天是周几
const getCurrMonthFirstDay = (year: number, month: number) => {
	const date = new Date(year, month - 1, 1);
	return date.getDay();
};

// 获取上个月需要显示的天数
const getPreMonthDays = (year: number, month: number) => {
	let days = getCurrMonthFirstDay(year, month);
	// 获取上个月一共多少天
	let lastDate = getCurrMonthDayCount(year, month - 1);
	if (days === 0) {
		days = 7;
	}
	const restDays: ICell[] = [];
	while (restDays.length < days) {
		restDays.push({ date: new Date(year, month, lastDate--), status: "pre" });
	}
	return restDays.reverse();
};

// 获取下个月需要显示的天数
const getNextMonthDays = (year: number, month: number) => {
	const preMonthDays = getPreMonthDays(year, month).length;
	const currMonthDayCount = getCurrMonthDayCount(year, month);
	const nextMonthDayCount = 42 - preMonthDays - currMonthDayCount;
	const restDays: ICell[] = [];

	for (let i = 1; i <= nextMonthDayCount; i++) {
		restDays.push({ date: new Date(year, month, i), status: "next" });
	}
	return restDays;
};

const getDateInfo = (timeStamp: Date | void) => {
	const date = timeStamp ? new Date(timeStamp) : new Date();
	const dateTuple: [number, number, number] = [
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate(),
	];
	return dateTuple;
};

// 处理年月日
const getFormatDate = (...args: [number, number, number]) => {
	const dateArr = [...args];
	const arr = [];
	for (let i = 1; i < dateArr.length; i++) {
		arr.push(String(dateArr[i]).padStart(2, "0"));
	}
	arr.unshift(dateArr[0]);
	return arr.join("-");
};

const cloneDate = (date: Date) => {
	return new Date(date.getTime());
};

export {
	getCurrMonthDayCount,
	getCurMonthDayArr,
	getCurrMonthFirstDay,
	getPreMonthDays,
	getNextMonthDays,
	getDateInfo,
	getFormatDate,
	cloneDate,
};
