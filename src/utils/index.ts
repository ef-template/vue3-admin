import cssPropertyEnum from "@/enums/cssPropertyEnum";

export const isIE = "ActiveXObject" in window;

export const setCssProperty = (name: string, value: string): void => {
  // 获取文档的根元素，即:root
  const root = document.documentElement;
  // 使用setProperty方法来修改--color-primary的值
  root.style.setProperty(name, value);
};

export const getCssProperty = (name: string): string => {
  // 获取根元素的计算样式对象
  const rootStyles = window.getComputedStyle(document.documentElement);
  // 获取--color-primary的值
  return rootStyles.getPropertyValue(name);
};

export const setThemeColor = (color: string): void => {
  setCssProperty(cssPropertyEnum.COLOR_PRIMARY, color);
};

export const getThemeColor = (): string => {
  return getCssProperty(cssPropertyEnum.COLOR_PRIMARY);
};
