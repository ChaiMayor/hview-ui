import{f as i,r as _,o as p,g as h,w as o,e as c,m as l,c as f,a as m,F as C}from"../app.6e46cfcf.js";const b=i({__name:"basic",setup(u){const t=l(),{$message:e}=t.appContext.config.globalProperties,s=()=>{e("Hello,This is a message")};return(a,r)=>{const n=_("h-button");return p(),h(n,{type:"default",onClick:s},{default:o(()=>[c("Show Message")]),_:1})}}}),x=i({__name:"type",setup(u){const t=l(),{$message:e}=t.appContext.config.globalProperties,s=()=>{e({message:"This is a success type.",type:"success"})},a=()=>{e({message:"This is a warning type.",type:"warning"})},r=()=>{e({message:"This is a info type.",type:"info"})},n=()=>{e({message:"This is a error type.",type:"error"})};return(d,y)=>{const g=_("h-button");return p(),f(C,null,[m(g,{type:"success",onClick:s},{default:o(()=>[c("success")]),_:1}),m(g,{type:"warning",onClick:a},{default:o(()=>[c("warning")]),_:1}),m(g,{type:"info",onClick:r},{default:o(()=>[c("info")]),_:1}),m(g,{type:"danger",onClick:n},{default:o(()=>[c("error")]),_:1})],64)}}}),T=i({__name:"show-close",setup(u){const t=l(),{$message:e}=t.appContext.config.globalProperties,s=()=>{e({type:"success",message:"This is closed the message",showClose:!0})};return(a,r)=>{const n=_("h-button");return p(),h(n,{type:"default",onClick:s},{default:o(()=>[c("Show Close")]),_:1})}}}),w=i({__name:"center-message",setup(u){const t=l(),{$message:e}=t.appContext.config.globalProperties,s=()=>{e({type:"success",message:"center",center:!0})};return(a,r)=>{const n=_("h-button");return p(),h(n,{type:"default",onClick:s},{default:o(()=>[c("Center Message")]),_:1})}}}),$=i({__name:"html-string",setup(u){const t=l(),{$message:e}=t.appContext.config.globalProperties,s=()=>{e({type:"success",message:"<strong>This is HTML string</strong>",dangerouslyUseHTMLString:!0})};return(a,r)=>{const n=_("h-button");return p(),h(n,{type:"default",onClick:s},{default:o(()=>[c("Use HTML String")]),_:1})}}});export{b as _,x as a,T as b,w as c,$ as d};