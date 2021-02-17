import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./index.css";
import router from "./router";
import store from "./store";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
