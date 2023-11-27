/// <reference types="vitest" />

import path from "node:path";
import { type ConfigEnv, type UserConfigExport, loadEnv } from "vite";
// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Layouts from "vite-plugin-vue-layouts";
import Pages from "vite-plugin-pages";
import legacy from "@vitejs/plugin-legacy";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import qiankun from "vite-plugin-qiankun";
// Gzip压缩
import compressPlugin from "vite-plugin-compression";
// 构建产物分析
import { visualizer } from "rollup-plugin-visualizer";
import manualChunks from "./.build/manualChunks";
import { include, exclude } from "./.build/optimize";

// import { ViteEnv } from "./types/env";

/** 配置项文档：https://cn.vitejs.dev/config */
export default (configEnv: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ViteEnv;
  console.log({ configEnv, viteEnv, NODE_ENV: process.env.NODE_ENV });
  // 对接qiankun，详见qiankun配置
  const useDevMode = configEnv.mode === "development";
  const isProd = configEnv.mode === "production";

  return {
    optimizeDeps: {
      include,
      exclude,
    },
    server: {
      // 端口
      port: 8888,
      // 热更新
      hmr: true,
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      host: true, // host: "0.0.0.0"
      /** 是否自动打开浏览器 */
      open: false,
      /** 跨域设置允许 */
      cors: true,
      /** 端口被占用时，是否直接退出 */
      strictPort: false,
      /** 接口代理 */
      proxy: {
        // "/api": {
        // 	target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
        // 	changeOrigin: true,
        // 	rewrite: path => path.replace(/^\/api/, "")
        // }
        [viteEnv.VITE_BASE_SERVER_URL]: {
          target: viteEnv.VITE_BASE_SERVER_URL_PROXY, // easymock
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp("\\" + viteEnv.VITE_BASE_SERVER_URL), ""),
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks,
        },
      },
      // 生产环境移除console,debugger(需要先安装npm i -D terser),但是比Esbuild（默认）慢20-40倍，不建议
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: true,
      // 		drop_debugger: true
      // 	}
      // },
      // 启用/禁用 gzip 压缩大小报告,提高构建速度
      reportCompressedSize: false,
    },
    // // qiankun 生产环境需要指定运行域名作为base （未验证） https://github.com/tengmaoqing/vite-plugin-qiankun
    // base: "http://xxx.com/",
    base: viteEnv.VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      // https://github.com/tengmaoqing/vite-plugin-qiankun
      qiankun(viteEnv.VITE_MICROAPPNAME, { useDevMode }),

      vue(),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        dirs: [{ dir: "src/views", baseRoute: "" }],
        exclude: ["**/components/**/*.vue", "**/_*.vue"],
        extensions: ["vue"],
        /**
         * Import routes directly or as async components
         * @default 'root index file => "sync", others => "async"'
         */
        // importMode: ImportMode | ImportModeResolver;
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDir: "src/layouts",
        defaultLayout: "default",
        exclude: ["**/components/**/*.vue", "**/_*.vue"],
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: "css" })],
        imports: ["vue", "vue-router", "@vueuse/core"],
        dts: true,
        // dirs: ['./src/composables/*.ts'], // TODO 未生效
        vueTemplate: true,
        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: true, // Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "css" })],
        dts: true,
        globs: ["src/components/**/!(_)*.vue"],
      }),

      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss({
        transformers: [transformerVariantGroup(), transformerDirective()],
      }),
      // gzip 压缩
      isProd
        ? compressPlugin({
            //gzip静态资源压缩
            verbose: true, // 默认即可
            disable: false, //开启压缩(不禁用)，默认即可
            deleteOriginFile: false, //删除源文件
            threshold: 10240, //压缩前最小文件大小
            algorithm: "gzip", //压缩算法
            ext: ".gz", //文件类型
          })
        : null,
      // 构建产物包大小分析
      isProd ? visualizer() : null,
    ],

    // https://github.com/vitest-dev/vitest
    test: {
      environment: "jsdom",
    },
  };
};

// https://vitejs.dev/config/
// export default defineConfig();
