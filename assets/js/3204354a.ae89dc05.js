"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5725],{31254:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=t(62540),d=t(43023),r=t(63696);const s={id:"update-viewer",title:"updateViewer"},i=void 0,c={id:"graphql-api/admin-api/mutations/update-viewer",title:"updateViewer",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/update-viewer.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/update-viewer",permalink:"/graphql-api/admin-api/mutations/update-viewer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-viewer",title:"updateViewer"},sidebar:"graphqlSidebar",previous:{title:"updateVideo",permalink:"/graphql-api/admin-api/mutations/update-video"},next:{title:"updateWatchHistory",permalink:"/graphql-api/admin-api/mutations/update-watch-history"}},l={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:t,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,d.R)()},[c,l]=(0,r.useState)(s);return(0,n.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&t]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateViewer.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatevieweridstring---",level:4},{value:'<code>updateViewer.<b>input</b></code><Bullet></Bullet><code>UpdateViewerInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateviewerinputupdateviewerinput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Viewer</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewer--",level:4}];function x(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"updateViewer(\n  id: String!\n  input: UpdateViewerInput!\n): Viewer!\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"updatevieweridstring---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateViewer.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(a.h4,{id:"updateviewerinputupdateviewerinput---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateViewer.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/graphql-api/references/inputs/update-viewer-input",children:(0,n.jsx)(a.code,{children:"UpdateViewerInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"viewer--",children:[(0,n.jsx)(a.a,{href:"/graphql-api/references/objects/viewer",children:(0,n.jsx)(a.code,{children:"Viewer"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.p,{children:"Viewer on a Local Streaming platform frontend (end user)."})]})}function m(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43023:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>i});var n=t(63696);const d={},r=n.createContext(d);function s(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);