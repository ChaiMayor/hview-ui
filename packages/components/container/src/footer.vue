<template>
	<footer class="h-footer" :style="style">
		<slot />
	</footer>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { FooterProps } from "./container";

const props = defineProps(FooterProps);
const style = computed(() => {
	return {
		height: props.height,
	};
});
</script>

<script lang="ts">
export default {
	name: "HFooter",
};
</script>
