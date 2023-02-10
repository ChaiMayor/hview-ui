import { createApp } from "vue";
import "uno.css";
import App from "./App.vue";
import "@vue/repl/style.css";

import el from "element-plus";
// import "hview-plus/es/src/tag/style/index.css";
import "element-plus/dist/index.css";

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: "repl",
};

createApp(App).use(el).mount("#app");
