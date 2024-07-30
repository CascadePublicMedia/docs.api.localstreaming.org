"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8409],{55490:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>s,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var n=a(62540),l=a(43023),i=a(63696);const d={id:"update-collection-item",title:"updateCollectionItem"},s=void 0,c={id:"graphql-api/admin-api/mutations/update-collection-item",title:"updateCollectionItem",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/update-collection-item.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/update-collection-item",permalink:"/graphql-api/admin-api/mutations/update-collection-item",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-collection-item",title:"updateCollectionItem"},sidebar:"graphqlSidebar",previous:{title:"updateCollectionGroup",permalink:"/graphql-api/admin-api/mutations/update-collection-group"},next:{title:"updateCollection",permalink:"/graphql-api/admin-api/mutations/update-collection"}},o={},r=()=>{const e={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,l.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:a,startOpen:d=!1})=>{const s={details:"details",summary:"summary",...(0,l.R)()},[c,o]=(0,i.useState)(d);return(0,n.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(s.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateCollectionItem.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecollectionitemidstring---",level:4},{value:'<code>updateCollectionItem.<b>input</b></code><Bullet></Bullet><code>UpdateCollectionItemInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecollectioniteminputupdatecollectioniteminput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>CollectionItem</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collectionitem--",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"updateCollectionItem(\n  id: String!\n  input: UpdateCollectionItemInput!\n): CollectionItem!\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"updatecollectionitemidstring---",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateCollectionItem.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/graphql-api/references/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(t.h4,{id:"updatecollectioniteminputupdatecollectioniteminput---",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateCollectionItem.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/graphql-api/references/inputs/update-collection-item-input",children:(0,n.jsx)(t.code,{children:"UpdateCollectionItemInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"collectionitem--",children:[(0,n.jsx)(t.a,{href:"/graphql-api/references/objects/collection-item",children:(0,n.jsx)(t.code,{children:"CollectionItem"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},43023:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>s});var n=a(63696);const l={},i=n.createContext(l);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);