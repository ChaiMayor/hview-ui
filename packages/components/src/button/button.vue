<template>
    <button class="h-button" :class="styleClass">
        <slot />
    </button>
</template>

<script setup lang='ts'>
import './style/index.less'
import { computed } from 'vue';
import { buttonProps } from './types';
const props = defineProps(buttonProps)
const styleClass = computed(() => {
    return {
        [`h-button--${props.type}`]: props.type,
        'is-plain':props.plain,
        'is-round':props.round,
        'is-disabled':props.disabled,
        [`h-button--${props.size}`]: props.size,
    }
})
</script>

<style lang='less' scoped>

</style>