<template>
  <h-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon />
  <h-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon />
  <h-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon />
  <h-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon />
</template>
<style scoped>
.h-alert {
  margin: 20px 0 0;
}
.h-alert:first-child {
  margin: 0;
}
</style>
