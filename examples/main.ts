import { createApp } from "vue";
import App from "./app.vue";
import "./style/base.less";

import HViewPlus from "../packages/components/src";
const app = createApp(App);

app.use(HViewPlus).mount("#app");
