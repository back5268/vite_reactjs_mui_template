import{j as e,aU as o,a2 as m,G as n}from"./index-21568be7.js";import{s as d}from"./index-31d966f2.js";import{F as t}from"./FormInput-7f40563c.js";import{u}from"./index.esm-229c0b27.js";const s={name:"",template_code:"",token:"",params_mail:""},j=()=>{const{register:r,handleSubmit:i,reset:l,formState:{errors:a}}=u({defaultValues:s});return e.jsx(o,{checked:!1,title:"mail",handleSubmit:i,actions:{add:d},handleSuccess:()=>{l(s)},children:e.jsx(m,{children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(t,{id:"to",label:"Người nhận (*)",register:r,errors:a,required:"mail"}),e.jsx(t,{id:"template_code",label:"Mã mẫu thông báo (*)",register:r,errors:a,required:!0}),e.jsx(t,{id:"token",label:"Mã xác nhận (*)",register:r,errors:a,required:!0,multiline:!0,rows:6,lg:12}),e.jsx(t,{id:"param_mail",label:"Params (*)",register:r,errors:a,required:!0,multiline:!0,rows:6,lg:12})]})})})};export{j as default};