import{a6 as k,a7 as y,r as b,j as a,a1 as _,a2 as L,G as B,a8 as j,aJ as S,M as T,a3 as w,a4 as A}from"./index-21568be7.js";import{u as f,b as h,r as D,a as F,F as C,c as P,T as v}from"./useGetParams-acf1653d.js";import{F as g}from"./FormInput-7f40563c.js";import{u as q}from"./index.esm-229c0b27.js";const E=e=>y("web/black_list/getListBlackList",e),V=e=>y("web/black_list/countBlackList",e),G=e=>k("web/black_list/deleteBlackList",e),O=e=>y("web/black_list/getDetailBlackList",e),I=e=>k("/web/black_list/addBlackList",e),M=e=>k("/web/black_list/updateBlackList",e),p={from:"",to:"",type_service:"",status:""},J=e=>{const{visibled:s,setVisibled:o,setParams:i}=e,{register:l,handleSubmit:n,reset:u,setValue:m,watch:d,formState:{errors:c}}=q({defaultValues:p}),t=f(O,{id:s},{});b.useEffect(()=>{if(typeof s=="number")for(const r in p)Object.hasOwnProperty.call(p,r)&&m(r,t[r]+""||"")},[JSON.stringify(t)]);const x=r=>typeof s=="number"?{...D(r,t),id:s}:r;return a.jsx(_,{checked:typeof s=="number",title:"địa chỉ chặn",visibled:s,setVisibled:o,setParams:i,handleSubmit:n,actions:{add:I,update:M},handleData:x,handleSuccess:()=>{i(r=>({...r,render:!r.render})),u(p)},children:a.jsx(L,{children:a.jsxs(B,{container:!0,spacing:2,children:[a.jsx(g,{id:"from",label:"Địa chỉ gửi (*)",register:l,errors:c,required:!0}),a.jsx(g,{id:"to",label:"Địa chỉ chặn (*)",register:l,errors:c,required:!0}),a.jsx(h,{id:"type_service",label:"Loại dịch vụ (*)",options:j,value:d("type_service"),register:l,errors:c,required:!0}),a.jsx(h,{id:"status",label:"Trạng thái (*)",options:S,value:d("status"),register:l,errors:c,required:!0})]})})})},z=()=>{const e=F(),[s,o]=b.useState(e),[i,l]=b.useState({key_search:"",type_service:"",status:""}),[n,u]=b.useState(!1),m=f(E,s,[]),d=f(V,s,0),c=[{field:"from",label:"Địa chỉ gửi"},{field:"to",label:"Địa chỉ chặn"},{label:"Loại dịch vụ",body:t=>P(t.type_service)},{label:"Thời gian tạo",body:t=>v(t.created_at)},{label:"Thời gian cập nhật",body:t=>v(t.updated_at)}];return a.jsxs(T,{title:"Danh sách địa chỉ chặn",children:[n&&a.jsx(J,{visibled:n,setVisibled:u,setParams:o}),a.jsxs(C,{setParams:o,filter:i,setFilter:l,sm:12,children:[a.jsx(g,{lg:3,sm:6,label:"Tìm kiếm theo địa chỉ nhận, gửi",value:i.key_search,onChange:t=>l({...i,key_search:t.target.value})}),a.jsx(h,{lg:3,sm:6,label:"Kiểu dịch vụ",options:j,value:i.type_service,onChange:t=>l({...i,type_service:t.target.value})}),a.jsx(h,{lg:3,sm:6,label:"Trạng thái",options:w,value:i.status,onChange:t=>l({...i,status:t.target.value})})]}),a.jsx(A,{params:s,setParams:o,count:d,items:m,columns:c,setVisibleDialog:u,headerInfo:!0,actionInfo:{deleteAction:G}})]})};export{z as default};