"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8833],{21137:(e,o,s)=>{s.r(o),s.d(o,{Badge:()=>p,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var a=s(62540),n=s(43023),t=s(63696);const l={id:"collection-groups",title:"collectionGroups"},c=void 0,r={id:"graphql-api/admin-api/queries/collection-groups",title:"collectionGroups",description:"No description",source:"@site/docs/graphql-api/admin-api/queries/collection-groups.mdx",sourceDirName:"graphql-api/admin-api/queries",slug:"/graphql-api/admin-api/queries/collection-groups",permalink:"/graphql-api/admin-api/queries/collection-groups",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"collection-groups",title:"collectionGroups"},sidebar:"graphqlSidebar",previous:{title:"collectionGroupsWithoutStation",permalink:"/graphql-api/admin-api/queries/collection-groups-without-station"},next:{title:"collectionItem",permalink:"/graphql-api/admin-api/queries/collection-item"}},d={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const o={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const o={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:o,children:s,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[r,d]=(0,t.useState)(l);return(0,a.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:o}),r&&s]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>collectionGroups.<b>showAutoPilot</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collectiongroupsshowautopilotboolean--",level:4},{value:'<code>collectionGroups.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collectiongroupsstationiduuid--",level:4},{value:'<code>collectionGroups.<b>targetCountry</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collectiongroupstargetcountrycountrycode--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CollectionGroup</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collectiongroup--",level:4}];function x(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"No description"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-graphql",children:"collectionGroups(\n  showAutoPilot: Boolean\n  stationId: UUID\n  targetCountry: CountryCode\n): [CollectionGroup!]!\n"})}),"\n",(0,a.jsx)(o.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(o.h4,{id:"collectiongroupsshowautopilotboolean--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["collectionGroups.",(0,a.jsx)("b",{children:"showAutoPilot"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/graphql-api/references/scalars/boolean",children:(0,a.jsx)(o.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(o.h4,{id:"collectiongroupsstationiduuid--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["collectionGroups.",(0,a.jsx)("b",{children:"stationId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/graphql-api/references/scalars/uuid",children:(0,a.jsx)(o.code,{children:"UUID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(o.h4,{id:"collectiongroupstargetcountrycountrycode--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["collectionGroups.",(0,a.jsx)("b",{children:"targetCountry"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/graphql-api/references/scalars/country-code",children:(0,a.jsx)(o.code,{children:"CountryCode"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(o.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(o.h4,{id:"collectiongroup--",children:[(0,a.jsx)(o.a,{href:"/graphql-api/references/objects/collection-group",children:(0,a.jsx)(o.code,{children:"CollectionGroup"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(o.p,{children:"Group of collections to be displayed together."})]})}function b(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},43023:(e,o,s)=>{s.d(o,{R:()=>l,x:()=>c});var a=s(63696);const n={},t=a.createContext(n);function l(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);