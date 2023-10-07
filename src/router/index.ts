import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import NProgress from "./nprogress-config";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import CONFIG from "@/config";

const routes = setupLayouts(generatedRoutes);

/**
 * 设置默认路由
 */
routes.unshift({
  path: "/",
  redirect: CONFIG.homePath,
});

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/" + CONFIG.microAppName : "/"),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
