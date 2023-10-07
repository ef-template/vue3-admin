import { type App, createApp } from "vue";
import AppComponent from "./App.vue";
import router from "@/router";
// import "element-plus/dist/index.css";
import "@unocss/reset/tailwind.css";
import "@/styles/css-property.css";
import "@/styles/main.css";
import "@/styles/element-ui-reset.css";
import "uno.css";
import store from "@/store";
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";

let app: App;

function render(_props = {}) {
  app = createApp(AppComponent);
  app.use(store).use(router);
  router.isReady().then(() => {
    app.mount("#app");
  });
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount(_props) {
    app!.unmount();
  },
  update(_props) {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
