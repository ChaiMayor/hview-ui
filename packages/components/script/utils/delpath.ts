import fs from "fs";
import { resolve } from "path";
import { componentPath } from "./paths";
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string, floor: number) => {
	let files: string[] = [];

	// console.log("-------------------------------------进入-------------------------------------");
	// console.log(path);

	if (floor === 1) return fs.rmdirSync(path);

	if (fs.existsSync(path)) {
		files = fs.readdirSync(path);

		files.forEach(async (file) => {
			const curPath = resolve(path, file);

			if (fs.statSync(curPath).isDirectory()) {
				// recurse
				// if (file != "node_modules") await delPath(curPath, floor);
				await delPath(curPath, floor);
			} else {
				// delete file
				if (!stayFile.includes(file)) {
					fs.unlinkSync(curPath);
				}
			}
		});

		if (path != `${componentPath}/hview-ui`) fs.rmdirSync(path);

		// console.log("-------------------------------------结束循环-------------------------------------");
		// files = fs.readdirSync(path);
		// console.log(files);
	}
};
export default delPath;
