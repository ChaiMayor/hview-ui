<template>
  <div class="h-descriptions" :class="{ [`h-descriptions--${size}`]: size }">
    <div
      v-if="title || extra || $slots.title || $slots.extra"
      class="h-descriptions-header">
      <div class="h-descriptions-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="h-descriptions-extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div class="h-descriptions-body">
      <table
        class="h-descriptions-table"
        :class="{ [`is-bordered-des`]: border }">
        <tbody>
          <template v-for="(row, index) in getRows()" :key="index">
            <h-descriptions-row :row="row" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { provide, useSlots } from "vue";
import { flattedChildren } from "@hview-plus/utils";

import HDescriptionsRow from "./descriptions-row.vue";
import { descriptionsKey } from "./token";
import { descriptionProps } from "./descriptions";

const props = defineProps(descriptionProps);

const slots = useSlots();

provide(descriptionsKey, props);

const filledNode = (node, span, count, isLast = false) => {
  if (!node.props) {
    node.props = {};
  }
  if (span > count) {
    node.props.span = count;
  }
  if (isLast) {
    // set the last span
    node.props.span = span;
  }
  return node;
};

const getRows = () => {
  const children = flattedChildren(slots.default?.()).filter(
    (node) => node?.type?.name === "HDescriptionsItem",
  );
  const rows = [];
  let temp = [];
  let count = props.column;
  let totalSpan = 0; // all spans number of item

  children.forEach((node, index) => {
    const span = node.props?.span || 1;

    if (index < children.length - 1) {
      totalSpan += span > count ? count : span;
    }

    if (index === children.length - 1) {
      // calculate the last item span
      const lastSpan = props.column - (totalSpan % props.column);
      temp.push(filledNode(node, lastSpan, count, true));
      rows.push(temp);
      return;
    }

    if (span < count) {
      count -= span;
      temp.push(node);
    } else {
      temp.push(filledNode(node, span, count));
      rows.push(temp);
      count = props.column;
      temp = [];
    }
  });

  return rows;
};
</script>

<script lang="ts">
export default {
  name: "HDescriptions",
};
</script>
