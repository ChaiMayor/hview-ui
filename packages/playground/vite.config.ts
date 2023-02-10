// import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { getPackageInfo } from "local-pkg";
import Unocss from "unocss/vite";
import Inspect from "vite-plugin-inspect";
import Mkcert from "vite-plugin-mkcert";
import execa from "execa";
// @ts-ignore
import pkg from "./package.json";

const commit = execa.sync("git", ["rev-parse", "HEAD"]).stdout.slice(0, 7);

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig(async () => {
  const repl = await getPackageInfo("@vue/repl");
  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    define: {
      __COMMIT__: JSON.stringify(commit),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(true),
      "import.meta.env.APP_VERSION": JSON.stringify(pkg.version),
      "import.meta.env.REPL_VERSION": JSON.stringify(repl!.version),
    },
    server: {
      https: false,
      host: false,
    },
    optimizeDeps: {
      exclude: ["@vue/repl"],
    },
    plugins: [
      vue({
        reactivityTransform: true,
      }),
      AutoImport({
        dirs: [path.resolve(pathSrc, "composables")],
        imports: ["vue", "@vueuse/core"],
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(pathSrc, "auto-imports.d.ts"),
      }),
      Components({
        dirs: [path.resolve(pathSrc, "components")],
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(pathSrc, "components.d.ts"),
      }),
      Unocss(),
      Mkcert(),
      Inspect(),
    ],
    build: {
      sourcemap: false,
      minify: "terser",
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split("/")
              : [];
            const fileName =
              facadeModuleId[facadeModuleId.length - 2] || "[name]";
            return `js/${fileName}/[name].[hash].js`;
          },
        },
      },
    },
  };
});
