/// <reference types="vite/client" />

/** 声明 vite 环境变量的类型 */
declare interface ViteEnv {
  readonly VITE_MICROAPPNAME: string;
  readonly VITE_BASE_SERVER_URL_PROXY: string;
  readonly VITE_BASE_SERVER_URL: string;
  readonly VITE_PUBLIC_PATH: string;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
