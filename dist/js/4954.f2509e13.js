"use strict";(self["webpackChunkhiddenkittens"]=self["webpackChunkhiddenkittens"]||[]).push([[4954],{9890:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var s=a(641),n=a(4367),l=a(33);const r={class:"top-restaurants"},i={key:0,class:"carousel-wrapper"},o=["disabled"],u={class:"carousel"},c={class:"image-container"},d=["src","onClick"],v=["onClick"],m={class:"restaurant-info"},k={class:"info-top"},g={key:0,class:"rating"},p={key:0,class:"event-period"},h=["disabled"],L={key:1};function b(e,t,n,b,f,w){const C=(0,s.g2)("AddToBookmarkList");return(0,s.uX)(),(0,s.CE)("div",r,[t[5]||(t[5]=(0,s.Lk)("div",{class:"header"},[(0,s.Lk)("div",{class:"title-section"},[(0,s.Lk)("h1",null,"Top Restaurants"),(0,s.Lk)("p",{class:"sub-title"},"Discover the flavours of Singapore")])],-1)),b.results.length?((0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>b.moveLeft&&b.moveLeft(...e)),class:"carousel-button left-button",disabled:0===b.currentIndex},t[2]||(t[2]=[(0,s.Lk)("i",{class:"pi pi-angle-left"},null,-1)]),8,o),(0,s.Lk)("div",u,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(b.visibleResults,((e,n)=>((0,s.uX)(),(0,s.CE)("div",{class:"carousel-item",key:n},[(0,s.Lk)("div",c,[(0,s.Lk)("img",{src:b.images[n+b.currentIndex]||a(534),alt:"Image not available",class:"restaurant-image",onClick:t=>b.goToItem(e.uuid)},null,8,d),(0,s.bF)(C,{itemUUID:e.uuid,onAdded:b.handleBookmarkAdded,class:"add-to-bookmark-btn"},null,8,["itemUUID","onAdded"])]),(0,s.Lk)("div",{class:"restaurant-details",onClick:t=>b.goToItem(e.uuid)},[(0,s.Lk)("div",m,[(0,s.Lk)("div",k,[(0,s.Lk)("h3",null,(0,l.v_)(e.name),1),e.rating?((0,s.uX)(),(0,s.CE)("p",g,[t[3]||(t[3]=(0,s.Lk)("i",{class:"pi pi-star-fill"},null,-1)),(0,s.eW)(" "+(0,l.v_)(e.rating.toFixed(1)),1)])):(0,s.Q3)("",!0)]),e.pricing?((0,s.uX)(),(0,s.CE)("p",p,(0,l.v_)(b.formatDisplayInfo(e.pricing,e.cuisine)),1)):(0,s.Q3)("",!0)])],8,v)])))),128))]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>b.moveRight&&b.moveRight(...e)),class:"carousel-button right-button",disabled:b.currentIndex+b.itemsPerPage>=b.results.length},t[4]||(t[4]=[(0,s.Lk)("i",{class:"pi pi-angle-right"},null,-1)]),8,h)])):((0,s.uX)(),(0,s.CE)("p",L,"No results found."))])}var f=a(953),w=a(5220),C=a(1670),y=a(5293);const I={components:{AddToBookmarkList:y.A},setup(){const e=(0,w.rd)(),t=(0,f.KR)([]),a=(0,f.KR)([]),n=(0,f.KR)(0),l=()=>{const e=window.innerWidth;return e>=1400?4:e>=1100?3:2};function r(e,t){const a=e&&e.length>20?"":"  •  "+e;return t+a}const i=(0,f.KR)(l()),o=(0,s.EW)((()=>t.value.slice(n.value,n.value+i.value))),u=()=>{i.value=l(),n.value=0},c=async e=>{try{const t=await(0,C.Vr)(e);return URL.createObjectURL(t)}catch(t){return""}},d=async()=>{try{const e=await(0,C.hz)("search?dataset=food_beverages&filtersource=stb&sort=rating&sortOrder=desc&limit=20");t.value=e.data;const s=t.value.map((async e=>{if(e.images&&e.images.length>0){const t=await c(e.images[0].uuid);return t}return""}));a.value=await Promise.all(s)}catch(e){console.error("Error fetching search results:",e)}},v=()=>{n.value>0&&(n.value-=i.value)},m=()=>{n.value+i.value<t.value.length&&(n.value+=i.value)},k=t=>{e.push(`/item/${t}`)},g=()=>{};return(0,s.sV)((()=>{d(),window.addEventListener("resize",u)})),(0,s.xo)((()=>{window.removeEventListener("resize",u)})),{results:t,images:a,currentIndex:n,visibleResults:o,itemsPerPage:i,moveLeft:v,moveRight:m,goToItem:k,handleBookmarkAdded:g,formatDisplayInfo:r}}};var D=a(6262);const E=(0,D.A)(I,[["render",b],["__scopeId","data-v-4e0cf6de"]]),R=E,A={class:"top-restaurants"},U={key:0,class:"carousel-wrapper"},X=["disabled"],_={class:"carousel"},x={class:"image-container"},K=["src","onClick"],T=["onClick"],P={class:"restaurant-info"},F={key:0,class:"rating"},B=["disabled"],$={key:1};function z(e,t,n,r,i,o){const u=(0,s.g2)("AddToBookmarkList2");return(0,s.uX)(),(0,s.CE)("div",A,[t[5]||(t[5]=(0,s.Lk)("div",{class:"header"},[(0,s.Lk)("div",{class:"title-section"},[(0,s.Lk)("h1",null,"Top Shops"),(0,s.Lk)("p",{class:"sub-title"},"Discover the newest trends")])],-1)),r.results.length?((0,s.uX)(),(0,s.CE)("div",U,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.moveLeft&&r.moveLeft(...e)),class:"carousel-button left-button",disabled:0===r.currentIndex},t[2]||(t[2]=[(0,s.Lk)("i",{class:"pi pi-angle-left"},null,-1)]),8,X),(0,s.Lk)("div",_,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.visibleResults,((e,n)=>((0,s.uX)(),(0,s.CE)("div",{class:"carousel-item",key:n},[(0,s.Lk)("div",x,[(0,s.Lk)("img",{src:r.images[n+r.currentIndex]||a(534),alt:"Image not available",class:"restaurant-image",onClick:t=>r.goToItem(e.uuid)},null,8,K),(0,s.bF)(u,{itemUUID:e.uuid,onAdded:r.handleBookmarkAdded,class:"add-to-bookmark-btn"},null,8,["itemUUID","onAdded"])]),(0,s.Lk)("div",{class:"restaurant-details",onClick:t=>r.goToItem(e.uuid)},[(0,s.Lk)("div",P,[(0,s.Lk)("h3",null,(0,l.v_)(e.name),1),e.rating?((0,s.uX)(),(0,s.CE)("p",F,[t[3]||(t[3]=(0,s.Lk)("i",{class:"pi pi-star-fill"},null,-1)),(0,s.eW)(" "+(0,l.v_)(e.rating.toFixed(1)),1)])):(0,s.Q3)("",!0)])],8,T)])))),128))]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.moveRight&&r.moveRight(...e)),class:"carousel-button right-button",disabled:r.currentIndex+r.itemsPerPage>=r.results.length},t[4]||(t[4]=[(0,s.Lk)("i",{class:"pi pi-angle-right"},null,-1)]),8,B)])):((0,s.uX)(),(0,s.CE)("p",$,"No results found."))])}const S={components:{AddToBookmarkList2:y.A},setup(){const e=(0,w.rd)(),t=(0,f.KR)([]),a=(0,f.KR)([]),n=(0,f.KR)(0),l=()=>{const e=window.innerWidth;return e>=1400?4:e>=1100?3:2},r=(0,f.KR)(l()),i=(0,s.EW)((()=>t.value.slice(n.value,n.value+r.value))),o=()=>{r.value=l(),n.value=0},u=async e=>{try{const t=await(0,C.Vr)(e);return URL.createObjectURL(t)}catch(t){return""}},c=async()=>{try{const e=await(0,C.hz)("search?dataset=shops&filtersource=stb&sort=rating&sortOrder=desc&limit=20");t.value=e.data;const s=t.value.map((async e=>{if(e.images&&e.images.length>0){const t=await u(e.images[0].uuid);return t}return""}));a.value=await Promise.all(s)}catch(e){console.error("Error fetching search results:",e)}},d=()=>{n.value>0&&(n.value-=r.value)},v=()=>{n.value+r.value<t.value.length&&(n.value+=r.value)},m=t=>{e.push(`/item/${t}`)},k=()=>{};return(0,s.sV)((()=>{c(),window.addEventListener("resize",o)})),(0,s.xo)((()=>{window.removeEventListener("resize",o)})),{results:t,images:a,currentIndex:n,visibleResults:i,itemsPerPage:r,moveLeft:d,moveRight:v,goToItem:m,handleBookmarkAdded:k}}},W=(0,D.A)(S,[["render",z],["__scopeId","data-v-5043e230"]]),O=W,V={class:"top-restaurants"},Q={key:0,class:"carousel-wrapper"},j=["disabled"],M={class:"carousel"},N={class:"image-container"},Y=["src","onClick"],q=["onClick"],G={class:"restaurant-info"},H={key:0,class:"event-period"},J=["disabled"],Z={key:1};function ee(e,t,n,r,i,o){const u=(0,s.g2)("AddToBookmarkList2");return(0,s.uX)(),(0,s.CE)("div",V,[t[4]||(t[4]=(0,s.Lk)("div",{class:"header"},[(0,s.Lk)("div",{class:"title-section"},[(0,s.Lk)("h1",null,"Upcoming Events"),(0,s.Lk)("p",{class:"sub-title"},"Uncover the pulse of Singapore")])],-1)),r.results.length?((0,s.uX)(),(0,s.CE)("div",Q,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.moveLeft&&r.moveLeft(...e)),class:"carousel-button left-button",disabled:0===r.currentIndex},t[2]||(t[2]=[(0,s.Lk)("i",{class:"pi pi-angle-left"},null,-1)]),8,j),(0,s.Lk)("div",M,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.visibleResults,((t,n)=>((0,s.uX)(),(0,s.CE)("div",{class:"carousel-item",key:n},[(0,s.Lk)("div",N,[(0,s.Lk)("img",{src:r.images[n+r.currentIndex]||a(534),alt:"Image not available",class:"restaurant-image",onClick:e=>r.goToItem(t.uuid)},null,8,Y),(0,s.bF)(u,{itemUUID:t.uuid,onAdded:e.handleBookmarkAdded,class:"add-to-bookmark-btn"},null,8,["itemUUID","onAdded"])]),(0,s.Lk)("div",{class:"restaurant-details",onClick:e=>r.goToItem(t.uuid)},[(0,s.Lk)("div",G,[(0,s.Lk)("h3",null,(0,l.v_)(t.name),1),t.startDate&&t.endDate?((0,s.uX)(),(0,s.CE)("p",H,(0,l.v_)(r.formatDateDisplay(t.startDate))+" - "+(0,l.v_)(r.formatDateDisplay(t.endDate)),1)):(0,s.Q3)("",!0)])],8,q)])))),128))]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.moveRight&&r.moveRight(...e)),class:"carousel-button right-button",disabled:r.currentIndex+r.itemsPerPage>=r.results.length},t[3]||(t[3]=[(0,s.Lk)("i",{class:"pi pi-angle-right"},null,-1)]),8,J)])):((0,s.uX)(),(0,s.CE)("p",Z,"No results found."))])}const te={components:{AddToBookmarkList2:y.A},setup(){const e=(0,w.rd)(),t=(0,f.KR)([]),a=(0,f.KR)([]),n=(0,f.KR)(0);function l(e){const t={year:"numeric",month:"short",day:"numeric"},a=new Date(e);return a.toLocaleDateString("en-UK",t)}const r=()=>{const e=window.innerWidth;return e>=1400?4:e>=1100?3:2};function l(e){const t={year:"numeric",month:"short",day:"numeric"},a=new Date(e);return a.toLocaleDateString("en-UK",t)}(0,s.EW)((()=>{if(place.value&&place.value.startDate&&place.value.endDate){const e=l(place.value.startDate),t=l(place.value.endDate);return`${e} - ${t}`}return null}));const i=(0,f.KR)(r()),o=(0,s.EW)((()=>t.value.slice(n.value,n.value+i.value))),u=()=>{i.value=r(),n.value=0},c=e=>{const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${s}`},d=new Date,v=new Date;v.setMonth(d.getMonth()+6);const m=c(d),k=c(v),g=async e=>{try{const t=await(0,C.Vr)(e);return URL.createObjectURL(t)}catch(t){return""}},p=async()=>{try{const e=await(0,C.hz)(`search?dataset=events&sort=lastupdateddate&sortOrder=desc&distinct=Yes&startDate=${m}&endDate=${k}&limit=10`);t.value=e.data;const s=t.value.map((async e=>{if(e.images&&e.images.length>0){const t=await g(e.images[0].uuid);return t}return""}));a.value=await Promise.all(s)}catch(e){console.error("Error fetching search results:",e)}},h=()=>{n.value>0&&(n.value-=i.value)},L=()=>{n.value+i.value<t.value.length&&(n.value+=i.value)},b=t=>{e.push(`/item/${t}`)};return(0,s.sV)((()=>{p(),window.addEventListener("resize",u)})),(0,s.xo)((()=>{window.removeEventListener("resize",u)})),{results:t,images:a,currentIndex:n,visibleResults:o,itemsPerPage:i,moveLeft:h,moveRight:L,goToItem:b,formatDateDisplay:l}}},ae=(0,D.A)(te,[["render",ee],["__scopeId","data-v-ab69f47e"]]),se=ae,ne={class:"discovery-wrapper"},le={class:"scrollable-content"},re={class:"search-bar-container"},ie={__name:"Discovery",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",ne,[(0,s.Lk)("div",le,[(0,s.Lk)("div",re,[(0,s.bF)(n.A)]),(0,s.bF)(R),t[0]||(t[0]=(0,s.Lk)("div",{class:"divider"},null,-1)),(0,s.bF)(O),t[1]||(t[1]=(0,s.Lk)("div",{class:"divider"},null,-1)),(0,s.bF)(se)])]))}},oe=(0,D.A)(ie,[["__scopeId","data-v-1e1e3c70"]]),ue=oe}}]);
//# sourceMappingURL=4954.f2509e13.js.map