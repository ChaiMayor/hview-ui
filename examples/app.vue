<template>
  <div class="wrapper">
    <div class="sidebar-nav">
      <div class="sidebar-menu">
        <teleport to="body">
          <router-link to="/" title="HviewPlus">
            <div class="logo-img"></div>
          </router-link>
        </teleport>
        
        <!-- 右侧边栏导航区域 -->
        <div v-for="(menu, i) in navBar" class="menu" :key="i">
          <dl><dt># 常用组件</dt></dl>
          <router-link :to="menu.routePath">
            {{menu.title}}
          </router-link>
        </div>
      </div>
    </div>
    <View />
  </div>
</template>
<script lang="ts">
import { data } from './router/data'
import View from './views/View.vue'
export default {
  components: {
    View,
  },
  setup() {
    const navBar = data
    return {
      navBar
    }
  },
}
</script>
<style lang="less">
</style>