declare module "@vue/runtime-core" {
	export interface GlobalComponents {
		HButton: typeof import("hview-plus").Button;
		HSlider: typeof import("hview-plus").Slider;
	}
}
export {};
