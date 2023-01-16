import { App } from "vue";
import components from "./src/index";

export * from "./src/index"; // 将index分别暴露的内容再次分别暴露出去
export default {
  install: (app: App) => {
    components.forEach((comp) => app.use(comp));
  },
};
