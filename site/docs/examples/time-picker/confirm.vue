<template>
  <h-time-picker
    v-model="value1"
    placeholder="请选择时间"
    confirm
    @on-confirm="onConfirm"></h-time-picker>
  <h-time-picker
    class="time"
    type="timerange"
    v-model="value2"
    placeholder="请选择时间范围"
    confirm></h-time-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref("00:00:00");
const value2 = ref(["00:11:22", "23:33:44"]);
const onConfirm = (val: any) => {
  console.log(val);
};
</script>

<style>
.time {
  margin-left: 30px;
}
</style>
