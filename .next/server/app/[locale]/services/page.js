(()=>{var e={};e.id=479,e.ids=[479],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},602:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>o,routeModule:()=>u,tree:()=>d}),s(6808),s(309),s(7149),s(5866);var i=s(3191),r=s(8716),A=s(7922),a=s.n(A),l=s(5231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);s.d(t,n);let d=["",{children:["[locale]",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6808)),"/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/services/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,309)),"/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,7149)),"/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/andrewoplas/Documents/Projects/Freelance/nordic-xpress-limousine/src/app/[locale]/services/page.tsx"],c="/[locale]/services/page",h={require:s,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/[locale]/services/page",pathname:"/[locale]/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8992:(e,t,s)=>{Promise.resolve().then(s.bind(s,4584)),Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,5055)),Promise.resolve().then(s.bind(s,9969)),Promise.resolve().then(s.bind(s,2265)),Promise.resolve().then(s.bind(s,8502)),Promise.resolve().then(s.bind(s,230)),Promise.resolve().then(s.bind(s,7282)),Promise.resolve().then(s.bind(s,3553)),Promise.resolve().then(s.bind(s,1307)),Promise.resolve().then(s.bind(s,3289))},6808:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w,generateMetadata:()=>b});var i=s(9510),r=s(7039),A=s(9928),a=s(8072),l=s(1310),n=s(5013),d=s(1160),o=s(7710),c=s(7371),h=s(8580),u=s(9444),g=s(3518),p=s(9107),x=s(4984),m=s(288);async function b(e){let t=await (0,n.Z)({locale:e.params.locale,namespace:"services"});return{title:`${t("heading")} - ${(0,A.hA)()}`,...(0,A.w3)(a.$["/services"])}}let v=[h.Z,g.Z,p.Z,x.Z,{src:"/_next/static/media/road-solid.0f9612f3.svg",height:512,width:576,blurWidth:0,blurHeight:0},{src:"/_next/static/media/champagne-glasses-solid.6c125f2b.svg",height:512,width:640,blurWidth:0,blurHeight:0},{src:"/_next/static/media/calendar-days-solid.9a5d227e.svg",height:512,width:448,blurWidth:0,blurHeight:0},u.Z],w=({params:{locale:e}})=>{(0,d.k)(e);let t=(0,l.Z)("services"),s=(0,l.Z)("general");return(0,i.jsxs)("main",{children:[(0,i.jsxs)("section",{className:"relative bg-cover bg-center py-16 sm:py-24 lg:py-32",style:{backgroundImage:`url(${m.Z.src})`},children:[i.jsx("div",{className:"px-default mx-auto max-w-section",children:i.jsx("h1",{className:"text-h1 relative z-10 font-bold text-white",children:t("heading")})}),i.jsx("div",{className:"absolute left-0 top-0 z-0 h-full w-full bg-[#00000080]"})]}),(0,i.jsxs)("section",{className:"px-default mx-auto max-w-section py-16 lg:py-20",children:[t.rich("description"),i.jsx("div",{className:"mt-16 grid grid-cols-1 gap-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3",children:["airport_transfers","cruise_port_transfers","business_travel","leisure_trips_and_days_out","road_shows","social_occasion","fairs_and_events","private_tours"].map((e,s)=>{let r=t(`${e}.heading`);return(0,i.jsxs)("div",{children:[i.jsx(o.default,{src:v[s].src,alt:`icon of ${r}`,width:28,height:28,className:"mb-6 h-7 w-auto"}),i.jsx("h3",{className:"text-h4 mb-2 font-bold",children:t(`${e}.heading`)}),i.jsx("p",{className:"leading-relaxed",children:t(`${e}.description`)})]},e)})})]}),(0,i.jsxs)("section",{className:"px-default mx-auto flex max-w-section flex-col items-center justify-center gap-3 pb-16 lg:pb-20",children:[i.jsx("h2",{className:"text-center text-xl",children:t("cta_heading")}),i.jsx(r.z,{asChild:!0,className:"mt-4",children:i.jsx(c.default,{href:"https://www.booking.nordicxpresslimousine.dk/en/booking/",children:s("book_now")})})]})]})}},5055:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/calendar-days-solid.9a5d227e.svg",height:512,width:448,blurWidth:0,blurHeight:0}},9969:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/champagne-glasses-solid.6c125f2b.svg",height:512,width:640,blurWidth:0,blurHeight:0}},8580:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i={src:"/_next/static/media/plane-arrival-solid.977c09c2.svg",height:512,width:640,blurWidth:0,blurHeight:0}},2265:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/plane-arrival-solid.977c09c2.svg",height:512,width:640,blurWidth:0,blurHeight:0}},9444:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i={src:"/_next/static/media/private-tours.dd304191.svg",height:44,width:45,blurWidth:0,blurHeight:0}},8502:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/private-tours.dd304191.svg",height:44,width:45,blurWidth:0,blurHeight:0}},230:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/road-solid.0f9612f3.svg",height:512,width:576,blurWidth:0,blurHeight:0}},3518:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i={src:"/_next/static/media/ship-solid.0e2f8aa6.svg",height:512,width:576,blurWidth:0,blurHeight:0}},7282:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/ship-solid.0e2f8aa6.svg",height:512,width:576,blurWidth:0,blurHeight:0}},9107:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i={src:"/_next/static/media/suitcase-solid.325470b3.svg",height:512,width:512,blurWidth:0,blurHeight:0}},3553:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/suitcase-solid.325470b3.svg",height:512,width:512,blurWidth:0,blurHeight:0}},4984:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i={src:"/_next/static/media/taxi-solid.7668348d.svg",height:512,width:512,blurWidth:0,blurHeight:0}},1307:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/taxi-solid.7668348d.svg",height:512,width:512,blurWidth:0,blurHeight:0}},288:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});let i={src:"/_next/static/media/calling.7246726d.jpg",height:400,width:960,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoQK//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAAwUSUv/aAAgBAQABPwBLbVxTuHbaoF0PJJM//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAgBAgEBPwCy7P/EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwDAJf/Z",blurWidth:8,blurHeight:3}},3289:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});let i={src:"/_next/static/media/calling.7246726d.jpg",height:400,width:960,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoQK//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAAwUSUv/aAAgBAQABPwBLbVxTuHbaoF0PJJM//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAgBAgEBPwCy7P/EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwDAJf/Z",blurWidth:8,blurHeight:3}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[948,49,93,844],()=>s(602));module.exports=i})();