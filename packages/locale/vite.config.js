/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// refer: https://zhuanlan.zhihu.com/p/488371194
// error: __dirname is undefined
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: true,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      input: ["index.ts"],
      //忽略打包vue文件
      external: ["vue", "vue-i18n"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: resolve(__dirname, "./dist/es"),
        },
        {
          format: "cjs",
          //不用打包成.mjs
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: resolve(__dirname, "./dist/lib"),
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      name: "hviewutils",
    },
  },

  plugins: [
    dts({
      outputDir: resolve(__dirname, "./dist/es"),
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
    //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    dts({
      outputDir: resolve(__dirname, "./dist/lib"),
      tsConfigFilePath: "../../tsconfig.json",
    }),
  ],
});
