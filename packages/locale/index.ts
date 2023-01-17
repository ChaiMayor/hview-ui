export { default as en } from "./lang/en";
export { default as zhCn } from "./lang/zh-cn";
export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair;
};
export type Language = {
  name: string;
  hp: TranslatePair;
};

import en from "./lang/en";
import zhCn from "./lang/zh-cn";

const handleLang = () => {
  const before = [en, zhCn];
  const message: any = {};
  before.reduce((pre, cur: Language) => {
    pre[cur.name] = cur.hp;
    return pre;
  }, message);
  return message;
};

import { createI18n } from "vue-i18n";
import { App } from "vue";

// <p>{{ $t("colorpicker.confirm") }}</p>   模板代码
// import { getCurrentInstance } from "vue";  更改使用i18n使用模式
// const a = getCurrentInstance() as any;
// setTimeout(() => {
//   a.ctx.$i18n.locale = "en";
// }, 0);

export default {
  install(app: App) {
    const i18n = createI18n({
      locale: "zh-cn",
      messages: handleLang(),
    });
    app.use(i18n);
  },
};
