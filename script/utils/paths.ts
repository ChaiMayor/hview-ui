import { resolve } from "path";
import { finalDir, themeDir } from "./constant";

export const root = resolve(__dirname, "../../packages");
export const compPath = resolve(__dirname, "../../packages/components");
export const themePath = resolve(__dirname, "../../packages/theme-chalk");
export const pkgPath = resolve(__dirname, `../`);
export const playPath = resolve(__dirname, "../../packages/playground");
export const reFinalPath = resolve(__dirname, `../../packages/${finalDir}`);
export const reThemePath = resolve(__dirname, `../../packages/${themeDir}`);
export const reRoot = resolve(__dirname, "../../");

export const viteDist = resolve(__dirname, "../../site/docs/.vitepress/dist");
// vitepress 目录
export const vite = resolve(__dirname, "../../site/docs/.vitepress");
// .github\workflows 目录
export const workflows = resolve(__dirname, "../../github");
