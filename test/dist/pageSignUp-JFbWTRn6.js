const __vite__fileDeps=["./pageIm-DcjNHHiz.js","./index-thw_O1vh.js","./index-BIuxX3_O.css","./page-DEmaF4AP.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as m,f as P,_ as w,h as y,i as I}from"./index-thw_O1vh.js";import{L as E}from"./loginPage-C9uLQBcF.js";import{P as N}from"./page-DEmaF4AP.js";import{I as v,r as f,w as k}from"./wrapEmojiText-DdGkM-CA.js";import{P as A,a as S}from"./avatar-CuwnQXVA.js";import{I as F,B as M}from"./button-CcYnAorP.js";import{p as U}from"./putPreloader-B7pIsWAl.js";import"./scrollable-BTfuyeop.js";let d=null;const x=async()=>{const e=new E({className:"page-signUp",withInputWrapper:!0,titleLangKey:"YourName",subtitleLangKey:"Login.Register.Subtitle"});e.imageDiv.classList.add("avatar-edit"),e.title.classList.add("fullName");const o=document.createElement("canvas");o.id="canvas-avatar",o.className="avatar-edit-canvas";const b=F("cameraadd","avatar-edit-icon");e.imageDiv.append(o,b);let u;e.imageDiv.addEventListener("click",()=>{A.createPopup(S).open(o,a=>{u=a})});const h=a=>{const n=t.value||"",i=s.value||"",l=n||i?(n+" "+i).trim():"";l?f(e.title,k(l)):f(e.title,I("YourName"))},L=()=>new Promise((a,n)=>{if(!u)return a();u().then(i=>{m.managers.appProfileManager.uploadProfilePhoto(i).then(a,n)},n)}),t=new v({label:"FirstName",maxLength:70}),s=new v({label:"LastName",maxLength:64}),c=M("btn-primary btn-color-primary"),p=new P.IntlElement({key:"StartMessaging"});return c.append(p.element),e.inputWrapper.append(t.container,s.container,c),t.input.addEventListener("input",h),s.input.addEventListener("input",h),c.addEventListener("click",function(a){if(t.input.classList.contains("error")||s.input.classList.contains("error"))return!1;if(!t.value.length)return t.input.classList.add("error"),!1;this.disabled=!0;const n=t.value.trim(),i=s.value.trim(),l={phone_number:d.phone_number,phone_code_hash:d.phone_code_hash,first_name:n,last_name:i};p.update({key:"PleaseWait"});const g=U(this);m.managers.apiManager.invokeApi("auth.signUp",l).then(async r=>{switch(r._){case"auth.authorization":await m.managers.apiManager.setUser(r.user),L().finally(()=>{w(()=>import("./pageIm-DcjNHHiz.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>{_.default.mount()})});break;default:p.update({key:r._}),this.removeAttribute("disabled"),g.remove();break}}).catch(r=>{switch(this.removeAttribute("disabled"),g.remove(),r.type){default:p.update({key:r.type});break}})}),y(),new Promise(a=>{window.requestAnimationFrame(a)})},q=new N("page-signUp",!0,x,e=>{d=e,m.managers.appStateManager.pushToState("authState",{_:"authStateSignUp",authCode:e})});export{q as default};
//# sourceMappingURL=pageSignUp-JFbWTRn6.js.map
