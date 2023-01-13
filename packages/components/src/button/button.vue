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
        [`h-button--${props.type}`]: props.type
    }
})
</script>

<style lang='less' scoped>

</style>