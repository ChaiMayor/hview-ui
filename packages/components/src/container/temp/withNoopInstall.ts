// eslint-disable-next-line vue/prefer-import-from-vue
import { NOOP } from "@vue/shared";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
export default <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = NOOP;
  return comp as SFCWithInstall<T>;
};
