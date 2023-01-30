<template>
  <div class="h-result">
    <div :class="iconClass">
      <slot name="icon">
        <h-icon :name="props.icon" :class="iconClass"></h-icon>
      </slot>
    </div>
    <div v-if="title || $slots.title" class="h-result-title">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots['sub-title']" class="h-result-sub-title">
      <slot name="sub-title">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" class="h-result-extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "../style/index.less";
import { computed, defineProps } from "vue";
import { ResultProps } from "./result";
const props = defineProps(ResultProps);
const iconClass = computed(() => {
  console.log(props);
  return {
    [`h-result--${props.icon}`]: props.icon,
  };
});
</script>

<script lang="ts">
export default {
  name: "HResult",
};
</script>
