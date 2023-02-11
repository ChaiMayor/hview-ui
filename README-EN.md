<div align="center">
  <img width="130px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/w160h160.png">
<h1>HVIEW UI</h1>

<p>Minimalism library on the computer side based on Vue3</p>

<p> English | <a href="https://github.com/ChaiMayor/hview-ui/tree/dev/README-EN.md">
 简体中文 
</a></p>

<p align="center"  style="margin-top:24px;">
  <a href="https://www.npmjs.com/package/hview-plus">
    <img src="https://img.shields.io/npm/v/hview-plus">
  </a>
  <a href="https://github.com/ChaiMayor/hview-ui">
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-blue"/>
  </a>
  <a href="https://www.npmjs.com/package/hview-plus">
    <img src="https://img.shields.io/npm/dm/hview-plus">
  </a>
  <a href="https://github.com/ChaiMayor/hview-ui">
    <img src="https://img.shields.io/badge/license-MIT-green"/>
  </a>
  <br>
</p>
</div>

## 🎃 Intro

Hview is a Minimalism style mobile component library developed based on `Vue3`, fully embracing the `Vue3` ecology, maintained by `Wuhu Takeoff` team.

## ✨ Features

- 🚀 Provides 20+ high quality common components
- 💪 Developed by Chinese people, perfect documentation and logistics support in both Chinese and English
- 🛠️ Support on demand import, reduce packaging volume
- 🛠️ Support theme customization
- 🌍 Support internationalization
- 💪 支持 SSR
- 🎯 Built in TypeScript, complete type definition files are available
- 🛠️ Support dark mode
- 🤺 It's a drill ground. It could be useful

## 📦 Install

```bash
npm i hview-plus
```

## 🤹‍♀️ Used

```js
// main.ts
import { createApp } from "vue";
import HviewPlus from "hview-plus";
import "hview-plus/theme-chalk/style.css";

import App from "./App.vue";

const app = createApp(App);

app.use(HviewPlus);
app.mount("#app");
```

Project document：[chai-mayor.gitee.io/hview-ui](https://chai-mayor.gitee.io/hview-ui)

## 🤺 Playground

Edit components online at [Hview UI Playground](https://playground.zhishiyu.online/)

## 🥇 Technology stack

Core：vue3 + typescript + less + vite

Submit：husky、commitlint、lint-staged

Genre：eslint、prettier、stylelint、postcss-less、ls-lint

Document：vitePress

I18n：vue-i18n

Test：vitest、@vue/test-utils

CICD：release-it、gulp、github actions

## 🎪 Project case

Project name：Hview-ui

Implied meaning：Often the first code to learn programming is hello world, and it is the first time for us to develop component libraries. Our component libraries are also developed and learned by referring to existing component libraries, and view has the meaning of observation, perspective, view, etc., so we combine h and view together, and give the component library its name: hview-ui, meaning that our new component library by learning the advantages of integrating existing component libraries, hope to present you with a good component library project.

Logo：

<p style="text-align:left;">
  <img width="100px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/hview-logo.png">
</p>

Design：View has the meaning of perspective and view. Here, three patterns in different view directions are used to form the H.

Implied meaning：There are still many imperfections in our component library. We sincerely hope that the majority of developers can use our component library and give us feedback and questions. We will humbly accept and then accept your opinions, and continue to iterate the project that satisfies the developers.

## 👋 Contributors

Thanks for all their contributions 🐝！

<a href="https://github.com/ChaiMayor/hview-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ChaiMayor/hview-ui" />
</a>

## 🌸 Thanks

The project draws on the following projects.

- [Element Plus](https://element-plus.gitee.io/zh-CN/component/button.html)
- [kitty-ui](https://gitee.com/geeksdidi/kittyui)
- [brain-ui](https://github.com/longyanjiang/brain-ui)

## 📄 License

[MIT License](https://opensource.org/licenses/MIT) © 2023-PRESENT [ChaiMayor](https://github.com/NelsonYong)
