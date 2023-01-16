import { App } from "vue";
import components from "./src/index";

export * from "./src/index";
export default {
  install: (app: App) => {
    components.forEach((comp) => app.use(comp));
  },
};
