import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import hview from "hview";
app.use(hview);

// import { Button } from "hview";
// app.use(Button);

// import Button from "hview/es/button";
// app.use(Button);

app.mount("#app");
