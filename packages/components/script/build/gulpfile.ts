import { series, parallel } from "gulp";
import { removeDist, buildComponent } from "./index";

export default series(
	() => removeDist(0),
	parallel(() => buildComponent()),
);
