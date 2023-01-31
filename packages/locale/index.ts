import enUS from "locale/lang/en-US";
import zhCn from "locale/lang/zh-CN";
import { createI18n } from "vue-i18n";
import { App } from "vue";

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair;
};
export type Language = {
  name: string;
  hp: TranslatePair;
};

const handleLang = () => {
  const before = [enUS, zhCn];
  const message: any = {};
  before.reduce((pre, cur: Language) => {
    pre[cur.name] = cur.hp;
    return pre;
  }, message);
  return message;
};

// <p>{{ $t("colorpicker.confirm") }}</p>   模板代码
// import { getCurrentInstance } from "vue";  更改使用i18n使用模式
// const instance = getCurrentInstance() as any;
// setTimeout(() => {
//   instance.ctx.$i18n.locale = "en-US";
// }, 0);

export default {
  install(app: App) {
    const i18n = createI18n({
      locale: localStorage.getItem("hp_lang") || "zh-CN",
      messages: handleLang(),
    });
    app.use(i18n);
  },
};
