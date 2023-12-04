import{r as h,j as e,a1 as y,a2 as S,G as k,M as F,a3 as _,a4 as A}from"./index-21568be7.js";import{u as b,r as P,a as T,F as U,b as v,T as g}from"./useGetParams-acf1653d.js";import{F as n}from"./FormInput-7f40563c.js";import{d as E,a as q,u as x,b as D,l as V,c as C}from"./index-217c05a8.js";import{F as G}from"./FormSwitch-9dbcd9cb.js";import{u as M}from"./index.esm-229c0b27.js";const m={status:!0,email:"",phone:"",password:"",confirm_password:""},O=t=>{const{visibled:a,setVisibled:l,setParams:i}=t,r=b(E,{id:a},{}),{register:o,handleSubmit:u,reset:f,setValue:c,setError:d,watch:j,formState:{errors:p}}=M({defaultValues:m});h.useEffect(()=>{if(r&&typeof a=="number")for(const s in m)Object.hasOwnProperty.call(m,s)&&(s==="status"?c("status",r.status===1):["password","confirm_password"].includes(s)||c(s,r[s]+""||""))},[JSON.stringify(r)]);const w=s=>{if(s.status=s.status?1:0,s.password&&s.password!==s.confirm_password)d("confirm_password",{type:"required",message:"Mật khẩu nhập lại không chính xác"});else return typeof a=="number"?{...P(s,r),id:a}:s};return e.jsx(y,{checked:typeof a=="number",title:"người dùng",visibled:a,setVisibled:l,setParams:i,handleSubmit:u,actions:{add:q,update:x},handleData:w,handleSuccess:()=>{i(s=>({...s,render:!s.render})),f(m)},children:e.jsx(S,{children:e.jsxs(k,{container:!0,spacing:2,children:[e.jsx(n,{id:"email",label:"Email (*)",register:o,errors:p,required:"email"}),e.jsx(n,{id:"phone",label:"Số điện thoại (*)",register:o,errors:p,required:"phone"}),e.jsx(n,{id:"password",label:"Mật khẩu (*)",register:o,errors:p,type:"password",required:typeof a=="number"?!1:"password"}),e.jsx(n,{id:"confirm_password",label:"Nhập lại mật khẩu (*)",register:o,errors:p,type:"password",required:typeof a=="number"?!1:"password"}),e.jsx(G,{checked:j("status"),id:"status",register:o})]})})})},I=[{field:"phone",label:"Phone"},{field:"email",label:"Email"},{label:"Thời gian tạo",body:t=>g(t.created_at)},{label:"Thời gian cập nhật",body:t=>g(t.updated_at)},{label:"Trạng thái",field:"status",updateStatus:t=>x({status:t.status,id:t.id})}],K=()=>{const t=T(),[a,l]=h.useState(t),[i,r]=h.useState({key_search:""}),[o,u]=h.useState(!1),f=b(V,a,[]),c=b(C,a,0);return e.jsxs(F,{title:"Danh sách người dùng",children:[o&&e.jsx(O,{visibled:o,setVisibled:u,setParams:l}),e.jsxs(U,{setParams:l,filter:i,setFilter:r,sm:12,lg:6,children:[e.jsx(n,{lg:3,sm:6,label:"Tìm kiếm theo email, số điện thoại",value:i.key_search,onChange:d=>r({...i,key_search:d.target.value})}),e.jsx(v,{lg:3,sm:6,label:"Trạng thái",options:_,value:i.status,onChange:d=>r({...i,status:d.target.value})})]}),e.jsx(A,{params:a,setParams:l,count:c,items:f,columns:I,setVisibleDialog:u,headerInfo:!0,actionInfo:{deleteAction:D}})]})};export{K as default};
