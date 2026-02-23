import{j as x}from"./jsx-runtime-DmLf-3Y3.js";import{W as q}from"./index-i-Na7YTP.js";import"./iframe-Bsx1FPSa.js";import"./preload-helper-C1FmrZbK.js";const N="_btn_10pns_3",w="_idle_10pns_19",B="_hover_10pns_24",C="_pressed_10pns_29",D="_focus_10pns_34",E="_disabled_10pns_40",l={btn:N,idle:w,hover:B,pressed:C,focus:D,disabled:E};function R({icon:S,state:n="idle",onClick:T,"aria-label":j="icon button"}){return x.jsx("button",{type:"button",className:`${l.btn} ${l[n]}`,disabled:n==="disabled",onClick:T,"aria-label":j,children:S})}R.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},state:{required:!1,tsType:{name:"union",raw:"'idle' | 'hover' | 'pressed' | 'focus' | 'disabled'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'icon button'",computed:!1}}}};const $={title:"Components/ButtonIcon",component:R,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:["idle","hover","pressed","focus","disabled"]}}},e=x.jsx(q,{size:14,color:"#171717"}),a={args:{icon:e,state:"idle","aria-label":"Wallet"}},s={args:{icon:e,state:"hover","aria-label":"Wallet"}},r={args:{icon:e,state:"pressed","aria-label":"Wallet"}},t={args:{icon:e,state:"focus","aria-label":"Wallet"}},o={args:{icon:e,state:"disabled","aria-label":"Wallet"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    icon,
    state: 'idle',
    'aria-label': 'Wallet'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon,
    state: 'hover',
    'aria-label': 'Wallet'
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon,
    state: 'pressed',
    'aria-label': 'Wallet'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var _,v,W;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    icon,
    state: 'focus',
    'aria-label': 'Wallet'
  }
}`,...(W=(v=t.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var h,y,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon,
    state: 'disabled',
    'aria-label': 'Wallet'
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const k=["Idle","Hover","Pressed","Focus","Disabled"];export{o as Disabled,t as Focus,s as Hover,a as Idle,r as Pressed,k as __namedExportsOrder,$ as default};
