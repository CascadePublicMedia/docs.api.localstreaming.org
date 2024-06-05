"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6493],{86770:(e,d,i)=>{i.r(d),i.d(d,{Badge:()=>h,Bullet:()=>t,Details:()=>b,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var a=i(62540),l=i(43023),r=i(63696);const s={id:"normalized-video-file",title:"NormalizedVideoFile"},n=void 0,c={id:"graphql-api/references/objects/normalized-video-file",title:"NormalizedVideoFile",description:"Information about video source file.",source:"@site/docs/graphql-api/references/objects/normalized-video-file.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/normalized-video-file",permalink:"/graphql-api/references/objects/normalized-video-file",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-video-file",title:"NormalizedVideoFile"},sidebar:"schemaSidebar",previous:{title:"NormalizedVideoCaptionFile",permalink:"/graphql-api/references/objects/normalized-video-caption-file"},next:{title:"NormalizedVideoFor",permalink:"/graphql-api/references/objects/normalized-video-for"}},o={},t=()=>{const e={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const d={a:"a",...(0,l.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const d={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:d,children:i,startOpen:s=!1})=>{const n={details:"details",summary:"summary",...(0,l.R)()},[c,o]=(0,r.useState)(s);return(0,a.jsxs)(n.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:d}),c&&i]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>NormalizedVideoFile.<b>bitrate</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilebitrateint--",level:4},{value:'<code>NormalizedVideoFile.<b>fairplayCertificate</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilefairplaycertificatestring--",level:4},{value:'<code>NormalizedVideoFile.<b>fairplayLicense</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilefairplaylicensestring--",level:4},{value:'<code>NormalizedVideoFile.<b>isDrmProtected</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileisdrmprotectedboolean--",level:4},{value:'<code>NormalizedVideoFile.<b>playreadyLicense</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileplayreadylicensestring--",level:4},{value:'<code>NormalizedVideoFile.<b>profile</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileprofilestring--",level:4},{value:'<code>NormalizedVideoFile.<b>type</b></code><Bullet></Bullet><code>NormalizedVideoFileType</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofiletypenormalizedvideofiletype--",level:4},{value:'<code>NormalizedVideoFile.<b>url</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileurlstring--",level:4},{value:'<code>NormalizedVideoFile.<b>widevineLicense</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilewidevinelicensestring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.p,{children:"Information about video source file."}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-graphql",children:"type NormalizedVideoFile {\n  bitrate: Int\n  fairplayCertificate: String\n  fairplayLicense: String\n  isDrmProtected: Boolean\n  playreadyLicense: String\n  profile: String\n  type: NormalizedVideoFileType\n  url: String\n  widevineLicense: String\n}\n"})}),"\n",(0,a.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofilebitrateint--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"bitrate"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/int",children:(0,a.jsx)(d.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Video bitrate. Only set for MP4 files."}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofilefairplaycertificatestring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"fairplayCertificate"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Apple FairPlay encryption certificate URL."}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofilefairplaylicensestring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"fairplayLicense"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Apple FairPlay license URL."}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofileisdrmprotectedboolean--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"isDrmProtected"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/boolean",children:(0,a.jsx)(d.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Whether the video source file is DRM protected."}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofileplayreadylicensestring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"playreadyLicense"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"PlayReady DRM license URL."}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofileprofilestring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"profile"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofiletypenormalizedvideofiletype--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/enums/normalized-video-file-type",children:(0,a.jsx)(d.code,{children:"NormalizedVideoFileType"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofileurlstring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"url"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Video source file URL."}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"normalizedvideofilewidevinelicensestring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,a.jsx)("b",{children:"widevineLicense"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Widevine DRM license URL."}),"\n"]}),"\n",(0,a.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"../../../graphql-api/references/objects/normalized-pbs-video-playback-files",children:(0,a.jsx)(d.code,{children:"NormalizedPbsVideoPlaybackFiles"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:d}={...(0,l.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},43023:(e,d,i)=>{i.d(d,{R:()=>s,x:()=>n});var a=i(63696);const l={},r=a.createContext(l);function s(e){const d=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function n(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:d},e.children)}}}]);