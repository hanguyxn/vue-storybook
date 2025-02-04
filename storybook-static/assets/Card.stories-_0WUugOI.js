import{b as c,d as a,p as s,n as e,F as S,q as T,o as i,t as k}from"./vue.esm-bundler-kJhnHdVo.js";import{T as r}from"./Text-CNjbOpIy.js";import{B as v}from"./Button-BXdc31XB.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"card-item"},V={class:"item-header"},D={class:"card-price"},_={class:"item-content"},F=["href"],f={__name:"Card",props:{cardClassType:{type:String,default:"light"},textStyle:{type:String},cardTitle:{type:String,default:"Title"},currency:{type:String,default:"$"},label:{type:String,default:"/mo"},itemList:{type:Object,default:()=>({"List item":"#","List item 2":"#"})},textBtn:{type:String,default:"Click me!"},btnClass:{type:String,default:"btn"}},setup(t){return(N,E)=>(i(),c("div",{class:e(["card",t.cardClassType])},[a("div",B,[a("div",V,[s(r,{class:e([t.textStyle,"body-strong body-medium"]),text:t.cardTitle},null,8,["class","text"]),a("div",D,[s(r,{class:e([t.textStyle,"currency body-strong body-medium"]),text:"$"},null,8,["class"]),s(r,{class:e([t.textStyle,"price body-strong2 body-larger"]),text:"50"},null,8,["class"]),s(r,{class:e([t.textStyle,"label body-small"]),text:"/mo"},null,8,["class"])])]),a("div",_,[(i(!0),c(S,null,T(t.itemList,(x,C,h)=>(i(),c("ul",{key:h},[a("li",{class:e(t.textStyle)},[a("a",{class:e(t.textStyle),href:x},k(C),11,F)],2)]))),128))])]),s(v,{text:t.textBtn,class:e(t.btnClass)},null,8,["text","class"])],2))}},b=L(f,[["__scopeId","data-v-63503e4d"]]);f.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"cardClassType",type:{name:"string"},defaultValue:{func:!1,value:'"light"'}},{name:"textStyle",type:{name:"string"}},{name:"cardTitle",type:{name:"string"},defaultValue:{func:!1,value:'"Title"'}},{name:"currency",type:{name:"string"},defaultValue:{func:!1,value:'"$"'}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'"/mo"'}},{name:"itemList",type:{name:"object"},defaultValue:{func:!1,value:`{\r
    'List item': '#',\r
    'List item 2': '#'\r
}`}},{name:"textBtn",type:{name:"string"},defaultValue:{func:!1,value:'"Click me!"'}},{name:"btnClass",type:{name:"string"},defaultValue:{func:!1,value:'"btn"'}}],sourceFiles:["D:/Ha Nguyen/EDTEXCO/build-storybook/src/components/Card.vue"]};const I={title:"Components/MyCard",components:b,argTypes:{cardClassType:{control:{type:"select",options:["light","dark"]},description:"Choose the card class type."},textStyle:{control:{type:"select",options:["light","dark"]},description:"Choose the text style for the card."},cardTitle:{control:"text",description:"This is the card's title."},currency:{control:"text",description:"Currency of the money."},label:{control:"text",description:"Label after the price."},itemList:{control:{type:"object",description:"List of items with their links",defaultValue:{"List item 1":"#","List item 2":"#"}}},btnFn:{description:"Function to call when the button is clicked.",action:"clicked"},textBtn:{control:"text",description:'Text on the button (default: "Click me!")'},btnClass:{control:"text",description:"CSS class for the button."}}},g=t=>({components:{Card:b},setup(){return{args:t}},template:'<Card v-bind="args" />'}),n=g.bind({});n.args={cardClassType:"light",textStyle:"body-strong",textBtn:"Click me!",btnClass:"btn btn-primary btn--small"};const l=g.bind({});l.args={cardClassType:"dark",textStyle:"light",textBtn:"Click me!",btnClass:"btn btn-neutral btn--small"};var o,d,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: '<Card v-bind="args" />'
})`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: '<Card v-bind="args" />'
})`,...(y=(p=l.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const q=["Default","Dark"];export{l as Dark,n as Default,q as __namedExportsOrder,I as default};
