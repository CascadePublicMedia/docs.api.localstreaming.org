"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4506],{66184:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>m,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=a(62540),n=a(43023),d=a(63696);const o={id:"normalized-shows",title:"normalizedShows"},i=void 0,l={id:"graphql-api/shared-api/queries/normalized-shows",title:"normalizedShows",description:"Gets a filtered list of normalized shows for a given station and country.",source:"@site/docs/graphql-api/shared-api/queries/normalized-shows.mdx",sourceDirName:"graphql-api/shared-api/queries",slug:"/graphql-api/shared-api/queries/normalized-shows",permalink:"/graphql-api/shared-api/queries/normalized-shows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-shows",title:"normalizedShows"},sidebar:"graphqlSidebar",previous:{title:"normalizedShow",permalink:"/graphql-api/shared-api/queries/normalized-show"},next:{title:"normalizedVideo",permalink:"/graphql-api/shared-api/queries/normalized-video"}},t={},c=()=>{const e={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const s={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:a,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[l,t]=(0,d.useState)(o);return(0,r.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>normalizedShows.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowscountrycountrycode--",level:4},{value:'<code>normalizedShows.<b>filters</b></code><Bullet></Bullet><code>NormalizedShowsFilters</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowsfiltersnormalizedshowsfilters--",level:4},{value:'<code>normalizedShows.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowsstationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshow--",level:4}];function p(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Gets a filtered list of normalized shows for a given station and country."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"normalizedShows(\n  country: CountryCode\n  filters: NormalizedShowsFilters\n  stationId: UUID\n): [NormalizedShow!]!\n"})}),"\n",(0,r.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(s.h4,{id:"normalizedshowscountrycountrycode--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShows.",(0,r.jsx)("b",{children:"country"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/country-code",children:(0,r.jsx)(s.code,{children:"CountryCode"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(s.h4,{id:"normalizedshowsfiltersnormalizedshowsfilters--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShows.",(0,r.jsx)("b",{children:"filters"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/inputs/normalized-shows-filters",children:(0,r.jsx)(s.code,{children:"NormalizedShowsFilters"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(s.h4,{id:"normalizedshowsstationiduuid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShows.",(0,r.jsx)("b",{children:"stationId"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,r.jsx)(s.code,{children:"UUID"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,r.jsxs)(s.h4,{id:"normalizedshow--",children:[(0,r.jsx)(s.a,{href:"/graphql-api/references/objects/normalized-show",children:(0,r.jsx)(s.code,{children:"NormalizedShow"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"object"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"Station-normalized data for a show."}),"\n",(0,r.jsx)(s.p,{children:"The Local Streaming data model has three types repsenting a show:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PbsShow"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Show"}),": Global show metadata overriding ",(0,r.jsx)(s.code,{children:"PbsShow"})," metadata for all stations, and"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"StationShow"}),": Station show metadata overriding ",(0,r.jsx)(s.code,{children:"Show"})," and ",(0,r.jsx)(s.code,{children:"PbsShow"})," metadata for individual stations."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"NormalizedShow"})," is a combination of all three types for a specific station and country."]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>i});var r=a(63696);const n={},d=r.createContext(n);function o(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);