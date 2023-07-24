import{_ as s,o as a,c as o,b as n}from"./app.6e46cfcf.js";const d=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[{"level":2,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]}],"relativePath":"docs/i18n.md","lastUpdated":1676984406000}'),t={name:"docs/i18n.md"},e=n(`<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-hidden="true">#</a></h1><p>Hview UI 组件 默认 使用中文，如果你希望使用其他语言，你可以参考下面的方案。</p><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-hidden="true">#</a></h2><p>Hview UI 提供了全局配置国际化的配置。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> { getCurrentInstance } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;vue&quot;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">instance</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">getCurrentInstance</span><span style="color:var(--shiki-color-text);">() </span><span style="color:var(--shiki-token-keyword);">as</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">any</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">setTimeout</span><span style="color:var(--shiki-color-text);">(() </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-constant);">instance</span><span style="color:var(--shiki-color-text);">.</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-color-text);">.</span><span style="color:var(--shiki-token-constant);">$i18n</span><span style="color:var(--shiki-color-text);">.locale </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;en-US&quot;</span><span style="color:var(--shiki-color-text);">; </span><span style="color:var(--shiki-token-comment);">// 更改使用i18n使用模式</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">0</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"></span></code></pre></div><p><a href="https://github.com/ChaiMayor/hview-ui/tree/dev/packages/locale/lang" target="_blank" rel="noreferrer">支持的语言列表</a></p><ul><li>简体中文（zh-CN）</li><li>美国英语（en-US）</li></ul>`,7),r=[e];function l(i,p,c,k,h,v){return a(),o("div",null,r)}const x=s(t,[["render",l]]);export{d as __pageData,x as default};
