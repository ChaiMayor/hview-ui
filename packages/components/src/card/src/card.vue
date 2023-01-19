<template>
  <div class="h-card" :class="styleClass">
    <div v-if="$slots.header || header" class="h-card-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="h-card-body" :style="bodyStyle">
      <slot />
    </div>
    <div v-if="$slots.handle" class="h-card-handle">
      <slot name="handle">{{ handle }}</slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import "../style/index.less";
import { computed, defineComponent } from "vue";
import { cardProps } from "./card";
const props = defineProps(cardProps);
const styleClass = computed(() => {
  return {
    [`h-card-shadow--${props.shadow}`]: props.shadow,
  };
});
</script>

<script lang="ts">
export default defineComponent({
  name: "HCard",
});
</script>
