(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oh(r){const e=Object.create(null);for(const t of r.split(","))e[t]=1;return t=>t in e}const Me={},Ks=[],dn=()=>{},Lw=()=>!1,jc=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&(r.charCodeAt(2)>122||r.charCodeAt(2)<97),ah=r=>r.startsWith("onUpdate:"),ut=Object.assign,ch=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},Fw=Object.prototype.hasOwnProperty,xe=(r,e)=>Fw.call(r,e),_e=Array.isArray,Hs=r=>Gc(r)==="[object Map]",ug=r=>Gc(r)==="[object Set]",ye=r=>typeof r=="function",rt=r=>typeof r=="string",Ar=r=>typeof r=="symbol",Qe=r=>r!==null&&typeof r=="object",hg=r=>(Qe(r)||ye(r))&&ye(r.then)&&ye(r.catch),dg=Object.prototype.toString,Gc=r=>dg.call(r),Uw=r=>Gc(r).slice(8,-1),fg=r=>Gc(r)==="[object Object]",lh=r=>rt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,mo=oh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zc=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},Bw=/-(\w)/g,pr=zc(r=>r.replace(Bw,(e,t)=>t?t.toUpperCase():"")),qw=/\B([A-Z])/g,Is=zc(r=>r.replace(qw,"-$1").toLowerCase()),pg=zc(r=>r.charAt(0).toUpperCase()+r.slice(1)),Gl=zc(r=>r?`on${pg(r)}`:""),ur=(r,e)=>!Object.is(r,e),zl=(r,...e)=>{for(let t=0;t<r.length;t++)r[t](...e)},mg=(r,e,t,s=!1)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,writable:s,value:t})},$w=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let qf;const Kc=()=>qf||(qf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hc(r){if(_e(r)){const e={};for(let t=0;t<r.length;t++){const s=r[t],i=rt(s)?Kw(s):Hc(s);if(i)for(const o in i)e[o]=i[o]}return e}else if(rt(r)||Qe(r))return r}const jw=/;(?![^(]*\))/g,Gw=/:([^]+)/,zw=/\/\*[^]*?\*\//g;function Kw(r){const e={};return r.replace(zw,"").split(jw).forEach(t=>{if(t){const s=t.split(Gw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ri(r){let e="";if(rt(r))e=r;else if(_e(r))for(let t=0;t<r.length;t++){const s=ri(r[t]);s&&(e+=s+" ")}else if(Qe(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Hw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ww=oh(Hw);function gg(r){return!!r||r===""}const _g=r=>!!(r&&r.__v_isRef===!0),Us=r=>rt(r)?r:r==null?"":_e(r)||Qe(r)&&(r.toString===dg||!ye(r.toString))?_g(r)?Us(r.value):JSON.stringify(r,yg,2):String(r),yg=(r,e)=>_g(e)?yg(r,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,i],o)=>(t[Kl(s,o)+" =>"]=i,t),{})}:ug(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Kl(t))}:Ar(e)?Kl(e):Qe(e)&&!_e(e)&&!fg(e)?String(e):e,Kl=(r,e="")=>{var t;return Ar(r)?`Symbol(${(t=r.description)!=null?t:e})`:r};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class Qw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Jw(){return jt}let Ue;const Hl=new WeakSet;class Ig{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hl.has(this)&&(Hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$f(this),Tg(this);const e=Ue,t=tn;Ue=this,tn=!0;try{return this.fn()}finally{Eg(this),Ue=e,tn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dh(e);this.deps=this.depsTail=void 0,$f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Iu(this)&&this.run()}get dirty(){return Iu(this)}}let vg=0,go,_o;function wg(r,e=!1){if(r.flags|=8,e){r.next=_o,_o=r;return}r.next=go,go=r}function uh(){vg++}function hh(){if(--vg>0)return;if(_o){let e=_o;for(_o=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let r;for(;go;){let e=go;for(go=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){r||(r=s)}e=t}}if(r)throw r}function Tg(r){for(let e=r.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Eg(r){let e,t=r.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),dh(s),Xw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}r.deps=e,r.depsTail=t}function Iu(r){for(let e=r.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!r._dirty}function bg(r){if(r.flags&4&&!(r.flags&16)||(r.flags&=-17,r.globalVersion===ko))return;r.globalVersion=ko;const e=r.dep;if(r.flags|=2,e.version>0&&!r.isSSR&&r.deps&&!Iu(r)){r.flags&=-3;return}const t=Ue,s=tn;Ue=r,tn=!0;try{Tg(r);const i=r.fn(r._value);(e.version===0||ur(i,r._value))&&(r._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ue=t,tn=s,Eg(r),r.flags&=-3}}function dh(r,e=!1){const{dep:t,prevSub:s,nextSub:i}=r;if(s&&(s.nextSub=i,r.prevSub=void 0),i&&(i.prevSub=s,r.nextSub=void 0),t.subs===r&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)dh(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xw(r){const{prevDep:e,nextDep:t}=r;e&&(e.nextDep=t,r.prevDep=void 0),t&&(t.prevDep=e,r.nextDep=void 0)}let tn=!0;const Ag=[];function Rr(){Ag.push(tn),tn=!1}function Sr(){const r=Ag.pop();tn=r===void 0?!0:r}function $f(r){const{cleanup:e}=r;if(r.cleanup=void 0,e){const t=Ue;Ue=void 0;try{e()}finally{Ue=t}}}let ko=0;class Yw{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!tn||Ue===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ue)t=this.activeLink=new Yw(Ue,this),Ue.deps?(t.prevDep=Ue.depsTail,Ue.depsTail.nextDep=t,Ue.depsTail=t):Ue.deps=Ue.depsTail=t,Rg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Ue.depsTail,t.nextDep=void 0,Ue.depsTail.nextDep=t,Ue.depsTail=t,Ue.deps===t&&(Ue.deps=s)}return t}trigger(e){this.version++,ko++,this.notify(e)}notify(e){uh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hh()}}}function Rg(r){if(r.dep.sc++,r.sub.flags&4){const e=r.dep.computed;if(e&&!r.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Rg(s)}const t=r.dep.subs;t!==r&&(r.prevSub=t,t&&(t.nextSub=r)),r.dep.subs=r}}const vu=new WeakMap,ts=Symbol(""),wu=Symbol(""),Vo=Symbol("");function bt(r,e,t){if(tn&&Ue){let s=vu.get(r);s||vu.set(r,s=new Map);let i=s.get(t);i||(s.set(t,i=new fh),i.map=s,i.key=t),i.track()}}function Sn(r,e,t,s,i,o){const a=vu.get(r);if(!a){ko++;return}const c=u=>{u&&u.trigger()};if(uh(),e==="clear")a.forEach(c);else{const u=_e(r),h=u&&lh(t);if(u&&t==="length"){const d=Number(s);a.forEach((p,g)=>{(g==="length"||g===Vo||!Ar(g)&&g>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(Vo)),e){case"add":u?h&&c(a.get("length")):(c(a.get(ts)),Hs(r)&&c(a.get(wu)));break;case"delete":u||(c(a.get(ts)),Hs(r)&&c(a.get(wu)));break;case"set":Hs(r)&&c(a.get(ts));break}}hh()}function Vs(r){const e=Ce(r);return e===r?e:(bt(e,"iterate",Vo),Yt(r)?e:e.map(At))}function Wc(r){return bt(r=Ce(r),"iterate",Vo),r}const Zw={__proto__:null,[Symbol.iterator](){return Wl(this,Symbol.iterator,At)},concat(...r){return Vs(this).concat(...r.map(e=>_e(e)?Vs(e):e))},entries(){return Wl(this,"entries",r=>(r[1]=At(r[1]),r))},every(r,e){return An(this,"every",r,e,void 0,arguments)},filter(r,e){return An(this,"filter",r,e,t=>t.map(At),arguments)},find(r,e){return An(this,"find",r,e,At,arguments)},findIndex(r,e){return An(this,"findIndex",r,e,void 0,arguments)},findLast(r,e){return An(this,"findLast",r,e,At,arguments)},findLastIndex(r,e){return An(this,"findLastIndex",r,e,void 0,arguments)},forEach(r,e){return An(this,"forEach",r,e,void 0,arguments)},includes(...r){return Ql(this,"includes",r)},indexOf(...r){return Ql(this,"indexOf",r)},join(r){return Vs(this).join(r)},lastIndexOf(...r){return Ql(this,"lastIndexOf",r)},map(r,e){return An(this,"map",r,e,void 0,arguments)},pop(){return Ji(this,"pop")},push(...r){return Ji(this,"push",r)},reduce(r,...e){return jf(this,"reduce",r,e)},reduceRight(r,...e){return jf(this,"reduceRight",r,e)},shift(){return Ji(this,"shift")},some(r,e){return An(this,"some",r,e,void 0,arguments)},splice(...r){return Ji(this,"splice",r)},toReversed(){return Vs(this).toReversed()},toSorted(r){return Vs(this).toSorted(r)},toSpliced(...r){return Vs(this).toSpliced(...r)},unshift(...r){return Ji(this,"unshift",r)},values(){return Wl(this,"values",At)}};function Wl(r,e,t){const s=Wc(r),i=s[e]();return s!==r&&!Yt(r)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=t(o.value)),o}),i}const eT=Array.prototype;function An(r,e,t,s,i,o){const a=Wc(r),c=a!==r&&!Yt(r),u=a[e];if(u!==eT[e]){const p=u.apply(r,o);return c?At(p):p}let h=t;a!==r&&(c?h=function(p,g){return t.call(this,At(p),g,r)}:t.length>2&&(h=function(p,g){return t.call(this,p,g,r)}));const d=u.call(a,h,s);return c&&i?i(d):d}function jf(r,e,t,s){const i=Wc(r);let o=t;return i!==r&&(Yt(r)?t.length>3&&(o=function(a,c,u){return t.call(this,a,c,u,r)}):o=function(a,c,u){return t.call(this,a,At(c),u,r)}),i[e](o,...s)}function Ql(r,e,t){const s=Ce(r);bt(s,"iterate",Vo);const i=s[e](...t);return(i===-1||i===!1)&&_h(t[0])?(t[0]=Ce(t[0]),s[e](...t)):i}function Ji(r,e,t=[]){Rr(),uh();const s=Ce(r)[e].apply(r,t);return hh(),Sr(),s}const tT=oh("__proto__,__v_isRef,__isVue"),Sg=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Ar));function nT(r){Ar(r)||(r=String(r));const e=Ce(this);return bt(e,"has",r),e.hasOwnProperty(r)}class Pg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(i?o?dT:kg:o?Dg:xg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=_e(e);if(!i){let u;if(a&&(u=Zw[t]))return u;if(t==="hasOwnProperty")return nT}const c=Reflect.get(e,t,St(e)?e:s);return(Ar(t)?Sg.has(t):tT(t))||(i||bt(e,"get",t),o)?c:St(c)?a&&lh(t)?c:c.value:Qe(c)?i?Vg(c):mh(c):c}}class Cg extends Pg{constructor(e=!1){super(!1,e)}set(e,t,s,i){let o=e[t];if(!this._isShallow){const u=is(o);if(!Yt(s)&&!is(s)&&(o=Ce(o),s=Ce(s)),!_e(e)&&St(o)&&!St(s))return u?!1:(o.value=s,!0)}const a=_e(e)&&lh(t)?Number(t)<e.length:xe(e,t),c=Reflect.set(e,t,s,St(e)?e:i);return e===Ce(i)&&(a?ur(s,o)&&Sn(e,"set",t,s):Sn(e,"add",t,s)),c}deleteProperty(e,t){const s=xe(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&s&&Sn(e,"delete",t,void 0),i}has(e,t){const s=Reflect.has(e,t);return(!Ar(t)||!Sg.has(t))&&bt(e,"has",t),s}ownKeys(e){return bt(e,"iterate",_e(e)?"length":ts),Reflect.ownKeys(e)}}class rT extends Pg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const sT=new Cg,iT=new rT,oT=new Cg(!0);const Tu=r=>r,Ma=r=>Reflect.getPrototypeOf(r);function aT(r,e,t){return function(...s){const i=this.__v_raw,o=Ce(i),a=Hs(o),c=r==="entries"||r===Symbol.iterator&&a,u=r==="keys"&&a,h=i[r](...s),d=t?Tu:e?Eu:At;return!e&&bt(o,"iterate",u?wu:ts),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function La(r){return function(...e){return r==="delete"?!1:r==="clear"?void 0:this}}function cT(r,e){const t={get(i){const o=this.__v_raw,a=Ce(o),c=Ce(i);r||(ur(i,c)&&bt(a,"get",i),bt(a,"get",c));const{has:u}=Ma(a),h=e?Tu:r?Eu:At;if(u.call(a,i))return h(o.get(i));if(u.call(a,c))return h(o.get(c));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!r&&bt(Ce(i),"iterate",ts),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,a=Ce(o),c=Ce(i);return r||(ur(i,c)&&bt(a,"has",i),bt(a,"has",c)),i===c?o.has(i):o.has(i)||o.has(c)},forEach(i,o){const a=this,c=a.__v_raw,u=Ce(c),h=e?Tu:r?Eu:At;return!r&&bt(u,"iterate",ts),c.forEach((d,p)=>i.call(o,h(d),h(p),a))}};return ut(t,r?{add:La("add"),set:La("set"),delete:La("delete"),clear:La("clear")}:{add(i){!e&&!Yt(i)&&!is(i)&&(i=Ce(i));const o=Ce(this);return Ma(o).has.call(o,i)||(o.add(i),Sn(o,"add",i,i)),this},set(i,o){!e&&!Yt(o)&&!is(o)&&(o=Ce(o));const a=Ce(this),{has:c,get:u}=Ma(a);let h=c.call(a,i);h||(i=Ce(i),h=c.call(a,i));const d=u.call(a,i);return a.set(i,o),h?ur(o,d)&&Sn(a,"set",i,o):Sn(a,"add",i,o),this},delete(i){const o=Ce(this),{has:a,get:c}=Ma(o);let u=a.call(o,i);u||(i=Ce(i),u=a.call(o,i)),c&&c.call(o,i);const h=o.delete(i);return u&&Sn(o,"delete",i,void 0),h},clear(){const i=Ce(this),o=i.size!==0,a=i.clear();return o&&Sn(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=aT(i,r,e)}),t}function ph(r,e){const t=cT(r,e);return(s,i,o)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?s:Reflect.get(xe(t,i)&&i in s?t:s,i,o)}const lT={get:ph(!1,!1)},uT={get:ph(!1,!0)},hT={get:ph(!0,!1)};const xg=new WeakMap,Dg=new WeakMap,kg=new WeakMap,dT=new WeakMap;function fT(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pT(r){return r.__v_skip||!Object.isExtensible(r)?0:fT(Uw(r))}function mh(r){return is(r)?r:gh(r,!1,sT,lT,xg)}function mT(r){return gh(r,!1,oT,uT,Dg)}function Vg(r){return gh(r,!0,iT,hT,kg)}function gh(r,e,t,s,i){if(!Qe(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const o=i.get(r);if(o)return o;const a=pT(r);if(a===0)return r;const c=new Proxy(r,a===2?s:t);return i.set(r,c),c}function Ws(r){return is(r)?Ws(r.__v_raw):!!(r&&r.__v_isReactive)}function is(r){return!!(r&&r.__v_isReadonly)}function Yt(r){return!!(r&&r.__v_isShallow)}function _h(r){return r?!!r.__v_raw:!1}function Ce(r){const e=r&&r.__v_raw;return e?Ce(e):r}function gT(r){return!xe(r,"__v_skip")&&Object.isExtensible(r)&&mg(r,"__v_skip",!0),r}const At=r=>Qe(r)?mh(r):r,Eu=r=>Qe(r)?Vg(r):r;function St(r){return r?r.__v_isRef===!0:!1}function Gt(r){return _T(r,!1)}function _T(r,e){return St(r)?r:new yT(r,e)}class yT{constructor(e,t){this.dep=new fh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ce(e),this._value=t?e:At(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||Yt(e)||is(e);e=s?e:Ce(e),ur(e,t)&&(this._rawValue=e,this._value=s?e:At(e),this.dep.trigger())}}function es(r){return St(r)?r.value:r}const IT={get:(r,e,t)=>e==="__v_raw"?r:es(Reflect.get(r,e,t)),set:(r,e,t,s)=>{const i=r[e];return St(i)&&!St(t)?(i.value=t,!0):Reflect.set(r,e,t,s)}};function Ng(r){return Ws(r)?r:new Proxy(r,IT)}class vT{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new fh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return wg(this,!0),!0}get value(){const e=this.dep.track();return bg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wT(r,e,t=!1){let s,i;return ye(r)?s=r:(s=r.get,i=r.set),new vT(s,i,t)}const Fa={},fc=new WeakMap;let Kr;function TT(r,e=!1,t=Kr){if(t){let s=fc.get(t);s||fc.set(t,s=[]),s.push(r)}}function ET(r,e,t=Me){const{immediate:s,deep:i,once:o,scheduler:a,augmentJob:c,call:u}=t,h=U=>i?U:Yt(U)||i===!1||i===0?Pn(U,1):Pn(U);let d,p,g,w,P=!1,x=!1;if(St(r)?(p=()=>r.value,P=Yt(r)):Ws(r)?(p=()=>h(r),P=!0):_e(r)?(x=!0,P=r.some(U=>Ws(U)||Yt(U)),p=()=>r.map(U=>{if(St(U))return U.value;if(Ws(U))return h(U);if(ye(U))return u?u(U,2):U()})):ye(r)?e?p=u?()=>u(r,2):r:p=()=>{if(g){Rr();try{g()}finally{Sr()}}const U=Kr;Kr=d;try{return u?u(r,3,[w]):r(w)}finally{Kr=U}}:p=dn,e&&i){const U=p,ee=i===!0?1/0:i;p=()=>Pn(U(),ee)}const S=Jw(),V=()=>{d.stop(),S&&S.active&&ch(S.effects,d)};if(o&&e){const U=e;e=(...ee)=>{U(...ee),V()}}let L=x?new Array(r.length).fill(Fa):Fa;const F=U=>{if(!(!(d.flags&1)||!d.dirty&&!U))if(e){const ee=d.run();if(i||P||(x?ee.some((ne,R)=>ur(ne,L[R])):ur(ee,L))){g&&g();const ne=Kr;Kr=d;try{const R=[ee,L===Fa?void 0:x&&L[0]===Fa?[]:L,w];u?u(e,3,R):e(...R),L=ee}finally{Kr=ne}}}else d.run()};return c&&c(F),d=new Ig(p),d.scheduler=a?()=>a(F,!1):F,w=U=>TT(U,!1,d),g=d.onStop=()=>{const U=fc.get(d);if(U){if(u)u(U,4);else for(const ee of U)ee();fc.delete(d)}},e?s?F(!0):L=d.run():a?a(F.bind(null,!0),!0):d.run(),V.pause=d.pause.bind(d),V.resume=d.resume.bind(d),V.stop=V,V}function Pn(r,e=1/0,t){if(e<=0||!Qe(r)||r.__v_skip||(t=t||new Set,t.has(r)))return r;if(t.add(r),e--,St(r))Pn(r.value,e,t);else if(_e(r))for(let s=0;s<r.length;s++)Pn(r[s],e,t);else if(ug(r)||Hs(r))r.forEach(s=>{Pn(s,e,t)});else if(fg(r)){for(const s in r)Pn(r[s],e,t);for(const s of Object.getOwnPropertySymbols(r))Object.prototype.propertyIsEnumerable.call(r,s)&&Pn(r[s],e,t)}return r}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xo(r,e,t,s){try{return s?r(...s):r()}catch(i){Qc(i,e,t)}}function yn(r,e,t,s){if(ye(r)){const i=Xo(r,e,t,s);return i&&hg(i)&&i.catch(o=>{Qc(o,e,t)}),i}if(_e(r)){const i=[];for(let o=0;o<r.length;o++)i.push(yn(r[o],e,t,s));return i}}function Qc(r,e,t,s=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Me;if(e){let c=e.parent;const u=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](r,u,h)===!1)return}c=c.parent}if(o){Rr(),Xo(o,null,10,[r,u,h]),Sr();return}}bT(r,t,i,s,a)}function bT(r,e,t,s=!0,i=!1){if(i)throw r;console.error(r)}const Nt=[];let an=-1;const Qs=[];let Yn=null,Bs=0;const Og=Promise.resolve();let pc=null;function AT(r){const e=pc||Og;return r?e.then(this?r.bind(this):r):e}function RT(r){let e=an+1,t=Nt.length;for(;e<t;){const s=e+t>>>1,i=Nt[s],o=No(i);o<r||o===r&&i.flags&2?e=s+1:t=s}return e}function yh(r){if(!(r.flags&1)){const e=No(r),t=Nt[Nt.length-1];!t||!(r.flags&2)&&e>=No(t)?Nt.push(r):Nt.splice(RT(e),0,r),r.flags|=1,Mg()}}function Mg(){pc||(pc=Og.then(Fg))}function ST(r){_e(r)?Qs.push(...r):Yn&&r.id===-1?Yn.splice(Bs+1,0,r):r.flags&1||(Qs.push(r),r.flags|=1),Mg()}function Gf(r,e,t=an+1){for(;t<Nt.length;t++){const s=Nt[t];if(s&&s.flags&2){if(r&&s.id!==r.uid)continue;Nt.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Lg(r){if(Qs.length){const e=[...new Set(Qs)].sort((t,s)=>No(t)-No(s));if(Qs.length=0,Yn){Yn.push(...e);return}for(Yn=e,Bs=0;Bs<Yn.length;Bs++){const t=Yn[Bs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yn=null,Bs=0}}const No=r=>r.id==null?r.flags&2?-1:1/0:r.id;function Fg(r){try{for(an=0;an<Nt.length;an++){const e=Nt[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<Nt.length;an++){const e=Nt[an];e&&(e.flags&=-2)}an=-1,Nt.length=0,Lg(),pc=null,(Nt.length||Qs.length)&&Fg()}}let Xt=null,Ug=null;function mc(r){const e=Xt;return Xt=r,Ug=r&&r.type.__scopeId||null,e}function PT(r,e=Xt,t){if(!e||r._n)return r;const s=(...i)=>{s._d&&Yf(-1);const o=mc(e);let a;try{a=r(...i)}finally{mc(o),s._d&&Yf(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function Ih(r,e){if(Xt===null)return r;const t=el(Xt),s=r.dirs||(r.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Me]=e[i];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&Pn(a),s.push({dir:o,instance:t,value:a,oldValue:void 0,arg:c,modifiers:u}))}return r}function $r(r,e,t,s){const i=r.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const c=i[a];o&&(c.oldValue=o[a].value);let u=c.dir[s];u&&(Rr(),yn(u,t,8,[r.el,c,r,e]),Sr())}}const CT=Symbol("_vte"),xT=r=>r.__isTeleport;function vh(r,e){r.shapeFlag&6&&r.component?(r.transition=e,vh(r.component.subTree,e)):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Jc(r,e){return ye(r)?ut({name:r.name},e,{setup:r}):r}function Bg(r){r.ids=[r.ids[0]+r.ids[2]+++"-",0,0]}function gc(r,e,t,s,i=!1){if(_e(r)){r.forEach((P,x)=>gc(P,e&&(_e(e)?e[x]:e),t,s,i));return}if(yo(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&gc(r,e,t,s.component.subTree);return}const o=s.shapeFlag&4?el(s.component):s.el,a=i?null:o,{i:c,r:u}=r,h=e&&e.r,d=c.refs===Me?c.refs={}:c.refs,p=c.setupState,g=Ce(p),w=p===Me?()=>!1:P=>xe(g,P);if(h!=null&&h!==u&&(rt(h)?(d[h]=null,w(h)&&(p[h]=null)):St(h)&&(h.value=null)),ye(u))Xo(u,c,12,[a,d]);else{const P=rt(u),x=St(u);if(P||x){const S=()=>{if(r.f){const V=P?w(u)?p[u]:d[u]:u.value;i?_e(V)&&ch(V,o):_e(V)?V.includes(o)||V.push(o):P?(d[u]=[o],w(u)&&(p[u]=d[u])):(u.value=[o],r.k&&(d[r.k]=u.value))}else P?(d[u]=a,w(u)&&(p[u]=a)):x&&(u.value=a,r.k&&(d[r.k]=a))};a?(S.id=-1,$t(S,t)):S()}}}Kc().requestIdleCallback;Kc().cancelIdleCallback;const yo=r=>!!r.type.__asyncLoader,qg=r=>r.type.__isKeepAlive;function DT(r,e){$g(r,"a",e)}function kT(r,e){$g(r,"da",e)}function $g(r,e,t=Ot){const s=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(Xc(e,s,t),t){let i=t.parent;for(;i&&i.parent;)qg(i.parent.vnode)&&VT(s,e,t,i),i=i.parent}}function VT(r,e,t,s){const i=Xc(e,r,s,!0);jg(()=>{ch(s[e],i)},t)}function Xc(r,e,t=Ot,s=!1){if(t){const i=t[r]||(t[r]=[]),o=e.__weh||(e.__weh=(...a)=>{Rr();const c=Yo(t),u=yn(e,t,r,a);return c(),Sr(),u});return s?i.unshift(o):i.push(o),o}}const Un=r=>(e,t=Ot)=>{(!Mo||r==="sp")&&Xc(r,(...s)=>e(...s),t)},NT=Un("bm"),wh=Un("m"),OT=Un("bu"),MT=Un("u"),LT=Un("bum"),jg=Un("um"),FT=Un("sp"),UT=Un("rtg"),BT=Un("rtc");function qT(r,e=Ot){Xc("ec",r,e)}const $T=Symbol.for("v-ndc");function Gg(r,e,t,s){let i;const o=t,a=_e(r);if(a||rt(r)){const c=a&&Ws(r);let u=!1;c&&(u=!Yt(r),r=Wc(r)),i=new Array(r.length);for(let h=0,d=r.length;h<d;h++)i[h]=e(u?At(r[h]):r[h],h,void 0,o)}else if(typeof r=="number"){i=new Array(r);for(let c=0;c<r;c++)i[c]=e(c+1,c,void 0,o)}else if(Qe(r))if(r[Symbol.iterator])i=Array.from(r,(c,u)=>e(c,u,void 0,o));else{const c=Object.keys(r);i=new Array(c.length);for(let u=0,h=c.length;u<h;u++){const d=c[u];i[u]=e(r[d],d,u,o)}}else i=[];return i}const bu=r=>r?d_(r)?el(r):bu(r.parent):null,Io=ut(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>bu(r.parent),$root:r=>bu(r.root),$host:r=>r.ce,$emit:r=>r.emit,$options:r=>Th(r),$forceUpdate:r=>r.f||(r.f=()=>{yh(r.update)}),$nextTick:r=>r.n||(r.n=AT.bind(r.proxy)),$watch:r=>uE.bind(r)}),Jl=(r,e)=>r!==Me&&!r.__isScriptSetup&&xe(r,e),jT={get({_:r},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:u}=r;let h;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return s[e];case 2:return i[e];case 4:return t[e];case 3:return o[e]}else{if(Jl(s,e))return a[e]=1,s[e];if(i!==Me&&xe(i,e))return a[e]=2,i[e];if((h=r.propsOptions[0])&&xe(h,e))return a[e]=3,o[e];if(t!==Me&&xe(t,e))return a[e]=4,t[e];Au&&(a[e]=0)}}const d=Io[e];let p,g;if(d)return e==="$attrs"&&bt(r.attrs,"get",""),d(r);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Me&&xe(t,e))return a[e]=4,t[e];if(g=u.config.globalProperties,xe(g,e))return g[e]},set({_:r},e,t){const{data:s,setupState:i,ctx:o}=r;return Jl(i,e)?(i[e]=t,!0):s!==Me&&xe(s,e)?(s[e]=t,!0):xe(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(o[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!t[a]||r!==Me&&xe(r,a)||Jl(e,a)||(c=o[0])&&xe(c,a)||xe(s,a)||xe(Io,a)||xe(i.config.globalProperties,a)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:xe(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};function zf(r){return _e(r)?r.reduce((e,t)=>(e[t]=null,e),{}):r}let Au=!0;function GT(r){const e=Th(r),t=r.proxy,s=r.ctx;Au=!1,e.beforeCreate&&Kf(e.beforeCreate,r,"bc");const{data:i,computed:o,methods:a,watch:c,provide:u,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:w,updated:P,activated:x,deactivated:S,beforeDestroy:V,beforeUnmount:L,destroyed:F,unmounted:U,render:ee,renderTracked:ne,renderTriggered:R,errorCaptured:T,serverPrefetch:b,expose:_,inheritAttrs:I,components:E,directives:v,filters:j}=e;if(h&&zT(h,s,null),a)for(const H in a){const ae=a[H];ye(ae)&&(s[H]=ae.bind(t))}if(i){const H=i.call(t,t);Qe(H)&&(r.data=mh(H))}if(Au=!0,o)for(const H in o){const ae=o[H],oe=ye(ae)?ae.bind(t,t):ye(ae.get)?ae.get.bind(t,t):dn,_t=!ye(ae)&&ye(ae.set)?ae.set.bind(t):dn,ge=Lo({get:oe,set:_t});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Le=>ge.value=Le})}if(c)for(const H in c)zg(c[H],s,t,H);if(u){const H=ye(u)?u.call(t):u;Reflect.ownKeys(H).forEach(ae=>{XT(ae,H[ae])})}d&&Kf(d,r,"c");function W(H,ae){_e(ae)?ae.forEach(oe=>H(oe.bind(t))):ae&&H(ae.bind(t))}if(W(NT,p),W(wh,g),W(OT,w),W(MT,P),W(DT,x),W(kT,S),W(qT,T),W(BT,ne),W(UT,R),W(LT,L),W(jg,U),W(FT,b),_e(_))if(_.length){const H=r.exposed||(r.exposed={});_.forEach(ae=>{Object.defineProperty(H,ae,{get:()=>t[ae],set:oe=>t[ae]=oe})})}else r.exposed||(r.exposed={});ee&&r.render===dn&&(r.render=ee),I!=null&&(r.inheritAttrs=I),E&&(r.components=E),v&&(r.directives=v),b&&Bg(r)}function zT(r,e,t=dn){_e(r)&&(r=Ru(r));for(const s in r){const i=r[s];let o;Qe(i)?"default"in i?o=Ya(i.from||s,i.default,!0):o=Ya(i.from||s):o=Ya(i),St(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Kf(r,e,t){yn(_e(r)?r.map(s=>s.bind(e.proxy)):r.bind(e.proxy),e,t)}function zg(r,e,t,s){let i=s.includes(".")?i_(t,s):()=>t[s];if(rt(r)){const o=e[r];ye(o)&&vo(i,o)}else if(ye(r))vo(i,r.bind(t));else if(Qe(r))if(_e(r))r.forEach(o=>zg(o,e,t,s));else{const o=ye(r.handler)?r.handler.bind(t):e[r.handler];ye(o)&&vo(i,o,r)}}function Th(r){const e=r.type,{mixins:t,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=r.appContext,c=o.get(e);let u;return c?u=c:!i.length&&!t&&!s?u=e:(u={},i.length&&i.forEach(h=>_c(u,h,a,!0)),_c(u,e,a)),Qe(e)&&o.set(e,u),u}function _c(r,e,t,s=!1){const{mixins:i,extends:o}=e;o&&_c(r,o,t,!0),i&&i.forEach(a=>_c(r,a,t,!0));for(const a in e)if(!(s&&a==="expose")){const c=KT[a]||t&&t[a];r[a]=c?c(r[a],e[a]):e[a]}return r}const KT={data:Hf,props:Wf,emits:Wf,methods:ao,computed:ao,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ao,directives:ao,watch:WT,provide:Hf,inject:HT};function Hf(r,e){return e?r?function(){return ut(ye(r)?r.call(this,this):r,ye(e)?e.call(this,this):e)}:e:r}function HT(r,e){return ao(Ru(r),Ru(e))}function Ru(r){if(_e(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Vt(r,e){return r?[...new Set([].concat(r,e))]:e}function ao(r,e){return r?ut(Object.create(null),r,e):e}function Wf(r,e){return r?_e(r)&&_e(e)?[...new Set([...r,...e])]:ut(Object.create(null),zf(r),zf(e??{})):e}function WT(r,e){if(!r)return e;if(!e)return r;const t=ut(Object.create(null),r);for(const s in e)t[s]=Vt(r[s],e[s]);return t}function Kg(){return{app:null,config:{isNativeTag:Lw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let QT=0;function JT(r,e){return function(s,i=null){ye(s)||(s=ut({},s)),i!=null&&!Qe(i)&&(i=null);const o=Kg(),a=new WeakSet,c=[];let u=!1;const h=o.app={_uid:QT++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:kE,get config(){return o.config},set config(d){},use(d,...p){return a.has(d)||(d&&ye(d.install)?(a.add(d),d.install(h,...p)):ye(d)&&(a.add(d),d(h,...p))),h},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),h},component(d,p){return p?(o.components[d]=p,h):o.components[d]},directive(d,p){return p?(o.directives[d]=p,h):o.directives[d]},mount(d,p,g){if(!u){const w=h._ceVNode||nn(s,i);return w.appContext=o,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(w,d):r(w,d,g),u=!0,h._container=d,d.__vue_app__=h,el(w.component)}},onUnmount(d){c.push(d)},unmount(){u&&(yn(c,h._instance,16),r(null,h._container),delete h._container.__vue_app__)},provide(d,p){return o.provides[d]=p,h},runWithContext(d){const p=Js;Js=h;try{return d()}finally{Js=p}}};return h}}let Js=null;function XT(r,e){if(Ot){let t=Ot.provides;const s=Ot.parent&&Ot.parent.provides;s===t&&(t=Ot.provides=Object.create(s)),t[r]=e}}function Ya(r,e,t=!1){const s=Ot||Xt;if(s||Js){const i=Js?Js._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&r in i)return i[r];if(arguments.length>1)return t&&ye(e)?e.call(s&&s.proxy):e}}const Hg={},Wg=()=>Object.create(Hg),Qg=r=>Object.getPrototypeOf(r)===Hg;function YT(r,e,t,s=!1){const i={},o=Wg();r.propsDefaults=Object.create(null),Jg(r,e,i,o);for(const a in r.propsOptions[0])a in i||(i[a]=void 0);t?r.props=s?i:mT(i):r.type.props?r.props=i:r.props=o,r.attrs=o}function ZT(r,e,t,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=r,c=Ce(i),[u]=r.propsOptions;let h=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=r.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Yc(r.emitsOptions,g))continue;const w=e[g];if(u)if(xe(o,g))w!==o[g]&&(o[g]=w,h=!0);else{const P=pr(g);i[P]=Su(u,c,P,w,r,!1)}else w!==o[g]&&(o[g]=w,h=!0)}}}else{Jg(r,e,i,o)&&(h=!0);let d;for(const p in c)(!e||!xe(e,p)&&((d=Is(p))===p||!xe(e,d)))&&(u?t&&(t[p]!==void 0||t[d]!==void 0)&&(i[p]=Su(u,c,p,void 0,r,!0)):delete i[p]);if(o!==c)for(const p in o)(!e||!xe(e,p))&&(delete o[p],h=!0)}h&&Sn(r.attrs,"set","")}function Jg(r,e,t,s){const[i,o]=r.propsOptions;let a=!1,c;if(e)for(let u in e){if(mo(u))continue;const h=e[u];let d;i&&xe(i,d=pr(u))?!o||!o.includes(d)?t[d]=h:(c||(c={}))[d]=h:Yc(r.emitsOptions,u)||(!(u in s)||h!==s[u])&&(s[u]=h,a=!0)}if(o){const u=Ce(t),h=c||Me;for(let d=0;d<o.length;d++){const p=o[d];t[p]=Su(i,u,p,h[p],r,!xe(h,p))}}return a}function Su(r,e,t,s,i,o){const a=r[t];if(a!=null){const c=xe(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ye(u)){const{propsDefaults:h}=i;if(t in h)s=h[t];else{const d=Yo(i);s=h[t]=u.call(null,e),d()}}else s=u;i.ce&&i.ce._setProp(t,s)}a[0]&&(o&&!c?s=!1:a[1]&&(s===""||s===Is(t))&&(s=!0))}return s}const eE=new WeakMap;function Xg(r,e,t=!1){const s=t?eE:e.propsCache,i=s.get(r);if(i)return i;const o=r.props,a={},c=[];let u=!1;if(!ye(r)){const d=p=>{u=!0;const[g,w]=Xg(p,e,!0);ut(a,g),w&&c.push(...w)};!t&&e.mixins.length&&e.mixins.forEach(d),r.extends&&d(r.extends),r.mixins&&r.mixins.forEach(d)}if(!o&&!u)return Qe(r)&&s.set(r,Ks),Ks;if(_e(o))for(let d=0;d<o.length;d++){const p=pr(o[d]);Qf(p)&&(a[p]=Me)}else if(o)for(const d in o){const p=pr(d);if(Qf(p)){const g=o[d],w=a[p]=_e(g)||ye(g)?{type:g}:ut({},g),P=w.type;let x=!1,S=!0;if(_e(P))for(let V=0;V<P.length;++V){const L=P[V],F=ye(L)&&L.name;if(F==="Boolean"){x=!0;break}else F==="String"&&(S=!1)}else x=ye(P)&&P.name==="Boolean";w[0]=x,w[1]=S,(x||xe(w,"default"))&&c.push(p)}}const h=[a,c];return Qe(r)&&s.set(r,h),h}function Qf(r){return r[0]!=="$"&&!mo(r)}const Yg=r=>r[0]==="_"||r==="$stable",Eh=r=>_e(r)?r.map(cn):[cn(r)],tE=(r,e,t)=>{if(e._n)return e;const s=PT((...i)=>Eh(e(...i)),t);return s._c=!1,s},Zg=(r,e,t)=>{const s=r._ctx;for(const i in r){if(Yg(i))continue;const o=r[i];if(ye(o))e[i]=tE(i,o,s);else if(o!=null){const a=Eh(o);e[i]=()=>a}}},e_=(r,e)=>{const t=Eh(e);r.slots.default=()=>t},t_=(r,e,t)=>{for(const s in e)(t||s!=="_")&&(r[s]=e[s])},nE=(r,e,t)=>{const s=r.slots=Wg();if(r.vnode.shapeFlag&32){const i=e._;i?(t_(s,e,t),t&&mg(s,"_",i,!0)):Zg(e,s)}else e&&e_(r,e)},rE=(r,e,t)=>{const{vnode:s,slots:i}=r;let o=!0,a=Me;if(s.shapeFlag&32){const c=e._;c?t&&c===1?o=!1:t_(i,e,t):(o=!e.$stable,Zg(e,i)),a=e}else e&&(e_(r,e),a={default:1});if(o)for(const c in i)!Yg(c)&&a[c]==null&&delete i[c]},$t=_E;function sE(r){return iE(r)}function iE(r,e){const t=Kc();t.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:w=dn,insertStaticContent:P}=r,x=(A,C,M,z=null,$=null,G=null,te=void 0,J=null,Q=!!C.dynamicChildren)=>{if(A===C)return;A&&!Xi(A,C)&&(z=Tn(A),Le(A,$,G,!0),A=null),C.patchFlag===-2&&(Q=!1,C.dynamicChildren=null);const{type:K,ref:fe,shapeFlag:re}=C;switch(K){case Zc:S(A,C,M,z);break;case os:V(A,C,M,z);break;case Zl:A==null&&L(C,M,z,te);break;case Jt:E(A,C,M,z,$,G,te,J,Q);break;default:re&1?ee(A,C,M,z,$,G,te,J,Q):re&6?v(A,C,M,z,$,G,te,J,Q):(re&64||re&128)&&K.process(A,C,M,z,$,G,te,J,Q,sn)}fe!=null&&$&&gc(fe,A&&A.ref,G,C||A,!C)},S=(A,C,M,z)=>{if(A==null)s(C.el=c(C.children),M,z);else{const $=C.el=A.el;C.children!==A.children&&h($,C.children)}},V=(A,C,M,z)=>{A==null?s(C.el=u(C.children||""),M,z):C.el=A.el},L=(A,C,M,z)=>{[A.el,A.anchor]=P(A.children,C,M,z,A.el,A.anchor)},F=({el:A,anchor:C},M,z)=>{let $;for(;A&&A!==C;)$=g(A),s(A,M,z),A=$;s(C,M,z)},U=({el:A,anchor:C})=>{let M;for(;A&&A!==C;)M=g(A),i(A),A=M;i(C)},ee=(A,C,M,z,$,G,te,J,Q)=>{C.type==="svg"?te="svg":C.type==="math"&&(te="mathml"),A==null?ne(C,M,z,$,G,te,J,Q):b(A,C,$,G,te,J,Q)},ne=(A,C,M,z,$,G,te,J)=>{let Q,K;const{props:fe,shapeFlag:re,transition:he,dirs:le}=A;if(Q=A.el=a(A.type,G,fe&&fe.is,fe),re&8?d(Q,A.children):re&16&&T(A.children,Q,null,z,$,Xl(A,G),te,J),le&&$r(A,null,z,"created"),R(Q,A,A.scopeId,te,z),fe){for(const Se in fe)Se!=="value"&&!mo(Se)&&o(Q,Se,null,fe[Se],G,z);"value"in fe&&o(Q,"value",null,fe.value,G),(K=fe.onVnodeBeforeMount)&&on(K,z,A)}le&&$r(A,null,z,"beforeMount");const pe=oE($,he);pe&&he.beforeEnter(Q),s(Q,C,M),((K=fe&&fe.onVnodeMounted)||pe||le)&&$t(()=>{K&&on(K,z,A),pe&&he.enter(Q),le&&$r(A,null,z,"mounted")},$)},R=(A,C,M,z,$)=>{if(M&&w(A,M),z)for(let G=0;G<z.length;G++)w(A,z[G]);if($){let G=$.subTree;if(C===G||a_(G.type)&&(G.ssContent===C||G.ssFallback===C)){const te=$.vnode;R(A,te,te.scopeId,te.slotScopeIds,$.parent)}}},T=(A,C,M,z,$,G,te,J,Q=0)=>{for(let K=Q;K<A.length;K++){const fe=A[K]=J?Zn(A[K]):cn(A[K]);x(null,fe,C,M,z,$,G,te,J)}},b=(A,C,M,z,$,G,te)=>{const J=C.el=A.el;let{patchFlag:Q,dynamicChildren:K,dirs:fe}=C;Q|=A.patchFlag&16;const re=A.props||Me,he=C.props||Me;let le;if(M&&jr(M,!1),(le=he.onVnodeBeforeUpdate)&&on(le,M,C,A),fe&&$r(C,A,M,"beforeUpdate"),M&&jr(M,!0),(re.innerHTML&&he.innerHTML==null||re.textContent&&he.textContent==null)&&d(J,""),K?_(A.dynamicChildren,K,J,M,z,Xl(C,$),G):te||ae(A,C,J,null,M,z,Xl(C,$),G,!1),Q>0){if(Q&16)I(J,re,he,M,$);else if(Q&2&&re.class!==he.class&&o(J,"class",null,he.class,$),Q&4&&o(J,"style",re.style,he.style,$),Q&8){const pe=C.dynamicProps;for(let Se=0;Se<pe.length;Se++){const Ae=pe[Se],yt=re[Ae],ot=he[Ae];(ot!==yt||Ae==="value")&&o(J,Ae,yt,ot,$,M)}}Q&1&&A.children!==C.children&&d(J,C.children)}else!te&&K==null&&I(J,re,he,M,$);((le=he.onVnodeUpdated)||fe)&&$t(()=>{le&&on(le,M,C,A),fe&&$r(C,A,M,"updated")},z)},_=(A,C,M,z,$,G,te)=>{for(let J=0;J<C.length;J++){const Q=A[J],K=C[J],fe=Q.el&&(Q.type===Jt||!Xi(Q,K)||Q.shapeFlag&70)?p(Q.el):M;x(Q,K,fe,null,z,$,G,te,!0)}},I=(A,C,M,z,$)=>{if(C!==M){if(C!==Me)for(const G in C)!mo(G)&&!(G in M)&&o(A,G,C[G],null,$,z);for(const G in M){if(mo(G))continue;const te=M[G],J=C[G];te!==J&&G!=="value"&&o(A,G,J,te,$,z)}"value"in M&&o(A,"value",C.value,M.value,$)}},E=(A,C,M,z,$,G,te,J,Q)=>{const K=C.el=A?A.el:c(""),fe=C.anchor=A?A.anchor:c("");let{patchFlag:re,dynamicChildren:he,slotScopeIds:le}=C;le&&(J=J?J.concat(le):le),A==null?(s(K,M,z),s(fe,M,z),T(C.children||[],M,fe,$,G,te,J,Q)):re>0&&re&64&&he&&A.dynamicChildren?(_(A.dynamicChildren,he,M,$,G,te,J),(C.key!=null||$&&C===$.subTree)&&n_(A,C,!0)):ae(A,C,M,fe,$,G,te,J,Q)},v=(A,C,M,z,$,G,te,J,Q)=>{C.slotScopeIds=J,A==null?C.shapeFlag&512?$.ctx.activate(C,M,z,te,Q):j(C,M,z,$,G,te,Q):ie(A,C,Q)},j=(A,C,M,z,$,G,te)=>{const J=A.component=RE(A,z,$);if(qg(A)&&(J.ctx.renderer=sn),SE(J,!1,te),J.asyncDep){if($&&$.registerDep(J,W,te),!A.el){const Q=J.subTree=nn(os);V(null,Q,C,M)}}else W(J,A,C,M,$,G,te)},ie=(A,C,M)=>{const z=C.component=A.component;if(mE(A,C,M))if(z.asyncDep&&!z.asyncResolved){H(z,C,M);return}else z.next=C,z.update();else C.el=A.el,z.vnode=C},W=(A,C,M,z,$,G,te)=>{const J=()=>{if(A.isMounted){let{next:re,bu:he,u:le,parent:pe,vnode:Se}=A;{const It=r_(A);if(It){re&&(re.el=Se.el,H(A,re,te)),It.asyncDep.then(()=>{A.isUnmounted||J()});return}}let Ae=re,yt;jr(A,!1),re?(re.el=Se.el,H(A,re,te)):re=Se,he&&zl(he),(yt=re.props&&re.props.onVnodeBeforeUpdate)&&on(yt,pe,re,Se),jr(A,!0);const ot=Yl(A),dt=A.subTree;A.subTree=ot,x(dt,ot,p(dt.el),Tn(dt),A,$,G),re.el=ot.el,Ae===null&&gE(A,ot.el),le&&$t(le,$),(yt=re.props&&re.props.onVnodeUpdated)&&$t(()=>on(yt,pe,re,Se),$)}else{let re;const{el:he,props:le}=C,{bm:pe,m:Se,parent:Ae,root:yt,type:ot}=A,dt=yo(C);if(jr(A,!1),pe&&zl(pe),!dt&&(re=le&&le.onVnodeBeforeMount)&&on(re,Ae,C),jr(A,!0),he&&Rs){const It=()=>{A.subTree=Yl(A),Rs(he,A.subTree,A,$,null)};dt&&ot.__asyncHydrate?ot.__asyncHydrate(he,A,It):It()}else{yt.ce&&yt.ce._injectChildStyle(ot);const It=A.subTree=Yl(A);x(null,It,M,z,A,$,G),C.el=It.el}if(Se&&$t(Se,$),!dt&&(re=le&&le.onVnodeMounted)){const It=C;$t(()=>on(re,Ae,It),$)}(C.shapeFlag&256||Ae&&yo(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&A.a&&$t(A.a,$),A.isMounted=!0,C=M=z=null}};A.scope.on();const Q=A.effect=new Ig(J);A.scope.off();const K=A.update=Q.run.bind(Q),fe=A.job=Q.runIfDirty.bind(Q);fe.i=A,fe.id=A.uid,Q.scheduler=()=>yh(fe),jr(A,!0),K()},H=(A,C,M)=>{C.component=A;const z=A.vnode.props;A.vnode=C,A.next=null,ZT(A,C.props,z,M),rE(A,C.children,M),Rr(),Gf(A),Sr()},ae=(A,C,M,z,$,G,te,J,Q=!1)=>{const K=A&&A.children,fe=A?A.shapeFlag:0,re=C.children,{patchFlag:he,shapeFlag:le}=C;if(he>0){if(he&128){_t(K,re,M,z,$,G,te,J,Q);return}else if(he&256){oe(K,re,M,z,$,G,te,J,Q);return}}le&8?(fe&16&&Mr(K,$,G),re!==K&&d(M,re)):fe&16?le&16?_t(K,re,M,z,$,G,te,J,Q):Mr(K,$,G,!0):(fe&8&&d(M,""),le&16&&T(re,M,z,$,G,te,J,Q))},oe=(A,C,M,z,$,G,te,J,Q)=>{A=A||Ks,C=C||Ks;const K=A.length,fe=C.length,re=Math.min(K,fe);let he;for(he=0;he<re;he++){const le=C[he]=Q?Zn(C[he]):cn(C[he]);x(A[he],le,M,null,$,G,te,J,Q)}K>fe?Mr(A,$,G,!0,!1,re):T(C,M,z,$,G,te,J,Q,re)},_t=(A,C,M,z,$,G,te,J,Q)=>{let K=0;const fe=C.length;let re=A.length-1,he=fe-1;for(;K<=re&&K<=he;){const le=A[K],pe=C[K]=Q?Zn(C[K]):cn(C[K]);if(Xi(le,pe))x(le,pe,M,null,$,G,te,J,Q);else break;K++}for(;K<=re&&K<=he;){const le=A[re],pe=C[he]=Q?Zn(C[he]):cn(C[he]);if(Xi(le,pe))x(le,pe,M,null,$,G,te,J,Q);else break;re--,he--}if(K>re){if(K<=he){const le=he+1,pe=le<fe?C[le].el:z;for(;K<=he;)x(null,C[K]=Q?Zn(C[K]):cn(C[K]),M,pe,$,G,te,J,Q),K++}}else if(K>he)for(;K<=re;)Le(A[K],$,G,!0),K++;else{const le=K,pe=K,Se=new Map;for(K=pe;K<=he;K++){const xt=C[K]=Q?Zn(C[K]):cn(C[K]);xt.key!=null&&Se.set(xt.key,K)}let Ae,yt=0;const ot=he-pe+1;let dt=!1,It=0;const zn=new Array(ot);for(K=0;K<ot;K++)zn[K]=0;for(K=le;K<=re;K++){const xt=A[K];if(yt>=ot){Le(xt,$,G,!0);continue}let Qt;if(xt.key!=null)Qt=Se.get(xt.key);else for(Ae=pe;Ae<=he;Ae++)if(zn[Ae-pe]===0&&Xi(xt,C[Ae])){Qt=Ae;break}Qt===void 0?Le(xt,$,G,!0):(zn[Qt-pe]=K+1,Qt>=It?It=Qt:dt=!0,x(xt,C[Qt],M,null,$,G,te,J,Q),yt++)}const Ss=dt?aE(zn):Ks;for(Ae=Ss.length-1,K=ot-1;K>=0;K--){const xt=pe+K,Qt=C[xt],Ps=xt+1<fe?C[xt+1].el:z;zn[K]===0?x(null,Qt,M,Ps,$,G,te,J,Q):dt&&(Ae<0||K!==Ss[Ae]?ge(Qt,M,Ps,2):Ae--)}}},ge=(A,C,M,z,$=null)=>{const{el:G,type:te,transition:J,children:Q,shapeFlag:K}=A;if(K&6){ge(A.component.subTree,C,M,z);return}if(K&128){A.suspense.move(C,M,z);return}if(K&64){te.move(A,C,M,sn);return}if(te===Jt){s(G,C,M);for(let re=0;re<Q.length;re++)ge(Q[re],C,M,z);s(A.anchor,C,M);return}if(te===Zl){F(A,C,M);return}if(z!==2&&K&1&&J)if(z===0)J.beforeEnter(G),s(G,C,M),$t(()=>J.enter(G),$);else{const{leave:re,delayLeave:he,afterLeave:le}=J,pe=()=>s(G,C,M),Se=()=>{re(G,()=>{pe(),le&&le()})};he?he(G,pe,Se):Se()}else s(G,C,M)},Le=(A,C,M,z=!1,$=!1)=>{const{type:G,props:te,ref:J,children:Q,dynamicChildren:K,shapeFlag:fe,patchFlag:re,dirs:he,cacheIndex:le}=A;if(re===-2&&($=!1),J!=null&&gc(J,null,M,A,!0),le!=null&&(C.renderCache[le]=void 0),fe&256){C.ctx.deactivate(A);return}const pe=fe&1&&he,Se=!yo(A);let Ae;if(Se&&(Ae=te&&te.onVnodeBeforeUnmount)&&on(Ae,C,A),fe&6)Or(A.component,M,z);else{if(fe&128){A.suspense.unmount(M,z);return}pe&&$r(A,null,C,"beforeUnmount"),fe&64?A.type.remove(A,C,M,sn,z):K&&!K.hasOnce&&(G!==Jt||re>0&&re&64)?Mr(K,C,M,!1,!0):(G===Jt&&re&384||!$&&fe&16)&&Mr(Q,C,M),z&&Fe(A)}(Se&&(Ae=te&&te.onVnodeUnmounted)||pe)&&$t(()=>{Ae&&on(Ae,C,A),pe&&$r(A,null,C,"unmounted")},M)},Fe=A=>{const{type:C,el:M,anchor:z,transition:$}=A;if(C===Jt){Cl(M,z);return}if(C===Zl){U(A);return}const G=()=>{i(M),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(A.shapeFlag&1&&$&&!$.persisted){const{leave:te,delayLeave:J}=$,Q=()=>te(M,G);J?J(A.el,G,Q):Q()}else G()},Cl=(A,C)=>{let M;for(;A!==C;)M=g(A),i(A),A=M;i(C)},Or=(A,C,M)=>{const{bum:z,scope:$,job:G,subTree:te,um:J,m:Q,a:K}=A;Jf(Q),Jf(K),z&&zl(z),$.stop(),G&&(G.flags|=8,Le(te,A,C,M)),J&&$t(J,C),$t(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Mr=(A,C,M,z=!1,$=!1,G=0)=>{for(let te=G;te<A.length;te++)Le(A[te],C,M,z,$)},Tn=A=>{if(A.shapeFlag&6)return Tn(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=g(A.anchor||A.el),M=C&&C[CT];return M?g(M):C};let Li=!1;const va=(A,C,M)=>{A==null?C._vnode&&Le(C._vnode,null,null,!0):x(C._vnode||null,A,C,null,null,null,M),C._vnode=A,Li||(Li=!0,Gf(),Lg(),Li=!1)},sn={p:x,um:Le,m:ge,r:Fe,mt:j,mc:T,pc:ae,pbc:_,n:Tn,o:r};let Lr,Rs;return{render:va,hydrate:Lr,createApp:JT(va,Lr)}}function Xl({type:r,props:e},t){return t==="svg"&&r==="foreignObject"||t==="mathml"&&r==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function jr({effect:r,job:e},t){t?(r.flags|=32,e.flags|=4):(r.flags&=-33,e.flags&=-5)}function oE(r,e){return(!r||r&&!r.pendingBranch)&&e&&!e.persisted}function n_(r,e,t=!1){const s=r.children,i=e.children;if(_e(s)&&_e(i))for(let o=0;o<s.length;o++){const a=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=Zn(i[o]),c.el=a.el),!t&&c.patchFlag!==-2&&n_(a,c)),c.type===Zc&&(c.el=a.el)}}function aE(r){const e=r.slice(),t=[0];let s,i,o,a,c;const u=r.length;for(s=0;s<u;s++){const h=r[s];if(h!==0){if(i=t[t.length-1],r[i]<h){e[s]=i,t.push(s);continue}for(o=0,a=t.length-1;o<a;)c=o+a>>1,r[t[c]]<h?o=c+1:a=c;h<r[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,a=t[o-1];o-- >0;)t[o]=a,a=e[a];return t}function r_(r){const e=r.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:r_(e)}function Jf(r){if(r)for(let e=0;e<r.length;e++)r[e].flags|=8}const cE=Symbol.for("v-scx"),lE=()=>Ya(cE);function vo(r,e,t){return s_(r,e,t)}function s_(r,e,t=Me){const{immediate:s,deep:i,flush:o,once:a}=t,c=ut({},t),u=e&&s||!e&&o!=="post";let h;if(Mo){if(o==="sync"){const w=lE();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!u){const w=()=>{};return w.stop=dn,w.resume=dn,w.pause=dn,w}}const d=Ot;c.call=(w,P,x)=>yn(w,d,P,x);let p=!1;o==="post"?c.scheduler=w=>{$t(w,d&&d.suspense)}:o!=="sync"&&(p=!0,c.scheduler=(w,P)=>{P?w():yh(w)}),c.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const g=ET(r,e,c);return Mo&&(h?h.push(g):u&&g()),g}function uE(r,e,t){const s=this.proxy,i=rt(r)?r.includes(".")?i_(s,r):()=>s[r]:r.bind(s,s);let o;ye(e)?o=e:(o=e.handler,t=e);const a=Yo(this),c=s_(i,o.bind(s),t);return a(),c}function i_(r,e){const t=e.split(".");return()=>{let s=r;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const hE=(r,e)=>e==="modelValue"||e==="model-value"?r.modelModifiers:r[`${e}Modifiers`]||r[`${pr(e)}Modifiers`]||r[`${Is(e)}Modifiers`];function dE(r,e,...t){if(r.isUnmounted)return;const s=r.vnode.props||Me;let i=t;const o=e.startsWith("update:"),a=o&&hE(s,e.slice(7));a&&(a.trim&&(i=t.map(d=>rt(d)?d.trim():d)),a.number&&(i=t.map($w)));let c,u=s[c=Gl(e)]||s[c=Gl(pr(e))];!u&&o&&(u=s[c=Gl(Is(e))]),u&&yn(u,r,6,i);const h=s[c+"Once"];if(h){if(!r.emitted)r.emitted={};else if(r.emitted[c])return;r.emitted[c]=!0,yn(h,r,6,i)}}function o_(r,e,t=!1){const s=e.emitsCache,i=s.get(r);if(i!==void 0)return i;const o=r.emits;let a={},c=!1;if(!ye(r)){const u=h=>{const d=o_(h,e,!0);d&&(c=!0,ut(a,d))};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}return!o&&!c?(Qe(r)&&s.set(r,null),null):(_e(o)?o.forEach(u=>a[u]=null):ut(a,o),Qe(r)&&s.set(r,a),a)}function Yc(r,e){return!r||!jc(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(r,e[0].toLowerCase()+e.slice(1))||xe(r,Is(e))||xe(r,e))}function Yl(r){const{type:e,vnode:t,proxy:s,withProxy:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:h,renderCache:d,props:p,data:g,setupState:w,ctx:P,inheritAttrs:x}=r,S=mc(r);let V,L;try{if(t.shapeFlag&4){const U=i||s,ee=U;V=cn(h.call(ee,U,d,p,w,g,P)),L=c}else{const U=e;V=cn(U.length>1?U(p,{attrs:c,slots:a,emit:u}):U(p,null)),L=e.props?c:fE(c)}}catch(U){wo.length=0,Qc(U,r,1),V=nn(os)}let F=V;if(L&&x!==!1){const U=Object.keys(L),{shapeFlag:ee}=F;U.length&&ee&7&&(o&&U.some(ah)&&(L=pE(L,o)),F=si(F,L,!1,!0))}return t.dirs&&(F=si(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(t.dirs):t.dirs),t.transition&&vh(F,t.transition),V=F,mc(S),V}const fE=r=>{let e;for(const t in r)(t==="class"||t==="style"||jc(t))&&((e||(e={}))[t]=r[t]);return e},pE=(r,e)=>{const t={};for(const s in r)(!ah(s)||!(s.slice(9)in e))&&(t[s]=r[s]);return t};function mE(r,e,t){const{props:s,children:i,component:o}=r,{props:a,children:c,patchFlag:u}=e,h=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return s?Xf(s,a,h):!!a;if(u&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(a[g]!==s[g]&&!Yc(h,g))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?Xf(s,a,h):!0:!!a;return!1}function Xf(r,e,t){const s=Object.keys(e);if(s.length!==Object.keys(r).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(e[o]!==r[o]&&!Yc(t,o))return!0}return!1}function gE({vnode:r,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===r&&(s.el=r.el),s===r)(r=e.vnode).el=t,e=e.parent;else break}}const a_=r=>r.__isSuspense;function _E(r,e){e&&e.pendingBranch?_e(r)?e.effects.push(...r):e.effects.push(r):ST(r)}const Jt=Symbol.for("v-fgt"),Zc=Symbol.for("v-txt"),os=Symbol.for("v-cmt"),Zl=Symbol.for("v-stc"),wo=[];let zt=null;function Rt(r=!1){wo.push(zt=r?null:[])}function yE(){wo.pop(),zt=wo[wo.length-1]||null}let Oo=1;function Yf(r,e=!1){Oo+=r,r<0&&zt&&e&&(zt.hasOnce=!0)}function c_(r){return r.dynamicChildren=Oo>0?zt||Ks:null,yE(),Oo>0&&zt&&zt.push(r),r}function Lt(r,e,t,s,i,o){return c_(Oe(r,e,t,s,i,o,!0))}function l_(r,e,t,s,i){return c_(nn(r,e,t,s,i,!0))}function u_(r){return r?r.__v_isVNode===!0:!1}function Xi(r,e){return r.type===e.type&&r.key===e.key}const h_=({key:r})=>r??null,Za=({ref:r,ref_key:e,ref_for:t})=>(typeof r=="number"&&(r=""+r),r!=null?rt(r)||St(r)||ye(r)?{i:Xt,r,k:e,f:!!t}:r:null);function Oe(r,e=null,t=null,s=0,i=null,o=r===Jt?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&h_(e),ref:e&&Za(e),scopeId:Ug,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xt};return c?(bh(u,t),o&128&&r.normalize(u)):t&&(u.shapeFlag|=rt(t)?8:16),Oo>0&&!a&&zt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&zt.push(u),u}const nn=IE;function IE(r,e=null,t=null,s=0,i=null,o=!1){if((!r||r===$T)&&(r=os),u_(r)){const c=si(r,e,!0);return t&&bh(c,t),Oo>0&&!o&&zt&&(c.shapeFlag&6?zt[zt.indexOf(r)]=c:zt.push(c)),c.patchFlag=-2,c}if(DE(r)&&(r=r.__vccOpts),e){e=vE(e);let{class:c,style:u}=e;c&&!rt(c)&&(e.class=ri(c)),Qe(u)&&(_h(u)&&!_e(u)&&(u=ut({},u)),e.style=Hc(u))}const a=rt(r)?1:a_(r)?128:xT(r)?64:Qe(r)?4:ye(r)?2:0;return Oe(r,e,t,s,i,a,o,!0)}function vE(r){return r?_h(r)||Qg(r)?ut({},r):r:null}function si(r,e,t=!1,s=!1){const{props:i,ref:o,patchFlag:a,children:c,transition:u}=r,h=e?EE(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:r.type,props:h,key:h&&h_(h),ref:e&&e.ref?t&&o?_e(o)?o.concat(Za(e)):[o,Za(e)]:Za(e):o,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:c,target:r.target,targetStart:r.targetStart,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==Jt?a===-1?16:a|16:a,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:u,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&si(r.ssContent),ssFallback:r.ssFallback&&si(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce};return u&&s&&vh(d,u.clone(d)),d}function wE(r=" ",e=0){return nn(Zc,null,r,e)}function TE(r="",e=!1){return e?(Rt(),l_(os,null,r)):nn(os,null,r)}function cn(r){return r==null||typeof r=="boolean"?nn(os):_e(r)?nn(Jt,null,r.slice()):u_(r)?Zn(r):nn(Zc,null,String(r))}function Zn(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:si(r)}function bh(r,e){let t=0;const{shapeFlag:s}=r;if(e==null)e=null;else if(_e(e))t=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),bh(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!Qg(e)?e._ctx=Xt:i===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),s&64?(t=16,e=[wE(e)]):t=8);r.children=e,r.shapeFlag|=t}function EE(...r){const e={};for(let t=0;t<r.length;t++){const s=r[t];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ri([e.class,s.class]));else if(i==="style")e.style=Hc([e.style,s.style]);else if(jc(i)){const o=e[i],a=s[i];a&&o!==a&&!(_e(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=s[i])}return e}function on(r,e,t,s=null){yn(r,e,7,[t,s])}const bE=Kg();let AE=0;function RE(r,e,t){const s=r.type,i=(e?e.appContext:r.appContext)||bE,o={uid:AE++,vnode:r,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xg(s,i),emitsOptions:o_(s,i),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=dE.bind(null,o),r.ce&&r.ce(o),o}let Ot=null,yc,Pu;{const r=Kc(),e=(t,s)=>{let i;return(i=r[t])||(i=r[t]=[]),i.push(s),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};yc=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),Pu=e("__VUE_SSR_SETTERS__",t=>Mo=t)}const Yo=r=>{const e=Ot;return yc(r),r.scope.on(),()=>{r.scope.off(),yc(e)}},Zf=()=>{Ot&&Ot.scope.off(),yc(null)};function d_(r){return r.vnode.shapeFlag&4}let Mo=!1;function SE(r,e=!1,t=!1){e&&Pu(e);const{props:s,children:i}=r.vnode,o=d_(r);YT(r,s,o,e),nE(r,i,t);const a=o?PE(r,e):void 0;return e&&Pu(!1),a}function PE(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=new Proxy(r.ctx,jT);const{setup:s}=t;if(s){Rr();const i=r.setupContext=s.length>1?xE(r):null,o=Yo(r),a=Xo(s,r,0,[r.props,i]),c=hg(a);if(Sr(),o(),(c||r.sp)&&!yo(r)&&Bg(r),c){if(a.then(Zf,Zf),e)return a.then(u=>{ep(r,u,e)}).catch(u=>{Qc(u,r,0)});r.asyncDep=a}else ep(r,a,e)}else f_(r,e)}function ep(r,e,t){ye(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Qe(e)&&(r.setupState=Ng(e)),f_(r,t)}let tp;function f_(r,e,t){const s=r.type;if(!r.render){if(!e&&tp&&!s.render){const i=s.template||Th(r).template;if(i){const{isCustomElement:o,compilerOptions:a}=r.appContext.config,{delimiters:c,compilerOptions:u}=s,h=ut(ut({isCustomElement:o,delimiters:c},a),u);s.render=tp(i,h)}}r.render=s.render||dn}{const i=Yo(r);Rr();try{GT(r)}finally{Sr(),i()}}}const CE={get(r,e){return bt(r,"get",""),r[e]}};function xE(r){const e=t=>{r.exposed=t||{}};return{attrs:new Proxy(r.attrs,CE),slots:r.slots,emit:r.emit,expose:e}}function el(r){return r.exposed?r.exposeProxy||(r.exposeProxy=new Proxy(Ng(gT(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in Io)return Io[t](r)},has(e,t){return t in e||t in Io}})):r.proxy}function DE(r){return ye(r)&&"__vccOpts"in r}const Lo=(r,e)=>wT(r,e,Mo),kE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cu;const np=typeof window<"u"&&window.trustedTypes;if(np)try{Cu=np.createPolicy("vue",{createHTML:r=>r})}catch{}const p_=Cu?r=>Cu.createHTML(r):r=>r,VE="http://www.w3.org/2000/svg",NE="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,rp=Rn&&Rn.createElement("template"),OE={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,s)=>{const i=e==="svg"?Rn.createElementNS(VE,r):e==="mathml"?Rn.createElementNS(NE,r):t?Rn.createElement(r,{is:t}):Rn.createElement(r);return r==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:r=>Rn.createTextNode(r),createComment:r=>Rn.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Rn.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,s,i,o){const a=t?t.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{rp.innerHTML=p_(s==="svg"?`<svg>${r}</svg>`:s==="mathml"?`<math>${r}</math>`:r);const c=rp.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ME=Symbol("_vtc");function LE(r,e,t){const s=r[ME];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}const Ic=Symbol("_vod"),m_=Symbol("_vsh"),Ah={beforeMount(r,{value:e},{transition:t}){r[Ic]=r.style.display==="none"?"":r.style.display,t&&e?t.beforeEnter(r):Yi(r,e)},mounted(r,{value:e},{transition:t}){t&&e&&t.enter(r)},updated(r,{value:e,oldValue:t},{transition:s}){!e!=!t&&(s?e?(s.beforeEnter(r),Yi(r,!0),s.enter(r)):s.leave(r,()=>{Yi(r,!1)}):Yi(r,e))},beforeUnmount(r,{value:e}){Yi(r,e)}};function Yi(r,e){r.style.display=e?r[Ic]:"none",r[m_]=!e}const FE=Symbol(""),UE=/(^|;)\s*display\s*:/;function BE(r,e,t){const s=r.style,i=rt(t);let o=!1;if(t&&!i){if(e)if(rt(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&ec(s,c,"")}else for(const a in e)t[a]==null&&ec(s,a,"");for(const a in t)a==="display"&&(o=!0),ec(s,a,t[a])}else if(i){if(e!==t){const a=s[FE];a&&(t+=";"+a),s.cssText=t,o=UE.test(t)}}else e&&r.removeAttribute("style");Ic in r&&(r[Ic]=o?s.display:"",r[m_]&&(s.display="none"))}const sp=/\s*!important$/;function ec(r,e,t){if(_e(t))t.forEach(s=>ec(r,e,s));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const s=qE(r,e);sp.test(t)?r.setProperty(Is(s),t.replace(sp,""),"important"):r[s]=t}}const ip=["Webkit","Moz","ms"],eu={};function qE(r,e){const t=eu[e];if(t)return t;let s=pr(e);if(s!=="filter"&&s in r)return eu[e]=s;s=pg(s);for(let i=0;i<ip.length;i++){const o=ip[i]+s;if(o in r)return eu[e]=o}return e}const op="http://www.w3.org/1999/xlink";function ap(r,e,t,s,i,o=Ww(e)){s&&e.startsWith("xlink:")?t==null?r.removeAttributeNS(op,e.slice(6,e.length)):r.setAttributeNS(op,e,t):t==null||o&&!gg(t)?r.removeAttribute(e):r.setAttribute(e,o?"":Ar(t)?String(t):t)}function cp(r,e,t,s,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(r[e]=e==="innerHTML"?p_(t):t);return}const o=r.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?r.getAttribute("value")||"":r.value,u=t==null?r.type==="checkbox"?"on":"":String(t);(c!==u||!("_value"in r))&&(r.value=u),t==null&&r.removeAttribute(e),r._value=t;return}let a=!1;if(t===""||t==null){const c=typeof r[e];c==="boolean"?t=gg(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(i||e)}function $E(r,e,t,s){r.addEventListener(e,t,s)}function jE(r,e,t,s){r.removeEventListener(e,t,s)}const lp=Symbol("_vei");function GE(r,e,t,s,i=null){const o=r[lp]||(r[lp]={}),a=o[e];if(s&&a)a.value=s;else{const[c,u]=zE(e);if(s){const h=o[e]=WE(s,i);$E(r,c,h,u)}else a&&(jE(r,c,a,u),o[e]=void 0)}}const up=/(?:Once|Passive|Capture)$/;function zE(r){let e;if(up.test(r)){e={};let s;for(;s=r.match(up);)r=r.slice(0,r.length-s[0].length),e[s[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Is(r.slice(2)),e]}let tu=0;const KE=Promise.resolve(),HE=()=>tu||(KE.then(()=>tu=0),tu=Date.now());function WE(r,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;yn(QE(s,t.value),e,5,[s])};return t.value=r,t.attached=HE(),t}function QE(r,e){if(_e(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const hp=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)>96&&r.charCodeAt(2)<123,JE=(r,e,t,s,i,o)=>{const a=i==="svg";e==="class"?LE(r,s,a):e==="style"?BE(r,t,s):jc(e)?ah(e)||GE(r,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):XE(r,e,s,a))?(cp(r,e,s),!r.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ap(r,e,s,a,o,e!=="value")):r._isVueCE&&(/[A-Z]/.test(e)||!rt(s))?cp(r,pr(e),s,o,e):(e==="true-value"?r._trueValue=s:e==="false-value"&&(r._falseValue=s),ap(r,e,s,a))};function XE(r,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in r&&hp(e)&&ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=r.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return hp(e)&&rt(t)?!1:e in r}const YE=ut({patchProp:JE},OE);let dp;function ZE(){return dp||(dp=sE(YE))}const e0=(...r)=>{const e=ZE().createApp(...r),{mount:t}=e;return e.mount=s=>{const i=n0(s);if(!i)return;const o=e._component;!ye(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=t(i,!1,t0(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function t0(r){if(r instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&r instanceof MathMLElement)return"mathml"}function n0(r){return rt(r)?document.querySelector(r):r}async function r0({image:r,quality:e=75}){try{const t=r instanceof File?r.name.replace(/\.[^/.]+$/,"")+".webp":"webpfy.webp",s=new Image,i=document.createElement("canvas"),o=i.getContext("2d");if(!o)throw new Error("Unable to obtain 2D rendering context.");return s.src=URL.createObjectURL(r),await new Promise(c=>{s.onload=()=>c()}),i.width=s.width,i.height=s.height,o.drawImage(s,0,0),{webpBlob:await new Promise(c=>{i.toBlob(u=>{if(u)c(u);else throw new Error("Failed to convert to WebP format.")},"image/webp",e/100)}),fileName:t}}catch(t){throw t}}var s0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function i0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xu={exports:{}};(function(r,e){(function(){var t=!1,s=function(_){if(_ instanceof s)return _;if(!(this instanceof s))return new s(_);this.EXIFwrapped=_};r.exports&&(e=r.exports=s),e.EXIF=s;var i=s.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},o=s.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},a=s.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},c=s.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},u=s.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function h(_){return!!_.exifdata}function d(_,I){I=I||_.match(/^data\:([^\;]+)\;base64,/mi)[1]||"",_=_.replace(/^data\:([^\;]+)\;base64,/gmi,"");for(var E=atob(_),v=E.length,j=new ArrayBuffer(v),ie=new Uint8Array(j),W=0;W<v;W++)ie[W]=E.charCodeAt(W);return j}function p(_,I){var E=new XMLHttpRequest;E.open("GET",_,!0),E.responseType="blob",E.onload=function(v){(this.status==200||this.status===0)&&I(this.response)},E.send()}function g(_,I){function E(W){var H=w(W);_.exifdata=H||{};var ae=P(W);if(_.iptcdata=ae||{},s.isXmpEnabled){var oe=R(W);_.xmpdata=oe||{}}I&&I.call(_)}if(_.src)if(/^data\:/i.test(_.src)){var v=d(_.src);E(v)}else if(/^blob\:/i.test(_.src)){var j=new FileReader;j.onload=function(W){E(W.target.result)},p(_.src,function(W){j.readAsArrayBuffer(W)})}else{var ie=new XMLHttpRequest;ie.onload=function(){if(this.status==200||this.status===0)E(ie.response);else throw"Could not load image";ie=null},ie.open("GET",_.src,!0),ie.responseType="arraybuffer",ie.send(null)}else if(self.FileReader&&(_ instanceof self.Blob||_ instanceof self.File)){var j=new FileReader;j.onload=function(H){E(H.target.result)},j.readAsArrayBuffer(_)}}function w(_){var I=new DataView(_);if(I.getUint8(0)!=255||I.getUint8(1)!=216)return!1;for(var E=2,v=_.byteLength,j;E<v;){if(I.getUint8(E)!=255)return!1;if(j=I.getUint8(E+1),j==225)return ne(I,E+4,I.getUint16(E+2)-2);E+=2+I.getUint16(E+2)}}function P(_){var I=new DataView(_);if(I.getUint8(0)!=255||I.getUint8(1)!=216)return!1;for(var E=2,v=_.byteLength,j=function(ae,oe){return ae.getUint8(oe)===56&&ae.getUint8(oe+1)===66&&ae.getUint8(oe+2)===73&&ae.getUint8(oe+3)===77&&ae.getUint8(oe+4)===4&&ae.getUint8(oe+5)===4};E<v;){if(j(I,E)){var ie=I.getUint8(E+7);ie%2!==0&&(ie+=1),ie===0&&(ie=4);var W=E+8+ie,H=I.getUint16(E+6+ie);return S(_,W,H)}E++}}var x={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function S(_,I,E){for(var v=new DataView(_),j={},ie,W,H,ae,oe=I;oe<I+E;)v.getUint8(oe)===28&&v.getUint8(oe+1)===2&&(ae=v.getUint8(oe+2),ae in x&&(H=v.getInt16(oe+3),W=x[ae],ie=ee(v,oe+5,H),j.hasOwnProperty(W)?j[W]instanceof Array?j[W].push(ie):j[W]=[j[W],ie]:j[W]=ie)),oe++;return j}function V(_,I,E,v,j){var ie=_.getUint16(E,!j),W={},H,ae,oe;for(oe=0;oe<ie;oe++)H=E+oe*12+2,ae=v[_.getUint16(H,!j)],!ae&&t&&console.log("Unknown tag: "+_.getUint16(H,!j)),W[ae]=L(_,H,I,E,j);return W}function L(_,I,E,v,j){var ie=_.getUint16(I+2,!j),W=_.getUint32(I+4,!j),H=_.getUint32(I+8,!j)+E,ae,oe,_t,ge,Le,Fe;switch(ie){case 1:case 7:if(W==1)return _.getUint8(I+8,!j);for(ae=W>4?H:I+8,oe=[],ge=0;ge<W;ge++)oe[ge]=_.getUint8(ae+ge);return oe;case 2:return ae=W>4?H:I+8,ee(_,ae,W-1);case 3:if(W==1)return _.getUint16(I+8,!j);for(ae=W>2?H:I+8,oe=[],ge=0;ge<W;ge++)oe[ge]=_.getUint16(ae+2*ge,!j);return oe;case 4:if(W==1)return _.getUint32(I+8,!j);for(oe=[],ge=0;ge<W;ge++)oe[ge]=_.getUint32(H+4*ge,!j);return oe;case 5:if(W==1)return Le=_.getUint32(H,!j),Fe=_.getUint32(H+4,!j),_t=new Number(Le/Fe),_t.numerator=Le,_t.denominator=Fe,_t;for(oe=[],ge=0;ge<W;ge++)Le=_.getUint32(H+8*ge,!j),Fe=_.getUint32(H+4+8*ge,!j),oe[ge]=new Number(Le/Fe),oe[ge].numerator=Le,oe[ge].denominator=Fe;return oe;case 9:if(W==1)return _.getInt32(I+8,!j);for(oe=[],ge=0;ge<W;ge++)oe[ge]=_.getInt32(H+4*ge,!j);return oe;case 10:if(W==1)return _.getInt32(H,!j)/_.getInt32(H+4,!j);for(oe=[],ge=0;ge<W;ge++)oe[ge]=_.getInt32(H+8*ge,!j)/_.getInt32(H+4+8*ge,!j);return oe}}function F(_,I,E){var v=_.getUint16(I,!E);return _.getUint32(I+2+v*12,!E)}function U(_,I,E,v){var j=F(_,I+E,v);if(j){if(j>_.byteLength)return{}}else return{};var ie=V(_,I,I+j,c,v);if(ie.Compression)switch(ie.Compression){case 6:if(ie.JpegIFOffset&&ie.JpegIFByteCount){var W=I+ie.JpegIFOffset,H=ie.JpegIFByteCount;ie.blob=new Blob([new Uint8Array(_.buffer,W,H)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",ie.Compression)}else ie.PhotometricInterpretation==2&&console.log("Thumbnail image format is RGB, which is not implemented.");return ie}function ee(_,I,E){var v="";for(n=I;n<I+E;n++)v+=String.fromCharCode(_.getUint8(n));return v}function ne(_,I){if(ee(_,I,4)!="Exif")return!1;var E,v,j,ie,W,H=I+6;if(_.getUint16(H)==18761)E=!1;else if(_.getUint16(H)==19789)E=!0;else return!1;if(_.getUint16(H+2,!E)!=42)return!1;var ae=_.getUint32(H+4,!E);if(ae<8)return!1;if(v=V(_,H,H+ae,o,E),v.ExifIFDPointer){ie=V(_,H,H+v.ExifIFDPointer,i,E);for(j in ie){switch(j){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":ie[j]=u[j][ie[j]];break;case"ExifVersion":case"FlashpixVersion":ie[j]=String.fromCharCode(ie[j][0],ie[j][1],ie[j][2],ie[j][3]);break;case"ComponentsConfiguration":ie[j]=u.Components[ie[j][0]]+u.Components[ie[j][1]]+u.Components[ie[j][2]]+u.Components[ie[j][3]];break}v[j]=ie[j]}}if(v.GPSInfoIFDPointer){W=V(_,H,H+v.GPSInfoIFDPointer,a,E);for(j in W){switch(j){case"GPSVersionID":W[j]=W[j][0]+"."+W[j][1]+"."+W[j][2]+"."+W[j][3];break}v[j]=W[j]}}return v.thumbnail=U(_,H,ae,E),v}function R(_){if("DOMParser"in self){var I=new DataView(_);if(I.getUint8(0)!=255||I.getUint8(1)!=216)return!1;for(var E=2,v=_.byteLength,j=new DOMParser;E<v-4;)if(ee(I,E,4)=="http"){var ie=E-1,W=I.getUint16(E-2)-1,H=ee(I,ie,W),ae=H.indexOf("xmpmeta>")+8;H=H.substring(H.indexOf("<x:xmpmeta"),ae);var oe=H.indexOf("x:xmpmeta")+10;H=H.slice(0,oe)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+H.slice(oe);var _t=j.parseFromString(H,"text/xml");return b(_t)}else E++}}function T(_){var I={};if(_.nodeType==1){if(_.attributes.length>0){I["@attributes"]={};for(var E=0;E<_.attributes.length;E++){var v=_.attributes.item(E);I["@attributes"][v.nodeName]=v.nodeValue}}}else if(_.nodeType==3)return _.nodeValue;if(_.hasChildNodes())for(var j=0;j<_.childNodes.length;j++){var ie=_.childNodes.item(j),W=ie.nodeName;if(I[W]==null)I[W]=T(ie);else{if(I[W].push==null){var H=I[W];I[W]=[],I[W].push(H)}I[W].push(T(ie))}}return I}function b(_){try{var I={};if(_.children.length>0)for(var E=0;E<_.children.length;E++){var v=_.children.item(E),j=v.attributes;for(var ie in j){var W=j[ie],H=W.nodeName,ae=W.nodeValue;H!==void 0&&(I[H]=ae)}var oe=v.nodeName;if(typeof I[oe]>"u")I[oe]=T(v);else{if(typeof I[oe].push>"u"){var _t=I[oe];I[oe]=[],I[oe].push(_t)}I[oe].push(T(v))}}else I=_.textContent;return I}catch(ge){console.log(ge.message)}}s.enableXmp=function(){s.isXmpEnabled=!0},s.disableXmp=function(){s.isXmpEnabled=!1},s.getData=function(_,I){return(self.Image&&_ instanceof self.Image||self.HTMLImageElement&&_ instanceof self.HTMLImageElement)&&!_.complete?!1:(h(_)?I&&I.call(_):g(_,I),!0)},s.getTag=function(_,I){if(h(_))return _.exifdata[I]},s.getIptcTag=function(_,I){if(h(_))return _.iptcdata[I]},s.getAllTags=function(_){if(!h(_))return{};var I,E=_.exifdata,v={};for(I in E)E.hasOwnProperty(I)&&(v[I]=E[I]);return v},s.getAllIptcTags=function(_){if(!h(_))return{};var I,E=_.iptcdata,v={};for(I in E)E.hasOwnProperty(I)&&(v[I]=E[I]);return v},s.pretty=function(_){if(!h(_))return"";var I,E=_.exifdata,v="";for(I in E)E.hasOwnProperty(I)&&(typeof E[I]=="object"?E[I]instanceof Number?v+=I+" : "+E[I]+" ["+E[I].numerator+"/"+E[I].denominator+`]\r
`:v+=I+" : ["+E[I].length+` values]\r
`:v+=I+" : "+E[I]+`\r
`);return v},s.readFromBinaryFile=function(_){return w(_)}}).call(s0)})(xu,xu.exports);var o0=xu.exports;const fp=i0(o0);var pp={};/**
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
 */const g_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let i=r.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},a0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const i=r[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[t++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[t++],a=r[t++],c=r[t++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=r[t++],a=r[t++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},__={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<r.length;i+=3){const o=r[i],a=i+1<r.length,c=a?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,d=o>>2,p=(o&3)<<4|c>>4;let g=(c&15)<<2|h>>6,w=h&63;u||(w=64,a||(g=64)),s.push(t[d],t[p],t[g],t[w])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(g_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):a0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<r.length;){const o=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,o==null||c==null||h==null||p==null)throw new c0;const g=o<<2|c>>4;if(s.push(g),h!==64){const w=c<<4&240|h>>2;if(s.push(w),p!==64){const P=h<<6&192|p;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class c0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l0=function(r){const e=g_(r);return __.encodeByteArray(e,!0)},vc=function(r){return l0(r).replace(/\./g,"")},y_=function(r){try{return __.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function u0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const h0=()=>u0().__FIREBASE_DEFAULTS__,d0=()=>{if(typeof process>"u"||typeof pp>"u")return;const r=pp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},f0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&y_(r[1]);return e&&JSON.parse(e)},tl=()=>{try{return h0()||d0()||f0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},I_=r=>{var e,t;return(t=(e=tl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},v_=r=>{const e=I_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},w_=()=>{var r;return(r=tl())===null||r===void 0?void 0:r.config},T_=r=>{var e;return(e=tl())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class p0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function E_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[vc(JSON.stringify(t)),vc(JSON.stringify(a)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function g0(){var r;const e=(r=tl())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function y0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function I0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v0(){const r=st();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function b_(){return!g0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function w0(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const T0="FirebaseError";class vn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=T0,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?E0(o,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new vn(i,c,s)}}function E0(r,e){return r.replace(b0,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const b0=/\{\$([^}]+)}/g;function A0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function mr(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const o=r[i],a=e[i];if(mp(o)&&mp(a)){if(!mr(o,a))return!1}else if(o!==a)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function mp(r){return r!==null&&typeof r=="object"}/**
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
 */function ea(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function co(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,o]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function lo(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function R0(r,e){const t=new S0(r,e);return t.subscribe.bind(t)}class S0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");P0(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=nu),i.error===void 0&&(i.error=nu),i.complete===void 0&&(i.complete=nu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function nu(){}/**
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
 */function Pe(r){return r&&r._delegate?r._delegate:r}class gr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class C0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new p0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(D0(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:x0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x0(r){return r===Hr?void 0:r}function D0(r){return r.instantiationMode==="EAGER"}/**
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
 */class k0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new C0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(we||(we={}));const V0={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},N0=we.INFO,O0={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},M0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),i=O0[e];if(i)console[i](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rh{constructor(e){this.name=e,this._logLevel=N0,this._logHandler=M0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const L0=(r,e)=>e.some(t=>r instanceof t);let gp,_p;function F0(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U0(){return _p||(_p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R_=new WeakMap,Du=new WeakMap,S_=new WeakMap,ru=new WeakMap,Sh=new WeakMap;function B0(r){const e=new Promise((t,s)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{t(hr(r.result)),i()},a=()=>{s(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&R_.set(t,r)}).catch(()=>{}),Sh.set(e,r),e}function q0(r){if(Du.has(r))return;const e=new Promise((t,s)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{s(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});Du.set(r,e)}let ku={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Du.get(r);if(e==="objectStoreNames")return r.objectStoreNames||S_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function $0(r){ku=r(ku)}function j0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(su(this),e,...t);return S_.set(s,e.sort?e.sort():[e]),hr(s)}:U0().includes(r)?function(...e){return r.apply(su(this),e),hr(R_.get(this))}:function(...e){return hr(r.apply(su(this),e))}}function G0(r){return typeof r=="function"?j0(r):(r instanceof IDBTransaction&&q0(r),L0(r,F0())?new Proxy(r,ku):r)}function hr(r){if(r instanceof IDBRequest)return B0(r);if(ru.has(r))return ru.get(r);const e=G0(r);return e!==r&&(ru.set(r,e),Sh.set(e,r)),e}const su=r=>Sh.get(r);function z0(r,e,{blocked:t,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(r,e),c=hr(a);return s&&a.addEventListener("upgradeneeded",u=>{s(hr(a.result),u.oldVersion,u.newVersion,hr(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const K0=["get","getKey","getAll","getAllKeys","count"],H0=["put","add","delete","clear"],iu=new Map;function yp(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(iu.get(e))return iu.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=H0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||K0.includes(t)))return;const o=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return iu.set(e,o),o}$0(r=>({...r,get:(e,t,s)=>yp(e,t)||r.get(e,t,s),has:(e,t)=>!!yp(e,t)||r.has(e,t)}));/**
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
 */class W0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Q0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Q0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vu="@firebase/app",Ip="0.10.17";/**
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
 */const On=new Rh("@firebase/app"),J0="@firebase/app-compat",X0="@firebase/analytics-compat",Y0="@firebase/analytics",Z0="@firebase/app-check-compat",eb="@firebase/app-check",tb="@firebase/auth",nb="@firebase/auth-compat",rb="@firebase/database",sb="@firebase/data-connect",ib="@firebase/database-compat",ob="@firebase/functions",ab="@firebase/functions-compat",cb="@firebase/installations",lb="@firebase/installations-compat",ub="@firebase/messaging",hb="@firebase/messaging-compat",db="@firebase/performance",fb="@firebase/performance-compat",pb="@firebase/remote-config",mb="@firebase/remote-config-compat",gb="@firebase/storage",_b="@firebase/storage-compat",yb="@firebase/firestore",Ib="@firebase/vertexai",vb="@firebase/firestore-compat",wb="firebase",Tb="11.1.0";/**
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
 */const wc="[DEFAULT]",Eb={[Vu]:"fire-core",[J0]:"fire-core-compat",[Y0]:"fire-analytics",[X0]:"fire-analytics-compat",[eb]:"fire-app-check",[Z0]:"fire-app-check-compat",[tb]:"fire-auth",[nb]:"fire-auth-compat",[rb]:"fire-rtdb",[sb]:"fire-data-connect",[ib]:"fire-rtdb-compat",[ob]:"fire-fn",[ab]:"fire-fn-compat",[cb]:"fire-iid",[lb]:"fire-iid-compat",[ub]:"fire-fcm",[hb]:"fire-fcm-compat",[db]:"fire-perf",[fb]:"fire-perf-compat",[pb]:"fire-rc",[mb]:"fire-rc-compat",[gb]:"fire-gcs",[_b]:"fire-gcs-compat",[yb]:"fire-fst",[vb]:"fire-fst-compat",[Ib]:"fire-vertex","fire-js":"fire-js",[wb]:"fire-js-all"};/**
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
 */const Tc=new Map,bb=new Map,Nu=new Map;function vp(r,e){try{r.container.addComponent(e)}catch(t){On.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function as(r){const e=r.name;if(Nu.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,r);for(const t of Tc.values())vp(t,r);for(const t of bb.values())vp(t,r);return!0}function Ti(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ab(r,e,t=wc){Ti(r,e).clearInstance(t)}function Cn(r){return r.settings!==void 0}/**
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
 */const Rb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Zo("app","Firebase",Rb);/**
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
 */class Sb{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=Tb;function P_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(t||(t=w_()),!t)throw dr.create("no-options");const o=Tc.get(i);if(o){if(mr(t,o.options)&&mr(s,o.config))return o;throw dr.create("duplicate-app",{appName:i})}const a=new k0(i);for(const u of Nu.values())a.addComponent(u);const c=new Sb(t,s,a);return Tc.set(i,c),c}function Ph(r=wc){const e=Tc.get(r);if(!e&&r===wc&&w_())return P_();if(!e)throw dr.create("no-app",{appName:r});return e}function fn(r,e,t){var s;let i=(s=Eb[r])!==null&&s!==void 0?s:r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(c.join(" "));return}as(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Pb="firebase-heartbeat-database",Cb=1,Fo="firebase-heartbeat-store";let ou=null;function C_(){return ou||(ou=z0(Pb,Cb,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Fo)}catch(t){console.warn(t)}}}}).catch(r=>{throw dr.create("idb-open",{originalErrorMessage:r.message})})),ou}async function xb(r){try{const t=(await C_()).transaction(Fo),s=await t.objectStore(Fo).get(x_(r));return await t.done,s}catch(e){if(e instanceof vn)On.warn(e.message);else{const t=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(t.message)}}}async function wp(r,e){try{const s=(await C_()).transaction(Fo,"readwrite");await s.objectStore(Fo).put(e,x_(r)),await s.done}catch(t){if(t instanceof vn)On.warn(t.message);else{const s=dr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});On.warn(s.message)}}}function x_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Db=1024,kb=30*24*60*60*1e3;class Vb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ob(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Tp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=kb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){On.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tp(),{heartbeatsToSend:s,unsentEntries:i}=Nb(this._heartbeatsCache.heartbeats),o=vc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return On.warn(t),""}}}function Tp(){return new Date().toISOString().substring(0,10)}function Nb(r,e=Db){const t=[];let s=r.slice();for(const i of r){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ep(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ep(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ob{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?w0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ep(r){return vc(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Mb(r){as(new gr("platform-logger",e=>new W0(e),"PRIVATE")),as(new gr("heartbeat",e=>new Vb(e),"PRIVATE")),fn(Vu,Ip,r),fn(Vu,Ip,"esm2017"),fn("fire-js","")}Mb("");var Lb="firebase",Fb="11.1.0";/**
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
 */fn(Lb,Fb,"app");/**
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
 */const D_="firebasestorage.googleapis.com",k_="storageBucket",Ub=2*60*1e3,Bb=10*60*1e3,qb=1e3;/**
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
 */class Xe extends vn{constructor(e,t,s=0){super(au(e),`Firebase Storage: ${t} (${au(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return au(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ge;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ge||(Ge={}));function au(r){return"storage/"+r}function Ch(){const r="An unknown error occurred, please check the error payload for server response.";return new Xe(Ge.UNKNOWN,r)}function $b(r){return new Xe(Ge.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function jb(r){return new Xe(Ge.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Gb(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(Ge.UNAUTHENTICATED,r)}function zb(){return new Xe(Ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Kb(r){return new Xe(Ge.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function V_(){return new Xe(Ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function N_(){return new Xe(Ge.CANCELED,"User canceled the upload/download.")}function Hb(r){return new Xe(Ge.INVALID_URL,"Invalid URL '"+r+"'.")}function Wb(r){return new Xe(Ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Qb(){return new Xe(Ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+k_+"' property when initializing the app?")}function O_(){return new Xe(Ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Jb(){return new Xe(Ge.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Xb(){return new Xe(Ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Yb(r){return new Xe(Ge.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ou(r){return new Xe(Ge.INVALID_ARGUMENT,r)}function M_(){return new Xe(Ge.APP_DELETED,"The Firebase app was deleted.")}function Zb(r){return new Xe(Ge.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function To(r,e){return new Xe(Ge.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Zi(r){throw new Xe(Ge.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class Kt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Kt.makeFromUrl(e,t)}catch{return new Kt(e,"")}if(s.path==="")return s;throw Wb(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),u={bucket:1,path:3};function h(U){U.path_=decodeURIComponent(U.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${i}/o${g}`,"i"),P={bucket:1,path:3},x=t===D_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",V=new RegExp(`^https?://${x}/${i}/${S}`,"i"),F=[{regex:c,indices:u,postModify:o},{regex:w,indices:P,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let U=0;U<F.length;U++){const ee=F[U],ne=ee.regex.exec(e);if(ne){const R=ne[ee.indices.bucket];let T=ne[ee.indices.path];T||(T=""),s=new Kt(R,T),ee.postModify(s);break}}if(s==null)throw Hb(e);return s}}class eA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tA(r,e,t){let s=1,i=null,o=null,a=!1,c=0;function u(){return c===2}let h=!1;function d(...S){h||(h=!0,e.apply(null,S))}function p(S){i=setTimeout(()=>{i=null,r(w,u())},S)}function g(){o&&clearTimeout(o)}function w(S,...V){if(h){g();return}if(S){g(),d.call(null,S,...V);return}if(u()||a){g(),d.call(null,S,...V);return}s<64&&(s*=2);let F;c===1?(c=2,F=0):F=(s+Math.random())*1e3,p(F)}let P=!1;function x(S){P||(P=!0,g(),!h&&(i!==null?(S||(c=2),clearTimeout(i),p(0)):S||(c=1)))}return p(0),o=setTimeout(()=>{a=!0,x(!0)},t),x}function nA(r){r(!1)}/**
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
 */function rA(r){return r!==void 0}function sA(r){return typeof r=="function"}function iA(r){return typeof r=="object"&&!Array.isArray(r)}function nl(r){return typeof r=="string"||r instanceof String}function bp(r){return xh()&&r instanceof Blob}function xh(){return typeof Blob<"u"}function Ap(r,e,t,s){if(s<e)throw Ou(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw Ou(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function Ei(r,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${r}`}function L_(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const i=e(s)+"="+e(r[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var ns;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ns||(ns={}));/**
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
 */function F_(r,e){const t=r>=500&&r<600,i=[408,429].indexOf(r)!==-1,o=e.indexOf(r)!==-1;return t||i||o}/**
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
 */class oA{constructor(e,t,s,i,o,a,c,u,h,d,p,g=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,P)=>{this.resolve_=w,this.reject_=P,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ua(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===ns.NO_ERROR,u=o.getStatus();if(!c||F_(u,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===ns.ABORT;s(!1,new Ua(!1,null,d));return}const h=this.successCodes_.indexOf(u)!==-1;s(!0,new Ua(h,o))})},t=(s,i)=>{const o=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());rA(u)?o(u):o()}catch(u){a(u)}else if(c!==null){const u=Ch();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(i.canceled){const u=this.appDelete_?M_():N_();a(u)}else{const u=V_();a(u)}};this.canceled_?t(!1,new Ua(!1,null,!0)):this.backoffId_=tA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ua{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function aA(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function cA(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lA(r,e){e&&(r["X-Firebase-GMPID"]=e)}function uA(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function hA(r,e,t,s,i,o,a=!0){const c=L_(r.urlParams),u=r.url+c,h=Object.assign({},r.headers);return lA(h,e),aA(h,t),cA(h,o),uA(h,s),new oA(u,r.method,h,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,i,a)}/**
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
 */function dA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fA(...r){const e=dA();if(e!==void 0){const t=new e;for(let s=0;s<r.length;s++)t.append(r[s]);return t.getBlob()}else{if(xh())return new Blob(r);throw new Xe(Ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pA(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function mA(r){if(typeof atob>"u")throw Yb("base-64");return atob(r)}/**
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
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cu{constructor(e,t){this.data=e,this.contentType=t||null}}function gA(r,e){switch(r){case ln.RAW:return new cu(U_(e));case ln.BASE64:case ln.BASE64URL:return new cu(B_(r,e));case ln.DATA_URL:return new cu(yA(e),IA(e))}throw Ch()}function U_(r){const e=[];for(let t=0;t<r.length;t++){let s=r.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=s,a=r.charCodeAt(++t);s=65536|(o&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function _A(r){let e;try{e=decodeURIComponent(r)}catch{throw To(ln.DATA_URL,"Malformed data URL.")}return U_(e)}function B_(r,e){switch(r){case ln.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw To(r,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw To(r,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=mA(e)}catch(i){throw i.message.includes("polyfill")?i:To(r,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class q_{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw To(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=vA(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function yA(r){const e=new q_(r);return e.base64?B_(ln.BASE64,e.rest):_A(e.rest)}function IA(r){return new q_(r).contentType}function vA(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class er{constructor(e,t){let s=0,i="";bp(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(bp(this.data_)){const s=this.data_,i=pA(s,e,t);return i===null?null:new er(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new er(s,!0)}}static getBlob(...e){if(xh()){const t=e.map(s=>s instanceof er?s.data_:s);return new er(fA.apply(null,t))}else{const t=e.map(a=>nl(a)?gA(ln.RAW,a).data:a.data_);let s=0;t.forEach(a=>{s+=a.byteLength});const i=new Uint8Array(s);let o=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)i[o++]=a[c]}),new er(i,!0)}}uploadData(){return this.data_}}/**
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
 */function $_(r){let e;try{e=JSON.parse(r)}catch{return null}return iA(e)?e:null}/**
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
 */function wA(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function TA(r,e){const t=e.split("/").filter(s=>s.length>0).join("/");return r.length===0?t:r+"/"+t}function j_(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function EA(r,e){return e}class kt{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||EA}}let Ba=null;function bA(r){return!nl(r)||r.length<2?r:j_(r)}function G_(){if(Ba)return Ba;const r=[];r.push(new kt("bucket")),r.push(new kt("generation")),r.push(new kt("metageneration")),r.push(new kt("name","fullPath",!0));function e(o,a){return bA(a)}const t=new kt("name");t.xform=e,r.push(t);function s(o,a){return a!==void 0?Number(a):a}const i=new kt("size");return i.xform=s,r.push(i),r.push(new kt("timeCreated")),r.push(new kt("updated")),r.push(new kt("md5Hash",null,!0)),r.push(new kt("cacheControl",null,!0)),r.push(new kt("contentDisposition",null,!0)),r.push(new kt("contentEncoding",null,!0)),r.push(new kt("contentLanguage",null,!0)),r.push(new kt("contentType",null,!0)),r.push(new kt("metadata","customMetadata",!0)),Ba=r,Ba}function AA(r,e){function t(){const s=r.bucket,i=r.fullPath,o=new Kt(s,i);return e._makeStorageReference(o)}Object.defineProperty(r,"ref",{get:t})}function RA(r,e,t){const s={};s.type="file";const i=t.length;for(let o=0;o<i;o++){const a=t[o];s[a.local]=a.xform(s,e[a.server])}return AA(s,r),s}function z_(r,e,t){const s=$_(e);return s===null?null:RA(r,s,t)}function SA(r,e,t,s){const i=$_(e);if(i===null||!nl(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(h=>{const d=r.bucket,p=r.fullPath,g="/b/"+a(d)+"/o/"+a(p),w=Ei(g,t,s),P=L_({alt:"media",token:h});return w+P})[0]}function K_(r,e){const t={},s=e.length;for(let i=0;i<s;i++){const o=e[i];o.writable&&(t[o.server]=r[o.local])}return JSON.stringify(t)}class ws{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Nn(r){if(!r)throw Ch()}function Dh(r,e){function t(s,i){const o=z_(r,i,e);return Nn(o!==null),o}return t}function PA(r,e){function t(s,i){const o=z_(r,i,e);return Nn(o!==null),SA(o,i,r.host,r._protocol)}return t}function ta(r){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=zb():i=Gb():t.getStatus()===402?i=jb(r.bucket):t.getStatus()===403?i=Kb(r.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function kh(r){const e=ta(r);function t(s,i){let o=e(s,i);return s.getStatus()===404&&(o=$b(r.path)),o.serverResponse=i.serverResponse,o}return t}function CA(r,e,t){const s=e.fullServerUrl(),i=Ei(s,r.host,r._protocol),o="GET",a=r.maxOperationRetryTime,c=new ws(i,o,Dh(r,t),a);return c.errorHandler=kh(e),c}function xA(r,e,t){const s=e.fullServerUrl(),i=Ei(s,r.host,r._protocol),o="GET",a=r.maxOperationRetryTime,c=new ws(i,o,PA(r,t),a);return c.errorHandler=kh(e),c}function DA(r,e){const t=e.fullServerUrl(),s=Ei(t,r.host,r._protocol),i="DELETE",o=r.maxOperationRetryTime;function a(u,h){}const c=new ws(s,i,a,o);return c.successCodes=[200,204],c.errorHandler=kh(e),c}function kA(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function H_(r,e,t){const s=Object.assign({},t);return s.fullPath=r.path,s.size=e.size(),s.contentType||(s.contentType=kA(null,e)),s}function VA(r,e,t,s,i){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let F="";for(let U=0;U<2;U++)F=F+Math.random().toString().slice(2);return F}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const h=H_(e,s,i),d=K_(h,t),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",w=er.getBlob(p,s,g);if(w===null)throw O_();const P={name:h.fullPath},x=Ei(o,r.host,r._protocol),S="POST",V=r.maxUploadRetryTime,L=new ws(x,S,Dh(r,t),V);return L.urlParams=P,L.headers=a,L.body=w.uploadData(),L.errorHandler=ta(e),L}class Ec{constructor(e,t,s,i){this.current=e,this.total=t,this.finalized=!!s,this.metadata=i||null}}function Vh(r,e){let t=null;try{t=r.getResponseHeader("X-Goog-Upload-Status")}catch{Nn(!1)}return Nn(!!t&&(e||["active"]).indexOf(t)!==-1),t}function NA(r,e,t,s,i){const o=e.bucketOnlyServerUrl(),a=H_(e,s,i),c={name:a.fullPath},u=Ei(o,r.host,r._protocol),h="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},p=K_(a,t),g=r.maxUploadRetryTime;function w(x){Vh(x);let S;try{S=x.getResponseHeader("X-Goog-Upload-URL")}catch{Nn(!1)}return Nn(nl(S)),S}const P=new ws(u,h,w,g);return P.urlParams=c,P.headers=d,P.body=p,P.errorHandler=ta(e),P}function OA(r,e,t,s){const i={"X-Goog-Upload-Command":"query"};function o(h){const d=Vh(h,["active","final"]);let p=null;try{p=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Nn(!1)}p||Nn(!1);const g=Number(p);return Nn(!isNaN(g)),new Ec(g,s.size(),d==="final")}const a="POST",c=r.maxUploadRetryTime,u=new ws(t,a,o,c);return u.headers=i,u.errorHandler=ta(e),u}const Rp=256*1024;function MA(r,e,t,s,i,o,a,c){const u=new Ec(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=s.size()),s.size()!==u.total)throw Jb();const h=u.total-u.current;let d=h;i>0&&(d=Math.min(d,i));const p=u.current,g=p+d;let w="";d===0?w="finalize":h===d?w="upload, finalize":w="upload";const P={"X-Goog-Upload-Command":w,"X-Goog-Upload-Offset":`${u.current}`},x=s.slice(p,g);if(x===null)throw O_();function S(U,ee){const ne=Vh(U,["active","final"]),R=u.current+d,T=s.size();let b;return ne==="final"?b=Dh(e,o)(U,ee):b=null,new Ec(R,T,ne==="final",b)}const V="POST",L=e.maxUploadRetryTime,F=new ws(t,V,S,L);return F.headers=P,F.body=x.uploadData(),F.progressCallback=c||null,F.errorHandler=ta(r),F}const Mt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function lu(r){switch(r){case"running":case"pausing":case"canceling":return Mt.RUNNING;case"paused":return Mt.PAUSED;case"success":return Mt.SUCCESS;case"canceled":return Mt.CANCELED;case"error":return Mt.ERROR;default:return Mt.ERROR}}/**
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
 */class LA{constructor(e,t,s){if(sA(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function Ns(r){return(...e)=>{Promise.resolve().then(()=>r(...e))}}class FA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ns.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ns.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ns.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw Zi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UA extends FA{initXhr(){this.xhr_.responseType="text"}}function Qr(){return new UA}/**
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
 */class BA{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=G_(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ge.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(F_(i.status,[]))if(o)i=V_();else{this.sleepTime=Math.max(this.sleepTime*2,qb),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ge.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=NA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Qr,e,t);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const i=OA(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(i,Qr,t,s);this._request=o,o.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Rp*this._chunkMultiplier,t=new Ec(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,o)=>{let a;try{a=MA(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const c=this._ref.storage._makeRequest(a,Qr,i,o,!1);this._request=c,c.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Rp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=CA(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Qr,e,t);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=VA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Qr,e,t);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=N_(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=lu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,i){const o=new LA(t||void 0,s||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(lu(this._state)){case Mt.SUCCESS:Ns(this._resolve.bind(null,this.snapshot))();break;case Mt.CANCELED:case Mt.ERROR:const t=this._reject;Ns(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(lu(this._state)){case Mt.RUNNING:case Mt.PAUSED:e.next&&Ns(e.next.bind(e,this.snapshot))();break;case Mt.SUCCESS:e.complete&&Ns(e.complete.bind(e))();break;case Mt.CANCELED:case Mt.ERROR:e.error&&Ns(e.error.bind(e,this._error))();break;default:e.error&&Ns(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class cs{constructor(e,t){this._service=e,t instanceof Kt?this._location=t:this._location=Kt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new cs(e,t)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j_(this._location.path)}get storage(){return this._service}get parent(){const e=wA(this._location.path);if(e===null)return null;const t=new Kt(this._location.bucket,e);return new cs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Zb(e)}}function qA(r,e,t){return r._throwIfRoot("uploadBytesResumable"),new BA(r,new er(e),t)}function $A(r){r._throwIfRoot("getDownloadURL");const e=xA(r.storage,r._location,G_());return r.storage.makeRequestWithTokens(e,Qr).then(t=>{if(t===null)throw Xb();return t})}function jA(r){r._throwIfRoot("deleteObject");const e=DA(r.storage,r._location);return r.storage.makeRequestWithTokens(e,Qr)}function GA(r,e){const t=TA(r._location.path,e),s=new Kt(r._location.bucket,t);return new cs(r.storage,s)}/**
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
 */function zA(r){return/^[A-Za-z]+:\/\//.test(r)}function KA(r,e){return new cs(r,e)}function W_(r,e){if(r instanceof Nh){const t=r;if(t._bucket==null)throw Qb();const s=new cs(t,t._bucket);return e!=null?W_(s,e):s}else return e!==void 0?GA(r,e):r}function HA(r,e){if(e&&zA(e)){if(r instanceof Nh)return KA(r,e);throw Ou("To use ref(service, url), the first argument must be a Storage instance.")}else return W_(r,e)}function Sp(r,e){const t=e==null?void 0:e[k_];return t==null?null:Kt.makeFromBucketSpec(t,r)}function WA(r,e,t,s={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:i}=s;i&&(r._overrideAuthToken=typeof i=="string"?i:E_(i,r.app.options.projectId))}class Nh{constructor(e,t,s,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=D_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ub,this._maxUploadRetryTime=Bb,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=Sp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=Sp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cs(this,e)}_makeRequest(e,t,s,i,o=!0){if(this._deleted)return new eA(M_());{const a=hA(e,this._appId,s,i,t,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Pp="@firebase/storage",Cp="0.13.4";/**
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
 */const Q_="storage";function QA(r,e,t){return r=Pe(r),qA(r,e,t)}function JA(r){return r=Pe(r),$A(r)}function XA(r){return r=Pe(r),jA(r)}function xp(r,e){return r=Pe(r),HA(r,e)}function YA(r=Ph(),e){r=Pe(r);const s=Ti(r,Q_).getImmediate({identifier:e}),i=v_("storage");return i&&ZA(s,...i),s}function ZA(r,e,t,s={}){WA(r,e,t,s)}function eR(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),i=r.getProvider("app-check-internal");return new Nh(t,s,i,e,vs)}function tR(){as(new gr(Q_,eR,"PUBLIC").setMultipleInstances(!0)),fn(Pp,Cp,""),fn(Pp,Cp,"esm2017")}tR();var Dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rs,J_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function b(){}b.prototype=T.prototype,R.D=T.prototype,R.prototype=new b,R.prototype.constructor=R,R.C=function(_,I,E){for(var v=Array(arguments.length-2),j=2;j<arguments.length;j++)v[j-2]=arguments[j];return T.prototype[I].apply(_,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,T,b){b||(b=0);var _=Array(16);if(typeof T=="string")for(var I=0;16>I;++I)_[I]=T.charCodeAt(b++)|T.charCodeAt(b++)<<8|T.charCodeAt(b++)<<16|T.charCodeAt(b++)<<24;else for(I=0;16>I;++I)_[I]=T[b++]|T[b++]<<8|T[b++]<<16|T[b++]<<24;T=R.g[0],b=R.g[1],I=R.g[2];var E=R.g[3],v=T+(E^b&(I^E))+_[0]+3614090360&4294967295;T=b+(v<<7&4294967295|v>>>25),v=E+(I^T&(b^I))+_[1]+3905402710&4294967295,E=T+(v<<12&4294967295|v>>>20),v=I+(b^E&(T^b))+_[2]+606105819&4294967295,I=E+(v<<17&4294967295|v>>>15),v=b+(T^I&(E^T))+_[3]+3250441966&4294967295,b=I+(v<<22&4294967295|v>>>10),v=T+(E^b&(I^E))+_[4]+4118548399&4294967295,T=b+(v<<7&4294967295|v>>>25),v=E+(I^T&(b^I))+_[5]+1200080426&4294967295,E=T+(v<<12&4294967295|v>>>20),v=I+(b^E&(T^b))+_[6]+2821735955&4294967295,I=E+(v<<17&4294967295|v>>>15),v=b+(T^I&(E^T))+_[7]+4249261313&4294967295,b=I+(v<<22&4294967295|v>>>10),v=T+(E^b&(I^E))+_[8]+1770035416&4294967295,T=b+(v<<7&4294967295|v>>>25),v=E+(I^T&(b^I))+_[9]+2336552879&4294967295,E=T+(v<<12&4294967295|v>>>20),v=I+(b^E&(T^b))+_[10]+4294925233&4294967295,I=E+(v<<17&4294967295|v>>>15),v=b+(T^I&(E^T))+_[11]+2304563134&4294967295,b=I+(v<<22&4294967295|v>>>10),v=T+(E^b&(I^E))+_[12]+1804603682&4294967295,T=b+(v<<7&4294967295|v>>>25),v=E+(I^T&(b^I))+_[13]+4254626195&4294967295,E=T+(v<<12&4294967295|v>>>20),v=I+(b^E&(T^b))+_[14]+2792965006&4294967295,I=E+(v<<17&4294967295|v>>>15),v=b+(T^I&(E^T))+_[15]+1236535329&4294967295,b=I+(v<<22&4294967295|v>>>10),v=T+(I^E&(b^I))+_[1]+4129170786&4294967295,T=b+(v<<5&4294967295|v>>>27),v=E+(b^I&(T^b))+_[6]+3225465664&4294967295,E=T+(v<<9&4294967295|v>>>23),v=I+(T^b&(E^T))+_[11]+643717713&4294967295,I=E+(v<<14&4294967295|v>>>18),v=b+(E^T&(I^E))+_[0]+3921069994&4294967295,b=I+(v<<20&4294967295|v>>>12),v=T+(I^E&(b^I))+_[5]+3593408605&4294967295,T=b+(v<<5&4294967295|v>>>27),v=E+(b^I&(T^b))+_[10]+38016083&4294967295,E=T+(v<<9&4294967295|v>>>23),v=I+(T^b&(E^T))+_[15]+3634488961&4294967295,I=E+(v<<14&4294967295|v>>>18),v=b+(E^T&(I^E))+_[4]+3889429448&4294967295,b=I+(v<<20&4294967295|v>>>12),v=T+(I^E&(b^I))+_[9]+568446438&4294967295,T=b+(v<<5&4294967295|v>>>27),v=E+(b^I&(T^b))+_[14]+3275163606&4294967295,E=T+(v<<9&4294967295|v>>>23),v=I+(T^b&(E^T))+_[3]+4107603335&4294967295,I=E+(v<<14&4294967295|v>>>18),v=b+(E^T&(I^E))+_[8]+1163531501&4294967295,b=I+(v<<20&4294967295|v>>>12),v=T+(I^E&(b^I))+_[13]+2850285829&4294967295,T=b+(v<<5&4294967295|v>>>27),v=E+(b^I&(T^b))+_[2]+4243563512&4294967295,E=T+(v<<9&4294967295|v>>>23),v=I+(T^b&(E^T))+_[7]+1735328473&4294967295,I=E+(v<<14&4294967295|v>>>18),v=b+(E^T&(I^E))+_[12]+2368359562&4294967295,b=I+(v<<20&4294967295|v>>>12),v=T+(b^I^E)+_[5]+4294588738&4294967295,T=b+(v<<4&4294967295|v>>>28),v=E+(T^b^I)+_[8]+2272392833&4294967295,E=T+(v<<11&4294967295|v>>>21),v=I+(E^T^b)+_[11]+1839030562&4294967295,I=E+(v<<16&4294967295|v>>>16),v=b+(I^E^T)+_[14]+4259657740&4294967295,b=I+(v<<23&4294967295|v>>>9),v=T+(b^I^E)+_[1]+2763975236&4294967295,T=b+(v<<4&4294967295|v>>>28),v=E+(T^b^I)+_[4]+1272893353&4294967295,E=T+(v<<11&4294967295|v>>>21),v=I+(E^T^b)+_[7]+4139469664&4294967295,I=E+(v<<16&4294967295|v>>>16),v=b+(I^E^T)+_[10]+3200236656&4294967295,b=I+(v<<23&4294967295|v>>>9),v=T+(b^I^E)+_[13]+681279174&4294967295,T=b+(v<<4&4294967295|v>>>28),v=E+(T^b^I)+_[0]+3936430074&4294967295,E=T+(v<<11&4294967295|v>>>21),v=I+(E^T^b)+_[3]+3572445317&4294967295,I=E+(v<<16&4294967295|v>>>16),v=b+(I^E^T)+_[6]+76029189&4294967295,b=I+(v<<23&4294967295|v>>>9),v=T+(b^I^E)+_[9]+3654602809&4294967295,T=b+(v<<4&4294967295|v>>>28),v=E+(T^b^I)+_[12]+3873151461&4294967295,E=T+(v<<11&4294967295|v>>>21),v=I+(E^T^b)+_[15]+530742520&4294967295,I=E+(v<<16&4294967295|v>>>16),v=b+(I^E^T)+_[2]+3299628645&4294967295,b=I+(v<<23&4294967295|v>>>9),v=T+(I^(b|~E))+_[0]+4096336452&4294967295,T=b+(v<<6&4294967295|v>>>26),v=E+(b^(T|~I))+_[7]+1126891415&4294967295,E=T+(v<<10&4294967295|v>>>22),v=I+(T^(E|~b))+_[14]+2878612391&4294967295,I=E+(v<<15&4294967295|v>>>17),v=b+(E^(I|~T))+_[5]+4237533241&4294967295,b=I+(v<<21&4294967295|v>>>11),v=T+(I^(b|~E))+_[12]+1700485571&4294967295,T=b+(v<<6&4294967295|v>>>26),v=E+(b^(T|~I))+_[3]+2399980690&4294967295,E=T+(v<<10&4294967295|v>>>22),v=I+(T^(E|~b))+_[10]+4293915773&4294967295,I=E+(v<<15&4294967295|v>>>17),v=b+(E^(I|~T))+_[1]+2240044497&4294967295,b=I+(v<<21&4294967295|v>>>11),v=T+(I^(b|~E))+_[8]+1873313359&4294967295,T=b+(v<<6&4294967295|v>>>26),v=E+(b^(T|~I))+_[15]+4264355552&4294967295,E=T+(v<<10&4294967295|v>>>22),v=I+(T^(E|~b))+_[6]+2734768916&4294967295,I=E+(v<<15&4294967295|v>>>17),v=b+(E^(I|~T))+_[13]+1309151649&4294967295,b=I+(v<<21&4294967295|v>>>11),v=T+(I^(b|~E))+_[4]+4149444226&4294967295,T=b+(v<<6&4294967295|v>>>26),v=E+(b^(T|~I))+_[11]+3174756917&4294967295,E=T+(v<<10&4294967295|v>>>22),v=I+(T^(E|~b))+_[2]+718787259&4294967295,I=E+(v<<15&4294967295|v>>>17),v=b+(E^(I|~T))+_[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,R.g[2]=R.g[2]+I&4294967295,R.g[3]=R.g[3]+E&4294967295}s.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var b=T-this.blockSize,_=this.B,I=this.h,E=0;E<T;){if(I==0)for(;E<=b;)i(this,R,E),E+=this.blockSize;if(typeof R=="string"){for(;E<T;)if(_[I++]=R.charCodeAt(E++),I==this.blockSize){i(this,_),I=0;break}}else for(;E<T;)if(_[I++]=R[E++],I==this.blockSize){i(this,_),I=0;break}}this.h=I,this.o+=T},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var b=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=b&255,b/=256;for(this.u(R),R=Array(16),T=b=0;4>T;++T)for(var _=0;32>_;_+=8)R[b++]=this.g[T]>>>_&255;return R};function o(R,T){var b=c;return Object.prototype.hasOwnProperty.call(b,R)?b[R]:b[R]=T(R)}function a(R,T){this.h=T;for(var b=[],_=!0,I=R.length-1;0<=I;I--){var E=R[I]|0;_&&E==T||(b[I]=E,_=!1)}this.g=b}var c={};function u(R){return-128<=R&&128>R?o(R,function(T){return new a([T|0],0>T?-1:0)}):new a([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return S(h(-R));for(var T=[],b=1,_=0;R>=b;_++)T[_]=R/b|0,b*=4294967296;return new a(T,0)}function d(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return S(d(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=h(Math.pow(T,8)),_=p,I=0;I<R.length;I+=8){var E=Math.min(8,R.length-I),v=parseInt(R.substring(I,I+E),T);8>E?(E=h(Math.pow(T,E)),_=_.j(E).add(h(v))):(_=_.j(b),_=_.add(h(v)))}return _}var p=u(0),g=u(1),w=u(16777216);r=a.prototype,r.m=function(){if(x(this))return-S(this).m();for(var R=0,T=1,b=0;b<this.g.length;b++){var _=this.i(b);R+=(0<=_?_:4294967296+_)*T,T*=4294967296}return R},r.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(x(this))return"-"+S(this).toString(R);for(var T=h(Math.pow(R,6)),b=this,_="";;){var I=U(b,T).g;b=V(b,I.j(T));var E=((0<b.g.length?b.g[0]:b.h)>>>0).toString(R);if(b=I,P(b))return E+_;for(;6>E.length;)E="0"+E;_=E+_}},r.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function x(R){return R.h==-1}r.l=function(R){return R=V(this,R),x(R)?-1:P(R)?0:1};function S(R){for(var T=R.g.length,b=[],_=0;_<T;_++)b[_]=~R.g[_];return new a(b,~R.h).add(g)}r.abs=function(){return x(this)?S(this):this},r.add=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],_=0,I=0;I<=T;I++){var E=_+(this.i(I)&65535)+(R.i(I)&65535),v=(E>>>16)+(this.i(I)>>>16)+(R.i(I)>>>16);_=v>>>16,E&=65535,v&=65535,b[I]=v<<16|E}return new a(b,b[b.length-1]&-2147483648?-1:0)};function V(R,T){return R.add(S(T))}r.j=function(R){if(P(this)||P(R))return p;if(x(this))return x(R)?S(this).j(S(R)):S(S(this).j(R));if(x(R))return S(this.j(S(R)));if(0>this.l(w)&&0>R.l(w))return h(this.m()*R.m());for(var T=this.g.length+R.g.length,b=[],_=0;_<2*T;_++)b[_]=0;for(_=0;_<this.g.length;_++)for(var I=0;I<R.g.length;I++){var E=this.i(_)>>>16,v=this.i(_)&65535,j=R.i(I)>>>16,ie=R.i(I)&65535;b[2*_+2*I]+=v*ie,L(b,2*_+2*I),b[2*_+2*I+1]+=E*ie,L(b,2*_+2*I+1),b[2*_+2*I+1]+=v*j,L(b,2*_+2*I+1),b[2*_+2*I+2]+=E*j,L(b,2*_+2*I+2)}for(_=0;_<T;_++)b[_]=b[2*_+1]<<16|b[2*_];for(_=T;_<2*T;_++)b[_]=0;return new a(b,0)};function L(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function F(R,T){this.g=R,this.h=T}function U(R,T){if(P(T))throw Error("division by zero");if(P(R))return new F(p,p);if(x(R))return T=U(S(R),T),new F(S(T.g),S(T.h));if(x(T))return T=U(R,S(T)),new F(S(T.g),T.h);if(30<R.g.length){if(x(R)||x(T))throw Error("slowDivide_ only works with positive integers.");for(var b=g,_=T;0>=_.l(R);)b=ee(b),_=ee(_);var I=ne(b,1),E=ne(_,1);for(_=ne(_,2),b=ne(b,2);!P(_);){var v=E.add(_);0>=v.l(R)&&(I=I.add(b),E=v),_=ne(_,1),b=ne(b,1)}return T=V(R,I.j(T)),new F(I,T)}for(I=p;0<=R.l(T);){for(b=Math.max(1,Math.floor(R.m()/T.m())),_=Math.ceil(Math.log(b)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),E=h(b),v=E.j(T);x(v)||0<v.l(R);)b-=_,E=h(b),v=E.j(T);P(E)&&(E=g),I=I.add(E),R=V(R,v)}return new F(I,R)}r.A=function(R){return U(this,R).h},r.and=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],_=0;_<T;_++)b[_]=this.i(_)&R.i(_);return new a(b,this.h&R.h)},r.or=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],_=0;_<T;_++)b[_]=this.i(_)|R.i(_);return new a(b,this.h|R.h)},r.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),b=[],_=0;_<T;_++)b[_]=this.i(_)^R.i(_);return new a(b,this.h^R.h)};function ee(R){for(var T=R.g.length+1,b=[],_=0;_<T;_++)b[_]=R.i(_)<<1|R.i(_-1)>>>31;return new a(b,R.h)}function ne(R,T){var b=T>>5;T%=32;for(var _=R.g.length-b,I=[],E=0;E<_;E++)I[E]=0<T?R.i(E+b)>>>T|R.i(E+b+1)<<32-T:R.i(E+b);return new a(I,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,J_=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,rs=a}).apply(typeof Dp<"u"?Dp:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X_,uo,Y_,tc,Mu,Z_,ey,ty;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=t(this);function i(l,f){if(f)e:{var m=s;l=l.split(".");for(var y=0;y<l.length-1;y++){var k=l[y];if(!(k in m))break e;m=m[k]}l=l[l.length-1],y=m[l],f=f(y),f!=y&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function o(l,f){l instanceof String&&(l+="");var m=0,y=!1,k={next:function(){if(!y&&m<l.length){var O=m++;return{value:f(O,l[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(l){return l||function(){return o(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function h(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,m){return l.call.apply(l.bind,arguments)}function p(l,f,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,y),l.apply(f,k)}}return function(){return l.apply(f,arguments)}}function g(l,f,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function w(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function P(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,k,O){for(var Y=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)Y[Ne-2]=arguments[Ne];return f.prototype[k].apply(y,Y)}}function x(l){const f=l.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=l[y];return m}return[]}function S(l,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const k=l.length||0,O=y.length||0;l.length=k+O;for(let Y=0;Y<O;Y++)l[k+Y]=y[Y]}else l.push(y)}}class V{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function L(l){return/^[\s\xa0]*$/.test(l)}function F(){var l=c.navigator;return l&&(l=l.userAgent)?l:""}function U(l){return U[" "](l),l}U[" "]=function(){};var ee=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function ne(l,f,m){for(const y in l)f.call(m,l[y],y,l)}function R(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function T(l){const f={};for(const m in l)f[m]=l[m];return f}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(l,f){let m,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(m in y)l[m]=y[m];for(let O=0;O<b.length;O++)m=b[O],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function I(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function E(l){c.setTimeout(()=>{throw l},0)}function v(){var l=oe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class j{constructor(){this.h=this.g=null}add(f,m){const y=ie.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var ie=new V(()=>new W,l=>l.reset());class W{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let H,ae=!1,oe=new j,_t=()=>{const l=c.Promise.resolve(void 0);H=()=>{l.then(ge)}};var ge=()=>{for(var l;l=v();){try{l.h.call(l.g)}catch(m){E(m)}var f=ie;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ae=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Cl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};c.addEventListener("test",m,f),c.removeEventListener("test",m,f)}catch{}return l}();function Or(l,f){if(Fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ee){e:{try{U(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Mr[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Or.aa.h.call(this)}}P(Or,Fe);var Mr={2:"touch",3:"pen",4:"mouse"};Or.prototype.h=function(){Or.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),Li=0;function va(l,f,m,y,k){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=k,this.key=++Li,this.da=this.fa=!1}function sn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Lr(l){this.src=l,this.g={},this.h=0}Lr.prototype.add=function(l,f,m,y,k){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var Y=A(l,f,y,k);return-1<Y?(f=l[Y],m||(f.fa=!1)):(f=new va(f,this.src,O,!!y,k),f.fa=m,l.push(f)),f};function Rs(l,f){var m=f.type;if(m in l.g){var y=l.g[m],k=Array.prototype.indexOf.call(y,f,void 0),O;(O=0<=k)&&Array.prototype.splice.call(y,k,1),O&&(sn(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function A(l,f,m,y){for(var k=0;k<l.length;++k){var O=l[k];if(!O.da&&O.listener==f&&O.capture==!!m&&O.ha==y)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),M={};function z(l,f,m,y,k){if(Array.isArray(f)){for(var O=0;O<f.length;O++)z(l,f[O],m,y,k);return null}return m=he(m),l&&l[Tn]?l.K(f,m,h(y)?!!y.capture:!!y,k):$(l,f,m,!1,y,k)}function $(l,f,m,y,k,O){if(!f)throw Error("Invalid event type");var Y=h(k)?!!k.capture:!!k,Ne=fe(l);if(Ne||(l[C]=Ne=new Lr(l)),m=Ne.add(f,m,y,Y,O),m.proxy)return m;if(y=G(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)Cl||(k=Y),k===void 0&&(k=!1),l.addEventListener(f.toString(),y,k);else if(l.attachEvent)l.attachEvent(Q(f.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function G(){function l(m){return f.call(l.src,l.listener,m)}const f=K;return l}function te(l,f,m,y,k){if(Array.isArray(f))for(var O=0;O<f.length;O++)te(l,f[O],m,y,k);else y=h(y)?!!y.capture:!!y,m=he(m),l&&l[Tn]?(l=l.i,f=String(f).toString(),f in l.g&&(O=l.g[f],m=A(O,m,y,k),-1<m&&(sn(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete l.g[f],l.h--)))):l&&(l=fe(l))&&(f=l.g[f.toString()],l=-1,f&&(l=A(f,m,y,k)),(m=-1<l?f[l]:null)&&J(m))}function J(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Tn])Rs(f.i,l);else{var m=l.type,y=l.proxy;f.removeEventListener?f.removeEventListener(m,y,l.capture):f.detachEvent?f.detachEvent(Q(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=fe(f))?(Rs(m,l),m.h==0&&(m.src=null,f[C]=null)):sn(l)}}}function Q(l){return l in M?M[l]:M[l]="on"+l}function K(l,f){if(l.da)l=!0;else{f=new Or(f,this);var m=l.listener,y=l.ha||l.src;l.fa&&J(l),l=m.call(y,f)}return l}function fe(l){return l=l[C],l instanceof Lr?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(l){return typeof l=="function"?l:(l[re]||(l[re]=function(f){return l.handleEvent(f)}),l[re])}function le(){Le.call(this),this.i=new Lr(this),this.M=this,this.F=null}P(le,Le),le.prototype[Tn]=!0,le.prototype.removeEventListener=function(l,f,m,y){te(this,l,f,m,y)};function pe(l,f){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=f.type||f,typeof f=="string")f=new Fe(f,l);else if(f instanceof Fe)f.target=f.target||l;else{var k=f;f=new Fe(y,l),_(f,k)}if(k=!0,m)for(var O=m.length-1;0<=O;O--){var Y=f.g=m[O];k=Se(Y,y,!0,f)&&k}if(Y=f.g=l,k=Se(Y,y,!0,f)&&k,k=Se(Y,y,!1,f)&&k,m)for(O=0;O<m.length;O++)Y=f.g=m[O],k=Se(Y,y,!1,f)&&k}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],y=0;y<m.length;y++)sn(m[y]);delete l.g[f],l.h--}}this.F=null},le.prototype.K=function(l,f,m,y){return this.i.add(String(l),f,!1,m,y)},le.prototype.L=function(l,f,m,y){return this.i.add(String(l),f,!0,m,y)};function Se(l,f,m,y){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,O=0;O<f.length;++O){var Y=f[O];if(Y&&!Y.da&&Y.capture==m){var Ne=Y.listener,ft=Y.ha||Y.src;Y.fa&&Rs(l.i,Y),k=Ne.call(ft,y)!==!1&&k}}return k&&!y.defaultPrevented}function Ae(l,f,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:c.setTimeout(l,f||0)}function yt(l){l.g=Ae(()=>{l.g=null,l.i&&(l.i=!1,yt(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ot extends Le{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(l){Le.call(this),this.h=l,this.g={}}P(dt,Le);var It=[];function zn(l){ne(l.g,function(f,m){this.g.hasOwnProperty(m)&&J(f)},l),l.g={}}dt.prototype.N=function(){dt.aa.N.call(this),zn(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ss=c.JSON.stringify,xt=c.JSON.parse,Qt=class{stringify(l){return c.JSON.stringify(l,void 0)}parse(l){return c.JSON.parse(l,void 0)}};function Ps(){}Ps.prototype.h=null;function Qd(l){return l.h||(l.h=l.i())}function Jd(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xl(){Fe.call(this,"d")}P(xl,Fe);function Dl(){Fe.call(this,"c")}P(Dl,Fe);var Fr={},Xd=null;function wa(){return Xd=Xd||new le}Fr.La="serverreachability";function Yd(l){Fe.call(this,Fr.La,l)}P(Yd,Fe);function Ui(l){const f=wa();pe(f,new Yd(f))}Fr.STAT_EVENT="statevent";function Zd(l,f){Fe.call(this,Fr.STAT_EVENT,l),this.stat=f}P(Zd,Fe);function Dt(l){const f=wa();pe(f,new Zd(f,l))}Fr.Ma="timingevent";function ef(l,f){Fe.call(this,Fr.Ma,l),this.size=f}P(ef,Fe);function Bi(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){l()},f)}function qi(){this.g=!0}qi.prototype.xa=function(){this.g=!1};function pw(l,f,m,y,k,O){l.info(function(){if(l.g)if(O)for(var Y="",Ne=O.split("&"),ft=0;ft<Ne.length;ft++){var Re=Ne[ft].split("=");if(1<Re.length){var vt=Re[0];Re=Re[1];var wt=vt.split("_");Y=2<=wt.length&&wt[1]=="type"?Y+(vt+"="+Re+"&"):Y+(vt+"=redacted&")}}else Y=null;else Y=O;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+f+`
`+m+`
`+Y})}function mw(l,f,m,y,k,O,Y){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+f+`
`+m+`
`+O+" "+Y})}function Cs(l,f,m,y){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+_w(l,m)+(y?" "+y:"")})}function gw(l,f){l.info(function(){return"TIMEOUT: "+f})}qi.prototype.info=function(){};function _w(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var k=y[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var Y=1;Y<k.length;Y++)k[Y]=""}}}}return Ss(m)}catch{return f}}var Ta={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kl;function Ea(){}P(Ea,Ps),Ea.prototype.g=function(){return new XMLHttpRequest},Ea.prototype.i=function(){return{}},kl=new Ea;function Kn(l,f,m,y){this.j=l,this.i=f,this.l=m,this.R=y||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nf}function nf(){this.i=null,this.g="",this.h=!1}var rf={},Vl={};function Nl(l,f,m){l.L=1,l.v=Sa(En(f)),l.m=m,l.P=!0,sf(l,null)}function sf(l,f){l.F=Date.now(),ba(l),l.A=En(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),If(m.i,"t",y),l.C=0,m=l.j.J,l.h=new nf,l.g=Lf(l.j,m?f:null,!l.m),0<l.O&&(l.M=new ot(g(l.Y,l,l.g),l.O)),f=l.U,m=l.g,y=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(It[0]=k.toString()),k=It);for(var O=0;O<k.length;O++){var Y=z(m,k[O],y||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Ui(),pw(l.i,l.u,l.A,l.l,l.R,l.m)}Kn.prototype.ca=function(l){l=l.target;const f=this.M;f&&bn(l)==3?f.j():this.Y(l)},Kn.prototype.Y=function(l){try{if(l==this.g)e:{const wt=bn(this.g);var f=this.g.Ba();const ks=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Rf(this.g)))){this.J||wt!=4||f==7||(f==8||0>=ks?Ui(3):Ui(2)),Ol(this);var m=this.g.Z();this.X=m;t:if(of(this)){var y=Rf(this.g);l="";var k=y.length,O=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),$i(this);var Y="";break t}this.h.i=new c.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,l+=this.h.i.decode(y[f],{stream:!(O&&f==k-1)});y.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,mw(this.i,this.u,this.A,this.l,this.R,wt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ft=this.g;if((Ne=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Ne)){var Re=Ne;break t}}Re=null}if(m=Re)Cs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ml(this,m);else{this.o=!1,this.s=3,Dt(12),Ur(this),$i(this);break e}}if(this.P){m=!0;let en;for(;!this.J&&this.C<Y.length;)if(en=yw(this,Y),en==Vl){wt==4&&(this.s=4,Dt(14),m=!1),Cs(this.i,this.l,null,"[Incomplete Response]");break}else if(en==rf){this.s=4,Dt(15),Cs(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else Cs(this.i,this.l,en,null),Ml(this,en);if(of(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||Y.length!=0||this.h.h||(this.s=1,Dt(16),m=!1),this.o=this.o&&m,!m)Cs(this.i,this.l,Y,"[Invalid Chunked Response]"),Ur(this),$i(this);else if(0<Y.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),$l(vt),vt.M=!0,Dt(11))}}else Cs(this.i,this.l,Y,null),Ml(this,Y);wt==4&&Ur(this),this.o&&!this.J&&(wt==4?Vf(this.j,this):(this.o=!1,ba(this)))}else Ow(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Ur(this),$i(this)}}}catch{}finally{}};function of(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yw(l,f){var m=l.C,y=f.indexOf(`
`,m);return y==-1?Vl:(m=Number(f.substring(m,y)),isNaN(m)?rf:(y+=1,y+m>f.length?Vl:(f=f.slice(y,y+m),l.C=y+m,f)))}Kn.prototype.cancel=function(){this.J=!0,Ur(this)};function ba(l){l.S=Date.now()+l.I,af(l,l.I)}function af(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Bi(g(l.ba,l),f)}function Ol(l){l.B&&(c.clearTimeout(l.B),l.B=null)}Kn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(gw(this.i,this.A),this.L!=2&&(Ui(),Dt(17)),Ur(this),this.s=2,$i(this)):af(this,this.S-l)};function $i(l){l.j.G==0||l.J||Vf(l.j,l)}function Ur(l){Ol(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,zn(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ml(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Ll(m.h,l))){if(!l.K&&Ll(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Va(m),Da(m);else break e;ql(m),Dt(18)}}else m.za=k[1],0<m.za-m.T&&37500>k[2]&&m.F&&m.v==0&&!m.C&&(m.C=Bi(g(m.Za,m),6e3));if(1>=uf(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else qr(m,11)}else if((l.K||m.g==l)&&Va(m),!L(f))for(k=m.Da.g.parse(f),f=0;f<k.length;f++){let Re=k[f];if(m.T=Re[0],Re=Re[1],m.G==2)if(Re[0]=="c"){m.K=Re[1],m.ia=Re[2];const vt=Re[3];vt!=null&&(m.la=vt,m.j.info("VER="+m.la));const wt=Re[4];wt!=null&&(m.Aa=wt,m.j.info("SVER="+m.Aa));const ks=Re[5];ks!=null&&typeof ks=="number"&&0<ks&&(y=1.5*ks,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const en=l.g;if(en){const Oa=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var O=y.h;O.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Fl(O,O.h),O.h=null))}if(y.D){const jl=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;jl&&(y.ya=jl,qe(y.I,y.D,jl))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var Y=l;if(y.qa=Mf(y,y.J?y.ia:null,y.W),Y.K){hf(y.h,Y);var Ne=Y,ft=y.L;ft&&(Ne.I=ft),Ne.B&&(Ol(Ne),ba(Ne)),y.g=Y}else Df(y);0<m.i.length&&ka(m)}else Re[0]!="stop"&&Re[0]!="close"||qr(m,7);else m.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?qr(m,7):Bl(m):Re[0]!="noop"&&m.l&&m.l.ta(Re),m.v=0)}}Ui(4)}catch{}}var Iw=class{constructor(l,f){this.g=l,this.map=f}};function cf(l){this.l=l||10,c.PerformanceNavigationTiming?(l=c.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function uf(l){return l.h?1:l.g?l.g.size:0}function Ll(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Fl(l,f){l.g?l.g.add(f):l.h=f}function hf(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}cf.prototype.cancel=function(){if(this.i=df(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function df(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return x(l.i)}function vw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],m=l.length,y=0;y<m;y++)f.push(l[y]);return f}f=[],m=0;for(y in l)f[m++]=l[y];return f}function ww(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const y in l)f[m++]=y;return f}}}function ff(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=ww(l),y=vw(l),k=y.length,O=0;O<k;O++)f.call(void 0,y[O],m&&m[O],l)}var pf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tw(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),k=null;if(0<=y){var O=l[m].substring(0,y);k=l[m].substring(y+1)}else O=l[m];f(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Br(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Br){this.h=l.h,Aa(this,l.j),this.o=l.o,this.g=l.g,Ra(this,l.s),this.l=l.l;var f=l.i,m=new zi;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),mf(this,m),this.m=l.m}else l&&(f=String(l).match(pf))?(this.h=!1,Aa(this,f[1]||"",!0),this.o=ji(f[2]||""),this.g=ji(f[3]||"",!0),Ra(this,f[4]),this.l=ji(f[5]||"",!0),mf(this,f[6]||"",!0),this.m=ji(f[7]||"")):(this.h=!1,this.i=new zi(null,this.h))}Br.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Gi(f,gf,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Gi(f,gf,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Gi(m,m.charAt(0)=="/"?Aw:bw,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Gi(m,Sw)),l.join("")};function En(l){return new Br(l)}function Aa(l,f,m){l.j=m?ji(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Ra(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function mf(l,f,m){f instanceof zi?(l.i=f,Pw(l.i,l.h)):(m||(f=Gi(f,Rw)),l.i=new zi(f,l.h))}function qe(l,f,m){l.i.set(f,m)}function Sa(l){return qe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ji(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Gi(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,Ew),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ew(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var gf=/[#\/\?@]/g,bw=/[#\?:]/g,Aw=/[#\?]/g,Rw=/[#\?@]/g,Sw=/#/g;function zi(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Hn(l){l.g||(l.g=new Map,l.h=0,l.i&&Tw(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}r=zi.prototype,r.add=function(l,f){Hn(this),this.i=null,l=xs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function _f(l,f){Hn(l),f=xs(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function yf(l,f){return Hn(l),f=xs(l,f),l.g.has(f)}r.forEach=function(l,f){Hn(this),this.g.forEach(function(m,y){m.forEach(function(k){l.call(f,k,y,this)},this)},this)},r.na=function(){Hn(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const k=l[y];for(let O=0;O<k.length;O++)m.push(f[y])}return m},r.V=function(l){Hn(this);let f=[];if(typeof l=="string")yf(this,l)&&(f=f.concat(this.g.get(xs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},r.set=function(l,f){return Hn(this),this.i=null,l=xs(this,l),yf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function If(l,f,m){_f(l,f),0<m.length&&(l.i=null,l.g.set(xs(l,f),x(m)),l.h+=m.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const O=encodeURIComponent(String(y)),Y=this.V(y);for(y=0;y<Y.length;y++){var k=O;Y[y]!==""&&(k+="="+encodeURIComponent(String(Y[y]))),l.push(k)}}return this.i=l.join("&")};function xs(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Pw(l,f){f&&!l.j&&(Hn(l),l.i=null,l.g.forEach(function(m,y){var k=y.toLowerCase();y!=k&&(_f(this,y),If(this,k,m))},l)),l.j=f}function Cw(l,f){const m=new qi;if(c.Image){const y=new Image;y.onload=w(Wn,m,"TestLoadImage: loaded",!0,f,y),y.onerror=w(Wn,m,"TestLoadImage: error",!1,f,y),y.onabort=w(Wn,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=w(Wn,m,"TestLoadImage: timeout",!1,f,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else f(!1)}function xw(l,f){const m=new qi,y=new AbortController,k=setTimeout(()=>{y.abort(),Wn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:y.signal}).then(O=>{clearTimeout(k),O.ok?Wn(m,"TestPingServer: ok",!0,f):Wn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),Wn(m,"TestPingServer: error",!1,f)})}function Wn(l,f,m,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(m)}catch{}}function Dw(){this.g=new Qt}function kw(l,f,m){const y=m||"";try{ff(l,function(k,O){let Y=k;h(k)&&(Y=Ss(k)),f.push(y+O+"="+encodeURIComponent(Y))})}catch(k){throw f.push(y+"type="+encodeURIComponent("_badmap")),k}}function Pa(l){this.l=l.Ub||null,this.j=l.eb||!1}P(Pa,Ps),Pa.prototype.g=function(){return new Ca(this.l,this.j)},Pa.prototype.i=function(l){return function(){return l}}({});function Ca(l,f){le.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ca,le),r=Ca.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Hi(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||c).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function vf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Ki(this):Hi(this),this.readyState==3&&vf(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Ki(this))},r.Qa=function(l){this.g&&(this.response=l,Ki(this))},r.ga=function(){this.g&&Ki(this)};function Ki(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Hi(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Hi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function wf(l){let f="";return ne(l,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function Ul(l,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=wf(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):qe(l,f,m))}function Ye(l){le.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ye,le);var Vw=/^https?$/i,Nw=["POST","PUT"];r=Ye.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kl.g(),this.v=this.o?Qd(this.o):Qd(kl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(O){Tf(this,O);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)m.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())m.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),k=c.FormData&&l instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Nw,f,void 0))||y||k||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,Y]of m)this.g.setRequestHeader(O,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Af(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){Tf(this,O)}};function Tf(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ef(l),xa(l)}function Ef(l){l.A||(l.A=!0,pe(l,"complete"),pe(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pe(this,"complete"),pe(this,"abort"),xa(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xa(this,!0)),Ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?bf(this):this.bb())},r.bb=function(){bf(this)};function bf(l){if(l.h&&typeof a<"u"&&(!l.v[1]||bn(l)!=4||l.Z()!=2)){if(l.u&&bn(l)==4)Ae(l.Ea,0,l);else if(pe(l,"readystatechange"),bn(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=Y===0){var k=String(l.D).match(pf)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),y=!Vw.test(k?k.toLowerCase():"")}m=y}if(m)pe(l,"complete"),pe(l,"success");else{l.m=6;try{var O=2<bn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",Ef(l)}}finally{xa(l)}}}}function xa(l,f){if(l.g){Af(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||pe(l,"ready");try{m.onreadystatechange=y}catch{}}}function Af(l){l.I&&(c.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function bn(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),xt(f)}};function Rf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ow(l){const f={};l=(l.g&&2<=bn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(L(l[y]))continue;var m=I(l[y]);const k=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=f[k]||[];f[k]=O,O.push(m)}R(f,function(y){return y.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Sf(l){this.Aa=0,this.i=[],this.j=new qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wi("baseRetryDelayMs",5e3,l),this.cb=Wi("retryDelaySeedMs",1e4,l),this.Wa=Wi("forwardChannelMaxRetries",2,l),this.wa=Wi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new cf(l&&l.concurrentRequestLimit),this.Da=new Dw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Sf.prototype,r.la=8,r.G=1,r.connect=function(l,f,m,y){Dt(0),this.W=l,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Mf(this,null,this.W),ka(this)};function Bl(l){if(Pf(l),l.G==3){var f=l.U++,m=En(l.I);if(qe(m,"SID",l.K),qe(m,"RID",f),qe(m,"TYPE","terminate"),Qi(l,m),f=new Kn(l,l.j,f),f.L=2,f.v=Sa(En(m)),m=!1,c.navigator&&c.navigator.sendBeacon)try{m=c.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&c.Image&&(new Image().src=f.v,m=!0),m||(f.g=Lf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ba(f)}Of(l)}function Da(l){l.g&&($l(l),l.g.cancel(),l.g=null)}function Pf(l){Da(l),l.u&&(c.clearTimeout(l.u),l.u=null),Va(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&c.clearTimeout(l.s),l.s=null)}function ka(l){if(!lf(l.h)&&!l.s){l.s=!0;var f=l.Ga;H||_t(),ae||(H(),ae=!0),oe.add(f,l),l.B=0}}function Mw(l,f){return uf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Bi(g(l.Ga,l,f),Nf(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new Kn(this,this.j,l);let O=this.o;if(this.S&&(O?(O=T(O),_(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=xf(this,k,f),m=En(this.I),qe(m,"RID",l),qe(m,"CVER",22),this.D&&qe(m,"X-HTTP-Session-Id",this.D),Qi(this,m),O&&(this.O?f="headers="+encodeURIComponent(String(wf(O)))+"&"+f:this.m&&Ul(m,this.m,O)),Fl(this.h,k),this.Ua&&qe(m,"TYPE","init"),this.P?(qe(m,"$req",f),qe(m,"SID","null"),k.T=!0,Nl(k,m,null)):Nl(k,m,f),this.G=2}}else this.G==3&&(l?Cf(this,l):this.i.length==0||lf(this.h)||Cf(this))};function Cf(l,f){var m;f?m=f.l:m=l.U++;const y=En(l.I);qe(y,"SID",l.K),qe(y,"RID",m),qe(y,"AID",l.T),Qi(l,y),l.m&&l.o&&Ul(y,l.m,l.o),m=new Kn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=xf(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Fl(l.h,m),Nl(m,y,f)}function Qi(l,f){l.H&&ne(l.H,function(m,y){qe(f,y,m)}),l.l&&ff({},function(m,y){qe(f,y,m)})}function xf(l,f,m){m=Math.min(l.i.length,m);var y=l.l?g(l.l.Na,l.l,l):null;e:{var k=l.i;let O=-1;for(;;){const Y=["count="+m];O==-1?0<m?(O=k[0].g,Y.push("ofs="+O)):O=0:Y.push("ofs="+O);let Ne=!0;for(let ft=0;ft<m;ft++){let Re=k[ft].g;const vt=k[ft].map;if(Re-=O,0>Re)O=Math.max(0,k[ft].g-100),Ne=!1;else try{kw(vt,Y,"req"+Re+"_")}catch{y&&y(vt)}}if(Ne){y=Y.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,y}function Df(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;H||_t(),ae||(H(),ae=!0),oe.add(f,l),l.v=0}}function ql(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Bi(g(l.Fa,l),Nf(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,kf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Bi(g(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),Da(this),kf(this))};function $l(l){l.A!=null&&(c.clearTimeout(l.A),l.A=null)}function kf(l){l.g=new Kn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=En(l.qa);qe(f,"RID","rpc"),qe(f,"SID",l.K),qe(f,"AID",l.T),qe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&qe(f,"TO",l.ja),qe(f,"TYPE","xmlhttp"),Qi(l,f),l.m&&l.o&&Ul(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Sa(En(f)),m.m=null,m.P=!0,sf(m,l)}r.Za=function(){this.C!=null&&(this.C=null,Da(this),ql(this),Dt(19))};function Va(l){l.C!=null&&(c.clearTimeout(l.C),l.C=null)}function Vf(l,f){var m=null;if(l.g==f){Va(l),$l(l),l.g=null;var y=2}else if(Ll(l.h,f))m=f.D,hf(l.h,f),y=1;else return;if(l.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var k=l.B;y=wa(),pe(y,new ef(y,m)),ka(l)}else Df(l);else if(k=f.s,k==3||k==0&&0<f.X||!(y==1&&Mw(l,f)||y==2&&ql(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),k){case 1:qr(l,5);break;case 4:qr(l,10);break;case 3:qr(l,6);break;default:qr(l,2)}}}function Nf(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function qr(l,f){if(l.j.info("Error code "+f),f==2){var m=g(l.fb,l),y=l.Xa;const k=!y;y=new Br(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Aa(y,"https"),Sa(y),k?Cw(y.toString(),m):xw(y.toString(),m)}else Dt(2);l.G=0,l.l&&l.l.sa(f),Of(l),Pf(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Of(l){if(l.G=0,l.ka=[],l.l){const f=df(l.h);(f.length!=0||l.i.length!=0)&&(S(l.ka,f),S(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function Mf(l,f,m){var y=m instanceof Br?En(m):new Br(m);if(y.g!="")f&&(y.g=f+"."+y.g),Ra(y,y.s);else{var k=c.location;y=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var O=new Br(null);y&&Aa(O,y),f&&(O.g=f),k&&Ra(O,k),m&&(O.l=m),y=O}return m=l.D,f=l.ya,m&&f&&qe(y,m,f),qe(y,"VER",l.la),Qi(l,y),y}function Lf(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ye(new Pa({eb:m})):new Ye(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ff(){}r=Ff.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Na(){}Na.prototype.g=function(l,f){return new qt(l,f)};function qt(l,f){le.call(this),this.g=new Sf(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!L(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!L(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Ds(this)}P(qt,le),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Bl(this.g)},qt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Ss(l),l=m);f.i.push(new Iw(f.Ya++,l)),f.G==3&&ka(f)},qt.prototype.N=function(){this.g.l=null,delete this.j,Bl(this.g),delete this.g,qt.aa.N.call(this)};function Uf(l){xl.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}P(Uf,xl);function Bf(){Dl.call(this),this.status=1}P(Bf,Dl);function Ds(l){this.g=l}P(Ds,Ff),Ds.prototype.ua=function(){pe(this.g,"a")},Ds.prototype.ta=function(l){pe(this.g,new Uf(l))},Ds.prototype.sa=function(l){pe(this.g,new Bf)},Ds.prototype.ra=function(){pe(this.g,"b")},Na.prototype.createWebChannel=Na.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,ty=function(){return new Na},ey=function(){return wa()},Z_=Fr,Mu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ta.NO_ERROR=0,Ta.TIMEOUT=8,Ta.HTTP_ERROR=6,tc=Ta,tf.COMPLETE="complete",Y_=tf,Jd.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",le.prototype.listen=le.prototype.K,uo=Jd,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,X_=Ye}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const kp="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let bi="11.0.2";/**
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
 */const _r=new Rh("@firebase/firestore");function qs(){return _r.logLevel}function nR(r){_r.setLogLevel(r)}function q(r,...e){if(_r.logLevel<=we.DEBUG){const t=e.map(Oh);_r.debug(`Firestore (${bi}): ${r}`,...t)}}function et(r,...e){if(_r.logLevel<=we.ERROR){const t=e.map(Oh);_r.error(`Firestore (${bi}): ${r}`,...t)}}function Ht(r,...e){if(_r.logLevel<=we.WARN){const t=e.map(Oh);_r.warn(`Firestore (${bi}): ${r}`,...t)}}function Oh(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function se(r="Unexpected state"){const e=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: `+r;throw et(e),new Error(e)}function ce(r,e){r||se()}function rR(r,e){r||se()}function X(r,e){return r}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends vn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ny{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ct.UNAUTHENTICATED))}shutdown(){}}class sR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iR{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let o=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new lt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ce(typeof s.accessToken=="string"),new ny(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new ct(e)}}class oR{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class aR{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new oR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ce(this.o===void 0);const s=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const i=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new sy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class lR{getToken(){return Promise.resolve(new sy(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function uR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Mh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=uR(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<t&&(s+=e.charAt(i[o]%e.length))}return s}}function me(r,e){return r<e?-1:r>e?1:0}function ii(r,e,t){return r.length===e.length&&r.every((s,i)=>t(s,e[i]))}function iy(r){return r+"\0"}/**
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
 */class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new He(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new He(0,0))}static max(){return new ue(new He(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Uo{constructor(e,t,s){t===void 0?t=0:t>e.length&&se(),s===void 0?s=e.length-t:s>e.length-t&&se(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Uo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Uo?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Te extends Uo{construct(e,t,s){return new Te(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new Te(t)}static emptyPath(){return new Te([])}}const hR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Uo{construct(e,t,s){return new je(e,t,s)}static isValidIdentifier(e){return hR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const o=()=>{if(s.length===0)throw new B(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new B(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(o(),i++)}if(o(),a)throw new B(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(t)}static emptyPath(){return new je([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Te.fromString(e))}static fromName(e){return new Z(Te.fromString(e).popFirst(5))}static empty(){return new Z(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Te(e.slice()))}}/**
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
 */class oi{constructor(e,t,s,i){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=i}}function Lu(r){return r.fields.find(e=>e.kind===2)}function Wr(r){return r.fields.filter(e=>e.kind!==2)}function dR(r,e){let t=me(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let s=0;s<Math.min(r.fields.length,e.fields.length);++s)if(t=fR(r.fields[s],e.fields[s]),t!==0)return t;return me(r.fields.length,e.fields.length)}oi.UNKNOWN_ID=-1;class ss{constructor(e,t){this.fieldPath=e,this.kind=t}}function fR(r,e){const t=je.comparator(r.fieldPath,e.fieldPath);return t!==0?t:me(r.kind,e.kind)}class ai{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ai(0,Wt.min())}}function oy(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(s===1e9?new He(t+1,0):new He(t,s));return new Wt(i,Z.empty(),e)}function ay(r){return new Wt(r.readTime,r.key,-1)}class Wt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Wt(ue.min(),Z.empty(),-1)}static max(){return new Wt(ue.max(),Z.empty(),-1)}}function Lh(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(r.documentKey,e.documentKey),t!==0?t:me(r.largestBatchId,e.largestBatchId))}/**
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
 */const cy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ly{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pr(r){if(r.code!==N.FAILED_PRECONDITION||r.message!==cy)throw r;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((s,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,s)=>{t(e)})}static reject(e){return new D((t,s)=>{s(e)})}static waitFor(e){return new D((t,s)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&t()},u=>s(u))}),a=!0,o===i&&t()})}static or(e){let t=D.resolve(!1);for(const s of e)t=t.next(i=>i?D.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,o)=>{s.push(t.call(this,i,o))}),this.waitFor(s)}static mapArray(e,t){return new D((s,i)=>{const o=e.length,a=new Array(o);let c=0;for(let u=0;u<o;u++){const h=u;t(e[h]).next(d=>{a[h]=d,++c,c===o&&s(a)},d=>i(d))}})}static doWhile(e,t){return new D((s,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):s()};o()})}}/**
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
 */class rl{static open(e,t,s,i){try{return new rl(t,e.transaction(i,s))}catch(o){throw new Eo(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Eo(e,t.error)):this.V.resolve()},this.transaction.onerror=s=>{const i=Fh(s.target.error);this.V.reject(new Eo(e,i))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(q("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new mR(t)}}class pn{static delete(e){return q("SimpleDb","Removing database:",e),Jr(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!A_())return!1;if(pn.S())return!0;const e=st(),t=pn.D(e),s=0<t&&t<10,i=uy(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||o)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}constructor(e,t,s){this.name=e,this.version=t,this.F=s,pn.D(st())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(q("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const a=o.target.result;t(a)},i.onblocked=()=>{s(new Eo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const a=o.target.error;a.name==="VersionError"?s(new B(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?s(new B(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):s(new Eo(e,a))},i.onupgradeneeded=o=>{q("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const a=o.target.result;this.F.O(a,i.transaction,o.oldVersion,this.version).next(()=>{q("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){const o=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(e);const c=rl.open(this.db,e,o?"readonly":"readwrite",s),u=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),D.reject(h))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&a<3;if(q("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function uy(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class pR{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Jr(this.B.delete())}}class Eo extends B{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Cr(r){return r.name==="IndexedDbTransactionError"}class mR{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(q("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(q("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Jr(s)}add(e){return q("SimpleDb","ADD",this.store.name,e,e),Jr(this.store.add(e))}get(e){return Jr(this.store.get(e)).next(t=>(t===void 0&&(t=null),q("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return q("SimpleDb","DELETE",this.store.name,e),Jr(this.store.delete(e))}count(){return q("SimpleDb","COUNT",this.store.name),Jr(this.store.count())}U(e,t){const s=this.options(e,t),i=s.index?this.store.index(s.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(s.range);return new D((a,c)=>{o.onerror=u=>{c(u.target.error)},o.onsuccess=u=>{a(u.target.result)}})}{const o=this.cursor(s),a=[];return this.W(o,(c,u)=>{a.push(u)}).next(()=>a)}}G(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new D((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}j(e,t){q("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.H=!1;const i=this.cursor(s);return this.W(i,(o,a,c)=>c.delete())}J(e,t){let s;t?s=e:(s={},t=e);const i=this.cursor(s);return this.W(i,t)}Y(e){const t=this.cursor({});return new D((s,i)=>{t.onerror=o=>{const a=Fh(o.target.error);i(a)},t.onsuccess=o=>{const a=o.target.result;a?e(a.primaryKey,a.value).next(c=>{c?a.continue():s()}):s()}})}W(e,t){const s=[];return new D((i,o)=>{e.onerror=a=>{o(a.target.error)},e.onsuccess=a=>{const c=a.target.result;if(!c)return void i();const u=new pR(c),h=t(c.primaryKey,c.value,u);if(h instanceof D){const d=h.catch(p=>(u.done(),D.reject(p)));s.push(d)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>D.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.H?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Jr(r){return new D((e,t)=>{r.onsuccess=s=>{const i=s.target.result;e(i)},r.onerror=s=>{const i=Fh(s.target.error);t(i)}})}let Vp=!1;function Fh(r){const e=pn.D(st());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const s=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Vp||(Vp=!0,setTimeout(()=>{throw s},0)),s}}return r}class gR{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){q("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{q("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Cr(t)?q("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Pr(t)}await this.X(6e4)})}}class _R{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const s=new Set;let i=t,o=!0;return D.doWhile(()=>o===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!s.has(a))return q("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(c=>{i-=c,s.add(a)});o=!1})).next(()=>t-i)}ne(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,s).next(o=>{const a=o.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,o)).next(c=>(q("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>a.size)}))}re(e,t){let s=e;return t.changes.forEach((i,o)=>{const a=ay(o);Lh(a,s)>0&&(s=a)}),new Wt(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ft{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ft.oe=-1;function na(r){return r==null}function Bo(r){return r===0&&1/r==-1/0}function hy(r){return typeof r=="number"&&Number.isInteger(r)&&!Bo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pt(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Np(e)),e=yR(r.get(t),e);return Np(e)}function yR(r,e){let t=e;const s=r.length;for(let i=0;i<s;i++){const o=r.charAt(i);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function Np(r){return r+""}function un(r){const e=r.length;if(ce(e>=2),e===2)return ce(r.charAt(0)===""&&r.charAt(1)===""),Te.emptyPath();const t=e-2,s=[];let i="";for(let o=0;o<e;){const a=r.indexOf("",o);switch((a<0||a>t)&&se(),r.charAt(a+1)){case"":const c=r.substring(o,a);let u;i.length===0?u=c:(i+=c,u=i,i=""),s.push(u);break;case"":i+=r.substring(o,a),i+="\0";break;case"":i+=r.substring(o,a+1);break;default:se()}o=a+2}return new Te(s)}/**
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
 */const Op=["userId","batchId"];/**
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
 */function nc(r,e){return[r,Pt(e)]}function dy(r,e,t){return[r,Pt(e),t]}const IR={},vR=["prefixPath","collectionGroup","readTime","documentId"],wR=["prefixPath","collectionGroup","documentId"],TR=["collectionGroup","readTime","prefixPath","documentId"],ER=["canonicalId","targetId"],bR=["targetId","path"],AR=["path","targetId"],RR=["collectionId","parent"],SR=["indexId","uid"],PR=["uid","sequenceNumber"],CR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xR=["indexId","uid","orderedDocumentKey"],DR=["userId","collectionPath","documentId"],kR=["userId","collectionPath","largestBatchId"],VR=["userId","collectionGroup","largestBatchId"],fy=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],NR=[...fy,"documentOverlays"],py=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],my=py,Uh=[...my,"indexConfiguration","indexState","indexEntries"],OR=Uh,MR=[...Uh,"globals"];/**
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
 */class Fu extends ly{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function it(r,e){const t=X(r);return pn.C(t._e,e)}/**
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
 */function Mp(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function xr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function gy(r,e){const t=[];for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.push(e(r[s],s,r));return t}function _y(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Be{constructor(e,t){this.comparator=e,this.root=t||mt.EMPTY}insert(e,t){return new Be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,t,s,i,o){this.key=e,this.value=t,this.color=s??mt.RED,this.left=i??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,o){return new mt(e??this.key,t??this.value,s??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const o=s(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,s),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,t,s,i,o){return this}insert(e,t,s){return new mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lp(this.data.getIterator())}getIteratorFrom(e){return new Lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=s.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Os(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new Ut([])}unionWith(e){let t=new ke(je.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class yy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function LR(){return typeof atob<"u"}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new yy("Invalid base64 string: "+o):o}}(e);return new Je(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const FR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(r){if(ce(!!r),typeof r=="string"){let e=0;const t=FR.exec(r);if(ce(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(r.seconds),nanos:ze(r.nanos)}}function ze(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ln(r){return typeof r=="string"?Je.fromBase64String(r):Je.fromUint8Array(r)}/**
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
 */function sl(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function il(r){const e=r.mapValue.fields.__previous_value__;return sl(e)?il(e):e}function qo(r){const e=Mn(r.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class UR{constructor(e,t,s,i,o,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class yr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rc={nullValue:"NULL_VALUE"};function Ir(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?sl(r)?4:Iy(r)?9007199254740991:ol(r)?10:11:se()}function In(r,e){if(r===e)return!0;const t=Ir(r);if(t!==Ir(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return qo(r).isEqual(qo(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Mn(i.timestampValue),c=Mn(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,o){return Ln(i.bytesValue).isEqual(Ln(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,o){return ze(i.geoPointValue.latitude)===ze(o.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(o.geoPointValue.longitude)}(r,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ze(i.integerValue)===ze(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ze(i.doubleValue),c=ze(o.doubleValue);return a===c?Bo(a)===Bo(c):isNaN(a)&&isNaN(c)}return!1}(r,e);case 9:return ii(r.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Mp(a)!==Mp(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!In(a[u],c[u])))return!1;return!0}(r,e);default:return se()}}function $o(r,e){return(r.values||[]).find(t=>In(t,e))!==void 0}function vr(r,e){if(r===e)return 0;const t=Ir(r),s=Ir(e);if(t!==s)return me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return me(r.booleanValue,e.booleanValue);case 2:return function(o,a){const c=ze(o.integerValue||o.doubleValue),u=ze(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return Fp(r.timestampValue,e.timestampValue);case 4:return Fp(qo(r),qo(e));case 5:return me(r.stringValue,e.stringValue);case 6:return function(o,a){const c=Ln(o),u=Ln(a);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const d=me(c[h],u[h]);if(d!==0)return d}return me(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(o,a){const c=me(ze(o.latitude),ze(a.latitude));return c!==0?c:me(ze(o.longitude),ze(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Up(r.arrayValue,e.arrayValue);case 10:return function(o,a){var c,u,h,d;const p=o.fields||{},g=a.fields||{},w=(c=p.value)===null||c===void 0?void 0:c.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,x=me(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Up(w,P)}(r.mapValue,e.mapValue);case 11:return function(o,a){if(o===cr.mapValue&&a===cr.mapValue)return 0;if(o===cr.mapValue)return 1;if(a===cr.mapValue)return-1;const c=o.fields||{},u=Object.keys(c),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=me(u[p],d[p]);if(g!==0)return g;const w=vr(c[u[p]],h[d[p]]);if(w!==0)return w}return me(u.length,d.length)}(r.mapValue,e.mapValue);default:throw se()}}function Fp(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return me(r,e);const t=Mn(r),s=Mn(e),i=me(t.seconds,s.seconds);return i!==0?i:me(t.nanos,s.nanos)}function Up(r,e){const t=r.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const o=vr(t[i],s[i]);if(o)return o}return me(t.length,s.length)}function ci(r){return Uu(r)}function Uu(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Mn(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ln(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Z.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",i=!0;for(const o of t.values||[])i?i=!1:s+=",",s+=Uu(o);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Uu(t.fields[a])}`;return i+"}"}(r.mapValue):se()}function sc(r){switch(Ir(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=il(r);return e?16+sc(e):16;case 5:return 2*r.stringValue.length;case 6:return Ln(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,o)=>i+sc(o),0)}(r.arrayValue);case 10:case 11:return function(s){let i=0;return xr(s.fields,(o,a)=>{i+=o.length+sc(a)}),i}(r.mapValue);default:throw se()}}function ls(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Bu(r){return!!r&&"integerValue"in r}function jo(r){return!!r&&"arrayValue"in r}function Bp(r){return!!r&&"nullValue"in r}function qp(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ic(r){return!!r&&"mapValue"in r}function ol(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function bo(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return xr(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=bo(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bo(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Iy(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const vy={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function BR(r){return"nullValue"in r?rc:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ls(yr.empty(),Z.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ol(r)?vy:{mapValue:{}}:se()}function qR(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ls(yr.empty(),Z.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?vy:"mapValue"in r?ol(r)?{mapValue:{}}:cr:se()}function $p(r,e){const t=vr(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function jp(r,e){const t=vr(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(t)}setAll(e){let t=je.emptyPath(),s={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=c.popLast()}a?s[c.lastSegment()]=bo(a):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,s,i)}delete(e){const t=this.field(e.popLast());ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){xr(t,(i,o)=>e[i]=o);for(const i of s)delete e[i]}clone(){return new gt(bo(this.value))}}function wy(r){const e=[];return xr(r.fields,(t,s)=>{const i=new je([t]);if(ic(s)){const o=wy(s.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Ut(e)}/**
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
 */class $e{constructor(e,t,s,i,o,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new $e(e,0,ue.min(),ue.min(),ue.min(),gt.empty(),0)}static newFoundDocument(e,t,s,i){return new $e(e,1,t,ue.min(),s,i,0)}static newNoDocument(e,t){return new $e(e,2,t,ue.min(),ue.min(),gt.empty(),0)}static newUnknownDocument(e,t){return new $e(e,3,t,ue.min(),ue.min(),gt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wr{constructor(e,t){this.position=e,this.inclusive=t}}function Gp(r,e,t){let s=0;for(let i=0;i<r.position.length;i++){const o=e[i],a=r.position[i];if(o.field.isKeyField()?s=Z.comparator(Z.fromName(a.referenceValue),t.key):s=vr(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function zp(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!In(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Go{constructor(e,t="asc"){this.field=e,this.dir=t}}function $R(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Ty{}class Ee extends Ty{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new jR(e,t,s):t==="array-contains"?new KR(e,s):t==="in"?new Py(e,s):t==="not-in"?new HR(e,s):t==="array-contains-any"?new WR(e,s):new Ee(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new GR(e,s):new zR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(vr(t,this.value)):t!==null&&Ir(this.value)===Ir(t)&&this.matchesComparison(vr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class De extends Ty{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new De(e,t)}matches(e){return li(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function li(r){return r.op==="and"}function qu(r){return r.op==="or"}function Bh(r){return Ey(r)&&li(r)}function Ey(r){for(const e of r.filters)if(e instanceof De)return!1;return!0}function $u(r){if(r instanceof Ee)return r.field.canonicalString()+r.op.toString()+ci(r.value);if(Bh(r))return r.filters.map(e=>$u(e)).join(",");{const e=r.filters.map(t=>$u(t)).join(",");return`${r.op}(${e})`}}function by(r,e){return r instanceof Ee?function(s,i){return i instanceof Ee&&s.op===i.op&&s.field.isEqual(i.field)&&In(s.value,i.value)}(r,e):r instanceof De?function(s,i){return i instanceof De&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((o,a,c)=>o&&by(a,i.filters[c]),!0):!1}(r,e):void se()}function Ay(r,e){const t=r.filters.concat(e);return De.create(t,r.op)}function Ry(r){return r instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${ci(t.value)}`}(r):r instanceof De?function(t){return t.op.toString()+" {"+t.getFilters().map(Ry).join(" ,")+"}"}(r):"Filter"}class jR extends Ee{constructor(e,t,s){super(e,t,s),this.key=Z.fromName(s.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class GR extends Ee{constructor(e,t){super(e,"in",t),this.keys=Sy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zR extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Sy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sy(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Z.fromName(s.referenceValue))}class KR extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jo(t)&&$o(t.arrayValue,this.value)}}class Py extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$o(this.value.arrayValue,t)}}class HR extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$o(this.value.arrayValue,t)}}class WR extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>$o(this.value.arrayValue,s))}}/**
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
 */class QR{constructor(e,t=null,s=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function ju(r,e=null,t=[],s=[],i=null,o=null,a=null){return new QR(r,e,t,s,i,o,a)}function us(r){const e=X(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>$u(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ci(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ci(s)).join(",")),e.ue=t}return e.ue}function ra(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!$R(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!by(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!zp(r.startAt,e.startAt)&&zp(r.endAt,e.endAt)}function bc(r){return Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ac(r,e){return r.filters.filter(t=>t instanceof Ee&&t.field.isEqual(e))}function Kp(r,e,t){let s=rc,i=!0;for(const o of Ac(r,e)){let a=rc,c=!0;switch(o.op){case"<":case"<=":a=BR(o.value);break;case"==":case"in":case">=":a=o.value;break;case">":a=o.value,c=!1;break;case"!=":case"not-in":a=rc}$p({value:s,inclusive:i},{value:a,inclusive:c})<0&&(s=a,i=c)}if(t!==null){for(let o=0;o<r.orderBy.length;++o)if(r.orderBy[o].field.isEqual(e)){const a=t.position[o];$p({value:s,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(s=a,i=t.inclusive);break}}return{value:s,inclusive:i}}function Hp(r,e,t){let s=cr,i=!0;for(const o of Ac(r,e)){let a=cr,c=!0;switch(o.op){case">=":case">":a=qR(o.value),c=!1;break;case"==":case"in":case"<=":a=o.value;break;case"<":a=o.value,c=!1;break;case"!=":case"not-in":a=cr}jp({value:s,inclusive:i},{value:a,inclusive:c})>0&&(s=a,i=c)}if(t!==null){for(let o=0;o<r.orderBy.length;++o)if(r.orderBy[o].field.isEqual(e)){const a=t.position[o];jp({value:s,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(s=a,i=t.inclusive);break}}return{value:s,inclusive:i}}/**
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
 */class Bn{constructor(e,t=null,s=[],i=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Cy(r,e,t,s,i,o,a,c){return new Bn(r,e,t,s,i,o,a,c)}function Ai(r){return new Bn(r)}function Wp(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function qh(r){return r.collectionGroup!==null}function Xs(r){const e=X(r);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ke(je.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Go(o,s))}),t.has(je.keyField().canonicalString())||e.ce.push(new Go(je.keyField(),s))}return e.ce}function Ct(r){const e=X(r);return e.le||(e.le=Dy(e,Xs(r))),e.le}function xy(r){const e=X(r);return e.he||(e.he=Dy(e,r.explicitOrderBy)),e.he}function Dy(r,e){if(r.limitType==="F")return ju(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Go(i.field,o)});const t=r.endAt?new wr(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new wr(r.startAt.position,r.startAt.inclusive):null;return ju(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Gu(r,e){const t=r.filters.concat([e]);return new Bn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Rc(r,e,t){return new Bn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function sa(r,e){return ra(Ct(r),Ct(e))&&r.limitType===e.limitType}function ky(r){return`${us(Ct(r))}|lt:${r.limitType}`}function $s(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>Ry(i)).join(", ")}]`),na(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>ci(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>ci(i)).join(",")),`Target(${s})`}(Ct(r))}; limitType=${r.limitType})`}function ia(r,e){return e.isFoundDocument()&&function(s,i){const o=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):Z.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(r,e)&&function(s,i){for(const o of Xs(s))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,e)&&function(s,i){for(const o of s.filters)if(!o.matches(i))return!1;return!0}(r,e)&&function(s,i){return!(s.startAt&&!function(a,c,u){const h=Gp(a,c,u);return a.inclusive?h<=0:h<0}(s.startAt,Xs(s),i)||s.endAt&&!function(a,c,u){const h=Gp(a,c,u);return a.inclusive?h>=0:h>0}(s.endAt,Xs(s),i))}(r,e)}function Vy(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ny(r){return(e,t)=>{let s=!1;for(const i of Xs(r)){const o=JR(i,e,t);if(o!==0)return o;s=s||i.field.isKeyField()}return 0}}function JR(r,e,t){const s=r.field.isKeyField()?Z.comparator(e.key,t.key):function(o,a,c){const u=a.data.field(o),h=c.data.field(o);return u!==null&&h!==null?vr(u,h):se()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return se()}}/**
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
 */class qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,o]of s)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(t,s)=>{for(const[i,o]of s)e(i,o)})}isEmpty(){return _y(this.inner)}size(){return this.innerSize}}/**
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
 */const XR=new Be(Z.comparator);function Bt(){return XR}const Oy=new Be(Z.comparator);function ho(...r){let e=Oy;for(const t of r)e=e.insert(t.key,t);return e}function My(r){let e=Oy;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function hn(){return Ao()}function Ly(){return Ao()}function Ao(){return new qn(r=>r.toString(),(r,e)=>r.isEqual(e))}const YR=new Be(Z.comparator),ZR=new ke(Z.comparator);function Ie(...r){let e=ZR;for(const t of r)e=e.add(t);return e}const eS=new ke(me);function $h(){return eS}/**
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
 */function jh(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function Fy(r){return{integerValue:""+r}}function Uy(r,e){return hy(e)?Fy(e):jh(r,e)}/**
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
 */class al{constructor(){this._=void 0}}function tS(r,e,t){return r instanceof ui?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&sl(o)&&(o=il(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):r instanceof hs?qy(r,e):r instanceof ds?$y(r,e):function(i,o){const a=By(i,o),c=Qp(a)+Qp(i.Pe);return Bu(a)&&Bu(i.Pe)?Fy(c):jh(i.serializer,c)}(r,e)}function nS(r,e,t){return r instanceof hs?qy(r,e):r instanceof ds?$y(r,e):t}function By(r,e){return r instanceof hi?function(s){return Bu(s)||function(o){return!!o&&"doubleValue"in o}(s)}(e)?e:{integerValue:0}:null}class ui extends al{}class hs extends al{constructor(e){super(),this.elements=e}}function qy(r,e){const t=jy(e);for(const s of r.elements)t.some(i=>In(i,s))||t.push(s);return{arrayValue:{values:t}}}class ds extends al{constructor(e){super(),this.elements=e}}function $y(r,e){let t=jy(e);for(const s of r.elements)t=t.filter(i=>!In(i,s));return{arrayValue:{values:t}}}class hi extends al{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Qp(r){return ze(r.integerValue||r.doubleValue)}function jy(r){return jo(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class oa{constructor(e,t){this.field=e,this.transform=t}}function rS(r,e){return r.field.isEqual(e.field)&&function(s,i){return s instanceof hs&&i instanceof hs||s instanceof ds&&i instanceof ds?ii(s.elements,i.elements,In):s instanceof hi&&i instanceof hi?In(s.Pe,i.Pe):s instanceof ui&&i instanceof ui}(r.transform,e.transform)}class sS{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class cl{}function Gy(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Si(r.key,Ke.none()):new Ri(r.key,r.data,Ke.none());{const t=r.data,s=gt.empty();let i=new ke(je.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),i=i.add(o)}return new $n(r.key,s,new Ut(i.toArray()),Ke.none())}}function iS(r,e,t){r instanceof Ri?function(i,o,a){const c=i.value.clone(),u=Xp(i.fieldTransforms,o,a.transformResults);c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):r instanceof $n?function(i,o,a){if(!oc(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Xp(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(zy(i)),u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ro(r,e,t,s){return r instanceof Ri?function(o,a,c,u){if(!oc(o.precondition,a))return c;const h=o.value.clone(),d=Yp(o.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,s):r instanceof $n?function(o,a,c,u){if(!oc(o.precondition,a))return c;const h=Yp(o.fieldTransforms,u,a),d=a.data;return d.setAll(zy(o)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(r,e,t,s):function(o,a,c){return oc(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,e,t)}function oS(r,e){let t=null;for(const s of r.fieldTransforms){const i=e.data.field(s.field),o=By(s.transform,i||null);o!=null&&(t===null&&(t=gt.empty()),t.set(s.field,o))}return t||null}function Jp(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&ii(s,i,(o,a)=>rS(o,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ri extends cl{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $n extends cl{constructor(e,t,s,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function zy(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Xp(r,e,t){const s=new Map;ce(r.length===t.length);for(let i=0;i<t.length;i++){const o=r[i],a=o.transform,c=e.data.field(o.field);s.set(o.field,nS(a,c,t[i]))}return s}function Yp(r,e,t){const s=new Map;for(const i of r){const o=i.transform,a=t.data.field(i.field);s.set(i.field,tS(o,a,e))}return s}class Si extends cl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gh extends cl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zh{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&iS(o,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ro(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ro(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ly();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(i.key)?null:c;const u=Gy(a,c);u!==null&&s.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(ue.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ie())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(t,s)=>Jp(t,s))&&ii(this.baseMutations,e.baseMutations,(t,s)=>Jp(t,s))}}class Kh{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){ce(e.mutations.length===s.length);let i=function(){return YR}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,s[a].version);return new Kh(e,t,s,i)}}/**
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
 */class Hh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ky{constructor(e,t,s){this.alias=e,this.aggregateType=t,this.fieldPath=s}}/**
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
 */class aS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var nt,be;function Hy(r){switch(r){default:return se();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Wy(r){if(r===void 0)return et("GRPC error has no .code"),N.UNKNOWN;switch(r){case nt.OK:return N.OK;case nt.CANCELLED:return N.CANCELLED;case nt.UNKNOWN:return N.UNKNOWN;case nt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case nt.INTERNAL:return N.INTERNAL;case nt.UNAVAILABLE:return N.UNAVAILABLE;case nt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case nt.NOT_FOUND:return N.NOT_FOUND;case nt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case nt.ABORTED:return N.ABORTED;case nt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case nt.DATA_LOSS:return N.DATA_LOSS;default:return se()}}(be=nt||(nt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let Sc=null;/**
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
 */function Qy(){return new TextEncoder}/**
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
 */const cS=new rs([4294967295,4294967295],0);function Zp(r){const e=Qy().encode(r),t=new J_;return t.update(e),new Uint8Array(t.digest())}function em(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new rs([t,s],0),new rs([i,o],0)]}class Wh{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new fo(`Invalid padding: ${t}`);if(s<0)throw new fo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fo(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new fo(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=rs.fromNumber(this.Te)}Ee(e,t,s){let i=e.add(t.multiply(rs.fromNumber(s)));return i.compare(cS)===1&&(i=new rs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Zp(e),[s,i]=em(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(s,i,o);if(!this.de(a))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Wh(o,i,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Zp(e),[s,i]=em(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(s,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class aa{constructor(e,t,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,ca.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new aa(ue.min(),i,new Be(me),Bt(),Ie())}}class ca{constructor(e,t,s,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ca(s,t,Ie(),Ie(),Ie())}}/**
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
 */class ac{constructor(e,t,s,i){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=i}}class Jy{constructor(e,t){this.targetId=e,this.me=t}}class Xy{constructor(e,t,s=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class tm{constructor(){this.fe=0,this.ge=nm(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ie(),t=Ie(),s=Ie();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:se()}}),new ca(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=nm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bt(),this.qe=ja(),this.Qe=ja(),this.Ke=new Be(me)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,s=e.me.count,i=this.Ye(t);if(i){const o=i.target;if(bc(o))if(s===0){const a=new Z(o.path);this.We(t,a,$e.newNoDocument(a,ue.min()))}else ce(s===1);else{const a=this.Ze(t);if(a!==s){const c=this.Xe(e),u=c?this.et(c,e,a):1;if(u!==0){this.He(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,h)}Sc==null||Sc.tt(function(d,p,g,w,P){var x,S,V,L,F,U;const ee={localCacheCount:d,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},ne=p.unchangedNames;return ne&&(ee.bloomFilter={applied:P===0,hashCount:(x=ne==null?void 0:ne.hashCount)!==null&&x!==void 0?x:0,bitmapLength:(L=(V=(S=ne==null?void 0:ne.bits)===null||S===void 0?void 0:S.bitmap)===null||V===void 0?void 0:V.length)!==null&&L!==void 0?L:0,padding:(U=(F=ne==null?void 0:ne.bits)===null||F===void 0?void 0:F.padding)!==null&&U!==void 0?U:0,mightContain:R=>{var T;return(T=w==null?void 0:w.mightContain(R))!==null&&T!==void 0&&T}}),ee}(a,e.me,this.Le.nt(),c,u))}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:o=0}=t;let a,c;try{a=Ln(s).toUint8Array()}catch(u){if(u instanceof yy)return Ht("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Wh(a,i,o)}catch(u){return Ht(u instanceof fo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Te===0?null:c}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let i=0;return s.forEach(o=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.We(t,o,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((o,a)=>{const c=this.Ye(a);if(c){if(o.current&&bc(c.target)){const u=new Z(c.target.path);this.st(u).has(a)||this.ot(a,u)||this.We(a,u,$e.newNoDocument(u,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let s=Ie();this.Qe.forEach((o,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new aa(e,t,this.Ke,this.ke,s);return this.ke=Bt(),this.qe=ja(),this.Qe=ja(),this.Ke=new Be(me),i}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new tm,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ke(me),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ke(me),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new tm),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ja(){return new Be(Z.comparator)}function nm(){return new Be(Z.comparator)}const uS={asc:"ASCENDING",desc:"DESCENDING"},hS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dS={and:"AND",or:"OR"};class fS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zu(r,e){return r.useProto3Json||na(e)?e:{value:e}}function di(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yy(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function pS(r,e){return di(r,e.toTimestamp())}function tt(r){return ce(!!r),ue.fromTimestamp(function(t){const s=Mn(t);return new He(s.seconds,s.nanos)}(r))}function Qh(r,e){return Ku(r,e).canonicalString()}function Ku(r,e){const t=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Zy(r){const e=Te.fromString(r);return ce(lI(e)),e}function zo(r,e){return Qh(r.databaseId,e.path)}function mn(r,e){const t=Zy(e);if(t.get(1)!==r.databaseId.projectId)throw new B(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new B(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Z(nI(t))}function eI(r,e){return Qh(r.databaseId,e)}function tI(r){const e=Zy(r);return e.length===4?Te.emptyPath():nI(e)}function Hu(r){return new Te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function nI(r){return ce(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function rm(r,e,t){return{name:zo(r,e),fields:t.value.mapValue.fields}}function rI(r,e,t){const s=mn(r,e.name),i=tt(e.updateTime),o=e.createTime?tt(e.createTime):ue.min(),a=new gt({mapValue:{fields:e.fields}}),c=$e.newFoundDocument(s,i,o,a);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function mS(r,e){return"found"in e?function(s,i){ce(!!i.found),i.found.name,i.found.updateTime;const o=mn(s,i.found.name),a=tt(i.found.updateTime),c=i.found.createTime?tt(i.found.createTime):ue.min(),u=new gt({mapValue:{fields:i.found.fields}});return $e.newFoundDocument(o,a,c,u)}(r,e):"missing"in e?function(s,i){ce(!!i.missing),ce(!!i.readTime);const o=mn(s,i.missing),a=tt(i.readTime);return $e.newNoDocument(o,a)}(r,e):se()}function gS(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(h,d){return h.useProto3Json?(ce(d===void 0||typeof d=="string"),Je.fromBase64String(d||"")):(ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Je.fromUint8Array(d||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?N.UNKNOWN:Wy(h.code);return new B(d,h.message||"")}(a);t=new Xy(s,i,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mn(r,s.document.name),o=tt(s.document.updateTime),a=s.document.createTime?tt(s.document.createTime):ue.min(),c=new gt({mapValue:{fields:s.document.fields}}),u=$e.newFoundDocument(i,o,a,c),h=s.targetIds||[],d=s.removedTargetIds||[];t=new ac(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mn(r,s.document),o=s.readTime?tt(s.readTime):ue.min(),a=$e.newNoDocument(i,o),c=s.removedTargetIds||[];t=new ac([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mn(r,s.document),o=s.removedTargetIds||[];t=new ac([],o,i,null)}else{if(!("filter"in e))return se();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:o}=s,a=new aS(i,o),c=s.targetId;t=new Jy(c,a)}}return t}function Ko(r,e){let t;if(e instanceof Ri)t={update:rm(r,e.key,e.value)};else if(e instanceof Si)t={delete:zo(r,e.key)};else if(e instanceof $n)t={update:rm(r,e.key,e.data),updateMask:TS(e.fieldMask)};else{if(!(e instanceof Gh))return se();t={verify:zo(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(o,a){const c=a.transform;if(c instanceof ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ds)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw se()}(0,s))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:pS(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:se()}(r,e.precondition)),t}function Wu(r,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?Ke.updateTime(tt(o.updateTime)):o.exists!==void 0?Ke.exists(o.exists):Ke.none()}(e.currentDocument):Ke.none(),s=e.updateTransforms?e.updateTransforms.map(i=>function(a,c){let u=null;if("setToServerValue"in c)ce(c.setToServerValue==="REQUEST_TIME"),u=new ui;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];u=new hs(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];u=new ds(d)}else"increment"in c?u=new hi(a,c.increment):se();const h=je.fromServerFormat(c.fieldPath);return new oa(h,u)}(r,i)):[];if(e.update){e.update.name;const i=mn(r,e.update.name),o=new gt({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(u){const h=u.fieldPaths||[];return new Ut(h.map(d=>je.fromServerFormat(d)))}(e.updateMask);return new $n(i,o,a,t,s)}return new Ri(i,o,t,s)}if(e.delete){const i=mn(r,e.delete);return new Si(i,t)}if(e.verify){const i=mn(r,e.verify);return new Gh(i,t)}return se()}function _S(r,e){return r&&r.length>0?(ce(e!==void 0),r.map(t=>function(i,o){let a=i.updateTime?tt(i.updateTime):tt(o);return a.isEqual(ue.min())&&(a=tt(o)),new sS(a,i.transformResults||[])}(t,e))):[]}function sI(r,e){return{documents:[eI(r,e.path)]}}function ll(r,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=eI(r,i);const o=function(h){if(h.length!==0)return cI(De.create(h,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:tr(g.field),direction:IS(g.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=zu(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:t,parent:i}}function iI(r,e,t,s){const{ct:i,parent:o}=ll(r,e),a={},c=[];let u=0;return t.forEach(h=>{const d=s?h.alias:"aggregate_"+u++;a[d]=h.alias,h.aggregateType==="count"?c.push({alias:d,count:{}}):h.aggregateType==="avg"?c.push({alias:d,avg:{field:tr(h.fieldPath)}}):h.aggregateType==="sum"&&c.push({alias:d,sum:{field:tr(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},lt:a,parent:o}}function oI(r){let e=tI(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){ce(s===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];t.where&&(o=function(p){const g=aI(p);return g instanceof De&&Bh(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(P){return new Go(js(P.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,na(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(p){const g=!!p.before,w=p.values||[];return new wr(w,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,w=p.values||[];return new wr(w,g)}(t.endAt)),Cy(e,i,a,o,c,"F",u,h)}function yS(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function aI(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=js(t.unaryFilter.field);return Ee.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=js(t.unaryFilter.field);return Ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=js(t.unaryFilter.field);return Ee.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=js(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(r):r.fieldFilter!==void 0?function(t){return Ee.create(js(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return De.create(t.compositeFilter.filters.map(s=>aI(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se()}}(t.compositeFilter.op))}(r):se()}function IS(r){return uS[r]}function vS(r){return hS[r]}function wS(r){return dS[r]}function tr(r){return{fieldPath:r.canonicalString()}}function js(r){return je.fromServerFormat(r.fieldPath)}function cI(r){return r instanceof Ee?function(t){if(t.op==="=="){if(qp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NAN"}};if(Bp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NAN"}};if(Bp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(t.field),op:vS(t.op),value:t.value}}}(r):r instanceof De?function(t){const s=t.getFilters().map(i=>cI(i));return s.length===1?s[0]:{compositeFilter:{op:wS(t.op),filters:s}}}(r):se()}function TS(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function lI(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class xn{constructor(e,t,s,i,o=ue.min(),a=ue.min(),c=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uI{constructor(e){this.ht=e}}function ES(r,e){let t;if(e.document)t=rI(r.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=Z.fromSegments(e.noDocument.path),i=ps(e.noDocument.readTime);t=$e.newNoDocument(s,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return se();{const s=Z.fromSegments(e.unknownDocument.path),i=ps(e.unknownDocument.version);t=$e.newUnknownDocument(s,i)}}return e.readTime&&t.setReadTime(function(i){const o=new He(i[0],i[1]);return ue.fromTimestamp(o)}(e.readTime)),t}function sm(r,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Pc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(o,a){return{name:zo(o,a.key),fields:a.data.value.mapValue.fields,updateTime:di(o,a.version.toTimestamp()),createTime:di(o,a.createTime.toTimestamp())}}(r.ht,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:fs(e.version)};else{if(!e.isUnknownDocument())return se();s.unknownDocument={path:t.path.toArray(),version:fs(e.version)}}return s}function Pc(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function fs(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ps(r){const e=new He(r.seconds,r.nanoseconds);return ue.fromTimestamp(e)}function Xr(r,e){const t=(e.baseMutations||[]).map(o=>Wu(r.ht,o));for(let o=0;o<e.mutations.length-1;++o){const a=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const c=e.mutations[o+1];a.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const s=e.mutations.map(o=>Wu(r.ht,o)),i=He.fromMillis(e.localWriteTimeMs);return new zh(e.batchId,i,t,s)}function po(r){const e=ps(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?ps(r.lastLimboFreeSnapshotVersion):ue.min();let s;return s=function(o){return o.documents!==void 0}(r.query)?function(o){return ce(o.documents.length===1),Ct(Ai(tI(o.documents[0])))}(r.query):function(o){return Ct(oI(o))}(r.query),new xn(s,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Je.fromBase64String(r.resumeToken))}function hI(r,e){const t=fs(e.snapshotVersion),s=fs(e.lastLimboFreeSnapshotVersion);let i;i=bc(e.target)?sI(r.ht,e.target):ll(r.ht,e.target).ct;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:us(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function Jh(r){const e=oI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Rc(e,e.limit,"L"):e}function uu(r,e){return new Hh(e.largestBatchId,Wu(r.ht,e.overlayMutation))}function im(r,e){const t=e.path.lastSegment();return[r,Pt(e.path.popLast()),t]}function om(r,e,t,s){return{indexId:r,uid:e,sequenceNumber:t,readTime:fs(s.readTime),documentKey:Pt(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class bS{getBundleMetadata(e,t){return am(e).get(t).next(s=>{if(s)return function(o){return{id:o.bundleId,createTime:ps(o.createTime),version:o.version}}(s)})}saveBundleMetadata(e,t){return am(e).put(function(i){return{bundleId:i.id,createTime:fs(tt(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return cm(e).get(t).next(s=>{if(s)return function(o){return{name:o.name,query:Jh(o.bundledQuery),readTime:ps(o.readTime)}}(s)})}saveNamedQuery(e,t){return cm(e).put(function(i){return{name:i.name,readTime:fs(tt(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function am(r){return it(r,"bundles")}function cm(r){return it(r,"namedQueries")}/**
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
 */class ul{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const s=t.uid||"";return new ul(e,s)}getOverlay(e,t){return eo(e).get(im(this.userId,t)).next(s=>s?uu(this.serializer,s):null)}getOverlays(e,t){const s=hn();return D.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&s.set(i,o)})).next(()=>s)}saveOverlays(e,t,s){const i=[];return s.forEach((o,a)=>{const c=new Hh(t,a);i.push(this.Tt(e,c))}),D.waitFor(i)}removeOverlaysForBatchId(e,t,s){const i=new Set;t.forEach(a=>i.add(Pt(a.getCollectionPath())));const o=[];return i.forEach(a=>{const c=IDBKeyRange.bound([this.userId,a,s],[this.userId,a,s+1],!1,!0);o.push(eo(e).j("collectionPathOverlayIndex",c))}),D.waitFor(o)}getOverlaysForCollection(e,t,s){const i=hn(),o=Pt(t),a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,Number.POSITIVE_INFINITY],!0);return eo(e).U("collectionPathOverlayIndex",a).next(c=>{for(const u of c){const h=uu(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,s,i){const o=hn();let a;const c=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return eo(e).J({index:"collectionGroupOverlayIndex",range:c},(u,h,d)=>{const p=uu(this.serializer,h);o.size()<i||p.largestBatchId===a?(o.set(p.getKey(),p),a=p.largestBatchId):d.done()}).next(()=>o)}Tt(e,t){return eo(e).put(function(i,o,a){const[c,u,h]=im(o,a.mutation.key);return{userId:o,collectionPath:u,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ko(i.ht,a.mutation)}}(this.serializer,this.userId,t))}}function eo(r){return it(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{It(e){return it(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const s=t==null?void 0:t.value;return s?Je.fromUint8Array(s):Je.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Yr{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(ze(e.integerValue));else if("doubleValue"in e){const s=ze(e.doubleValue);isNaN(s)?this.Rt(t,13):(this.Rt(t,15),Bo(s)?t.Vt(0):t.Vt(s))}else if("timestampValue"in e){let s=e.timestampValue;this.Rt(t,20),typeof s=="string"&&(s=Mn(s)),t.ft(`${s.seconds||""}`),t.Vt(s.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(Ln(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.Rt(t,45),t.Vt(s.latitude||0),t.Vt(s.longitude||0)}else"mapValue"in e?Iy(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):ol(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):se()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const s=e.fields||{};this.Rt(t,55);for(const i of Object.keys(s))this.gt(i,t),this.dt(s[i],t)}bt(e,t){var s,i;const o=e.fields||{};this.Rt(t,53);const a="value",c=((i=(s=o[a].arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(ze(c)),this.gt(a,t),this.dt(o[a],t)}vt(e,t){const s=e.values||[];this.Rt(t,50);for(const i of s)this.dt(i,t)}St(e,t){this.Rt(t,37),Z.fromName(e).path.forEach(s=>{this.Rt(t,60),this.Ct(s,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}Yr.Ft=new Yr;function RS(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function lm(r){const e=64-function(s){let i=0;for(let o=0;o<8;++o){const a=RS(255&s[o]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(e/8)}class SS{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.xt(s.value),s=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Lt(s.value),s=t.next();this.Bt()}kt(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.xt(s);else if(s<2048)this.xt(960|s>>>6),this.xt(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|s>>>12),this.xt(128|63&s>>>6),this.xt(128|63&s);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}qt(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Lt(s);else if(s<2048)this.Lt(960|s>>>6),this.Lt(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Lt(480|s>>>12),this.Lt(128|63&s>>>6),this.Lt(128|63&s);else{const i=t.codePointAt(0);this.Lt(240|i>>>18),this.Lt(128|63&i>>>12),this.Lt(128|63&i>>>6),this.Lt(128|63&i)}}this.Bt()}Qt(e){const t=this.Kt(e),s=lm(t);this.$t(1+s),this.buffer[this.position++]=255&s;for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ut(e){const t=this.Kt(e),s=lm(t);this.$t(1+s),this.buffer[this.position++]=~(255&s);for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,o,!1),new Uint8Array(a.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let i=1;i<t.length;++i)t[i]^=s?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Lt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Bt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const i=new Uint8Array(s);i.set(this.buffer),this.buffer=i}}class PS{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class CS{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class to{constructor(){this.Jt=new SS,this.Yt=new PS(this.Jt),this.Zt=new CS(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
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
 */class Zr{constructor(e,t,s,i){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=i}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new Zr(this.indexId,this.documentKey,this.arrayValue,s)}}function Qn(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=um(r.arrayValue,e.arrayValue),t!==0?t:(t=um(r.directionalValue,e.directionalValue),t!==0?t:Z.comparator(r.documentKey,e.documentKey)))}function um(r,e){for(let t=0;t<r.length&&t<e.length;++t){const s=r[t]-e[t];if(s!==0)return s}return r.length-e.length}/**
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
 */class hm{constructor(e){this.tn=new ke((t,s)=>je.comparator(t.field,s.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const s=t;s.isInequality()?this.tn=this.tn.add(s):this.rn.push(s)}}get sn(){return this.tn.size>1}on(e){if(ce(e.collectionGroup===this.collectionId),this.sn)return!1;const t=Lu(e);if(t!==void 0&&!this._n(t))return!1;const s=Wr(e);let i=new Set,o=0,a=0;for(;o<s.length&&this._n(s[o]);++o)i=i.add(s[o].fieldPath.canonicalString());if(o===s.length)return!0;if(this.tn.size>0){const c=this.tn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=s[o];if(!this.an(c,u)||!this.un(this.nn[a++],u))return!1}++o}for(;o<s.length;++o){const c=s[o];if(a>=this.nn.length||!this.un(this.nn[a++],c))return!1}return!0}cn(){if(this.sn)return null;let e=new ke(je.comparator);const t=[];for(const s of this.rn)if(!s.field.isKeyField())if(s.op==="array-contains"||s.op==="array-contains-any")t.push(new ss(s.field,2));else{if(e.has(s.field))continue;e=e.add(s.field),t.push(new ss(s.field,0))}for(const s of this.nn)s.field.isKeyField()||e.has(s.field)||(e=e.add(s.field),t.push(new ss(s.field,s.dir==="asc"?0:1)));return new oi(oi.UNKNOWN_ID,this.collectionId,t,ai.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function dI(r){var e,t;if(ce(r instanceof Ee||r instanceof De),r instanceof Ee){if(r instanceof Py){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Ee.create(r.field,"==",o)))||[];return De.create(i,"or")}return r}const s=r.filters.map(i=>dI(i));return De.create(s,r.op)}function xS(r){if(r.getFilters().length===0)return[];const e=Xu(dI(r));return ce(fI(e)),Qu(e)||Ju(e)?[e]:e.getFilters()}function Qu(r){return r instanceof Ee}function Ju(r){return r instanceof De&&Bh(r)}function fI(r){return Qu(r)||Ju(r)||function(t){if(t instanceof De&&qu(t)){for(const s of t.getFilters())if(!Qu(s)&&!Ju(s))return!1;return!0}return!1}(r)}function Xu(r){if(ce(r instanceof Ee||r instanceof De),r instanceof Ee)return r;if(r.filters.length===1)return Xu(r.filters[0]);const e=r.filters.map(s=>Xu(s));let t=De.create(e,r.op);return t=Cc(t),fI(t)?t:(ce(t instanceof De),ce(li(t)),ce(t.filters.length>1),t.filters.reduce((s,i)=>Xh(s,i)))}function Xh(r,e){let t;return ce(r instanceof Ee||r instanceof De),ce(e instanceof Ee||e instanceof De),t=r instanceof Ee?e instanceof Ee?function(i,o){return De.create([i,o],"and")}(r,e):dm(r,e):e instanceof Ee?dm(e,r):function(i,o){if(ce(i.filters.length>0&&o.filters.length>0),li(i)&&li(o))return Ay(i,o.getFilters());const a=qu(i)?i:o,c=qu(i)?o:i,u=a.filters.map(h=>Xh(h,c));return De.create(u,"or")}(r,e),Cc(t)}function dm(r,e){if(li(e))return Ay(e,r.getFilters());{const t=e.filters.map(s=>Xh(r,s));return De.create(t,"or")}}function Cc(r){if(ce(r instanceof Ee||r instanceof De),r instanceof Ee)return r;const e=r.getFilters();if(e.length===1)return Cc(e[0]);if(Ey(r))return r;const t=e.map(i=>Cc(i)),s=[];return t.forEach(i=>{i instanceof Ee?s.push(i):i instanceof De&&(i.op===r.op?s.push(...i.filters):s.push(i))}),s.length===1?s[0]:De.create(s,r.op)}/**
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
 */class DS{constructor(){this.ln=new Yh}addToCollectionParentIndex(e,t){return this.ln.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Wt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Wt.min())}updateCollectionGroup(e,t,s){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Yh{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new ke(Te.comparator),o=!i.has(s);return this.index[t]=i.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ke(Te.comparator)).toArray()}}/**
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
 */const Ga=new Uint8Array(0);class kS{constructor(e,t){this.databaseId=t,this.hn=new Yh,this.Pn=new qn(s=>us(s),(s,i)=>ra(s,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const s=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const o={collectionId:s,parent:Pt(i)};return fm(e).put(o)}return D.resolve()}getCollectionParents(e,t){const s=[],i=IDBKeyRange.bound([t,""],[iy(t),""],!1,!0);return fm(e).U(i).next(o=>{for(const a of o){if(a.collectionId!==t)break;s.push(un(a.parent))}return s})}addFieldIndex(e,t){const s=no(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const o=s.add(i);if(t.indexState){const a=Ls(e);return o.next(c=>{a.put(om(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const s=no(e),i=Ls(e),o=Ms(e);return s.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=no(e),s=Ms(e),i=Ls(e);return t.j().next(()=>s.j()).next(()=>i.j())}createTargetIndexes(e,t){return D.forEach(this.Tn(t),s=>this.getIndexType(e,s).next(i=>{if(i===0||i===1){const o=new hm(s).cn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const s=Ms(e);let i=!0;const o=new Map;return D.forEach(this.Tn(t),a=>this.In(e,a).next(c=>{i&&(i=!!c),o.set(a,c)})).next(()=>{if(i){let a=Ie();const c=[];return D.forEach(o,(u,h)=>{q("IndexedDbIndexManager",`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(U=>`${U.fieldPath}:${U.kind}`).join(",")}`}(u)} to execute ${us(t)}`);const d=function(F,U){const ee=Lu(U);if(ee===void 0)return null;for(const ne of Ac(F,ee.fieldPath))switch(ne.op){case"array-contains-any":return ne.value.arrayValue.values||[];case"array-contains":return[ne.value]}return null}(h,u),p=function(F,U){const ee=new Map;for(const ne of Wr(U))for(const R of Ac(F,ne.fieldPath))switch(R.op){case"==":case"in":ee.set(ne.fieldPath.canonicalString(),R.value);break;case"not-in":case"!=":return ee.set(ne.fieldPath.canonicalString(),R.value),Array.from(ee.values())}return null}(h,u),g=function(F,U){const ee=[];let ne=!0;for(const R of Wr(U)){const T=R.kind===0?Kp(F,R.fieldPath,F.startAt):Hp(F,R.fieldPath,F.startAt);ee.push(T.value),ne&&(ne=T.inclusive)}return new wr(ee,ne)}(h,u),w=function(F,U){const ee=[];let ne=!0;for(const R of Wr(U)){const T=R.kind===0?Hp(F,R.fieldPath,F.endAt):Kp(F,R.fieldPath,F.endAt);ee.push(T.value),ne&&(ne=T.inclusive)}return new wr(ee,ne)}(h,u),P=this.En(u,h,g),x=this.En(u,h,w),S=this.dn(u,h,p),V=this.An(u.indexId,d,P,g.inclusive,x,w.inclusive,S);return D.forEach(V,L=>s.G(L,t.limit).next(F=>{F.forEach(U=>{const ee=Z.fromSegments(U.documentKey);a.has(ee)||(a=a.add(ee),c.push(ee))})}))}).next(()=>c)}return D.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=xS(De.create(e.filters,"and")).map(s=>ju(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,s,i,o,a,c){const u=(t!=null?t.length:1)*Math.max(s.length,o.length),h=u/(t!=null?t.length:1),d=[];for(let p=0;p<u;++p){const g=t?this.Rn(t[p/h]):Ga,w=this.Vn(e,g,s[p%h],i),P=this.mn(e,g,o[p%h],a),x=c.map(S=>this.Vn(e,g,S,!0));d.push(...this.createRange(w,P,x))}return d}Vn(e,t,s,i){const o=new Zr(e,Z.empty(),t,s);return i?o:o.en()}mn(e,t,s,i){const o=new Zr(e,Z.empty(),t,s);return i?o.en():o}In(e,t){const s=new hm(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(o=>{let a=null;for(const c of o)s.on(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(e,t){let s=2;const i=this.Tn(t);return D.forEach(i,o=>this.In(e,o).next(a=>{a?s!==0&&a.fields.length<function(u){let h=new ke(je.comparator),d=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?d=!0:h=h.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(d?1:0)}(o)&&(s=1):s=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&s===2?1:s)}fn(e,t){const s=new to;for(const i of Wr(e)){const o=t.data.field(i.fieldPath);if(o==null)return null;const a=s.Xt(i.kind);Yr.Ft.Et(o,a)}return s.Ht()}Rn(e){const t=new to;return Yr.Ft.Et(e,t.Xt(0)),t.Ht()}gn(e,t){const s=new to;return Yr.Ft.Et(ls(this.databaseId,t),s.Xt(function(o){const a=Wr(o);return a.length===0?0:a[a.length-1].kind}(e))),s.Ht()}dn(e,t,s){if(s===null)return[];let i=[];i.push(new to);let o=0;for(const a of Wr(e)){const c=s[o++];for(const u of i)if(this.pn(t,a.fieldPath)&&jo(c))i=this.yn(i,a,c);else{const h=u.Xt(a.kind);Yr.Ft.Et(c,h)}}return this.wn(i)}En(e,t,s){return this.dn(e,t,s.position)}wn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Ht();return t}yn(e,t,s){const i=[...e],o=[];for(const a of s.arrayValue.values||[])for(const c of i){const u=new to;u.seed(c.Ht()),Yr.Ft.Et(a,u.Xt(t.kind)),o.push(u)}return o}pn(e,t){return!!e.filters.find(s=>s instanceof Ee&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=no(e),i=Ls(e);return(t?s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.U()).next(o=>{const a=[];return D.forEach(o,c=>i.get([c.indexId,this.uid]).next(u=>{a.push(function(d,p){const g=p?new ai(p.sequenceNumber,new Wt(ps(p.readTime),new Z(un(p.documentKey)),p.largestBatchId)):ai.empty(),w=d.fields.map(([P,x])=>new ss(je.fromServerFormat(P),x));return new oi(d.indexId,d.collectionGroup,w,g)}(c,u))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,i)=>{const o=s.indexState.sequenceNumber-i.indexState.sequenceNumber;return o!==0?o:me(s.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const i=no(e),o=Ls(e);return this.Sn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>D.forEach(c,u=>o.put(om(u.indexId,this.uid,a,s)))))}updateIndexEntries(e,t){const s=new Map;return D.forEach(t,(i,o)=>{const a=s.get(i.collectionGroup);return(a?D.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(s.set(i.collectionGroup,c),D.forEach(c,u=>this.bn(e,i,u).next(h=>{const d=this.Dn(o,u);return h.isEqual(d)?D.resolve():this.vn(e,o,u,h,d)}))))})}Cn(e,t,s,i){return Ms(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(s,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,s,i){return Ms(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(s,t.key),t.key.path.toArray()])}bn(e,t,s){const i=Ms(e);let o=new ke(Qn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.gn(s,t)])},(a,c)=>{o=o.add(new Zr(s.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>o)}Dn(e,t){let s=new ke(Qn);const i=this.fn(t,e);if(i==null)return s;const o=Lu(t);if(o!=null){const a=e.data.field(o.fieldPath);if(jo(a))for(const c of a.arrayValue.values||[])s=s.add(new Zr(t.indexId,e.key,this.Rn(c),i))}else s=s.add(new Zr(t.indexId,e.key,Ga,i));return s}vn(e,t,s,i,o){q("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const a=[];return function(u,h,d,p,g){const w=u.getIterator(),P=h.getIterator();let x=Os(w),S=Os(P);for(;x||S;){let V=!1,L=!1;if(x&&S){const F=d(x,S);F<0?L=!0:F>0&&(V=!0)}else x!=null?L=!0:V=!0;V?(p(S),S=Os(P)):L?(g(x),x=Os(w)):(x=Os(w),S=Os(P))}}(i,o,Qn,c=>{a.push(this.Cn(e,t,s,c))},c=>{a.push(this.Fn(e,t,s,c))}),D.waitFor(a)}Sn(e){let t=1;return Ls(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,i,o)=>{o.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((a,c)=>Qn(a,c)).filter((a,c,u)=>!c||Qn(a,u[c-1])!==0);const i=[];i.push(e);for(const a of s){const c=Qn(a,e),u=Qn(a,t);if(c===0)i[0]=e.en();else if(c>0&&u<0)i.push(a),i.push(a.en());else if(u>0)break}i.push(t);const o=[];for(let a=0;a<i.length;a+=2){if(this.Mn(i[a],i[a+1]))return[];const c=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,Ga,[]],u=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,Ga,[]];o.push(IDBKeyRange.bound(c,u))}return o}Mn(e,t){return Qn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(pm)}getMinOffset(e,t){return D.mapArray(this.Tn(t),s=>this.In(e,s).next(i=>i||se())).next(pm)}}function fm(r){return it(r,"collectionParents")}function Ms(r){return it(r,"indexEntries")}function no(r){return it(r,"indexConfiguration")}function Ls(r){return it(r,"indexState")}function pm(r){ce(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<r.length;s++){const i=r[s].indexState.offset;Lh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Wt(e.readTime,e.documentKey,t)}/**
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
 */const mm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */function pI(r,e,t){const s=r.store("mutations"),i=r.store("documentMutations"),o=[],a=IDBKeyRange.only(t.batchId);let c=0;const u=s.J({range:a},(d,p,g)=>(c++,g.delete()));o.push(u.next(()=>{ce(c===1)}));const h=[];for(const d of t.mutations){const p=dy(e,d.key.path,t.batchId);o.push(i.delete(p)),h.push(d.key)}return D.waitFor(o).next(()=>h)}function xc(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw se();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class hl{constructor(e,t,s,i){this.userId=e,this.serializer=t,this.indexManager=s,this.referenceDelegate=i,this.xn={}}static Pt(e,t,s,i){ce(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new hl(o,t,s,i)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Jn(e).J({index:"userMutationsIndex",range:s},(i,o,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,s,i){const o=Gs(e),a=Jn(e);return a.add({}).next(c=>{ce(typeof c=="number");const u=new zh(c,t,s,i),h=function(w,P,x){const S=x.baseMutations.map(L=>Ko(w.ht,L)),V=x.mutations.map(L=>Ko(w.ht,L));return{userId:P,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:S,mutations:V}}(this.serializer,this.userId,u),d=[];let p=new ke((g,w)=>me(g.canonicalString(),w.canonicalString()));for(const g of i){const w=dy(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),d.push(a.put(h)),d.push(o.put(w,IR))}return p.forEach(g=>{d.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.xn[c]=u.keys()}),D.waitFor(d).next(()=>u)})}lookupMutationBatch(e,t){return Jn(e).get(t).next(s=>s?(ce(s.userId===this.userId),Xr(this.serializer,s)):null)}On(e,t){return this.xn[t]?D.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const i=s.keys();return this.xn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=IDBKeyRange.lowerBound([this.userId,s]);let o=null;return Jn(e).J({index:"userMutationsIndex",range:i},(a,c,u)=>{c.userId===this.userId&&(ce(c.batchId>=s),o=Xr(this.serializer,c)),u.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Jn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,o,a)=>{s=o.batchId,a.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Jn(e).U("userMutationsIndex",t).next(s=>s.map(i=>Xr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=nc(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=[];return Gs(e).J({range:i},(a,c,u)=>{const[h,d,p]=a,g=un(d);if(h===this.userId&&t.path.isEqual(g))return Jn(e).get(p).next(w=>{if(!w)throw se();ce(w.userId===this.userId),o.push(Xr(this.serializer,w))});u.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ke(me);const i=[];return t.forEach(o=>{const a=nc(this.userId,o.path),c=IDBKeyRange.lowerBound(a),u=Gs(e).J({range:c},(h,d,p)=>{const[g,w,P]=h,x=un(w);g===this.userId&&o.path.isEqual(x)?s=s.add(P):p.done()});i.push(u)}),D.waitFor(i).next(()=>this.Nn(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1,o=nc(this.userId,s),a=IDBKeyRange.lowerBound(o);let c=new ke(me);return Gs(e).J({range:a},(u,h,d)=>{const[p,g,w]=u,P=un(g);p===this.userId&&s.isPrefixOf(P)?P.length===i&&(c=c.add(w)):d.done()}).next(()=>this.Nn(e,c))}Nn(e,t){const s=[],i=[];return t.forEach(o=>{i.push(Jn(e).get(o).next(a=>{if(a===null)throw se();ce(a.userId===this.userId),s.push(Xr(this.serializer,a))}))}),D.waitFor(i).next(()=>s)}removeMutationBatch(e,t){return pI(e._e,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.Ln(t.batchId)}),D.forEach(s,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Ln(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const s=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return Gs(e).J({range:s},(o,a,c)=>{if(o[0]===this.userId){const u=un(o[1]);i.push(u)}else c.done()}).next(()=>{ce(i.length===0)})})}containsKey(e,t){return mI(e,this.userId,t)}Bn(e){return gI(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function mI(r,e,t){const s=nc(e,t.path),i=s[1],o=IDBKeyRange.lowerBound(s);let a=!1;return Gs(r).J({range:o,H:!0},(c,u,h)=>{const[d,p,g]=c;d===e&&p===i&&(a=!0),h.done()}).next(()=>a)}function Jn(r){return it(r,"mutations")}function Gs(r){return it(r,"documentMutations")}function gI(r){return it(r,"mutationQueues")}/**
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
 */class ms{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ms(0)}static Qn(){return new ms(-1)}}/**
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
 */class VS{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const s=new ms(t.highestTargetId);return t.highestTargetId=s.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>ue.fromTimestamp(new He(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Kn(e).next(i=>(i.highestListenSequenceNumber=t,s&&(i.lastRemoteSnapshotVersion=s.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.$n(e,i)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(s=>(s.targetCount+=1,this.Wn(t,s),this.$n(e,s))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Fs(e).delete(t.targetId)).next(()=>this.Kn(e)).next(s=>(ce(s.targetCount>0),s.targetCount-=1,this.$n(e,s)))}removeTargets(e,t,s){let i=0;const o=[];return Fs(e).J((a,c)=>{const u=po(c);u.sequenceNumber<=t&&s.get(u.targetId)===null&&(i++,o.push(this.removeTargetData(e,u)))}).next(()=>D.waitFor(o)).next(()=>i)}forEachTarget(e,t){return Fs(e).J((s,i)=>{const o=po(i);t(o)})}Kn(e){return gm(e).get("targetGlobalKey").next(t=>(ce(t!==null),t))}$n(e,t){return gm(e).put("targetGlobalKey",t)}Un(e,t){return Fs(e).put(hI(this.serializer,t))}Wn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=us(t),i=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let o=null;return Fs(e).J({range:i,index:"queryTargetsIndex"},(a,c,u)=>{const h=po(c);ra(t,h.target)&&(o=h,u.done())}).next(()=>o)}addMatchingKeys(e,t,s){const i=[],o=nr(e);return t.forEach(a=>{const c=Pt(a.path);i.push(o.put({targetId:s,path:c})),i.push(this.referenceDelegate.addReference(e,s,a))}),D.waitFor(i)}removeMatchingKeys(e,t,s){const i=nr(e);return D.forEach(t,o=>{const a=Pt(o.path);return D.waitFor([i.delete([s,a]),this.referenceDelegate.removeReference(e,s,o)])})}removeMatchingKeysForTargetId(e,t){const s=nr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(i)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),i=nr(e);let o=Ie();return i.J({range:s,H:!0},(a,c,u)=>{const h=un(a[1]),d=new Z(h);o=o.add(d)}).next(()=>o)}containsKey(e,t){const s=Pt(t.path),i=IDBKeyRange.bound([s],[iy(s)],!1,!0);let o=0;return nr(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,c],u,h)=>{a!==0&&(o++,h.done())}).next(()=>o>0)}ut(e,t){return Fs(e).get(t).next(s=>s?po(s):null)}}function Fs(r){return it(r,"targets")}function gm(r){return it(r,"targetGlobal")}function nr(r){return it(r,"targetDocuments")}/**
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
 */function _m([r,e],[t,s]){const i=me(r,t);return i===0?me(e,s):i}class NS{constructor(e){this.Gn=e,this.buffer=new ke(_m),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();_m(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _I{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){q("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Cr(t)?q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Pr(t)}await this.Yn(3e5)})}}class OS{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Ft.oe);const s=new NS(t);return this.Zn.forEachTarget(e,i=>s.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>s.Hn(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(mm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mm):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,i,o,a,c,u,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(s=p,c=Date.now(),this.removeTargets(e,s,t))).next(p=>(o=p,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(h=Date.now(),qs()<=we.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:p})))}}function yI(r,e){return new OS(r,e)}/**
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
 */class MS{constructor(e,t){this.db=e,this.garbageCollector=yI(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(s,i)=>t(i))}addReference(e,t,s){return za(e,s)}removeReference(e,t,s){return za(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return za(e,t)}ir(e,t){return function(i,o){let a=!1;return gI(i).Y(c=>mI(i,c,o).next(u=>(u&&(a=!0),D.resolve(!u)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let o=0;return this.rr(e,(a,c)=>{if(c<=t){const u=this.ir(e,a).next(h=>{if(!h)return o++,s.getEntry(e,a).next(()=>(s.removeEntry(a,ue.min()),nr(e).delete(function(p){return[0,Pt(p.path)]}(a))))});i.push(u)}}).next(()=>D.waitFor(i)).next(()=>s.apply(e)).next(()=>o)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return za(e,t)}rr(e,t){const s=nr(e);let i,o=Ft.oe;return s.J({index:"documentTargetsIndex"},([a,c],{path:u,sequenceNumber:h})=>{a===0?(o!==Ft.oe&&t(new Z(un(i)),o),o=h,i=u):o=Ft.oe}).next(()=>{o!==Ft.oe&&t(new Z(un(i)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function za(r,e){return nr(r).put(function(s,i){return{targetId:0,path:Pt(s.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class II{constructor(){this.changes=new qn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?D.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class LS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return Gr(e).put(s)}removeEntry(e,t,s){return Gr(e).delete(function(o,a){const c=o.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Pc(a),c[c.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.sr(e,s)))}getEntry(e,t){let s=$e.newInvalidDocument(t);return Gr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ro(t))},(i,o)=>{s=this._r(t,o)}).next(()=>s)}ar(e,t){let s={size:0,document:$e.newInvalidDocument(t)};return Gr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ro(t))},(i,o)=>{s={document:this._r(t,o),size:xc(o)}}).next(()=>s)}getEntries(e,t){let s=Bt();return this.ur(e,t,(i,o)=>{const a=this._r(i,o);s=s.insert(i,a)}).next(()=>s)}cr(e,t){let s=Bt(),i=new Be(Z.comparator);return this.ur(e,t,(o,a)=>{const c=this._r(o,a);s=s.insert(o,c),i=i.insert(o,xc(a))}).next(()=>({documents:s,lr:i}))}ur(e,t,s){if(t.isEmpty())return D.resolve();let i=new ke(vm);t.forEach(u=>i=i.add(u));const o=IDBKeyRange.bound(ro(i.first()),ro(i.last())),a=i.getIterator();let c=a.getNext();return Gr(e).J({index:"documentKeyIndex",range:o},(u,h,d)=>{const p=Z.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&vm(c,p)<0;)s(c,null),c=a.getNext();c&&c.isEqual(p)&&(s(c,h),c=a.hasNext()?a.getNext():null),c?d.$(ro(c)):d.done()}).next(()=>{for(;c;)s(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,s,i,o){const a=t.path,c=[a.popLast().toArray(),a.lastSegment(),Pc(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],u=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gr(e).U(IDBKeyRange.bound(c,u,!0)).next(h=>{o==null||o.incrementDocumentReadCount(h.length);let d=Bt();for(const p of h){const g=this._r(Z.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(ia(t,g)||i.has(g.key))&&(d=d.insert(g.key,g))}return d})}getAllFromCollectionGroup(e,t,s,i){let o=Bt();const a=Im(t,s),c=Im(t,Wt.max());return Gr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,c,!0)},(u,h,d)=>{const p=this._r(Z.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);o=o.insert(p.key,p),o.size===i&&d.done()}).next(()=>o)}newChangeBuffer(e){return new FS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ym(e).get("remoteDocumentGlobalKey").next(t=>(ce(!!t),t))}sr(e,t){return ym(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const s=ES(this.serializer,t);if(!(s.isNoDocument()&&s.version.isEqual(ue.min())))return s}return $e.newInvalidDocument(e)}}function vI(r){return new LS(r)}class FS extends II{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new qn(s=>s.toString(),(s,i)=>s.isEqual(i))}applyChanges(e){const t=[];let s=0,i=new ke((o,a)=>me(o.canonicalString(),a.canonicalString()));return this.changes.forEach((o,a)=>{const c=this.Pr.get(o);if(t.push(this.hr.removeEntry(e,o,c.readTime)),a.isValidDocument()){const u=sm(this.hr.serializer,a);i=i.add(o.path.popLast());const h=xc(u);s+=h-c.size,t.push(this.hr.addEntry(e,o,u))}else if(s-=c.size,this.trackRemovals){const u=sm(this.hr.serializer,a.convertToNoDocument(ue.min()));t.push(this.hr.addEntry(e,o,u))}}),i.forEach(o=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.hr.updateMetadata(e,s)),D.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(s=>(this.Pr.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:s,lr:i})=>(i.forEach((o,a)=>{this.Pr.set(o,{size:a,readTime:s.get(o).readTime})}),s))}}function ym(r){return it(r,"remoteDocumentGlobal")}function Gr(r){return it(r,"remoteDocumentsV14")}function ro(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Im(r,e){const t=e.documentKey.path.toArray();return[r,Pc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function vm(r,e){const t=r.path.toArray(),s=e.path.toArray();let i=0;for(let o=0;o<t.length-2&&o<s.length-2;++o)if(i=me(t[o],s[o]),i)return i;return i=me(t.length,s.length),i||(i=me(t[t.length-2],s[s.length-2]),i||me(t[t.length-1],s[s.length-1]))}/**
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
 *//**
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
 */class US{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class wI{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Ro(s.mutation,i,Ut.empty(),He.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ie()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ie()){const i=hn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(o=>{let a=ho();return o.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ie()))}populateOverlays(e,t,s){const i=[];return s.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,i){let o=Bt();const a=Ao(),c=function(){return Ao()}();return t.forEach((u,h)=>{const d=s.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof $n)?o=o.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ro(d.mutation,h,d.mutation.getFieldMask(),He.now())):a.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var p;return c.set(h,new US(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const s=Ao();let i=new Be((a,c)=>a-c),o=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let d=s.get(u)||Ut.empty();d=c.applyToLocalView(h,d),s.set(u,d);const p=(i.get(c.batchId)||Ie()).add(u);i=i.insert(c.batchId,p)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,d=u.value,p=Ly();d.forEach(g=>{if(!o.has(g)){const w=Gy(t.get(g),s.get(g));w!==null&&p.set(g,w),o=o.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-o.size):D.resolve(hn());let c=-1,u=o;return a.next(h=>D.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),o.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,h,o)).next(()=>this.computeViews(e,u,h,Ie())).next(d=>({batchId:c,changes:My(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(s=>{let i=ho();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const o=t.collectionGroup;let a=ho();return this.indexManager.getCollectionParents(e,o).next(c=>D.forEach(c,u=>{const h=function(p,g){return new Bn(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,s,i).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,i))).next(a=>{o.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,$e.newInvalidDocument(d)))});let c=ho();return a.forEach((u,h)=>{const d=o.get(u);d!==void 0&&Ro(d.mutation,h,Ut.empty(),He.now()),ia(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class BS{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return D.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:tt(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Jh(i.bundledQuery),readTime:tt(i.readTime)}}(t)),D.resolve()}}/**
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
 */class qS{constructor(){this.overlays=new Be(Z.comparator),this.Er=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const s=hn();return D.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&s.set(i,o)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,o)=>{this.Tt(e,t,o)}),D.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Er.get(s);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(s)),D.resolve()}getOverlaysForCollection(e,t,s){const i=hn(),o=t.length+1,a=new Z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===o&&u.largestBatchId>s&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let o=new Be((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let d=o.get(h.largestBatchId);d===null&&(d=hn(),o=o.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=hn(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=i)););return D.resolve(c)}Tt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(s.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Hh(t,s));let o=this.Er.get(t);o===void 0&&(o=Ie(),this.Er.set(t,o)),this.Er.set(t,o.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Zh{constructor(){this.dr=new ke(at.Ar),this.Rr=new ke(at.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new at(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new at(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new Z(new Te([])),s=new at(t,e),i=new at(t,e+1),o=[];return this.Rr.forEachInRange([s,i],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Z(new Te([])),s=new at(t,e),i=new at(t,e+1);let o=Ie();return this.Rr.forEachInRange([s,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new at(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class at{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Z.comparator(e.key,t.key)||me(e.br,t.br)}static Vr(e,t){return me(e.br,t.br)||Z.comparator(e.key,t.key)}}/**
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
 */class jS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ke(at.Ar)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zh(o,t,s,i);this.mutationQueue.push(a);for(const c of i)this.vr=this.vr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Fr(s),o=i<0?0:i;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new at(t,0),i=new at(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([s,i],a=>{const c=this.Cr(a.br);o.push(c)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ke(me);return t.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],c=>{s=s.add(c.br)})}),D.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let o=s;Z.isDocumentKey(o)||(o=o.child(""));const a=new at(new Z(o),0);let c=new ke(me);return this.vr.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.br)),!0)},a),D.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(s=>{const i=this.Cr(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ce(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return D.forEach(t.mutations,i=>{const o=new at(i.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new at(t,0),i=this.vr.firstAfterOrEqual(s);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class GS{constructor(e){this.Nr=e,this.docs=function(){return new Be(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),o=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return D.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(t))}getEntries(e,t){let s=Bt();return t.forEach(i=>{const o=this.docs.get(i);s=s.insert(i,o?o.document.mutableCopy():$e.newInvalidDocument(i))}),D.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let o=Bt();const a=t.path,c=new Z(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Lh(ay(d),s)<=0||(i.has(d.key)||ia(t,d))&&(o=o.insert(d.key,d.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(e,t,s,i){se()}Lr(e,t){return D.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new zS(this)}getSize(e){return D.resolve(this.size)}}class zS extends II{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(s)}),D.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class KS{constructor(e){this.persistence=e,this.Br=new qn(t=>us(t),ra),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zh,this.targetCount=0,this.Qr=ms.qn()}forEachTarget(e,t){return this.Br.forEach((s,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),D.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ms(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Un(t),D.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,s){let i=0;const o=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.Br.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),D.waitFor(o).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return D.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),D.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return D.resolve(s)}containsKey(e,t){return D.resolve(this.qr.containsKey(t))}}/**
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
 */class ed{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Ft(0),this.Ur=!1,this.Ur=!0,this.Wr=new $S,this.referenceDelegate=e(this),this.Gr=new KS(this),this.indexManager=new DS,this.remoteDocumentCache=function(i){return new GS(i)}(s=>this.referenceDelegate.zr(s)),this.serializer=new uI(t),this.jr=new BS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new jS(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){q("MemoryPersistence","Starting transaction:",e);const i=new HS(this.$r.next());return this.referenceDelegate.Hr(),s(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(e,t){return D.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class HS extends ly{constructor(e){super(),this.currentSequenceNumber=e}}class dl{constructor(e){this.persistence=e,this.Zr=new Zh,this.Xr=null}static ei(e){return new dl(e)}get ti(){if(this.Xr)return this.Xr;throw se()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),D.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),D.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.ti,s=>{const i=Z.fromPath(s);return this.ni(e,i).next(o=>{o||t.removeEntry(i,ue.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return D.or([()=>D.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Dc{constructor(e,t){this.persistence=e,this.ri=new qn(s=>Pt(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=yI(this,t)}static ei(e,t){return new Dc(e,t)}Hr(){}Jr(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return D.forEach(this.ri,(s,i)=>this.ir(e,s,i).next(o=>o?D.resolve():t(i)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(s++,o.removeEntry(a,ue.min()))})).next(()=>o.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),D.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),D.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sc(e.data.value)),t}ir(e,t,s){return D.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return D.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class WS{constructor(e){this.serializer=e}O(e,t,s,i){const o=new rl("createOrUpgrade",t);s<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Op,{unique:!0}),u.createObjectStore("documentMutations")}(e),wm(e),function(u){u.createObjectStore("remoteDocuments")}(e));let a=D.resolve();return s<3&&i>=3&&(s!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),wm(e)),a=a.next(()=>function(u){const h=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ue.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",d)}(o))),s<4&&i>=4&&(s!==0&&(a=a.next(()=>function(u,h){return h.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Op,{unique:!0});const p=h.store("mutations"),g=d.map(w=>p.put(w));return D.waitFor(g)})}(e,o))),a=a.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&i>=5&&(a=a.next(()=>this.ii(o))),s<6&&i>=6&&(a=a.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.si(o)))),s<7&&i>=7&&(a=a.next(()=>this.oi(o))),s<8&&i>=8&&(a=a.next(()=>this._i(e,o))),s<9&&i>=9&&(a=a.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&i>=10&&(a=a.next(()=>this.ai(o))),s<11&&i>=11&&(a=a.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&i>=12&&(a=a.next(()=>{(function(u){const h=u.createObjectStore("documentOverlays",{keyPath:DR});h.createIndex("collectionPathOverlayIndex",kR,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",VR,{unique:!1})})(e)})),s<13&&i>=13&&(a=a.next(()=>function(u){const h=u.createObjectStore("remoteDocumentsV14",{keyPath:vR});h.createIndex("documentKeyIndex",wR),h.createIndex("collectionGroupIndex",TR)}(e)).next(()=>this.ui(e,o)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&i>=14&&(a=a.next(()=>this.ci(e,o))),s<15&&i>=15&&(a=a.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:SR}).createIndex("sequenceNumberIndex",PR,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:CR}).createIndex("documentKeyIndex",xR,{unique:!1})}(e))),s<16&&i>=16&&(a=a.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),s<17&&i>=17&&(a=a.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),a}si(e){let t=0;return e.store("remoteDocuments").J((s,i)=>{t+=xc(i)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}ii(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.U().next(i=>D.forEach(i,o=>{const a=IDBKeyRange.bound([o.userId,-1],[o.userId,o.lastAcknowledgedBatchId]);return s.U("userMutationsIndex",a).next(c=>D.forEach(c,u=>{ce(u.userId===o.userId);const h=Xr(this.serializer,u);return pI(e,o.userId,h).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const o=[];return s.J((a,c)=>{const u=new Te(a),h=function(p){return[0,Pt(p)]}(u);o.push(t.get(h).next(d=>d?D.resolve():(p=>t.put({targetId:0,path:Pt(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>D.waitFor(o))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:RR});const s=t.store("collectionParents"),i=new Yh,o=a=>{if(i.add(a)){const c=a.lastSegment(),u=a.popLast();return s.put({collectionId:c,parent:Pt(u)})}};return t.store("remoteDocuments").J({H:!0},(a,c)=>{const u=new Te(a);return o(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([a,c,u],h)=>{const d=un(c);return o(d.popLast())}))}ai(e){const t=e.store("targets");return t.J((s,i)=>{const o=po(i),a=hI(this.serializer,o);return t.put(a)})}ui(e,t){const s=t.store("remoteDocuments"),i=[];return s.J((o,a)=>{const c=t.store("remoteDocumentsV14"),u=function(p){return p.document?new Z(Te.fromString(p.document.name).popFirst(5)):p.noDocument?Z.fromSegments(p.noDocument.path):p.unknownDocument?Z.fromSegments(p.unknownDocument.path):se()}(a).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(c.put(h))}).next(()=>D.waitFor(i))}ci(e,t){const s=t.store("mutations"),i=vI(this.serializer),o=new ed(dl.ei,this.serializer.ht);return s.U().next(a=>{const c=new Map;return a.forEach(u=>{var h;let d=(h=c.get(u.userId))!==null&&h!==void 0?h:Ie();Xr(this.serializer,u).keys().forEach(p=>d=d.add(p)),c.set(u.userId,d)}),D.forEach(c,(u,h)=>{const d=new ct(h),p=ul.Pt(this.serializer,d),g=o.getIndexManager(d),w=hl.Pt(d,this.serializer,g,o.referenceDelegate);return new wI(i,w,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Fu(t,Ft.oe),u).next()})})}}function wm(r){r.createObjectStore("targetDocuments",{keyPath:bR}).createIndex("documentTargetsIndex",AR,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ER,{unique:!0}),r.createObjectStore("targetGlobal")}const hu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class td{constructor(e,t,s,i,o,a,c,u,h,d,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.li=o,this.window=a,this.document=c,this.hi=h,this.Pi=d,this.Ti=p,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.Ei=null,this.di=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=g=>Promise.resolve(),!td.p())throw new B(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new MS(this,i),this.Vi=t+"main",this.serializer=new uI(u),this.mi=new pn(this.Vi,this.Ti,new WS(this.serializer)),this.Wr=new AS,this.Gr=new VS(this.referenceDelegate,this.serializer),this.remoteDocumentCache=vI(this.serializer),this.jr=new bS,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,d===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(N.FAILED_PRECONDITION,hu);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new Ft(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ka(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(Cr(e))return q("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return q("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return so(e).get("owner").next(t=>D.resolve(this.Fi(t)))}Mi(e){return Ka(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=it(t,"clientMetadata");return s.U().next(i=>{const o=this.Ni(i,18e5),a=i.filter(c=>o.indexOf(c)===-1);return D.forEach(a,c=>s.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Li(t.clientId))}}wi(){this.di=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?D.resolve(!0):so(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new B(N.FAILED_PRECONDITION,hu);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ka(e).U().next(s=>this.Ni(s,5e3).find(i=>{if(this.clientId!==i.clientId){const o=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(o||a&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&q("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.di&&(this.di.cancel(),this.di=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Fu(e,Ft.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(s=>this.Oi(s.updateTimeMs,t)&&!this.Bi(s.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Ka(e).U().next(t=>this.Ni(t,18e5).map(s=>s.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return hl.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new kS(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return ul.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,s){q("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",o=function(u){return u===17?MR:u===16?OR:u===15?Uh:u===14?my:u===13?py:u===12?NR:u===11?fy:void se()}(this.Ti);let a;return this.mi.runTransaction(e,i,o,c=>(a=new Fu(c,this.$r?this.$r.next():Ft.oe),t==="readwrite-primary"?this.bi(a).next(u=>!!u||this.Di(a)).next(u=>{if(!u)throw et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new B(N.FAILED_PRECONDITION,cy);return s(a)}).next(u=>this.Ci(a).next(()=>u)):this.Ui(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Ui(e){return so(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new B(N.FAILED_PRECONDITION,hu)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return so(e).put("owner",t)}static p(){return pn.p()}vi(e){const t=so(e);return t.get("owner").next(s=>this.Fi(s)?(q("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Oi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(et(`Detected an update time that is in the future: ${e} > ${s}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ei=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.Ei),this.inForeground=this.document.visibilityState==="visible")}qi(){this.Ei&&(this.document.removeEventListener("visibilitychange",this.Ei),this.Ei=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;b_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Bi(e){var t;try{const s=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Li(e)))!==null;return q("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return et("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Li(this.clientId),String(Date.now()))}catch(e){et("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Li(this.clientId))}catch{}}Li(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function so(r){return it(r,"owner")}function Ka(r){return it(r,"clientMetadata")}function nd(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class rd{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=i}static zi(e,t){let s=Ie(),i=Ie();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new rd(e,t.fromCache,s,i)}}/**
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
 */class QS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TI{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return b_()?8:uy(st())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,i){const o={result:null};return this.Xi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(e,t,i,s).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new QS;return this.ts(e,t,a).next(c=>{if(o.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>o.result)}ns(e,t,s,i){return s.documentReadCount<this.Ji?(qs()<=we.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",$s(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),D.resolve()):(qs()<=we.DEBUG&&q("QueryEngine","Query:",$s(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Yi*i?(qs()<=we.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",$s(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):D.resolve())}Xi(e,t){if(Wp(t))return D.resolve(null);let s=Ct(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Rc(t,null,"F"),s=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const a=Ie(...o);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.rs(t,c);return this.ss(t,h,a,u.readTime)?this.Xi(e,Rc(t,null,"F")):this.os(e,h,t,u)}))})))}es(e,t,s,i){return Wp(t)||i.isEqual(ue.min())?D.resolve(null):this.Zi.getDocuments(e,s).next(o=>{const a=this.rs(t,o);return this.ss(t,a,s,i)?D.resolve(null):(qs()<=we.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$s(t)),this.os(e,a,t,oy(i,-1)).next(c=>c))})}rs(e,t){let s=new ke(Ny(e));return t.forEach((i,o)=>{ia(e,o)&&(s=s.add(o))}),s}ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(e,t,s){return qs()<=we.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",$s(t)),this.Zi.getDocumentsMatchingQuery(e,t,Wt.min(),s)}os(e,t,s,i){return this.Zi.getDocumentsMatchingQuery(e,s,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class JS{constructor(e,t,s,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new Be(me),this.cs=new qn(o=>us(o),ra),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wI(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function EI(r,e,t,s){return new JS(r,e,t,s)}async function bI(r,e){const t=X(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(o=>(i=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(o=>{const a=[],c=[];let u=Ie();for(const h of i){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of o){c.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(s,u).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:c}))})})}function XS(r,e){const t=X(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,d){const p=h.batch,g=p.keys();let w=D.resolve();return g.forEach(P=>{w=w.next(()=>d.getEntry(u,P)).next(x=>{const S=h.docVersions.get(P);ce(S!==null),x.version.compareTo(S)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(t,s,e,o).next(()=>o.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let u=Ie();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function AI(r){const e=X(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function YS(r,e){const t=X(r),s=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const c=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;c.push(t.Gr.removeMatchingKeys(o,d.removedDocuments,p).next(()=>t.Gr.addMatchingKeys(o,d.addedDocuments,p)));let w=g.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Je.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,s)),i=i.insert(p,w),function(x,S,V){return x.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,w,d)&&c.push(t.Gr.updateTargetData(o,w))});let u=Bt(),h=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,d))}),c.push(RI(o,a,e.documentUpdates).next(d=>{u=d.Is,h=d.Es})),!s.isEqual(ue.min())){const d=t.Gr.getLastRemoteSnapshotVersion(o).next(p=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,s));c.push(d)}return D.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,u,h)).next(()=>u)}).then(o=>(t.us=i,o))}function RI(r,e,t){let s=Ie(),i=Ie();return t.forEach(o=>s=s.add(o)),e.getEntries(r,s).next(o=>{let a=Bt();return t.forEach((c,u)=>{const h=o.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Is:a,Es:i}})}function ZS(r,e){const t=X(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function fi(r,e){const t=X(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Gr.getTargetData(s,e).next(o=>o?(i=o,D.resolve(i)):t.Gr.allocateTargetId(s).next(a=>(i=new xn(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.us.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function pi(r,e,t){const s=X(r),i=s.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,a=>s.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Cr(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}s.us=s.us.remove(e),s.cs.delete(i.target)}function kc(r,e,t){const s=X(r);let i=ue.min(),o=Ie();return s.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const p=X(u),g=p.cs.get(d);return g!==void 0?D.resolve(p.us.get(g)):p.Gr.getTargetData(h,d)}(s,a,Ct(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{o=u})}).next(()=>s._s.getDocumentsMatchingQuery(a,e,t?i:ue.min(),t?o:Ie())).next(c=>(CI(s,Vy(e),c),{documents:c,ds:o})))}function SI(r,e){const t=X(r),s=X(t.Gr),i=t.us.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",o=>s.ut(o,e).next(a=>a?a.target:null))}function PI(r,e){const t=X(r),s=t.ls.get(e)||ue.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.hs.getAllFromCollectionGroup(i,e,oy(s,-1),Number.MAX_SAFE_INTEGER)).then(i=>(CI(t,e,i),i))}function CI(r,e,t){let s=r.ls.get(e)||ue.min();t.forEach((i,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),r.ls.set(e,s)}async function eP(r,e,t,s){const i=X(r);let o=Ie(),a=Bt();for(const h of t){const d=e.As(h.metadata.name);h.document&&(o=o.add(d));const p=e.Rs(h);p.setReadTime(e.Vs(h.metadata.readTime)),a=a.insert(d,p)}const c=i.hs.newChangeBuffer({trackRemovals:!0}),u=await fi(i,function(d){return Ct(Ai(Te.fromString(`__bundle__/docs/${d}`)))}(s));return i.persistence.runTransaction("Apply bundle documents","readwrite",h=>RI(h,c,a).next(d=>(c.apply(h),d)).next(d=>i.Gr.removeMatchingKeysForTargetId(h,u.targetId).next(()=>i.Gr.addMatchingKeys(h,o,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(h,d.Is,d.Es)).next(()=>d.Is)))}async function tP(r,e,t=Ie()){const s=await fi(r,Ct(Jh(e.bundledQuery))),i=X(r);return i.persistence.runTransaction("Save named query","readwrite",o=>{const a=tt(e.readTime);if(s.snapshotVersion.compareTo(a)>=0)return i.jr.saveNamedQuery(o,e);const c=s.withResumeToken(Je.EMPTY_BYTE_STRING,a);return i.us=i.us.insert(c.targetId,c),i.Gr.updateTargetData(o,c).next(()=>i.Gr.removeMatchingKeysForTargetId(o,s.targetId)).next(()=>i.Gr.addMatchingKeys(o,t,s.targetId)).next(()=>i.jr.saveNamedQuery(o,e))})}function Tm(r,e){return`firestore_clients_${r}_${e}`}function Em(r,e,t){let s=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function du(r,e){return`firestore_targets_${r}_${e}`}class Vc{constructor(e,t,s,i){this.user=e,this.batchId=t,this.state=s,this.error=i}static fs(e,t,s){const i=JSON.parse(s);let o,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(o=new B(i.error.code,i.error.message))),a?new Vc(e,t,i.state,o):(et("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class So{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static fs(e,t){const s=JSON.parse(t);let i,o=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new B(s.error.code,s.error.message))),o?new So(e,s.state,i):(et("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Nc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static fs(e,t){const s=JSON.parse(t);let i=typeof s=="object"&&s.activeTargetIds instanceof Array,o=$h();for(let a=0;i&&a<s.activeTargetIds.length;++a)i=hy(s.activeTargetIds[a]),o=o.add(s.activeTargetIds[a]);return i?new Nc(e,o):(et("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class sd{constructor(e,t){this.clientId=e,this.onlineState=t}static fs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new sd(t.clientId,t.onlineState):(et("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Yu{constructor(){this.activeTargetIds=$h()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fu{constructor(e,t,s,i,o){this.window=e,this.li=t,this.persistenceKey=s,this.ws=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ss=this.bs.bind(this),this.Ds=new Be(me),this.started=!1,this.vs=[];const a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Cs=Tm(this.persistenceKey,this.ws),this.Fs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ds=this.Ds.insert(this.ws,new Yu),this.Ms=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.xs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Os=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.Ns=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Ls=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ss)}static p(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const s of e){if(s===this.ws)continue;const i=this.getItem(Tm(this.persistenceKey,s));if(i){const o=Nc.fs(s,i);o&&(this.Ds=this.Ds.insert(o.clientId,o))}}this.Bs();const t=this.storage.getItem(this.Ns);if(t){const s=this.ks(t);s&&this.qs(s)}for(const s of this.vs)this.bs(s);this.vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Qs(this.Ds)}isActiveQueryTarget(e){let t=!1;return this.Ds.forEach((s,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ks(e,"pending")}updateMutationState(e,t,s){this.Ks(e,t,s),this.$s(e)}addLocalQueryTarget(e,t=!0){let s="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(du(this.persistenceKey,e));if(i){const o=So.fs(e,i);o&&(s=o.state)}}return t&&this.Us.ps(e),this.Bs(),s}removeLocalQueryTarget(e){this.Us.ys(e),this.Bs()}isLocalQueryTarget(e){return this.Us.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(du(this.persistenceKey,e))}updateQueryState(e,t,s){this.Ws(e,t,s)}handleUserChange(e,t,s){t.forEach(i=>{this.$s(i)}),this.currentUser=e,s.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Gs(e)}notifyBundleLoaded(e){this.zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ss),this.removeItem(this.Cs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return q("SharedClientState","READ",e,t),t}setItem(e,t){q("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){q("SharedClientState","REMOVE",e),this.storage.removeItem(e)}bs(e){const t=e;if(t.storageArea===this.storage){if(q("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Cs)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.li.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ms.test(t.key)){if(t.newValue==null){const s=this.js(t.key);return this.Hs(s,null)}{const s=this.Js(t.key,t.newValue);if(s)return this.Hs(s.clientId,s)}}else if(this.xs.test(t.key)){if(t.newValue!==null){const s=this.Ys(t.key,t.newValue);if(s)return this.Zs(s)}}else if(this.Os.test(t.key)){if(t.newValue!==null){const s=this.Xs(t.key,t.newValue);if(s)return this.eo(s)}}else if(t.key===this.Ns){if(t.newValue!==null){const s=this.ks(t.newValue);if(s)return this.qs(s)}}else if(t.key===this.Fs){const s=function(o){let a=Ft.oe;if(o!=null)try{const c=JSON.parse(o);ce(typeof c=="number"),a=c}catch(c){et("SharedClientState","Failed to read sequence number from WebStorage",c)}return a}(t.newValue);s!==Ft.oe&&this.sequenceNumberHandler(s)}else if(t.key===this.Ls){const s=this.no(t.newValue);await Promise.all(s.map(i=>this.syncEngine.ro(i)))}}}else this.vs.push(t)})}}get Us(){return this.Ds.get(this.ws)}Bs(){this.setItem(this.Cs,this.Us.gs())}Ks(e,t,s){const i=new Vc(this.currentUser,e,t,s),o=Em(this.persistenceKey,this.currentUser,e);this.setItem(o,i.gs())}$s(e){const t=Em(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Gs(e){const t={clientId:this.ws,onlineState:e};this.storage.setItem(this.Ns,JSON.stringify(t))}Ws(e,t,s){const i=du(this.persistenceKey,e),o=new So(e,t,s);this.setItem(i,o.gs())}zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ls,t)}js(e){const t=this.Ms.exec(e);return t?t[1]:null}Js(e,t){const s=this.js(e);return Nc.fs(s,t)}Ys(e,t){const s=this.xs.exec(e),i=Number(s[1]),o=s[2]!==void 0?s[2]:null;return Vc.fs(new ct(o),i,t)}Xs(e,t){const s=this.Os.exec(e),i=Number(s[1]);return So.fs(i,t)}ks(e){return sd.fs(e)}no(e){return JSON.parse(e)}async Zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.io(e.batchId,e.state,e.error);q("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}eo(e){return this.syncEngine.so(e.targetId,e.state,e.error)}Hs(e,t){const s=t?this.Ds.insert(e,t):this.Ds.remove(e),i=this.Qs(this.Ds),o=this.Qs(s),a=[],c=[];return o.forEach(u=>{i.has(u)||a.push(u)}),i.forEach(u=>{o.has(u)||c.push(u)}),this.syncEngine.oo(a,c).then(()=>{this.Ds=s})}qs(e){this.Ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Qs(e){let t=$h();return e.forEach((s,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class xI{constructor(){this._o=new Yu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Yu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nP{uo(e){}shutdown(){}}/**
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
 */class bm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ha=null;function pu(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
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
 */const rP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Tt="WebChannelConnection";class iP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(t,s,i,o,a){const c=pu(),u=this.No(t,s.toUriEncodedString());q("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,o,a),this.Bo(t,u,h,i).then(d=>(q("RestConnection",`Received RPC '${t}' ${c}: `,d),d),d=>{throw Ht("RestConnection",`RPC '${t}' ${c} failed with error: `,d,"url: ",u,"request:",i),d})}ko(t,s,i,o,a,c){return this.Oo(t,s,i,o,a)}Lo(t,s,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}No(t,s){const i=rP[t];return`${this.Fo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,i){const o=pu();return new Promise((a,c)=>{const u=new X_;u.setWithCredentials(!0),u.listenOnce(Y_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case tc.NO_ERROR:const d=u.getResponseJson();q(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case tc.TIMEOUT:q(Tt,`RPC '${e}' ${o} timed out`),c(new B(N.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const p=u.getStatus();if(q(Tt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const P=function(S){const V=S.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(V)>=0?V:N.UNKNOWN}(w.status);c(new B(P,w.message))}else c(new B(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(N.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{q(Tt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);q(Tt,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",h,s,15)})}qo(e,t,s){const i=pu(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ty(),c=ey(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const d=o.join("");q(Tt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=a.createWebChannel(d,u);let g=!1,w=!1;const P=new sP({Eo:S=>{w?q(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(g||(q(Tt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),q(Tt,`RPC '${e}' stream ${i} sending:`,S),p.send(S))},Ao:()=>p.close()}),x=(S,V,L)=>{S.listen(V,F=>{try{L(F)}catch(U){setTimeout(()=>{throw U},0)}})};return x(p,uo.EventType.OPEN,()=>{w||(q(Tt,`RPC '${e}' stream ${i} transport opened.`),P.So())}),x(p,uo.EventType.CLOSE,()=>{w||(w=!0,q(Tt,`RPC '${e}' stream ${i} transport closed`),P.Do())}),x(p,uo.EventType.ERROR,S=>{w||(w=!0,Ht(Tt,`RPC '${e}' stream ${i} transport errored:`,S),P.Do(new B(N.UNAVAILABLE,"The operation could not be completed")))}),x(p,uo.EventType.MESSAGE,S=>{var V;if(!w){const L=S.data[0];ce(!!L);const F=L,U=(F==null?void 0:F.error)||((V=F[0])===null||V===void 0?void 0:V.error);if(U){q(Tt,`RPC '${e}' stream ${i} received error:`,U);const ee=U.status;let ne=function(b){const _=nt[b];if(_!==void 0)return Wy(_)}(ee),R=U.message;ne===void 0&&(ne=N.INTERNAL,R="Unknown error status: "+ee+" with message "+U.message),w=!0,P.Do(new B(ne,R)),p.close()}else q(Tt,`RPC '${e}' stream ${i} received:`,L),P.vo(L)}}),x(c,Z_.STAT_EVENT,S=>{S.stat===Mu.PROXY?q(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Mu.NOPROXY&&q(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}/**
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
 *//**
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
 */function DI(){return typeof window<"u"?window:null}function cc(){return typeof document<"u"?document:null}/**
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
 */function la(r){return new fS(r,!0)}/**
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
 */class id{constructor(e,t,s=1e3,i=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-s);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class kI{constructor(e,t,s,i,o,a,c,u){this.li=e,this.Yo=s,this.Zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new id(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Xo===t&&this.I_(s,i)},s=>{e(()=>{const i=new B(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(i)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{s(()=>this.E_(i))}),this.stream.onMessage(i=>{s(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oP extends kI{constructor(e,t,s,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,a),this.serializer=o}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=gS(this.serializer,e),s=function(o){if(!("targetChange"in o))return ue.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?tt(a.readTime):ue.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Hu(this.serializer),t.addTarget=function(o,a){let c;const u=a.target;if(c=bc(u)?{documents:sI(o,u)}:{query:ll(o,u).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Yy(o,a.resumeToken);const h=zu(o,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){c.readTime=di(o,a.snapshotVersion.toTimestamp());const h=zu(o,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const s=yS(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Hu(this.serializer),t.removeTarget=e,this.c_(t)}}class aP extends kI{constructor(e,t,s,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=_S(e.writeResults,e.commitTime),s=tt(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Hu(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ko(this.serializer,s))};this.c_(t)}}/**
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
 */class cP extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new B(N.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(e,Ku(t,s),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(N.UNKNOWN,o.toString())})}ko(e,t,s,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Ku(t,s),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(N.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class lP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(et(t),this.C_=!1):q("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class uP{constructor(e,t,s,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{s.enqueueAndForget(async()=>{Dr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.k_.add(4),await Pi(h),h.K_.set("Unknown"),h.k_.delete(4),await ua(h)}(this))})}),this.K_=new lP(s,i)}}async function ua(r){if(Dr(r))for(const e of r.q_)await e(!0)}async function Pi(r){for(const e of r.q_)await e(!1)}function fl(r,e){const t=X(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),cd(t)?ad(t):xi(t).s_()&&od(t,e))}function mi(r,e){const t=X(r),s=xi(t);t.B_.delete(e),s.s_()&&VI(t,e),t.B_.size===0&&(s.s_()?s.a_():Dr(t)&&t.K_.set("Unknown"))}function od(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xi(r).V_(e)}function VI(r,e){r.U_.xe(e),xi(r).m_(e)}function ad(r){r.U_=new lS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),xi(r).start(),r.K_.F_()}function cd(r){return Dr(r)&&!xi(r).i_()&&r.B_.size>0}function Dr(r){return X(r).k_.size===0}function NI(r){r.U_=void 0}async function hP(r){r.K_.set("Online")}async function dP(r){r.B_.forEach((e,t)=>{od(r,e)})}async function fP(r,e){NI(r),cd(r)?(r.K_.O_(e),ad(r)):r.K_.set("Unknown")}async function pP(r,e,t){if(r.K_.set("Online"),e instanceof Xy&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(r,e)}catch(s){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Oc(r,s)}else if(e instanceof ac?r.U_.$e(e):e instanceof Jy?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(ue.min()))try{const s=await AI(r.localStore);t.compareTo(s)>=0&&await function(o,a){const c=o.U_.it(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=o.B_.get(h);d&&o.B_.set(h,d.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const d=o.B_.get(u);if(!d)return;o.B_.set(u,d.withResumeToken(Je.EMPTY_BYTE_STRING,d.snapshotVersion)),VI(o,u);const p=new xn(d.target,u,h,d.sequenceNumber);od(o,p)}),o.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(s){q("RemoteStore","Failed to raise snapshot:",s),await Oc(r,s)}}async function Oc(r,e,t){if(!Cr(e))throw e;r.k_.add(1),await Pi(r),r.K_.set("Offline"),t||(t=()=>AI(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await ua(r)})}function OI(r,e){return e().catch(t=>Oc(r,t,e))}async function Ci(r){const e=X(r),t=Tr(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;mP(e);)try{const i=await ZS(e.localStore,s);if(i===null){e.L_.length===0&&t.a_();break}s=i.batchId,gP(e,i)}catch(i){await Oc(e,i)}MI(e)&&LI(e)}function mP(r){return Dr(r)&&r.L_.length<10}function gP(r,e){r.L_.push(e);const t=Tr(r);t.s_()&&t.f_&&t.g_(e.mutations)}function MI(r){return Dr(r)&&!Tr(r).i_()&&r.L_.length>0}function LI(r){Tr(r).start()}async function _P(r){Tr(r).w_()}async function yP(r){const e=Tr(r);for(const t of r.L_)e.g_(t.mutations)}async function IP(r,e,t){const s=r.L_.shift(),i=Kh.from(s,e,t);await OI(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Ci(r)}async function vP(r,e){e&&Tr(r).f_&&await async function(s,i){if(function(a){return Hy(a)&&a!==N.ABORTED}(i.code)){const o=s.L_.shift();Tr(s).__(),await OI(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ci(s)}}(r,e),MI(r)&&LI(r)}async function Am(r,e){const t=X(r);t.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const s=Dr(t);t.k_.add(3),await Pi(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ua(t)}async function Zu(r,e){const t=X(r);e?(t.k_.delete(2),await ua(t)):e||(t.k_.add(2),await Pi(t),t.K_.set("Unknown"))}function xi(r){return r.W_||(r.W_=function(t,s,i){const o=X(t);return o.b_(),new oP(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:hP.bind(null,r),mo:dP.bind(null,r),po:fP.bind(null,r),R_:pP.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),cd(r)?ad(r):r.K_.set("Unknown")):(await r.W_.stop(),NI(r))})),r.W_}function Tr(r){return r.G_||(r.G_=function(t,s,i){const o=X(t);return o.b_(),new aP(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:_P.bind(null,r),po:vP.bind(null,r),p_:yP.bind(null,r),y_:IP.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Ci(r)):(await r.G_.stop(),r.L_.length>0&&(q("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
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
 */class ld{constructor(e,t,s,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,o){const a=Date.now()+s,c=new ld(e,t,a,i,o);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Di(r,e){if(et("AsyncQueue",`${e}: ${r}`),Cr(r))return new B(N.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Ys{static emptySet(e){return new Ys(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Z.comparator(t.key,s.key):(t,s)=>Z.comparator(t.key,s.key),this.keyedMap=ho(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=s.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ys;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Rm{constructor(){this.z_=new Be(Z.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):se():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class gi{constructor(e,t,s,i,o,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,i,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new gi(e,t,Ys.emptySet(t),a,s,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class wP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class TP{constructor(){this.queries=Sm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const i=X(t),o=i.queries;i.queries=Sm(),o.forEach((a,c)=>{for(const u of c.J_)u.onError(s)})})(this,new B(N.ABORTED,"Firestore shutting down"))}}function Sm(){return new qn(r=>ky(r),sa)}async function ud(r,e){const t=X(r);let s=3;const i=e.query;let o=t.queries.get(i);o?!o.Y_()&&e.Z_()&&(s=2):(o=new wP,s=e.Z_()?0:1);try{switch(s){case 0:o.H_=await t.onListen(i,!0);break;case 1:o.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Di(a,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&dd(t)}async function hd(r,e){const t=X(r),s=e.query;let i=3;const o=t.queries.get(s);if(o){const a=o.J_.indexOf(e);a>=0&&(o.J_.splice(a,1),o.J_.length===0?i=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function EP(r,e){const t=X(r);let s=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const c of a.J_)c.ta(i)&&(s=!0);a.H_=i}}s&&dd(t)}function bP(r,e,t){const s=X(r),i=s.queries.get(e);if(i)for(const o of i.J_)o.onError(t);s.queries.delete(e)}function dd(r){r.X_.forEach(e=>{e.next()})}var eh,Pm;(Pm=eh||(eh={})).na="default",Pm.Cache="cache";class fd{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new gi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==eh.Cache}}/**
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
 */class AP{constructor(e,t){this.ca=e,this.byteLength=t}la(){return"metadata"in this.ca}}/**
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
 */class Cm{constructor(e){this.serializer=e}As(e){return mn(this.serializer,e)}Rs(e){return e.metadata.exists?rI(this.serializer,e.document,!1):$e.newNoDocument(this.As(e.metadata.name),this.Vs(e.metadata.readTime))}Vs(e){return tt(e)}}class RP{constructor(e,t,s){this.ha=e,this.localStore=t,this.serializer=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=FI(e)}Pa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ca.namedQuery)this.queries.push(e.ca.namedQuery);else if(e.ca.documentMetadata){this.documents.push({metadata:e.ca.documentMetadata}),e.ca.documentMetadata.exists||++t;const s=Te.fromString(e.ca.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ca.document&&(this.documents[this.documents.length-1].document=e.ca.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ta(e){const t=new Map,s=new Cm(this.serializer);for(const i of e)if(i.metadata.queries){const o=s.As(i.metadata.name);for(const a of i.metadata.queries){const c=(t.get(a)||Ie()).add(o);t.set(a,c)}}return t}async complete(){const e=await eP(this.localStore,new Cm(this.serializer),this.documents,this.ha.id),t=this.Ta(this.documents);for(const s of this.queries)await tP(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ia:this.collectionGroups,Ea:e}}}function FI(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class UI{constructor(e){this.key=e}}class BI{constructor(e){this.key=e}}class qI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ie(),this.mutatedKeys=Ie(),this.Va=Ny(e),this.ma=new Ys(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Rm,i=t?t.ma:this.ma;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),w=ia(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),x=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let S=!1;g&&w?g.data.isEqual(w.data)?P!==x&&(s.track({type:3,doc:w}),S=!0):this.ya(g,w)||(s.track({type:2,doc:w}),S=!0,(u&&this.Va(w,u)>0||h&&this.Va(w,h)<0)&&(c=!0)):!g&&w?(s.track({type:0,doc:w}),S=!0):g&&!w&&(s.track({type:1,doc:g}),S=!0,(u||h)&&(c=!0)),S&&(w?(a=a.add(w),o=x?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),s.track({type:1,doc:d})}return{ma:a,pa:s,ss:c,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((d,p)=>function(w,P){const x=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return x(w)-x(P)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(s),i=i!=null&&i;const c=t&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,h=u!==this.Aa;return this.Aa=u,a.length!==0||h?{snapshot:new gi(this.query,e.ma,o,a,e.mutatedKeys,u===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Rm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ie(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new BI(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new UI(s))}),t}va(e){this.da=e.ds,this.Ra=Ie();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return gi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class SP{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class PP{constructor(e){this.key=e,this.Fa=!1}}class CP{constructor(e,t,s,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new qn(c=>ky(c),sa),this.Oa=new Map,this.Na=new Set,this.La=new Be(Z.comparator),this.Ba=new Map,this.ka=new Zh,this.qa={},this.Qa=new Map,this.Ka=ms.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xP(r,e,t=!0){const s=pl(r);let i;const o=s.xa.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await $I(s,e,t,!0),i}async function DP(r,e){const t=pl(r);await $I(t,e,!0,!1)}async function $I(r,e,t,s){const i=await fi(r.localStore,Ct(e)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,t);let c;return s&&(c=await pd(r,e,o,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&fl(r.remoteStore,i),c}async function pd(r,e,t,s,i){r.Ua=(p,g,w)=>async function(x,S,V,L){let F=S.view.ga(V);F.ss&&(F=await kc(x.localStore,S.query,!1).then(({documents:R})=>S.view.ga(R,F)));const U=L&&L.targetChanges.get(S.targetId),ee=L&&L.targetMismatches.get(S.targetId)!=null,ne=S.view.applyChanges(F,x.isPrimaryClient,U,ee);return th(x,S.targetId,ne.ba),ne.snapshot}(r,p,g,w);const o=await kc(r.localStore,e,!0),a=new qI(e,o.ds),c=a.ga(o.documents),u=ca.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",i),h=a.applyChanges(c,r.isPrimaryClient,u);th(r,t,h.ba);const d=new SP(e,t,a);return r.xa.set(e,d),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),h.snapshot}async function kP(r,e,t){const s=X(r),i=s.xa.get(e),o=s.Oa.get(i.targetId);if(o.length>1)return s.Oa.set(i.targetId,o.filter(a=>!sa(a,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await pi(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&mi(s.remoteStore,i.targetId),_i(s,i.targetId)}).catch(Pr)):(_i(s,i.targetId),await pi(s.localStore,i.targetId,!0))}async function VP(r,e){const t=X(r),s=t.xa.get(e),i=t.Oa.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),mi(t.remoteStore,s.targetId))}async function NP(r,e,t){const s=yd(r);try{const i=await function(a,c){const u=X(a),h=He.now(),d=c.reduce((w,P)=>w.add(P.key),Ie());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Bt(),x=Ie();return u.hs.getEntries(w,d).next(S=>{P=S,P.forEach((V,L)=>{L.isValidDocument()||(x=x.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,P)).next(S=>{p=S;const V=[];for(const L of c){const F=oS(L,p.get(L.key).overlayedDocument);F!=null&&V.push(new $n(L.key,F,wy(F.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(w,h,V,c)}).next(S=>{g=S;const V=S.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(w,S.batchId,V)})}).then(()=>({batchId:g.batchId,changes:My(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let h=a.qa[a.currentUser.toKey()];h||(h=new Be(me)),h=h.insert(c,u),a.qa[a.currentUser.toKey()]=h}(s,i.batchId,t),await jn(s,i.changes),await Ci(s.remoteStore)}catch(i){const o=Di(i,"Failed to persist write");t.reject(o)}}async function jI(r,e){const t=X(r);try{const s=await YS(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Ba.get(o);a&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?ce(a.Fa):i.removedDocuments.size>0&&(ce(a.Fa),a.Fa=!1))}),await jn(t,s,e)}catch(s){await Pr(s)}}function xm(r,e,t){const s=X(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.xa.forEach((o,a)=>{const c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=X(a);u.onlineState=c;let h=!1;u.queries.forEach((d,p)=>{for(const g of p.J_)g.ea(c)&&(h=!0)}),h&&dd(u)}(s.eventManager,e),i.length&&s.Ma.R_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function OP(r,e,t){const s=X(r);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Ba.get(e),o=i&&i.key;if(o){let a=new Be(Z.comparator);a=a.insert(o,$e.newNoDocument(o,ue.min()));const c=Ie().add(o),u=new aa(ue.min(),new Map,new Be(me),a,c);await jI(s,u),s.La=s.La.remove(o),s.Ba.delete(e),_d(s)}else await pi(s.localStore,e,!1).then(()=>_i(s,e,t)).catch(Pr)}async function MP(r,e){const t=X(r),s=e.batch.batchId;try{const i=await XS(t.localStore,e);gd(t,s,null),md(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await jn(t,i)}catch(i){await Pr(i)}}async function LP(r,e,t){const s=X(r);try{const i=await function(a,c){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,c).next(p=>(ce(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(s.localStore,e);gd(s,e,t),md(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await jn(s,i)}catch(i){await Pr(i)}}async function FP(r,e){const t=X(r);Dr(t.remoteStore)||q("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(a){const c=X(a);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(s===-1)return void e.resolve();const i=t.Qa.get(s)||[];i.push(e),t.Qa.set(s,i)}catch(s){const i=Di(s,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function md(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function gd(r,e,t){const s=X(r);let i=s.qa[s.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),s.qa[s.currentUser.toKey()]=i}}function _i(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),t&&r.Ma.Wa(s,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||GI(r,s)})}function GI(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(mi(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),_d(r))}function th(r,e,t){for(const s of t)s instanceof UI?(r.ka.addReference(s.key,e),UP(r,s)):s instanceof BI?(q("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||GI(r,s.key)):se()}function UP(r,e){const t=e.key,s=t.path.canonicalString();r.La.get(t)||r.Na.has(s)||(q("SyncEngine","New document in limbo: "+t),r.Na.add(s),_d(r))}function _d(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new Z(Te.fromString(e)),s=r.Ka.next();r.Ba.set(s,new PP(t)),r.La=r.La.insert(t,s),fl(r.remoteStore,new xn(Ct(Ai(t.path)),s,"TargetPurposeLimboResolution",Ft.oe))}}async function jn(r,e,t){const s=X(r),i=[],o=[],a=[];s.xa.isEmpty()||(s.xa.forEach((c,u)=>{a.push(s.Ua(u,e,t).then(h=>{var d;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=rd.zi(u.targetId,h);o.push(p)}}))}),await Promise.all(a),s.Ma.R_(i),await async function(u,h){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>D.forEach(h,g=>D.forEach(g.Wi,w=>d.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>D.forEach(g.Gi,w=>d.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!Cr(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const w=d.us.get(g),P=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(P);d.us=d.us.insert(g,x)}}}(s.localStore,o))}async function BP(r,e){const t=X(r);if(!t.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const s=await bI(t.localStore,e);t.currentUser=e,function(o,a){o.Qa.forEach(c=>{c.forEach(u=>{u.reject(new B(N.CANCELLED,a))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await jn(t,s.Ts)}}function qP(r,e){const t=X(r),s=t.Ba.get(e);if(s&&s.Fa)return Ie().add(s.key);{let i=Ie();const o=t.Oa.get(e);if(!o)return i;for(const a of o){const c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}async function $P(r,e){const t=X(r),s=await kc(t.localStore,e.query,!0),i=e.view.va(s);return t.isPrimaryClient&&th(t,e.targetId,i.ba),i}async function jP(r,e){const t=X(r);return PI(t.localStore,e).then(s=>jn(t,s))}async function GP(r,e,t,s){const i=X(r),o=await function(c,u){const h=X(c),d=X(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>d.On(p,u).next(g=>g?h.localDocuments.getDocuments(p,g):D.resolve(null)))}(i.localStore,e);o!==null?(t==="pending"?await Ci(i.remoteStore):t==="acknowledged"||t==="rejected"?(gd(i,e,s||null),md(i,e),function(c,u){X(X(c).mutationQueue).Ln(u)}(i.localStore,e)):se(),await jn(i,o)):q("SyncEngine","Cannot apply mutation batch with id: "+e)}async function zP(r,e){const t=X(r);if(pl(t),yd(t),e===!0&&t.$a!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),i=await Dm(t,s.toArray());t.$a=!0,await Zu(t.remoteStore,!0);for(const o of i)fl(t.remoteStore,o)}else if(e===!1&&t.$a!==!1){const s=[];let i=Promise.resolve();t.Oa.forEach((o,a)=>{t.sharedClientState.isLocalQueryTarget(a)?s.push(a):i=i.then(()=>(_i(t,a),pi(t.localStore,a,!0))),mi(t.remoteStore,a)}),await i,await Dm(t,s),function(a){const c=X(a);c.Ba.forEach((u,h)=>{mi(c.remoteStore,h)}),c.ka.wr(),c.Ba=new Map,c.La=new Be(Z.comparator)}(t),t.$a=!1,await Zu(t.remoteStore,!1)}}async function Dm(r,e,t){const s=X(r),i=[],o=[];for(const a of e){let c;const u=s.Oa.get(a);if(u&&u.length!==0){c=await fi(s.localStore,Ct(u[0]));for(const h of u){const d=s.xa.get(h),p=await $P(s,d);p.snapshot&&o.push(p.snapshot)}}else{const h=await SI(s.localStore,a);c=await fi(s.localStore,h),await pd(s,zI(h),a,!1,c.resumeToken)}i.push(c)}return s.Ma.R_(o),i}function zI(r){return Cy(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function KP(r){return function(t){return X(X(t).persistence).$i()}(X(r).localStore)}async function HP(r,e,t,s){const i=X(r);if(i.$a)return void q("SyncEngine","Ignoring unexpected query state notification.");const o=i.Oa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const a=await PI(i.localStore,Vy(o[0])),c=aa.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Je.EMPTY_BYTE_STRING);await jn(i,a,c);break}case"rejected":await pi(i.localStore,e,!0),_i(i,e,s);break;default:se()}}async function WP(r,e,t){const s=pl(r);if(s.$a){for(const i of e){if(s.Oa.has(i)&&s.sharedClientState.isActiveQueryTarget(i)){q("SyncEngine","Adding an already active target "+i);continue}const o=await SI(s.localStore,i),a=await fi(s.localStore,o);await pd(s,zI(o),a.targetId,!1,a.resumeToken),fl(s.remoteStore,a)}for(const i of t)s.Oa.has(i)&&await pi(s.localStore,i,!1).then(()=>{mi(s.remoteStore,i),_i(s,i)}).catch(Pr)}}function pl(r){const e=X(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=jI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OP.bind(null,e),e.Ma.R_=EP.bind(null,e.eventManager),e.Ma.Wa=bP.bind(null,e.eventManager),e}function yd(r){const e=X(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LP.bind(null,e),e}function QP(r,e,t){const s=X(r);(async function(o,a,c){try{const u=await a.getMetadata();if(await function(w,P){const x=X(w),S=tt(P.createTime);return x.persistence.runTransaction("hasNewerBundle","readonly",V=>x.jr.getBundleMetadata(V,P.id)).then(V=>!!V&&V.createTime.compareTo(S)>=0)}(o.localStore,u))return await a.close(),c._completeWith(function(w){return{taskState:"Success",documentsLoaded:w.totalDocuments,bytesLoaded:w.totalBytes,totalDocuments:w.totalDocuments,totalBytes:w.totalBytes}}(u)),Promise.resolve(new Set);c._updateProgress(FI(u));const h=new RP(u,o.localStore,a.serializer);let d=await a.Ga();for(;d;){const g=await h.Pa(d);g&&c._updateProgress(g),d=await a.Ga()}const p=await h.complete();return await jn(o,p.Ea,void 0),await function(w,P){const x=X(w);return x.persistence.runTransaction("Save bundle","readwrite",S=>x.jr.saveBundleMetadata(S,P))}(o.localStore,u),c._completeWith(p.progress),Promise.resolve(p.Ia)}catch(u){return Ht("SyncEngine",`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(s,e,t).then(i=>{s.sharedClientState.notifyBundleLoaded(i)})}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=la(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return EI(this.persistence,new TI,e.initialUser,this.serializer)}ja(e){return new ed(dl.ei,this.serializer)}za(e){return new xI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class Id extends yi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ce(this.persistence.referenceDelegate instanceof Dc);const s=this.persistence.referenceDelegate.garbageCollector;return new _I(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new ed(s=>Dc.ei(s,t),this.serializer)}}class vd extends yi{constructor(e,t,s){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await yd(this.Za.syncEngine),await Ci(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return EI(this.persistence,new TI,e.initialUser,this.serializer)}Ja(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new _I(s,e.asyncQueue,t)}Ya(e,t){const s=new _R(t,this.persistence);return new gR(e.asyncQueue,s)}ja(e){const t=nd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new td(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,DI(),cc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new xI}}class KI extends vd{constructor(e,t){super(e,t,!1),this.Za=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Za.syncEngine;this.sharedClientState instanceof fu&&(this.sharedClientState.syncEngine={io:GP.bind(null,t),so:HP.bind(null,t),oo:WP.bind(null,t),$i:KP.bind(null,t),ro:jP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Si(async s=>{await zP(this.Za.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}za(e){const t=DI();if(!fu.p(t))throw new B(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=nd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new fu(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class Er{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BP.bind(null,this.syncEngine),await Zu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TP}()}createDatastore(e){const t=la(e.databaseInfo.databaseId),s=function(o){return new iP(o)}(e.databaseInfo);return function(o,a,c,u){return new cP(o,a,c,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,o,a,c){return new uP(s,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>xm(this.syncEngine,t,0),function(){return bm.p()?new bm:new nP}())}createSyncEngine(e,t){return function(i,o,a,c,u,h,d){const p=new CP(i,o,a,c,u,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=X(i);q("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Pi(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Er.provider={build:()=>new Er};function km(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const s={value:r.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class ml{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class JP{constructor(e,t){this.tu=e,this.serializer=t,this.metadata=new lt,this.buffer=new Uint8Array,this.nu=function(){return new TextDecoder("utf-8")}(),this.ru().then(s=>{s&&s.la()?this.metadata.resolve(s.ca.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ca)}`))},s=>this.metadata.reject(s))}close(){return this.tu.cancel()}async getMetadata(){return this.metadata.promise}async Ga(){return await this.getMetadata(),this.ru()}async ru(){const e=await this.iu();if(e===null)return null;const t=this.nu.decode(e),s=Number(t);isNaN(s)&&this.su(`length string (${t}) is not valid number`);const i=await this.ou(s);return new AP(JSON.parse(i),e.length+s)}_u(){return this.buffer.findIndex(e=>e===123)}async iu(){for(;this._u()<0&&!await this.au(););if(this.buffer.length===0)return null;const e=this._u();e<0&&this.su("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ou(e){for(;this.buffer.length<e;)await this.au()&&this.su("Reached the end of bundle when more is expected.");const t=this.nu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}su(e){throw this.tu.cancel(),new Error(`Invalid bundle format: ${e}`)}async au(){const e=await this.tu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class XP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(N.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,o){const a=X(i),c={documents:o.map(p=>zo(a.serializer,p))},u=await a.ko("BatchGetDocuments",a.serializer.databaseId,Te.emptyPath(),c,o.length),h=new Map;u.forEach(p=>{const g=mS(a.serializer,p);h.set(g.key.toString(),g)});const d=[];return o.forEach(p=>{const g=h.get(p.toString());ce(!!g),d.push(g)}),d}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Si(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const i=Z.fromPath(s);this.mutations.push(new Gh(i,this.precondition(i)))}),await async function(s,i){const o=X(s),a={writes:i.map(c=>Ko(o.serializer,c))};await o.Oo("Commit",o.serializer.databaseId,Te.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw se();t=ue.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new B(N.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ue.min())?Ke.exists(!1):Ke.updateTime(t):Ke.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ue.min()))throw new B(N.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ke.updateTime(t)}return Ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class YP{constructor(e,t,s,i,o){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=i,this.deferred=o,this.uu=s.maxAttempts,this.r_=new id(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const e=new XP(this.datastore),t=this.hu(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Pu(i)}))}).catch(s=>{this.Pu(s)})})}hu(e){try{const t=this.updateFunction(e);return!na(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Hy(t)}return!1}}/**
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
 */class ZP{constructor(e,t,s,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Mh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Di(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function mu(r,e){r.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async i=>{s.isEqual(i)||(await bI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Vm(r,e){r.asyncQueue.verifyOperationInProgress();const t=await wd(r);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Am(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,i)=>Am(e.remoteStore,i)),r._onlineComponents=e}async function wd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await mu(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ht("Error using user provided cache. Falling back to memory cache: "+t),await mu(r,new yi)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await mu(r,new Id(void 0));return r._offlineComponents}async function gl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Vm(r,r._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Vm(r,new Er))),r._onlineComponents}function HI(r){return wd(r).then(e=>e.persistence)}function ki(r){return wd(r).then(e=>e.localStore)}function WI(r){return gl(r).then(e=>e.remoteStore)}function Td(r){return gl(r).then(e=>e.syncEngine)}function QI(r){return gl(r).then(e=>e.datastore)}async function Ii(r){const e=await gl(r),t=e.eventManager;return t.onListen=xP.bind(null,e.syncEngine),t.onUnlisten=kP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=DP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VP.bind(null,e.syncEngine),t}function eC(r){return r.asyncQueue.enqueue(async()=>{const e=await HI(r),t=await WI(r);return e.setNetworkEnabled(!0),function(i){const o=X(i);return o.k_.delete(0),ua(o)}(t)})}function tC(r){return r.asyncQueue.enqueue(async()=>{const e=await HI(r),t=await WI(r);return e.setNetworkEnabled(!1),async function(i){const o=X(i);o.k_.add(0),await Pi(o),o.K_.set("Offline")}(t)})}function nC(r,e){const t=new lt;return r.asyncQueue.enqueueAndForget(async()=>async function(i,o,a){try{const c=await function(h,d){const p=X(h);return p.persistence.runTransaction("read document","readonly",g=>p.localDocuments.getDocument(g,d))}(i,o);c.isFoundDocument()?a.resolve(c):c.isNoDocument()?a.resolve(null):a.reject(new B(N.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Di(c,`Failed to get document '${o} from cache`);a.reject(u)}}(await ki(r),e,t)),t.promise}function JI(r,e,t={}){const s=new lt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,u,h){const d=new ml({next:g=>{d.eu(),a.enqueueAndForget(()=>hd(o,p));const w=g.docs.has(c);!w&&g.fromCache?h.reject(new B(N.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?h.reject(new B(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new fd(Ai(c.path),d,{includeMetadataChanges:!0,ua:!0});return ud(o,p)}(await Ii(r),r.asyncQueue,e,t,s)),s.promise}function rC(r,e){const t=new lt;return r.asyncQueue.enqueueAndForget(async()=>async function(i,o,a){try{const c=await kc(i,o,!0),u=new qI(o,c.ds),h=u.ga(c.documents),d=u.applyChanges(h,!1);a.resolve(d.snapshot)}catch(c){const u=Di(c,`Failed to execute query '${o} against cache`);a.reject(u)}}(await ki(r),e,t)),t.promise}function XI(r,e,t={}){const s=new lt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,u,h){const d=new ml({next:g=>{d.eu(),a.enqueueAndForget(()=>hd(o,p)),g.fromCache&&u.source==="server"?h.reject(new B(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new fd(c,d,{includeMetadataChanges:!0,ua:!0});return ud(o,p)}(await Ii(r),r.asyncQueue,e,t,s)),s.promise}function sC(r,e,t){const s=new lt;return r.asyncQueue.enqueueAndForget(async()=>{try{const i=await QI(r);s.resolve(async function(a,c,u){var h;const d=X(a),{request:p,lt:g,parent:w}=iI(d.serializer,xy(c),u);d.connection.Co||delete p.parent;const P=(await d.ko("RunAggregationQuery",d.serializer.databaseId,w,p,1)).filter(S=>!!S.result);ce(P.length===1);const x=(h=P[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(x).reduce((S,V)=>(S[g[V]]=x[V],S),{})}(i,e,t))}catch(i){s.reject(i)}}),s.promise}function iC(r,e){const t=new ml(e);return r.asyncQueue.enqueueAndForget(async()=>function(i,o){X(i).X_.add(o),o.next()}(await Ii(r),t)),()=>{t.eu(),r.asyncQueue.enqueueAndForget(async()=>function(i,o){X(i).X_.delete(o)}(await Ii(r),t))}}function oC(r,e,t,s){const i=function(a,c){let u;return u=typeof a=="string"?Qy().encode(a):a,function(d,p){return new JP(d,p)}(function(d,p){if(d instanceof Uint8Array)return km(d,p);if(d instanceof ArrayBuffer)return km(new Uint8Array(d),p);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),c)}(t,la(e));r.asyncQueue.enqueueAndForget(async()=>{QP(await Td(r),i,s)})}function aC(r,e){return r.asyncQueue.enqueue(async()=>function(s,i){const o=X(s);return o.persistence.runTransaction("Get named query","readonly",a=>o.jr.getNamedQuery(a,i))}(await ki(r),e))}function cC(r,e){return r.asyncQueue.enqueue(async()=>async function(s,i){const o=X(s),a=o.indexManager,c=[];return o.persistence.runTransaction("Configure indexes","readwrite",u=>a.getFieldIndexes(u).next(h=>function(p,g,w,P,x){p=[...p],g=[...g],p.sort(w),g.sort(w);const S=p.length,V=g.length;let L=0,F=0;for(;L<V&&F<S;){const U=w(p[F],g[L]);U<0?x(p[F++]):U>0?P(g[L++]):(L++,F++)}for(;L<V;)P(g[L++]);for(;F<S;)x(p[F++])}(h,i,dR,d=>{c.push(a.addFieldIndex(u,d))},d=>{c.push(a.deleteFieldIndex(u,d))})).next(()=>D.waitFor(c)))}(await ki(r),e))}function lC(r,e){return r.asyncQueue.enqueue(async()=>function(s,i){X(s)._s.Hi=i}(await ki(r),e))}function uC(r){return r.asyncQueue.enqueue(async()=>function(t){const s=X(t),i=s.indexManager;return s.persistence.runTransaction("Delete All Indexes","readwrite",o=>i.deleteAllFieldIndexes(o))}(await ki(r)))}/**
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
 */function YI(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Nm=new Map;/**
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
 */function Ed(r,e,t){if(!t)throw new B(N.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function ZI(r,e,t,s){if(e===!0&&s===!0)throw new B(N.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Om(r){if(!Z.isDocumentKey(r))throw new B(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Mm(r){if(Z.isDocumentKey(r))throw new B(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function _l(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":se()}function ve(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new B(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_l(r);throw new B(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function ev(r,e){if(e<=0)throw new B(N.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Lm{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new B(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ha{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ry;switch(s.type){case"firstParty":return new aR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Nm.get(t);s&&(q("ComponentProvider","Removing Datastore"),Nm.delete(t),s.terminate())}(this),Promise.resolve()}}function tv(r,e,t,s={}){var i;const o=(r=ve(r,ha))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ht("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),s.mockUserToken){let c,u;if(typeof s.mockUserToken=="string")c=s.mockUserToken,u=ct.MOCK_USER;else{c=E_(s.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=s.mockUserToken.sub||s.mockUserToken.user_id;if(!h)throw new B(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(h)}r._authCredentials=new sR(new ny(c,u))}}/**
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
 */class ht{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ht(this.firestore,e,this._query)}}class Ze{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class rn extends ht{constructor(e,t,s){super(e,t,Ai(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new Z(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function nv(r,e,...t){if(r=Pe(r),Ed("collection","path",e),r instanceof ha){const s=Te.fromString(e,...t);return Mm(s),new rn(r,null,s)}{if(!(r instanceof Ze||r instanceof rn))throw new B(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Te.fromString(e,...t));return Mm(s),new rn(r.firestore,null,s)}}function hC(r,e){if(r=ve(r,ha),Ed("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(N.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ht(r,null,function(s){return new Bn(Te.emptyPath(),s)}(e))}function Po(r,e,...t){if(r=Pe(r),arguments.length===1&&(e=Mh.newId()),Ed("doc","path",e),r instanceof ha){const s=Te.fromString(e,...t);return Om(s),new Ze(r,null,new Z(s))}{if(!(r instanceof Ze||r instanceof rn))throw new B(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Te.fromString(e,...t));return Om(s),new Ze(r.firestore,r instanceof rn?r.converter:null,new Z(s))}}function dC(r,e){return r=Pe(r),e=Pe(e),(r instanceof Ze||r instanceof rn)&&(e instanceof Ze||e instanceof rn)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function bd(r,e){return r=Pe(r),e=Pe(e),r instanceof ht&&e instanceof ht&&r.firestore===e.firestore&&sa(r._query,e._query)&&r.converter===e.converter}/**
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
 */class Fm{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new id(this,"async_queue_retry"),this.fu=()=>{const s=cc();s&&q("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=cc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=cc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new lt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Cr(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(s);throw et("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=ld.createAndSchedule(this,e,t,s,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&se()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function nh(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of s)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class rv{constructor(){this._progressObserver={},this._taskCompletionResolver=new lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const fC=-1;class Ve extends ha{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Fm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fm(e),this._firestoreClient=void 0,await e}}}function pC(r,e,t){t||(t="(default)");const s=Ti(r,"firestore");if(s.isInitialized(t)){const i=s.getImmediate({identifier:t}),o=s.getOptions(t);if(mr(o,e))return i;throw new B(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new B(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return s.initialize({options:e,instanceIdentifier:t})}function sv(r,e){const t=typeof r=="object"?r:Ph(),s=typeof r=="string"?r:e||"(default)",i=Ti(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=v_("firestore");o&&tv(i,...o)}return i}function We(r){if(r._terminated)throw new B(N.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||iv(r),r._firestoreClient}function iv(r){var e,t,s;const i=r._freezeSettings(),o=function(c,u,h,d){return new UR(c,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,YI(d.experimentalLongPollingOptions),d.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new ZP(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(r._componentsProvider))}function mC(r,e){Ht("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return ov(r,Er.provider,{build:s=>new vd(s,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function gC(r){Ht("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();ov(r,Er.provider,{build:t=>new KI(t,e.cacheSizeBytes)})}function ov(r,e,t){if((r=ve(r,Ve))._firestoreClient||r._terminated)throw new B(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new B(N.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},iv(r)}function _C(r){if(r._initialized&&!r._terminated)throw new B(N.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new lt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(s){if(!pn.p())return Promise.resolve();const i=s+"main";await pn.delete(i)}(nd(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function yC(r){return function(t){const s=new lt;return t.asyncQueue.enqueueAndForget(async()=>FP(await Td(t),s)),s.promise}(We(r=ve(r,Ve)))}function IC(r){return eC(We(r=ve(r,Ve)))}function vC(r){return tC(We(r=ve(r,Ve)))}function wC(r){return Ab(r.app,"firestore",r._databaseId.database),r._delete()}function TC(r,e){const t=We(r=ve(r,Ve)),s=new rv;return oC(t,r._databaseId,e,s),s}function EC(r,e){return aC(We(r=ve(r,Ve)),e).then(t=>t?new ht(r,null,t.query):null)}/**
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
 *//**
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
 */class vi{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class av{constructor(e,t,s){this._userDataWriter=t,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new br(Je.fromBase64String(e))}catch(t){throw new B(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new br(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function bC(){return new kr("__name__")}/**
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
 */class Vr{constructor(e){this._methodName=e}}/**
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
 */class yl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const AC=/^__.*__$/;class RC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new $n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}class cv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new $n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Il{constructor(e,t,s,i,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Il(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:s,Nu:!1});return i.Lu(e),i}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:s,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Mc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(lv(this.Mu)&&AC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class SC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||la(e)}$u(e,t,s,i=!1){return new Il({Mu:e,methodName:t,Ku:s,path:je.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ts(r){const e=r._freezeSettings(),t=la(r._databaseId);return new SC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function vl(r,e,t,s,i,o={}){const a=r.$u(o.merge||o.mergeFields?2:0,e,t,i);Dd("Data must be an object, but it was:",a,s);const c=dv(s,a);let u,h;if(o.merge)u=new Ut(a.fieldMask),h=a.fieldTransforms;else if(o.mergeFields){const d=[];for(const p of o.mergeFields){const g=Ho(e,p,t);if(!a.contains(g))throw new B(N.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);pv(d,g)||d.push(g)}u=new Ut(d),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new RC(new gt(c),u,h)}class fa extends Vr{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fa}}function uv(r,e,t){return new Il({Mu:3,Ku:e.settings.Ku,methodName:r._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ad extends Vr{_toFieldTransform(e){return new oa(e.path,new ui)}isEqual(e){return e instanceof Ad}}class Rd extends Vr{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=uv(this,e,!0),s=this.Uu.map(o=>Es(o,t)),i=new hs(s);return new oa(e.path,i)}isEqual(e){return e instanceof Rd&&mr(this.Uu,e.Uu)}}class Sd extends Vr{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=uv(this,e,!0),s=this.Uu.map(o=>Es(o,t)),i=new ds(s);return new oa(e.path,i)}isEqual(e){return e instanceof Sd&&mr(this.Uu,e.Uu)}}class Pd extends Vr{constructor(e,t){super(e),this.Wu=t}_toFieldTransform(e){const t=new hi(e.serializer,Uy(e.serializer,this.Wu));return new oa(e.path,t)}isEqual(e){return e instanceof Pd&&this.Wu===e.Wu}}function Cd(r,e,t,s){const i=r.$u(1,e,t);Dd("Data must be an object, but it was:",i,s);const o=[],a=gt.empty();xr(s,(u,h)=>{const d=wl(e,u,t);h=Pe(h);const p=i.Bu(d);if(h instanceof fa)o.push(d);else{const g=Es(h,p);g!=null&&(o.push(d),a.set(d,g))}});const c=new Ut(o);return new cv(a,c,i.fieldTransforms)}function xd(r,e,t,s,i,o){const a=r.$u(1,e,t),c=[Ho(e,s,t)],u=[i];if(o.length%2!=0)throw new B(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<o.length;g+=2)c.push(Ho(e,o[g])),u.push(o[g+1]);const h=[],d=gt.empty();for(let g=c.length-1;g>=0;--g)if(!pv(h,c[g])){const w=c[g];let P=u[g];P=Pe(P);const x=a.Bu(w);if(P instanceof fa)h.push(w);else{const S=Es(P,x);S!=null&&(h.push(w),d.set(w,S))}}const p=new Ut(h);return new cv(d,p,a.fieldTransforms)}function hv(r,e,t,s=!1){return Es(t,r.$u(s?4:3,e))}function Es(r,e){if(fv(r=Pe(r)))return Dd("Unsupported field value:",e,r),dv(r,e);if(r instanceof Vr)return function(s,i){if(!lv(i.Mu))throw i.qu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,i){const o=[];let a=0;for(const c of s){let u=Es(c,i.ku(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(r,e)}return function(s,i){if((s=Pe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Uy(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=He.fromDate(s);return{timestampValue:di(i.serializer,o)}}if(s instanceof He){const o=new He(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:di(i.serializer,o)}}if(s instanceof yl)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof br)return{bytesValue:Yy(i.serializer,s._byteString)};if(s instanceof Ze){const o=i.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Qh(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof da)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.qu("VectorValues must only contain numeric values.");return jh(c.serializer,u)})}}}}}}(s,i);throw i.qu(`Unsupported field value: ${_l(s)}`)}(r,e)}function dv(r,e){const t={};return _y(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(r,(s,i)=>{const o=Es(i,e.Ou(s));o!=null&&(t[s]=o)}),{mapValue:{fields:t}}}function fv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof He||r instanceof yl||r instanceof br||r instanceof Ze||r instanceof Vr||r instanceof da)}function Dd(r,e,t){if(!fv(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const s=_l(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function Ho(r,e,t){if((e=Pe(e))instanceof kr)return e._internalPath;if(typeof e=="string")return wl(r,e);throw Mc("Field path arguments must be of type string or ",r,!1,void 0,t)}const PC=new RegExp("[~\\*/\\[\\]]");function wl(r,e,t){if(e.search(PC)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kr(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Mc(r,e,t,s,i){const o=s&&!s.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${s}`),a&&(u+=` in document ${i}`),u+=")"),new B(N.INVALID_ARGUMENT,c+r+u)}function pv(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Wo{constructor(e,t,s,i,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CC extends Wo{data(){return super.data()}}function Tl(r,e){return typeof e=="string"?wl(r,e):e instanceof kr?e._internalPath:e._delegate._internalPath}/**
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
 */function mv(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new B(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kd{}class Vi extends kd{}function gv(r,e,...t){let s=[];e instanceof kd&&s.push(e),s=s.concat(t),function(o){const a=o.filter(u=>u instanceof bs).length,c=o.filter(u=>u instanceof Ni).length;if(a>1||a>0&&c>0)throw new B(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)r=i._apply(r);return r}class Ni extends Vi{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ni(e,t,s)}_apply(e){const t=this._parse(e);return Iv(e._query,t),new ht(e.firestore,e.converter,Gu(e._query,t))}_parse(e){const t=Ts(e.firestore);return function(o,a,c,u,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Bm(p,d);const w=[];for(const P of p)w.push(Um(u,o,P));g={arrayValue:{values:w}}}else g=Um(u,o,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Bm(p,d),g=hv(c,a,p,d==="in"||d==="not-in");return Ee.create(h,d,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xC(r,e,t){const s=e,i=Tl("where",r);return Ni._create(i,s,t)}class bs extends kd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bs(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:De.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const u of c)Iv(a,u),a=Gu(a,u)}(e._query,t),new ht(e.firestore,e.converter,Gu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function DC(...r){return r.forEach(e=>vv("or",e)),bs._create("or",r)}function kC(...r){return r.forEach(e=>vv("and",e)),bs._create("and",r)}class El extends Vi{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new El(e,t)}_apply(e){const t=function(i,o,a){if(i.startAt!==null)throw new B(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Go(o,a)}(e._query,this._field,this._direction);return new ht(e.firestore,e.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Bn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function _v(r,e="asc"){const t=e,s=Tl("orderBy",r);return El._create(s,t)}class pa extends Vi{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new pa(e,t,s)}_apply(e){return new ht(e.firestore,e.converter,Rc(e._query,this._limit,this._limitType))}}function VC(r){return ev("limit",r),pa._create("limit",r,"F")}function NC(r){return ev("limitToLast",r),pa._create("limitToLast",r,"L")}class ma extends Vi{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new ma(e,t,s)}_apply(e){const t=yv(e,this.type,this._docOrFields,this._inclusive);return new ht(e.firestore,e.converter,function(i,o){return new Bn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,o,i.endAt)}(e._query,t))}}function OC(...r){return ma._create("startAt",r,!0)}function MC(...r){return ma._create("startAfter",r,!1)}class ga extends Vi{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new ga(e,t,s)}_apply(e){const t=yv(e,this.type,this._docOrFields,this._inclusive);return new ht(e.firestore,e.converter,function(i,o){return new Bn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,o)}(e._query,t))}}function LC(...r){return ga._create("endBefore",r,!1)}function FC(...r){return ga._create("endAt",r,!0)}function yv(r,e,t,s){if(t[0]=Pe(t[0]),t[0]instanceof Wo)return function(o,a,c,u,h){if(!u)throw new B(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const p of Xs(o))if(p.field.isKeyField())d.push(ls(a,u.key));else{const g=u.data.field(p.field);if(sl(g))throw new B(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const w=p.field.canonicalString();throw new B(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(g)}return new wr(d,h)}(r._query,r.firestore._databaseId,e,t[0]._document,s);{const i=Ts(r.firestore);return function(a,c,u,h,d,p){const g=a.explicitOrderBy;if(d.length>g.length)throw new B(N.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let P=0;P<d.length;P++){const x=d[P];if(g[P].field.isKeyField()){if(typeof x!="string")throw new B(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof x}`);if(!qh(a)&&x.indexOf("/")!==-1)throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${x}' contains a slash.`);const S=a.path.child(Te.fromString(x));if(!Z.isDocumentKey(S))throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const V=new Z(S);w.push(ls(c,V))}else{const S=hv(u,h,x);w.push(S)}}return new wr(w,p)}(r._query,r.firestore._databaseId,i,e,t,s)}}function Um(r,e,t){if(typeof(t=Pe(t))=="string"){if(t==="")throw new B(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qh(e)&&t.indexOf("/")!==-1)throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Te.fromString(t));if(!Z.isDocumentKey(s))throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ls(r,new Z(s))}if(t instanceof Ze)return ls(r,t._key);throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_l(t)}.`)}function Bm(r,e){if(!Array.isArray(r)||r.length===0)throw new B(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iv(r,e){const t=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function vv(r,e){if(!(e instanceof Ni||e instanceof bs))throw new B(N.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Vd{convertValue(e,t="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return xr(e,(i,o)=>{s[i]=this.convertValue(o,t)}),s}convertVectorValue(e){var t,s,i;const o=(i=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(a=>ze(a.doubleValue));return new da(o)}convertGeoPoint(e){return new yl(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=il(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const t=Mn(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Te.fromString(e);ce(lI(s));const i=new yr(s.get(1),s.get(3)),o=new Z(s.popFirst(5));return i.isEqual(t)||et(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function bl(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class UC extends Vd{constructor(e){super(),this.firestore=e}convertBytes(e){return new br(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,t)}}/**
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
 */function BC(r){return new vi("sum",Ho("sum",r))}function qC(r){return new vi("avg",Ho("average",r))}function wv(){return new vi("count")}function $C(r,e){var t,s;return r instanceof vi&&e instanceof vi&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((s=e._internalFieldPath)===null||s===void 0?void 0:s.canonicalString())}function jC(r,e){return bd(r.query,e.query)&&mr(r.data(),e.data())}/**
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
 */class lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends Wo{constructor(e,t,s,i,o,a){super(e,t,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Tl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Co extends gs{data(e={}){return super.data(e)}}class _s{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new lr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Co(this._firestore,this._userDataWriter,s.key,s,new lr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new Co(i._firestore,i._userDataWriter,c.doc.key,c.doc,new lr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const u=new Co(i._firestore,i._userDataWriter,c.doc.key,c.doc,new lr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:GC(c.type),doc:u,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function GC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}function zC(r,e){return r instanceof gs&&e instanceof gs?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof _s&&e instanceof _s&&r._firestore===e._firestore&&bd(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function Tv(r){r=ve(r,Ze);const e=ve(r.firestore,Ve);return JI(We(e),r._key).then(t=>Nd(e,r,t))}class Nr extends Vd{constructor(e){super(),this.firestore=e}convertBytes(e){return new br(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,t)}}function KC(r){r=ve(r,Ze);const e=ve(r.firestore,Ve),t=We(e),s=new Nr(e);return nC(t,r._key).then(i=>new gs(e,s,r._key,i,new lr(i!==null&&i.hasLocalMutations,!0),r.converter))}function HC(r){r=ve(r,Ze);const e=ve(r.firestore,Ve);return JI(We(e),r._key,{source:"server"}).then(t=>Nd(e,r,t))}function Ev(r){r=ve(r,ht);const e=ve(r.firestore,Ve),t=We(e),s=new Nr(e);return mv(r._query),XI(t,r._query).then(i=>new _s(e,s,r,i))}function WC(r){r=ve(r,ht);const e=ve(r.firestore,Ve),t=We(e),s=new Nr(e);return rC(t,r._query).then(i=>new _s(e,s,r,i))}function QC(r){r=ve(r,ht);const e=ve(r.firestore,Ve),t=We(e),s=new Nr(e);return XI(t,r._query,{source:"server"}).then(i=>new _s(e,s,r,i))}function bv(r,e,t){r=ve(r,Ze);const s=ve(r.firestore,Ve),i=bl(r.converter,e,t);return Oi(s,[vl(Ts(s),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,Ke.none())])}function JC(r,e,t,...s){r=ve(r,Ze);const i=ve(r.firestore,Ve),o=Ts(i);let a;return a=typeof(e=Pe(e))=="string"||e instanceof kr?xd(o,"updateDoc",r._key,e,t,s):Cd(o,"updateDoc",r._key,e),Oi(i,[a.toMutation(r._key,Ke.exists(!0))])}function Av(r){return Oi(ve(r.firestore,Ve),[new Si(r._key,Ke.none())])}function XC(r,e){const t=ve(r.firestore,Ve),s=Po(r),i=bl(r.converter,e);return Oi(t,[vl(Ts(r.firestore),"addDoc",s._key,i,r.converter!==null,{}).toMutation(s._key,Ke.exists(!1))]).then(()=>s)}function YC(r,...e){var t,s,i;r=Pe(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||nh(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(nh(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[a+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,d;if(r instanceof Ze)h=ve(r.firestore,Ve),d=Ai(r._key.path),u={next:p=>{e[a]&&e[a](Nd(h,r,p))},error:e[a+1],complete:e[a+2]};else{const p=ve(r,ht);h=ve(p.firestore,Ve),d=p._query;const g=new Nr(h);u={next:w=>{e[a]&&e[a](new _s(h,g,p,w))},error:e[a+1],complete:e[a+2]},mv(r._query)}return function(g,w,P,x){const S=new ml(x),V=new fd(w,S,P);return g.asyncQueue.enqueueAndForget(async()=>ud(await Ii(g),V)),()=>{S.eu(),g.asyncQueue.enqueueAndForget(async()=>hd(await Ii(g),V))}}(We(h),d,c,u)}function ZC(r,e){return iC(We(r=ve(r,Ve)),nh(e)?e:{next:e})}function Oi(r,e){return function(s,i){const o=new lt;return s.asyncQueue.enqueueAndForget(async()=>NP(await Td(s),i,o)),o.promise}(We(r),e)}function Nd(r,e,t){const s=t.docs.get(e._key),i=new Nr(r);return new gs(r,i,e._key,s,new lr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function ex(r){return Rv(r,{count:wv()})}function Rv(r,e){const t=ve(r.firestore,Ve),s=We(t),i=gy(e,(o,a)=>new Ky(a,o.aggregateType,o._internalFieldPath));return sC(s,r._query,i).then(o=>function(c,u,h){const d=new Nr(c);return new av(u,d,h)}(t,r,o))}class tx{constructor(e){this.kind="memory",this._onlineComponentProvider=Er.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new Id(void 0)}}toJSON(){return{kind:this.kind}}}class nx{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Sv(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class rx{constructor(){this.kind="memoryEager",this._offlineComponentProvider=yi.provider}toJSON(){return{kind:this.kind}}}class sx{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Id(e)}}toJSON(){return{kind:this.kind}}}function ix(){return new rx}function ox(r){return new sx(r==null?void 0:r.cacheSizeBytes)}function ax(r){return new tx(r)}function cx(r){return new nx(r)}class lx{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Er.provider,this._offlineComponentProvider={build:t=>new vd(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class ux{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Er.provider,this._offlineComponentProvider={build:t=>new KI(t,e==null?void 0:e.cacheSizeBytes)}}}function Sv(r){return new lx(r==null?void 0:r.forceOwnership)}function hx(){return new ux}/**
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
 */const dx={maxAttempts:5};/**
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
 */class Pv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ts(e)}set(e,t,s){this._verifyNotCommitted();const i=rr(e,this._firestore),o=bl(i.converter,t,s),a=vl(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,s);return this._mutations.push(a.toMutation(i._key,Ke.none())),this}update(e,t,s,...i){this._verifyNotCommitted();const o=rr(e,this._firestore);let a;return a=typeof(t=Pe(t))=="string"||t instanceof kr?xd(this._dataReader,"WriteBatch.update",o._key,t,s,i):Cd(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(a.toMutation(o._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=rr(e,this._firestore);return this._mutations=this._mutations.concat(new Si(t._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function rr(r,e){if((r=Pe(r)).firestore!==e)throw new B(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 *//**
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
 */class Cv extends class{constructor(t,s){this._firestore=t,this._transaction=s,this._dataReader=Ts(t)}get(t){const s=rr(t,this._firestore),i=new UC(this._firestore);return this._transaction.lookup([s._key]).then(o=>{if(!o||o.length!==1)return se();const a=o[0];if(a.isFoundDocument())return new Wo(this._firestore,i,a.key,a,s.converter);if(a.isNoDocument())return new Wo(this._firestore,i,s._key,null,s.converter);throw se()})}set(t,s,i){const o=rr(t,this._firestore),a=bl(o.converter,s,i),c=vl(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,i);return this._transaction.set(o._key,c),this}update(t,s,i,...o){const a=rr(t,this._firestore);let c;return c=typeof(s=Pe(s))=="string"||s instanceof kr?xd(this._dataReader,"Transaction.update",a._key,s,i,o):Cd(this._dataReader,"Transaction.update",a._key,s),this._transaction.update(a._key,c),this}delete(t){const s=rr(t,this._firestore);return this._transaction.delete(s._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=rr(e,this._firestore),s=new Nr(this._firestore);return super.get(e).then(i=>new gs(this._firestore,s,t._key,i._document,new lr(!1,!1),t.converter))}}function fx(r,e,t){r=ve(r,Ve);const s=Object.assign(Object.assign({},dx),t);return function(o){if(o.maxAttempts<1)throw new B(N.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(o,a,c){const u=new lt;return o.asyncQueue.enqueueAndForget(async()=>{const h=await QI(o);new YP(o.asyncQueue,h,c,a,u).cu()}),u.promise}(We(r),i=>e(new Cv(r,i)),s)}/**
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
 */function px(){return new fa("deleteField")}function mx(){return new Ad("serverTimestamp")}function gx(...r){return new Rd("arrayUnion",r)}function _x(...r){return new Sd("arrayRemove",r)}function yx(r){return new Pd("increment",r)}function Ix(r){return new da(r)}/**
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
 */function vx(r){return We(r=ve(r,Ve)),new Pv(r,e=>Oi(r,e))}/**
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
 */function wx(r,e){const t=We(r=ve(r,Ve));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return Ht("Cannot enable indexes when persistence is disabled"),Promise.resolve();const s=function(o){const a=typeof o=="string"?function(h){try{return JSON.parse(h)}catch(d){throw new B(N.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(o):o,c=[];if(Array.isArray(a.indexes))for(const u of a.indexes){const h=qm(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const p of u.fields){const g=wl("setIndexConfiguration",qm(p,"fieldPath"));p.arrayConfig==="CONTAINS"?d.push(new ss(g,2)):p.order==="ASCENDING"?d.push(new ss(g,0)):p.order==="DESCENDING"&&d.push(new ss(g,1))}c.push(new oi(oi.UNKNOWN_ID,h,d,ai.empty()))}return c}(e);return cC(t,s)}function qm(r,e){if(typeof r[e]!="string")throw new B(N.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class xv{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function Tx(r){var e;r=ve(r,Ve);const t=$m.get(r);if(t)return t;if(((e=We(r)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const s=new xv(r);return $m.set(r,s),s}function Ex(r){Dv(r,!0)}function bx(r){Dv(r,!1)}function Ax(r){uC(We(r._firestore)).then(e=>q("deleting all persistent cache indexes succeeded")).catch(e=>Ht("deleting all persistent cache indexes failed",e))}function Dv(r,e){lC(We(r._firestore),e).then(t=>q(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(t=>Ht(`setting persistent cache index auto creation isEnabled=${e} failed`,t))}const $m=new WeakMap;/**
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
 */function Rx(r){var e;const t=(e=We(ve(r.firestore,Ve))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return t===void 0?null:ll(t,Ct(r._query)).ct}function Sx(r,e){var t;const s=gy(e,(o,a)=>new Ky(a,o.aggregateType,o._internalFieldPath)),i=(t=We(ve(r.firestore,Ve))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return i===void 0?null:iI(i,xy(r._query),s,!0).request}/**
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
 */class Px{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Od.instance.onExistenceFilterMismatch(e)}}class Od{constructor(){this.Gu=new Map}static get instance(){return Wa||(Wa=new Od,function(t){if(Sc)throw new Error("a TestingHooksSpi instance is already set");Sc=t}(Wa)),Wa}tt(e){this.Gu.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),s=this.Gu;return s.set(t,e),()=>s.delete(t)}}let Wa=null;(function(e,t=!0){(function(i){bi=i})(vs),as(new gr("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new Ve(new iR(s.getProvider("auth-internal")),new cR(s.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(h.options.projectId,d)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),fn(kp,"4.7.5",e),fn(kp,"4.7.5","esm2017")})();const Cx=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Vd,AggregateField:vi,AggregateQuerySnapshot:av,Bytes:br,CACHE_SIZE_UNLIMITED:fC,CollectionReference:rn,DocumentReference:Ze,DocumentSnapshot:gs,FieldPath:kr,FieldValue:Vr,Firestore:Ve,FirestoreError:B,GeoPoint:yl,LoadBundleTask:rv,PersistentCacheIndexManager:xv,Query:ht,QueryCompositeFilterConstraint:bs,QueryConstraint:Vi,QueryDocumentSnapshot:Co,QueryEndAtConstraint:ga,QueryFieldFilterConstraint:Ni,QueryLimitConstraint:pa,QueryOrderByConstraint:El,QuerySnapshot:_s,QueryStartAtConstraint:ma,SnapshotMetadata:lr,Timestamp:He,Transaction:Cv,VectorValue:da,WriteBatch:Pv,_AutoId:Mh,_ByteString:Je,_DatabaseId:yr,_DocumentKey:Z,_EmptyAppCheckTokenProvider:lR,_EmptyAuthCredentialsProvider:ry,_FieldPath:je,_TestingHooks:Px,_cast:ve,_debugAssert:rR,_internalAggregationQueryToProtoRunAggregationQueryRequest:Sx,_internalQueryToProtoQueryTarget:Rx,_isBase64Available:LR,_logWarn:Ht,_validateIsNotUsedTogether:ZI,addDoc:XC,aggregateFieldEqual:$C,aggregateQuerySnapshotEqual:jC,and:kC,arrayRemove:_x,arrayUnion:gx,average:qC,clearIndexedDbPersistence:_C,collection:nv,collectionGroup:hC,connectFirestoreEmulator:tv,count:wv,deleteAllPersistentCacheIndexes:Ax,deleteDoc:Av,deleteField:px,disableNetwork:vC,disablePersistentCacheIndexAutoCreation:bx,doc:Po,documentId:bC,enableIndexedDbPersistence:mC,enableMultiTabIndexedDbPersistence:gC,enableNetwork:IC,enablePersistentCacheIndexAutoCreation:Ex,endAt:FC,endBefore:LC,ensureFirestoreConfigured:We,executeWrite:Oi,getAggregateFromServer:Rv,getCountFromServer:ex,getDoc:Tv,getDocFromCache:KC,getDocFromServer:HC,getDocs:Ev,getDocsFromCache:WC,getDocsFromServer:QC,getFirestore:sv,getPersistentCacheIndexManager:Tx,increment:yx,initializeFirestore:pC,limit:VC,limitToLast:NC,loadBundle:TC,memoryEagerGarbageCollector:ix,memoryLocalCache:ax,memoryLruGarbageCollector:ox,namedQuery:EC,onSnapshot:YC,onSnapshotsInSync:ZC,or:DC,orderBy:_v,persistentLocalCache:cx,persistentMultipleTabManager:hx,persistentSingleTabManager:Sv,query:gv,queryEqual:bd,refEqual:dC,runTransaction:fx,serverTimestamp:mx,setDoc:bv,setIndexConfiguration:wx,setLogLevel:nR,snapshotEqual:zC,startAfter:MC,startAt:OC,sum:BC,terminate:wC,updateDoc:JC,vector:Ix,waitForPendingWrites:yC,where:xC,writeBatch:vx},Symbol.toStringTag,{value:"Module"})),xx={apiKey:"AIzaSyD_7Cs_n1UbUsRFVXG-AmRcZUt-6lak6TA",authDomain:"saintkim12-s-project-01.firebaseapp.com",projectId:"saintkim12-s-project-01",storageBucket:"saintkim12-s-project-01.firebasestorage.app",messagingSenderId:"908454966789",appId:"1:908454966789:web:947197bf8706c088d5ce6c",measurementId:"G-6W4YEC57Q2"},kv=P_(xx),jm=YA(kv),io=sv(kv);function Zs(){return{withDatabase(){return{firestore:Cx,db:io}},async getFromDatabase(r){const e=Po(io,r);return(await Tv(e)).data()},async getListFromDatabase(r,e){const t=gv(nv(io,r),...e!=null&&e.orderBy?[_v(e.orderBy,e.direction)]:[]),s=await Ev(t);return s.size>0?s.docs.map(i=>({...i.data(),id:i.id})):[]},async upsertToDatabase(r,e,t){const s=Po(io,r,e);await bv(s,t,{merge:!0})},async removeFromDatabase(r,e){const t=Po(io,r,e);await Av(t)},uploadToStorage(r,e){const t=e,s=Gt(),i=new Promise((o,a)=>{const c=xp(jm,r),u=QA(c,t);s.value={...u.snapshot},u.on("state_changed",h=>s.value=h,a,async()=>{s.value=u.snapshot;const h=await JA(u.snapshot.ref);o({result:u.snapshot,url:h})})});return{snapshot:s,complete:i}},async removeFromStorage(r){try{const e=xp(jm,r);await XA(e)}catch(e){console.error(e)}}}}const pt=[];for(let r=0;r<256;++r)pt.push((r+256).toString(16).slice(1));function Dx(r,e=0){return(pt[r[e+0]]+pt[r[e+1]]+pt[r[e+2]]+pt[r[e+3]]+"-"+pt[r[e+4]]+pt[r[e+5]]+"-"+pt[r[e+6]]+pt[r[e+7]]+"-"+pt[r[e+8]]+pt[r[e+9]]+"-"+pt[r[e+10]]+pt[r[e+11]]+pt[r[e+12]]+pt[r[e+13]]+pt[r[e+14]]+pt[r[e+15]]).toLowerCase()}let gu;const kx=new Uint8Array(16);function Vx(){if(!gu){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");gu=crypto.getRandomValues.bind(crypto)}return gu(kx)}const Nx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Gm={randomUUID:Nx};function Ox(r,e,t){var i;if(Gm.randomUUID&&!e&&!r)return Gm.randomUUID();r=r||{};const s=r.random??((i=r.rng)==null?void 0:i.call(r))??Vx();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,Dx(s)}function Md(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(r);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(r,s[i])&&(t[s[i]]=r[s[i]]);return t}function Vv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mx=Vv,Nv=new Zo("auth","Firebase",Vv());/**
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
 */const Lc=new Rh("@firebase/auth");function Lx(r,...e){Lc.logLevel<=we.WARN&&Lc.warn(`Auth (${vs}): ${r}`,...e)}function lc(r,...e){Lc.logLevel<=we.ERROR&&Lc.error(`Auth (${vs}): ${r}`,...e)}/**
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
 */function Zt(r,...e){throw Ld(r,...e)}function gn(r,...e){return Ld(r,...e)}function Ov(r,e,t){const s=Object.assign(Object.assign({},Mx()),{[e]:t});return new Zo("auth","Firebase",s).create(e,{appName:r.name})}function fr(r){return Ov(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ld(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Nv.create(r,...e)}function de(r,e,...t){if(!r)throw Ld(e,...t)}function Dn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw lc(e),new Error(e)}function Fn(r,e){r||Dn(e)}/**
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
 */function Fc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Fx(){return zm()==="http:"||zm()==="https:"}function zm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Ux(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fx()||y0()||"connection"in navigator)?navigator.onLine:!0}function Bx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class _a{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fn(t>e,"Short delay should be less than long delay!"),this.isMobile=m0()||I0()}get(){return Ux()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fd(r,e){Fn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Mv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $x=new _a(3e4,6e4);function Gn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function wn(r,e,t,s,i={}){return Lv(r,i,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const c=ea(Object.assign({key:r.config.apiKey},a)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:u},o);return _0()||(h.referrerPolicy="no-referrer"),Mv.fetch()(Fv(r,r.config.apiHost,t,c),h)})}async function Lv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},qx),e);try{const i=new Gx(r),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Qa(r,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Qa(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw Qa(r,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ov(r,d,h);Zt(r,d)}}catch(i){if(i instanceof vn)throw i;Zt(r,"network-request-failed",{message:String(i)})}}async function Al(r,e,t,s,i={}){const o=await wn(r,e,t,s,i);return"mfaPendingCredential"in o&&Zt(r,"multi-factor-auth-required",{_serverResponse:o}),o}function Fv(r,e,t,s){const i=`${e}${t}?${s}`;return r.config.emulator?Fd(r.config,i):`${r.config.apiScheme}://${i}`}function jx(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),$x.get())})}}function Qa(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=gn(r,e,s);return i.customData._tokenResponse=t,i}function Km(r){return r!==void 0&&r.enterprise!==void 0}class zx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kx(r,e){return wn(r,"GET","/v2/recaptchaConfig",Gn(r,e))}/**
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
 */async function Hx(r,e){return wn(r,"POST","/v1/accounts:delete",e)}async function Uv(r,e){return wn(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wx(r,e=!1){const t=Pe(r),s=await t.getIdToken(e),i=Ud(s);de(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:s,authTime:xo(_u(i.auth_time)),issuedAtTime:xo(_u(i.iat)),expirationTime:xo(_u(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function _u(r){return Number(r)*1e3}function Ud(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const i=y_(t);return i?JSON.parse(i):(lc("Failed to decode base64 JWT payload"),null)}catch(i){return lc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hm(r){const e=Ud(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qo(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof vn&&Qx(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Qx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uc(r){var e;const t=r.auth,s=await r.getIdToken(),i=await Qo(r,Uv(t,{idToken:s}));de(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Bv(o.providerUserInfo):[],c=Yx(r.providerData,a),u=r.isAnonymous,h=!(r.email&&o.passwordHash)&&!(c!=null&&c.length),d=u?h:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new rh(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(r,p)}async function Xx(r){const e=Pe(r);await Uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yx(r,e){return[...r.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Bv(r){return r.map(e=>{var{providerId:t}=e,s=Md(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Zx(r,e){const t=await Lv(r,{},async()=>{const s=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=r.config,a=Fv(r,i,"/v1/token",`key=${o}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Mv.fetch()(a,{method:"POST",headers:c,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eD(r,e){return wn(r,"POST","/v2/accounts:revokeToken",Gn(r,e))}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=Hm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:o}=await Zx(e,t);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:o}=t,a=new ei;return s&&(de(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(de(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(de(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Xn(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,o=Md(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Qo(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wx(this,e)}reload(){return Xx(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await Qo(this,Hx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,o,a,c,u,h,d;const p=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,w=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,L=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:U,isAnonymous:ee,providerData:ne,stsTokenManager:R}=t;de(F&&R,e,"internal-error");const T=ei.fromJSON(this.name,R);de(typeof F=="string",e,"internal-error"),Xn(p,e.name),Xn(g,e.name),de(typeof U=="boolean",e,"internal-error"),de(typeof ee=="boolean",e,"internal-error"),Xn(w,e.name),Xn(P,e.name),Xn(x,e.name),Xn(S,e.name),Xn(V,e.name),Xn(L,e.name);const b=new kn({uid:F,auth:e,email:g,emailVerified:U,displayName:p,isAnonymous:ee,photoURL:P,phoneNumber:w,tenantId:x,stsTokenManager:T,createdAt:V,lastLoginAt:L});return ne&&Array.isArray(ne)&&(b.providerData=ne.map(_=>Object.assign({},_))),S&&(b._redirectEventId=S),b}static async _fromIdTokenResponse(e,t,s=!1){const i=new ei;i.updateFromServerResponse(t);const o=new kn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Uc(o),o}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];de(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Bv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new ei;c.updateFromIdToken(s);const u=new kn({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new rh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,h),u}}/**
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
 */const Wm=new Map;function Vn(r){Fn(r instanceof Function,"Expected a class definition");let e=Wm.get(r);return e?(Fn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wm.set(r,e),e)}/**
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
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qv.type="NONE";const Qm=qv;/**
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
 */function uc(r,e,t){return`firebase:${r}:${e}:${t}`}class ti{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=uc(this.userKey,i.apiKey,o),this.fullPersistenceKey=uc("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ti(Vn(Qm),e,s);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||Vn(Qm);const a=uc(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){const p=kn._fromJSON(e,d);h!==o&&(c=p),o=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new ti(o,e,s):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==o)try{await h._remove(a)}catch{}})),new ti(o,e,s))}}/**
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
 */function Jm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($v(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(Wv(e))return"Webos";if(jv(e))return"Safari";if((e.includes("chrome/")||Gv(e))&&!e.includes("edge/"))return"Chrome";if(Kv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $v(r=st()){return/firefox\//i.test(r)}function jv(r=st()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gv(r=st()){return/crios\//i.test(r)}function zv(r=st()){return/iemobile/i.test(r)}function Kv(r=st()){return/android/i.test(r)}function Hv(r=st()){return/blackberry/i.test(r)}function Wv(r=st()){return/webos/i.test(r)}function Bd(r=st()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function tD(r=st()){var e;return Bd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nD(){return v0()&&document.documentMode===10}function Qv(r=st()){return Bd(r)||Kv(r)||Wv(r)||Hv(r)||/windows phone/i.test(r)||zv(r)}/**
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
 */function Jv(r,e=[]){let t;switch(r){case"Browser":t=Jm(st());break;case"Worker":t=`${Jm(st())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vs}/${s}`}/**
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
 */class rD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function sD(r,e={}){return wn(r,"GET","/v2/passwordPolicy",Gn(r,e))}/**
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
 */const iD=6;class oD{constructor(e){var t,s,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:iD,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class aD{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.beforeStateQueue=new rD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vn(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uv(this,{idToken:e}),s=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Cn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(fr(this));const t=e?Pe(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sD(this),t=new oD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await eD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vn(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Vn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Lx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function As(r){return Pe(r)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=R0(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cD(r){Rl=r}function Xv(r){return Rl.loadJS(r)}function lD(){return Rl.recaptchaEnterpriseScript}function uD(){return Rl.gapiScript}function hD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class dD{constructor(){this.enterprise=new fD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const pD="recaptcha-enterprise",Yv="NO_RECAPTCHA";class mD{constructor(e){this.type=pD,this.auth=As(e)}async verify(e="verify",t=!1){async function s(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{Kx(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new zx(u);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function i(o,a,c){const u=window.grecaptcha;Km(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(h=>{a(h)}).catch(()=>{a(Yv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dD().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{s(this.auth).then(c=>{if(!t&&Km(window.grecaptcha))i(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lD();u.length!==0&&(u+=c),Xv(u).then(()=>{i(c,o,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Ym(r,e,t,s=!1,i=!1){const o=new mD(r);let a;if(i)a=Yv;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function sh(r,e,t,s,i){var o;if(!((o=r._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ym(r,e,t,t==="getOobCode");return s(r,a)}else return s(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ym(r,e,t,t==="getOobCode");return s(r,c)}else return Promise.reject(a)})}/**
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
 */function gD(r,e){const t=Ti(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(mr(o,e??{}))return i;Zt(i,"already-initialized")}return t.initialize({options:e})}function _D(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Vn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yD(r,e,t){const s=As(r);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,o=Zv(e),{host:a,port:c}=ID(e),u=c===null?"":`:${c}`;s.config.emulator={url:`${o}//${a}${u}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),vD()}function Zv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ID(r){const e=Zv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:Zm(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:Zm(a)}}}function Zm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function vD(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class qd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,t){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function wD(r,e){return wn(r,"POST","/v1/accounts:resetPassword",Gn(r,e))}async function TD(r,e){return wn(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ED(r,e){return Al(r,"POST","/v1/accounts:signInWithPassword",Gn(r,e))}async function bD(r,e){return wn(r,"POST","/v1/accounts:sendOobCode",Gn(r,e))}async function AD(r,e){return bD(r,e)}/**
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
 */async function RD(r,e){return Al(r,"POST","/v1/accounts:signInWithEmailLink",Gn(r,e))}async function SD(r,e){return Al(r,"POST","/v1/accounts:signInWithEmailLink",Gn(r,e))}/**
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
 */class Jo extends qd{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Jo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Jo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sh(e,t,"signInWithPassword",ED);case"emailLink":return RD(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sh(e,s,"signUpPassword",TD);case"emailLink":return SD(e,{idToken:t,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ni(r,e){return Al(r,"POST","/v1/accounts:signInWithIdp",Gn(r,e))}/**
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
 */const PD="http://localhost";class ys extends qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,o=Md(t,["providerId","signInMethod"]);if(!s||!i)return null;const a=new ys(s,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ni(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ni(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ni(e,t)}buildRequest(){const e={requestUri:PD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ea(t)}return e}}/**
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
 */function CD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xD(r){const e=co(lo(r)).link,t=e?co(lo(e)).deep_link_id:null,s=co(lo(r)).deep_link_id;return(s?co(lo(s)).link:null)||s||t||e||r}class $d{constructor(e){var t,s,i,o,a,c;const u=co(lo(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,d=(s=u.oobCode)!==null&&s!==void 0?s:null,p=CD((i=u.mode)!==null&&i!==void 0?i:null);de(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=xD(e);try{return new $d(t)}catch{return null}}}/**
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
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,t){return Jo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=$d.parseLink(t);return de(s,"argument-error"),Jo._fromEmailAndCode(e,s.code,s.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ya extends ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends ya{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ys._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ir.credential(t,s)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class or extends ya{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends ya{constructor(){super("twitter.com")}static credential(e,t){return ys._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ar.credential(t,s)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const o=await kn._fromIdTokenResponse(e,s,i),a=eg(s);return new wi({user:o,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=eg(s);return new wi({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function eg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Bc extends vn{constructor(e,t,s,i){var o;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Bc(e,t,s,i)}}function tw(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(r,o,e,s):o})}async function DD(r,e,t=!1){const s=await Qo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return wi._forOperation(r,"link",s)}/**
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
 */async function kD(r,e,t=!1){const{auth:s}=r;if(Cn(s.app))return Promise.reject(fr(s));const i="reauthenticate";try{const o=await Qo(r,tw(s,i,e,r),t);de(o.idToken,s,"internal-error");const a=Ud(o.idToken);de(a,s,"internal-error");const{sub:c}=a;return de(r.uid===c,s,"user-mismatch"),wi._forOperation(r,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Zt(s,"user-mismatch"),o}}/**
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
 */async function nw(r,e,t=!1){if(Cn(r.app))return Promise.reject(fr(r));const s="signIn",i=await tw(r,s,e),o=await wi._fromIdTokenResponse(r,s,i);return t||await r._updateCurrentUser(o.user),o}async function VD(r,e){return nw(As(r),e)}/**
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
 */class jd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Gd._fromServerResponse(e,t):"totpInfo"in t?zd._fromServerResponse(e,t):Zt(e,"internal-error")}}class Gd extends jd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Gd(t)}}class zd extends jd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new zd(t)}}/**
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
 */function ND(r,e,t){var s;de(((s=t.url)===null||s===void 0?void 0:s.length)>0,r,"invalid-continue-uri"),de(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(de(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(de(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function OD(r,e){const t=Pe(r),s=await wD(t,{oobCode:e}),i=s.requestType;switch(de(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":de(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":de(s.mfaInfo,t,"internal-error");default:de(s.email,t,"internal-error")}let o=null;return s.mfaInfo&&(o=jd._fromServerResponse(As(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:o},operation:i}}/**
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
 */async function MD(r,e,t){const s=As(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){de(c.handleCodeInApp,s,"argument-error"),c&&ND(s,a,c)}o(i,t),await sh(s,i,"getOobCode",AD)}async function LD(r,e,t){if(Cn(r.app))return Promise.reject(fr(r));const s=Pe(r),i=Mi.credentialWithLink(e,t||Fc());return de(i._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),VD(s,i)}function FD(r,e,t,s){return Pe(r).onIdTokenChanged(e,t,s)}function UD(r,e,t){return Pe(r).beforeAuthStateChanged(e,t)}const qc="__sak";/**
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
 */class rw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BD=1e3,qD=10;class sw extends rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);nD()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qD):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},BD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sw.type="LOCAL";const $D=sw;/**
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
 */class iw extends rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iw.type="SESSION";const ow=iw;/**
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
 */function jD(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Sl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async h=>h(t.origin,o)),u=await jD(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sl.receivers=[];/**
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
 */function Kd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class GD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const h=Kd("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(g.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function _n(){return window}function zD(r){_n().location.href=r}/**
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
 */function aw(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function KD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HD(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function WD(){return aw()?self:null}/**
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
 */const cw="firebaseLocalStorageDb",QD=1,$c="firebaseLocalStorage",lw="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pl(r,e){return r.transaction([$c],e?"readwrite":"readonly").objectStore($c)}function JD(){const r=indexedDB.deleteDatabase(cw);return new Ia(r).toPromise()}function ih(){const r=indexedDB.open(cw,QD);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore($c,{keyPath:lw})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains($c)?e(s):(s.close(),await JD(),e(await ih()))})})}async function tg(r,e,t){const s=Pl(r,!0).put({[lw]:e,value:t});return new Ia(s).toPromise()}async function XD(r,e){const t=Pl(r,!1).get(e),s=await new Ia(t).toPromise();return s===void 0?null:s.value}function ng(r,e){const t=Pl(r,!0).delete(e);return new Ia(t).toPromise()}const YD=800,ZD=3;class uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ZD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sl._getInstance(WD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await KD(),!this.activeServiceWorker)return;this.sender=new GD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await tg(e,qc,"1"),await ng(e,qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>tg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>XD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ng(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Pl(i,!1).getAll();return new Ia(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uw.type="LOCAL";const e1=uw;new _a(3e4,6e4);/**
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
 */function t1(r,e){return e?Vn(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Hd extends qd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ni(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function n1(r){return nw(r.auth,new Hd(r),r.bypassAuthState)}function r1(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),kD(t,new Hd(r),r.bypassAuthState)}async function s1(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),DD(t,new Hd(r),r.bypassAuthState)}/**
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
 */class hw{constructor(e,t,s,i,o=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n1;case"linkViaPopup":case"linkViaRedirect":return s1;case"reauthViaPopup":case"reauthViaRedirect":return r1;default:Zt(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i1=new _a(2e3,1e4);class zs extends hw{constructor(e,t,s,i,o){super(e,t,i,o),this.provider=s,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}zs.currentPopupAction=null;/**
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
 */const o1="pendingRedirect",hc=new Map;class a1 extends hw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const s=await c1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c1(r,e){const t=h1(e),s=u1(r);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function l1(r,e){hc.set(r._key(),e)}function u1(r){return Vn(r._redirectPersistence)}function h1(r){return uc(o1,r.config.apiKey,r.name)}async function d1(r,e,t=!1){if(Cn(r.app))return Promise.reject(fr(r));const s=As(r),i=t1(s,e),a=await new a1(s,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const f1=10*60*1e3;class p1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!dw(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(gn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f1&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function dw({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dw(r);default:return!1}}/**
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
 */async function g1(r,e={}){return wn(r,"GET","/v1/projects",e)}/**
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
 */const _1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function I1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await g1(r);for(const t of e)try{if(v1(t))return}catch{}Zt(r,"unauthorized-domain")}function v1(r){const e=Fc(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!y1.test(t))return!1;if(_1.test(r))return s===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const w1=new _a(3e4,6e4);function sg(){const r=_n().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function T1(r){return new Promise((e,t)=>{var s,i,o;function a(){sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sg(),t(gn(r,"network-request-failed"))},timeout:w1.get()})}if(!((i=(s=_n().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=_n().gapi)===null||o===void 0)&&o.load)a();else{const c=hD("iframefcb");return _n()[c]=()=>{gapi.load?a():t(gn(r,"network-request-failed"))},Xv(`${uD()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw dc=null,e})}let dc=null;function E1(r){return dc=dc||T1(r),dc}/**
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
 */const b1=new _a(5e3,15e3),A1="__/auth/iframe",R1="emulator/auth/iframe",S1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C1(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Fd(e,R1):`https://${r.config.authDomain}/${A1}`,s={apiKey:e.apiKey,appName:r.name,v:vs},i=P1.get(r.config.apiHost);i&&(s.eid=i);const o=r._getFrameworks();return o.length&&(s.fw=o.join(",")),`${t}?${ea(s).slice(1)}`}async function x1(r){const e=await E1(r),t=_n().gapi;return de(t,r,"internal-error"),e.open({where:document.body,url:C1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S1,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const a=gn(r,"network-request-failed"),c=_n().setTimeout(()=>{o(a)},b1.get());function u(){_n().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const D1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k1=500,V1=600,N1="_blank",O1="http://localhost";class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M1(r,e,t,s=k1,i=V1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},D1),{width:s.toString(),height:i.toString(),top:o,left:a}),h=st().toLowerCase();t&&(c=Gv(h)?N1:t),$v(h)&&(e=e||O1,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[w,P])=>`${g}${w}=${P},`,"");if(tD(h)&&c!=="_self")return L1(e||"",c),new ig(null);const p=window.open(e||"",c,d);de(p,r,"popup-blocked");try{p.focus()}catch{}return new ig(p)}function L1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const F1="__/auth/handler",U1="emulator/auth/handler",B1=encodeURIComponent("fac");async function og(r,e,t,s,i,o){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:vs,eventId:i};if(e instanceof ew){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",A0(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof ya){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}r.tenantId&&(a.tid=r.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await r._getAppCheckToken(),h=u?`#${B1}=${encodeURIComponent(u)}`:"";return`${q1(r)}?${ea(c).slice(1)}${h}`}function q1({config:r}){return r.emulator?Fd(r,U1):`https://${r.authDomain}/${F1}`}/**
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
 */const yu="webStorageSupport";class $1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ow,this._completeRedirectFn=d1,this._overrideRedirectResult=l1}async _openPopup(e,t,s,i){var o;Fn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await og(e,t,s,Fc(),i);return M1(e,a,Kd())}async _openRedirect(e,t,s,i){await this._originValidation(e);const o=await og(e,t,s,Fc(),i);return zD(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Fn(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await x1(e),s=new p1(e);return t.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yu,{type:yu},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[yu];a!==void 0&&t(!!a),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=I1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qv()||jv()||Bd()}}const j1=$1;var ag="@firebase/auth",cg="1.8.1";/**
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
 */class G1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K1(r){as(new gr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;de(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jv(r)},h=new aD(s,i,o,u);return _D(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),as(new gr("auth-internal",e=>{const t=As(e.getProvider("auth").getImmediate());return(s=>new G1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(ag,cg,z1(r)),fn(ag,cg,"esm2017")}/**
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
 */const H1=5*60,W1=T_("authIdTokenMaxAge")||H1;let lg=null;const Q1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>W1)return;const i=t==null?void 0:t.token;lg!==i&&(lg=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function J1(r=Ph()){const e=Ti(r,"auth");if(e.isInitialized())return e.getImmediate();const t=gD(r,{popupRedirectResolver:j1,persistence:[e1,$D,ow]}),s=T_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=Q1(o.toString());UD(t,a,()=>a(t.currentUser)),FD(t,c=>a(c))}}const i=I_("auth");return i&&yD(t,`http://${i}`),t}function X1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}cD({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=i=>{const o=gn("internal-error");o.customData=i,t(o)},s.type="text/javascript",s.charset="UTF-8",X1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K1("Browser");const oo=J1(),Ja=Gt("init"),Xa=Gt(null);function Do(){return{state:Ja,user:Xa,ready(){return new Promise(r=>{let e;e=vo(Ja,()=>{Ja.value==="ready"&&(e==null||e(),r(!0))},{immediate:!0})})},async sendVerifyEmail(r){try{const{firestore:e,db:t}=Zs().withDatabase(),s=e.collection(t,"verify"),i=e.doc(s);console.log("id",i.id);const o=new URL(window.location.href);o.searchParams.set("verifyId",i.id);const a=o.toString();await e.setDoc(i,{isVerified:!1,email:r}),await MD(oo,r,{url:a,handleCodeInApp:!0}),window.localStorage.setItem("verifyId",i.id)}catch(e){throw console.error(e),e}},async handleVerifyLink(r,e){try{const t=await OD(oo,r);if(console.log("resp",t),t.operation==="EMAIL_SIGNIN"){const{firestore:s,db:i}=Zs().withDatabase(),o=s.doc(i,"verify",e),a=await s.getDoc(o);if(a.exists())try{const c=a.data();console.log("verifyData",c);const{email:u}=c??{},h=window.location.href,d=await LD(oo,u,h);console.log("result.user",d==null?void 0:d.user,"auth.currentUser",oo.currentUser);const p=oo.currentUser;await s.updateDoc(o,{isVerified:!0,email:p.email,uid:p.uid})}catch(c){throw console.error(c),c}}}catch(t){throw console.error(t),t}},async continueSignIn(){const r=window.localStorage.getItem("verifyId"),e=!!r,{firestore:t,db:s}=Zs().withDatabase();if(e){const c=t.doc(s,"verify",r),h=(await t.getDoc(c)).data();console.log("verifyData",h);const{email:d,uid:p}=h??{};if(!d||!p)console.error(r,"invalid data: ",h);else try{window.localStorage.setItem("loginInfo",JSON.stringify({email:d,uid:p})),window.localStorage.removeItem("verifyId")}catch(g){console.error(g)}}const i=await Promise.resolve(window.localStorage.getItem("loginInfo")).then(c=>{try{const u=JSON.parse(c??"");if(u.uid&&u.email)return u}catch{}return null}),o=i==null?void 0:i.email,a=i==null?void 0:i.uid;return o&&a&&(Xa.value={email:o,uid:a}),Ja.value="ready",Xa},signOut(){window.localStorage.removeItem("loginInfo"),Xa.value=null}}}function Y1(){async function r(s){return await r0({image:s,quality:75})}async function e(s,i,o){const a=await new Promise(u=>{const h=new FileReader;h.readAsDataURL(s),h.onloadend=function(){const d=h.result;u(d)}}),c=await new Promise(u=>{const h=document.createElement("canvas"),d=h.getContext("2d"),p=new Image;p.src=a,p.onload=()=>{const g=Math.max(i/p.width,o/p.height),w=p.width*g,P=p.height*g;h.width=i,h.height=o;const x=(w-i)/2,S=(P-o)/2;d.drawImage(p,-x,-S,w,P),u(h)}});return new Promise(u=>{c.toBlob(h=>u(h))})}async function t(s){return new Promise((i,o)=>{const a=new FileReader;a.onload=()=>{const c=new Image;c.onload=()=>{let u=null;fp.getData(c.src,function(){const d=fp.getTag(this,"DateTimeOriginal")||null;d&&(u=Date.UTC.apply(null,d.split(/\D/).map((p,g)=>g===1?Number(p)-1:Number(p)))||null)});const h={width:c.width,height:c.height,size:s.size,takenAt:u??null};i(h)},c.onerror=o,c.src=URL.createObjectURL(s)},a.onerror=o,a.readAsArrayBuffer(s)})}return{convert:r,resize:e,getPhotoMetadata:t}}const zr=Gt([]);function fw(){const r="Photo",e="photo",{user:t}=Do(),s=Lo(()=>{var p;return`${r}_${((p=es(t))==null?void 0:p.uid)??"guest"}`});async function i(){try{return await new Promise((g,w)=>{const P=indexedDB.open(s.value,1);P.onupgradeneeded=x=>{const S=x.target.result;if(!S.objectStoreNames.contains(e)){const V=S.createObjectStore(e,{keyPath:"id",autoIncrement:!1});V.createIndex("id","id",{unique:!0}),V.createIndex("name","name",{unique:!1}),V.createIndex("dataNearOriginal","dataNearOriginal",{unique:!1}),V.createIndex("dataThumbnail","dataThumbnail",{unique:!1}),V.createIndex("createdAt","createdAt",{unique:!1}),V.createIndex("updatedAt","updatedAt",{unique:!1})}},P.onsuccess=x=>{var S;return g((S=x.target)==null?void 0:S.result)},P.onerror=x=>{var S;return w((S=x.target)==null?void 0:S.error)}})}catch(p){throw console.error(p),p}}async function o(p){const P=(await i()).transaction(e,"readonly").objectStore(e),x=(p==null?void 0:p.index)==="name"?"name":"createdAt",S=P.index(x),V=(p==null?void 0:p.sortBy)==="asc"?"next":"prev",L=S.openCursor(null,V);return zr.value=await new Promise((F,U)=>{const ee=[];L.onsuccess=ne=>{const R=ne.target;let T;(T=R.result)?(ee.push(T.value),T.continue()):F(ee)},L.onerror=()=>U(L.error)}),zr}async function a(p="file"){var V;const g=(V=es(Do().user))==null?void 0:V.email;if(!g)throw new Error("User is Not Logined");const w=Y1(),{upsertToDatabase:P,uploadToStorage:x}=Zs(),S=async L=>{const{name:F,kind:U}=L;if(U==="file"&&/\.(png|jpe?g|webp|gif)$/i.test(F)){const ee=await L.getFile(),ne=Ox(),{webpBlob:R}=await w.convert(ee),{webpBlob:T}=await w.resize(R,200,200).then(w.convert),b={storeType:"local",createdAt:Date.now(),name:ee.name,dataNearOriginal:R,dataThumbnail:T,metadata:await w.getPhotoMetadata(ee)};await P(`users/${g}/photos`,`${ne}`,{filename:b.name,createdAt:b.createdAt,updatedAt:b.createdAt,metadata:b.metadata});{const _=`${g}/${ne}/norg`;x(_,R).complete.then(({url:I})=>(console.log("norg","uploaded",I),P(`users/${g}/photos`,`${ne}`,{urlOriginal:I})))}{const _=`${g}/${ne}/thumbnail`;x(_,T).complete.then(async({url:I})=>(console.log("thumbnail","uploaded",I),P(`users/${g}/photos`,`${ne}`,{urlThumbnail:I})))}}};try{if(p==="folder"){const L=await window.showDirectoryPicker();for await(const F of L.values())await S(F)}else{const L=await window.showOpenFilePicker({multiple:!0,types:[{description:"Images",accept:{"image/*":[".png",".gif",".jpeg",".jpg",".webp"]}}]});for await(const F of L.values())await S(F)}}catch(L){if(L.name==="AbortError")return;throw L}}async function c(){(await i()).transaction(e,"readwrite").objectStore(e).clear(),zr.value.splice(0,zr.value.length)}async function u(p){var P;const g=await i();let w;{const S=g.transaction(e,"readonly").objectStore(e);w=await new Promise((V,L)=>{const F=S.get(p);F.onsuccess=()=>V(F.result??null),F.onerror=()=>L(F.error)})}if(w==null)return!1;if(w.storeType==="server"){const x=(P=es(Do().user))==null?void 0:P.email;if(!x)throw new Error("User is Not Logined");const{removeFromDatabase:S,removeFromStorage:V}=Zs();await S(`users/${x}/photos`,`${p}`);{const L=`${x}/${p}/norg`;await V(L)}{const L=`${x}/${p}/thumbnail`;await V(L)}}g.transaction(e,"readwrite").objectStore(e).delete(p),zr.value=zr.value.filter(x=>x.id!==p)}async function h(){var x;const p=await i(),{getListFromDatabase:g}=Zs(),w=(x=es(t))==null?void 0:x.email;if(!w)throw new Error("User is Not Logined");const P=await g(`users/${w}/photos`,{orderBy:"createdAt",direction:"desc"});for(const S of P){let V;const L=S.id;{const U=p.transaction(e,"readonly").objectStore(e);V=await new Promise((ee,ne)=>{const R=U.get(L);R.onsuccess=()=>ee(R.result??null),R.onerror=()=>ne(R.error)})}{const U=p.transaction(e,"readwrite").objectStore(e);if(V!=null&&(V.updatedAt===S.updatedAt||V.updatedAt>S.updatedAt))continue;const ee={id:L,storeType:"server",createdAt:S.createdAt,updatedAt:S.updatedAt,name:S.filename,urlNearOriginal:S.urlOriginal,urlThumbnail:S.urlThumbnail,metadata:S.metadata};U.put(ee)}}await o()}return{photos:zr,loadFiles:o,pickAndSaveFile:a,clearFiles:c,removeFile:u,syncToServerFiles:h}}const Z1={class:"modal-wrap"},ek={class:"photo-view-modal"},tk={class:"modal-header"},nk={class:"modal-body"},rk={class:"photo-view"},sk=["src","alt","title"],ik={class:"photo-preview-list"},ok=["onClick"],ak=["src"],ck=Jc({__name:"PhotoViewModal",setup(r,{expose:e}){const t=Lo(()=>{const p=a.value;return[...Array.isArray(p)?p:[]]}),s=Gt(0),i=Lo(()=>{var g;const p=(g=a.value)==null?void 0:g[s.value];if(p==null)return null;{let w=p==null?void 0:p.nearOriginalSrc;return o.value=!0,p.type==="local"&&(w=w??(p!=null&&p.dataNearOriginal?URL.createObjectURL(p==null?void 0:p.dataNearOriginal):void 0)),{...p,nearOriginalSrc:w}}}),o=Gt(!1),a=Gt([]),c=Gt(!1),u=(p,g)=>{const w=[];for(const P of p)w.push({id:P.id,type:P.storeType,name:P.name,size:P.metadata.size,...P.storeType==="local"&&{thumbnailSrc:URL.createObjectURL(P.dataThumbnail),dataNearOriginal:P.dataNearOriginal},...P.storeType==="server"&&{thumbnailSrc:P.urlThumbnail,nearOriginalSrc:P.urlNearOriginal}});a.value=w,g!=null&&(s.value=a.value.findIndex(P=>P.id===g))},h=()=>c.value=!0,d=()=>c.value=!1;return e({setPhotos:u,show:h,hide:d}),(p,g)=>{var w,P;return Ih((Rt(),Lt("div",Z1,[g[4]||(g[4]=Oe("div",{class:"modal-overlay"},null,-1)),Oe("div",ek,[Oe("div",tk,[Oe("span",{class:"close-btn",onClick:g[0]||(g[0]=x=>d())},"X")]),Oe("div",nk,[Oe("div",rk,[Oe("div",null,[Oe("img",{src:(w=i.value)==null?void 0:w.nearOriginalSrc,alt:(P=i.value)==null?void 0:P.name,title:i.value!=null?[`name: ${i.value.name}`,`size: ${i.value.size}`].join(`
`):"",style:Hc({visibility:o.value?"hidden":"visible"}),onLoad:g[1]||(g[1]=x=>o.value=!1),onError:g[2]||(g[2]=x=>{o.value=!1,x.target.src="https://placehold.co/10"})},null,44,sk)])]),Oe("div",ik,[Oe("div",null,[(Rt(!0),Lt(Jt,null,Gg(t.value,(x,S)=>(Rt(),Lt("div",{key:x.id,class:ri(s.value===S&&"selected"),onClick:V=>s.value=S},[Oe("img",{src:x.thumbnailSrc,onError:g[3]||(g[3]=V=>{V.target.src="https://placehold.co/10"})},null,40,ak)],10,ok))),128))])])])])],512)),[[Ah,c.value]])}}}),lk={key:0,class:"select-file"},uk={key:1,class:"image-file-list-view"},hk=["onMouseenter","onMouseleave","title"],dk=["src","alt"],fk={class:"info-overlay"},pk=["onClick"],mk=["onClick"],gk=Jc({__name:"ContentPage",setup(r){const e=Gt(null),t=fw(),s=Gt({}),i=Lo(()=>{const u=[];for(const h of t.photos.value)u.push({id:h.id,type:h.storeType,name:h.name,src:h.storeType==="local"?URL.createObjectURL(h.dataThumbnail):h.urlThumbnail,metadata:{...h.metadata,createdAt:h.createdAt}});return u}),o=async()=>{try{await t.pickAndSaveFile()}catch(u){console.error(u),window.alert(`error on pickAndSaveFile(): ${u.message}`)}},a=u=>{var h,d,p,g;(d=(h=e.value)==null?void 0:h.show)==null||d.call(h),(g=(p=e.value)==null?void 0:p.setPhotos)==null||g.call(p,t.photos.value,u)},c=async u=>{try{await t.removeFile(u)}catch(h){console.error(h),window.alert(`error on removeFile(): ${h.message}`)}};return wh(async()=>{const u=Do().user;vo(()=>u,async({value:h})=>{try{(h==null?void 0:h.uid)!=null&&await t.syncToServerFiles(),await t.loadFiles()}catch(d){console.error(d),window.alert(`error on loadFiles(): ${d.message}`)}},{immediate:!0})}),(u,h)=>(Rt(),Lt(Jt,null,[Oe("main",null,[i.value.length===0?(Rt(),Lt("div",lk,[Oe("button",{onClick:h[0]||(h[0]=d=>o())},"Select File")])):(Rt(),Lt("div",uk,[(Rt(!0),Lt(Jt,null,Gg(i.value,d=>(Rt(),Lt("div",{key:d.id,class:"image-container",onMouseenter:p=>s.value[`${d.id}`]=!0,onMouseleave:p=>s.value[`${d.id}`]=!1,title:[`filename: ${d.name}`,`createdAt: ${Intl.DateTimeFormat("ko",{dateStyle:"long",timeStyle:"medium"}).format(d.metadata.createdAt)}`].join(`
`)},[Oe("img",{src:d.src,alt:d.name,onError:h[1]||(h[1]=p=>{p.target.src="https://placehold.co/10"})},null,40,dk),Ih(Oe("div",fk,[Oe("button",{class:"view-btn",onClick:p=>a(d.id)},"👀",8,pk),Oe("button",{class:"delete-btn",onClick:p=>c(d.id)},"🗑️",8,mk)],512),[[Ah,s.value[`${d.id}`]]])],40,hk))),128))]))]),nn(ck,{ref_key:"photoViewModal",ref:e},null,512)],64))}}),Wd=(r,e)=>{const t=r.__vccOpts||r;for(const[s,i]of e)t[s]=i;return t},_k=Wd(gk,[["__scopeId","data-v-dddc9caa"]]),yk={id:"main"},Ik={key:0},vk={key:1},wk={key:2},Tk=Jc({__name:"MainView",setup(r){const{user:e,sendVerifyEmail:t,handleVerifyLink:s,continueSignIn:i,signOut:o}=Do(),a=fw(),c=Gt("idle"),u=Gt("createdAt"),h=Gt("desc"),d=async()=>{try{const S=h.value==="desc"?u.value:u.value==="createdAt"?"name":"createdAt",V=h.value==="asc"?"desc":"asc";await a.loadFiles({index:S,sortBy:V}),u.value=S,h.value=V}catch(S){console.error(S),window.alert(`error on loadFiles(): ${S.message}`)}},p=async()=>{try{await a.pickAndSaveFile()}catch(S){console.error(S),window.alert(`error on pickAndSaveFile(): ${S.message}`)}},g=()=>a.clearFiles(),w=async()=>{if(c.value==="idle")try{c.value="pending",await a.syncToServerFiles(),c.value="success"}catch(S){console.error(S),c.value="error"}finally{c.value!="idle"&&(await new Promise(S=>setTimeout(S,3e3)),c.value="idle")}},P=async()=>{const S=window.prompt("이메일을 입력하세요");if(S)try{await t(S),window.alert("메일이 발송되었습니다. 메일 인증 후 새로고침하세요")}catch(V){const L=V.code,F=V.message;window.alert(`errorCode: ${L}
errorMessage: ${F}`)}},x=async()=>{o(),await a.loadFiles({index:u.value,sortBy:h.value})};return wh(async()=>{const S=new URLSearchParams(window.location.search);if(!!S.get("oobCode")){console.log("urlParams",S);try{await s(S.get("oobCode"),S.get("verifyId")),window.alert("인증되었습니다.")}catch(L){window.alert(`인증에 실패했습니다.
${L.message}`)}window.location.href=window.location.host;return}else await i();console.log("user",es(e))}),(S,V)=>(Rt(),Lt("div",yk,[Oe("header",null,[es(e)==null?(Rt(),Lt("button",{key:0,onClick:V[0]||(V[0]=L=>P())},"login")):(Rt(),Lt("button",{key:1,onClick:V[1]||(V[1]=L=>x())},"logout")),Oe("button",{onClick:V[2]||(V[2]=L=>d())}," Sort: "+Us({createdAt:"생성",name:"파일명"}[u.value])+" "+Us({asc:"^",desc:"v"}[h.value]),1),Oe("button",{onClick:V[3]||(V[3]=L=>p())},"Add File"),Oe("button",{onClick:V[4]||(V[4]=L=>g())},"Clear All Files"),Oe("button",{onClick:V[5]||(V[5]=L=>w())},"Sync")]),nn(_k),Ih(Oe("footer",null,"Footer",512),[[Ah,!1]]),Oe("div",{class:ri(["sync-status-notify",[c.value]])},[Oe("div",{class:ri(["sync-icon",[c.value==="pending"&&"spinner"]])},null,2),c.value==="pending"?(Rt(),Lt("span",Ik,Us("Syncing data..."))):c.value==="success"?(Rt(),Lt("span",vk,Us("Sync complete."))):c.value==="error"?(Rt(),Lt("span",wk,Us("Sync failed. Please try again."))):TE("",!0)],2)]))}}),Ek=Wd(Tk,[["__scopeId","data-v-8bdca45e"]]),bk=Jc({__name:"App",setup(r){return(e,t)=>(Rt(),l_(Ek))}}),Ak=Wd(bk,[["__scopeId","data-v-4fd108ce"]]);e0(Ak).mount("#app");
