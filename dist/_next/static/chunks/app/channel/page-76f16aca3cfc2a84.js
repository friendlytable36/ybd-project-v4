(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{4790:(e,t,n)=>{Promise.resolve().then(n.bind(n,5938)),Promise.resolve().then(n.bind(n,988)),Promise.resolve().then(n.bind(n,1401)),Promise.resolve().then(n.bind(n,4370)),Promise.resolve().then(n.bind(n,652)),Promise.resolve().then(n.bind(n,4238)),Promise.resolve().then(n.t.bind(n,9414,23)),Promise.resolve().then(n.t.bind(n,1680,23))},6463:(e,t,n)=>{"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},1877:(e,t,n)=>{"use strict";n.d(t,{default:()=>a.a});var r=n(4080),a=n.n(r)},4080:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return _}});let r=n(9920),a=n(1452),s=n(7437),c=r._(n(4887)),o=a._(n(2265)),i=n(6590),l=n(4071),d=n(9189),u=new Map,f=new Set,h=e=>{if(c.default.preinit){e.forEach(e=>{c.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:s,children:c="",strategy:o="afterInteractive",onError:i,stylesheets:d}=e,m=n||t;if(m&&f.has(m))return;if(u.has(t)){f.add(m),u.get(t).then(r,i);return}let g=()=>{a&&a(),f.add(m)},_=document.createElement("script"),x=new Promise((e,t)=>{_.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){i&&i(e)});s?(_.innerHTML=s.__html||"",g()):c?(_.textContent="string"==typeof c?c:Array.isArray(c)?c.join(""):"",g()):t&&(_.src=t,u.set(t,x)),(0,l.setAttributesFromProps)(_,e),"worker"===o&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",o),d&&h(d),document.body.appendChild(_)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>m(e))}):m(e)}function _(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function x(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:l="afterInteractive",onError:u,stylesheets:h,...g}=e,{updateScripts:_,scripts:x,getIsSsr:y,appDir:b,nonce:p}=(0,o.useContext)(i.HeadManagerContext),j=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;j.current||(a&&e&&f.has(e)&&a(),j.current=!0)},[a,t,n]);let v=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!v.current&&("afterInteractive"===l?m(e):"lazyOnload"===l&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>m(e))})),v.current=!0)},[e,l]),("beforeInteractive"===l||"worker"===l)&&(_?(x[l]=(x[l]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:u,...g}]),_(x)):y&&y()?f.add(t||n):y&&!y()&&m(e)),b){if(h&&h.forEach(e=>{c.default.preinit(e,{as:"style"})}),"beforeInteractive"===l)return n?(c.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:p,crossOrigin:g.crossOrigin}:{as:"script",nonce:p,crossOrigin:g.crossOrigin}),(0,s.jsx)("script",{nonce:p,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...g,id:t}])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:p,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...g,id:t}])+")"}}));"afterInteractive"===l&&n&&c.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:p,crossOrigin:g.crossOrigin}:{as:"script",nonce:p,crossOrigin:g.crossOrigin})}return null}Object.defineProperty(x,"__nextScript",{value:!0});let y=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4071:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return s}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function s(e,t){for(let[s,c]of Object.entries(t)){if(!t.hasOwnProperty(s)||r.includes(s)||void 0===c)continue;let o=n[s]||s.toLowerCase();"SCRIPT"===e.tagName&&a(o)?e[o]=!!c:e.setAttribute(o,String(c)),(!1===c||"SCRIPT"===e.tagName&&a(o)&&(!c||"false"===c))&&(e.setAttribute(o,""),e.removeAttribute(o))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5938:(e,t,n)=>{"use strict";n.d(t,{default:()=>h});var r=n(7437),a=n(2265),s=n(6463),c=n(6648),o=n(4380),i=n(3144),l=n(591),d=n(1633),u=n(988),f=n(4298);function h(){let e=(0,s.useSearchParams)(),[t,n]=(0,a.useState)(),[h,m]=(0,a.useState)(!0),[g,_]=(0,a.useState)(!1),[x,y]=(0,a.useState)("");if((0,a.useEffect)(()=>{let t=e.get("id");if(!t){_(!0),y("チャンネルのIDが不足しているか、取得できませんでした。");return}return fetch("".concat(d.T5.base,"/api/v4/channel/?id=").concat(t)).then(e=>e.json()).then(e=>{if(!e.message){n(e);return}_(!0),y("チャンネル情報の取得中に次のエラーが発生しました。\n"+e.message)}).catch(e=>{l.Z.error(e),_(!0),y("チャンネル情報の取得中に次のエラーが発生しました。\n"+e)}).finally(()=>{m(!1)}),()=>{n(void 0),_(!1),m(!0),y("")}},[e]),g)return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.$0,{center:!0,children:[(0,r.jsx)(o.X6,{relation:"エラーが発生",headingText:"チャンネル情報の取得に失敗しました。",status:"error"}),(0,r.jsxs)(o.AU,{children:[(0,r.jsx)("h3",{className:"h3 h3--no-border",children:x}),(0,r.jsx)("p",{children:"時間をおいてから再度お試しください。"})]})]})});if(t&&!h){let e=[{name:"動画",contents:(0,r.jsx)(i.default,{items:t.videos,noVideosMessage:"このチャンネルに動画はありません。"}),isSelected:!0},{name:"ショート",contents:(0,r.jsx)(i.default,{items:t.shorts,noVideosMessage:"このチャンネルにショートはありません。"}),isSelected:!1},{name:"プレイリスト",contents:(0,r.jsx)(i.default,{items:t.playlists,noVideosMessage:"このチャンネルにプレイリストはありません。"}),isSelected:!1}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.$0,{center:!0,className:"channel channel--complete",children:[(0,r.jsxs)("div",{className:"channel__info-container",children:[t.info.banner?(0,r.jsx)(c.default,{alt:"チャンネルのバナー画像",src:t.info.banner,width:0,height:0,fetchPriority:"high",decoding:"async",loading:"eager",className:"channel__bg-image"}):(0,r.jsx)(r.Fragment,{}),(0,r.jsxs)("div",{className:"channel__info",children:[(0,r.jsx)(c.default,{alt:"アイコン画像",src:t.info.icon,width:0,height:0,fetchPriority:"high",loading:"eager",decoding:"async",className:"channel__icon"}),(0,r.jsx)("div",{className:"channel__channel-data",children:(0,r.jsx)("h3",{className:"channel__name",children:t.info.name})})]})]}),(0,r.jsx)(o.AU,{children:(0,r.jsx)("div",{className:"channel__video-contents",children:(0,r.jsx)(f.Z,{tabs:e})})})]})})}return(0,r.jsx)(u.default,{})}},988:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var r=n(7437),a=n(4380),s=n(1575),c=n(4298);let o={backgroundColor:"var(--gray-50)",animation:"loading 3s infinite"};function i(){let e=[{name:"動画",contents:(0,r.jsx)(s.default,{}),isSelected:!0},{name:"ショート",contents:(0,r.jsx)(s.default,{}),isSelected:!1},{name:"プレイリスト",contents:(0,r.jsx)(s.default,{}),isSelected:!1}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.$0,{center:!0,className:"channel channel--complete",children:[(0,r.jsxs)("div",{className:"channel__info-container",children:[(0,r.jsx)("div",{className:"channel__bg-image",style:{...o,height:"100%",aspectRatio:"16 / 3",boxShadow:"none"}}),(0,r.jsxs)("div",{className:"channel__info",children:[(0,r.jsx)("div",{className:"channel__icon",style:{...o,height:"100%",aspectRatio:"1/1",boxShadow:"none"}}),(0,r.jsx)("div",{className:"channel__channel-data",children:(0,r.jsx)("h3",{className:"channel__name",style:{...o,width:"100%",minWidth:"25rem",height:"4.8rem",borderRadius:"0.5rem"}})})]})]}),(0,r.jsx)(a.AU,{children:(0,r.jsx)("div",{className:"channel__video-contents",children:(0,r.jsx)(c.Z,{tabs:e})})})]})})}},4380:(e,t,n)=>{"use strict";n.d(t,{$0:()=>r.default,AU:()=>s.default,X6:()=>a.default});var r=n(652);n(4238);var a=n(4370),s=n(1401)},4298:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7437),a=n(2265);function s(e){let{name:t,contents:n,isSelected:a,className:s,style:c}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("label",{className:"tab__label",children:[(0,r.jsx)("input",{type:"radio",name:"tab",defaultChecked:a}),t]}),(0,r.jsx)("div",{className:"tab__contents ".concat(null!=s?s:""),style:c,children:n})]})}let c=(0,a.memo)(function(e){return(0,a.createElement)(s,{...e,key:e.name})});function o(e){let{tabs:t}=e,[n,s]=(0,a.useState)([]),o=t.map(e=>(0,a.createElement)(c,{...e,key:e.name}));return(0,a.useEffect)(()=>{if(s(t),0!==n.length)for(let s in t){var e,r;(null===(e=t[s].contents)||void 0===e?void 0:e.toString())!==(null===(r=n[s].contents)||void 0===r?void 0:r.toString())&&(o[s]=(0,a.createElement)(c,{...t[s],key:t[s].name}))}},[t,n,o]),(0,r.jsx)("div",{className:"tab",children:t.map(e=>(0,a.createElement)(c,{...e,key:e.name}))})}},1575:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var r=n(7437);let a={backgroundColor:"var(--gray-50)",animation:"loading 3s infinite"};function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("li",{className:"search-results__item",children:[(0,r.jsx)("div",{className:"search-results__thumbnail",style:{width:"100%",height:"100%",...a}}),(0,r.jsxs)("div",{className:"search-results__container",children:[(0,r.jsx)("div",{className:"search-results__user-icon",style:{aspectRatio:"1/1",boxShadow:"none",...a}}),(0,r.jsxs)("div",{className:"search-results__video-info",children:[(0,r.jsx)("h3",{className:"search-results__title",style:{width:"75%",height:"50%",borderRadius:"0.5rem",...a}}),(0,r.jsx)("div",{className:"search-results__metadata",style:{width:"75%",height:"50%",borderRadius:"0.5rem",...a}})]})]})]})})}function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("ul",{className:"search-results",children:[(0,r.jsx)(s,{}),(0,r.jsx)(s,{}),(0,r.jsx)(s,{}),(0,r.jsx)(s,{}),(0,r.jsx)(s,{}),(0,r.jsx)(s,{}),(0,r.jsx)(s,{}),(0,r.jsx)(s,{})]}),(0,r.jsx)("style",{children:"@keyframes loading{0%{opacity:0.25}50%{opacity:1}100%{opacity:0.25}}"})]})}},591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(1633);let a={toDateString:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dateStyle:"medium",timeStyle:"medium"};return new Date(e).toLocaleString("ja",{timeZone:"Asia/Tokyo",...t})}},s={blue:"#88c0fc",green:"#00cc99",red:"#ff7e9f",gray:"#afb5c5",yellow:"#ffc711"},c={log:"[   LOG   ]",info:"[   INFO  ]",success:"[ SUCCESS ]",warning:"[ WARNING ]",error:"[  ERROR  ]"},o={normal:"padding: 2.5px 4px;border-radius: 2px;",error:"padding: 2px 4px;border-radius: 2px;"},i={background:"background-color: rgb(255 0 255 / 20%);".concat(o.normal),color:"color: pink;"},l={log:"background-color: ".concat(s.gray,"40;").concat(o.normal),info:"background-color: ".concat(s.blue,"40;").concat(o.normal),success:"background-color: ".concat(s.green,"40;").concat(o.normal),warning:"border: 2px solid ".concat(s.yellow,"40;").concat(o.error),error:"border: 2px solid ".concat(s.red,"40;").concat(o.error)};function d(e){return"%c[".concat(a.toDateString(new Date),"]%c %c").concat(c[e],"%c: %c")}let u={log:e=>{r.dz&&console.log(d("log")+e,i.background,"",l.log,"","color: ".concat(s.gray))},info:e=>{r.dz&&console.log(d("info")+e,i.background,"",l.info,"","color: ".concat(s.blue))},success:e=>{console.log(d("success")+e,i.background,"",l.success,"","color: ".concat(s.green))},warning:e=>{console.warn(d("warning")+e,i.color,"",l.warning,"","color: ".concat(s.yellow))},error:e=>{console.error(d("error")+e,i.color,"",l.error,"","color: ".concat(s.red))}}},1680:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[632,878,138,648,416,130,215,744],()=>t(4790)),_N_E=e.O()}]);