<template>
  <div class="demo-progress">
    <h-progress :percentage="50" />
    <h-progress :percentage="100" :format="format" />
    <h-progress :percentage="100" status="success" />
    <h-progress :percentage="100" status="warning" />
    <h-progress :percentage="50" status="error" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage: number) =>
  percentage === 100 ? "√" : `${percentage}%`;
</script>

<style scoped>
.demo-progress .h-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
