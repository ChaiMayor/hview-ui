import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import hviewPlus from "hview-plus";
app.use(hviewPlus);

import router from "./router";
app.use(router);

// import { Button } from "hview-plus";
// app.use(Button);

// import Button from "hview/es/button";
// app.use(Button);

app.mount("#app");
