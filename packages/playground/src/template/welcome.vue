<script setup lang="ts">
import { ref } from "vue";

const msg = ref("Hello HviewUI!");
</script>

<template>
	<h-button type="primary">{{ msg }}</h-button>
</template>
