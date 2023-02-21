<template>
  <div class="mac-container">
    <div class="mac-container__header"></div>
    <div class="mac-container__body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
html.dark {
  .mac-container {
    &__header {
      box-shadow: 0 1px 0 0 rgba(136, 141, 146, 0.3);
    }
  }
}
.mac-container {
  width: 100%;
  height: 100%;
  background-color: var(--vi-mac-bg-color-primary);
  border: 1px solid rgba(28, 31, 35, 0.08);
  box-shadow: 0 8px 40px rgb(39 47 89 / 12%);
  border-radius: 12px;
  overflow: hidden;
  &__header {
    height: 36px;
    border-bottom: 1px solid rgba(28, 31, 35, 0.08);
    background: var(--vi-mac-bg-color-primary)
      url(https://oss.zhishiyu.online/common/mac-container.png) no-repeat;
    background-position: 12px 12px;
  }
  &__body {
    padding: 6px 32px 35px 32px;
  }
}
</style>
