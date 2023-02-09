<template>
  <transition
    @before-enter="OnbeforeEnter"
    @enter="Onenter"
    @after-enter="OnafterEnter"
    @before-leave="OnbeforeLeave"
    @leave="Onleave"
    @after-leave="OnafterLeave">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HCollapseTransition",
  props: {
    duration: {
      type: Number,
      default: 0.5,
    },
    animate: {
      type: String,
      default: "ease",
    },
  },
  setup(props) {
    const getStyle = (el: any) => {
      if (el.currentStyle) {
        return el.currentStyle;
      }
      return el.currentStyle || getComputedStyle(el);
    };
    const inlineStyle = (dom: HTMLDivElement, styles: any) => {
      if (!dom) return;
      for (const key in styles) {
        if (Object.prototype.hasOwnProperty.call(styles, key)) {
          (dom.style as any)[key] = styles[key];
        }
      }
    };
    const style = {
      transition: `all ${props.duration}s ${props.animate}`,
      overflow: "hidden",
    };
    const OnbeforeEnter = (el: HTMLDivElement) => {
      el.dataset.paddingTop = getStyle(el).paddingTop;
      el.dataset.paddingBottom = getStyle(el).paddingBottom;
      inlineStyle(el, Object.assign(style, { height: 0 }));
    };
    const Onenter = (el: HTMLDivElement) => {
      setTimeout(() => {
        inlineStyle(el, {
          height: `${el.scrollHeight}px`,
          paddingTop: el.dataset.paddingTop,
          paddingBottom: el.dataset.paddingBottom,
        });
      }, 0);
    };
    const OnafterEnter = (el: HTMLDivElement) => {
      inlineStyle(el, { height: "", overflow: "" });
    };
    const OnbeforeLeave = (el: HTMLDivElement) => {
      inlineStyle(
        el,
        Object.assign(style, {
          height: `${el.scrollHeight}px`,
          overflow: "",
        }),
      );
    };
    const Onleave = (el: HTMLDivElement) => {
      setTimeout(() => {
        inlineStyle(el, { height: 0, overflow: "hidden" });
      }, 0);
    };
    const OnafterLeave = (el: HTMLDivElement) => {
      inlineStyle(el, { height: 0, overflow: "hidden" });
    };
    return {
      OnbeforeEnter,
      Onenter,
      OnafterEnter,
      OnbeforeLeave,
      Onleave,
      OnafterLeave,
    };
  },
});
</script>
