<template>
  <div>
    <button class="h-button" :class="styleClass">
    <slot />
  </button>
  </div>
</template>
<script lang='ts'>
import './style/index.less'
import { computed } from 'vue';
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) =>
        ['default', 'primary', 'success', 'warning', 'danger'].includes(value),
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value: string) => ['large', 'normal', 'small', 'mini'].includes(value),
    },
    icon: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
  },
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`h-button--${props.type}`]: props.type,
        'is-plain':props.plain,
        'is-round':props.round,
        'is-disabled':props.disabled,
        [`h-button--${props.size}`]: props.size,
      }
    })

    return {
      styleClass,
    }
  }
}
</script>
