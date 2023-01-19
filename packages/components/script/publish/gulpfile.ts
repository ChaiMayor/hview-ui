import { series } from "gulp";
import { publish } from "./index";

export default series(async () => publish());
