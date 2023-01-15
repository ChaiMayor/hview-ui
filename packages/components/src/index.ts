import { App } from "vue";
import Button from "./button";

const components = [Button];

function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}

export { Button, install };

export default { install };

// const component = components[key];
// app.component("h" + component.name, component);
