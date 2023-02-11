import { parallel } from "gulp";
import {
  removePlayEsDist,
  removePlayLibDist,
  removePackEsDist,
  removePackLibDist,
  removeNodeModulesEsDist,
  removeNodeModulesLibDist,
  removeVirtualEsDist,
  removeVirtualLibDist,
  removeNodeModuleEsDist,
  removeNodeModuleLibDist,
} from "./index";

export default parallel(
  () => removePlayEsDist(),
  () => removePlayLibDist(),
  () => removePackEsDist(),
  () => removePackLibDist(),
  () => removeNodeModulesEsDist(),
  () => removeNodeModulesLibDist(),
  () => removeVirtualEsDist(),
  () => removeVirtualLibDist(),
  () => removeNodeModuleEsDist(),
  () => removeNodeModuleLibDist(),
);
