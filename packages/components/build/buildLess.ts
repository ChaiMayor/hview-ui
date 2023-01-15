import cpy from "cpy";
import { resolve, dirname } from "path";
import { promises as fs } from "fs";
import less from "less";
import glob from "fast-glob";
const sourceDir = resolve(__dirname, "../src");
//lib文件目录
const targetLib = resolve(__dirname, "../lib");
//es文件目录
const targetEs = resolve(__dirname, "../es");

//src目录
const srcDir = resolve(__dirname, "../src");

const buildLess = async () => {
  //直接将less文件复制到打包后目录
  await cpy(`${sourceDir}/**/*.less`, targetLib);
  await cpy(`${sourceDir}/**/*.less`, targetEs);

  //获取打包后.less文件目录(lib和es一样)
  const lessFils = await glob("**/*.less", { cwd: srcDir, onlyFiles: true });

  //遍历含有less的目录
  for (const path in lessFils) {
    const filePath = `${srcDir}/${lessFils[path]}`;

    //获取less文件字符串
    const lessCode = await fs.readFile(filePath, "utf-8");

    //将less解析成css
    const code = await less.render(lessCode, {
      //指定src下对应less文件的文件夹为目录
      paths: [srcDir, dirname(filePath)],
    });

    //拿到.css后缀path
    const cssPath = lessFils[path].replace(".less", ".css");

    //将css写入对应目录
    await fs.writeFile(resolve(targetLib, cssPath), code.css);
    await fs.writeFile(resolve(targetEs, cssPath), code.css);
  }
};
buildLess();
