<div align="center">
  <img width="130px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/w160h160.png">
<h1>HVIEW UI</h1>

<p>基于 Vue3 的 Minimalism 风格的电脑端组件库</p>

<p><a href="https://github.com/ChaiMayor/hview-ui/tree/dev/README-EN.md">
 English 
</a> | 简体中文 </p>

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
  <a href="https://github.com/ChaiMayor/hview-ui">
    <img src="https://img.shields.io/badge/license-MIT-green"/>
  </a>
  <br>
</p>
</div>

## 🎃 介绍

Hview 是一个基于 `Vue3` 开发的 Minimalism 风格移动端组件库，全面拥抱 `Vue3` 生态，由 `芜湖起飞` 团队进行维护。

## ✨ 特性

- 🚀 提供 20+ 个高质量通用组件
- 💪 由国人开发，完善的中英文文档和后勤保障
- 🛠️ 支持按需引入，减少打包体积
- 🛠️ 支持主题定制
- 🌍 支持国际化
- 💪 支持 SSR
- 🎯 使用 TypeScript 构建，提供完整的类型定义文件
- 🛠️ 支持暗黑模式
- 🤺 演练场，大有用武之地

## 📦 安装

```bash
npm i hview-plus
```

## 🤹‍♀️ 使用

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

项目文档：[chai-mayor.gitee.io/hview-ui](https://chai-mayor.gitee.io/hview-ui)

## 🤺 演练场

在 [Hview UI Playground](https://playground.zhishiyu.online/) 对组件进行在线编辑。

## 🥇 技术栈

核心：vue3 + typescript + less + vite

代码提交：husky、commitlint、lint-staged

代码风格：eslint、prettier、stylelint、postcss-less、ls-lint

文档库：vitePress

国际化：vue-i18n

测试：vitest、@vue/test-utils

CICD：release-it、gulp、github actions

## 🎪 项目情况

项目名称：Hview-ui

名称寓意：往往学习编程的第一句代码都是 hello world，而我们开发组件库也是第一次开发，我们的组件库也是参照已有的组件库进行开发和学习，而 view 有观察的意思，所以我们将 h 和 view 融合在了一起，给组件库其名为：hview-ui，寓意我们这个新生的组件库通过学习融合现有组件库的优点，希望能为大家呈现出一个不错的组件库项目

<p style="text-align:left;">
  <img width="100px" style="margin-bottom:24px;" src="https://oss.zhishiyu.online/common/hview-logo.png">
</p>

logo 设计：view 有透视、视图的意思，这里就用了三个不同视图方向的图案组成这个 H

logo 寓意：我们的组件库还存在很多不完善的地方，非常希望广大开发人员能够使用我们组件库和给我们进行反馈和提问，我们会虚心接受，然后接纳大家的意见，不断迭代出让开发者满意的项目

## 👋 开发成员

感谢参与开发的每一位成员 🐝！

<a href="https://github.com/ChaiMayor/hview-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ChaiMayor/hview-ui" />
</a>

## 🌸 感谢

该项目主要借鉴于以下这些项目。

- [Element Plus](https://element-plus.gitee.io/zh-CN/component/button.html)
- [kitty-ui](https://gitee.com/geeksdidi/kittyui)
- [brain-ui](https://github.com/longyanjiang/brain-ui)

## 📄 License

[MIT License](https://opensource.org/licenses/MIT) © 2023-PRESENT [ChaiMayor](https://github.com/NelsonYong)
