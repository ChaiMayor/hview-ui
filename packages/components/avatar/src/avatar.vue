<template>
  <span class="h-avatar" :class="styleClass" :style="sizeStyle">
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      :style="fitStyle"
      @error="handleError" />
    <h-icon v-else-if="icon" :name="icon"> </h-icon>
    <slot v-else />
  </span>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { avatarEmits, avatarProps } from "./avatar";
import type { CSSProperties } from "vue";

const props = defineProps(avatarProps);
const emit = defineEmits(avatarEmits);

const hasLoadError = ref(false);

const styleClass = computed(() => {
  return {
    [`h-avatar-size--${props.size}`]: typeof props.size !== "number",
    [`h-avatar--${props.shape}`]: props.shape,
    [`h-avatar-border--${props.border}`]: props.border,
  };
});

const sizeStyle = computed<CSSProperties>(() => {
  const { size } = props;
  return typeof size === "number"
    ? { width: size + "px", height: size + "px" }
    : {};
});

const fitStyle = computed<CSSProperties>(() => ({
  objectFit: props.fit,
}));

watch(
  () => props.src,
  () => (hasLoadError.value = false),
);

function handleError(e: Event) {
  hasLoadError.value = true;
  emit("error", e);
}
</script>

<script lang="ts">
export default {
  name: "HAvatar",
};
</script>
