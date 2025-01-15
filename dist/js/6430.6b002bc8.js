"use strict";(self["webpackChunkhiddenkittens"]=self["webpackChunkhiddenkittens"]||[]).push([[6430],{6430:(t,e,n)=>{n.d(e,{gS:()=>nd,C3:()=>ad,hq:()=>od,rJ:()=>ol,CL:()=>rd,H9:()=>al,x7:()=>Yl,GG:()=>Zl,aU:()=>hl,BN:()=>td,mZ:()=>ed});var s,i=n(9928),r=n(5125),o=n(3424),a=n(6743),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={},h=h||{},l=u||self;function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++p)}var m="closure_uid_"+(1e9*Math.random()>>>0),p=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,w.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var C=0;b.prototype.s=!1,b.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==C)||g(this)},b.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function I(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function A(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let i=0;i<s;i++)t[n+i]=e[i]}else t.push(e)}}function _(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",(()=>{}),e),l.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function N(t){return/^[\s\xa0]*$/.test(t)}function D(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=D().indexOf(t)}function R(t){return R[" "](t),t}function M(t,e){var n=Es;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}R[" "]=function(){};var L,O,F=x("Opera"),P=x("Trident")||x("MSIE"),V=x("Edge"),U=V||P,q=x("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),B=-1!=D().toLowerCase().indexOf("webkit")&&!x("Edge");function j(){var t=l.document;return t?t.documentMode:void 0}t:{var z="",K=function(){var t=D();return q?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):F?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(z=K?K[1]:""),P){var $=j();if(null!=$&&$>parseFloat(z)){L=String($);break t}}L=z}if(l.document&&P){var G=j();O=G||(parseInt(L,10)||void 0)}else O=void 0;var Q=O;function H(t,e){if(_.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{R(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:W[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&H.$.h.call(this)}}T(H,_);var W={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<st.length;e++)n=st[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function rt(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=S(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}rt.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=at(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),ct={};function ht(t,e,n,s,i){if(s&&s.once)return ft(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ht(t,e[r],n,s,i);return null}return n=Et(n),t&&t[X]?t.O(e,n,f(s)?!!s.capture:!!s,i):lt(t,e,n,!1,s,i)}function lt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ut]=a=new rt(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=dt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)k||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(pt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function ft(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ft(t,e[r],n,s,i);return null}return n=Et(n),t&&t[X]?t.P(e,n,f(s)?!!s.capture:!!s,i):lt(t,e,n,!0,s,i)}function gt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)gt(t,e[r],n,s,i);else s=f(s)?!!s.capture:!!s,n=Et(n),t&&t[X]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=at(r,n,s,i),-1<n&&(Z(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,s,i)),(n=-1<t?e[t]:null)&&mt(n))}function mt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[X])ot(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ut]=null)):Z(t)}}}function pt(t){return t in ct?ct[t]:ct[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new H(e,this);var n=t.listener,s=t.la||t.src;t.ia&&mt(t),t=n.call(s,e)}return t}function vt(t){return t=t[ut],t instanceof rt?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Et(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function Tt(){b.call(this),this.i=new rt(this),this.S=this,this.J=null}function bt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"===typeof e)e=new _(e,t);else if(e instanceof _)e.target=e.target||t;else{var i=e;e=new _(s,t),it(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ct(o,s,!0,e)&&i}if(o=e.g=t,i=Ct(o,s,!0,e)&&i,i=Ct(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ct(o,s,!1,e)&&i}function Ct(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}T(Tt,b),Tt.prototype[X]=!0,Tt.prototype.removeEventListener=function(t,e,n,s){gt(this,t,e,n,s)},Tt.prototype.N=function(){if(Tt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Z(n[s]);delete e.g[t],e.h--}}this.J=null},Tt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Tt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var St=l.JSON.stringify;class It{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function At(){var t=Lt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _t{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt=new It((()=>new Nt),(t=>t.reset()));class Nt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Dt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xt(t){l.setTimeout((()=>{throw t}),0)}let Rt,Mt=!1,Lt=new _t,Ot=()=>{const t=l.Promise.resolve(void 0);Rt=()=>{t.then(Ft)}};var Ft=()=>{for(var t;t=At();){try{t.h.call(t.g)}catch(n){xt(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mt=!1};function Pt(t,e){Tt.call(this),this.h=t||1,this.g=e||l,this.j=w(this.qb,this),this.l=Date.now()}function Vt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ut(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function qt(t){t.g=Ut((()=>{t.g=null,t.i&&(t.i=!1,qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}T(Pt,Tt),s=Pt.prototype,s.ga=!1,s.T=null,s.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),bt(this,"tick"),this.ga&&(Vt(this),this.start()))}},s.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.N=function(){Pt.$.N.call(this),Vt(this),delete this.g};class Bt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){b.call(this),this.h=t,this.g={}}T(jt,b);var zt=[];function Kt(t,e,n,s){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var i=0;i<n.length;i++){var r=ht(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $t(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mt(t)}),t),t.g={}}function Gt(){this.g=!0}function Qt(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Ht(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Wt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(s?" "+s:"")}))}function Xt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return St(n)}catch(a){return e}}jt.prototype.N=function(){jt.$.N.call(this),$t(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gt.prototype.Ea=function(){this.g=!1},Gt.prototype.info=function(){};var Jt={},Zt=null;function te(){return Zt=Zt||new Tt}function ee(t){_.call(this,Jt.Ta,t)}function ne(t){const e=te();bt(e,new ee(e))}function se(t,e){_.call(this,Jt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();bt(e,new se(e,t))}function re(t,e){_.call(this,Jt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}Jt.Ta="serverreachability",T(ee,_),Jt.STAT_EVENT="statevent",T(se,_),Jt.Ua="timingevent",T(re,_);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ue={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ce(){}function he(t){return t.h||(t.h=t.i())}function le(){}ce.prototype.h=null;var de,fe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ge(){_.call(this,"d")}function me(){_.call(this,"c")}function pe(){}function ye(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new jt(this),this.P=we,t=U?125:void 0,this.V=new Pt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}T(ge,_),T(me,_),T(pe,ce),pe.prototype.g=function(){return new XMLHttpRequest},pe.prototype.i=function(){return{}},de=new pe;var we=45e3,Ee={},Te={};function be(t,e,n){t.L=1,t.v=Ke(Ue(e)),t.s=n,t.S=!0,Ce(t,null)}function Ce(t,e){t.G=Date.now(),_e(t),t.A=Ue(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),sn(n.i,"t",s),t.C=0,n=t.l.J,t.h=new ve,t.g=cs(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Bt(w(t.Pa,t,t.g),t.O)),Kt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Qt(t.j,t.u,t.A,t.m,t.W,t.s)}function Se(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Ie(t,e,n){let s,i=!0;for(;!t.J&&t.C<n.length;){if(s=Ae(t,n),s==Te){4==e&&(t.o=4,ie(14),i=!1),Wt(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ee){t.o=4,ie(15),Wt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Wt(t.j,t.m,s,null),Re(t,s)}Se(t)&&s!=Te&&s!=Ee&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),es(e),e.M=!0,ie(11))):(Wt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),De(t))}function Ae(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Te:(n=Number(e.substring(n,s)),isNaN(n)?Ee:(s+=1,s+n>e.length?Te:(e=e.slice(s,s+n),t.C=s+n,e)))}function _e(t){t.Y=Date.now()+t.P,ke(t,t.P)}function ke(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(w(t.lb,t),e)}function Ne(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.H||t.J||is(t.l,t)}function xe(t){Ne(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Vt(t.V),$t(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Re(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||dn(n.i,t)))if(!t.K&&dn(n.i,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;ss(n),Gn(n)}ts(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(w(n.ib,n),6e3));if(1>=ln(n.i)&&n.oa){try{n.oa()}catch(c){}n.oa=void 0}}else os(n,11)}else if((t.K||n.g==t)&&ss(n),!N(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(fn(r,r.h),r.h=null))}if(s.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,ze(s.I,s.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=us(s,s.J?s.pa:null,s.Y),o.K){gn(s.i,o);var a=o,u=s.L;u&&a.setTimeout(u),a.B&&(Ne(a),_e(a)),s.g=o}else Zn(s);0<n.j.length&&Hn(n)}else"stop"!=c[0]&&"close"!=c[0]||os(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?os(n,7):$n(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}ne(4)}catch(c){}}function Me(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Le(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Oe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Le(t),s=Me(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}s=ye.prototype,s.setTimeout=function(t){this.P=t},s.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},s.Pa=function(t){try{if(t==this.g)t:{const h=Vn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>h)&&(3!=h||U||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=h||7==e||ne(8==e||0>=d?3:2),Ne(this);var n=this.g.da();this.ca=n;e:if(Se(this)){var s=Un(this.g);t="";var i=s.length,r=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),De(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ht(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ie(12),xe(this),De(this);break t}Wt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Re(this,n)}this.S?(Ie(this,h,o),U&&this.i&&3==h&&(Kt(this.U,this.V,"tick",this.mb),this.V.start())):(Wt(this.j,this.m,o,null),Re(this,o)),4==h&&xe(this),this.i&&!this.J&&(4==h?is(this.l,this):(this.i=!1,_e(this)))}else qn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),xe(this),De(this)}}}catch(h){}},s.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(Ne(this),Ie(this,t,e),this.i&&4!=t&&_e(this))}},s.cancel=function(){this.J=!0,xe(this)},s.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Xt(this.j,this.A),2!=this.L&&(ne(),ie(17)),xe(this),this.o=2,De(this)):ke(this,this.Y-t)};var Fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ve(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=t.h,qe(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),je(this,n),this.o=t.o}else t&&(e=String(t).match(Fe))?(this.h=!1,qe(this,e[1]||"",!0),this.s=$e(e[2]||""),this.g=$e(e[3]||"",!0),Be(this,e[4]),this.l=$e(e[5]||"",!0),je(this,e[6]||"",!0),this.o=$e(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Ue(t){return new Ve(t)}function qe(t,e,n){t.j=n?$e(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function je(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=Ge(e,Ye)),t.i=new Ze(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function Ke(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $e(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ge(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Qe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ge(e,He,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ge(e,He,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ge(n,"/"==n.charAt(0)?Xe:We,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ge(n,Je)),t.join("")};var He=/[#\/\?@]/g,We=/[#\?:]/g,Xe=/[#\?]/g,Ye=/[#\?@]/g,Je=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Pe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=rn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=rn(t,e),t.g.has(e)}function sn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(rn(t,e),I(n)),t.h+=n.length)}function rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),sn(this,n,t))}),t)),t.j=e}s=Ze.prototype,s.add=function(t,e){tn(this),this.i=null,t=rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){tn(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},s.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},s.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(rn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},s.set=function(t,e){return tn(this),this.i=null,t=rn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function un(t){this.l=t||cn,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ka&&l.g.Ka()&&l.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function hn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ln(t){return t.h?1:t.g?t.g.size:0}function dn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function fn(t,e){t.g?t.g.add(e):t.h=e}function gn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function mn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return I(t.i)}un.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var pn=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function yn(){this.g=new pn}function vn(t,e,n){const s=n||"";try{Oe(t,(function(t,n){let i=t;f(t)&&(i=St(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function wn(t,e){const n=new Gt;if(l.Image){const s=new Image;s.onload=E(En,n,s,"TestLoadImage: loaded",!0,e),s.onerror=E(En,n,s,"TestLoadImage: error",!1,e),s.onabort=E(En,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=E(En,n,s,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function En(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function Tn(t){this.l=t.fc||null,this.j=t.ob||!1}function bn(t,e){Tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}T(Tn,ce),Tn.prototype.g=function(){return new bn(this.l,this.j)},Tn.prototype.i=function(t){return function(){return t}}({}),T(bn,Tt);var Cn=0;function Sn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function In(t){t.readyState=4,t.l=null,t.j=null,t.A=null,An(t)}function An(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=bn.prototype,s.open=function(t,e){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,An(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||l).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=Cn},s.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},s.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?In(this):An(this),3==this.readyState&&Sn(this)}},s.Za=function(t){this.g&&(this.response=this.responseText=t,In(this))},s.Ya=function(t){this.g&&(this.response=t,In(this))},s.ka=function(){this.g&&In(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var _n=l.JSON.parse;function kn(t){Tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nn,this.L=this.M=!1}T(kn,Tt);var Nn="",Dn=/^https?$/i,xn=["POST","PUT"];function Rn(t){return P&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ln(t),Fn(t)}function Ln(t){t.F||(t.F=!0,bt(t,"complete"),bt(t,"error"))}function On(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))Ut(t.La,0,t);else if(bt(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.I).match(Fe)[1]||null;!i&&l.self&&l.self.location&&(i=l.self.location.protocol.slice(0,-1)),s=!Dn.test(i?i.toLowerCase():"")}n=s}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var r=2<Vn(t)?t.g.statusText:""}catch(o){r=""}t.j=r+" ["+t.da()+"]",Ln(t)}}finally{Fn(t)}}}function Fn(t,e){if(t.g){Pn(t);const s=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||bt(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function Pn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function Un(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Hs){return null}}function qn(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(N(t[s]))continue;var n=Dt(t[s]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}et(e,(function(t){return t.join(", ")}))}function Bn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function jn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):ze(t,e,n))}function zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ga=0,this.j=[],this.l=new Gt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,t),this.hb=zn("retryDelaySeedMs",1e4,t),this.eb=zn("forwardChannelMaxRetries",2,t),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new un(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function $n(t){if(Qn(t),3==t.H){var e=t.W++,n=Ue(t.I);if(ze(n,"SID",t.K),ze(n,"RID",e),ze(n,"TYPE","terminate"),Yn(t,n),e=new ye(t,t.l,e),e.L=2,e.v=Ke(Ue(n)),n=!1,l.navigator&&l.navigator.sendBeacon)try{n=l.navigator.sendBeacon(e.v.toString(),"")}catch(s){}!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=cs(e.l,null),e.g.ha(e.v)),e.G=Date.now(),_e(e)}as(t)}function Gn(t){t.g&&(es(t),t.g.cancel(),t.g=null)}function Qn(t){Gn(t),t.u&&(l.clearTimeout(t.u),t.u=null),ss(t),t.i.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function Hn(t){if(!hn(t.i)&&!t.m){t.m=!0;var e=t.Na;Rt||Ot(),Mt||(Rt(),Mt=!0),Lt.add(e,t),t.C=0}}function Wn(t,e){return!(ln(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(w(t.Na,t,e),rs(t,t.C)),t.C++,!0))}function Xn(t,e){var n;n=e?e.m:t.W++;const s=Ue(t.I);ze(s,"SID",t.K),ze(s,"RID",n),ze(s,"AID",t.V),Yn(t,s),t.o&&t.s&&jn(s,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),fn(t.i,n),be(n,s,e)}function Yn(t,e){t.na&&tt(t.na,(function(t,n){ze(e,n,t)})),t.h&&Oe({},(function(t,n){ze(e,n,t)}))}function Jn(t,e,n){n=Math.min(t.j.length,n);var s=t.h?w(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),r=!1;else try{vn(a,t,"req"+n+"_")}catch(ri){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,s}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Rt||Ot(),Mt||(Rt(),Mt=!0),Lt.add(e,t),t.A=0}}function ts(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(w(t.Ma,t),rs(t,t.A)),t.A++,!0)}function es(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function ns(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ue(t.wa);ze(e,"RID","rpc"),ze(e,"SID",t.K),ze(e,"AID",t.V),ze(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ze(e,"TO",t.qa),ze(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&jn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ke(Ue(e)),n.s=null,n.S=!0,Ce(n,t)}function ss(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function is(t,e){var n=null;if(t.g==e){ss(t),es(t),t.g=null;var s=2}else{if(!dn(t.i,e))return;n=e.F,gn(t.i,e),s=1}if(0!=t.H)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=te(),bt(s,new re(s,n)),Hn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==s&&Wn(t,e)||2==s&&ts(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}function rs(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function os(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var s=w(t.pb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||qe(n,"https"),Ke(n)),wn(n.toString(),s)}else ie(2);t.H=0,t.h&&t.h.za(e),as(t),Qn(t)}function as(t){if(t.H=0,t.ma=[],t.h){const e=mn(t.i);0==e.length&&0==t.j.length||(A(t.ma,e),A(t.ma,t.j),t.i.i.length=0,I(t.j),t.j.length=0),t.h.ya()}}function us(t,e,n){var s=n instanceof Ve?Ue(n):new Ve(n);if(""!=s.g)e&&(s.g=e+"."+s.g),Be(s,s.m);else{var i=l.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ve(null);s&&qe(r,s),e&&(r.g=e),i&&Be(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ze(s,n,e),ze(s,"VER",t.ra),Yn(t,s),s}function cs(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new kn(new Tn({ob:!0})):new kn(t.va),e.Oa(t.J),e}function hs(){}function ls(){if(P&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function ds(t,e){Tt.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}function fs(t){ge.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function gs(){me.call(this),this.status=1}function ms(t){this.g=t}function ps(){this.blockSize=-1}function ys(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vs(t,e,n){n||(n=0);var s=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}function ws(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=0|t[i];s&&r==e||(n[i]=r,s=!1)}this.g=n}s=kn.prototype,s.Oa=function(t){this.M=t},s.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():de.g(),this.C=this.u?he(this.u):he(de),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){return void Mn(this,r)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=l.FormData&&t instanceof l.FormData,!(0<=S(xn,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pn(this),0<this.B&&((this.L=Rn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Ut(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Mn(this,r)}},s.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),Fn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),kn.$.N.call(this)},s.La=function(){this.s||(this.G||this.v||this.l?On(this):this.kb())},s.kb=function(){On(this)},s.isActive=function(){return!!this.g},s.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},s.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),_n(e)}},s.Ia=function(){return this.m},s.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Kn.prototype,s.ra=8,s.H=1,s.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ye(this,this.l,t);let r=this.s;if(this.U&&(r?(r=nt(r),it(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var s=this.j[n];if(s="__data__"in s.map&&(s=s.map.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jn(this,i,e),n=Ue(this.I),ze(n,"RID",t),ze(n,"CVER",22),this.F&&ze(n,"X-HTTP-Session-Id",this.F),Yn(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Bn(r)))+"&"+e:this.o&&jn(n,this.o,r)),fn(this.i,i),this.bb&&ze(n,"TYPE","init"),this.P?(ze(n,"$req",e),ze(n,"SID","null"),i.aa=!0,be(i,n,null)):be(i,n,e),this.H=2}}else 3==this.H&&(t?Xn(this,t):0==this.j.length||hn(this.i)||Xn(this))},s.Ma=function(){if(this.u=null,ns(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(w(this.jb,this),t)}},s.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Gn(this),ns(this))},s.ib=function(){null!=this.v&&(this.v=null,Gn(this),ts(this),ie(19))},s.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},s.isActive=function(){return!!this.h&&this.h.isActive(this)},s=hs.prototype,s.Ba=function(){},s.Aa=function(){},s.za=function(){},s.ya=function(){},s.isActive=function(){return!0},s.Va=function(){},ls.prototype.g=function(t,e){return new ds(t,e)},T(ds,Tt),ds.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=us(t,null,t.Y),Hn(t)},ds.prototype.close=function(){$n(this.g)},ds.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=St(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Hn(e)},ds.prototype.N=function(){this.g.h=null,delete this.j,$n(this.g),delete this.g,ds.$.N.call(this)},T(fs,ge),T(gs,me),T(ms,hs),ms.prototype.Ba=function(){bt(this.g,"a")},ms.prototype.Aa=function(t){bt(this.g,new fs(t))},ms.prototype.za=function(t){bt(this.g,new gs)},ms.prototype.ya=function(){bt(this.g,"b")},T(ys,ps),ys.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ys.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(0==i)for(;r<=n;)vs(this,t,r),r+=this.blockSize;if("string"===typeof t){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){vs(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){vs(this,s),i=0;break}}this.h=i,this.i+=e},ys.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var Es={};function Ts(t){return-128<=t&&128>t?M(t,(function(t){return new ws([0|t],0>t?-1:0)})):new ws([0|t],0>t?-1:0)}function bs(t){if(isNaN(t)||!isFinite(t))return Is;if(0>t)return Ds(bs(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ss;return new ws(e,0)}function Cs(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Ds(Cs(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bs(Math.pow(e,8)),s=Is,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=bs(Math.pow(e,r)),s=s.R(r).add(bs(o))):(s=s.R(n),s=s.add(bs(o)))}return s}var Ss=4294967296,Is=Ts(0),As=Ts(1),_s=Ts(16777216);function ks(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Ns(t){return-1==t.h}function Ds(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ws(n,~t.h).add(As)}function xs(t,e){return t.add(Ds(e))}function Rs(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ms(t,e){this.g=t,this.h=e}function Ls(t,e){if(ks(e))throw Error("division by zero");if(ks(t))return new Ms(Is,Is);if(Ns(t))return e=Ls(Ds(t),e),new Ms(Ds(e.g),Ds(e.h));if(Ns(e))return e=Ls(t,Ds(e)),new Ms(Ds(e.g),e.h);if(30<t.g.length){if(Ns(t)||Ns(e))throw Error("slowDivide_ only works with positive integers.");for(var n=As,s=e;0>=s.X(t);)n=Os(n),s=Os(s);var i=Fs(n,1),r=Fs(s,1);for(s=Fs(s,2),n=Fs(n,2);!ks(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Fs(s,1),n=Fs(n,1)}return e=xs(t,i.R(e)),new Ms(i,e)}for(i=Is;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=bs(n),o=r.R(e);Ns(o)||0<o.X(t);)n-=s,r=bs(n),o=r.R(e);ks(r)&&(r=As),i=i.add(r),t=xs(t,o)}return new Ms(i,t)}function Os(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ws(n,t.h)}function Fs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ws(i,t.h)}s=ws.prototype,s.ea=function(){if(Ns(this))return-Ds(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ss+s)*e,e*=Ss}return t},s.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ks(this))return"0";if(Ns(this))return"-"+Ds(this).toString(t);for(var e=bs(Math.pow(t,6)),n=this,s="";;){var i=Ls(n,e).g;n=xs(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ks(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},s.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},s.X=function(t){return t=xs(this,t),Ns(t)?-1:ks(t)?0:1},s.abs=function(){return Ns(this)?Ds(this):this},s.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(65535&this.D(i))+(65535&t.D(i)),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ws(n,-2147483648&n[n.length-1]?-1:0)},s.R=function(t){if(ks(this)||ks(t))return Is;if(Ns(this))return Ns(t)?Ds(this).R(Ds(t)):Ds(Ds(this).R(t));if(Ns(t))return Ds(this.R(Ds(t)));if(0>this.X(_s)&&0>t.X(_s))return bs(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=65535&this.D(s),a=t.D(i)>>>16,u=65535&t.D(i);n[2*s+2*i]+=o*u,Rs(n,2*s+2*i),n[2*s+2*i+1]+=r*u,Rs(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Rs(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Rs(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ws(n,0)},s.gb=function(t){return Ls(this,t).h},s.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ws(n,this.h&t.h)},s.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ws(n,this.h|t.h)},s.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ws(n,this.h^t.h)},ls.prototype.createWebChannel=ls.prototype.g,ds.prototype.send=ds.prototype.u,ds.prototype.open=ds.prototype.m,ds.prototype.close=ds.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ue.COMPLETE="complete",le.EventType=fe,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",Tt.prototype.listen=Tt.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,ys.prototype.digest=ys.prototype.l,ys.prototype.reset=ys.prototype.reset,ys.prototype.update=ys.prototype.j,ws.prototype.add=ws.prototype.add,ws.prototype.multiply=ws.prototype.R,ws.prototype.modulo=ws.prototype.gb,ws.prototype.compare=ws.prototype.X,ws.prototype.toNumber=ws.prototype.ea,ws.prototype.toString=ws.prototype.toString,ws.prototype.getBits=ws.prototype.D,ws.fromNumber=bs,ws.fromString=Cs;var Ps=c.createWebChannelTransport=function(){return new ls},Vs=c.getStatEventTarget=function(){return te()},Us=c.ErrorCode=ae,qs=c.EventType=ue,Bs=c.Event=Jt,js=c.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zs=c.FetchXmlHttpFactory=Tn,Ks=c.WebChannel=le,$s=c.XhrIo=kn,Gs=c.Md5=ys,Qs=c.Integer=ws;const Hs="@firebase/firestore";
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
 */class Ws{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ws.UNAUTHENTICATED=new Ws(null),Ws.GOOGLE_CREDENTIALS=new Ws("google-credentials-uid"),Ws.FIRST_PARTY=new Ws("first-party-uid"),Ws.MOCK_USER=new Ws("mock-user");
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
let Xs="9.23.0";
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
 */const Ys=new o.Vy("@firebase/firestore");function Js(){return Ys.logLevel}function Zs(t,...e){if(Ys.logLevel<=o.$b.DEBUG){const n=e.map(ni);Ys.debug(`Firestore (${Xs}): ${t}`,...n)}}function ti(t,...e){if(Ys.logLevel<=o.$b.ERROR){const n=e.map(ni);Ys.error(`Firestore (${Xs}): ${t}`,...n)}}function ei(t,...e){if(Ys.logLevel<=o.$b.WARN){const n=e.map(ni);Ys.warn(`Firestore (${Xs}): ${t}`,...n)}}function ni(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function si(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function ii(t,e){t||si()}function ri(t,e){return t}
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
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ui{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ci{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ws.UNAUTHENTICATED)))}shutdown(){}}class li{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class di{constructor(t){this.t=t,this.currentUser=Ws.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ui,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Zs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zs("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ui)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ii("string"==typeof e.accessToken),new ci(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ii(null===t||"string"==typeof t),new Ws(t)}}class fi{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Ws.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class gi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new fi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ws.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pi{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Zs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Zs("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Zs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):Zs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ii("string"==typeof t.token),this.T=t.token,new mi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function yi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */class vi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=yi(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function wi(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class Ti{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ti.fromMillis(Date.now())}static fromDate(t){return Ti.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ti(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?wi(this.nanoseconds,t.nanoseconds):wi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class bi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new bi(t)}static min(){return new bi(new Ti(0,0))}static max(){return new bi(new Ti(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Ci{constructor(t,e,n){void 0===e?e=0:e>t.length&&si(),void 0===n?n=t.length-e:n>t.length-e&&si(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ci.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ci?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Si extends Ci{construct(t,e,n){return new Si(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Si(e)}static emptyPath(){return new Si([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ai extends Ci{construct(t,e,n){return new Ai(t,e,n)}static isValidIdentifier(t){return Ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ai.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ai(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ai(e)}static emptyPath(){return new Ai([])}}
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
 */class _i{constructor(t){this.path=t}static fromPath(t){return new _i(Si.fromString(t))}static fromName(t){return new _i(Si.fromString(t).popFirst(5))}static empty(){return new _i(Si.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Si.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Si.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _i(new Si(t.slice()))}}
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
 */class ki{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ki.UNKNOWN_ID=-1;function Ni(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=bi.fromTimestamp(1e9===s?new Ti(n+1,0):new Ti(n,s));return new xi(i,_i.empty(),e)}function Di(t){return new xi(t.readTime,t.key,-1)}class xi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new xi(bi.min(),_i.empty(),-1)}static max(){return new xi(bi.max(),_i.empty(),-1)}}function Ri(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=_i.comparator(t.documentKey,e.documentKey),0!==n?n:wi(t.largestBatchId,e.largestBatchId)
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
 */)}const Mi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Li{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function Oi(t){if(t.code!==oi.FAILED_PRECONDITION||t.message!==Mi)throw t;Zs("LocalStore","Unexpectedly lost primary lease")}
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
 */class Fi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Fi(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Fi?e:Fi.resolve(e)}catch(t){return Fi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Fi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Fi.reject(e)}static resolve(t){return new Fi(((e,n)=>{e(t)}))}static reject(t){return new Fi(((e,n)=>{n(t)}))}static waitFor(t){return new Fi(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Fi.resolve(!1);for(const n of t)e=e.next((t=>t?Fi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Fi(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{r[u]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Fi(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
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
 */function Pi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
class Vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Ui(t){return null==t}function qi(t){return 0===t&&1/t==-1/0}function Bi(t){return"number"==typeof t&&Number.isInteger(t)&&!qi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */Vi.ct=-1;const ji=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ki=zi;
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
function $i(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Hi{constructor(t,e){this.comparator=t,this.root=e||Xi.EMPTY}insert(t,e){return new Hi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xi.BLACK,null,null))}remove(t){return new Hi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wi(this.root,t,this.comparator,!0)}}class Wi{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xi{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Xi.RED,this.left=null!=s?s:Xi.EMPTY,this.right=null!=i?i:Xi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Xi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Xi.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const t=this.left.check();if(t!==this.right.check())throw si();return t+(this.isRed()?0:1)}}Xi.EMPTY=null,Xi.RED=!0,Xi.BLACK=!1,Xi.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Xi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Yi{constructor(t){this.comparator=t,this.data=new Hi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ji(this.data.getIterator())}getIteratorFrom(t){return new Ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Yi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Yi(this.comparator);return e.data=t,e}}class Ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Zi{constructor(t){this.fields=t,t.sort(Ai.comparator)}static empty(){return new Zi([])}unionWith(t){let e=new Yi(Ai.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ei(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class tr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class er{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new tr("Invalid base64 string: "+t):t}}(t);return new er(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new er(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}er.EMPTY_BYTE_STRING=new er("");const nr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(ii(!!t),"string"==typeof t){let e=0;const n=nr.exec(t);if(ii(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ir(t.seconds),nanos:ir(t.nanos)}}function ir(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function rr(t){return"string"==typeof t?er.fromBase64String(t):er.fromUint8Array(t)}
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
 */function or(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ar(t){const e=t.mapValue.fields.__previous_value__;return or(e)?ar(e):e}function ur(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ti(e.seconds,e.nanos)}
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
 */class cr{constructor(t,e,n,s,i,r,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class hr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new hr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof hr&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?or(t)?4:Ir(t)?9007199254740991:10:si()}function fr(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ur(t).isEqual(ur(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=sr(t.timestampValue),s=sr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return rr(t.bytesValue).isEqual(rr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ir(t.geoPointValue.latitude)===ir(e.geoPointValue.latitude)&&ir(t.geoPointValue.longitude)===ir(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ir(t.integerValue)===ir(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ir(t.doubleValue),s=ir(e.doubleValue);return n===s?qi(n)===qi(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if($i(n)!==$i(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!fr(n[i],s[i])))return!1;return!0}(t,e);default:return si()}}function gr(t,e){return void 0!==(t.values||[]).find((t=>fr(t,e)))}function mr(t,e){if(t===e)return 0;const n=dr(t),s=dr(e);if(n!==s)return wi(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ir(t.integerValue||t.doubleValue),s=ir(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return pr(t.timestampValue,e.timestampValue);case 4:return pr(ur(t),ur(e));case 5:return wi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=rr(t),s=rr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=wi(n[i],s[i]);if(0!==t)return t}return wi(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=wi(ir(t.latitude),ir(e.latitude));return 0!==n?n:wi(ir(t.longitude),ir(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=mr(n[i],s[i]);if(t)return t}return wi(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===lr.mapValue&&e===lr.mapValue)return 0;if(t===lr.mapValue)return 1;if(e===lr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=wi(s[o],r[o]);if(0!==t)return t;const e=mr(n[s[o]],i[r[o]]);if(0!==e)return e}return wi(s.length,r.length)}(t.mapValue,e.mapValue);default:throw si()}}function pr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return wi(t,e);const n=sr(t),s=sr(e),i=wi(n.seconds,s.seconds);return 0!==i?i:wi(n.nanos,s.nanos)}function yr(t){return vr(t)}function vr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=sr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?rr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_i.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=vr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${vr(t.fields[i])}`;return n+"}"}(t.mapValue):si();var e,n}function wr(t){return!!t&&"integerValue"in t}function Er(t){return!!t&&"arrayValue"in t}function Tr(t){return!!t&&"nullValue"in t}function br(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cr(t){return!!t&&"mapValue"in t}function Sr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Sr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ir(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ar{constructor(t){this.value=t}static empty(){return new Ar({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Cr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sr(e)}setAll(t){let e=Ai.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Sr(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Cr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Cr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Gi(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new Ar(Sr(this.value))}}function _r(t){const e=[];return Gi(t.fields,((t,n)=>{const s=new Ai([t]);if(Cr(n)){const t=_r(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Zi(e)
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
 */}class kr{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new kr(t,0,bi.min(),bi.min(),bi.min(),Ar.empty(),0)}static newFoundDocument(t,e,n,s){return new kr(t,1,e,bi.min(),n,s,0)}static newNoDocument(t,e){return new kr(t,2,e,bi.min(),bi.min(),Ar.empty(),0)}static newUnknownDocument(t,e){return new kr(t,3,e,bi.min(),bi.min(),Ar.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(bi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ar.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ar.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof kr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new kr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Nr{constructor(t,e){this.position=t,this.inclusive=e}}function Dr(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?_i.comparator(_i.fromName(o.referenceValue),n.key):mr(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function xr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fr(t.position[n],e.position[n]))return!1;return!0}
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
 */class Rr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class Lr{}class Or extends Lr{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new zr(t,e,n):"array-contains"===e?new Qr(t,n):"in"===e?new Hr(t,n):"not-in"===e?new Wr(t,n):"array-contains-any"===e?new Xr(t,n):new Or(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Kr(t,n):new $r(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(mr(e,this.value)):null!==e&&dr(this.value)===dr(e)&&this.matchesComparison(mr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fr extends Lr{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new Fr(t,e)}matches(t){return Pr(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Pr(t){return"and"===t.op}function Vr(t){return Ur(t)&&Pr(t)}function Ur(t){for(const e of t.filters)if(e instanceof Fr)return!1;return!0}function qr(t){if(t instanceof Or)return t.field.canonicalString()+t.op.toString()+yr(t.value);if(Vr(t))return t.filters.map((t=>qr(t))).join(",");{const e=t.filters.map((t=>qr(t))).join(",");return`${t.op}(${e})`}}function Br(t,e){return t instanceof Or?function(t,e){return e instanceof Or&&t.op===e.op&&t.field.isEqual(e.field)&&fr(t.value,e.value)}(t,e):t instanceof Fr?function(t,e){return e instanceof Fr&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Br(n,e.filters[s])),!0)}(t,e):void si()}function jr(t){return t instanceof Or?function(t){return`${t.field.canonicalString()} ${t.op} ${yr(t.value)}`}(t):t instanceof Fr?function(t){return t.op.toString()+" {"+t.getFilters().map(jr).join(" ,")+"}"}(t):"Filter"}class zr extends Or{constructor(t,e,n){super(t,e,n),this.key=_i.fromName(n.referenceValue)}matches(t){const e=_i.comparator(t.key,this.key);return this.matchesComparison(e)}}class Kr extends Or{constructor(t,e){super(t,"in",e),this.keys=Gr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class $r extends Or{constructor(t,e){super(t,"not-in",e),this.keys=Gr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Gr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>_i.fromName(t.referenceValue)))}class Qr extends Or{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Er(e)&&gr(e.arrayValue,this.value)}}class Hr extends Or{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&gr(this.value.arrayValue,e)}}class Wr extends Or{constructor(t,e){super(t,"not-in",e)}matches(t){if(gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!gr(this.value.arrayValue,e)}}class Xr extends Or{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Er(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>gr(this.value.arrayValue,t)))}}
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
 */class Yr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.dt=null}}function Jr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Yr(t,e,n,s,i,r,o)}function Zr(t){const e=ri(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>qr(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>yr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>yr(t))).join(",")),e.dt=t}return e.dt}function to(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Br(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xr(t.startAt,e.startAt)&&xr(t.endAt,e.endAt)}function eo(t){return _i.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class no{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function so(t,e,n,s,i,r,o,a){return new no(t,e,n,s,i,r,o,a)}function io(t){return new no(t)}function ro(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ao(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function uo(t){return null!==t.collectionGroup}function co(t){const e=ri(t);if(null===e.wt){e.wt=[];const t=ao(e),n=oo(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Rr(t)),e.wt.push(new Rr(Ai.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Rr(Ai.keyField(),t))}}}return e.wt}function ho(t){const e=ri(t);if(!e._t)if("F"===e.limitType)e._t=Jr(e.path,e.collectionGroup,co(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of co(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Rr(i.field,e))}const n=e.endAt?new Nr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Nr(e.startAt.position,e.startAt.inclusive):null;e._t=Jr(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function lo(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fo(t,e){return to(ho(t),ho(e))&&t.limitType===e.limitType}function go(t){return`${Zr(ho(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>jr(t))).join(", ")}]`),Ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>yr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>yr(t))).join(",")),`Target(${e})`}(ho(t))}; limitType=${t.limitType})`}function po(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):_i.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of co(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Dr(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,co(t),e))&&!(t.endAt&&!function(t,e,n){const s=Dr(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,co(t),e))}(t,e)}function yo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vo(t){return(e,n)=>{let s=!1;for(const i of co(t)){const t=wo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function wo(t,e,n){const s=t.field.isKeyField()?_i.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?mr(s,i):si()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return si()}}
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
 */class Eo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Gi(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Qi(this.inner)}size(){return this.innerSize}}
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
 */const To=new Hi(_i.comparator);function bo(){return To}const Co=new Hi(_i.comparator);function So(...t){let e=Co;for(const n of t)e=e.insert(n.key,n);return e}function Io(t){let e=Co;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ao(){return ko()}function _o(){return ko()}function ko(){return new Eo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const No=new Hi(_i.comparator),Do=new Yi(_i.comparator);function xo(...t){let e=Do;for(const n of t)e=e.add(n);return e}const Ro=new Yi(wi);function Mo(){return Ro}
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
 */function Lo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qi(e)?"-0":e}}function Oo(t){return{integerValue:""+t}}function Fo(t,e){return Bi(e)?Oo(e):Lo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Po{constructor(){this._=void 0}}function Vo(t,e,n){return t instanceof Bo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&or(e)&&(e=ar(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof jo?zo(t,e):t instanceof Ko?$o(t,e):function(t,e){const n=qo(t,e),s=Qo(n)+Qo(t.gt);return wr(n)&&wr(t.gt)?Oo(s):Lo(t.serializer,s)}(t,e)}function Uo(t,e,n){return t instanceof jo?zo(t,e):t instanceof Ko?$o(t,e):n}function qo(t,e){return t instanceof Go?wr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Bo extends Po{}class jo extends Po{constructor(t){super(),this.elements=t}}function zo(t,e){const n=Ho(e);for(const s of t.elements)n.some((t=>fr(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Ko extends Po{constructor(t){super(),this.elements=t}}function $o(t,e){let n=Ho(e);for(const s of t.elements)n=n.filter((t=>!fr(t,s)));return{arrayValue:{values:n}}}class Go extends Po{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Qo(t){return ir(t.integerValue||t.doubleValue)}function Ho(t){return Er(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Wo{constructor(t,e){this.field=t,this.transform=e}}function Xo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof jo&&e instanceof jo||t instanceof Ko&&e instanceof Ko?Ei(t.elements,e.elements,fr):t instanceof Go&&e instanceof Go?fr(t.gt,e.gt):t instanceof Bo&&e instanceof Bo}(t.transform,e.transform)}class Yo{constructor(t,e){this.version=t,this.transformResults=e}}class Jo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jo}static exists(t){return new Jo(void 0,t)}static updateTime(t){return new Jo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ta{}function ea(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new la(t.key,Jo.none()):new oa(t.key,t.data,Jo.none());{const n=t.data,s=Ar.empty();let i=new Yi(Ai.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new aa(t.key,s,new Zi(i.toArray()),Jo.none())}}function na(t,e,n){t instanceof oa?function(t,e,n){const s=t.value.clone(),i=ca(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof aa?function(t,e,n){if(!Zo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=ca(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ua(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sa(t,e,n,s){return t instanceof oa?function(t,e,n,s){if(!Zo(t.precondition,e))return n;const i=t.value.clone(),r=ha(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof aa?function(t,e,n,s){if(!Zo(t.precondition,e))return n;const i=ha(t.fieldTransforms,s,e),r=e.data;return r.setAll(ua(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Zo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ia(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=qo(s.transform,t||null);null!=i&&(null===n&&(n=Ar.empty()),n.set(s.field,i))}return n||null}function ra(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ei(t,e,((t,e)=>Xo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends ta{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class aa extends ta{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ua(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function ca(t,e,n){const s=new Map;ii(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Uo(o,a,n[i]))}return s}function ha(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Vo(t,r,e))}return s}class la extends ta{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class da extends ta{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class fa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&na(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=_o();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=ea(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(bi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),xo())}isEqual(t){return this.batchId===t.batchId&&Ei(this.mutations,t.mutations,((t,e)=>ra(t,e)))&&Ei(this.baseMutations,t.baseMutations,((t,e)=>ra(t,e)))}}class ga{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){ii(t.mutations.length===n.length);let s=No;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new ga(t,e,n,s)}}
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
 */class ma{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
class pa{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var ya,va;function wa(t){switch(t){default:return si();case oi.CANCELLED:case oi.UNKNOWN:case oi.DEADLINE_EXCEEDED:case oi.RESOURCE_EXHAUSTED:case oi.INTERNAL:case oi.UNAVAILABLE:case oi.UNAUTHENTICATED:return!1;case oi.INVALID_ARGUMENT:case oi.NOT_FOUND:case oi.ALREADY_EXISTS:case oi.PERMISSION_DENIED:case oi.FAILED_PRECONDITION:case oi.ABORTED:case oi.OUT_OF_RANGE:case oi.UNIMPLEMENTED:case oi.DATA_LOSS:return!0}}function Ea(t){if(void 0===t)return ti("GRPC error has no .code"),oi.UNKNOWN;switch(t){case ya.OK:return oi.OK;case ya.CANCELLED:return oi.CANCELLED;case ya.UNKNOWN:return oi.UNKNOWN;case ya.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case ya.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case ya.INTERNAL:return oi.INTERNAL;case ya.UNAVAILABLE:return oi.UNAVAILABLE;case ya.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case ya.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case ya.NOT_FOUND:return oi.NOT_FOUND;case ya.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case ya.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case ya.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case ya.ABORTED:return oi.ABORTED;case ya.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case ya.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case ya.DATA_LOSS:return oi.DATA_LOSS;default:return si()}}(va=ya||(ya={}))[va.OK=0]="OK",va[va.CANCELLED=1]="CANCELLED",va[va.UNKNOWN=2]="UNKNOWN",va[va.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",va[va.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",va[va.NOT_FOUND=5]="NOT_FOUND",va[va.ALREADY_EXISTS=6]="ALREADY_EXISTS",va[va.PERMISSION_DENIED=7]="PERMISSION_DENIED",va[va.UNAUTHENTICATED=16]="UNAUTHENTICATED",va[va.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",va[va.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",va[va.ABORTED=10]="ABORTED",va[va.OUT_OF_RANGE=11]="OUT_OF_RANGE",va[va.UNIMPLEMENTED=12]="UNIMPLEMENTED",va[va.INTERNAL=13]="INTERNAL",va[va.UNAVAILABLE=14]="UNAVAILABLE",va[va.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
class Ta{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ba}static getOrCreateInstance(){return null===ba&&(ba=new Ta),ba}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let ba=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ca(){return new TextEncoder}
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
 */const Sa=new Qs([4294967295,4294967295],0);function Ia(t){const e=Ca().encode(t),n=new Gs;return n.update(e),new Uint8Array(n.digest())}function Aa(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Qs([n,s],0),new Qs([i,r],0)]}class _a{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ka(`Invalid padding: ${e}`);if(n<0)throw new ka(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ka(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ka(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Qs.fromNumber(this.It)}Et(t,e,n){let s=t.add(e.multiply(Qs.fromNumber(n)));return 1===s.compare(Sa)&&(s=new Qs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Ia(t),[n,s]=Aa(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,s,i);if(!this.At(t))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),r=new _a(i,s,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.It)return;const e=Ia(t),[n,s]=Aa(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,s,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Na{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Da.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Na(bi.min(),s,new Hi(wi),bo(),xo())}}class Da{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Da(n,e,xo(),xo(),xo())}}
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
 */class xa{constructor(t,e,n,s){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=s}}class Ra{constructor(t,e){this.targetId=t,this.Vt=e}}class Ma{constructor(t,e,n=er.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class La{constructor(){this.St=0,this.Dt=Pa(),this.Ct=er.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=xo(),e=xo(),n=xo();return this.Dt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:si()}})),new Da(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=Pa()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Oa{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=bo(),this.zt=Fa(),this.Wt=new Hi(wi)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:si()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,s=t.Vt.count,i=this.se(n);if(i){const r=i.target;if(eo(r))if(0===s){const t=new _i(r.path);this.Yt(n,t,kr.newNoDocument(t,bi.min()))}else ii(1===s);else{const i=this.ie(n);if(i!==s){const s=this.re(t,i);if(0!==s){this.ee(n);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Ta.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var s,i,r,o,a,u;const c={localCacheCount:e,existenceFilterCount:n.count},h=n.unchangedNames;return h&&(c.bloomFilter={applied:0===t,hashCount:null!==(s=null==h?void 0:h.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(o=null===(r=null===(i=null==h?void 0:h.bits)||void 0===i?void 0:i.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(u=null===(a=null==h?void 0:h.bits)||void 0===a?void 0:a.padding)&&void 0!==u?u:0}),c}
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
 */(s,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:s}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=n;let a,u;try{a=rr(i).toUint8Array()}catch(t){if(t instanceof tr)return ei("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{u=new _a(a,r,o)}catch(t){return ei(t instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===u.It?1:s!==e-this.oe(t.targetId,u)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let s=0;return n.forEach((n=>{const i=this.Gt.ue(),r=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(r)||(this.Yt(t,n,null),s++)})),s}ce(t){const e=new Map;this.Qt.forEach(((n,s)=>{const i=this.se(s);if(i){if(n.current&&eo(i.target)){const e=new _i(i.target.path);null!==this.jt.get(e)||this.ae(s,e)||this.Yt(s,e,kr.newNoDocument(e,t))}n.Mt&&(e.set(s,n.Ot()),n.Ft())}}));let n=xo();this.zt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const s=new Na(t,e,this.Wt,this.jt,n);return this.jt=bo(),this.zt=Fa(),this.Wt=new Hi(wi),s}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const s=this.Zt(t);this.ae(t,e)?s.Bt(e,1):s.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new La,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Yi(wi),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||Zs("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new La),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Fa(){return new Hi(_i.comparator)}function Pa(){return new Hi(_i.comparator)}const Va=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ua=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),qa=(()=>{const t={and:"AND",or:"OR"};return t})();class Ba{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ja(t,e){return t.useProto3Json||Ui(e)?e:{value:e}}function za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ka(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $a(t,e){return za(t,e.toTimestamp())}function Ga(t){return ii(!!t),bi.fromTimestamp(function(t){const e=sr(t);return new Ti(e.seconds,e.nanos)}(t))}function Qa(t,e){return function(t){return new Si(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ha(t){const e=Si.fromString(t);return ii(yu(e)),e}function Wa(t,e){return Qa(t.databaseId,e.path)}function Xa(t,e){const n=Ha(e);if(n.get(1)!==t.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _i(tu(n))}function Ya(t,e){return Qa(t.databaseId,e)}function Ja(t){const e=Ha(t);return 4===e.length?Si.emptyPath():tu(e)}function Za(t){return new Si(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tu(t){return ii(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function eu(t,e,n){return{name:Wa(t,e),fields:n.value.mapValue.fields}}function nu(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:si()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(ii(void 0===e||"string"==typeof e),er.fromBase64String(e||"")):(ii(void 0===e||e instanceof Uint8Array),er.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?oi.UNKNOWN:Ea(t.code);return new ai(e,t.message||"")}(o);n=new Ma(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Xa(t,s.document.name),r=Ga(s.document.updateTime),o=s.document.createTime?Ga(s.document.createTime):bi.min(),a=new Ar({mapValue:{fields:s.document.fields}}),u=kr.newFoundDocument(i,r,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new xa(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Xa(t,s.document),r=s.readTime?Ga(s.readTime):bi.min(),o=kr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Xa(t,s.document),r=s.removedTargetIds||[];n=new xa([],r,i,null)}else{if(!("filter"in e))return si();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:i}=t,r=new pa(s,i),o=t.targetId;n=new Ra(o,r)}}return n}function su(t,e){let n;if(e instanceof oa)n={update:eu(t,e.key,e.value)};else if(e instanceof la)n={delete:Wa(t,e.key)};else if(e instanceof aa)n={update:eu(t,e.key,e.data),updateMask:pu(e.fieldMask)};else{if(!(e instanceof da))return si();n={verify:Wa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Bo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof jo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ko)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Go)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw si()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:$a(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:si()}(t,e.precondition)),n}function iu(t,e){return t&&t.length>0?(ii(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ga(t.updateTime):Ga(e);return n.isEqual(bi.min())&&(n=Ga(e)),new Yo(n,t.transformResults||[])}(t,e)))):[]}function ru(t,e){return{documents:[Ya(t,e.path)]}}function ou(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ya(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ya(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return mu(Fr.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:fu(t.field),direction:hu(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=ja(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function au(t){let e=Ja(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ii(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=cu(t);return e instanceof Fr&&Vr(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Rr(gu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ui(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Nr(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Nr(n,e)}(n.endAt)),so(e,i,o,r,a,"F",u,c)}function uu(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function cu(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=gu(t.unaryFilter.field);return Or.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=gu(t.unaryFilter.field);return Or.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gu(t.unaryFilter.field);return Or.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gu(t.unaryFilter.field);return Or.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(t):void 0!==t.fieldFilter?function(t){return Or.create(gu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Fr.create(t.compositeFilter.filters.map((t=>cu(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return si()}}(t.compositeFilter.op))}(t):si()}function hu(t){return Va[t]}function lu(t){return Ua[t]}function du(t){return qa[t]}function fu(t){return{fieldPath:t.canonicalString()}}function gu(t){return Ai.fromServerFormat(t.fieldPath)}function mu(t){return t instanceof Or?function(t){if("=="===t.op){if(br(t.value))return{unaryFilter:{field:fu(t.field),op:"IS_NAN"}};if(Tr(t.value))return{unaryFilter:{field:fu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(br(t.value))return{unaryFilter:{field:fu(t.field),op:"IS_NOT_NAN"}};if(Tr(t.value))return{unaryFilter:{field:fu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fu(t.field),op:lu(t.op),value:t.value}}}(t):t instanceof Fr?function(t){const e=t.getFilters().map((t=>mu(t)));return 1===e.length?e[0]:{compositeFilter:{op:du(t.op),filters:e}}}(t):si()}function pu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class vu{constructor(t,e,n,s,i=bi.min(),r=bi.min(),o=er.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new vu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new vu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new vu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new vu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class wu{constructor(t){this.fe=t}}function Eu(t){const e=au({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?lo(e,e.limit,"L"):e}
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
class Tu{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(ir(t.integerValue));else if("doubleValue"in t){const n=ir(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),qi(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(rr(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Ir(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):si()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const s of Object.keys(n))this.Te(s,e),this.me(n[s],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const s of n)this.me(s,e)}ve(t,e){this.ye(e,37),_i.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}Tu.Ve=new Tu;
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
class bu{constructor(){this.rn=new Cu}addToCollectionParentIndex(t,e){return this.rn.add(e),Fi.resolve()}getCollectionParents(t,e){return Fi.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return Fi.resolve()}deleteFieldIndex(t,e){return Fi.resolve()}getDocumentsMatchingTarget(t,e){return Fi.resolve(null)}getIndexType(t,e){return Fi.resolve(0)}getFieldIndexes(t,e){return Fi.resolve([])}getNextCollectionGroupToUpdate(t){return Fi.resolve(null)}getMinOffset(t,e){return Fi.resolve(xi.min())}getMinOffsetFromCollectionGroup(t,e){return Fi.resolve(xi.min())}updateCollectionGroup(t,e,n){return Fi.resolve()}updateIndexEntries(t,e){return Fi.resolve()}}class Cu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Yi(Si.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Yi(Si.comparator)).toArray()}}
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
 */new Uint8Array(0);class Su{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Su(t,Su.DEFAULT_COLLECTION_PERCENTILE,Su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Su.DEFAULT_COLLECTION_PERCENTILE=10,Su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Su.DEFAULT=new Su(41943040,Su.DEFAULT_COLLECTION_PERCENTILE,Su.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Su.DISABLED=new Su(-1,0,0);
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
class Iu{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Iu(0)}static Mn(){return new Iu(-1)}}
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
class Au{constructor(){this.changes=new Eo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,kr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Fi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class _u{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class ku{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&sa(n.mutation,t,Zi.empty(),Ti.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,xo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=xo()){const s=Ao();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=So();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ao();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,xo())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=bo();const r=ko(),o=ko();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof aa)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),sa(o.mutation,e,o.mutation.getFieldMask(),Ti.now())):r.set(e.key,Zi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new _u(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ko();let s=new Hi(((t,e)=>t-e)),i=xo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Zi.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||xo()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,u=s.value,c=_o();u.forEach((t=>{if(!i.has(t)){const s=ea(e.get(t),n.get(t));null!==s&&c.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Fi.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return _i.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):uo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Fi.resolve(Ao());let o=-1,a=i;return r.next((e=>Fi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Fi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,xo()))).next((t=>({batchId:o,changes:Io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new _i(e)).next((t=>{let e=So();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=So();return this.indexManager.getCollectionParents(t,s).next((r=>Fi.forEach(r,(r=>{const o=function(t,e){return new no(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,kr.newInvalidDocument(s)))}));let n=So();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&sa(r.mutation,i,Zi.empty(),Ti.now()),po(e,i)&&(n=n.insert(t,i))})),n}))}}
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
 */class Nu{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return Fi.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:Ga(n.createTime)}),Fi.resolve()}getNamedQuery(t,e){return Fi.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:Eu(t.bundledQuery),readTime:Ga(t.readTime)}}(e)),Fi.resolve()}}
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
 */class Du{constructor(){this.overlays=new Hi(_i.comparator),this.ls=new Map}getOverlay(t,e){return Fi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ao();return Fi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.we(t,e,s)})),Fi.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),Fi.resolve()}getOverlaysForCollection(t,e,n){const s=Ao(),i=e.length+1,r=new _i(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Fi.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Hi(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ao(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ao(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Fi.resolve(o)}we(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ma(e,n));let i=this.ls.get(e);void 0===i&&(i=xo(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
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
 */class xu{constructor(){this.fs=new Yi(Ru.ds),this.ws=new Yi(Ru._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Ru(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new Ru(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new _i(new Si([])),n=new Ru(e,t),s=new Ru(e,t+1),i=[];return this.ws.forEachInRange([n,s],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new _i(new Si([])),n=new Ru(e,t),s=new Ru(e,t+1);let i=xo();return this.ws.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ru(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ru{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return _i.comparator(t.key,e.key)||wi(t.As,e.As)}static _s(t,e){return wi(t.As,e.As)||_i.comparator(t.key,e.key)}}
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
 */class Mu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Yi(Ru.ds)}checkEmpty(t){return Fi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new fa(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this.Rs=this.Rs.add(new Ru(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Fi.resolve(r)}lookupMutationBatch(t,e){return Fi.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.bs(n),i=s<0?0:s;return Fi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Fi.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return Fi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ru(e,0),s=new Ru(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,s],(t=>{const e=this.Ps(t.As);i.push(e)})),Fi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Yi(wi);return e.forEach((t=>{const e=new Ru(t,0),s=new Ru(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,s],(t=>{n=n.add(t.As)}))})),Fi.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;_i.isDocumentKey(i)||(i=i.child(""));const r=new Ru(new _i(i),0);let o=new Yi(wi);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.As)),!0)}),r),Fi.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ii(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Fi.forEach(e.mutations,(s=>{const i=new Ru(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new Ru(e,0),s=this.Rs.firstAfterOrEqual(n);return Fi.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Fi.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Lu{constructor(t){this.Ds=t,this.docs=new Hi(_i.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Fi.resolve(n?n.document.mutableCopy():kr.newInvalidDocument(e))}getEntries(t,e){let n=bo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():kr.newInvalidDocument(t))})),Fi.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=bo();const r=e.path,o=new _i(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Ri(Di(o),n)<=0||(s.has(o.key)||po(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Fi.resolve(i)}getAllFromCollectionGroup(t,e,n,s){si()}Cs(t,e){return Fi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ou(this)}getSize(t){return Fi.resolve(this.size)}}class Ou extends Au{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.os.addEntry(t,s)):this.os.removeEntry(n)})),Fi.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
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
 */class Fu{constructor(t){this.persistence=t,this.xs=new Eo((t=>Zr(t)),to),this.lastRemoteSnapshotVersion=bi.min(),this.highestTargetId=0,this.Ns=0,this.ks=new xu,this.targetCount=0,this.Ms=Iu.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),Fi.resolve()}getLastRemoteSnapshotVersion(t){return Fi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Fi.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),Fi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),Fi.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Iu(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,Fi.resolve()}updateTargetData(t,e){return this.Fn(e),Fi.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,Fi.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Fi.waitFor(i).next((()=>s))}getTargetCount(t){return Fi.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return Fi.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),Fi.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Fi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),Fi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return Fi.resolve(n)}containsKey(t,e){return Fi.resolve(this.ks.containsKey(e))}}
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
 */class Pu{constructor(t,e){this.$s={},this.overlays={},this.Os=new Vi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Fu(this),this.indexManager=new bu,this.remoteDocumentCache=function(t){return new Lu(t)}((t=>this.referenceDelegate.Ls(t))),this.serializer=new wu(e),this.qs=new Nu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Du,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Mu(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){Zs("MemoryPersistence","Starting transaction:",t);const s=new Vu(this.Os.next());return this.referenceDelegate.Us(),n(s).next((t=>this.referenceDelegate.Ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Gs(t,e){return Fi.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class Vu extends Li{constructor(t){super(),this.currentSequenceNumber=t}}class Uu{constructor(t){this.persistence=t,this.Qs=new xu,this.js=null}static zs(t){return new Uu(t)}get Ws(){if(this.js)return this.js;throw si()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),Fi.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),Fi.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),Fi.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Fi.forEach(this.Ws,(n=>{const s=_i.fromPath(n);return this.Hs(t,s).next((t=>{t||e.removeEntry(s,bi.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return Fi.or([()=>Fi.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
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
class qu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=s}static Li(t,e){let n=xo(),s=xo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qu(t,e.fromCache,n,s)}}
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
 */class Bu{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ki(t,e).next((i=>i||this.Gi(t,e,s,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(ro(e))return Fi.resolve(null);let n=ho(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=lo(e,null,"F"),n=ho(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=xo(...s);return this.Ui.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.ji(e,s);return this.zi(e,r,i,n.readTime)?this.Ki(t,lo(e,null,"F")):this.Wi(t,r,e,n)}))))})))))}Gi(t,e,n,s){return ro(e)||s.isEqual(bi.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const r=this.ji(e,i);return this.zi(e,r,n,s)?this.Qi(t,e):(Js()<=o.$b.DEBUG&&Zs("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mo(e)),this.Wi(t,r,e,Ni(s,-1)))}))}ji(t,e){let n=new Yi(vo(t));return e.forEach(((e,s)=>{po(t,s)&&(n=n.add(s))})),n}zi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(t,e){return Js()<=o.$b.DEBUG&&Zs("QueryEngine","Using full collection scan to execute query:",mo(e)),this.Ui.getDocumentsMatchingQuery(t,e,xi.min())}Wi(t,e,n,s){return this.Ui.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class ju{constructor(t,e,n,s){this.persistence=t,this.Hi=e,this.serializer=s,this.Ji=new Hi(wi),this.Yi=new Eo((t=>Zr(t)),to),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ku(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function zu(t,e,n,s){return new ju(t,e,n,s)}async function Ku(t,e){const n=ri(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=xo();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({er:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function $u(t,e){const n=ri(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Fi.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);ii(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=xo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function Gu(t){const e=ri(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Qu(t,e){const n=ri(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.Bs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,r.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?c=c.withResumeToken(er.EMPTY_BYTE_STRING,bi.min()).withLastLimboFreeSnapshotVersion(bi.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,r)&&o.push(n.Bs.updateTargetData(t,c))}));let a=bo(),u=xo();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Hu(t,r,e.documentUpdates).next((t=>{a=t.nr,u=t.sr}))),!s.isEqual(bi.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Fi.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Ji=i,t)))}function Hu(t,e,n){let s=xo(),i=xo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=bo();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(bi.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Zs("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:s,sr:i}}))}function Wu(t,e){const n=ri(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Xu(t,e){const n=ri(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Bs.getTargetData(t,e).next((i=>i?(s=i,Fi.resolve(s)):n.Bs.allocateTargetId(t).next((i=>(s=new vu(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ji.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Yu(t,e,n){const s=ri(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Pi(t))throw t;Zs("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Ju(t,e,n){const s=ri(t);let i=bi.min(),r=xo();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=ri(t),i=s.Yi.get(n);return void 0!==i?Fi.resolve(s.Ji.get(i)):s.Bs.getTargetData(e,n)}(s,t,ho(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Hi.getDocumentsMatchingQuery(t,e,n?i:bi.min(),n?r:xo()))).next((t=>(Zu(s,yo(e),t),{documents:t,ir:r})))))}function Zu(t,e,n){let s=t.Xi.get(e)||bi.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Xi.set(e,s)}class tc{constructor(){this.activeTargetIds=Mo()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ec{constructor(){this.Hr=new tc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new tc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class nc{Yr(t){}shutdown(){}}
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
 */class sc{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){Zs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ic=null;function rc(){return null===ic?ic=268435456+Math.round(2147483648*Math.random()):ic++,"0x"+ic.toString(16)
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
 */}const oc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class ac{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
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
 */const uc="WebChannelConnection";class cc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,s,i){const r=rc(),o=this.To(t,e);Zs("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.Eo(a,s,i),this.Ao(t,o,a,n).then((e=>(Zs("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw ei("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,s,i,r){return this.Io(t,e,n,s,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Xs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=oc[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,s){const i=rc();return new Promise(((r,o)=>{const a=new $s;a.setWithCredentials(!0),a.listenOnce(qs.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Us.NO_ERROR:const e=a.getResponseJson();Zs(uc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case Us.TIMEOUT:Zs(uc,`RPC '${t}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case Us.HTTP_ERROR:const n=a.getStatus();if(Zs(uc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(e)>=0?e:oi.UNKNOWN}(e.status);o(new ai(t,e.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{Zs(uc,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(s);Zs(uc,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",u,n,15)}))}Ro(t,e,n){const s=rc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ps(),o=Vs(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new zs({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Zs(uc,`Creating RPC '${t}' stream ${s}: ${c}`,a);const h=r.createWebChannel(c,a);let l=!1,d=!1;const f=new ac({ro:e=>{d?Zs(uc,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(Zs(uc,`Opening RPC '${t}' stream ${s} transport.`),h.open(),l=!0),Zs(uc,`RPC '${t}' stream ${s} sending:`,e),h.send(e))},oo:()=>h.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(h,Ks.EventType.OPEN,(()=>{d||Zs(uc,`RPC '${t}' stream ${s} transport opened.`)})),g(h,Ks.EventType.CLOSE,(()=>{d||(d=!0,Zs(uc,`RPC '${t}' stream ${s} transport closed`),f.wo())})),g(h,Ks.EventType.ERROR,(e=>{d||(d=!0,ei(uc,`RPC '${t}' stream ${s} transport errored:`,e),f.wo(new ai(oi.UNAVAILABLE,"The operation could not be completed")))})),g(h,Ks.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];ii(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Zs(uc,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=ya[t];if(void 0!==e)return Ea(e)}(e),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.wo(new ai(n,i)),h.close()}else Zs(uc,`RPC '${t}' stream ${s} received:`,i),f._o(i)}})),g(o,Bs.STAT_EVENT,(e=>{e.stat===js.PROXY?Zs(uc,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===js.NOPROXY&&Zs(uc,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
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
 */function hc(){return"undefined"!=typeof document?document:null}
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
 */function lc(t){return new Ba(t,!0)}
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
 */class dc{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,e-n);s>0&&Zs("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
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
 */class fc{constructor(t,e,n,s,i,r,o,a){this.ii=t,this.$o=n,this.Oo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new dc(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===oi.RESOURCE_EXHAUSTED?(ti(e.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new ai(oi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return Zs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(Zs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gc extends fc{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=nu(this.serializer,t),n=function(t){if(!("targetChange"in t))return bi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?bi.min():e.readTime?Ga(e.readTime):bi.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=Za(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=eo(s)?{documents:ru(t,s)}:{query:ou(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ka(t,e.resumeToken);const s=ja(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(bi.min())>0){n.readTime=za(t,e.snapshotVersion.toTimestamp());const s=ja(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=uu(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=Za(this.serializer),e.removeTarget=t,this.Wo(e)}}class mc extends fc{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(ii(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=iu(t.writeResults,t.commitTime),n=Ga(t.commitTime);return this.listener.cu(n,e)}return ii(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=Za(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>su(this.serializer,t)))};this.Wo(e)}}
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
 */class pc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Io(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}vo(t,e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.vo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class yc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ti(e),this.mu=!1):Zs("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
 */class vc{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{_c(this)&&(Zs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ri(t);e.vu.add(4),await Ec(e),e.bu.set("Unknown"),e.vu.delete(4),await wc(e)}(this))}))})),this.bu=new yc(n,s)}}async function wc(t){if(_c(t))for(const e of t.Ru)await e(!0)}async function Ec(t){for(const e of t.Ru)await e(!1)}function Tc(t,e){const n=ri(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Ac(n)?Ic(n):$c(n).Ko()&&Cc(n,e))}function bc(t,e){const n=ri(t),s=$c(n);n.Au.delete(e),s.Ko()&&Sc(n,e),0===n.Au.size&&(s.Ko()?s.jo():_c(n)&&n.bu.set("Unknown"))}function Cc(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(bi.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$c(t).su(e)}function Sc(t,e){t.Vu.qt(e),$c(t).iu(e)}function Ic(t){t.Vu=new Oa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),$c(t).start(),t.bu.gu()}function Ac(t){return _c(t)&&!$c(t).Uo()&&t.Au.size>0}function _c(t){return 0===ri(t).vu.size}function kc(t){t.Vu=void 0}async function Nc(t){t.Au.forEach(((e,n)=>{Cc(t,e)}))}async function Dc(t,e){kc(t),Ac(t)?(t.bu.Iu(e),Ic(t)):t.bu.set("Unknown")}async function xc(t,e,n){if(t.bu.set("Online"),e instanceof Ma&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Au.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Au.delete(s),t.Vu.removeTarget(s))}(t,e)}catch(n){Zs("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Rc(t,n)}else if(e instanceof xa?t.Vu.Ht(e):e instanceof Ra?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(bi.min()))try{const e=await Gu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(s);i&&t.Au.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.Au.get(e);if(!s)return;t.Au.set(e,s.withResumeToken(er.EMPTY_BYTE_STRING,s.snapshotVersion)),Sc(t,e);const i=new vu(s.target,e,n,s.sequenceNumber);Cc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zs("RemoteStore","Failed to raise snapshot:",e),await Rc(t,e)}}async function Rc(t,e,n){if(!Pi(e))throw e;t.vu.add(1),await Ec(t),t.bu.set("Offline"),n||(n=()=>Gu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zs("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await wc(t)}))}function Mc(t,e){return e().catch((n=>Rc(t,n,e)))}async function Lc(t){const e=ri(t),n=Gc(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Oc(e);)try{const t=await Wu(e.localStore,s);if(null===t){0===e.Eu.length&&n.jo();break}s=t.batchId,Fc(e,t)}catch(t){await Rc(e,t)}Pc(e)&&Vc(e)}function Oc(t){return _c(t)&&t.Eu.length<10}function Fc(t,e){t.Eu.push(e);const n=Gc(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Pc(t){return _c(t)&&!Gc(t).Uo()&&t.Eu.length>0}function Vc(t){Gc(t).start()}async function Uc(t){Gc(t).hu()}async function qc(t){const e=Gc(t);for(const n of t.Eu)e.uu(n.mutations)}async function Bc(t,e,n){const s=t.Eu.shift(),i=ga.from(s,e,n);await Mc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Lc(t)}async function jc(t,e){e&&Gc(t).ou&&await async function(t,e){if(n=e.code,wa(n)&&n!==oi.ABORTED){const n=t.Eu.shift();Gc(t).Qo(),await Mc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Lc(t)}var n}(t,e),Pc(t)&&Vc(t)}async function zc(t,e){const n=ri(t);n.asyncQueue.verifyOperationInProgress(),Zs("RemoteStore","RemoteStore received new credentials");const s=_c(n);n.vu.add(3),await Ec(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await wc(n)}async function Kc(t,e){const n=ri(t);e?(n.vu.delete(2),await wc(n)):e||(n.vu.add(2),await Ec(n),n.bu.set("Unknown"))}function $c(t){return t.Su||(t.Su=function(t,e,n){const s=ri(t);return s.fu(),new gc(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{uo:Nc.bind(null,t),ao:Dc.bind(null,t),nu:xc.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),Ac(t)?Ic(t):t.bu.set("Unknown")):(await t.Su.stop(),kc(t))}))),t.Su}function Gc(t){return t.Du||(t.Du=function(t,e,n){const s=ri(t);return s.fu(),new mc(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{uo:Uc.bind(null,t),ao:jc.bind(null,t),au:qc.bind(null,t),cu:Bc.bind(null,t)}),t.Ru.push((async e=>{e?(t.Du.Qo(),await Lc(t)):(await t.Du.stop(),t.Eu.length>0&&(Zs("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))}))),t.Du
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
 */}class Qc{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Qc(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Pi(t))return new ai(oi.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Wc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||_i.comparator(e.key,n.key):(t,e)=>_i.comparator(t.key,e.key),this.keyedMap=So(),this.sortedSet=new Hi(this.comparator)}static emptySet(t){return new Wc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Wc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Wc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Xc{constructor(){this.Cu=new Hi(_i.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):si():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Yc{constructor(t,e,n,s,i,r,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Yc(t,e,Wc.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class Jc{constructor(){this.Nu=void 0,this.listeners=[]}}class Zc{constructor(){this.queries=new Eo((t=>go(t)),fo),this.onlineState="Unknown",this.ku=new Set}}async function th(t,e){const n=ri(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Jc),i)try{r.Nu=await n.onListen(s)}catch(t){const n=Hc(t,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&ih(n)}async function eh(t,e){const n=ri(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function nh(t,e){const n=ri(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.$u(i)&&(s=!0);e.Nu=i}}s&&ih(n)}function sh(t,e,n){const s=ri(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ih(t){t.ku.forEach((t=>{t.next()}))}class rh{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Yc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=Yc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
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
class oh{constructor(t){this.key=t}}class ah{constructor(t){this.key=t}}class uh{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=xo(),this.mutatedKeys=xo(),this.tc=vo(t),this.ec=new Wc(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Xc,s=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,u="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),h=po(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.rc(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.tc(h,a)>0||u&&this.tc(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:r,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const r=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Yc(this.query,t.ec,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Xc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=xo(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new ah(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new oh(n))})),e}hc(t){this.Yu=t.ir,this.Zu=xo();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return Yc.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class ch{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class hh{constructor(t){this.key=t,this.fc=!1}}class lh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Eo((t=>go(t)),fo),this._c=new Map,this.mc=new Set,this.gc=new Hi(_i.comparator),this.yc=new Map,this.Ic=new xu,this.Tc={},this.Ec=new Map,this.Ac=Iu.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function dh(t,e){const n=xh(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const t=await Xu(n.localStore,ho(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await fh(n,e,s,"current"===r,t.resumeToken),n.isPrimaryClient&&Tc(n.remoteStore,t)}return i}async function fh(t,e,n,s,i){t.Rc=(e,n,s)=>async function(t,e,n,s){let i=e.view.sc(n);i.zi&&(i=await Ju(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Ih(t,e.targetId,o.cc),o.snapshot}(t,e,n,s);const r=await Ju(t.localStore,e,!0),o=new uh(e,r.ir),a=o.sc(r.documents),u=Da.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);Ih(t,n,c.cc);const h=new ch(e,n,o);return t.wc.set(e,h),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function gh(t,e){const n=ri(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter((t=>!fo(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Yu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),bc(n.remoteStore,s.targetId),Ch(n,s.targetId)})).catch(Oi)):(Ch(n,s.targetId),await Yu(n.localStore,s.targetId,!0))}async function mh(t,e,n){const s=Rh(t);try{const t=await function(t,e){const n=ri(t),s=Ti.now(),i=e.reduce(((t,e)=>t.add(e.key)),xo());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=bo(),u=xo();return n.Zi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=ia(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new aa(t.key,e,_r(e.value.mapValue),Jo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Io(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Tc[t.currentUser.toKey()];s||(s=new Hi(wi)),s=s.insert(e,n),t.Tc[t.currentUser.toKey()]=s}(s,t.batchId,n),await kh(s,t.changes),await Lc(s.remoteStore)}catch(t){const e=Hc(t,"Failed to persist write");n.reject(e)}}async function ph(t,e){const n=ri(t);try{const t=await Qu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.yc.get(e);s&&(ii(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.fc=!0:t.modifiedDocuments.size>0?ii(s.fc):t.removedDocuments.size>0&&(ii(s.fc),s.fc=!1))})),await kh(n,t,e)}catch(t){await Oi(t)}}function yh(t,e,n){const s=ri(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.wc.forEach(((n,s)=>{const i=s.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ri(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Mu(e)&&(s=!0)})),s&&ih(n)}(s.eventManager,e),t.length&&s.dc.nu(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vh(t,e,n){const s=ri(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let t=new Hi(_i.comparator);t=t.insert(r,kr.newNoDocument(r,bi.min()));const n=xo().add(r),i=new Na(bi.min(),new Map,new Hi(wi),t,n);await ph(s,i),s.gc=s.gc.remove(r),s.yc.delete(e),_h(s)}else await Yu(s.localStore,e,!1).then((()=>Ch(s,e,n))).catch(Oi)}async function wh(t,e){const n=ri(t),s=e.batch.batchId;try{const t=await $u(n.localStore,e);bh(n,s,null),Th(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await kh(n,t)}catch(t){await Oi(t)}}async function Eh(t,e,n){const s=ri(t);try{const t=await function(t,e){const n=ri(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ii(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);bh(s,e,n),Th(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await kh(s,t)}catch(n){await Oi(n)}}function Th(t,e){(t.Ec.get(e)||[]).forEach((t=>{t.resolve()})),t.Ec.delete(e)}function bh(t,e,n){const s=ri(t);let i=s.Tc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function Ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Sh(t,e)}))}function Sh(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(bc(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),_h(t))}function Ih(t,e,n){for(const s of n)s instanceof oh?(t.Ic.addReference(s.key,e),Ah(t,s)):s instanceof ah?(Zs("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Sh(t,s.key)):si()}function Ah(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(Zs("SyncEngine","New document in limbo: "+n),t.mc.add(s),_h(t))}function _h(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new _i(Si.fromString(e)),s=t.Ac.next();t.yc.set(s,new hh(n)),t.gc=t.gc.insert(n,s),Tc(t.remoteStore,new vu(ho(io(n.path)),s,"TargetPurposeLimboResolution",Vi.ct))}}async function kh(t,e,n){const s=ri(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach(((t,a)=>{o.push(s.Rc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=qu.Li(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.dc.nu(i),await async function(t,e){const n=ri(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Fi.forEach(e,(e=>Fi.forEach(e.Fi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Fi.forEach(e.Bi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Pi(t))throw t;Zs("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ji.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(t,i)}}}(s.localStore,r))}async function Nh(t,e){const n=ri(t);if(!n.currentUser.isEqual(e)){Zs("SyncEngine","User change. New user:",e.toKey());const t=await Ku(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach((t=>{t.forEach((t=>{t.reject(new ai(oi.CANCELLED,e))}))})),t.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await kh(n,t.er)}}function Dh(t,e){const n=ri(t),s=n.yc.get(e);if(s&&s.fc)return xo().add(s.key);{let t=xo();const s=n._c.get(e);if(!s)return t;for(const e of s){const s=n.wc.get(e);t=t.unionWith(s.view.nc)}return t}}function xh(t){const e=ri(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ph.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vh.bind(null,e),e.dc.nu=nh.bind(null,e.eventManager),e.dc.Pc=sh.bind(null,e.eventManager),e}function Rh(t){const e=ri(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Eh.bind(null,e),e}class Mh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=lc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return zu(this.persistence,new Bu,t.initialUser,this.serializer)}createPersistence(t){return new Pu(Uu.zs,this.serializer)}createSharedClientState(t){return new ec}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>yh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nh.bind(null,this.syncEngine),await Kc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Zc}createDatastore(t){const e=lc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new cc(s));var s;return function(t,e,n,s){return new pc(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>yh(this.syncEngine,t,0),r=sc.D()?new sc:new nc,new vc(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new lh(t,e,n,s,i,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ri(t);Zs("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Ec(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
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
class Oh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):ti("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class Fh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ws.UNAUTHENTICATED,this.clientId=vi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zs("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zs("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Hc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),Zs("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Ku(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qh(t);Zs("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>zc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>zc(e.remoteStore,n))),t._onlineComponents=e}function Uh(t){return"FirebaseError"===t.name?t.code===oi.FAILED_PRECONDITION||t.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function qh(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zs("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Uh(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Mh)}}else Zs("FirestoreClient","Using default OfflineComponentProvider"),await Ph(t,new Mh);return t._offlineComponents}async function Bh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zs("FirestoreClient","Using user provided OnlineComponentProvider"),await Vh(t,t._uninitializedComponentsProvider._online)):(Zs("FirestoreClient","Using default OnlineComponentProvider"),await Vh(t,new Lh))),t._onlineComponents}function jh(t){return Bh(t).then((t=>t.syncEngine))}async function zh(t){const e=await Bh(t),n=e.eventManager;return n.onListen=dh.bind(null,e.syncEngine),n.onUnlisten=gh.bind(null,e.syncEngine),n}function Kh(t,e,n={}){const s=new ui;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Oh({next:r=>{e.enqueueAndForget((()=>eh(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new ai(oi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new rh(io(n.path),r,{includeMetadataChanges:!0,Ku:!0});return th(t,o)}(await zh(t),t.asyncQueue,e,n,s))),s.promise}function $h(t,e,n={}){const s=new ui;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Oh({next:n=>{e.enqueueAndForget((()=>eh(t,o))),n.fromCache&&"server"===s.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new rh(n,r,{includeMetadataChanges:!0,Ku:!0});return th(t,o)}(await zh(t),t.asyncQueue,e,n,s))),s.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
function Gh(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const Qh=new Map;
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
 */function Hh(t,e,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wh(t,e,n,s){if(!0===e&&!0===s)throw new ai(oi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xh(t){if(!_i.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yh(t){if(_i.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":si()}function Zh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class tl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class el{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new hi;switch(t.type){case"firstParty":return new gi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Qh.get(t);e&&(Zs("ComponentProvider","Removing Datastore"),Qh.delete(t),e.terminate())}(this),Promise.resolve()}}function nl(t,e,n,s={}){var i;const r=(t=Zh(t,el))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Ws.MOCK_USER;else{e=(0,a.Fy)(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ws(r)}t._authCredentials=new li(new ci(e,n))}}
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
 */class sl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sl(this.firestore,t,this._key)}}class il{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new il(this.firestore,t,this._query)}}class rl extends il{constructor(t,e,n){super(t,e,io(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sl(this.firestore,null,new _i(t))}withConverter(t){return new rl(this.firestore,t,this._path)}}function ol(t,e,...n){if(t=(0,a.Ku)(t),Hh("collection","path",e),t instanceof el){const s=Si.fromString(e,...n);return Yh(s),new rl(t,null,s)}{if(!(t instanceof sl||t instanceof rl))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Si.fromString(e,...n));return Yh(s),new rl(t.firestore,null,s)}}function al(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=vi.A()),Hh("doc","path",e),t instanceof el){const s=Si.fromString(e,...n);return Xh(s),new sl(t,null,new _i(s))}{if(!(t instanceof sl||t instanceof rl))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Si.fromString(e,...n));return Xh(s),new sl(t.firestore,t instanceof rl?t.converter:null,new _i(s))}}
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
class ul{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new dc(this,"async_queue_retry"),this.Xc=()=>{const t=hc();t&&Zs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=hc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=hc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new ui;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Pi(t))throw t;Zs("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw ti("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const s=Qc.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(s),s}Zc(){this.Wc&&si()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class cl extends el{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new ul,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dl(this),this._firestoreClient.terminate()}}function hl(t,e){const n="object"==typeof t?t:(0,i.Sx)(),s="string"==typeof t?t:e||"(default)",r=(0,i.j6)(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=(0,a.yU)("firestore");t&&nl(r,...t)}return r}function ll(t){return t._firestoreClient||dl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dl(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new cr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Gh(s.experimentalLongPollingOptions),s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Fh(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class fl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fl(er.fromBase64String(t))}catch(t){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new fl(er.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class gl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ai(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class ml{constructor(t){this._methodName=t}}
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
 */class pl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wi(this._lat,t._lat)||wi(this._long,t._long)}}
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
 */const yl=/^__.*__$/;class vl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new aa(t,this.data,this.fieldMask,e,this.fieldTransforms):new oa(t,this.data,e,this.fieldTransforms)}}class wl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new aa(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function El(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class Tl{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Tl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.aa({path:n,la:!1});return s.fa(t),s}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.aa({path:n,la:!1});return s.ua(),s}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Vl(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(El(this.ca)&&yl.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class bl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||lc(t)}ya(t,e,n,s=!1){return new Tl({ca:t,methodName:e,ga:n,path:Ai.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cl(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new bl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sl(t,e,n,s,i,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,i);Ll("Data must be an object, but it was:",o,s);const a=Rl(s,o);let u,c;if(r.merge)u=new Zi(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Ol(e,s,n);if(!o.contains(i))throw new ai(oi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ul(t,i)||t.push(i)}u=new Zi(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new vl(new Ar(a),u,c)}class Il extends ml{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Il}}function Al(t,e,n){return new Tl({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class _l extends ml{constructor(t,e){super(t),this.pa=e}_toFieldTransform(t){const e=Al(this,t,!0),n=this.pa.map((t=>xl(t,e))),s=new jo(n);return new Wo(t.path,s)}isEqual(t){return this===t}}class kl extends ml{constructor(t,e){super(t),this.pa=e}_toFieldTransform(t){const e=Al(this,t,!0),n=this.pa.map((t=>xl(t,e))),s=new Ko(n);return new Wo(t.path,s)}isEqual(t){return this===t}}function Nl(t,e,n,s){const i=t.ya(1,e,n);Ll("Data must be an object, but it was:",i,s);const r=[],o=Ar.empty();Gi(s,((t,s)=>{const u=Pl(e,t,n);s=(0,a.Ku)(s);const c=i.da(u);if(s instanceof Il)r.push(u);else{const t=xl(s,c);null!=t&&(r.push(u),o.set(u,t))}}));const u=new Zi(r);return new wl(o,u,i.fieldTransforms)}function Dl(t,e,n,s,i,r){const o=t.ya(1,e,n),u=[Ol(e,s,n)],c=[i];if(r.length%2!=0)throw new ai(oi.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)u.push(Ol(e,r[a])),c.push(r[a+1]);const h=[],l=Ar.empty();for(let f=u.length-1;f>=0;--f)if(!Ul(h,u[f])){const t=u[f];let e=c[f];e=(0,a.Ku)(e);const n=o.da(t);if(e instanceof Il)h.push(t);else{const s=xl(e,n);null!=s&&(h.push(t),l.set(t,s))}}const d=new Zi(h);return new wl(l,d,o.fieldTransforms)}function xl(t,e){if(Ml(t=(0,a.Ku)(t)))return Ll("Unsupported field value:",e,t),Rl(t,e);if(t instanceof ml)return function(t,e){if(!El(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=xl(i,e.wa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Fo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ti.fromDate(t);return{timestampValue:za(e.serializer,n)}}if(t instanceof Ti){const n=new Ti(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:za(e.serializer,n)}}if(t instanceof pl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof fl)return{bytesValue:Ka(e.serializer,t._byteString)};if(t instanceof sl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Qa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${Jh(t)}`)}(t,e)}function Rl(t,e){const n={};return Qi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gi(t,((t,s)=>{const i=xl(s,e.ha(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Ml(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ti||t instanceof pl||t instanceof fl||t instanceof sl||t instanceof ml)}function Ll(t,e,n){if(!Ml(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Jh(n);throw"an object"===s?e._a(t+" a custom object"):e._a(t+" "+s)}}function Ol(t,e,n){if((e=(0,a.Ku)(e))instanceof gl)return e._internalPath;if("string"==typeof e)return Pl(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Fl=new RegExp("[~\\*/\\[\\]]");function Pl(t,e,n){if(e.search(Fl)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gl(...e.split("."))._internalPath}catch(s){throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new ai(oi.INVALID_ARGUMENT,a+t+u)}function Ul(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class ql{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(jl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bl extends ql{data(){return super.data()}}function jl(t,e){return"string"==typeof e?Pl(t,e):e instanceof gl?e._internalPath:e._delegate._internalPath}
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
 */function zl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ai(oi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kl{convertValue(t,e="none"){switch(dr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ir(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(rr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw si()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Gi(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new pl(ir(t.latitude),ir(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ar(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ur(t));default:return null}}convertTimestamp(t){const e=sr(t);return new Ti(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Si.fromString(t);ii(yu(n));const s=new hr(n.get(1),n.get(3)),i=new _i(n.popFirst(5));return s.isEqual(e)||ti(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function $l(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
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
class Gl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ql extends ql{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(jl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Hl extends Ql{data(t={}){return super.data(t)}}class Wl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Gl(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Hl(this._firestore,this._userDataWriter,n.key,n,new Gl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ai(oi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Hl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Gl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Hl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Gl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Xl(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Xl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}
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
function Yl(t){t=Zh(t,sl);const e=Zh(t.firestore,cl);return Kh(ll(e),t._key).then((n=>id(e,t,n)))}class Jl extends Kl{constructor(t){super(),this.firestore=t}convertBytes(t){return new fl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sl(this.firestore,null,e)}}function Zl(t){t=Zh(t,il);const e=Zh(t.firestore,cl),n=ll(e),s=new Jl(e);return zl(t._query),$h(n,t._query).then((n=>new Wl(e,s,t,n)))}function td(t,e,n){t=Zh(t,sl);const s=Zh(t.firestore,cl),i=$l(t.converter,e,n);return sd(s,[Sl(Cl(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Jo.none())])}function ed(t,e,n,...s){t=Zh(t,sl);const i=Zh(t.firestore,cl),r=Cl(i);let o;return o="string"==typeof(e=(0,a.Ku)(e))||e instanceof gl?Dl(r,"updateDoc",t._key,e,n,s):Nl(r,"updateDoc",t._key,e),sd(i,[o.toMutation(t._key,Jo.exists(!0))])}function nd(t,e){const n=Zh(t.firestore,cl),s=al(t),i=$l(t.converter,e);return sd(n,[Sl(Cl(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,Jo.exists(!1))]).then((()=>s))}function sd(t,e){return function(t,e){const n=new ui;return t.asyncQueue.enqueueAndForget((async()=>mh(await jh(t),e,n))),n.promise}(ll(t),e)}function id(t,e,n){const s=n.docs.get(e._key),i=new Jl(t);return new Ql(t,i,e._key,s,new Gl(n.hasPendingWrites,n.fromCache),e.converter)}
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
function rd(){return new Il("deleteField")}function od(...t){return new _l("arrayUnion",t)}function ad(...t){return new kl("arrayRemove",t)}!function(t,e=!0){!function(t){Xs=t}(i.MF),(0,i.om)(new r.uA("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new cl(new di(t.getProvider("auth-internal")),new pi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Hs,"3.13.0",t),(0,i.KO)(Hs,"3.13.0","esm2017")}()}}]);
//# sourceMappingURL=6430.6b002bc8.js.map