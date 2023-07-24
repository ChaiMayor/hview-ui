import{_ as s,o as n,c as a,b as o}from"./app.6e46cfcf.js";const d=JSON.parse('{"title":"本地开发","description":"","frontmatter":{},"headers":[{"level":2,"title":"启动项目","slug":"启动项目","link":"#启动项目","children":[]},{"level":2,"title":"网站预览","slug":"网站预览","link":"#网站预览","children":[]},{"level":2,"title":"本地开发","slug":"本地开发-1","link":"#本地开发-1","children":[]}],"relativePath":"docs/guide.md","lastUpdated":1676984406000}'),e={name:"docs/guide.md"},t=o(`<h1 id="本地开发" tabindex="-1">本地开发 <a class="header-anchor" href="#本地开发" aria-hidden="true">#</a></h1><h2 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-hidden="true">#</a></h2><p>使用命令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">pnpm </span><span style="color:var(--shiki-token-string);">i</span></span>
<span class="line"></span></code></pre></div><p>为该项目将安装所有依赖</p><h2 id="网站预览" tabindex="-1">网站预览 <a class="header-anchor" href="#网站预览" aria-hidden="true">#</a></h2><p>使用命令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">pnpm </span><span style="color:var(--shiki-token-string);">docs:dev</span></span>
<span class="line"></span></code></pre></div><p>该项目将启动网站，网站内你可以预览全部现有组件</p><h2 id="本地开发-1" tabindex="-1">本地开发 <a class="header-anchor" href="#本地开发-1" aria-hidden="true">#</a></h2><ol><li>使用命令</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">pnpm </span><span style="color:var(--shiki-token-string);">dev</span></span>
<span class="line"></span></code></pre></div><p>将启动本地开发环境</p><ol start="2"><li>将你的组件添加到 examples/src/App.vue <blockquote><p>App.vue</p></blockquote></li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">&lt;</span><span style="color:var(--shiki-token-string-expression);">template</span><span style="color:var(--shiki-color-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  &lt;</span><span style="color:var(--shiki-token-string-expression);">div</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">class</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-token-string-expression);">&quot;preImg&quot;</span><span style="color:var(--shiki-color-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    &lt;</span><span style="color:var(--shiki-token-string-expression);">h-image</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      </span><span style="color:var(--shiki-token-function);">:previewSrcList</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-token-string-expression);">&quot;urls&quot;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      </span><span style="color:var(--shiki-token-function);">style</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-token-string-expression);">&quot;width: 100px; height: 100px&quot;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      </span><span style="color:var(--shiki-token-function);">:zoomRate</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-token-string-expression);">&quot;1.2&quot;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      </span><span style="color:var(--shiki-token-function);">:initial-index</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-token-string-expression);">&quot;4&quot;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      </span><span style="color:var(--shiki-token-function);">fit</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-token-string-expression);">&quot;cover&quot;</span><span style="color:var(--shiki-color-text);">&gt;&lt;/</span><span style="color:var(--shiki-token-string-expression);">h-image</span><span style="color:var(--shiki-color-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  &lt;/</span><span style="color:var(--shiki-token-string-expression);">div</span><span style="color:var(--shiki-color-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">&lt;/</span><span style="color:var(--shiki-token-string-expression);">template</span><span style="color:var(--shiki-color-text);">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">&lt;</span><span style="color:var(--shiki-token-string-expression);">script</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">lang</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-token-string-expression);">&quot;ts&quot;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">setup</span><span style="color:var(--shiki-color-text);">&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">urls</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> [</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-string-expression);">&quot;https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-string-expression);">&quot;https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-string-expression);">&quot;https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-string-expression);">&quot;https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-string-expression);">&quot;https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-string-expression);">&quot;https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-string-expression);">&quot;https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">];</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">&lt;/</span><span style="color:var(--shiki-token-string-expression);">script</span><span style="color:var(--shiki-color-text);">&gt;</span></span>
<span class="line"></span></code></pre></div><p>根据需要修改 <code>App.vue</code> 文件让开发过程顺利进行</p>`,16),l=[t];function p(i,r,c,k,h,v){return n(),a("div",null,l)}const u=s(e,[["render",p]]);export{d as __pageData,u as default};
