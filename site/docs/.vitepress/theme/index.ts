import Theme from "vitepress/theme";
import "./style/vitepress.less";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import "prismjs/themes/prism.css";
import "./style/themes.less";
import hpCode from "../src/hp-source-code.vue";
import { watch, nextTick } from "vue";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: true });

import hp from "hview-plus";

import MyLayout from "../src/layout.vue";
import { useRouter, useData, useRoute, inBrowser } from "vitepress";

export default {
  ...Theme,

  enhanceApp({ app }) {
    console.log(inBrowser);

    if (inBrowser) {
      app.use(hp);
    }
    app.use(ElementPlus);
    app.component("HCode", hpCode);
  },

  setup() {
    const router = useRouter();
    // refer: https://github.com/vuejs/vitepress/issues/318
    watch(router.route, (newVal, oldVal) => {
      NProgress.start();
      nextTick(() => {
        NProgress.done();
      });
    });
  },

  Layout: MyLayout,
};
