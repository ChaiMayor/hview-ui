<template>
	<div class="h-checkbox-group">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { computed, provide, nextTick } from "vue";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
	modelValue: {
		type: Array,
		default: () => [],
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const modelValue = computed(() => props.modelValue);
const disabled = computed(() => props.disabled);

const changeEvent = (value: any) => {
	emit("update:modelValue", value);
	nextTick(() => emit("change", value));
};

provide("checkboxGroup", {
	modelValue,
	disabled,
	changeEvent,
});
</script>

<script lang="ts">
export default {
	name: "HCheckboxGroup",
};
</script>
