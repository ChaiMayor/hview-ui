<template>
	<span
		v-if="disableTransitions"
		class="h-tag"
		:class="tagClasses"
		:style="{ backgroundColor: color }"
		@click="handleClick">
		<span class="h-tag-content">
			<slot />
		</span>
		<h-icon
			v-if="closable"
			name="close"
			class="h-tag-close"
			@click.stop="handleClose">
		</h-icon>
	</span>
	<transition v-else name="h-tag-zoom-in-center" appear>
		<span
			class="h-tag"
			:class="tagClasses"
			:style="{ backgroundColor: color }"
			@click="handleClick">
			<span class="h-tag-content">
				<slot />
			</span>
			<h-icon
				v-if="closable"
				name="close"
				class="h-tag-close"
				@click.stop="handleClose">
			</h-icon>
		</span>
	</transition>
</template>

<script lang="ts" setup>
import { computed, unref } from "vue";
import { tagEmits, tagProps } from "./tag";

const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);

const tagClasses = computed(() => {
	const { type, border, theme, round, size } = props;
	return {
		[`h-tag-round`]: round,
		[`h-tag--${type}`]: unref(type),
		[`h-tag--${size}`]: unref(size),
		[`is-${theme}`]: unref(theme),
	};
});

// methods
const handleClose = (event: MouseEvent) => {
	emit("close", event);
};

const handleClick = (event: MouseEvent) => {
	emit("click", event);
};
</script>

<script lang="ts">
export default {
	name: "HTag",
};
</script>
