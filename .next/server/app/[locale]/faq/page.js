(()=>{var e={};e.id=736,e.ids=[736],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4765:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(566),t(309),t(7149),t(5866);var a=t(3191),n=t(8716),o=t(7922),s=t.n(o),i=t(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let c=["",{children:["[locale]",{children:["faq",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,566)),"/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/faq/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,309)),"/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,7149)),"/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/faq/page.tsx"],p="/[locale]/faq/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/[locale]/faq/page",pathname:"/[locale]/faq",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5224:(e,r,t)=>{Promise.resolve().then(t.bind(t,4584)),Promise.resolve().then(t.bind(t,4836))},4836:(e,r,t)=>{"use strict";t.d(r,{Accordion:()=>en,AccordionContent:()=>ei,AccordionItem:()=>eo,AccordionTrigger:()=>es});var a=t(326),n=t(7577),o=t(3095),s=t(545),i=t(8051),l=t(2561),c=t(2067),d=t(5226),p=t(5819),u=t(9815),m=t(8957),x="Collapsible",[f,h]=(0,o.b)(x),[g,w]=f(x),b=n.forwardRef((e,r)=>{let{__scopeCollapsible:t,open:o,defaultOpen:s,disabled:i,onOpenChange:l,...p}=e,[u=!1,x]=(0,c.T)({prop:o,defaultProp:s,onChange:l});return(0,a.jsx)(g,{scope:t,disabled:i,contentId:(0,m.M)(),open:u,onOpenToggle:n.useCallback(()=>x(e=>!e),[x]),children:(0,a.jsx)(d.WV.div,{"data-state":N(u),"data-disabled":i?"":void 0,...p,ref:r})})});b.displayName=x;var v="CollapsibleTrigger",j=n.forwardRef((e,r)=>{let{__scopeCollapsible:t,...n}=e,o=w(v,t);return(0,a.jsx)(d.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":N(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:r,onClick:(0,l.M)(e.onClick,o.onOpenToggle)})});j.displayName=v;var y="CollapsibleContent",P=n.forwardRef((e,r)=>{let{forceMount:t,...n}=e,o=w(y,e.__scopeCollapsible);return(0,a.jsx)(u.z,{present:t||o.open,children:({present:e})=>(0,a.jsx)(A,{...n,ref:r,present:e})})});P.displayName=y;var A=n.forwardRef((e,r)=>{let{__scopeCollapsible:t,present:o,children:s,...l}=e,c=w(y,t),[u,m]=n.useState(o),x=n.useRef(null),f=(0,i.e)(r,x),h=n.useRef(0),g=h.current,b=n.useRef(0),v=b.current,j=c.open||u,P=n.useRef(j),A=n.useRef();return n.useEffect(()=>{let e=requestAnimationFrame(()=>P.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,p.b)(()=>{let e=x.current;if(e){A.current=A.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let r=e.getBoundingClientRect();h.current=r.height,b.current=r.width,P.current||(e.style.transitionDuration=A.current.transitionDuration,e.style.animationName=A.current.animationName),m(o)}},[c.open,o]),(0,a.jsx)(d.WV.div,{"data-state":N(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!j,...l,ref:f,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":v?`${v}px`:void 0,...e.style},children:j&&s})});function N(e){return e?"open":"closed"}var _=t(7124),C="Accordion",R=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[q,D,k]=(0,s.B)(C),[I,F]=(0,o.b)(C,[k,h]),U=h(),T=n.forwardRef((e,r)=>{let{type:t,...n}=e;return(0,a.jsx)(q.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,a.jsx)(G,{...n,ref:r}):(0,a.jsx)($,{...n,ref:r})})});T.displayName=C;var[M,S]=I(C),[E,O]=I(C,{collapsible:!1}),$=n.forwardRef((e,r)=>{let{value:t,defaultValue:o,onValueChange:s=()=>{},collapsible:i=!1,...l}=e,[d,p]=(0,c.T)({prop:t,defaultProp:o,onChange:s});return(0,a.jsx)(M,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:p,onItemClose:n.useCallback(()=>i&&p(""),[i,p]),children:(0,a.jsx)(E,{scope:e.__scopeAccordion,collapsible:i,children:(0,a.jsx)(W,{...l,ref:r})})})}),G=n.forwardRef((e,r)=>{let{value:t,defaultValue:o,onValueChange:s=()=>{},...i}=e,[l=[],d]=(0,c.T)({prop:t,defaultProp:o,onChange:s}),p=n.useCallback(e=>d((r=[])=>[...r,e]),[d]),u=n.useCallback(e=>d((r=[])=>r.filter(r=>r!==e)),[d]);return(0,a.jsx)(M,{scope:e.__scopeAccordion,value:l,onItemOpen:p,onItemClose:u,children:(0,a.jsx)(E,{scope:e.__scopeAccordion,collapsible:!0,children:(0,a.jsx)(W,{...i,ref:r})})})}),[z,V]=I(C),W=n.forwardRef((e,r)=>{let{__scopeAccordion:t,disabled:o,dir:s,orientation:c="vertical",...p}=e,u=n.useRef(null),m=(0,i.e)(u,r),x=D(t),f="ltr"===(0,_.gm)(s),h=(0,l.M)(e.onKeyDown,e=>{if(!R.includes(e.key))return;let r=e.target,t=x().filter(e=>!e.ref.current?.disabled),a=t.findIndex(e=>e.ref.current===r),n=t.length;if(-1===a)return;e.preventDefault();let o=a,s=n-1,i=()=>{(o=a+1)>s&&(o=0)},l=()=>{(o=a-1)<0&&(o=s)};switch(e.key){case"Home":o=0;break;case"End":o=s;break;case"ArrowRight":"horizontal"===c&&(f?i():l());break;case"ArrowDown":"vertical"===c&&i();break;case"ArrowLeft":"horizontal"===c&&(f?l():i());break;case"ArrowUp":"vertical"===c&&l()}let d=o%n;t[d].ref.current?.focus()});return(0,a.jsx)(z,{scope:t,disabled:o,direction:s,orientation:c,children:(0,a.jsx)(q.Slot,{scope:t,children:(0,a.jsx)(d.WV.div,{...p,"data-orientation":c,ref:m,onKeyDown:o?void 0:h})})})}),H="AccordionItem",[Z,B]=I(H),K=n.forwardRef((e,r)=>{let{__scopeAccordion:t,value:n,...o}=e,s=V(H,t),i=S(H,t),l=U(t),c=(0,m.M)(),d=n&&i.value.includes(n)||!1,p=s.disabled||e.disabled;return(0,a.jsx)(Z,{scope:t,open:d,disabled:p,triggerId:c,children:(0,a.jsx)(b,{"data-orientation":s.orientation,"data-state":er(d),...l,...o,ref:r,disabled:p,open:d,onOpenChange:e=>{e?i.onItemOpen(n):i.onItemClose(n)}})})});K.displayName=H;var L="AccordionHeader",X=n.forwardRef((e,r)=>{let{__scopeAccordion:t,...n}=e,o=V(C,t),s=B(L,t);return(0,a.jsx)(d.WV.h3,{"data-orientation":o.orientation,"data-state":er(s.open),"data-disabled":s.disabled?"":void 0,...n,ref:r})});X.displayName=L;var J="AccordionTrigger",Q=n.forwardRef((e,r)=>{let{__scopeAccordion:t,...n}=e,o=V(C,t),s=B(J,t),i=O(J,t),l=U(t);return(0,a.jsx)(q.ItemSlot,{scope:t,children:(0,a.jsx)(j,{"aria-disabled":s.open&&!i.collapsible||void 0,"data-orientation":o.orientation,id:s.triggerId,...l,...n,ref:r})})});Q.displayName=J;var Y="AccordionContent",ee=n.forwardRef((e,r)=>{let{__scopeAccordion:t,...n}=e,o=V(C,t),s=B(Y,t),i=U(t);return(0,a.jsx)(P,{role:"region","aria-labelledby":s.triggerId,"data-orientation":o.orientation,...i,...n,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function er(e){return e?"open":"closed"}ee.displayName=Y;/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let et=(0,t(2881).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var ea=t(1223);let en=T,eo=n.forwardRef(({className:e,...r},t)=>a.jsx(K,{ref:t,className:(0,ea.cn)("border px-5",e),...r}));eo.displayName="AccordionItem";let es=n.forwardRef(({className:e,children:r,...t},n)=>a.jsx(X,{className:"flex",children:(0,a.jsxs)(Q,{ref:n,className:(0,ea.cn)("flex flex-1 items-center justify-between py-4 font-semibold transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-app-orange",e),...t,children:[r,a.jsx(et,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));es.displayName=Q.displayName;let ei=n.forwardRef(({className:e,children:r,...t},n)=>a.jsx(ee,{ref:n,className:"overflow-hidden text-base leading-relaxed transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:a.jsx("div",{className:(0,ea.cn)("pb-4 pt-0",e),children:r})}));ei.displayName=ee.displayName},566:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w,generateMetadata:()=>g});var a=t(9510),n=t(8570);let o=(0,n.createProxy)(String.raw`/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/components/ui/accordion.tsx`),{__esModule:s,$$typeof:i}=o;o.default;let l=(0,n.createProxy)(String.raw`/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/components/ui/accordion.tsx#Accordion`),c=(0,n.createProxy)(String.raw`/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/components/ui/accordion.tsx#AccordionItem`),d=(0,n.createProxy)(String.raw`/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/components/ui/accordion.tsx#AccordionTrigger`),p=(0,n.createProxy)(String.raw`/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/components/ui/accordion.tsx#AccordionContent`);var u=t(9928),m=t(8072),x=t(1310),f=t(5013),h=t(1160);async function g(e){let r=await (0,f.Z)({locale:e.params.locale,namespace:"faq"});return{title:`${r("heading")} - ${(0,u.hA)()}`,...(0,u.w3)(m.$["/faq"])}}let w=({params:{locale:e}})=>{(0,h.k)(e);let r=(0,x.Z)("faq");return(0,a.jsxs)("main",{children:[(0,a.jsxs)("section",{className:"relative bg-gray-800 py-32",children:[a.jsx("div",{className:"px-default mx-auto max-w-section",children:a.jsx("h1",{className:"text-h1 relative z-10 font-bold text-white",children:r("heading")})}),a.jsx("div",{className:"absolute left-0 top-0 z-0 h-full w-full bg-[#00000080]"})]}),(0,a.jsxs)("section",{className:"px-default mx-auto max-w-section py-16 lg:py-20",children:[a.jsx("p",{className:"leading-relaxed",children:r("description")}),a.jsx(l,{type:"single",className:"mx-auto mt-12 max-w-4xl space-y-4",collapsible:!0,children:Array.from({length:22}).map((e,t)=>{let n=r(`items.${t}.heading`);return(0,a.jsxs)(c,{value:n,children:[a.jsx(d,{className:"text-left",children:n}),a.jsx(p,{children:r(`items.${t}.description`)})]},n)})})]})]})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[948,49,93,616],()=>t(4765));module.exports=a})();