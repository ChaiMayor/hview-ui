import{f as m,l as a,r,o as v,c as V,b as l,a as d,F as h,p as $,k as g,_ as b,g as y}from"../app.56d41f55.js";const k=n=>($("data-v-97ad5f65"),n=n(),g(),n),U={class:"slider-demo-block"},I=k(()=>l("span",{class:"demonstration"},"Default value",-1)),C={class:"slider-demo-block"},w=k(()=>l("span",{class:"demonstration"},"Customized initial value",-1)),B={class:"slider-demo-block"},F=k(()=>l("span",{class:"demonstration"},"Hide Tooltip",-1)),S={class:"slider-demo-block"},T=k(()=>l("span",{class:"demonstration"},"Format Tooltip",-1)),D={class:"slider-demo-block"},N=k(()=>l("span",{class:"demonstration"},"Disabled",-1)),z=m({__name:"basic",setup(n){const o=a(36),u=a(16),_=a(16),s=a(16),c=a(16),t=p=>p/100;return(p,e)=>{const f=r("h-slider");return v(),V(h,null,[l("div",U,[I,d(f,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value=i)},null,8,["modelValue"])]),l("div",C,[w,d(f,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=i=>u.value=i)},null,8,["modelValue"])]),l("div",B,[F,d(f,{modelValue:_.value,"onUpdate:modelValue":e[2]||(e[2]=i=>_.value=i),"show-tooltip":!1},null,8,["modelValue"])]),l("div",S,[T,d(f,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=i=>s.value=i),"format-tooltip":t},null,8,["modelValue"])]),l("div",D,[N,d(f,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=i=>c.value=i),disabled:""},null,8,["modelValue"])])],64)}}});const Z=b(z,[["__scopeId","data-v-97ad5f65"]]),x=n=>($("data-v-3e11b325"),n=n(),g(),n),A={class:"slider-demo-block"},E=x(()=>l("span",{class:"demonstration"},"Breakpoints not displayed",-1)),H={class:"slider-demo-block"},j=x(()=>l("span",{class:"demonstration"},"Breakpoints displayed",-1)),q=m({__name:"disperse",setup(n){const o=a(0),u=a(0);return(_,s)=>{const c=r("h-slider");return v(),V(h,null,[l("div",A,[E,d(c,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),step:10},null,8,["modelValue"])]),l("div",H,[j,d(c,{modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t),step:10,"show-stops":""},null,8,["modelValue"])])],64)}}});const ee=b(q,[["__scopeId","data-v-3e11b325"]]),G={class:"slider-demo-block"},J={class:"slider-demo-block"},K={class:"slider-demo-block"},L={class:"slider-demo-block"},M=m({__name:"site",setup(n){const o=a(0),u=a(0),_=a(0),s=a(0);return(c,t)=>{const p=r("h-slider");return v(),V(h,null,[l("div",G,[d(p,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},null,8,["modelValue"])]),l("div",J,[d(p,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),placement:"bottom"},null,8,["modelValue"])]),l("div",K,[d(p,{modelValue:_.value,"onUpdate:modelValue":t[2]||(t[2]=e=>_.value=e),placement:"right"},null,8,["modelValue"])]),l("div",L,[d(p,{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=e),placement:"left"},null,8,["modelValue"])])],64)}}});const le=b(M,[["__scopeId","data-v-92d3e19d"]]),O={class:"slider-demo-block"},P=m({__name:"scope",setup(n){const o=a([4,8]);return(u,_)=>{const s=r("h-slider");return v(),V("div",O,[d(s,{modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=c=>o.value=c),range:"","show-stops":"",max:10},null,8,["modelValue"])])}}});const oe=b(P,[["__scopeId","data-v-2c3834fd"]]),Q={class:"slider-demo-block"},R=m({__name:"vertical",setup(n){const o=a(0);return(u,_)=>{const s=r("h-slider");return v(),V("div",Q,[d(s,{modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=c=>o.value=c),vertical:"",height:200},null,8,["modelValue"])])}}});const se=b(R,[["__scopeId","data-v-8c4cdb8d"]]),W={class:"slider-demo-block"},X=m({__name:"tag",setup(n){const o=a([30,60]),u=y({0:"0°C",8:"8°C",37:"37°C",50:{style:{color:"#1989FA"},label:"50%"}});return(_,s)=>{const c=r("h-slider");return v(),V("div",W,[d(c,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),range:"",marks:u},null,8,["modelValue","marks"])])}}});const te=b(X,[["__scopeId","data-v-ffe314db"]]);export{oe as a,Z as b,ee as d,le as s,te as t,se as v};
