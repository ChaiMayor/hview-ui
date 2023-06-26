<template>
  <div class="h-switch-default" :class="sizeClass">
    <span
      v-if="inactiveText && !inlinePrompt"
      class="h-switch-label h-switch-label-left"
      :class="[!curChecked ? 'is-active' : '']">
      {{ inactiveText }}
    </span>
    <span
      v-if="inactiveIcon && !inlinePrompt"
      class="h-switch-label h-switch-label-left"
      :class="[!curChecked ? 'is-active' : '']">
      <i :class="`h-icon-${inactiveIcon}`"></i>
    </span>
    <div class="h-switch-content" :class="styleClass" @click="handleSwitch">
      <span
        class="core"
        :class="[curChecked ? 'on' : 'off']"
        :style="coreStyle">
        <span
          v-if="inlinePrompt"
          class="h-switch-inner"
          :class="`h-switch-inner--${props.size}`">
          <span v-if="activeText">{{
            curChecked ? activeText : inactiveText
          }}</span>
          <span v-if="activeIcon">
            <i v-if="!curChecked" :class="`h-icon-${activeIcon}`"></i>
            <i v-else :class="`h-icon-${inactiveIcon}`"></i>
          </span>
        </span>
      </span>
    </div>
    <span
      class="h-switch-label h-switch-label-right"
      :class="[curChecked ? 'is-active' : '']"
      v-if="activeText && !inlinePrompt">
      {{ activeText }}
    </span>
    <span
      class="h-switch-label h-switch-label-right"
      :class="[curChecked ? 'is-active' : '']"
      v-if="activeIcon && !inlinePrompt">
      <i :class="`h-icon-${activeIcon}`"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { SwitchProps } from "./switch";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps(SwitchProps);
const curChecked = ref(props.modelValue);

const styleClass = computed(() => {
  return {
    "is-disabled": props.disabled,
  };
});

const sizeClass = computed(() => {
  return {
    [`h-switch--${props.size}`]: props.size,
  };
});

const coreStyle = computed(() => {
  let newColor = curChecked.value ? props.activeColor : props.inactiveColor;
  return {
    backgroundColor: newColor,
  };
});

const handleSwitch = () => {
  if (props.disabled) return;
  curChecked.value = !curChecked.value;
  emit("update:modelValue", curChecked.value);
  emit("change", curChecked.value);
};
</script>

<script lang="ts">
export default {
  name: "HSwitch",
};
</script>
