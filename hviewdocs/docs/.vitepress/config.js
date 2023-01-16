export default {
  title: 'Hviewui', //站点标题
  description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "HviewPlus",
    logo: "../public/logo1.png",
    nav: [
      { text: "快速开始", link: "/guild/quickstart.md" },
      { text: "组件", link: "/examples/button/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/ChaiMayor/hview-ui" }],
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guild/': [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "国际化",
              link: "/xx",
            },
          ],
        },
      ],
      'examples/': [
        {
          text: "基础组件",
          items: [
            {
              text: "Button 按钮",
              link: "/examples/button/",
            },
          ],
        }
      ],
    }
  },
}