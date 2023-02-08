<template>
	<div
		class="h-backtop"
		:style="backtopStyle"
		v-if="visible"
		@click="handleClick">
		<slot>
			<h-icon name="xiangshang1"></h-icon>
		</slot>
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { BacktopProps, BacktopEmits } from "./backtop";
import { useBacktop } from "./use-backtop";
const props = defineProps(BacktopProps);
const emit = defineEmits(BacktopEmits);
const { handleClick, visible } = useBacktop(props, emit);
const backtopStyle = computed(() => {
	return {
		right: `${props.right}px`,
		bottom: `${props.bottom}px`,
	};
});
</script>

<script lang="ts">
export default {
	name: "HBacktop",
};
</script>
