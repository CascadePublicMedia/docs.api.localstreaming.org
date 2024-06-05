"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1817],{34613:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>h,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var t=s(62540),n=s(43023),d=s(63696);const r={id:"station-credential-set",title:"StationCredentialSet"},i=void 0,c={id:"graphql-api/references/objects/station-credential-set",title:"StationCredentialSet",description:"Station credentials for external services.",source:"@site/docs/graphql-api/references/objects/station-credential-set.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/station-credential-set",permalink:"/graphql-api/references/objects/station-credential-set",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"station-credential-set",title:"StationCredentialSet"},sidebar:"schemaSidebar",previous:{title:"Show",permalink:"/graphql-api/references/objects/show"},next:{title:"StationShow",permalink:"/graphql-api/references/objects/station-show"}},l={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:a,children:s,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[c,l]=(0,d.useState)(r);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>StationCredentialSet.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetcreatedatdatetime---",level:4},{value:'<code>StationCredentialSet.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetidstring---",level:4},{value:'<code>StationCredentialSet.<b>livestreamComClientId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetlivestreamcomclientidstring--",level:4},{value:'<code>StationCredentialSet.<b>livestreamComSecretKey</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetlivestreamcomsecretkeystring--",level:4},{value:'<code>StationCredentialSet.<b>pbsMediaManagerPassword</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetpbsmediamanagerpasswordstring--",level:4},{value:'<code>StationCredentialSet.<b>pbsMediaManagerUsername</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetpbsmediamanagerusernamestring--",level:4},{value:'<code>StationCredentialSet.<b>pbsMembershipVaultPassword</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetpbsmembershipvaultpasswordstring--",level:4},{value:'<code>StationCredentialSet.<b>pbsMembershipVaultUser</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetpbsmembershipvaultuserstring--",level:4},{value:'<code>StationCredentialSet.<b>station</b></code><Bullet></Bullet><code>Station!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetstationstation---",level:4},{value:'<code>StationCredentialSet.<b>stationId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetstationidstring---",level:4},{value:'<code>StationCredentialSet.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationcredentialsetupdatedatdatetime---",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Station credentials for external services."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type StationCredentialSet {\n  createdAt: DateTime!\n  id: String!\n  livestreamComClientId: String\n  livestreamComSecretKey: String\n  pbsMediaManagerPassword: String\n  pbsMediaManagerUsername: String\n  pbsMembershipVaultPassword: String\n  pbsMembershipVaultUser: String\n  station: Station!\n  stationId: String!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetcreatedatdatetime---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetidstring---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetlivestreamcomclientidstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"livestreamComClientId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Livestream.com API client ID."}),"\n",(0,t.jsx)(a.p,{children:"Must be associated with a Livestream.com secret key."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Encryted at rest."})}),"\n",(0,t.jsxs)(a.p,{children:["See: ",(0,t.jsx)(a.code,{children:"StationCredentialSet.livestreamComSecretKey"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetlivestreamcomsecretkeystring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"livestreamComSecretKey"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Livestream.com API secret key."}),"\n",(0,t.jsx)(a.p,{children:"Must be associated with a Livestream.com client ID."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Encryted at rest."})}),"\n",(0,t.jsxs)(a.p,{children:["See: ",(0,t.jsx)(a.code,{children:"StationCredentialSet.livestreamComClientId"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetpbsmediamanagerpasswordstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"pbsMediaManagerPassword"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"PBS Media Manager API password."}),"\n",(0,t.jsx)(a.p,{children:"Must be associated with a PBS Media Manager API username."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Encryted at rest."})}),"\n",(0,t.jsxs)(a.p,{children:["See: ",(0,t.jsx)(a.code,{children:"StationCredentialSet.pbsMediaManagerUsername"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetpbsmediamanagerusernamestring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"pbsMediaManagerUsername"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"PBS Media Manager API username."}),"\n",(0,t.jsx)(a.p,{children:"Must be associated with a PBS Media Manager API password."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Encryted at rest."})}),"\n",(0,t.jsxs)(a.p,{children:["See: ",(0,t.jsx)(a.code,{children:"StationCredentialSet.pbsMediaManagerPassword"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetpbsmembershipvaultpasswordstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"pbsMembershipVaultPassword"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"PBS Membership Vault API passwordf."}),"\n",(0,t.jsx)(a.p,{children:"Must be associated with a PBS Membership Vault API username."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Encryted at rest."})}),"\n",(0,t.jsxs)(a.p,{children:["See: ",(0,t.jsx)(a.code,{children:"StationCredentialSet.pbsMembershipVaultPassword"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetpbsmembershipvaultuserstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"pbsMembershipVaultUser"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"PBS Membership Vault API username."}),"\n",(0,t.jsx)(a.p,{children:"Must be associated with a PBS Membership Vault API password."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Encryted at rest."})}),"\n",(0,t.jsxs)(a.p,{children:["See: ",(0,t.jsx)(a.code,{children:"StationCredentialSet.pbsMembershipVaultPassword"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetstationstation---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"station"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/objects/station",children:(0,t.jsx)(a.code,{children:"Station!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetstationidstring---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"stationId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"stationcredentialsetupdatedatdatetime---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["StationCredentialSet.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"../../../graphql-api/admin-api/mutations/create-station-credential-set",children:(0,t.jsx)(a.code,{children:"createStationCredentialSet"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/admin-api/mutations/delete-station-credential-set",children:(0,t.jsx)(a.code,{children:"deleteStationCredentialSet"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/admin-api/queries/station-credential-set",children:(0,t.jsx)(a.code,{children:"stationCredentialSet"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/admin-api/queries/station-credential-sets",children:(0,t.jsx)(a.code,{children:"stationCredentialSets"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"../../../graphql-api/admin-api/mutations/update-station-credential-set",children:(0,t.jsx)(a.code,{children:"updateStationCredentialSet"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"../../../graphql-api/references/objects/station",children:(0,t.jsx)(a.code,{children:"Station"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},43023:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>i});var t=s(63696);const n={},d=t.createContext(n);function r(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);