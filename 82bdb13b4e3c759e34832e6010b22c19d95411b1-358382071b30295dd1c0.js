"use strict";(self.webpackChunkproduct_website_template=self.webpackChunkproduct_website_template||[]).push([[451],{1965:function(e,t,r){r.d(t,{C:function(){return R}});var n=r(1469),s=r.n(n),o="ParsedHTML-module--container--4efc0",c=r(7311),l=r(7294);const a=l.createContext({}),i=!0;function d({baseColor:e,highlightColor:t,width:r,height:n,borderRadius:s,circle:o,direction:c,duration:l,enableAnimation:a=i}){const d={};return"rtl"===c&&(d["--animation-direction"]="reverse"),"number"==typeof l&&(d["--animation-duration"]=`${l}s`),a||(d["--pseudo-element-display"]="none"),"string"!=typeof r&&"number"!=typeof r||(d.width=r),"string"!=typeof n&&"number"!=typeof n||(d.height=n),"string"!=typeof s&&"number"!=typeof s||(d.borderRadius=s),o&&(d.borderRadius="50%"),void 0!==e&&(d["--base-color"]=e),void 0!==t&&(d["--highlight-color"]=t),d}function u({count:e=1,wrapper:t,className:r,containerClassName:n,containerTestId:s,circle:o=!1,style:c,...u}){var h,m,f;const p=l.useContext(a),g={...u};for(const[l,a]of Object.entries(u))void 0===a&&delete g[l];const b={...p,...g,circle:o},x={...c,...d(b)};let v="react-loading-skeleton";r&&(v+=` ${r}`);const y=null!==(h=b.inline)&&void 0!==h&&h,j=[],w=Math.ceil(e);for(let a=0;a<w;a++){let t=x;if(w>e&&a===w-1){const r=null!==(m=t.width)&&void 0!==m?m:"100%",n=e%1,s="number"==typeof r?r*n:`calc(${r} * ${n})`;t={...t,width:s}}const r=l.createElement("span",{className:v,style:t,key:a},"‌");y?j.push(r):j.push(l.createElement(l.Fragment,{key:a},r,l.createElement("br",null)))}return l.createElement("span",{className:n,"data-testid":s,"aria-live":"polite","aria-busy":null!==(f=b.enableAnimation)&&void 0!==f?f:i},t?j.map(((e,r)=>l.createElement(t,{key:r},e))):j)}var h=r(5663),m=r(7814),f=r(9417),p=r(512),g=r(5893);var b=r(1700),x=r.n(b),v=r(4160);const y=(e,t,r,n)=>{if(e.href.includes("/"))if(e.href.includes("/")){const r=e.href.split("/").reverse()[1],s=n.some((e=>e.location.substring(e.location.lastIndexOf("/")+1)===r));if(s&&(0,v.c4)("/"+x()(r)+"/"+t),!s){const t=e.href.startsWith("/")?e.href:"/"+e.href;open("https://github.com/CommonGateway/WaardepapierenRegister/blob/master"+t)}}else;else{const e=x()(r.split("/").reverse()[1]);(0,v.c4)("/"+e+"/"+t)}},j=e=>{var t,r,n;const s=null!==(t=e.id)&&void 0!==t?t:e.href.replace("#","user-content-"),o=document.getElementById(s),c=null!==(r=null===(n=document.getElementById("header"))||void 0===n?void 0:n.clientHeight)&&void 0!==r?r:100;o&&window.scrollTo({top:o.offsetTop-(c+24),behavior:"smooth"})};var w="getList-module--list--5f814";var N=r(1562);var C=r(2856);var k=r(1072);const E=e=>{const{directories:t}=(0,C.O)(),{t:r}=(0,k.$G)(),n={scrollLeftButton:r("Left scroll button"),scrollRightButton:r("Right scroll button")},s={replace:r=>{var o;let{attribs:l,parent:a,children:i,name:d}=r;if(!l)return;const u=(0,c.e_)(l);return!l||"h1"!==d&&"h2"!==d&&"h3"!==d&&"h4"!==d?l&&"p"===d?((e,t,r)=>(0,g.jsx)(h.nv,{...e,children:(0,c.du)(t,r)}))(u,i,s):l&&"a"===d?((e,t,r,n,s)=>{const o={...e,onClick:t=>{t.preventDefault();const r=x()(e.href.substring(e.href.lastIndexOf("/")+1).replace(".md",""));e.href?"anchor"!==e.className&&"#"!==Array.from(e.href)[0]?e.href.includes("://")?e.href.includes("://")&&open(e.href):y(e,r,s,n):j(e):(0,v.c4)("#")}};return(0,g.jsx)(h.rU,{...o,children:(0,c.du)(t,r)})})(u,i,s,t,e):!l||"ol"!==d&&"ul"!==d?l&&"li"===d?((e,t,r,n)=>{switch(t.name){case"ol":return(0,g.jsx)(h.Ux,{...e,children:(0,c.du)(r,n)});case"ul":return(0,g.jsx)(h.AS,{...e,children:(0,c.du)(r,n)})}})(u,a,i,s):l&&"img"===d?((e,t)=>{let r=e.src;if(!e.src.includes("https://")){const t="https://github.com/CommonGateway/WaardepapierenRegister",n=null==t?void 0:t.replace("https://github.com/","");r="https://raw.githubusercontent.com/"+n+"/master/docs/features/"+e.src}let n=e.alt;e.alt||(n=e.title),e.alt||e.title||(n=e.src);const s={...e,src:r,alt:n,href:"",onClick:e=>{"a"===t.name&&e.preventDefault(),"a"!==t.name&&(e.stopPropagation(),open(r))}};return(0,g.jsx)(h.Ee,{...s})})(u,a):l&&"blockquote"===d?((e,t)=>(0,g.jsx)(h.bZ,{children:(0,c.du)(e,t)}))(i,s):l&&"div"===d&&null!==(o=l.class)&&void 0!==o&&o.includes("markdown-alert")?((e,t,r)=>{switch(!0){case r.includes("note")||r.includes("info"):return(0,g.jsx)(h.bZ,{className:"getAlert-module--info--6faee",type:"info",children:(0,c.du)(e,t)});case r.includes("error"):return(0,g.jsx)(h.bZ,{className:"getAlert-module--error--a7ff3",type:"error",children:(0,c.du)(e,t)});case r.includes("warning"):return(0,g.jsx)(h.bZ,{className:"getAlert-module--warning--16e7a",type:"warning",children:(0,c.du)(e,t)});case r.includes("succes")||r.includes("ok"):return(0,g.jsx)(h.bZ,{className:"getAlert-module--ok--75642",type:"ok",children:(0,c.du)(e,t)});default:return(0,g.jsx)(h.bZ,{type:"info",children:(0,c.du)(e,t)})}})(i,s,l.class):l&&"table"===d?((e,t,r,n)=>(0,g.jsx)(N.QZ,{ariaLabels:n,children:(0,g.jsx)(h.iA,{className:"getTable-module--table--b07c6",...e,children:(0,c.du)(t,r)})}))(u,i,s,n):l&&"tr"===d?((e,t,r)=>(0,g.jsx)(h.SC,{className:"getTableRow-module--tableRow--43fa5",...e,children:(0,c.du)(t,r)}))(u,i,s):l&&"thead"===d?((e,t,r)=>(0,g.jsx)(h.xD,{className:"getTableHeader-module--tableHeader--94fa3",...e,children:(0,c.du)(t,r)}))(u,i,s):l&&"th"===d?((e,t,r)=>(0,g.jsx)(h.xs,{...e,children:(0,c.du)(t,r)}))(u,i,s):l&&"tbody"===d?((e,t,r)=>(0,g.jsx)(h.RM,{className:"getTableBody-module--tableBody--7e02c",...e,children:(0,c.du)(t,r)}))(u,i,s):l&&"td"===d?((e,t,r)=>(0,g.jsx)(h.pj,{className:"getTableCell-module--tableCell--c1c5e",...e,children:(0,c.du)(t,r)}))(u,i,s):l&&"svg"===d?((e,t,r)=>e.className.includes("octicon octicon-link")?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)("svg",{...e,children:(0,c.du)(t,r)}))(u,i,s):!l||"code"!==d&&"pre"!==d?void 0:((e,t,r,n,s)=>{switch(e){case"code":return(0,g.jsx)(h.EK,{...t,children:(0,c.du)(r,n)});case"pre":return(0,g.jsx)(h.dn,{...t,children:(0,g.jsx)(N.QZ,{ariaLabels:s,children:(0,c.du)(r,n)})})}})(d,u,i,s,n):((e,t,r,n)=>{switch(e){case"ol":return(0,g.jsx)(h.GS,{className:w,...t,children:(0,c.du)(r,n)});case"ul":return(0,g.jsx)(h.QI,{className:w,...t,children:(0,c.du)(r,n)})}})(d,u,i,s):((e,t,r,n)=>{switch(e){case"h1":return(0,g.jsx)(h.nL,{...t,children:(0,c.du)(r,n)});case"h2":return(0,g.jsx)(h.XJ,{...t,children:(0,c.du)(r,n)});case"h3":return(0,g.jsx)(h.aC,{...t,children:(0,c.du)(r,n)});case"h4":return(0,g.jsx)(h.k8,{...t,children:(0,c.du)(r,n)})}})(d,u,i,s)}};return{options:s}},R=e=>{let{contentQuery:t,location:r,layoutClassName:n}=e;const{options:l}=E(r);return t.isLoading?(0,g.jsx)("div",{className:o,children:(0,g.jsx)(u,{height:"200px"})}):t.isError?(0,g.jsx)("div",{className:o,children:(0,g.jsx)(h.bZ,{icon:(0,g.jsx)(m.G,{icon:f.e7M}),type:"error",children:"Oops, something went wrong retrieving the .md file from GitHub."})}):s()(t.data)?void 0:(0,g.jsx)("div",{className:(0,p.Z)(o,n&&n),children:(0,c.ZP)(t.data,l)})}},1529:function(e,t,r){r.d(t,{H:function(){return c}});var n=r(7294),s=r(8767),o=r(7177);const c=()=>{const e=n.useContext(o.Z);return{getContent:t=>(0,s.useQuery)(["contents",t],(()=>null==e?void 0:e.GitHub.getContent(t)),{onError:e=>{console.warn(e.message)}}),getDirectoryItems:t=>(0,s.useQuery)(["directory-items",t],(()=>null==e?void 0:e.GitHub.getDirectoryItems(t)),{onError:e=>{console.warn(e.message)}})}}},2856:function(e,t,r){r.d(t,{O:function(){return s}});var n=r(7294);const s=()=>{const[e,t]=n.useState([]);n.useEffect((()=>{const e='[{"name": "docs", "location": "/docs"}]';try{const r=JSON.parse(e);t(r)}catch{console.warn("Something went wrong parsing the GitHub directories.")}}),[]);const r=e=>e.replace("-"," ");return{directories:e,getSlugFromName:e=>e.replace(" ","-"),getDirectoryReadMeLocation:t=>{const n=e.find((e=>e.name===r(t)));return n?n.location+"/README.md":""},getDetailMdLocation:(t,n)=>{const s=e.find((e=>e.name===r(t)));return s?s.location+"/"+r(n)+".md":""}}}}}]);
//# sourceMappingURL=82bdb13b4e3c759e34832e6010b22c19d95411b1-358382071b30295dd1c0.js.map