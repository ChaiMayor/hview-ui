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
import { useRouter, useData, useRoute } from "vitepress";

export default {
  ...Theme,

  enhanceApp({ app, router, siteData }) {
    app.use(hp);
    app.use(ElementPlus);
    app.component("HCode", hpCode);
    // // refer: https://github.com/vuejs/vitepress/issues/318
    // watch(router.route, () => {
    //   NProgress.start();
    //   nextTick(() => {
    //     NProgress.done();
    //   });
    // });
  },

  setup() {
    const router = useRouter();
    const b = useData();
    const c = useRoute();
    let currPage = "";

    // refer: https://github.com/vuejs/vitepress/issues/318
    watch(router.route, (newVal, oldVal) => {
      NProgress.start();
      // 替换导航标题
      // console.log(router);
      // console.log(window.location);

      // console.log(b);
      // console.log(c);
      currPage = window.location.pathname;

      nextTick(() => {
        NProgress.done();
      });
    });
    // watch(
    //   () => b.lang.value,
    //   (newVal, oldVal) => {
    //     // console.log(currPage);

    //     const curLang = b.lang.value === "zh-CN" ? "/" : "/en-US/";

    //     // console.log(window.location);
    //     console.log(`${window.location.origin}${currPage.replace("/", curLang)}`);

    //     // window.location.href = `${window.location.origin}${currPage.replace("/", curLang)}`;
    //     nextTick(() => {
    //       router.go(`${window.location.origin}${currPage.replace("/", curLang)}`);
    //     });

    //     // console.log(newVal, oldVal);
    //   },
    // );
  },

  Layout: MyLayout,
};
