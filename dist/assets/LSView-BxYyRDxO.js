import{B as g}from"./Banner-CmeCl55K.js";import{d as u,e as _,f as h,_ as l,g as f,o as r,c as i,F as k,r as v,h as b,a as s,b as c,t as d}from"./index-7ecuNolg.js";const S=u({setup(){const e=_([]),a=async()=>{try{const o=await(await fetch("/assets/coreservices.json")).json();e.value=o.services}catch(n){console.error("Fehler beim Laden der Services:",n)}};return h(()=>{console.log("LsCards component mounted"),a()}),{services:e}}}),w={class:"leistungsspektrum-services"};function L(e,a,n,o,T,x){const p=f("CardTopic");return r(),i("div",w,[(r(!0),i(k,null,v(e.services,(t,m)=>(r(),b(p,{key:m,title:t.title,description:t.description,details:t.details,imageUrl:t.imageUrl},null,8,["title","description","details","imageUrl"]))),128))])}const C=l(S,[["render",L],["__scopeId","data-v-d6671653"]]),B={class:"leistungsspektrum-view"},M={class:"banner-container"},U={class:"leistungsspektrum-container"},V="Die SCHMID GmbH Vorrichtungs- und Anlagenbau wurde im Juni 1996 von Thilo Schmid als Metallbearbeitungsfirma / Schlosserei gegründet. Diesem Ursprung ist unsere Fertigung noch heute verbunden und kann dank des umfangreichen Maschinenparks einen Großteil der notwendigen Zuarbeiten im eigenen Haus durchführen. Mit den Jahren und der wachsenden Vielfalt an Kunden ist das Leistungsspektrum enorm gewachsen und weist heute folgende Kernbereiche auf:",$="Leistungsspektrum",I=u({__name:"LSView",setup(e){return(a,n)=>(r(),i("div",B,[s("div",M,[c(g,{title:"LEISTUNGSSPEKTRUM",backgroundImage:"/assets/images/leistungsspektrum/leistungsspektrum_banner.png"})]),s("div",U,[s("div",{class:"leistungsspektrum-content"},[s("h2",null,d($)),s("p",null,d(V))]),c(C)])]))}}),F=l(I,[["__scopeId","data-v-bc1edad5"]]);export{F as default};
