(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8425:function(e,t,n){Promise.resolve().then(n.bind(n,5186))},5775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let s=n(7043);n(7437),n(2265);let r=s._(n(5602));function l(e,t){var n;let s={loading:e=>{let{error:t,isLoading:n,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let l={...s,...t};return(0,r.default)({...l,modules:null==(n=l.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let s=n(8993);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return n}},5602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let s=n(7437),r=n(2265),l=n(1523),c=n(49);function o(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},a=function(e){let t={...i,...e},n=(0,r.lazy)(()=>t.loader().then(o)),a=t.loading;function d(e){let o=a?(0,s.jsx)(a,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(c.PreloadCss,{moduleIds:t.modules}):null,(0,s.jsx)(n,{...e})]}):(0,s.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(n,{...e})});return(0,s.jsx)(r.Suspense,{fallback:o,children:i})}return d.displayName="LoadableComponent",d}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let s=n(7437),r=n(544);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,s.jsx)(s.Fragment,{children:l.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},5186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var s=n(7437),r=n(9568),l=n.n(r);n(7975),n(7402),n(6093);var c=n(2265),o=n(7648),i=n(8667);let a="GTM-NP5VVNQW",d="v4.0.0";function h(){return d.includes("dev")||d.includes("beta")||d.includes("prerelease")?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{id:"gtmScript",strategy:"afterInteractive",async:!0,children:"(function (w, d, s, l, i) {w[l] = w[l] || []; w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', '".concat(a,"');")}),(0,s.jsx)("noscript",{children:(0,s.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=".concat(a),height:"0",width:"0",style:{display:"none",visibility:"hidden"}})})]})}var u=n(5059);let x="v4.0.0";function m(){return x.includes("dev")||x.includes("beta")||x.includes("prerelease")?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.default,{id:"adsense-code",async:!0,onError:()=>{u.Z.error("[AdSense]: AdSenseの読み込みに失敗しました。")},strategy:"afterInteractive",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5140625606505249",crossOrigin:"anonymous"})})}var v=n(1641),f=n(3145),g=n(5775),j=n.n(g),p=n(6956);let q=j()(()=>n.e(273).then(n.bind(n,3273)),{loadableGenerated:{webpack:()=>[3273]},ssr:!1});function w(){return(0,s.jsxs)("div",{className:"search__container",children:[(0,s.jsx)(p.Z,{className:"search__button",onlySpecifiedClass:!0,title:"動画を検索",children:(0,s.jsx)("svg",{className:"search__button-icon",children:(0,s.jsx)("use",{href:"#search-icon"})})}),(0,s.jsx)("input",{className:"search__input",type:"text",autoComplete:"off",placeholder:"動画を検索",defaultValue:""}),(0,s.jsx)(p.Z,{className:"search__button--details",onlySpecifiedClass:!0,title:"検索設定を変更する",children:(0,s.jsxs)("svg",{className:"search__button-icon--details",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",version:"1.1",viewBox:"0 0 512 512",children:[(0,s.jsx)("circle",{cx:"256",cy:"53.3",r:"53.3"}),(0,s.jsx)("circle",{cx:"256",cy:"256",r:"53.3"}),(0,s.jsx)("circle",{cx:"256",cy:"458.7",r:"53.3"})]})})]})}function y(){let e=new Date,t=e.getMonth()+1===7&&1===e.getDate();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("header",{className:"header",children:[(0,s.jsx)("div",{className:"header__left-container",children:(0,s.jsxs)(o.default,{href:"/",className:"header__icon-area",children:[(0,s.jsx)(f.default,{className:"header__icon-img",src:t?"/s/img/icon/ybd-project-commemoration-icon.png":"/s/img/icon/ybd-project.png",alt:"YBD Projectのアイコン画像",title:"YBD Projectのアイコン画像",decoding:"async",loading:"eager",fetchPriority:"high",width:96,height:96}),(0,s.jsxs)("p",{className:"header__icon-text ".concat(t?"header__icon-text--commemoration":""),children:["YBD Project",t?" - 記念日":""]})]})}),(0,s.jsx)("div",{className:"header__center-container",children:(0,s.jsx)(c.Suspense,{fallback:(0,s.jsx)(w,{}),children:(0,s.jsx)(q,{})})})]})})}let b="v4.0.0";function T(e){let{children:t}=e;return(0,s.jsxs)("html",{lang:"ja",id:"html",prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#","data-version":b,className:l().className,children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("link",{rel:"preconnect",href:"https://cdn.jsdelivr.net"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://i.ytimg.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://www.googletagmanager.com"}),(0,s.jsx)("link",{rel:"preload",as:"image",href:"/s/img/icon/ybd-project.png",fetchPriority:"high"}),(0,s.jsx)(h,{}),(0,s.jsx)(m,{}),(0,s.jsx)("noscript",{children:(0,s.jsx)("style",{children:"body>*:not(#noScript) {display: none;}#noScript {display: flex !important;justify-content: center;align-items: center;height: 100vh;margin: auto;padding: 0 2rem;}#noScript>span {display: block;font-size: 4.8rem;text-align: center;}@media screen and (max-width: 700px) {#noScript>span {font-size: 4.2rem;}}@media screen and (max-width: 599px) {#noScript>span {font-size: 3.6rem;}}@media screen and (max-width: 370px) {#noScript>span {font-size: 3.2rem;}}"})}),(0,s.jsx)(i.default,{src:"https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js",strategy:"afterInteractive",async:!0}),(0,s.jsx)(i.default,{src:"https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/plugins/unveilhooks/ls.unveilhooks.min.js",strategy:"afterInteractive",async:!0})]}),(0,s.jsxs)("body",{children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(y,{}),(0,s.jsx)("div",{className:"container--primary",children:(0,s.jsxs)("main",{className:"main",children:[b.includes("dev")||b.includes("beta")?function(e){let t=e.split("-");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"using-develop-version using-develop-version--".concat(t[1]),children:(0,s.jsxs)("span",{children:[t[0],"の",{dev:"開発",beta:"ベータ"}[t[1]],"版を利用中です"]})}),(0,s.jsx)("style",{children:".using-develop-version {position: fixed;bottom: 2rem;z-index: 1;padding: 1rem;text-align: center;border-radius: 1rem;color: var(--base);font-size: 1.6rem;left: 50%;transform: translateX(-50%);}.using-develop-version--dev {background-color: var(--red-100);}.using-develop-version--beta {background-color: var(--blue-100);}.using-develop-version--prerelease {background-color: var(--green-100);}"})]})}(b):(0,s.jsx)(s.Fragment,{}),t,(0,s.jsx)(v.default,{})]})}),(0,s.jsxs)("footer",{className:"footer",children:[(0,s.jsx)("div",{className:"footer__top",children:(0,s.jsxs)("div",{className:"footer__top-container",children:[(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"YBD Project「学習にも使える！動画で学ぶためのサービス」"})}),(0,s.jsx)("div",{children:(0,s.jsx)(o.default,{href:"https://twitter.com/ybd_project",target:"_blank",prefetch:!1,children:(0,s.jsx)("svg",{className:"footer__icon footer__icon--sns",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",style:{width:"24px",height:"24px"},version:"1.1",viewBox:"0 0 24 24",children:(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})})})]})}),(0,s.jsx)("nav",{className:"footer__nav",children:(0,s.jsxs)("div",{className:"footer__nav-item footer__nav-item--main",children:[(0,s.jsx)("h3",{className:"footer__nav-title",children:"サイトマップ"}),(0,s.jsxs)("ul",{className:"footer__nav-links",children:[(0,s.jsx)("li",{className:"footer__nav-link",children:(0,s.jsx)(o.default,{href:"/",prefetch:!1,children:"ホーム"})}),(0,s.jsx)("li",{className:"footer__nav-link",children:(0,s.jsx)(o.default,{href:"/terms-of-use/",prefetch:!1,children:"利用規約"})}),(0,s.jsx)("li",{className:"footer__nav-link",children:(0,s.jsx)(o.default,{href:"/privacy-policy/",prefetch:!1,children:"個人情報保護方針"})})]})]})}),(0,s.jsxs)("div",{className:"footer__bottom",children:["Copyright \xa9 2022 - 2024 YBD Project | ",b]})]}),(0,s.jsx)(v.default,{})]}),(0,s.jsxs)("div",{style:{display:"none"},children:[(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"home",viewBox:"0 0 512 512",children:(0,s.jsx)("path",{d:"M490.1 185.5 339 34.3a117.5 117.5 0 0 0-166 0L22 185.5c-14 14-22 33-21.9 52.8v221.4A52.4 52.4 0 0 0 52.4 512h407.2a52.4 52.4 0 0 0 52.4-52.3V238.3c0-19.8-7.8-38.9-21.9-52.8zM448 448H341.3v-67.9c0-45-36.4-81.4-81.4-81.4H252c-45 0-81.4 36.4-81.4 81.4V448H64V238.3c0-2.9 1.1-5.6 3.1-7.6L218.3 79.6a53.3 53.3 0 0 1 75.4 0L445 230.7c2 2 3 4.7 3.1 7.6V448z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"proxy",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M23.5 6.2A3 3 0 0 0 21.4 4c-1.9-.5-9.4-.5-9.4-.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.3C0 8 0 12 0 12s0 4 .5 5.8A3 3 0 0 0 2.6 20c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.2C24 16 24 12 24 12s0-4-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"study",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm20-280h80v-440h-80v440Zm-20 200h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"about",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"contact",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"feedback",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm400-280q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"notice",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"faq",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12.836.028a12.047 12.047 0 0 0-9.327 3.493A12.024 12.024 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5v-6.66C24 5.861 19.096.454 12.836.028ZM11.903 19a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.903 19Zm1.928-6.512c-.521.287-.928.951-.928 1.512a1 1 0 1 1-2 0c0-1.285.807-2.627 1.963-3.264a1.995 1.995 0 0 0 1.004-2.125 2.025 2.025 0 0 0-1.596-1.596 2.002 2.002 0 0 0-2.371 1.967 1 1 0 1 1-2 0c0-1.185.521-2.301 1.428-3.063a4.033 4.033 0 0 1 3.289-.874c1.613.283 2.938 1.607 3.221 3.221a4.023 4.023 0 0 1-2.009 4.223Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"bugs",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M480-120q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Zm-80-200h160v-80H400v80Zm0-160h160v-80H400v80Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"scheduled-updates",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{d:"m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"settings",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"terms-of-use",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400l240 240v400q0 33-23.5 56.5T760-120H200Zm80-160h400v-80H280v80Zm0-160h400v-80H280v80Zm0-160h280v-80H280v80Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"privacy-policy",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 63-16.5 122.5T736-280L618-398q11-19 16.5-39.5T640-480q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q21 0 41.5-5.5T560-342l129 128q-42 49-94.5 84T480-80Zm0-320q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"status",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{d:"m105-233-65-47 200-320 120 140 160-260 109 163q-23 1-43.5 5.5T545-539l-22-33-152 247-121-141-145 233ZM863-40 738-165q-20 14-44.5 21t-50.5 7q-75 0-127.5-52.5T463-317q0-75 52.5-127.5T643-497q75 0 127.5 52.5T823-317q0 26-7 50.5T795-221L920-97l-57 57ZM643-217q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm89-320q-19-8-39.5-13t-42.5-6l205-324 65 47-188 296Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsxs)("symbol",{id:"to-school-officials",viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,s.jsx)("path",{d:"M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19c-.6-.32-1.32-.32-1.92 0z"})]})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"processing",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{d:"M822-142 592-372q-32 26-71 39t-81 13q-42 0-80-12.5T290-368l58-58q20 12 43 19t49 7q75 0 127.5-52.5T620-580q0-75-52.5-127.5T440-760q-69 0-119.5 46.5T262-598l50-50 56 56-148 148L72-592l56-56 54 52q6-103 80-173.5T440-840q109 0 184.5 75.5T700-580q0 42-13 82t-39 70l230 230-56 56Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"info",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{d:"M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"success",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{d:"M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"warning",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{d:"m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"error",viewBox:"0 -960 960 960",children:(0,s.jsx)("path",{d:"M330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm36-190 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56Zm-2 110h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"})})}),(0,s.jsx)("svg",{children:(0,s.jsx)("symbol",{id:"search-icon",x:"0",y:"0",viewBox:"0 0 513.7 513.7",children:(0,s.jsx)("path",{d:"m504.4 459-99.5-99.4a224.9 224.9 0 1 0-45.3 45.3l99.5 99.5a32 32 0 1 0 45.3-45.3zm-278.7-73.3a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"})})})]})]})]})}},1641:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var s=n(7437),r=n(8667),l=n(2265);let c=["3899776319","3097868529","5568985167","9998318791","1629740152"];function o(e){let{adSlot:t}=e,n=Math.floor(Math.random()*c.length),o=t||c[n];return(0,l.useEffect)(()=>{(window.adsbygoogle||[]).push({})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-client":"ca-pub-5140625606505249","data-ad-slot":o,"data-ad-format":"auto","data-full-width-responsive":"true"}),(0,s.jsx)(r.default,{id:"ads-".concat(o),children:"console.log('[Display Ads]: ".concat(o,"');")})]})}},6956:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(7437);function r(e){let{children:t,id:n,name:r,onClick:l,className:c,style:o,title:i,type:a,color:d,onlySpecifiedClass:h,modalIdData:u,url:x,disabled:m}=e,v=(()=>{let e="button ".concat(a?"button--".concat(a):"").concat(d?"-".concat(d):"");return c?[h?"":e,c].join(" "):e})();return(0,s.jsx)("button",{onClick:l,id:n,name:r,type:"button",title:i,className:v,style:o,"data-modal-id":u,"data-url":x,disabled:null!=m&&m,children:t})}},5059:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(7099);let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dateStyle:"medium",timeStyle:"medium"};return new Date(e).toLocaleString("ja",{timeZone:"Asia/Tokyo",...t})},l={blue:"#88c0fc",green:"#00cc99",red:"#ff7e9f",gray:"#afb5c5",yellow:"#ffc711"},c={log:"[   LOG   ]",info:"[   INFO  ]",success:"[ SUCCESS ]",warning:"[ WARNING ]",error:"[  ERROR  ]"},o="padding: 2.5px 4px;border-radius: 2px;",i="padding: 2px 4px;border-radius: 2px;",a={background:"background-color: rgb(255 0 255 / 20%);".concat(o),color:"color: pink;"},d={log:"background-color: ".concat(l.gray,"40;").concat(o),info:"background-color: ".concat(l.blue,"40;").concat(o),success:"background-color: ".concat(l.green,"40;").concat(o),warning:"border: 2px solid ".concat(l.yellow,"40;").concat(i),error:"border: 2px solid ".concat(l.red,"40;").concat(i)};function h(e){return"%c[".concat(r(new Date),"]%c %c").concat(c[e],"%c: %c")}var u={log:e=>{s.dz&&console.log(h("log")+e,a.background,"",d.log,"","color: ".concat(l.gray))},info:e=>{s.dz&&console.log(h("info")+e,a.background,"",d.info,"","color: ".concat(l.blue))},success:e=>{console.log(h("success")+e,a.background,"",d.success,"","color: ".concat(l.green))},warning:e=>{console.warn(h("warning")+e,a.color,"",d.warning,"","color: ".concat(l.yellow))},error:e=>{console.error(h("error")+e,a.color,"",d.error,"","color: ".concat(l.red))}}},7099:function(e,t,n){"use strict";n.d(t,{T5:function(){return l},dz:function(){return c},ud:function(){return r}});let s="v4.0.0",r={icon:{unknown:"/s/img/unknown-user-icon.svg"},thumbnail:{unknown:"/s/img/unknown-thumbnail.png"}},l={base:"https://innertube.ybd-project.workers.dev",glitch:"https://ydpj-innertube.glitch.me",fallback:"https://ydpj-innertube.vercel.app"},c=s.includes("dev")||s.includes("beta")||s.includes("test")},7975:function(){},6093:function(){},7402:function(){},9568:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_JP_c653df', '__Noto_Sans_JP_Fallback_c653df'",fontStyle:"normal"},className:"__className_c653df"}}},function(e){e.O(0,[730,527,868,970,648,145,667,971,117,744],function(){return e(e.s=8425)}),_N_E=e.O()}]);