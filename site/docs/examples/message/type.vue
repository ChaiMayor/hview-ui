<template>
  <h-button type="success" @click="SuccessClick">success</h-button>
  <h-button type="warning" @click="WarningClick">warning</h-button>
  <h-button type="info" @click="InfoClick">info</h-button>
  <h-button type="danger" @click="ErrorClick">error</h-button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance.appContext.config.globalProperties;
const SuccessClick = () => {
  $message({
    message: "This is a success type.",
    type: "success",
  });
};
const WarningClick = () => {
  $message({
    message: "This is a warning type.",
    type: "warning",
  });
};

const InfoClick = () => {
  $message({
    message: "This is a info type.",
    type: "info",
  });
};

const ErrorClick = () => {
  $message({
    message: "This is a error type.",
    type: "error",
  });
};
</script>
