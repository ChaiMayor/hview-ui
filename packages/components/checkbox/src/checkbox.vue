<template>
	<label
		class="h-checkbox"
		:class="[
			{ 'is-checked': isChecked },
			{ 'is-disabled': isDisabled },
			{ 'is-bordered': border },
		]">
		<span
			class="h-checkbox__input"
			:class="{
				'is-checked': isChecked,
				'is-disabled': isDisabled,
				'is-indeterminate': indeterminate,
			}">
			<span class="h-checkbox__inner"></span>
			<input
				class="h-checkbox__original"
				type="checkbox"
				v-model="model"
				:disabled="isDisabled"
				:value="label"
				@change="handleChange" />
		</span>
		<span class="h-checkbox__label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script setup lang="ts">
import { computed, inject, nextTick } from "vue";
import { CheckBoxProps } from "./checkbox";
import "../style/index.less";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps(CheckBoxProps);

const checkboxGroup = inject<any>("checkboxGroup", {});

// 是不是group分组
const isGroup = computed(() => {
	return checkboxGroup && checkboxGroup.modelValue ? true : false;
});

const model = computed({
	get() {
		return isGroup.value
			? checkboxGroup && checkboxGroup.modelValue.value
			: props.modelValue;
	},
	set(val) {
		if (isGroup.value) {
			checkboxGroup && checkboxGroup.changeEvent(val);
		} else {
			emit("update:modelValue", val);
		}
	},
});

const isChecked = computed(() => {
	if (isGroup.value) {
		return model.value.includes(props.label);
	} else {
		return model.value;
	}
});

const isDisabled = computed(() => {
	return isGroup.value
		? (checkboxGroup && checkboxGroup.disabled.value) || props.disabled
		: props.disabled;
});

const handleChange = () => {
	nextTick(() => emit("change", model.value));
};
</script>

<script lang="ts">
export default {
	name: "HCheckbox",
};
</script>
