import { series } from "gulp";
import { buildStyle } from "./index";

export default series(async () => buildStyle());
