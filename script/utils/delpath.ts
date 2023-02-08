import fs from "fs";
import path from "path";

/**
 * 读取路径信息
 * @param {string} path 路径
 * @returns {boolean} true 不存在，false 存在
 */
function getStat(path) {
	return new Promise((resolve) => {
		fs.stat(path, (err, stats) => {
			if (err) {
				resolve(false);
			} else {
				resolve(stats);
			}
		});
	});
}

/**
 * 删除指定目录下所有子文件
 * @param {*} path
 */
export function emptyDir(path) {
	const files = fs.readdirSync(path);
	files.forEach((file) => {
		const filePath = `${path}/${file}`;
		const stats = fs.statSync(filePath);
		if (stats.isDirectory()) {
			emptyDir(filePath);
		} else {
			fs.unlinkSync(filePath);
			console.log(`删除${file}文件成功`);
		}
	});
}

/**
 * 删除指定目录内容
 * @param {*} path
 */
export async function removeDir(p) {
	if (!(await getStat(p))) return;
	const statObj = fs.statSync(p);
	if (statObj.isDirectory()) {
		let dirs = fs.readdirSync(p);
		dirs = dirs.map((dir) => path.join(p, dir));
		for (let i = 0; i < dirs.length; i++) {
			await removeDir(dirs[i]);
		}
		fs.rmdirSync(p);
	} else {
		fs.unlinkSync(p);
	}
}

import { resolve } from "path";
import { root } from "./paths";
const stayFile = ["package.json", "README.md"];

export const delPath = async (path: string, floor: number) => {
	let files: string[] = [];

	console.log("进入");

	if (/node_modules/.test(path)) return;

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

		if (path != `${root}/hview-ui`) fs.rmdirSync(path);

		// console.log("-------------------------------------结束循环-------------------------------------");
		// files = fs.readdirSync(path);
		// console.log(files);
	}
};
