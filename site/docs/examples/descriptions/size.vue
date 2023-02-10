<template>
  <h-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    size="large"
    border>
    <template #extra>
      <h-button type="primary">Edit</h-button>
    </template>
    <h-descriptions-item>
      <template #label>
        <div class="cell-item"> Username </div>
      </template>
      Desain
    </h-descriptions-item>
    <h-descriptions-item>
      <template #label>
        <div class="cell-item"> Telephone </div>
      </template>
      13500000001
    </h-descriptions-item>
    <h-descriptions-item>
      <template #label>
        <div class="cell-item"> Place </div>
      </template>
      CN
    </h-descriptions-item>
    <h-descriptions-item>
      <template #label>
        <div class="cell-item"> Remark </div>
      </template>
      <h-tag size="small">School</h-tag>
    </h-descriptions-item>
    <h-descriptions-item>
      <template #label>
        <div class="cell-item"> Address </div>
      </template>
      Chinese
    </h-descriptions-item>
  </h-descriptions>

  <h-descriptions
    class="margin-top"
    title="Without border"
    :column="3"
    size="small">
    <template #extra>
      <h-button type="primary">Edit</h-button>
    </template>
    <h-descriptions-item label="Username">Desain</h-descriptions-item>
    <h-descriptions-item label="Telephone">13500000001</h-descriptions-item>
    <h-descriptions-item label="Place">CN</h-descriptions-item>
    <h-descriptions-item label="Remark">
      <h-tag size="small">School</h-tag>
    </h-descriptions-item>
    <h-descriptions-item label="Address">Chinese</h-descriptions-item>
  </h-descriptions>
</template>

<style scoped>
.h-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
