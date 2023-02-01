import { series, parallel } from "gulp";
import { removeDist, buildComponent } from "./index";
import { copypackage } from "../publish/index";

export default series(
  () => removeDist(0),
  parallel(
    () => buildComponent(),
    () => copypackage(),
  ),
);
