(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{1626:function(e,n,r){Promise.resolve().then(r.bind(r,3386)),Promise.resolve().then(r.bind(r,2695)),Promise.resolve().then(r.bind(r,5872)),Promise.resolve().then(r.bind(r,1228)),Promise.resolve().then(r.bind(r,6853)),Promise.resolve().then(r.bind(r,4217)),Promise.resolve().then(r.t.bind(r,3570,23))},9376:function(e,n,r){"use strict";var t=r(5475);r.o(t,"usePathname")&&r.d(n,{usePathname:function(){return t.usePathname}}),r.o(t,"useRouter")&&r.d(n,{useRouter:function(){return t.useRouter}}),r.o(t,"useSearchParams")&&r.d(n,{useSearchParams:function(){return t.useSearchParams}})},8667:function(e,n,r){"use strict";r.d(n,{default:function(){return s.a}});var t=r(8003),s=r.n(t)},3386:function(e,n,r){"use strict";r.d(n,{default:function(){return h}});var t=r(7437),s=r(2265),c=r(9376),o=r(9470),a=r(7827),i=r(1641),l=r(4217),u=r(7099),d=r(5059);function h(){let e=(0,c.useSearchParams)(),[n,r]=(0,s.useState)([]),[h,f]=(0,s.useState)(!0),[g,m]=(0,s.useState)(!1),[x,j]=(0,s.useState)("");return((0,s.useEffect)(()=>{let n=e.get("q");if(!n){m(!0),j("検索キーワードが不足しているか、取得できませんでした。");return}function t(e){if(f(!1),e.items){r(e.items);return}m(!0),j("検索の実行中に次のエラーが発生しました。\n"+e.message)}return fetch("".concat(u.T5.base,"/api/v4/search/?q=").concat(n)).then(e=>e.json()).then(t).catch(()=>{fetch("".concat(u.T5.fallback,"/api/v4/search/?q=").concat(n)).then(e=>e.json()).then(t).catch(e=>{d.Z.error(e),m(!0),j("検索の実行中に次のエラーが発生しました。\n"+e)})}),()=>{r([]),m(!1),f(!0),j("")}},[e]),g)?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.$0,{center:!0,children:[(0,t.jsx)(o.X6,{relation:"エラーが発生",headingText:"検索中にエラーが発生しました。",status:"error"}),(0,t.jsxs)(o.AU,{children:[(0,t.jsx)("h3",{className:"h3 h3--no-border",children:x}),(0,t.jsx)("p",{children:"時間をおいてから再度お試しください。"})]})]})}):n&&!h?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.$0,{center:!0,children:[(0,t.jsx)(i.Z,{}),(0,t.jsx)(o.AU,{children:(0,t.jsx)(a.default,{items:n,noVideosMessage:"検索結果はありません。"})})]})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.$0,{center:!0,children:(0,t.jsx)(o.AU,{children:(0,t.jsx)(l.default,{})})})})}},1641:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(7437),s=r(8667);let c="v4.0.0",o=["3899776319","3097868529","5568985167","9998318791","1629740152"];function a(){if(c.includes("dev")||c.includes("beta")||c.includes("prerelease"))return(0,t.jsx)(t.Fragment,{});let e=Math.floor(Math.random()*o.length),n=o[e];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-client":"ca-pub-5140625606505249","data-ad-slot":n,"data-ad-format":"auto","data-full-width-responsive":"true"}),(0,t.jsx)(s.default,{id:"ads-".concat(n),children:"console.log('[Display Ads]: ".concat(n,"');(adsbygoogle = window.adsbygoogle || []).push({});")})]})}},9470:function(e,n,r){"use strict";r.d(n,{$0:function(){return t.default},AU:function(){return c.default},X6:function(){return s.default}});var t=r(1228);r(6853);var s=r(5872),c=r(2695)},4217:function(e,n,r){"use strict";r.d(n,{default:function(){return o}});var t=r(7437);let s={backgroundColor:"var(--gray-50)",animation:"loading 3s infinite"};function c(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("li",{className:"search-results__item",children:[(0,t.jsx)("div",{className:"search-results__thumbnail",style:{width:"100%",height:"100%",...s}}),(0,t.jsxs)("div",{className:"search-results__container",children:[(0,t.jsx)("div",{className:"search-results__user-icon",style:{aspectRatio:"1/1",boxShadow:"none",...s}}),(0,t.jsxs)("div",{className:"search-results__video-info",children:[(0,t.jsx)("h3",{className:"search-results__title",style:{width:"75%",height:"50%",borderRadius:"0.5rem",...s}}),(0,t.jsx)("div",{className:"search-results__metadata",style:{width:"75%",height:"50%",borderRadius:"0.5rem",...s}})]})]})]})})}function o(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("ul",{className:"search-results",children:[(0,t.jsx)(c,{}),(0,t.jsx)(c,{}),(0,t.jsx)(c,{}),(0,t.jsx)(c,{}),(0,t.jsx)(c,{}),(0,t.jsx)(c,{}),(0,t.jsx)(c,{}),(0,t.jsx)(c,{})]}),(0,t.jsx)("style",{children:"@keyframes loading{0%{opacity:0.25}50%{opacity:1}100%{opacity:0.25}}"})]})}},5059:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(7099);let s=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dateStyle:"medium",timeStyle:"medium"};return new Date(e).toLocaleString("ja",{timeZone:"Asia/Tokyo",...n})},c={blue:"#88c0fc",green:"#00cc99",red:"#ff7e9f",gray:"#afb5c5",yellow:"#ffc711"},o={log:"[   LOG   ]",info:"[   INFO  ]",success:"[ SUCCESS ]",warning:"[ WARNING ]",error:"[  ERROR  ]"},a="padding: 2.5px 4px;border-radius: 2px;",i="padding: 2px 4px;border-radius: 2px;",l={background:"background-color: rgb(255 0 255 / 20%);".concat(a),color:"color: pink;"},u={log:"background-color: ".concat(c.gray,"40;").concat(a),info:"background-color: ".concat(c.blue,"40;").concat(a),success:"background-color: ".concat(c.green,"40;").concat(a),warning:"border: 2px solid ".concat(c.yellow,"40;").concat(i),error:"border: 2px solid ".concat(c.red,"40;").concat(i)};function d(e){return"%c[".concat(s(new Date),"]%c %c").concat(o[e],"%c: %c")}var h={log:e=>{t.dz&&console.log(d("log")+e,l.background,"",u.log,"","color: ".concat(c.gray))},info:e=>{t.dz&&console.log(d("info")+e,l.background,"",u.info,"","color: ".concat(c.blue))},success:e=>{console.log(d("success")+e,l.background,"",u.success,"","color: ".concat(c.green))},warning:e=>{console.warn(d("warning")+e,l.color,"",u.warning,"","color: ".concat(c.yellow))},error:e=>{console.error(d("error")+e,l.color,"",u.error,"","color: ".concat(c.red))}}}},function(e){e.O(0,[289,648,145,3,987,971,117,744],function(){return e(e.s=1626)}),_N_E=e.O()}]);