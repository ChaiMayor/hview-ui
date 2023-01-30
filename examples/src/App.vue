<template>
  <div class="container">
    <h-result title="404" sub-title="Sorry, request error">
      <template #icon>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
      </template>
      <template #extra>
        <h-button type="primary">Back</h-button>
      </template>
    </h-result>
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
