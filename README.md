# 项目简介
一心堂后台通用模板（Vue2.7 + Element2 + Ts + Vite）

# 环境要求
node >= 16.20

# 包管理
pnpm（如果未安装请先安装：npm install -g pnpm）

# 安装依赖
```bash
pnpm i
```

# 启动项目
```bash
pnpm run dev
```
# 构建项目
```bash
pnpm run build
```

# 目录结构
```text
|-- .husky（commit校验配置）
|-- .vscode（vscode编辑器配置）
|-- public
|   |-- favicon.svg
|   `-- logo.webp
|-- src
|   |-- api（接口）
|   |-- components（组件）
|   |-- composables（组合式API）
|   |-- config（配置文件入口）
|   |-- enums（枚举）
|   |-- layouts（布局）
|   |-- router（路由）
|   |-- styles（样式）
|   |-- utils（工具）
|   |-- views（视图）
|   |   |-- [...all].vue（404路由视图）
|   |-- App.vue（入口组件）
|   `-- main.ts（入口程序）
|-- test（测试目录）
|-- types（ts全局类型）
|-- .commitlintrc.js（commitlint配置）
|-- .cz-config.js（ commit 自定义配置）
|-- .editorconfig（编辑器配置）
|-- .env.development（环境变量）
|-- .env.development（开发环境变量）
|-- .env.production（生成环境变量）
|-- .eslintignore（eslint忽略文件）
|-- .eslintrc.json（eslint配置文件）
|-- .gitignore（git忽略文件）
|-- .npmrc（npm行为配置文件）
|-- .prettierignore（prettier忽略文件）
|-- .prettierrc.js（prettier代码样式格式化插件配置）
|-- README.md
|-- auto-imports.d.ts（自动导入组件插件生成，不用关注）
|-- commitlint.config.js（commitlint配置）
|-- components.d.ts （自动导入组件插件生成，不用关注）
|-- index.html（模板入口）
|-- package.json
|-- pnpm-lock.yaml
|-- prettier.config.js（prettier配置）
|-- tsconfig.json（ts配置）
|-- tsconfig.node.json
|-- unocss.config.ts（unocss配置）
`-- vite.config.ts（vite配置）
```

# 目录命名规范
1. ts 类型定义文件统一命名“types”
<br/>待补充

# 文件命名规范
<br/>待补充

# 代码规范
1. 变量名采用小驼峰
<br/>待补充

# Vue框架建议
1. 注意响应式变量的使用，组件的 props 尽量保持稳定,v-for中尽量少访问响应式变量
2. 减少大型不可变数据的响应性开销（ shallowRef() 和 shallowReactive()）
3. 避免不必要的组件抽象（无渲染组件）
4. 合理抽离组件（根据实际情况决定是否懒加载导入组件）
<br/>待补充

# git规范
注意：每次写代码前先执行 git pull 
<br/>
准备commit代码时建议按照以下步骤执行
1. git pull （如果出现冲突先执行git stash缓存本地代码，在git pull拉取代码，最后执行git stash pop弹出缓存并解决冲突文件后执行第2步骤）（或者借助vscode等编辑器处理冲突）
2. git add .
3. `pnpm run commit`
4. git push

# Vue2.7说明
本项目使用vue2.7版本，注意事项请参照官方文档[https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html)

# Element-Ui
本项目使用element-ui组件库,组件文档：[https://element.eleme.cn/#/zh-CN](https://element.eleme.cn/#/zh-CN)
<br/>
已使用[vite-plugin-components](https://github.com/antfu/vite-plugin-components)实现组件自动导入，不需使用import导入。
<br/>
配置详见vite.config.ts

# 路由与布局
本项目使用[vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)与[vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)插件实现路由自动注册，配置详见vite.config.ts。
<br/>
1. 页面自动注册说明：
<br/>
src/views目录或者任意子目录中的vue文件自动注册页面。（不包括components目录或任意子目录中的vue文件 && 不包括任意目录中"_"开始的vue文件）
<br/>
2. 布局自动注册说明：
<br/>
src/layouts目录或者任意子目录中的vue文件自动注册布局。（不包括components目录或任意子目录中的vue文件 && 不包括任意目录中"_"开始的vue文件）
<br/>
3. 页面布局说明：
<br/>
页面布局默认使用src/layouts/default.vue（可在vite.config.ts中修改默认值），页面中可使用\<route\>配置布局或其他信息，例如：
```vue
<route>
  {
    meta: {
      layout: 'empty'
    }
  }
</route>
```

# 组件自动注册插件
本项目使用[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)与[vite-plugin-components](https://github.com/antfu/vite-plugin-components)实现组件自动注册，配置详见vite.config.ts
1. 'vue', 'vue/macros', 'vue-router', '@vueuse/core'已实现API自动注册。
2. element-ui组件库已实现自动注册。
3. src/components目录或任意子目录下非"_"开始的vue组件已实现自动注册。

# UnoCSS
本项目使用[UnoCss](https://github.com/antfu/unocss)作为样式解决方案，配置见unocss.config.ts

# 代码质量检测与样式格式化规范
本项目使用eslint与prettier，配置详见.prettierrc.js与.eslintrc.json
> 编辑器建议使用vscode（保存文件会自动格式化，当然commit前也会自动修复，或者使用pnpm run lint:fix手动修复）

# 其他
1. 本项目使用@vitejs/plugin-legacy插件支持IE11
