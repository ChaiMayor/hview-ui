import { root, pkgPath } from "../utils/paths";
import run from "../utils/run";
import { src, dest } from "gulp";
import { finalDir, pkgDir } from "../utils/constant";

export const copypackage = async () => {
  return src(`${pkgPath}/${pkgDir}/**`).pipe(dest(`${root}/${finalDir}/`));
};

// pnpm version major 版本号（第一个 +1）
// pnpm version minor 版本号（第二个 +1）
// pnpm version patch 版本号（第三个 +1）
export const publish = async () => {
  await run("pnpm version patch", `${pkgPath}/${pkgDir}`);
  await copypackage();
  await run("npm publish --access=public", `${root}/${finalDir}`);
};
