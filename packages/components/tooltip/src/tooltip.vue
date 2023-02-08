<template>
	<span>
		<slot></slot>
	</span>
</template>
<script setup lang="ts">
import {
	getCurrentInstance,
	onUnmounted,
	onMounted,
	toRefs,
	ref,
	watchEffect,
	nextTick,
} from "vue";
import { TooltipProps } from "./tooltip";
const props = defineProps(TooltipProps);
// 获取当前组件的实例
const instance = getCurrentInstance();
const { placement, content, width, modelValue } = toRefs(props);
const isShow = ref(modelValue.value);
let tip: any = null;
let tid = "";

// 隐藏tooltip
function hide(tid: string) {
	const el = document.getElementById(tid);
	if (el) {
		// 移除样式
		el.classList.remove("h-tooltip-show");
	}
}

// 显示tooltip
function show(tip: any) {
	tip && tip.classList.add("h-tooltip-show");
}

function calcStyle(Rect: any, tip: any, key: string): { x: number; y: number } {
	let y = document.documentElement.scrollTop;
	let x = 0;
	const placement: any = {
		"top-start": () => {
			x += Rect.x;
			y += Rect.y - tip.offsetHeight;
		},
		top: () => {
			x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5;
			y += Rect.y - tip.offsetHeight;
		},
		"top-end": () => {
			x += Rect.x + Rect.width - tip.offsetWidth;
			y += Rect.y - tip.offsetHeight;
		},
		"left-start": () => {
			x += Rect.x - tip.offsetWidth;
			y += Rect.y;
		},
		left: () => {
			x += Rect.x - tip.offsetWidth;
			y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5;
		},
		"left-end": () => {
			x += Rect.x - tip.offsetWidth;
			y += Rect.y + Rect.height - tip.offsetHeight;
		},
		"right-start": () => {
			x += Rect.x + Rect.width;
			y += Rect.y;
		},
		right: () => {
			x += Rect.x + Rect.width;
			y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5;
		},
		"right-end": () => {
			x += Rect.x + Rect.width;
			y += Rect.y + Rect.height - tip.offsetHeight;
		},
		"bottom-start": () => {
			x += Rect.x;
			y += Rect.y + Rect.height;
		},
		bottom: () => {
			x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5;
			y += Rect.y + Rect.height;
		},
		"bottom-end": () => {
			x += Rect.x + Rect.width - tip.offsetWidth;
			y += Rect.y + Rect.height;
		},
	};
	placement[key]();
	return { x, y };
}

// 核心函数，获取到已经渲染完毕的DOM.
function update(tip: any, tid: string): any {
	// 默认取得插件内第一个元素，并获取它的坐标
	const Rect = instance?.proxy?.$el.firstElementChild.getBoundingClientRect();
	const el = document.getElementById(tid);
	if (!el) {
		document.body.appendChild(tip);
	}
	tip.style.display = "block";
	const { x, y } = calcStyle(Rect, tip, placement?.value!);
	tip.style.top = y + "px";
	tip.style.left = x + "px";
}

onMounted(() => {
	const el = instance?.proxy?.$el;
	// 构建以tooltip的DOM元素，并用uid记录
	tip = document.createElement("div");
	tip &&
		tip.addEventListener("mouseenter", () => {
			isShow.value = true;
		});
	tip &&
		tip.addEventListener("mouseleave", () => {
			isShow.value = false;
		});
	tip.className = `h-tooltip h-tooltip-${placement!.value}`;
	width?.value && (tip.style.width = width.value);
	tid = tip.id = `h-tooltip-${instance!.uid}`;

	// 监听isShow变化，监听有无接触组件

	watchEffect(() => {
		tip.innerHTML = `<span>${content?.value}</span>` || "";
		// 下个宏循环才能获取，加上nextTick
		nextTick(update(tip, tid));
		tip.className = `h-tooltip h-tooltip-${placement!.value}`;
		width?.value && (tip.style.width = width.value);
		if (toString.call(props.modelValue) !== "[object Null]") {
			isShow.value = modelValue.value;
		}

		if (isShow.value) {
			show(tip);
		} else {
			hide(tid);
		}
	});

	// 退出页面后删除全部的结点
	onUnmounted(() => {
		const el = document.getElementById(tid);
		el && document.body.removeChild(tip);
	});

	// 监听有无接触组件，接触了为true，离开为false
	el &&
		el.addEventListener("mouseenter", () => {
			isShow.value = true;
		});

	el &&
		el.addEventListener("mouseleave", () => {
			setTimeout(() => {
				isShow.value = false;
			}, 500);
		});
});
</script>
<script lang="ts">
export default {
	name: "HTooltip",
};
</script>
