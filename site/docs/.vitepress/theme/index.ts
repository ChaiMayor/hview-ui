import Theme from "vitepress/theme";
import "./style/vitepress.less";

import hv from "hview";

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(hv);
  },
};
