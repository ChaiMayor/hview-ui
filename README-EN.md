<div align="center">
  <img width="130px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/w160h160.png">
<h1>HVIEW UI</h1>

<p>Minimalism library on the computer side based on Vue3</p>

<p> English | <a href="https://github.com/ChaiMayor/hview-ui/tree/dev/README.md">
 ็ฎไฝไธญๆ 
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

## ๐ Intro

Hview is a Minimalism style computer side component library developed based on `Vue3`, fully embrace `Vue3` ecology, maintained by `Wuhu Takeoff` team.

## โจ Features

- ๐ Provides 30+ high quality common components

- ๐ช Developed by Chinese people, perfect documentation and logistics support in both Chinese and English

- ๐ ๏ธ Support on demand import, reduce packaging volume

- ๐ ๏ธ Support theme customization

- ๐ Support internationalization

- ๐ฏ Built in TypeScript, complete type definition files are available

- ๐ ๏ธ Support dark mode

- ๐คบ It's a drill ground. It could be useful

- ๐ Ensure over 80% unit test coverage to ensure stability, safety and reliability

## ๐ฆ Install

```bash
npm i hview-plus
```

## ๐คนโโ๏ธ Used

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

Project document๏ผ[chai-mayor.gitee.io/hview-ui](https://chai-mayor.gitee.io/hview-ui)

## ๐คบ Playground

Edit components online at [Hview UI Playground](https://playground.zhishiyu.online/)

> Sometimes, component registration may fail, and you can refresh the page to recover

## ๐ฅ Technology stack

Core๏ผvue3 + typescript + less + vite

Submit๏ผhuskyใcommitlintใlint-staged

Genre๏ผeslintใprettierใstylelintใpostcss-less

Dir๏ผls-lint

Document๏ผvitepress

I18n๏ผvue-i18n

Test๏ผvitestใ@vue/test-utilsใjsdomใc8

CI/CD๏ผgulpใgithub actionsใrelease-it

## ๐ช Project case

Project name๏ผHview-ui

Implied meaning๏ผUsually, the first code to learn programming is Hello World, and it is the first time for us to develop component libraries. Our component libraries are also developed and learned by referring to existing component libraries. view has the meaning of observation and is a homophone with vue, so we combine h and view together. Naming the component library hview-ui means that our new component library will learn the advantages of integrating existing component libraries and hopefully present a good component library project for you.

Logo๏ผ

<p style="text-align:left;">
  <img width="100px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/hview-logo.png">
</p>

Design๏ผview also means perspective, view. Here, three patterns in different view directions are used to form the solid H

Implied meaning๏ผThere are still many imperfections in our component library. We sincerely hope that the majority of developers can use our component library and give us feedback and questions. We will humbly accept and then accept your opinions, and continue to iterate the project that satisfies the developers.

## ๐ Contributors

Thanks for all their contributions ๐๏ผ

<a href="https://github.com/ChaiMayor/hview-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ChaiMayor/hview-ui" />
</a>

## ๐ Join us

By using the fly book scan code to join the development group chat, later in the group to share the knowledge of the development of the component library, how to solve the problems encountered, as well as the development process introduction and so on...

Those who have the ability and ideas can participate in our open source project after completing and submitting the development of the three components according to the introduction

For those who have ideas but don't have the ability at present, we will provide some article materials of component library in the group. We hope you can participate in the development of our project after learning and practicing

Finally, I hope you can make a fortune and give us a free star. Thank you again ๐

<p style="text-align:left;">
  <img width="200px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/hview-ui.png">
</p>

> Reference article๏ผ<a href="https://zhuanlan.zhihu.com/p/359612351">How do I contribute code to an open source project? - zhihu.com</a>

## ๐ธ Thanks

The project draws on the following projects.

- [Element Plus](https://element-plus.gitee.io/zh-CN/component/button.html)
- [kitty-ui](https://gitee.com/geeksdidi/kittyui)
- [brain-ui](https://github.com/longyanjiang/brain-ui)

## ๐ License

[MIT License](https://opensource.org/licenses/MIT) ยฉ 2023-PRESENT [ChaiMayor](https://github.com/NelsonYong)
