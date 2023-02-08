import { ref, shallowRef } from "vue";
import { useEventListener, useThrottleFn } from "@vueuse/core";
import type { SetupContext } from "vue";
import type { BacktopEmits, BacktopProps } from "./backtop";

export const useBacktop = (
	props: BacktopProps,
	emit: SetupContext<BacktopEmits>["emit"],
) => {
	const container = shallowRef<Document | HTMLElement>(document);
	const element = shallowRef<HTMLElement>(document.documentElement);
	const visible = ref(false);

	const handleScroll = () => {
		visible.value = element.value.scrollTop >= props.visibilityHeight;
	};

	const handleClick = (event: MouseEvent) => {
		element.value?.scrollTo({ top: 0, behavior: "smooth" });
		emit("click", event);
	};

	const handleScrollThrottled = useThrottleFn(handleScroll, 300, true);

	useEventListener(container, "scroll", handleScrollThrottled);
	return {
		visible,
		handleClick,
	};
};
