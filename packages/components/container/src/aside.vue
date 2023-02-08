<template>
	<aside class="h-aside" :style="style">
		<slot />
	</aside>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { AsideProps } from "./container";

const props = defineProps(AsideProps);
const style = computed(() => {
	return {
		width: props.width,
	};
});
</script>

<script lang="ts">
export default {
	name: "HAside",
};
</script>
