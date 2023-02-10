<template>
  <div class="h-space">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, useSlots, h, ref, computed } from "vue";
import { SpaceProps } from "./space";

export default defineComponent({
  name: "HSpace",
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Array,
      default: () => [10, 10],
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const $slots = useSlots();
    const slotList = ref([]);
    const hStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap: !props.inline
          ? `${props.size[0]}px`
          : `${props.size[0]}px ${props.size[1]}px`,
        "flex-direction": props.inline ? "inherit" : "column",
        "flex-wrap": props.wrap ? "wrap" : "nowrap",
        width: "fit-content",
      };
    });

    $slots.default().forEach((item) => {
      slotList.value.push(
        h(
          "div",
          {
            className: "h-space-item",
            style: "width: fit-content",
          },
          item,
        ),
      );
    });
    return () => [
      h(
        "div",
        {
          className: "space",
          style: hStyle.value,
        },
        slotList.value,
      ),
    ];
  },
});
</script>
