"use strict";(self["webpackChunkhiddenkittens"]=self["webpackChunkhiddenkittens"]||[]).push([[504],{6743:(e,t,r)=>{r.d(t,{Am:()=>$,FA:()=>P,Fy:()=>k,I9:()=>F,Im:()=>L,Ku:()=>J,T9:()=>b,Tj:()=>g,Uj:()=>c,XA:()=>v,ZQ:()=>w,bD:()=>M,cY:()=>y,dM:()=>B,eX:()=>R,g:()=>A,hp:()=>U,jZ:()=>C,lT:()=>I,lV:()=>S,nr:()=>T,p9:()=>Z,sr:()=>x,tD:()=>W,u:()=>l,yU:()=>m,zW:()=>E});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=function(e){const t=[];let r=0;for(let o=0;o<e.length;o++){let n=e.charCodeAt(o);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296===(64512&n)&&o+1<e.length&&56320===(64512&e.charCodeAt(o+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++o)),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128)}return t},n=function(e){const t=[];let r=0,o=0;while(r<e.length){const n=e[r++];if(n<128)t[o++]=String.fromCharCode(n);else if(n>191&&n<224){const i=e[r++];t[o++]=String.fromCharCode((31&n)<<6|63&i)}else if(n>239&&n<365){const i=e[r++],a=e[r++],s=e[r++],c=((7&n)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[o++]=String.fromCharCode(55296+(c>>10)),t[o++]=String.fromCharCode(56320+(1023&c))}else{const i=e[r++],a=e[r++];t[o++]=String.fromCharCode((15&n)<<12|(63&i)<<6|63&a)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let n=0;n<e.length;n+=3){const t=e[n],i=n+1<e.length,a=i?e[n+1]:0,s=n+2<e.length,c=s?e[n+2]:0,l=t>>2,d=(3&t)<<4|a>>4;let u=(15&a)<<2|c>>6,f=63&c;s||(f=64,i||(u=64)),o.push(r[l],r[d],r[u],r[f])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):n(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let n=0;n<e.length;){const t=r[e.charAt(n++)],i=n<e.length,s=i?r[e.charAt(n)]:0;++n;const c=n<e.length,l=c?r[e.charAt(n)]:64;++n;const d=n<e.length,u=d?r[e.charAt(n)]:64;if(++n,null==t||null==s||null==l||null==u)throw new a;const f=t<<2|s>>4;if(o.push(f),64!==l){const e=s<<4&240|l>>2;if(o.push(e),64!==u){const e=l<<6&192|u;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){const t=o(e);return i.encodeByteArray(t,!0)},c=function(e){return s(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof r.g)return r.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=()=>d().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},h=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(r){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},p=()=>{try{return u()||f()||h()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},m=e=>{const t=g(e);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const o=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),o]:[t.substring(0,r),o]},b=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},o=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[c(JSON.stringify(r)),c(JSON.stringify(a)),s].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function C(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function _(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(r.g.process)}catch(o){return!1}}function x(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){return!_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(o),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(r){t(r)}}))}function B(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="FirebaseError";class A extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=O,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,n=this.errors[e],i=n?D(n,r):"Error",a=`${this.serviceName}: ${i} (${o}).`,s=new A(o,a,r);return s}}function D(e,t){return e.replace(N,((e,r)=>{const o=t[r];return null!=o?String(o):`<${r}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const r=Object.keys(e),o=Object.keys(t);for(const n of r){if(!o.includes(n))return!1;const r=e[n],i=t[n];if(j(r)&&j(i)){if(!M(r,i))return!1}else if(r!==i)return!1}for(const n of o)if(!r.includes(n))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){const t=[];for(const[r,o]of Object.entries(e))Array.isArray(o)?o.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function F(e){const t={},r=e.replace(/^\?/,"").split("&");return r.forEach((e=>{if(e){const[r,o]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(o)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){const r=new z(e,t);return r.subscribe.bind(r)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let o;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");o=V(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===o.next&&(o.next=H),void 0===o.error&&(o.error=H),void 0===o.complete&&(o.complete=H);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}})),this.observers.push(o),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function V(e,t){if("object"!==typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"===typeof e[r])return!0;return!1}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=1e3,G=2,q=144e5,X=.5;function Z(e,t=K,r=G){const o=t*Math.pow(r,e),n=Math.round(X*o*(Math.random()-.5)*2);return Math.min(q,o+n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}},953:(e,t,r)=>{r.d(t,{C4:()=>_,EW:()=>qe,Gc:()=>Ee,IG:()=>Le,IJ:()=>Ue,KR:()=>Fe,Kh:()=>Te,Pr:()=>Ke,R1:()=>Ve,X2:()=>l,bl:()=>x,fE:()=>Pe,g8:()=>Oe,hV:()=>et,hZ:()=>N,i9:()=>$e,ju:()=>De,lJ:()=>Me,qA:()=>M,tB:()=>Re,u4:()=>D,ux:()=>Ne,wB:()=>Qe,yC:()=>a});var o=r(33);
/**
* @vue/reactivity v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let n,i;class a{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=n,!e&&n&&(this.index=(n.scopes||(n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=n;try{return n=this,e()}finally{n=t}}else 0}on(){n=this}off(){n=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(){return n}const c=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,n&&n.active&&n.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,S(this),g(this);const e=i,t=w;i=this,w=!0;try{return this.fn()}finally{0,m(this),i=e,w=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)y(e);this.deps=this.depsTail=void 0,S(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){b(this)&&this.run()}get dirty(){return b(this)}}let d,u=0;function f(e){e.flags|=8,e.next=d,d=e}function h(){u++}function p(){if(--u>0)return;let e;while(d){let r=d;d=void 0;while(r){const o=r.next;if(r.next=void 0,r.flags&=-9,1&r.flags)try{r.trigger()}catch(t){e||(e=t)}r=o}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function m(e,t=!1){let r,o=e.depsTail,n=o;while(n){const e=n.prevDep;-1===n.version?(n===o&&(o=e),y(n,t),k(n)):r=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=e}e.deps=r,e.depsTail=o}function b(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(v(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function v(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===I)return;e.globalVersion=I;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!b(e))return void(e.flags&=-3);const r=i,n=w;i=e,w=!0;try{g(e);const r=e.fn(e._value);(0===t.version||(0,o.$H)(r,e._value))&&(e._value=r,t.version++)}catch(a){throw t.version++,a}finally{i=r,w=n,m(e,!0),e.flags&=-3}}function y(e,t=!1){const{dep:r,prevSub:o,nextSub:n}=e;if(o&&(o.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=o,e.nextSub=void 0),r.subs===e&&(r.subs=o),!r.subs)if(r.computed){r.computed.flags&=-5;for(let e=r.computed.deps;e;e=e.nextDep)y(e,!0)}else r.map&&!t&&(r.map.delete(r.key),r.map.size||B.delete(r.target))}function k(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let w=!0;const C=[];function _(){C.push(w),w=!1}function x(){const e=C.pop();w=void 0===e||e}function S(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=i;i=void 0;try{t()}finally{i=e}}}let I=0;class T{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class E{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(e){if(!i||!w||i===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==i)t=this.activeLink=new T(i,this),i.deps?(t.prevDep=i.depsTail,i.depsTail.nextDep=t,i.depsTail=t):i.deps=i.depsTail=t,4&i.flags&&R(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=i.depsTail,t.nextDep=void 0,i.depsTail.nextDep=t,i.depsTail=t,i.deps===t&&(i.deps=e)}return t}trigger(e){this.version++,I++,this.notify(e)}notify(e){h();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{p()}}}function R(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)R(e)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}const B=new WeakMap,O=Symbol(""),A=Symbol(""),P=Symbol("");function D(e,t,r){if(w&&i){let t=B.get(e);t||B.set(e,t=new Map);let o=t.get(r);o||(t.set(r,o=new E),o.target=e,o.map=t,o.key=r),o.track()}}function N(e,t,r,n,i,a){const s=B.get(e);if(!s)return void I++;const c=e=>{e&&e.trigger()};if(h(),"clear"===t)s.forEach(c);else{const i=(0,o.cy)(e),a=i&&(0,o.yI)(r);if(i&&"length"===r){const e=Number(n);s.forEach(((t,r)=>{("length"===r||r===P||!(0,o.Bm)(r)&&r>=e)&&c(t)}))}else switch(void 0!==r&&c(s.get(r)),a&&c(s.get(P)),t){case"add":i?a&&c(s.get("length")):(c(s.get(O)),(0,o.CE)(e)&&c(s.get(A)));break;case"delete":i||(c(s.get(O)),(0,o.CE)(e)&&c(s.get(A)));break;case"set":(0,o.CE)(e)&&c(s.get(O));break}}p()}function L(e){const t=Ne(e);return t===e?t:(D(t,"iterate",P),Pe(e)?t:t.map(Me))}function M(e){return D(e=Ne(e),"iterate",P),e}const j={__proto__:null,[Symbol.iterator](){return $(this,Symbol.iterator,Me)},concat(...e){return L(this).concat(...e.map((e=>(0,o.cy)(e)?L(e):e)))},entries(){return $(this,"entries",(e=>(e[1]=Me(e[1]),e)))},every(e,t){return U(this,"every",e,t,void 0,arguments)},filter(e,t){return U(this,"filter",e,t,(e=>e.map(Me)),arguments)},find(e,t){return U(this,"find",e,t,Me,arguments)},findIndex(e,t){return U(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return U(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return U(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return U(this,"forEach",e,t,void 0,arguments)},includes(...e){return z(this,"includes",e)},indexOf(...e){return z(this,"indexOf",e)},join(e){return L(this).join(e)},lastIndexOf(...e){return z(this,"lastIndexOf",e)},map(e,t){return U(this,"map",e,t,void 0,arguments)},pop(){return V(this,"pop")},push(...e){return V(this,"push",e)},reduce(e,...t){return W(this,"reduce",e,t)},reduceRight(e,...t){return W(this,"reduceRight",e,t)},shift(){return V(this,"shift")},some(e,t){return U(this,"some",e,t,void 0,arguments)},splice(...e){return V(this,"splice",e)},toReversed(){return L(this).toReversed()},toSorted(e){return L(this).toSorted(e)},toSpliced(...e){return L(this).toSpliced(...e)},unshift(...e){return V(this,"unshift",e)},values(){return $(this,"values",Me)}};function $(e,t,r){const o=M(e),n=o[t]();return o===e||Pe(e)||(n._next=n.next,n.next=()=>{const e=n._next();return e.value&&(e.value=r(e.value)),e}),n}const F=Array.prototype;function U(e,t,r,o,n,i){const a=M(e),s=a!==e&&!Pe(e),c=a[t];if(c!==F[t]){const t=c.apply(e,i);return s?Me(t):t}let l=r;a!==e&&(s?l=function(t,o){return r.call(this,Me(t),o,e)}:r.length>2&&(l=function(t,o){return r.call(this,t,o,e)}));const d=c.call(a,l,o);return s&&n?n(d):d}function W(e,t,r,o){const n=M(e);let i=r;return n!==e&&(Pe(e)?r.length>3&&(i=function(t,o,n){return r.call(this,t,o,n,e)}):i=function(t,o,n){return r.call(this,t,Me(o),n,e)}),n[t](i,...o)}function z(e,t,r){const o=Ne(e);D(o,"iterate",P);const n=o[t](...r);return-1!==n&&!1!==n||!De(r[0])?n:(r[0]=Ne(r[0]),o[t](...r))}function V(e,t,r=[]){_(),h();const o=Ne(e)[t].apply(e,r);return p(),x(),o}const H=(0,o.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(o.Bm));function G(e){(0,o.Bm)(e)||(e=String(e));const t=Ne(this);return D(t,"has",e),t.hasOwnProperty(e)}class q{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){const n=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!n;if("__v_isReadonly"===t)return n;if("__v_isShallow"===t)return i;if("__v_raw"===t)return r===(n?i?xe:_e:i?Ce:we).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=(0,o.cy)(e);if(!n){let e;if(a&&(e=j[t]))return e;if("hasOwnProperty"===t)return G}const s=Reflect.get(e,t,$e(e)?e:r);return((0,o.Bm)(t)?K.has(t):H(t))?s:(n||D(e,"get",t),i?s:$e(s)?a&&(0,o.yI)(t)?s:s.value:(0,o.Gv)(s)?n?Re(s):Te(s):s)}}class X extends q{constructor(e=!1){super(!1,e)}set(e,t,r,n){let i=e[t];if(!this._isShallow){const t=Ae(i);if(Pe(r)||Ae(r)||(i=Ne(i),r=Ne(r)),!(0,o.cy)(e)&&$e(i)&&!$e(r))return!t&&(i.value=r,!0)}const a=(0,o.cy)(e)&&(0,o.yI)(t)?Number(t)<e.length:(0,o.$3)(e,t),s=Reflect.set(e,t,r,$e(e)?e:n);return e===Ne(n)&&(a?(0,o.$H)(r,i)&&N(e,"set",t,r,i):N(e,"add",t,r)),s}deleteProperty(e,t){const r=(0,o.$3)(e,t),n=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&N(e,"delete",t,void 0,n),i}has(e,t){const r=Reflect.has(e,t);return(0,o.Bm)(t)&&K.has(t)||D(e,"has",t),r}ownKeys(e){return D(e,"iterate",(0,o.cy)(e)?"length":O),Reflect.ownKeys(e)}}class Z extends q{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const J=new X,Y=new Z,Q=new X(!0),ee=e=>e,te=e=>Reflect.getPrototypeOf(e);function re(e,t,r=!1,n=!1){e=e["__v_raw"];const i=Ne(e),a=Ne(t);r||((0,o.$H)(t,a)&&D(i,"get",t),D(i,"get",a));const{has:s}=te(i),c=n?ee:r?je:Me;return s.call(i,t)?c(e.get(t)):s.call(i,a)?c(e.get(a)):void(e!==i&&e.get(t))}function oe(e,t=!1){const r=this["__v_raw"],n=Ne(r),i=Ne(e);return t||((0,o.$H)(e,i)&&D(n,"has",e),D(n,"has",i)),e===i?r.has(e):r.has(e)||r.has(i)}function ne(e,t=!1){return e=e["__v_raw"],!t&&D(Ne(e),"iterate",O),Reflect.get(e,"size",e)}function ie(e,t=!1){t||Pe(e)||Ae(e)||(e=Ne(e));const r=Ne(this),o=te(r),n=o.has.call(r,e);return n||(r.add(e),N(r,"add",e,e)),this}function ae(e,t,r=!1){r||Pe(t)||Ae(t)||(t=Ne(t));const n=Ne(this),{has:i,get:a}=te(n);let s=i.call(n,e);s||(e=Ne(e),s=i.call(n,e));const c=a.call(n,e);return n.set(e,t),s?(0,o.$H)(t,c)&&N(n,"set",e,t,c):N(n,"add",e,t),this}function se(e){const t=Ne(this),{has:r,get:o}=te(t);let n=r.call(t,e);n||(e=Ne(e),n=r.call(t,e));const i=o?o.call(t,e):void 0,a=t.delete(e);return n&&N(t,"delete",e,void 0,i),a}function ce(){const e=Ne(this),t=0!==e.size,r=void 0,o=e.clear();return t&&N(e,"clear",void 0,void 0,r),o}function le(e,t){return function(r,o){const n=this,i=n["__v_raw"],a=Ne(i),s=t?ee:e?je:Me;return!e&&D(a,"iterate",O),i.forEach(((e,t)=>r.call(o,s(e),s(t),n)))}}function de(e,t,r){return function(...n){const i=this["__v_raw"],a=Ne(i),s=(0,o.CE)(a),c="entries"===e||e===Symbol.iterator&&s,l="keys"===e&&s,d=i[e](...n),u=r?ee:t?je:Me;return!t&&D(a,"iterate",l?A:O),{next(){const{value:e,done:t}=d.next();return t?{value:e,done:t}:{value:c?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function ue(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function fe(){const e={get(e){return re(this,e)},get size(){return ne(this)},has:oe,add:ie,set:ae,delete:se,clear:ce,forEach:le(!1,!1)},t={get(e){return re(this,e,!1,!0)},get size(){return ne(this)},has:oe,add(e){return ie.call(this,e,!0)},set(e,t){return ae.call(this,e,t,!0)},delete:se,clear:ce,forEach:le(!1,!0)},r={get(e){return re(this,e,!0)},get size(){return ne(this,!0)},has(e){return oe.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:le(!0,!1)},o={get(e){return re(this,e,!0,!0)},get size(){return ne(this,!0)},has(e){return oe.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:le(!0,!0)},n=["keys","values","entries",Symbol.iterator];return n.forEach((n=>{e[n]=de(n,!1,!1),r[n]=de(n,!0,!1),t[n]=de(n,!1,!0),o[n]=de(n,!0,!0)})),[e,r,t,o]}const[he,pe,ge,me]=fe();function be(e,t){const r=t?e?me:ge:e?pe:he;return(t,n,i)=>"__v_isReactive"===n?!e:"__v_isReadonly"===n?e:"__v_raw"===n?t:Reflect.get((0,o.$3)(r,n)&&n in t?r:t,n,i)}const ve={get:be(!1,!1)},ye={get:be(!1,!0)},ke={get:be(!0,!1)};const we=new WeakMap,Ce=new WeakMap,_e=new WeakMap,xe=new WeakMap;function Se(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ie(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Se((0,o.Zf)(e))}function Te(e){return Ae(e)?e:Be(e,!1,J,ve,we)}function Ee(e){return Be(e,!1,Q,ye,Ce)}function Re(e){return Be(e,!0,Y,ke,_e)}function Be(e,t,r,n,i){if(!(0,o.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const a=i.get(e);if(a)return a;const s=Ie(e);if(0===s)return e;const c=new Proxy(e,2===s?n:r);return i.set(e,c),c}function Oe(e){return Ae(e)?Oe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Pe(e){return!(!e||!e["__v_isShallow"])}function De(e){return!!e&&!!e["__v_raw"]}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function Le(e){return!(0,o.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,o.yQ)(e,"__v_skip",!0),e}const Me=e=>(0,o.Gv)(e)?Te(e):e,je=e=>(0,o.Gv)(e)?Re(e):e;function $e(e){return!!e&&!0===e["__v_isRef"]}function Fe(e){return We(e,!1)}function Ue(e){return We(e,!0)}function We(e,t){return $e(e)?e:new ze(e,t)}class ze{constructor(e,t){this.dep=new E,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Ne(e),this._value=t?e:Me(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this["__v_isShallow"]||Pe(e)||Ae(e);e=r?e:Ne(e),(0,o.$H)(e,t)&&(this._rawValue=e,this._value=r?e:Me(e),this.dep.trigger())}}function Ve(e){return $e(e)?e.value:e}const He={get:(e,t,r)=>"__v_raw"===t?e:Ve(Reflect.get(e,t,r)),set:(e,t,r,o)=>{const n=e[t];return $e(n)&&!$e(r)?(n.value=r,!0):Reflect.set(e,t,r,o)}};function Ke(e){return Oe(e)?e:new Proxy(e,He)}class Ge{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new E(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=I-1,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=r}notify(){if(this.flags|=16,!(8&this.flags||i===this))return f(this),!0}get value(){const e=this.dep.track();return v(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qe(e,t,r=!1){let n,i;(0,o.Tn)(e)?n=e:(n=e.get,i=e.set);const a=new Ge(n,i,r);return a}const Xe={},Ze=new WeakMap;let Je;function Ye(e,t=!1,r=Je){if(r){let t=Ze.get(r);t||Ze.set(r,t=[]),t.push(e)}else 0}function Qe(e,t,r=o.MZ){const{immediate:n,deep:i,once:a,scheduler:c,augmentJob:d,call:u}=r,f=e=>i?e:Pe(e)||!1===i||0===i?et(e,1):et(e);let h,p,g,m,b=!1,v=!1;if($e(e)?(p=()=>e.value,b=Pe(e)):Oe(e)?(p=()=>f(e),b=!0):(0,o.cy)(e)?(v=!0,b=e.some((e=>Oe(e)||Pe(e))),p=()=>e.map((e=>$e(e)?e.value:Oe(e)?f(e):(0,o.Tn)(e)?u?u(e,2):e():void 0))):p=(0,o.Tn)(e)?t?u?()=>u(e,2):e:()=>{if(g){_();try{g()}finally{x()}}const t=Je;Je=h;try{return u?u(e,3,[m]):e(m)}finally{Je=t}}:o.tE,t&&i){const e=p,t=!0===i?1/0:i;p=()=>et(e(),t)}const y=s(),k=()=>{h.stop(),y&&(0,o.TF)(y.effects,h)};if(a&&t){const e=t;t=(...t)=>{e(...t),k()}}let w=v?new Array(e.length).fill(Xe):Xe;const C=e=>{if(1&h.flags&&(h.dirty||e))if(t){const e=h.run();if(i||b||(v?e.some(((e,t)=>(0,o.$H)(e,w[t]))):(0,o.$H)(e,w))){g&&g();const r=Je;Je=h;try{const r=[e,w===Xe?void 0:v&&w[0]===Xe?[]:w,m];u?u(t,3,r):t(...r),w=e}finally{Je=r}}}else h.run()};return d&&d(C),h=new l(p),h.scheduler=c?()=>c(C,!1):C,m=e=>Ye(e,!1,h),g=h.onStop=()=>{const e=Ze.get(h);if(e){if(u)u(e,4);else for(const t of e)t();Ze.delete(h)}},t?n?C(!0):w=h.run():c?c(C.bind(null,!0),!0):h.run(),k.pause=h.pause.bind(h),k.resume=h.resume.bind(h),k.stop=k,k}function et(e,t=1/0,r){if(t<=0||!(0,o.Gv)(e)||e["__v_skip"])return e;if(r=r||new Set,r.has(e))return e;if(r.add(e),t--,$e(e))et(e.value,t,r);else if((0,o.cy)(e))for(let o=0;o<e.length;o++)et(e[o],t,r);else if((0,o.vM)(e)||(0,o.CE)(e))e.forEach((e=>{et(e,t,r)}));else if((0,o.Qd)(e)){for(const o in e)et(e[o],t,r);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&et(e[o],t,r)}return e}},641:(e,t,r)=>{r.d(t,{$u:()=>he,$y:()=>_e,CE:()=>ar,Df:()=>X,EW:()=>Kr,FK:()=>Xt,Gt:()=>et,Gy:()=>M,K9:()=>Ct,Lk:()=>fr,MZ:()=>q,OW:()=>H,Q3:()=>vr,QP:()=>$,RG:()=>Ee,WQ:()=>tt,Wv:()=>sr,bF:()=>hr,bo:()=>O,dY:()=>v,eW:()=>br,eX:()=>Te,g2:()=>we,h:()=>Gr,k6:()=>B,nI:()=>Er,pI:()=>Ie,pM:()=>Z,pR:()=>z,qL:()=>a,sV:()=>ue,uX:()=>tr,v6:()=>Cr,wB:()=>Pt,xo:()=>pe});var o=r(953),n=r(33);function i(e,t,r,o){try{return o?e(...o):e()}catch(n){s(n,t,r)}}function a(e,t,r,o){if((0,n.Tn)(e)){const a=i(e,t,r,o);return a&&(0,n.yL)(a)&&a.catch((e=>{s(e,t,r)})),a}if((0,n.cy)(e)){const n=[];for(let i=0;i<e.length;i++)n.push(a(e[i],t,r,o));return n}}function s(e,t,r,a=!0){const s=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:d}=t&&t.appContext.config||n.MZ;if(t){let n=t.parent;const a=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${r}`;while(n){const t=n.ec;if(t)for(let r=0;r<t.length;r++)if(!1===t[r](e,a,s))return;n=n.parent}if(l)return(0,o.C4)(),i(l,null,10,[e,a,s]),void(0,o.bl)()}c(e,r,s,a,d)}function c(e,t,r,o=!0,n=!1){if(n)throw e;console.error(e)}let l=!1,d=!1;const u=[];let f=0;const h=[];let p=null,g=0;const m=Promise.resolve();let b=null;function v(e){const t=b||m;return e?t.then(this?e.bind(this):e):t}function y(e){let t=l?f+1:0,r=u.length;while(t<r){const o=t+r>>>1,n=u[o],i=S(n);i<e||i===e&&2&n.flags?t=o+1:r=o}return t}function k(e){if(!(1&e.flags)){const t=S(e),r=u[u.length-1];!r||!(2&e.flags)&&t>=S(r)?u.push(e):u.splice(y(t),0,e),e.flags|=1,w()}}function w(){l||d||(d=!0,b=m.then(I))}function C(e){(0,n.cy)(e)?h.push(...e):p&&-1===e.id?p.splice(g+1,0,e):1&e.flags||(h.push(e),e.flags|=1),w()}function _(e,t,r=(l?f+1:0)){for(0;r<u.length;r++){const t=u[r];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,u.splice(r,1),r--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function x(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>S(e)-S(t)));if(h.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++){const e=p[g];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}p=null,g=0}}const S=e=>null==e.id?2&e.flags?-1:1/0:e.id;function I(e){d=!1,l=!0;n.tE;try{for(f=0;f<u.length;f++){const e=u[f];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),i(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;f<u.length;f++){const e=u[f];e&&(e.flags&=-2)}f=0,u.length=0,x(e),l=!1,b=null,(u.length||h.length)&&I(e)}}let T=null,E=null;function R(e){const t=T;return T=e,E=e&&e.type.__scopeId||null,t}function B(e,t=T,r){if(!t)return e;if(e._n)return e;const o=(...r)=>{o._d&&nr(-1);const n=R(t);let i;try{i=e(...r)}finally{R(n),o._d&&nr(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function O(e,t){if(null===T)return e;const r=zr(T),i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[e,s,c,l=n.MZ]=t[a];e&&((0,n.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,o.hV)(s),i.push({dir:e,instance:r,value:s,oldValue:void 0,arg:c,modifiers:l}))}return e}function A(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let c=0;c<i.length;c++){const l=i[c];s&&(l.oldValue=s[c].value);let d=l.dir[n];d&&((0,o.C4)(),a(d,r,8,[e.el,l,e,t]),(0,o.bl)())}}const P=Symbol("_vte"),D=e=>e.__isTeleport;const N=Symbol("_leaveCb"),L=Symbol("_enterCb");function M(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ue((()=>{e.isMounted=!0})),pe((()=>{e.isUnmounting=!0})),e}const j=[Function,Array],$={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:j,onEnter:j,onAfterEnter:j,onEnterCancelled:j,onBeforeLeave:j,onLeave:j,onAfterLeave:j,onLeaveCancelled:j,onBeforeAppear:j,onAppear:j,onAfterAppear:j,onAppearCancelled:j},F=e=>{const t=e.subTree;return t.component?F(t.component):t},U={name:"BaseTransition",props:$,setup(e,{slots:t}){const r=Er(),n=M();return()=>{const i=t.default&&X(t.default(),!0);if(!i||!i.length)return;const a=W(i),s=(0,o.ux)(e),{mode:c}=s;if(n.isLeaving)return K(a);const l=G(a);if(!l)return K(a);let d=H(l,s,n,r,(e=>d=e));l.type!==Jt&&q(l,d);const u=r.subTree,f=u&&G(u);if(f&&f.type!==Jt&&!lr(l,f)&&F(r).type!==Jt){const e=H(f,s,n,r);if(q(f,e),"out-in"===c&&l.type!==Jt)return n.isLeaving=!0,e.afterLeave=()=>{n.isLeaving=!1,8&r.job.flags||r.update(),delete e.afterLeave},K(a);"in-out"===c&&l.type!==Jt&&(e.delayLeave=(e,t,r)=>{const o=V(n,f);o[String(f.key)]=f,e[N]=()=>{t(),e[N]=void 0,delete d.delayedLeave},d.delayedLeave=r})}return a}}};function W(e){let t=e[0];if(e.length>1){let r=!1;for(const o of e)if(o.type!==Jt){0,t=o,r=!0;break}}return t}const z=U;function V(e,t){const{leavingVNodes:r}=e;let o=r.get(t.type);return o||(o=Object.create(null),r.set(t.type,o)),o}function H(e,t,r,o,i){const{appear:s,mode:c,persisted:l=!1,onBeforeEnter:d,onEnter:u,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:b,onBeforeAppear:v,onAppear:y,onAfterAppear:k,onAppearCancelled:w}=t,C=String(e.key),_=V(r,e),x=(e,t)=>{e&&a(e,o,9,t)},S=(e,t)=>{const r=t[1];x(e,t),(0,n.cy)(e)?e.every((e=>e.length<=1))&&r():e.length<=1&&r()},I={mode:c,persisted:l,beforeEnter(t){let o=d;if(!r.isMounted){if(!s)return;o=v||d}t[N]&&t[N](!0);const n=_[C];n&&lr(e,n)&&n.el[N]&&n.el[N](),x(o,[t])},enter(e){let t=u,o=f,n=h;if(!r.isMounted){if(!s)return;t=y||u,o=k||f,n=w||h}let i=!1;const a=e[L]=t=>{i||(i=!0,x(t?n:o,[e]),I.delayedLeave&&I.delayedLeave(),e[L]=void 0)};t?S(t,[e,a]):a()},leave(t,o){const n=String(e.key);if(t[L]&&t[L](!0),r.isUnmounting)return o();x(p,[t]);let i=!1;const a=t[N]=r=>{i||(i=!0,o(),x(r?b:m,[t]),t[N]=void 0,_[n]===e&&delete _[n])};_[n]=e,g?S(g,[t,a]):a()},clone(e){const n=H(e,t,r,o,i);return i&&i(n),n}};return I}function K(e){if(ee(e))return e=mr(e),e.children=null,e}function G(e){if(!ee(e))return D(e.type)&&e.children?W(e.children):e;const{shapeFlag:t,children:r}=e;if(r){if(16&t)return r[0];if(32&t&&(0,n.Tn)(r.default))return r.default()}}function q(e,t){6&e.shapeFlag&&e.component?(e.transition=t,q(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function X(e,t=!1,r){let o=[],n=0;for(let i=0;i<e.length;i++){let a=e[i];const s=null==r?a.key:String(r)+String(null!=a.key?a.key:i);a.type===Xt?(128&a.patchFlag&&n++,o=o.concat(X(a.children,t,s))):(t||a.type!==Jt)&&o.push(null!=s?mr(a,{key:s}):a)}if(n>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}
/*! #__NO_SIDE_EFFECTS__ */function Z(e,t){return(0,n.Tn)(e)?(()=>(0,n.X$)({name:e.name},t,{setup:e}))():e}function J(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Y(e,t,r,a,s=!1){if((0,n.cy)(e))return void e.forEach(((e,o)=>Y(e,t&&((0,n.cy)(t)?t[o]:t),r,a,s)));if(Q(a)&&!s)return;const c=4&a.shapeFlag?zr(a.component):a.el,l=s?null:c,{i:d,r:u}=e;const f=t&&t.r,h=d.refs===n.MZ?d.refs={}:d.refs,p=d.setupState,g=(0,o.ux)(p),m=p===n.MZ?()=>!1:e=>(0,n.$3)(g,e);if(null!=f&&f!==u&&((0,n.Kg)(f)?(h[f]=null,m(f)&&(p[f]=null)):(0,o.i9)(f)&&(f.value=null)),(0,n.Tn)(u))i(u,d,12,[l,h]);else{const t=(0,n.Kg)(u),i=(0,o.i9)(u);if(t||i){const o=()=>{if(e.f){const r=t?m(u)?p[u]:h[u]:u.value;s?(0,n.cy)(r)&&(0,n.TF)(r,c):(0,n.cy)(r)?r.includes(c)||r.push(c):t?(h[u]=[c],m(u)&&(p[u]=h[u])):(u.value=[c],e.k&&(h[e.k]=u.value))}else t?(h[u]=l,m(u)&&(p[u]=l)):i&&(u.value=l,e.k&&(h[e.k]=l))};l?(o.id=-1,wt(o,r)):o()}else 0}}const Q=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const ee=e=>e.type.__isKeepAlive;RegExp,RegExp;function te(e,t){return(0,n.cy)(e)?e.some((e=>te(e,t))):(0,n.Kg)(e)?e.split(",").includes(t):!!(0,n.gd)(e)&&(e.lastIndex=0,e.test(t))}function re(e,t){ne(e,"a",t)}function oe(e,t){ne(e,"da",t)}function ne(e,t,r=Tr){const o=e.__wdc||(e.__wdc=()=>{let t=r;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ce(t,o,r),r){let e=r.parent;while(e&&e.parent)ee(e.parent.vnode)&&ie(o,t,r,e),e=e.parent}}function ie(e,t,r,o){const i=ce(t,e,o,!0);ge((()=>{(0,n.TF)(o[t],i)}),r)}function ae(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function se(e){return 128&e.shapeFlag?e.ssContent:e}function ce(e,t,r=Tr,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...n)=>{(0,o.C4)();const i=Or(r),s=a(t,r,e,n);return i(),(0,o.bl)(),s});return n?i.unshift(s):i.push(s),s}}const le=e=>(t,r=Tr)=>{Lr&&"sp"!==e||ce(e,((...e)=>t(...e)),r)},de=le("bm"),ue=le("m"),fe=le("bu"),he=le("u"),pe=le("bum"),ge=le("um"),me=le("sp"),be=le("rtg"),ve=le("rtc");function ye(e,t=Tr){ce("ec",e,t)}const ke="components";function we(e,t){return xe(ke,e,!0,t)||e}const Ce=Symbol.for("v-ndc");function _e(e){return(0,n.Kg)(e)?xe(ke,e,!1)||e:e||Ce}function xe(e,t,r=!0,o=!1){const i=T||Tr;if(i){const r=i.type;if(e===ke){const e=Vr(r,!1);if(e&&(e===t||e===(0,n.PT)(t)||e===(0,n.ZH)((0,n.PT)(t))))return r}const a=Se(i[e]||r[e],t)||Se(i.appContext[e],t);return!a&&o?r:a}}function Se(e,t){return e&&(e[t]||e[(0,n.PT)(t)]||e[(0,n.ZH)((0,n.PT)(t))])}function Ie(e,t,r,i){let a;const s=r&&r[i],c=(0,n.cy)(e);if(c||(0,n.Kg)(e)){const r=c&&(0,o.g8)(e);let n=!1;r&&(n=!(0,o.fE)(e),e=(0,o.qA)(e)),a=new Array(e.length);for(let i=0,c=e.length;i<c;i++)a[i]=t(n?(0,o.lJ)(e[i]):e[i],i,void 0,s&&s[i])}else if("number"===typeof e){0,a=new Array(e);for(let r=0;r<e;r++)a[r]=t(r+1,r,void 0,s&&s[r])}else if((0,n.Gv)(e))if(e[Symbol.iterator])a=Array.from(e,((e,r)=>t(e,r,void 0,s&&s[r])));else{const r=Object.keys(e);a=new Array(r.length);for(let o=0,n=r.length;o<n;o++){const n=r[o];a[o]=t(e[n],n,o,s&&s[o])}}else a=[];return r&&(r[i]=a),a}function Te(e,t){for(let r=0;r<t.length;r++){const o=t[r];if((0,n.cy)(o))for(let t=0;t<o.length;t++)e[o[t].name]=o[t].fn;else o&&(e[o.name]=o.key?(...e)=>{const t=o.fn(...e);return t&&(t.key=o.key),t}:o.fn)}return e}function Ee(e,t,r={},o,n){if(T.ce||T.parent&&Q(T.parent)&&T.parent.ce)return"default"!==t&&(r.name=t),tr(),sr(Xt,null,[hr("slot",r,o&&o())],64);let i=e[t];i&&i._c&&(i._d=!1),tr();const a=i&&Re(i(r)),s=sr(Xt,{key:(r.key||a&&a.key||`_${t}`)+(!a&&o?"_fb":"")},a||(o?o():[]),a&&1===e._?64:-2);return!n&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Re(e){return e.some((e=>!cr(e)||e.type!==Jt&&!(e.type===Xt&&!Re(e.children))))?e:null}const Be=e=>e?Pr(e)?zr(e):Be(e.parent):null,Oe=(0,n.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Be(e.parent),$root:e=>Be(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fe(e),$forceUpdate:e=>e.f||(e.f=()=>{k(e.update)}),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>Nt.bind(e)}),Ae=(e,t)=>e!==n.MZ&&!e.__isScriptSetup&&(0,n.$3)(e,t),Pe={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:r,setupState:i,data:a,props:s,accessCache:c,type:l,appContext:d}=e;let u;if("$"!==t[0]){const o=c[t];if(void 0!==o)switch(o){case 1:return i[t];case 2:return a[t];case 4:return r[t];case 3:return s[t]}else{if(Ae(i,t))return c[t]=1,i[t];if(a!==n.MZ&&(0,n.$3)(a,t))return c[t]=2,a[t];if((u=e.propsOptions[0])&&(0,n.$3)(u,t))return c[t]=3,s[t];if(r!==n.MZ&&(0,n.$3)(r,t))return c[t]=4,r[t];Ne&&(c[t]=0)}}const f=Oe[t];let h,p;return f?("$attrs"===t&&(0,o.u4)(e.attrs,"get",""),f(e)):(h=l.__cssModules)&&(h=h[t])?h:r!==n.MZ&&(0,n.$3)(r,t)?(c[t]=4,r[t]):(p=d.config.globalProperties,(0,n.$3)(p,t)?p[t]:void 0)},set({_:e},t,r){const{data:o,setupState:i,ctx:a}=e;return Ae(i,t)?(i[t]=r,!0):o!==n.MZ&&(0,n.$3)(o,t)?(o[t]=r,!0):!(0,n.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(a[t]=r,!0))},has({_:{data:e,setupState:t,accessCache:r,ctx:o,appContext:i,propsOptions:a}},s){let c;return!!r[s]||e!==n.MZ&&(0,n.$3)(e,s)||Ae(t,s)||(c=a[0])&&(0,n.$3)(c,s)||(0,n.$3)(o,s)||(0,n.$3)(Oe,s)||(0,n.$3)(i.config.globalProperties,s)},defineProperty(e,t,r){return null!=r.get?e._.accessCache[t]=0:(0,n.$3)(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function De(e){return(0,n.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ne=!0;function Le(e){const t=Fe(e),r=e.proxy,i=e.ctx;Ne=!1,t.beforeCreate&&je(t.beforeCreate,e,"bc");const{data:a,computed:s,methods:c,watch:l,provide:d,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:g,updated:m,activated:b,deactivated:v,beforeDestroy:y,beforeUnmount:k,destroyed:w,unmounted:C,render:_,renderTracked:x,renderTriggered:S,errorCaptured:I,serverPrefetch:T,expose:E,inheritAttrs:R,components:B,directives:O,filters:A}=t,P=null;if(u&&Me(u,i,P),c)for(const o in c){const e=c[o];(0,n.Tn)(e)&&(i[o]=e.bind(r))}if(a){0;const t=a.call(r,r);0,(0,n.Gv)(t)&&(e.data=(0,o.Kh)(t))}if(Ne=!0,s)for(const o in s){const e=s[o],t=(0,n.Tn)(e)?e.bind(r,r):(0,n.Tn)(e.get)?e.get.bind(r,r):n.tE;0;const a=!(0,n.Tn)(e)&&(0,n.Tn)(e.set)?e.set.bind(r):n.tE,c=Kr({get:t,set:a});Object.defineProperty(i,o,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const o in l)$e(l[o],i,r,o);if(d){const e=(0,n.Tn)(d)?d.call(r):d;Reflect.ownKeys(e).forEach((t=>{et(t,e[t])}))}function D(e,t){(0,n.cy)(t)?t.forEach((t=>e(t.bind(r)))):t&&e(t.bind(r))}if(f&&je(f,e,"c"),D(de,h),D(ue,p),D(fe,g),D(he,m),D(re,b),D(oe,v),D(ye,I),D(ve,x),D(be,S),D(pe,k),D(ge,C),D(me,T),(0,n.cy)(E))if(E.length){const t=e.exposed||(e.exposed={});E.forEach((e=>{Object.defineProperty(t,e,{get:()=>r[e],set:t=>r[e]=t})}))}else e.exposed||(e.exposed={});_&&e.render===n.tE&&(e.render=_),null!=R&&(e.inheritAttrs=R),B&&(e.components=B),O&&(e.directives=O),T&&J(e)}function Me(e,t,r=n.tE){(0,n.cy)(e)&&(e=He(e));for(const i in e){const r=e[i];let a;a=(0,n.Gv)(r)?"default"in r?tt(r.from||i,r.default,!0):tt(r.from||i):tt(r),(0,o.i9)(a)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[i]=a}}function je(e,t,r){a((0,n.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,r)}function $e(e,t,r,o){let i=o.includes(".")?Lt(r,o):()=>r[o];if((0,n.Kg)(e)){const r=t[e];(0,n.Tn)(r)&&Pt(i,r)}else if((0,n.Tn)(e))Pt(i,e.bind(r));else if((0,n.Gv)(e))if((0,n.cy)(e))e.forEach((e=>$e(e,t,r,o)));else{const o=(0,n.Tn)(e.handler)?e.handler.bind(r):t[e.handler];(0,n.Tn)(o)&&Pt(i,o,e)}else 0}function Fe(e){const t=e.type,{mixins:r,extends:o}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,c=a.get(t);let l;return c?l=c:i.length||r||o?(l={},i.length&&i.forEach((e=>Ue(l,e,s,!0))),Ue(l,t,s)):l=t,(0,n.Gv)(t)&&a.set(t,l),l}function Ue(e,t,r,o=!1){const{mixins:n,extends:i}=t;i&&Ue(e,i,r,!0),n&&n.forEach((t=>Ue(e,t,r,!0)));for(const a in t)if(o&&"expose"===a);else{const o=We[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const We={data:ze,props:qe,emits:qe,methods:Ge,computed:Ge,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Ge,directives:Ge,watch:Xe,provide:ze,inject:Ve};function ze(e,t){return t?e?function(){return(0,n.X$)((0,n.Tn)(e)?e.call(this,this):e,(0,n.Tn)(t)?t.call(this,this):t)}:t:e}function Ve(e,t){return Ge(He(e),He(t))}function He(e){if((0,n.cy)(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Ke(e,t){return e?[...new Set([].concat(e,t))]:t}function Ge(e,t){return e?(0,n.X$)(Object.create(null),e,t):t}function qe(e,t){return e?(0,n.cy)(e)&&(0,n.cy)(t)?[...new Set([...e,...t])]:(0,n.X$)(Object.create(null),De(e),De(null!=t?t:{})):t}function Xe(e,t){if(!e)return t;if(!t)return e;const r=(0,n.X$)(Object.create(null),e);for(const o in t)r[o]=Ke(e[o],t[o]);return r}function Ze(){return{app:null,config:{isNativeTag:n.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Je=0;function Ye(e,t){return function(r,o=null){(0,n.Tn)(r)||(r=(0,n.X$)({},r)),null==o||(0,n.Gv)(o)||(o=null);const i=Ze(),s=new WeakSet,c=[];let l=!1;const d=i.app={_uid:Je++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:qr,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,n.Tn)(e.install)?(s.add(e),e.install(d,...t)):(0,n.Tn)(e)&&(s.add(e),e(d,...t))),d},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),d},component(e,t){return t?(i.components[e]=t,d):i.components[e]},directive(e,t){return t?(i.directives[e]=t,d):i.directives[e]},mount(n,a,s){if(!l){0;const c=d._ceVNode||hr(r,o);return c.appContext=i,!0===s?s="svg":!1===s&&(s=void 0),a&&t?t(c,n):e(c,n,s),l=!0,d._container=n,n.__vue_app__=d,zr(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(a(c,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(e,t){return i.provides[e]=t,d},runWithContext(e){const t=Qe;Qe=d;try{return e()}finally{Qe=t}}};return d}}let Qe=null;function et(e,t){if(Tr){let r=Tr.provides;const o=Tr.parent&&Tr.parent.provides;o===r&&(r=Tr.provides=Object.create(o)),r[e]=t}else 0}function tt(e,t,r=!1){const o=Tr||T;if(o||Qe){const i=Qe?Qe._context.provides:o?null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&(0,n.Tn)(t)?t.call(o&&o.proxy):t}else 0}const rt={},ot=()=>Object.create(rt),nt=e=>Object.getPrototypeOf(e)===rt;function it(e,t,r,n=!1){const i={},a=ot();e.propsDefaults=Object.create(null),st(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);r?e.props=n?i:(0,o.Gc)(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function at(e,t,r,i){const{props:a,attrs:s,vnode:{patchFlag:c}}=e,l=(0,o.ux)(a),[d]=e.propsOptions;let u=!1;if(!(i||c>0)||16&c){let o;st(e,t,a,s)&&(u=!0);for(const i in l)t&&((0,n.$3)(t,i)||(o=(0,n.Tg)(i))!==i&&(0,n.$3)(t,o))||(d?!r||void 0===r[i]&&void 0===r[o]||(a[i]=ct(d,l,i,void 0,e,!0)):delete a[i]);if(s!==l)for(const e in s)t&&(0,n.$3)(t,e)||(delete s[e],u=!0)}else if(8&c){const r=e.vnode.dynamicProps;for(let o=0;o<r.length;o++){let i=r[o];if(Ft(e.emitsOptions,i))continue;const c=t[i];if(d)if((0,n.$3)(s,i))c!==s[i]&&(s[i]=c,u=!0);else{const t=(0,n.PT)(i);a[t]=ct(d,l,t,c,e,!1)}else c!==s[i]&&(s[i]=c,u=!0)}}u&&(0,o.hZ)(e.attrs,"set","")}function st(e,t,r,i){const[a,s]=e.propsOptions;let c,l=!1;if(t)for(let o in t){if((0,n.SU)(o))continue;const d=t[o];let u;a&&(0,n.$3)(a,u=(0,n.PT)(o))?s&&s.includes(u)?(c||(c={}))[u]=d:r[u]=d:Ft(e.emitsOptions,o)||o in i&&d===i[o]||(i[o]=d,l=!0)}if(s){const t=(0,o.ux)(r),i=c||n.MZ;for(let o=0;o<s.length;o++){const c=s[o];r[c]=ct(a,t,c,i[c],e,!(0,n.$3)(i,c))}}return l}function ct(e,t,r,o,i,a){const s=e[r];if(null!=s){const e=(0,n.$3)(s,"default");if(e&&void 0===o){const e=s.default;if(s.type!==Function&&!s.skipFactory&&(0,n.Tn)(e)){const{propsDefaults:n}=i;if(r in n)o=n[r];else{const a=Or(i);o=n[r]=e.call(null,t),a()}}else o=e;i.ce&&i.ce._setProp(r,o)}s[0]&&(a&&!e?o=!1:!s[1]||""!==o&&o!==(0,n.Tg)(r)||(o=!0))}return o}const lt=new WeakMap;function dt(e,t,r=!1){const o=r?lt:t.propsCache,i=o.get(e);if(i)return i;const a=e.props,s={},c=[];let l=!1;if(!(0,n.Tn)(e)){const o=e=>{l=!0;const[r,o]=dt(e,t,!0);(0,n.X$)(s,r),o&&c.push(...o)};!r&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!a&&!l)return(0,n.Gv)(e)&&o.set(e,n.Oj),n.Oj;if((0,n.cy)(a))for(let u=0;u<a.length;u++){0;const e=(0,n.PT)(a[u]);ut(e)&&(s[e]=n.MZ)}else if(a){0;for(const e in a){const t=(0,n.PT)(e);if(ut(t)){const r=a[e],o=s[t]=(0,n.cy)(r)||(0,n.Tn)(r)?{type:r}:(0,n.X$)({},r),i=o.type;let l=!1,d=!0;if((0,n.cy)(i))for(let e=0;e<i.length;++e){const t=i[e],r=(0,n.Tn)(t)&&t.name;if("Boolean"===r){l=!0;break}"String"===r&&(d=!1)}else l=(0,n.Tn)(i)&&"Boolean"===i.name;o[0]=l,o[1]=d,(l||(0,n.$3)(o,"default"))&&c.push(t)}}}const d=[s,c];return(0,n.Gv)(e)&&o.set(e,d),d}function ut(e){return"$"!==e[0]&&!(0,n.SU)(e)}const ft=e=>"_"===e[0]||"$stable"===e,ht=e=>(0,n.cy)(e)?e.map(yr):[yr(e)],pt=(e,t,r)=>{if(t._n)return t;const o=B(((...e)=>ht(t(...e))),r);return o._c=!1,o},gt=(e,t,r)=>{const o=e._ctx;for(const i in e){if(ft(i))continue;const r=e[i];if((0,n.Tn)(r))t[i]=pt(i,r,o);else if(null!=r){0;const e=ht(r);t[i]=()=>e}}},mt=(e,t)=>{const r=ht(t);e.slots.default=()=>r},bt=(e,t,r)=>{for(const o in t)(r||"_"!==o)&&(e[o]=t[o])},vt=(e,t,r)=>{const o=e.slots=ot();if(32&e.vnode.shapeFlag){const e=t._;e?(bt(o,t,r),r&&(0,n.yQ)(o,"_",e,!0)):gt(t,o)}else t&&mt(e,t)},yt=(e,t,r)=>{const{vnode:o,slots:i}=e;let a=!0,s=n.MZ;if(32&o.shapeFlag){const e=t._;e?r&&1===e?a=!1:bt(i,t,r):(a=!t.$stable,gt(t,i)),s=t}else t&&(mt(e,t),s={default:1});if(a)for(const n in i)ft(n)||null!=s[n]||delete i[n]};function kt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,n.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const wt=qt;function Ct(e){return _t(e)}function _t(e,t){kt();const r=(0,n.We)();r.__VUE__=!0;const{insert:i,remove:a,patchProp:s,createElement:c,createText:l,createComment:d,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:g=n.tE,insertStaticContent:m}=e,b=(e,t,r,o=null,n=null,i=null,a=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!lr(e,t)&&(o=Z(e),H(e,n,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:d,shapeFlag:u}=t;switch(l){case Zt:v(e,t,r,o);break;case Jt:y(e,t,r,o);break;case Yt:null==e&&w(t,r,o,a);break;case Xt:N(e,t,r,o,n,i,a,s,c);break;default:1&u?I(e,t,r,o,n,i,a,s,c):6&u?L(e,t,r,o,n,i,a,s,c):(64&u||128&u)&&l.process(e,t,r,o,n,i,a,s,c,re)}null!=d&&n&&Y(d,e&&e.ref,i,t||e,!t)},v=(e,t,r,o)=>{if(null==e)i(t.el=l(t.children),r,o);else{const r=t.el=e.el;t.children!==e.children&&u(r,t.children)}},y=(e,t,r,o)=>{null==e?i(t.el=d(t.children||""),r,o):t.el=e.el},w=(e,t,r,o)=>{[e.el,e.anchor]=m(e.children,t,r,o,e.el,e.anchor)},C=({el:e,anchor:t},r,o)=>{let n;while(e&&e!==t)n=p(e),i(e,r,o),e=n;i(t,r,o)},S=({el:e,anchor:t})=>{let r;while(e&&e!==t)r=p(e),a(e),e=r;a(t)},I=(e,t,r,o,n,i,a,s,c)=>{"svg"===t.type?a="svg":"math"===t.type&&(a="mathml"),null==e?T(t,r,o,n,i,a,s,c):B(e,t,n,i,a,s,c)},T=(e,t,r,o,a,l,d,u)=>{let h,p;const{props:g,shapeFlag:m,transition:b,dirs:v}=e;if(h=e.el=c(e.type,l,g&&g.is,g),8&m?f(h,e.children):16&m&&R(e.children,h,null,o,a,xt(e,l),d,u),v&&A(e,null,o,"created"),E(h,e,e.scopeId,d,o),g){for(const e in g)"value"===e||(0,n.SU)(e)||s(h,e,null,g[e],l,o);"value"in g&&s(h,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&_r(p,o,e)}v&&A(e,null,o,"beforeMount");const y=It(a,b);y&&b.beforeEnter(h),i(h,t,r),((p=g&&g.onVnodeMounted)||y||v)&&wt((()=>{p&&_r(p,o,e),y&&b.enter(h),v&&A(e,null,o,"mounted")}),a)},E=(e,t,r,o,n)=>{if(r&&g(e,r),o)for(let i=0;i<o.length;i++)g(e,o[i]);if(n){let r=n.subTree;if(t===r||Gt(r.type)&&(r.ssContent===t||r.ssFallback===t)){const t=n.vnode;E(e,t,t.scopeId,t.slotScopeIds,n.parent)}}},R=(e,t,r,o,n,i,a,s,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=s?kr(e[l]):yr(e[l]);b(null,c,t,r,o,n,i,a,s)}},B=(e,t,r,o,i,a,c)=>{const l=t.el=e.el;let{patchFlag:d,dynamicChildren:u,dirs:h}=t;d|=16&e.patchFlag;const p=e.props||n.MZ,g=t.props||n.MZ;let m;if(r&&St(r,!1),(m=g.onVnodeBeforeUpdate)&&_r(m,r,t,e),h&&A(t,e,r,"beforeUpdate"),r&&St(r,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(l,""),u?O(e.dynamicChildren,u,l,r,o,xt(t,i),a):c||U(e,t,l,null,r,o,xt(t,i),a,!1),d>0){if(16&d)D(l,p,g,r,i);else if(2&d&&p.class!==g.class&&s(l,"class",null,g.class,i),4&d&&s(l,"style",p.style,g.style,i),8&d){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const o=e[t],n=p[o],a=g[o];a===n&&"value"!==o||s(l,o,n,a,i,r)}}1&d&&e.children!==t.children&&f(l,t.children)}else c||null!=u||D(l,p,g,r,i);((m=g.onVnodeUpdated)||h)&&wt((()=>{m&&_r(m,r,t,e),h&&A(t,e,r,"updated")}),o)},O=(e,t,r,o,n,i,a)=>{for(let s=0;s<t.length;s++){const c=e[s],l=t[s],d=c.el&&(c.type===Xt||!lr(c,l)||70&c.shapeFlag)?h(c.el):r;b(c,l,d,null,o,n,i,a,!0)}},D=(e,t,r,o,i)=>{if(t!==r){if(t!==n.MZ)for(const a in t)(0,n.SU)(a)||a in r||s(e,a,t[a],null,i,o);for(const a in r){if((0,n.SU)(a))continue;const c=r[a],l=t[a];c!==l&&"value"!==a&&s(e,a,l,c,i,o)}"value"in r&&s(e,"value",t.value,r.value,i)}},N=(e,t,r,o,n,a,s,c,d)=>{const u=t.el=e?e.el:l(""),f=t.anchor=e?e.anchor:l("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(i(u,r,o),i(f,r,o),R(t.children||[],r,f,n,a,s,c,d)):h>0&&64&h&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,r,n,a,s,c),(null!=t.key||n&&t===n.subTree)&&Tt(e,t,!0)):U(e,t,r,f,n,a,s,c,d)},L=(e,t,r,o,n,i,a,s,c)=>{t.slotScopeIds=s,null==e?512&t.shapeFlag?n.ctx.activate(t,r,o,a,c):M(t,r,o,n,i,a,c):j(e,t,c)},M=(e,t,r,o,n,i,a)=>{const s=e.component=Ir(e,o,n);if(ee(e)&&(s.ctx.renderer=re),Mr(s,!1,a),s.asyncDep){if(n&&n.registerDep(s,$,a),!e.el){const e=s.subTree=hr(Jt);y(null,e,t,r)}}else $(s,e,t,r,n,i,a)},j=(e,t,r)=>{const o=t.component=e.component;if(Vt(e,t,r)){if(o.asyncDep&&!o.asyncResolved)return void F(o,t,r);o.next=t,o.update()}else t.el=e.el,o.vnode=t},$=(e,t,r,i,a,s,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:r,u:o,parent:i,vnode:d}=e;{const r=Rt(e);if(r)return t&&(t.el=d.el,F(e,t,c)),void r.asyncDep.then((()=>{e.isUnmounted||l()}))}let u,f=t;0,St(e,!1),t?(t.el=d.el,F(e,t,c)):t=d,r&&(0,n.DY)(r),(u=t.props&&t.props.onVnodeBeforeUpdate)&&_r(u,i,t,d),St(e,!0);const p=Ut(e);0;const g=e.subTree;e.subTree=p,b(g,p,h(g.el),Z(g),e,a,s),t.el=p.el,null===f&&Kt(e,p.el),o&&wt(o,a),(u=t.props&&t.props.onVnodeUpdated)&&wt((()=>_r(u,i,t,d)),a)}else{let o;const{el:c,props:l}=t,{bm:d,m:u,parent:f,root:h,type:p}=e,g=Q(t);if(St(e,!1),d&&(0,n.DY)(d),!g&&(o=l&&l.onVnodeBeforeMount)&&_r(o,f,t),St(e,!0),c&&ne){const t=()=>{e.subTree=Ut(e),ne(c,e.subTree,e,a,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{h.ce&&h.ce._injectChildStyle(p);const o=e.subTree=Ut(e);0,b(null,o,r,i,e,a,s),t.el=o.el}if(u&&wt(u,a),!g&&(o=l&&l.onVnodeMounted)){const e=t;wt((()=>_r(o,f,e)),a)}(256&t.shapeFlag||f&&Q(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&wt(e.a,a),e.isMounted=!0,t=r=i=null}};e.scope.on();const d=e.effect=new o.X2(l);e.scope.off();const u=e.update=d.run.bind(d),f=e.job=d.runIfDirty.bind(d);f.i=e,f.id=e.uid,d.scheduler=()=>k(f),St(e,!0),u()},F=(e,t,r)=>{t.component=e;const n=e.vnode.props;e.vnode=t,e.next=null,at(e,t.props,n,r),yt(e,t.children,r),(0,o.C4)(),_(e),(0,o.bl)()},U=(e,t,r,o,n,i,a,s,c=!1)=>{const l=e&&e.children,d=e?e.shapeFlag:0,u=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void z(l,u,r,o,n,i,a,s,c);if(256&h)return void W(l,u,r,o,n,i,a,s,c)}8&p?(16&d&&X(l,n,i),u!==l&&f(r,u)):16&d?16&p?z(l,u,r,o,n,i,a,s,c):X(l,n,i,!0):(8&d&&f(r,""),16&p&&R(u,r,o,n,i,a,s,c))},W=(e,t,r,o,i,a,s,c,l)=>{e=e||n.Oj,t=t||n.Oj;const d=e.length,u=t.length,f=Math.min(d,u);let h;for(h=0;h<f;h++){const o=t[h]=l?kr(t[h]):yr(t[h]);b(e[h],o,r,null,i,a,s,c,l)}d>u?X(e,i,a,!0,!1,f):R(t,r,o,i,a,s,c,l,f)},z=(e,t,r,o,i,a,s,c,l)=>{let d=0;const u=t.length;let f=e.length-1,h=u-1;while(d<=f&&d<=h){const o=e[d],n=t[d]=l?kr(t[d]):yr(t[d]);if(!lr(o,n))break;b(o,n,r,null,i,a,s,c,l),d++}while(d<=f&&d<=h){const o=e[f],n=t[h]=l?kr(t[h]):yr(t[h]);if(!lr(o,n))break;b(o,n,r,null,i,a,s,c,l),f--,h--}if(d>f){if(d<=h){const e=h+1,n=e<u?t[e].el:o;while(d<=h)b(null,t[d]=l?kr(t[d]):yr(t[d]),r,n,i,a,s,c,l),d++}}else if(d>h)while(d<=f)H(e[d],i,a,!0),d++;else{const p=d,g=d,m=new Map;for(d=g;d<=h;d++){const e=t[d]=l?kr(t[d]):yr(t[d]);null!=e.key&&m.set(e.key,d)}let v,y=0;const k=h-g+1;let w=!1,C=0;const _=new Array(k);for(d=0;d<k;d++)_[d]=0;for(d=p;d<=f;d++){const o=e[d];if(y>=k){H(o,i,a,!0);continue}let n;if(null!=o.key)n=m.get(o.key);else for(v=g;v<=h;v++)if(0===_[v-g]&&lr(o,t[v])){n=v;break}void 0===n?H(o,i,a,!0):(_[n-g]=d+1,n>=C?C=n:w=!0,b(o,t[n],r,null,i,a,s,c,l),y++)}const x=w?Et(_):n.Oj;for(v=x.length-1,d=k-1;d>=0;d--){const e=g+d,n=t[e],f=e+1<u?t[e+1].el:o;0===_[d]?b(null,n,r,f,i,a,s,c,l):w&&(v<0||d!==x[v]?V(n,r,f,2):v--)}}},V=(e,t,r,o,n=null)=>{const{el:a,type:s,transition:c,children:l,shapeFlag:d}=e;if(6&d)return void V(e.component.subTree,t,r,o);if(128&d)return void e.suspense.move(t,r,o);if(64&d)return void s.move(e,t,r,re);if(s===Xt){i(a,t,r);for(let e=0;e<l.length;e++)V(l[e],t,r,o);return void i(e.anchor,t,r)}if(s===Yt)return void C(e,t,r);const u=2!==o&&1&d&&c;if(u)if(0===o)c.beforeEnter(a),i(a,t,r),wt((()=>c.enter(a)),n);else{const{leave:e,delayLeave:o,afterLeave:n}=c,s=()=>i(a,t,r),l=()=>{e(a,(()=>{s(),n&&n()}))};o?o(a,s,l):l()}else i(a,t,r)},H=(e,t,r,o=!1,n=!1)=>{const{type:i,props:a,ref:s,children:c,dynamicChildren:l,shapeFlag:d,patchFlag:u,dirs:f,cacheIndex:h}=e;if(-2===u&&(n=!1),null!=s&&Y(s,null,r,e,!0),null!=h&&(t.renderCache[h]=void 0),256&d)return void t.ctx.deactivate(e);const p=1&d&&f,g=!Q(e);let m;if(g&&(m=a&&a.onVnodeBeforeUnmount)&&_r(m,t,e),6&d)q(e.component,r,o);else{if(128&d)return void e.suspense.unmount(r,o);p&&A(e,null,t,"beforeUnmount"),64&d?e.type.remove(e,t,r,re,o):l&&!l.hasOnce&&(i!==Xt||u>0&&64&u)?X(l,t,r,!1,!0):(i===Xt&&384&u||!n&&16&d)&&X(c,t,r),o&&K(e)}(g&&(m=a&&a.onVnodeUnmounted)||p)&&wt((()=>{m&&_r(m,t,e),p&&A(e,null,t,"unmounted")}),r)},K=e=>{const{type:t,el:r,anchor:o,transition:n}=e;if(t===Xt)return void G(r,o);if(t===Yt)return void S(e);const i=()=>{a(r),n&&!n.persisted&&n.afterLeave&&n.afterLeave()};if(1&e.shapeFlag&&n&&!n.persisted){const{leave:t,delayLeave:o}=n,a=()=>t(r,i);o?o(e.el,i,a):a()}else i()},G=(e,t)=>{let r;while(e!==t)r=p(e),a(e),e=r;a(t)},q=(e,t,r)=>{const{bum:o,scope:i,job:a,subTree:s,um:c,m:l,a:d}=e;Bt(l),Bt(d),o&&(0,n.DY)(o),i.stop(),a&&(a.flags|=8,H(s,e,t,r)),c&&wt(c,t),wt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,r,o=!1,n=!1,i=0)=>{for(let a=i;a<e.length;a++)H(e[a],t,r,o,n)},Z=e=>{if(6&e.shapeFlag)return Z(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),r=t&&t[P];return r?p(r):t};let J=!1;const te=(e,t,r)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,r),t._vnode=e,J||(J=!0,_(),x(),J=!1)},re={p:b,um:H,m:V,r:K,mt:M,mc:R,pc:U,pbc:O,n:Z,o:e};let oe,ne;return t&&([oe,ne]=t(re)),{render:te,hydrate:oe,createApp:Ye(te,oe)}}function xt({type:e,props:t},r){return"svg"===r&&"foreignObject"===e||"mathml"===r&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function St({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function It(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Tt(e,t,r=!1){const o=e.children,i=t.children;if((0,n.cy)(o)&&(0,n.cy)(i))for(let n=0;n<o.length;n++){const e=o[n];let t=i[n];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[n]=kr(i[n]),t.el=e.el),r||-2===t.patchFlag||Tt(e,t)),t.type===Zt&&(t.el=e.el)}}function Et(e){const t=e.slice(),r=[0];let o,n,i,a,s;const c=e.length;for(o=0;o<c;o++){const c=e[o];if(0!==c){if(n=r[r.length-1],e[n]<c){t[o]=n,r.push(o);continue}i=0,a=r.length-1;while(i<a)s=i+a>>1,e[r[s]]<c?i=s+1:a=s;c<e[r[i]]&&(i>0&&(t[o]=r[i-1]),r[i]=o)}}i=r.length,a=r[i-1];while(i-- >0)r[i]=a,a=t[a];return r}function Rt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Rt(t)}function Bt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ot=Symbol.for("v-scx"),At=()=>{{const e=tt(Ot);return e}};function Pt(e,t,r){return Dt(e,t,r)}function Dt(e,t,r=n.MZ){const{immediate:i,deep:s,flush:c,once:l}=r;const d=(0,n.X$)({},r);let u;if(Lr)if("sync"===c){const e=At();u=e.__watcherHandles||(e.__watcherHandles=[])}else{if(t&&!i){const e=()=>{};return e.stop=n.tE,e.resume=n.tE,e.pause=n.tE,e}d.once=!0}const f=Tr;d.call=(e,t,r)=>a(e,f,t,r);let h=!1;"post"===c?d.scheduler=e=>{wt(e,f&&f.suspense)}:"sync"!==c&&(h=!0,d.scheduler=(e,t)=>{t?e():k(e)}),d.augmentJob=e=>{t&&(e.flags|=4),h&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const p=(0,o.wB)(e,t,d);return u&&u.push(p),p}function Nt(e,t,r){const o=this.proxy,i=(0,n.Kg)(e)?e.includes(".")?Lt(o,e):()=>o[e]:e.bind(o,o);let a;(0,n.Tn)(t)?a=t:(a=t.handler,r=t);const s=Or(this),c=Dt(i,a.bind(o),r);return s(),c}function Lt(e,t){const r=t.split(".");return()=>{let t=e;for(let e=0;e<r.length&&t;e++)t=t[r[e]];return t}}const Mt=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,n.PT)(t)}Modifiers`]||e[`${(0,n.Tg)(t)}Modifiers`];function jt(e,t,...r){if(e.isUnmounted)return;const o=e.vnode.props||n.MZ;let i=r;const s=t.startsWith("update:"),c=s&&Mt(o,t.slice(7));let l;c&&(c.trim&&(i=r.map((e=>(0,n.Kg)(e)?e.trim():e))),c.number&&(i=r.map(n.bB)));let d=o[l=(0,n.rU)(t)]||o[l=(0,n.rU)((0,n.PT)(t))];!d&&s&&(d=o[l=(0,n.rU)((0,n.Tg)(t))]),d&&a(d,e,6,i);const u=o[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,a(u,e,6,i)}}function $t(e,t,r=!1){const o=t.emitsCache,i=o.get(e);if(void 0!==i)return i;const a=e.emits;let s={},c=!1;if(!(0,n.Tn)(e)){const o=e=>{const r=$t(e,t,!0);r&&(c=!0,(0,n.X$)(s,r))};!r&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return a||c?((0,n.cy)(a)?a.forEach((e=>s[e]=null)):(0,n.X$)(s,a),(0,n.Gv)(e)&&o.set(e,s),s):((0,n.Gv)(e)&&o.set(e,null),null)}function Ft(e,t){return!(!e||!(0,n.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,n.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,n.$3)(e,(0,n.Tg)(t))||(0,n.$3)(e,t))}function Ut(e){const{type:t,vnode:r,proxy:o,withProxy:i,propsOptions:[a],slots:c,attrs:l,emit:d,render:u,renderCache:f,props:h,data:p,setupState:g,ctx:m,inheritAttrs:b}=e,v=R(e);let y,k;try{if(4&r.shapeFlag){const e=i||o,t=e;y=yr(u.call(t,e,f,h,g,p,m)),k=l}else{const e=t;0,y=yr(e.length>1?e(h,{attrs:l,slots:c,emit:d}):e(h,null)),k=t.props?l:Wt(l)}}catch(C){Qt.length=0,s(C,e,1),y=hr(Jt)}let w=y;if(k&&!1!==b){const e=Object.keys(k),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(n.CP)&&(k=zt(k,a)),w=mr(w,k,!1,!0))}return r.dirs&&(w=mr(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(r.dirs):r.dirs),r.transition&&q(w,r.transition),y=w,R(v),y}const Wt=e=>{let t;for(const r in e)("class"===r||"style"===r||(0,n.Mp)(r))&&((t||(t={}))[r]=e[r]);return t},zt=(e,t)=>{const r={};for(const o in e)(0,n.CP)(o)&&o.slice(9)in t||(r[o]=e[o]);return r};function Vt(e,t,r){const{props:o,children:n,component:i}=e,{props:a,children:s,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(r&&c>=0))return!(!n&&!s||s&&s.$stable)||o!==a&&(o?!a||Ht(o,a,l):!!a);if(1024&c)return!0;if(16&c)return o?Ht(o,a,l):!!a;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t];if(a[r]!==o[r]&&!Ft(l,r))return!0}}return!1}function Ht(e,t,r){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let n=0;n<o.length;n++){const i=o[n];if(t[i]!==e[i]&&!Ft(r,i))return!0}return!1}function Kt({vnode:e,parent:t},r){while(t){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o!==e)break;(e=t.vnode).el=r,t=t.parent}}const Gt=e=>e.__isSuspense;function qt(e,t){t&&t.pendingBranch?(0,n.cy)(e)?t.effects.push(...e):t.effects.push(e):C(e)}const Xt=Symbol.for("v-fgt"),Zt=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Yt=Symbol.for("v-stc"),Qt=[];let er=null;function tr(e=!1){Qt.push(er=e?null:[])}function rr(){Qt.pop(),er=Qt[Qt.length-1]||null}let or=1;function nr(e){or+=e,e<0&&er&&(er.hasOnce=!0)}function ir(e){return e.dynamicChildren=or>0?er||n.Oj:null,rr(),or>0&&er&&er.push(e),e}function ar(e,t,r,o,n,i){return ir(fr(e,t,r,o,n,i,!0))}function sr(e,t,r,o,n){return ir(hr(e,t,r,o,n,!0))}function cr(e){return!!e&&!0===e.__v_isVNode}function lr(e,t){return e.type===t.type&&e.key===t.key}const dr=({key:e})=>null!=e?e:null,ur=({ref:e,ref_key:t,ref_for:r})=>("number"===typeof e&&(e=""+e),null!=e?(0,n.Kg)(e)||(0,o.i9)(e)||(0,n.Tn)(e)?{i:T,r:e,k:t,f:!!r}:e:null);function fr(e,t=null,r=null,o=0,i=null,a=(e===Xt?0:1),s=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&dr(t),ref:t&&ur(t),scopeId:E,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:T};return c?(wr(l,r),128&a&&e.normalize(l)):r&&(l.shapeFlag|=(0,n.Kg)(r)?8:16),or>0&&!s&&er&&(l.patchFlag>0||6&a)&&32!==l.patchFlag&&er.push(l),l}const hr=pr;function pr(e,t=null,r=null,i=0,a=null,s=!1){if(e&&e!==Ce||(e=Jt),cr(e)){const o=mr(e,t,!0);return r&&wr(o,r),or>0&&!s&&er&&(6&o.shapeFlag?er[er.indexOf(e)]=o:er.push(o)),o.patchFlag=-2,o}if(Hr(e)&&(e=e.__vccOpts),t){t=gr(t);let{class:e,style:r}=t;e&&!(0,n.Kg)(e)&&(t.class=(0,n.C4)(e)),(0,n.Gv)(r)&&((0,o.ju)(r)&&!(0,n.cy)(r)&&(r=(0,n.X$)({},r)),t.style=(0,n.Tr)(r))}const c=(0,n.Kg)(e)?1:Gt(e)?128:D(e)?64:(0,n.Gv)(e)?4:(0,n.Tn)(e)?2:0;return fr(e,t,r,i,a,c,s,!0)}function gr(e){return e?(0,o.ju)(e)||nt(e)?(0,n.X$)({},e):e:null}function mr(e,t,r=!1,o=!1){const{props:i,ref:a,patchFlag:s,children:c,transition:l}=e,d=t?Cr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&dr(d),ref:t&&t.ref?r&&a?(0,n.cy)(a)?a.concat(ur(t)):[a,ur(t)]:ur(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mr(e.ssContent),ssFallback:e.ssFallback&&mr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&o&&q(u,l.clone(u)),u}function br(e=" ",t=0){return hr(Zt,null,e,t)}function vr(e="",t=!1){return t?(tr(),sr(Jt,null,e)):hr(Jt,null,e)}function yr(e){return null==e||"boolean"===typeof e?hr(Jt):(0,n.cy)(e)?hr(Xt,null,e.slice()):"object"===typeof e?kr(e):hr(Zt,null,String(e))}function kr(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:mr(e)}function wr(e,t){let r=0;const{shapeFlag:o}=e;if(null==t)t=null;else if((0,n.cy)(t))r=16;else if("object"===typeof t){if(65&o){const r=t.default;return void(r&&(r._c&&(r._d=!1),wr(e,r()),r._c&&(r._d=!0)))}{r=32;const o=t._;o||nt(t)?3===o&&T&&(1===T.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=T}}else(0,n.Tn)(t)?(t={default:t,_ctx:T},r=32):(t=String(t),64&o?(r=16,t=[br(t)]):r=8);e.children=t,e.shapeFlag|=r}function Cr(...e){const t={};for(let r=0;r<e.length;r++){const o=e[r];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=(0,n.C4)([t.class,o.class]));else if("style"===e)t.style=(0,n.Tr)([t.style,o.style]);else if((0,n.Mp)(e)){const r=t[e],i=o[e];!i||r===i||(0,n.cy)(r)&&r.includes(i)||(t[e]=r?[].concat(r,i):i)}else""!==e&&(t[e]=o[e])}return t}function _r(e,t,r,o=null){a(e,t,7,[r,o])}const xr=Ze();let Sr=0;function Ir(e,t,r){const i=e.type,a=(t?t.appContext:e.appContext)||xr,s={uid:Sr++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new o.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dt(i,a),emitsOptions:$t(i,a),emit:null,emitted:null,propsDefaults:n.MZ,inheritAttrs:i.inheritAttrs,ctx:n.MZ,data:n.MZ,props:n.MZ,attrs:n.MZ,slots:n.MZ,refs:n.MZ,setupState:n.MZ,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=jt.bind(null,s),e.ce&&e.ce(s),s}let Tr=null;const Er=()=>Tr||T;let Rr,Br;{const e=(0,n.We)(),t=(t,r)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(r),e=>{o.length>1?o.forEach((t=>t(e))):o[0](e)}};Rr=t("__VUE_INSTANCE_SETTERS__",(e=>Tr=e)),Br=t("__VUE_SSR_SETTERS__",(e=>Lr=e))}const Or=e=>{const t=Tr;return Rr(e),e.scope.on(),()=>{e.scope.off(),Rr(t)}},Ar=()=>{Tr&&Tr.scope.off(),Rr(null)};function Pr(e){return 4&e.vnode.shapeFlag}let Dr,Nr,Lr=!1;function Mr(e,t=!1,r=!1){t&&Br(t);const{props:o,children:n}=e.vnode,i=Pr(e);it(e,o,i,t),vt(e,n,r);const a=i?jr(e,t):void 0;return t&&Br(!1),a}function jr(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pe);const{setup:a}=r;if(a){const r=e.setupContext=a.length>1?Wr(e):null,c=Or(e);(0,o.C4)();const l=i(a,e,0,[e.props,r]);if((0,o.bl)(),c(),(0,n.yL)(l)){if(Q(e)||J(e),l.then(Ar,Ar),t)return l.then((r=>{$r(e,r,t)})).catch((t=>{s(t,e,0)}));e.asyncDep=l}else $r(e,l,t)}else Fr(e,t)}function $r(e,t,r){(0,n.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,n.Gv)(t)&&(e.setupState=(0,o.Pr)(t)),Fr(e,r)}function Fr(e,t,r){const i=e.type;if(!e.render){if(!t&&Dr&&!i.render){const t=i.template||Fe(e).template;if(t){0;const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:s}=i,c=(0,n.X$)((0,n.X$)({isCustomElement:r,delimiters:a},o),s);i.render=Dr(t,c)}}e.render=i.render||n.tE,Nr&&Nr(e)}{const t=Or(e);(0,o.C4)();try{Le(e)}finally{(0,o.bl)(),t()}}}const Ur={get(e,t){return(0,o.u4)(e,"get",""),e[t]}};function Wr(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Ur),slots:e.slots,emit:e.emit,expose:t}}function zr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,o.Pr)((0,o.IG)(e.exposed)),{get(t,r){return r in t?t[r]:r in Oe?Oe[r](e):void 0},has(e,t){return t in e||t in Oe}})):e.proxy}function Vr(e,t=!0){return(0,n.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Hr(e){return(0,n.Tn)(e)&&"__vccOpts"in e}const Kr=(e,t)=>{const r=(0,o.EW)(e,t,Lr);return r};function Gr(e,t,r){const o=arguments.length;return 2===o?(0,n.Gv)(t)&&!(0,n.cy)(t)?cr(t)?hr(e,null,[t]):hr(e,t):hr(e,null,t):(o>3?r=Array.prototype.slice.call(arguments,2):3===o&&cr(r)&&(r=[r]),hr(e,t,r))}const qr="3.5.8"},3751:(e,t,r)=>{r.d(t,{D$:()=>Me,Ef:()=>ze,F:()=>ge,Jo:()=>xe,eB:()=>k,hp:()=>Ae,jR:()=>$e});var o=r(641),n=r(33),i=r(953);
/**
* @vue/runtime-dom v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let a;const s="undefined"!==typeof window&&window.trustedTypes;if(s)try{a=s.createPolicy("vue",{createHTML:e=>e})}catch(Ke){}const c=a?e=>a.createHTML(e):e=>e,l="http://www.w3.org/2000/svg",d="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,f=u&&u.createElement("template"),h={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,o)=>{const n="svg"===t?u.createElementNS(l,e):"mathml"===t?u.createElementNS(d,e):r?u.createElement(e,{is:r}):u.createElement(e);return"select"===e&&o&&null!=o.multiple&&n.setAttribute("multiple",o.multiple),n},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,o,n,i){const a=r?r.previousSibling:t.lastChild;if(n&&(n===i||n.nextSibling)){while(1)if(t.insertBefore(n.cloneNode(!0),r),n===i||!(n=n.nextSibling))break}else{f.innerHTML=c("svg"===o?`<svg>${e}</svg>`:"mathml"===o?`<math>${e}</math>`:e);const n=f.content;if("svg"===o||"mathml"===o){const e=n.firstChild;while(e.firstChild)n.appendChild(e.firstChild);n.removeChild(e)}t.insertBefore(n,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},p="transition",g="animation",m=Symbol("_vtc"),b={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},v=(0,n.X$)({},o.QP,b),y=e=>(e.displayName="Transition",e.props=v,e),k=y(((e,{slots:t})=>(0,o.h)(o.pR,_(e),t))),w=(e,t=[])=>{(0,n.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},C=e=>!!e&&((0,n.cy)(e)?e.some((e=>e.length>1)):e.length>1);function _(e){const t={};for(const n in e)n in b||(t[n]=e[n]);if(!1===e.css)return t;const{name:r="v",type:o,duration:i,enterFromClass:a=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:c=`${r}-enter-to`,appearFromClass:l=a,appearActiveClass:d=s,appearToClass:u=c,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:h=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,g=x(i),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:k,onEnterCancelled:_,onLeave:S,onLeaveCancelled:R,onBeforeAppear:O=y,onAppear:A=k,onAppearCancelled:P=_}=t,N=(e,t,r)=>{T(e,t?u:c),T(e,t?d:s),r&&r()},L=(e,t)=>{e._isLeaving=!1,T(e,f),T(e,p),T(e,h),t&&t()},M=e=>(t,r)=>{const n=e?A:k,i=()=>N(t,e,r);w(n,[t,i]),E((()=>{T(t,e?l:a),I(t,e?u:c),C(n)||B(t,o,m,i)}))};return(0,n.X$)(t,{onBeforeEnter(e){w(y,[e]),I(e,a),I(e,s)},onBeforeAppear(e){w(O,[e]),I(e,l),I(e,d)},onEnter:M(!1),onAppear:M(!0),onLeave(e,t){e._isLeaving=!0;const r=()=>L(e,t);I(e,f),I(e,h),D(),E((()=>{e._isLeaving&&(T(e,f),I(e,p),C(S)||B(e,o,v,r))})),w(S,[e,r])},onEnterCancelled(e){N(e,!1),w(_,[e])},onAppearCancelled(e){N(e,!0),w(P,[e])},onLeaveCancelled(e){L(e),w(R,[e])}})}function x(e){if(null==e)return null;if((0,n.Gv)(e))return[S(e.enter),S(e.leave)];{const t=S(e);return[t,t]}}function S(e){const t=(0,n.Ro)(e);return t}function I(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[m]||(e[m]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const r=e[m];r&&(r.delete(t),r.size||(e[m]=void 0))}function E(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let R=0;function B(e,t,r,o){const n=e._endId=++R,i=()=>{n===e._endId&&o()};if(null!=r)return setTimeout(i,r);const{type:a,timeout:s,propCount:c}=O(e,t);if(!a)return o();const l=a+"end";let d=0;const u=()=>{e.removeEventListener(l,f),i()},f=t=>{t.target===e&&++d>=c&&u()};setTimeout((()=>{d<c&&u()}),s+1),e.addEventListener(l,f)}function O(e,t){const r=window.getComputedStyle(e),o=e=>(r[e]||"").split(", "),n=o(`${p}Delay`),i=o(`${p}Duration`),a=A(n,i),s=o(`${g}Delay`),c=o(`${g}Duration`),l=A(s,c);let d=null,u=0,f=0;t===p?a>0&&(d=p,u=a,f=i.length):t===g?l>0&&(d=g,u=l,f=c.length):(u=Math.max(a,l),d=u>0?a>l?p:g:null,f=d?d===p?i.length:c.length:0);const h=d===p&&/\b(transform|all)(,|$)/.test(o(`${p}Property`).toString());return{type:d,timeout:u,propCount:f,hasTransform:h}}function A(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,r)=>P(t)+P(e[r]))))}function P(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function D(){return document.body.offsetHeight}function N(e,t,r){const o=e[m];o&&(t=(t?[t,...o]:[...o]).join(" ")),null==t?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const L=Symbol("_vod"),M=Symbol("_vsh");const j=Symbol("");const $=/(^|;)\s*display\s*:/;function F(e,t,r){const o=e.style,i=(0,n.Kg)(r);let a=!1;if(r&&!i){if(t)if((0,n.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==r[t]&&W(o,t,"")}else for(const e in t)null==r[e]&&W(o,e,"");for(const e in r)"display"===e&&(a=!0),W(o,e,r[e])}else if(i){if(t!==r){const e=o[j];e&&(r+=";"+e),o.cssText=r,a=$.test(r)}}else t&&e.removeAttribute("style");L in e&&(e[L]=a?o.display:"",e[M]&&(o.display="none"))}const U=/\s*!important$/;function W(e,t,r){if((0,n.cy)(r))r.forEach((r=>W(e,t,r)));else if(null==r&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const o=H(e,t);U.test(r)?e.setProperty((0,n.Tg)(o),r.replace(U,""),"important"):e[o]=r}}const z=["Webkit","Moz","ms"],V={};function H(e,t){const r=V[t];if(r)return r;let o=(0,n.PT)(t);if("filter"!==o&&o in e)return V[t]=o;o=(0,n.ZH)(o);for(let n=0;n<z.length;n++){const r=z[n]+o;if(r in e)return V[t]=r}return t}const K="http://www.w3.org/1999/xlink";function G(e,t,r,o,i,a=(0,n.J$)(t)){o&&t.startsWith("xlink:")?null==r?e.removeAttributeNS(K,t.slice(6,t.length)):e.setAttributeNS(K,t,r):null==r||a&&!(0,n.Y2)(r)?e.removeAttribute(t):e.setAttribute(t,a?"":(0,n.Bm)(r)?String(r):r)}function q(e,t,r,o){if("innerHTML"===t||"textContent"===t)return void(null!=r&&(e[t]="innerHTML"===t?c(r):r));const i=e.tagName;if("value"===t&&"PROGRESS"!==i&&!i.includes("-")){const o="OPTION"===i?e.getAttribute("value")||"":e.value,n=null==r?"checkbox"===e.type?"on":"":String(r);return o===n&&"_value"in e||(e.value=n),null==r&&e.removeAttribute(t),void(e._value=r)}let a=!1;if(""===r||null==r){const o=typeof e[t];"boolean"===o?r=(0,n.Y2)(r):null==r&&"string"===o?(r="",a=!0):"number"===o&&(r=0,a=!0)}try{e[t]=r}catch(Ke){0}a&&e.removeAttribute(t)}function X(e,t,r,o){e.addEventListener(t,r,o)}function Z(e,t,r,o){e.removeEventListener(t,r,o)}const J=Symbol("_vei");function Y(e,t,r,o,n=null){const i=e[J]||(e[J]={}),a=i[t];if(o&&a)a.value=o;else{const[r,s]=ee(t);if(o){const a=i[t]=ne(o,n);X(e,r,a,s)}else a&&(Z(e,r,a,s),i[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function ee(e){let t;if(Q.test(e)){let r;t={};while(r=e.match(Q))e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}const r=":"===e[2]?e.slice(3):(0,n.Tg)(e.slice(2));return[r,t]}let te=0;const re=Promise.resolve(),oe=()=>te||(re.then((()=>te=0)),te=Date.now());function ne(e,t){const r=e=>{if(e._vts){if(e._vts<=r.attached)return}else e._vts=Date.now();(0,o.qL)(ie(e,r.value),t,5,[e])};return r.value=e,r.attached=oe(),r}function ie(e,t){if((0,n.cy)(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ae=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,se=(e,t,r,o,i,a)=>{const s="svg"===i;"class"===t?N(e,o,s):"style"===t?F(e,r,o):(0,n.Mp)(t)?(0,n.CP)(t)||Y(e,t,r,o,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ce(e,t,o,s))?(q(e,t,o),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||G(e,t,o,s,a,"value"!==t)):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),G(e,t,o,s))};function ce(e,t,r,o){if(o)return"innerHTML"===t||"textContent"===t||!!(t in e&&ae(t)&&(0,n.Tn)(r));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ae(t)||!(0,n.Kg)(r))&&(t in e||!(!e._isVueCE||!/[A-Z]/.test(t)&&(0,n.Kg)(r)))}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const le=new WeakMap,de=new WeakMap,ue=Symbol("_moveCb"),fe=Symbol("_enterCb"),he=e=>(delete e.props.mode,e),pe=he({name:"TransitionGroup",props:(0,n.X$)({},v,{tag:String,moveClass:String}),setup(e,{slots:t}){const r=(0,o.nI)(),n=(0,o.Gy)();let a,s;return(0,o.$u)((()=>{if(!a.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ye(a[0].el,r.vnode.el,t))return;a.forEach(me),a.forEach(be);const o=a.filter(ve);D(),o.forEach((e=>{const r=e.el,o=r.style;I(r,t),o.transform=o.webkitTransform=o.transitionDuration="";const n=r[ue]=e=>{e&&e.target!==r||e&&!/transform$/.test(e.propertyName)||(r.removeEventListener("transitionend",n),r[ue]=null,T(r,t))};r.addEventListener("transitionend",n)}))})),()=>{const c=(0,i.ux)(e),l=_(c);let d=c.tag||o.FK;if(a=[],s)for(let e=0;e<s.length;e++){const t=s[e];t.el&&t.el instanceof Element&&(a.push(t),(0,o.MZ)(t,(0,o.OW)(t,l,n,r)),le.set(t,t.el.getBoundingClientRect()))}s=t.default?(0,o.Df)(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&(0,o.MZ)(t,(0,o.OW)(t,l,n,r))}return(0,o.bF)(d,null,s)}}}),ge=pe;function me(e){const t=e.el;t[ue]&&t[ue](),t[fe]&&t[fe]()}function be(e){de.set(e,e.el.getBoundingClientRect())}function ve(e){const t=le.get(e),r=de.get(e),o=t.left-r.left,n=t.top-r.top;if(o||n){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${n}px)`,t.transitionDuration="0s",e}}function ye(e,t,r){const o=e.cloneNode(),n=e[m];n&&n.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)))})),r.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(o);const{hasTransform:a}=O(o);return i.removeChild(o),a}const ke=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,n.cy)(t)?e=>(0,n.DY)(t,e):t};function we(e){e.target.composing=!0}function Ce(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _e=Symbol("_assign"),xe={created(e,{modifiers:{lazy:t,trim:r,number:o}},i){e[_e]=ke(i);const a=o||i.props&&"number"===i.props.type;X(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;r&&(o=o.trim()),a&&(o=(0,n.bB)(o)),e[_e](o)})),r&&X(e,"change",(()=>{e.value=e.value.trim()})),t||(X(e,"compositionstart",we),X(e,"compositionend",Ce),X(e,"change",Ce))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:o,trim:i,number:a}},s){if(e[_e]=ke(s),e.composing)return;const c=!a&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,n.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(o&&t===r)return;if(i&&e.value.trim()===l)return}e.value=l}}},Se={deep:!0,created(e,t,r){e[_e]=ke(r),X(e,"change",(()=>{const t=e._modelValue,r=Be(e),o=e.checked,i=e[_e];if((0,n.cy)(t)){const e=(0,n.u3)(t,r),a=-1!==e;if(o&&!a)i(t.concat(r));else if(!o&&a){const r=[...t];r.splice(e,1),i(r)}}else if((0,n.vM)(t)){const e=new Set(t);o?e.add(r):e.delete(r),i(e)}else i(Oe(e,o))}))},mounted:Ie,beforeUpdate(e,t,r){e[_e]=ke(r),Ie(e,t,r)}};function Ie(e,{value:t,oldValue:r},o){let i;e._modelValue=t,i=(0,n.cy)(t)?(0,n.u3)(t,o.props.value)>-1:(0,n.vM)(t)?t.has(o.props.value):(0,n.BX)(t,Oe(e,!0)),e.checked!==i&&(e.checked=i)}const Te={created(e,{value:t},r){e.checked=(0,n.BX)(t,r.props.value),e[_e]=ke(r),X(e,"change",(()=>{e[_e](Be(e))}))},beforeUpdate(e,{value:t,oldValue:r},o){e[_e]=ke(o),t!==r&&(e.checked=(0,n.BX)(t,o.props.value))}},Ee={deep:!0,created(e,{value:t,modifiers:{number:r}},i){const a=(0,n.vM)(t);X(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>r?(0,n.bB)(Be(e)):Be(e)));e[_e](e.multiple?a?new Set(t):t:t[0]),e._assigning=!0,(0,o.dY)((()=>{e._assigning=!1}))})),e[_e]=ke(i)},mounted(e,{value:t,modifiers:{number:r}}){Re(e,t)},beforeUpdate(e,t,r){e[_e]=ke(r)},updated(e,{value:t,modifiers:{number:r}}){e._assigning||Re(e,t)}};function Re(e,t,r){const o=e.multiple,i=(0,n.cy)(t);if(!o||i||(0,n.vM)(t)){for(let r=0,a=e.options.length;r<a;r++){const a=e.options[r],s=Be(a);if(o)if(i){const e=typeof s;a.selected="string"===e||"number"===e?t.some((e=>String(e)===String(s))):(0,n.u3)(t,s)>-1}else a.selected=t.has(s);else if((0,n.BX)(Be(a),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}o||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Be(e){return"_value"in e?e._value:e.value}function Oe(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const Ae={created(e,t,r){De(e,t,r,null,"created")},mounted(e,t,r){De(e,t,r,null,"mounted")},beforeUpdate(e,t,r,o){De(e,t,r,o,"beforeUpdate")},updated(e,t,r,o){De(e,t,r,o,"updated")}};function Pe(e,t){switch(e){case"SELECT":return Ee;case"TEXTAREA":return xe;default:switch(t){case"checkbox":return Se;case"radio":return Te;default:return xe}}}function De(e,t,r,o,n){const i=Pe(e.tagName,r.props&&r.props.type),a=i[n];a&&a(e,t,r,o)}const Ne=["ctrl","shift","alt","meta"],Le={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ne.some((r=>e[`${r}Key`]&&!t.includes(r)))},Me=(e,t)=>{const r=e._withMods||(e._withMods={}),o=t.join(".");return r[o]||(r[o]=(r,...o)=>{for(let e=0;e<t.length;e++){const o=Le[t[e]];if(o&&o(r,t))return}return e(r,...o)})},je={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$e=(e,t)=>{const r=e._withKeys||(e._withKeys={}),o=t.join(".");return r[o]||(r[o]=r=>{if(!("key"in r))return;const o=(0,n.Tg)(r.key);return t.some((e=>e===o||je[e]===o))?e(r):void 0})},Fe=(0,n.X$)({patchProp:se},h);let Ue;function We(){return Ue||(Ue=(0,o.K9)(Fe))}const ze=(...e)=>{const t=We().createApp(...e);const{mount:r}=t;return t.mount=e=>{const o=He(e);if(!o)return;const i=t._component;(0,n.Tn)(i)||i.render||i.template||(i.template=o.innerHTML),1===o.nodeType&&(o.textContent="");const a=r(o,!1,Ve(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function Ve(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function He(e){if((0,n.Kg)(e)){const t=document.querySelector(e);return t}return e}},33:(e,t,r)=>{
/**
* @vue/shared v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function o(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return e=>e in t}r.d(t,{$3:()=>h,$H:()=>M,BH:()=>H,BX:()=>oe,Bm:()=>w,C4:()=>J,CE:()=>g,CP:()=>l,DY:()=>j,Gv:()=>C,J$:()=>ee,Kg:()=>k,MZ:()=>n,Mp:()=>c,NO:()=>s,Oj:()=>i,PT:()=>A,Qd:()=>T,Ro:()=>U,SU:()=>R,TF:()=>u,Tg:()=>D,Tn:()=>y,Tr:()=>K,We:()=>z,X$:()=>d,Y2:()=>te,ZH:()=>N,Zf:()=>I,_B:()=>Y,bB:()=>F,cy:()=>p,gd:()=>v,pD:()=>o,rU:()=>L,tE:()=>a,u3:()=>ne,vM:()=>m,v_:()=>ae,yI:()=>E,yL:()=>_,yQ:()=>$});const n={},i=[],a=()=>{},s=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),d=Object.assign,u=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},f=Object.prototype.hasOwnProperty,h=(e,t)=>f.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),b=e=>"[object Date]"===S(e),v=e=>"[object RegExp]"===S(e),y=e=>"function"===typeof e,k=e=>"string"===typeof e,w=e=>"symbol"===typeof e,C=e=>null!==e&&"object"===typeof e,_=e=>(C(e)||y(e))&&y(e.then)&&y(e.catch),x=Object.prototype.toString,S=e=>x.call(e),I=e=>S(e).slice(8,-1),T=e=>"[object Object]"===S(e),E=e=>k(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),B=e=>{const t=Object.create(null);return r=>{const o=t[r];return o||(t[r]=e(r))}},O=/-(\w)/g,A=B((e=>e.replace(O,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,D=B((e=>e.replace(P,"-$1").toLowerCase())),N=B((e=>e.charAt(0).toUpperCase()+e.slice(1))),L=B((e=>{const t=e?`on${N(e)}`:"";return t})),M=(e,t)=>!Object.is(e,t),j=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},$=(e,t,r,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:r})},F=e=>{const t=parseFloat(e);return isNaN(t)?e:t},U=e=>{const t=k(e)?Number(e):NaN;return isNaN(t)?e:t};let W;const z=()=>W||(W="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{});const V="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",H=o(V);function K(e){if(p(e)){const t={};for(let r=0;r<e.length;r++){const o=e[r],n=k(o)?Z(o):K(o);if(n)for(const e in n)t[e]=n[e]}return t}if(k(e)||C(e))return e}const G=/;(?![^(]*\))/g,q=/:([^]+)/,X=/\/\*[^]*?\*\//g;function Z(e){const t={};return e.replace(X,"").split(G).forEach((e=>{if(e){const r=e.split(q);r.length>1&&(t[r[0].trim()]=r[1].trim())}})),t}function J(e){let t="";if(k(e))t=e;else if(p(e))for(let r=0;r<e.length;r++){const o=J(e[r]);o&&(t+=o+" ")}else if(C(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function Y(e){if(!e)return null;let{class:t,style:r}=e;return t&&!k(t)&&(e.class=J(t)),r&&(e.style=K(r)),e}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=o(Q);function te(e){return!!e||""===e}function re(e,t){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=oe(e[o],t[o]);return r}function oe(e,t){if(e===t)return!0;let r=b(e),o=b(t);if(r||o)return!(!r||!o)&&e.getTime()===t.getTime();if(r=w(e),o=w(t),r||o)return e===t;if(r=p(e),o=p(t),r||o)return!(!r||!o)&&re(e,t);if(r=C(e),o=C(t),r||o){if(!r||!o)return!1;const n=Object.keys(e).length,i=Object.keys(t).length;if(n!==i)return!1;for(const r in e){const o=e.hasOwnProperty(r),n=t.hasOwnProperty(r);if(o&&!n||!o&&n||!oe(e[r],t[r]))return!1}}return String(e)===String(t)}function ne(e,t){return e.findIndex((e=>oe(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),ae=e=>k(e)?e:null==e?"":p(e)||C(e)&&(e.toString===x||!y(e.toString))?ie(e)?ae(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>ie(t)?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,r],o)=>(e[ce(t,o)+" =>"]=r,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ce(e)))}:w(t)?ce(t):!C(t)||p(t)||T(t)?t:String(t),ce=(e,t="")=>{var r;return w(e)?`Symbol(${null!=(r=e.description)?r:t})`:e}},6262:(e,t)=>{t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r}},9928:(e,t,r)=>{r.d(t,{MF:()=>ge,j6:()=>ue,om:()=>de,Sx:()=>be,Wp:()=>me,KO:()=>ve});var o=r(5125),n=r(3424),i=r(6743);const a=(e,t)=>t.some((t=>e instanceof t));let s,c;function l(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,r)=>{const o=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{t(C(e.result)),o()},i=()=>{r(e.error),o()};e.addEventListener("success",n),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&u.set(t,e)})).catch((()=>{})),g.set(t,e),t}function b(e){if(f.has(e))return;const t=new Promise(((t,r)=>{const o=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{t(),o()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)}));f.set(e,t)}let v={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return C(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function k(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?d().includes(e)?function(...t){return e.apply(_(this),t),C(u.get(this))}:function(...t){return C(e.apply(_(this),t))}:function(t,...r){const o=e.call(_(this),t,...r);return h.set(o,t.sort?t.sort():[t]),C(o)}}function w(e){return"function"===typeof e?k(e):(e instanceof IDBTransaction&&b(e),a(e,l())?new Proxy(e,v):e)}function C(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const _=e=>g.get(e);function x(e,t,{blocked:r,upgrade:o,blocking:n,terminated:i}={}){const a=indexedDB.open(e,t),s=C(a);return o&&a.addEventListener("upgradeneeded",(e=>{o(C(a.result),e.oldVersion,e.newVersion,C(a.transaction),e)})),r&&a.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),n&&e.addEventListener("versionchange",(e=>n(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],T=new Map;function E(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const r=t.replace(/FromIndex$/,""),o=t!==r,n=I.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!n&&!S.includes(r))return;const i=async function(e,...t){const i=this.transaction(e,n?"readwrite":"readonly");let a=i.store;return o&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),n&&i.done]))[0]};return T.set(t,i),i}y((e=>({...e,get:(t,r,o)=>E(t,r)||e.get(t,r,o),has:(t,r)=>!!E(t,r)||e.has(t,r)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(B(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function B(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",A="0.9.13",P=new n.Vy("@firebase/app"),D="@firebase/app-compat",N="@firebase/analytics-compat",L="@firebase/analytics",M="@firebase/app-check-compat",j="@firebase/app-check",$="@firebase/auth",F="@firebase/auth-compat",U="@firebase/database",W="@firebase/database-compat",z="@firebase/functions",V="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",q="@firebase/messaging-compat",X="@firebase/performance",Z="@firebase/performance-compat",J="@firebase/remote-config",Y="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",re="@firebase/firestore-compat",oe="firebase",ne="9.23.0",ie="[DEFAULT]",ae={[O]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[N]:"fire-analytics-compat",[j]:"fire-app-check",[M]:"fire-app-check-compat",[$]:"fire-auth",[F]:"fire-auth-compat",[U]:"fire-rtdb",[W]:"fire-rtdb-compat",[z]:"fire-fn",[V]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[q]:"fire-fcm-compat",[X]:"fire-perf",[Z]:"fire-perf-compat",[J]:"fire-rc",[Y]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[re]:"fire-fst-compat","fire-js":"fire-js",[oe]:"fire-js-all"},se=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(r){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function de(e){const t=e.name;if(ce.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const r of se.values())le(r,e);return!0}function ue(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new i.FA("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=ne;function me(e,t={}){let r=e;if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!==typeof a||!a)throw he.create("bad-app-name",{appName:String(a)});if(r||(r=(0,i.T9)()),!r)throw he.create("no-options");const s=se.get(a);if(s){if((0,i.bD)(r,s.options)&&(0,i.bD)(n,s.config))return s;throw he.create("duplicate-app",{appName:a})}const c=new o.h1(a);for(const o of ce.values())c.addComponent(o);const l=new pe(r,n,c);return se.set(a,l),l}function be(e=ie){const t=se.get(e);if(!t&&e===ie&&(0,i.T9)())return me();if(!t)throw he.create("no-app",{appName:e});return t}function ve(e,t,r){var n;let i=null!==(n=ae[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}de(new o.uA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye="firebase-heartbeat-database",ke=1,we="firebase-heartbeat-store";let Ce=null;function _e(){return Ce||(Ce=x(ye,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw he.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function xe(e){try{const t=await _e(),r=await t.transaction(we).objectStore(we).get(Ie(e));return r}catch(t){if(t instanceof i.g)P.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});P.warn(e.message)}}}async function Se(e,t){try{const r=await _e(),o=r.transaction(we,"readwrite"),n=o.objectStore(we);await n.put(t,Ie(e)),await o.done}catch(r){if(r instanceof i.g)P.warn(r.message);else{const e=he.create("idb-set",{originalErrorMessage:null===r||void 0===r?void 0:r.message});P.warn(e.message)}}}function Ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=1024,Ee=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ae(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=Be();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),r=Date.now();return r-t<=Ee})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Be(),{heartbeatsToSend:t,unsentEntries:r}=Oe(this._heartbeatsCache.heartbeats),o=(0,i.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Be(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=Te){const r=[];let o=e.slice();for(const n of e){const e=r.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),Pe(r)>t){e.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),Pe(r)>t){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class Ae{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await xe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function Pe(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){de(new o.uA("platform-logger",(e=>new R(e)),"PRIVATE")),de(new o.uA("heartbeat",(e=>new Re(e)),"PRIVATE")),ve(O,A,e),ve(O,A,"esm2017"),ve("fire-js","")}De("")},5125:(e,t,r)=>{r.d(t,{h1:()=>l,uA:()=>n});var o=r(6743);class n{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new o.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(r){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),o=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(o)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(o)return null;throw n}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:o});r.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[n,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(n);r===e&&i.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),n=null!==(r=this.onInitCallbacks.get(o))&&void 0!==r?r:new Set;n.add(e),this.onInitCallbacks.set(o,n);const i=this.instances.get(o);return i&&e(i,o),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(o){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(o){}return r||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:(e,t,r)=>{r.d(t,{$b:()=>n,Vy:()=>l});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=[];var n;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(n||(n={}));const i={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,s={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},c=(e,t,...r)=>{if(t<e.logLevel)return;const o=(new Date).toISOString(),n=s[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[n](`[${o}]  ${e.name}:`,...r)};class l{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},9998:(e,t,r)=>{r.d(t,{A:()=>ze});var o={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},n={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},i={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.background}",offset:"-1rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem"},xl:{width:"4rem",height:"4rem",fontSize:"2rem"}},a={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},s={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{red.400}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.700}",hoverBorderColor:"{surface.600}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{red.300}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},c={root:{borderRadius:"{content.border.radius}"}},l={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},d={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},u={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},f={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},h={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}}},p={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}"}},g={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},m={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},b={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},v={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},y={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},k={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPointColor:"{primary.color}",columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},w={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},C={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0",fontWeight:"500",gap:"0.5rem"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},_={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},x={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},S={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},I={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"}},T={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},E={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},R={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},B={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},O={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},mask:{background:"{mask.background}",color:"{mask.color}"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},A={icon:{color:"{form.field.icon.color}"}},P={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},D={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},N={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},L={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},M={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},j={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},$={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},F={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},U={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"}}},W={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},z={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},V={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"0"},horizontalOrientation:{padding:"0.5rem 0.75rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.muted.hover.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},H={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},K={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.muted.hover.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},G={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem"},text:{fontSize:"1rem",fontWeight:"500"},icon:{size:"1.125rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},q={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},X={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},Z={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},J={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},Y={root:{outline:{width:"2px",color:"{content.background}"}}},Q={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},ee={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},te={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},re={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},oe={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},ne={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},ie={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},ae={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},se={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}"}},ce={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},le={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},de={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},ue={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},fe={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},he={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},pe={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},ge={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},me={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},be={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},ve={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0 0 0 1rem"}},ye={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},ke={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},we={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},Ce={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},_e={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},xe={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},Se={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"}},Ie={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},Te={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},Ee={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},Re={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},Be={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s",disabledBackground:"{form.field.disabled.background}"},handle:{borderRadius:"50%",size:"1rem",disabledBackground:"{form.field.disabled.color}"},colorScheme:{light:{root:{background:"{surface.300}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},Oe={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},Ae={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},Pe={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"}},De={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},Ne={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},Le={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function Me(e){return Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(e)}function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){Fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Fe(e,t,r){return(t=Ue(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ue(e){var t=We(e,"string");return"symbol"==Me(t)?t:t+""}function We(e,t){if("object"!=Me(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=Me(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var ze=$e($e({},s),{},{components:{accordion:o,autocomplete:n,avatar:i,badge:a,blockui:c,breadcrumb:l,button:d,datepicker:C,card:u,carousel:f,cascadeselect:h,checkbox:p,chip:g,colorpicker:m,confirmdialog:b,confirmpopup:v,contextmenu:y,dataview:w,datatable:k,dialog:_,divider:x,dock:S,drawer:I,editor:T,fieldset:E,fileupload:R,iftalabel:P,floatlabel:B,galleria:O,iconfield:A,image:D,imagecompare:N,inlinemessage:L,inplace:M,inputchips:j,inputgroup:$,inputnumber:F,inputtext:U,knob:W,listbox:z,megamenu:V,menu:H,menubar:K,message:G,metergroup:q,multiselect:X,orderlist:Z,organizationchart:J,overlaybadge:Y,popover:ne,paginator:Q,password:re,panel:ee,panelmenu:te,picklist:oe,progressbar:ie,progressspinner:ae,radiobutton:se,rating:ce,scrollpanel:de,select:ue,selectbutton:fe,skeleton:he,slider:pe,speeddial:ge,splitter:be,splitbutton:me,stepper:ve,steps:ye,tabmenu:ke,tabs:we,tabview:Ce,textarea:Se,tieredmenu:Ie,tag:_e,terminal:xe,timeline:Te,togglebutton:Re,toggleswitch:Be,tree:Pe,treeselect:De,treetable:Ne,toast:Ee,toolbar:Oe,virtualscroller:Le},directives:{tooltip:Ae,ripple:le}})},8210:(e,t,r)=>{var o=r(9928),n=r(3424),i=r(6743),a=r(5125);const s=(e,t)=>t.some((t=>e instanceof t));let c,l;function d(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,h=new WeakMap,p=new WeakMap,g=new WeakMap,m=new WeakMap;function b(e){const t=new Promise(((t,r)=>{const o=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{t(_(e.result)),o()},i=()=>{r(e.error),o()};e.addEventListener("success",n),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(h.has(e))return;const t=new Promise(((t,r)=>{const o=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{t(),o()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,t)}let y={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return _(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function k(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(x(this),t),_(f.get(this))}:function(...t){return _(e.apply(x(this),t))}:function(t,...r){const o=e.call(x(this),t,...r);return p.set(o,t.sort?t.sort():[t]),_(o)}}function C(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,d())?new Proxy(e,y):e)}function _(e){if(e instanceof IDBRequest)return b(e);if(g.has(e))return g.get(e);const t=C(e);return t!==e&&(g.set(e,t),m.set(t,e)),t}const x=e=>m.get(e);function S(e,t,{blocked:r,upgrade:o,blocking:n,terminated:i}={}){const a=indexedDB.open(e,t),s=_(a);return o&&a.addEventListener("upgradeneeded",(e=>{o(_(a.result),e.oldVersion,e.newVersion,_(a.transaction))})),r&&a.addEventListener("blocked",(()=>r())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),s}const I=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],E=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(E.get(t))return E.get(t);const r=t.replace(/FromIndex$/,""),o=t!==r,n=T.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!n&&!I.includes(r))return;const i=async function(e,...t){const i=this.transaction(e,n?"readwrite":"readonly");let a=i.store;return o&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),n&&i.done]))[0]};return E.set(t,i),i}k((e=>({...e,get:(t,r,o)=>R(t,r)||e.get(t,r,o),has:(t,r)=>!!R(t,r)||e.has(t,r)})));const B="@firebase/installations",O="0.6.4",A=1e4,P=`w:${O}`,D="FIS_v2",N="https://firebaseinstallations.googleapis.com/v1",L=36e5,M="installations",j="Installations",$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},F=new i.FA(M,j,$);function U(e){return e instanceof i.g&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W({projectId:e}){return`${N}/projects/${e}/installations`}function z(e){return{token:e.token,requestStatus:2,expiresIn:q(e.expiresIn),creationTime:Date.now()}}async function V(e,t){const r=await t.json(),o=r.error;return F.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function H({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function K(e,{refreshToken:t}){const r=H(e);return r.append("Authorization",X(t)),r}async function G(e){const t=await e();return t.status>=500&&t.status<600?e():t}function q(e){return Number(e.replace("s","000"))}function X(e){return`${D} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const o=W(e),n=H(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}const a={fid:r,authVersion:D,appId:e.appId,sdkVersion:P},s={method:"POST",headers:n,body:JSON.stringify(a)},c=await G((()=>fetch(o,s)));if(c.ok){const e=await c.json(),t={fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:z(e.authToken)};return t}throw await V("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=/^[cdef][\w-]{21}$/,ee="";function te(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const r=re(e);return Q.test(r)?r:ee}catch(e){return ee}}function re(e){const t=Y(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Map;function ie(e,t){const r=oe(e);ae(r,t),se(r,t)}function ae(e,t){const r=ne.get(e);if(r)for(const o of r)o(t)}function se(e,t){const r=le();r&&r.postMessage({key:e,fid:t}),de()}let ce=null;function le(){return!ce&&"BroadcastChannel"in self&&(ce=new BroadcastChannel("[Firebase] FID Change"),ce.onmessage=e=>{ae(e.data.key,e.data.fid)}),ce}function de(){0===ne.size&&ce&&(ce.close(),ce=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="firebase-installations-database",fe=1,he="firebase-installations-store";let pe=null;function ge(){return pe||(pe=S(ue,fe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(he)}}})),pe}async function me(e,t){const r=oe(e),o=await ge(),n=o.transaction(he,"readwrite"),i=n.objectStore(he),a=await i.get(r);return await i.put(t,r),await n.done,a&&a.fid===t.fid||ie(e,t.fid),t}async function be(e){const t=oe(e),r=await ge(),o=r.transaction(he,"readwrite");await o.objectStore(he).delete(t),await o.done}async function ve(e,t){const r=oe(e),o=await ge(),n=o.transaction(he,"readwrite"),i=n.objectStore(he),a=await i.get(r),s=t(a);return void 0===s?await i.delete(r):await i.put(s,r),await n.done,!s||a&&a.fid===s.fid||ie(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ye(e){let t;const r=await ve(e.appConfig,(r=>{const o=ke(r),n=we(e,o);return t=n.registrationPromise,n.installationEntry}));return r.fid===ee?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}function ke(e){const t=e||{fid:te(),registrationStatus:0};return Se(t)}function we(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(F.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=Ce(e,r);return{installationEntry:r,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:_e(e)}:{installationEntry:t}}async function Ce(e,t){try{const r=await Z(e,t);return me(e.appConfig,r)}catch(r){throw U(r)&&409===r.customData.serverCode?await be(e.appConfig):await me(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function _e(e){let t=await xe(e.appConfig);while(1===t.registrationStatus)await J(100),t=await xe(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:r}=await ye(e);return r||t}return t}function xe(e){return ve(e,(e=>{if(!e)throw F.create("installation-not-found");return Se(e)}))}function Se(e){return Ie(e)?{fid:e.fid,registrationStatus:0}:e}function Ie(e){return 1===e.registrationStatus&&e.registrationTime+A<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te({appConfig:e,heartbeatServiceProvider:t},r){const o=Ee(e,r),n=K(e,r),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}const a={installation:{sdkVersion:P,appId:e.appId}},s={method:"POST",headers:n,body:JSON.stringify(a)},c=await G((()=>fetch(o,s)));if(c.ok){const e=await c.json(),t=z(e);return t}throw await V("Generate Auth Token",c)}function Ee(e,{fid:t}){return`${W(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t=!1){let r;const o=await ve(e.appConfig,(o=>{if(!Pe(o))throw F.create("not-registered");const n=o.authToken;if(!t&&De(n))return o;if(1===n.requestStatus)return r=Be(e,t),o;{if(!navigator.onLine)throw F.create("app-offline");const t=Le(o);return r=Ae(e,t),t}})),n=r?await r:o.authToken;return n}async function Be(e,t){let r=await Oe(e.appConfig);while(1===r.authToken.requestStatus)await J(100),r=await Oe(e.appConfig);const o=r.authToken;return 0===o.requestStatus?Re(e,t):o}function Oe(e){return ve(e,(e=>{if(!Pe(e))throw F.create("not-registered");const t=e.authToken;return Me(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Ae(e,t){try{const r=await Te(e,t),o=Object.assign(Object.assign({},t),{authToken:r});return await me(e.appConfig,o),r}catch(r){if(!U(r)||401!==r.customData.serverCode&&404!==r.customData.serverCode){const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await me(e.appConfig,r)}else await be(e.appConfig);throw r}}function Pe(e){return void 0!==e&&2===e.registrationStatus}function De(e){return 2===e.requestStatus&&!Ne(e)}function Ne(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+L}function Le(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Me(e){return 1===e.requestStatus&&e.requestTime+A<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e){const t=e,{installationEntry:r,registrationPromise:o}=await ye(t);return o?o.catch(console.error):Re(t).catch(console.error),r.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t=!1){const r=e;await Fe(r);const o=await Re(r,t);return o.token}async function Fe(e){const{registrationPromise:t}=await ye(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(e){if(!e||!e.options)throw We("App Configuration");if(!e.name)throw We("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw We(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function We(e){return F.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="installations",Ve="installations-internal",He=e=>{const t=e.getProvider("app").getImmediate(),r=Ue(t),n=(0,o.j6)(t,"heartbeat"),i={app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()};return i},Ke=e=>{const t=e.getProvider("app").getImmediate(),r=(0,o.j6)(t,ze).getImmediate(),n={getId:()=>je(r),getToken:e=>$e(r,e)};return n};function Ge(){(0,o.om)(new a.uA(ze,He,"PUBLIC")),(0,o.om)(new a.uA(Ve,Ke,"PRIVATE"))}Ge(),(0,o.KO)(B,O),(0,o.KO)(B,O,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe="analytics",Xe="firebase_id",Ze="origin",Je=6e4,Ye="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qe="https://www.googletagmanager.com/gtag/js",et=new n.Vy("@firebase/analytics"),tt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rt=new i.FA("analytics","Analytics",tt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(e){if(!e.startsWith(Qe)){const t=rt.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function nt(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function it(e,t){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(e,t)),r}function at(e,t){const r=it("firebase-js-sdk-policy",{createScriptURL:ot}),o=document.createElement("script"),n=`${Qe}?l=${e}&id=${t}`;o.src=r?null===r||void 0===r?void 0:r.createScriptURL(n):n,o.async=!0,document.head.appendChild(o)}function st(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ct(e,t,r,o,n,i){const a=o[n];try{if(a)await t[a];else{const e=await nt(r),o=e.find((e=>e.measurementId===n));o&&await t[o.appId]}}catch(s){et.error(s)}e("config",n,i)}async function lt(e,t,r,o,n){try{let i=[];if(n&&n["send_to"]){let e=n["send_to"];Array.isArray(e)||(e=[e]);const o=await nt(r);for(const r of e){const e=o.find((e=>e.measurementId===r)),n=e&&t[e.appId];if(!n){i=[];break}i.push(n)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",o,n||{})}catch(i){et.error(i)}}function dt(e,t,r,o){async function n(n,...i){try{if("event"===n){const[o,n]=i;await lt(e,t,r,o,n)}else if("config"===n){const[n,a]=i;await ct(e,t,r,o,n,a)}else if("consent"===n){const[t]=i;e("consent","update",t)}else if("get"===n){const[t,r,o]=i;e("get",t,r,o)}else if("set"===n){const[t]=i;e("set",t)}else e(n,...i)}catch(a){et.error(a)}}return n}function ut(e,t,r,o,n){let i=function(...e){window[o].push(arguments)};return window[n]&&"function"===typeof window[n]&&(i=window[n]),window[n]=dt(i,e,t,r),{gtagCore:i,wrappedGtag:window[n]}}function ft(e){const t=window.document.getElementsByTagName("script");for(const r of Object.values(t))if(r.src&&r.src.includes(Qe)&&r.src.includes(e))return r;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=30,pt=1e3;class gt{constructor(e={},t=pt){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mt=new gt;function bt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function vt(e){var t;const{appId:r,apiKey:o}=e,n={method:"GET",headers:bt(o)},i=Ye.replace("{app-id}",r),a=await fetch(i,n);if(200!==a.status&&304!==a.status){let e="";try{const r=await a.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(s){}throw rt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}async function yt(e,t=mt,r){const{appId:o,apiKey:n,measurementId:i}=e.options;if(!o)throw rt.create("no-app-id");if(!n){if(i)return{measurementId:i,appId:o};throw rt.create("no-api-key")}const a=t.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new _t;return setTimeout((async()=>{s.abort()}),void 0!==r?r:Je),kt({appId:o,apiKey:n,measurementId:i},a,s,t)}async function kt(e,{throttleEndTimeMillis:t,backoffCount:r},o,n=mt){var a;const{appId:s,measurementId:c}=e;try{await wt(o,t)}catch(l){if(c)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:s,measurementId:c};throw l}try{const t=await vt(e);return n.deleteThrottleMetadata(s),t}catch(l){const t=l;if(!Ct(t)){if(n.deleteThrottleMetadata(s),c)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:s,measurementId:c};throw l}const d=503===Number(null===(a=null===t||void 0===t?void 0:t.customData)||void 0===a?void 0:a.httpStatus)?(0,i.p9)(r,n.intervalMillis,ht):(0,i.p9)(r,n.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:r+1};return n.setThrottleMetadata(s,u),et.debug(`Calling attemptFetch again in ${d} millis`),kt(e,u,o,n)}}function wt(e,t){return new Promise(((r,o)=>{const n=Math.max(t-Date.now(),0),i=setTimeout(r,n);e.addEventListener((()=>{clearTimeout(i),o(rt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Ct(e){if(!(e instanceof i.g)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class _t{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt,St;async function It(e,t,r,o,n){if(n&&n.global)e("event",r,o);else{const n=await t,i=Object.assign(Object.assign({},o),{send_to:n});e("event",r,i)}}function Tt(e){St=e}function Et(e){xt=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(){if(!(0,i.zW)())return et.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,i.eX)()}catch(e){return et.warn(rt.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function Bt(e,t,r,o,n,i,a){var s;const c=yt(e);c.then((t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>et.error(e))),t.push(c);const l=Rt().then((e=>e?o.getId():void 0)),[d,u]=await Promise.all([c,l]);ft(i)||at(i,d.measurementId),St&&(n("consent","default",St),Tt(void 0)),n("js",new Date);const f=null!==(s=null===a||void 0===a?void 0:a.config)&&void 0!==s?s:{};return f[Ze]="firebase",f.update=!0,null!=u&&(f[Xe]=u),n("config",d.measurementId,f),xt&&(n("set",xt),Et(void 0)),d.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.app=e}_delete(){return delete At[this.app.options.appId],Promise.resolve()}}let At={},Pt=[];const Dt={};let Nt,Lt,Mt="dataLayer",jt="gtag",$t=!1;function Ft(){const e=[];if((0,i.sr)()&&e.push("This is a browser extension environment."),(0,i.dM)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),r=rt.create("invalid-analytics-context",{errorInfo:t});et.warn(r.message)}}function Ut(e,t,r){Ft();const o=e.options.appId;if(!o)throw rt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw rt.create("no-api-key");et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=At[o])throw rt.create("already-exists",{id:o});if(!$t){st(Mt);const{wrappedGtag:e,gtagCore:t}=ut(At,Pt,Dt,Mt,jt);Lt=e,Nt=t,$t=!0}At[o]=Bt(e,Pt,Dt,t,Nt,Mt,r);const n=new Ot(e);return n}function Wt(e,t,r,o){e=(0,i.Ku)(e),It(Lt,At[e.app.options.appId],t,r,o).catch((e=>et.error(e)))}const zt="@firebase/analytics",Vt="0.10.0";function Ht(){function e(e){try{const t=e.getProvider(qe).getImmediate();return{logEvent:(e,r,o)=>Wt(t,e,r,o)}}catch(t){throw rt.create("interop-component-reg-failed",{reason:t})}}(0,o.om)(new a.uA(qe,((e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Ut(r,o,t)}),"PUBLIC")),(0,o.om)(new a.uA("analytics-internal",e,"PRIVATE")),(0,o.KO)(zt,Vt),(0,o.KO)(zt,Vt,"esm2017")}Ht()},223:(e,t,r)=>{r.d(t,{Wp:()=>o.Wp});var o=r(9928),n="firebase",i="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,o.KO)(n,i,"app")},7391:(e,t,r)=>{r.d(t,{HF:()=>mt,eJ:()=>Bt,xI:()=>Go,hg:()=>Mt,J1:()=>Rt,x9:()=>Ot,df:()=>Lr,CI:()=>jt,Ww:()=>At,f3:()=>Pt});var o=r(6743),n=r(9928);function i(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=r(3424),s=r(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,d=new o.FA("auth","Firebase",c()),u=new a.Vy("@firebase/auth");function f(e,...t){u.logLevel<=a.$b.WARN&&u.warn(`Auth (${n.MF}): ${e}`,...t)}function h(e,...t){u.logLevel<=a.$b.ERROR&&u.error(`Auth (${n.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw v(e,...t)}function g(e,...t){return v(e,...t)}function m(e,t,r){const n=Object.assign(Object.assign({},l()),{[t]:r}),i=new o.FA("auth","Firebase",n);return i.create(t,{appName:e.name})}function b(e,t,r){const o=r;if(!(t instanceof o))throw o.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(e,...t){if("string"!==typeof e){const r=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=e.name),e._errorFactory.create(r,...o)}return d.create(e,...t)}function y(e,t,...r){if(!e)throw v(t,...r)}function k(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function w(e,t){e||k(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(_()||(0,o.sr)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,o.jZ)()||(0,o.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){w(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,r,n,i={}){return D(e,i,(async()=>{let i={},a={};n&&("GET"===t?a=n:i={body:JSON.stringify(n)});const s=(0,o.Am)(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(L(e,e.config.apiHost,r,s),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function D(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},B),t);try{const t=new M(e),o=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw j(e,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const t=o.ok?i.errorMessage:i.error.message,[r,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw j(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===r)throw j(e,"email-already-in-use",i);if("USER_DISABLED"===r)throw j(e,"user-disabled",i);const s=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw m(e,s,a);p(e,s)}}catch(i){if(i instanceof o.g)throw i;p(e,"network-request-failed",{message:String(i)})}}async function N(e,t,r,o,n={}){const i=await P(e,t,r,o,n);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function L(e,t,r,o){const n=`${t}${r}?${o}`;return e.config.emulator?E(e.config,n):`${e.config.apiScheme}://${n}`}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),O.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,r){const o={appName:e.name};r.email&&(o.email=r.email),r.phoneNumber&&(o.phoneNumber=r.phoneNumber);const n=g(e,t,o);return n.customData._tokenResponse=r,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const r=(0,o.Ku)(e),n=await r.getIdToken(t),i=V(n);y(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:n,authTime:U(z(i.auth_time)),issuedAtTime:U(z(i.iat)),expirationTime:U(z(i.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function V(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,o.u)(r);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(i){return h("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function H(e){const t=V(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof o.g&&G(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function G({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const r=e.auth,o=await e.getIdToken(),n=await K(e,F(r,{idToken:o}));y(null===n||void 0===n?void 0:n.users.length,r,"internal-error");const i=n.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?Q(i.providerUserInfo):[],s=Y(e.providerData,a),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),d=!!c&&l,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,u)}async function J(e){const t=(0,o.Ku)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Y(e,t){const r=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...r,...t]}function Q(e){return e.map((e=>{var{providerId:t}=e,r=i(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t){const r=await D(e,{},(async()=>{const r=(0,o.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,a=L(e,n,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(a,{method:"POST",headers:s,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:n}=await ee(e,t);this.updateTokensAndExpiration(r,o,Number(n))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:n}=t,i=new te;return r&&(y("string"===typeof r,"internal-error",{appName:e}),i.refreshToken=r),o&&(y("string"===typeof o,"internal-error",{appName:e}),i.accessToken=o),n&&(y("number"===typeof n,"internal-error",{appName:e}),i.expirationTime=n),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new te,this.toJSON())}_performRefresh(){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,n=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new X(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return J(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,n,i,a,s,c,l;const d=null!==(r=t.displayName)&&void 0!==r?r:void 0,u=null!==(o=t.email)&&void 0!==o?o:void 0,f=null!==(n=t.phoneNumber)&&void 0!==n?n:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:k,isAnonymous:w,providerData:C,stsTokenManager:_}=t;y(v&&_,e,"internal-error");const x=te.fromJSON(this.name,_);y("string"===typeof v,e,"internal-error"),re(d,e.name),re(u,e.name),y("boolean"===typeof k,e,"internal-error"),y("boolean"===typeof w,e,"internal-error"),re(f,e.name),re(h,e.name),re(p,e.name),re(g,e.name),re(m,e.name),re(b,e.name);const S=new oe({uid:v,auth:e,email:u,emailVerified:k,displayName:d,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:x,createdAt:m,lastLoginAt:b});return C&&Array.isArray(C)&&(S.providerData=C.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,r=!1){const o=new te;o.updateFromServerResponse(t);const n=new oe({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Z(n),n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Map;function ie(e){w(e instanceof Function,"Expected a class definition");let t=ne.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ne.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const se=ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,r){return`firebase:${e}:${t}:${r}`}class le{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:n}=this.auth;this.fullUserKey=ce(this.userKey,o.apiKey,n),this.fullPersistenceKey=ce("persistence",o.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new le(ie(se),e,r);const o=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let n=o[0]||ie(se);const i=ce(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const t=await l._get(i);if(t){const r=oe._fromJSON(e,t);l!==n&&(a=r),n=l;break}}catch(c){}const s=o.filter((e=>e._shouldAllowMigration));return n._shouldAllowMigration&&s.length?(n=s[0],a&&await n._set(i,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==n)try{await e._remove(i)}catch(c){}}))),new le(n,e,r)):new le(n,e,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(be(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null===r||void 0===r?void 0:r.length))return r[1]}return"Other"}function ue(e=(0,o.ZQ)()){return/firefox\//i.test(e)}function fe(e=(0,o.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,o.ZQ)()){return/crios\//i.test(e)}function pe(e=(0,o.ZQ)()){return/iemobile/i.test(e)}function ge(e=(0,o.ZQ)()){return/android/i.test(e)}function me(e=(0,o.ZQ)()){return/blackberry/i.test(e)}function be(e=(0,o.ZQ)()){return/webos/i.test(e)}function ve(e=(0,o.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,o.ZQ)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return(0,o.lT)()&&10===document.documentMode}function we(e=(0,o.ZQ)()){return ve(e)||ge(e)||be(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t=[]){let r;switch(e){case"Browser":r=de((0,o.ZQ)());break;case"Worker":r=`${de((0,o.ZQ)())}-${e}`;break;default:r=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${n.MF}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return P(e,"GET","/v2/recaptchaConfig",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){return void 0!==e&&void 0!==e.enterprise}class Ie{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Ee(e){return new Promise(((t,r)=>{const o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=e=>{const t=g("internal-error");t.customData=e,r(t)},o.type="text/javascript",o.charset="UTF-8",Te().appendChild(o)}))}function Re(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Be="https://www.google.com/recaptcha/enterprise.js?render=",Oe="recaptcha-enterprise",Ae="NO_RECAPTCHA";class Pe{constructor(e){this.type=Oe,this.auth=Me(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,r)=>{xe(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((o=>{if(void 0!==o.recaptchaKey){const r=new Ie(o);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}r(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{r(e)}))}))}function o(t,r,o){const n=window.grecaptcha;Se(n)?n.enterprise.ready((()=>{n.enterprise.execute(t,{action:e}).then((e=>{r(e)})).catch((()=>{r(Ae)}))})):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,n)=>{r(this.auth).then((r=>{if(!t&&Se(window.grecaptcha))o(r,e,n);else{if("undefined"===typeof window)return void n(new Error("RecaptchaVerifier is only supported in browser"));Ee(Be+r).then((()=>{o(r,e,n)})).catch((e=>{n(e)}))}})).catch((e=>{n(e)}))}))}}async function De(e,t,r,o=!1){const n=new Pe(e);let i;try{i=await n.verify(r)}catch(s){i=await n.verify(r,!0)}const a=Object.assign({},t);return o?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise(((r,o)=>{try{const o=e(t);r(o)}catch(n){o(n)}}));r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const e of t)try{e()}catch(o){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===r||void 0===r?void 0:r.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue((async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(o=this.currentUser)||void 0===o?void 0:o.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let o=r,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===o||void 0===o?void 0:o._redirectEventId,a=await this.tryRedirectSignIn(e);r&&r!==i||!(null===a||void 0===a?void 0:a.user)||(o=a.user,n=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(o)}catch(i){o=r,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,o.Ku)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ie(e))}))}async initializeRecaptchaConfig(){const e=await xe(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ie(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Pe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o.FA("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const n="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>n(this.currentUser))),"function"===typeof t?e.addObserver(t,r,o):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_e(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&f(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Me(e){return(0,o.Ku)(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.tD)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,t){const r=(0,n.j6)(e,"auth");if(r.isInitialized()){const e=r.getImmediate(),n=r.getOptions();if((0,o.bD)(n,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=r.initialize({options:t});return i}function Fe(e,t){const r=(null===t||void 0===t?void 0:t.persistence)||[],o=(Array.isArray(r)?r:[r]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(o,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ue(e,t,r){const o=Me(e);y(o._canInitEmulator,o,"emulator-config-failed"),y(/^https?:\/\//.test(t),o,"invalid-emulator-scheme");const n=!!(null===r||void 0===r?void 0:r.disableWarnings),i=We(t),{host:a,port:s}=ze(t),c=null===s?"":`:${s}`;o.config.emulator={url:`${i}//${a}${c}/`},o.settings.appVerificationDisabledForTesting=!0,o.emulatorConfig=Object.freeze({host:a,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||He()}function We(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ze(e){const t=We(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const o=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(o);if(n){const e=n[1];return{host:e,port:Ve(o.substr(e.length+1))}}{const[e,t]=o.split(":");return{host:e,port:Ve(t)}}}function Ve(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function He(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,t){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qe(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}async function Xe(e,t){return P(e,"POST","/v1/accounts:sendOobCode",A(e,t))}async function Ze(e,t){return Xe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Je(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function Ye(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ke{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Qe(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await De(e,r,"signInWithPassword");return qe(e,t)}return qe(e,r).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await De(e,r,"signInWithPassword");return qe(e,t)}return Promise.reject(t)}));case"emailLink":return Je(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ge(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="http://localhost";class rt extends Ke{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,n=i(t,["providerId","signInMethod"]);if(!r||!o)return null;const a=new rt(r,o);return a.idToken=n.idToken||void 0,a.accessToken=n.accessToken||void 0,a.secret=n.secret,a.nonce=n.nonce,a.pendingToken=n.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return et(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,et(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,et(e,t)}buildRequest(){const e={requestUri:tt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,o.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function nt(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function it(e,t){const r=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(r.temporaryProof)throw j(e,"account-exists-with-different-credential",r);return r}const at={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,r),at)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Ke{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ct({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ct({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:o,temporaryProof:n}=e;return r||t||o||n?new ct({verificationId:t,verificationCode:r,phoneNumber:o,temporaryProof:n}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dt(e){const t=(0,o.I9)((0,o.hp)(e))["link"],r=t?(0,o.I9)((0,o.hp)(t))["deep_link_id"]:null,n=(0,o.I9)((0,o.hp)(e))["deep_link_id"],i=n?(0,o.I9)((0,o.hp)(n))["link"]:null;return i||n||r||t||e}class ut{constructor(e){var t,r,n,i,a,s;const c=(0,o.I9)((0,o.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,d=null!==(r=c["oobCode"])&&void 0!==r?r:null,u=lt(null!==(n=c["mode"])&&void 0!==n?n:null);y(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=c["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=c["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=dt(e);try{return new ut(t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(){this.providerId=ft.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ut.parseLink(t);return y(r,"argument-error"),Qe._fromEmailAndCode(e,r.code,r.tenantId)}}ft.PROVIDER_ID="password",ft.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ft.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends pt{constructor(){super("facebook.com")}static credential(e){return rt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return mt.credential(t,r)}catch(o){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends pt{constructor(){super("github.com")}static credential(e){return rt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch(t){return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com",bt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends pt{constructor(){super("twitter.com")}static credential(e,t){return rt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vt.credential(t,r)}catch(o){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yt(e,t){return N(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.TWITTER_SIGN_IN_METHOD="twitter.com",vt.PROVIDER_ID="twitter.com";class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const n=await oe._fromIdTokenResponse(e,r,o),i=wt(r),a=new kt({user:n,providerId:i,_tokenResponse:r,operationType:t});return a}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=wt(r);return new kt({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function wt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends o.g{constructor(e,t,r,o){var n;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:null!==(n=e.tenantId)&&void 0!==n?n:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new Ct(e,t,r,o)}}function _t(e,t,r,o){const n="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return n.catch((r=>{if("auth/multi-factor-auth-required"===r.code)throw Ct._fromErrorAndOperation(e,r,t,o);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,r=!1){const o=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return kt._forOperation(e,"link",o)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(e,t,r=!1){const{auth:o}=e,n="reauthenticate";try{const i=await K(e,_t(o,n,t,e),r);y(i.idToken,o,"internal-error");const a=V(i.idToken);y(a,o,"internal-error");const{sub:s}=a;return y(e.uid===s,o,"user-mismatch"),kt._forOperation(e,n,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&p(o,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e,t,r=!1){const o="signIn",n=await _t(e,o,t),i=await kt._fromIdTokenResponse(e,o,n);return r||await e._updateCurrentUser(i.user),i}async function Tt(e,t){return It(Me(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e,t,r){var o;y((null===(o=r.url)||void 0===o?void 0:o.length)>0,e,"invalid-continue-uri"),y("undefined"===typeof r.dynamicLinkDomain||r.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=r.url,t.dynamicLinkDomain=r.dynamicLinkDomain,t.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(y(r.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=r.iOS.bundleId),r.android&&(y(r.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=r.android.installApp,t.androidMinimumVersionCode=r.android.minimumVersion,t.androidPackageName=r.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,r){var o;const n=Me(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(o=n._getRecaptchaConfig())||void 0===o?void 0:o.emailPasswordEnabled){const e=await De(n,i,"getOobCode",!0);r&&Et(n,e,r),await Ze(n,e)}else r&&Et(n,i,r),await Ze(n,i).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await De(n,i,"getOobCode",!0);r&&Et(n,e,r),await Ze(n,e)}}))}async function Bt(e,t,r){var o;const n=Me(e),i={returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"};let a;if(null===(o=n._getRecaptchaConfig())||void 0===o?void 0:o.emailPasswordEnabled){const e=await De(n,i,"signUpPassword");a=yt(n,e)}else a=yt(n,i).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await De(n,i,"signUpPassword");return yt(n,e)}return Promise.reject(e)}));const s=await a.catch((e=>Promise.reject(e))),c=await kt._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(c.user),c}function Ot(e,t,r){return Tt((0,o.Ku)(e),ft.credential(t,r))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){return Dt((0,o.Ku)(e),t,null)}function Pt(e,t){return Dt((0,o.Ku)(e),null,t)}async function Dt(e,t,r){const{auth:o}=e,n=await e.getIdToken(),i={idToken:n,returnSecureToken:!0};t&&(i.email=t),r&&(i.password=r);const a=await K(e,Ge(o,i));await e._updateTokensIfNecessary(a,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t,r,n){return(0,o.Ku)(e).onIdTokenChanged(t,r,n)}function Lt(e,t,r){return(0,o.Ku)(e).beforeAuthStateChanged(t,r)}function Mt(e,t,r,n){return(0,o.Ku)(e).onAuthStateChanged(t,r,n)}function jt(e){return(0,o.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function Ft(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}function Ut(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function Wt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}new WeakMap;const zt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zt,"1"),this.storage.removeItem(zt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){const e=(0,o.ZQ)();return fe(e)||ve(e)}const Kt=1e3,Gt=10;class qt extends Vt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ht()&&Ce(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,r)=>{this.notifyListeners(e,r)}));const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const o=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},n=this.storage.getItem(r);ke()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Gt):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)}))}),Kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qt.type="LOCAL";const Xt=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Vt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zt.type="SESSION";const Jt=Zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const r=new Qt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:n}=t.data,i=this.handlersMap[o];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const a=Array.from(i).map((async e=>e(t.origin,n))),s=await Yt(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e="",t=10){let r="";for(let o=0;o<t;o++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.receivers=[];class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let n,i;return new Promise(((a,s)=>{const c=er("",20);o.port1.start();const l=setTimeout((()=>{s(new Error("unsupported_event"))}),r);i={messageChannel:o,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),n=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(n),a(t.data.response);break;default:clearTimeout(l),clearTimeout(n),s(new Error("invalid_response"));break}}},this.handlers.add(i),o.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[o.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function or(e){rr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return"undefined"!==typeof rr()["WorkerGlobalScope"]&&"function"===typeof rr()["importScripts"]}async function ir(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ar(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function sr(){return nr()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="firebaseLocalStorageDb",lr=1,dr="firebaseLocalStorage",ur="fbase_key";class fr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function hr(e,t){return e.transaction([dr],t?"readwrite":"readonly").objectStore(dr)}function pr(){const e=indexedDB.deleteDatabase(cr);return new fr(e).toPromise()}function gr(){const e=indexedDB.open(cr,lr);return new Promise(((t,r)=>{e.addEventListener("error",(()=>{r(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(dr,{keyPath:ur})}catch(o){r(o)}})),e.addEventListener("success",(async()=>{const r=e.result;r.objectStoreNames.contains(dr)?t(r):(r.close(),await pr(),t(await gr()))}))}))}async function mr(e,t,r){const o=hr(e,!0).put({[ur]:t,value:r});return new fr(o).toPromise()}async function br(e,t){const r=hr(e,!1).get(t),o=await new fr(r).toPromise();return void 0===o?null:o.value}function vr(e,t){const r=hr(e,!0).delete(t);return new fr(r).toPromise()}const yr=800,kr=3;class wr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(r){if(t++>kr)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qt._getInstance(sr()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const r=await this._poll();return{keyProcessed:r.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await ir(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ar()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gr();return await mr(e,zt,"1"),await vr(e,zt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((r=>mr(r,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>br(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=hr(e,!1).getAll();return new fr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;for(const{fbase_key:o,value:n}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(n)&&(this.notifyListeners(o,n),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),yr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wr.type="LOCAL";const Cr=wr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}function xr(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}function Sr(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Re("rcb"),new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ir="recaptcha";async function Tr(e,t,r){var o;const n=await r.verify();try{let i;if(y("string"===typeof n,e,"argument-error"),y(r.type===Ir,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){y("enroll"===t.type,e,"internal-error");const r=await $t(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:n}});return r.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const r=(null===(o=i.multiFactorHint)||void 0===o?void 0:o.uid)||i.multiFactorUid;y(r,e,"missing-multi-factor-info");const a=await _r(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:n}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ot(e,{phoneNumber:i.phoneNumber,recaptchaToken:n});return t}}finally{r._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(e){this.providerId=Er.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return Tr(this.auth,e,(0,o.Ku)(t))}static credential(e,t){return ct._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Er.credentialFromTaggedObject(t)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?ct._fromTokenResponse(t,r):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(e,t){return t?ie(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er.PROVIDER_ID="phone",Er.PHONE_SIGN_IN_METHOD="phone";class Br extends Ke{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return et(e,this._buildIdpRequest())}_linkToIdToken(e,t){return et(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return et(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Or(e){return It(e.auth,new Br(e),e.bypassAuthState)}function Ar(e){const{auth:t,user:r}=e;return y(r,t,"internal-error"),St(r,new Br(e),e.bypassAuthState)}async function Pr(e){const{auth:t,user:r}=e;return y(r,t,"internal-error"),xt(r,new Br(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,r,o,n=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:n,error:i,type:a}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:r,tenantId:n||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Or;case"linkViaPopup":case"linkViaRedirect":return Pr;case"reauthViaPopup":case"reauthViaRedirect":return Ar;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new T(2e3,1e4);async function Lr(e,t,r){const o=Me(e);b(e,t,ht);const n=Rr(o,r),i=new Mr(o,"signInViaPopup",t,n);return i.executeNotNull()}class Mr extends Dr{constructor(e,t,r,o,n){super(e,t,o,n),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Nr.get())};e()}}Mr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jr="pendingRedirect",$r=new Map;class Fr extends Dr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$r.get(this.auth._key());if(!e){try{const t=await Ur(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$r.set(this.auth._key(),e)}return this.bypassAuthState||$r.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ur(e,t){const r=Vr(t),o=zr(e);if(!await o._isAvailable())return!1;const n="true"===await o._get(r);return await o._remove(r),n}function Wr(e,t){$r.set(e._key(),t)}function zr(e){return ie(e._redirectPersistence)}function Vr(e){return ce(jr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(e,t,r=!1){const o=Me(e),n=Rr(o,t),i=new Fr(o,n,r),a=await i.execute();return a&&!r&&(delete a.user._redirectEventId,await o._persistUserIfCurrent(a.user),await o._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kr=6e5;class Gr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Zr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xr(e)){const o=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(g(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kr&&this.cachedEventUids.clear(),this.cachedEventUids.has(qr(e))}saveEventToCache(e){this.cachedEventUids.add(qr(e)),this.lastProcessedEventTime=Date.now()}}function qr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Xr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Zr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qr=/^https?/;async function eo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Jr(e);for(const o of t)try{if(to(o))return}catch(r){}p(e,"unauthorized-domain")}function to(e){const t=C(),{protocol:r,hostname:o}=new URL(t);if(e.startsWith("chrome-extension://")){const n=new URL(e);return""===n.hostname&&""===o?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&n.hostname===o}if(!Qr.test(r))return!1;if(Yr.test(e))return o===e;const n=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+n+"|"+n+")$","i");return i.test(o)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new T(3e4,6e4);function oo(){const e=rr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function no(e){return new Promise(((t,r)=>{var o,n,i;function a(){oo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{oo(),r(g(e,"network-request-failed"))},timeout:ro.get()})}if(null===(n=null===(o=rr().gapi)||void 0===o?void 0:o.iframes)||void 0===n?void 0:n.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=rr().gapi)||void 0===i?void 0:i.load)){const t=Re("iframefcb");return rr()[t]=()=>{gapi.load?a():r(g(e,"network-request-failed"))},Ee(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>r(e)))}a()}})).catch((e=>{throw io=null,e}))}let io=null;function ao(e){return io=io||no(e),io}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new T(5e3,15e3),co="__/auth/iframe",lo="emulator/auth/iframe",uo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ho(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?E(t,lo):`https://${e.config.authDomain}/${co}`,i={apiKey:t.apiKey,appName:e.name,v:n.MF},a=fo.get(e.config.apiHost);a&&(i.eid=a);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${r}?${(0,o.Am)(i).slice(1)}`}async function po(e){const t=await ao(e),r=rr().gapi;return y(r,e,"internal-error"),t.open({where:document.body,url:ho(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uo,dontclear:!0},(t=>new Promise((async(r,o)=>{await t.restyle({setHideOnLeave:!1});const n=g(e,"network-request-failed"),i=rr().setTimeout((()=>{o(n)}),so.get());function a(){rr().clearTimeout(i),r(t)}t.ping(a).then(a,(()=>{o(n)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mo=500,bo=600,vo="_blank",yo="http://localhost";class ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function wo(e,t,r,n=mo,i=bo){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},go),{width:n.toString(),height:i.toString(),top:a,left:s}),d=(0,o.ZQ)().toLowerCase();r&&(c=he(d)?vo:r),ue(d)&&(t=t||yo,l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,r])=>`${e}${t}=${r},`),"");if(ye(d)&&"_self"!==c)return Co(t||"",c),new ko(null);const f=window.open(t||"",c,u);y(f,e,"popup-blocked");try{f.focus()}catch(h){}return new ko(f)}function Co(e,t){const r=document.createElement("a");r.href=e,r.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(o)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="__/auth/handler",xo="emulator/auth/handler",So=encodeURIComponent("fac");async function Io(e,t,r,i,a,s){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:n.MF,eventId:a};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,o.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))c[e]=t}if(t instanceof pt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const o of Object.keys(l))void 0===l[o]&&delete l[o];const d=await e._getAppCheckToken(),u=d?`#${So}=${encodeURIComponent(d)}`:"";return`${To(e)}?${(0,o.Am)(l).slice(1)}${u}`}function To({config:e}){return e.emulator?E(e,xo):`https://${e.authDomain}/${_o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="webStorageSupport";class Ro{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jt,this._completeRedirectFn=Hr,this._overrideRedirectResult=Wr}async _openPopup(e,t,r,o){var n;w(null===(n=this.eventManagers[e._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()");const i=await Io(e,t,r,C(),o);return wo(e,i,er())}async _openRedirect(e,t,r,o){await this._originValidation(e);const n=await Io(e,t,r,C(),o);return or(n),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(w(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch((()=>{delete this.eventManagers[t]})),r}async initAndGetManager(e){const t=await po(e),r=new Gr(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const o=r.onEvent(t.authEvent);return{status:o?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){const r=this.iframes[e._key()];r.send(Eo,{type:Eo},(r=>{var o;const n=null===(o=null===r||void 0===r?void 0:r[0])||void 0===o?void 0:o[Eo];void 0!==n&&t(!!n),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||fe()||ve()}}const Bo=Ro;class Oo{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return k("unexpected MultiFactorSessionType")}}}class Ao extends Oo{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ao(e)}_finalizeEnroll(e,t,r){return Ft(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return xr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Po{constructor(){}static assertion(e){return Ao._fromCredential(e)}}Po.FACTOR_ID="phone";class Do{static assertionForEnrollment(e,t){return No._fromSecret(e,t)}static assertionForSignIn(e,t){return No._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;y("undefined"!==typeof t.auth,"internal-error");const r=await Ut(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Lo._fromStartTotpMfaEnrollmentResponse(r,t.auth)}}Do.FACTOR_ID="totp";class No extends Oo{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new No(t,void 0,e)}static _fromEnrollmentId(e,t){return new No(t,e)}async _finalizeEnroll(e,t,r){return y("undefined"!==typeof this.secret,e,"argument-error"),Wt(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const r={verificationCode:this.otp};return Sr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Lo{constructor(e,t,r,o,n,i,a){this.sessionInfo=i,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=o,this.enrollmentCompletionDeadline=n}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Lo(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let o=!1;return(Mo(e)||Mo(t))&&(o=!0),o&&(Mo(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),Mo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Mo(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var jo="@firebase/auth",$o="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wo(e){(0,n.om)(new s.uA("auth",((t,{options:r})=>{const o=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=o.options;y(a&&!a.includes(":"),"invalid-api-key",{appName:o.name});const c={apiKey:a,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_e(e)},l=new Le(o,n,i,c);return Fe(l,r),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{const o=e.getProvider("auth-internal");o.initialize()}))),(0,n.om)(new s.uA("auth-internal",(e=>{const t=Me(e.getProvider("auth").getImmediate());return(e=>new Fo(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,n.KO)(jo,$o,Uo(e)),(0,n.KO)(jo,$o,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=300,Vo=(0,o.XA)("authIdTokenMaxAge")||zo;let Ho=null;const Ko=e=>async t=>{const r=t&&await t.getIdTokenResult(),o=r&&((new Date).getTime()-Date.parse(r.issuedAtTime))/1e3;if(o&&o>Vo)return;const n=null===r||void 0===r?void 0:r.token;Ho!==n&&(Ho=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Go(e=(0,n.Sx)()){const t=(0,n.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const r=$e(e,{popupRedirectResolver:Bo,persistence:[Cr,Xt,Jt]}),i=(0,o.XA)("authTokenSyncURL");if(i){const e=Ko(i);Lt(r,e,(()=>e(r.currentUser))),Nt(r,(t=>e(t)))}const a=(0,o.Tj)("auth");return a&&Ue(r,`http://${a}`),r}Wo("Browser")},4239:(e,t,r)=>{r.d(t,{Ay:()=>Ve});var o=Object.defineProperty,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&s(e,r,t[r]);return e};function l(e){return null===e||void 0===e||""===e||Array.isArray(e)&&0===e.length||!(e instanceof Date)&&"object"===typeof e&&0===Object.keys(e).length}function d(e){return!!(e&&e.constructor&&e.call&&e.apply)}function u(e){return!l(e)}function f(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||0!==Object.keys(e).length)}function h(e,...t){return d(e)?e(...t):e}function p(e,t=!0){return"string"===typeof e&&(t||""!==e)}function g(e,t=!0){return Array.isArray(e)&&(t||0!==e.length)}function m(e){return u(e)&&!isNaN(e)}function b(e,t){if(t){const r=t.test(e);return t.lastIndex=0,r}return!1}function v(...e){const t=(e={},r={})=>{const o=c({},e);return Object.keys(r).forEach((n=>{f(r[n])&&n in e&&f(e[n])?o[n]=t(e[n],r[n]):o[n]=r[n]})),o};return e.reduce(((e,r,o)=>0===o?r:t(e,r)),{})}function y(e){return e?e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":"):e}function k(e){return p(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,((e,t)=>0===t?e:"-"+e.toLowerCase())).toLowerCase():e}function w(e){return p(e)?e.replace(/[A-Z]/g,((e,t)=>0===t?e:"."+e.toLowerCase())).toLowerCase():e}function C(){const e=new Map;return{on(t,r){let o=e.get(t);return o?o.push(r):o=[r],e.set(t,o),this},off(t,r){let o=e.get(t);return o&&o.splice(o.indexOf(r)>>>0,1),this},emit(t,r){let o=e.get(t);o&&o.slice().map((e=>{e(r)}))},clear(){e.clear()}}}var _=Object.defineProperty,x=Object.defineProperties,S=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&R(e,r,t[r]);if(I)for(var r of I(t))E.call(t,r)&&R(e,r,t[r]);return e},O=(e,t)=>x(e,S(t)),A=(e,t)=>{var r={};for(var o in e)T.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&I)for(var o of I(e))t.indexOf(o)<0&&E.call(e,o)&&(r[o]=e[o]);return r};var P=C(),D=P;function N(e,t){g(e)?e.push(...t||[]):f(e)&&Object.assign(e,t)}function L(e){return f(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function M(e,t=""){const r=["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"];if(!r.some((e=>t.endsWith(e)))){const t=`${e}`.trim(),r=t.split(" ");return r.map((e=>m(e)?`${e}px`:e)).join(" ")}return e}function j(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function $(e="",t=""){return j(`${p(e,!1)&&p(t,!1)?`${e}-`:e}${t}`)}function F(e="",t=""){return`--${$(e,t)}`}function U(e,t="",r="",o=[],n){if(p(e)){const i=/{([^}]*)}/g,a=e.trim();if(b(a,i)){const e=a.replaceAll(i,(e=>{const t=e.replace(/{|}/g,""),i=t.split(".").filter((e=>!o.some((t=>b(e,t)))));return`var(${F(r,k(i.join("-")))}${u(n)?`, ${n}`:""})`})),t=/(\d+\s+[\+\-\*\/]\s+\d+)/g,s=/var\([^)]+\)/g;return b(e.replace(s,"0"),t)?`calc(${e})`:e}return M(a,t)}if(m(e))return M(e,t)}function W(e,t,r){p(t,!1)&&e.push(`${t}:${r};`)}function z(e,t){return e?`${e}{${t}}`:""}var V=(...e)=>H(q.getTheme(),...e),H=(e={},t,r,o)=>{if(t){const{variable:n,options:i}=q.defaults||{},{prefix:a,transform:s}=(null==e?void 0:e.options)||i||{},c=/{([^}]*)}/g,d=b(t,c)?t:`{${t}}`,u="value"===o||l(o)&&"strict"===s;return u?q.getTokenValue(t):U(d,void 0,a,[n.excludedKeyRegex],r)}return""};function K(e,t={}){const r=q.defaults.variable,{prefix:o=r.prefix,selector:n=r.selector,excludedKeyRegex:i=r.excludedKeyRegex}=t,a=(e,t="")=>Object.entries(e).reduce(((e,[r,n])=>{const s=b(r,i)?$(t):$(t,k(r)),c=L(n);if(f(c)){const{variables:t,tokens:r}=a(c,s);N(e["tokens"],r),N(e["variables"],t)}else e["tokens"].push((o?s.replace(`${o}-`,""):s).replaceAll("-",".")),W(e["variables"],F(s),U(c,s,o,[i]));return e}),{variables:[],tokens:[]}),{variables:s,tokens:c}=a(e,o);return{value:s,tokens:c,declarations:s.join(""),css:z(n,s.join(""))}}var G={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){const t=Object.keys(this.rules).filter((e=>"custom"!==e)).map((e=>this.rules[e]));return[e].flat().map((e=>{var r;return null!=(r=t.map((t=>t.resolve(e))).find((e=>e.matched)))?r:this.rules.custom.resolve(e)}))}},_toVariables(e,t){return K(e,{prefix:null==t?void 0:t.prefix})},getCommon({name:e="",theme:t={},params:r,set:o,defaults:n}){var i,a,s,c,l,d,f;const{preset:p,options:g}=t;let m,b,v,y,k,w,C;if(u(p)&&"strict"!==g.transform){const{primitive:t,semantic:r,extend:_}=p,x=r||{},{colorScheme:S}=x,I=A(x,["colorScheme"]),T=_||{},{colorScheme:E}=T,R=A(T,["colorScheme"]),B=S||{},{dark:O}=B,P=A(B,["dark"]),D=E||{},{dark:N}=D,L=A(D,["dark"]),M=u(t)?this._toVariables({primitive:t},g):{},j=u(I)?this._toVariables({semantic:I},g):{},$=u(P)?this._toVariables({light:P},g):{},F=u(O)?this._toVariables({dark:O},g):{},U=u(R)?this._toVariables({semantic:R},g):{},W=u(L)?this._toVariables({light:L},g):{},z=u(N)?this._toVariables({dark:N},g):{},[H,K]=[null!=(i=M.declarations)?i:"",M.tokens],[G,q]=[null!=(a=j.declarations)?a:"",j.tokens||[]],[X,Z]=[null!=(s=$.declarations)?s:"",$.tokens||[]],[J,Y]=[null!=(c=F.declarations)?c:"",F.tokens||[]],[Q,ee]=[null!=(l=U.declarations)?l:"",U.tokens||[]],[te,re]=[null!=(d=W.declarations)?d:"",W.tokens||[]],[oe,ne]=[null!=(f=z.declarations)?f:"",z.tokens||[]];m=this.transformCSS(e,H,"light","variable",g,o,n),b=K;const ie=this.transformCSS(e,`${G}${X}`,"light","variable",g,o,n),ae=this.transformCSS(e,`${J}`,"dark","variable",g,o,n);v=`${ie}${ae}`,y=[...new Set([...q,...Z,...Y])];const se=this.transformCSS(e,`${Q}${te}color-scheme:light`,"light","variable",g,o,n),ce=this.transformCSS(e,`${oe}color-scheme:dark`,"dark","variable",g,o,n);k=`${se}${ce}`,w=[...new Set([...ee,...re,...ne])],C=h(p.css,{dt:V})}return{primitive:{css:m,tokens:b},semantic:{css:v,tokens:y},global:{css:k,tokens:w},style:C}},getPreset({name:e="",preset:t={},options:r,params:o,set:n,defaults:i,selector:a}){var s,c,l;let d,f,p;if(u(t)&&"strict"!==r.transform){const o=e.replace("-directive",""),g=t,{colorScheme:m,extend:b,css:v}=g,y=A(g,["colorScheme","extend","css"]),k=b||{},{colorScheme:w}=k,C=A(k,["colorScheme"]),_=m||{},{dark:x}=_,S=A(_,["dark"]),I=w||{},{dark:T}=I,E=A(I,["dark"]),R=u(y)?this._toVariables({[o]:B(B({},y),C)},r):{},O=u(S)?this._toVariables({[o]:B(B({},S),E)},r):{},P=u(x)?this._toVariables({[o]:B(B({},x),T)},r):{},[D,N]=[null!=(s=R.declarations)?s:"",R.tokens||[]],[L,M]=[null!=(c=O.declarations)?c:"",O.tokens||[]],[j,$]=[null!=(l=P.declarations)?l:"",P.tokens||[]],F=this.transformCSS(o,`${D}${L}`,"light","variable",r,n,i,a),U=this.transformCSS(o,j,"dark","variable",r,n,i,a);d=`${F}${U}`,f=[...new Set([...N,...M,...$])],p=h(v,{dt:V})}return{css:d,tokens:f,style:p}},getPresetC({name:e="",theme:t={},params:r,set:o,defaults:n}){var i;const{preset:a,options:s}=t,c=null==(i=null==a?void 0:a.components)?void 0:i[e];return this.getPreset({name:e,preset:c,options:s,params:r,set:o,defaults:n})},getPresetD({name:e="",theme:t={},params:r,set:o,defaults:n}){var i;const a=e.replace("-directive",""),{preset:s,options:c}=t,l=null==(i=null==s?void 0:s.directives)?void 0:i[a];return this.getPreset({name:a,preset:l,options:c,params:r,set:o,defaults:n})},applyDarkColorScheme(e){return!("none"===e.darkModeSelector||!1===e.darkModeSelector)},getColorSchemeOption(e,t){var r;return this.applyDarkColorScheme(e)?this.regex.resolve(!0===e.darkModeSelector?t.options.darkModeSelector:null!=(r=e.darkModeSelector)?r:t.options.darkModeSelector):[]},getLayerOrder(e,t={},r,o){const{cssLayer:n}=t;if(n){const e=h(n.order||"primeui",r);return`@layer ${e}`}return""},getCommonStyleSheet({name:e="",theme:t={},params:r,props:o={},set:n,defaults:i}){const a=this.getCommon({name:e,theme:t,params:r,set:n,defaults:i}),s=Object.entries(o).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return Object.entries(a||{}).reduce(((e,[t,r])=>{if(null==r?void 0:r.css){const o=y(null==r?void 0:r.css),n=`${t}-variables`;e.push(`<style type="text/css" data-primevue-style-id="${n}" ${s}>${o}</style>`)}return e}),[]).join("")},getStyleSheet({name:e="",theme:t={},params:r,props:o={},set:n,defaults:i}){var a;const s={name:e,theme:t,params:r,set:n,defaults:i},c=null==(a=e.includes("-directive")?this.getPresetD(s):this.getPresetC(s))?void 0:a.css,l=Object.entries(o).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${e}-variables" ${l}>${y(c)}</style>`:""},createTokens(e={},t,r="",o="",n={}){return Object.entries(e).forEach((([e,i])=>{const a=b(e,t.variable.excludedKeyRegex)?r:r?`${r}.${w(e)}`:w(e),s=o?`${o}.${e}`:e;f(i)?this.createTokens(i,t,a,s,n):(n[a]||(n[a]={paths:[],computed(e,t={}){var r,o;return 1===this.paths.length?null==(r=this.paths[0])?void 0:r.computed(this.paths[0].scheme,t["binding"]):e&&"none"!==e?null==(o=this.paths.find((t=>t.scheme===e)))?void 0:o.computed(e,t["binding"]):this.paths.map((e=>e.computed(e.scheme,t[e.scheme])))}}),n[a].paths.push({path:s,value:i,scheme:s.includes("colorScheme.light")?"light":s.includes("colorScheme.dark")?"dark":"none",computed(e,t={}){const r=/{([^}]*)}/g;let o=i;if(t["name"]=this.path,t["binding"]||(t["binding"]={}),b(i,r)){const a=i.trim(),s=a.replaceAll(r,(r=>{var o;const i=r.replace(/{|}/g,""),a=null==(o=n[i])?void 0:o.computed(e,t);return g(a)&&2===a.length?`light-dark(${a[0].value},${a[1].value})`:null==a?void 0:a.value})),c=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,l=/var\([^)]+\)/g;o=b(s.replace(l,"0"),c)?`calc(${s})`:s}return l(t["binding"])&&delete t["binding"],{colorScheme:e,path:this.path,paths:t,value:o.includes("undefined")?void 0:o}}}))})),n},getTokenValue(e,t,r){var o;const n=e=>{const t=e.split(".");return t.filter((e=>!b(e.toLowerCase(),r.variable.excludedKeyRegex))).join(".")},i=n(t),a=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,s=[null==(o=e[i])?void 0:o.computed(a)].flat().filter((e=>e));return 1===s.length?s[0].value:s.reduce(((e={},t)=>{const r=t,{colorScheme:o}=r,n=A(r,["colorScheme"]);return e[o]=n,e}),void 0)},getSelectorRule(e,t,r,o){return"class"===r||"attr"===r?z(u(t)?`${e}${t},${e} ${t}`:e,o):z(e,u(t)?z(t,o):o)},transformCSS(e,t,r,o,n={},i,a,s){if(u(t)){const{cssLayer:c}=n;if("style"!==o){const e=this.getColorSchemeOption(n,a);t="dark"===r?e.reduce(((e,{type:r,selector:o})=>(u(o)&&(e+=o.includes("[CSS]")?o.replace("[CSS]",t):this.getSelectorRule(o,s,r,t)),e)),""):z(null!=s?s:":root",t)}if(c){const r={name:"primeui",order:"primeui"};f(c)&&(r.name=h(c.name,{name:e,type:o})),u(r.name)&&(t=z(`@layer ${r.name}`,t),null==i||i.layerNames(r.name))}return t}return""}},q={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){const{theme:t}=e;t&&(this._theme=O(B({},t),{options:B(B({},this.defaults.options),t.options)}),this._tokens=G.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return(null==(e=this.theme)?void 0:e.preset)||{}},get options(){var e;return(null==(e=this.theme)?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),D.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=O(B({},this.theme),{preset:e}),this._tokens=G.createTokens(e,this.defaults),this.clearLoadedStyleNames(),D.emit("preset:change",e),D.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=O(B({},this.theme),{options:e}),this.clearLoadedStyleNames(),D.emit("options:change",e),D.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return G.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return G.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPresetC(r)},getDirective(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPresetD(r)},getCustomPreset(e="",t,r,o){const n={name:e,preset:t,options:this.options,selector:r,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPreset(n)},getLayerOrderCSS(e=""){return G.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,r="style",o){return G.transformCSS(e,t,o,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,r={}){return G.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,r={}){return G.getStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),D.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&D.emit("theme:load"))}};function X(e){return"object"===typeof HTMLElement?e instanceof HTMLElement:e&&"object"===typeof e&&null!==e&&1===e.nodeType&&"string"===typeof e.nodeName}function Z(e,t={}){if(X(e)){const r=(t,o)=>{var n,i;const a=(null==(n=null==e?void 0:e.$attrs)?void 0:n[t])?[null==(i=null==e?void 0:e.$attrs)?void 0:i[t]]:[];return[o].flat().reduce(((e,o)=>{if(null!==o&&void 0!==o){const n=typeof o;if("string"===n||"number"===n)e.push(o);else if("object"===n){const n=Array.isArray(o)?r(t,o):Object.entries(o).map((([e,r])=>"style"!==t||!r&&0!==r?r?e:void 0:`${e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${r}`));e=n.length?e.concat(n.filter((e=>!!e))):e}}return e}),a)};Object.entries(t).forEach((([t,o])=>{if(void 0!==o&&null!==o){const n=t.match(/^on(.+)/);n?e.addEventListener(n[1].toLowerCase(),o):"p-bind"===t?Z(e,o):(o="class"===t?[...new Set(r("class",o))].join(" ").trim():"style"===t?r("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[t]=o),e.setAttribute(t,o))}}))}}function J(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function Y(e){return!(null===e||"undefined"===typeof e||!e.nodeName||!J(e))}function Q(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function ee(e,t="",r){X(e)&&null!==r&&void 0!==r&&e.setAttribute(t,r)}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function te(){let e=[];const t=(t,r,o=999)=>{const i=n(t,r,o),a=i.value+(i.key===t?0:o)+1;return e.push({key:t,value:a}),a},r=t=>{e=e.filter((e=>e.value!==t))},o=(e,t)=>n(e,t).value,n=(t,r,o=0)=>[...e].reverse().find((e=>!!r||e.key===t))||{key:t,value:o},i=e=>e&&parseInt(e.style.zIndex,10)||0;return{get:i,set:(e,r,o)=>{r&&(r.style.zIndex=String(t(e,!0,o)))},clear:e=>{e&&(r(i(e)),e.style.zIndex="")},getCurrent:e=>o(e,!0)}}te();var re={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};var oe=r(641),ne=r(953);function ie(e){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(e)}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e,t,r){return(t=le(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e){var t=de(e,"string");return"symbol"==ie(t)?t:t+""}function de(e,t){if("object"!=ie(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=ie(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function ue(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,oe.nI)()?(0,oe.sV)(e):t?e():(0,oe.dY)(e)}var fe=0;function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,ne.KR)(!1),o=(0,ne.KR)(e),n=(0,ne.KR)(null),i=Q()?window.document:void 0,a=t.document,s=void 0===a?i:a,c=t.immediate,l=void 0===c||c,d=t.manual,u=void 0!==d&&d,f=t.name,h=void 0===f?"style_".concat(++fe):f,p=t.id,g=void 0===p?void 0:p,m=t.media,b=void 0===m?void 0:m,v=t.nonce,y=void 0===v?void 0:v,k=t.first,w=void 0!==k&&k,C=t.onMounted,_=void 0===C?void 0:C,x=t.onUpdated,S=void 0===x?void 0:x,I=t.onLoad,T=void 0===I?void 0:I,E=t.props,R=void 0===E?{}:E,B=function(){},O=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s){var a=se(se({},R),i),c=a.name||h,l=a.id||g,d=a.nonce||y;n.value=s.querySelector('style[data-primevue-style-id="'.concat(c,'"]'))||s.getElementById(l)||s.createElement("style"),n.value.isConnected||(o.value=t||e,Z(n.value,{type:"text/css",id:l,media:b,nonce:d}),w?s.head.prepend(n.value):s.head.appendChild(n.value),ee(n.value,"data-primevue-style-id",c),Z(n.value,a),n.value.onload=function(e){return null===T||void 0===T?void 0:T(e,{name:c})},null===_||void 0===_||_(c)),r.value||(B=(0,oe.wB)(o,(function(e){n.value.textContent=e,null===S||void 0===S||S(c)}),{immediate:!0}),r.value=!0)}},A=function(){s&&r.value&&(B(),Y(n.value)&&s.head.removeChild(n.value),r.value=!1)};return l&&!u&&ue(O),{id:g,name:h,el:n,css:o,unload:A,load:O,isLoaded:(0,ne.tB)(r)}}function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(e)}function ge(e,t){return ke(e)||ye(e,t)||be(e,t)||me()}function me(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function be(e,t){if(e){if("string"==typeof e)return ve(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ve(e,t):void 0}}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function ye(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,a,s=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t);else for(;!(c=(o=i.call(r)).done)&&(s.push(o.value),s.length!==t);c=!0);}catch(e){l=!0,n=e}finally{try{if(!c&&null!=r["return"]&&(a=r["return"](),Object(a)!==a))return}finally{if(l)throw n}}return s}}function ke(e){if(Array.isArray(e))return e}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){_e(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _e(e,t,r){return(t=xe(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xe(e){var t=Se(e,"string");return"symbol"==pe(t)?t:t+""}function Se(e,t){if("object"!=pe(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=pe(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var Ie=function(e){var t=e.dt;return"\n* {\n    box-sizing: border-box;\n}\n\n/* Non vue overlay animations */\n.p-connected-overlay {\n    opacity: 0;\n    transform: scaleY(0.8);\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-visible {\n    opacity: 1;\n    transform: scaleY(1);\n}\n\n.p-connected-overlay-hidden {\n    opacity: 0;\n    transform: scaleY(1);\n    transition: opacity 0.1s linear;\n}\n\n/* Vue based overlay animations */\n.p-connected-overlay-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-connected-overlay-leave-to {\n    opacity: 0;\n}\n\n.p-connected-overlay-enter-active {\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-leave-active {\n    transition: opacity 0.1s linear;\n}\n\n/* Toggleable Content */\n.p-toggleable-content-enter-from,\n.p-toggleable-content-leave-to {\n    max-height: 0;\n}\n\n.p-toggleable-content-enter-to,\n.p-toggleable-content-leave-from {\n    max-height: 1000px;\n}\n\n.p-toggleable-content-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n}\n\n.p-toggleable-content-enter-active {\n    overflow: hidden;\n    transition: max-height 1s ease-in-out;\n}\n\n.p-disabled,\n.p-disabled * {\n    cursor: default;\n    pointer-events: none;\n    user-select: none;\n}\n\n.p-disabled,\n.p-component:disabled {\n    opacity: ".concat(t("disabled.opacity"),";\n}\n\n.pi {\n    font-size: ").concat(t("icon.size"),";\n}\n\n.p-icon {\n    width: ").concat(t("icon.size"),";\n    height: ").concat(t("icon.size"),";\n}\n\n.p-overlay-mask {\n    background: ").concat(t("mask.background"),";\n    color: ").concat(t("mask.color"),";\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-overlay-mask-enter {\n    animation: p-overlay-mask-enter-animation ").concat(t("mask.transition.duration")," forwards;\n}\n\n.p-overlay-mask-leave {\n    animation: p-overlay-mask-leave-animation ").concat(t("mask.transition.duration")," forwards;\n}\n\n@keyframes p-overlay-mask-enter-animation {\n    from {\n        background: transparent;\n    }\n    to {\n        background: ").concat(t("mask.background"),";\n    }\n}\n@keyframes p-overlay-mask-leave-animation {\n    from {\n        background: ").concat(t("mask.background"),";\n    }\n    to {\n        background: transparent;\n    }\n}\n")},Te=function(e){var t=e.dt;return"\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(t("scrollbar.width"),";\n}\n")},Ee={},Re={},Be={name:"base",css:Te,theme:Ie,classes:Ee,inlineStyles:Re,load:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},o=r(h(e,{dt:V}));return u(o)?he(y(o),Ce({name:this.name},t)):{}},loadCSS:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this.load(this.theme,t,(function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return q.transformCSS(t.name||e.name,"".concat(o).concat(r))}))},getCommonTheme:function(e){return q.getCommon(this.name,e)},getComponentTheme:function(e){return q.getComponent(this.name,e)},getDirectiveTheme:function(e){return q.getDirective(this.name,e)},getPresetTheme:function(e,t,r){return q.getCustomPreset(this.name,e,t,r)},getLayerOrderThemeCSS:function(){return q.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.css){var r=h(this.css,{dt:V})||"",o=y("".concat(r).concat(e)),n=Object.entries(t).reduce((function(e,t){var r=ge(t,2),o=r[0],n=r[1];return e.push("".concat(o,'="').concat(n,'"'))&&e}),[]).join(" ");return u(o)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(n,">").concat(o,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return q.getCommonStyleSheet(this.name,e,t)},getThemeStyleSheet:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[q.getStyleSheet(this.name,e,t)];if(this.theme){var o="base"===this.name?"global-style":"".concat(this.name,"-style"),n=h(this.theme,{dt:V}),i=y(q.transformCSS(o,n)),a=Object.entries(t).reduce((function(e,t){var r=ge(t,2),o=r[0],n=r[1];return e.push("".concat(o,'="').concat(n,'"'))&&e}),[]).join(" ");u(i)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(a,">").concat(i,"</style>"))}return r.join("")},extend:function(e){return Ce(Ce({},this),{},{css:void 0,theme:void 0},e)}},Oe=C();function Ae(e){return Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae(e)}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){Ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ne(e,t,r){return(t=Le(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Le(e){var t=Me(e,"string");return"symbol"==Ae(t)?t:t+""}function Me(e,t){if("object"!=Ae(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=Ae(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var je={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[re.STARTS_WITH,re.CONTAINS,re.NOT_CONTAINS,re.ENDS_WITH,re.EQUALS,re.NOT_EQUALS],numeric:[re.EQUALS,re.NOT_EQUALS,re.LESS_THAN,re.LESS_THAN_OR_EQUAL_TO,re.GREATER_THAN,re.GREATER_THAN_OR_EQUAL_TO],date:[re.DATE_IS,re.DATE_IS_NOT,re.DATE_BEFORE,re.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},$e=Symbol();function Fe(e,t){var r={config:(0,ne.Kh)(t)};return e.config.globalProperties.$primevue=r,e.provide($e,r),We(),ze(e,r),r}var Ue=[];function We(){D.clear(),Ue.forEach((function(e){return null===e||void 0===e?void 0:e()})),Ue=[]}function ze(e,t){var r=(0,ne.KR)(!1),o=function(){var e;if("none"!==(null===(e=t.config)||void 0===e?void 0:e.theme)&&!q.isStyleNameLoaded("common")){var r,o,n=(null===(r=Be.getCommonTheme)||void 0===r?void 0:r.call(Be))||{},i=n.primitive,a=n.semantic,s=n.global,c=n.style,l={nonce:null===(o=t.config)||void 0===o||null===(o=o.csp)||void 0===o?void 0:o.nonce};Be.load(null===i||void 0===i?void 0:i.css,De({name:"primitive-variables"},l)),Be.load(null===a||void 0===a?void 0:a.css,De({name:"semantic-variables"},l)),Be.load(null===s||void 0===s?void 0:s.css,De({name:"global-variables"},l)),Be.loadTheme(De({name:"global-style"},l),c),q.setLoadedStyleName("common")}};D.on("theme:change",(function(t){r.value||(e.config.globalProperties.$primevue.config.theme=t,r.value=!0)}));var n=(0,oe.wB)(t.config,(function(e,t){Oe.emit("config:change",{newValue:e,oldValue:t})}),{immediate:!0,deep:!0}),i=(0,oe.wB)((function(){return t.config.ripple}),(function(e,t){Oe.emit("config:ripple:change",{newValue:e,oldValue:t})}),{immediate:!0,deep:!0}),a=(0,oe.wB)((function(){return t.config.theme}),(function(e,n){r.value||q.setTheme(e),t.config.unstyled||o(),r.value=!1,Oe.emit("config:theme:change",{newValue:e,oldValue:n})}),{immediate:!0,deep:!0}),s=(0,oe.wB)((function(){return t.config.unstyled}),(function(e,r){!e&&t.config.theme&&o(),Oe.emit("config:unstyled:change",{newValue:e,oldValue:r})}),{immediate:!0,deep:!0});Ue.push(n),Ue.push(i),Ue.push(a),Ue.push(s)}var Ve={install:function(e,t){var r=v(je,t);Fe(e,r)}}},5220:(e,t,r)=>{r.d(t,{LA:()=>ce,aE:()=>ot,lq:()=>at,rd:()=>it});var o=r(641),n=r(953);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof document;function a(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&a(e.default)}const c=Object.assign;function l(e,t){const r={};for(const o in t){const n=t[o];r[o]=u(n)?n.map(e):e(n)}return r}const d=()=>{},u=Array.isArray;const f=/#/g,h=/&/g,p=/\//g,g=/=/g,m=/\?/g,b=/\+/g,v=/%5B/g,y=/%5D/g,k=/%5E/g,w=/%60/g,C=/%7B/g,_=/%7C/g,x=/%7D/g,S=/%20/g;function I(e){return encodeURI(""+e).replace(_,"|").replace(v,"[").replace(y,"]")}function T(e){return I(e).replace(C,"{").replace(x,"}").replace(k,"^")}function E(e){return I(e).replace(b,"%2B").replace(S,"+").replace(f,"%23").replace(h,"%26").replace(w,"`").replace(C,"{").replace(x,"}").replace(k,"^")}function R(e){return E(e).replace(g,"%3D")}function B(e){return I(e).replace(f,"%23").replace(m,"%3F")}function O(e){return null==e?"":B(e).replace(p,"%2F")}function A(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const P=/\/$/,D=e=>e.replace(P,"");function N(e,t,r="/"){let o,n={},i="",a="";const s=t.indexOf("#");let c=t.indexOf("?");return s<c&&s>=0&&(c=-1),c>-1&&(o=t.slice(0,c),i=t.slice(c+1,s>-1?s:t.length),n=e(i)),s>-1&&(o=o||t.slice(0,s),a=t.slice(s,t.length)),o=z(null!=o?o:t,r),{fullPath:o+(i&&"?")+i+a,path:o,query:n,hash:A(a)}}function L(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function j(e,t,r){const o=t.matched.length-1,n=r.matched.length-1;return o>-1&&o===n&&$(t.matched[o],r.matched[n])&&F(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function $(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function F(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!U(e[r],t[r]))return!1;return!0}function U(e,t){return u(e)?W(e,t):u(t)?W(t,e):e===t}function W(e,t){return u(t)?e.length===t.length&&e.every(((e,r)=>e===t[r])):1===e.length&&e[0]===t}function z(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),o=e.split("/"),n=o[o.length-1];".."!==n&&"."!==n||o.push("");let i,a,s=r.length-1;for(i=0;i<o.length;i++)if(a=o[i],"."!==a){if(".."!==a)break;s>1&&s--}return r.slice(0,s).join("/")+"/"+o.slice(i).join("/")}const V={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var H,K;(function(e){e["pop"]="pop",e["push"]="push"})(H||(H={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(K||(K={}));function G(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const q=/^[^#]+#/;function X(e,t){return e.replace(q,"#")+t}function Z(e,t){const r=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-r.left-(t.left||0),top:o.top-r.top-(t.top||0)}}const J=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const r=e.el,o="string"===typeof r&&r.startsWith("#");0;const n="string"===typeof r?o?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!n)return;t=Z(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const r=history.state?history.state.position-t:-1;return r+e}const ee=new Map;function te(e,t){ee.set(e,t)}function re(e){const t=ee.get(e);return ee.delete(e),t}let oe=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:r,search:o,hash:n}=t,i=e.indexOf("#");if(i>-1){let t=n.includes(e.slice(i))?e.slice(i).length:1,r=n.slice(t);return"/"!==r[0]&&(r="/"+r),M(r,"")}const a=M(r,e);return a+o+n}function ie(e,t,r,o){let n=[],i=[],a=null;const s=({state:i})=>{const s=ne(e,location),c=r.value,l=t.value;let d=0;if(i){if(r.value=s,t.value=i,a&&a===c)return void(a=null);d=l?i.position-l.position:0}else o(s);n.forEach((e=>{e(r.value,c,{delta:d,type:H.pop,direction:d?d>0?K.forward:K.back:K.unknown})}))};function l(){a=r.value}function d(e){n.push(e);const t=()=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)};return i.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:J()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:d,destroy:f}}function ae(e,t,r,o=!1,n=!1){return{back:e,current:t,forward:r,replaced:o,position:window.history.length,scroll:n?J():null}}function se(e){const{history:t,location:r}=window,o={value:ne(e,r)},n={value:t.state};function i(o,i,a){const s=e.indexOf("#"),c=s>-1?(r.host&&document.querySelector("base")?e:e.slice(s))+o:oe()+e+o;try{t[a?"replaceState":"pushState"](i,"",c),n.value=i}catch(l){console.error(l),r[a?"replace":"assign"](c)}}function a(e,r){const a=c({},t.state,ae(n.value.back,e,n.value.forward,!0),r,{position:n.value.position});i(e,a,!0),o.value=e}function s(e,r){const a=c({},n.value,t.state,{forward:e,scroll:J()});i(a.current,a,!0);const s=c({},ae(o.value,e,null),{position:a.position+1},r);i(e,s,!1),o.value=e}return n.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:o,state:n,push:s,replace:a}}function ce(e){e=G(e);const t=se(e),r=ie(e,t.state,t.location,t.replace);function o(e,t=!0){t||r.pauseListeners(),history.go(e)}const n=c({location:"",base:e,go:o,createHref:X.bind(null,e)},t,r);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function le(e){return"string"===typeof e||e&&"object"===typeof e}function de(e){return"string"===typeof e||"symbol"===typeof e}const ue=Symbol("");var fe;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(fe||(fe={}));function he(e,t){return c(new Error,{type:e,[ue]:!0},t)}function pe(e,t){return e instanceof Error&&ue in e&&(null==t||!!(e.type&t))}const ge="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},be=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const r=c({},me,t),o=[];let n=r.start?"^":"";const i=[];for(const c of e){const e=c.length?[]:[90];r.strict&&!c.length&&(n+="/");for(let t=0;t<c.length;t++){const o=c[t];let a=40+(r.sensitive?.25:0);if(0===o.type)t||(n+="/"),n+=o.value.replace(be,"\\$&"),a+=40;else if(1===o.type){const{value:e,repeatable:r,optional:s,regexp:l}=o;i.push({name:e,repeatable:r,optional:s});const u=l||ge;if(u!==ge){a+=10;try{new RegExp(`(${u})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+d.message)}}let f=r?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(f=s&&c.length<2?`(?:/${f})`:"/"+f),s&&(f+="?"),n+=f,a+=20,s&&(a+=-8),r&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}o.push(e)}if(r.strict&&r.end){const e=o.length-1;o[e][o[e].length-1]+=.7000000000000001}r.strict||(n+="/?"),r.end?n+="$":r.strict&&(n+="(?:/|$)");const a=new RegExp(n,r.sensitive?"":"i");function s(e){const t=e.match(a),r={};if(!t)return null;for(let o=1;o<t.length;o++){const e=t[o]||"",n=i[o-1];r[n.name]=e&&n.repeatable?e.split("/"):e}return r}function l(t){let r="",o=!1;for(const n of e){o&&r.endsWith("/")||(r+="/"),o=!1;for(const e of n)if(0===e.type)r+=e.value;else if(1===e.type){const{value:i,repeatable:a,optional:s}=e,c=i in t?t[i]:"";if(u(c)&&!a)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!s)throw new Error(`Missing required param "${i}"`);n.length<2&&(r.endsWith("/")?r=r.slice(0,-1):o=!0)}r+=l}}return r||"/"}return{re:a,score:o,keys:i,parse:s,stringify:l}}function ye(e,t){let r=0;while(r<e.length&&r<t.length){const o=t[r]-e[r];if(o)return o;r++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ke(e,t){let r=0;const o=e.score,n=t.score;while(r<o.length&&r<n.length){const e=ye(o[r],n[r]);if(e)return e;r++}if(1===Math.abs(n.length-o.length)){if(we(o))return 1;if(we(n))return-1}return n.length-o.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ce={type:0,value:""},_e=/[a-zA-Z0-9_]/;function xe(e){if(!e)return[[]];if("/"===e)return[[Ce]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${r})/"${l}": ${e}`)}let r=0,o=r;const n=[];let i;function a(){i&&n.push(i),i=[]}let s,c=0,l="",d="";function u(){l&&(0===r?i.push({type:0,value:l}):1===r||2===r||3===r?(i.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:d,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function f(){l+=s}while(c<e.length)if(s=e[c++],"\\"!==s||2===r)switch(r){case 0:"/"===s?(l&&u(),a()):":"===s?(u(),r=1):f();break;case 4:f(),r=o;break;case 1:"("===s?r=2:_e.test(s)?f():(u(),r=0,"*"!==s&&"?"!==s&&"+"!==s&&c--);break;case 2:")"===s?"\\"==d[d.length-1]?d=d.slice(0,-1)+s:r=3:d+=s;break;case 3:u(),r=0,"*"!==s&&"?"!==s&&"+"!==s&&c--,d="";break;default:t("Unknown state");break}else o=r,r=4;return 2===r&&t(`Unfinished custom RegExp for param "${l}"`),u(),a(),n}function Se(e,t,r){const o=ve(xe(e.path),r);const n=c(o,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf===!t.record.aliasOf&&t.children.push(n),n}function Ie(e,t){const r=[],o=new Map;function n(e){return o.get(e)}function i(e,r,o){const n=!o,s=Ee(e);s.aliasOf=o&&o.record;const u=Ae(t,e),f=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(Ee(c({},s,{components:o?o.record.components:s.components,path:e,aliasOf:o?o.record:s})))}let h,p;for(const t of f){const{path:c}=t;if(r&&"/"!==c[0]){const e=r.record.path,o="/"===e[e.length-1]?"":"/";t.path=r.record.path+(c&&o+c)}if(h=Se(t,r,u),o?o.alias.push(h):(p=p||h,p!==h&&p.alias.push(h),n&&e.name&&!Be(h)&&a(e.name)),Ne(h)&&l(h),s.children){const e=s.children;for(let t=0;t<e.length;t++)i(e[t],h,o&&o.children[t])}o=o||h}return p?()=>{a(p)}:d}function a(e){if(de(e)){const t=o.get(e);t&&(o.delete(e),r.splice(r.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=r.indexOf(e);t>-1&&(r.splice(t,1),e.record.name&&o.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(){return r}function l(e){const t=Pe(e,r);r.splice(t,0,e),e.record.name&&!Be(e)&&o.set(e.record.name,e)}function u(e,t){let n,i,a,s={};if("name"in e&&e.name){if(n=o.get(e.name),!n)throw he(1,{location:e});0,a=n.record.name,s=c(Te(t.params,n.keys.filter((e=>!e.optional)).concat(n.parent?n.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Te(e.params,n.keys.map((e=>e.name)))),i=n.stringify(s)}else if(null!=e.path)i=e.path,n=r.find((e=>e.re.test(i))),n&&(s=n.parse(i),a=n.record.name);else{if(n=t.name?o.get(t.name):r.find((e=>e.re.test(t.path))),!n)throw he(1,{location:e,currentLocation:t});a=n.record.name,s=c({},t.params,e.params),i=n.stringify(s)}const l=[];let d=n;while(d)l.unshift(d.record),d=d.parent;return{name:a,path:i,params:s,matched:l,meta:Oe(l)}}function f(){r.length=0,o.clear()}return t=Ae({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:u,removeRoute:a,clearRoutes:f,getRoutes:s,getRecordMatcher:n}}function Te(e,t){const r={};for(const o of t)o in e&&(r[o]=e[o]);return r}function Ee(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Re(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const o in e.components)t[o]="object"===typeof r?r[o]:r;return t}function Be(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oe(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function Ae(e,t){const r={};for(const o in e)r[o]=o in t?t[o]:e[o];return r}function Pe(e,t){let r=0,o=t.length;while(r!==o){const n=r+o>>1,i=ke(e,t[n]);i<0?o=n:r=n+1}const n=De(e);return n&&(o=t.lastIndexOf(n,o-1)),o}function De(e){let t=e;while(t=t.parent)if(Ne(t)&&0===ke(e,t))return t}function Ne({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Le(e){const t={};if(""===e||"?"===e)return t;const r="?"===e[0],o=(r?e.slice(1):e).split("&");for(let n=0;n<o.length;++n){const e=o[n].replace(b," "),r=e.indexOf("="),i=A(r<0?e:e.slice(0,r)),a=r<0?null:A(e.slice(r+1));if(i in t){let e=t[i];u(e)||(e=t[i]=[e]),e.push(a)}else t[i]=a}return t}function Me(e){let t="";for(let r in e){const o=e[r];if(r=R(r),null==o){void 0!==o&&(t+=(t.length?"&":"")+r);continue}const n=u(o)?o.map((e=>e&&E(e))):[o&&E(o)];n.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+r,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const r in e){const o=e[r];void 0!==o&&(t[r]=u(o)?o.map((e=>null==e?null:""+e)):null==o?o:""+o)}return t}const $e=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),We=Symbol(""),ze=Symbol("");function Ve(){let e=[];function t(t){return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}function r(){e=[]}return{add:t,list:()=>e.slice(),reset:r}}function He(e,t,r,o,n,i=e=>e()){const a=o&&(o.enterCallbacks[n]=o.enterCallbacks[n]||[]);return()=>new Promise(((s,c)=>{const l=e=>{!1===e?c(he(4,{from:r,to:t})):e instanceof Error?c(e):le(e)?c(he(2,{from:t,to:e})):(a&&o.enterCallbacks[n]===a&&"function"===typeof e&&a.push(e),s())},d=i((()=>e.call(o&&o.instances[n],t,r,l)));let u=Promise.resolve(d);e.length<3&&(u=u.then(l)),u.catch((e=>c(e)))}))}function Ke(e,t,r,o,n=e=>e()){const i=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(a(l)){const a=l.__vccOpts||l,s=a[t];s&&i.push(He(s,r,o,c,e,n))}else{let a=l();0,i.push((()=>a.then((i=>{if(!i)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const a=s(i)?i.default:i;c.mods[e]=i,c.components[e]=a;const l=a.__vccOpts||a,d=l[t];return d&&He(d,r,o,c,e,n)()}))))}}}return i}function Ge(e){const t=(0,o.WQ)(Ue),r=(0,o.WQ)(We);const i=(0,o.EW)((()=>{const r=(0,n.R1)(e.to);return t.resolve(r)})),a=(0,o.EW)((()=>{const{matched:e}=i.value,{length:t}=e,o=e[t-1],n=r.matched;if(!o||!n.length)return-1;const a=n.findIndex($.bind(null,o));if(a>-1)return a;const s=Ye(e[t-2]);return t>1&&Ye(o)===s&&n[n.length-1].path!==s?n.findIndex($.bind(null,e[t-2])):a})),s=(0,o.EW)((()=>a.value>-1&&Je(r.params,i.value.params))),c=(0,o.EW)((()=>a.value>-1&&a.value===r.matched.length-1&&F(r.params,i.value.params)));function l(r={}){return Ze(r)?t[(0,n.R1)(e.replace)?"replace":"push"]((0,n.R1)(e.to)).catch(d):Promise.resolve()}return{route:i,href:(0,o.EW)((()=>i.value.href)),isActive:s,isExactActive:c,navigate:l}}const qe=(0,o.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const r=(0,n.Kh)(Ge(e)),{options:i}=(0,o.WQ)(Ue),a=(0,o.EW)((()=>({[Qe(e.activeClass,i.linkActiveClass,"router-link-active")]:r.isActive,[Qe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive})));return()=>{const n=t.default&&t.default(r);return e.custom?n:(0,o.h)("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},n)}}}),Xe=qe;function Ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const r in t){const o=t[r],n=e[r];if("string"===typeof o){if(o!==n)return!1}else if(!u(n)||n.length!==o.length||o.some(((e,t)=>e!==n[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,r)=>null!=e?e:null!=t?t:r,et=(0,o.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const i=(0,o.WQ)(ze),a=(0,o.EW)((()=>e.route||i.value)),s=(0,o.WQ)(Fe,0),l=(0,o.EW)((()=>{let e=(0,n.R1)(s);const{matched:t}=a.value;let r;while((r=t[e])&&!r.components)e++;return e})),d=(0,o.EW)((()=>a.value.matched[l.value]));(0,o.Gt)(Fe,(0,o.EW)((()=>l.value+1))),(0,o.Gt)($e,d),(0,o.Gt)(ze,a);const u=(0,n.KR)();return(0,o.wB)((()=>[u.value,d.value,e.name]),(([e,t,r],[o,n,i])=>{t&&(t.instances[r]=e,n&&n!==t&&e&&e===o&&(t.leaveGuards.size||(t.leaveGuards=n.leaveGuards),t.updateGuards.size||(t.updateGuards=n.updateGuards))),!e||!t||n&&$(t,n)&&o||(t.enterCallbacks[r]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const n=a.value,i=e.name,s=d.value,l=s&&s.components[i];if(!l)return tt(r.default,{Component:l,route:n});const f=s.props[i],h=f?!0===f?n.params:"function"===typeof f?f(n):f:null,p=e=>{e.component.isUnmounted&&(s.instances[i]=null)},g=(0,o.h)(l,c({},h,t,{onVnodeUnmounted:p,ref:u}));return tt(r.default,{Component:g,route:n})||g}}});function tt(e,t){if(!e)return null;const r=e(t);return 1===r.length?r[0]:r}const rt=et;function ot(e){const t=Ie(e.routes,e),r=e.parseQuery||Le,a=e.stringifyQuery||Me,s=e.history;const f=Ve(),h=Ve(),p=Ve(),g=(0,n.IJ)(V);let m=V;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),v=l.bind(null,O),y=l.bind(null,A);function k(e,r){let o,n;return de(e)?(o=t.getRecordMatcher(e),n=r):n=e,t.addRoute(n,o)}function w(e){const r=t.getRecordMatcher(e);r&&t.removeRoute(r)}function C(){return t.getRoutes().map((e=>e.record))}function _(e){return!!t.getRecordMatcher(e)}function x(e,o){if(o=c({},o||g.value),"string"===typeof e){const n=N(r,e,o.path),i=t.resolve({path:n.path},o),a=s.createHref(n.fullPath);return c(n,i,{params:y(i.params),hash:A(n.hash),redirectedFrom:void 0,href:a})}let n;if(null!=e.path)n=c({},e,{path:N(r,e.path,o.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];n=c({},e,{params:v(t)}),o.params=v(o.params)}const i=t.resolve(n,o),l=e.hash||"";i.params=b(y(i.params));const d=L(a,c({},e,{hash:T(l),path:i.path})),u=s.createHref(d);return c({fullPath:d,hash:l,query:a===Me?je(e.query):e.query||{}},i,{redirectedFrom:void 0,href:u})}function S(e){return"string"===typeof e?N(r,e,g.value.path):c({},e)}function I(e,t){if(m!==e)return he(8,{from:t,to:e})}function E(e){return P(e)}function R(e){return E(c(S(e),{replace:!0}))}function B(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:r}=t;let o="function"===typeof r?r(e):r;return"string"===typeof o&&(o=o.includes("?")||o.includes("#")?o=S(o):{path:o},o.params={}),c({query:e.query,hash:e.hash,params:null!=o.path?{}:e.params},o)}}function P(e,t){const r=m=x(e),o=g.value,n=e.state,i=e.force,s=!0===e.replace,l=B(r);if(l)return P(c(S(l),{state:"object"===typeof l?c({},n,l.state):n,force:i,replace:s}),t||r);const d=r;let u;return d.redirectedFrom=t,!i&&j(a,o,r)&&(u=he(16,{to:d,from:o}),oe(o,o,!0,!1)),(u?Promise.resolve(u):$(d,o)).catch((e=>pe(e)?pe(e,2)?e:ee(e):X(e,d,o))).then((e=>{if(e){if(pe(e,2))return P(c({replace:s},S(e.to),{state:"object"===typeof e.to?c({},n,e.to.state):n,force:i}),t||d)}else e=U(d,o,!0,s,n);return F(d,o,e),e}))}function D(e,t){const r=I(e,t);return r?Promise.reject(r):Promise.resolve()}function M(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function $(e,t){let r;const[o,n,i]=nt(e,t);r=Ke(o.reverse(),"beforeRouteLeave",e,t);for(const s of o)s.leaveGuards.forEach((o=>{r.push(He(o,e,t))}));const a=D.bind(null,e,t);return r.push(a),ce(r).then((()=>{r=[];for(const o of f.list())r.push(He(o,e,t));return r.push(a),ce(r)})).then((()=>{r=Ke(n,"beforeRouteUpdate",e,t);for(const o of n)o.updateGuards.forEach((o=>{r.push(He(o,e,t))}));return r.push(a),ce(r)})).then((()=>{r=[];for(const o of i)if(o.beforeEnter)if(u(o.beforeEnter))for(const n of o.beforeEnter)r.push(He(n,e,t));else r.push(He(o.beforeEnter,e,t));return r.push(a),ce(r)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),r=Ke(i,"beforeRouteEnter",e,t,M),r.push(a),ce(r)))).then((()=>{r=[];for(const o of h.list())r.push(He(o,e,t));return r.push(a),ce(r)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function F(e,t,r){p.list().forEach((o=>M((()=>o(e,t,r)))))}function U(e,t,r,o,n){const a=I(e,t);if(a)return a;const l=t===V,d=i?history.state:{};r&&(o||l?s.replace(e.fullPath,c({scroll:l&&d&&d.scroll},n)):s.push(e.fullPath,n)),g.value=e,oe(e,t,r,l),ee()}let W;function z(){W||(W=s.listen(((e,t,r)=>{if(!se.listening)return;const o=x(e),n=B(o);if(n)return void P(c(n,{replace:!0}),o).catch(d);m=o;const a=g.value;i&&te(Q(a.fullPath,r.delta),J()),$(o,a).catch((e=>pe(e,12)?e:pe(e,2)?(P(e.to,o).then((e=>{pe(e,20)&&!r.delta&&r.type===H.pop&&s.go(-1,!1)})).catch(d),Promise.reject()):(r.delta&&s.go(-r.delta,!1),X(e,o,a)))).then((e=>{e=e||U(o,a,!1),e&&(r.delta&&!pe(e,8)?s.go(-r.delta,!1):r.type===H.pop&&pe(e,20)&&s.go(-1,!1)),F(o,a,e)})).catch(d)})))}let K,G=Ve(),q=Ve();function X(e,t,r){ee(e);const o=q.list();return o.length?o.forEach((o=>o(e,t,r))):console.error(e),Promise.reject(e)}function Z(){return K&&g.value!==V?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))}function ee(e){return K||(K=!e,z(),G.list().forEach((([t,r])=>e?r(e):t())),G.reset()),e}function oe(t,r,n,a){const{scrollBehavior:s}=e;if(!i||!s)return Promise.resolve();const c=!n&&re(Q(t.fullPath,0))||(a||!n)&&history.state&&history.state.scroll||null;return(0,o.dY)().then((()=>s(t,r,c))).then((e=>e&&Y(e))).catch((e=>X(e,t,r)))}const ne=e=>s.go(e);let ie;const ae=new Set,se={currentRoute:g,listening:!0,addRoute:k,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:_,getRoutes:C,resolve:x,options:e,push:E,replace:R,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:f.add,beforeResolve:h.add,afterEach:p.add,onError:q.add,isReady:Z,install(e){const t=this;e.component("RouterLink",Xe),e.component("RouterView",rt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,n.R1)(g)}),i&&!ie&&g.value===V&&(ie=!0,E(s.location).catch((e=>{0})));const r={};for(const n in V)Object.defineProperty(r,n,{get:()=>g.value[n],enumerable:!0});e.provide(Ue,t),e.provide(We,(0,n.Gc)(r)),e.provide(ze,g);const o=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(m=V,W&&W(),W=null,g.value=V,ie=!1,K=!1),o()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>M(t)))),Promise.resolve())}return se}function nt(e,t){const r=[],o=[],n=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const i=t.matched[a];i&&(e.matched.find((e=>$(e,i)))?o.push(i):r.push(i));const s=e.matched[a];s&&(t.matched.find((e=>$(e,s)))||n.push(s))}return[r,o,n]}function it(){return(0,o.WQ)(Ue)}function at(e){return(0,o.WQ)(We)}}}]);
//# sourceMappingURL=chunk-vendors.daf83a39.js.map