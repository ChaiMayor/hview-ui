<template>
	<transition name="modal-fade">
		<div
			class="modal-backdrop"
			v-if="props.show"
			:style="{ zIndex, backgroundColor: bgColor }">
			<div
				class="modal"
				role="dialog"
				aria-labelledby="modalTitle"
				aria-describedby="modalDescription">
				<header class="modal-header" id="modalTitle" v-if="title">
					<slot name="header"> This is the default title! </slot>
					<button
						type="button"
						class="btn-close"
						@click="handleClick"
						aria-label="Close modal">
						x
					</button>
				</header>

				<section class="modal-body" id="modalDescription">
					<button
						type="button"
						class="btn-close"
						@click="handleClick"
						aria-label="Close modal"
						v-if="!title && !footer">
						x
					</button>
					<slot name="body"> This is the default body! </slot>
				</section>

				<footer class="modal-footer" v-if="footer">
					<slot name="footer"> This is the default footer! </slot>
					<button
						type="button"
						class="btn-green"
						@click="handleClick"
						aria-label="Close modal">
						Close Modal
					</button>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import "../style/index.less";
import { modalProps } from "./modal";
const props = defineProps(modalProps);

const emits = defineEmits(["onClose", "update:show"]);

const handleClick = () => {
	//点击关闭按钮，关闭modal组件
	emits("update:show", !props.show);
	//向外分发事件,以便于做一些自定义操作.
	emits("onClose");
};
</script>
<script lang="ts">
export default {
	name: "HModal",
};
</script>
<style lang="less" scoped></style>
