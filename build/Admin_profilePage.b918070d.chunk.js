"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[9497],{50166:(pe,j,t)=>{t.r(j),t.d(j,{default:()=>De});var e=t(67294),f=t(78384),p=t(68547),Z=t(97132),U=t(80831),G=t(11700),V=t.n(G),I=t(23724),D=t(78718),B=t.n(D),N=t(15482),L=t(62031),b=t(49425),O=t(5493),A=t(78862),z=t(19408),u=t(34626),E=t(9008),Q=t(84686),S=t(43808),W=t(91767),X=t(55967),R=t(28649),M=t.n(R),Y=t(48765),F=t.n(Y),$=t(84734),d=t.n($),s=t(50592),i=t(78143),fe=t(57557),ge=t.n(fe),ee=t(23998),he=Object.defineProperty,ve=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,re=(a,n,r)=>n in a?he(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r,Ee=(a,n)=>{for(var r in n||(n={}))ye.call(n,r)&&re(a,r,n[r]);if(te)for(var r of te(n))we.call(n,r)&&re(a,r,n[r]);return a},Se=(a,n)=>ve(a,Pe(n)),ae=(a,n,r)=>new Promise((T,y)=>{var C=m=>{try{v(r.next(m))}catch(w){y(w)}},x=m=>{try{v(r.throw(m))}catch(w){y(w)}},v=m=>m.done?T(m.value):Promise.resolve(m.value).then(C,x);v((r=r.apply(a,n)).next())});const Oe=()=>ae(void 0,null,function*(){const{data:a}=yield ee.be.get("/admin/users/me");return a.data}),Me=a=>ae(void 0,null,function*(){const n=ge()(a,["confirmPassword","currentTheme"]),{data:r}=yield ee.be.put("/admin/users/me",n);return Se(Ee({},r.data),{currentTheme:a.currentTheme})});var Ie=t(53209),Le=t(17405);const be=Ie.Ry().shape(Le.Rw);var ne=t(8610),Ae=Object.defineProperty,Te=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,oe=(a,n,r)=>n in a?Ae(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r,le=(a,n)=>{for(var r in n||(n={}))xe.call(n,r)&&oe(a,r,n[r]);if(se)for(var r of se(n))je.call(n,r)&&oe(a,r,n[r]);return a},ie=(a,n)=>Te(a,Ce(n)),de=(a,n,r)=>new Promise((T,y)=>{var C=m=>{try{v(r.next(m))}catch(w){y(w)}},x=m=>{try{v(r.throw(m))}catch(w){y(w)}},v=m=>m.done?T(m.value):Promise.resolve(m.value).then(C,x);v((r=r.apply(a,n)).next())});const Ge=f.default.a`
  color: ${({theme:a})=>a.colors.primary600};
`,J=(0,f.default)(X.TextInput)`
  ::-ms-reveal {
    display: none;
  }
`,K=(0,f.default)(W.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }
`,De=()=>{const[a,n]=(0,e.useState)(!1),[r,T]=(0,e.useState)(!1),[y,C]=(0,e.useState)(!1),{changeLocale:x,localeNames:v}=(0,s.Z)(),{setUserDisplayName:m}=(0,p.useAppInfos)(),w=(0,I.useQueryClient)(),{formatMessage:o}=(0,Z.useIntl)(),{trackUsage:Be}=(0,p.useTracking)(),k=(0,p.useNotification)(),{lockApp:Ne,unlockApp:Re}=(0,p.useOverlayBlocker)(),{notifyStatus:Fe}=(0,Q.useNotifyAT)(),{currentTheme:He,themes:ce,onChangeTheme:Ze}=(0,i.M1)();(0,p.useFocusWhenNavigate)();const{status:Ue,data:H}=(0,I.useQuery)("user",()=>Oe(),{onSuccess(){Fe(o({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ve=Ue!=="success",me=(0,I.useMutation)(l=>Me(l),{onSuccess(l){return de(this,null,function*(){yield w.invalidateQueries("user"),p.auth.setUserInfo(B()(l,["email","firstname","lastname","username","preferedLanguage"]));const g=l.username||(0,ne.Pp)(l.firstname,l.lastname);m(g),x(l.preferedLanguage),Ze(l.currentTheme),Be("didChangeMode",{newMode:l.currentTheme}),k({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})})},onSettled(){Re()},refetchActive:!0}),{isLoading:ze}=me,Qe=(l,g)=>de(void 0,[l,g],function*(h,{setErrors:q}){Ne();const c=h.username||null;me.mutate(ie(le({},h),{username:c}),{onError(P){var ue;const _=(ue=P==null?void 0:P.response)==null?void 0:ue.data;return _!=null&&_.data?q(_.data):k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})}),We=["currentTheme","email","firstname","lastname","username","preferedLanguage"],Xe=B()(ie(le({},H),{currentTheme:He}),We);if(Ve)return e.createElement(L.Main,{"aria-busy":"true"},e.createElement(N.Helmet,{title:o({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(A.HeaderLayout,{title:o({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(A.ContentLayout,null,e.createElement(p.LoadingIndicatorPage,null)));const Ye=Object.keys(ce).filter(l=>ce[l]);return e.createElement(L.Main,{"aria-busy":ze},e.createElement(N.Helmet,{title:o({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(U.Formik,{onSubmit:Qe,initialValues:Xe,validateOnChange:!1,validationSchema:be,enableReinitialize:!0},({errors:l,values:g,handleChange:h,isSubmitting:q})=>e.createElement(p.Form,null,e.createElement(A.HeaderLayout,{title:H.username||(0,ne.Pp)(H.firstname,H.lastname),primaryAction:e.createElement(z.Button,{startIcon:e.createElement(d(),null),loading:q,type:"submit"},o({id:"global.save",defaultMessage:"Save"}))}),e.createElement(O.Box,{paddingBottom:10},e.createElement(A.ContentLayout,null,e.createElement(E.Stack,{spacing:6},e.createElement(O.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(E.Stack,{spacing:4},e.createElement(b.Typography,{variant:"delta",as:"h2"},o({id:"global.profile",defaultMessage:"Profile"})),e.createElement(u.Grid,{gap:5},e.createElement(u.GridItem,{s:12,col:6},e.createElement(p.GenericInput,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:l.firstname,onChange:h,value:g.firstname||"",type:"text",name:"firstname",required:!0})),e.createElement(u.GridItem,{s:12,col:6},e.createElement(p.GenericInput,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:l.lastname,onChange:h,value:g.lastname||"",type:"text",name:"lastname"})),e.createElement(u.GridItem,{s:12,col:6},e.createElement(p.GenericInput,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:l.email,onChange:h,value:g.email||"",type:"email",name:"email",required:!0})),e.createElement(u.GridItem,{s:12,col:6},e.createElement(p.GenericInput,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:l.username,onChange:h,value:g.username||"",type:"text",name:"username"}))))),e.createElement(O.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(E.Stack,{spacing:4},e.createElement(b.Typography,{variant:"delta",as:"h2"},o({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(u.Grid,{gap:5},e.createElement(u.GridItem,{s:12,col:6},e.createElement(J,{error:l.currentPassword?o({id:l.currentPassword,defaultMessage:l.currentPassword}):"",onChange:h,value:g.currentPassword||"",label:o({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:y?"text":"password",endAction:e.createElement(K,{onClick:c=>{c.stopPropagation(),C(P=>!P)},label:o(y?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},y?e.createElement(M(),null):e.createElement(F(),null))}))),e.createElement(u.Grid,{gap:5},e.createElement(u.GridItem,{s:12,col:6},e.createElement(J,{error:l.password?o({id:l.password,defaultMessage:l.password}):"",onChange:h,value:g.password||"",label:o({id:"global.password",defaultMessage:"Password"}),name:"password",type:a?"text":"password",autoComplete:"new-password",endAction:e.createElement(K,{onClick:c=>{c.stopPropagation(),n(P=>!P)},label:o(a?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},a?e.createElement(M(),null):e.createElement(F(),null))})),e.createElement(u.GridItem,{s:12,col:6},e.createElement(J,{error:l.confirmPassword?o({id:l.confirmPassword,defaultMessage:l.confirmPassword}):"",onChange:h,value:g.confirmPassword||"",label:o({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:r?"text":"password",autoComplete:"new-password",endAction:e.createElement(K,{onClick:c=>{c.stopPropagation(),T(P=>!P)},label:o(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?e.createElement(M(),null):e.createElement(F(),null))}))))),e.createElement(O.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(E.Stack,{spacing:4},e.createElement(E.Stack,{spacing:1},e.createElement(b.Typography,{variant:"delta",as:"h2"},o({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(b.Typography,null,o({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(Ge,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},o({id:"Settings.profile.form.section.experience.documentation",defaultMessage:"here"}))}))),e.createElement(u.Grid,{gap:5},e.createElement(u.GridItem,{s:12,col:6},e.createElement(S.Select,{label:o({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:o({id:"global.select",defaultMessage:"Select"}),hint:o({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{h({target:{name:"preferedLanguage",value:null}})},clearLabel:o({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:g.preferedLanguage,onChange:c=>{h({target:{name:"preferedLanguage",value:c}})}},Object.keys(v).map(c=>{const P=v[c];return e.createElement(S.Option,{value:c,key:c},P)}))),e.createElement(u.GridItem,{s:12,col:6},e.createElement(S.Select,{label:o({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:o({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:o({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:g.currentTheme,onChange:c=>{h({target:{name:"currentTheme",value:c}})}},Ye.map(c=>e.createElement(S.Option,{value:c,key:c},o({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:o({id:c,defaultMessage:V()(c)})}))))))))))))))}},17405:(pe,j,t)=>{t.d(j,{YM:()=>$,Rw:()=>O});var e=t(53209),f=t(68547),p=Object.defineProperty,Z=Object.defineProperties,U=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,D=(d,s,i)=>s in d?p(d,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[s]=i,B=(d,s)=>{for(var i in s||(s={}))V.call(s,i)&&D(d,i,s[i]);if(G)for(var i of G(s))I.call(s,i)&&D(d,i,s[i]);return d},N=(d,s)=>Z(d,U(s));const L={firstname:e.Z_().trim().required(f.translatedErrors.required),lastname:e.Z_(),email:e.Z_().email(f.translatedErrors.email).lowercase().required(f.translatedErrors.required),username:e.Z_().nullable(),password:e.Z_().min(8,f.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,f.translatedErrors.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(d,s)=>d?s.required(f.translatedErrors.required):s)},O=N(B({},L),{currentPassword:e.Z_().when(["password","confirmPassword"],(d,s,i)=>d||s?i.required(f.translatedErrors.required):i),preferedLanguage:e.Z_().nullable()}),z={roles:e.IX().min(1,f.translatedErrors.required).required(f.translatedErrors.required)};var u=Object.defineProperty,E=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,R=(d,s,i)=>s in d?u(d,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[s]=i,M=(d,s)=>{for(var i in s||(s={}))W.call(s,i)&&R(d,i,s[i]);if(S)for(var i of S(s))X.call(s,i)&&R(d,i,s[i]);return d},Y=(d,s)=>E(d,Q(s));const $=e.Ry().shape(M(Y(M({},L),{isActive:e.Xg()}),z))}}]);
