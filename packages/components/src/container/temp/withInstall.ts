import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
export default <T, E extends Record<string, any>>(comp: T, extra?: E) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
    // 所以要加上这个条件
    const name = (comp as any).name || (comp as any).__name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };

  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      (comp as any)[key] = value;
    }
  }
  console.log("5454545", comp);
  return comp as SFCWithInstall<T> & E;
};
