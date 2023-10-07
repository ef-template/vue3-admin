import type * as Login from "./types/login";
import { request } from "@/utils/http";
import CONFIG from "@/config";

/** 获取登录验证码 */
export function getLoginCodeApi(): Promise<Login.LoginCodeResponseData> {
  return request<Login.LoginCodeResponseData>({
    url: `${CONFIG.baseURL}/login/code`,
    method: "get",
  });
}

/** 登录并返回 Token */
export function loginApi(data: Login.LoginRequestData): Promise<Login.LoginResponseData> {
  return request<Login.LoginResponseData>({
    url: `${CONFIG.baseURL}/users/login`,
    method: "post",
    data,
  });
}

/** 获取用户详情 */
export function getUserInfoApi(): Promise<Login.UserInfoResponseData> {
  return request<Login.UserInfoResponseData>({
    url: `${CONFIG.baseURL}/users/info`,
    method: "get",
  });
}
