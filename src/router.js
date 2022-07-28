import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/chair",
    component: () => import("@/views/Chair.vue"),
  },
  {
    path: "/Bedroom",
    component: () => import("@/views/Bedroom.vue"),
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
