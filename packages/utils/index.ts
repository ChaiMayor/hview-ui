import type { Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T>(comp: T) => {
  // (comp as SFCWithInstall<T>).install = (app: App) => {
  //   //注册组件
  //   app.component((comp as any).name, comp as any);
  //   // app.component(comp as any);
  // };
  return comp as SFCWithInstall<T>;
};
