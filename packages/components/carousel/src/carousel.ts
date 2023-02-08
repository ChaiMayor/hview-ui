import type { ExtractPropTypes, InjectionKey, Ref } from "vue";
import type { CarouselItemProps } from "@/carousel-item/src/carousel-item";

export const carouselProps = {
	initialIndex: {
		type: Number,
		default: 0,
	},
	height: {
		type: String,
		default: "",
	},
	trigger: {
		type: String,
		values: ["hover", "click"],
		default: "hover",
	},
	autoplay: {
		type: Boolean,
		default: true,
	},
	interval: {
		type: Number,
		default: 3000,
	},
	indicatorPosition: {
		type: String,
		values: ["", "none", "outside"],
		default: "",
	},
	indicator: {
		type: Boolean,
		default: true,
	},
	indicatorType: {
		type: String,
		values: ["circle", "rect"],
		default: "circle",
	},
	arrow: {
		type: String,
		values: ["always", "hover", "never"],
		default: "hover",
	},
	loop: {
		type: Boolean,
		default: true,
	},
	direction: {
		type: String,
		values: ["horizontal", "vertical"],
		default: "horizontal",
	},
	pauseOnHover: {
		type: Boolean,
		default: true,
	},
};

export const carouselEmits = {
	change: (current: number, prev: number) =>
		[current, prev].every((i) => {
			return Number.isInteger(i);
		}),
};

export type CarouselItemStates = {
	hover: boolean;
	translate: number;
	scale: number;
	active: boolean;
	ready: boolean;
	inStage: boolean;
	animating: boolean;
};

export type CarouselItemContext = {
	props: CarouselItemProps;
	states: CarouselItemStates;
	uid: number;
	translateItem: (
		index: number,
		activeIndex: number,
		oldIndex?: number,
	) => void;
};

export type CarouselContext = {
	root: Ref<HTMLElement | undefined>;
	items: Ref<CarouselItemContext[]>;
	isVertical: Ref<boolean>;
	loop: boolean;
	addItem: (item: CarouselItemContext) => void;
	removeItem: (uid: number) => void;
	setActiveItem: (index: number) => void;
};

export const carouselContextKey: InjectionKey<CarouselContext> =
	Symbol("carouselContextKey");

export type CarouselProps = ExtractPropTypes<typeof carouselProps>;
export type CarouselEmits = typeof carouselEmits;
