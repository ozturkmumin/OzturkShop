import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/shoes",
    component: () => import("@/views/Shoes.vue"),
  },
  {
    path: "/women",
    component: () => import("@/views/Women.vue"),
  },
  {
    path: "/men",
    component: () => import("@/views/Men.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
