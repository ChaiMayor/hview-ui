// @ts-nocheck
import { compare } from "compare-versions";
import type { MaybeRef } from "@vueuse/core";
import type { Versions } from "../composables/store";
import type { Ref } from "vue";
import type { ImportMap } from "./import-map";

export interface Dependency {
  pkg?: string;
  version?: string;
  path: string;
}

export type Cdn = "unpkg" | "jsdelivr" | "jsdelivr-fastly";
export const cdn = useLocalStorage<Cdn>("setting-cdn", "jsdelivr-fastly");

export const genCdnLink = (
  pkg: string,
  version: string | undefined,
  path: string,
) => {
  version = version ? `@${version}` : "";
  switch (cdn.value) {
    case "jsdelivr":
      return `https://cdn.jsdelivr.net/npm/${pkg}${version}${path}`;
    case "jsdelivr-fastly":
      return `https://fastly.jsdelivr.net/npm/${pkg}${version}${path}`;
    case "unpkg":
      return `https://unpkg.com/${pkg}${version}${path}`;
  }
};

export const genVueLink = (version: string) => {
  const compilerSfc = genCdnLink(
    "@vue/compiler-sfc",
    version,
    "/dist/compiler-sfc.esm-browser.js",
  );
  const runtimeDom = genCdnLink(
    "@vue/runtime-dom",
    version,
    "/dist/runtime-dom.esm-browser.js",
  );
  return {
    compilerSfc,
    runtimeDom,
  };
};

export const genImportMap = (
  { vue, hviewPlus }: Partial<Versions> = {},
  nightly: boolean,
): ImportMap => {
  console.log(vue, hviewPlus, nightly);

  const deps: Record<string, Dependency> = {
    vue: {
      pkg: "@vue/runtime-dom",
      version: vue,
      path: "/dist/runtime-dom.esm-browser.js",
    },
    "@vue/shared": {
      version: vue,
      path: "/dist/shared.esm-bundler.js",
    },
    "hview-plus": {
      pkg: nightly ? "hview-plus" : "hview-plus",
      version: hviewPlus,
      path: "/dist/index.full.min.js",
    },
    "hview-plus/": {
      pkg: "hview-plus",
      version: hviewPlus,
      path: "/",
    },
  };

  return {
    imports: Object.fromEntries(
      Object.entries(deps).map(([key, dep]) => [
        key,
        genCdnLink(dep.pkg ?? key, dep.version, dep.path),
      ]),
    ),
  };
};

export const getVersions = (pkg: MaybeRef<string>) => {
  const url = computed(
    () => `https://data.jsdelivr.com/v1/package/npm/${unref(pkg)}`,
  );
  return useFetch(url, {
    initialData: [],
    afterFetch: (ctx) => ((ctx.data = ctx.data.versions), ctx),
    refetch: true,
  }).json<string[]>().data as Ref<string[]>;
};

export const getSupportedVueVersions = () => {
  const versions = $(getVersions("vue"));
  return computed(() =>
    versions.filter((version) => compare(version, "3.2.0", ">=")),
  );
};

export const getSupportedEpVersions = (nightly: MaybeRef<boolean>) => {
  const pkg = computed(() => (unref(nightly) ? "hview-plus" : "hview-plus"));
  const versions = $(getVersions(pkg));
  return computed(() => {
    if (unref(nightly)) return versions;
    return versions.filter((version) =>
      compare(version, "1.1.0-beta.18", ">="),
    );
  });
};
