import{b as L,d as t,n as c,t as l,o as V}from"./vue.esm-bundler-kJhnHdVo.js";/* empty css            */import"./Button-BXdc31XB.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"container row"},E={class:"content"},w={class:"content-title"},A={class:"title-header row"},O={class:"col col-2"},W={class:"content-bottom"},z={class:""},x={__name:"Notification",props:{notiType:{type:String,default:["message","alert"]},hasIcon:{type:Boolean,default:!1},hasDissmis:{type:Boolean,default:!0},title:{type:String,default:"Title"},body:{type:String,default:"Body text."},hasButton:{type:Boolean,default:!0},buttonType:{type:String,default:"primary"},buttonLabel:{type:String,default:"Button"}},setup(e){return(F,u)=>(V(),L("div",{class:c(["notification",e.notiType])},[t("div",C,[t("div",{class:c({icon:!0,none:!e.hasIcon})},u[0]||(u[0]=[t("i",{class:"fa-regular fa-bell"},null,-1)]),2),t("div",E,[t("div",w,[t("div",A,[t("p",O,l(e.title),1),t("i",{class:c(["fa-solid fa-xmark",{none:!e.hasDissmis}])},null,2)]),t("p",null,l(e.body),1)]),t("div",W,[t("button",z,l(e.buttonLabel),1)])])])],2))}},S=k(x,[["__scopeId","data-v-08c9cf3e"]]);x.__docgenInfo={exportName:"default",displayName:"Notification",description:"",tags:{},props:[{name:"notiType",type:{name:"string"},defaultValue:{func:!1,value:"['message', 'alert']"}},{name:"hasIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasDissmis",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Title'"}},{name:"body",type:{name:"string"},defaultValue:{func:!1,value:"'Body text.'"}},{name:"hasButton",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"buttonType",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"buttonLabel",type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}}],sourceFiles:["D:/Ha Nguyen/EDTEXCO/build-storybook/src/components/Notification.vue"]};const j={title:"Components/Notification",component:S,argTypes:{notiType:{control:{type:"select",options:["message","alert"]},description:"Type of notification (message or alert)"},hasIcon:{control:"boolean",description:"Display icon in the notification"},hasDissmis:{control:"boolean",description:"Show or hide the dismiss button"},title:{control:"text",description:"Title of the notification"},body:{control:"text",description:"Body text of the notification"},hasButton:{control:"boolean",description:"Display the button in "},buttonType:{control:{type:"select",options:["primary","neutral"]},description:"Styling for the button"},buttonLabel:{control:"text",description:"Label text for the button"}}},r=e=>({components:{Notification:S},setup(){return{args:e}},template:'<Notification v-bind="args" />'}),o=r.bind({});o.args={notiType:"message",hasIcon:!0,hasDissmis:!0,title:"Default Notification",body:"This is a default notification.",hasButton:!0,buttonType:"primary",buttonLabel:"Got it"};const n=r.bind({});n.args={notiType:"alert",hasIcon:!0,hasDissmis:!0,title:"Alert Notification",body:"This is an alert notification.",hasButton:!0,buttonType:"primary",buttonLabel:"Understood"};const a=r.bind({});a.args={notiType:"message",hasIcon:!1,hasDissmis:!0,title:"No Icon Notification",body:"This notification does not have an icon.",hasButton:!0,buttonType:"neutral",buttonLabel:"Okay"};const s=r.bind({});s.args={notiType:"alert",hasIcon:!0,hasDissmis:!1,title:"No Dismiss Notification",body:"This notification cannot be dismissed.",hasButton:!0,buttonType:"primary",buttonLabel:"Close"};const i=r.bind({});i.args={notiType:"message",hasIcon:!0,hasDissmis:!0,title:"No Button Notification",body:"This notification does not have a button.",hasButton:!1};var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Notification
  },
  setup() {
    return {
      args
    };
  },
  template: '<Notification v-bind="args" />'
})`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,b,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Notification
  },
  setup() {
    return {
      args
    };
  },
  template: '<Notification v-bind="args" />'
})`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,g,N;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Notification
  },
  setup() {
    return {
      args
    };
  },
  template: '<Notification v-bind="args" />'
})`,...(N=(g=a.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var T,v,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Notification
  },
  setup() {
    return {
      args
    };
  },
  template: '<Notification v-bind="args" />'
})`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var D,_,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    Notification
  },
  setup() {
    return {
      args
    };
  },
  template: '<Notification v-bind="args" />'
})`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const q=["Default","Alert","NoIcon","NoDismissButton","WithoutButton"];export{n as Alert,o as Default,s as NoDismissButton,a as NoIcon,i as WithoutButton,q as __namedExportsOrder,j as default};
