import { series, parallel } from "gulp";
import { removeDist, buildStyle, buildComponent } from "./index";
import { copypackage } from "../publish/index";

export default series(
  async () => removeDist(0),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
    () => copypackage(),
  ),
);
