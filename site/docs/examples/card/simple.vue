<template>
  <h-card class="card">
    <div v-for="i in 4" :key="i">{{ "Content " + i }}</div>
  </h-card>
</template>

<style>
.card {
  width: 400px;
}
</style>
