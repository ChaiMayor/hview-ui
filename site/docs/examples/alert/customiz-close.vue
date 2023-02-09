<template>
  <h-alert title="unclosable alert" type="success" :closable="false" />
  <h-alert title="customized close-text" type="info" close-text="Gotcha" />
  <h-alert title="alert with callback" type="warning" @close="hello" />
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert("Hello World!");
};
</script>
<style scoped>
.h-alert {
  margin: 20px 0 0;
}
.h-alert:first-child {
  margin: 0;
}
</style>
