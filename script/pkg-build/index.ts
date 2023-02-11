import { src, dest } from "gulp";
import { themePath, root } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
import gulpMinifyCss from "gulp-minify-css";
import { themeDir } from "../utils/constant";

export const buildCompDist = async () => {
  return await run("pnpm run build", root);
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

export const deriveEsNodeModules = async () => {
  return src(`${root}/hview-ui/es/node_modules/.pnpm/**`).pipe(
    dest(`${root}/hview-ui/node_modules/.pnpm`),
  );
};

export const deriveLibNodeModules = async () => {
  return src(`${root}/hview-ui/lib/node_modules/.pnpm/**`).pipe(
    dest(`${root}/hview-ui/node_modules/.pnpm`),
  );
};

export const deriveEsVirtual = async () => {
  return src(`${root}/hview-ui/es/_virtual/**`).pipe(
    dest(`${root}/hview-ui/_virtual`),
  );
};

export const deriveLibVirtual = async () => {
  return src(`${root}/hview-ui/lib/_virtual/**`).pipe(
    dest(`${root}/hview-ui/_virtual`),
  );
};

export const hierarchicalChangeEsModule = async () => {
  // return src(`${root}/${finalDir}/es/**`).pipe(dest(`${root}/${finalDir}/es`));
  return src(`${root}/hview-ui/es/packages/**`).pipe(
    dest(`${root}/hview-ui/es`),
  );
};

export const hierarchicalChangeLibModule = async () => {
  // return src(`${root}/${finalDir}/lib/**`).pipe(
  //   dest(`${root}/${finalDir}/lib`),
  // );
  return src(`${root}/hview-ui/lib/packages/**`).pipe(
    dest(`${root}/hview-ui/lib`),
  );
};
