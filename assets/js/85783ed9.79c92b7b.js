"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7006],{54260:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var a=n(62540),l=n(43023),t=n(63696);const c={id:"clone-collection-to-group",title:"cloneCollectionToGroup"},s=void 0,r={id:"graphql-api/admin-api/mutations/clone-collection-to-group",title:"cloneCollectionToGroup",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/clone-collection-to-group.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/clone-collection-to-group",permalink:"/graphql-api/admin-api/mutations/clone-collection-to-group",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"clone-collection-to-group",title:"cloneCollectionToGroup"},sidebar:"graphqlSidebar",previous:{title:"addStationShowRoles",permalink:"/graphql-api/admin-api/mutations/add-station-show-roles"},next:{title:"copyToTargetCountry",permalink:"/graphql-api/admin-api/mutations/copy-to-target-country"}},d={},i=()=>{const e={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const o={a:"a",...(0,l.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const o={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:o,children:n,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,l.R)()},[r,d]=(0,t.useState)(c);return(0,a.jsxs)(s.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:o}),r&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>cloneCollectionToGroup.<b>originalCollectionId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clonecollectiontogrouporiginalcollectionidstring---",level:4},{value:'<code>cloneCollectionToGroup.<b>stationId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clonecollectiontogroupstationiduuid---",level:4},{value:'<code>cloneCollectionToGroup.<b>targetCollectionGroupId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clonecollectiontogrouptargetcollectiongroupidstring---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Collection</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collection--",level:4}];function x(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"No description"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-graphql",children:"cloneCollectionToGroup(\n  originalCollectionId: String!\n  stationId: UUID!\n  targetCollectionGroupId: String!\n): Collection!\n"})}),"\n",(0,a.jsx)(o.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(o.h4,{id:"clonecollectiontogrouporiginalcollectionidstring---",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["cloneCollectionToGroup.",(0,a.jsx)("b",{children:"originalCollectionId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(o.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(o.h4,{id:"clonecollectiontogroupstationiduuid---",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["cloneCollectionToGroup.",(0,a.jsx)("b",{children:"stationId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/graphql-api/references/scalars/uuid",children:(0,a.jsx)(o.code,{children:"UUID!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(o.h4,{id:"clonecollectiontogrouptargetcollectiongroupidstring---",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["cloneCollectionToGroup.",(0,a.jsx)("b",{children:"targetCollectionGroupId"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(o.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(o.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(o.h4,{id:"collection--",children:[(0,a.jsx)(o.a,{href:"/graphql-api/references/objects/collection",children:(0,a.jsx)(o.code,{children:"Collection"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]})]})}function b(e={}){const{wrapper:o}={...(0,l.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},43023:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>s});var a=n(63696);const l={},t=a.createContext(l);function c(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);