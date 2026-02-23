import{j as e}from"./jsx-runtime-DmLf-3Y3.js";import{r as D}from"./iframe-Bsx1FPSa.js";import{L as y}from"./ListItem-Bqp9QDrr.js";import{A as w}from"./AvatarUser-EJlWcjkw.js";import{D as S}from"./Divider-C2z_21N6.js";import{c as T}from"./index-i-Na7YTP.js";import"./preload-helper-C1FmrZbK.js";import"./BadgeAvatar-Bkip5net.js";import"./BadgeNum-DZImKY86.js";import"./AvatarMember-Dt0EIBFX.js";const q="_panel_1iipr_3",E="_account_1iipr_14",V="_accountWrapper_1iipr_18",B="_plan_1iipr_24",W="_list_1iipr_33",k="_chatBtn_1iipr_43",L="_chatIcon_1iipr_49",n={panel:q,account:E,accountWrapper:V,plan:B,list:W,chatBtn:k,chatIcon:L},M=[{id:"dashboard",label:"Dashboard",icon:"home"},{id:"pension",label:"Pension",icon:"wallet",showChevron:!0},{id:"insurance",label:"Insurance",icon:"shield",showChevron:!0},{id:"savings",label:"Savings",icon:"savings",showChevron:!0},{id:"documents",label:"Documents",icon:"file-text"},{id:"inbox",label:"Inbox",icon:"mail",badgeCount:3},{id:"contact",label:"Contact",icon:"headset"}];function P({items:i=M,activeId:c,defaultActiveId:_="dashboard",onNavigate:o,userName:x="David",userPlan:I="Premium Plan"}){const[A,C]=D.useState(_),l=c!==void 0,N=l?c:A;function j(a){l||C(a),o==null||o(a)}return e.jsxs("nav",{className:n.panel,"aria-label":"Main navigation",children:[e.jsx("div",{className:n.account,children:e.jsxs("div",{className:n.accountWrapper,children:[e.jsx(w,{name:x,active:!0,member:"1"}),e.jsx("span",{className:n.plan,children:I})]})}),e.jsx(S,{}),e.jsx("ul",{className:n.list,role:"list",children:i.map(a=>e.jsx("li",{role:"listitem",children:e.jsx(y,{text:a.label,icon:a.icon,state:N===a.id?"selected":"idle",showChevron:a.showChevron,badgeCount:a.badgeCount,onClick:()=>j(a.id)})},a.id))}),e.jsx("div",{className:n.chatBtn,children:e.jsx("button",{type:"button",className:n.chatIcon,"aria-label":"Open chat",children:e.jsx(T,{size:14,color:"#ffffff"})})})]})}P.__docgenInfo={description:"",methods:[],displayName:"NavigationPanel",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:"",defaultValue:{value:`[
  { id: 'dashboard',  label: 'Dashboard',  icon: 'home' },
  { id: 'pension',    label: 'Pension',     icon: 'wallet',      showChevron: true },
  { id: 'insurance',  label: 'Insurance',   icon: 'shield',      showChevron: true },
  { id: 'savings',    label: 'Savings',     icon: 'savings',     showChevron: true },
  { id: 'documents',  label: 'Documents',   icon: 'file-text' },
  { id: 'inbox',      label: 'Inbox',       icon: 'mail',        badgeCount: 3 },
  { id: 'contact',    label: 'Contact',     icon: 'headset' },
]`,computed:!1}},activeId:{required:!1,tsType:{name:"string"},description:""},defaultActiveId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'dashboard'",computed:!1}},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},userName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'David'",computed:!1}},userPlan:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Premium Plan'",computed:!1}}}};const X={title:"Components/NavigationPanel",component:P,parameters:{layout:"centered"},tags:["autodocs"],decorators:[i=>e.jsx("div",{style:{height:700,backgroundColor:"#f8f8f6",borderRadius:16,overflow:"hidden"},children:e.jsx(i,{})})]},s={args:{userName:"David",userPlan:"Premium Plan",defaultActiveId:"dashboard"}},r={args:{userName:"David",userPlan:"Premium Plan",defaultActiveId:"pension"}},t={args:{userName:"Anna",userPlan:"Standard Plan",defaultActiveId:"insurance"}};var d,u,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    userName: 'David',
    userPlan: 'Premium Plan',
    defaultActiveId: 'dashboard'
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    userName: 'David',
    userPlan: 'Premium Plan',
    defaultActiveId: 'pension'
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,b,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userName: 'Anna',
    userPlan: 'Standard Plan',
    defaultActiveId: 'insurance'
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const Y=["Default","PensionActive","InsuranceActive"];export{s as Default,t as InsuranceActive,r as PensionActive,Y as __namedExportsOrder,X as default};
