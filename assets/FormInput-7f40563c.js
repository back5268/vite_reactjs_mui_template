import{k as u,j as n,G as g,g as E,aN as x,aP as I,aQ as _}from"./index-21568be7.js";const s={number:/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,phone:/^0[1-9]{1}[0-9]{8}$/,code:/^[a-zA-Z0-9_]{1,50}$/,password:/^.{6,}$/,C_BIRTHDAY:/^[12]{1}[0-9]{3}-(0?[1-9]|1[0-2]{1})-(0?[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})$/,C_DATE_TIME:/^[2]{1}[0]{1}[0-9]{2}-(0?[1-9]|1[0-2]{1})-(0?[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1}) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/,C_EXCEL_DATE:/^(0?[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})[-/]{1}(0?[1-9]|1[0-2]{1})[-/]{1}[12]{1}[0-9]{3}$/,SO_NGUYEN_DUONG:/^[1-9][\d]*$/,F_EXCEL:/^application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet$/,F_IMG:/^image\/png|image\/jpeg|image\/jpg|image\/gif$/},f={email:{VI:"Email không đúng định dạng",EN:"Email malformed!"},phone:{VI:"Số điện thoại không đúng định dạng",EN:"Phone malformed!"},code:{VI:"Mã không được chứa các ký tự đặc biệt",EN:"Code cannot contain special characters!"},password:{VI:"Mật khẩu phải lớn hơn 6 ký tự",EN:"Password must be greater than 6 characters!"},text:{VI:"Trường này không được bỏ trống",EN:"This field cannot be left blank!"}},i=(r,t)=>(r=["email","code","phone","password"].includes(r)&&r||"text",t=t||"VI",f[r][t]),$=r=>{const t=i(),e=i(r);switch(r){case"email":return{pattern:{value:s.email,message:e},required:t};case"phone":return{pattern:{value:s.phone,message:e},required:t};case"code":return{pattern:{value:s.code,message:e},required:t};case"password":return{pattern:{value:s.password,message:e},required:t};default:return{required:t}}},N=r=>{const t=u(),{id:e,label:o,required:c,errors:a={},register:l=()=>{},xs:m=12,sm:d=12,lg:h=6,...p}=r;return n.jsx(g,{item:!0,xs:m,sm:d,lg:h,children:n.jsxs(E,{fullWidth:!0,error:!!(a&&a[e]),sx:{...t.typography.customInput},children:[n.jsx(x,{htmlFor:e,children:o}),n.jsx(I,{...l(e,c&&$(c)),id:e,label:o,autoComplete:e,...p}),a&&a[e]&&n.jsx(_,{error:!0,children:a[e].message})]})})};export{N as F,s as R,$ as g};
