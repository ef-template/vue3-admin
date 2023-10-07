<template>
  <!-- <div id="root"> -->
  <!-- <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200"> -->
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
  <!-- </main> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs'
</script>
