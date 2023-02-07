import fs from "fs";
import path from "path";

/**
 * refer: https://juejin.cn/post/6844903910855950343
 * @param { copiedPath: String } (被复制文件的地址，相对地址)
 * @param { resultPath: String } (放置复制文件的地址，相对地址)
 */
export function copyFile(copiedPath, resultPath) {
	copiedPath = path.join(__dirname, copiedPath);
	resultPath = path.join(__dirname, resultPath);

	try {
		fs.writeFileSync(resultPath, fs.readFileSync(copiedPath));
		console.log("success");
	} catch (error) {
		console.log(error);
	}
}

/**
 * @des 参数解释同上
 */
export function copyFolder(copiedPath, resultPath, direct) {
	if (!direct) {
		copiedPath = path.join(__dirname, copiedPath);
		resultPath = path.join(__dirname, resultPath);
	}

	// function createDir(dirPath) {
	//   fs.mkdirSync(dirPath);
	// }

	if (fs.existsSync(copiedPath)) {
		// createDir(resultPath);
		const files = fs.readdirSync(copiedPath, { withFileTypes: true });
		for (let i = 0; i < files.length; i++) {
			const cf = files[i];
			const ccp = path.join(copiedPath, cf.name);
			const crp = path.join(resultPath, cf.name);
			if (cf.isFile()) {
				const readStream = fs.createReadStream(ccp);
				const writeStream = fs.createWriteStream(crp);
				readStream.pipe(writeStream);
			} else {
				try {
					fs.accessSync(path.join(crp, ".."), fs.constants.W_OK);
					copyFolder(ccp, crp, true);
				} catch (error) {
					console.log("folder write error:", error);
				}
			}
		}
	} else {
		console.log("do not exist path: ", copiedPath);
	}
}

/**
 * 允许被复制的文件后缀列表
 * @type {string[]}
 */

// const copyExt = ["yml"];
/**
 * 复制一个文件夹下的文件到另一个文件夹
 * @param src 源文件夹
 * @param dst 目标文件夹
 */
export const copyDir = function (src, dst) {
	// 读取目录中的所有文件/目录
	fs.readdir(src, function (err, paths) {
		if (err) {
			throw err;
		}
		paths.forEach(function (path) {
			const _src = src + "/" + path;
			const _dst = dst + "/" + path;
			let readable;
			let writable;
			fs.stat(_src, function (err, st) {
				if (err) {
					throw err;
				}
				// 判断是否为文件
				if (st.isFile()) {
					// 允许的后缀才可以被复制

					// if (contains(copyExt, _src)) {
					// 创建读取流

					readable = fs.createReadStream(_src);

					// 创建写入流

					writable = fs.createWriteStream(_dst);

					// 通过管道来传输流

					readable.pipe(writable);
					// } else {
					// console.log(_src + ' 不允许被复制!!!')
					// }
				}

				// 如果是目录则递归调用自身
				if (st.isDirectory()) {
					exists(_src, _dst, copyDir);
				}
			});
		});
	});
};

/**
 * 在复制目录前需要判断该目录是否存在，
 * 不存在需要先创建目录
 * @param src
 * @param dst
 * @param callback
 */

export const exists = function (src, dst, callback) {
	// 如果路径存在，则返回 true，否则返回 false。
	if (fs.existsSync(dst)) {
		callback(src, dst);
	} else {
		fs.mkdir(dst, function () {
			callback(src, dst);
		});
	}
};

/**
 * 判断数组中的元素是否包含此字符串
 * @param arr
 * @param obj
 * @returns {boolean}
 */
// const contains = function (arr, obj) {
//   let flag = false;
//   arr.map((val) => {
//     if (obj.includes(val)) {
//       flag = true;
//     }
//   });
//   return flag;
// };
