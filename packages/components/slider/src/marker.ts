import { definePropType } from "@hview-plus/utils";
import type { CSSProperties, ExtractPropTypes } from "vue";

export const sliderMarkerProps = {
	mark: {
		type: definePropType<
			| string
			| {
					style: CSSProperties;
					label: any;
			  }
		>([String, Object]),
		default: undefined,
	},
};
export type SliderMarkerProps = ExtractPropTypes<typeof sliderMarkerProps>;
