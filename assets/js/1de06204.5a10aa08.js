"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5631],{99582:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=n(62540),s=n(43023),d=n(63696);const i={id:"update-like",title:"updateLike"},r=void 0,l={id:"graphql-api/consumer-api/mutations/update-like",title:"updateLike",description:"Updates a like (or dislike) for a viewer.",source:"@site/docs/graphql-api/consumer-api/mutations/update-like.mdx",sourceDirName:"graphql-api/consumer-api/mutations",slug:"/graphql-api/consumer-api/mutations/update-like",permalink:"/graphql-api/consumer-api/mutations/update-like",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-like",title:"updateLike"},sidebar:"schemaSidebar",previous:{title:"signOut",permalink:"/graphql-api/consumer-api/mutations/sign-out"},next:{title:"updateMyList",permalink:"/graphql-api/consumer-api/mutations/update-my-list"}},c={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:n,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[l,c]=(0,d.useState)(i);return(0,t.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateLike.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatelikeidstring---",level:4},{value:'<code>updateLike.<b>input</b></code><Bullet></Bullet><code>UpdateLikeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatelikeinputupdatelikeinput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Like</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"like--",level:4}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Updates a like (or dislike) for a viewer."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"updateLike(\n  id: String!\n  input: UpdateLikeInput!\n): Like!\n"})}),"\n",(0,t.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(a.h4,{id:"updatelikeidstring---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["updateLike.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"updatelikeinputupdatelikeinput---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["updateLike.",(0,t.jsx)("b",{children:"input"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/inputs/update-like-input",children:(0,t.jsx)(a.code,{children:"UpdateLikeInput!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(a.h4,{id:"like--",children:[(0,t.jsx)(a.a,{href:"../../../graphql-api/references/objects/like",children:(0,t.jsx)(a.code,{children:"Like"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:'Viewer content reaction ("like" or "dislike").'}),"\n"]})]})}function b(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},43023:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>r});var t=n(63696);const s={},d=t.createContext(s);function i(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);