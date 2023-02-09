import { createApp } from "vue";
import App from "./App.vue";
import "@vue/repl/style.css";

// import { Tag } from "hview-plus";
// import "hview-plus/es/src/tag/style/index.css";

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: "repl",
};

createApp(App).mount("#app");
