import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import TableContainer from "./table";
import type { Token } from "markdown-it";

import escapeHtml from "escape-html";
import prism from "prismjs";
import path from "path";
import fs from "fs";

function wrap(code: string, lang: string): string {
  if (lang === "text") {
    code = escapeHtml(code);
  }
  return `<pre v-pre style="margin: 0;"><code>${code}</code></pre>`;
}
// 语法高亮
const highlight = (str: string, lang: string) => {
  if (!lang) {
    return wrap(str, "text");
  }
  lang = lang.toLowerCase();
  const rawLang = lang;
  if (lang === "vue" || lang === "html") {
    lang = "markup";
  }
  if (lang === "md") {
    lang = "markdown";
  }
  if (lang === "ts") {
    lang = "typescript";
  }
  if (lang === "py") {
    lang = "python";
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang);
    return wrap(code, rawLang);
  }
  return wrap(str, "text");
};

export const mdPlugin = (md: MarkdownIt) => {
  md.use(TableContainer);
  md.use(MarkdownItContainer, "code", {
    validate(params) {
      return params.trim().match(/^code\s*(.*)$/);
    },
    render(tokens: Token[], idx: number) {
      const m = tokens[idx].info.trim().match(/^code\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        const sourceFile = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        // 源码文件路径
        const filePath = path.resolve(process.cwd(), "docs/examples", `${sourceFile}.vue`);
        let source = "";
        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(filePath, "utf-8");
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);
        return `<h-code source="${encodeURIComponent(highlight(source, "vue"))}" raw-source="${encodeURIComponent(
          source,
        )}" page-name="${sourceFile}">`;
      } else {
        return "</h-code>";
      }
    },
  });
};
