import{j as e,aU as l,a2 as m,G as n}from"./index-21568be7.js";import{a as d}from"./index-31d966f2.js";import{F as t}from"./FormInput-7f40563c.js";import{u}from"./index.esm-229c0b27.js";const a={name:"",template_code:"",token:"",params_mail:""},j=()=>{const{register:r,handleSubmit:i,reset:o,formState:{errors:s}}=u({defaultValues:a});return e.jsx(l,{checked:!1,title:"sms",handleSubmit:i,actions:{add:d},handleSuccess:()=>{o(a)},children:e.jsx(m,{children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(t,{id:"to",label:"Người nhận (*)",register:r,errors:s,required:"phone"}),e.jsx(t,{id:"template_code",label:"Mã mẫu thông báo (*)",register:r,errors:s,required:!0}),e.jsx(t,{id:"token",label:"Mã xác nhận (*)",register:r,errors:s,required:!0,multiline:!0,rows:6,lg:12}),e.jsx(t,{id:"param_sms",label:"Params (*)",register:r,errors:s,required:!0,multiline:!0,rows:6,lg:12})]})})})};export{j as default};
