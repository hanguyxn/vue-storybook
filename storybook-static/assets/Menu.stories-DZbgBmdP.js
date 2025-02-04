import{b as a,d as e,p as l,F as d,q as f,o,n as h}from"./vue.esm-bundler-kJhnHdVo.js";import{T as u}from"./Text-CNjbOpIy.js";/* empty css            */import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"container"},T={class:"menu-header"},_={key:0,class:"separator"},v={key:1,class:"menu-item flex"},I={class:"menu-content"},S={class:"content-header flex"},M={__name:"Menu",props:{headingTitle:{type:String,default:"Heading"},headingSubTitle:{type:String,default:"Heading"},hasIcon:{type:Boolean,default:!0},menuItem:{type:Object,default:()=>({"Menu label":"Menu decription.","Menu label 2":"Menu decription 2.","Menu label 3":"Menu decription 3.",hr:"","Menu label 4":"Menu decription 4.","Menu label 5":"Menu decription 5."})}},setup(n){return(H,t)=>(o(),a("div",x,[e("div",T,[l(u,{tag:"h1",class:"body-small",text:n.headingTitle},null,8,["text"]),l(u,{tag:"h1",class:"body-strong",text:n.headingSubTitle},null,8,["text"])]),t[2]||(t[2]=e("div",{class:"separator"},[e("hr")],-1)),(o(!0),a(d,null,f(n.menuItem,(i,r,g)=>(o(),a(d,{key:g},[r=="hr"||i=="hr"?(o(),a("div",_,t[0]||(t[0]=[e("hr",null,null,-1)]))):(o(),a("div",v,[e("div",{class:h(["menu-icon",{none:!n.hasIcon}])},t[1]||(t[1]=[e("i",{class:"fa-regular fa-star icon"},null,-1)]),2),e("div",I,[e("div",S,[l(u,{tag:"h1",class:"body-base",text:r},null,8,["text"]),l(u,{tag:"h1",class:"body-base short-cut",text:"⇧A"})]),l(u,{tag:"h1",class:"body-small",text:i},null,8,["text"])])]))],64))),128))]))}},b=y(M,[["__scopeId","data-v-df86e7bb"]]);M.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"headingTitle",type:{name:"string"},defaultValue:{func:!1,value:"'Heading'"}},{name:"headingSubTitle",type:{name:"string"},defaultValue:{func:!1,value:"'Heading'"}},{name:"hasIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"menuItem",type:{name:"object"},defaultValue:{func:!1,value:`{\r
    'Menu label': 'Menu decription.',\r
    'Menu label 2': 'Menu decription 2.',\r
    'Menu label 3': 'Menu decription 3.',\r
    'hr': '',\r
    'Menu label 4': 'Menu decription 4.',\r
    'Menu label 5': 'Menu decription 5.'\r
}`}}],sourceFiles:["D:/Ha Nguyen/EDTEXCO/build-storybook/src/components/Menu.vue"]};const E={title:"Components/MyMenu",components:b,argTypes:{headingTitle:{control:{type:"text",description:"Header menu"}},headingSubTitle:{control:{type:"text",description:"Sub header"}},hasIcon:{control:"boolean",description:"Display icon of line"},menuItem:{control:{type:"object",defaultValue:{"Menu label":"Menu decription.","Menu label 2":"Menu decription 2.","Menu label 3":"Menu decription 3.",hr:"","Menu label 4":"Menu decription 4.","Menu label 5":"Menu decription 5."}}}}},V=n=>({components:{Menu:b},setup(){return{args:n}},template:'<Menu v-bind="args" />'}),s=V.bind({});s.args={headingTitle:"Title",headingSubTitle:"Subtitle",hasIcon:!0,menuItem:{"Menu label":"Menu decription.","Menu label 2":"Menu decription 2.","Menu label 3":"Menu decription 3.",hr:"","Menu label 4":"Menu decription 4.","Menu label 5":"Menu decription 5."}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Menu
  },
  setup() {
    return {
      args
    };
  },
  template: '<Menu v-bind="args" />'
})`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,E as default};
