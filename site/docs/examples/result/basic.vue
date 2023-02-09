<template>
  <div class="container">
    <div class="item">
      <h-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions">
        <template #extra>
          <h-button type="primary">Back</h-button>
        </template>
      </h-result>
    </div>
    <div class="item">
      <h-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions">
        <template #extra>
          <h-button type="primary">Back</h-button>
        </template>
      </h-result>
    </div>
    <div class="item">
      <h-result
        icon="error"
        title="Error Tip"
        sub-title="Please follow the instructions">
        <template #extra>
          <h-button type="primary">Back</h-button>
        </template>
      </h-result>
    </div>
    <div class="item">
      <h-result icon="info" title="Info Tip" sub-title="Using slot as subtitle">
        <template #extra>
          <h-button type="primary">Back</h-button>
        </template>
      </h-result>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    width: 45%;
  }
}
</style>
