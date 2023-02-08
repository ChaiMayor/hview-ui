<template>
	<template v-if="descriptions.direction === 'vertical'">
		<tr>
			<template v-for="(cell, index) in row" :key="`tr1-${index}`">
				<h-descriptions-cell :cell="cell" tag="th" type="label" />
			</template>
		</tr>
		<tr>
			<template v-for="(cell, index) in row" :key="`tr2-${index}`">
				<h-descriptions-cell :cell="cell" tag="td" type="content" />
			</template>
		</tr>
	</template>
	<tr v-else>
		<template v-for="(cell, index) in row" :key="`tr3-${index}`">
			<template v-if="descriptions.border">
				<h-descriptions-cell :cell="cell" tag="td" type="label" />
				<h-descriptions-cell :cell="cell" tag="td" type="content" />
			</template>
			<h-descriptions-cell v-else :cell="cell" tag="td" type="both" />
		</template>
	</tr>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { inject } from "vue";

import HDescriptionsCell from "./descriptions-cell";
import { descriptionsKey } from "./token";
import { descriptionsRowProps } from "./descriptions-row";

import type { IDescriptionsInject } from "./descriptions.type";

defineProps(descriptionsRowProps);

const descriptions = inject(descriptionsKey, {} as IDescriptionsInject);
</script>

<script lang="ts">
export default {
	name: "HDescriptionsRow",
};
</script>
