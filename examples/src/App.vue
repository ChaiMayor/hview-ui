<template>
  <div>
    <h-input placeholder="请输入" type="text" iconBefore="success"></h-input>
  <h-input placeholder="请输入" type="text" iconAfter="info"></h-input>
    <h-button type="primary" @click="showMessage">test</h-button>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
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