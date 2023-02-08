<template>
	<div class="h-slider__button-wrapper">
		<h-tooltip :content="$attrs.tip" :placement="placement" v-if="showTooltip">
			<div ref="btn" class="h-slider__button" :style="buttonStyle"></div>
		</h-tooltip>
		<div ref="btn" class="h-slider__button" :style="buttonStyle" v-else></div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, useAttrs } from "vue";
import { SliderProps } from "./slider";
import { offsetTop, offsetLeft } from "@hview-plus/utils";
import { throttle } from "lodash-es";

const props = defineProps(SliderProps);
const emits = defineEmits(["update:isDraw", "setMarkerSite"]);
const attrs = useAttrs();
const btn = ref<null | HTMLDivElement>(null);
const site = ref<number>(0);
const btnIndex = ref<number>(0);

const buttonStyle = computed(() => {
	return props.vertical
		? {
				bottom: `${props.modelValue}%`,
		  }
		: {
				left: `${props.modelValue}%`,
		  };
});

const mountMouseEvent = (dom: HTMLDivElement) => {
	dom.onmousedown = function () {
		document.onmousemove = throttle(function (e: MouseEvent) {
			if (props.disabled) return false;
			emits("update:isDraw", true);
			if (props.vertical) {
				site.value =
					offsetTop(attrs.runway_wraper as HTMLDivElement) +
					(attrs.runway_wraper as HTMLDivElement).offsetHeight -
					e.pageY;
			} else {
				site.value =
					e.pageX - offsetLeft(attrs.runway_wraper as HTMLDivElement);
			}
			emits("setMarkerSite", site.value, attrs.yname);
			return false;
		}, 20);
		document.onmouseup = function () {
			document.onmousemove = null;
			document.onmousedown = null;
			document.onmouseup = null;
			setTimeout(() => {
				emits("update:isDraw", false);
			}, 50);
			return false;
		};
		return false;
	};
};

// const onDrawing = () => {};

// const onDrawed = () => {};

onMounted(() => {
	mountMouseEvent(btn.value as HTMLDivElement);
});
defineExpose({
	btnIndex: btnIndex,
});
</script>

<script lang="ts">
export default {
	name: "HSliderMarker",
};
</script>
