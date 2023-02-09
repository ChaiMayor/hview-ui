import { componentPath, pkgPath } from "../utils/paths";
import run from "../utils/run";
import { src, dest } from "gulp";
const dist = "dist";

//复制
export const copypackage = async () => {
  src(`${pkgPath}/package.json`).pipe(dest(`${componentPath}/${dist}/`));
  return src(`${pkgPath}/REDEME.md`).pipe(dest(`${componentPath}/${dist}/`));
};

// pnpm version major 版本号（第一个 +1）
// pnpm version minor 版本号（第二个 +1）
// pnpm version patch 版本号（第三个 +1）

//发布组件
export const publish = async () => {
  //先给transitpkg升个版本
  await run("pnpm version patch", `${pkgPath}/package.json`);
  //复制到dist目录
  await copypackage();
  //在 dist 下执行发布命令
  await run("npm publish --access=public", `${componentPath}/${dist}`);
  // run('pnpm publish')
};
