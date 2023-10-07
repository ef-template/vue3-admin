<script setup lang="ts">
import { type Ref } from "vue";
import { type Route } from "vue-router";

const route: Route = useRoute();

const activeMenu: Ref<string> = ref<string>("");

function selectedMenu() {
  activeMenu.value = route.path;
}

watch(
  () => route.path,
  (_path) => {
    selectedMenu();
  }
  // {
  //   immediate: true
  // }
);

onMounted(() => {
  selectedMenu();
});
</script>

<template>
  <el-menu :default-openeds="['1', '2']" :router="true" :default-active="activeMenu">
    <el-sub-menu index="1">
      <template #title> <i class="el-icon-message" />基本组件 </template>
      <el-menu-item index="/test/button"> Button </el-menu-item>
      <el-menu-item index="/test/icon"> Icon </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title> <i class="el-icon-message" />表单组件 </template>
      <el-menu-item index="/test/form"> Form </el-menu-item>
      <el-menu-item index="/test/table"> Table </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
