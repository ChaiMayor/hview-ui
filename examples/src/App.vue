<template>
  <div>
    <div class="container">
      <h-tooltip content="这是文字提示" placement="bottom">
        <h-button type="default" plain>right</h-button>
      </h-tooltip>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "./base.less";
</script>
<style scoped>
.container {
  position: relative;
}

.h-button {
  position: absolute;
  left: 100px;
  top: 100px;
}
</style>
