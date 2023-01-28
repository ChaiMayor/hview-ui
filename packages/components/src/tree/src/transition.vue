<template>
  <transition v-on="on">
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
    const inlineStyle = (dom: HTMLDivElement, styles: any) => {
      if (!dom) return;
      for (const key in Object.keys(styles)) {
        if (Object.prototype.hasOwnProperty.call(styles, key)) {
          dom.style[key] = styles[key];
        }
      }
    };
    const getStyle = (el: any) => {
      if (el.currentStyle) {
        return el.currentStyle;
      }
      return el.currentStyle || getComputedStyle(el);
    };
    const transition = (config: any) => {
      const style = {
        transition: `all ${config.duration}s ${config.animate}`,
        overflow: "hidden",
      };
      return {
        beforeEnter(el: HTMLDivElement) {
          el.dataset.paddingTop = getStyle(el).paddingTop; // el.style.paddingTop
          el.dataset.paddingBottom = getStyle(el).paddingBottom; // el.style.paddingBottom
          inlineStyle(el, Object.assign(style, { height: 0 }));
        },
        enter(el: HTMLDivElement) {
          setTimeout(() => {
            inlineStyle(el, {
              height: `${el.scrollHeight}px`,
              paddingTop: el.dataset.paddingTop,
              paddingBottom: el.dataset.paddingBottom,
            });
          }, 0);
        },
        afterEnter(el: HTMLDivElement) {
          inlineStyle(el, { height: "", overflow: "" });
        },
        beforeLeave(el: HTMLDivElement) {
          inlineStyle(
            el,
            Object.assign(style, {
              height: `${el.scrollHeight}px`,
              overflow: "",
            }),
          );
        },
        leave(el: HTMLDivElement) {
          setTimeout(() => {
            inlineStyle(el, { height: 0, overflow: "hidden" });
          }, 0);
        },
        afterLeave(el: HTMLDivElement) {
          inlineStyle(el, { height: 0, overflow: "hidden" });
        },
      };
    };
    return {
      on: transition(props),
    };
  },
});
</script>
