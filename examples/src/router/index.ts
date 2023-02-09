import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../App.vue") },
  { path: "/about", component: () => import("../views/temp1.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
