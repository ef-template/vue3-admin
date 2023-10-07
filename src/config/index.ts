const config: Config = {
  themeColor: "#009c43",
  baseURL: import.meta.env.VITE_BASE_SERVER_URL as string,
  microAppName: import.meta.env.VITE_MICROAPPNAME as string,
  homePath: import.meta.env.VITE_HOME_PATH as string,
};

export default config;
