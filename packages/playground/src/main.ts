import { createApp } from "vue";
import App from "./App.vue";
import "@vue/repl/style.css";
import hp from "hview-plus";

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: "repl",
};

createApp(App).use(hp).mount("#app");
