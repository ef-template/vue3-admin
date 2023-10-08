import { defineStore } from "pinia";
import store from "@/store";

export const useUserStore = defineStore(
  "user",
  () => {
    // TODO vue 2.7 组合式API在TS中的用法
    const username: Ref<string> = ref<string>("");

    /** 获取用户详情 */
    // const getInfo = async () => {
    //   const { data } = await getUserInfoApi()
    //   username.value = data.username
    // }

    /**
     * test
     */
    const setUsername = (value: string) => {
      username.value = value;
    };

    return { username, setUsername };
  },
  {
    // 持久化
    persist: true,
  }
);

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}
