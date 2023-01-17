import Theme from "vitepress/theme";
import "./style/vitepress.less";

import hp from "hview-plus";

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(hp);
  },
};
