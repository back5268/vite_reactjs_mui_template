import{aH as S,j as e,G as d,H as x,B as v,T as D,h as C,aK as w,b as k,aL as A,a6 as u,a7 as p}from"./index-21568be7.js";import{F as h}from"./FormInput-7f40563c.js";const K=t=>{const{d:c,index:i,handleDelete:n,handleSetData:r}=t;return e.jsxs(d,{container:!0,mt:2,mb:2,children:[e.jsxs(d,{item:!0,xs:11,lg:11,display:"flex",gap:2,children:[e.jsx(h,{label:"Key",value:c.key,onChange:l=>r({key:l.target.value},i)}),e.jsx(h,{label:"Value",value:c.value,onChange:l=>r({value:l.target.value},i)})]}),e.jsx(d,{item:!0,xs:1,lg:1,display:"flex",alignContent:"center",justifyContent:"center",children:e.jsx(k,{onClick:()=>n(i),color:"error","aria-label":"delete",children:e.jsx(A,{})})})]})},T=t=>{const c=S(),{title:i="Dữ liệu",data:n=[{key:"",value:""}],setData:r=()=>{},xs:l=12,sm:j=12,lg:m=12}=t,y=()=>{r(a=>[...a,{key:"",value:""}])},b=a=>{n&&n[0]&&r(s=>s.filter((o,f)=>f!==a))},g=(a,s)=>{if((s||s===0)&&a&&typeof a=="object"){let o=n;o[s]={...o[s],...a},r([...o])}};return e.jsx(d,{item:!0,xs:l,sm:j,lg:m,sx:{mt:2,mb:2},children:e.jsxs(x,{variant:"outlined",sx:{p:2},children:[e.jsxs(v,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(D,{variant:"h5",sx:{fontWeight:"400"},children:i}),e.jsx(v,{gap:2,display:"flex",children:e.jsx(C,{type:"button",component:"label",onClick:y,variant:"contained",startIcon:e.jsx(w,{}),children:"Thêm"})})]}),e.jsx(x,{variant:"outlined",sx:{px:2,py:1,mt:2,backgroundColor:c.palette.grey[50]},children:n.map((a,s)=>e.jsx(K,{d:a,index:s,handleDelete:b,handleSetData:g},s))})]})})},V=t=>p("web/service/getListService",t),F=t=>p("web/service/countService",t),G=t=>u("web/service/deleteService",t),H=t=>p("web/service/getDetailService",t),L=t=>u("/web/service/addService",t),_=t=>u("/web/service/updateService",t);export{T as K,L as a,G as b,F as c,H as d,V as l,_ as u};
