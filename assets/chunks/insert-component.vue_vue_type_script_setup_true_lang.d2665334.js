import{f as i,k as f,r as c,o as p,c as d,a as t,w as e,e as s,_ as h,d as u}from"../app.6e46cfcf.js";const b={class:"demo-popover"},g=i({__name:"basic",setup(m){const o=f(!1);function _(){o.value=!o.value}return(v,l)=>{const n=c("h-button"),a=c("h-popover");return p(),d("div",b,[t(a,{class:"space",trigger:"hover",placement:"top-start",content:"hover激活"},{reference:e(()=>[t(n,{size:"medium"},{default:e(()=>[s("hover激活")]),_:1})]),_:1}),t(a,{class:"space",trigger:"click",placement:"bottom",content:"click激活",title:"标题"},{reference:e(()=>[t(n,{size:"medium"},{default:e(()=>[s("click激活")]),_:1})]),_:1}),t(a,{class:"space",trigger:"focus",placement:"right",content:"focus激活"},{reference:e(()=>[t(n,{size:"medium"},{default:e(()=>[s("focus激活")]),_:1})]),_:1}),t(a,{class:"space",trigger:"manual",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=r=>o.value=r),placement:"bottom",content:"手动激活"},{reference:e(()=>[t(n,{size:"medium",onClick:_},{default:e(()=>[s("手动激活")]),_:1})]),_:1},8,["modelValue"])])}}});const C=h(g,[["__scopeId","data-v-6335e6fb"]]),k={class:"demo-popover"},L=u("p",null,"这是一段内容这是一段内容确定删除吗？",-1),x={style:{"text-align":"right",margin:"0"}},$=i({__name:"insert-action",setup(m){const o=f(!1);function _(){o.value=!o.value,console.log(o.value)}return(v,l)=>{const n=c("h-button"),a=c("h-popover");return p(),d("div",k,[t(a,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=r=>o.value=r),trigger:"manual",placement:"bottom-start"},{reference:e(()=>[t(n,{size:"medium",onClick:_},{default:e(()=>[s("删除")]),_:1})]),default:e(()=>[L,u("div",x,[t(n,{size:"mini",onClick:l[0]||(l[0]=r=>o.value=!1)},{default:e(()=>[s("取消")]),_:1}),t(n,{type:"primary",size:"mini",onClick:l[1]||(l[1]=r=>o.value=!1)},{default:e(()=>[s("确定")]),_:1})])]),_:1},8,["modelValue"])])}}}),V={class:"demo-popover"},z={class:"demo-tree"},y=i({__name:"insert-component",setup(m){const o=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2"}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}];return(_,v)=>{const l=c("h-tree"),n=c("h-button"),a=c("h-popover");return p(),d("div",V,[t(a,{trigger:"click",placement:"bottom"},{reference:e(()=>[t(n,{size:"medium"},{default:e(()=>[s("click激活")]),_:1})]),default:e(()=>[u("div",z,[t(l,{data:o})])]),_:1})])}}});export{y as _,$ as a,C as b};