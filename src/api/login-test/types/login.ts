export interface LoginRequestData {
  /** admin 或 editor */
  username: "admin" | "editor";
  /** 密码 */
  password: string;
  /** 验证码 */
  code: string;
}

export interface LoginTokenData {
  token: string;
}

export interface LoginUserInfoData {
  username: string;
  roles: string[];
}

export type LoginCodeResponseData = ApiResponseData<string>;

export type LoginResponseData = ApiResponseData<LoginTokenData>;

export type UserInfoResponseData = ApiResponseData<LoginUserInfoData>;
