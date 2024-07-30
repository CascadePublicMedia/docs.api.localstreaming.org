"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9412],{30077:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>b});var s=d(62540),t=d(43023),n=d(63696);const i={id:"update-pbs-video",title:"updatePbsVideo"},r=void 0,o={id:"graphql-api/admin-api/mutations/update-pbs-video",title:"updatePbsVideo",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/update-pbs-video.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/update-pbs-video",permalink:"/graphql-api/admin-api/mutations/update-pbs-video",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-pbs-video",title:"updatePbsVideo"},sidebar:"graphqlSidebar",previous:{title:"updatePbsVideoAvailability",permalink:"/graphql-api/admin-api/mutations/update-pbs-video-availability"},next:{title:"updatePerson",permalink:"/graphql-api/admin-api/mutations/update-person"}},l={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:d,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[o,l]=(0,n.useState)(i);return(0,s.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&d]})},b=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updatePbsVideo.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatepbsvideoidstring---",level:4},{value:'<code>updatePbsVideo.<b>input</b></code><Bullet></Bullet><code>UpdatePbsVideoInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatepbsvideoinputupdatepbsvideoinput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>PbsVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideo--",level:4}];function h(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"updatePbsVideo(\n  id: String!\n  input: UpdatePbsVideoInput!\n): PbsVideo!\n"})}),"\n",(0,s.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(a.h4,{id:"updatepbsvideoidstring---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["updatePbsVideo.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(a.h4,{id:"updatepbsvideoinputupdatepbsvideoinput---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["updatePbsVideo.",(0,s.jsx)("b",{children:"input"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/inputs/update-pbs-video-input",children:(0,s.jsx)(a.code,{children:"UpdatePbsVideoInput!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(a.h4,{id:"pbsvideo--",children:[(0,s.jsx)(a.a,{href:"/graphql-api/references/objects/pbs-video",children:(0,s.jsx)(a.code,{children:"PbsVideo"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.p,{children:"Video metadata from a PBS Media Manager source."}),"\n",(0,s.jsx)(a.p,{children:"This metadata is synced regularly from PBS Media Manager as source data."}),"\n",(0,s.jsxs)(a.p,{children:["More detailed documentation about fields used from this type is available on the ",(0,s.jsx)(a.code,{children:"NormalizedVideo"})," type."]})]})}function x(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},43023:(e,a,d)=>{d.d(a,{R:()=>i,x:()=>r});var s=d(63696);const t={},n=s.createContext(t);function i(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);