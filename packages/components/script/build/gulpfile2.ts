import { series } from "gulp";
import { buildStyle, buildCommonStyle } from "./index";

export default series(
  async () => buildStyle(),
  async () => buildCommonStyle(),
);
