<template>
  <div class="demo-progress">
    <h-progress :text-inside="true" :stroke-width="26" :percentage="10" />
    <h-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="30"
      status="success" />
    <h-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="70"
      status="warning" />
  </div>
</template>

<style scoped>
.demo-progress .h-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
