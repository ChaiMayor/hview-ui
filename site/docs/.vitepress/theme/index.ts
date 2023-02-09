import Theme from "vitepress/theme";
import "./style/vitepress.less";
// import "prismjs/themes/prism.css";
import "element-plus/dist/index.css";
import "./style/themes.less";
// @ts-ignore
import hpCode from "../home/hp-source-code.vue";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: true });

import hp from "hview-plus";
import "@hview-plus/theme-chalk";
// import "hview-plus/theme-chalk/style.css";

import axios from "axios";

const getVersionHp = () => {
  axios.get("https://registry.npmjs.org/hview-plus").then((res: any) => {
    const versions = Object.keys(res.data.versions);
    const version = "v" + versions[versions.length - 1];
    const el: HTMLSpanElement = document.querySelector(
      ".VPNavBarMenu .VPFlyout .text",
    )!;
    if (el) el.childNodes[1].nodeValue = version;
    // @ts-ignore
    // let screenEl = (HTMLSpanElement = document.querySelector(".VPNavScreen .button-text"));
    // @ts-ignore
    // if (screenEl) screenEl.innerText = version;
  });
};

// @ts-ignore
import MyLayout from "../home/layout.vue";
import { inBrowser } from "vitepress";

export default {
  ...Theme,

  enhanceApp({ app, router }) {
    if (inBrowser) {
      app.use(hp);

      // refer: https://github.com/vuejs/vitepress/issues/1910
      router.onBeforeRouteChange = () => {
        NProgress.start();
      };
      router.onAfterRouteChanged = () => {
        NProgress.done();
      };
    }

    app.component("HCode", hpCode);
  },

  setup() {
    if (inBrowser) {
      getVersionHp();
    }
  },

  Layout: MyLayout,
};
