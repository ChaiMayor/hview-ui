<template>
  <div class="h-empty">
    <div class="h-empty-image" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <empty-img />
      </slot>
    </div>
    <div class="h-empty-description">
      <slot v-if="$slots.description" name="No data" />
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="h-empty-bottom">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "../style/index.less";
import { computed } from "vue";
import EmptyImg from "./empty-img.vue";
import { emptyProps } from "./empty";

import type { CSSProperties } from "vue";

const props = defineProps(emptyProps);

const emptyDescription = computed(() => props.description || "description");
const imageStyle = computed<CSSProperties>(() => ({
  width: props.imageSize ? `${props.imageSize}px` : "",
}));
</script>

<script lang="ts">
export default {
  name: "HEmpty",
};
</script>
