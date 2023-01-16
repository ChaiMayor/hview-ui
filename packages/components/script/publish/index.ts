import { componentPath, pkgPath } from "../utils/paths";
import run from "../utils/run";
import { src, dest } from "gulp";
//复制
const copypackage = async () => {
  return src(`${pkgPath}/transitpkg/**`).pipe(dest(`${componentPath}/hview-ui/`));
};
//发布组件
export const publish = async () => {
  //先给transitpkg升个版本
  await run("pnpm version patch", `${pkgPath}/transitpkg`);
  //复制到dist目录
  await copypackage();
  //在dist下执行发布命令
  await run("npm publish --access=public", `${componentPath}/hview-ui`);
  // run('pnpm publish')
};
