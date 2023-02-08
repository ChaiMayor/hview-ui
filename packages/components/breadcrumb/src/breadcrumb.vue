<template>
	<div class="h-breadcrumb"> <slot /> </div>
</template>

<script lang="ts" setup>
import { provide } from "vue";
import { BreadcrumbProps } from "./breadcrumb";
const props = defineProps(BreadcrumbProps);
provide("breadcrumbProps", props);
</script>

<script lang="ts">
export default {
	name: "HBreadcrumb",
};
</script>
