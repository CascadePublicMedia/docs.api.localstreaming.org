"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9041],{75048:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>h,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>f});var s=r(62540),n=r(43023),i=r(63696);const t={id:"image-with-profile",title:"ImageWithProfile"},l=void 0,d={id:"graphql-api/references/objects/image-with-profile",title:"ImageWithProfile",description:"Image URL with a profile.",source:"@site/docs/graphql-api/references/objects/image-with-profile.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/image-with-profile",permalink:"/graphql-api/references/objects/image-with-profile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"image-with-profile",title:"ImageWithProfile"},sidebar:"graphqlSidebar",previous:{title:"ImageUploadUrl",permalink:"/graphql-api/references/objects/image-upload-url"},next:{title:"ItemCount",permalink:"/graphql-api/references/objects/item-count"}},c={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:a,children:r,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[d,c]=(0,i.useState)(t);return(0,s.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&r]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ImageWithProfile.<b>image</b></code><Bullet></Bullet><code>URL!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"imagewithprofileimageurl---",level:4},{value:'<code>ImageWithProfile.image.<b>transforms</b></code><Bullet></Bullet><code>ImageTransformsInput</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"imagewithprofileimagetransformsimagetransformsinput--",level:5},{value:'<code>ImageWithProfile.<b>profile</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"imagewithprofileprofilestring---",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Image URL with a profile."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type ImageWithProfile {\n  image(\n    transforms: ImageTransformsInput\n  ): URL!\n  profile: String!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"imagewithprofileimageurl---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ImageWithProfile.",(0,s.jsx)("b",{children:"image"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/url",children:(0,s.jsx)(a.code,{children:"URL!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.p,{children:"Image URL."}),"\n",(0,s.jsxs)(a.h5,{id:"imagewithprofileimagetransformsimagetransformsinput--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ImageWithProfile.image.",(0,s.jsx)("b",{children:"transforms"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/inputs/image-transforms-input",children:(0,s.jsx)(a.code,{children:"ImageTransformsInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(a.h4,{id:"imagewithprofileprofilestring---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ImageWithProfile.",(0,s.jsx)("b",{children:"profile"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.p,{children:"Image profile."}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/graphql-api/references/objects/home-screen-hero",children:(0,s.jsx)(a.code,{children:"HomeScreenHero"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-show",children:(0,s.jsx)(a.code,{children:"NormalizedShow"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-video",children:(0,s.jsx)(a.code,{children:"NormalizedVideo"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/objects/station",children:(0,s.jsx)(a.code,{children:"Station"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},43023:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>l});var s=r(63696);const n={},i=s.createContext(n);function t(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);