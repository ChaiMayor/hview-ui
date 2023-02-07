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
