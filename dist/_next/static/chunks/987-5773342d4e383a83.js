(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{4400:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(7437),n=t(7648);function r(e){let{id:s,children:t,className:r}=e;return s?(0,a.jsx)(n.default,{href:"/channel/?id=".concat(s),className:r,prefetch:!1,scroll:!1,children:t}):(0,a.jsx)(a.Fragment,{children:t})}},2695:function(e,s,t){"use strict";t.d(s,{default:function(){return n}});var a=t(7437);function n(e){let{children:s,id:t}=e;return(0,a.jsx)("div",{className:"sentence__contents",id:t,children:s})}},5872:function(e,s,t){"use strict";t.d(s,{default:function(){return n}});var a=t(7437);function n(e){let{id:s,relation:t,headingText:n,other:r,status:c}=e;return(0,a.jsxs)("div",{className:"sentence__heading-container",id:s,"data-status":null!=c?c:"info",children:[(0,a.jsx)("span",{className:"sentence__heading-relation".concat((null==r?void 0:r.relationClass)?" "+r.relationClass:""),children:t}),(0,a.jsx)("h2",{className:"sentence__heading".concat((null==r?void 0:r.headingClass)?" "+r.headingClass:""),children:n})]})}},1228:function(e,s,t){"use strict";var a=t(7437),n=t(2265);s.default=(0,n.memo)(function(e){let{children:s,className:t,center:n,id:r,complete:c,isDisabledAnimation:l,ref:i}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{ref:i,className:"section sentence ".concat(l?"":"fade-in-animation"," ").concat(n?"sentence--center":"").concat(t?" "+t:""),id:r,"data-complete":c,children:s})})})},6853:function(e,s,t){"use strict";t.d(s,{default:function(){return r}});var a=t(7437),n=t(7648);function r(e){let{children:s}=e;return(0,a.jsxs)(a.Fragment,{children:[s,(0,a.jsx)("section",{className:"section questionnaire fade-in-animation",children:(0,a.jsxs)("p",{children:["【お願い】検索や動画閲覧などに問題がありましたら、",(0,a.jsx)(n.default,{href:"/feedback/",target:"_blank",prefetch:!1,children:"フィードバック"}),"の送信をお願いします。"]})})]})}},7827:function(e,s,t){"use strict";t.d(s,{default:function(){return m}});var a=t(7437),n=t(2265),r=t(3145),c=t(7648),l=t(9376),i=t(4400),d=t(7099);let h=(0,n.memo)(function(e){let{renderer:{data:{title:s,id:t,ago:n,viewCount:h,thumbnail:u,author:{name:o,icon:m,id:x},length:f},isShort:j}}=e;x=null!=x?x:null;let _=(0,l.useRouter)(),g="/watch/?id=".concat(t);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("li",{className:"search-results__item ".concat(j?"search-results__item--short":""),onClick:e=>{let s=e.target;switch(s.tagName){case"DIV":s.classList.contains("search-results__uploader")||_.push(g);break;case"A":s.href.includes("/proxy/channel")||_.push(g);break;case"IMG":case"BUTTON":case"SPAN":break;default:_.push(g)}},children:[(0,a.jsx)(r.default,{className:"search-results__thumbnail lazyload",width:0,height:0,style:{width:"100%",height:"100%"},alt:"サムネイル画像",src:d.ud.thumbnail.unknown,"data-src":u,loading:"eager",decoding:"async",fetchPriority:"high",quality:100,priority:!0}),(0,a.jsx)("div",{children:f?(0,a.jsx)("span",{className:"search-results__length",children:f}):(0,a.jsx)(a.Fragment,{})}),(0,a.jsxs)("div",{className:"search-results__container",children:[m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{id:x,className:"darkColor",children:(0,a.jsx)(r.default,{className:"search-results__user-icon lazyload",src:d.ud.icon.unknown,"data-src":m||d.ud.icon.unknown,alt:"投稿者のアイコン画像",decoding:"async",loading:"eager",fetchPriority:"high",width:0,height:0})})}):(0,a.jsx)(a.Fragment,{}),(0,a.jsxs)("div",{className:"search-results__video-info",children:[(0,a.jsx)("h3",{className:"search-results__title",title:s.replaceAll('"',"&quot;"),children:(0,a.jsx)(c.default,{href:g,className:"darkColor",prefetch:!1,scroll:!1,children:s})}),(0,a.jsxs)("div",{className:"search-results__metadata",children:[(0,a.jsx)("div",{className:"search-results__uploader",children:m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{id:x,className:"darkColor",children:o})}):(0,a.jsx)(a.Fragment,{})}),(0,a.jsxs)("div",{className:"search-results__ago-and-views",children:[n||"",n&&h?"・":"",h||""]})]})]})]})]})})}),u=(0,n.memo)(function(e){let{renderers:s,noVideosMessage:t,className:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("li",{className:"search-results__section ".concat(n||""),children:[(0,a.jsxs)("h3",{className:"search-results__section-title",children:[(0,a.jsx)("div",{className:"search-results__section-title-icon",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",children:(0,a.jsx)("path",{d:"M600-280q-73 0-127.5-45.5T404-440H160v-80h244q5-23 13.5-43t22.5-37H240v-80h360q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-320 80v-80h120v80H280Zm320-200Z"})})}),s.title]}),(0,a.jsx)(m,{items:s.items,noVideosMessage:t||"動画はありません。"})]},s.title)})}),o=(0,n.memo)(function(e){var s,t;let{renderer:{data:{title:n,id:h,thumbnail:u,author:o},firstVideoIds:m}}=e,x=(0,l.useRouter)(),f="/watch/?id=".concat(m[0]),j="/playlist/?id=".concat(h);return(0,a.jsxs)("li",{className:"search-results__item",onClick:e=>{let s=e.target;switch(s.tagName){case"DIV":s.classList.contains("search-results__uploader")||x.push(j);break;case"A":s.href.includes("/channel")||s.href.includes("/watch")||x.push(j);break;case"H3":s.classList.contains("search-results__title")||x.push(j);break;case"IMG":case"BUTTON":case"SPAN":break;default:x.push(j)}},children:[(0,a.jsx)(r.default,{className:"search-results__thumbnail lazyload",width:0,height:0,style:{width:"100%",height:"100%"},alt:"サムネイル画像",src:d.ud.thumbnail.unknown,"data-src":u,loading:"eager",decoding:"async",fetchPriority:"high",quality:100,priority:!0}),(0,a.jsx)("div",{children:(0,a.jsxs)("span",{className:"search-results__playlist",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,a.jsx)("path",{d:"M640-160q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 1.5t19 6.5v-328h200v80H760v360q0 50-35 85t-85 35ZM120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Z"})}),"再生リスト"]})}),(0,a.jsxs)("div",{className:"search-results__container",children:[o.icon?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{id:null!==(t=o.id)&&void 0!==t?t:null,className:"darkColor",children:(0,a.jsx)(r.default,{className:"search-results__user-icon lazyload",src:d.ud.icon.unknown,"data-src":o.icon,alt:"投稿者のアイコン画像",decoding:"async",loading:"eager",fetchPriority:"high",width:0,height:0})})}):(0,a.jsx)(a.Fragment,{}),(0,a.jsxs)("div",{className:"search-results__video-info",children:[(0,a.jsx)("h3",{className:"search-results__title",title:n.replaceAll('"',"&quot;"),children:(0,a.jsx)(c.default,{href:f,className:"darkColor",prefetch:!1,scroll:!1,children:n})}),(0,a.jsxs)("div",{className:"search-results__metadata",children:[(0,a.jsx)("div",{className:"search-results__uploader",children:(0,a.jsx)(i.Z,{id:null!==(s=o.id)&&void 0!==s?s:null,className:"darkColor",children:o.name})}),(0,a.jsx)(c.default,{href:j,className:"darkColor",prefetch:!1,scroll:!1,children:"再生リストの詳細を見る"})]})]})]})]},n)});var m=(0,n.memo)(function(e){let{items:s,noVideosMessage:t}=e,r=(0,n.useMemo)(()=>s.map((e,s)=>"video"===e.type?(0,a.jsx)(h,{renderer:e},s):"section"===e.type?(0,a.jsx)(u,{renderers:e,noVideosMessage:t},s):"playlist"===e.type?(0,a.jsx)(o,{renderer:e},s):(0,a.jsx)(a.Fragment,{})),[s,t]);return(0,a.jsx)(a.Fragment,{children:s&&0!==s.length?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"search-results",children:r},s.length)}):(0,a.jsx)("h3",{className:"h3",children:t||"動画はありません。"})})})},7099:function(e,s,t){"use strict";t.d(s,{T5:function(){return r},dz:function(){return c},ud:function(){return n}});let a="v4-dev",n={icon:{unknown:"/s/img/unknown-user-icon.svg"},thumbnail:{unknown:"/s/img/unknown-thumbnail.png"}},r={base:"https://innertube.ybd-project.workers.dev"},c=a.includes("dev")||a.includes("beta")||a.includes("test")},3570:function(){}}]);