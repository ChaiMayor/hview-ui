import DefaultTheme from "vitepress/theme";
import HviewPlus from '../../../../packages/components/src/index'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(HviewPlus)
  },
};