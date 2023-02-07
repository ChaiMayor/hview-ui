// @ts-nocheck
import { defineComponent, h, inject } from "vue";
import { getNormalizedProps } from "@hview-plus/utils";
import { IDescriptionsInject, IDescriptionsItemInject } from "./token";
import { descriptionsKey } from "./token";

import type { VNode } from "vue";

export default defineComponent({
  name: "HDescriptionsCell",
  props: {
    cell: {
      type: Object,
    },
    tag: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  setup() {
    // 获取父组件注入的参数
    const descriptions = inject(descriptionsKey, {} as IDescriptionsInject);

    return {
      descriptions,
    };
  },
  render() {
    const item = getNormalizedProps(this.cell as VNode) as IDescriptionsItemInject;

    const { border, direction } = this.descriptions;
    const isVertical = direction === "vertical";
    const label = this.cell?.children?.label?.() || item.label;
    const content = this.cell?.children?.default?.();
    const span = item.span;
    const borderLabel = border ? "h-descriptions-bordered-label" : "";
    const borderedCon = border ? "h-descriptions-bordered-content" : "";
    const verticalLabel = isVertical ? "h-descriptions-vertical-label" : "";
    const verticalCon = isVertical ? "h-descriptions-vertical-content" : "";
    const align = item.align ? `is-${item.align}` : "";
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : "" || align;
    const className = item.className;
    const labelClassName = item.labelClassName;
    const style = {
      width: item.width + "px",
      minWidth: item.minWidth + "px",
    };

    switch (this.type) {
      case "label":
        return h(
          this.tag,
          {
            style,
            class: [
              "h-descriptions-cell",
              "h-descriptions-label",
              borderLabel,
              verticalLabel,
              labelAlign,
              labelClassName,
            ],
            colSpan: isVertical ? span : 1,
          },
          label,
        );
      case "content":
        return h(
          this.tag,
          {
            style,
            class: ["h-descriptions-cell", "h-descriptions-content", borderedCon, verticalCon, align, className],
            colSpan: isVertical ? span : span * 2 - 1,
          },
          content,
        );
      default:
        return h(
          "td",
          {
            style,
            class: ["h-descriptions-cell", align],
            colSpan: span,
          },
          [
            h(
              "span",
              {
                class: ["h-descriptions-label", labelClassName],
              },
              label,
            ),
            h(
              "span",
              {
                class: ["h-descriptions-content", className],
              },
              content,
            ),
          ],
        );
    }
  },
});
