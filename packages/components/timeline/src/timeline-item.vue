<template>
	<li class="h-timeline-item" :class="{ [`h-timeline-item-center`]: center }">
		<div class="h-timeline-item-tail"> </div>
		<div
			v-if="!$slots.dot"
			class="h-timeline-item-node"
			:class="timelineClasses"
			:style="{
				backgroundColor: color,
			}">
			<h-icon v-if="icon" class="h-timeline-item-icon" :name="icon"> </h-icon>
		</div>
		<div v-if="$slots.dot" class="h-timeline-item-dot">
			<slot name="dot" />
		</div>

		<div class="h-timeline-item-wrapper">
			<div
				v-if="!hideTimestamp && placement === 'top'"
				class="h-timeline-item-timestamp h-timeline-item-top">
				{{ timestamp }}
			</div>

			<div class="h-timeline-item-content">
				<slot />
			</div>

			<div
				v-if="!hideTimestamp && placement === 'bottom'"
				class="h-timeline-item-timestamp h-timeline-item-bottom">
				{{ timestamp }}
			</div>
		</div>
	</li>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { timelineItemProps } from "./timeline-item";

const props = defineProps(timelineItemProps);

const timelineClasses = computed(() => {
	const { size, type, hollow } = props;
	return {
		[`h-timeline-item-node--${size}`]: size,
		[`h-timeline-item-node--${type}`]: type,
		[`h-timeline-item-node-hollow`]: hollow,
	};
});
</script>

<script lang="ts">
export default {
	name: "HTimelineItem",
};
</script>
