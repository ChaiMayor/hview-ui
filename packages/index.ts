import { App } from "vue";
export * from "@hview-plus/components";
import components from "@hview-plus/components";
import i18n from "@hview-plus/locale";

export default {
  install: (app: App) => {
    // @ts-ignore
    components.forEach((comp) => app.use(comp));
    app.use(i18n); // 注册i18n
  },
};
