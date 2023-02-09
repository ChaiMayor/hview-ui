<template>
  <div class="demo">
    <div class="block">
      <h-avatar icon="user" />
    </div>
    <div class="block">
      <h-avatar
        src="https://img1.baidu.com/it/u=3898423942,4076211846&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
    </div>
    <div class="block">
      <h-avatar> user </h-avatar>
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}
.avatar {
  margin: auto 0;
}
</style>
