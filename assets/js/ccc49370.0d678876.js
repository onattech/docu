"use strict";(self.webpackChunkdocusaurus_soft_design=self.webpackChunkdocusaurus_soft_design||[]).push([[6103],{4940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(9496),l=n(5924),o=n(374),r=n(9693),i=n(3487),s=n(841),c=n(9447),m=n(4778),d=n(7147),u=n(5855);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:l,date:r,tags:s,authors:c,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(o.d,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:r}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var v=n(217);function p(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:o}=(0,i.C)(),{nextItem:r,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:p}=d;return a.createElement(s.Z,{sidebar:t,toc:!u&&o.length>0?a.createElement(v.Z,{toc:o,minHeadingLevel:f,maxHeadingLevel:p}):void 0},a.createElement(c.Z,null,n),(r||m)&&a.createElement(g,{nextItem:r,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},217:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4778),l=n(9496),o=n(5924),r=n(6086);const i={tableOfContents:"tableOfContents_a4zv",docItemContainer:"docItemContainer_Nnrp"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,o.Z)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(r.Z,(0,a.Z)({},n,{linkClassName:s,linkActiveClassName:c})))}},6086:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(4778),l=n(9496),o=n(1848);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const v=(0,o.L)(),p=m??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return d((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:h}}),[s,c,p,h])),l.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:s},f))}}}]);