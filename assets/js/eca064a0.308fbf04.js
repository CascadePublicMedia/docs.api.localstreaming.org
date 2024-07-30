"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8009],{96683:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>g,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>t,metadata:()=>r,toc:()=>p});var i=d(62540),s=d(43023),o=d(63696);const t={id:"normalized-video-watch-position",title:"NormalizedVideoWatchPosition"},n=void 0,r={id:"graphql-api/references/objects/normalized-video-watch-position",title:"NormalizedVideoWatchPosition",description:"Watch position information for a specific video and viewer based on viewer watch history.",source:"@site/docs/graphql-api/references/objects/normalized-video-watch-position.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/normalized-video-watch-position",permalink:"/graphql-api/references/objects/normalized-video-watch-position",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-video-watch-position",title:"NormalizedVideoWatchPosition"},sidebar:"graphqlSidebar",previous:{title:"NormalizedVideoTrickPlayFile",permalink:"/graphql-api/references/objects/normalized-video-trick-play-file"},next:{title:"NormalizedVideo",permalink:"/graphql-api/references/objects/normalized-video"}},c={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:a,children:d,startOpen:t=!1})=>{const n={details:"details",summary:"summary",...(0,s.R)()},[r,c]=(0,o.useState)(t);return(0,i.jsxs)(n.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(n.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&d]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>NormalizedVideoWatchPosition.<b>completed</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositioncompletedboolean--",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositioncreatedatdatetime---",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>eventId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositioneventidstring---",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositionupdatedatdatetime---",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>watchTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositionwatchtimeint--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Watch position information for a specific video and viewer based on viewer watch history."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-graphql",children:"type NormalizedVideoWatchPosition {\n  completed: Boolean\n  createdAt: DateTime!\n  eventId: String!\n  updatedAt: DateTime!\n  watchTime: Int\n}\n"})}),"\n",(0,i.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideowatchpositioncompletedboolean--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,i.jsx)("b",{children:"completed"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/boolean",children:(0,i.jsx)(a.code,{children:"Boolean"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Whether the video is considered to be fully watched."}),"\n",(0,i.jsxs)(a.p,{children:["This will be true if the ",(0,i.jsx)(a.code,{children:"watchTime"})," is at least 97% of ",(0,i.jsx)(a.code,{children:"NormalizedVideo.duration"}),"."]}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideowatchpositioncreatedatdatetime---",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,i.jsx)("b",{children:"createdAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,i.jsx)(a.code,{children:"DateTime!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideowatchpositioneventidstring---",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,i.jsx)("b",{children:"eventId"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(a.code,{children:"String!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideowatchpositionupdatedatdatetime---",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,i.jsx)("b",{children:"updatedAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,i.jsx)(a.code,{children:"DateTime!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideowatchpositionwatchtimeint--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,i.jsx)("b",{children:"watchTime"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/int",children:(0,i.jsx)(a.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Number of seconds from the start of the video the viewer has watched to."}),"\n",(0,i.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-video",children:(0,i.jsx)(a.code,{children:"NormalizedVideo"})}),"  ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},43023:(e,a,d)=>{d.d(a,{R:()=>t,x:()=>n});var i=d(63696);const s={},o=i.createContext(s);function t(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);