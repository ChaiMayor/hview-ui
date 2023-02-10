import { series, parallel } from "gulp";
import { copypackage } from "../publish/index";
import {
  buildCompDist,
  removeThemeDist,
  buildThemeDist,
  buildStyle,
  buildStyleDir,
  deriveDist,
  removeCompDist,
} from "./index";

export default series(
  () => removeCompDist(),
  () => removeThemeDist(),
  () => buildCompDist(),
  () => buildThemeDist(),
  parallel(
    () => buildStyle(),
    () => buildStyleDir(),
    () => deriveDist(),
    () => copypackage(),
  ),
);
