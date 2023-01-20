import { App } from "vue";
import { onMounted } from "vue";
import components from "./src/index";
import i18n from "@hview-plus/locale";
import "@hview-plus/theme"; // 引入全局颜色变量
export * from "./src/index"; // 将index分别暴露的内容再次分别暴露出去

export default {
  install: (app: App) => {
    components.forEach((comp) => app.use(comp));
    onMounted(() => {
      app.use(i18n); // 注册i18n
    });
  },
};
