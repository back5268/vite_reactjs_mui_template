import{j as t,H as D,a5 as V,a6 as k,a7 as C,r as g,a1 as E,a2 as M,G as P,a8 as w,a9 as L,M as B,a3 as G,a4 as O}from"./index-21568be7.js";import{u as f,b as d,r as I,a as U,F as K,B as S,c as H,T as F}from"./useGetParams-acf1653d.js";import{F as j}from"./FormInput-7f40563c.js";import{F as J}from"./FormSwitch-9dbcd9cb.js";import{u as N}from"./index.esm-229c0b27.js";import{l as R}from"./index-7ce5889c.js";import{l as z}from"./index-7abeea52.js";const Q=a=>{const{initialValue:i,value:c,setValue:s=()=>{}}=a,o=(m,u)=>{s(m)};return t.jsx(D,{variant:"outlined",sx:{mt:1},children:t.jsx(V,{initialValue:i,init:{branding:!1,height:800,menubar:!0,plugins:"print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",toolbar:"formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat"},value:c,onEditorChange:o})})},W=a=>C("web/template/getListTemplate",a),X=a=>C("web/template/countTemplate",a),Y=a=>k("web/template/deleteTemplate",a),Z=a=>C("web/template/getDetailTemplate",a),$=a=>k("/web/template/addTemplate",a,!0),A=a=>k("/web/template/updateTemplate",a,!0),x={name:"",code:"",type:"",href:"",category_template_id:"",company_id:"",status:!0},ee=a=>{const{visibled:i,setVisibled:c,setParams:s,categoryTemplates:o,companies:m}=a,[u,b]=g.useState([]),{register:r,handleSubmit:h,reset:y,setValue:v,watch:e,formState:{errors:p}}=N({defaultValues:x}),n=f(Z,{id:i},{}),[T,_]=g.useState(null);g.useEffect(()=>{if(typeof i=="number"){for(const l in x)Object.hasOwnProperty.call(x,l)&&(l==="status"?v("status",n.status===1):v(l,n[l]+""||""));n.id&&n.avatar&&b([n.avatar]),n.id&&n.content&&_(n.content)}},[JSON.stringify(n)]);const q=l=>(u&&u[0]&&(l.files={avatar:u[0]}),T&&(l.content=T),l.status=l.status?1:0,typeof i=="number"?{...I(l,n),id:i}:l);return t.jsx(E,{checked:typeof i=="number",title:"mẫu thông báo",visibled:i,setVisibled:c,setParams:s,handleSubmit:h,actions:{add:$,update:A},handleData:q,handleSuccess:()=>{s(l=>({...l,render:!l.render})),b([]),_(null),y(x)},children:t.jsxs(M,{children:[t.jsxs(P,{container:!0,spacing:2,children:[t.jsx(j,{id:"name",label:"Tên mẫu thông báo (*)",register:r,errors:p,required:!0}),t.jsx(j,{id:"code",label:"Mã mẫu thông báo (*)",register:r,errors:p,required:!0}),t.jsx(d,{id:"type",label:"Loại dịch vụ (*)",options:w,value:e("type"),register:r,errors:p,required:!0}),t.jsx(d,{id:"category_template_id",label:"Loại thông báo (*)",options:o,value:e("category_template_id"),register:r,errors:p,required:!0}),t.jsx(d,{id:"company_id",label:"Công ty (*)",options:m,value:e("company_id"),register:r,errors:p,required:!0}),t.jsx(j,{id:"href",label:"Đường dẫn quảng cáo",register:r,errors:p}),t.jsx(L,{title:"Ảnh quảng cáo chân trang",files:u,setFiles:b}),t.jsx(J,{checked:e("status"),id:"status",register:r})]}),t.jsx(Q,{value:T,setValue:_})]})})},re=()=>{const a=U(),[i,c]=g.useState(a),[s,o]=g.useState({key_search:"",category_template_id:"",company_id:"",type:"",status:""}),[m,u]=g.useState(!1),b=f(W,i,[]),r=f(X,i,0),h=f(R,!1,[]),y=f(z,!1,[]),v=[{label:"Loại thông báo",body:e=>S(h,e.category_template_id)},{label:"Công ty",body:e=>S(y,e.company_id)},{field:"name",label:"Mẫu thông báo"},{field:"code",label:"Mã mẫu thông báo"},{label:"Kiểu dịch vụ",body:e=>H(e.type)},{label:"Thời gian tạo",body:e=>F(e.created_at)},{label:"Thời gian cập nhật",body:e=>F(e.updated_at)},{label:"Trạng thái",field:"status",updateStatus:e=>A({status:e.status,id:e.id})}];return t.jsxs(B,{title:"Danh sách mẫu thông báo",children:[m&&t.jsx(ee,{visibled:m,setVisibled:u,setParams:c,categoryTemplates:h,companies:y}),t.jsxs(K,{setParams:c,filter:s,setFilter:o,sm:6,lg:9,children:[t.jsx(j,{lg:3,sm:6,label:"Tìm kiếm theo mẫu, mã thông báo",value:s.key_search,onChange:e=>o({...s,key_search:e.target.value})}),t.jsx(d,{lg:3,sm:6,label:"Loại thông báo",options:h,value:s.category_template_id,onChange:e=>o({...s,category_template_id:e.target.value})}),t.jsx(d,{lg:3,sm:6,label:"Công ty",options:y,value:s.company_id,onChange:e=>o({...s,company_id:e.target.value})}),t.jsx(d,{lg:3,sm:6,label:"Kiểu dịch vụ",options:w,value:s.type,onChange:e=>o({...s,type:e.target.value})}),t.jsx(d,{lg:3,sm:6,label:"Trạng thái",options:G,value:s.status,onChange:e=>o({...s,status:e.target.value})})]}),t.jsx(O,{params:i,setParams:c,count:r,items:b,columns:v,setVisibleDialog:u,headerInfo:!0,actionInfo:{deleteAction:Y}})]})};export{re as default};
