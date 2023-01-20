import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { data } from './data'
import Home from '../views/Home.vue'

const routes:Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component:Home,  
  },
]

data.forEach((item: any) => {
  const title = item.title.split(' ').reverse() .join(' ')
  routes.push({
    path: item.routePath,
    name: item.componentName,
    meta: {
      title,
    },
    // component: md,
    component: () => import(`../../packages/components/src/${item.componentPath}.vue`),
  })
})


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router