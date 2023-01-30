<template>
  <div class="container">
    <h-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
      <template #extra>
        <h-button type="primary">Back</h-button>
      </template>
    </h-result>
    <h-result icon="warning" title="Success Tip" sub-title="Please follow the instructions">
      <template #extra>
        <h-button type="primary">Back</h-button>
      </template>
    </h-result>
    <h-result icon="error" title="Success Tip" sub-title="Please follow the instructions">
      <template #extra>
        <h-button type="primary">Back</h-button>
      </template>
    </h-result>
    <h-result icon="info" title="Success Tip" sub-title="Please follow the instructions">
      <template #extra>
        <h-button type="primary">Back</h-button>
      </template>
    </h-result>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  .con {
    margin: 2px auto;
    display: block;
  }
}
</style>
