import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./index.css";
import router from "./router";
import store from "./store";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ mirror: true, once: false });

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const toastOptions = {
  hideProgressBar: true,
  timeout: 2500,
  closeButton: false,
};

import VueClickAway from "vue3-click-away";

createApp(App)
  .use(store)
  .use(router)
  .use(VueClickAway)
  .use(Toast, toastOptions)
  .mount("#app");
