// import { src, dest } from "gulp";
import run from "../utils/run";
import { reRoot, viteDist, workflows } from "../utils/paths";
import { removeDir } from "../utils/delpath";
import { copyDir } from "../utils/file";

const project = "hview-ui";
const remoteGH = "https://github.com/ChaiMayor/hview-ui.git";
const remoteGT = "https://gitee.com/chai-mayor/hview-ui.git";
const branch = "gh-pages";

// 删除 dist 目录
export const removeVitepressDist = async () => {
	await removeDir(viteDist);
};

// 构建文档库 dist
export const buildVitepressDist = async () => {
	await run("pnpm run docs:build-other", reRoot);
};

// 复制 workflows 到指定目录
export const copyToDist = async () => {
	// true 不在拼接当前相对路径
	// await copyFolder(workflows, viteDist, true);  目录存在不可以复制过去
	await copyDir(workflows, viteDist);
};

// 推送到 github and gitee pages 分支
export const pushGitHubPages = async () => {
	await run("git init", viteDist);
	await run("git add .", viteDist);
	// 发布到 https://<USERNAME>.github.io/<REPO>
	await run(`git commit -m "deploy ${project} pages."`, viteDist);
	await run(`git checkout -b ${branch}`, viteDist);
	await run(`git remote add origin ${remoteGH}`, viteDist);
	await run("git push -f origin gh-pages", viteDist);
	await run(`git remote add gitee ${remoteGT}`, viteDist);
	await run(`git push -f gitee ${branch}`, viteDist);
};
