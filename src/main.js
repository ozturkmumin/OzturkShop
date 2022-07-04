import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
createApp(App).mount("#app");
const app = createApp(App);
app.use(router);
app.mount("#app");
