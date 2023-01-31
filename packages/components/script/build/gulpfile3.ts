import { series } from "gulp";
import { copypackage } from "../publish/index";

export default series(() => copypackage());
