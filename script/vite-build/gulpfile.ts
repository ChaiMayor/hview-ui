import { series } from "gulp";
import {
  removeVitepressDist,
  buildVitepressDist,
  copyToDist,
  pushGitHubPages,
} from "./index";

export default series(
  () => removeVitepressDist(),
  () => buildVitepressDist(),
  () => copyToDist(),
  () => pushGitHubPages(),
);
