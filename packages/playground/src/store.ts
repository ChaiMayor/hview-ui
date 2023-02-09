import { reactive, watchEffect, version } from "vue";
import { compileFile, File } from "@vue/repl";
import { utoa, atou } from "./utils/encode";
import * as defaultCompiler from "vue/compiler-sfc";
import type { Store, SFCOptions, StoreState, OutputModes } from "@vue/repl";
// @ts-ignore
import pkg from "../package.json";

import welcomeCode from "./template/welcome.vue?raw";

const ver = pkg.version;

const hviewImports = {
  "hview-plus": `https://unpkg.com/hview-plus@${ver}/dist/index.full.min.js`,
  // "@hview-plus/locale":
  // 	"https://unpkg.com/@hview-plus/locale@1.0.1/es/index.js",
  // "@hview-plus/utils": "https://unpkg.com/@hview-plus/utils@1.0.1/es/index.js",
  // "@vueuse/core": "https://unpkg.com/@vueuse/core@9.12.0/index.mjs",
  // "@vue/shared":
  // 	"https://unpkg.com/@vue/shared@3.2.45/dist/shared.esm-bundler.js",
  // "@vueuse/shared": "https://unpkg.com/@vueuse/shared@9.12.0/index.mjs",
  // "vue-demi": "https://unpkg.com/vue-demi@0.13.11/lib/index.mjs",
  // "vue-i18n": "https://unpkg.com/vue-i18n@9.2.2/dist/vue-i18n.esm-bundler.js",
  // "@intlify/shared":
  // 	"https://unpkg.com/@intlify/shared@9.2.2/dist/shared.esm-bundler.js",
  // "@intlify/core-base":
  // 	"https://unpkg.com/@intlify/core-base@9.2.2/dist/core-base.esm-bundler.js",
  // "@vue/devtools-api":
  // 	"https://unpkg.com/@vue/devtools-api@6.5.0/lib/esm/index.js",
  // "@intlify/vue-devtools":
  // 	"https://unpkg.com/@intlify/vue-devtools@9.2.2/dist/vue-devtools.esm-bundler.js",
  // "@intlify/message-compiler":
  // 	"https://unpkg.com/@intlify/message-compiler@9.2.2/dist/message-compiler.esm-bundler.js",
  // "@intlify/devtools-if":
  // 	"https://unpkg.com/@intlify/devtools-if@9.2.2/dist/devtools-if.esm-bundler.js",
  // "lodash-es": "https://unpkg.com/lodash-es@4.17.21/lodash.js",
};

const hviewReplPluginCode = `
import hp from "hview-plus";
import { getCurrentInstance } from "vue";

export let installed = false;

await loadStyle();

export function installHviewUI() {
  if ( installed ) return
  const instance = getCurrentInstance();
  instance.appContext.app.use(hp);
  installed = true;
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = 'https://unpkg.com/hview-plus@${ver}/theme-chalk/style.css';
    link.addEventListener("load", resolve);
    link.addEventListener("error", reject);
    document.body.append(link);
  });
}
`;

const MAIN_CONTAINER = "Playground.vue";
const defaultMainFile = "App.vue";
const hviewReplPlugin = "hview-repl-plugin.js";

const containerCode = `
<script setup>
import App from "./App.vue";
import { installHviewUI, installed } from "./hview-repl-plugin.js";

installHviewUI();
</script>

<template>
  <App />
</template>
`;

export class ReplStore implements Store {
  state: StoreState;

  compiler = defaultCompiler;

  options?: SFCOptions;

  initialShowOutput: boolean;

  initialOutputMode: OutputModes = "preview";

  private readonly defaultVueRuntimeURL: string;

  constructor({
    serializedState = "",
    defaultVueRuntimeURL = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
    showOutput = false,
    outputMode = "preview",
  }: {
    serializedState?: string;
    showOutput?: boolean;
    // loose type to allow getting from the URL without inducing a typing error
    outputMode?: OutputModes | string;
    defaultVueRuntimeURL?: string;
  }) {
    let files: StoreState["files"] = {};

    if (serializedState) {
      const saved = JSON.parse(atou(serializedState));
      // eslint-disable-next-line no-restricted-syntax
      for (const filename of Object.keys(saved)) {
        files[filename] = new File(filename, saved[filename]);
      }
    } else {
      files = {
        [defaultMainFile]: new File(defaultMainFile, welcomeCode),
      };
    }

    this.defaultVueRuntimeURL = defaultVueRuntimeURL;

    this.initialShowOutput = showOutput;
    this.initialOutputMode = outputMode as OutputModes;

    let mainFile = defaultMainFile;
    if (!files[mainFile]) {
      mainFile = Object.keys(files)[0];
    }

    files[MAIN_CONTAINER] = new File(MAIN_CONTAINER, containerCode, true);
    // @ts-ignore
    this.state = reactive({
      mainFile: MAIN_CONTAINER,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL,
      vueServerRendererURL: "",
    });

    this.initImportMap();

    // varlet inject
    // @ts-ignore
    this.state.files[hviewReplPlugin] = new File(
      hviewReplPlugin,
      hviewReplPluginCode,
      !import.meta.env.DEV,
    );

    watchEffect(() => compileFile(this, this.state.activeFile));

    // eslint-disable-next-line no-restricted-syntax
    for (const file in this.state.files) {
      if (file !== defaultMainFile) {
        compileFile(this, this.state.files[file]);
      }
    }
  }

  init() {}

  setActive(filename: string) {
    this.state.activeFile = this.state.files[filename];
  }

  addFile(fileOrFilename: string | File) {
    const file =
      typeof fileOrFilename === "string"
        ? new File(fileOrFilename)
        : fileOrFilename;
    this.state.files[file.filename] = file;
    if (!file.hidden) this.setActive(file.filename);
  }

  deleteFile(filename: string) {
    if (filename === hviewReplPlugin) {
      // @ts-ignore
      Snackbar.warning("Varlet depends on this file");
      return;
    }
    // @ts-ignore
    Dialog(`Are you sure you want to delete ${filename}?`).then((action) => {
      if (action === "confirm") {
        if (this.state.activeFile.filename === filename) {
          this.state.activeFile = this.state.files[defaultMainFile];
        }
        delete this.state.files[filename];
      }
    });
  }

  serialize() {
    return "#" + utoa(JSON.stringify(this.getFiles()));
  }

  getFiles() {
    const exported: Record<string, string> = {};
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const filename in this.state.files) {
      exported[filename] = this.state.files[filename].code;
    }
    return exported;
  }

  async setFiles(newFiles: Record<string, string>, mainFile = defaultMainFile) {
    const files: Record<string, File> = {};
    if (mainFile === defaultMainFile && !newFiles[mainFile]) {
      files[mainFile] = new File(mainFile, welcomeCode);
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const [filename, file] of Object.entries(newFiles)) {
      files[filename] = new File(filename, file);
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const file of Object.values(files)) {
      await compileFile(this, file);
    }
    this.state.mainFile = mainFile;
    this.state.files = files;
    this.initImportMap();
    this.setActive(mainFile);
  }

  private initImportMap() {
    const map = this.state.files["import-map.json"];
    if (!map) {
      this.state.files["import-map.json"] = new File(
        "import-map.json",
        JSON.stringify(
          {
            imports: {
              vue: this.defaultVueRuntimeURL,
              ...hviewImports,
            },
          },
          null,
          2,
        ),
      );
    } else {
      try {
        const json = JSON.parse(map.code);
        if (!json.imports.vue) {
          json.imports.vue = this.defaultVueRuntimeURL;
          map.code = JSON.stringify(json, null, 2);
        }
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }

  getImportMap() {
    try {
      return JSON.parse(this.state.files["import-map.json"].code);
    } catch (e) {
      this.state.errors = [
        `Syntax error in import-map.json: ${(e as Error).message}`,
      ];
      return {};
    }
  }
}
