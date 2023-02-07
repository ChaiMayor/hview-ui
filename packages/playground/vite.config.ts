// import fs from "fs";
// import path from "path";
// Plugin
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import execa from "execa";
// import { resolve } from "path";

// const hviewCSSFile = resolve(__dirname, "../components/hview-ui/es/style.css");
// const hviewCSSFile = resolve(__dirname, "../components/hview-ui/es/style.css");

// function copyHviewDependencies(): Plugin {
//   return {
//     name: "copy-hview-dependencies",

//     buildStart() {
//       fs.copyFileSync(hviewCSSFile, resolve("public/style.css"));
//     },
//   };
// }

const commit = execa.sync("git", ["rev-parse", "HEAD"]).stdout.slice(0, 7);

export default defineConfig({
  // @ts-ignore
  plugins: [vue()],
  define: {
    __COMMIT__: JSON.stringify(commit),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(true),
  },
  // build:{
  //   rollupOptions:{
  //     external:[
  //       ""
  //     ]
  //   }
  // },
  optimizeDeps: {
    exclude: ["@vue/repl"],
  },
});
