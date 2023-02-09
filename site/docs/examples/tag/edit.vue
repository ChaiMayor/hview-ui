<template>
  <h-tag
    v-for="tag in dynamicTags"
    :key="tag"
    class="tag"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)">
    {{ tag }}
  </h-tag>
  <h-input
    placeHolder=" + New Tag "
    v-model="inputValue"
    class="input"
    size="small"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const inputValue = ref("");
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputValue.value = "";
};
</script>

<style scoped>
.tag {
  margin-left: 5px;
}
.input {
  width: 100px;
  margin-left: 10px;
  display: inline-block;
}
</style>
