"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8273],{50999:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>g,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var s=n(62540),d=n(43023),r=n(63696);const o={id:"normalized-show",title:"normalizedShow"},l=void 0,i={id:"graphql-api/shared-api/queries/normalized-show",title:"normalizedShow",description:"Gets a normalized show by ID for a given station and country.",source:"@site/docs/graphql-api/shared-api/queries/normalized-show.mdx",sourceDirName:"graphql-api/shared-api/queries",slug:"/graphql-api/shared-api/queries/normalized-show",permalink:"/graphql-api/shared-api/queries/normalized-show",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-show",title:"normalizedShow"},sidebar:"schemaSidebar",previous:{title:"normalizedPromo",permalink:"/graphql-api/shared-api/queries/normalized-promo"},next:{title:"normalizedShows",permalink:"/graphql-api/shared-api/queries/normalized-shows"}},t={},c=()=>{const e={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,d.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:a,children:n,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[i,t]=(0,r.useState)(o);return(0,s.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&n]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>normalizedShow.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowcountrycountrycode--",level:4},{value:'<code>normalizedShow.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowidstring---",level:4},{value:'<code>normalizedShow.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowstationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshow--",level:4}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Gets a normalized show by ID for a given station and country."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"normalizedShow(\n  country: CountryCode\n  id: String!\n  stationId: UUID\n): NormalizedShow\n"})}),"\n",(0,s.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedshowcountrycountrycode--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShow.",(0,s.jsx)("b",{children:"country"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"../../../graphql-api/references/scalars/country-code",children:(0,s.jsx)(a.code,{children:"CountryCode"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedshowidstring---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShow.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedshowstationiduuid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShow.",(0,s.jsx)("b",{children:"stationId"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,s.jsx)(a.code,{children:"UUID"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedshow--",children:[(0,s.jsx)(a.a,{href:"../../../graphql-api/references/objects/normalized-show",children:(0,s.jsx)(a.code,{children:"NormalizedShow"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Station-normalized data for a show."}),"\n",(0,s.jsx)(a.p,{children:"The Local Streaming data model has three types repsenting a show:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"PbsShow"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"Show"}),": Global show metadata overriding ",(0,s.jsx)(a.code,{children:"PbsShow"})," metadata for all stations, and"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"StationShow"}),": Station show metadata overriding ",(0,s.jsx)(a.code,{children:"Show"})," and ",(0,s.jsx)(a.code,{children:"PbsShow"})," metadata for individual stations."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"NormalizedShow"})," is a combination of all three types for a specific station and country."]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},43023:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>l});var s=n(63696);const d={},r=s.createContext(d);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);