import { src, dest } from "gulp";
import { themePath, root, reThemePath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
import { removeDir, delPath } from "../utils/delpath";
import gulpMinifyCss from "gulp-minify-css";
import { themeDir, finalDir } from "../utils/constant";

export const removeCompDist = async (floor: number) => {
  // 一定要使用 await 同步加载，否则会出错
  return await delPath(`${root}/${finalDir}`, floor);
};

export const buildCompDist = async () => {
  return await run("pnpm run build", root);
};

export const removeThemeDist = async () => {
  return await removeDir(reThemePath);
};

export const buildThemeDist = async () => {
  return await run("pnpm run build", themePath);
};

export const buildStyle = async () => {
  return src(`${themePath}/src/*.less`)
    .pipe(less())
    .pipe(
      autoprefixer({
        // @ts-ignore
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false,
      }),
    )
    .pipe(gulpMinifyCss())
    .pipe(dest(`${root}/hview-ui/theme-chalk`));
};

export const buildStyleDir = async () => {
  return src(`${themePath}/src/**/*.less`)
    .pipe(less())
    .pipe(
      autoprefixer({
        // @ts-ignore
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false,
      }),
    )
    .pipe(gulpMinifyCss())
    .pipe(dest(`${root}/hview-ui/theme-chalk`));
};

export const deriveDist = async () => {
  return src(`${themePath}/${themeDir}/style.css`)
    .pipe(
      autoprefixer({
        // @ts-ignore
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false,
      }),
    )
    .pipe(dest(`${root}/hview-ui/theme-chalk`));
};
