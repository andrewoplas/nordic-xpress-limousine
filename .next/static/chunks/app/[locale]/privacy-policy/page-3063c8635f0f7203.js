(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[218],{3899:function(e,t,n){Promise.resolve().then(n.bind(n,11))},2887:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{g:function(){return r}})},11:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(2887),o=n(2265),a=n(4480);function l(e){let{locale:t,...n}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return o.createElement(a.IntlProvider,(0,r.g)({locale:t},n))}},8945:function(e,t,n){"use strict";let r=n(2265).createContext(void 0);t.IntlContext=r},4480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2265),o=n(3034),a=n(8945),l=r&&r.__esModule?r:{default:r};t.IntlProvider=function(e){let{children:t,defaultTranslationValues:n,formats:i,getMessageFallback:s,locale:c,messages:u,now:f,onError:d,timeZone:g}=e,[p]=r.useState(()=>new Map),m=r.useMemo(()=>({...o.initializeConfig({locale:c,defaultTranslationValues:n,formats:i,getMessageFallback:s,messages:u,now:f,onError:d,timeZone:g}),messageFormatCache:p}),[n,i,s,c,p,u,f,d,g]);return l.default.createElement(a.IntlContext.Provider,{value:m},t)}},3034:function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(".")}function r(e){return n(e.namespace,e.key)}function o(e){console.error(e)}t.defaultGetMessageFallback=r,t.defaultOnError=o,t.initializeConfig=function(e){let{getMessageFallback:t,messages:n,onError:a,...l}=e;return{...l,messages:n,onError:a||o,getMessageFallback:t||r}},t.joinPath=n}},function(e){e.O(0,[971,23,744],function(){return e(e.s=3899)}),_N_E=e.O()}]);