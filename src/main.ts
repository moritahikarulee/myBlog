// 引入 createApp 用於創建應用
import { createApp } from "vue";
// 引入 router
import router from "./router/router";
// (1) 引入 pinia
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; // 引入 App 根組件
import App from "./App.vue";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import VueGtagPlugin from "vue-gtag";
import { G_ID } from "@/config";
import "@/main.scss";

// 創建一個應用
const app = createApp(App);
// (2) 創建 pinia
const pinia = createPinia();

// 使用路由器
app.use(router);
// (3) 使用 pinia
app.use(pinia);
app.use(ElementPlus);

// 使用 vue-gtag
const cookieConsent = localStorage.getItem("cookieConsent");

if (cookieConsent === "true") {
  app.use(VueGtagPlugin, {
    config: { id: G_ID },
  });
} else {
  window.addEventListener("cookie-consent-changed", () => {
    const updatedConsent = localStorage.getItem("cookieConsent");
    if (updatedConsent === "true") {
      app.use(VueGtagPlugin, {
        config: { id: G_ID },
      });
    }
  });
}

// 掛載整個應用到 app 容器中
app.mount("#app");
