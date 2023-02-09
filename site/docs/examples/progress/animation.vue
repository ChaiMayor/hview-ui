<template>
  <div class="demo-progress">
    <h-progress :percentage="50" :indeterminate="true" />
    <h-progress :percentage="100" :format="format" :indeterminate="true" />
    <h-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? "√" : `${percentage}%`);
</script>
<style scoped>
.demo-progress .h-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
