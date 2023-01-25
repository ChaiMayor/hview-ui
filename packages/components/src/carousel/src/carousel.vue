<template>
  <div
    ref="root"
    class="h-carousel"
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <div class="h-carousel-container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button
          v-show="(arrow === 'always' || hover) && (props.loop || activeIndex > 0)"
          type="button"
          class="h-carousel-arrow h-carousel-arrow-left"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex - 1)">
          <h-icon name="arrow-left"></h-icon>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button
          v-show="(arrow === 'always' || hover) && (props.loop || activeIndex < items.length - 1)"
          type="button"
          class="h-carousel-arrow h-carousel-arrow-right"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex + 1)">
          <h-icon name="arrow-right"></h-icon>
        </button>
      </transition>
      <slot />
    </div>
    <ul v-if="indicatorPosition !== 'none'" class="h-carousel-indicators" :class="indicatorsClasses">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="h-carousel-indicator"
        :class="{
          'h-carousel-indicator-active': index === activeIndex,
          [`h-carousel-indicator--${props.direction}`]: props.direction,
        }"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)">
        <button class="h-carousel-indicator-button" :class="indicatorClasses">
          <span v-if="hasLabel">{{ item.props.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import "../style/index.less";
import { computed, unref, defineComponent } from "vue";
import { carouselEmits, carouselProps } from "./carousel";
import { useCarousel } from "./utils";

const props = defineProps(carouselProps);
const emit = defineEmits(carouselEmits);
const {
  root,
  activeIndex,
  arrowDisplay,
  hasLabel,
  hover,
  items,
  handleButtonEnter,
  handleButtonLeave,
  handleIndicatorClick,
  handleMouseEnter,
  handleMouseLeave,
  setActiveItem,
  prev,
  next,
  throttledArrowClick,
  throttledIndicatorHover,
} = useCarousel(props, emit, "Hcarousel");

const carouselClasses = computed(() => {
  return {
    [`h-carousel--${props.direction}`]: props.direction,
  };
});

const indicatorsClasses = computed(() => {
  return {
    [`h-carousel-indicators--${props.direction}`]: props.direction,
    [`h-carousel-indicators-labels`]: unref(hasLabel),
    [`h-carousel-indicators-outside`]: props.indicatorPosition === "outside",
  };
});
const indicatorClasses = computed(() => {
  return {
    [`h-carousel-indicator-button--${props.indicatorType}`]: props.indicatorType,
  };
});

defineExpose({
  setActiveItem,
  prev,
  next,
});
</script>

<script lang="ts">
export default defineComponent({
  name: "HCarousel",
});
</script>
