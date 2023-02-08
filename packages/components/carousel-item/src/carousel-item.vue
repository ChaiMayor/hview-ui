<template>
	<div
		v-show="ready"
		class="h-carousel-item"
		:class="styleClass"
		:style="itemStyle"
		@click="handleItemClick">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { computed, unref } from "vue";
import { carouselItemProps } from "./carousel-item";
import { useCarouselItem } from "./utils";
import type { CSSProperties } from "vue";

const props = defineProps(carouselItemProps);

// inject
const {
	active,
	animating,
	hover,
	inStage,
	isVertical,
	translate,
	scale,
	ready,
	handleItemClick,
} = useCarouselItem(props, "HCarouselItem");

const styleClass = computed(() => {
	return {
		[`h-carousel-item--active`]: unref(active),
		[`h-carousel-item--inStage`]: unref(inStage),
		[`h-carousel-item--hover`]: unref(hover),
		[`h-carousel-item--animating`]: unref(animating),
	};
});
const itemStyle = computed<CSSProperties>(() => {
	const translateType = `translate${unref(isVertical) ? "Y" : "X"}`;
	const _translate = `${translateType}(${unref(translate)}px)`;
	const _scale = `scale(${unref(scale)})`;
	const transform = [_translate, _scale].join(" ");

	return {
		transform,
	};
});
</script>

<script lang="ts">
export default {
	name: "HCarouselItem",
};
</script>
