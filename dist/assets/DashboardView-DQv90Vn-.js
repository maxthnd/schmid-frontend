import{d as U,g as f,k as $,u as N,o as i,c as r,a as e,t as g,q as w,v as j,F as B,r as C,j as D,_ as J,h as S,i as A,x as L,b as I,y as F,z as M}from"./index-CRQW_Mv0.js";import{f as V,d as P}from"./JobService-DJwCb_gt.js";import{u as W}from"./userStore-Cg524SFF.js";const q={key:0,class:"popup-overlay"},H={class:"popup-content"},O={class:"job-form"},R={class:"job-title"},K={class:"job-type"},G={class:"job-description"},Q={class:"job-expectations"},X=["onUpdate:modelValue"],Y=["onClick"],Z={class:"job-doings"},ee=["onUpdate:modelValue"],te=["onClick"],oe=["src"],se=U({__name:"JobUpdatePopup",props:{job:{type:Object,required:!1,default:()=>({title:"",jobType:"",description:"",expectations:[],work:[],imageData:null})},isVisible:{type:Boolean,required:!0}},emits:["close","save"],setup(m,{emit:n}){const a=m,l=n,t=f({...a.job}),s=f(a.job.imageData?`data:image/png;base64,${a.job.imageData}`:null),c=$(()=>!!a.job&&!!a.job.title),y=b=>{const o=b.target,p=o!=null&&o.files?o.files[0]:null;if(p){const d=new FileReader;d.onload=_=>{var z;const E=(z=_.target)==null?void 0:z.result;typeof E=="string"&&(s.value=E,t.value.imageData=s.value)},d.readAsDataURL(p)}},T=()=>t.value.expectations.push(""),k=b=>t.value.expectations.splice(b,1),v=()=>t.value.work.push(""),u=b=>t.value.work.splice(b,1),h=()=>{l("save",t.value),x()},x=()=>l("close");return N(()=>a.job,b=>{t.value={...b},s.value=b.imageData?`data:image/png;base64,${b.imageData}`:null},{immediate:!0}),(b,o)=>m.isVisible?(i(),r("div",q,[e("div",H,[e("button",{class:"close-button",onClick:x},"x"),e("h2",null,g(c.value?"Job Bearbeiten":"Job Erstellen"),1),e("div",O,[e("div",R,[o[3]||(o[3]=e("label",{for:"jobTitle"},"Job Title:",-1)),w(e("input",{id:"jobTitle",type:"text","onUpdate:modelValue":o[0]||(o[0]=p=>t.value.title=p),placeholder:"Job Titel",class:"input-field"},null,512),[[j,t.value.title]])]),e("div",K,[o[4]||(o[4]=e("label",{for:"jobType"},"Job Type:",-1)),w(e("input",{id:"jobType",type:"text","onUpdate:modelValue":o[1]||(o[1]=p=>t.value.jobType=p),placeholder:"Job Typ",class:"input-field"},null,512),[[j,t.value.jobType]])]),e("div",G,[o[5]||(o[5]=e("label",{for:"description"},"Beschreibung:",-1)),w(e("textarea",{id:"description","onUpdate:modelValue":o[2]||(o[2]=p=>t.value.description=p),placeholder:"Beschreibung eingeben",class:"input-field"},null,512),[[j,t.value.description]])]),e("div",Q,[o[6]||(o[6]=e("label",null,"Unsere Erwartungen:",-1)),(i(!0),r(B,null,C(t.value.expectations,(p,d)=>(i(),r("div",{key:"expectation-"+d,class:"list-item"},[w(e("input",{type:"text","onUpdate:modelValue":_=>t.value.expectations[d]=_,placeholder:"Erwartung hinzufügen",class:"input-field small"},null,8,X),[[j,t.value.expectations[d]]]),e("button",{onClick:_=>k(d)},"x",8,Y)]))),128)),e("button",{onClick:T,class:"btn small"},"Erwartung hinzufügen")]),e("div",Z,[o[7]||(o[7]=e("label",null,"Dein Alltag bei uns:",-1)),(i(!0),r(B,null,C(t.value.work,(p,d)=>(i(),r("div",{key:"work-"+d,class:"list-item"},[w(e("input",{type:"text","onUpdate:modelValue":_=>t.value.work[d]=_,placeholder:"Tätigkeit hinzufügen",class:"input-field small"},null,8,ee),[[j,t.value.work[d]]]),e("button",{onClick:_=>u(d)},"x",8,te)]))),128)),e("button",{onClick:v,class:"btn small"},"Tätigkeit hinzufügen")]),o[8]||(o[8]=e("label",{for:"imageUpload"},"Bild hochladen:",-1)),e("input",{type:"file",id:"imageUpload",onChange:y,class:"input-field"},null,32),s.value?(i(),r("img",{key:0,src:s.value,alt:"Job Bild",class:"preview-image"},null,8,oe)):D("",!0),e("button",{onClick:h,class:"btn primary"},g(c.value?"Speichern":"Erstellen"),1)])])])):D("",!0)}}),ae=J(se,[["__scopeId","data-v-f960efa5"]]),le={class:"dashboard-jobboard"},ne={class:"jobboard-body"},ie={class:"table table-striped table-hover"},re={class:"job-elements"},de=["onClick"],ce=["onClick"],ue={key:0,class:"modal fade bd-example-modal-sm",tabindex:"-1",role:"dialog","aria-labelledby":"mySmallModalLabel","aria-hidden":"true"},be=U({__name:"JobBoard",setup(m){const n=f([]),a=f(!1),l=f(null),t=f(!1),s=v=>{l.value=v,a.value=!0},c=()=>{a.value=!1,l.value=null};S(async()=>{n.value=await V()});const y=async v=>{await P(v),t.value=!0,setTimeout(()=>{t.value=!1},5e3),n.value=await V()},T=async()=>{console.log("Function is disabled."),setTimeout(()=>{t.value=!1},5e3),n.value=await V()},k=async()=>{a.value=!0,console.log("Function is disabled.")};return(v,u)=>(i(),r("div",le,[e("div",{class:"jobboard-header"},[u[0]||(u[0]=e("div",{class:"jobboard-title"},[e("h4",null,"Aktuelle Stellenanzeigen")],-1)),e("div",{class:"jobboard-elements"},[e("button",{type:"button",class:"btn btn-success",onClick:k},"Hinzufügen"),e("button",{type:"button",class:"btn btn-danger",onClick:T},"Alle Entfernen")])]),e("div",ne,[e("table",ie,[u[1]||(u[1]=e("thead",null,[e("tr",null,[e("th",null,"Stelle"),e("th",null,"Art der Beschäftigung"),e("th",null,"Ort"),e("th",null,"Aktionen")])],-1)),e("tbody",null,[(i(!0),r(B,null,C(n.value,h=>(i(),r("tr",{key:h.id},[e("td",null,g(h.title),1),e("td",null,g(h.jobType),1),e("td",null,g(h.location),1),e("td",re,[e("button",{class:"btn btn-primary btn-sm",onClick:x=>s(h)},"Bearbeiten",8,de),e("button",{class:"btn btn-danger btn-sm",onClick:x=>y(h.id)},"Löschen",8,ce)])]))),128))])]),t.value?(i(),r("div",ue,u[2]||(u[2]=[e("div",{class:"modal-dialog modal-sm"},[e("div",{class:"modal-content"},[e("p",null,"Job wurde erfolgreich gelöscht.")])],-1)]))):D("",!0),a.value?(i(),A(ae,{key:1,job:l.value||{title:"",jobType:"",description:"",location:"",expectations:[],work:[],imageData:null},isVisible:a.value,onClose:c,onSave:k},null,8,["job","isVisible"])):D("",!0)])]))}}),pe=J(be,[["__scopeId","data-v-1cf5e1bf"]]),me={setup(){const m=W(),n=f(null),a=$(()=>m.getUser),l=$(()=>{var s;return((s=a.value)==null?void 0:s.firstName)??""}),t=$(()=>{var s;return((s=a.value)==null?void 0:s.lastName)??""});return S(()=>{if(!a.value){const s=localStorage.getItem("dashboard");if(s)try{const c=s.split(".")[1],y=atob(c),k=JSON.parse(y).username,v=m.fetchUserData(k).catch(u=>{n.value="Fehler beim Laden der Benutzerdaten.",console.error(u)});console.log(v)}catch(c){n.value="Ungültiges Dashboard-Token.",console.error(c)}else n.value="Kein Dashboard-Token im localStorage gefunden."}}),{user:a,firstName:l,lastName:t,errorMessage:n}}},ve={class:"welcome-header"},he={class:"welcome-title"},ge={key:0,class:"dashboard-title"},_e={key:1,class:"error-message"},fe={key:2,class:"loading-message"};function ke(m,n,a,l,t,s){return i(),r("div",ve,[e("div",he,[l.user?(i(),r("h1",ge,"👋 Willkommen, "+g(l.user.firstName)+" "+g(l.user.lastName)+"!",1)):l.errorMessage?(i(),r("div",_e,g(l.errorMessage),1)):(i(),r("div",fe,"Lade Benutzerdaten..."))])])}const ye=J(me,[["render",ke],["__scopeId","data-v-976aca73"]]),we={class:"dashboard-view"},je={class:"dashboard-content"},Te={class:"dashboard-header"},xe={class:"dashboard-body"},$e=U({__name:"DashboardView",setup(m){const n=F(),a=async()=>{const s=localStorage.getItem("dashboard");if(!s)console.log("Der Token ist nicht valid! - DashboardView"),await n.push("/login");else try{(await M.get("/api/auth/validate-token",{headers:{Authorization:`Bearer ${s}`}})).status!==200&&(localStorage.removeItem("dashboard"),await n.push("/login"))}catch{localStorage.removeItem("dashboard"),await n.push("/login")}},l=()=>{clearTimeout(t),t=setTimeout(()=>{localStorage.removeItem("dashboard"),n.push("/login")},72e5)};let t;return S(()=>{a(),window.addEventListener("mousemove",l),l()}),L(()=>{window.removeEventListener("mousemove",l),clearTimeout(t)}),(s,c)=>(i(),r("div",we,[e("div",je,[e("div",Te,[I(ye)]),e("div",xe,[I(pe)])])]))}}),Be=J($e,[["__scopeId","data-v-e3679d81"]]);export{Be as default};