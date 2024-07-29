// 創建一個路由器，並暴露出去

// 1. 引入 createRouter
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 2. 引入要呈現的組件
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import productsRoutes from "./productsRoutes";
import NoteView from "../views/NoteView.vue";
import ContactMe from "@/views/ContactMe.vue";
import Disclaimer from "@/views/Disclaimer.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/note",
      name: "note",
      component: NoteView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactMe,
    },
    {
      path: "/disclaimer",
      name: "disclaimer",
      component: Disclaimer,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy,
    },
    ...(productsRoutes as RouteRecordRaw[]),
  ],
});

export default router;
