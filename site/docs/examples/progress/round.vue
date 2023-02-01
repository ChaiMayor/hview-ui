<template>
  <div class="demo-progress">
    <h-progress type="circle" :percentage="0" />
    <h-progress type="circle" :percentage="50" />
    <h-progress type="circle" :percentage="100" status="success" />
  </div>
</template>

<script></script>

<style scoped>
.demo-progress .h-progress--circle {
  margin-right: 15px;
}
</style>
