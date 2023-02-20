<div align="center">
  <img width="130px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/w160h160.png">
<h1>HVIEW UI</h1>

<p>Minimalism library on the computer side based on Vue3</p>

<p> English | <a href="https://github.com/ChaiMayor/hview-ui/tree/dev/README.md">
 简体中文 
</a></p>
<p align="center" style="margin-top:24px;">
  <a href="https://www.npmjs.com/package/hview-plus">
    <img src="https://img.shields.io/npm/v/hview-plus">
  </a>
  <a href="https://github.com/ChaiMayor/hview-ui">
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-blue"/>
  </a>
  <a href="https://www.npmjs.com/package/hview-plus">
    <img src="https://img.shields.io/npm/dm/hview-plus">
  </a>
  <!-- <a href="https://www.npmjs.com/package/hview-plus">
    <img src="https://img.shields.io/badge/coverage-82%25-green">
  </a> -->
  <a href="https://github.com/ChaiMayor/hview-ui">
    <img src="https://img.shields.io/badge/license-MIT-green"/>
  </a>
  <br>
</p>

</div>

## 🎃 Intro

Hview is a Minimalism style mobile component library developed based on `Vue3`, fully embracing the `Vue3` ecology, maintained by `Wuhu Takeoff` team.

## ✨ Features

- 🚀 Provides 30+ high quality common components

- 💪 Developed by Chinese people, perfect documentation and logistics support in both Chinese and English

- 🛠️ Support on demand import, reduce packaging volume

- 🛠️ Support theme customization

- 🌍 Support internationalization

- 💪 Support SSR

- 🎯 Built in TypeScript, complete type definition files are available

- 🛠️ Support dark mode

- 🤺 It's a drill ground. It could be useful

- 🔐 Ensure over 80% unit test coverage to ensure stability, safety and reliability

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

> Sometimes, component registration may fail, and you can refresh the page to recover

## 🥇 Technology stack

Core：vue3 + typescript + less + vite

Submit：husky、commitlint、lint-staged

Genre：eslint、prettier、stylelint、postcss-less

Dir：ls-lint

Document：vitepress

I18n：vue-i18n

Test：vitest、@vue/test-utils、jsdom、c8

CI/CD：gulp、github actions、release-it

## 🎪 Project case

Project name：Hview-ui

Implied meaning：Usually, the first code to learn programming is Hello World, and it is the first time for us to develop component libraries. Our component libraries are also developed and learned by referring to existing component libraries. view has the meaning of observation and is a homophone with vue, so we combine h and view together. We named the library hview-ui to indicate that this new library will learn the advantages of integrating the existing library, hoping to present you with a good library project.

Logo：

<p style="text-align:left;">
  <img width="100px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/hview-logo.png">
</p>

Design：view also means perspective and view. Here, three patterns in different view directions are used to form the H to make it a three-dimensional and multi-faceted effect.

Implied meaning：There are still many imperfections in our component library. We sincerely hope that the majority of developers can use our component library and give us feedback and questions. We will humbly accept and then accept your opinions, and continue to iterate the project that satisfies the developers.

## 👋 Contributors

Thanks for all their contributions 🐝！

<a href="https://github.com/ChaiMayor/hview-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ChaiMayor/hview-ui" />
</a>

## 🎑 Join us

By using the fly book scan code to join the development group chat, later in the group to share the knowledge of the development of the component library, how to solve the problems encountered, as well as the development process introduction and so on...

Those who have the ability and ideas can participate in our open source project after completing and submitting the development of the three components according to the introduction

For those who have ideas but are not able at present, we will provide some reference articles and video materials in the group. We hope that you can participate in the development of our project as soon as possible after you have achieved some success through study and practice

Finally, I hope you can make a fortune and give us a free star. Thank you again 😘

<p style="text-align:left;">
  <img width="200px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/hview-ui.png">
</p>

> Reference article：[How do I contribute code to an open source project? - zhihu.com](https://zhuanlan.zhihu.com/p/359612351)

## 🌸 Thanks

The project draws on the following projects.

- [Element Plus](https://element-plus.gitee.io/zh-CN/component/button.html)
- [kitty-ui](https://gitee.com/geeksdidi/kittyui)
- [brain-ui](https://github.com/longyanjiang/brain-ui)

## 📄 License

[MIT License](https://opensource.org/licenses/MIT) © 2023-PRESENT [ChaiMayor](https://github.com/NelsonYong)
