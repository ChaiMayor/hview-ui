import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import hviewPlus from "hview-plus";
import "@hview-plus/theme-chalk";
// import "hview-plus/theme-chalk/style.css";
app.use(hviewPlus);

import router from "./router";
app.use(router);

// import { Button, Link } from "hview-plus";
// app.use(Button);
// app.use(Link);

app.mount("#app");
