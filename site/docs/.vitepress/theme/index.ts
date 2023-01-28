import Theme from "vitepress/theme";
import "./style/vitepress.less";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import "prismjs/themes/prism.css";
import "./style/themes.less";
import hpCode from "../src/hp-source-code.vue";

import hp from "hview-plus";

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(hp);
    app.use(ElementPlus);
    app.component("HCode", hpCode);
  },
};
