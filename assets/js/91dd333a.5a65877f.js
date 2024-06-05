"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9099],{40603:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>u,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=d(62540),t=d(43023),s=d(63696);const i={id:"update-video",title:"updateVideo"},r=void 0,o={id:"graphql-api/admin-api/mutations/update-video",title:"updateVideo",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/update-video.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/update-video",permalink:"/graphql-api/admin-api/mutations/update-video",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-video",title:"updateVideo"},sidebar:"schemaSidebar",previous:{title:"updateUser",permalink:"/graphql-api/admin-api/mutations/update-user"},next:{title:"updateViewer",permalink:"/graphql-api/admin-api/mutations/update-viewer"}},c={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:d,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[o,c]=(0,s.useState)(i);return(0,n.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&d]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateVideo.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatevideoidstring---",level:4},{value:'<code>updateVideo.<b>input</b></code><Bullet></Bullet><code>UpdateVideoInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatevideoinputupdatevideoinput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Video</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"video--",level:4}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"updateVideo(\n  id: String!\n  input: UpdateVideoInput!\n): Video!\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"updatevideoidstring---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateVideo.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"updatevideoinputupdatevideoinput---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateVideo.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"../../../graphql-api/references/inputs/update-video-input",children:(0,n.jsx)(a.code,{children:"UpdateVideoInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"video--",children:[(0,n.jsx)(a.a,{href:"../../../graphql-api/references/objects/video",children:(0,n.jsx)(a.code,{children:"Video"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Global video metadata."}),"\n",(0,n.jsx)(a.p,{children:"Overrides source metadata."}),"\n",(0,n.jsxs)(a.p,{children:["More detailed documentation about fields used from this type is available on the ",(0,n.jsx)(a.code,{children:"NormalizedVideo"})," type."]}),"\n"]})]})}function b(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43023:(e,a,d)=>{d.d(a,{R:()=>i,x:()=>r});var n=d(63696);const t={},s=n.createContext(t);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);