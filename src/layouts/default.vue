<script setup lang="ts">
import Header from "./components/header.vue";
import Sidebar from "./components/sidebar.vue";
</script>

<template>
  <div class="h-100% w-100%" flex flex-col>
    <div class="h-50px w-100% border-#eee" flex-shrink-0 overflow-hidden border-b>
      <Header />
    </div>
    <div min-h-0 flex flex-auto>
      <div class="h-100% w-200px border-#eee" flex-shrink-0 overflow-x-hidden overflow-y-auto border-r>
        <Sidebar />
      </div>
      <div class="h-100%" min-w-0 flex-auto overflow-x-hidden overflow-y-auto p-10px>
        <router-view />
      </div>
    </div>
  </div>

  <!-- element bug 有点多 -->
  <!-- <el-container direction="vertical" style="height: 100%; border: 1px solid #eee">
    <el-header height="50px" style="border-bottom: 1px solid #eee;">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container> -->
</template>
