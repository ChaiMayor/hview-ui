import { resolve } from "path";

// 根目录
export const root = resolve(__dirname, "../../");

// 当前目录
export const selfDir = resolve(__dirname);

// vitepress vite 目录
export const viteDist = resolve(__dirname, "../../site/docs/.vitepress/dist");

// vitepress 目录
export const vite = resolve(__dirname, "../../site/docs/.vitepress");

// .github\workflows 目录
export const workflows = resolve(__dirname, "../../github");
