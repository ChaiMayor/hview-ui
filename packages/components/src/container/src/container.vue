<template>
  <section class="h-container" :class="styleClass">
    <slot />
  </section>
</template>
<script lang="ts" setup>
import "../style/index.less";
import { computed, useSlots } from "vue";
import { ContainerProps } from "./container";
import type { Component, VNode } from "vue";

const props = defineProps(ContainerProps);
const styleClass = computed(() => {
  return {
    "h-container-horizontal": isVertical.value,
  };
});
const slots = useSlots();
const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  } else if (props.direction === "horizontal") {
    return false;
  }
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default();
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name;
      return tag === "HHeader" || tag === "HFooter";
    });
  } else {
    return false;
  }
});
</script>

<script lang="ts">
export default {
  name: "HContainer",
};
</script>
