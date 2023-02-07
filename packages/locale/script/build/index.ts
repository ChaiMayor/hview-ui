import { componentPath } from "../utils/paths";
import delpath from "../utils/delpath";
import run from "../utils/run";
const dist = "dist";

// 删除dist
export const removeDist = (floor: number) => {
	return delpath(`${componentPath}/${dist}`, floor);
};

//打包组件
export const buildComponent = async () => {
	run("pnpm run build", componentPath);
};
