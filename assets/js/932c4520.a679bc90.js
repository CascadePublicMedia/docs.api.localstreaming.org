"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4317],{86120:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>x,assets:()=>c,contentTitle:()=>t,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var d=n(62540),r=n(43023),o=n(63696);const s={id:"next-video-for-playback",title:"nextVideoForPlayback"},t=void 0,i={id:"graphql-api/consumer-api/queries/next-video-for-playback",title:"nextVideoForPlayback",description:'Gets a video to offer for "up next" feature after a given video.',source:"@site/docs/graphql-api/consumer-api/queries/next-video-for-playback.mdx",sourceDirName:"graphql-api/consumer-api/queries",slug:"/graphql-api/consumer-api/queries/next-video-for-playback",permalink:"/graphql-api/consumer-api/queries/next-video-for-playback",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"next-video-for-playback",title:"nextVideoForPlayback"},sidebar:"graphqlSidebar",previous:{title:"homeScreenData",permalink:"/graphql-api/consumer-api/queries/home-screen-data"},next:{title:"normalizedCollection",permalink:"/graphql-api/consumer-api/queries/normalized-collection"}},c={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const a={a:"a",...(0,r.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,r.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:n,startOpen:s=!1})=>{const t={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,o.useState)(s);return(0,d.jsxs)(t.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(t.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>nextVideoForPlayback.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"nextvideoforplaybackcountrycountrycode--",level:4},{value:'<code>nextVideoForPlayback.<b>currentVideoId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"nextvideoforplaybackcurrentvideoidstring---",level:4},{value:'<code>nextVideoForPlayback.<b>stationId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"nextvideoforplaybackstationiduuid---",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideo--",level:4}];function p(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:'Gets a video to offer for "up next" feature after a given video.'}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"nextVideoForPlayback(\n  country: CountryCode\n  currentVideoId: String!\n  stationId: UUID!\n): NormalizedVideo\n"})}),"\n",(0,d.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(a.h4,{id:"nextvideoforplaybackcountrycountrycode--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["nextVideoForPlayback.",(0,d.jsx)("b",{children:"country"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/country-code",children:(0,d.jsx)(a.code,{children:"CountryCode"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(a.p,{children:"ISO 3166-1 alpha-2 country code for result normalization."}),"\n",(0,d.jsxs)(a.h4,{id:"nextvideoforplaybackcurrentvideoidstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["nextVideoForPlayback.",(0,d.jsx)("b",{children:"currentVideoId"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(a.p,{children:"ID of video to start from (find next video for)."}),"\n",(0,d.jsxs)(a.h4,{id:"nextvideoforplaybackstationiduuid---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["nextVideoForPlayback.",(0,d.jsx)("b",{children:"stationId"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/uuid",children:(0,d.jsx)(a.code,{children:"UUID!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(a.p,{children:"ID of station to use for result normalization."}),"\n",(0,d.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,d.jsxs)(a.h4,{id:"normalizedvideo--",children:[(0,d.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-video",children:(0,d.jsx)(a.code,{children:"NormalizedVideo"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(a.p,{children:"Station-normalized data for a video."}),"\n",(0,d.jsx)(a.p,{children:"The Local Streaming data model has three types repsenting a video:"}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"PbsVideo"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"Video"}),": Global video metadata overriding ",(0,d.jsx)(a.code,{children:"PbsVideo"})," metadata for all stations, and"]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"StationVideo"}),": Station video metadata overriding ",(0,d.jsx)(a.code,{children:"Video"})," and ",(0,d.jsx)(a.code,{children:"PbsVideo"})," metadata for individual stations."]}),"\n"]}),"\n",(0,d.jsxs)(a.p,{children:["The ",(0,d.jsx)(a.code,{children:"NormalizedVideo"})," is a combination of all three types for a specific station and country."]})]})}function b(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},43023:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>t});var d=n(63696);const r={},o=d.createContext(r);function s(e){const a=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(o.Provider,{value:a},e.children)}}}]);