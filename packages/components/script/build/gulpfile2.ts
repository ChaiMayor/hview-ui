import { series } from "gulp";
import { buildStyle } from "./index";
import { copypackage } from "../publish/index";

export default series(
  () => buildStyle(),
  () => copypackage(),
);
