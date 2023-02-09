<template>
  <h-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange">
    全选
  </h-checkbox>
  <div style="margin: 10px 0"></div>
  <h-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <h-checkbox v-for="city in cities" :label="city" :key="city">
      {{ city }}
    </h-checkbox>
  </h-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cities = ["北京", "上海", "广州", "深圳"];
const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["上海", "北京"]);

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: any) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
</script>
