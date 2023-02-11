import { root, reThemePath } from "../utils/paths";
import run from "../utils/run";
import { removeDir } from "../utils/delpath";
import { finalDir } from "../utils/constant";

export const removeCompDist = async () => {
  // refer: https://m.xp.cn/b.php/4166.html
  return await run(`rd /S /Q ${finalDir}`, root);
};

export const removeThemeDist = async () => {
  return await removeDir(reThemePath);
};

export const removePlayEsDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\es\\playground`, root);
};

export const removePlayLibDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\lib\\playground`, root);
};

export const removePackEsDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\es\\packages`, root);
};

export const removePackLibDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\lib\\packages`, root);
};

export const removeNodeModulesEsDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\es\\node_modules`, root);
};

export const removeNodeModulesLibDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\lib\\node_modules`, root);
};

export const removeNodeModuleEsDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\es\\node_module`, root);
};

export const removeNodeModuleLibDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\lib\\node_module`, root);
};

export const removeVirtualEsDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\es\\_virtual`, root);
};

export const removeVirtualLibDist = async () => {
  return await run(`rd /S /Q ${finalDir}\\lib\\_virtual`, root);
};
