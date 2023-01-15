import { App } from "vue";
import Button from "./button.vue";
import { withInstall } from "@hview/utils";
// import { withInstall } from "../../../utils";

Button.install = (app: App) => {
  withInstall(Button);
  app.component(Button.name, Button);
};

export default Button;
