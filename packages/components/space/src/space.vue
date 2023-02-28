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
  props: SpaceProps,
  setup(props) {
    const $slots = useSlots();
    const slotList = ref([]);
    const hStyle = computed(() => {
      return {
        display: "flex",
        gap: `${props.size[0]}px ${props.size[1]}px`,
        "flex-direction": props.direction === "row" ? "row" : "column",
        "flex-wrap": props.wrap ? "wrap" : "nowrap",
      };
    });
    if ($slots.default().length !== 1) {
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
    } else {
      return () => [
        h(
          "div",
          {
            className: "space",
            style: hStyle.value,
          },
          $slots.default()[0].children,
        ),
      ];
    }
  },
});
</script>
