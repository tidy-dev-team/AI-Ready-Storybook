import{j as e}from"./jsx-runtime-DmLf-3Y3.js";import{T as j}from"./TextButton-DhIAgn6O.js";import{T as S}from"./TrendBadge-B3q7x01p.js";import{C as L}from"./CategoryIcon-Djsw9Cqq.js";import"./iframe-Bsx1FPSa.js";import"./preload-helper-C1FmrZbK.js";import"./index-i-Na7YTP.js";const N="_card_9yinl_3",P="_header_9yinl_16",C="_titleRow_9yinl_23",R="_title_9yinl_23",q="_contentWrapper_9yinl_38",D="_kpiBlock_9yinl_45",$="_kpiLabel_9yinl_51",B="_kpiRow_9yinl_59",F="_kpiValue_9yinl_65",I="_chartSlot_9yinl_74",W="_chartPlaceholder_9yinl_78",E="_chartSvg_9yinl_85",a={card:N,header:P,titleRow:C,title:R,contentWrapper:q,kpiBlock:D,kpiLabel:$,kpiRow:B,kpiValue:F,chartSlot:I,chartPlaceholder:W,chartSvg:E};function f({title:k="Total Pension",icon:_="wallet",kpiValue:y="$84,200",kpiLabel:w="Total balance",trend:n="+12.4%",trendDirection:x="positive",ctaLabel:V="View Full Portfolio",onCtaClick:T,children:s}){return e.jsxs("div",{className:a.card,children:[e.jsxs("div",{className:a.header,children:[e.jsxs("div",{className:a.titleRow,children:[e.jsx(L,{icon:_}),e.jsx("span",{className:a.title,children:k})]}),e.jsx(j,{label:V,onClick:T})]}),e.jsxs("div",{className:a.contentWrapper,children:[e.jsxs("div",{className:a.kpiBlock,children:[e.jsx("span",{className:a.kpiLabel,children:w}),e.jsxs("div",{className:a.kpiRow,children:[e.jsx("span",{className:a.kpiValue,children:y}),n&&e.jsx(S,{value:n,direction:x})]})]}),s?e.jsx("div",{className:a.chartSlot,children:s}):e.jsx("div",{className:a.chartPlaceholder,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 333 120",fill:"none",className:a.chartSvg,children:[e.jsx("path",{d:"M0 90 C40 80, 80 30, 120 50 S200 80, 240 40 S300 10, 333 20",stroke:"#E8E8E8",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M0 90 C40 80, 80 30, 120 50 S200 80, 240 40 S300 10, 333 20 V120 H0 Z",fill:"rgba(0,122,85,0.04)"}),[0,40,80,120,160,200,240,280,320].map((r,b)=>e.jsx("line",{x1:r,y1:"0",x2:r,y2:"120",stroke:"#F5F5F3",strokeWidth:"1"},b))]})})]})]})}f.__docgenInfo={description:"",methods:[],displayName:"CardKpi",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Total Pension'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"'wallet' | 'home' | 'shield' | 'savings' | 'file-text' | 'mail' | 'headset'",elements:[{name:"literal",value:"'wallet'"},{name:"literal",value:"'home'"},{name:"literal",value:"'shield'"},{name:"literal",value:"'savings'"},{name:"literal",value:"'file-text'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'headset'"}]},description:"",defaultValue:{value:"'wallet'",computed:!1}},kpiValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'$84,200'",computed:!1}},kpiLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Total balance'",computed:!1}},trend:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'+12.4%'",computed:!1}},trendDirection:{required:!1,tsType:{name:"union",raw:"'positive' | 'negative'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'positive'",computed:!1}},ctaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'View Full Portfolio'",computed:!1}},onCtaClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot for chart or additional content"}}};const G={title:"Components/CardKpi",component:f,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{title:"Total Pension",icon:"wallet",kpiValue:"$84,200",kpiLabel:"Total balance",trend:"+12.4%",trendDirection:"positive",ctaLabel:"View Full Portfolio"}},i={args:{title:"Insurance Coverage",icon:"shield",kpiValue:"$1,200,000",kpiLabel:"Total coverage",trend:"+5.2%",trendDirection:"positive",ctaLabel:"View Details"}},l={args:{title:"Savings",icon:"savings",kpiValue:"$32,500",kpiLabel:"Total savings",trend:"-1.8%",trendDirection:"negative",ctaLabel:"View Account"}};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Total Pension',
    icon: 'wallet',
    kpiValue: '$84,200',
    kpiLabel: 'Total balance',
    trend: '+12.4%',
    trendDirection: 'positive',
    ctaLabel: 'View Full Portfolio'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Insurance Coverage',
    icon: 'shield',
    kpiValue: '$1,200,000',
    kpiLabel: 'Total coverage',
    trend: '+5.2%',
    trendDirection: 'positive',
    ctaLabel: 'View Details'
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,h,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Savings',
    icon: 'savings',
    kpiValue: '$32,500',
    kpiLabel: 'Total savings',
    trend: '-1.8%',
    trendDirection: 'negative',
    ctaLabel: 'View Account'
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const J=["Pension","Insurance","Savings"];export{i as Insurance,t as Pension,l as Savings,J as __namedExportsOrder,G as default};
