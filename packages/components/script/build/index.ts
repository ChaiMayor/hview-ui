import { src, dest } from "gulp";
import { componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import delpath from "../utils/delpath";
import run from "../utils/run";
//删除dist
export const removeDist = (floor: number) => {
  return delpath(`${componentPath}/hview-ui`, floor);
};

//处理样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(
      autoprefixer({
        // @ts-ignore
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false, //  是否美化属性值
      }),
    )
    .pipe(dest(`${componentPath}/hview-ui/lib/packages/components/src`))
    .pipe(dest(`${componentPath}/hview-ui/es/packages/components/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
