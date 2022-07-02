import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
import { createApp } from "vue";
createApp(App).mount("#app");
