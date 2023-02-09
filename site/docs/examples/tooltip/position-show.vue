<template>
  <div class="Container">
    <div class="row center">
      <h-tooltip class="box-item" content="top-start" placement="top-start">
        <h-button type="default" plain>top-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="top" placement="top">
        <h-button type="default" plain>top</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="top-end" placement="top-end">
        <h-button type="default" plain>top-end</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left-start" placement="left-start">
        <h-button type="default" plain>left-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right-start" placement="right-start">
        <h-button type="default" plain>right-start</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left" placement="left">
        <h-button type="default" plain>left</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right" placement="right">
        <h-button type="default" plain>right</h-button>
      </h-tooltip>
    </div>
    <div class="row">
      <h-tooltip class="box-item" content="left-end" placement="left-end">
        <h-button type="default" plain>left-end</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="right-end" placement="right-end">
        <h-button type="default" plain>right-end</h-button>
      </h-tooltip>
    </div>
    <div class="row center">
      <h-tooltip
        class="box-item"
        content="bottom-start"
        placement="bottom-start">
        <h-button type="default" plain>bottom-start</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="bottom" placement="bottom">
        <h-button type="default" plain>bottom</h-button>
      </h-tooltip>
      <h-tooltip class="box-item" content="bottom-end" placement="bottom-end">
        <h-button type="default" plain>bottom-end</h-button>
      </h-tooltip>
    </div>
  </div>
</template>

<style>
.Container {
  width: 600px;
}
.Container .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Container .center {
  justify-content: center;
}

.Container .box-item {
  margin: 10px;
}
</style>
