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
);
