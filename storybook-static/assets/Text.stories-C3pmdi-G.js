import{T as b}from"./Text-CNjbOpIy.js";import"./vue.esm-bundler-kJhnHdVo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Components/MyText",component:b,argTypes:{tag:{control:{type:"text"},description:"HTML tag to use (e.g., p, span, h1)"},text:{control:{type:"text"},description:"The content of the text"},class:{control:{type:"select",options:["default","body-strong","body-strong2","body-base","body-small","body-medium","body-larger","light"]},description:"CSS class to apply for styling"}}},n=h=>({components:{Text:b},setup(){return{args:h}},template:'<Text v-bind="args" />'}),t=n.bind({});t.args={tag:"p",text:"This is a default paragraph.",class:"default"};const e=n.bind({});e.args={tag:"p",text:"This is a strong text.",class:"body-strong"};const s=n.bind({});s.args={tag:"h1",text:"This is a large heading.",class:"body-larger"};const r=n.bind({});r.args={tag:"span",text:"This is light text.",class:"light"};var a,o,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Text
  },
  setup() {
    return {
      args
    };
  },
  template: '<Text v-bind="args" />'
})`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,g,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Text
  },
  setup() {
    return {
      args
    };
  },
  template: '<Text v-bind="args" />'
})`,...(i=(g=e.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Text
  },
  setup() {
    return {
      args
    };
  },
  template: '<Text v-bind="args" />'
})`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,x,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Text
  },
  setup() {
    return {
      args
    };
  },
  template: '<Text v-bind="args" />'
})`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const L=["Default","StrongText","LargeHeading","LightText"];export{t as Default,s as LargeHeading,r as LightText,e as StrongText,L as __namedExportsOrder,v as default};
