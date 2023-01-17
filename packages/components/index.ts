import { App } from "vue";
import components from "./src/index";
import i18n from "@hview-plus/locale";

export * from "./src/index"; // 将index分别暴露的内容再次分别暴露出去

export default {
  install: (app: App) => {
    app.use(i18n); // 注册i18n
    components.forEach((comp) => app.use(comp));
  },
};
