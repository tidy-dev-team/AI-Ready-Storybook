import{j as e}from"./jsx-runtime-DmLf-3Y3.js";import{d as _,C}from"./index-i-Na7YTP.js";import"./iframe-Bsx1FPSa.js";import"./preload-helper-C1FmrZbK.js";const v="_tag_isclg_3",w="_icon_isclg_20",y="_label_isclg_26",n={tag:v,icon:w,label:y};function h({label:o,showChevron:f=!1,icon:b,onClick:x}){return e.jsxs("button",{className:n.tag,onClick:x,type:"button",children:[e.jsx("span",{className:n.icon,children:b??e.jsx(_,{size:16,color:"#171717"})}),e.jsx("span",{className:n.label,children:o}),f&&e.jsx(C,{size:16,color:"#636363",direction:"right"})]})}h.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!0,tsType:{name:"string"},description:""},showChevron:{required:!1,tsType:{name:"boolean"},description:"Show trailing chevron arrow",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon element"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"Components/Tag",component:h,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:e.jsx(o,{})})]},a={args:{label:"Change pension plans"}},s={args:{label:"View details",showChevron:!0}},r={args:{label:"Insurance"}};var t,c,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Change pension plans'
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,p,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'View details',
    showChevron: true
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Insurance'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const R=["Default","WithChevron","ShortLabel"];export{a as Default,r as ShortLabel,s as WithChevron,R as __namedExportsOrder,I as default};
