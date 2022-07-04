import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/Man.vue"),
  },
  {
    path: "/Women",
    component: () => import("@/components/Women.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
