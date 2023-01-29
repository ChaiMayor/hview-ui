# Quick Start

This section describes how to use Hview UI in your project.

## Usage

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

```ts
// main.ts
import { createApp } from "vue";
// The HviewUI style file is automatically imported
import HviewPlus from "hview-plus";
import App from "./App.vue";

const app = createApp(App);

app.use(HviewPlus);
app.mount("#app");
```

### Manually import

```ts
// main.ts
import { createApp } from "vue";
import { Button } from "hview-plus";
import App from "./App.vue";

const app = createApp(App);

app.use(Button);
app.mount("#app");
```
