<template>
	<transition
		name="h-message-fade"
		@before-leave="onClose"
		@after-leave="$emit('destroy')">
		<div
			:class="[
				'h-message',
				type ? `h-message--${type}` : '',
				center ? 'is-center' : '',
			]"
			v-show="visible">
			<i :class="`h-message__icon h-icon-${type}`"></i>
			<slot>
				<p v-if="!dangerouslyUseHTMLString" class="h-message__content">{{
					message
				}}</p>
				<p v-else v-html="message" class="h-message__content"></p>
			</slot>
			<i
				v-if="showClose"
				class="h-message__closeBtn h-icon-close1"
				@click="close"></i>
		</div>
	</transition>
</template>
<script setup lang="ts">
import { MessageProps } from "./message";
import { toRefs, onMounted, ref, onUnmounted } from "vue";
const props = defineProps(MessageProps);
const {
	message,
	showClose,
	type,
	duration,
	center,
	dangerouslyUseHTMLString,
	onClose,
} = toRefs(props);

let visible = ref(false);
let timer: any = null;

if (!type.value) type.value = "info";

const startTimer = () => {
	visible.value = true;
	if (duration.value > 0) {
		timer = setTimeout(() => {
			visible.value = false;
		}, duration.value);
	}
};

const close = () => {
	visible.value = false;
};

onMounted(() => {
	startTimer();
});

onUnmounted(() => {
	clearTimeout(timer);
});
</script>
<script lang="ts">
export default {
	name: "HMessage",
};
</script>
