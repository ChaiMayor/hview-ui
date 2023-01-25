<template>
  <div>
    <h-input placeholder="请输入" type="text" iconBefore="success"></h-input>
  <h-input placeholder="请输入" type="text" iconAfter="info"></h-input>
    <h-button type="primary" @click="showMessage">test</h-button>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
// import message from "../../packages/components/src/message/src/index"
const instance = getCurrentInstance()
const { $message } = instance?.appContext.config.globalProperties!;
const showMessage = () => {
  $message({
    message: 'Message!!!',
    type: "info",
    duration: 3000,
    dangerouslyUseHTMLString: true,
  })
}
</script>

<style>
.container {
  width: 600px;
}
.container .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container .center {
  justify-content: center;
}

.container .box-item {
  margin: 10px;
}
</style>