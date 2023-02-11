import { series, parallel } from "gulp";
import { copypackage } from "../publish/index";
import {
  buildCompDist,
  buildThemeDist,
  buildStyle,
  buildStyleDir,
  deriveDist,
  hierarchicalChangeEsModule,
  hierarchicalChangeLibModule,
  deriveEsNodeModules,
  deriveLibNodeModules,
  deriveEsVirtual,
  deriveLibVirtual,
} from "./index";
import { removeThemeDist, removeCompDist } from "../remove/index";

export default series(
  () => removeCompDist(),
  () => removeThemeDist(),
  () => buildCompDist(),
  () => buildThemeDist(),
  () => hierarchicalChangeEsModule(),
  () => hierarchicalChangeLibModule(),
  () => deriveEsNodeModules(),
  () => deriveLibNodeModules(),
  () => deriveEsVirtual(),
  () => deriveLibVirtual(),
  parallel(
    () => buildStyle(),
    () => buildStyleDir(),
    () => deriveDist(),
    () => copypackage(),
  ),
);
