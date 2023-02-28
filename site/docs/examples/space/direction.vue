<template>
  <h-space wrap direction="column">
    <h-card :header="'Title'" style="width: 200px">
      <div v-for="i in 4" :key="i">{{ "Content " + i }}</div>
      <template #handle>
        <h-button>click</h-button>
      </template>
    </h-card>
    <h-card :header="'Title'" style="width: 200px">
      <div v-for="i in 4" :key="i">{{ "Content " + i }}</div>
      <template #handle>
        <h-button>click</h-button>
      </template>
    </h-card>
    <h-card :header="'Title'" style="width: 200px">
      <div v-for="i in 4" :key="i">{{ "Content " + i }}</div>
      <template #handle>
        <h-button>click</h-button>
      </template>
    </h-card>
  </h-space>
</template>
