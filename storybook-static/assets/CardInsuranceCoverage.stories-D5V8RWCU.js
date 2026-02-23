import{j as e}from"./jsx-runtime-DmLf-3Y3.js";import{r as _}from"./iframe-Bsx1FPSa.js";import{I as $}from"./InsuranceCard-BIgtsnhg.js";import{T as y}from"./TextButton-DhIAgn6O.js";import{C as f}from"./CategoryIcon-Djsw9Cqq.js";import"./preload-helper-C1FmrZbK.js";import"./index-i-Na7YTP.js";const b="_card_1p8jw_3",j="_header_1p8jw_15",w="_titleRow_1p8jw_22",x="_title_1p8jw_22",C="_tabs_1p8jw_37",I="_tab_1p8jw_37",P="_tabActive_1p8jw_61",T="_cards_1p8jw_68",r={card:b,header:j,titleRow:w,title:x,tabs:C,tab:I,tabActive:P,cards:T},A=[{id:"1",title:"Life",icon:"shield",provider:"Harel",coverage:"$1,200,000",monthlyPremium:"$450"},{id:"2",title:"Health",icon:"headset",provider:"Maccabi",coverage:"$500,000",monthlyPremium:"$320"},{id:"3",title:"Pension",icon:"wallet",provider:"Phoenix",coverage:"$840,000",monthlyPremium:"$650"},{id:"4",title:"Savings",icon:"savings",provider:"Migdal",coverage:"$200,000",monthlyPremium:"$180"}],H=[{id:"all",label:"All"},{id:"active",label:"Active"},{id:"pending",label:"Pending"}];function p({title:n="Insurance Coverage",items:u=A,onViewAll:v}){const[g,h]=_.useState("all");return e.jsxs("div",{className:r.card,children:[e.jsxs("div",{className:r.header,children:[e.jsxs("div",{className:r.titleRow,children:[e.jsx(f,{icon:"shield"}),e.jsx("span",{className:r.title,children:n})]}),e.jsx("div",{className:r.tabs,children:H.map(t=>e.jsx("button",{type:"button",className:`${r.tab} ${g===t.id?r.tabActive:""}`,onClick:()=>h(t.id),children:t.label},t.id))}),e.jsx(y,{label:"View Full Portfolio",onClick:v})]}),e.jsx("div",{className:r.cards,children:u.map(t=>e.jsx($,{title:t.title,icon:t.icon,provider:t.provider,coverage:t.coverage,monthlyPremium:t.monthlyPremium},t.id))})]})}p.__docgenInfo={description:"",methods:[],displayName:"CardInsuranceCoverage",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Insurance Coverage'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"InsuranceCoverageItem"}],raw:"InsuranceCoverageItem[]"},description:"",defaultValue:{value:`[
  { id: '1', title: 'Life',     icon: 'shield',   provider: 'Harel',  coverage: '$1,200,000', monthlyPremium: '$450' },
  { id: '2', title: 'Health',   icon: 'headset',  provider: 'Maccabi', coverage: '$500,000',  monthlyPremium: '$320' },
  { id: '3', title: 'Pension',  icon: 'wallet',   provider: 'Phoenix', coverage: '$840,000',  monthlyPremium: '$650' },
  { id: '4', title: 'Savings',  icon: 'savings',  provider: 'Migdal',  coverage: '$200,000',  monthlyPremium: '$180' },
]`,computed:!1}},onViewAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const q={title:"Components/CardInsuranceCoverage",component:p,parameters:{layout:"centered"},tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{width:880},children:e.jsx(n,{})})]},a={args:{title:"Insurance Coverage"}},i={args:{title:"Insurance Coverage",items:[{id:"1",title:"Life",icon:"shield",provider:"Harel",coverage:"$1,200,000",monthlyPremium:"$450"},{id:"2",title:"Health",icon:"headset",provider:"Maccabi",coverage:"$500,000",monthlyPremium:"$320"}]}};var o,s,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Insurance Coverage'
  }
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,d,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Insurance Coverage',
    items: [{
      id: '1',
      title: 'Life',
      icon: 'shield',
      provider: 'Harel',
      coverage: '$1,200,000',
      monthlyPremium: '$450'
    }, {
      id: '2',
      title: 'Health',
      icon: 'headset',
      provider: 'Maccabi',
      coverage: '$500,000',
      monthlyPremium: '$320'
    }]
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Default","TwoItems"];export{a as Default,i as TwoItems,D as __namedExportsOrder,q as default};
