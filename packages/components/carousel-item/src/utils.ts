import {
	getCurrentInstance,
	inject,
	onMounted,
	onUnmounted,
	reactive,
	ref,
	unref,
} from "vue";
import { carouselContextKey } from "../../carousel/src/carousel";
import type { CarouselItemProps } from "./carousel-item";

export const useCarouselItem = (
	props: CarouselItemProps,
	componentName: string,
) => {
	const carouselContext = inject(carouselContextKey)!;
	// instance
	const instance = getCurrentInstance()!;
	if (!carouselContext) {
		console.error(
			componentName,
			"usage: <h-carousel><h-carousel-item></h-carousel-item></h-carousel>",
		);
	}

	if (!instance) {
		console.error(
			componentName,
			"compositional hook can only be invoked inside setups",
		);
	}

	const hover = ref(false);
	const translate = ref(0);
	const scale = ref(1);
	const active = ref(false);
	const ready = ref(false);
	const inStage = ref(false);
	const animating = ref(false);

	const { isVertical } = carouselContext;

	function processIndex(index: number, activeIndex: number, length: number) {
		const lastItemIndex = length - 1;
		const prevItemIndex = activeIndex - 1;
		const nextItemIndex = activeIndex + 1;
		const halfItemIndex = length / 2;

		if (activeIndex === 0 && index === lastItemIndex) {
			return -1;
		} else if (activeIndex === lastItemIndex && index === 0) {
			return length;
		} else if (index < prevItemIndex && activeIndex - index >= halfItemIndex) {
			return length + 1;
		} else if (index > nextItemIndex && index - activeIndex >= halfItemIndex) {
			return -2;
		}
		return index;
	}

	function calcTranslate(
		index: number,
		activeIndex: number,
		isVertical: boolean,
	) {
		const rootEl = carouselContext.root.value;
		if (!rootEl) return 0;

		const distance =
			(isVertical ? rootEl.offsetHeight : rootEl.offsetWidth) || 0;
		return distance * (index - activeIndex);
	}

	const translateItem = (
		index: number,
		activeIndex: number,
		oldIndex?: number,
	) => {
		const carouselItemLength = carouselContext.items.value.length ?? Number.NaN;

		const isActive = index === activeIndex;
		if (oldIndex !== undefined) {
			animating.value = isActive || index === oldIndex;
		}

		if (!isActive && carouselItemLength > 2 && carouselContext.loop) {
			index = processIndex(index, activeIndex, carouselItemLength);
		}

		const _isVertical = unref(isVertical);
		active.value = isActive;

		translate.value = calcTranslate(index, activeIndex, _isVertical);

		ready.value = true;
	};

	function handleItemClick() {}

	// lifecycle
	onMounted(() => {
		carouselContext.addItem({
			props,
			states: reactive({
				hover,
				translate,
				scale,
				active,
				ready,
				inStage,
				animating,
			}),
			uid: instance.uid,
			translateItem,
		});
	});

	onUnmounted(() => {
		carouselContext.removeItem(instance.uid);
	});

	return {
		active,
		animating,
		hover,
		inStage,
		isVertical,
		translate,
		scale,
		ready,
		handleItemClick,
	};
};
