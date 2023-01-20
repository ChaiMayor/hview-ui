<template>
  <div class="ViewButton">
    <h1>基础用法</h1>
    <div>
      <h-button>默认按钮</h-button>
      <h-button type="primary">主要按钮</h-button>
      <h-button type="success">成功按钮</h-button>
      <h-button type="info">信息按钮</h-button>
      <h-button type="warning">警告按钮</h-button>
      <h-button type="danger">危险按钮</h-button>
    </div>
    <br>
    <br>
    <div>
      <h-button plain>朴素按钮</h-button>
      <h-button type="primary" plain>主要按钮</h-button>
      <h-button type="success" plain>成功按钮</h-button>
      <h-button type="info" plain>信息按钮</h-button>
      <h-button type="warning" plain>警告按钮</h-button>
      <h-button type="danger" plain>危险按钮</h-button>
    </div>
    <br>
    <br>
    <div>
      <h-button round>圆角按钮</h-button>
      <h-button type="primary" round>主要按钮</h-button>
      <h-button type="success" round>成功按钮</h-button>
      <h-button type="info" round>信息按钮</h-button>
      <h-button type="warning" round>警告按钮</h-button>
      <h-button type="danger" round>危险按钮</h-button>
    </div>
    <br>
    <br>
    <h1>禁用状态</h1>
    <div class="Show">
      <h-button disabled>禁用按钮</h-button>
      <h-button type="primary" disabled>主要按钮</h-button>
      <h-button type="success" disabled>成功按钮</h-button>
      <h-button type="info" disabled>信息按钮</h-button>
      <h-button type="warning" disabled>警告按钮</h-button>
      <h-button type="danger" disabled>危险按钮</h-button>
    </div>
    <br>
    <br>
    <div>
      <h-button disabled>禁用按钮</h-button>
      <h-button type="primary" disabled plain>主要按钮</h-button>
      <h-button type="success" disabled plain>成功按钮</h-button>
      <h-button type="info" disabled plain>信息按钮</h-button>
      <h-button type="warning" disabled plain>警告按钮</h-button>
      <h-button type="danger" disabled plain>危险按钮</h-button>
    </div>
    <br>
    <br>
    <h1>按钮类型</h1>
    <div>
      <h-button>默认按钮</h-button>
      <h-button size="medium">中等按钮</h-button>
      <h-button size="small">小型按钮</h-button>
      <h-button size="mini">超小按钮</h-button>
    </div>
  </div>
</template>
<style lang="less">
.ViewButton {
  div {
    display: flex;
    justify-content: space-between;
  }
}
</style>