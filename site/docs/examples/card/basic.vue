<template>
  <h-card class="card">
    <template #header>
      <div class="card-header">
        <div>Title</div>
      </div>
    </template>
    <div v-for="i in 4" :key="i">{{ "Content " + i }}</div>
    <template #handle>
      <div class="card-handle">
        <h-button>handle</h-button>
      </div>
    </template>
  </h-card>
</template>

<style>
.card {
  width: 400px;
}
</style>
