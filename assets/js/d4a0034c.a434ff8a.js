"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3128],{5446:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>g,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(62540),d=a(43023),n=a(63696);const i={id:"search-videos",title:"searchVideos"},c=void 0,o={id:"graphql-api/consumer-api/queries/search-videos",title:"searchVideos",description:"Searches videos for a given search term.",source:"@site/docs/graphql-api/consumer-api/queries/search-videos.mdx",sourceDirName:"graphql-api/consumer-api/queries",slug:"/graphql-api/consumer-api/queries/search-videos",permalink:"/graphql-api/consumer-api/queries/search-videos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"search-videos",title:"searchVideos"},sidebar:"graphqlSidebar",previous:{title:"searchShows",permalink:"/graphql-api/consumer-api/queries/search-shows"},next:{title:"stationLivestreams",permalink:"/graphql-api/consumer-api/queries/station-livestreams"}},t={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,d.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,d.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:a,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[o,t]=(0,n.useState)(i);return(0,r.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&a]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>searchVideos.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchvideoscountrycountrycode--",level:4},{value:'<code>searchVideos.<b>filters</b></code><Bullet></Bullet><code>FilterVideoInput</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchvideosfiltersfiltervideoinput--",level:4},{value:'<code>searchVideos.<b>search</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchvideossearchstring---",level:4},{value:'<code>searchVideos.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchvideosstationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideo--",level:4}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Searches videos for a given search term."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"searchVideos(\n  country: CountryCode\n  filters: FilterVideoInput\n  search: String!\n  stationId: UUID\n): [NormalizedVideo!]!\n"})}),"\n",(0,r.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(s.h4,{id:"searchvideoscountrycountrycode--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["searchVideos.",(0,r.jsx)("b",{children:"country"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/country-code",children:(0,r.jsx)(s.code,{children:"CountryCode"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"Country to use for results normalization."}),"\n",(0,r.jsxs)(s.h4,{id:"searchvideosfiltersfiltervideoinput--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["searchVideos.",(0,r.jsx)("b",{children:"filters"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/inputs/filter-video-input",children:(0,r.jsx)(s.code,{children:"FilterVideoInput"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"input"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(s.h4,{id:"searchvideossearchstring---",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["searchVideos.",(0,r.jsx)("b",{children:"search"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,r.jsx)(s.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"Search term."}),"\n",(0,r.jsxs)(s.h4,{id:"searchvideosstationiduuid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["searchVideos.",(0,r.jsx)("b",{children:"stationId"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,r.jsx)(s.code,{children:"UUID"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"ID of station to use for results normalization."}),"\n",(0,r.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,r.jsxs)(s.h4,{id:"normalizedvideo--",children:[(0,r.jsx)(s.a,{href:"/graphql-api/references/objects/normalized-video",children:(0,r.jsx)(s.code,{children:"NormalizedVideo"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"Station-normalized data for a video."}),"\n",(0,r.jsx)(s.p,{children:"The Local Streaming data model has three types repsenting a video:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PbsVideo"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Video"}),": Global video metadata overriding ",(0,r.jsx)(s.code,{children:"PbsVideo"})," metadata for all stations, and"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"StationVideo"}),": Station video metadata overriding ",(0,r.jsx)(s.code,{children:"Video"})," and ",(0,r.jsx)(s.code,{children:"PbsVideo"})," metadata for individual stations."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"NormalizedVideo"})," is a combination of all three types for a specific station and country."]})]})}function j(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>c});var r=a(63696);const d={},n=r.createContext(d);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);