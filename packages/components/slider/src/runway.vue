<template>
	<div
		class="h-slider__runway"
		ref="slider_runway"
		:style="{ height: `${height}px` }">
		<div class="h-slider__bar" :style="barStyle"> </div>
		<!-- 间断点 -->
		<div :class="['h-slider__stop', { showEffect: marks }]" v-if="showStops">
			<div
				class="h-slider__stop_item"
				v-for="(step, i) in stepArr"
				:style="[
					vertical ? `bottom: ${step}px` : `left: ${step}px`,
					{ display: handleMarks.includes(String(i + 1)) ? 'block' : 'none' },
				]"
				:key="i">
			</div>
			<div class="h-slider__stop_label_box">
				<div
					class="h-slider__stop_label"
					v-for="(val, key) in marks"
					:key="key"
					:style="[{ left: stepArr[key - 1] + 'px' }, val['style']]">
					{{ isObject(val) ? val["label"] : val }}
				</div>
			</div>
		</div>
		<HSliderMarker
			ref="btn1"
			v-bind="$attrs"
			:model-value="btn1Site"
			:placement="placement"
			:tip="tip1"
			v-model:isDraw="isDraw"
			:disabled="disabled"
			:showTooltip="showTooltip"
			:vertical="vertical"
			yname="btn1"
			@setMarkerSite="setMarkerSite"></HSliderMarker>
		<HSliderMarker
			ref="btn2"
			v-bind="$attrs"
			yname="btn2"
			v-model:isDraw="isDraw"
			:placement="placement"
			:showTooltip="showTooltip"
			:disabled="disabled"
			:model-value="btn2Site"
			:vertical="vertical"
			:tip="tip2"
			@setMarkerSite="setMarkerSite"
			v-if="range"></HSliderMarker> </div
></template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import { SliderProps } from "./slider";
import HSliderMarker from "./marker.vue";
// eslint-disable-next-line vue/prefer-import-from-vue
import { isArray, isObject } from "@vue/shared";
import { cutChunk, judgeLocation } from "./utils";
import { toFixed, offsetTop, offsetLeft } from "@hview-plus/utils";
import { throttle } from "lodash-es";

const props = defineProps(SliderProps);
const slider_runway = ref<null | HTMLDivElement>(null);
// 组件
const btn1 = ref<any>(null);
const btn2 = ref<any>(null);

// marker的初始位置
const btn1Site = ref<number>(0);
const btn2Site = ref<number>(0);
// bar的初始位置
const barStart = ref<number>(0);
const barEnd = ref<number>(0);
// 间断点数组
const stepArr = ref<number[]>([]);
const tip1 = ref<string | number>(0);
const tip2 = ref<string | number>(0);
// 是否正在拖拽中
const isDraw = ref<boolean>(false);
// 当前点击的坐标
const site = ref<number>(0);
const emits = defineEmits(["input", "change"]);

const handleMarks = computed(() => {
	return props.marks ? Object.keys(props.marks) : [];
});

// 传入数值获得离当前哪个数组下标最近
const getStepArrIndex = (val: number): [number[], number] => {
	let index = 0;
	const arr = JSON.parse(JSON.stringify(stepArr.value));
	arr.unshift(0);
	// isFull(props.max - props.min, props.step) ? arr.push(Number.MAX_SAFE_INTEGER) : null;
	arr.push(Number.MAX_SAFE_INTEGER);
	for (let i = 0; i < arr.length; i++) {
		if (val <= arr[i]) {
			index = judgeLocation(val, arr[i - 1], arr[i]) === "end" ? i : i - 1;
			break;
		}
	}
	return [arr, index];
};
// bar进度条的位置
const barStyle = computed(() => {
	return props.vertical
		? {
				bottom: `${barStart.value}%`,
				height: `${barEnd.value}%`,
		  }
		: {
				left: `${barStart.value}%`,
				width: `${barEnd.value}%`,
		  };
});
// 设置marker移动位置
const setMarkerSite = (val: number, flag: "btn1" | "btn2") => {
	let value = 0;
	// 更新数据
	let [arr, index] = getStepArrIndex(val);
	index === -1 ? (index = 0) : null;
	value = Number(toFixed(String((arr[index] / props.width!) * 100), 0));
	// 判断点击的是哪一个按钮
	if (flag === "btn1") {
		btn1Site.value = value;
		tip1.value = index * props.step + props.min;
		btn1.value.btnIndex = index - (index === 0 ? 0 : 1);
	} else {
		btn2Site.value = value;
		tip2.value = index * props.step + props.min;
		btn2.value.btnIndex = index - (index === 0 ? 0 : 1);
	}
	// 更新进度条
	setBarStartEnd();
	// 返回事件
	emits("input", tip1.value, tip2.value);
	// 格式化tip提示内容
	if (props.formatTooltip) {
		tip1.value = props.formatTooltip(tip1.value as number);
		tip2.value = props.formatTooltip(tip2.value as number);
	}
};
// 设置bar进度条起始位置
const setBarStartEnd = () => {
	// 区分大值和小值
	if (props.range && isArray(props.modelValue)) {
		barStart.value = Math.min(btn2Site.value, btn1Site.value);
		barEnd.value =
			Math.max(btn2Site.value, btn1Site.value) -
			Math.min(btn2Site.value, btn1Site.value);
	} else {
		barEnd.value = btn1Site.value;
	}
};
// 绑定runway点击事件
const runwayClick = (e: MouseEvent) => {
	if (props.disabled) return false;
	if (isDraw.value) return false;
	let name: "btn1" | "btn2" = "btn1";
	if (props.vertical) {
		site.value =
			offsetTop(slider_runway.value as HTMLDivElement) +
			(slider_runway.value as HTMLDivElement).offsetHeight -
			e.pageY;
	} else {
		site.value = e.pageX - offsetLeft(slider_runway.value as HTMLDivElement);
	}
	if (props.range) {
		let max = btn1.value.btnIndex > btn2.value.btnIndex ? "start" : "end";
		let maxV =
			btn1.value.btnIndex > btn2.value.btnIndex
				? btn1.value.btnIndex
				: btn2.value.btnIndex;
		let min = max === "start" ? "end" : "start";
		let minV = max === "start" ? btn2.value.btnIndex : btn1.value.btnIndex;
		// 判断点击的位置离那个按钮近
		judgeLocation(site.value, stepArr.value[minV], stepArr.value[maxV]) === min
			? (name = "btn1")
			: (name = "btn2");
	}
	setMarkerSite(site.value, name);

	emits("change", tip1.value, tip2.value);
	return false;
};
// 根据max和min大小获取每份的宽度
const getPartWidth = computed(() => {
	return props.width! / (props.max - props.min);
});

// 初始化参数
const update = () => {
	// 计算间断点数组
	stepArr.value = cutChunk(props.width!, props.step, props.max - props.min);

	// 判断是否存在两个按钮
	if (props.range && isArray(props.modelValue)) {
		// 起点位置
		// btn1Site.value = tip1.value = props.modelValue[0];
		setMarkerSite(
			getPartWidth.value * ((props.modelValue[0] as number) - props.min),
			"btn1",
		);
		setMarkerSite(
			getPartWidth.value * ((props.modelValue[1] as number) - props.min),
			"btn2",
		);
		// 区分大值和小值
		barStart.value = Math.min(btn2Site.value, btn1Site.value);
		barEnd.value =
			Math.max(btn2Site.value, btn1Site.value) -
			Math.min(btn2Site.value, btn1Site.value);
	} else {
		// btn1Site.value = tip1.value = barEnd.value = props.modelValue as number;
		setMarkerSite(
			getPartWidth.value * ((props.modelValue as number) - props.min),
			"btn1",
		);
	}
	// console.log("————————————————————————————————————执行次数————————————————————————————————————");
};

watch(
	[
		() => props.modelValue,
		() => props.width,
		() => props.step,
		() => props.max,
		() => props.min,
	],
	throttle(() => {
		update();
	}, 20),
);

onMounted(() => {
	update();
	slider_runway.value &&
		slider_runway.value!.addEventListener("click", runwayClick);
});
onUnmounted(() => {
	slider_runway.value &&
		slider_runway.value!.removeEventListener("click", runwayClick);
});
defineExpose({
	update,
});
</script>

<script lang="ts">
export default {
	name: "HSliderRunway",
};
</script>
