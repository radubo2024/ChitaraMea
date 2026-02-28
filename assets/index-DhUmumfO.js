function Xd(s,c){for(var o=0;o<c.length;o++){const m=c[o];if(typeof m!="string"&&!Array.isArray(m)){for(const d in m)if(d!=="default"&&!(d in s)){const f=Object.getOwnPropertyDescriptor(m,d);f&&Object.defineProperty(s,d,f.get?f:{enumerable:!0,get:()=>m[d]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))m(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const C of f.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&m(C)}).observe(document,{childList:!0,subtree:!0});function o(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function m(d){if(d.ep)return;d.ep=!0;const f=o(d);fetch(d.href,f)}})();function Uc(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Xu={exports:{}},Pa={},qu={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function qd(){if(fc)return X;fc=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),C=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),E=Symbol.iterator;function U(v){return v===null||typeof v!="object"?null:(v=E&&v[E]||v["@@iterator"],typeof v=="function"?v:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,P={};function w(v,_,Y){this.props=v,this.context=_,this.refs=P,this.updater=Y||L}w.prototype.isReactComponent={},w.prototype.setState=function(v,_){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,_,"setState")},w.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Z(){}Z.prototype=w.prototype;function te(v,_,Y){this.props=v,this.context=_,this.refs=P,this.updater=Y||L}var ne=te.prototype=new Z;ne.constructor=te,H(ne,w.prototype),ne.isPureReactComponent=!0;var K=Array.isArray,pe=Object.prototype.hasOwnProperty,_e={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function qe(v,_,Y){var q,re={},ae=null,oe=null;if(_!=null)for(q in _.ref!==void 0&&(oe=_.ref),_.key!==void 0&&(ae=""+_.key),_)pe.call(_,q)&&!Ie.hasOwnProperty(q)&&(re[q]=_[q]);var se=arguments.length-2;if(se===1)re.children=Y;else if(1<se){for(var fe=Array(se),Qe=0;Qe<se;Qe++)fe[Qe]=arguments[Qe+2];re.children=fe}if(v&&v.defaultProps)for(q in se=v.defaultProps,se)re[q]===void 0&&(re[q]=se[q]);return{$$typeof:s,type:v,key:ae,ref:oe,props:re,_owner:_e.current}}function kn(v,_){return{$$typeof:s,type:v.type,key:_,ref:v.ref,props:v.props,_owner:v._owner}}function En(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function rr(v){var _={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Y){return _[Y]})}var hn=/\/+/g;function Je(v,_){return typeof v=="object"&&v!==null&&v.key!=null?rr(""+v.key):_.toString(36)}function ln(v,_,Y,q,re){var ae=typeof v;(ae==="undefined"||ae==="boolean")&&(v=null);var oe=!1;if(v===null)oe=!0;else switch(ae){case"string":case"number":oe=!0;break;case"object":switch(v.$$typeof){case s:case c:oe=!0}}if(oe)return oe=v,re=re(oe),v=q===""?"."+Je(oe,0):q,K(re)?(Y="",v!=null&&(Y=v.replace(hn,"$&/")+"/"),ln(re,_,Y,"",function(Qe){return Qe})):re!=null&&(En(re)&&(re=kn(re,Y+(!re.key||oe&&oe.key===re.key?"":(""+re.key).replace(hn,"$&/")+"/")+v)),_.push(re)),1;if(oe=0,q=q===""?".":q+":",K(v))for(var se=0;se<v.length;se++){ae=v[se];var fe=q+Je(ae,se);oe+=ln(ae,_,Y,fe,re)}else if(fe=U(v),typeof fe=="function")for(v=fe.call(v),se=0;!(ae=v.next()).done;)ae=ae.value,fe=q+Je(ae,se++),oe+=ln(ae,_,Y,fe,re);else if(ae==="object")throw _=String(v),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return oe}function vn(v,_,Y){if(v==null)return v;var q=[],re=0;return ln(v,q,"","",function(ae){return _.call(Y,ae,re++)}),q}function Te(v){if(v._status===-1){var _=v._result;_=_(),_.then(function(Y){(v._status===0||v._status===-1)&&(v._status=1,v._result=Y)},function(Y){(v._status===0||v._status===-1)&&(v._status=2,v._result=Y)}),v._status===-1&&(v._status=0,v._result=_)}if(v._status===1)return v._result.default;throw v._result}var De={current:null},M={transition:null},J={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:M,ReactCurrentOwner:_e};function I(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:vn,forEach:function(v,_,Y){vn(v,function(){_.apply(this,arguments)},Y)},count:function(v){var _=0;return vn(v,function(){_++}),_},toArray:function(v){return vn(v,function(_){return _})||[]},only:function(v){if(!En(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},X.Component=w,X.Fragment=o,X.Profiler=d,X.PureComponent=te,X.StrictMode=m,X.Suspense=S,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,X.act=I,X.cloneElement=function(v,_,Y){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var q=H({},v.props),re=v.key,ae=v.ref,oe=v._owner;if(_!=null){if(_.ref!==void 0&&(ae=_.ref,oe=_e.current),_.key!==void 0&&(re=""+_.key),v.type&&v.type.defaultProps)var se=v.type.defaultProps;for(fe in _)pe.call(_,fe)&&!Ie.hasOwnProperty(fe)&&(q[fe]=_[fe]===void 0&&se!==void 0?se[fe]:_[fe])}var fe=arguments.length-2;if(fe===1)q.children=Y;else if(1<fe){se=Array(fe);for(var Qe=0;Qe<fe;Qe++)se[Qe]=arguments[Qe+2];q.children=se}return{$$typeof:s,type:v.type,key:re,ref:ae,props:q,_owner:oe}},X.createContext=function(v){return v={$$typeof:C,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:f,_context:v},v.Consumer=v},X.createElement=qe,X.createFactory=function(v){var _=qe.bind(null,v);return _.type=v,_},X.createRef=function(){return{current:null}},X.forwardRef=function(v){return{$$typeof:z,render:v}},X.isValidElement=En,X.lazy=function(v){return{$$typeof:G,_payload:{_status:-1,_result:v},_init:Te}},X.memo=function(v,_){return{$$typeof:y,type:v,compare:_===void 0?null:_}},X.startTransition=function(v){var _=M.transition;M.transition={};try{v()}finally{M.transition=_}},X.unstable_act=I,X.useCallback=function(v,_){return De.current.useCallback(v,_)},X.useContext=function(v){return De.current.useContext(v)},X.useDebugValue=function(){},X.useDeferredValue=function(v){return De.current.useDeferredValue(v)},X.useEffect=function(v,_){return De.current.useEffect(v,_)},X.useId=function(){return De.current.useId()},X.useImperativeHandle=function(v,_,Y){return De.current.useImperativeHandle(v,_,Y)},X.useInsertionEffect=function(v,_){return De.current.useInsertionEffect(v,_)},X.useLayoutEffect=function(v,_){return De.current.useLayoutEffect(v,_)},X.useMemo=function(v,_){return De.current.useMemo(v,_)},X.useReducer=function(v,_,Y){return De.current.useReducer(v,_,Y)},X.useRef=function(v){return De.current.useRef(v)},X.useState=function(v){return De.current.useState(v)},X.useSyncExternalStore=function(v,_,Y){return De.current.useSyncExternalStore(v,_,Y)},X.useTransition=function(){return De.current.useTransition()},X.version="18.3.1",X}var gc;function ms(){return gc||(gc=1,qu.exports=qd()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function ep(){if(hc)return Pa;hc=1;var s=ms(),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function C(z,S,y){var G,E={},U=null,L=null;y!==void 0&&(U=""+y),S.key!==void 0&&(U=""+S.key),S.ref!==void 0&&(L=S.ref);for(G in S)m.call(S,G)&&!f.hasOwnProperty(G)&&(E[G]=S[G]);if(z&&z.defaultProps)for(G in S=z.defaultProps,S)E[G]===void 0&&(E[G]=S[G]);return{$$typeof:c,type:z,key:U,ref:L,props:E,_owner:d.current}}return Pa.Fragment=o,Pa.jsx=C,Pa.jsxs=C,Pa}var vc;function np(){return vc||(vc=1,Xu.exports=ep()),Xu.exports}var u=np(),b=ms();const Mc=Uc(b),rp=Xd({__proto__:null,default:Mc},[b]);var Ji={},es={exports:{}},We={},ns={exports:{}},rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function ap(){return Dc||(Dc=1,(function(s){function c(M,J){var I=M.length;M.push(J);e:for(;0<I;){var v=I-1>>>1,_=M[v];if(0<d(_,J))M[v]=J,M[I]=_,I=v;else break e}}function o(M){return M.length===0?null:M[0]}function m(M){if(M.length===0)return null;var J=M[0],I=M.pop();if(I!==J){M[0]=I;e:for(var v=0,_=M.length,Y=_>>>1;v<Y;){var q=2*(v+1)-1,re=M[q],ae=q+1,oe=M[ae];if(0>d(re,I))ae<_&&0>d(oe,re)?(M[v]=oe,M[ae]=I,v=ae):(M[v]=re,M[q]=I,v=q);else if(ae<_&&0>d(oe,I))M[v]=oe,M[ae]=I,v=ae;else break e}}return J}function d(M,J){var I=M.sortIndex-J.sortIndex;return I!==0?I:M.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var C=Date,z=C.now();s.unstable_now=function(){return C.now()-z}}var S=[],y=[],G=1,E=null,U=3,L=!1,H=!1,P=!1,w=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(M){for(var J=o(y);J!==null;){if(J.callback===null)m(y);else if(J.startTime<=M)m(y),J.sortIndex=J.expirationTime,c(S,J);else break;J=o(y)}}function K(M){if(P=!1,ne(M),!H)if(o(S)!==null)H=!0,Te(pe);else{var J=o(y);J!==null&&De(K,J.startTime-M)}}function pe(M,J){H=!1,P&&(P=!1,Z(qe),qe=-1),L=!0;var I=U;try{for(ne(J),E=o(S);E!==null&&(!(E.expirationTime>J)||M&&!rr());){var v=E.callback;if(typeof v=="function"){E.callback=null,U=E.priorityLevel;var _=v(E.expirationTime<=J);J=s.unstable_now(),typeof _=="function"?E.callback=_:E===o(S)&&m(S),ne(J)}else m(S);E=o(S)}if(E!==null)var Y=!0;else{var q=o(y);q!==null&&De(K,q.startTime-J),Y=!1}return Y}finally{E=null,U=I,L=!1}}var _e=!1,Ie=null,qe=-1,kn=5,En=-1;function rr(){return!(s.unstable_now()-En<kn)}function hn(){if(Ie!==null){var M=s.unstable_now();En=M;var J=!0;try{J=Ie(!0,M)}finally{J?Je():(_e=!1,Ie=null)}}else _e=!1}var Je;if(typeof te=="function")Je=function(){te(hn)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,vn=ln.port2;ln.port1.onmessage=hn,Je=function(){vn.postMessage(null)}}else Je=function(){w(hn,0)};function Te(M){Ie=M,_e||(_e=!0,Je())}function De(M,J){qe=w(function(){M(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_continueExecution=function(){H||L||(H=!0,Te(pe))},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):kn=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return U},s.unstable_getFirstCallbackNode=function(){return o(S)},s.unstable_next=function(M){switch(U){case 1:case 2:case 3:var J=3;break;default:J=U}var I=U;U=J;try{return M()}finally{U=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(M,J){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var I=U;U=M;try{return J()}finally{U=I}},s.unstable_scheduleCallback=function(M,J,I){var v=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?v+I:v):I=v,M){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=I+_,M={id:G++,callback:J,priorityLevel:M,startTime:I,expirationTime:_,sortIndex:-1},I>v?(M.sortIndex=I,c(y,M),o(S)===null&&M===o(y)&&(P?(Z(qe),qe=-1):P=!0,De(K,I-v))):(M.sortIndex=_,c(S,M),H||L||(H=!0,Te(pe))),M},s.unstable_shouldYield=rr,s.unstable_wrapCallback=function(M){var J=U;return function(){var I=U;U=J;try{return M.apply(this,arguments)}finally{U=I}}}})(rs)),rs}var Cc;function ip(){return Cc||(Cc=1,ns.exports=ap()),ns.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function tp(){if(xc)return We;xc=1;var s=ms(),c=ip();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,d={};function f(e,n){C(e,n),C(e+"Capture",n)}function C(e,n){for(d[e]=n,e=0;e<n.length;e++)m.add(n[e])}var z=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},E={};function U(e){return S.call(E,e)?!0:S.call(G,e)?!1:y.test(e)?E[e]=!0:(G[e]=!0,!1)}function L(e,n,r,a){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,n,r,a){if(n===null||typeof n>"u"||L(e,n,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function P(e,n,r,a,i,t,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=t,this.removeEmptyString=l}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){w[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];w[n]=new P(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){w[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){w[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){w[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){w[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){w[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){w[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){w[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function te(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Z,te);w[n]=new P(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Z,te);w[n]=new P(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Z,te);w[n]=new P(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){w[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),w.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){w[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,n,r,a){var i=w.hasOwnProperty(n)?w[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(H(n,r,i,a)&&(r=null),a||i===null?U(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,n,r):e.setAttribute(n,r))))}var K=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),_e=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),kn=Symbol.for("react.profiler"),En=Symbol.for("react.provider"),rr=Symbol.for("react.context"),hn=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),ln=Symbol.for("react.suspense_list"),vn=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),M=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,v;function _(e){if(v===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);v=n&&n[1]||""}return`
`+v+e}var Y=!1;function q(e,n){if(!e||Y)return"";Y=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(A){var a=A}Reflect.construct(e,[],n)}else{try{n.call()}catch(A){a=A}e.call(n.prototype)}else{try{throw Error()}catch(A){a=A}e()}}catch(A){if(A&&a&&typeof A.stack=="string"){for(var i=A.stack.split(`
`),t=a.stack.split(`
`),l=i.length-1,p=t.length-1;1<=l&&0<=p&&i[l]!==t[p];)p--;for(;1<=l&&0<=p;l--,p--)if(i[l]!==t[p]){if(l!==1||p!==1)do if(l--,p--,0>p||i[l]!==t[p]){var g=`
`+i[l].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=l&&0<=p);break}}}finally{Y=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?_(e):""}function re(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case _e:return"Portal";case kn:return"Profiler";case qe:return"StrictMode";case Je:return"Suspense";case ln:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rr:return(e.displayName||"Context")+".Consumer";case En:return(e._context.displayName||"Context")+".Provider";case hn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vn:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case Te:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}function oe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(n);case 8:return n===qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e){var n=fe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,t=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){a=""+l,t.call(this,l)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ra(e){e._valueTracker||(e._valueTracker=Qe(e))}function Cs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),a="";return e&&(a=fe(e)?e.checked?"true":"false":e.value),e=a,e!==r?(n.setValue(e),!0):!1}function Ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tt(e,n){var r=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function xs(e,n){var r=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;r=se(n.value!=null?n.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ys(e,n){n=n.checked,n!=null&&ne(e,"checked",n,!1)}function ut(e,n){ys(e,n);var r=se(n.value),a=n.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?st(e,n.type,r):n.hasOwnProperty("defaultValue")&&st(e,n.type,se(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function As(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function st(e,n,r){(n!=="number"||Ba(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Jr=Array.isArray;function vr(e,n,r,a){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function lt(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ss(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(o(92));if(Jr(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:se(r)}}function Es(e,n){var r=se(n.value),a=se(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function bs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?zs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ia,Gs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,a,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ia.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Qr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rm=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){rm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Kr[n]=Kr[e]})});function ws(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+n).trim():n+"px"}function Ns(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=ws(r,n[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var am=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(e,n){if(n){if(am[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function mt(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function pt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ft=null,Dr=null,Cr=null;function _s(e){if(e=va(e)){if(typeof ft!="function")throw Error(o(280));var n=e.stateNode;n&&(n=li(n),ft(e.stateNode,e.type,n))}}function js(e){Dr?Cr?Cr.push(e):Cr=[e]:Dr=e}function Ps(){if(Dr){var e=Dr,n=Cr;if(Cr=Dr=null,_s(e),n)for(e=0;e<n.length;e++)_s(n[e])}}function ks(e,n){return e(n)}function Fs(){}var gt=!1;function Us(e,n,r){if(gt)return e(n,r);gt=!0;try{return ks(e,n,r)}finally{gt=!1,(Dr!==null||Cr!==null)&&(Fs(),Ps())}}function Zr(e,n){var r=e.stateNode;if(r===null)return null;var a=li(r);if(a===null)return null;r=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,n,typeof r));return r}var ht=!1;if(z)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){ht=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{ht=!1}function im(e,n,r,a,i,t,l,p,g){var A=Array.prototype.slice.call(arguments,3);try{n.apply(r,A)}catch(j){this.onError(j)}}var Xr=!1,Ta=null,La=!1,vt=null,tm={onError:function(e){Xr=!0,Ta=e}};function um(e,n,r,a,i,t,l,p,g){Xr=!1,Ta=null,im.apply(tm,arguments)}function sm(e,n,r,a,i,t,l,p,g){if(um.apply(this,arguments),Xr){if(Xr){var A=Ta;Xr=!1,Ta=null}else throw Error(o(198));La||(La=!0,vt=A)}}function ar(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Ms(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Rs(e){if(ar(e)!==e)throw Error(o(188))}function lm(e){var n=e.alternate;if(!n){if(n=ar(e),n===null)throw Error(o(188));return n!==e?null:e}for(var r=e,a=n;;){var i=r.return;if(i===null)break;var t=i.alternate;if(t===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===t.child){for(t=i.child;t;){if(t===r)return Rs(i),e;if(t===a)return Rs(i),n;t=t.sibling}throw Error(o(188))}if(r.return!==a.return)r=i,a=t;else{for(var l=!1,p=i.child;p;){if(p===r){l=!0,r=i,a=t;break}if(p===a){l=!0,a=i,r=t;break}p=p.sibling}if(!l){for(p=t.child;p;){if(p===r){l=!0,r=t,a=i;break}if(p===a){l=!0,a=t,r=i;break}p=p.sibling}if(!l)throw Error(o(189))}}if(r.alternate!==a)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:n}function Bs(e){return e=lm(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Is(e);if(n!==null)return n;e=e.sibling}return null}var Ts=c.unstable_scheduleCallback,Ls=c.unstable_cancelCallback,om=c.unstable_shouldYield,cm=c.unstable_requestPaint,xe=c.unstable_now,mm=c.unstable_getCurrentPriorityLevel,Dt=c.unstable_ImmediatePriority,Os=c.unstable_UserBlockingPriority,Oa=c.unstable_NormalPriority,dm=c.unstable_LowPriority,Vs=c.unstable_IdlePriority,Va=null,Dn=null;function pm(e){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Va,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:hm,fm=Math.log,gm=Math.LN2;function hm(e){return e>>>=0,e===0?32:31-(fm(e)/gm|0)|0}var Ha=64,$a=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,t=e.pingedLanes,l=r&268435455;if(l!==0){var p=l&~i;p!==0?a=qr(p):(t&=l,t!==0&&(a=qr(t)))}else l=r&~i,l!==0?a=qr(l):t!==0&&(a=qr(t));if(a===0)return 0;if(n!==0&&n!==a&&(n&i)===0&&(i=a&-a,t=n&-n,i>=t||i===16&&(t&4194240)!==0))return n;if((a&4)!==0&&(a|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)r=31-on(n),i=1<<r,a|=e[r],n&=~i;return a}function vm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dm(e,n){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,t=e.pendingLanes;0<t;){var l=31-on(t),p=1<<l,g=i[l];g===-1?((p&r)===0||(p&a)!==0)&&(i[l]=vm(p,n)):g<=n&&(e.expiredLanes|=p),t&=~p}}function Ct(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hs(){var e=Ha;return Ha<<=1,(Ha&4194240)===0&&(Ha=64),e}function xt(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function ea(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=r}function Cm(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-on(r),t=1<<i;n[i]=0,a[i]=-1,e[i]=-1,r&=~t}}function yt(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var a=31-on(r),i=1<<a;i&n|e[a]&n&&(e[a]|=n),r&=~i}}var le=0;function $s(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ws,At,Js,Qs,Ks,St=!1,Ja=[],Fn=null,Un=null,Mn=null,na=new Map,ra=new Map,Rn=[],xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zs(e,n){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":na.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(n.pointerId)}}function aa(e,n,r,a,i,t){return e===null||e.nativeEvent!==t?(e={blockedOn:n,domEventName:r,eventSystemFlags:a,nativeEvent:t,targetContainers:[i]},n!==null&&(n=va(n),n!==null&&At(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ym(e,n,r,a,i){switch(n){case"focusin":return Fn=aa(Fn,e,n,r,a,i),!0;case"dragenter":return Un=aa(Un,e,n,r,a,i),!0;case"mouseover":return Mn=aa(Mn,e,n,r,a,i),!0;case"pointerover":var t=i.pointerId;return na.set(t,aa(na.get(t)||null,e,n,r,a,i)),!0;case"gotpointercapture":return t=i.pointerId,ra.set(t,aa(ra.get(t)||null,e,n,r,a,i)),!0}return!1}function Ys(e){var n=ir(e.target);if(n!==null){var r=ar(n);if(r!==null){if(n=r.tag,n===13){if(n=Ms(r),n!==null){e.blockedOn=n,Ks(e.priority,function(){Js(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=bt(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);dt=a,r.target.dispatchEvent(a),dt=null}else return n=va(r),n!==null&&At(n),e.blockedOn=r,!1;n.shift()}return!0}function Xs(e,n,r){Qa(e)&&r.delete(n)}function Am(){St=!1,Fn!==null&&Qa(Fn)&&(Fn=null),Un!==null&&Qa(Un)&&(Un=null),Mn!==null&&Qa(Mn)&&(Mn=null),na.forEach(Xs),ra.forEach(Xs)}function ia(e,n){e.blockedOn===n&&(e.blockedOn=null,St||(St=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Am)))}function ta(e){function n(i){return ia(i,e)}if(0<Ja.length){ia(Ja[0],e);for(var r=1;r<Ja.length;r++){var a=Ja[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Fn!==null&&ia(Fn,e),Un!==null&&ia(Un,e),Mn!==null&&ia(Mn,e),na.forEach(n),ra.forEach(n),r=0;r<Rn.length;r++)a=Rn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Rn.length&&(r=Rn[0],r.blockedOn===null);)Ys(r),r.blockedOn===null&&Rn.shift()}var xr=K.ReactCurrentBatchConfig,Ka=!0;function Sm(e,n,r,a){var i=le,t=xr.transition;xr.transition=null;try{le=1,Et(e,n,r,a)}finally{le=i,xr.transition=t}}function Em(e,n,r,a){var i=le,t=xr.transition;xr.transition=null;try{le=4,Et(e,n,r,a)}finally{le=i,xr.transition=t}}function Et(e,n,r,a){if(Ka){var i=bt(e,n,r,a);if(i===null)Ot(e,n,a,Za,r),Zs(e,a);else if(ym(i,e,n,r,a))a.stopPropagation();else if(Zs(e,a),n&4&&-1<xm.indexOf(e)){for(;i!==null;){var t=va(i);if(t!==null&&Ws(t),t=bt(e,n,r,a),t===null&&Ot(e,n,a,Za,r),t===i)break;i=t}i!==null&&a.stopPropagation()}else Ot(e,n,a,null,r)}}var Za=null;function bt(e,n,r,a){if(Za=null,e=pt(a),e=ir(e),e!==null)if(n=ar(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Ms(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Za=e,null}function qs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mm()){case Dt:return 1;case Os:return 4;case Oa:case dm:return 16;case Vs:return 536870912;default:return 16}default:return 16}}var Bn=null,zt=null,Ya=null;function el(){if(Ya)return Ya;var e,n=zt,r=n.length,a,i="value"in Bn?Bn.value:Bn.textContent,t=i.length;for(e=0;e<r&&n[e]===i[e];e++);var l=r-e;for(a=1;a<=l&&n[r-a]===i[t-a];a++);return Ya=i.slice(e,1<a?1-a:void 0)}function Xa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qa(){return!0}function nl(){return!1}function Ke(e){function n(r,a,i,t,l){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=t,this.target=l,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(t):t[p]);return this.isDefaultPrevented=(t.defaultPrevented!=null?t.defaultPrevented:t.returnValue===!1)?qa:nl,this.isPropagationStopped=nl,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gt=Ke(yr),ua=I({},yr,{view:0,detail:0}),bm=Ke(ua),wt,Nt,sa,ei=I({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jt,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sa&&(sa&&e.type==="mousemove"?(wt=e.screenX-sa.screenX,Nt=e.screenY-sa.screenY):Nt=wt=0,sa=e),wt)},movementY:function(e){return"movementY"in e?e.movementY:Nt}}),rl=Ke(ei),zm=I({},ei,{dataTransfer:0}),Gm=Ke(zm),wm=I({},ua,{relatedTarget:0}),_t=Ke(wm),Nm=I({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=Ke(Nm),jm=I({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=Ke(jm),km=I({},yr,{data:0}),al=Ke(km),Fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mm[e])?!!n[e]:!1}function jt(){return Rm}var Bm=I({},ua,{key:function(e){if(e.key){var n=Fm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jt,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Im=Ke(Bm),Tm=I({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),il=Ke(Tm),Lm=I({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jt}),Om=Ke(Lm),Vm=I({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hm=Ke(Vm),$m=I({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wm=Ke($m),Jm=[9,13,27,32],Pt=z&&"CompositionEvent"in window,la=null;z&&"documentMode"in document&&(la=document.documentMode);var Qm=z&&"TextEvent"in window&&!la,tl=z&&(!Pt||la&&8<la&&11>=la),ul=" ",sl=!1;function ll(e,n){switch(e){case"keyup":return Jm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ol(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function Km(e,n){switch(e){case"compositionend":return ol(n);case"keypress":return n.which!==32?null:(sl=!0,ul);case"textInput":return e=n.data,e===ul&&sl?null:e;default:return null}}function Zm(e,n){if(Ar)return e==="compositionend"||!Pt&&ll(e,n)?(e=el(),Ya=zt=Bn=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tl&&n.locale!=="ko"?null:n.data;default:return null}}var Ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ym[e.type]:n==="textarea"}function ml(e,n,r,a){js(a),n=ti(n,"onChange"),0<n.length&&(r=new Gt("onChange","change",null,r,a),e.push({event:r,listeners:n}))}var oa=null,ca=null;function Xm(e){Nl(e,0)}function ni(e){var n=Gr(e);if(Cs(n))return e}function qm(e,n){if(e==="change")return n}var dl=!1;if(z){var kt;if(z){var Ft="oninput"in document;if(!Ft){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),Ft=typeof pl.oninput=="function"}kt=Ft}else kt=!1;dl=kt&&(!document.documentMode||9<document.documentMode)}function fl(){oa&&(oa.detachEvent("onpropertychange",gl),ca=oa=null)}function gl(e){if(e.propertyName==="value"&&ni(ca)){var n=[];ml(n,ca,e,pt(e)),Us(Xm,n)}}function ed(e,n,r){e==="focusin"?(fl(),oa=n,ca=r,oa.attachEvent("onpropertychange",gl)):e==="focusout"&&fl()}function nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(ca)}function rd(e,n){if(e==="click")return ni(n)}function ad(e,n){if(e==="input"||e==="change")return ni(n)}function id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var cn=typeof Object.is=="function"?Object.is:id;function ma(e,n){if(cn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),a=Object.keys(n);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!S.call(n,i)||!cn(e[i],n[i]))return!1}return!0}function hl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vl(e,n){var r=hl(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=n&&a>=n)return{node:r,offset:n-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hl(r)}}function Dl(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dl(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cl(){for(var e=window,n=Ba();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ba(e.document)}return n}function Ut(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function td(e){var n=Cl(),r=e.focusedElem,a=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Dl(r.ownerDocument.documentElement,r)){if(a!==null&&Ut(r)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,t=Math.min(a.start,i);a=a.end===void 0?t:Math.min(a.end,i),!e.extend&&t>a&&(i=a,a=t,t=i),i=vl(r,t);var l=vl(r,a);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),t>a?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ud=z&&"documentMode"in document&&11>=document.documentMode,Sr=null,Mt=null,da=null,Rt=!1;function xl(e,n,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Rt||Sr==null||Sr!==Ba(a)||(a=Sr,"selectionStart"in a&&Ut(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),da&&ma(da,a)||(da=a,a=ti(Mt,"onSelect"),0<a.length&&(n=new Gt("onSelect","select",null,n,r),e.push({event:n,listeners:a}),n.target=Sr)))}function ri(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Er={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},Bt={},yl={};z&&(yl=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function ai(e){if(Bt[e])return Bt[e];if(!Er[e])return e;var n=Er[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in yl)return Bt[e]=n[r];return e}var Al=ai("animationend"),Sl=ai("animationiteration"),El=ai("animationstart"),bl=ai("transitionend"),zl=new Map,Gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){zl.set(e,n),f(n,[e])}for(var It=0;It<Gl.length;It++){var Tt=Gl[It],sd=Tt.toLowerCase(),ld=Tt[0].toUpperCase()+Tt.slice(1);In(sd,"on"+ld)}In(Al,"onAnimationEnd"),In(Sl,"onAnimationIteration"),In(El,"onAnimationStart"),In("dblclick","onDoubleClick"),In("focusin","onFocus"),In("focusout","onBlur"),In(bl,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),od=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function wl(e,n,r){var a=e.type||"unknown-event";e.currentTarget=r,sm(a,n,void 0,e),e.currentTarget=null}function Nl(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var t=void 0;if(n)for(var l=a.length-1;0<=l;l--){var p=a[l],g=p.instance,A=p.currentTarget;if(p=p.listener,g!==t&&i.isPropagationStopped())break e;wl(i,p,A),t=g}else for(l=0;l<a.length;l++){if(p=a[l],g=p.instance,A=p.currentTarget,p=p.listener,g!==t&&i.isPropagationStopped())break e;wl(i,p,A),t=g}}}if(La)throw e=vt,La=!1,vt=null,e}function me(e,n){var r=n[Qt];r===void 0&&(r=n[Qt]=new Set);var a=e+"__bubble";r.has(a)||(_l(n,e,2,!1),r.add(a))}function Lt(e,n,r){var a=0;n&&(a|=4),_l(r,e,a,n)}var ii="_reactListening"+Math.random().toString(36).slice(2);function fa(e){if(!e[ii]){e[ii]=!0,m.forEach(function(r){r!=="selectionchange"&&(od.has(r)||Lt(r,!1,e),Lt(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ii]||(n[ii]=!0,Lt("selectionchange",!1,n))}}function _l(e,n,r,a){switch(qs(n)){case 1:var i=Sm;break;case 4:i=Em;break;default:i=Et}r=i.bind(null,n,r,e),i=void 0,!ht||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function Ot(e,n,r,a,i){var t=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var p=a.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(l===4)for(l=a.return;l!==null;){var g=l.tag;if((g===3||g===4)&&(g=l.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;l=l.return}for(;p!==null;){if(l=ir(p),l===null)return;if(g=l.tag,g===5||g===6){a=t=l;continue e}p=p.parentNode}}a=a.return}Us(function(){var A=t,j=pt(r),k=[];e:{var N=zl.get(e);if(N!==void 0){var R=Gt,T=e;switch(e){case"keypress":if(Xa(r)===0)break e;case"keydown":case"keyup":R=Im;break;case"focusin":T="focus",R=_t;break;case"focusout":T="blur",R=_t;break;case"beforeblur":case"afterblur":R=_t;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Om;break;case Al:case Sl:case El:R=_m;break;case bl:R=Hm;break;case"scroll":R=bm;break;case"wheel":R=Wm;break;case"copy":case"cut":case"paste":R=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=il}var O=(n&4)!==0,ye=!O&&e==="scroll",D=O?N!==null?N+"Capture":null:N;O=[];for(var h=A,x;h!==null;){x=h;var F=x.stateNode;if(x.tag===5&&F!==null&&(x=F,D!==null&&(F=Zr(h,D),F!=null&&O.push(ga(h,F,x)))),ye)break;h=h.return}0<O.length&&(N=new R(N,T,null,r,j),k.push({event:N,listeners:O}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",N&&r!==dt&&(T=r.relatedTarget||r.fromElement)&&(ir(T)||T[bn]))break e;if((R||N)&&(N=j.window===j?j:(N=j.ownerDocument)?N.defaultView||N.parentWindow:window,R?(T=r.relatedTarget||r.toElement,R=A,T=T?ir(T):null,T!==null&&(ye=ar(T),T!==ye||T.tag!==5&&T.tag!==6)&&(T=null)):(R=null,T=A),R!==T)){if(O=rl,F="onMouseLeave",D="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(O=il,F="onPointerLeave",D="onPointerEnter",h="pointer"),ye=R==null?N:Gr(R),x=T==null?N:Gr(T),N=new O(F,h+"leave",R,r,j),N.target=ye,N.relatedTarget=x,F=null,ir(j)===A&&(O=new O(D,h+"enter",T,r,j),O.target=x,O.relatedTarget=ye,F=O),ye=F,R&&T)n:{for(O=R,D=T,h=0,x=O;x;x=br(x))h++;for(x=0,F=D;F;F=br(F))x++;for(;0<h-x;)O=br(O),h--;for(;0<x-h;)D=br(D),x--;for(;h--;){if(O===D||D!==null&&O===D.alternate)break n;O=br(O),D=br(D)}O=null}else O=null;R!==null&&jl(k,N,R,O,!1),T!==null&&ye!==null&&jl(k,ye,T,O,!0)}}e:{if(N=A?Gr(A):window,R=N.nodeName&&N.nodeName.toLowerCase(),R==="select"||R==="input"&&N.type==="file")var V=qm;else if(cl(N))if(dl)V=ad;else{V=nd;var $=ed}else(R=N.nodeName)&&R.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(V=rd);if(V&&(V=V(e,A))){ml(k,V,r,j);break e}$&&$(e,N,A),e==="focusout"&&($=N._wrapperState)&&$.controlled&&N.type==="number"&&st(N,"number",N.value)}switch($=A?Gr(A):window,e){case"focusin":(cl($)||$.contentEditable==="true")&&(Sr=$,Mt=A,da=null);break;case"focusout":da=Mt=Sr=null;break;case"mousedown":Rt=!0;break;case"contextmenu":case"mouseup":case"dragend":Rt=!1,xl(k,r,j);break;case"selectionchange":if(ud)break;case"keydown":case"keyup":xl(k,r,j)}var W;if(Pt)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Ar?ll(e,r)&&(Q="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Q="onCompositionStart");Q&&(tl&&r.locale!=="ko"&&(Ar||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Ar&&(W=el()):(Bn=j,zt="value"in Bn?Bn.value:Bn.textContent,Ar=!0)),$=ti(A,Q),0<$.length&&(Q=new al(Q,e,null,r,j),k.push({event:Q,listeners:$}),W?Q.data=W:(W=ol(r),W!==null&&(Q.data=W)))),(W=Qm?Km(e,r):Zm(e,r))&&(A=ti(A,"onBeforeInput"),0<A.length&&(j=new al("onBeforeInput","beforeinput",null,r,j),k.push({event:j,listeners:A}),j.data=W))}Nl(k,n)})}function ga(e,n,r){return{instance:e,listener:n,currentTarget:r}}function ti(e,n){for(var r=n+"Capture",a=[];e!==null;){var i=e,t=i.stateNode;i.tag===5&&t!==null&&(i=t,t=Zr(e,r),t!=null&&a.unshift(ga(e,t,i)),t=Zr(e,n),t!=null&&a.push(ga(e,t,i))),e=e.return}return a}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jl(e,n,r,a,i){for(var t=n._reactName,l=[];r!==null&&r!==a;){var p=r,g=p.alternate,A=p.stateNode;if(g!==null&&g===a)break;p.tag===5&&A!==null&&(p=A,i?(g=Zr(r,t),g!=null&&l.unshift(ga(r,g,p))):i||(g=Zr(r,t),g!=null&&l.push(ga(r,g,p)))),r=r.return}l.length!==0&&e.push({event:n,listeners:l})}var cd=/\r\n?/g,md=/\u0000|\uFFFD/g;function Pl(e){return(typeof e=="string"?e:""+e).replace(cd,`
`).replace(md,"")}function ui(e,n,r){if(n=Pl(n),Pl(e)!==n&&r)throw Error(o(425))}function si(){}var Vt=null,Ht=null;function $t(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wt=typeof setTimeout=="function"?setTimeout:void 0,dd=typeof clearTimeout=="function"?clearTimeout:void 0,kl=typeof Promise=="function"?Promise:void 0,pd=typeof queueMicrotask=="function"?queueMicrotask:typeof kl<"u"?function(e){return kl.resolve(null).then(e).catch(fd)}:Wt;function fd(e){setTimeout(function(){throw e})}function Jt(e,n){var r=n,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),ta(n);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);ta(n)}function Tn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),Cn="__reactFiber$"+zr,ha="__reactProps$"+zr,bn="__reactContainer$"+zr,Qt="__reactEvents$"+zr,gd="__reactListeners$"+zr,hd="__reactHandles$"+zr;function ir(e){var n=e[Cn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[bn]||r[Cn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Fl(e);e!==null;){if(r=e[Cn])return r;e=Fl(e)}return n}e=r,r=e.parentNode}return null}function va(e){return e=e[Cn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function li(e){return e[ha]||null}var Kt=[],wr=-1;function Ln(e){return{current:e}}function de(e){0>wr||(e.current=Kt[wr],Kt[wr]=null,wr--)}function ce(e,n){wr++,Kt[wr]=e.current,e.current=n}var On={},ke=Ln(On),Le=Ln(!1),tr=On;function Nr(e,n){var r=e.type.contextTypes;if(!r)return On;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},t;for(t in r)i[t]=n[t];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function oi(){de(Le),de(ke)}function Ul(e,n,r){if(ke.current!==On)throw Error(o(168));ce(ke,n),ce(Le,r)}function Ml(e,n,r){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(o(108,oe(e)||"Unknown",i));return I({},r,a)}function ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,tr=ke.current,ce(ke,e),ce(Le,Le.current),!0}function Rl(e,n,r){var a=e.stateNode;if(!a)throw Error(o(169));r?(e=Ml(e,n,tr),a.__reactInternalMemoizedMergedChildContext=e,de(Le),de(ke),ce(ke,e)):de(Le),ce(Le,r)}var zn=null,mi=!1,Zt=!1;function Bl(e){zn===null?zn=[e]:zn.push(e)}function vd(e){mi=!0,Bl(e)}function Vn(){if(!Zt&&zn!==null){Zt=!0;var e=0,n=le;try{var r=zn;for(le=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}zn=null,mi=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),Ts(Dt,Vn),i}finally{le=n,Zt=!1}}return null}var _r=[],jr=0,di=null,pi=0,en=[],nn=0,ur=null,Gn=1,wn="";function sr(e,n){_r[jr++]=pi,_r[jr++]=di,di=e,pi=n}function Il(e,n,r){en[nn++]=Gn,en[nn++]=wn,en[nn++]=ur,ur=e;var a=Gn;e=wn;var i=32-on(a)-1;a&=~(1<<i),r+=1;var t=32-on(n)+i;if(30<t){var l=i-i%5;t=(a&(1<<l)-1).toString(32),a>>=l,i-=l,Gn=1<<32-on(n)+i|r<<i|a,wn=t+e}else Gn=1<<t|r<<i|a,wn=e}function Yt(e){e.return!==null&&(sr(e,1),Il(e,1,0))}function Xt(e){for(;e===di;)di=_r[--jr],_r[jr]=null,pi=_r[--jr],_r[jr]=null;for(;e===ur;)ur=en[--nn],en[nn]=null,wn=en[--nn],en[nn]=null,Gn=en[--nn],en[nn]=null}var Ze=null,Ye=null,ge=!1,mn=null;function Tl(e,n){var r=un(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Ll(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ze=e,Ye=Tn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ze=e,Ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=ur!==null?{id:Gn,overflow:wn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=un(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Ze=e,Ye=null,!0):!1;default:return!1}}function qt(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eu(e){if(ge){var n=Ye;if(n){var r=n;if(!Ll(e,n)){if(qt(e))throw Error(o(418));n=Tn(r.nextSibling);var a=Ze;n&&Ll(e,n)?Tl(a,r):(e.flags=e.flags&-4097|2,ge=!1,Ze=e)}}else{if(qt(e))throw Error(o(418));e.flags=e.flags&-4097|2,ge=!1,Ze=e}}}function Ol(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function fi(e){if(e!==Ze)return!1;if(!ge)return Ol(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$t(e.type,e.memoizedProps)),n&&(n=Ye)){if(qt(e))throw Vl(),Error(o(418));for(;n;)Tl(e,n),n=Tn(n.nextSibling)}if(Ol(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){Ye=Tn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}Ye=null}}else Ye=Ze?Tn(e.stateNode.nextSibling):null;return!0}function Vl(){for(var e=Ye;e;)e=Tn(e.nextSibling)}function Pr(){Ye=Ze=null,ge=!1}function nu(e){mn===null?mn=[e]:mn.push(e)}var Dd=K.ReactCurrentBatchConfig;function Da(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var a=r.stateNode}if(!a)throw Error(o(147,e));var i=a,t=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===t?n.ref:(n=function(l){var p=i.refs;l===null?delete p[t]:p[t]=l},n._stringRef=t,n)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function gi(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Hl(e){var n=e._init;return n(e._payload)}function $l(e){function n(D,h){if(e){var x=D.deletions;x===null?(D.deletions=[h],D.flags|=16):x.push(h)}}function r(D,h){if(!e)return null;for(;h!==null;)n(D,h),h=h.sibling;return null}function a(D,h){for(D=new Map;h!==null;)h.key!==null?D.set(h.key,h):D.set(h.index,h),h=h.sibling;return D}function i(D,h){return D=Yn(D,h),D.index=0,D.sibling=null,D}function t(D,h,x){return D.index=x,e?(x=D.alternate,x!==null?(x=x.index,x<h?(D.flags|=2,h):x):(D.flags|=2,h)):(D.flags|=1048576,h)}function l(D){return e&&D.alternate===null&&(D.flags|=2),D}function p(D,h,x,F){return h===null||h.tag!==6?(h=Wu(x,D.mode,F),h.return=D,h):(h=i(h,x),h.return=D,h)}function g(D,h,x,F){var V=x.type;return V===Ie?j(D,h,x.props.children,F,x.key):h!==null&&(h.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Te&&Hl(V)===h.type)?(F=i(h,x.props),F.ref=Da(D,h,x),F.return=D,F):(F=Ii(x.type,x.key,x.props,null,D.mode,F),F.ref=Da(D,h,x),F.return=D,F)}function A(D,h,x,F){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Ju(x,D.mode,F),h.return=D,h):(h=i(h,x.children||[]),h.return=D,h)}function j(D,h,x,F,V){return h===null||h.tag!==7?(h=gr(x,D.mode,F,V),h.return=D,h):(h=i(h,x),h.return=D,h)}function k(D,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wu(""+h,D.mode,x),h.return=D,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case pe:return x=Ii(h.type,h.key,h.props,null,D.mode,x),x.ref=Da(D,null,h),x.return=D,x;case _e:return h=Ju(h,D.mode,x),h.return=D,h;case Te:var F=h._init;return k(D,F(h._payload),x)}if(Jr(h)||J(h))return h=gr(h,D.mode,x,null),h.return=D,h;gi(D,h)}return null}function N(D,h,x,F){var V=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return V!==null?null:p(D,h,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pe:return x.key===V?g(D,h,x,F):null;case _e:return x.key===V?A(D,h,x,F):null;case Te:return V=x._init,N(D,h,V(x._payload),F)}if(Jr(x)||J(x))return V!==null?null:j(D,h,x,F,null);gi(D,x)}return null}function R(D,h,x,F,V){if(typeof F=="string"&&F!==""||typeof F=="number")return D=D.get(x)||null,p(h,D,""+F,V);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case pe:return D=D.get(F.key===null?x:F.key)||null,g(h,D,F,V);case _e:return D=D.get(F.key===null?x:F.key)||null,A(h,D,F,V);case Te:var $=F._init;return R(D,h,x,$(F._payload),V)}if(Jr(F)||J(F))return D=D.get(x)||null,j(h,D,F,V,null);gi(h,F)}return null}function T(D,h,x,F){for(var V=null,$=null,W=h,Q=h=0,Ne=null;W!==null&&Q<x.length;Q++){W.index>Q?(Ne=W,W=null):Ne=W.sibling;var ie=N(D,W,x[Q],F);if(ie===null){W===null&&(W=Ne);break}e&&W&&ie.alternate===null&&n(D,W),h=t(ie,h,Q),$===null?V=ie:$.sibling=ie,$=ie,W=Ne}if(Q===x.length)return r(D,W),ge&&sr(D,Q),V;if(W===null){for(;Q<x.length;Q++)W=k(D,x[Q],F),W!==null&&(h=t(W,h,Q),$===null?V=W:$.sibling=W,$=W);return ge&&sr(D,Q),V}for(W=a(D,W);Q<x.length;Q++)Ne=R(W,D,Q,x[Q],F),Ne!==null&&(e&&Ne.alternate!==null&&W.delete(Ne.key===null?Q:Ne.key),h=t(Ne,h,Q),$===null?V=Ne:$.sibling=Ne,$=Ne);return e&&W.forEach(function(Xn){return n(D,Xn)}),ge&&sr(D,Q),V}function O(D,h,x,F){var V=J(x);if(typeof V!="function")throw Error(o(150));if(x=V.call(x),x==null)throw Error(o(151));for(var $=V=null,W=h,Q=h=0,Ne=null,ie=x.next();W!==null&&!ie.done;Q++,ie=x.next()){W.index>Q?(Ne=W,W=null):Ne=W.sibling;var Xn=N(D,W,ie.value,F);if(Xn===null){W===null&&(W=Ne);break}e&&W&&Xn.alternate===null&&n(D,W),h=t(Xn,h,Q),$===null?V=Xn:$.sibling=Xn,$=Xn,W=Ne}if(ie.done)return r(D,W),ge&&sr(D,Q),V;if(W===null){for(;!ie.done;Q++,ie=x.next())ie=k(D,ie.value,F),ie!==null&&(h=t(ie,h,Q),$===null?V=ie:$.sibling=ie,$=ie);return ge&&sr(D,Q),V}for(W=a(D,W);!ie.done;Q++,ie=x.next())ie=R(W,D,Q,ie.value,F),ie!==null&&(e&&ie.alternate!==null&&W.delete(ie.key===null?Q:ie.key),h=t(ie,h,Q),$===null?V=ie:$.sibling=ie,$=ie);return e&&W.forEach(function(Yd){return n(D,Yd)}),ge&&sr(D,Q),V}function ye(D,h,x,F){if(typeof x=="object"&&x!==null&&x.type===Ie&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case pe:e:{for(var V=x.key,$=h;$!==null;){if($.key===V){if(V=x.type,V===Ie){if($.tag===7){r(D,$.sibling),h=i($,x.props.children),h.return=D,D=h;break e}}else if($.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Te&&Hl(V)===$.type){r(D,$.sibling),h=i($,x.props),h.ref=Da(D,$,x),h.return=D,D=h;break e}r(D,$);break}else n(D,$);$=$.sibling}x.type===Ie?(h=gr(x.props.children,D.mode,F,x.key),h.return=D,D=h):(F=Ii(x.type,x.key,x.props,null,D.mode,F),F.ref=Da(D,h,x),F.return=D,D=F)}return l(D);case _e:e:{for($=x.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){r(D,h.sibling),h=i(h,x.children||[]),h.return=D,D=h;break e}else{r(D,h);break}else n(D,h);h=h.sibling}h=Ju(x,D.mode,F),h.return=D,D=h}return l(D);case Te:return $=x._init,ye(D,h,$(x._payload),F)}if(Jr(x))return T(D,h,x,F);if(J(x))return O(D,h,x,F);gi(D,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(r(D,h.sibling),h=i(h,x),h.return=D,D=h):(r(D,h),h=Wu(x,D.mode,F),h.return=D,D=h),l(D)):r(D,h)}return ye}var kr=$l(!0),Wl=$l(!1),hi=Ln(null),vi=null,Fr=null,ru=null;function au(){ru=Fr=vi=null}function iu(e){var n=hi.current;de(hi),e._currentValue=n}function tu(e,n,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===r)break;e=e.return}}function Ur(e,n){vi=e,ru=Fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ve=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(ru!==e)if(e={context:e,memoizedValue:n,next:null},Fr===null){if(vi===null)throw Error(o(308));Fr=e,vi.dependencies={lanes:0,firstContext:e}}else Fr=Fr.next=e;return n}var lr=null;function uu(e){lr===null?lr=[e]:lr.push(e)}function Jl(e,n,r,a){var i=n.interleaved;return i===null?(r.next=r,uu(n)):(r.next=i.next,i.next=r),n.interleaved=r,Nn(e,a)}function Nn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Hn=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ql(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _n(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function $n(e,n,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ee&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,Nn(e,r)}return i=a.interleaved,i===null?(n.next=n,uu(a)):(n.next=i.next,i.next=n),a.interleaved=n,Nn(e,r)}function Di(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,yt(e,r)}}function Kl(e,n){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,t=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};t===null?i=t=l:t=t.next=l,r=r.next}while(r!==null);t===null?i=t=n:t=t.next=n}else i=t=n;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:t,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Ci(e,n,r,a){var i=e.updateQueue;Hn=!1;var t=i.firstBaseUpdate,l=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var g=p,A=g.next;g.next=null,l===null?t=A:l.next=A,l=g;var j=e.alternate;j!==null&&(j=j.updateQueue,p=j.lastBaseUpdate,p!==l&&(p===null?j.firstBaseUpdate=A:p.next=A,j.lastBaseUpdate=g))}if(t!==null){var k=i.baseState;l=0,j=A=g=null,p=t;do{var N=p.lane,R=p.eventTime;if((a&N)===N){j!==null&&(j=j.next={eventTime:R,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var T=e,O=p;switch(N=n,R=r,O.tag){case 1:if(T=O.payload,typeof T=="function"){k=T.call(R,k,N);break e}k=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=O.payload,N=typeof T=="function"?T.call(R,k,N):T,N==null)break e;k=I({},k,N);break e;case 2:Hn=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,N=i.effects,N===null?i.effects=[p]:N.push(p))}else R={eventTime:R,lane:N,tag:p.tag,payload:p.payload,callback:p.callback,next:null},j===null?(A=j=R,g=k):j=j.next=R,l|=N;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;N=p,p=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(j===null&&(g=k),i.baseState=g,i.firstBaseUpdate=A,i.lastBaseUpdate=j,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else t===null&&(i.shared.lanes=0);mr|=l,e.lanes=l,e.memoizedState=k}}function Zl(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(o(191,i));i.call(a)}}}var Ca={},xn=Ln(Ca),xa=Ln(Ca),ya=Ln(Ca);function or(e){if(e===Ca)throw Error(o(174));return e}function lu(e,n){switch(ce(ya,n),ce(xa,e),ce(xn,Ca),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ot(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ot(n,e)}de(xn),ce(xn,n)}function Mr(){de(xn),de(xa),de(ya)}function Yl(e){or(ya.current);var n=or(xn.current),r=ot(n,e.type);n!==r&&(ce(xa,e),ce(xn,r))}function ou(e){xa.current===e&&(de(xn),de(xa))}var he=Ln(0);function xi(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var cu=[];function mu(){for(var e=0;e<cu.length;e++)cu[e]._workInProgressVersionPrimary=null;cu.length=0}var yi=K.ReactCurrentDispatcher,du=K.ReactCurrentBatchConfig,cr=0,ve=null,Ee=null,Ge=null,Ai=!1,Aa=!1,Sa=0,Cd=0;function Fe(){throw Error(o(321))}function pu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!cn(e[r],n[r]))return!1;return!0}function fu(e,n,r,a,i,t){if(cr=t,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,yi.current=e===null||e.memoizedState===null?Sd:Ed,e=r(a,i),Aa){t=0;do{if(Aa=!1,Sa=0,25<=t)throw Error(o(301));t+=1,Ge=Ee=null,n.updateQueue=null,yi.current=bd,e=r(a,i)}while(Aa)}if(yi.current=bi,n=Ee!==null&&Ee.next!==null,cr=0,Ge=Ee=ve=null,Ai=!1,n)throw Error(o(300));return e}function gu(){var e=Sa!==0;return Sa=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ve.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function an(){if(Ee===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var n=Ge===null?ve.memoizedState:Ge.next;if(n!==null)Ge=n,Ee=e;else{if(e===null)throw Error(o(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ge===null?ve.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ea(e,n){return typeof n=="function"?n(e):n}function hu(e){var n=an(),r=n.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var a=Ee,i=a.baseQueue,t=r.pending;if(t!==null){if(i!==null){var l=i.next;i.next=t.next,t.next=l}a.baseQueue=i=t,r.pending=null}if(i!==null){t=i.next,a=a.baseState;var p=l=null,g=null,A=t;do{var j=A.lane;if((cr&j)===j)g!==null&&(g=g.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),a=A.hasEagerState?A.eagerState:e(a,A.action);else{var k={lane:j,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};g===null?(p=g=k,l=a):g=g.next=k,ve.lanes|=j,mr|=j}A=A.next}while(A!==null&&A!==t);g===null?l=a:g.next=p,cn(a,n.memoizedState)||(Ve=!0),n.memoizedState=a,n.baseState=l,n.baseQueue=g,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do t=i.lane,ve.lanes|=t,mr|=t,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function vu(e){var n=an(),r=n.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,t=n.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do t=e(t,l.action),l=l.next;while(l!==i);cn(t,n.memoizedState)||(Ve=!0),n.memoizedState=t,n.baseQueue===null&&(n.baseState=t),r.lastRenderedState=t}return[t,a]}function Xl(){}function ql(e,n){var r=ve,a=an(),i=n(),t=!cn(a.memoizedState,i);if(t&&(a.memoizedState=i,Ve=!0),a=a.queue,Du(ro.bind(null,r,a,e),[e]),a.getSnapshot!==n||t||Ge!==null&&Ge.memoizedState.tag&1){if(r.flags|=2048,ba(9,no.bind(null,r,a,i,n),void 0,null),we===null)throw Error(o(349));(cr&30)!==0||eo(r,n,i)}return i}function eo(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function no(e,n,r,a){n.value=r,n.getSnapshot=a,ao(n)&&io(e)}function ro(e,n,r){return r(function(){ao(n)&&io(e)})}function ao(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!cn(e,r)}catch{return!0}}function io(e){var n=Nn(e,1);n!==null&&gn(n,e,1,-1)}function to(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},n.queue=e,e=e.dispatch=Ad.bind(null,ve,e),[n.memoizedState,e]}function ba(e,n,r,a){return e={tag:e,create:n,destroy:r,deps:a,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,n.lastEffect=e)),e}function uo(){return an().memoizedState}function Si(e,n,r,a){var i=yn();ve.flags|=e,i.memoizedState=ba(1|n,r,void 0,a===void 0?null:a)}function Ei(e,n,r,a){var i=an();a=a===void 0?null:a;var t=void 0;if(Ee!==null){var l=Ee.memoizedState;if(t=l.destroy,a!==null&&pu(a,l.deps)){i.memoizedState=ba(n,r,t,a);return}}ve.flags|=e,i.memoizedState=ba(1|n,r,t,a)}function so(e,n){return Si(8390656,8,e,n)}function Du(e,n){return Ei(2048,8,e,n)}function lo(e,n){return Ei(4,2,e,n)}function oo(e,n){return Ei(4,4,e,n)}function co(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mo(e,n,r){return r=r!=null?r.concat([e]):null,Ei(4,4,co.bind(null,n,e),r)}function Cu(){}function po(e,n){var r=an();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&pu(n,a[1])?a[0]:(r.memoizedState=[e,n],e)}function fo(e,n){var r=an();n=n===void 0?null:n;var a=r.memoizedState;return a!==null&&n!==null&&pu(n,a[1])?a[0]:(e=e(),r.memoizedState=[e,n],e)}function go(e,n,r){return(cr&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=r):(cn(r,n)||(r=Hs(),ve.lanes|=r,mr|=r,e.baseState=!0),n)}function xd(e,n){var r=le;le=r!==0&&4>r?r:4,e(!0);var a=du.transition;du.transition={};try{e(!1),n()}finally{le=r,du.transition=a}}function ho(){return an().memoizedState}function yd(e,n,r){var a=Kn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},vo(e))Do(n,r);else if(r=Jl(e,n,r,a),r!==null){var i=Be();gn(r,e,a,i),Co(r,n,a)}}function Ad(e,n,r){var a=Kn(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(vo(e))Do(n,i);else{var t=e.alternate;if(e.lanes===0&&(t===null||t.lanes===0)&&(t=n.lastRenderedReducer,t!==null))try{var l=n.lastRenderedState,p=t(l,r);if(i.hasEagerState=!0,i.eagerState=p,cn(p,l)){var g=n.interleaved;g===null?(i.next=i,uu(n)):(i.next=g.next,g.next=i),n.interleaved=i;return}}catch{}finally{}r=Jl(e,n,i,a),r!==null&&(i=Be(),gn(r,e,a,i),Co(r,n,a))}}function vo(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Do(e,n){Aa=Ai=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Co(e,n,r){if((r&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,r|=a,n.lanes=r,yt(e,r)}}var bi={readContext:rn,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Sd={readContext:rn,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:so,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Si(4194308,4,co.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Si(4194308,4,e,n)},useInsertionEffect:function(e,n){return Si(4,2,e,n)},useMemo:function(e,n){var r=yn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var a=yn();return n=r!==void 0?r(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=yd.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:to,useDebugValue:Cu,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=to(!1),n=e[0];return e=xd.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var a=ve,i=yn();if(ge){if(r===void 0)throw Error(o(407));r=r()}else{if(r=n(),we===null)throw Error(o(349));(cr&30)!==0||eo(a,n,r)}i.memoizedState=r;var t={value:r,getSnapshot:n};return i.queue=t,so(ro.bind(null,a,t,e),[e]),a.flags|=2048,ba(9,no.bind(null,a,t,r,n),void 0,null),r},useId:function(){var e=yn(),n=we.identifierPrefix;if(ge){var r=wn,a=Gn;r=(a&~(1<<32-on(a)-1)).toString(32)+r,n=":"+n+"R"+r,r=Sa++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Cd++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ed={readContext:rn,useCallback:po,useContext:rn,useEffect:Du,useImperativeHandle:mo,useInsertionEffect:lo,useLayoutEffect:oo,useMemo:fo,useReducer:hu,useRef:uo,useState:function(){return hu(Ea)},useDebugValue:Cu,useDeferredValue:function(e){var n=an();return go(n,Ee.memoizedState,e)},useTransition:function(){var e=hu(Ea)[0],n=an().memoizedState;return[e,n]},useMutableSource:Xl,useSyncExternalStore:ql,useId:ho,unstable_isNewReconciler:!1},bd={readContext:rn,useCallback:po,useContext:rn,useEffect:Du,useImperativeHandle:mo,useInsertionEffect:lo,useLayoutEffect:oo,useMemo:fo,useReducer:vu,useRef:uo,useState:function(){return vu(Ea)},useDebugValue:Cu,useDeferredValue:function(e){var n=an();return Ee===null?n.memoizedState=e:go(n,Ee.memoizedState,e)},useTransition:function(){var e=vu(Ea)[0],n=an().memoizedState;return[e,n]},useMutableSource:Xl,useSyncExternalStore:ql,useId:ho,unstable_isNewReconciler:!1};function dn(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function xu(e,n,r,a){n=e.memoizedState,r=r(a,n),r=r==null?n:I({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var zi={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var a=Be(),i=Kn(e),t=_n(a,i);t.payload=n,r!=null&&(t.callback=r),n=$n(e,t,i),n!==null&&(gn(n,e,i,a),Di(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var a=Be(),i=Kn(e),t=_n(a,i);t.tag=1,t.payload=n,r!=null&&(t.callback=r),n=$n(e,t,i),n!==null&&(gn(n,e,i,a),Di(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Be(),a=Kn(e),i=_n(r,a);i.tag=2,n!=null&&(i.callback=n),n=$n(e,i,a),n!==null&&(gn(n,e,a,r),Di(n,e,a))}};function xo(e,n,r,a,i,t,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,t,l):n.prototype&&n.prototype.isPureReactComponent?!ma(r,a)||!ma(i,t):!0}function yo(e,n,r){var a=!1,i=On,t=n.contextType;return typeof t=="object"&&t!==null?t=rn(t):(i=Oe(n)?tr:ke.current,a=n.contextTypes,t=(a=a!=null)?Nr(e,i):On),n=new n(r,t),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zi,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=t),n}function Ao(e,n,r,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,a),n.state!==e&&zi.enqueueReplaceState(n,n.state,null)}function yu(e,n,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},su(e);var t=n.contextType;typeof t=="object"&&t!==null?i.context=rn(t):(t=Oe(n)?tr:ke.current,i.context=Nr(e,t)),i.state=e.memoizedState,t=n.getDerivedStateFromProps,typeof t=="function"&&(xu(e,n,t,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&zi.enqueueReplaceState(i,i.state,null),Ci(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,n){try{var r="",a=n;do r+=re(a),a=a.return;while(a);var i=r}catch(t){i=`
Error generating stack: `+t.message+`
`+t.stack}return{value:e,source:n,stack:i,digest:null}}function Au(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Su(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var zd=typeof WeakMap=="function"?WeakMap:Map;function So(e,n,r){r=_n(-1,r),r.tag=3,r.payload={element:null};var a=n.value;return r.callback=function(){ki||(ki=!0,Bu=a),Su(e,n)},r}function Eo(e,n,r){r=_n(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;r.payload=function(){return a(i)},r.callback=function(){Su(e,n)}}var t=e.stateNode;return t!==null&&typeof t.componentDidCatch=="function"&&(r.callback=function(){Su(e,n),typeof a!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),r}function bo(e,n,r){var a=e.pingCache;if(a===null){a=e.pingCache=new zd;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(r)||(i.add(r),e=Td.bind(null,e,n,r),n.then(e,e))}function zo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Go(e,n,r,a,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=_n(-1,1),n.tag=2,$n(r,n,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Gd=K.ReactCurrentOwner,Ve=!1;function Re(e,n,r,a){n.child=e===null?Wl(n,null,r,a):kr(n,e.child,r,a)}function wo(e,n,r,a,i){r=r.render;var t=n.ref;return Ur(n,i),a=fu(e,n,r,a,t,i),r=gu(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,jn(e,n,i)):(ge&&r&&Yt(n),n.flags|=1,Re(e,n,a,i),n.child)}function No(e,n,r,a,i){if(e===null){var t=r.type;return typeof t=="function"&&!$u(t)&&t.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=t,_o(e,n,t,a,i)):(e=Ii(r.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(t=e.child,(e.lanes&i)===0){var l=t.memoizedProps;if(r=r.compare,r=r!==null?r:ma,r(l,a)&&e.ref===n.ref)return jn(e,n,i)}return n.flags|=1,e=Yn(t,a),e.ref=n.ref,e.return=n,n.child=e}function _o(e,n,r,a,i){if(e!==null){var t=e.memoizedProps;if(ma(t,a)&&e.ref===n.ref)if(Ve=!1,n.pendingProps=a=t,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ve=!0);else return n.lanes=e.lanes,jn(e,n,i)}return Eu(e,n,r,a,i)}function jo(e,n,r){var a=n.pendingProps,i=a.children,t=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ir,Xe),Xe|=r;else{if((r&1073741824)===0)return e=t!==null?t.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ce(Ir,Xe),Xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=t!==null?t.baseLanes:r,ce(Ir,Xe),Xe|=a}else t!==null?(a=t.baseLanes|r,n.memoizedState=null):a=r,ce(Ir,Xe),Xe|=a;return Re(e,n,i,r),n.child}function Po(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Eu(e,n,r,a,i){var t=Oe(r)?tr:ke.current;return t=Nr(n,t),Ur(n,i),r=fu(e,n,r,a,t,i),a=gu(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,jn(e,n,i)):(ge&&a&&Yt(n),n.flags|=1,Re(e,n,r,i),n.child)}function ko(e,n,r,a,i){if(Oe(r)){var t=!0;ci(n)}else t=!1;if(Ur(n,i),n.stateNode===null)wi(e,n),yo(n,r,a),yu(n,r,a,i),a=!0;else if(e===null){var l=n.stateNode,p=n.memoizedProps;l.props=p;var g=l.context,A=r.contextType;typeof A=="object"&&A!==null?A=rn(A):(A=Oe(r)?tr:ke.current,A=Nr(n,A));var j=r.getDerivedStateFromProps,k=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function";k||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(p!==a||g!==A)&&Ao(n,l,a,A),Hn=!1;var N=n.memoizedState;l.state=N,Ci(n,a,l,i),g=n.memoizedState,p!==a||N!==g||Le.current||Hn?(typeof j=="function"&&(xu(n,r,j,a),g=n.memoizedState),(p=Hn||xo(n,r,p,a,N,g,A))?(k||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=g),l.props=a,l.state=g,l.context=A,a=p):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Ql(e,n),p=n.memoizedProps,A=n.type===n.elementType?p:dn(n.type,p),l.props=A,k=n.pendingProps,N=l.context,g=r.contextType,typeof g=="object"&&g!==null?g=rn(g):(g=Oe(r)?tr:ke.current,g=Nr(n,g));var R=r.getDerivedStateFromProps;(j=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(p!==k||N!==g)&&Ao(n,l,a,g),Hn=!1,N=n.memoizedState,l.state=N,Ci(n,a,l,i);var T=n.memoizedState;p!==k||N!==T||Le.current||Hn?(typeof R=="function"&&(xu(n,r,R,a),T=n.memoizedState),(A=Hn||xo(n,r,A,a,N,T,g)||!1)?(j||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,T,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,T,g)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=T),l.props=a,l.state=T,l.context=g,a=A):(typeof l.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),a=!1)}return bu(e,n,r,a,t,i)}function bu(e,n,r,a,i,t){Po(e,n);var l=(n.flags&128)!==0;if(!a&&!l)return i&&Rl(n,r,!1),jn(e,n,t);a=n.stateNode,Gd.current=n;var p=l&&typeof r.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&l?(n.child=kr(n,e.child,null,t),n.child=kr(n,null,p,t)):Re(e,n,p,t),n.memoizedState=a.state,i&&Rl(n,r,!0),n.child}function Fo(e){var n=e.stateNode;n.pendingContext?Ul(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ul(e,n.context,!1),lu(e,n.containerInfo)}function Uo(e,n,r,a,i){return Pr(),nu(i),n.flags|=256,Re(e,n,r,a),n.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Gu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mo(e,n,r){var a=n.pendingProps,i=he.current,t=!1,l=(n.flags&128)!==0,p;if((p=l)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(t=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(he,i&1),e===null)return eu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(l=a.children,e=a.fallback,t?(a=n.mode,t=n.child,l={mode:"hidden",children:l},(a&1)===0&&t!==null?(t.childLanes=0,t.pendingProps=l):t=Ti(l,a,0,null),e=gr(e,a,r,null),t.return=n,e.return=n,t.sibling=e,n.child=t,n.child.memoizedState=Gu(r),n.memoizedState=zu,e):wu(n,l));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return wd(e,n,l,a,p,i,r);if(t){t=a.fallback,l=n.mode,i=e.child,p=i.sibling;var g={mode:"hidden",children:a.children};return(l&1)===0&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=g,n.deletions=null):(a=Yn(i,g),a.subtreeFlags=i.subtreeFlags&14680064),p!==null?t=Yn(p,t):(t=gr(t,l,r,null),t.flags|=2),t.return=n,a.return=n,a.sibling=t,n.child=a,a=t,t=n.child,l=e.child.memoizedState,l=l===null?Gu(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},t.memoizedState=l,t.childLanes=e.childLanes&~r,n.memoizedState=zu,a}return t=e.child,e=t.sibling,a=Yn(t,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=r),a.return=n,a.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=a,n.memoizedState=null,a}function wu(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gi(e,n,r,a){return a!==null&&nu(a),kr(n,e.child,null,r),e=wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wd(e,n,r,a,i,t,l){if(r)return n.flags&256?(n.flags&=-257,a=Au(Error(o(422))),Gi(e,n,l,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(t=a.fallback,i=n.mode,a=Ti({mode:"visible",children:a.children},i,0,null),t=gr(t,i,l,null),t.flags|=2,a.return=n,t.return=n,a.sibling=t,n.child=a,(n.mode&1)!==0&&kr(n,e.child,null,l),n.child.memoizedState=Gu(l),n.memoizedState=zu,t);if((n.mode&1)===0)return Gi(e,n,l,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var p=a.dgst;return a=p,t=Error(o(419)),a=Au(t,a,void 0),Gi(e,n,l,a)}if(p=(l&e.childLanes)!==0,Ve||p){if(a=we,a!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|l))!==0?0:i,i!==0&&i!==t.retryLane&&(t.retryLane=i,Nn(e,i),gn(a,e,i,-1))}return Hu(),a=Au(Error(o(421))),Gi(e,n,l,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Ld.bind(null,e),i._reactRetry=n,null):(e=t.treeContext,Ye=Tn(i.nextSibling),Ze=n,ge=!0,mn=null,e!==null&&(en[nn++]=Gn,en[nn++]=wn,en[nn++]=ur,Gn=e.id,wn=e.overflow,ur=n),n=wu(n,a.children),n.flags|=4096,n)}function Ro(e,n,r){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),tu(e.return,n,r)}function Nu(e,n,r,a,i){var t=e.memoizedState;t===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(t.isBackwards=n,t.rendering=null,t.renderingStartTime=0,t.last=a,t.tail=r,t.tailMode=i)}function Bo(e,n,r){var a=n.pendingProps,i=a.revealOrder,t=a.tail;if(Re(e,n,a.children,r),a=he.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ro(e,r,n);else if(e.tag===19)Ro(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ce(he,a),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&xi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),Nu(n,!1,i,r,t);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&xi(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Nu(n,!0,r,null,t);break;case"together":Nu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function wi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),mr|=n.lanes,(r&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,r=Yn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Yn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Nd(e,n,r){switch(n.tag){case 3:Fo(n),Pr();break;case 5:Yl(n);break;case 1:Oe(n.type)&&ci(n);break;case 4:lu(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;ce(hi,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ce(he,he.current&1),n.flags|=128,null):(r&n.child.childLanes)!==0?Mo(e,n,r):(ce(he,he.current&1),e=jn(e,n,r),e!==null?e.sibling:null);ce(he,he.current&1);break;case 19:if(a=(r&n.childLanes)!==0,(e.flags&128)!==0){if(a)return Bo(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(he,he.current),a)break;return null;case 22:case 23:return n.lanes=0,jo(e,n,r)}return jn(e,n,r)}var Io,_u,To,Lo;Io=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},_u=function(){},To=function(e,n,r,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,or(xn.current);var t=null;switch(r){case"input":i=tt(e,i),a=tt(e,a),t=[];break;case"select":i=I({},i,{value:void 0}),a=I({},a,{value:void 0}),t=[];break;case"textarea":i=lt(e,i),a=lt(e,a),t=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=si)}ct(r,a);var l;r=null;for(A in i)if(!a.hasOwnProperty(A)&&i.hasOwnProperty(A)&&i[A]!=null)if(A==="style"){var p=i[A];for(l in p)p.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(d.hasOwnProperty(A)?t||(t=[]):(t=t||[]).push(A,null));for(A in a){var g=a[A];if(p=i!=null?i[A]:void 0,a.hasOwnProperty(A)&&g!==p&&(g!=null||p!=null))if(A==="style")if(p){for(l in p)!p.hasOwnProperty(l)||g&&g.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in g)g.hasOwnProperty(l)&&p[l]!==g[l]&&(r||(r={}),r[l]=g[l])}else r||(t||(t=[]),t.push(A,r)),r=g;else A==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(t=t||[]).push(A,g)):A==="children"?typeof g!="string"&&typeof g!="number"||(t=t||[]).push(A,""+g):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(d.hasOwnProperty(A)?(g!=null&&A==="onScroll"&&me("scroll",e),t||p===g||(t=[])):(t=t||[]).push(A,g))}r&&(t=t||[]).push("style",r);var A=t;(n.updateQueue=A)&&(n.flags|=4)}},Lo=function(e,n,r,a){r!==a&&(n.flags|=4)};function za(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,n}function _d(e,n,r){var a=n.pendingProps;switch(Xt(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(n),null;case 1:return Oe(n.type)&&oi(),Ue(n),null;case 3:return a=n.stateNode,Mr(),de(Le),de(ke),mu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mn!==null&&(Lu(mn),mn=null))),_u(e,n),Ue(n),null;case 5:ou(n);var i=or(ya.current);if(r=n.type,e!==null&&n.stateNode!=null)To(e,n,r,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(o(166));return Ue(n),null}if(e=or(xn.current),fi(n)){a=n.stateNode,r=n.type;var t=n.memoizedProps;switch(a[Cn]=n,a[ha]=t,e=(n.mode&1)!==0,r){case"dialog":me("cancel",a),me("close",a);break;case"iframe":case"object":case"embed":me("load",a);break;case"video":case"audio":for(i=0;i<pa.length;i++)me(pa[i],a);break;case"source":me("error",a);break;case"img":case"image":case"link":me("error",a),me("load",a);break;case"details":me("toggle",a);break;case"input":xs(a,t),me("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!t.multiple},me("invalid",a);break;case"textarea":Ss(a,t),me("invalid",a)}ct(r,t),i=null;for(var l in t)if(t.hasOwnProperty(l)){var p=t[l];l==="children"?typeof p=="string"?a.textContent!==p&&(t.suppressHydrationWarning!==!0&&ui(a.textContent,p,e),i=["children",p]):typeof p=="number"&&a.textContent!==""+p&&(t.suppressHydrationWarning!==!0&&ui(a.textContent,p,e),i=["children",""+p]):d.hasOwnProperty(l)&&p!=null&&l==="onScroll"&&me("scroll",a)}switch(r){case"input":Ra(a),As(a,t,!0);break;case"textarea":Ra(a),bs(a);break;case"select":case"option":break;default:typeof t.onClick=="function"&&(a.onclick=si)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(r,{is:a.is}):(e=l.createElement(r),r==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,r),e[Cn]=n,e[ha]=a,Io(e,n,!1,!1),n.stateNode=e;e:{switch(l=mt(r,a),r){case"dialog":me("cancel",e),me("close",e),i=a;break;case"iframe":case"object":case"embed":me("load",e),i=a;break;case"video":case"audio":for(i=0;i<pa.length;i++)me(pa[i],e);i=a;break;case"source":me("error",e),i=a;break;case"img":case"image":case"link":me("error",e),me("load",e),i=a;break;case"details":me("toggle",e),i=a;break;case"input":xs(e,a),i=tt(e,a),me("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=I({},a,{value:void 0}),me("invalid",e);break;case"textarea":Ss(e,a),i=lt(e,a),me("invalid",e);break;default:i=a}ct(r,i),p=i;for(t in p)if(p.hasOwnProperty(t)){var g=p[t];t==="style"?Ns(e,g):t==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Gs(e,g)):t==="children"?typeof g=="string"?(r!=="textarea"||g!=="")&&Qr(e,g):typeof g=="number"&&Qr(e,""+g):t!=="suppressContentEditableWarning"&&t!=="suppressHydrationWarning"&&t!=="autoFocus"&&(d.hasOwnProperty(t)?g!=null&&t==="onScroll"&&me("scroll",e):g!=null&&ne(e,t,g,l))}switch(r){case"input":Ra(e),As(e,a,!1);break;case"textarea":Ra(e),bs(e);break;case"option":a.value!=null&&e.setAttribute("value",""+se(a.value));break;case"select":e.multiple=!!a.multiple,t=a.value,t!=null?vr(e,!!a.multiple,t,!1):a.defaultValue!=null&&vr(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=si)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ue(n),null;case 6:if(e&&n.stateNode!=null)Lo(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(r=or(ya.current),or(xn.current),fi(n)){if(a=n.stateNode,r=n.memoizedProps,a[Cn]=n,(t=a.nodeValue!==r)&&(e=Ze,e!==null))switch(e.tag){case 3:ui(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(a.nodeValue,r,(e.mode&1)!==0)}t&&(n.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Cn]=n,n.stateNode=a}return Ue(n),null;case 13:if(de(he),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&Ye!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Vl(),Pr(),n.flags|=98560,t=!1;else if(t=fi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!t)throw Error(o(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t[Cn]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ue(n),t=!1}else mn!==null&&(Lu(mn),mn=null),t=!0;if(!t)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=r,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(he.current&1)!==0?be===0&&(be=3):Hu())),n.updateQueue!==null&&(n.flags|=4),Ue(n),null);case 4:return Mr(),_u(e,n),e===null&&fa(n.stateNode.containerInfo),Ue(n),null;case 10:return iu(n.type._context),Ue(n),null;case 17:return Oe(n.type)&&oi(),Ue(n),null;case 19:if(de(he),t=n.memoizedState,t===null)return Ue(n),null;if(a=(n.flags&128)!==0,l=t.rendering,l===null)if(a)za(t,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=xi(e),l!==null){for(n.flags|=128,za(t,!1),a=l.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=r,r=n.child;r!==null;)t=r,e=a,t.flags&=14680066,l=t.alternate,l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ce(he,he.current&1|2),n.child}e=e.sibling}t.tail!==null&&xe()>Tr&&(n.flags|=128,a=!0,za(t,!1),n.lanes=4194304)}else{if(!a)if(e=xi(l),e!==null){if(n.flags|=128,a=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),za(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!ge)return Ue(n),null}else 2*xe()-t.renderingStartTime>Tr&&r!==1073741824&&(n.flags|=128,a=!0,za(t,!1),n.lanes=4194304);t.isBackwards?(l.sibling=n.child,n.child=l):(r=t.last,r!==null?r.sibling=l:n.child=l,t.last=l)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=xe(),n.sibling=null,r=he.current,ce(he,a?r&1|2:r&1),n):(Ue(n),null);case 22:case 23:return Vu(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(Xe&1073741824)!==0&&(Ue(n),n.subtreeFlags&6&&(n.flags|=8192)):Ue(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function jd(e,n){switch(Xt(n),n.tag){case 1:return Oe(n.type)&&oi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mr(),de(Le),de(ke),mu(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ou(n),null;case 13:if(de(he),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Pr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(he),null;case 4:return Mr(),null;case 10:return iu(n.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var Ni=!1,Me=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,B=null;function Br(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Ce(e,n,a)}else r.current=null}function ju(e,n,r){try{r()}catch(a){Ce(e,n,a)}}var Oo=!1;function kd(e,n){if(Vt=Ka,e=Cl(),Ut(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,t=a.focusNode;a=a.focusOffset;try{r.nodeType,t.nodeType}catch{r=null;break e}var l=0,p=-1,g=-1,A=0,j=0,k=e,N=null;n:for(;;){for(var R;k!==r||i!==0&&k.nodeType!==3||(p=l+i),k!==t||a!==0&&k.nodeType!==3||(g=l+a),k.nodeType===3&&(l+=k.nodeValue.length),(R=k.firstChild)!==null;)N=k,k=R;for(;;){if(k===e)break n;if(N===r&&++A===i&&(p=l),N===t&&++j===a&&(g=l),(R=k.nextSibling)!==null)break;k=N,N=k.parentNode}k=R}r=p===-1||g===-1?null:{start:p,end:g}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ht={focusedElem:e,selectionRange:r},Ka=!1,B=n;B!==null;)if(n=B,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,B=e;else for(;B!==null;){n=B;try{var T=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var O=T.memoizedProps,ye=T.memoizedState,D=n.stateNode,h=D.getSnapshotBeforeUpdate(n.elementType===n.type?O:dn(n.type,O),ye);D.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=n.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(F){Ce(n,n.return,F)}if(e=n.sibling,e!==null){e.return=n.return,B=e;break}B=n.return}return T=Oo,Oo=!1,T}function Ga(e,n,r){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var t=i.destroy;i.destroy=void 0,t!==void 0&&ju(n,r,t)}i=i.next}while(i!==a)}}function _i(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==n)}}function Pu(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function Vo(e){var n=e.alternate;n!==null&&(e.alternate=null,Vo(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Cn],delete n[ha],delete n[Qt],delete n[gd],delete n[hd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ho(e){return e.tag===5||e.tag===3||e.tag===4}function $o(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ho(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=si));else if(a!==4&&(e=e.child,e!==null))for(ku(e,n,r),e=e.sibling;e!==null;)ku(e,n,r),e=e.sibling}function Fu(e,n,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Fu(e,n,r),e=e.sibling;e!==null;)Fu(e,n,r),e=e.sibling}var je=null,pn=!1;function Wn(e,n,r){for(r=r.child;r!==null;)Wo(e,n,r),r=r.sibling}function Wo(e,n,r){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Va,r)}catch{}switch(r.tag){case 5:Me||Br(r,n);case 6:var a=je,i=pn;je=null,Wn(e,n,r),je=a,pn=i,je!==null&&(pn?(e=je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):je.removeChild(r.stateNode));break;case 18:je!==null&&(pn?(e=je,r=r.stateNode,e.nodeType===8?Jt(e.parentNode,r):e.nodeType===1&&Jt(e,r),ta(e)):Jt(je,r.stateNode));break;case 4:a=je,i=pn,je=r.stateNode.containerInfo,pn=!0,Wn(e,n,r),je=a,pn=i;break;case 0:case 11:case 14:case 15:if(!Me&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var t=i,l=t.destroy;t=t.tag,l!==void 0&&((t&2)!==0||(t&4)!==0)&&ju(r,n,l),i=i.next}while(i!==a)}Wn(e,n,r);break;case 1:if(!Me&&(Br(r,n),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(p){Ce(r,n,p)}Wn(e,n,r);break;case 21:Wn(e,n,r);break;case 22:r.mode&1?(Me=(a=Me)||r.memoizedState!==null,Wn(e,n,r),Me=a):Wn(e,n,r);break;default:Wn(e,n,r)}}function Jo(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Pd),n.forEach(function(a){var i=Od.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function fn(e,n){var r=n.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var t=e,l=n,p=l;e:for(;p!==null;){switch(p.tag){case 5:je=p.stateNode,pn=!1;break e;case 3:je=p.stateNode.containerInfo,pn=!0;break e;case 4:je=p.stateNode.containerInfo,pn=!0;break e}p=p.return}if(je===null)throw Error(o(160));Wo(t,l,i),je=null,pn=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(A){Ce(i,n,A)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Qo(n,e),n=n.sibling}function Qo(e,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(n,e),An(e),a&4){try{Ga(3,e,e.return),_i(3,e)}catch(O){Ce(e,e.return,O)}try{Ga(5,e,e.return)}catch(O){Ce(e,e.return,O)}}break;case 1:fn(n,e),An(e),a&512&&r!==null&&Br(r,r.return);break;case 5:if(fn(n,e),An(e),a&512&&r!==null&&Br(r,r.return),e.flags&32){var i=e.stateNode;try{Qr(i,"")}catch(O){Ce(e,e.return,O)}}if(a&4&&(i=e.stateNode,i!=null)){var t=e.memoizedProps,l=r!==null?r.memoizedProps:t,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&t.type==="radio"&&t.name!=null&&ys(i,t),mt(p,l);var A=mt(p,t);for(l=0;l<g.length;l+=2){var j=g[l],k=g[l+1];j==="style"?Ns(i,k):j==="dangerouslySetInnerHTML"?Gs(i,k):j==="children"?Qr(i,k):ne(i,j,k,A)}switch(p){case"input":ut(i,t);break;case"textarea":Es(i,t);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!t.multiple;var R=t.value;R!=null?vr(i,!!t.multiple,R,!1):N!==!!t.multiple&&(t.defaultValue!=null?vr(i,!!t.multiple,t.defaultValue,!0):vr(i,!!t.multiple,t.multiple?[]:"",!1))}i[ha]=t}catch(O){Ce(e,e.return,O)}}break;case 6:if(fn(n,e),An(e),a&4){if(e.stateNode===null)throw Error(o(162));i=e.stateNode,t=e.memoizedProps;try{i.nodeValue=t}catch(O){Ce(e,e.return,O)}}break;case 3:if(fn(n,e),An(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{ta(n.containerInfo)}catch(O){Ce(e,e.return,O)}break;case 4:fn(n,e),An(e);break;case 13:fn(n,e),An(e),i=e.child,i.flags&8192&&(t=i.memoizedState!==null,i.stateNode.isHidden=t,!t||i.alternate!==null&&i.alternate.memoizedState!==null||(Ru=xe())),a&4&&Jo(e);break;case 22:if(j=r!==null&&r.memoizedState!==null,e.mode&1?(Me=(A=Me)||j,fn(n,e),Me=A):fn(n,e),An(e),a&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!j&&(e.mode&1)!==0)for(B=e,j=e.child;j!==null;){for(k=B=j;B!==null;){switch(N=B,R=N.child,N.tag){case 0:case 11:case 14:case 15:Ga(4,N,N.return);break;case 1:Br(N,N.return);var T=N.stateNode;if(typeof T.componentWillUnmount=="function"){a=N,r=N.return;try{n=a,T.props=n.memoizedProps,T.state=n.memoizedState,T.componentWillUnmount()}catch(O){Ce(a,r,O)}}break;case 5:Br(N,N.return);break;case 22:if(N.memoizedState!==null){Yo(k);continue}}R!==null?(R.return=N,B=R):Yo(k)}j=j.sibling}e:for(j=null,k=e;;){if(k.tag===5){if(j===null){j=k;try{i=k.stateNode,A?(t=i.style,typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"):(p=k.stateNode,g=k.memoizedProps.style,l=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=ws("display",l))}catch(O){Ce(e,e.return,O)}}}else if(k.tag===6){if(j===null)try{k.stateNode.nodeValue=A?"":k.memoizedProps}catch(O){Ce(e,e.return,O)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;j===k&&(j=null),k=k.return}j===k&&(j=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:fn(n,e),An(e),a&4&&Jo(e);break;case 21:break;default:fn(n,e),An(e)}}function An(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Ho(r)){var a=r;break e}r=r.return}throw Error(o(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Qr(i,""),a.flags&=-33);var t=$o(e);Fu(e,t,i);break;case 3:case 4:var l=a.stateNode.containerInfo,p=$o(e);ku(e,p,l);break;default:throw Error(o(161))}}catch(g){Ce(e,e.return,g)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fd(e,n,r){B=e,Ko(e)}function Ko(e,n,r){for(var a=(e.mode&1)!==0;B!==null;){var i=B,t=i.child;if(i.tag===22&&a){var l=i.memoizedState!==null||Ni;if(!l){var p=i.alternate,g=p!==null&&p.memoizedState!==null||Me;p=Ni;var A=Me;if(Ni=l,(Me=g)&&!A)for(B=i;B!==null;)l=B,g=l.child,l.tag===22&&l.memoizedState!==null?Xo(i):g!==null?(g.return=l,B=g):Xo(i);for(;t!==null;)B=t,Ko(t),t=t.sibling;B=i,Ni=p,Me=A}Zo(e)}else(i.subtreeFlags&8772)!==0&&t!==null?(t.return=i,B=t):Zo(e)}}function Zo(e){for(;B!==null;){var n=B;if((n.flags&8772)!==0){var r=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Me||_i(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Me)if(r===null)a.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:dn(n.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var t=n.updateQueue;t!==null&&Zl(n,t,a);break;case 3:var l=n.updateQueue;if(l!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Zl(n,l,r)}break;case 5:var p=n.stateNode;if(r===null&&n.flags&4){r=p;var g=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src&&(r.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var A=n.alternate;if(A!==null){var j=A.memoizedState;if(j!==null){var k=j.dehydrated;k!==null&&ta(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Me||n.flags&512&&Pu(n)}catch(N){Ce(n,n.return,N)}}if(n===e){B=null;break}if(r=n.sibling,r!==null){r.return=n.return,B=r;break}B=n.return}}function Yo(e){for(;B!==null;){var n=B;if(n===e){B=null;break}var r=n.sibling;if(r!==null){r.return=n.return,B=r;break}B=n.return}}function Xo(e){for(;B!==null;){var n=B;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{_i(4,n)}catch(g){Ce(n,r,g)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(g){Ce(n,i,g)}}var t=n.return;try{Pu(n)}catch(g){Ce(n,t,g)}break;case 5:var l=n.return;try{Pu(n)}catch(g){Ce(n,l,g)}}}catch(g){Ce(n,n.return,g)}if(n===e){B=null;break}var p=n.sibling;if(p!==null){p.return=n.return,B=p;break}B=n.return}}var Ud=Math.ceil,ji=K.ReactCurrentDispatcher,Uu=K.ReactCurrentOwner,tn=K.ReactCurrentBatchConfig,ee=0,we=null,Ae=null,Pe=0,Xe=0,Ir=Ln(0),be=0,wa=null,mr=0,Pi=0,Mu=0,Na=null,He=null,Ru=0,Tr=1/0,Pn=null,ki=!1,Bu=null,Jn=null,Fi=!1,Qn=null,Ui=0,_a=0,Iu=null,Mi=-1,Ri=0;function Be(){return(ee&6)!==0?xe():Mi!==-1?Mi:Mi=xe()}function Kn(e){return(e.mode&1)===0?1:(ee&2)!==0&&Pe!==0?Pe&-Pe:Dd.transition!==null?(Ri===0&&(Ri=Hs()),Ri):(e=le,e!==0||(e=window.event,e=e===void 0?16:qs(e.type)),e)}function gn(e,n,r,a){if(50<_a)throw _a=0,Iu=null,Error(o(185));ea(e,r,a),((ee&2)===0||e!==we)&&(e===we&&((ee&2)===0&&(Pi|=r),be===4&&Zn(e,Pe)),$e(e,a),r===1&&ee===0&&(n.mode&1)===0&&(Tr=xe()+500,mi&&Vn()))}function $e(e,n){var r=e.callbackNode;Dm(e,n);var a=Wa(e,e===we?Pe:0);if(a===0)r!==null&&Ls(r),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(r!=null&&Ls(r),n===1)e.tag===0?vd(ec.bind(null,e)):Bl(ec.bind(null,e)),pd(function(){(ee&6)===0&&Vn()}),r=null;else{switch($s(a)){case 1:r=Dt;break;case 4:r=Os;break;case 16:r=Oa;break;case 536870912:r=Vs;break;default:r=Oa}r=lc(r,qo.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function qo(e,n){if(Mi=-1,Ri=0,(ee&6)!==0)throw Error(o(327));var r=e.callbackNode;if(Lr()&&e.callbackNode!==r)return null;var a=Wa(e,e===we?Pe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=Bi(e,a);else{n=a;var i=ee;ee|=2;var t=rc();(we!==e||Pe!==n)&&(Pn=null,Tr=xe()+500,pr(e,n));do try{Bd();break}catch(p){nc(e,p)}while(!0);au(),ji.current=t,ee=i,Ae!==null?n=0:(we=null,Pe=0,n=be)}if(n!==0){if(n===2&&(i=Ct(e),i!==0&&(a=i,n=Tu(e,i))),n===1)throw r=wa,pr(e,0),Zn(e,a),$e(e,xe()),r;if(n===6)Zn(e,a);else{if(i=e.current.alternate,(a&30)===0&&!Md(i)&&(n=Bi(e,a),n===2&&(t=Ct(e),t!==0&&(a=t,n=Tu(e,t))),n===1))throw r=wa,pr(e,0),Zn(e,a),$e(e,xe()),r;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(o(345));case 2:fr(e,He,Pn);break;case 3:if(Zn(e,a),(a&130023424)===a&&(n=Ru+500-xe(),10<n)){if(Wa(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wt(fr.bind(null,e,He,Pn),n);break}fr(e,He,Pn);break;case 4:if(Zn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var l=31-on(a);t=1<<l,l=n[l],l>i&&(i=l),a&=~t}if(a=i,a=xe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ud(a/1960))-a,10<a){e.timeoutHandle=Wt(fr.bind(null,e,He,Pn),a);break}fr(e,He,Pn);break;case 5:fr(e,He,Pn);break;default:throw Error(o(329))}}}return $e(e,xe()),e.callbackNode===r?qo.bind(null,e):null}function Tu(e,n){var r=Na;return e.current.memoizedState.isDehydrated&&(pr(e,n).flags|=256),e=Bi(e,n),e!==2&&(n=He,He=r,n!==null&&Lu(n)),e}function Lu(e){He===null?He=e:He.push.apply(He,e)}function Md(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],t=i.getSnapshot;i=i.value;try{if(!cn(t(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~Mu,n&=~Pi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-on(n),a=1<<r;e[r]=-1,n&=~a}}function ec(e){if((ee&6)!==0)throw Error(o(327));Lr();var n=Wa(e,0);if((n&1)===0)return $e(e,xe()),null;var r=Bi(e,n);if(e.tag!==0&&r===2){var a=Ct(e);a!==0&&(n=a,r=Tu(e,a))}if(r===1)throw r=wa,pr(e,0),Zn(e,n),$e(e,xe()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fr(e,He,Pn),$e(e,xe()),null}function Ou(e,n){var r=ee;ee|=1;try{return e(n)}finally{ee=r,ee===0&&(Tr=xe()+500,mi&&Vn())}}function dr(e){Qn!==null&&Qn.tag===0&&(ee&6)===0&&Lr();var n=ee;ee|=1;var r=tn.transition,a=le;try{if(tn.transition=null,le=1,e)return e()}finally{le=a,tn.transition=r,ee=n,(ee&6)===0&&Vn()}}function Vu(){Xe=Ir.current,de(Ir)}function pr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,dd(r)),Ae!==null)for(r=Ae.return;r!==null;){var a=r;switch(Xt(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&oi();break;case 3:Mr(),de(Le),de(ke),mu();break;case 5:ou(a);break;case 4:Mr();break;case 13:de(he);break;case 19:de(he);break;case 10:iu(a.type._context);break;case 22:case 23:Vu()}r=r.return}if(we=e,Ae=e=Yn(e.current,null),Pe=Xe=n,be=0,wa=null,Mu=Pi=mr=0,He=Na=null,lr!==null){for(n=0;n<lr.length;n++)if(r=lr[n],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,t=r.pending;if(t!==null){var l=t.next;t.next=i,a.next=l}r.pending=a}lr=null}return e}function nc(e,n){do{var r=Ae;try{if(au(),yi.current=bi,Ai){for(var a=ve.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Ai=!1}if(cr=0,Ge=Ee=ve=null,Aa=!1,Sa=0,Uu.current=null,r===null||r.return===null){be=1,wa=n,Ae=null;break}e:{var t=e,l=r.return,p=r,g=n;if(n=Pe,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=g,j=p,k=j.tag;if((j.mode&1)===0&&(k===0||k===11||k===15)){var N=j.alternate;N?(j.updateQueue=N.updateQueue,j.memoizedState=N.memoizedState,j.lanes=N.lanes):(j.updateQueue=null,j.memoizedState=null)}var R=zo(l);if(R!==null){R.flags&=-257,Go(R,l,p,t,n),R.mode&1&&bo(t,A,n),n=R,g=A;var T=n.updateQueue;if(T===null){var O=new Set;O.add(g),n.updateQueue=O}else T.add(g);break e}else{if((n&1)===0){bo(t,A,n),Hu();break e}g=Error(o(426))}}else if(ge&&p.mode&1){var ye=zo(l);if(ye!==null){(ye.flags&65536)===0&&(ye.flags|=256),Go(ye,l,p,t,n),nu(Rr(g,p));break e}}t=g=Rr(g,p),be!==4&&(be=2),Na===null?Na=[t]:Na.push(t),t=l;do{switch(t.tag){case 3:t.flags|=65536,n&=-n,t.lanes|=n;var D=So(t,g,n);Kl(t,D);break e;case 1:p=g;var h=t.type,x=t.stateNode;if((t.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Jn===null||!Jn.has(x)))){t.flags|=65536,n&=-n,t.lanes|=n;var F=Eo(t,p,n);Kl(t,F);break e}}t=t.return}while(t!==null)}ic(r)}catch(V){n=V,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function rc(){var e=ji.current;return ji.current=bi,e===null?bi:e}function Hu(){(be===0||be===3||be===2)&&(be=4),we===null||(mr&268435455)===0&&(Pi&268435455)===0||Zn(we,Pe)}function Bi(e,n){var r=ee;ee|=2;var a=rc();(we!==e||Pe!==n)&&(Pn=null,pr(e,n));do try{Rd();break}catch(i){nc(e,i)}while(!0);if(au(),ee=r,ji.current=a,Ae!==null)throw Error(o(261));return we=null,Pe=0,be}function Rd(){for(;Ae!==null;)ac(Ae)}function Bd(){for(;Ae!==null&&!om();)ac(Ae)}function ac(e){var n=sc(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,n===null?ic(e):Ae=n,Uu.current=null}function ic(e){var n=e;do{var r=n.alternate;if(e=n.return,(n.flags&32768)===0){if(r=_d(r,n,Xe),r!==null){Ae=r;return}}else{if(r=jd(r,n),r!==null){r.flags&=32767,Ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Ae=null;return}}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=e}while(n!==null);be===0&&(be=5)}function fr(e,n,r){var a=le,i=tn.transition;try{tn.transition=null,le=1,Id(e,n,r,a)}finally{tn.transition=i,le=a}return null}function Id(e,n,r,a){do Lr();while(Qn!==null);if((ee&6)!==0)throw Error(o(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var t=r.lanes|r.childLanes;if(Cm(e,t),e===we&&(Ae=we=null,Pe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Fi||(Fi=!0,lc(Oa,function(){return Lr(),null})),t=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||t){t=tn.transition,tn.transition=null;var l=le;le=1;var p=ee;ee|=4,Uu.current=null,kd(e,r),Qo(r,e),td(Ht),Ka=!!Vt,Ht=Vt=null,e.current=r,Fd(r),cm(),ee=p,le=l,tn.transition=t}else e.current=r;if(Fi&&(Fi=!1,Qn=e,Ui=i),t=e.pendingLanes,t===0&&(Jn=null),pm(r.stateNode),$e(e,xe()),n!==null)for(a=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(ki)throw ki=!1,e=Bu,Bu=null,e;return(Ui&1)!==0&&e.tag!==0&&Lr(),t=e.pendingLanes,(t&1)!==0?e===Iu?_a++:(_a=0,Iu=e):_a=0,Vn(),null}function Lr(){if(Qn!==null){var e=$s(Ui),n=tn.transition,r=le;try{if(tn.transition=null,le=16>e?16:e,Qn===null)var a=!1;else{if(e=Qn,Qn=null,Ui=0,(ee&6)!==0)throw Error(o(331));var i=ee;for(ee|=4,B=e.current;B!==null;){var t=B,l=t.child;if((B.flags&16)!==0){var p=t.deletions;if(p!==null){for(var g=0;g<p.length;g++){var A=p[g];for(B=A;B!==null;){var j=B;switch(j.tag){case 0:case 11:case 15:Ga(8,j,t)}var k=j.child;if(k!==null)k.return=j,B=k;else for(;B!==null;){j=B;var N=j.sibling,R=j.return;if(Vo(j),j===A){B=null;break}if(N!==null){N.return=R,B=N;break}B=R}}}var T=t.alternate;if(T!==null){var O=T.child;if(O!==null){T.child=null;do{var ye=O.sibling;O.sibling=null,O=ye}while(O!==null)}}B=t}}if((t.subtreeFlags&2064)!==0&&l!==null)l.return=t,B=l;else e:for(;B!==null;){if(t=B,(t.flags&2048)!==0)switch(t.tag){case 0:case 11:case 15:Ga(9,t,t.return)}var D=t.sibling;if(D!==null){D.return=t.return,B=D;break e}B=t.return}}var h=e.current;for(B=h;B!==null;){l=B;var x=l.child;if((l.subtreeFlags&2064)!==0&&x!==null)x.return=l,B=x;else e:for(l=h;B!==null;){if(p=B,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:_i(9,p)}}catch(V){Ce(p,p.return,V)}if(p===l){B=null;break e}var F=p.sibling;if(F!==null){F.return=p.return,B=F;break e}B=p.return}}if(ee=i,Vn(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Va,e)}catch{}a=!0}return a}finally{le=r,tn.transition=n}}return!1}function tc(e,n,r){n=Rr(r,n),n=So(e,n,1),e=$n(e,n,1),n=Be(),e!==null&&(ea(e,1,n),$e(e,n))}function Ce(e,n,r){if(e.tag===3)tc(e,e,r);else for(;n!==null;){if(n.tag===3){tc(n,e,r);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Jn===null||!Jn.has(a))){e=Rr(r,e),e=Eo(n,e,1),n=$n(n,e,1),e=Be(),n!==null&&(ea(n,1,e),$e(n,e));break}}n=n.return}}function Td(e,n,r){var a=e.pingCache;a!==null&&a.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&r,we===e&&(Pe&r)===r&&(be===4||be===3&&(Pe&130023424)===Pe&&500>xe()-Ru?pr(e,0):Mu|=r),$e(e,n)}function uc(e,n){n===0&&((e.mode&1)===0?n=1:(n=$a,$a<<=1,($a&130023424)===0&&($a=4194304)));var r=Be();e=Nn(e,n),e!==null&&(ea(e,n,r),$e(e,r))}function Ld(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),uc(e,r)}function Od(e,n){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(n),uc(e,r)}var sc;sc=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Le.current)Ve=!0;else{if((e.lanes&r)===0&&(n.flags&128)===0)return Ve=!1,Nd(e,n,r);Ve=(e.flags&131072)!==0}else Ve=!1,ge&&(n.flags&1048576)!==0&&Il(n,pi,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;wi(e,n),e=n.pendingProps;var i=Nr(n,ke.current);Ur(n,r),i=fu(null,n,a,e,i,r);var t=gu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Oe(a)?(t=!0,ci(n)):t=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,su(n),i.updater=zi,n.stateNode=i,i._reactInternals=n,yu(n,a,e,r),n=bu(null,n,a,!0,t,r)):(n.tag=0,ge&&t&&Yt(n),Re(null,n,i,r),n=n.child),n;case 16:a=n.elementType;e:{switch(wi(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=Hd(a),e=dn(a,e),i){case 0:n=Eu(null,n,a,e,r);break e;case 1:n=ko(null,n,a,e,r);break e;case 11:n=wo(null,n,a,e,r);break e;case 14:n=No(null,n,a,dn(a.type,e),r);break e}throw Error(o(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:dn(a,i),Eu(e,n,a,i,r);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:dn(a,i),ko(e,n,a,i,r);case 3:e:{if(Fo(n),e===null)throw Error(o(387));a=n.pendingProps,t=n.memoizedState,i=t.element,Ql(e,n),Ci(n,a,null,r);var l=n.memoizedState;if(a=l.element,t.isDehydrated)if(t={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=t,n.memoizedState=t,n.flags&256){i=Rr(Error(o(423)),n),n=Uo(e,n,a,r,i);break e}else if(a!==i){i=Rr(Error(o(424)),n),n=Uo(e,n,a,r,i);break e}else for(Ye=Tn(n.stateNode.containerInfo.firstChild),Ze=n,ge=!0,mn=null,r=Wl(n,null,a,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pr(),a===i){n=jn(e,n,r);break e}Re(e,n,a,r)}n=n.child}return n;case 5:return Yl(n),e===null&&eu(n),a=n.type,i=n.pendingProps,t=e!==null?e.memoizedProps:null,l=i.children,$t(a,i)?l=null:t!==null&&$t(a,t)&&(n.flags|=32),Po(e,n),Re(e,n,l,r),n.child;case 6:return e===null&&eu(n),null;case 13:return Mo(e,n,r);case 4:return lu(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=kr(n,null,a,r):Re(e,n,a,r),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:dn(a,i),wo(e,n,a,i,r);case 7:return Re(e,n,n.pendingProps,r),n.child;case 8:return Re(e,n,n.pendingProps.children,r),n.child;case 12:return Re(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,t=n.memoizedProps,l=i.value,ce(hi,a._currentValue),a._currentValue=l,t!==null)if(cn(t.value,l)){if(t.children===i.children&&!Le.current){n=jn(e,n,r);break e}}else for(t=n.child,t!==null&&(t.return=n);t!==null;){var p=t.dependencies;if(p!==null){l=t.child;for(var g=p.firstContext;g!==null;){if(g.context===a){if(t.tag===1){g=_n(-1,r&-r),g.tag=2;var A=t.updateQueue;if(A!==null){A=A.shared;var j=A.pending;j===null?g.next=g:(g.next=j.next,j.next=g),A.pending=g}}t.lanes|=r,g=t.alternate,g!==null&&(g.lanes|=r),tu(t.return,r,n),p.lanes|=r;break}g=g.next}}else if(t.tag===10)l=t.type===n.type?null:t.child;else if(t.tag===18){if(l=t.return,l===null)throw Error(o(341));l.lanes|=r,p=l.alternate,p!==null&&(p.lanes|=r),tu(l,r,n),l=t.sibling}else l=t.child;if(l!==null)l.return=t;else for(l=t;l!==null;){if(l===n){l=null;break}if(t=l.sibling,t!==null){t.return=l.return,l=t;break}l=l.return}t=l}Re(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,Ur(n,r),i=rn(i),a=a(i),n.flags|=1,Re(e,n,a,r),n.child;case 14:return a=n.type,i=dn(a,n.pendingProps),i=dn(a.type,i),No(e,n,a,i,r);case 15:return _o(e,n,n.type,n.pendingProps,r);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:dn(a,i),wi(e,n),n.tag=1,Oe(a)?(e=!0,ci(n)):e=!1,Ur(n,r),yo(n,a,i),yu(n,a,i,r),bu(null,n,a,!0,e,r);case 19:return Bo(e,n,r);case 22:return jo(e,n,r)}throw Error(o(156,n.tag))};function lc(e,n){return Ts(e,n)}function Vd(e,n,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,r,a){return new Vd(e,n,r,a)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hd(e){if(typeof e=="function")return $u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hn)return 11;if(e===vn)return 14}return 2}function Yn(e,n){var r=e.alternate;return r===null?(r=un(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ii(e,n,r,a,i,t){var l=2;if(a=e,typeof e=="function")$u(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ie:return gr(r.children,i,t,n);case qe:l=8,i|=8;break;case kn:return e=un(12,r,n,i|2),e.elementType=kn,e.lanes=t,e;case Je:return e=un(13,r,n,i),e.elementType=Je,e.lanes=t,e;case ln:return e=un(19,r,n,i),e.elementType=ln,e.lanes=t,e;case De:return Ti(r,i,t,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case En:l=10;break e;case rr:l=9;break e;case hn:l=11;break e;case vn:l=14;break e;case Te:l=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=un(l,r,n,i),n.elementType=e,n.type=a,n.lanes=t,n}function gr(e,n,r,a){return e=un(7,e,a,n),e.lanes=r,e}function Ti(e,n,r,a){return e=un(22,e,a,n),e.elementType=De,e.lanes=r,e.stateNode={isHidden:!1},e}function Wu(e,n,r){return e=un(6,e,null,n),e.lanes=r,e}function Ju(e,n,r){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $d(e,n,r,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xt(0),this.expirationTimes=xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qu(e,n,r,a,i,t,l,p,g){return e=new $d(e,n,r,p,g),n===1?(n=1,t===!0&&(n|=8)):n=0,t=un(3,null,null,n),e.current=t,t.stateNode=e,t.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(t),e}function Wd(e,n,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:a==null?null:""+a,children:e,containerInfo:n,implementation:r}}function oc(e){if(!e)return On;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Oe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(Oe(r))return Ml(e,r,n)}return n}function cc(e,n,r,a,i,t,l,p,g){return e=Qu(r,a,!0,e,i,t,l,p,g),e.context=oc(null),r=e.current,a=Be(),i=Kn(r),t=_n(a,i),t.callback=n??null,$n(r,t,i),e.current.lanes=i,ea(e,i,a),$e(e,a),e}function Li(e,n,r,a){var i=n.current,t=Be(),l=Kn(i);return r=oc(r),n.context===null?n.context=r:n.pendingContext=r,n=_n(t,l),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=$n(i,n,l),e!==null&&(gn(e,i,l,t),Di(e,i,l)),l}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Ku(e,n){mc(e,n),(e=e.alternate)&&mc(e,n)}function Jd(){return null}var dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zu(e){this._internalRoot=e}Vi.prototype.render=Zu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));Li(e,n,null,null)},Vi.prototype.unmount=Zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dr(function(){Li(null,e,null,null)}),n[bn]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qs();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Rn.length&&n!==0&&n<Rn[r].priority;r++);Rn.splice(r,0,e),r===0&&Ys(e)}};function Yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pc(){}function Qd(e,n,r,a,i){if(i){if(typeof a=="function"){var t=a;a=function(){var A=Oi(l);t.call(A)}}var l=cc(n,a,e,0,null,!1,!1,"",pc);return e._reactRootContainer=l,e[bn]=l.current,fa(e.nodeType===8?e.parentNode:e),dr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var p=a;a=function(){var A=Oi(g);p.call(A)}}var g=Qu(e,0,!1,null,null,!1,!1,"",pc);return e._reactRootContainer=g,e[bn]=g.current,fa(e.nodeType===8?e.parentNode:e),dr(function(){Li(n,g,r,a)}),g}function $i(e,n,r,a,i){var t=r._reactRootContainer;if(t){var l=t;if(typeof i=="function"){var p=i;i=function(){var g=Oi(l);p.call(g)}}Li(n,l,e,i)}else l=Qd(r,n,e,i,a);return Oi(l)}Ws=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=qr(n.pendingLanes);r!==0&&(yt(n,r|1),$e(n,xe()),(ee&6)===0&&(Tr=xe()+500,Vn()))}break;case 13:dr(function(){var a=Nn(e,1);if(a!==null){var i=Be();gn(a,e,1,i)}}),Ku(e,1)}},At=function(e){if(e.tag===13){var n=Nn(e,134217728);if(n!==null){var r=Be();gn(n,e,134217728,r)}Ku(e,134217728)}},Js=function(e){if(e.tag===13){var n=Kn(e),r=Nn(e,n);if(r!==null){var a=Be();gn(r,e,n,a)}Ku(e,n)}},Qs=function(){return le},Ks=function(e,n){var r=le;try{return le=e,n()}finally{le=r}},ft=function(e,n,r){switch(n){case"input":if(ut(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var a=r[n];if(a!==e&&a.form===e.form){var i=li(a);if(!i)throw Error(o(90));Cs(a),ut(a,i)}}}break;case"textarea":Es(e,r);break;case"select":n=r.value,n!=null&&vr(e,!!r.multiple,n,!1)}},ks=Ou,Fs=dr;var Kd={usingClientEntryPoint:!1,Events:[va,Gr,li,js,Ps,Ou]},ja={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bs(e),e===null?null:e.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||Jd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Va=Wi.inject(Zd),Dn=Wi}catch{}}return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kd,We.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(n))throw Error(o(200));return Wd(e,n,null,r)},We.createRoot=function(e,n){if(!Yu(e))throw Error(o(299));var r=!1,a="",i=dc;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Qu(e,1,!1,null,null,r,!1,a,i),e[bn]=n.current,fa(e.nodeType===8?e.parentNode:e),new Zu(n)},We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Bs(n),e=e===null?null:e.stateNode,e},We.flushSync=function(e){return dr(e)},We.hydrate=function(e,n,r){if(!Hi(n))throw Error(o(200));return $i(null,e,n,!0,r)},We.hydrateRoot=function(e,n,r){if(!Yu(e))throw Error(o(405));var a=r!=null&&r.hydratedSources||null,i=!1,t="",l=dc;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),n=cc(n,null,e,1,r??null,i,!1,t,l),e[bn]=n.current,fa(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new Vi(n)},We.render=function(e,n,r){if(!Hi(n))throw Error(o(200));return $i(null,e,n,!1,r)},We.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(o(40));return e._reactRootContainer?(dr(function(){$i(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},We.unstable_batchedUpdates=Ou,We.unstable_renderSubtreeIntoContainer=function(e,n,r,a){if(!Hi(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return $i(e,n,r,!1,a)},We.version="18.3.1-next-f1338f8080-20240426",We}var yc;function Rc(){if(yc)return es.exports;yc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),es.exports=tp(),es.exports}var Ac;function up(){if(Ac)return Ji;Ac=1;var s=Rc();return Ji.createRoot=s.createRoot,Ji.hydrateRoot=s.hydrateRoot,Ji}var sp=up();const lp=Uc(sp);Rc();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(s[m]=o[m])}return s},ka.apply(this,arguments)}var qn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(qn||(qn={}));const Sc="popstate";function op(s){s===void 0&&(s={});function c(m,d){let{pathname:f,search:C,hash:z}=m.location;return ts("",{pathname:f,search:C,hash:z},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(m,d){return typeof d=="string"?d:Qi(d)}return mp(c,o,null,s)}function Se(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function ds(s,c){if(!s){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function cp(){return Math.random().toString(36).substr(2,8)}function Ec(s,c){return{usr:s.state,key:s.key,idx:c}}function ts(s,c,o,m){return o===void 0&&(o=null),ka({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof c=="string"?Hr(c):c,{state:o,key:c&&c.key||m||cp()})}function Qi(s){let{pathname:c="/",search:o="",hash:m=""}=s;return o&&o!=="?"&&(c+=o.charAt(0)==="?"?o:"?"+o),m&&m!=="#"&&(c+=m.charAt(0)==="#"?m:"#"+m),c}function Hr(s){let c={};if(s){let o=s.indexOf("#");o>=0&&(c.hash=s.substr(o),s=s.substr(0,o));let m=s.indexOf("?");m>=0&&(c.search=s.substr(m),s=s.substr(0,m)),s&&(c.pathname=s)}return c}function mp(s,c,o,m){m===void 0&&(m={});let{window:d=document.defaultView,v5Compat:f=!1}=m,C=d.history,z=qn.Pop,S=null,y=G();y==null&&(y=0,C.replaceState(ka({},C.state,{idx:y}),""));function G(){return(C.state||{idx:null}).idx}function E(){z=qn.Pop;let w=G(),Z=w==null?null:w-y;y=w,S&&S({action:z,location:P.location,delta:Z})}function U(w,Z){z=qn.Push;let te=ts(P.location,w,Z);y=G()+1;let ne=Ec(te,y),K=P.createHref(te);try{C.pushState(ne,"",K)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;d.location.assign(K)}f&&S&&S({action:z,location:P.location,delta:1})}function L(w,Z){z=qn.Replace;let te=ts(P.location,w,Z);y=G();let ne=Ec(te,y),K=P.createHref(te);C.replaceState(ne,"",K),f&&S&&S({action:z,location:P.location,delta:0})}function H(w){let Z=d.location.origin!=="null"?d.location.origin:d.location.href,te=typeof w=="string"?w:Qi(w);return te=te.replace(/ $/,"%20"),Se(Z,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,Z)}let P={get action(){return z},get location(){return s(d,C)},listen(w){if(S)throw new Error("A history only accepts one active listener");return d.addEventListener(Sc,E),S=w,()=>{d.removeEventListener(Sc,E),S=null}},createHref(w){return c(d,w)},createURL:H,encodeLocation(w){let Z=H(w);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:U,replace:L,go(w){return C.go(w)}};return P}var bc;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(bc||(bc={}));function dp(s,c,o){return o===void 0&&(o="/"),pp(s,c,o)}function pp(s,c,o,m){let d=typeof c=="string"?Hr(c):c,f=ps(d.pathname||"/",o);if(f==null)return null;let C=Bc(s);fp(C);let z=null;for(let S=0;z==null&&S<C.length;++S){let y=zp(f);z=Sp(C[S],y)}return z}function Bc(s,c,o,m){c===void 0&&(c=[]),o===void 0&&(o=[]),m===void 0&&(m="");let d=(f,C,z)=>{let S={relativePath:z===void 0?f.path||"":z,caseSensitive:f.caseSensitive===!0,childrenIndex:C,route:f};S.relativePath.startsWith("/")&&(Se(S.relativePath.startsWith(m),'Absolute route path "'+S.relativePath+'" nested under path '+('"'+m+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),S.relativePath=S.relativePath.slice(m.length));let y=er([m,S.relativePath]),G=o.concat(S);f.children&&f.children.length>0&&(Se(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Bc(f.children,c,G,y)),!(f.path==null&&!f.index)&&c.push({path:y,score:yp(y,f.index),routesMeta:G})};return s.forEach((f,C)=>{var z;if(f.path===""||!((z=f.path)!=null&&z.includes("?")))d(f,C);else for(let S of Ic(f.path))d(f,C,S)}),c}function Ic(s){let c=s.split("/");if(c.length===0)return[];let[o,...m]=c,d=o.endsWith("?"),f=o.replace(/\?$/,"");if(m.length===0)return d?[f,""]:[f];let C=Ic(m.join("/")),z=[];return z.push(...C.map(S=>S===""?f:[f,S].join("/"))),d&&z.push(...C),z.map(S=>s.startsWith("/")&&S===""?"/":S)}function fp(s){s.sort((c,o)=>c.score!==o.score?o.score-c.score:Ap(c.routesMeta.map(m=>m.childrenIndex),o.routesMeta.map(m=>m.childrenIndex)))}const gp=/^:[\w-]+$/,hp=3,vp=2,Dp=1,Cp=10,xp=-2,zc=s=>s==="*";function yp(s,c){let o=s.split("/"),m=o.length;return o.some(zc)&&(m+=xp),c&&(m+=vp),o.filter(d=>!zc(d)).reduce((d,f)=>d+(gp.test(f)?hp:f===""?Dp:Cp),m)}function Ap(s,c){return s.length===c.length&&s.slice(0,-1).every((m,d)=>m===c[d])?s[s.length-1]-c[c.length-1]:0}function Sp(s,c,o){let{routesMeta:m}=s,d={},f="/",C=[];for(let z=0;z<m.length;++z){let S=m[z],y=z===m.length-1,G=f==="/"?c:c.slice(f.length)||"/",E=Ep({path:S.relativePath,caseSensitive:S.caseSensitive,end:y},G),U=S.route;if(!E)return null;Object.assign(d,E.params),C.push({params:d,pathname:er([f,E.pathname]),pathnameBase:jp(er([f,E.pathnameBase])),route:U}),E.pathnameBase!=="/"&&(f=er([f,E.pathnameBase]))}return C}function Ep(s,c){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,m]=bp(s.path,s.caseSensitive,s.end),d=c.match(o);if(!d)return null;let f=d[0],C=f.replace(/(.)\/+$/,"$1"),z=d.slice(1);return{params:m.reduce((y,G,E)=>{let{paramName:U,isOptional:L}=G;if(U==="*"){let P=z[E]||"";C=f.slice(0,f.length-P.length).replace(/(.)\/+$/,"$1")}const H=z[E];return L&&!H?y[U]=void 0:y[U]=(H||"").replace(/%2F/g,"/"),y},{}),pathname:f,pathnameBase:C,pattern:s}}function bp(s,c,o){c===void 0&&(c=!1),o===void 0&&(o=!0),ds(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let m=[],d="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(C,z,S)=>(m.push({paramName:z,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(m.push({paramName:"*"}),d+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":s!==""&&s!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),m]}function zp(s){try{return s.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return ds(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),s}}function ps(s,c){if(c==="/")return s;if(!s.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,m=s.charAt(o);return m&&m!=="/"?null:s.slice(o)||"/"}const Gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wp=s=>Gp.test(s);function Np(s,c){c===void 0&&(c="/");let{pathname:o,search:m="",hash:d=""}=typeof s=="string"?Hr(s):s,f;if(o)if(wp(o))f=o;else{if(o.includes("//")){let C=o;o=o.replace(/\/\/+/g,"/"),ds(!1,"Pathnames cannot have embedded double slashes - normalizing "+(C+" -> "+o))}o.startsWith("/")?f=Gc(o.substring(1),"/"):f=Gc(o,c)}else f=c;return{pathname:f,search:Pp(m),hash:kp(d)}}function Gc(s,c){let o=c.replace(/\/+$/,"").split("/");return s.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function as(s,c,o,m){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(m)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _p(s){return s.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function Tc(s,c){let o=_p(s);return c?o.map((m,d)=>d===o.length-1?m.pathname:m.pathnameBase):o.map(m=>m.pathnameBase)}function Lc(s,c,o,m){m===void 0&&(m=!1);let d;typeof s=="string"?d=Hr(s):(d=ka({},s),Se(!d.pathname||!d.pathname.includes("?"),as("?","pathname","search",d)),Se(!d.pathname||!d.pathname.includes("#"),as("#","pathname","hash",d)),Se(!d.search||!d.search.includes("#"),as("#","search","hash",d)));let f=s===""||d.pathname==="",C=f?"/":d.pathname,z;if(C==null)z=o;else{let E=c.length-1;if(!m&&C.startsWith("..")){let U=C.split("/");for(;U[0]==="..";)U.shift(),E-=1;d.pathname=U.join("/")}z=E>=0?c[E]:"/"}let S=Np(d,z),y=C&&C!=="/"&&C.endsWith("/"),G=(f||C===".")&&o.endsWith("/");return!S.pathname.endsWith("/")&&(y||G)&&(S.pathname+="/"),S}const er=s=>s.join("/").replace(/\/\/+/g,"/"),jp=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Pp=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,kp=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Fp(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Oc=["post","put","patch","delete"];new Set(Oc);const Up=["get",...Oc];new Set(Up);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(s[m]=o[m])}return s},Fa.apply(this,arguments)}const fs=b.createContext(null),Mp=b.createContext(null),hr=b.createContext(null),Xi=b.createContext(null),nr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Vc=b.createContext(null);function Rp(s,c){let{relative:o}=c===void 0?{}:c;Ma()||Se(!1);let{basename:m,navigator:d}=b.useContext(hr),{hash:f,pathname:C,search:z}=$c(s,{relative:o}),S=C;return m!=="/"&&(S=C==="/"?m:er([m,C])),d.createHref({pathname:S,search:z,hash:f})}function Ma(){return b.useContext(Xi)!=null}function $r(){return Ma()||Se(!1),b.useContext(Xi).location}function Hc(s){b.useContext(hr).static||b.useLayoutEffect(s)}function qi(){let{isDataRoute:s}=b.useContext(nr);return s?Zp():Bp()}function Bp(){Ma()||Se(!1);let s=b.useContext(fs),{basename:c,future:o,navigator:m}=b.useContext(hr),{matches:d}=b.useContext(nr),{pathname:f}=$r(),C=JSON.stringify(Tc(d,o.v7_relativeSplatPath)),z=b.useRef(!1);return Hc(()=>{z.current=!0}),b.useCallback(function(y,G){if(G===void 0&&(G={}),!z.current)return;if(typeof y=="number"){m.go(y);return}let E=Lc(y,JSON.parse(C),f,G.relative==="path");s==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:er([c,E.pathname])),(G.replace?m.replace:m.push)(E,G.state,G)},[c,m,C,f,s])}function et(){let{matches:s}=b.useContext(nr),c=s[s.length-1];return c?c.params:{}}function $c(s,c){let{relative:o}=c===void 0?{}:c,{future:m}=b.useContext(hr),{matches:d}=b.useContext(nr),{pathname:f}=$r(),C=JSON.stringify(Tc(d,m.v7_relativeSplatPath));return b.useMemo(()=>Lc(s,JSON.parse(C),f,o==="path"),[s,C,f,o])}function Ip(s,c){return Tp(s,c)}function Tp(s,c,o,m){Ma()||Se(!1);let{navigator:d}=b.useContext(hr),{matches:f}=b.useContext(nr),C=f[f.length-1],z=C?C.params:{};C&&C.pathname;let S=C?C.pathnameBase:"/";C&&C.route;let y=$r(),G;if(c){var E;let w=typeof c=="string"?Hr(c):c;S==="/"||(E=w.pathname)!=null&&E.startsWith(S)||Se(!1),G=w}else G=y;let U=G.pathname||"/",L=U;if(S!=="/"){let w=S.replace(/^\//,"").split("/");L="/"+U.replace(/^\//,"").split("/").slice(w.length).join("/")}let H=dp(s,{pathname:L}),P=$p(H&&H.map(w=>Object.assign({},w,{params:Object.assign({},z,w.params),pathname:er([S,d.encodeLocation?d.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?S:er([S,d.encodeLocation?d.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),f,o,m);return c&&P?b.createElement(Xi.Provider,{value:{location:Fa({pathname:"/",search:"",hash:"",state:null,key:"default"},G),navigationType:qn.Pop}},P):P}function Lp(){let s=Kp(),c=Fp(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},c),o?b.createElement("pre",{style:d},o):null,null)}const Op=b.createElement(Lp,null);class Vp extends b.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,o){return o.location!==c.location||o.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:o.error,location:o.location,revalidation:c.revalidation||o.revalidation}}componentDidCatch(c,o){console.error("React Router caught the following error during render",c,o)}render(){return this.state.error!==void 0?b.createElement(nr.Provider,{value:this.props.routeContext},b.createElement(Vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hp(s){let{routeContext:c,match:o,children:m}=s,d=b.useContext(fs);return d&&d.static&&d.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(nr.Provider,{value:c},m)}function $p(s,c,o,m){var d;if(c===void 0&&(c=[]),o===void 0&&(o=null),m===void 0&&(m=null),s==null){var f;if(!o)return null;if(o.errors)s=o.matches;else if((f=m)!=null&&f.v7_partialHydration&&c.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let C=s,z=(d=o)==null?void 0:d.errors;if(z!=null){let G=C.findIndex(E=>E.route.id&&(z==null?void 0:z[E.route.id])!==void 0);G>=0||Se(!1),C=C.slice(0,Math.min(C.length,G+1))}let S=!1,y=-1;if(o&&m&&m.v7_partialHydration)for(let G=0;G<C.length;G++){let E=C[G];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=G),E.route.id){let{loaderData:U,errors:L}=o,H=E.route.loader&&U[E.route.id]===void 0&&(!L||L[E.route.id]===void 0);if(E.route.lazy||H){S=!0,y>=0?C=C.slice(0,y+1):C=[C[0]];break}}}return C.reduceRight((G,E,U)=>{let L,H=!1,P=null,w=null;o&&(L=z&&E.route.id?z[E.route.id]:void 0,P=E.route.errorElement||Op,S&&(y<0&&U===0?(Yp("route-fallback"),H=!0,w=null):y===U&&(H=!0,w=E.route.hydrateFallbackElement||null)));let Z=c.concat(C.slice(0,U+1)),te=()=>{let ne;return L?ne=P:H?ne=w:E.route.Component?ne=b.createElement(E.route.Component,null):E.route.element?ne=E.route.element:ne=G,b.createElement(Hp,{match:E,routeContext:{outlet:G,matches:Z,isDataRoute:o!=null},children:ne})};return o&&(E.route.ErrorBoundary||E.route.errorElement||U===0)?b.createElement(Vp,{location:o.location,revalidation:o.revalidation,component:P,error:L,children:te(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):te()},null)}var Wc=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Wc||{}),Jc=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Jc||{});function Wp(s){let c=b.useContext(fs);return c||Se(!1),c}function Jp(s){let c=b.useContext(Mp);return c||Se(!1),c}function Qp(s){let c=b.useContext(nr);return c||Se(!1),c}function Qc(s){let c=Qp(),o=c.matches[c.matches.length-1];return o.route.id||Se(!1),o.route.id}function Kp(){var s;let c=b.useContext(Vc),o=Jp(),m=Qc();return c!==void 0?c:(s=o.errors)==null?void 0:s[m]}function Zp(){let{router:s}=Wp(Wc.UseNavigateStable),c=Qc(Jc.UseNavigateStable),o=b.useRef(!1);return Hc(()=>{o.current=!0}),b.useCallback(function(d,f){f===void 0&&(f={}),o.current&&(typeof d=="number"?s.navigate(d):s.navigate(d,Fa({fromRouteId:c},f)))},[s,c])}const wc={};function Yp(s,c,o){wc[s]||(wc[s]=!0)}function Xp(s,c){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function sn(s){Se(!1)}function qp(s){let{basename:c="/",children:o=null,location:m,navigationType:d=qn.Pop,navigator:f,static:C=!1,future:z}=s;Ma()&&Se(!1);let S=c.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:S,navigator:f,static:C,future:Fa({v7_relativeSplatPath:!1},z)}),[S,z,f,C]);typeof m=="string"&&(m=Hr(m));let{pathname:G="/",search:E="",hash:U="",state:L=null,key:H="default"}=m,P=b.useMemo(()=>{let w=ps(G,S);return w==null?null:{location:{pathname:w,search:E,hash:U,state:L,key:H},navigationType:d}},[S,G,E,U,L,H,d]);return P==null?null:b.createElement(hr.Provider,{value:y},b.createElement(Xi.Provider,{children:o,value:P}))}function ef(s){let{children:c,location:o}=s;return Ip(us(c),o)}new Promise(()=>{});function us(s,c){c===void 0&&(c=[]);let o=[];return b.Children.forEach(s,(m,d)=>{if(!b.isValidElement(m))return;let f=[...c,d];if(m.type===b.Fragment){o.push.apply(o,us(m.props.children,f));return}m.type!==sn&&Se(!1),!m.props.index||!m.props.children||Se(!1);let C={id:m.props.id||f.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(C.children=us(m.props.children,f)),o.push(C)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(s[m]=o[m])}return s},ss.apply(this,arguments)}function nf(s,c){if(s==null)return{};var o={},m=Object.keys(s),d,f;for(f=0;f<m.length;f++)d=m[f],!(c.indexOf(d)>=0)&&(o[d]=s[d]);return o}function rf(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function af(s,c){return s.button===0&&(!c||c==="_self")&&!rf(s)}function ls(s){return s===void 0&&(s=""),new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((c,o)=>{let m=s[o];return c.concat(Array.isArray(m)?m.map(d=>[o,d]):[[o,m]])},[]))}function tf(s,c){let o=ls(s);return c&&c.forEach((m,d)=>{o.has(d)||c.getAll(d).forEach(f=>{o.append(d,f)})}),o}const uf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sf="6";try{window.__reactRouterVersion=sf}catch{}const lf="startTransition",Nc=rp[lf];function of(s){let{basename:c,children:o,future:m,window:d}=s,f=b.useRef();f.current==null&&(f.current=op({window:d,v5Compat:!0}));let C=f.current,[z,S]=b.useState({action:C.action,location:C.location}),{v7_startTransition:y}=m||{},G=b.useCallback(E=>{y&&Nc?Nc(()=>S(E)):S(E)},[S,y]);return b.useLayoutEffect(()=>C.listen(G),[C,G]),b.useEffect(()=>Xp(m),[m]),b.createElement(qp,{basename:c,children:o,location:z.location,navigationType:z.action,navigator:C,future:m})}const cf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=b.forwardRef(function(c,o){let{onClick:m,relative:d,reloadDocument:f,replace:C,state:z,target:S,to:y,preventScrollReset:G,viewTransition:E}=c,U=nf(c,uf),{basename:L}=b.useContext(hr),H,P=!1;if(typeof y=="string"&&mf.test(y)&&(H=y,cf))try{let ne=new URL(window.location.href),K=y.startsWith("//")?new URL(ne.protocol+y):new URL(y),pe=ps(K.pathname,L);K.origin===ne.origin&&pe!=null?y=pe+K.search+K.hash:P=!0}catch{}let w=Rp(y,{relative:d}),Z=df(y,{replace:C,state:z,target:S,preventScrollReset:G,relative:d,viewTransition:E});function te(ne){m&&m(ne),ne.defaultPrevented||Z(ne)}return b.createElement("a",ss({},U,{href:H||w,onClick:P||f?m:te,ref:o,target:S}))});var _c;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(_c||(_c={}));var jc;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(jc||(jc={}));function df(s,c){let{target:o,replace:m,state:d,preventScrollReset:f,relative:C,viewTransition:z}=c===void 0?{}:c,S=qi(),y=$r(),G=$c(s,{relative:C});return b.useCallback(E=>{if(af(E,o)){E.preventDefault();let U=m!==void 0?m:Qi(y)===Qi(G);S(s,{replace:U,state:d,preventScrollReset:f,relative:C,viewTransition:z})}},[y,S,G,m,d,o,s,f,C,z])}function Kc(s){let c=b.useRef(ls(s)),o=b.useRef(!1),m=$r(),d=b.useMemo(()=>tf(m.search,o.current?null:c.current),[m.search]),f=qi(),C=b.useCallback((z,S)=>{const y=ls(typeof z=="function"?z(d):z);o.current=!0,f("?"+y,S)},[f,d]);return[d,C]}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zc=(...s)=>s.filter((c,o,m)=>!!c&&c.trim()!==""&&m.indexOf(c)===o).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ff={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=b.forwardRef(({color:s="currentColor",size:c=24,strokeWidth:o=2,absoluteStrokeWidth:m,className:d="",children:f,iconNode:C,...z},S)=>b.createElement("svg",{ref:S,...ff,width:c,height:c,stroke:s,strokeWidth:m?Number(o)*24/Number(c):o,className:Zc("lucide",d),...z},[...C.map(([y,G])=>b.createElement(y,G)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=(s,c)=>{const o=b.forwardRef(({className:m,...d},f)=>b.createElement(gf,{ref:f,iconNode:c,className:Zc(`lucide-${pf(s)}`,m),...d}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=ze("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=ze("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=ze("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=ze("Guitar",[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z",key:"1u8q3z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=ze("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=ze("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=ze("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=ze("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=ze("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=ze("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ze("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=ze("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=ze("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qc=b.createContext(void 0),kc="acorduri_favorites";function Af({children:s}){const[c,o]=b.useState(()=>{try{const f=localStorage.getItem(kc);return f?JSON.parse(f):[]}catch{return[]}});b.useEffect(()=>{localStorage.setItem(kc,JSON.stringify(c))},[c]);const m=b.useCallback(f=>c.includes(f),[c]),d=b.useCallback(f=>{o(C=>C.includes(f)?C.filter(z=>z!==f):[...C,f])},[]);return u.jsx(qc.Provider,{value:{favorites:c,isFavorite:m,toggleFavorite:d,favoritesCount:c.length},children:s})}function at(){const s=b.useContext(qc);if(!s)throw new Error("useFavorites must be used within a FavoritesProvider");return s}const em=b.createContext(void 0),Fc="acorduri_playlists";function Sf(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}function Ef({children:s}){const[c,o]=b.useState(()=>{try{const G=localStorage.getItem(Fc);return G?JSON.parse(G):[]}catch{return[]}});b.useEffect(()=>{localStorage.setItem(Fc,JSON.stringify(c))},[c]);const m=b.useCallback((G,E="")=>{const U=new Date().toISOString(),L={id:Sf(),name:G,description:E,songIds:[],createdAt:U,updatedAt:U};return o(H=>[...H,L]),L},[]),d=b.useCallback(G=>{o(E=>E.filter(U=>U.id!==G))},[]),f=b.useCallback((G,E)=>{o(U=>U.map(L=>L.id===G?{...L,...E,updatedAt:new Date().toISOString()}:L))},[]),C=b.useCallback((G,E)=>{o(U=>U.map(L=>L.id===G&&!L.songIds.includes(E)?{...L,songIds:[...L.songIds,E],updatedAt:new Date().toISOString()}:L))},[]),z=b.useCallback((G,E)=>{o(U=>U.map(L=>L.id===G?{...L,songIds:L.songIds.filter(H=>H!==E),updatedAt:new Date().toISOString()}:L))},[]),S=b.useCallback((G,E)=>{const U=c.find(L=>L.id===G);return U?U.songIds.includes(E):!1},[c]),y=b.useCallback(G=>c.filter(E=>E.songIds.includes(G)),[c]);return u.jsx(em.Provider,{value:{playlists:c,createPlaylist:m,deletePlaylist:d,updatePlaylist:f,addSongToPlaylist:C,removeSongFromPlaylist:z,isSongInPlaylist:S,getPlaylistsForSong:y},children:s})}function it(){const s=b.useContext(em);if(!s)throw new Error("usePlaylists must be used within a PlaylistsProvider");return s}function bf(){const[s,c]=b.useState(""),[o,m]=b.useState(!1),d=qi(),f=$r(),{favoritesCount:C}=at(),{playlists:z}=it(),S=E=>{E.preventDefault(),s.trim()&&(d(`/songs?search=${encodeURIComponent(s.trim())}`),c(""),m(!1))},y=E=>f.pathname===E,G=[{path:"/",label:"Acasă"},{path:"/songs",label:"Cântece"},{path:"/categories",label:"Categorii"},{path:"/authors",label:"Artiști"},{path:"/chords",label:"Acorduri"}];return u.jsx("nav",{className:"bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"flex items-center justify-between h-16",children:[u.jsxs(ue,{to:"/",className:"flex items-center gap-2 text-blue-600 font-bold text-xl shrink-0",children:[u.jsx(gs,{size:24}),u.jsx("span",{className:"hidden sm:inline",children:"Chitara Mea"})]}),u.jsx("div",{className:"hidden md:flex items-center gap-1",children:G.map(E=>u.jsx(ue,{to:E.path,className:`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${y(E.path)?"bg-blue-50 text-blue-700":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:E.label},E.path))}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("form",{onSubmit:S,className:"hidden sm:flex items-center",children:u.jsxs("div",{className:"relative",children:[u.jsx(Zi,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),u.jsx("input",{type:"text",value:s,onChange:E=>c(E.target.value),placeholder:"Caută cântece, artiști...",className:"pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 lg:w-64"})]})}),u.jsxs(ue,{to:"/favorites",className:`relative p-2 rounded-lg transition-colors ${y("/favorites")?"bg-red-50 text-red-600":"text-gray-500 hover:bg-gray-50"}`,title:"Favorite",children:[u.jsx(Or,{size:20,fill:C>0?"currentColor":"none"}),C>0&&u.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center",children:C})]}),u.jsxs(ue,{to:"/playlists",className:`relative p-2 rounded-lg transition-colors ${y("/playlists")?"bg-purple-50 text-purple-600":"text-gray-500 hover:bg-gray-50"}`,title:"Playlisturi",children:[u.jsx(Vr,{size:20}),z.length>0&&u.jsx("span",{className:"absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center",children:z.length})]}),u.jsx("button",{className:"md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-50",onClick:()=>m(!o),children:o?u.jsx(vs,{size:20}):u.jsx(Df,{size:20})})]})]}),o&&u.jsxs("div",{className:"md:hidden pb-4 border-t border-gray-100",children:[u.jsx("form",{onSubmit:S,className:"px-2 pt-3 pb-2",children:u.jsxs("div",{className:"relative",children:[u.jsx(Zi,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),u.jsx("input",{type:"text",value:s,onChange:E=>c(E.target.value),placeholder:"Caută cântece, artiști...",className:"w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]})}),G.map(E=>u.jsx(ue,{to:E.path,className:`block px-4 py-2 text-sm font-medium rounded-lg mx-2 ${y(E.path)?"bg-blue-50 text-blue-700":"text-gray-600 hover:bg-gray-50"}`,onClick:()=>m(!1),children:E.label},E.path))]})]})})}function zf(){return u.jsx("footer",{className:"bg-gray-900 text-gray-400 mt-12",children:u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:u.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx(gs,{size:16,className:"text-blue-400"}),u.jsx("span",{children:"Chitara Mea"}),u.jsx("span",{className:"text-gray-600",children:"|"}),u.jsx("span",{children:"Acorduri și tabulaturi pentru chitară"})]}),u.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500",children:[u.jsx("span",{children:"Făcut cu"}),u.jsx(Or,{size:12,className:"text-red-400",fill:"currentColor"}),u.jsx("span",{children:"pentru iubitorii de muzică"})]})]})})})}const Ds=[{id:1,name:"A",type:"major",root_note:"A",positions:[{fret:2,string:3,finger:2},{fret:2,string:4,finger:1},{fret:2,string:5,finger:3}],open_strings:[2,6],muted_strings:[1],barre:null,start_fret:1},{id:2,name:"A#",type:"major",root_note:"A#",positions:[{fret:1,string:1,finger:1},{fret:3,string:2,finger:2},{fret:3,string:3,finger:3},{fret:3,string:4,finger:4},{fret:1,string:5,finger:1},{fret:1,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:1,from_string:1,to_string:6},start_fret:1},{id:3,name:"A#m",type:"minor",root_note:"A#",positions:[{fret:1,string:1,finger:1},{fret:3,string:2,finger:3},{fret:3,string:3,finger:4},{fret:1,string:4,finger:1},{fret:1,string:5,finger:1},{fret:1,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:1,from_string:1,to_string:6},start_fret:1},{id:4,name:"A6",type:"6th",root_note:"A",positions:[{fret:2,string:3,finger:1},{fret:2,string:4,finger:2},{fret:2,string:5,finger:3}],open_strings:[1,6],muted_strings:[2],barre:null,start_fret:1},{id:5,name:"A7",type:"dominant 7th",root_note:"A",positions:[{fret:2,string:3,finger:2},{fret:2,string:5,finger:3}],open_strings:[2,4,6],muted_strings:[1],barre:null,start_fret:1},{id:6,name:"Am",type:"minor",root_note:"A",positions:[{fret:2,string:3,finger:2},{fret:2,string:4,finger:3},{fret:1,string:5,finger:1}],open_strings:[2,6],muted_strings:[1],barre:null,start_fret:1},{id:7,name:"Am/C",type:"minor",root_note:"A",positions:[{fret:2,string:3,finger:2},{fret:2,string:4,finger:3},{fret:1,string:5,finger:1},{fret:3,string:2,finger:4}],open_strings:[6],muted_strings:[1],barre:null,start_fret:1},{id:8,name:"Am7",type:"minor 7th",root_note:"A",positions:[{fret:2,string:3,finger:2},{fret:1,string:5,finger:1}],open_strings:[1,4,6],muted_strings:[2],barre:null,start_fret:1},{id:9,name:"Am9",type:"minor 9th",root_note:"A",positions:[{fret:2,string:3,finger:2},{fret:1,string:5,finger:1}],open_strings:[1,4,6],muted_strings:[2],barre:null,start_fret:1},{id:10,name:"Asus4",type:"sus4",root_note:"A",positions:[{fret:2,string:3,finger:1},{fret:2,string:4,finger:2},{fret:3,string:5,finger:3}],open_strings:[2,6],muted_strings:[1],barre:null,start_fret:1},{id:11,name:"B",type:"major",root_note:"B",positions:[{fret:2,string:2,finger:1},{fret:4,string:3,finger:2},{fret:4,string:4,finger:3},{fret:4,string:5,finger:4},{fret:2,string:6,finger:1}],open_strings:[],muted_strings:[1],barre:{fret:2,from_string:2,to_string:6},start_fret:1},{id:12,name:"B7",type:"dominant 7th",root_note:"B",positions:[{fret:2,string:2,finger:2},{fret:1,string:3,finger:1},{fret:2,string:4,finger:3},{fret:2,string:6,finger:4}],open_strings:[5],muted_strings:[1],barre:null,start_fret:1},{id:13,name:"Bb",type:"major",root_note:"Bb",positions:[{fret:1,string:2,finger:1},{fret:3,string:3,finger:2},{fret:3,string:4,finger:3},{fret:3,string:5,finger:4},{fret:1,string:6,finger:1}],open_strings:[],muted_strings:[1],barre:{fret:1,from_string:2,to_string:6},start_fret:1},{id:14,name:"Bdim",type:"diminished",root_note:"B",positions:[{fret:1,string:3,finger:1},{fret:3,string:4,finger:3},{fret:2,string:5,finger:2}],open_strings:[],muted_strings:[1,2,6],barre:null,start_fret:1},{id:15,name:"Bm",type:"minor",root_note:"B",positions:[{fret:2,string:2,finger:1},{fret:4,string:3,finger:3},{fret:4,string:4,finger:4},{fret:3,string:5,finger:2},{fret:2,string:6,finger:1}],open_strings:[],muted_strings:[1],barre:{fret:2,from_string:2,to_string:6},start_fret:1},{id:16,name:"C",type:"major",root_note:"C",positions:[{fret:3,string:2,finger:3},{fret:2,string:3,finger:2},{fret:1,string:5,finger:1}],open_strings:[4,6],muted_strings:[1],barre:null,start_fret:1},{id:17,name:"C#",type:"major",root_note:"C#",positions:[{fret:4,string:2,finger:1},{fret:6,string:3,finger:2},{fret:6,string:4,finger:3},{fret:6,string:5,finger:4},{fret:4,string:6,finger:1}],open_strings:[],muted_strings:[1],barre:{fret:4,from_string:2,to_string:6},start_fret:4},{id:18,name:"C#7",type:"dominant 7th",root_note:"C#",positions:[{fret:4,string:2,finger:1},{fret:6,string:3,finger:3},{fret:4,string:4,finger:1},{fret:6,string:5,finger:4},{fret:4,string:6,finger:1}],open_strings:[],muted_strings:[1],barre:{fret:4,from_string:2,to_string:6},start_fret:4},{id:19,name:"C#m",type:"minor",root_note:"C#",positions:[{fret:4,string:2,finger:1},{fret:6,string:3,finger:3},{fret:6,string:4,finger:4},{fret:5,string:5,finger:2},{fret:4,string:6,finger:1}],open_strings:[],muted_strings:[1],barre:{fret:4,from_string:2,to_string:6},start_fret:4},{id:20,name:"C7",type:"dominant 7th",root_note:"C",positions:[{fret:3,string:2,finger:3},{fret:2,string:3,finger:2},{fret:3,string:4,finger:4},{fret:1,string:5,finger:1}],open_strings:[6],muted_strings:[1],barre:null,start_fret:1},{id:21,name:"C9",type:"9th",root_note:"C",positions:[{fret:3,string:2,finger:2},{fret:3,string:3,finger:3},{fret:2,string:4,finger:1},{fret:3,string:5,finger:4}],open_strings:[6],muted_strings:[1],barre:null,start_fret:1},{id:22,name:"Cdim",type:"diminished",root_note:"C",positions:[{fret:2,string:3,finger:1},{fret:4,string:4,finger:3},{fret:3,string:5,finger:2}],open_strings:[],muted_strings:[1,2,6],barre:null,start_fret:1},{id:23,name:"Cm",type:"minor",root_note:"C",positions:[{fret:3,string:2,finger:1},{fret:5,string:3,finger:3},{fret:5,string:4,finger:4},{fret:4,string:5,finger:2},{fret:3,string:6,finger:1}],open_strings:[],muted_strings:[1],barre:{fret:3,from_string:2,to_string:6},start_fret:1},{id:24,name:"D",type:"major",root_note:"D",positions:[{fret:2,string:4,finger:1},{fret:3,string:5,finger:3},{fret:2,string:6,finger:2}],open_strings:[3],muted_strings:[1,2],barre:null,start_fret:1},{id:25,name:"D6",type:"6th",root_note:"D",positions:[{fret:2,string:4,finger:2},{fret:2,string:6,finger:3}],open_strings:[3,5],muted_strings:[1,2],barre:null,start_fret:1},{id:26,name:"D7",type:"dominant 7th",root_note:"D",positions:[{fret:2,string:4,finger:3},{fret:1,string:5,finger:1},{fret:2,string:6,finger:2}],open_strings:[3],muted_strings:[1,2],barre:null,start_fret:1},{id:27,name:"D7sus4",type:"sus4",root_note:"D",positions:[{fret:1,string:4,finger:1},{fret:3,string:5,finger:3},{fret:1,string:6,finger:2}],open_strings:[3],muted_strings:[1,2],barre:null,start_fret:1},{id:28,name:"Ddim",type:"diminished",root_note:"D",positions:[{fret:1,string:4,finger:1},{fret:3,string:5,finger:3},{fret:1,string:6,finger:2}],open_strings:[3],muted_strings:[1,2],barre:null,start_fret:1},{id:29,name:"Dm",type:"minor",root_note:"D",positions:[{fret:2,string:4,finger:2},{fret:3,string:5,finger:3},{fret:1,string:6,finger:1}],open_strings:[3],muted_strings:[1,2],barre:null,start_fret:1},{id:30,name:"Dm7",type:"minor 7th",root_note:"D",positions:[{fret:2,string:4,finger:2},{fret:1,string:5,finger:1},{fret:1,string:6,finger:1}],open_strings:[3],muted_strings:[1,2],barre:{fret:1,from_string:5,to_string:6},start_fret:1},{id:31,name:"E",type:"major",root_note:"E",positions:[{fret:2,string:2,finger:2},{fret:2,string:3,finger:3},{fret:1,string:4,finger:1}],open_strings:[1,5,6],muted_strings:[],barre:null,start_fret:1},{id:32,name:"E7",type:"dominant 7th",root_note:"E",positions:[{fret:2,string:2,finger:2},{fret:1,string:4,finger:1}],open_strings:[1,3,5,6],muted_strings:[],barre:null,start_fret:1},{id:33,name:"Eb",type:"major",root_note:"Eb",positions:[{fret:1,string:3,finger:1},{fret:3,string:4,finger:2},{fret:4,string:5,finger:4},{fret:3,string:6,finger:3}],open_strings:[],muted_strings:[1,2],barre:null,start_fret:1},{id:34,name:"Edim",type:"diminished",root_note:"E",positions:[{fret:2,string:3,finger:2},{fret:3,string:4,finger:3},{fret:2,string:5,finger:1}],open_strings:[1],muted_strings:[2,6],barre:null,start_fret:1},{id:35,name:"Em",type:"minor",root_note:"E",positions:[{fret:2,string:2,finger:2},{fret:2,string:3,finger:3}],open_strings:[1,4,5,6],muted_strings:[],barre:null,start_fret:1},{id:36,name:"F",type:"major",root_note:"F",positions:[{fret:1,string:1,finger:1},{fret:3,string:2,finger:3},{fret:3,string:3,finger:4},{fret:2,string:4,finger:2},{fret:1,string:5,finger:1},{fret:1,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:1,from_string:1,to_string:6},start_fret:1},{id:37,name:"F#",type:"major",root_note:"F#",positions:[{fret:2,string:1,finger:1},{fret:4,string:2,finger:3},{fret:4,string:3,finger:4},{fret:3,string:4,finger:2},{fret:2,string:5,finger:1},{fret:2,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:2,from_string:1,to_string:6},start_fret:1},{id:38,name:"F#7",type:"dominant 7th",root_note:"F#",positions:[{fret:2,string:1,finger:1},{fret:4,string:2,finger:3},{fret:2,string:3,finger:1},{fret:3,string:4,finger:2},{fret:2,string:5,finger:1},{fret:2,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:2,from_string:1,to_string:6},start_fret:1},{id:39,name:"F#m",type:"minor",root_note:"F#",positions:[{fret:2,string:1,finger:1},{fret:4,string:2,finger:3},{fret:4,string:3,finger:4},{fret:2,string:4,finger:1},{fret:2,string:5,finger:1},{fret:2,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:2,from_string:1,to_string:6},start_fret:1},{id:40,name:"Fm",type:"minor",root_note:"F",positions:[{fret:1,string:1,finger:1},{fret:3,string:2,finger:3},{fret:3,string:3,finger:4},{fret:1,string:4,finger:1},{fret:1,string:5,finger:1},{fret:1,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:1,from_string:1,to_string:6},start_fret:1},{id:41,name:"G",type:"major",root_note:"G",positions:[{fret:3,string:1,finger:2},{fret:2,string:2,finger:1},{fret:3,string:6,finger:3}],open_strings:[3,4,5],muted_strings:[],barre:null,start_fret:1},{id:42,name:"G#",type:"major",root_note:"G#",positions:[{fret:4,string:1,finger:1},{fret:6,string:2,finger:3},{fret:6,string:3,finger:4},{fret:5,string:4,finger:2},{fret:4,string:5,finger:1},{fret:4,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:4,from_string:1,to_string:6},start_fret:4},{id:43,name:"G#7",type:"dominant 7th",root_note:"G#",positions:[{fret:4,string:1,finger:1},{fret:6,string:2,finger:3},{fret:4,string:3,finger:1},{fret:5,string:4,finger:2},{fret:4,string:5,finger:1},{fret:4,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:4,from_string:1,to_string:6},start_fret:4},{id:44,name:"G#m",type:"minor",root_note:"G#",positions:[{fret:4,string:1,finger:1},{fret:6,string:2,finger:3},{fret:6,string:3,finger:4},{fret:4,string:4,finger:1},{fret:4,string:5,finger:1},{fret:4,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:4,from_string:1,to_string:6},start_fret:4},{id:45,name:"G7",type:"dominant 7th",root_note:"G",positions:[{fret:3,string:1,finger:3},{fret:2,string:2,finger:2},{fret:1,string:6,finger:1}],open_strings:[3,4,5],muted_strings:[],barre:null,start_fret:1},{id:46,name:"Gm",type:"minor",root_note:"G",positions:[{fret:3,string:1,finger:1},{fret:5,string:2,finger:3},{fret:5,string:3,finger:4},{fret:3,string:4,finger:1},{fret:3,string:5,finger:1},{fret:3,string:6,finger:1}],open_strings:[],muted_strings:[],barre:{fret:3,from_string:1,to_string:6},start_fret:1},{id:47,name:"Gsus4",type:"sus4",root_note:"G",positions:[{fret:3,string:1,finger:2},{fret:3,string:2,finger:3},{fret:3,string:6,finger:4}],open_strings:[3,4,5],muted_strings:[],barre:null,start_fret:1}],Sn=[{id:1,title:"Se mărită Mona mea",slug:"se-marita-mona-mea-1",content:`Intro : B   Em 

Refren : 

            D   Em 
Aoleu!
                     D 
Ce să mă fac, Doamne eu? 
                 C
Se mărită Mona mea
                            B7
 Nu știu Doamne ce-i cu ea


Em         A 
 Aoleu,
                      D                       G
 ce să mă fac, Doamne eu?
                    C             Am 
 Se mărită Mona mea
                             B7
 Nu știu Doamne ce-i cu ea


Bridge : 

Em        D            C              B
 Vino la mine ca pasărea în zbor
Em        D            C              B
 Eu vin la tine, la tine cu dor 


Vers 

Em 
Aseară pe stradă
A                     D
 am întâlnit o fată 
G                 C
Avea părul negru
Am                B
 și ochii căprui `,author:{id:1,name:"Azur",slug:"azur"},author_id:1,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""},{id:2,name:"Lăutărești",slug:"lautaresti",description:""}],chords:["D","Em","C","B7","A","G","Am","B"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:2,title:"Ce mult te-am iubit Paraschivo (fingerstyle)",slug:"ce-mult-te-am-iubit-paraschivo-fingerstyle-2",content:`Pentru a simplifica tabulatura, notez
AmbA acord de Am pe care se ciupeste 
coarda La in bas și AmbE, acord de Am cu 
Mi in bas. 

Ciupitura pe toate acordurile 
se face coarda bas o data, dupa ciupire 
primele 3 corzi de langa coarda de bas de
2 ori, cele 3 fiind in masura egala (de 
triolet).

E destul de usoara, doar trebuie sa va
obișnuiți cu ritmul.

Intro: AmbA AmbE AmbA AmbE 

Dupa care se canta pe coarda E: E, F#,G
si se continua cu AmbA AmbE


Strofa:

AmbA        AmbE         AmbA  AmbE  
Ce mult te-am iubit Paraschivo
Dm x2                  AmbA AmbE
Ti-am zis-o d-o mie da ori
Dm x2
Si ca drept dovada                  |
AmbA              AmbE.             |
Ti-am adus gramada                  | bis
E x2                     AmbA  AmbE |     
Vreo trei basculante da flori.      |

Te-am luat de la ma-ta de acasa
In fusta si far' de jupon
Ti-am luat si poseta
Ti-am luat si jacheta
Si-o geaca mishto da nailon
TI-am luat si posheta
Ti-am luat si jacheta
Si-o rochie misto da nailon

Te-am si cultivat Paraschivo
Te-am dus la chermeza si meci
TI-am luat si bomboane ba
Ti-am luat si samantza
Tu faci pe nasoala si pleci
Ti-am luat si bomboane
Ti-am luat si samantza
Fa tu faci pe nasoala si pleci

Pa frati-tu si pa tot neamu
Sa nu va mai prind ca ma rogi
V-am scos dintr-o pivnitza
Cand v-a spart geamu
Pa f**-va-n gat da milogi
V-am scos dintr-o pivnitza
Cand v-a spart geamu
Pai f**-va-n *** da milogi

La dragostea mea aia mare
Mai spun 2 vorbe sh-atat
Ca cand iese luna eu scot bracinarii
Pa ma spanzur cu ma-ta pa gat
Ca cand iese luna
Imi scot bracinarii
Ma spanzur cu mata da gat

Cand tactu bolnav de holera
In 3-4 zile a crepat
Si bani da tamaie si bani de coliva
Tot Mandea saracu tia dat
Si bani da coliva
Si bani da tamaie
Tot Mandea saracu ti-a dat!

Dar daca te prind Paraschivo
La brat cu-un alt gealat
Iti iau si posheta
Iti bat si gagiul
Si o suta de pumni iei in cap
Iti bat si posheta
Iti iau si gagiul
Si-o suta da pumni iei in cap!`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["Am","E","G","Dm"],strumming:[{pattern:["D","-","U","-","D","-","U","-"],timeSignature:"4/4",name:"Fingerstyle"}],views:0},{id:3,title:"Jeana",slug:"jeana-3",content:`Ultimul vers din fiecare strofa se poate canta liber, sau folosind acordul E (eu prefer fara). Ca bataie, folosesc jos-jos, pauza, jos-jos.\r
\r
Am\r
Jeana era croitoreasă\r
Dm\r
Jan frizeru' o iubea\r
E\r
Şi-a murit tuberculoasă\r
E\r
Jan frizerul o jelea.  Am E\r
\r
Refren:\r
Nu mai plânge Jane\r
Plânsul e de formă\r
Jeana nu e moartă\r
Jeana să transformă.\r
\r
Şi când a fost la înmormântare\r
Plângea şi ultimu' calic\r
Şi când Jănel mai puse o floare\r
Doamne plângea şi caii dă la dric.\r
\r
Nu mai plânge Jane\r
Plânsul e de formă\r
Jeana nu e moartă\r
Jeana se transformă\r
\r
Colo-n deal la croitorie\r
Stătea cearceafuri la uscat\r
Curgea bacilii de fizie\r
Curgea încet treptat treptat\r
\r
Nu mai plânge Jane\r
Plânsul e de formă\r
Jeana nu e moartă\r
Jeana se transformă\r
\r
Stă paduchii întinţi la soare\r
Stă paduchii câte doi\r
Păi cum stăteau odinioară\r
Jan şi Jeana amandoi.\r
\r
Nu mai plânge Jane\r
Plânsul e de formă\r
Jeana nu e moartă\r
Jeana se transformă.`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["Am","Dm","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:4,title:"Jana era croitoreasa",slug:"jana-era-croitoreasa-4",content:`capo pe tasta 3\r
Em, Am, B7, C\r
\r
doua batai diferite:\r
pe strofa bataie lautareasca: j sjs j sj j\r
pe refren bataie de vals: s jj\r
\r
Em\r
Jeana era croitoreasă\r
Am\r
Jan frizeru' o iubea\r
B7                 Em  Am\r
Şi-a murit tuberculoasă\r
C            B7   Em\r
Jan frizerul o jelea\r
\r
Em\r
Nu mai plânge Jane\r
Am           Em        \r
Plânsul e de formă\r
B7\r
Jeana nu e moartă\r
Am    B7      Em\r
Jeana să transformă\r
\r
Şi când a fost la înmormântare\r
Plângea şi ultimu' calic\r
Şi când Jănel mai puse o floare\r
Doamne plângea şi caii dă la dric\r
\r
Nu mai plânge Jane\r
Plânsul e de formă\r
Jeana nu e moartă\r
Jeana se transformă\r
\r
Colo-n deal la croitorie\r
Stătea cearceafuri la uscat\r
Curgea bacilii de fizie\r
Curgea încet treptat treptat\r
\r
Nu mai plânge Jane\r
Plânsul e de formă\r
Jeana nu e moartă\r
Jeana se transformă\r
\r
Stă paduchii întinţi la soare\r
Stă paduchii câte doi\r
Păi cum stăteau odinioară\r
Jan şi Jeana amandoi.\r
\r
Nu maï plânge Jane\r
Plânsul e de formă\r
Jeana nu e moartă\r
Jeana se transformă.`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["Em","Am","B7","C"],strumming:[{pattern:["D","U","U"],timeSignature:"3/4",name:"Vals"}],views:0},{id:5,title:"Sobita din odaie",slug:"sobita-din-odaie-5",content:`D\r
1. Ma puse dracu sa ma-nsor\r
A             D\r
Ce mare dandanaie\r
D\r
Sa-mi iau nevasta cu avere\r
A         D\r
O soba de odaie.\r
\r
  Ref:\r
G             D\r
Dur-dur-duru da-i cu cu*u\r
A            D\r
S-asa mica cum e ea\r
G             D\r
Dur-dur-duru da-i cu cu*u\r
A            D\r
E sobita mea...\r
\r
2. In prima noapte ea n-a vrut\r
A zis ca-i fac durere\r
Ca-i stric sobita ce i-a dat-o\r
Ma-sa ca avere...\r
\r
3. A doua noapte tot la fel\r
N-a scos macar o vorba\r
Dar eram tanar s-as fi vrut\r
Sa bag un lemn in soba\r
\r
4. A treia noapte-am incercat\r
Sobita era sparta\r
Cu multe luni-naitea mea\r
Bagase altu-o cioata\r
\r
5. Acum sobita s-a largit \r
Incap lemne mai multe\r
Noroc ca am prieteni buni \r
Sa vina sa m-ajute\r
\r
6. Vecinii mei sunt oameni buni\r
Nu scot nici ei o vorba\r
Mai vin si ei din cand in cand\r
Sa bage-un lemn in soba...\r
\r
\r
Varianta studenteasca...de munte...de chef..de betie :))\r
...simplu cu bass si bataie-n jos..`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:3,name:"Folk",slug:"folk",description:""},{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["D","A","G","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:6,title:"M-am dus sa tai un copac (cadee')",slug:"m-am-dus-sa-tai-un-copac-cadee-6",content:`G        Em\r
Hei hei m-am dus m-am dus\r
    C        D\r
Sa tai un copac,\r
              G       Em\r
Hei hei m-am dus m-am dus\r
       C        D\r
Sa-mi tai un copac,\r
      G      Em\r
Cu prietenii mei\r
    C         D\r
Sa tai un copac,\r
            G     Em\r
Cu toti prietenii mei\r
      C       D\r
Sa tai un copac,\r
           G\r
Si-atunci, am strigat:\r
\r
G         \r
CADEEEEEEEE!!!!!!!!\r
D            G        \r
Da-te ba ca cade!\r
D            G              \r
Da-te ba ca cade,\r
G          Em        C     D             \r
cade cade cade cade cade copacul!\r
\r
Hei hei m-am dus m-am dus\r
Sa beau un coniac,\r
Hei hei m-am dus m-am dus\r
Sa beau un coniac,\r
Cu toti prietenii mei\r
Sa beau un coniac,\r
Cu prietenii mei\r
Sa tai un copac\r
Si-atunci am strigat\r
Cade copacul!\r
Si-atunci am urlat\r
Curge coniacul!\r
Si-atunci a venit\r
Un mic pui de drac,\r
Si-atunci am urlat:\r
\r
CURGEEEEEE!!!!!!!!\r
Curge coniacul!\r
Pana ne ia dracu'\r
Curge coniacul,curge \r
Cade copacul\r
\r
Hei hei m-am dus m-am dus\r
Sa tai un copac,\r
Hei hei m-am dus m-am dus\r
Sa-mi tai un copac,\r
Cu prietenii mei\r
Sa tai un copac,\r
Cu toti prietenii mei\r
Sa tai un copac,\r
Si-atunci am strigat\r
Cade copacul!\r
Si-atunci am urlat\r
Curge coniacul!\r
Si-atunci a venit\r
Un mic pui de drac\r
Si-atunci am urlat:\r
\r
CADEEEEEEEE!!!!!!!!!\r
Da-te ba ca cade!\r
Da-te ba ca cade\r
cade cade cade cade cade copacul!`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""},{id:4,name:"Satiră și umor",slug:"satira-si-umor",description:""}],chords:["G","Em","C","D"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:7,title:"Ma iubeste femeile",slug:"ma-iubeste-femeile-7",content:`Am\r
Ma iubeste femeile\r
Dm          Am      \r
Si e moarte dupa mine\r
Dm             Am       \r
Toata ziua imi sade pe cap\r
E                       Am \r
Nu stiu ce sa fac ca sa scap\r
\r
Am                   Dm\r
Dom'ne toate ma cere,toate ma vrea\r
E                Am      \r
Zice ca le place destinctia mea\r
Am                  Dm    \r
Eu nu stiu ce-i aia dar daca or vrea\r
E                       Am\r
Le-o dau pe toata ce sa fac eu cu ea\r
\r
Ma iubeste femeile\r
Si e moarte dupe mine,\r
Toata ziua imi sade pe cap,\r
Nu stiu ce sa fac\r
Ca sa scap\r
\r
E cate unii dom'ne,n-are noroc,\r
Nu place dom'ne la dame deloc,\r
Degeaba umbla dupa fomei,\r
Ca nu se uita nici dracu' la ei.\r
\r
Ma iubeste femeile\r
Si e moarte dupe mine,\r
Toata ziua imi sade pe cap,\r
Nu stiu ce sa fac\r
Ca sa scap\r
\r
Cand ies afara ma-mbrac frumos,\r
Imi pun un trening si pantofi cu toc,\r
Toate femeile se uita la mine,\r
Nu stiu da ce, da' cred ca-i da bine.\r
\r
Ma iubeste femeile\r
Si e moarte dupe mine,\r
Toata ziua imi sade pe cap,\r
Nu stiu ce sa fac\r
Ca sa scap\r
\r
Da'-mi iau nevasta, sa fie-a mea,\r
Nu ca tramvaiul, s-o ia cine vrea,\r
Ca este unii dom'ne, care netoti\r
Isi ia nevasta biblioteca pentru toti.\r
\r
Ma iubeste femeile\r
Si e moarte dupe mine,\r
Toata ziua imi sade pe cap,\r
Nu stiu ce sa fac\r
Ca sa scap\r
\r
Ma iubeste femeile\r
Si e moarte dupe mine,\r
Toata ziua imi sade pe cap,\r
Nu stiu ce sa fac\r
Ca sa scap`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:2,name:"Lăutărești",slug:"lautaresti",description:""},{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["Am","Dm","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:8,title:"La cap de pod",slug:"la-cap-de-pod-8",content:`C\r
Cand ti-o fi lumea mai draga\r
  Am\r
5 bani 10 bani ajutor pt golani\r
Sa-ti cada dreapta beteaga\r
5 centi 10 centi ajutor pt studenti\r
Si-am ajuns la cap de pod\r
Cersetor sunt si olog\r
\r
                C                   Am\r
R: La cap de pooood...la cap de poood...\r
                C                        Am\r
   La cap de pooood... sa ti-o dau la boooot...\r
   Si ce-ai sa faci...\r
   Exercitii umeri craci..\r
\r
Cand erai la ma-ta fata\r
5 bani 10 bani ajutor pt golani\r
Te pisai cat o galeata \r
5 centi 10 centi ajutor pt studenti\r
Iar acum la maritiiis\r
Niagara cand te piiiiisi\r
\r
R:\r
\r
Ai jurat ca esti virgina\r
5 bani 10 bani ajutor pt golani\r
Iar eu fac penicilina \r
5 centi 10 centi ajutor pt studenti\r
M-ai facut din om neoooom\r
Cand ma pis ma tin de poooom\r
\r
R:\r
\r
Erai mica n-ai stiut\r
5 bani 10 bani ajutor pt golani\r
Si-ai picat la asternut\r
5 centi 10 centi ajutor pt studenti\r
Acum esti mare si proasta \r
Ai picat in posta noastra\r
\r
R:`,author:{id:3,name:"Anonim",slug:"anonim"},author_id:3,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["C","Am"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:9,title:"Cand te scuturi de zapada",slug:"cand-te-scuturi-de-zapada-9",content:`G              Am/C             D                G\r
Cand te scuturi de zapada nu stii cat esti de frumosa\r
Ochii-ti verzi, zapada-i alba si se face cald in casa\r
\r
Jepii Mici ca sa te vada si-au cumparat ochelari\r
Si in cea mai mare graba i-au chemat pe Jepii Mari\r
Si calugarii din schit vor cu toti a te vedea\r
La cabana au venit, doar pentru iubita mea\r
\r
Cand te scuturi de zapada nu stii cat esti de frumosa\r
Ochii-ti verzi, zapada-i alba si se face cald in casa\r
\r
Crivatul cand te-a zarit n-a mai vrut s-o ia din loc\r
Si se-aud in departari toti cainii latrand la stana(foc)\r
Dar nu stiu sigur, azi sau maine, pe Morar am sa te sui\r
Sa ne logodim iubit-o, sus in varful muntelui\r
\r
Cand te scuturi de zapada nu stii cat esti de frumosa\r
Ochii-ti verzi, zapada-i alba si se face cald in casa\r
\r
Si calugarii din schit vor cu toti a te vedea\r
La cabana au venit, la cabana Padina...\r
Nu stiu sigur, azi sau maine,(pe Morar) pe Morar am sa te sui\r
Sa ne logodim iubit-o, sus la mama dracului\r
\r
Cand te scuturi de zapada nu stii cat esti de frumosa\r
Ochii-ti verzi, zapada-i alba si se face cald in casa`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:3,name:"Folk",slug:"folk",description:""},{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["G","Am/C","D"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:10,title:"Femei, femei...",slug:"femei-femei-10",content:`Intro:\r
Dm Am E Am\r
\r
I:\r
		Dm\r
Nu e nimeni pe strada\r
		Am\r
Ochii tristi sa mi-i vada...\r
		E\r
A, nu-i nimeni pe strada\r
		Am\r
Sa ma vada cum plang.\r
\r
Doar un gabor de seara,\r
Ce-a venit ca sa-mi ceara\r
Sa-si aprind-o tigara\r
M-a vazut lacrimand...\r
\r
Refren:\r
Femei, femei, (asa...)\r
E plina lumea de nebune, (da' cum...)\r
Cine v-a adus pe lume, (cine?)\r
Cine oare v-a facut? (cine oare, ce oare?)\r
Femei, femei, \r
E plina lumea de nebune, (buneee)\r
Cine v-a adus pe lume, \r
Cine oare v-a facut? (eu nu)\r
\r
II:\r
\r
Si-acel gabor de seara, (a gabor)\r
Ce-a venit ca sa-mi ceara, (aaa)\r
A zis razand catre mine (a, deci gaboru' a zis razand)\r
"Wai, decat sa-ti fie rau mai bine sa-ti fie bine!" (al dracu' bai)\r
\r
Refren:\r
\r
Femei, femei, (ia zi ba ce)\r
E plina lumea de nebune, (ei nu mai spune, frate)\r
Cine v-a adus pe lume, (hai, ba, fii serios acuma)\r
Cine oare v-a facut? (aha, aha! aha...)\r
Barbati, barbati, (aicea, hahahaha)\r
E plina lumea de c*cati, (aoleu)\r
De suparati si de-ncordati, (ia vezi, alo...)\r
Nu stiti decat sa va-mbatati! (ia stai sa te prind o data beat sa vezi tu care-i treaba...)\r
\r
Deci autoru' a vrut sa spuna in urmatoarele versuri\r
Ca se plimba singur pe strada si a nimerit de un gabor care a cerut o tigara\r
Care tigara cand i-a dat-o el a zis ba femeile el era inlacrimat\r
De fapt tigara plangea cu niste lacrimi cat crocodilu'\r
Margineanu era politist si politistu' era\r
Bai femei femei la care politistu' zice "C*cat!" nu...\r
Politistii zice... zice lu' Margineanu\r
Ba, Margineanu, femeile sunt niste ratati!\r
Margineanu, baaa analflabetilor!\r
Si dupa aia ii zice stati sa spun eu ca de fapt C*cati, c*cati, Cine? Ratati,\r
Voi, cine? Noi? si ei a inteles si ei plangea.\r
Margineanu plangea la final si era o nebuna care tipa pe fundal.\r
\r
Aha, ia...\r
\r
Refren:\r
\r
Barbati, barbati, \r
E plina lumea de c*cati,\r
De suparati si de-ncordati,\r
Nu stiti decat sa va-mbatati!`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["Dm","Am","E","A"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:11,title:"Eu te-am iubit Paraschivo",slug:"eu-te-am-iubit-paraschivo-11",content:`personal folosesc o trecere intre acorduri, ca mai jos:\r
\r
   Dm         C           Bm          C          Dm         \r
e -1----------0-----------2-----------0----------1-----------\r
B -3----------1-----------3-----------1----------3-----------\r
G -2----------0-----------4-----------0----------2-----------\r
D -0----------2-----------4-----------2----------0-----------\r
A -----3--2---3---2---0---2---0---2---3--------------3---2---\r
E -----------------------------------------------------------\r
\r
 C          E           Am\r
0----------0-----------0----------------\r
1----------0-----------1----------------\r
0----------1-----------2----------------\r
2----------2-----------2----------------\r
3---2---0--2-----------0----------------\r
-----------0---2---4--------------------\r
\r
ascultati melodia si va dati seama repede\r
imi cer scuze pentru ortografie, nu sunt foarte la curent cu noile reguli.\r
\r
	Am                  E\r
	Ce mult te am iubit Paraschivo\r
\r
	Dm                      Am\r
	Ti am zis-o de-o mie de ori\r
\r
	Dm                       C\r
	Si ca drept dovada ti-am adus gramada\r
\r
        Bm                      C\r
	Vreo trei basculante de flori\r
\r
	Dm                       C\r
	Si ca drept dovada ti-am adus gramada\r
\r
        E                       Am      E Am\r
	Vreo trei basculante de flori\r
\r
\r
\r
\r
	Te-am luat de la mata d'acasa\r
	In fusta si far' de jupon\r
	Ti-am luat si poseta, ti-am luat si jacheta\r
	Si-o geaca misto de nylon\r
	Ti-am luat si poseta, ti-am luat si jacheta\r
	Si-o rochie misto de nylon\r
\r
	Te-am si cultivat Paraschivo\r
	Te-am dus la chermeza si meci\r
	Ti-am luat si bomboane, ti-am luat si samanta fa,\r
	Tu faci pe nasoala si pleci\r
	Ti-am luat si bomboane, ti-am luat si samanta fa,\r
	Tu faci pe nasoala si pleci\r
	\r
	Pe frati-tu si pe tot neamu'\r
	Sa nu va mai prind ca ma rogi\r
	V-am scos dintr-o pivnita cand v-a spart geamu'\r
	Pai f____a-n gat de milogi\r
	V-am scos dintr-o pivnita cand v-a spart geamu'\r
	Pai f____a-n c_r de milogi\r
\r
	La dragostea mea aia mare\r
	Mai spun doua vorbe si-atat\r
	Cand iese luna imi scot bracinarii fa\r
	Ma spanzur cu ma-ta de gat,\r
	Ca cand iese luna imi scot bracinarii\r
	Ma spanzur cu ma-ta de gat,\r
\r
	Cand tac-tu bolnav de holera\r
	In trei patru zile-a crapat\r
	Si bani de tamaie si bani de coliva\r
	Tot mandea saracu ti-a dat\r
	Si bani de coliva si bani de tamaie\r
	Tot mandea saracu ti-a dat\r
\r
	Dar daca te prind Paraschivo\r
	La brat cu alt gealat\r
	Iti iau si poseta iti bat si gagiul\r
	Si o suta de pumni iei in cap\r
	Iti bat si poseta iti iau si gagiul\r
	Si-o suta de pumni iei in cap`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:2,name:"Lăutărești",slug:"lautaresti",description:""},{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["Dm","C","Bm","E","Am","B","G","D","A"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:12,title:"Apa de izvor",slug:"apa-de-izvor-12",content:`G            C              D\r
1.Marine, Marine, m-as f*te cu tine\r
  Hai siktir marine, c-am glumit cu tine\r
\r
         G                Em\r
     R:  Ah, ah, apa de izvor,\r
         C               D\r
         Mai repede ca mor, mai repede, ca nu mai pot\r
\r
2.Pentr-o sticla de Martini\r
  M-ai lasat sa-ti vad bikinii\r
  Pentru sticla de Vermut\r
  M-ai lasat ca sa te f*t\r
\r
3.Maria, fetita mea\r
  Nu mai da din c*r asa\r
  Nebunatica cum esti\r
  S-ar putea sa mi-o belesti\r
\r
4.Doua babe cracanate\r
  Faceau scoala de karate\r
  Ca sa-nvete o figura\r
  Cum sa stea in cap de p**a\r
\r
5.-Ce faci mosule-n tarina?\r
  -Ma caznesc sa f*t o rima\r
  Si de mult ce m-am caznit\r
  Pi**a rimii n-am gasit\r
\r
6.Iese popa din Altar\r
  Cu p**a facuta par\r
  Preoteasa cum il vede\r
  Drept la p**a se repede\r
\r
7.-Ia fa mina de pe p**a\r
  Ca-ti dau una peste gura\r
  -Poti sa-mi dai si peste nas\r
   Eu de p**a nu ma las\r
\r
8.Fata popii cea mai mica\r
  Si-a bagat in c*r supica\r
  Si-acum baga degetelul\r
  Ca sa scoata castronelul`,author:{id:3,name:"Anonim",slug:"anonim"},author_id:3,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""}],chords:["G","C","D","Em"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:13,title:"A fost odată",slug:"a-fost-odata-13",content:`G Em C D\r
\r
G                     Em                  C               D        \r
A fost odată un vis frumos un vis frumos cu un băiat şi-o fată\r
G                     Em                  C               D G Em C D\r
A fost un vis cam dureros cam dureros de te rănesc mă iartă.\r
A fost un vis născut în munţi, născut în munţi crescut la o cabană\r
Umbrit de brazi înalţi cărunţi înalţi cărunţi ce astăzi se destramă\r
\r
	Refren:\r
\r
	G                       Em\r
	De ce va destrămaţi uşor vă destrămaţi\r
	C            D\r
	Voi vise pe poteci\r
	G                           Em\r
	În amintirea munţilor, a munţilor\r
	C              D\r
	Să dăinuim pe veci\r
	G                    Em C D\r
	Să dăinuim-im-dim-di....\r
	\r
A fost odată un vis frumos un vis frumos cu un băiat şi-o fată\r
A fost un vis cam dureros cam dureros de te rănesc mă iartă.\r
A fost un vis născut în munţi, născut în munţi crescut la o cabană\r
Umbrit de brazi înalţi cărunţi înalţi cărunţi ce astăzi se destramă\r
\r
Dim-di-di-di...`,author:{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu"},author_id:2,categories:[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:""},{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["G","Em","C","D","A"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:14,title:"Inima de tiganca",slug:"inima-de-tiganca-14",content:`A        E    A\r
Inima de tiganca,\r
A        E    A\r
Inima de tiganca\r
A               D\r
Te cheama si te vrea\r
          A\r
Sa fim alaturea\r
A        E    A\r
Inima de tiganca:|\r
\r
A              E  A\r
Si mama a fost neagra\r
A                 E  A\r
Si tatii i-a fost draga\r
A                 D\r
Si findca s-au placut\r
               A\r
Pe mine m-au facut\r
A                   E  A\r
Si spun ca lor li-s draga\r
\r
A               E  A\r
Mai sunt fete negrute\r
A                 E A\r
Mai mari si mai micute\r
A                   D\r
Dar toate stiu c-ar vrea\r
              A\r
Sa aibe inima mea\r
A        E    A\r
Inima de tiganca\r
\r
A                 E A\r
Când înfloresc castanii\r
A               E A\r
Se-aduna toti tiganii\r
A               D\r
Si fac afara un foc\r
                A\r
Si se încing la joc\r
A        E    A\r
Inima de tiganca\r
\r
A           E  A\r
Duminica la nunta\r
A               E  A\r
Cu toti tiganii cânta\r
A            D\r
Cânta se veselesc\r
               A\r
Findca ei se iubesc\r
A        E    A\r
Inima de tiganca`,author:{id:4,name:"Aurel Moldoveanu",slug:"aurel-moldoveanu"},author_id:4,categories:[{id:6,name:"Cântece țigănești",slug:"cantece-tiganesti",description:""}],chords:["A","E","D"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:15,title:"Tigancusa",slug:"tigancusa-15",content:`Am         E\r
La o margine de sat\r
             Am\r
Este-o şatră de ţigani\r
Dm            Am\r
Și-o ţigancă frumuşică\r
E                 Am\r
Mi-a ghicit pe sub castani\r
Dm             Am\r
Și-o ţigancă frumuşică\r
E               Am E Am\r
Mi-a ghicit pe sub castani\r
\r
	Refren (x2):\r
\r
	Dm\r
	Țigăncuşă eşti frumoasă,\r
	Am\r
	Țigăncuşa mea\r
	E            Am\r
	Te iubesc şi nu te pot iuta\r
	Țigăncuşă eşti frumoasă, \r
	Țigăncuşa mea\r
	Te iubesc şi nu te pot iuta\r
	La-rai-ra...\r
\r
Țigăncuşă eşti frumoasă\r
Și ştii bine să ghiceşti\r
Și cu ochii tăi cei negri\r
Pe oricine cucereşti\r
Și cu ochii tăi cei negri\r
Pe oricine cucereşti\r
\r
	Refren.\r
\r
Trece vara, vine iarna\r
Pleacă şatra de ţigani\r
Și cu ea pleacă ţiganca\r
Ce-am iubit-o sub castani\r
Și cu ea pleacă ţiganca\r
Ce-am iubit-o sub castani\r
\r
	Refren.`,author:{id:4,name:"Aurel Moldoveanu",slug:"aurel-moldoveanu"},author_id:4,categories:[{id:6,name:"Cântece țigănești",slug:"cantece-tiganesti",description:""}],chords:["Am","E","Dm"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:16,title:"Trec tiganii",slug:"trec-tiganii-16",content:`Intro:\r
\r
A7 Dm\r
G C\r
Am Dm\r
E Am\r
\r
 Am                         E\r
În căruţe colorate trec ţiganii\r
E7                          Am\r
O ţigancă-n părul ei şi-adună banii\r
 Dm                        Am\r
Alta şade într-un colţ, dă cu ghiocul \r
 E                              Am\r
Să-i ghicească unei fete mari norocul\r
Dm                              Am\r
Un ţigan cântă cu foc dintr-o vioară\r
E                            Am\r
De cu zori şi pân-se lasă seara.\r
\r
Am               E\r
Trec ţiganii, trec,\r
E7   		  Am\r
Se duc şi petrec     \r
 A7                        Dm\r
Trec ţiganii, nu se mai opresc\r
E             Am\r
Dar ei se iubesc.\r
\r
A7            Dm\r
Se-aude o vioara\r
G           C\r
Se-aude un ţambal\r
Am               Dm\r
Se-aude  vocea caldă \r
E        Am\r
A unui lăutar\r
A7         Dm\r
Se-aude o vioara \r
G           C\r
Se-aude un arcuş\r
Am              Dm\r
Se-aude glasul dulce \r
E         Am\r
Al unui ţigănuş\r
\r
La o margine de drum au aprins focul\r
şi în jurul focului au încins jocul\r
Noaptea e cu lună plină fermecată\r
Seara cu ţiganii n-o uiţi niciodată\r
Caii pasc la iarbă verde liniştiţi,\r
Iar ţiganii cânta şi sunt fericiţi.`,author:{id:5,name:"Șatra",slug:"satra"},author_id:5,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:6,name:"Cântece țigănești",slug:"cantece-tiganesti",description:""}],chords:["A7","Dm","G","C","Am","E","E7","A"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:17,title:"Satra",slug:"satra-17",content:`Am                G        C\r
N-am nici rochii, nici pantofi\r
F                   C     A7\r
Nici castel cu slujitori\r
Dm               Am\r
În căruţă m-am născut\r
E            Am E Am\r
Din căruţă ştiu să cânt.\r
\r
Lai ra rai ra… (pe aceleaşi acorduri ca şi strofa)\r
\r
(2 ori)\r
\r
Þiganco cu bani în păr\r
şi cu sânii ca de măr\r
Hai cu mine-n lumea mare\r
Să vezi cum e cu parale\r
\r
Lai ra rai ra…\r
\r
(2 ori)\r
\r
Măi străine, măi străine\r
Stai în lumea ta cu bine\r
Eu nu-mi las ţiganii mei \r
Poţi să-mi dai tu mii de lei.`,author:{id:5,name:"Șatra",slug:"satra"},author_id:5,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:6,name:"Cântece țigănești",slug:"cantece-tiganesti",description:""}],chords:["Am","G","C","F","A7","Dm","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:18,title:"Asfintit",slug:"asfintit-18",content:`Am             E7     Am\r
Un asfinţit de soare roşu poleit\r
      C     G7        C    E7\r
Se zăresc mii de coviltire\r
       Am       E7         Am\r
Sunt ţiganii, aurari şi argintari\r
       F          E7          Am\r
Care nu au, care n-au niciun hotar\r
\r
 Am              \r
Hoţi de cai şi de parale\r
\r
Ce străbat lumea cea mare\r
 Dm\r
Vesel cântă din chitară\r
  Am\r
Să se-audă-n depăratare\r
E7                     Am\r
La-la-lai la-la la-la la-la\r
\r
	Refren:\r
\r
	Dm\r
	La-la..\r
	Am\r
	La-la..\r
	E7\r
	La-la..\r
	Am\r
	La-la..\r
\r
\r
Seara-n crâşmă ei intrau\r
Cu vin roşu se cinsteau\r
Banii toţi şi-i cheltuiau\r
şi din gură, şi din gură-aşa cântau\r
\r
Zi din strună lăutare\r
Să se-audă-n depărtare\r
Că şi tu cu struna ta\r
Aduci ţiganii să bea\r
\r
	Refren.\r
\r
\r
Vinul mintea lor o seacă\r
şi cuţite ies din teacă\r
Sângele curgea şiroaie\r
Ca şi vinul, ca şi vinul din butoaie\r
\r
Zi din strună lăutare\r
Să se-audă-n depărtare\r
Că şi tu cu struna ta\r
Aduci ţiganii să bea\r
\r
	Refren.`,author:{id:5,name:"Șatra",slug:"satra"},author_id:5,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:6,name:"Cântece țigănești",slug:"cantece-tiganesti",description:""}],chords:["Am","E7","C","G7","F","Dm"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:19,title:"La multi ani!",slug:"la-multi-ani-19",content:`G\r
Multi ani traiasca!\r
G\r
Multi ani traiasca!\r
 D   C   G\r
La multi ani!\r
\r
G\r
Cine sa traiasca?\r
G\r
Cine sa traiasca?\r
 D  C    G\r
La multi ani!\r
\r
   G \r
[prenumele] sa traiasca!\r
   G\r
[prenumele] sa traiasca!\r
 D  C    G\r
La multi ani!\r
\r
G                     C\r
La multi ani cu sanatate\r
C            D            G\r
Sa va dea Domnul tot ce doriti\r
    G          C\r
Zile senine si fericire\r
 C       D   D    G\r
La multi ani sa traiti!\r
  C               G\r
Multi ani La multi ani            X2\r
D          D                 G              G\r
La multi ani fericiti sa traiti !La multi ani!`,author:{id:3,name:"Anonim",slug:"anonim"},author_id:3,categories:[{id:7,name:"Aniversări",slug:"aniversari",description:""}],chords:["G","D","C"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:20,title:"Asta seara nimeni sa nu doarma",slug:"asta-seara-nimeni-sa-nu-doarma-20",content:`intro C - Dm - G - C - Am - Dm - G - C \r
\r
\r
C                        Dm\r
Asta seara nimeni sa nu doarma\r
G                         C\r
Pa-n la ziua toti sa ne distram,\r
Am                    Dm\r
Ospatarii in pahar sa toarne\r
G                 C\r
Si cu lautarii sa cantam,\r
C                              Dm\r
Asta seara-n dans ne strange-n brate\r
G                   C\r
O fata frumoasa nui pacat ,\r
Am                     Dm\r
Seara asta le rugam pe soate\r
G                   D\r
Sa se faca ca n-au observat.\r
\r
C                    Dm\r
Tine-o pe DO, tine-o pe Si, \r
G                     C\r
Tine-o pe la mandruta mea\r
Am                      Dm\r
Tine-o pe MI, tine-o pe RE,\r
G             C\r
Tine-o intr-o petrecere\r
\r
Asta seara nimeni sa nu doarma,\r
Ca tot oi dormi cand noi mai fi\r
Nevestico un pahar mai toarna,\r
Bea cu mine nu am cicali\r
Azi cu alutari dupa mine,\r
Oi porni hai-hui prin Bucuresti\r
Moi opri unde mi-o fi mai bine,\r
C-asta seara-i bine sa traiesti\r
\r
Tine-o pe DO, tine-o pe Si, \r
Tine-o pe la mandruta mea\r
Tine-o pe MI, tine-o pe RE,\r
Tine-o intr-o petrecere\r
\r
Sa-mi cante si mie lautarul,\r
Ca eu ani in sir va-m tot cantat\r
Sa-l ascult si sa-mi golesc paharul,\r
Inca-un DO Major si am plecat\r
Nui nici un pacat de seara aceasta,\r
Ma mai ametesc eu cu-n cotnar\r
Jur de maine spun la sprituri basta,\r
N-am sa mai beau decat murfatlar\r
\r
Tine-o pe DO, tine-o pe Si, \r
Tine-o pe la mandruta mea\r
Tine-o pe MI, tine-o pe RE,\r
Tine-o ïntr-o mere, mereu asa`,author:{id:6,name:"Gică Petrescu",slug:"gica-petrescu"},author_id:6,categories:[{id:7,name:"Aniversări",slug:"aniversari",description:""},{id:2,name:"Lăutărești",slug:"lautaresti",description:""}],chords:["C","Dm","G","Am","D"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:21,title:"Mai intoarce, Doamne roata",slug:"mai-intoarce-doamne-roata-21",content:`Am                                             Dm\r
Mai intoarce doamne roata Sa-mi mai vad o data soarta\r
Am                        Dm                          |\r
Sa-mi vad anii tineretii Sa-mi vad stralucirea vietii |\r
E                     Am                              | x2\r
Care doamne fara rost s-au dus                        |\r
\r
Am                                            Dm   \r
Cind aveam vreo 16 ani Doamne ah ce viata mai duceam\r
Am                       Dm                           |\r
Prin restaurante baruri, cafenele si localuri         |\r
E                  Am                                 | x2\r
Doamne ah ce viata mai duceam                         |\r
\r
Cind aveam vre-o 20 de ani Doamne ah ce viata mai duceam\r
Ma dusei la primarie sa declar casatorie\r
Doamne ah ce viata mai duceam\r
\r
Cind aveam vre-o 30 de ani Doamne ah ce viata mai duceam\r
O duceam bine cu casa Ma-ntelegeam cu nevasta\r
Si aveam si doi copii frumosi\r
\r
Cind aveam vre-o 40 de ani Doamne ah ce viata mai duceam\r
Copii-mi crescura mari Falnici ca si doi stejari\r
Doamne ah ce viata mai duceam\r
\r
Cand am implinit 50 de ani Doamne ah ce viata mai duceam\r
S-a dus jumatatea vietii, S-au dus anii tineretii \r
Doamne ah ce viata mai duceam\r
\r
Cind aveam vre-o 55 de ani Doamne ah ce viata mai duceam\r
Zi si noapte nu dormeam pe copii ii ajutam\r
Doamne ah ce viata mai duceam\r
\r
Cind aveam vre-o 60 de ani Ma plimbam prin parcul cu castani\r
Vedeam frunzele picand anii vietii numarind\r
Doamne ah ce viata am mai dus`,author:{id:1,name:"Azur",slug:"azur"},author_id:1,categories:[{id:7,name:"Aniversări",slug:"aniversari",description:""},{id:8,name:"Romanțe",slug:"romante",description:""}],chords:["Am","Dm","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:22,title:"Cavaleri ai Mesei Rotunde",slug:"cavaleri-ai-mesei-rotunde-22",content:`D\r
Cavaleri ai Mesei Rotunde\r
     A              D\r
Sa vedem daca vinu-i bun.  – bis\r
\r
Ref:\r
D    G                     D\r
Sa vedem, da, da. da, sa vedem, nu, nu, nu,\r
      A              D   A   D\r
Sa vedem daca vinu-i bun sau nu . – bis\r
\r
Eu as bea cinci sau sase sticle\r
C-o studenta pe genunchii mei . – bis\r
\r
Ref:\r
Eu as bea, da, da, da, eu as bea, nu, nu, nu,\r
Eu as bea cinci sau sase sticle.\r
\r
Cioc, cioc, cioc, bate la fereastra,\r
Sa vedem daca-i sotul meu. – bis\r
\r
Ref:\r
Sa vedem, da, da, da, sa vedem, nu, nu, nu,\r
Sa vedem daca-i sotul meu sau nu. – bis\r
\r
Daca-i el, duca-se la dracu’\r
C-a stricat placerea mea si-a ta. – bis\r
\r
Ref:\r
Daca-i el, da, da, da, daca-i el, nu, nu, nu,\r
Daca-i el, duca-se la dracu’. – bis\r
\r
Daca mor vreau sa ma ingroape\r
Intr-o crasma undevinu-i bun. – bis\r
\r
Ref:\r
Intr-o crasma, da, da, da,  intr-o crasma, nu, nu, nu,\r
Intr-o crasma unde vinu-i bun sau nu. – bis\r
\r
Iar la cap vreau sa mi se scrie:\r
Aici zace un student betiv! – bis\r
\r
Ref:\r
Aici zace, da, da, da, aici zace, nu, nu, nu,\r
Aici zace un student betiv sau nu. - bis`,author:{id:7,name:"Necunoscut",slug:"necunoscut"},author_id:7,categories:[{id:7,name:"Aniversări",slug:"aniversari",description:""},{id:9,name:"Școala și profesorii",slug:"scoala-si-profesorii",description:""}],chords:["D","A","G"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:23,title:"Marie si Marioara",slug:"marie-si-marioara-23",content:`D               Ddim   Am  Cdim Em\r
Si-am zis verde salcioara(aaaaaaaaa...)\r
         A      D\r
Marie si Marioara\r
D        Ddim  Am  Cdim  Em\r
Marie si Marioara(aaaaaaaaaa....)\r
             A       D\r
Ia un par de ma omoara\r
\r
A        D A      D\r
Parul sa fie de plop\r
B7       Em Bdim F#7          Bm\r
Sa nu ma oooooooomori de tot (mai)\r
A     D  A      D\r
Marie si Marioara\r
B7        Em  Bdim  F#7    Bm\r
Ia un par deeeeeeee ma omoara\r
\r
Ca de trei zile zac in boala\r
si nu-mi zice nimeni "scoala"\r
De trei zile zac in boala\r
si nu-mi zice nimeni "scoala"\r
\r
Dar de-i zice dumneata\r
M-ar mai trage inima\r
Dar de-i zice dumneata\r
M-ar mai trage inima (mai)\r
\r
Si-am zis verde salcioara\r
Marie si Marioara\r
Ia un par de ma omoara\r
Ia un par de ma omoara\r
\r
Parul sa fie de plop\r
Sa nu ma omori de tot (mai)\r
Marie si Marïoara\r
Ia un par de ma omoara`,author:{id:8,name:"Folclor",slug:"folclor"},author_id:8,categories:[{id:7,name:"Aniversări",slug:"aniversari",description:""},{id:2,name:"Lăutărești",slug:"lautaresti",description:""}],chords:["D","Ddim","Am","Cdim","Em","A","B7","Bdim","F#7","Bm"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:24,title:"Costică, Costică",slug:"costica-costica-24",content:`Refren:\r
\r
	G\r
	Costică, Costică\r
	\r
	Fă lampa mai mică\r
	\r
	Costică, Costică\r
	Am    B7       Em     D\r
	Amândoi când stăm\r
\r
	Costică, Costică\r
	Fă lampa mai mică\r
	Costică, Costică\r
	Când ne sărutăm\r
\r
G\r
Rea e lumea-n mahala\r
D7           G\r
Costică, Costică\r
              Am\r
Să nu ştie nimenea\r
B7            Em\r
Fă lampa mai mică\r
\r
De vecini să ne ferim\r
Costică, Costică\r
Să putem să ne iubim\r
Costică, Costică\r
\r
	Refren.\r
\r
Mii de stele-am împletit\r
Albei nopţi cununa\r
şi-n fereastră s-a ivit \r
Să ne vadă luna\r
Stau femei în mahala\r
Lângă porticică\r
Să nu vadă că glumim\r
Fă lampa mai mică\r
\r
	Refren.\r
\r
	Em\r
	Ia papucii, dă papucii\r
	Ia papucii, dă papucii...`,author:{id:6,name:"Gică Petrescu",slug:"gica-petrescu"},author_id:6,categories:[{id:7,name:"Aniversări",slug:"aniversari",description:""},{id:2,name:"Lăutărești",slug:"lautaresti",description:""}],chords:["G","Am","B7","Em","D","D7"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:25,title:"Lunile anului",slug:"lunile-anului-25",content:`G                  C           D        D7       G\r
Cine-i nascut în ianuarie, hai sus, hai sus, hai sus.\r
G                  C           D        D7       G\r
Cine-i nascut în ianuarie, hai sus, hai sus, hai sus.\r
\r
Refren:\r
G        D     C       D7\r
Sa bea paharul pâna la fund,\r
Em       D     C       D7\r
Sa bea paharul pâna la fund,\r
     C         D         G\r
Stai jos, stai jos, stai jos,\r
    C    D      G\r
Iti multumim frumos.\r
\r
G                  C            D        D7       G\r
Cine-i nascut în februarie, hai sus, hai sus, hai sus.\r
G                  C            D        D7       G\r
Cine-i nascut în februarie, hai sus, hai sus, hai sus.\r
\r
...si tot asa,la rand, toate lunile anului...\r
\r
G                 C          D        D7       G\r
Cine-i nascut din flori, hai sus, hai sus, hai sus.\r
G                 C          D        D7       G\r
Cine-i nascut din flori, hai sus, hai sus, hai sus.\r
\r
G                 C            D        D7       G\r
Cine s-a renascut vreodat, hai sus, hai sus, hai sus.\r
G                 C            D        D7       G\r
Cine s-a renascut vreodat, hai sus, hai sus, hai sus.\r
\r
G                     C        D        D7       G\r
Si cine-o sa se nasca iar, hai sus, hai sus, hai sus.\r
G                     C        D        D7       G\r
Si cine-o sa se nasca iar, hai sus, hai sus, hai sus.`,author:{id:9,name:"Atlantic",slug:"atlantic"},author_id:9,categories:[{id:7,name:"Aniversări",slug:"aniversari",description:""}],chords:["G","C","D","D7","Em"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:26,title:"Tu Ardeal",slug:"tu-ardeal-26",content:`Refren:\r
Dm                      Gm    C     F  \r
Tu Ardeal, tu Ardeal, iti suntem osteni, \r
 Dm                          Gm    C  Dm \r
Templu sfant, templu sfant, muntii Apuseni.\r
\r
\r
Dm              Gm    C             Dm\r
Ca tu ne esti vatra si din piatra-n piatra, \r
         Gm     C     F \r
E taria unui neam de moti, \r
Dm              Gm    C              Dm \r
Asta-i tara noastra, noi nu stam in gazda, \r
                Gm   C     Dm\r
Horea nostru-i risipit pe roti.\r
\r
Refren\r
\r
Ne-au furat barbarii, ne-au caznit mai marii, \r
Dar avem in piepturi sapte vieti.\r
Ne vibreaza-n sange, pan' la Putna n-a plÃ¢nge, \r
Clopotul ce bate la Ramet.\r
\r
Refren\r
\r
Nu vrem razbunare, dar atat ne doare, \r
Ca se pierde amintirea-n val.\r
Doamne da-i tarie, unei maini sa scrie, \r
Biblia latinului Ardeal.\r
\r
Refren\r
\r
Rauri cresc purtate, tari ce nu sunt toate\r
Dar veni-vor si mai bune vesti\r
Pentru toti romanii care-si sint stapanii\r
Soarele rasare-n Bucuresti\r
\r
Refren\r
\r
Unde-i Avram Iancu, sa mai franga rangul, \r
Celor ce Ardealul vor pustiu.\r
Iata ca rasare, Iancu din oricare, \r
E-n puterea fiecarui fiu.\r
\r
Refren\r
\r
Pentru aceasta tara, poate sa si moara, \r
Fiecare dintre noi razand.\r
Restul e dorinta, de ingaduinta, \r
Si sa fie pace pe pamÃ¢nt.\r
\r
Refren\r
\r
Nu uitati aceasta, dreapta ne e brazda, \r
Ce-am lucrat cu ale noastre maini.\r
Fiecare munte stie aici sa cante, \r
Imnul "Desteptati-va romani".`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:11,name:"Despre Patrie",slug:"despre-patrie",description:""}],chords:["Dm","Gm","C","F","E"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:27,title:"Nebun de alb",slug:"nebun-de-alb-27",content:`Acorduri: 

Am: 002210
F: 133211
Bm7-5: 023230
E: 022100
C: 032013 
E7: 002434
Dm: 000231
G: 320033
C: 332010

---------------------------------------------------------

Intro: Am , F , Bm7-5, E , Am (Am x 2, dupa care urmeaza 
strofa)

Urmat de:

Am                        F  
Acum sunt mai pustiu ca-ntotdeauna 
C                        E7 
De cand ma simt tot mai bogat de tine 
Am                        F
Imi stau pe tample soarele si luna 
Dm              E             Am
Acum e cel mai rau si cel mai bine 

Am                        F
Si uite n-are cine sa ne-ajute 
C                         E7
Abia-si mai tine lumea ale sale 
Am                            F
Si-ntr-un perete alb de muze mute 
Dm            E       Am 
Nebunii negri cauta o cale 

Refren x 2:

Dm             G           C  
Si te iubesc cu mila si cu groaza
 Dm                         E7
Tot ce-i al tau mi se cuvine mie 
 F              E           Am
Ca un nebun de alb ce captureaza 
 F             E           Am
Regina neagra pentru o vesnicie 

Aici se repeta intro-ul:
Am F Bm7-5 E Am

(ca mai sus)
Prin gari descreierate accidente 
Marfare triste vin in miezul verii 
Iar eu sunt plin de gesturi imprudente 
Ca sa te apropii si sa te sperii 

Jur imprejur privelisti aberante 
Copii fragili ducand parintii-n spate 
Patrund cu sanii gri de os pe pante 
Si albastrosi venind spre zari uscate

---------------------------------------------------------

Succes! Ptr. mai multe informatii imi puteti lasa un mesaj si o sa va raspund cu placere 
:)`,author:{id:11,name:"Emeric Imre",slug:"emeric-imre"},author_id:11,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Am","F","C","E7","Dm","E","G"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:28,title:"La o cana cu vin",slug:"la-o-cana-cu-vin-28",content:`cipitura :  T:3-2-1-2-3 pentru acordurile normale(intregi)\r
            1-2-3-6-2-1 pentru jumatati (D-E)\r
\r
"-" la acorduri reprezinta jumatate de masura.\r
\r
Intro: A A D-E A D-E A A\r
\r
   A                A\r
1.Aseara te-am asteptat\r
  E         A  \r
  Si n-ai venit\r
  A               A\r
  Poate te-ai suparat\r
      D  -  E      A \r
  Sau poate-ai adormit\r
\r
     A               D\r
R: Deseara sa nu m-astepti\r
     E             A  \r
   Deseara n-am sa vin  \r
   A           D \r
   Pentru doua vorbe\r
 E              A \r
   La o cana cu vin \r
              D\r
   Deseara sa nu m-astepti\r
      E           A  \r
   O, nu, n-am sa vin\r
   A               D  \r
   Pentru-un "buna seara"\r
   E                 Intro   \r
   Atat,si-o cana cu vin\r
\r
\r
2.Speram ca intr-o zi\r
  Si tu sa ma iubesti\r
  Dar din romante stiu\r
  Ca sperand gresesti\r
\r
Refren:\r
\r
3.De-acuma poti sa pleci\r
  La alta linistit\r
  Mi-am pierdut si timpul\r
  Si tot nu m-ai iubit`,author:{id:12,name:"Ecoul",slug:"ecoul"},author_id:12,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""}],chords:["A","E","D"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:29,title:"Copaci fara padure",slug:"copaci-fara-padure-29",content:`Dm          Asus4   Dm\r
În povestea copacilor goi\r
                         Gm  \r
Scârţâind într-o singură uşă\r
                     Dm\r
Este vorba de noi amândoi\r
         Asus4          Dm\r
Este vorba de foc şi cenuşă\r
Dm             Asus4     Dm\r
Doi copaci fără frunze pe drum\r
                         Gm  \r
După cum îi priveşte înaltul\r
                      Dm\r
Doi copaci prin sărutul de scrum\r
     Asus4                A \r
Aplecându-se unul spre altul.\r
	\r
	Refren:\r
	\r
	Dm                       A\r
	Spune-mi pădure cu frunza rară\r
                   A           Dm\r
	Unde-i iubirea de astă vară?\r
                             Gm\r
	Nu ştie iarna să se îndure\r
                   Dm    A     Dm\r
	De noi, copacii fără pădure.\r
\r
Toată vara a fost numai foc\r
şi-au fost stele în nopţi fără stele\r
şi prin toamna şederii pe loc\r
Cade ultima frunză spre ele\r
În zadar către tine întind\r
Nişte crengi ce-mi fuseseră braţe\r
Alte uşi se aud scârţâind\r
De tomnatecul vânt să se agaţe.\r
\r
Nu mai suntem decât doi copaci\r
Vor veni taietori să ne tundă\r
Vor lua crengi toţi copiii săraci\r
Pentru flacăra lor muribundă\r
şi chiar dacă mă vei mai iubi\r
Peste crivăţul iernii ce vine\r
Fără braţe cu ochii pustii\r
N-am să am ce întinde spre tine.\r
\r
\r
\r
http://www.youtube.com/watch?v=9OceatS7ZkM\r
\r
cam asa sunt din ce mi-am dat eu seama de-aici .`,author:{id:13,name:"Tatiana Stepa",slug:"tatiana-stepa"},author_id:13,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Dm","Asus4","Gm","A"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:30,title:"Ostasii luminii colinda",slug:"ostasii-luminii-colinda-30",content:`C#m             E      B    G#    C#m\r
Larg deschideti poarta sufletelor noastre\r
E      B      E      B       G#     C#m\r
N-am venit sa cerem, ci-am venit sa dam.   - bis\r
\r
Refren:\r
E            B     E      B   C#m\r
Dalbe si iar dalbe flori adevarate\r
E            C#m  B           C#m\r
Ca si vestea buna ce v-o colindam.\r
E            B     E      B   C#m\r
Dalbe si iar dalbe flori adevarate\r
E            C#m   B          C#m\r
Dalbe si iar dalbe florile de mar.\r
\r
\r
Dincolo de muntii vietii si-ai himerii\r
Le-am cules azi noapte florile de mar.\r
Le-am cules din muntii unde vesnic merii\r
Roditori de aur cresc intr-adevar.\r
\r
Florile pe care le-am cules azi noapte\r
Vor rodi in brazda sufletelor toate.\r
Merele de aur, merele visate\r
De colindatorii veacurïlor toate.`,author:{id:14,name:"2 și jumătate",slug:"2-si-jumatate"},author_id:14,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["C#m","E","B","G","G#"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:31,title:"Totusi, iubirea",slug:"totusi-iubirea-31",content:`Am                   Dm\r
Si totusi e stare de veghe\r
   C        E       Am\r
Si totusi murim repetat\r
Am                      Dm\r
Si totusi mai cred în pereche\r
   C        E         Am\r
Si totusi ceva sa-ntâmplat.\r
\r
Pretentii nici n-am de la lume\r
Un pat, întuneric si tu\r
Intrăm în amor fără nume\r
Fiorul ca fulger căzu. \r
\r
Refren:\r
\r
    Am                 Dm\r
Si totusi există iubire\r
   E                 Am\r
Si totusi există blestem\r
Am                      Dm\r
Dau lumii, dau lumii de stire\r
  E                 Am\r
Iubesc, am curaj si mă tem.\r
\r
Motoarele lumii sunt stinse\r
Retele pe căi au căzut\r
Un mare pustiu pe cuprins e\r
Trezeste-le tu c-un sărut.\r
\r
Acum te declar Dumnezee\r
Eu însumi mă simt Dumnezeu\r
Continuă lumea femeie\r
Cu plozi scrisi în numele meu.\r
\r
Ref:\r
\r
Afară roiesc întunerici\r
Aici suntem noi luminosi\r
Se ceartă-ntre ele biserici\r
Făcându-si acelasi repros.\r
\r
Si tu si iubirea există\r
Si moartea există în ea\r
Imi place mai mult când esti tristă\r
Tristetea, de fapt, e a ta.\r
\r
Ref:\r
\r
Genunchii mi-i plec pe podele\r
Cu capul mă sprijin de cer,\r
Tu esti în puterile mele,\r
Desi închizitii te cer.\r
\r
Ce spun se aude aiurea,\r
Mă-ntorc la silaba dintâi,\r
Prăval peste tine pădurea:\r
Adio, adica ramai.\r
Ref:`,author:{id:15,name:"Mayai Gyozo",slug:"mayai-gyozo"},author_id:15,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Am","Dm","C","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:32,title:"Amor cubist",slug:"amor-cubist-32",content:` Dm               A7                  Dm\r
 Sa mergem într-o seara departe-n mahalale\r
                  A7             Dm\r
 Si noaptea sa ne lege cu negurile ei\r
       F          C                    Dm\r
 Sa-ti dau îmbratisarea mai vrei sau nu mai vrei\r
                 A7                 Dm\r
 Si eu sa cad în focul îmbratisarii tale.\r
\r
Rrfren:\r
Dm            A7               Dm\r
La margini te chem sa fugim undeva\r
               A7        Dm\r
Ca si sufletul meu e o mahala.\r
    F          C               Dm\r
La margini te chem sa fugim undeva\r
               A7        Dm\r
Ca si sufletul meu e o mahala.\r
\r
\r
Ai vrea sa fie iarna, ai vrea sa fie toamna\r
Ai vrea ca liliacul sa înfloreasca brusc\r
Sa-ti fiu arheologul tu vasul meu de trusc\r
Ai vrea sa fie-o vreme ce nu stii ce înseamna.\r
\r
Rrfren...\r
\r
Dar hai în mahalale tinându-ne de mâna\r
Pe strazi cu becuri stranii de-un galben violet\r
Când picura cismele pe lânga un bufet\r
Cu firma posomorâta si preturi la-ndemâna.\r
\r
Rrfren...\r
\r
Paralelipipedic traim în nopti egale\r
Iubirea noastra moare într-un oras cubist\r
S-o inventam întreaga cât esti, cât mai exist\r
Îmbraca-te aiurea si hai în mahalale.`,author:{id:16,name:"Andrei Păunescu",slug:"andrei-paunescu"},author_id:16,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Dm","A7","F","C"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:33,title:"Cantec pentru Charlie Chaplin",slug:"cantec-pentru-charlie-chaplin-33",content:`Am                              Dm           E \r
Rîdeţi, rîdeţi, rîdeţi, rîdeţi, cu pămînt cu tot\r
Am                       E           Am\r
Pînă cînd vă mai suportă ultimul Charlot.\r
Am                            Dm            E \r
Nu de el cînd rîdeţi, rîdeţi, rîdeţi voi de voi, \r
Am                           E             Am\r
Că sunteţi grăbiţi şi cinici şi inculţi şi goi.\r
\r
E                             Am\r
Charlie Chaplin calcă-n dodii cu pantofi strîmbaţi,\r
Dm                         E  \r
Hohotiţi dar n-aveţi ştire voi ce strîmb călcaţi.\r
Am                    Dm       E\r
Face el cum face raţa şi e caraghios\r
Am                          E                Am\r
Dar ce cîrduri mari de raţe trec în sus şi-n jos.\r
\r
Refren:\r
Dm         G                  C\r
O, Charlie Chaplin, înger vagabond\r
Dm            Am   E         Am\r
Hai, bătrîne, vino de sub orizont.\r
Dm         G                   C\r
O, Charlie Chaplin, hohot interzis\r
Dm         Am      E            Am \r
Redeschide teatrul ce ni l-au închis!\r
\r
Am                        Dm        E  \r
Nu mai sunt deloc parale, casierii, trişti, \r
Am                    E            Am\r
Astăzi dau autografe, nu bani la artişti.\r
Am                                 Dm        E \r
S-au născut prea mulţi pragmatici, muzica nu pot,\r
Am                          E              Am\r
Hai, Pămînt, reaminteşte-ţi că ai fost Charlot!\r
\r
E                      Am\r
Un şofer cu leafă mică şi cu mult umor\r
Dm                      E\r
Mi te-a readus în minte ca pe-un luptător.\r
Am                         Dm          E \r
Că ai fost al celor simpli şi al lor rămîi,\r
Am                      E          Am\r
Peste toată lumea veche hohotul dintîi.\r
\r
\r
Refren...\r
\r
Am                 Dm             E\r
Lăutarii împrumută bani pentru sacîz,\r
Am                       E          Am\r
Cifra noastră de afaceri hohotul de rîs.\r
Am                   Dm          E \r
Facem bancă mondială şi băgăm în ea\r
Am                      E             Am\r
Rîsul sărăcimii triste, ca dobînzi să dea.\r
\r
E                Am \r
Nu există omenie unde nu eşti tu,\r
Dm                        E\r
Că tu eşti curajul nostru de a spune NU!\r
Am                         Dm             E \r
Învîrteşte-te prin Cosmos, spune ce-ai de spus, \r
Am                        E          Am\r
Între-atîtea stele moarte tu Planeta Rîs!\r
\r
Refren...\r
\r
(cat despre mana dreapta...)\r
\r
e|----0---0---0---0-\r
B|----1---1---1---1-\r
G|----2---2---2---2-\r
D|------------------\r
A|--0---0---0---0---\r
E|------------------\r
\r
(e o piesa destul de simplutza, asha ca... have fun playing it! :) )`,author:{id:17,name:"Victor Socaciu",slug:"victor-socaciu"},author_id:17,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Am","Dm","E","G","C"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:34,title:"Trăiască România",slug:"traiasca-romania-34",content:`Mkay, dacă ignoraţi versurile cu partidul şi cu Ceauşescu, este un cântec\r
patriotic fain (adică dacă se scot anumite versuri şi refrenul legat de nea \r
Nicu, este chiar OK).\r
\r
Nu sunt prea sigur de acorduri pe alocuri, aşadar dacă aveţi sugestii, băgaţi\r
 şi voi un comentariu. De asemenea, la final am lăsat şi acorduri pentru cei \r
pe care nu-i duce vocea atât de sus (ca mine, par example). În plus, la un \r
moment dat nu se înţeleg versurile foarte bine, aşadar acolo am lăsat trei \r
semne de întrebare.\r
\r
Am                         E             Am\r
Dacă ne-nfruntă munţii, cu munţii ne vom bate\r
Am                     E           Am\r
Pentru lumina ţării şi pentru libertate\r
C           G           C          G\r
Aici ne e cuvântul când îl avem de spus\r
C              G       E               Am\r
Decât slujirea ţării nimic nu-i mai presus\r
Am                       E            Am\r
Jurăm credinţă luptei oricât ar fi de grea\r
Am                      E              Am\r
Jurăm că pentru ţară şi viaţa ne-o vom da\r
C              G          C             G\r
Jurăm să nu ne mintă nici clipa, nici vecia\r
\r
Refren:\r
C             G         E         Am\r
Trăiască libertatea, trăiască România\r
C             G         E         Am\r
Trăiască libertatea, trăiască România\r
C\r
Trăiască-n fericire şi linişte poporul\r
C                    E          Am\r
Trăiască România, trăiască tricolorul\r
C\r
Trăiască-n fericire şi linişte poporul\r
C                    E          Am\r
Trăiască România, trăiască tricolorul\r
\r
Dar ţara nu se face cu laşi, cu apatrizi\r
Iubirea nu te scuză când ochii îi inchizi\r
Să curăţăm tot răul din viaţa României\r
Că noi suntem partidul şi ţara omeniei\r
Nu creadă hoţii muncii că ei sunt mari si tari\r
Noi suntem patrioţii revoluţionari\r
Avem contract pe viaţă cu visul şi cu glia\r
\r
Refren\r
\r
A noastră este ţara, o moştenim din plin\r
Va trebui întreagă s-o dam celor ce vin\r
La cei nascuţi şi astăzi, şi mâine, şi poimâine\r
Nici pâine fără muncă, nici muncă fără pâine\r
Nici călăreţi pe aer, nici cai fără călări\r
Nici ţară fără lume, nici lume fără ţări\r
Sa crească-n lume pacea, dreptatea, bucuria\r
\r
Refren\r
\r
Trăiască muncitorii, ţăranii, cărturarii\r
Trăiască demnitatea cea fără de avarii\r
Dacă renunţi la luptă n-ai ce sa mai aştepţi\r
Nimica nu se face-n poziţie de drepţi\r
Să facem România prin tot şi pentru toţi\r
Un teritoriu liber de-orice prejudecăţi\r
Să fie al nostru dreptul şi-a noastră datoria\r
\r
Refren 2:\r
Trăiască libertatea, trăiască România\r
Trăiască libertatea, trăiască România\r
Trăiască Ceauşescu, partidul şi poporul\r
Trăiască România, trăiască tricolorul\r
Trăiască Ceauşescu, partidul şi poporul\r
Trăiască România, trăiască tricolorul\r
\r
Jurăm din milioane de inimi şi destine\r
Din orice fel de sânge ne murmura în vine\r
Jurăm bătrân şi tânăr, femeie şi bărbat\r
Credinţa României necondiţionat\r
Că ţara-i bogăţia ce veşnic ne rămâne\r
şi glasul ei ce îndamnă ”Deşteaptă-te, române!”\r
Nu ne-nspăimântă nimeni cu forţa sau pustia\r
\r
Refren 2\r
\r
Suntem de e nevoie o ţară de soldaţi\r
Suntem de e nevoie un lanţ de munţi Carpaţi\r
Durerea ţării noastre facută-i să ne doară\r
Ne place libertatea ca oameni şi ca ţară\r
şi soarele dreptăţii să lumineze sfânt\r
O ţară-n roşu, galben şi albastru pe pământ\r
Aceasta-i viaţa noastră, aceasta ni-i tăria\r
\r
Refren\r
\r
Alte acorduri:\r
Am devine Em\r
E devine B (sau B7, că-i mai comod aşa şi sună bine)\r
C devine G\r
G devine D`,author:{id:18,name:"Nicu Alifantis",slug:"nicu-alifantis"},author_id:18,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:11,name:"Despre Patrie",slug:"despre-patrie",description:""}],chords:["Am","E","C","G","A","Em","B","D"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:35,title:"Cand s-o-mpartit norocu (S-asa-mi vine cateodata)",slug:"cand-s-o-mpartit-norocu-s-asa-mi-vine-cateodata-35",content:`intro\r
   Am\r
|---0---0-----0---0---|\r
|---1---1-----1---1---|\r
|---2---2-----2---2---|\r
|---2---2-----2---2---|\r
|-0-0---0---0-0---0---|\r
|-----0---------0-----|\r
\r
   Am        E        Am     G         C       G        Am\r
|---0---0----0---0----0--0----3---3-----0---0---3---3----0---0--\r
|---1---1----0---0----1--1----3---3-----1---1---3---3----1---1--\r
|---2---2----1---1----2--2----0---0-----0---0---0---0----2---2--\r
|---2---2----2---2----2--2----0---0---2-2-2-2---0---0----2---2--\r
|-0-0---0--2-2---2--0-0--0--2-2-2-2---3-3-3-3-2-2-2-2--0-0---0--\r
|-----0------0-0-0------0---3-3-3-3-----------3-3-3-3------0----\r
\r
  E         Am      E       Am\r
|---0---0----0---0----0---0--0---0----|\r
|---0---0----1---1----0---0--1---1----|\r
|---1---1----2---2----1---1--2---2----|\r
|---2---2----2---2----2---2--2---2----|\r
|-2-2---2--0-0---0--2-2---2--0---0----|\r
|---0-0-0------0-0----0-0-0----0------|\r
\r
  Am            E          Am   G\r
  S-asa-mi vine cateoadata dorule\r
  C             G\r
  S-asa-mi vine cateodata\r
  Am           E\r
  Sa dau cu cutitu-n piatra\r
  Am           E            Am      Am\r
  Sa dau cu cutitu-n piatra dorule.......\r
\r
  Una din cele mai frumoase melodii romanesti, m-am mirat cand n-am\r
 vazut-o transpusa pe site.`,author:{id:19,name:"Ducu Bertzi",slug:"ducu-bertzi"},author_id:19,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Am","E","G","C"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:36,title:"Amintire cu haiduci",slug:"amintire-cu-haiduci-36",content:`Capo pe fretul 1 sau pe fretul 2.Varianta de pe albumul Cenaclul flacara este cu \r
capo pe fretul 1. Cea de pe albumul Best of...este cu capo pe fretul 2.\r
\r
\r
Intro: Em D Em G D Em\r
\r
Em         G     D        Em\r
În codru verde nu se mai vede \r
D          G      D      Em\r
Nu se mai pierde urmă de cal\r
Em         G     D     Em\r
Pe la izvoare nu mai apare \r
D        G      D         Em\r
Umbra călare a vreunui haiduc.\r
\r
\r
Em         G    D        Em\r
Unde s-au dus, când au apus \r
D        G      D      Em\r
Anii de sus ai gloriei lor\r
Em         G         D        Em\r
Unde-s pistoalele, unde-s pumnalele \r
D          G      D      Em\r
Caii si flintele haiducilor.\r
\r
\r
Refren:Aceleasi acorduri ca pe strofe.\r
\r
\r
Em         G    D        Em\r
La drumul mare nu mai apare \r
D         G     D        Em\r
Să mai omoare câte-un ciocoi\r
Em            G     D        Em\r
Să-i ia toti banii pentru ţăranii\r
D          G      D        Em\r
Pentru sărmanii plini de nevoi.\r
\r
\r
Em         G     D      Em\r
Unde s-au dus, când au apus \r
D        G      D      Em\r
Anii de sus ai gloriei lor\r
Em         G         D        Em\r
Unde-s pistoalele, unde-s pumnalele \r
D          G      D      Em\r
Caii şi flintele haiducilor.`,author:{id:20,name:"Valeriu Sterian",slug:"valeriu-sterian"},author_id:20,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Em","G","D"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:37,title:"Cana cu vin",slug:"cana-cu-vin-37",content:`C\r
Aseara te-am asteptat\r
G                  C\r
Si n-ai venit\r
           C\r
Poate te-ai suparat\r
F     G            C\r
Poate-ai adormit.\r
\r
C                   F\r
R: Deseara sa nu m-astepti\r
G                   C\r
Deseara n-am sa vin\r
Pentru doua vorbe\r
La o cana cu vin.\r
\r
Deseara sa nu m-astepti\r
O, nu, n-am sa vin\r
Pentru "Buna, seara!"\r
Atât, si-o cana cu vin.\r
\r
2.Speram ca într-o zi\r
Si tu sa ma iubesti\r
Dar din romante stiu\r
Ca sperând gresesti.\r
\r
3.De-acuma poti sa pleci\r
La alta linistit\r
Mi-am pierdut si timpul\r
Si tot nu m-ai iubit.`,author:{id:12,name:"Ecoul",slug:"ecoul"},author_id:12,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["C","G","F"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:38,title:"Ruga pentru parinti",slug:"ruga-pentru-parinti-38",content:`Gm                         Cm\r
Enigmatici şi cuminţi\r
\r
E||-------|-------3--------3--------|-------3--------3--------|\r
B||-------|----------3--------3-----|----------4--------4-----|\r
G||-------|-------------3--------3--|-------------5--------5--|\r
D||-------|-------------------------|-------------------------|\r
A||-------|-------------------------|--3----------------------|\r
E||-------|--3----------------------|-------------------------|\r
\r
\r
     F                     Bb \r
   Terminându-şi   rostul lor\r
                      \r
-------1--------1--------|-------1--------1--------||\r
----------1--------1-----|----------3--------3-----||\r
-------------2--------2--|-------------3--------3--||\r
-------------------------|-------------------------||\r
-------------------------|--1----------------------||\r
--1----------------------|-------------------------||\r
\r
etc.. pe următoarele acorduri:\r
\r
Gm              Cm\r
Enigmatici şi cuminţi\r
F                Bb\r
Terminându-şi rostul lor\r
Gm              Cm\r
Lângă noi se sting şi mor\r
F                     Bb\r
Dragii noştri, dragi părinţi\r
\r
Cm              Gm\r
Dă-ni-i Doamne înapoi\r
Eb                   Dm\r
Căci şi-aşa au dus-o prost\r
Cm                    Gm\r
şi fă-i tineri cum au fost\r
Eb          D         Gm\r
Fă-i mai tineri decât noi\r
\r
Pentru cei ce ne-au făcut\r
Dă un ordin, dă ceva\r
Să-i mai poţi întârzia\r
Să o ia de la început. \r
 \r
Au plătit cu viata lor\r
Ale fiilor erori,\r
Doamne fă-i nemuritori\r
Pe părinţii care mor. \r
 \r
Ia priviţi-i cum se duc,\r
Ia priviţi-i cum se sting,\r
Lumânări în cuib de cuc,\r
Parcă tac, si parcă ning. \r
 \r
Plini de boli si suferinţi\r
Ne întoarcem în pământ,\r
Cât mai suntem, cât mai sunt,\r
Mângâiati-i pe parinti. \r
 \r
E pământul tot mai greu,\r
Despărţirea-i tot mai grea,\r
Sărut-mâna, tatăl meu,\r
Sărut-mâna, mama mea. \r
 \r
Dar de ce priviţi asa,\r
Fata mea si fiul meu,\r
Eu sunt cel ce va urma \r
Dragii mei mă duc si eu.\r
\r
Sărut-mâna, tatăl meu,\r
Sărut-mâna, mama mea.\r
Rămas bun, băiatul meu,\r
Rămas bun, fetita mea, \r
 \r
Tatăl meu, băiatul meu,\r
Mama mea, fetiţa mea.`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Gm","Cm","F","Bb","Eb","Dm","D","E"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:39,title:"La nunta ta",slug:"la-nunta-ta-39",content:`Originalul e în F#m, dar pentru comoditate am transcris în Em\r
\r
Em          B7       Em\r
Eu vin la nunta ta, iubito\r
                    Am\r
Și nu voiesc nimic să-ți cer\r
                C        B\r
Dar roagă-ți nașii să mă lase\r
       Am      C       B7\r
Să-ți cânt la nuntă lerui-ler\r
\r
Colindător fără de casă\r
Colindător fără noroc\r
Un strop de vin și-un strop de pâine\r
Îți cânt și-apoi o iau din loc\r
\r
	Refren:\r
	\r
	Am          D        G\r
	Dreptul să colind îl cer\r
                Am  C       B7\r
	Dalbe flori și lerui-ler\r
	Am     D              G\r
	Pentru ea, doar pentru ea\r
	C   B7   Em\r
	Măritata mea\r
\r
Am drum în față și în urmă\r
Din când mai mor prin munți\r
Dar am venit să-ți cânt colindul \r
Preafericitei tale nunți\r
\r
Pot să-l rostesc și din picioare\r
Nu am pretenții de mesean\r
Un strop de vin și-un strop de pâine\r
Și-am să-ți colind nepământean\r
\r
	Refren.\r
\r
Iubita mea vândută lumii\r
Nimic n-aș mai putea să sper\r
Că florile nu mai sunt dalbe\r
Și "lerui" nu mai este "ler"\r
\r
Dar eu colind bătut de lacrimi\r
Colind și voi mai colinda\r
La toate nunțile din lume\r
Afară doar de nunta mea\r
\r
	Refren.`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Em","B7","Am","C","B","D","G"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:40,title:"Broasca Țestoasă",slug:"broasca-testoasa-40",content:`D                   A\r
Am ani o mie, asta-i tot\r
Bm                F#\r
Și vin asupră-mi alţii\r
G                   D\r
Sub Teobald, regele got\r
A                D\r
Crescui în rezervaţii\r
G                   D\r
Sub Teobald, regele got\r
A                D\r
Crescui în rezervaţii\r
\r
	Refren:\r
	D          A\r
	Hai lin, hai lon\r
	Bm                 F#\r
	Ciu-daga-dinghi-langhi-lo\r
	G                         D\r
	Ciu-daga-dinghi-langhi-dobobldinghi\r
	A                        D\r
	Daghi-dobobldinghi-daghi-dobobldinghi\r
	G                        D\r
	Ciu-daga-dinghi-langhi-dobobldinghi\r
	A                          D A D\r
	Daghi-dobo-bldinghi-langhi-lo\r
\r
Atâte-au fost în aceşti ani\r
Din care nu ştiu boabă\r
Acum expusă-s pentru bani\r
La moşi într-o tarabă\r
\r
	Refren\r
\r
Stafia morţii nu-mi dă ghes\r
Nu ştiu de muta coasă\r
Sunt broasca ţest, sunt broasca ţest\r
Sunt broasca ţestoasă\r
\r
	Refren 3x (accelerând tempoul)`,author:{id:21,name:"Radu Gheorghe",slug:"radu-gheorghe"},author_id:21,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""},{id:12,name:"Cântece pentru copii",slug:"cantece-pentru-copii",description:""}],chords:["D","A","Bm","F","G","Am","F#"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:41,title:"Decembre",slug:"decembre-41",content:`Ciupitura:\r
\r
Dm                 A7\r
----1h3p1--1---   ----0h3-3---0---\r
---3------3-2--   ---2------2---2-\r
--2------------   --0-------------\r
-0-------------   -2--------------\r
---------------   ----------------\r
---------------   ----------------\r
\r
\r
Dm\r
Te uită cum ninge decembre\r
A7 \r
Spre geamuri iubito privește\r
Dm\r
Mai spune s-aducă jăratec\r
A7                     Dm\r
Și focul s-aud cum trosneşte\r
\r
Și mână fotoliul spre sobă\r
La horn să ascult vijelia\r
Sau zilele mele totuna\r
Aş vrea să le-nvăţ simfonia\r
\r
Mai spune s-aducă şi ceaiul\r
Și vino şi tu mai aproape\r
Citeşte-mi ceva de la poluri,\r
Și ningă, zăpada ne-ngroape\r
\r
Ce cald e aicea la tine\r
Și toate din casă-mi sunt sfinte\r
Te uite cum ninge decembre\r
Nu râde, citeşte-nainte\r
\r
E ziuă şi ce întuneric\r
Mai spune s-aducă şi lampa\r
Te uită zăpada-i cât gardul \r
Și-a prins promoroacă şi clampa\r
\r
Eu nu mă mai duc azi acasă\r
Potop e-napoi şi-nainte\r
Te uită cum ninge decembre\r
Nu râde, citeşte-nainte\r
\r
Outro:\r
\r
I-a oara:\r
\r
Dm Gm\r
Mmmmmm...\r
C  F\r
Mmmmmm...\r
Bb Gm\r
Mmmmmm...\r
A  Dm\r
Mmmmmm...\r
\r
II-a oara:\r
\r
Dm Gm\r
Mmmmmm...\r
C  F\r
Mmmmmm...\r
Bb Gm\r
Mmmmmm...\r
A  Dm\r
Mmmmmm...\r
Bb A  Dm\r
Mmmmmm...`,author:{id:18,name:"Nicu Alifantis",slug:"nicu-alifantis"},author_id:18,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:13,name:"De iarnă",slug:"de-iarna",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Dm","A7","Gm","C","F","Bb","A","E"],strumming:[{pattern:["D","-","U","-","D","-","U","-"],timeSignature:"4/4",name:"Fingerstyle"}],views:0},{id:42,title:"Copacii fara padure",slug:"copacii-fara-padure-42",content:`Dm             A7     Dm\r
În povestea copacilor goi\r
F                         Gm  \r
Scârţâind într-o singură uşă\r
                     Dm\r
Este vorba de noi amândoi\r
         A     A7      Dm\r
Este vorba de foc şi cenuşă\r
Dm             A7     Dm\r
Doi copaci fără frunze pe drum\r
F                         Gm  \r
După cum îi priveşte înaltul\r
                      Dm\r
Doi copaci prin sărutul de sus\r
     A                 A7  \r
Aplecându-se unul spre altul.\r
	\r
	Refren:\r
	\r
	Dm                       A\r
	Spune-mi pădure cu frunza rară\r
                   A7            Dm\r
	Unde-i iubirea de astă vară?\r
                          D7  Gm\r
	Nu ştie iarna să se îndure\r
                   Dm    A      Dm\r
	De noi, copacii fără pădure.\r
\r
Toată vara au fost numai ploi\r
şi-au fost stele în nopţi fără stele\r
şi prin toamna şederii pe nori\r
Cade ultima frunză spre ele\r
În zadar către tine întind\r
Nişte crengi ce-mi fuseseră braţe\r
Alte uşi se aud scârţâind\r
De tomnatecul vânt să se agaţe.\r
\r
Nu mai suntem decât doi copaci\r
Vor veni călători să ne tundă\r
Vor lua crengi toţi copiii săraci\r
Pentru flacăra lor muribundă\r
şi chiar dacă mă vei mai iubi\r
Peste crivăţul iernii ce vine\r
Fără braţe cu ochii pustii\r
N-am să am ce întinde spre tine.`,author:{id:13,name:"Tatiana Stepa",slug:"tatiana-stepa"},author_id:13,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Dm","A7","F","Gm","A","D7"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:43,title:"Taina",slug:"taina-43",content:`C\r
Dacă n-am să vin deseară\r
F    G         C\r
Mamă uşa n-o-ncuia\r
C\r
Spune-i tatei că-s în poartă\r
F        C          F        C          F  G7   C\r
Sau găseşte tu, sau găseşte tu, sau găseşte tu ceva.\r
\r
\r
F          G        C\r
În seara asta mamă lumea e a mea\r
O lume de douăzeci de ani\r
Priveşte, mamă, jocul şi taci, nu întreba:\r
E foarte simplu, este ziua mea.\r
\r
\r
Nu pune nici-o întrebare\r
De întrebări m-am săturat\r
Nelămurită să rămână\r
Fie taina mea, fie taina mea, n-o-mpart cu nimenea.\r
\r
\r
În seara asta mamă lumea e a mea\r
O lume de douăzeci de ani\r
Priveşte, mamă, jocul şi taci, nu întreba:\r
E foarte simplu, este seara mea.\r
\r
\r
De te-apucă miezul nopţii\r
şi eu, mamă, n-am venit\r
Lasă telefonu-n pace\r
Fiindcă-n noaptea asta, noaptea asta, mamă nu-s de găsit. \r
\r
\r
În seara asta mamă lumea e a mea\r
O lume de douăzeci de ani\r
Priveşte, mamă, jocul şi taci, nu întreba:\r
E foarte simplu, este noaptea mea.`,author:{id:12,name:"Ecoul",slug:"ecoul"},author_id:12,categories:[{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["C","F","G","G7","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:44,title:"Rău mă dor ochii, mă dor",slug:"rau-ma-dor-ochii-ma-dor-44",content:`Capo III\r
\r
   G                       C\r
1. Rau ma dor ochii, ma dor\r
	D	G\r
De durerea frunzelor\r
\r
         Em              D C\r
R: Si ma duc si iar ma duc\r
	D		G\r
   Pana la izvor sub nuc\r
         Em	    D 	   C\r
   Si ma fac si iar ma fac\r
            D              G\r
   Lemn de brad si lemn de fag\r
\r
\r
 2. Rau ma dor picioarele\r
    De batut cararile\r
\r
3. Rau ma dor ochii, ma dor\r
   De lumina stelelor\r
\r
4. Unde ai plecat nu stiu\r
   Dar mi-e sufletul pustiu\r
\r
5. Si-am sa plec fara sa stiu\r
   Dus de dorul meu tarziu`,author:{id:3,name:"Anonim",slug:"anonim"},author_id:3,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["G","C","D","Em"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:45,title:"Râpa",slug:"rapa-45",content:`Em          D     Em\r
La marginea pantei abrupte (o-o-o-o)\r
C         D         Em\r
La un han s-a oprit un strain (strain-strain)\r
C         D               G       D   Em\r
Era trist si avea hainele rupte o-o-o-o \r
Em          D        Em\r
Si pe masa o cana cu vin (cu vin-cu vin) [Era trist.... x2         \r
\r
Om nebun ce-nconjoara pamantul (o-o-o-o)\r
Stai la mine, ramai doar un ceas (un ceas-un ceas) \r
Sa te-ntorci inapoi nu mai ai unde o-o-o-o\r
Inainte sa maergi ti-a ramas (ramas-ramas)  [Sa te-n.... x2\r
\r
Mi-amintesc de o vara fierbinte (o-o-o-o)\r
De o padure cu muguri pe ram (pe ram-pe ram)\r
Mi-amintesc de prieteni si de iubita 0-0-0-0 \r
Si de-o casa cu mama la geam. (la geam-la geam) [Mi-amintesc... x2\r
 \r
\r
Si am ajuns la un han pe o stanca  (o-o-o-o)\r
Sa-mi inec tot amarul nu pot (nu pot-nu pot)\r
Si ma-ntreb daca apa e adanca o-o-o-o \r
Sa ma-nec azi cu jale cu tot. (cu tot-cu tot) [ Si ma-.... x2\r
\r
L-am vazut ridicandu-se agale (o-o-o-o)\r
Avea ochi plini de lacrimi de dor (de dor-de dor)\r
Multumesc pentru vinul mariei tale o-o-o-o\r
Eu ma duc azi la rapa sa mor (sa mor-sa mor)  [Multumesc.... x2\r
\r
Linia melodica o gasiti la coverul facut de mine pe youtube\r
http://www.youtube.com/watch?v=ef7sddFChaQ`,author:{id:22,name:"Trupa Şanţ",slug:"trupa-sant"},author_id:22,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Em","D","C","G"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:46,title:"Castelul",slug:"castelul-46",content:`Am               C \r
Candva demult un crang de brazi\r
G              Am  \r
Pazea un vechi castel\r
Am              C \r
Si-o satra de tigani nomazi\r
G            Am\r
A poposit in el\r
\r
Refren:   Am      C   G       Am\r
          Aaaaaaaaa   nananananana\r
          Am      C   G       Am\r
          Ooooooooo   nananananana\r
\r
Si-aveau tiganii ochi adanci \r
Si galbeni prinsi in plete\r
Si-aveau cu ei un card de tanci\r
Si-un card de negre fete\r
\r
Refren: \r
\r
\r
3. Si cum faceau tiganii foc \r
Din crengile de pin\r
Tiganci cu carti si cu ghioc\r
Plecara prin vecini\r
\r
Refren:\r
\r
4. Candva un tanar castelan\r
Privind prin vechi ferestre\r
Zari o fata de tigan\r
Frumoasa ca-n poveste\r
\r
Refren:\r
\r
5.Si-avea cu el în drumul sau\r
Un biet copil de casa\r
L-a pus s-aduca la castel\r
Tiganca cea frumoasa\r
\r
Refren:\r
\r
6.Trecu un an, mai mult de-atunci\r
Si-n patul de matasa\r
Frumoasa fata de tigan\r
Era acum craiasa\r
\r
Refren:\r
\r
7. Of, domnul meu, iubitul meu\r
Mi-ai spus acum un an\r
C-ai vrea sa-ti fiu mireasa eu\r
Eu, fata de tigan\r
\r
Refren:\r
\r
8.Si cum statea într-un balcon\r
Si-si acorda chitara\r
Un cântec rasuna duios\r
Pentru tiganca seara\r
\r
\r
Puteti pune capo pe 1 , dar se poate canta fara capo .....`,author:{id:23,name:"Nae Berechet",slug:"nae-berechet"},author_id:23,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","C","G","A"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:47,title:"Refugiu Diana / Imnul Dianei",slug:"refugiu-diana-imnul-dianei-47",content:`1.\r
 Em        B7        Em\r
Am pornit sa recladim Diana  \r
      G     D       Em\r
Un refugiu vechi si parasit\r
    G        D          G D Em\r
Am lasat spritul si damigeana\r
          C     B7       Em\r
Si spre Plaiul Foii am pornit.\r
\r
\r
        Refren:	\r
	\r
	 Am   D    G     Am          Em\r
	Mama unde esti? Bate-ma de vrei\r
              B7        Em\r
	Dar vino sa ma iei !\r
	Mama unde esti? Poti sa ma si bati\r
	Dar lasa-ma in Carpati !\r
\r
2.\r
Si intr-o zi cu ploaie si cu ceata\r
Cu rucsacii-n spate si vopsea\r
In alertul nostru pas de rata\r
Am atacat-o pe Diana.\r
\r
3.\r
Scândura mica, scândurica lata\r
Te-am purta pana ne facem mici\r
Si echipa noastra cocosata\r
Parca-ar fi o ceata de pitici.\r
\r
4.\r
Totu-i bine pana la-nserare\r
Când cu lacrimi calde ne rugam\r
O, Ceresc Parinte, îndurare!\r
Fa mai cald sa nu mai înghetam.\r
\r
5.\r
Si-am ajuns acolo toti o forta\r
Si-ntr-o scurta clipa de ragaz\r
Am aprins a tineretii torta\r
De indata ce-am ajuns in Crai.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:14,name:"Imnuri",slug:"imnuri",description:""}],chords:["Em","B7","G","D","C","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:48,title:"Ninge astazi pentru tine",slug:"ninge-astazi-pentru-tine-48",content:`G           Am          C       D        G\r
1. Ninge astazi pentru tine muntele e alb de nea,\r
   G          Am          C    D             G\r
   Soarele din ceruri vine doar pentru iubita mea.\r
   Acum coboara si dorul chemat de la locul lui,\r
   Tocmai de pe Vârful Omu pâna-n Valea Cerbului.\r
   \r
\r
                   R:  Când te scuturi de zapada\r
                       Nu stii cât esti de frumoasa\r
                       Ochii-ti verzi zapada-i alba\r
                       Si se face cald în casa.\r
\r
2. Si calugarii din schit vor cu totii a te vedea,\r
   La cabana au venit doar pentru iubita mea.\r
   Si zapada de pe culme în vale s-a rostogolit,\r
   Muntele e pus pe glume de când stie c-ai venit.\r
   \r
3. Jepii Mici ca sa te vada si-au cumparat ochelari,\r
   Si în cea mai mare graba i-au chemat pe Jepii Mari.\r
   Nu stiu sigur azi sau mâine pe Morar am sa te sui,\r
   Sa ne logodim iubito sus în vârful muntelui.\r
\r
http://www.youtube.com/watch?v=0ZztyJ1zcy4&feature=player_detailpage\r
Interpretare :Puiu Cazan`,author:{id:25,name:"Puiu Cazan",slug:"puiu-cazan"},author_id:25,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["G","Am","C","D"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:49,title:"Floare de Colt",slug:"floare-de-colt-49",content:`Em       B7          Em   \r
Vis de-argint si de petale\r
D                    G     ( G7 )\r
Cuibul tau e sus pe creste\r
C      D             G\r
Raza ta-mi coboara-n cale\r
Am     B7            Em     ( G7 )\r
Mai frumos ca-ntr-o poveste\r
C      D              ( Bm A#m Am ) /G\r
Raza ta-mi coboara-n cale\r
Am      B7             Em\r
Mai frumos ca-ntr-o poveste\r
\r
\r
E--0-2-3- Am  \r
\r
Am            Em\r
Tu floare de colt\r
B7            Em\r
Minune sub bolti\r
Am         Em\r
Frageda stea\r
B7         Em\r
Iubita mea !\r
X2`,author:{id:19,name:"Ducu Bertzi",slug:"ducu-bertzi"},author_id:19,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["Em","B7","D","G","G7","C","Am","Bm","A#m"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:50,title:"Imnu Pietrei Craiului",slug:"imnu-pietrei-craiului-50",content:`   Dm             F     C          Dm\r
1. Avem un singur Crai ce-asteapta neclintit\r
Dm          F           C       Dm\r
Cu ale sale creste ce-s rosii-n asfintit\r
Plecam sâmbata seara, urcam toti împreuna\r
Si liberi ca sa fim sub cerul clar de luna\r
Sa vii sa îl strabatem pe ale sale drumuri\r
Sa vezi cum cresc la brazi cu miile de muguri\r
Sa vezi si jneapanul cum creanga si-a plecat\r
Ce vitrega-i natura si-i vântu-i neîncetat\r
\r
   Dm                 F   C         Dm\r
R: Si vreau sa vii si tu, sa mergem împreuna\r
Dm          F       C        Dm\r
Sa împletim acolo a Craiului cununa\r
Dm           F     C                Dm\r
Din garofite rosii si din bujori de munte\r
C          Am               Dm\r
Din liliac si flori de colt carunte\r
Dm         C      Am               Dm\r
Hei, hai,  liliac si flori de colt carunte\r
\r
\r
2. De pleci din Plaiul Foii pe drumul pietruit\r
Ai sa ajungi la Spirla, refugiul poleit \r
Sa-i întâlnesti pe marius, pe ghimpe si pe dan\r
Si vei vedea ce-nseamna sa fii un muntoman \r
De urci înspre Ascunsa pe Hornul Nisipos\r
E noapte si e iarna si vântul e taios \r
Sa simti rucsacu-n spate, o munca de Sisif\r
Si mâna pe chitara lipindu-se de griff\r
\r
\r
3. De pleci din Curmatura, traseu pe banda-albastra\r
Ajungi în Saua Caprei, cobori apoi sub creasta\r
Sa treci si de Gavan, de Padina Închisa\r
De stânca Orgii Mari si de Diana stinsa\r
De vrei sa stii ce-i munte, sa urci pe Crapatura\r
Si prin zapada inalta , sa mângâi stânca dura\r
Sa treci si de-Ascutiti, Timbalele-amândoua\r
De stanca orgii mari cand ninge si când ploua\r
\r
4. Pe Lanturi de te-ncumeti în nopti cu luna plina\r
Si prin zapada-nalta sa tai poteca lina\r
Când ochii tai se-nalta spre bolta înstelata\r
La crucea unei fete sa-ngenunchezi o data\r
Când râuri de sudoare-ti vor sirui pe fata\r
Sa ai credinta-n munte si-ncredere în viata\r
Aicea sus pe munte nimic nu e usor\r
Mai bine stati acasa în poala mamelor\r
\r
\r
\r
Ritmul este foarte usor , voi poasta un video cu aceasta piesa\r
Videoul pe care lam facut pentru aceasta piesa : http://www.youtube.com/watch?v=YaYROYlEhnI`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:14,name:"Imnuri",slug:"imnuri",description:""}],chords:["Dm","F","C","Am","E"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:51,title:"Sunt sărac",slug:"sunt-sarac-51",content:`Am           Dm            \r
Mă întreb ce s-ar fi întâmplat\r
F      C         E           Am   - Am E\r
Dacă-n zori m-aș fi trezit bogat.\r
Am         Dm\r
Deseori la asta m-am gândit,\r
F    C     E              Am\r
Însă visul meu nu s-a-mplinit.\r
\r
Refren: \r
\r
       Dm           Am\r
Sunt sărac, sunt sărac,\r
        Dm          Am\r
N-am un ban în buzunar,\r
       Dm         Am\r
Sunt sărac, și ce dacă,\r
      E           Am      \r
Eu cu soarta mă împac.  \r
           Dm           Am\r
     Sunt sărac, sunt sărac,\r
             Dm          Am\r
     N-am un ban în buzunar,\r
            Dm         Am\r
     Sunt sărac, și ce dacă,\r
           E           Am      - Am E\r
     Eu cu soarta mă împac.  \r
\r
\r
Banul e - vorba țăranului,\r
Banul este ochiul dracului. \r
Când îl ai îți pare foarte mic,\r
Când nu-l ai, nu valorezi nimic.\r
\r
Fericirea n-o poți cumpăra\r
Nici cu bani și nici cu altceva.\r
Cânt și nimeni nu mă poate-opri\r
Să dau glas tăcerii inimii.`,author:{id:26,name:"Karma",slug:"karma"},author_id:26,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","Dm","F","C","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:52,title:"Visul",slug:"visul-52",content:`G                    Em                 C               D        \r
A fost odata un vis frumos un vis frumos cu un baiat si-o fata\r
G                  Em                 C             D\r
A fost un vis cam dureros cam dureros de te ranesc ma iarta.\r
A fost un vis nascut în munti, nascut în munti crescut la o cabana\r
Umbrit de brazi înalti carunti înalti carunti ce astazi se destrama\r
\r
\r
Refren:\r
\r
\r
G                       Em\r
De ce va destramati usor va destramati\r
C            D\r
Voi vise pe poteci\r
G                       Em\r
În amintirea muntilor, a muntilor\r
      C        D\r
Sa dainuiti pe veci.\r
	\r
Cad stelele ard lumânari pe-al muntelui altar\r
Vin cerbii iarasi pe carari padurile tresar\r
Izvoarele în sopot lin vestesc iubirea  noastra\r
Iar ale tale vise vin sa-ti bata la fereastra.\r
\r
\r
Ramâi cu bine visul meu si s-auzim de bine\r
Te voi pastra în gând mereu voi fi mereu cu tine\r
Iar cel ce va veni apoi pe munte tu sa-l aduci\r
Va voi veghea pe amândoi pe creste de-ai sa-l urci.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["G","Em","C","D","A"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:53,title:"Padure Nebuna",slug:"padure-nebuna-53",content:`Em\r
O vara intreaga m-a tinut padurea\r
G\r
Cu fata in iarba si cu gandul aiuria\r
Em\r
Iar acum in toamna la plecare\r
G                    D            Em\r
Se tanguie ca ma rup din inima ei si o doare\r
\r
\r
refren:\r
G\r
Padure, padure nebuna\r
Em\r
In fiecare noapte cu luna\r
G\r
Voi ratacii fara tinta agale\r
Em                  D                  Em\r
Ca o frunza manata de vant pe potecile tale\r
\r
\r
Em\r
In fiecare noapte de iarna\r
G\r
Umbra mea alba va veni sa se-astearna\r
Em\r
Ca o ursoaica cu puii ucisi\r
G                     D          Em\r
La umbra stejarilor pradati de frunzis \r
\r
\r
refren:\r
G\r
Padure,padure nebuna\r
Em\r
In fiecare noapte cu luna\r
G\r
Voi ratacii fara tinta agale\r
Em                   D                 Em\r
Ca o frunza manata de vant pe potecile tale\r
\r
\r
Em\r
In fiecare dimineata\r
G\r
Uneori ca o umbra,alteori ca o ceata\r
Em\r
Ca o negura sau ca o bruma\r
G                    D                Em\r
Voi veni,voi veni,nu te mai tangui padure nebuna`,author:{id:27,name:"Carmen Ciocolata",slug:"carmen-ciocolata"},author_id:27,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Em","G","D"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:54,title:"Muntele alb",slug:"muntele-alb-54",content:`Bataia: clasica (jjssjs)\r
Intro: Am Am\r
"-" reprezinta jumatati de acord\r
\r
    Am  -    E     Am \r
1.Ninge cu vorbe secate\r
        G  \r
  Când iarna e grea\r
        C \r
  Si viscolul bate\r
    Dm  -     E     Am    \r
  Ninge cu vorbe secate.\r
  Am   -   E      Am       \r
  Si iarna e solitarã\r
        G \r
  Când stele de gheatã\r
      C \r
  Scânteie afarã\r
  Dm   -   E       Am      \r
  Si iarna e solitarã.\r
\r
           G              C        \r
R: Tu esti muntele alb pe care urcãm\r
         Dm             Am     \r
   Si-nãltimile tale ne cad la picioare,\r
           E       Am    \r
   Tu esti muntele alb.\r
   Tu esti visul meu alb În care mã-mbrac\r
   În miresme de crin si de liliac\r
   Tu esti visul meu alb. +Am\r
\r
2.Ninge cu vorbele tale\r
  E iarnã fierbinte\r
  Ca o rugãminte\r
  Ninge cu vorbele tale.\r
  Si te-as iubi în ianuarie\r
  Ca pe-o floare de crin\r
  Ca pe-o stea cãzãtoare\r
  Si te-as iubi în ianuarie.\r
\r
\r
3.Si îmi pãstrez jurãmântul\r
  Sã fiu o biatã frunzã\r
  Ce-o leagãnã vântul\r
  Si îmi pãstrez jurãmântul.\r
  Iar tu rãmâi ca o sete\r
  Pe care-o astâmperi\r
  Când iarna începe\r
  Iar tu rãmâi ca o sete.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","E","G","C","Dm"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:55,title:"Rau ma dor ochii",slug:"rau-ma-dor-ochii-55",content:`Bataia :clasica (jjssjs)\r
Intro: c c \r
\r
  C       C             C   C          \r
1. Rau ma dor ochii, ma dor\r
  G     G           C   C   \r
   De durerea frunzelor\r
\r
         Am        Am            G             G     \r
R: Si ma duc,si ma duc,si iar ma duc,si iar ma duc\r
                     C    C\r
   Pana la izvor sub nuc\r
         Am        Am            G             G   \r
   Si ma fac,si ma fac,si iar ma fac,si iar ma fac\r
                           C    C  \r
   Lemn de brad si lemn de fag\r
\r
2. Rau ma dor picioarele\r
   De batut cararile\r
\r
Refren:\r
\r
3. Rau ma dor ochii, ma dor\r
   De lumina stelelor\r
\r
Refren:\r
\r
4. Rau ma doare inima\r
   Ca iubesti pe-altcineva\r
\r
Refren:\r
\r
5. Unde ai plecat nu stiu\r
   Dar mi-e sufletul pustiu\r
\r
Refren:\r
\r
6. Si-am sa plec fara sa stiu\r
   Dus de dorul meu tarziu`,author:{id:28,name:"Vârf Carpatin",slug:"varf-carpatin"},author_id:28,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["C","G","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:56,title:"Imnul Dianei",slug:"imnul-dianei-56",content:`Am             E        Am\r
Si-am pornit sa recladim Diana\r
Am        E      Am       Am\r
Un refugiu ars si parasit/(parasit)\r
Am    C           E        Am\r
Si-am lasat sticla si damigeana\r
Am     C     E       Am\r
Si din Plaiul Foii am pornit, \r
Am   C            E        Am\r
Si-am lasat sticla si damigeana\r
Am    C      E       Am\r
Si din Plaiul Foii am pornit. \r
\r
\r
                 Refren:\r
                     Am E  Am\r
                     O, O, O, \r
                     Am   E    Am    Dm            Am\r
                     Mama unde esti? Poti sa ma si bati\r
                     E             Am\r
                     Dar lasa-ma-n Carpati !\r
                     Am      C     E   E   Am\r
                     Darira, rira, ri, ra, ra\r
                     Am   G    C     Dm         Am\r
                     Mama unde esti? Bate-ma de vrei\r
                     E              Am\r
                     Dar lasa-ma cu ei !\r
\r
\r
   Si intr-o zi cu ploaie si cu ceata\r
   Cu rucsaci in spate si vopsea/ (si vopsea)\r
   In alertul nostru pas de rata\r
   Am atacat-o pe Diana,\r
   In alertul nostru pas de rata\r
   Am atacat-o pe Diana.\r
\r
\r
   Scandura mica, scandura lata\r
   O caram pana ne facem mici/ (ne facem mici)\r
   Si echipa noastra-i cocosata\r
   Parc-ar fi o ceata de pitici,\r
   Si echipa noastra-i cocosata\r
   Parc-ar fi o ceata de pitici.\r
\r
   Totu-i bine pan'la inserare\r
   Cand cu calde lacrimi ne rugam/ (ne rugam)\r
   O, Ceresc Parinte, indurare!\r
   Fa mai cald sa nu mai inghetam,\r
   O, Ceresc Parinte, indurare!\r
   Fa mai cald sa nu mai inghetam.\r
\r
   Si-am ajuns acolo toti o forta\r
   Si-ntr-o scurta clipa de ragaz (de ragaz)\r
   Am aprins a tineretii torta\r
   De indata ce-am ajuns in Crai,\r
   Am aprins a tineretii torta\r
   De indata ce-am ajuns in Crai.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:14,name:"Imnuri",slug:"imnuri",description:""}],chords:["Am","E","C","Dm","G"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:57,title:"Puiul de drac (Cade copacu`)",slug:"puiul-de-drac-cade-copacu-57",content:`G         Em              C        D \r
Hei m-am dus m-am dus, sa tai un copac\r
\r
       G        Em        C        D\r
Si-a venit a venit, un mic pui de drac\r
\r
        G          Em       C        D\r
Si mi-a spus mi-a spus, sa nu tai copacul,\r
 \r
         G           Em            C            D\r
C-o sa-mi scoata un ochi si-o sa-mi sparga si capul,\r
\r
      G       Em      C        D\r
Insa eu insa eu, nu l-am ascultat\r
 \r
         G        Em        C      D\r
Si m-am dus m-am dus, sa tai un copac.\r
\r
\r
\r
 G          D         G\r
Cadeee, da-te ba ca cadeee\r
\r
G           G          Em       C        D\r
Daa-te ba ca cade cade cade cade cade copacu\`\r
\r
G           Em          C       D\r
Curge curge curge curge curge coniacu\`\r
\r
\r
\r
           G        Em       c       D\r
Hei m-am dus m-am dus, sa beau un coniac\r
\r
       G       Em      C          D\r
Si-a venit a venit, acel pui de drac\r
\r
         G          Em      C         D\r
Si mi-a spus mi-a spus, sa nu beau coniacul,\r
\r
          G           Em             C          D\r
C-o sa-mi scoata un ochi si-o sa-mi sparga si capul,\r
\r
      G       Em      C         D\r
Insa eu insa eu, nu l-am ascultat\r
\r
        G       Em        C       D\r
Si m-am dus m-am dus, sa beau un coniac.\r
\r
  G          D           G\r
Curgeee, da-te ba ca curgeee\r
\r
   G           G          Em          C      D\r
Daa-te ba ca curge curge curge curge curge coniacu\`\r
\r
 G        Em         C     D\r
Cade cade cade cade cade copacu\`.\r
\r
\r
\r
 G          D         G\r
Cadeee, da-te ba ca cadeee\r
\r
G           G          Em       C        D\r
Daa-te ba ca cade cade cade cade cade copacu\`\r
\r
G           Em          C       D\r
Curge curge curge curge curge coniacu\``,author:{id:3,name:"Anonim",slug:"anonim"},author_id:3,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["G","Em","C","D"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:58,title:"Omul bun si pomul copt",slug:"omul-bun-si-pomul-copt-58",content:`F\r
 1 Omul bun si pomul copt , dar\r
    Bb   Dm          C\r
   Hai mai dorule hai\r
     F\r
   Astia n-or avut noroc\r
    Bb   C7         F\r
   Hai mai dorule hai\r
 \r
 \r
   Ref:   Bb       C         F\r
         Stau la margine de drum\r
           Bb     C7          F \r
         Pomul copt si amul bun\r
             Bb        C         F   \r
         Si stau la margine de drum\r
           Bb      C7           F\r
         Pomu-i copt si omu-i bun\r
 \r
      F\r
  2 Dupa ce-or da ce-or avuta\r
     Bb   Dm         C \r
    Hai mai dorule hai\r
      F\r
    I-o lasat i-o parasita\r
     Bb   Dm         F \r
    Hai mai dorule hai\r
\r
      F\r
  3 Si-asa ca-i venea sa creasca\r
     Bb   Dm         C \r
    Hai mai dorule hai\r
      F\r
    Poate-o mai rodi vreidata\r
     Bb   Dm         F\r
    Hai mai dorule hai`,author:{id:29,name:"Mircea Rusu Band",slug:"mircea-rusu-band"},author_id:29,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["F","Bb","Dm","C","C7"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:59,title:"Tu sa stai cuminte acasa",slug:"tu-sa-stai-cuminte-acasa-59",content:`C                F\r
E greu urcusul, vantul ma sfasie\r
G                      C\r
Si viata mi-e legata de-o franghie\r
C                   F\r
In jurul meu se lasa ceata deasa\r
G                   C\r
Iubito, tu sa stai cuminte acasa.\r
C                   F\r
In jurul meu se lasa ceata deasa\r
G                   C\r
Iubito, tu sa stai cuminte acasa.\r
\r
Si bate crivat rece dintr-o parte\r
Stau atarnat intre destin si moarte\r
Un fel de liniste incet m-apasa\r
Iubito, tu sa stai cuminte acasa.\r
\r
Mai fac un pas si-ncremenesc pe stanca\r
Sub mine e prapastie adanca\r
Simt cum puterile incet ma lasa\r
Iubito, tu sa stai cuminte acasa.\r
\r
Pe-o piatra mi-a alunecat piciorul\r
Sub mine se intinde negru golul\r
Si franghia-i pe jumatate roasa\r
Iubito, tu sa stai cuminte acasa.\r
\r
Din clipa-n clipa vantul se-nteteste\r
Si-n stanca inghetata ma izbeste\r
S-a pus ca din senin o ceata deasa\r
Iubito, tu sa stai cuminte acasa.\r
\r
Am inghetat, nimic nu ma mai doare\r
Si parca urla lupii-n departare\r
Un fel de liniste incet m-apasa\r
Iubito, tu sa stai cuminte acasa.\r
\r
Aud o voce ca din nefiinta\r
Care-mi sopteste groaznic o sentinta\r
Si simt o ameteala pacatoasa\r
Iubito, tu sa stai cuminte acasa.\r
\r
Mana-nghetata-ncet mi se desprinde\r
Si-n liniste infinitul ma cuprinde\r
Un ultim salt de circ dar fara plasa\r
Iubito, tu sa stai cuminte acasa.\r
\r
Si cand in muntii goi un vant va bate\r
Tu pleaca-ti ochii in singuratate\r
Si cand tacuta noapte-n geam se lasa\r
Iubito, tu sa stai cuminte acasa.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["C","F","G","E","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:60,title:"M-a tinut mama acasa",slug:"m-a-tinut-mama-acasa-60",content:`C          F              ritm:2 batai in jos 2 in sus 1 in jos 1 in sus..\r
M-a tinut mama acasa\r
G             C\r
Sa nu vin la tine\r
            F\r
Insa eu am tot rugat-o\r
G              C\r
Pan' s-a plictisit de mine\r
\r
\r
REFREN:\r
\r
\r
       F\r
Nu mai pot hei hei\r
G        C\r
Sa mai suport\r
   F\r
La munte vreau\r
G\r
###Sa ma intorc\r
\r
daca ai un ghid nebun\r
si-un nebun sa-ti cante \r
ori ce-ar zice-ai tai parinti\r
tu sa te intorci la munte\r
\r
\r
refren`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["G","C","F"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:61,title:"Omagiu unui alpinist",slug:"omagiu-unui-alpinist-61",content:`Am	    C	  Dm   F    C	 \r
Ninge peste munte cu melancolie \r
Dm	    E	    Dm	 F   E	 \r
Ninge peste moartea unui alpinist \r
Ninge peste creste, ninge si sfarseste\r
Inima ce-mi bate azi in pieptu-mi trist.\r
\r
Refren:\r
Am	    E	 \r
Ninge sfant si pagan, \r
F	    C	 \r
Numai ochii ne raman \r
Am	    E7        Am	\r
Despartirea s-o mai vada \r
Caci in munti noi ne-am strans\r
Si-am ajuns de-atata nins\r
Niste oameni de zapada.\r
\r
Stanca grea si dura viata i-a rapit\r
Duhurile vaii casa i-au facut\r
Giulgiu-i de zapada pe care-a iubit-o\r
Vantul il jeleste ca la inceput.\r
\r
Voi cei ce astazi dormiti in munte\r
Voi pe care stanca dura v-a invins\r
O, pustietatea lasa sa v-asculte\r
Iar soptirea blanda mi se pare plans.\r
\r
Pulberea uitarii ninge pe morminte\r
Cei legati in coarda nu va vom uita\r
Catre culmea vietii mergem inainte\r
Pana-n cllipa-n care stanca ne-o trada.`,author:{id:3,name:"Anonim",slug:"anonim"},author_id:3,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","C","Dm","F","E","E7"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:62,title:"Imnul Bucegilor",slug:"imnul-bucegilor-62",content:`Capo I\r
\r
C	 \r
Daca ai un dor ce te framanta \r
                       Dm7\r
Nu cata ca-i drum obositor \r
G	 \r
Hai prietene cu noi pe stanca \r
G7                C	 \r
Pe cararile Bucegilor. \r
Pe cararile umblate doar de ciute\r
Sub aripa Caraimanului\r
Ai s-auzi povesti necunoscute\r
Spuse doar de glasul muntelui.\r
\r
\r
Refren:\r
       C	 \r
Cand Bucegii  \r
                        Dm	\r
Dau zvon de piatra si izvoare \r
           G	 \r
Oriunde-ai fi  \r
                     C	 \r
Raspunde la a lor chemare \r
Caraimanul, Costila-ascunsa dup-un nor\r
Si Morarul te vor primi la pieptul lor.\r
\r
Pe platou la mare inaltime\r
Babele la sfat s-au adunat\r
Numai Baba Mare sta deoparte\r
Si-si pune intrebari neincetat.\r
Oare Sfinxul care tace-ntr-una\r
Si priveste in zari nepasator\r
Se iubeste-n taina cu Batrana\r
Sau le face curte Doamnelor.\r
\r
Jos in Pestera intunecoasa\r
Sta batranul schit uitat de ani\r
Aici doina-ti pare mai duioasa\r
Inganata de batrani ciobani.\r
Numai staretul cu barba-i alba\r
Adancit in rugaciunea lui\r
Spune-ncet cu vocea lui domola\r
Pravila straveche a muntelui.\r
\r
Pe Morar in nopti cu luna plina\r
Sau pe branele Bucsoiului\r
Vin scaldate parca in lumina\r
Zanele din Valea Cerbului.\r
Au pe cap cununi de campanula\r
Si in plete flori de colt de-argint\r
Capre negre-n colt de piatra sura\r
Strajuiesc in noapte locul sfant.\r
\r
De la Varful Omu pana-n zare\r
Dunarea albastra poti s-o vezi\r
Piatra Craiului si Piatra Mare\r
Fagarasul cu-ale lui zapezi.\r
Hoinarind vreodata pe-o carare\r
Dac-o cruce-n cale-ai intalnit\r
Nu uita sa pui macar o floare\r
Pentru cel ce muntele-a iubit.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:14,name:"Imnuri",slug:"imnuri",description:""}],chords:["C","G","G7","Dm","Dm7"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:63,title:"Sobita",slug:"sobita-63",content:`Din cate am putut afla e melodia unui club de munte A.T.M. Acropolis Aiud, \r
sa fie clar: nu este melodia unui plagiator...\r
\r
    \r
R:  G       \r
    DURU DU DURU\r
    D\r
    DÃ-I CU CURU'\r
    A           D\r
    şI-AşA MICA CUM E EA\r
    DURU DU DURU CU CURU	 \r
    E SOBIÞA MEA\r
     \r
    D                \r
    MÃ PUSE DRACU SÃ MÃ-NSOR\r
    A            D\r
    CE MARE DANDANA E\r
    G                  D\r
    SA-MI IAU NEVASTA CU AVERE\r
    A            D\r
    SI SOBA DE ODAIE - BIS\r
  	 \r
    ÎN PRIMA NOAPTE EA N-A VRUT\r
    A ZIS CA-I FAC DURERE\r
    CA-I STRIC SOBIÞA CE I-A DAT\r
    MÃICUÞA CA AVERE\r
  	 \r
    A DOUA NOAPTE A FOST LA FEL\r
    N-A SCOS MÃCAR O VORBA\r
    DAR ERAM TÂNÃR SI-AS FI VRUT\r
    SA BAG UN LEMN IN SOBA\r
  	 \r
    A TREIA NOAPTE-AM ÎNCERCAT\r
    SOBIÞA ERA SPARTA\r
    CU MULTE LUNI ÎNAINTEA MEA\r
    BÃGASE ALTU-O CIOATA\r
  	 \r
    VECINII MEI SUNT VECINI BUNI\r
    NU SCOT MÃCAR O VORBA\r
    MAI VIN SI EI DIN CÂND IN CÂND\r
    SA BAGE-UN LEMN IN SOBA\r
  	 \r
    ACUM SOBIÞA S-A LÃRGIT\r
    SI-NCAP LEMNE MAI MULTE\r
    NOROC CA-S GHIZI LA ALBATROS\r
    CE VIN SA MÃ AJUTE`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""},{id:4,name:"Satiră și umor",slug:"satira-si-umor",description:""}],chords:["D","A","G","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:64,title:"Ma intorc si pasi-s grei",slug:"ma-intorc-si-pasi-s-grei-64",content:`Fill            G         C\r
1. Merg pe unduite caaaaaaaaaai\r
                     Em\r
Incalciti sunt pasii mei\r
                  G          C\r
Rucsacul m-apasa greeeeeeeeeu\r
                   Em\r
Iara eu prin munti mereu\r
   D                    Em\r
R: Ma intorc si pasii-s grei\r
 G        D  \r
Ia, hai, Ia, hai\r
                   Em\r
Las in urma muntii mei\r
 G        D\r
Ia, hai, hai, hai\r
\r
Ma intorc si pasii-s grei\r
Ia, hai, hai, hai\r
Ma gandesc numai la ei\r
\r
2. Muntii cat am strabatut\r
Sa m-opresc nu am putut\r
Infruntand si ploi si vant\r
Vreau pe creste sa ajung\r
\r
3. Cerul arde-n curcubeu\r
Iara eu prin munti mereu\r
Rucsacul m-apasa greu\r
Incalc&#239;t e drumul meu`,author:{id:30,name:"Amurg",slug:"amurg"},author_id:30,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Em","G","C","D"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:65,title:"Ciobanas cu 300 de oi",slug:"ciobanas-cu-300-de-oi-65",content:`D           A           D\r
Ciobanas cu trei sute de oi,\r
   D                   G          D\r
Când vii si treci cu turma pe la noi,\r
    G            A            D\r
De-i vedea pe mândra, draga mea,\r
Spune-i ca m-am departat de ea.\r
\r
Când luna-apare dintre munti în sus,\r
Pleaca-ti mândro ochii cum ti-am spus,\r
Spune-i numai lui ca ma iubesti\r
Si-atunci mândro tot mai draga-mi esti.\r
\r
Când soarele rasare dintr-un negru nor,\r
Ma cuprinde mândro al tau dor,\r
Jale mi-e si nu te pot uita,\r
Dar n-am ce face c-asa-i soarta mea.`,author:{id:8,name:"Folclor",slug:"folclor"},author_id:8,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["D","A","G"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:66,title:"Batranul refugiu",slug:"batranul-refugiu-66",content:`Am                                     Dm\r
1. Departe în munti ascuns  printre stânci\r
 G                        C              E\r
Se afla batrânul refugiu\r
Acolo se întâlnesc acei ce iubesc\r
Peretii de stînca si cerul.\r
\r
Am                                    Dm\r
R:Nu-i nimeni sa-i înteleaga\r
G               C                     E \r
Nu-i nimeni la fel ca ei, la fel ca noi\r
Doar dorul în dulce leagan\r
Sa-i urce spre creste mereu.\r
\r
2. Mi-e inima-n furci, de vrei poti sa urci\r
Sa simti primul pas în perete\r
Speranta apoi sa facem în doi\r
Si-apoi tot mai sus printre creste.`,author:{id:3,name:"Anonim",slug:"anonim"},author_id:3,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","Dm","G","C","E"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:67,title:"Ana lui Manole",slug:"ana-lui-manole-67",content:`Am    G                 Am\r
1.Voi ziditi în jurul meu\r
Am    G                 Am\r
Dar aici în zid sunt eu\r
Am    G    Em           Am\r
Dar aici în zid sunt eu, sunt eu.\r
Hai, Manole, pune zid\r
Sa nu pot sa-l mai deschid\r
Hai îmbraca-ma în zid, zid greu.\r
\r
               C\r
R: Turla-mi soarbe capu-n ea\r
Dm                        Am\r
În altar e fruntea mea\r
G      Em         Am        G\r
Ochii ei feresti vor sta, spre cer\r
Voi lucrati si va e greu\r
Însa de murit, mor eu\r
Jertfa voastra sunt chiar eu, eu pier.\r
\r
2.Pe oriunde sunt zidiri\r
Omul meu, sa nu te miri\r
Le-au întruchipat doi miri de rând.\r
Dara tu de-a pururi pleci\r
Eu ramân aici pe veci\r
Prada caramizii reci, plângând.\r
\r
3.Sângele mi-i înca viu\r
Voi nu stiti ca si eu stiu\r
C-am sa mor dintr-un pariu stupid.\r
Hai Manole fii mai demn\r
Cum sa-ti faci aripi de lemn\r
Mi se face-a moarte semn în zid.\r
 \r
4.Sa te-nchini când vei pleca\r
Sa nu uiti, sa uiti cumva\r
Ca-nauntru-i Ana ta, om crud.\r
Mila cum nu poti sa ai\r
Voi plecati catre alt Rai\r
Eu din zid abia va mai aud.`,author:{id:31,name:"Magda Pușcaș",slug:"magda-puscas"},author_id:31,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","G","Em","C","Dm"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:68,title:"Noapte la mare, noapte la munte",slug:"noapte-la-mare-noapte-la-munte-68",content:`   Am              Dm\r
1. Noi n-am fost niciodata doi\r
      G             C\r
   Ci unul singur amandoi,\r
      Am          Dm\r
   Salbatic cuplu-nsingurat,\r
      E           Am\r
   Pe care timpul l-a uitat.\r
\r
R: Noapte la mare, noapte la mare,\r
   Buzele tale au gust de sare,\r
   Pielea-ti miroase a scoici si a soare, \r
   Noapte la mare, noapte la mare.\r
   Noapte la munte, noapte carpatina,\r
   Buzele tale au gust de rasina,\r
   Paru-ti miroase a flori si a fructe,\r
   Noapte la munte, noapte la munte.\r
\r
2. Noapte la mare, noapte-nstelata,\r
   Inima mea e o scoica furata,\r
   Perla din ea e chiar dragostea mea,\r
   Stai langa mine, tu esti a mea.\r
\r
3. Buzele tale pe buzele mele\r
   In intunericul noptii-s mai grele\r
   Bratele tale, flacari in noapte,\r
   Roiuri de stele, roiuri de soapte.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","Dm","G","C","E"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:69,title:"Tincturi de frunze",slug:"tincturi-de-frunze-69",content:`G                     Em\r
1. Nu pot sa stau drept, merg cu toamna-n piept\r
C                 D\r
Vantu-n toate ranile ma doare\r
G                 Em\r
Si pe orice drum, ca-ntr-un vers postum\r
C                  D\r
Vine frunza in intampinare\r
\r
R: Si-am sa-ti scriu scrisori pe tulpini de flori\r
De lumina stelelor patrunse\r
Si-un roman sa-ti scriu, folosind pe viu\r
Sub umbra de nuc, tincturi de frunze\r
Tincturi de frunze\r
\r
2. Putredul accent a lovit atent\r
Fiecare fir de iarba verde\r
Clipe indigo, care incotro\r
Sa n-avem motive de-a ne pierde\r
\r
3. Frunze iti trimit, scrise cu grafit\r
Iar din albul iernii care vine\r
Ce sa-ti mai insir, frunzele-n delir\r
Te iubesc si ma gandesc la tine\r
\r
4. Nu vad pe unde merg, frunze cad din cer\r
Si in tropot mi se-aude mersul\r
Scriu scrisori pe foi, lacrimez in ploi\r
Intr-un liber schimb cu universul\r
\r
5. Te iubesc profund, nu ma mai ascund\r
In mine e toamna si ma doare\r
Ce sa-ti spun acum, cad frunze pe drum\r
Te astept cu multa nerabdare`,author:{id:32,name:"Ursul Trubadur",slug:"ursul-trubadur"},author_id:32,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["G","Em","C","D"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:70,title:"Numai noi",slug:"numai-noi-70",content:`   Em           G        D\r
1. Numai noi, suntem împreună\r
   Em           G        D\r
   Numai noi sub clarul de lună\r
     G    Em      D      Em\r
   Suntem doi fericiţi în munte\r
   Tu şi eu cuplul fericirii\r
   Eu şi tu vis al împlinirii\r
   Iar în păr porţi doar flori de munte.\r
\r
     G                   D        Am   \r
  R: Vom fi singuri prin văi şi pe creste\r
     Din noi doi va rămâne o poveste\r
     G        D      B7        Em\r
     Împreună vom fi şi ne vom iubi.\r
\r
2.Numai noi, câtă poezie\r
   Numai noi, noaptea e târzie\r
   Focul doar mai trosneşte parcă\r
   Sunt al tău, nu mai sunt cuvinte\r
   Eşti a mea, ne iubim pe munte\r
   Pat de flori, şi-mpărţim o soartă\r
\r
R:\r
\r
3.Jos sunt flori, pe cer numai stele\r
   Ne iubim martore-s doar ele\r
   Adormim ca şi doi copii\r
   Numai vis sub clarul de lună\r
   Numai vis, suntem împreună\r
   Amândoi plini de bucurie.\r
\r
R:\r
\r
(interpretat si de Karma)`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Em","G","D","Am","B7"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:71,title:"Refugiul Diana",slug:"refugiul-diana-71",content:`   Em        D        Em\r
Am pornit sa recladim Diana  \r
      G     D       Em\r
Un refugiu vechi si parasit\r
    G        D          G D Em\r
Am lasat spritul si damigeana\r
          C     D       Em\r
Si spre Plaiul Foii am pornit.\r
\r
	Refren:	\r
	\r
	 Em   D    G     C          Em\r
	Mama unde esti? Bate-ma de vrei\r
              D        Em\r
	Dar vino sa ma iei !\r
	Mama unde esti? Bate-ma de vrei\r
	Dar vino sa ma iei !\r
\r
Scândura mica, scândurica lata\r
Te-am purta pana ne facem mici\r
Si echipa noastra cocosata\r
Parca-ar fi o ceata de pitici.\r
\r
Totu-i bine pana la-nserare\r
Când cu lacrimi calde ne rugam\r
O, Ceresc Parinte, îndurare!\r
Fa mai cald sa nu mai înghetam.`,author:{id:33,name:"Roza Vânturilor",slug:"roza-vanturilor"},author_id:33,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Em","D","G","C","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:72,title:"Delirul",slug:"delirul-72",content:`    Am                   Dm\r
1.Curând va fi o noapte lungă\r
          E                Am  \r
  şi fără tine-mi va fi greu\r
  Iubita mea vino la mine\r
  Te aştept să vii de Anul Nou.\r
                                      \r
      Am               Dm\r
R: Râd şi plâng şi te strig delirând\r
       G                 C\r
   E soare e ploaie e cald şi e vânt \r
         Am                  Dm   \r
   Din somn mă trezesc şi tresar speriat\r
         E                  Am  \r
   Dar nu-i nimic doar am visat.\r
\r
2.De vrei să vii curând cu munţii\r
  La marea mea cu valuri verzi\r
  Să ne jurăm credinţă pururi\r
  Să nu te pierd să nu mă pierzi.\r
\r
3.Tu nu ai timp tu nu ai suflet\r
  Nimic din tine n-ai să-mi dai\r
  Când vii şi pleci şi nu rămâne\r
  Nimic din serile de mai.\r
\r
4.Când te-am văzut ultima oară\r
  Ah, ce frumos tu m-ai privit\r
  Nu pot să uit a ta privire\r
  şi parc-o văd şi parc-o simt.\r
\r
5.şi de vei face-o nouă punte\r
  Să n-o arunci în amintiri\r
  şi lasă-mă să vin la tine\r
  Cu braţul plin de trandafiri.\r
\r
6.Curând va fi o noapte lungă\r
  şi fără tine-mi va fi greu\r
  Iubirea mea te rog revino\r
  Te-aştept să te întorci mereu.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["Am","Dm","E","G","C"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:73,title:"Ninge",slug:"ninge-73",content:`   D              G          A             D\r
1.Ninge astăzi pentru tine, muntele e alb de nea\r
   Soarele din ceruri vine doar pentru iubita mea\r
   Și călugării din schituri vor cu toţii a te vedea\r
   La cabană au venit doar pentru iubita mea.\r
\r
                   R: Când te scuturi de zăpadă\r
                       Nu ştii cât eşti de frumoasă\r
                       Ochii-ţi verzi, zăpada-i albă\r
                       Și se face cald în casă.\r
\r
2.Și zăpada de pe culme în vale s-a rostogolit\r
   Muntele e pus pe glumă de când ştie c-ai venit\r
   Acum coboară şi dorul chemat de la locul lui\r
   Tocmai de pe Vârful Omu până-n Valea Dorului.\r
\r
3.Jepii Mici ca să te vadă şi-au cumpărat ochelari\r
   şi în cea mai mare grabă i-au chemat pe Jepii Mari\r
   Nu ştiu sigur azi sau mâine pe Morar am să te sui\r
   Să ne logodim iubito sus în vârful muntelui.`,author:{id:24,name:"Cântece de munte",slug:"cantece-de-munte"},author_id:24,categories:[{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:""}],chords:["D","G","A"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:74,title:"Sculați, boieri mari!",slug:"sculati-boieri-mari-74",content:`Intro: C F C F C G C


C        G        C      F
Sculaţi, sculaţi, boieri mari,
C       G     C
Cristos s-a născut,
C        F      C       F
Sculaţi, voi, români plugari,
C       G     C
Cristos s-a născut!

Că vă vin colindători
Cristos s-a născut,
Noaptea, pe la cântători,
Cristos s-a născut.

Şi v-aduc pe Dumnezeu
Cristos s-a născut,
Să vă mântuie de rău
Cristos s-a născut.

Dumnezeu adevărat,
Cristos s-a născut,
Soare-n raze luminat
Cristos s-a născut.

El vă zice ”Să trăiți”,
Cristos s-a născut,
Într-un ”Mulţi ani fericiţi!”,
Cristos s-a născut.

Și ca pomii să-nfloriți,
Cristos s-a născut
Și ca ei să-mbătrâniți,
Cristos s-a născut.
`,author:{id:34,name:"Dida Drăgan",slug:"dida-dragan"},author_id:34,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["C","G","F"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:75,title:"O brad frumos",slug:"o-brad-frumos-75",content:`G  C    C       G  C   C
O, brad frumos, o brad frumos,
C G C F   G  G  C
Cu cetina tot verde.
C  C    C  F F  G  F  F
Tu esti copacul credincios,
F  F  F  G  G    F   C 
Ce frunza nu si-o pierde,
G  C    C       G  C   C
O, brad frumos, o brad frumos,
C G C F   G  G  C
Cu cetina tot verde.

O, brad frumos, o brad frumos,
Verdeata ta imi place.
Cand o revad sunt bucuros
Si vesel ea ma face.
O, brad frumos, o brad frumos,
Verdeata ta imi place.

O, brad frumos, o brad frumos,
Cu frunza neschimbata.
Ma mangai si ma faci voios
Si ma-ntaresti indata.
O, brad frumos, o brad frumos,
Cu frunza-ti neschimbata.`,author:{id:35,name:"Colinde",slug:"colinde"},author_id:35,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["G","C","F"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:76,title:"Florile dalbe",slug:"florile-dalbe-76",content:`Am            Dm  Am
Scoală gazdă din pătuţ
Am       G Am
Florile dalbe
Am           Dm  Am
şi ne dă un colăcuţ
          Dm  F   Am
Florile, florile dalbe

Am            Dm  Am
Că mamuca nu o făcut
Am       G Am
Florile dalbe
Am           Dm  Am
Sită rară n-o avut
          Dm  F   Am
Florile, florile dalbe
Am            Dm  Am
Păna  sită o căpătat
Am       G Am
Covata i s-o crăpat
Am            Dm  Am
L-o sfădit mama pe tata
Am       G Am
De ce s-o crăpat covata
Am            Dm  Am
Când covata o lipit
Am       G Am
Cuptioru li s-o urnit
Am            Dm  Am
Când cuptoru l-o tocmit
Am       G Am
Anul Nou o şi venit

Am           Dm   Am
Florile, florile dalbe
Am        Dm  F   Am
Florile, florile dalbe`,author:{id:35,name:"Colinde",slug:"colinde"},author_id:35,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["Am","Dm","G","F"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:77,title:"Trei păstori",slug:"trei-pastori-77",content:`2/4 & 3/4 (*)

D(2/4)D(3/4) D(2/4)
Trei pastori se intalnira
G (2/4)  D(3/4) D(2/4) 
Trei pastori se intalnira
G(2/4) D(2/4)  A7(2/4) D(2/4)
Raza soarelui, floarea soarelui
G(2/4) A7(3/4) D(2/4)
Si asa se sfatuira:

D                    D 
Haideti fratilor sa mergem
G                    D  
Haideti fratilor sa mergem
G         D         A7         D
Raza soarelui, floarea soarelui
G       A7      D
Floricele sa culegem.

D                    D 
Si sa facem o cununa
G                    D 
Si sa facem o cununa
G         D         A7         D
Raza soarelui, floarea soarelui
G       A7      D
S-ompletim cu voie buna.

D                    D 
Si s-o ducem lui Cristos
G                    D 
Si s-o ducem lui Cristos
G         D         A7         D
Raza soarelui, floarea soarelui
G       A7      D
Sa ne fie de folos.

(*) Dificultatea melodiei (dar si frumusețea ei) consta în faptul ca este un mix intre masurile 2/4 si 3/4. Am încercat sa marchez trecerile în strofa 1.`,author:{id:35,name:"Colinde",slug:"colinde"},author_id:35,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["D","G","A7","Am"],strumming:[{pattern:["D","U","U"],timeSignature:"3/4",name:"Vals"}],views:0},{id:78,title:"Am plecat să colindăm",slug:"am-plecat-sa-colindam-78",content:`G\r
Am plecat să colindăm\r
Domn, Domn, să-nălțăm!\r
D             G\r
Când boierii nu-s acasă\r
D           G\r
Domn, Domn să-nălțăm!\r
\r
G\r
Și-au plecat la vânătoare\r
Domn, Domn să-nălțăm!\r
D         G\r
Să vâneze căprioare\r
D          G\r
Domn, Domn să-nălțăm!\r
\r
G\r
Căprioare n-au vânat\r
Domn, Domn să-nălțăm\r
D              G\r
Și-au vânat un iepuraș\r
D          G\r
Domn, Domn să-nălțăm!\r
\r
G\r
Să facă din blana lui\r
Domn, Domn să-nălțăm!\r
D               G\r
Veștmânt frumos Domnului\r
D          G\r
Domn, Domn să-nălțăm!\r
`,author:{id:35,name:"Colinde",slug:"colinde"},author_id:35,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["G","D","Am"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:79,title:"Linu-i lin",slug:"linu-i-lin-79",content:`Capo III\r
\r
\r
Intro: D G / D G A / D\r
\r
\r
D                  G\r
Linu-i lin şi iară lin,\r
                  D\r
Bate vântul cât e lin,    \r
A                 D\r
Frunză verde de mălin,\r
                   G\r
Linu-i lin şi iară lin,\r
                  D\r
Bate vântul cât e lin,    \r
A                 D\r
Frunză verde de mălin.\r
\r
\r
         A      D     A\r
Sculaţi, gazde, nu durmiţi,\r
D       A      D     A\r
Că nu-i vremea de durmit,\r
D                  G\r
Linu-i lin şi iară lin,\r
                  D\r
Bate vântul cât e lin,    \r
A                 D\r
Frunză verde de mălin,\r
                   G\r
Linu-i lin şi iară lin,\r
                  D\r
Bate vântul cât e lin,    \r
A                 D\r
Frunză verde de mălin.\r
\r
\r
Că-i vremea de săsculat,\r
Casăle de aşăzat,\r
Linu-i lin şi iară lin,\r
Bate vântul cât e lin,    \r
Frunză verde de mălin,\r
Linu-i lin şi iară lin,\r
Bate vântul cât e lin,    \r
Frunză verde de mălin.\r
\r
\r
Pă la uşă cu brânduşă,\r
La fereşti cu flori domneşti,\r
Linu-i lin şi iară lin,\r
Bate vântul cât e lin,    \r
Frunză verde de mălin,\r
Linu-i lin şi iară lin,\r
Bate vântul cât e lin,    \r
Frunză verde de mălin.\r
\r
\r
Și colinda nu-i mai multă,\r
Să trăia cine-o ascultă,\r
Linu-i lin şi iară lin,\r
Bate vântul cât e lin,    \r
Frunză verde de mălin,\r
Linu-i lin şi iară lin,\r
Bate vântul cât e lin,    \r
Frunză verde de mălin.\r
`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["D","G","A"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:80,title:"Flori de măr",slug:"flori-de-mar-80",content:`Intro: G D G\r
\r
\r
G                                        D\r
Am venit aici, la voi, am venit aici, la voi,\r
                G                    D   G\r
Cum e datina la noi, cum e datina la noi.\r
\r
\r
G                          D                 G\r
Sculați gazde, nu dormiți, vremea e să vă treziți,\r
                           D                 G\r
Sculați gazde, nu dormiți, vremea e să vă treziți,\r
\r
Casa să vi-o aranjați, flori de măr,\r
                        D        G\r
Masa să vi-o încărcați, flori de măr,\r
\r
Casa să vi-o aranjați, flori de măr,\r
                        D        G\r
Masa să vi-o încărcați, flori de măr.\r
\r
\r
Noi umblăm a colinda, pe la casa altuia,\r
Noi umblăm a colinda, pe la casa altuia,\r
Să trăiți, să-ntineriți, flori de măr,\r
În mulți ani să-mbătrâniți, flori de măr,\r
Să trăiți, să-ntineriți, flori de măr,\r
În mulți ani să-mbătrâniți, flori de măr.\r
\r
\r
Și la anul om veni, numai dacă ni-ți pofti\r
Și la anul om veni, numai dacă ni-ți pofti\r
Și mai multe vom ura, flori de măr,\r
Un cocuț dacă ni-ți da, flori de măr\r
Și mai multe vom ura, flori de măr,\r
Un cocuț dacă ni-ți da, flori de măr.\r
\r
\r
G                                             D                          \r
Și colinda nu-i mai multă și colinda nu-i mai multă,\r
                  G                         D                   \r
Să trăiască cine-ascultă, să trăiască cine-ascultă\r
G                                  D             \r
Și colinda-i atâta și colinda-i atâta,\r
                   G                      D  G                                         \r
Cine-ascultă să trăia, cine-ascultă să trăia.\r
`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["G","D","Am"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:81,title:"Deschide usa crestine",slug:"deschide-usa-crestine-81",content:`S. Hrusca totdeauna canta varianta asta. Succes\r
\r
E            A\r
Deschide usa crestine\r
E            B7\r
Deschide usa crestine\r
A           E\r
Ca venim si noi la tine\r
B7                 E\r
La multi ani multi ani cu bine\r
\r
Noi la Viflaim am fost\r
Noi la Viflaim am fost\r
Unde s-a nascut Hristos\r
La multi ani multi ani cu bine\r
\r
Si am vazut si pe-a sa mama\r
Si am vazut si pe-a sa mama\r
Pe care Maria o cheama \r
La multi ani multi ani cu bine\r
\r
Cum umbla din casa-n casa\r
Cum umbla din casa-n casa\r
Ca pe fiul sau sa-l nasca \r
La multi ani multi ani cu bine\r
\r
Umbla-n jos si umbla-n sus\r
Umbla-n jos si umbla-n sus\r
Ca sa-l nasca pe Iisus\r
La multi ani multi ani cu bine\r
\r
Umbla-n sus si umbla-n jos\r
Umbla-n sus si umbla-n jos\r
Ca sa-l nasca pe Hristos\r
La multi ani multi ani cu bine\r
\r
Tot umbland gasi apoi\r
Tot umbland gasi apoi\r
Un staul mandru de oi \r
La multi ani multi ani cu bine\r
\r
Ingerii din cer coboara\r
Ingerii din cer coboara\r
Staulul de-l inconjoara \r
La multi ani multi ani cu bine\r
\r
Ingerii cu flori in mana\r
Ingerii cu flori in mana \r
Impletesc mandra cununa\r
La multi ani multi ani cu bine\r
\r
Pa cununa-i scris frumos\r
Pa cununa-i scris frumos\r
Astazi s-a nascut Hristos\r
La multi ani multi ani cu bine\r
\r
Pe cununa-i scris asa\r
Pe cununa-i scris asa\r
Ca s-a nascut Mesia\r
La multi ani multi ani cu bine\r
\r
Care cu puterea sa\r
Care cu puterea sa\r
Va imparati lumea \r
La multi ani multi ani cu bine`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["E","A","B7"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:82,title:"Măruț mărgăritar",slug:"marut-margaritar-82",content:`Capo III\r
\r
\r
Intro: D   x8\r
\r
\r
D\r
Noi umblăm să colindăm,\r
\r
Măruț mărgăritar,\r
                   A\r
Noi umblăm să colindăm\r
D\r
Pă la curți de boieri mari,\r
\r
Măruț mărgăritar,\r
                      A\r
Pă la curți de boieri mari,\r
D\r
Da’ boierii nu-s acas’,\r
\r
Măruț mărgăritar,\r
                  A\r
Da’ boierii nu-s acasă,\r
D\r
Că-s plecați la vânătoare,\r
\r
Măruț mărgăritar,\r
                    A\r
Că-s plecați la vânătoare,\r
D\r
Să vâneze căprioare,\r
\r
Măruț mărgăritar,\r
               A\r
Să vâneze căprioare,\r
D\r
Căprioare n-o’ aflat\r
\r
Măruț mărgăritar,\r
                A\r
Căprioare n-o’ aflat,\r
D\r
Numa-un pui de iepuraș,\r
\r
Măruț mărgăritar,\r
                   A\r
Numa-un pui de iepuraș,\r
 D\r
’Tinsă pușca să-l împuște,\r
\r
Măruț mărgăritar\r
                 A\r
Și săjata să-l săjete,\r
D\r
Hop-hop-hop, nu mă țîntire,\r
\r
Măruț mărgăritar,\r
                    A\r
Că io nu-s ce par a fire,\r
D\r
Că-s Ionu’, Sânt’ Ion,\r
\r
Măruț mărgăritar,\r
                   A\r
Că-s Ionu,’ Sânt’ Ionu’,\r
D\r
Nănașu’ lu’ Dumnezău,\r
\r
Măruț mărgăritar,\r
                 A\r
Nănașu’ lu’ Dumnezău\r
D\r
Și m-o blăstămat Maica,\r
\r
Măruț mărgăritar\r
                    A\r
Și m-o blăstămat Maica\r
D\r
Să fiu fiară de pădure,\r
\r
Măruț mărgăritar,\r
                  A\r
Să fiu fiară de pădure,\r
D\r
Nouă ani și nouă luni,\r
\r
Măruț mărgăritar\r
                 A\r
Și p-atâtea săptămâni,\r
D\r
Dac-acelea ’plini-le-oi\r
\r
Măruț mărgăritar,\r
                   A\r
Jos, la țară, lăsa-m-oi,\r
D\r
Biserici deschide-mi-oi,\r
\r
Măruț mărgăritar,\r
                   A\r
Slujbe mândre face-voi,\r
D\r
Să fii, gazdă, sănătoasă,\r
\r
Măruț mărgăritar,\r
                    A\r
C-ai primit colinda noastră\r
D\r
Și la anu’ când vinim,\r
\r
Măruț mărgăritar,\r
                   A\r
Mai bogați să vă găsîm\r
D\r
Și la anu’ când vinim,\r
\r
Măruț mărgăritar,\r
                   A\r
Mai bogați să vă găsîm.\r
\r
\r
Outro: D   x5`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["D","A"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:83,title:"Steaua sus răsare",slug:"steaua-sus-rasare-83",content:`No Capo!!!\r
\r
Am\r
Steaua sus răsare \r
Ca o taina mare\r
Dm             Am\r
Steaua strălucește\r
E              Am\r
Și lumii vestește\r
E              Am \r
Și lumii vestește \r
\r
Ca astăzi Curata \r
Preanevinovata \r
Fecioara Maria \r
Naște pe Mesia \r
Naște pe Mesia \r
\r
Magii cum zăriră \r
Steaua și porniră\r
Mergând după rază\r
Pe Hristos sa-l vază\r
Pe Hristos sa-l vază \r
\r
Și dacă porniră \r
Îndată-L găsiră\r
La Dânsul intrară\r
Și se închinară \r
Și se închinară \r
\r
Cu daruri gătite \r
Lui Hristos menite \r
Ducând fiecare \r
Bucurie mare\r
Bucurie mare \r
\r
Care bucurie \r
Și aici sa fie \r
De la tinerețe \r
Pan-la bătrânețe \r
Pan-la bătrânețe`,author:{id:35,name:"Colinde",slug:"colinde"},author_id:35,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["Am","Dm","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:84,title:"Scoala gazda din patut",slug:"scoala-gazda-din-patut-84",content:`Intro: Am E\r
\r
j  s j s s   j s j s s  <---- Bataia este aceeasi mereu.\r
\r
Am            G   Am        \r
Scoala gazda din patut\r
  Am    G  Am\r
Florile dalbe,\r
 Am         G   Am\r
Si ne da un colacut\r
 G       E       Am\r
Florile ,florile dalbe.\r
Am         G   Am                    \r
Ca mamuca n-o facut\r
  Am    G  Am                    \r
Florile dalbe,\r
Am         G   Am                    \r
Sita rara n-o avut\r
 G       E       Am                   \r
Florile ,florile dalbe.`,author:{id:35,name:"Colinde",slug:"colinde"},author_id:35,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["Am","G","E"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:85,title:"Flori de mar",slug:"flori-de-mar-85",content:`G                D                     G\r
Am venit aici la voi, am venit aici la voi\r
                D                    G\r
Cum e datina la noi, cum e datina la noi\r
G             D7    G     C           D7    G\r
Sculati gazde nu durmiti, vremea e sa va treziti\r
G             D7    G     C           D7    G\r
Sculati gazde nu durmiti, vremea e sa va treziti\r
G                D7    C     D7 G\r
Casa sa vi-o maturati, flori de mar\r
G                 D7    C     D7 G\r
Masa sa vi-o încarcati, flori de mar.\r
G                D7    C     D7 G\r
Casa sa vi-o maturati, flori de mar\r
G                 D7    C     D7 G\r
Masa sa vi-o încarcati, flori de mar.\r
\r
G            D7   G   C           D7   G\r
Noi umblam a colinda, di l-o casa la alta\r
G            D7   G   C           D7   G\r
Noi umblam a colinda, di l-o casa la alta\r
G                  D7   C     D7 G\r
Si venim cu Domnul bun, flori de mar\r
G               D7    C     D7 G\r
Ca e sara de Craciun, flori de mar.\r
G                  D7   C     D7 G\r
Si venim cu Domnul bun, flori de mar\r
G               D7    C     D7 G\r
Ca e sara de Craciun, flori de mar.\r
\r
G          D7   G   C          D7    G\r
Si la anul om zini, numai daca ni-ti pofti\r
G          D7   G   C          D7    G\r
Si la anul om zini, numai daca ni-ti pofti\r
G                D7   C     D7 G\r
Si mai multe vom ura, flori de mar\r
G                   D7  C     D7 G\r
Un pocut daca ni-ti da, flori de mar\r
G                D7   C     D7 G\r
Si mai multe vom ura, flori de mar\r
G                   D7  C     D7 G\r
Un pocut daca ni-ti da, flori de mar\r
\r
G                   D                          G\r
Si colinda nu-i mai multa, si colinda nu-i mai multa\r
                   D                         G\r
Sa traiasca cine-asculta, sa traiasca cine-asculta\r
G               D                   G\r
Si colinda-i atâta, si colinda-i atâta\r
                   D                      G\r
Cine-asculta sa traia, cine-asculta sa traia.`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["G","D","D7","C","Am"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:86,title:"Florile dalbe",slug:"florile-dalbe-86",content:`Intro: Em Am Em\r
\r
Em           Am         Em      Am\r
Scoala gazda din patut, florile dalbe\r
Em          Am       Em       Am      Em\r
Si ne da un colacut, florile, florile dalbe.\r
\r
Em        Am         Em      Am\r
Ca mamuca n-o facut, florile dalbe\r
Em       Am        Em       Am      Em\r
Sita rara n-o avut, florile, florile dalbe.\r
\r
Em             Am       Em      Am\r
Pe când sât' o capatat, florile dalbe\r
Em       Am          Em       Am      Em\r
Covata i s-o crepat, florile, florile dalbe.\r
\r
Em         Am            Em      Am\r
L-o sfadit mama pe tata, florile dalbe\r
Em           Am          Em      Am      Em\r
Di ce s-o crepat covata, florile florile dalbe.\r
\r
Em          Am       Em      Am\r
Când covata o lipit, florile dalbe\r
Em           Am         Em       Am      Em\r
Cuptorul l-i s-o urnit, florile, florile dalbe.\r
\r
Em            Am        Em      Am\r
Când cuptorul a tomnit, florile dalbe\r
Em         Am        Em       Am      Em\r
Anul nou a si venit, florile, florile dalbe.`,author:{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca"},author_id:10,categories:[{id:15,name:"Colinde",slug:"colinde",description:""}],chords:["Em","Am"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:87,title:"O lume minunată",slug:"o-lume-minunata-87",content:`Intro: C   x4


              C
      Refren: E-o lume minunată, în care veți găsi
                      G
              Numai copii,

              O lume cu mult soare și mii de jucării
              G7       C
              Pentru copii.


              În lumea cu povești și flori veți întâlni
              Numai copii
              Și-o lume-a inocenței, păstrați-o, orice ar fi,
              Pentru copii!


C
Ieri am fost și noi copii,
    D
Dar timpul ne-a schimbat,
   G
În viață am pornit și vise-am împlinit
 C               G
Așa, cum ne-am dorit!


C
Gânduri bune câte-am strâns
   D
Și tot ce-am învățat,
  G
Copiilor să dăm iubirea ce-o purtăm,
     C            G
Ce-i bun să le arătăm!


      Refren: E-o lume minunată, în care veți găsi
              Numai copii,
              O lume cu mult soare și mii de jucării
              Pentru copii.


              În lumea cu povești și flori veți întâlni
              Numai copii
              Și-o lume-a inocenței, păstrați-o, orice ar fi,
              Pentru copii!


Ieri am fost și noi copii,
Dar timpul ne-a schimbat,
În viață am pornit și vise-am împlinit
Așa, cum ne-am dorit!


Gânduri bune câte-am strâns
Și tot ce-am învățat,
Copiilor să dăm iubirea ce-o purtăm,
Ce-i bun să le arătăm!


            E7
Interludiu: Ce zâmbet poate fi 
                Am
            Mai sincer, mai curat,
            D7
            Ce ochi știu a vorbi 
             G
            Atât de-adevărat?


      Refren: E-o lume minunată în care poți găsi
              Numai copii,
              O lume cu mult soare și mii de jucării
              Pentru copii.


              În lumea cu povești și flori veți întâlni
              Numai copii
              Și-o lume-a inocenței, păstrați-o, orice ar fi,
              Pentru copii!


Interludiu: C# G# G#7 C#


              C#
      Refren: La, la, la, la, la, la, la, la, la, la, la, la, la, 
                          G#
              La, la, la, la,

              La, la, la, la, la, la, la, la, la, la, la, la, la,
              G#7         C#
              La, la, la, la.


              E-o lume minunată, în care veți găsi
              Numai copii,
              O lume cu mult soare și mii de jucării
              Pentru copii.


              În lumea cu povești și flori veți întâlni
              Numai copii
              Și-o lume-a inocenței, păstrați-o, orice ar fi,
              Pentru copii!`,author:{id:36,name:"Mihai Constantinescu",slug:"mihai-constantinescu"},author_id:36,categories:[{id:12,name:"Cântece pentru copii",slug:"cantece-pentru-copii",description:""},{id:16,name:"Muzică ușoară",slug:"muzica-usoara",description:""}],chords:["C","G","G7","D","E7","Am","D7","G#7","C#","G#"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:88,title:"Mă Dusei",slug:"ma-dusei-88",content:`Capo 5

Am7 C Gsus4 D7sus4

Am7   C    Gsus4    D7sus4
Mă dusei,        și mă dusei să

Am7       C    Gsus4    D7sus4
trec la Olt

Am7   C    Gsus4    D7sus4
Mă dusei,        și mă dusei să

Am7       C    Gsus4    D7sus4
trec la Olt

F         G         Am           C
Cu a mea, cu a mea, cu a mea mândră cu tot
F            G                 Am
Tra-la-la-la-la-la-la-la-la-la-la
F         G         Am           C
Cu a mea, cu a mea, cu a mea mândră cu tot
F            G                 Am
Tra-la-la-la-la-la-la-la-la-la-la

(și tot așa)

Și podarul, și podaru-mi cere un zlot
Și podarul, și podaru-mi cere un zlot
Și pe-a mea, și pe-a mea, și pe-a mea mândră de tot
Tra-la-la-la-la-la-la-la-la-la-la
Și pe-a mea, și pe-a mea, și pe-a mea mândră de tot
Tra-la-la-la-la-la-la-la-la-la-la

Dar decât, dar decât să-i dau un zlot
Dar decât, dar decât să-i dau un zlot
Mai bine, mai bine, mai bine îl trec înot
Tra-la-la-la-la-la-la-la-la-la-la
Mai bine, mai bine, mai bine trec Oltu' înot
Tra-la-la-la-la-la-la-la-la-la-la

Unde-o fi, și unde-o fi Oltul mai mare
Unde-o fi, și unde-o fi Oltul mai mare
M-o trece, m-o trece, m-o trece mândra-n spinare
Tra-la-la-la-la-la-la-la-la-la-la
M-o trece, m-o trece, m-o trece mândra-n spinare
Tra-la-la-la-la-la-la-la-la-la-la

Și unde-o fi, și unde-o fi mai mititel
Și unde-o fi, și unde-o fi mai mititel
O trec eu, o trec eu, o trec eu că-s voinicel
Tra-la-la-la-la-la-la-la-la-la-la
O trec eu, o trec eu, o trec eu că-s voinicel
Tra-la-la-la-la-la-la-la-la-la-la

Cu a mea, cu a mea, cu a mea mândră cu tot
Tra-la-la-la-la-la-la-la-la-la-la
Cu a mea, cu a mea, cu a mea mândră cu tot
Tra-la-la-la-la-la-la-la-la-la-la`,author:{id:37,name:"Bulz Brotherz",slug:"bulz-brotherz"},author_id:37,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""},{id:18,name:"Rock",slug:"rock",description:""}],chords:["F","G","Am","C","Am7","Gsus4","D7sus4"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:89,title:"Cântă mahalaua",slug:"canta-mahalaua-89",content:`Intro: Dm\r
\r
\r
Dm\r
Trage-te încoa, vreau să-ți spun ceva:\r
   A#\r
Distracția și vinul sunt mai bune-n mahala,\r
Dm \r
Sufletul deschis, dansul mai încins\r
   A#          A\r
Și cheful iese mult mai aprins,\r
Dm\r
Noaptea mai cu viață și mai cu dulceață, \r
    A#\r
Mai plină de păcate până-n zori de dimineață,\r
  Dm\r
Femeia mai femeie, plăcerea mai plăcere,\r
    A#            A\r
Iar dragostea mai fără perdele! \r
\r
\r
              Dm              Gm\r
      Refren: Cântă mahalaua, tremură podeaua, \r
              A#  A         Dm   A\r
              E paranghelie grea, \r
              Dm               Gm\r
              Urcă-te pe masă, viața-i mai frumoasă, \r
              A#     A            Dm A\r
              Când petreci la mahala! \r
\r
\r
Dacă nu mă crezi, hai, vino și-ai să vezi, \r
La orice colț de stradă o să dai peste dovezi:\r
Petreceri duium, grătar pe cărbuni\r
Și lăutarii cântă nebuni, \r
Haide, că poți, fă cinste la toți, \r
Decât să-mbătrânești cu averea la chiloți,\r
Bea-o cu noi, că banii-s nasoi,\r
Când ții de ei, te bagă-n noroi! \r
\r
\r
      Refren: Cântă mahalaua, tremură podeaua, \r
              E paranghelie grea, \r
              Urcă-te pe masă, viața-i mai frumoasă, \r
              Când petreci la mahala! \r
\r
\r
Interludiu: Dm\r
\r
\r
Simți că iei foc, nu mai sta pe loc,\r
Bate din picioare și prinde-te la joc, \r
Orice ar fi, nu te opri,\r
Nici dacă se crapă de zi,\r
Simte-te bine, fără de rușine\r
Și lasă veselia să intre în tine,\r
Nu te lăsa, ține-o tot așa,\r
Că lumea întreagă-i o mahala. \r
\r
\r
              Dm              Gm\r
      Refren: Cântă mahalaua, tremură podeaua, \r
              A#  A         Dm   A\r
              E paranghelie grea, \r
              Dm               Gm\r
              Urcă-te pe masă, viața-i mai frumoasă, \r
              A#     A            Dm A\r
              Când petreci la mahala! \r
\r
\r
              Dm              Gm\r
              Cântă mahalaua, tremură podeaua, \r
              A#  A         Dm   A\r
              E paranghelie grea, \r
              Dm               Gm\r
              Urcă-te pe masă, viața-i mai frumoasă, \r
              A#     A            Dm \r
              Când petreci la mahala! \r
\r
`,author:{id:38,name:"White Mahala",slug:"white-mahala"},author_id:38,categories:[{id:19,name:"Experimental",slug:"experimental",description:""},{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""}],chords:["Dm","A","Gm","A#","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:90,title:"Atat de frageda",slug:"atat-de-frageda-90",content:`Intro:\r
\r
E A E B \r
E A E B E\r
\r
N.C.                E      A E\r
Abia atingi covorul moale,\r
                  B     \r
Matasa suna sub picior,\r
A                        E   A\r
Si de la crestet pâna-n poale\r
 B                 E\r
Plutesti ca visul de usor.\r
A                        E    A\r
Si de la crestet pâna-n poale\r
 B                 E       A E B\r
Plutesti ca visul de usor.\r
\r
Din încretirea lungii rochii\r
Rasai ca marmura în loc \r
S-atârna sufletu-mi de ochii\r
Cei plini de patimi si noroc.\r
\r
        E\r
O, vis ferice de iubire,\r
         B        \r
Mireasa blânda din povesti,\r
         E\r
Nu mai zâmbi! A ta zâmbire\r
          G#\r
Mi-arata cât de dulce esti,\r
               A\r
Cum poti cu-a farmecului noapte\r
             B\r
Sa-ntuneci ochii mei pe veci,\r
            A\r
Cu-a gurii tale calde soapte,\r
        B\r
Cu-mbratisari de brate reci.\r
\r
Deodata trece-o cugetare,\r
Un văl pe ochii tai fierbinti:\r
E-ntunecoasa renuntare,\r
E umbra dulcilor dorinti.\r
\r
Te duci, am înteles prea bine\r
Sa nu ma tin de pasul tau,\r
Pierduta vecinic pentru mine,\r
Mireasa sufletului meu!\r
Ca te-am privit e a mea vina\r
Si vecinic n-o sa mi-o mai iert,\r
Spasi-voi visul de lumina\r
Tinzându-mi dreapta în deşert.\r
\r
S-o sa-mi rasai ca o icoana\r
A pururi verginei Marii,\r
Pe fruntea ta purtând coroana –\r
Unde te duci? Când o sa vii?\r
\r
     A           E\r
Unde te duci? Când o sa vii?\r
     A            E\r
Unde te duci? Când o sa vii?`,author:{id:39,name:"Mondial",slug:"mondial"},author_id:39,categories:[{id:16,name:"Muzică ușoară",slug:"muzica-usoara",description:""},{id:20,name:"Eminescu",slug:"eminescu",description:""}],chords:["E","A","B","G#"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:91,title:"Trenule, mașină mică",slug:"trenule-masina-mica-91",content:`Intro: G D G / G Am B7 Em\r
\r
\r
Em\r
Foaie verde și-o sipică,\r
\r
Foaie verde și-o sipică,\r
G\r
Trenule, mașină mică,\r
\r
Unde-l duci pe Ionică?\r
D                     G\r
Mărioara lui nenicu’, măi-măi,\r
\r
Trenule, mașină mică,\r
Am\r
Unde-l duci pe Ionică?\r
B7                    Em\r
Mărioara lui nenicu’, măi-măi!\r
\r
\r
Tu mi-l duci și-l ocolești,\r
Tu mi-l duci și-l ocolești\r
Din Craiova la Pitești\r
Și-l dai jos la București,\r
Mărioara lui nenicu’, măi-măi,\r
Din Craiova la Pitești\r
Și-l dai jos la București,\r
Mărioara lui nenicu’, măi-măi!\r
\r
\r
Interludiu: G D G / G Am B7 Em\r
\r
\r
Trenule, n-ai avea parte,\r
Trenule, n-ai avea parte\r
De șuruburile toate\r
Și de șina de sub roate,\r
Mărioara lui nenicu’, măi-măi,\r
C-ai dus pe neica departe,\r
C-ai dus pe neica departe,\r
Mărioara lui nenicu’, măi-măi!\r
\r
\r
Trenule, de când l-ai dus,\r
Trenule, de când l-ai dus,\r
Eu întruna am tot plâns,\r
Eu întruna am tot plâns,\r
Mărioara lui nenicu’, măi-măi,\r
Trenule, de când l-ai luat,\r
Eu întruna am oftat,\r
Mărioara lui nenicu’, măi-măi!\r
\r
\r
Interludiu: G D G / G Am B7 Em\r
\r
\r
Și iar verde de-o sipică,\r
Trenule, mașină mică,\r
Unde-l duci pe Ionică,\r
Unde-l duci pe Ionică?\r
Mărioara lui nenicu’, măi-măi,\r
Că-l tot duci și-l ocolești\r
Din Craiova la Pitești\r
Mărioara lui nenicu’, măi-măi!\r
\r
\r
Că-l tot duci și-l ocolești\r
Din Craiova la Pitești,\r
Mărioara lui nenicu’, măi-măi,\r
Și-l dai jos la București\r
Și-l dai jos la București\r
Mărioara lui nenicu’, măi-măi!`,author:{id:40,name:"Maria Tănase",slug:"maria-tanase"},author_id:40,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""},{id:2,name:"Lăutărești",slug:"lautaresti",description:""}],chords:["Em","G","D","Am","B7"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:92,title:"Când s-o-mpărțit norocu'",slug:"cand-s-o-mpartit-norocu-92",content:`(de pe albumul "Cântece din Maramureș")\r
\r
În original, Ducu Bertzi cântă această melodie cu capodastru pe III\r
\r
Am                E        Am  G\r
Măicuța când m-o făcut, măi dorule\r
C                  G\r
Măicuța când m-o făcut\r
Am                  Dm\r
Foc în vatră n-o avut\r
Am                    E      Am\r
Foc în vatră n-o avut, măi dorule\r
\r
So sculat și-o făcut foc, măi dorule\r
So sculat și-o făcut foc\r
Și mi-o ars al meu năroc\r
Și mi-o ars al meu năroc, măi dorule\r
\r
Aşa-mi vine câteodată, dorule\r
Asa-mi vine câteodată\r
Să dau cu cuţitu-n piatră\r
Să dau cu cuţitu-n piatră, dorule\r
\r
Din piatră să iasă foc, măi dorule\r
Din piatră să iasă foc\r
Dacă-n viaţă n-am noroc\r
Dacă-n viaţă n-am noroc, măi dorule\r
\r
Când s-o-mpărţit norocu, măi dorule\r
Când s-o-mpărţit norocu\r
Fost-am eu dus la lucru\r
Fost-am eu dus la lucru, măi dorule\r
\r
Și la toţi le-o dat cu carul, dorule\r
Și la toţi le-o dat cu carul\r
Numai mie cu păharul\r
Numai mie cu păharul, dorule\r
\r
Nici acela n-o fost plin, măi dorule\r
Nici acela n-o fost plin\r
Jumătate-o fost venin\r
Jumătate-o fost venin, măi dorule\r
\r
Nici acela n-o fost ras, măi dorule\r
Nici acela n-o fost ras\r
Jumătate-o fost năcaz\r
Jumătate-o fost năcaz, măi dorule\r
\r
Nalt îi ceriu şi senin, măi dorule\r
Nalt îi ceriu şi senin\r
Pe-a me parte norii vin\r
Pe-a me parte norii vin, măi dorule\r
\r
Nalt îi ceriu şi-nstelat, măi dorule\r
Nalt îi ceriu şi-nstelat\r
Pe-a me parte norii bat\r
Pe-a me parte norii bat, măi dorule\r
\r
Și-asa-mi vine câte-un gând, măi dorule\r
Și-asa-mi vine câte-un gând\r
Să plec pe păduri cântând\r
Să plec pe păduri cântând, măi dorule`,author:{id:19,name:"Ducu Bertzi",slug:"ducu-bertzi"},author_id:19,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""}],chords:["Am","E","G","C","Dm"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:93,title:"Sanie cu zurgălăi",slug:"sanie-cu-zurgalai-93",content:`Dm\r
Sanie cu zurgălăi,\r
        E7             A   D7\r
Frumoși sunt căluții tăi,\r
Gm       \r
Dar mai frumoși sunt ai mei,\r
C\r
Că le dau apă cu mei\r
F            C        F    D7\r
Și zboară ca niște zmei,\r
Gm\r
Mai frumoasă-i mândra mea,\r
Eb\r
Diseară mă duc la ea,\r
Edim     A      Dm    D7 (pentru a intra in returnela)\r
Sanie cu zurgălăi.\r
\r
De-o vrea mândra, de n-o vrea\r
Să-mi deschidă portița,\r
Diseară mă duc la ea,\r
Obosit cum oi putea,\r
Sanie cu zurgălăi,\r
Obosit și plin de apă,\r
Mă duc la ea că mi-e dragă,\r
Sanie cu zurgălăi.\r
\r
Săniuță, du-mă iară\r
Unde-am fost și-alaltăseară,\r
Sanie cu zurgălăi,\r
Du-mă la mândruța mea\r
Să-i mai sărut gurița,\r
Sanie cu zurgălăi.\r
\r
Că e dulce gurița,\r
Nu mă mai satur de ea,\r
Ca de vin dulce toamna\r
Și de somn primăvara,\r
Sanie cu zurgălăi,\r
Nu mă mai satur de ea,\r
Ca de vin dulce toamna,\r
Sanie cu zurgălăi.`,author:{id:41,name:"Maria Ciobanu",slug:"maria-ciobanu"},author_id:41,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""}],chords:["Dm","E7","A","D7","Gm","C","F","Eb","Edim"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:94,title:"Constantine, Constantine",slug:"constantine-constantine-94",content:`Intro (x2): Dm      Gm / Dm      Dm    \r
            \r
 Dm           A        Dm\r
 Constantine, Constantine\r
 Dm        A        Dm\r
 Mă mir şi mă uit la tine\r
 Gm            Dm\r
 Ziua, noaptea prin pădure\r
 Gm            A     Dm\r
 Plin de rouă, ca un câine \r
 Dm\r
 Şi dacă mă uit mai bine\r
 Constantine, Constantine\r
 Gm         A         Dm\r
 Neagră-i cămaşa pe tine.\r
\r
    Refren (x2): Dm            Gm\r
                 La...............la\r
                 Dm\r
                 La...............la.\r
\r
 Mărioară, Mărioară\r
 Ia o tale şi mi-o spală\r
 Cu săpun de tămâioară\r
 S-o usuci în sân desară\r
 Şi pentru atâta lucru\r
 Mărioară, Mărioară\r
 Nu ţi-ar mai putrezi trupu’.\r
\r
 A cui eşti, Mărie, dragă?\r
 A lui cu mustaţa neagră\r
 Ăl mai mare vânător\r
 M-a prins noaptea la izvor\r
 Nu mi-e ciudă că mă prinse\r
 Constantine, Constantine\r
 Dar mi-e ciudă că mă-nchise.\r
\r
 Mărie, privighetoare\r
 Ce cânţi noaptea pe răcoare\r
 Osândi-te-ar şi te-ar bate\r
 Pernioara de-astă noapte\r
 Căpătâiul de la spate\r
 Mărioară, Mărioară\r
 Şi vorbele voastre toate.\r
\r
 Când eu te-aşteptam pe-afară,\r
 Mărioară, Mărioară\r
 Cântecel de primăvară.\r
\r
 Nota:dupa fiecare strofa-refren(x2)+intro(x2).`,author:{id:42,name:"Floarea Calotă",slug:"floarea-calota"},author_id:42,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""}],chords:["Dm","A","Gm"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:95,title:"Asa beau oamenii buni",slug:"asa-beau-oamenii-buni-95",content:`C           G\r
Aşa beau oamenii buni\r
F          G\r
Aşa beau oamenii buni\r
F          C\r
De sâmbăta până luni\r
C      G   C\r
De sambata pana luni.\r
\r
Aşa beau oamenii fraţi\r
Aşa beau oamenii fraţi\r
De sâmbătă până marţi\r
De sâmbătă până marţi.\r
\r
Aşa beau oameni cu cecuri\r
Aşa beau oameni cu cecuri\r
De sâmbătă până miercuri\r
De sâmbătă până miercuri.\r
\r
Aşa beau oameni ca noi\r
Aşa beau oameni ca noi\r
De sâmbătă până joi\r
De sâmbătă până joi.\r
\r
Aşa beau oamenii tineri\r
Aşa beau oamenii tineri\r
De sâmbătă până vineri\r
De sâmbătă până vineri.\r
\r
C-aşa beau şi eu şi tata\r
C-aşa beau şi eu şi tata\r
Dintr-o sâmbătă intr-alta\r
Dintr-o sâmbătă intr-alta.\r
\r
De n-ar fi horinca-n sat\r
De n-ar fi horinca-n sat\r
Niciodată n-aş fi bat\r
Niciodată n-aş fi bat.\r
\r
Dar aşa horincă este\r
Dar aşa horincă este\r
Şi-s la lume de poveste\r
Şi-s la lume de poveste.\r
\r
Ca mă povestesc in sat\r
Ca mă povestesc in sat\r
C-am băut si iară-s bat\r
C-am băut si iară-s bat.\r
\r
\r
Pe toate strofele sunt aceleasi acorduri, acordurile nu sunt puse de mine, eu doar am facut rost de ele.\r
Este transpusa in C(DO), originalul de la Fratii Petreus e in A(LA).`,author:{id:43,name:"Frații Petreuș",slug:"fratii-petreus"},author_id:43,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""}],chords:["C","G","F"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:96,title:"Dar-ar naiba-n tine, dragoste",slug:"dar-ar-naiba-n-tine-dragoste-96",content:`C                      Dm\r
Dar-ar naiba-n tine dragoste!\r
G                         C    (merge pe coarda la trecerea do - si la)\r
Ce te tii mereu numai de mine?\r
Am                       Dm\r
Tu esti pentru mine-o pacoste\r
G                          c\r
Si nu pot ca sa mai scap de tine.\r
\r
c                          Dm\r
Ai venit cand nici nu ma gandeam\r
G                           c\r
Si-ai aprins in suflet valvataie,  (la: do - si - la)\r
Am                           Dm        \r
Nu mananc si noaptea somn nu am    (aici merge o trecere cu Em - F - G)\r
G                        D\r
Pentru tine, dragoste balaie.\r
\r
Te-ai asezat la inimioara\r
Si ai facut ca sa ma doara.\r
Mult mi-e necaz si mi-e rusine\r
Dar-ar naiba dragoste in tine!\r
\r
Fir-ai tu sa fii de dragoste!\r
Si mai rau sa te blestem imi vine.\r
Cand mai sunt atatea suflete\r
Cum de ma gasisi tocmai pe mine?\r
Sunt atatea alte fete-n sat\r
Mandre, frumoase din cale-afara,\r
Tocmai peste mine tu ai dat\r
Dragoste sa fii mereu de-ocara!\r
\r
Glumesc baietii si-au dreptate,\r
Iar fetele imi rad in spate.\r
Mult mi-e necaz si mi-e rusine\r
Dar-ar naiba dragoste in tine!\r
In drumul meu a fost odata\r
O dragoste nevinovata.\r
De-atunci oftez si nu mi-e bine\r
Dar-ar naiba dragoste in tïne.`,author:{id:44,name:"Ileana Sărăroiu",slug:"ileana-sararoiu"},author_id:44,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""}],chords:["C","Dm","Am","G","D","Em","F"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:97,title:"Pusca si cureaua lata",slug:"pusca-si-cureaua-lata-97",content:`D    F#           Bm D7\r
Cand eram tanar fecior,\r
G     A7     D  F#\r
Eram fala muntilor,\r
Bm     B     Em  E\r
Umblam ziua la vanat\r
A          A7        D\r
Prin codru verde de brad...\r
\r
D      E          A D7\r
Pusca si cureaua lata...\r
G     A7      D    F#\r
Ce barbat eram odata!\r
Bm   B               Em E\r
La vanat prin munti si vai\r
A   A7      D\r
Cu ortacii mei...\r
\r
Porneam cu roua-n picioare\r
Pe urma de caprioare...\r
Ne opream in poienita\r
Beam apa din fantanita...\r
\r
Pusca si cureaua lata...\r
Ce barbat eram odata!\r
La vanat prin munti si vai\r
Cu ortacii mei...\r
\r
De-o fost vara, de-o fost toamna\r
Luam mistretii la goana\r
Cu cetina verde-n clop\r
SI nu oboseam deloc...\r
\r
Pusca si cureaua lata...\r
Ce barbat eram odata!\r
La vanat prin munti si vai\r
Cu ortacii mei...\r
\r
Iute vremea mi-o trecut,\r
S-uite c-am imbatranit,\r
Sa mai merg, putere nu-i,\r
Sa iau urma cerbului!...\r
\r
Pusca si cureaua lata...\r
Ce barbat eram odata!\r
La vanat prin munti si vai\r
Cu ortacii mei...\r
\r
Cand a ninge si a-ngheta\r
N-o sa-mi mai vedeti urma\r
Mi-oi trimite numa dorul\r
Ca sa-mi gaseasca zvorul...\r
\r
Pusca si cureaua lata...\r
Ce barbat eram odata!\r
La vanat prin munti si vai\r
Cu ortacii mei...\r
\r
box_bottom`,author:{id:45,name:"Traian Ilea",slug:"traian-ilea"},author_id:45,categories:[{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:""}],chords:["D","F","Bm","D7","G","A7","B","Em","E","A","F#"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:98,title:"Imnul golanilor",slug:"imnul-golanilor-98",content:`G          C               D         G\r
A fost odata ca-n povesti, a fost în România\r
  G          C                D          G\r
O gasca mare de golani ce-au alungat sclavia\r
    G              C               D          G\r
Noi nu ne-am confundat nicicând cu oamenii de bine\r
  G          C            D         G\r
Veniti si neocomunisti si fara de rusine.\r
\r
Refren:\r
G             C   D          G\r
Mai bine haimana, decât tradator\r
G            C    D          G\r
Mai bine huligan, decât dictator\r
G          C    D         G\r
Mai bine golan, decât activist\r
G        C     D         G\r
Mai bine mort, decât comunist.\r
\r
G                    C         D                 G\r
Vrem libertate, nu comunism si nici schimbari de forma\r
   G        C             D            G\r
Si de aceea securisti, sa nu ne puneti norma.\r
    G          C        D            G\r
Noi nu vrem neocomunism nici neolibertate\r
  G             C       D                  G\r
Democratii originale si nici minciuni sfruntate.\r
\r
Refren\r
\r
       G           C              D          G\r
Ne-ati întrebat ce vrem aici, dar stie toata tara\r
    G        C         D         G\r
Noi sustinem punctul 8 de la Timisoara.\r
  G       C     D       G\r
A cazut 473, ce tinea TVR\r
  G            C            D           G\r
Legata în lanturile ei, dar tot degeaba e.\r
\r
Refren\r
\r
   G         C          D            G\r
Alegeri fara comunisti, fara nomenclatura\r
   G               C      D          G\r
Si nu va temeti de golani fara coloratura.\r
    G             C            D             G\r
Din cei care-au murit aici, ne-am reîntors naluci\r
   G          C             D         G\r
Sa nu mai fie cum a fost, macelul de atunci.\r
\r
Refren`,author:{id:46,name:"Cristian Pățurcă",slug:"cristian-paturca"},author_id:46,categories:[{id:11,name:"Despre Patrie",slug:"despre-patrie",description:""},{id:14,name:"Imnuri",slug:"imnuri",description:""}],chords:["G","C","D","A"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:99,title:"Bosquito",slug:"bosquito-99",content:`Melodia in cheia originala cu mici corectii pentru a suna ca inregistrarea.\r
\r
F#m                   E         F#m\r
Când eram băiat acasa tare bine mai era\r
F#m                  E         F#m\r
Aveam o gagică grasă care mă iubea\r
Bm             F#m         Bm         F#m\r
Dar când am plecat în lume ursitoarea m-a minţit\r
Bm             F#m       Bm     D   C#7\r
C-o s-ajung un barosan bogat şi fericit\r
\r
       F#m   C#7       F#m\r
Însă bănuţul nu s-a arătat\r
       A     E            A\r
şi fericirea iute s-a stricat\r
       A           Bm       C#7 F#m\r
Aşa că beau, beau, golesc paharele\r
        F#m   C#7       F#m\r
Cu pretenarii şi cu fetele\r
\r
Ce-mi plăcea s-o facem lată, asta-mi era boala\r
Unde n-ajungeam vreodată, asta era şcoala\r
N-am nici bani, n-am nici maşină si de datorii sunt full\r
Am o gaşcă şi-o chitară şi-asta mi-e destul\r
 \r
Însă banuţul nu s-a arătat\r
şi fericirea iute s-a stricat\r
Aşa că beau, beau, golesc paharele\r
Cu pretenarii şi cu fetele\r
\r
Însă banuţul nu s-a arătat\r
şi fericirea iute s-a stricat\r
Aşa că beau, beau, şi-mi bag picioarele\r
În tot ce ţine de tranziţie`,author:{id:47,name:"Bosquito",slug:"bosquito"},author_id:47,categories:[{id:21,name:"Latino",slug:"latino",description:""}],chords:["F#m","E","Bm","D","C#7","A","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:100,title:"Așa, și?",slug:"asa-si-100",content:`Capo: fret 4

Intro : F C G Am x2 

Asa, si? (2x)

Am                      E
Ceva nu merge bine emotional
F                         C
Am sufletul plin de Extraveral, (Asa, si? )
Am                     E
Noi doi ne vedem de patru seri,
F                         C
Facem schimb de prea multe pareri,
Am                        E 
Rabdarea mi-am pierdut-o de ieri,
D 
Asa am eu la doamne, 
                 G 
Multe milioane de ghinioane. (Asa, si? )


F                       C
Asa si ce daca stau la coada
G                       Am                   
Pentru fericire o viata-ntreaga,
F                       C 
O sa stau la rand si pentru tine
G               Am
Si-o sa-ti dau si tie.

Asa si asa(4x)   F,C,G,Am x2 


Am                      E
Ceva nu-i bine nici profesional,
F                          C  
Am multe locuri goale prin buzunar, 
Am                       E
Iar maine sigur mai apare ceva,
F                          C 
Nu mai conteaza, eu sunt bine si-asa,
Am                     E 
Prietenii mei stiu asta deja
D
Ca avem milioane de ghinioane, 
   G
Ajuta-ne Doamne! ! (Asa, si? )


 F                       C 
Asa si ce daca stau la coada
G                        Am
Pentru fericire o viata-ntreaga,
F                           C 
O sa stau la rand si pentru tine
G                 Am
Si-o sa-ti dau si tie.

Asa si asa(7x)  F,C,G,Am x2 

 // Pana aici a fost versiunea acustica cea filmata in camera de hotel. 
De aici aveti aceleasi acorduri Am,E,F,C numai cu un fret mai jos.
Iar la sfarsit aveti Am,E,E,Am.

Pai tu crezi ca ei n-au griji cu tona!? 
Cei din Arizona si cei din Barcelona, 
Ba au probleme cu gramada
Toti cei din Oradea si cei din Canada, 
Poate sa se umple iar paharul, 
Sa se inunde barul, eu nu-i mai simt amarul, 
Orice-ar fi spun “ASA, SI?!”

// Se reiau acordurile A,E,B,C#m

Asa si ce daca stau la coada
Pentru fericire o viata-ntreaga, 
O sa stau la rand si pentru tine
Si-o sa-ti dau si tie.

Asa, si? 

Asa si ce daca stau la coada
Pentru fericire o viata-ntreaga, 
O sa stau la rand si pentru tine
Si-o sa-ti dau si tie.

Asa si asa(7x) F,C,G,Am x2 
`,author:{id:48,name:"Vunk",slug:"vunk"},author_id:48,categories:[{id:22,name:"Pop-Rock",slug:"pop-rock",description:""}],chords:["Am","E","F","C","D","G","C#m"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:101,title:"Perfect fara tine",slug:"perfect-fara-tine-101",content:`F\r
Nu mai urla \r
C\r
Se aude in bloc\r
Dm\r
Am inteles ideea \r
B\r
Ai risipit iubirea pe un dobitoc \r
\r
Iesi naibii din casa \r
Eu asta astept iubito \r
Esti libera sa cauti fraierul \r
\r
Refren:\r
\r
Perfect (draga mea, draga mea)\r
 Fara tine (draga mea, draga mea)\r
 E mai bine (draga mea, draga mea)\r
 Am timp si pentru mine (draga mea, draga mea)\r
 Perfect (draga mea, draga mea) \r
 \r
 Nu ma doare (draga mea, draga mea)\r
 Piesa asta (draga mea, draga mea)\r
 O cant in drum spre mare (draga mea, draga mea) \r
\r
 Te-am inselat \r
 Ma declar vinovat \r
 Am circumstante insa \r
 Am vrut si eu sa vad cum e sa fii barbat\r
 Te-ai transformat In instanta morala\r
 Dar ai uitat Dansai prin vama goala si era\r
\r
 Perfect (draga mea, draga mea)\r
 Fara tine (draga mea, draga mea)\r
 E mai bine (draga mea, draga mea)\r
 Am timp si pentru mine (draga mea, draga mea) \r
 Perfect (draga mea, draga mea) \r
 Nu ma doare (draga mea, draga mea)\r
 Piesa asta (draga mea, draga mea)\r
 O cant in drum spre mare (draga mea, draga mea)\r
\r
 Ti-aduci aminte cand ne-am combinat\r
 Era frumos, era perfect, era adevarat\r
 Pe mese sau sub mese dar numai impreuna\r
 Iubirea si distractia se cam tineau de mana\r
 Apoi te-ai transformat usor, usor in profesoara\r
 Si-am inceput sa am restante in fiecare seara\r
 Ziceai ceva de genul “iubirea-i lupta grea” \r
 Dar o cam luasesi razna, luptai doar pentru ea\r
\r
 Acum sunt singur in masina dar nu e suparare\r
 De cat premiant in inchisoare Mai bine repetent\r
 In drum spre mare Perfect (draga mea, draga mea)\r
\r
 Fara tine (draga mea, draga mea)\r
 E mai bine (draga mea, draga mea)\r
 Am timp si pentru mine (draga mea, draga mea)\r
 Perfect (draga mea, draga mea)\r
 Nu ma doare (draga mea, draga mea)\r
 Piesa asta (draga mea, draga mea) \r
 O cant in drum spre mare (draga mea, draga mea)\r
 Perfect (draga mea, draga mea)\r
 Fara tine (draga mea, draga mea)\r
 E mai bine (draga mea, draga mea)\r
 Am timp si pentru mine (draga mea, draga mea)\r
 Perfect (draga mea, draga mea)\r
 Nu ma doare (draga mea, draga mea)\r
 Piesa asta (draga mea, draga mea)\r
 O cant in drum spre mare (draga mea, draga mea)`,author:{id:49,name:"Vama",slug:"vama"},author_id:49,categories:[{id:22,name:"Pop-Rock",slug:"pop-rock",description:""}],chords:["F","C","Dm","B","Am","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:102,title:"Ochii tai",slug:"ochii-tai-102",content:`D    A                 E A\r
Nu e usor nu e nici greu \r
      D            A              E  A\r
Sa incerci acum sa te intorci din drum\r
         D A   E        A\r
Poate ca eu cu sufletul meu \r
     D          A             E   A\r
As avea atat de multe sa iti spun\r
     D      A             E\r
Insa ochii tai se vor pierde in noapte\r
     G          D          A\r
Lasandu-ma pe mine in urma lor\r
        D     A          E\r
Stiu ca ochii tai vor fi doua soapte \r
        G               A           G A\r
Si mi-e foarte dor,mi-e tare dor de ei\r
\r
Vreau sa simt caldura ta cand noaptea va venii\r
Doar stelele sa stie ca ai sosit\r
Parul tau va fi iar ud de roua -n zori de zi\r
Si as vrea sa pot sa-ti spun bine-ai venit\r
Insa ochii tai se vor pierde in noapte\r
Lasandu-ma pe mine in urma lor\r
Stiu ca ochii tai vor fi doua soapte \r
Si mi-e foarte dor,mi-e tare dor de ei\r
Insa ochii tai se vor pierde in noapte\r
Lasandu-ma pe mine in urma lor\r
Stiu ca ochii tai vor fi doua soapte\r
Si mi-e foarte dor,mi-e taaaare dor de ei!!!!!!`,author:{id:50,name:"Holograf",slug:"holograf"},author_id:50,categories:[{id:22,name:"Pop-Rock",slug:"pop-rock",description:""}],chords:["D","A","E","G"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:103,title:"Nu am chef azi",slug:"nu-am-chef-azi-103",content:`Intro : A   A7+  A6   A  \r
        D   D7+  D6   D\r
 \r
Strofa:\r
        A    A7+        A6     A \r
  Nu am chef azi, nu am chef azi\r
         D         D7+  D6  D\r
  N-am chef de nimic\r
  Nu am chef azi, nu am chef azi\r
  De votca sau de gin, tequila rom sau vin\r
           Bm                   E               E7            A  \r
  Tigari nu mai vorbesc, iar pe tine, pe tine, pe tine, te urasc\r
  \r
  Nu te vreau azi\r
\r
  Nu ma vrei azi, nu ma vrei azi\r
  S-a ridicat usor avea un umar gol\r
  Si zambetul amar, baiete esti prost, iar eu nu sunt o c*rva pe-un trotuar\r
  Nu ma vrei azi, nu ma vrei azi\r
  Nu te vreau azi, nimic mai usor\r
  Nu ma vrei azi, nu te vreau azi\r
  Eu voi pleca-n curand, ramai cu mine-n gand\r
  E lapte-n frigider, iar banii, ciorapii si sapca ta sunt pe calorifer\r
  \r
\r
  Ne vedem joi, ne vedem joi\r
  Am urlat dupa ea\r
  Vreau sa vii joi, vreau sa vii joi, \r
  Alerg descult pe hol, dar holul este gol\r
  Un paharel de vin, ma uit cine e, vecinul meu Dan de la mezanin\r
 \r
  Au trecut ani, au trecut ani,\r
  si viata s-a schimbat, mi-am luat si eu nevasta,\r
  urata si cam proasta, am doi copii cu ea \r
  si ma feresc cat pot de mult de soacra mea.\r
 \r
  Au trecut ani, au trecut ani\r
  Si viata s-a schimbat\r
  Au trecut ani, au trecut ani\r
  Ma duc mereu pe hol, dar holul este gol\r
  Nu-i lapte-n frigider, iar banii, ciorapii si sapca ta, nu-s pe calorifer\r
 \r
  Au trecut ani\r
  Nu-s pe calorifer\r
  Au trecut ani, am fost un fraier\r
  Au trecut ani, nu-s pe calorifer\r
  Am fost un mare, mare fraier\r
  Au trecut ani, dar au trecut ani`,author:{id:51,name:"Vama Veche",slug:"vama-veche"},author_id:51,categories:[{id:22,name:"Pop-Rock",slug:"pop-rock",description:""}],chords:["D","D7","D6","A","A7","A6","Bm","E","E7","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:104,title:"Vama Veche",slug:"vama-veche-104",content:`intro:  ( este facut de pian - l-am adaptat pt chitara )                \r
                                   \r
e|------------------0------------------------0---|\r
B|--------3----3------1-------1--3-----3-------1-|\r
G|----0------0----0---------0--------0-----0-----|\r
D|------------------------2----------------------|\r
A|----3------------------------------------------|\r
E|-----------------------------------------------|\r
\r
e|--------------0-------------------------------|\r
B|-----3----3------1----------1---0-1-0-1-------|\r
G|--0-----0---0-------------2--------------2----|\r
D|------------------------2---------------------|\r
A|--3-------------------0-----------------------|\r
E|----------------------------------------------|\r
\r
e|-3--3-1-1-1-----3-1--3---5-3-3-3----5-3---3-|\r
B|----3-3-3-3-------3------3-3-3-3------3-----|\r
G|----2--------2-----------4--------4---------|\r
D|----0--------------------5------------------|\r
A|--------------------------------------------|\r
E|--------------------------------------------|\r
\r
e|-3--1-1-1----3-1---3-5---3----1----0-----|\r
B|-3--3-3-3------3-------------------------|\r
G|-2---------2-----------4----4----2-------|\r
D|-0-------------------5---5----3----2-----|\r
A|-----------------------------------------|\r
E|-----------------------------------------|\r
\r
Trenul accelerat Bucuresti-Mangalia pleaca in 5 minute de la linia 5\r
 \r
 C9             C \r
Se poate sa fie zi\r
 Am  \r
Se poate sa fie noapte...\r
 C9              C\r
Se poate sa fie vara...\r
 Am               Am9\r
La fel cum iarna poate fi.\r
 \r
 Dm\r
Nisiul sa fie ud\r
 G\r
Iar marea un pic amara\r
 Dm\r
Nisipul sa zgarie lin\r
 G\r
Iar marea sa fie murdara.\r
 \r
\r
Vrei soare, soare iti dau\r
Sau pielea ti-e ruda cu luna \r
Pe stanci daca vrei te sarut\r
Sau in apa imi e totuna.\r
 \r
\r
Sa pot sa te-aleg dintr-o suta\r
In ochi sa ai inima mea\r
Sa-ncerc sa m-ascund de iubire\r
Dar sa nu te mai,              \r
Sa nu te mai pot uita.\r
 \r
\r
Iar noaptea sa ai pielea uda\r
Insetata sa tragi din tigara\r
Pe mare se-aude sirena\r
Al tau san imi mangaie mana\r
 \r
Povestea merge mai departe\r
Ca vantul din Vama Veche\r
Eu nu pot sa mai continui\r
\r
Caci eu mi-am gasit pereche        \r
La Vama Veche, pereche\r
 \r
Povestea merge mai departe\r
Ca vantul din Vama Veche\r
Eu nu pot sa mai continui\r
Saruta-ma in ureche.\r
La Vama Veche, in ureche\r
 \r
Am plecat la Vama Veche \r
Ca sa imi gasesc pereche\r
Am ajuns la Vama Veche\r
Si sunt apucat de streche\r
Stau pe plaja-n Vama Veche\r
Si am sarutul in ureche\r
Doar pe plaja-n Vama Veche\r
Noi toti vom avea pereche\r
 \r
Stau pe plaja-n Vama Veche    \r
Ca sa imi gasesc pereche`,author:{id:51,name:"Vama Veche",slug:"vama-veche"},author_id:51,categories:[{id:22,name:"Pop-Rock",slug:"pop-rock",description:""}],chords:["C9","C","Am","Dm","G","Am9"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:105,title:"Calul din Marlboro",slug:"calul-din-marlboro-105",content:`D                               G\r
Copile nu fi prost orasul e departe\r
Asa-mi spunea razand cel ce vindea de toate\r
     A                                     G\r
Tu nu ma pacalesti, am sa ajung acolo\r
M-asteapta strada mea si calul din Marlboro\r
 \r
Cand am pornit la drum, am intalnit o proasta\r
Am incercat sa fug, mi-a devenit nevasta\r
De-atuncea pan-acum in oras eu ratacesc\r
E fum si este scrum si simt ca-nebunesc, dar\r
Ce pot sa fac\r
                 \r
      \r
Batrane, m-a-ntrebat un pusti julit in coate\r
Mai e mult spre oras ca vad ca vinzi de toate\r
Am vrut sa-l ratacesc sa n-apuce spre sosea\r
Batrane esti fricos, gasesc eu si strada ta!\r
\r
L-am intrebat plangand dar calul din Marlboro\r
El mi-a raspuns razand, vedem noi mai incolo\r
De-atuncea pan-acum in oras eu ratacesc\r
E fum si este scrum si simt ca-nebunesc\r
 \r
     And everybody knows my feelings\r
     Of a lonely, day`,author:{id:51,name:"Vama Veche",slug:"vama-veche"},author_id:51,categories:[{id:22,name:"Pop-Rock",slug:"pop-rock",description:""}],chords:["D","G","A","Am","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:106,title:"Vine valul, imi ia calul",slug:"vine-valul-imi-ia-calul-106",content:`      Am       E          Am\r
Toată viaţa avere-am vrut să fac\r
    G                    C\r
Am pornit de la un biet căluţ\r
        Dm    E          Am\r
Mi-am legat căluţul de copac\r
        F      E       Am  E Am\r
Pentru apă am săpat un puţ\r
\r
Pârâul din sat curgea-nspre mat\r
Unde muzică-mi plăcea s-ascult\r
Într-o zi pârăul s-a uflat\r
Eu ascultam refrene de demult\r
\r
	Refren:\r
	\r
	                  Am\r
	Vine valul, îmi ia calul\r
                G            C\r
	Îmi ia scroafa din coteţ\r
               Dm\r
	Mi s-a dus averea toată\r
               Am\r
	Numai soacra-n curte-noată\r
                  F        Dm        E    F  E\r
	S-a dus casa şi fărâma de nutreţ\r
\r
	Vine valul, îmi ia calul\r
	Murgu-noată în aval\r
	Soacra-i bine ancorată\r
	Doamne cât de bine-noată\r
               F           E          Am\r
	De ce Doamne nu ai pus-o tu pe cal\r
\r
Am luat un împrumut de la Banccoop\r
Mă întorc în sat să torn ciment\r
Să-mi refac căsuţa, am Casco\r
Dar f*cking Banccoop dă faliment\r
\r
Mi-am luat alt căluţ de la Obor\r
Am plătit pe el extrem de mult\r
Dar mi-l ia pârâul binişor\r
Eu stau şi-ascult refrene de demult\r
\r
	Refren.\r
\r
Iubesc ţara în care m-am născut\r
Pot să fac în ţara mea ce vreau\r
Pot să rabd, s-o iau de la-nceput\r
Muzică s-ascult la max în timp ce beau\r
\r
Legea îmi dă dreptul colosal\r
Să mai plec odată la Obor\r
Spending money pe al treilea cal\r
Putting bălegar pe legea lor\r
\r
	Refren.\r
\r
Ieri am împlinit 50 de ani\r
Viaţa încă nu mi-a pus capac\r
Chiar dacă n-am casă şi nici bani\r
Este dreptul meu să spun ce.. fuck\r
\r
Am pierdut în viaţa mea trei cai\r
N-am ştiut ca să-i mai ţin în frâu\r
Toţi îmi spun: "O gloabă tot mai ai"\r
- Pe soacră-mea, privind către pârâu`,author:{id:52,name:"Daniel Iancu",slug:"daniel-iancu"},author_id:52,categories:[{id:4,name:"Satiră și umor",slug:"satira-si-umor",description:""}],chords:["Am","E","G","C","Dm","F"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:107,title:"Dacă ploaia s-ar opri",slug:"daca-ploaia-s-ar-opri-107",content:`Intro:\r
\r
Dm G\r
Dm Am\r
Dm G Am\r
\r
      Dm                   Am\r
Dacă pleci, uşa nu o mai închide\r
         Dm                  Am\r
Sper să treci poate mâine pe aici\r
    Dm\r
Te petrec şi mă uit la tine\r
   Am\r
Parcă pierd ceva din mine\r
 B         E\r
Zău, îmi e greu\r
\r
\r
	Refren:\r
\r
	Am               Dm\r
	Poate dacă ploaia s-ar opri\r
	G                       C    E     \r
	şi din cer n-o să mai cadă lacrimi\r
	Am          Dm           G\r
	Stele-ar răsări, tu ai veni\r
	Am             Dm \r
	Supărat sunt Doamne iar\r
	G                       C     E \r
	Stau în cârciumă să-mi 'nec amarul\r
	Am            Dm         G  \r
	Beau şi te aştept până la zi\r
 \r
 \r
       Dm      G \r
Plouă încet, încet\r
            Dm G Am\r
Plouă şi-mi este dor\r
         Dm    G         Am \r
De ochii tăi căprui îmi e dor\r
\r
Plouă încet, încet\r
Plouă şi-mi este dor\r
De ochii tăi să mor îmi e dor\r
\r
Te aştept să te-ntorci din nou la mine\r
Chipul tău şi de ochii tăi mi-e dor\r
Poza ta din sertar o scot\r
Nu mă uit la ea nu pot\r
Zău, îmi e greu\r
\r
	Refren`,author:{id:53,name:"Cargo",slug:"cargo"},author_id:53,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Dm","G","Am","B","E","C"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:108,title:"La fereastra ta",slug:"la-fereastra-ta-108",content:`Em            \r
I.Vad,la fereastra ta tarziu\r
                B7\r
O lumina si nu stiu\r
                     Em\r
De esti treaza sau visezi\r
   \r
   Em     \r
II.Vad,in spectacolul nocturn\r
                      B7      \r
Cavaleri din vechiul turn\r
                     Em\r
Ce te-ndeamna sa-i urmezi\r
       \r
       G \r
refren:Si as dori sa pot intra\r
                     D\r
Sa alung din preajma ta\r
                            G\r
Tot ce-i trist si tot ce-i rau\r
                    \r
Si as dori sa fiu acum\r
                 D\r
O romanta cu parfum\r
                     G    G D Em\r
Sa pot sta in parul tau\r
\r
     Em         \r
III.Vad, la fereastra ta tarziu\r
                B7\r
O lumina si nu stiu\r
                      Em\r
Daca razi sau daca plangi\r
\r
    Em  \r
IV.Trec,si in drumu-mi nesfarsit\r
                      B7\r
Ma primesc cu-n bun venit\r
                      Em\r
Numai plopii cei natangi\r
\r
         G                \r
refren ;Dar, am sa ma intorc candva\r
                    D\r
Sa alung din preajma ta\r
                           G\r
Tot ce-i trist si tot ce-i rau.\r
                          \r
Si as dori sa pot sa-tï spun\r
                  D\r
O poveste de pe drum\r
                       G   G D Em \r
Cand visam sub geamul tau\r
\r
        A                  \r
refren:Si as dori sa pot intra\r
                     E\r
Sa alung din preajma ta\r
                            A\r
Tot ce-i trist si tot ce-i rau\r
\r
Si as dori sa fiu acum\r
                 E\r
O romanta cu parfum\r
                     A\r
Sa pot sta in parul tau\r
\r
have fun!`,author:{id:54,name:"Semnal M",slug:"semnal-m"},author_id:54,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Em","B7","G","D","A","E"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:109,title:"Aproape de voi",slug:"aproape-de-voi-109",content:`Am       C    G        Em\r
In seara asta vreau sa beau\r
Am           C    G\r
Sa uit de-orice nevoi\r
Am         C     G     Em\r
Sa sparg paharul si sa zic\r
Am          G       Am\r
Sunt acum, aici, cu voi . . .\r
\r
\r
Nu stiu cat timp mi-a mai ramas\r
Dar vreau sa mi-l petrec\r
Cu voi care mi-ati fost alaturi \r
La bine si la greu\r
\r
         Am            C     G \r
Refren:  Si de-o fi si eu sa mor\r
                        Dm    Am\r
         Nu vreau sa va intristati\r
                       C    G\r
         Sa cantati si sa jucati \r
                Am\r
         Pana-n zori . . . \r
  \r
                     C       G   \r
         Si daca din cand in cand\r
                    Dm      Am\r
         O sa ma priviti in gand\r
             C   G         Am\r
         Voi fi aproape de voi . . .\r
\r
\r
Inchin paharul si va spun\r
Ii multumesc Celui de Sus\r
Ca mi va dat prieteni buni\r
Si nu-s singur pe acest drum . . . \r
\r
Refren: ...\r
\r
\r
\r
Poate fi folosita orice ciupitura 4/4.\r
\r
*Nota: \r
Cantecul suna bine alternat de la ciupitura(pt. strofe) la bataie(pt. refren)\r
\r
Succes!`,author:{id:53,name:"Cargo",slug:"cargo"},author_id:53,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Am","C","G","Em","Dm"],strumming:[{pattern:["D","-","U","-","D","-","U","-"],timeSignature:"4/4",name:"Fingerstyle"}],views:0},{id:110,title:"Fata verde",slug:"fata-verde-110",content:`Em            G     D\r
Fată verde cu părul pădure\r
Fată verde cu părul pădure\r
Simţi cum privirea lor vrea să te fure\r
 \r
        C        G   D    Em\r
        Noaptea mieii ţese ie\r
        Zburătorii ca să vie\r
        Noaptea mieii ţese ie\r
        Nimeni urma să le-o ştie\r
 \r
Fată verde ei te sărută\r
Cu privirea lor cea mută\r
Ochii negri, ochi de ţigan\r
 \r
	Refren.\r
\r
        D             G\r
        Umezi sunt de dor\r
          C     G      D\r
        şi-al lor vis plin de zbor\r
	D               G\r
        Noaptea-n ei se scaldă \r
	 C      G          D\r
        În sclipiri ca de salbă ...\r
         C      G         D\r
        În sclipiri de salbă ...\r
\r
Fată verde cu părul pădure\r
Fată verde cu părul pădure\r
Simţi cum privirea lor vrea să te fure\r
\r
	Refren`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Em","G","D","C"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:111,title:"In Umbra Marelui URSS",slug:"in-umbra-marelui-urss-111",content:`E o varianta modificata de mine pt cover la trupa mea.\r
\r
\r
Intro:\r
\r
E|-3--2-3-2-5-0----------------------|\r
B|-0--3-------0----------------------|\r
G|-0--2-------0----------------------|\r
D|-0--0-------2----------------------|\r
A|-2--0-------2----0-2-3--3-2-0------|\r
E|-3----------0--3--------------3-2-0|\r
   G  D       Em\r
\r
------0-----------2-----------0-----------------------|  \r
-------0-----------3-----------1-------1--------------|\r
----0-----------2-----------2-----------0-------------|     \r
---2-2---------0-0---------2-2------------------------|\r
---------2-3-0-------3-2-0-------0-2-3-----3-2-0------|\r
-------------------------------------------------3-2-0|\r
  Em          D            Am          C\r
\r
Strofa I:\r
\r
Em          D\r
Stau singur si ma-ntreb\r
   Am              C     B Em\r
De ce-am plecat de-acasa\r
       D\r
Sa fie blestemul\r
   Am            C     B Em\r
De veacuri ce ne-apasa\r
             D        Am\r
Caci n-am gresit cu nimic\r
            C  D  Em\r
Doar cat am patimit\r
         D         Am\r
Hulit am fost fara rost\r
          C    D Em\r
De cei ce i-am iubit\r
\r
Intro x3\r
\r
\r
Em          D\r
Apus peste apus\r
   Am         C     B  Em\r
Ce iute trece timpul\r
       D\r
Si zorile s-au dus\r
   Am        C     B  Em\r
Ce rece bate vantul\r
        D          Am\r
Am asteptat infrigurat\r
        C     D Em\r
Sa ma intorc 'napoi\r
          D          Am\r
M-ati judecat, condamnat\r
          C  D       G  D  Em\r
Dar cine sunteti voi?\r
\r
Refren:\r
\r
Em                      G  D Em   \r
Caci timpul nostru s-a scurs\r
                 G  D Em\r
In umbra marelui urs\r
                    C             A     A7\r
Dar ghearele v-au ramas in orice-mbratisare\r
       Am      Em    G   D\r
Astazi doare sarutul pe obraz\r
                     G  D  Em\r
Dar dati-mi viata 'napoi\r
                      G  D  Em\r
Ce-am risipit pentru voi\r
                   C               A     A7\r
Uitand de dor si nevoi, ani de pribegie                              \r
        Am  Em              D \r
Dintr-o mie multi n-au mai ramas\r
\r
Intro.\r
\r
\r
Em       D                  \r
Cazut-au frunzele\r
     Am         C B Em\r
Le-a risipit furtuna\r
          D\r
Unde-s sperantele?                           \r
    Am            C B Em\r
N-a mai ramas niciuna\r
          D         Am\r
Un gand subit, nerostit                       \r
         C  D     Em\r
Ma-ncremeneste-n loc\r
           D            Am\r
Ce-am asteptat, ce-am visat\r
         C   D       G D Em\r
Nimic nu s-a schimbat\r
\r
\r
\r
Em                  G D Em\r
Dar dati-mi viata 'napoi\r
                     G D Em\r
Ce-am risipit pentru voi\r
                    C\r
Uitand de tot si de voi\r
           A     A7\r
Prieteni de betie\r
        Am  Em            D\r
Dintr-o mie cati au mai ramas\r
                     G   D Em\r
Si timpul vostru s-a scurs\r
                 G  D  Em\r
La umbra marelui urs\r
                    C\r
Dar ghearele v-au ramas\r
              A     A7\r
In orice-mbratisare\r
       Am      Em          D \r
Astazi doare sarutul pe obraz.\r
\r
Intro+ Em`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["G","D","Em","Am","C","B","A","A7","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:112,title:"Baby",slug:"baby-112",content:`Strofa:\r
    Am                        Em\r
   Cat am fost de singur, tu nu ai stiut\r
      F                            Dm\r
   Ti-ai ferit mereu privirea, de la inceput\r
     Am                   Em\r
   Anii trec, si viata merge iar\r
      F                     Fm                         C\r
   Te caut zi si noapte, te caut, dar stiu ca e-n zadar\r
   \r
     \r
   Baby stiu acum ca mergi sa intalnesti\r
   Un strain ce te va duce, la casa din povesti\r
\r
\r
     Am                Em\r
   Ce noroc, ce mare nenoroc\r
      F              G         C           \r
   Ca timpul stinge totul, dar focul naste foc\r
     F       G          C      \r
   Mai da-i o zi din viata ta,\r
     F                  G\r
   Acelui om care-ti spunea\r
 \r
           C   G            Am\r
Ref :   Baby, baby, baby, tu vei fi a mea\r
          F               Am       Dm         G\r
         Ca un rasarit de soare, dupa noaptea grea\r
         C    G            Am\r
         Baby, baby, baby, tu vei fi a mea\r
          F                   Fm\r
         Tu esti unica iubire, unica iubire\r
  \r
\r
         \r
Bridge :\r
 Eb                                 F\r
 E toamna-n viata mea, totul este scrum\r
 Eb                                 F\r
 Stiam ca vei pleca dar lasa-ma sa-ti spun\r
\r
\r
\r
Ref:`,author:{id:56,name:"Iris",slug:"iris"},author_id:56,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Am","Em","F","Dm","Fm","C","G","Eb","E"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:113,title:"Fata din vis",slug:"fata-din-vis-113",content:`D         A     G   A\r
Imi amintesc de tine\r
D          A    G  A\r
Stateai in fata mea\r
D          A          G\r
A fost de-ajuns o privire\r
A       D        A     G\r
Ce n-o pot, n-o pot uita\r
 \r
Cu bratele-amandoua\r
Incerc sa te regasesc\r
Sa fim din nou impreuna\r
E tot ce pot sa imi doresc\r
 \r
Cu gandul pret de o clipa\r
Sa te-nteleg as fi vrut\r
As fi ramas cu tine\r
C-am sa te pierd nu am crezut\r
 \r
Afara numai vantul\r
Gonind prin noapte spunea\r
Ca lasa-n urma timpul\r
Ce mult prea, prea iute-alerga\r
 \r
[_refren_]\r
 \r
Bm         A         G    A\r
Pornesc la drum prin noapte\r
D            A          G   A\r
In noaptea-n care ti-am zis\r
Bm       A         G\r
Ca numai tu dintre toate\r
A       D      A      G\r
Doar tu esti fata din vis\r
 \r
[_sfarsit_de_refren_]\r
 \r
Privesc la trenul care\r
Ducea nepasator\r
Caldura soaptei tale\r
Ce-avea s-o piarda pana-n zori.\r
 \r
Afara numai vantul\r
Gonind prin ploaie spunea\r
Ca lasa-n urma timpul ce mult prea\r
Prea iute-alerga\r
 \r
[_pasaj_]\r
 \r
D          A    G\r
Daca vrei (daca vrei)           \r
    A     D-A-G-A\r
Voi fi cu tine\r
D          A    G\r
Daca vrei (daca vrei)\r
    A         D-A-G\r
Voi sta langa tine`,author:{id:57,name:"Compact",slug:"compact"},author_id:57,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["D","A","G","Bm","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:114,title:"Flori de mai (simplificat)",slug:"flori-de-mai-simplificat-114",content:`(Originalul - Capo pe 3)\r
\r
\r
intro: Dm  G  Am\r
   \r
  Dm\r
Lacata prinsa-n lemn, ascunde-ma ne-atins\r
  Am\r
Pazeste-ma de ger, azi-noapte iar a nins\r
     Dm          F\r
Cand tu visai \r
                  Am\r
Albastre flori de mai\r
    Dm\r
Ce flori în toiul iernei opreste-te-ti sopteam\r
  Am\r
Acum doar geru-n sticla picteaza flori la geam\r
    Dm          F\r
Tu n-ascultai \r
                   Am\r
Visai doar flori de mai.\r
\r
           G     Dm\r
     Mai stai\r
                     Am\r
     Si nu pleca de n-ai\r
            G                        Dm\r
     Sa-mi dai (nu ti-am cerut sa-mi dai)\r
                       Am\r
     Albastre flori de mai.\r
\r
   Dm \r
De ochi străini ma tem ce-n strada ard nestins\r
   Am\r
Privind la ei te chem, tin minte tot ce-ai zis\r
   Dm            F\r
Atunci spuneai \r
                     Am\r
"Plec dupa flori de mai".\r
   Dm\r
Vibrează pasii mei de parca merg pe clape\r
   Am\r
Cu mine insumi cant refren-singuratate\r
   Dm          F\r
De cand plecai \r
              Am\r
Dupa flori de mai\r
\r
           G      Dm\r
     Mai stai\r
                      Am\r
     Si nu pleca de n-ai\r
             G                       Dm\r
     Sa-mi dai (nu ti-am cerut sa-mi dai)\r
                        Am\r
     Albastre flori de mai.`,author:{id:58,name:"Alternosfera",slug:"alternosfera"},author_id:58,categories:[{id:23,name:"Din Republica Moldova",slug:"din-republica-moldova",description:""},{id:18,name:"Rock",slug:"rock",description:""}],chords:["Dm","Am","F","G"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:115,title:"Mica tiganiada",slug:"mica-tiganiada-115",content:`-are capodastru la tasta 4, deci e in C#m;\r
-eu l-am scris in Am;\r
\r
intro:\r
   Am    C    G      D           Am    \r
e|----0----0---------2-----2p0------0-|\r
B|----1----1------3--3---3-----3----1-|\r
G|--------------0------2--------------|\r
D|-------------------0----------------|\r
A|--0----3------------------------0---|\r
E|------------3-----------------------|\r
\r
   C      D      Am  C    G     D     C     E    Am\r
e|--------2--------0---0--------3----|----0----0-----0---0-|\r
B|-----1--3---3----1---1------3-2---3|----1----0----2-2----|\r
G|---0------2---------------0-----2--|-------------2---2---|\r
D|--------0---------------------0----|---------------------|\r
A|-3-------------0---3---------------|--3----2----0--------|\r
E|------------------------3----------|---------------------|\r
\r
\r
Hmmm hmmmm hmmmmmmm......\r
\r
    G       C           se repeta Am     \r
e|--3---3---3------0------|----|\r
B|--3-----3-----3----1----|----|\r
G|----0-------0--------0--|----|\r
D|------------------------|----|\r
A|-----------------3------|----|\r
E|--3---3---3-------------|----|\r
\r
e|--0---0---0-----0------0---0---0-----0------0-----|\r
B|--1-1---1---1-----1------1---0-1-------1----------|\r
G|--------------2-----2--------------2-----2--------|\r
D|---------------------------------2----------------|\r
A|--0---0---0-----0------3---2---0------------------|\r
E|--------------------------------------------------|\r
\r
Vers 1: \r
\r
   Am   C    G     D    Am   C          D\r
   Trec tigani pe drum, drumu-i plin de fum\r
   Am   C    G     D     C   E  Am\r
   Fumu-i plin de scrum, foc ardea\r
   Vai tigani, tigani, gipsy si gitani \r
   Fara cer si ani, trec pe drum.\r
\r
Vers 2:\r
  \r
   G       C    G         C\r
   Tiganie rai, rai care erai\r
   Am            C  E  Am\r
   Caravan serai giacardea\r
   Raiul meu beteag de pe alt meleag\r
   Cat imi esti de drag, nu stiu cum.\r
\r
vers 1:\r
   Trec tigani prin colb, colbul este orb\r
   Orbul e un corb giacardea\r
   Cade seara-n camp soarele-i scalamb\r
   Cortul este stramb foc ardea.\r
\r
vers2:\r
   Fac tiganii foc, focu-i la mijloc\r
   Fete cu ghioc\r
   Si cu carti de joc, hai noroc, noroc\r
   Vino la soroc.\r
\r
vers 1\r
   Vino sa-ti ghicesc cartile vorbesc\r
   Si nu ne mintesc, giacardea\r
   Fata de caro sub cer indigo\r
   Sa-ti spun incotro foc ardea.\r
\r
vers 2\r
   Ca multi ani s-au scurs de cand el s-a dus\r
   Cu un pui de urs pe un drum\r
   Cu belciug si lant fara nici un sfant \r
   Spre un targ bizant foc ardea.\r
\r
vers 1\r
   Zaiafet acum lautari duium\r
   Numai tu nicicum, giacardea\r
   Noaptea de-ar veni pe pamantul gri\r
   De ne-ar adormi orisicum.\r
\r
vers2\r
   O dar azi dar azi ceru-i de atlaz\r
   Soarele-n extaz\r
   Ei se duc la pas spre un alt popas\r
   Satra de pripas\r
   Pana nu-i mai vezi, pana nu-i mai crezi\r
   Si din ochi ii pierzi\r
   Printre ceturi verzi, ceturi de livezi\r
   Vezi ca nu-i mai vezi.\r
\r
vers1\r
Giacardea, cardea\r
Gialino mura\r
Gia mura mura\r
Ce misto ...`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Am","C","G","D","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:116,title:"Mugur de fluier",slug:"mugur-de-fluier-116",content:`G  D  G  D\r
G  D Am C G D G D\r
G  D Am C G D G D\r
\r
\r
G        D         Am       C   G  D  G  D\r
Îmi simt sufletul mugur de fluier\r
Ce-a doinit cântec cu şuier\r
Petru zilele ce-au fost trecute\r
Pentru nopţile negre si slute\r
\r
G D Am\r
Em D Em D\r
\r
G        D       Am    C     G    D  G  D\r
Am pornit cu roua-n picioare\r
Ca să cânt un cântec de soare\r
Pentru zilele ce au să vie\r
Pentru nopţile cu iasomie\r
	\r
	G      D     Am\r
	Freamătul apelor\r
	Em     D        Em    D\r
	şi foşnetul codrilor\r
	G      D      Am\r
	În el se intâlnesc\r
	Em      D       Em\r
	şi sufletu-mi încălzesc\r
	\r
	G    D      C       D\r
	Hei, hei, verde e iarba\r
	C        D        G      D\r
	Soarele-i sus pe cer\r
	G     D     C      D\r
	Hei, hei, dusă e iarna \r
	C      D         G       D\r
	Cu dinţii ei de fier (2 ori)\r
\r
Solo\r
\r
Hei, hei, verde e iarba\r
Soarele-i sus pe cer\r
Hei, hei, dusă e iarna \r
Cu dintii ei de fier (se repetă până la sfârsit)`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["G","D","Am","C","Em"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:117,title:"Strada ta",slug:"strada-ta-117",content:`INTRO: G D C D\r
\r
\r
VERSURI:\r
 G     D      C    D    G   D C D \r
Ieri am trecut pe strada ta\r
G   D   C    D      G  D  C  D\r
Si soarele se tot juca\r
G     D   C    D        G D C D\r
Cand aparea, cand disparea\r
G     D    C   D     G D C D\r
Din calea norilor fugea.\r
\r
Em        C   Em           D\r
Doar o privire, atata asteptam\r
Em        C            D\r
Doar o privire, mai speram\r
\r
\r
Ai aparut la geam tarziu\r
Ce ora era nici nu mai stiu.\r
O clipa doar tu m-ai zarit\r
Si te-am strigat, dar n-ai venit.\r
\r
Doar o privire, atata asteptam\r
Doar o privire, mai speram\r
\r
\r
REFREN:\r
          G  D C D              \r
Te voi astepta, \r
                G    D C D\r
voi veni pe strada ta\r
        G      D C\r
Te astept mereu, \r
C               D\r
fara tine mï-e greu\r
\r
.........\r
\r
OOOOUUAHHH!!!\r
        A     E D E\r
Te voi astepta, \r
               A      E D E\r
voi veni pe strada ta\r
     A         E D\r
Te astept mereu, \r
D               E\r
fara tine mï-e greu\r
\r
\r
ZRANGA ZDRANGA......ne vedem in vama ;)`,author:{id:56,name:"Iris",slug:"iris"},author_id:56,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["G","D","C","Em","A","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:118,title:"Ziua vrajitoarelor",slug:"ziua-vrajitoarelor-118",content:`Em \r
Intr-o zi de joi\r
G\r
Ca asa-i la noi\r
D\r
Seara se lasa\r
Em D   Em\r
Fara folos\r
Em\r
Poate nu-i asa\r
G\r
Si e altceva\r
D\r
Norii se lasau\r
Em D Em\r
Pana jos\r
G\r
Azi e ziua lor\r
D\r
Ziua ielelor\r
\r
Vrajitoarelor\r
Em D   Em\r
Pana-n zori\r
G\r
Iata se pornesc\r
D\r
Si se sfatuiesc\r
\r
Oalele pocnesc\r
Em D  Em\r
Cu licori\r
Em\r
Boabe si furnici\r
G\r
Ierburi si urzici\r
D\r
Tot ce e aici\r
Em D Em\r
Mana lor\r
Em\r
Dragoste si vis\r
G\r
Iad si paradis\r
D\r
In palma ti-au scris\r
Em D Em\r
Soarta ta\r
\r
\r
Em  G       D       Em\r
O,o,o ai un mare noroc\r
Em  G      D      Em\r
O,o,o ghinioane deloc\r
Em     G          D\r
Tot ce vezi sa nu crezi\r
\r
Ca asa ti-e Soarta\r
Em       G          D\r
Poti sa-ntrebi,daca vrei\r
Em\r
VRAJITOARELE`,author:{id:53,name:"Cargo",slug:"cargo"},author_id:53,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Em","G","D"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:119,title:"Strunga",slug:"strunga-119",content:`Em    G     F      Dm    Em\r
În pădurea de la strungă\r
Sunt de cei cu puşca lungă\r
Care dau chiorâş la pungă\r
\r
\r
Em    G       F       Em\r
Sunt de cei ce-mpuşcă-n lună\r
Care noaptea-n frunze sună\r
Feciori de lele nebună\r
\r
\r
Fă-te-n lături măi creştine, măi\r
Dacă vrei să treci cu bine\r
Să rămâi cu viaţă-n tine\r
\r
\r
Opt voinici cu spete late\r
şi cu mâneci suflecate\r
Stau cu puştile-ncărcate\r
\r
\r
Oleleu, ciocoi bogate, hei\r
Ici te-i trece din păcate, hei\r
Să-ţi arunc doi glonţi în spate, hei\r
\r
\r
Că mi-e puşca hultuită \r
şi mi-i ghioaga tintuită\r
şi mi-e inima-ncoltită`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Em","G","F","Dm"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:120,title:"Vremuri",slug:"vremuri-120",content:`Tonalitate originala F#\r
\r
 G     C           D             G\r
Hei, tramvai, cu etaj şi tras de cai\r
Hei, joben, ce umblai la mon jardin\r
Hei, bunic, cu monoclu erai şic\r
Hei, can-can, cu picioarele-n tavan.\r
\r
        		Em\r
Toate-au fost la timpul lor\r
      C         D\r
Ceva exagerat\r
Anii au trecut în zbor\r
şi lumea le-a uitat.\r
\r
Hei, pletoşi, cu pantaloni strâmţi şi soioşi\r
Chitarişti, zgomotoşi şi fantezişti\r
Mini-jupe, foarte scurt şi strâns pe trup\r
Hei, to shake, îndrăcit ca un berbec.\r
\r
Toate sunt la modă acum\r
Ceva exagerat\r
Timpul trece ca un fum\r
şi tot va fi uitat.\r
\r
Prima strofa inca o data`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["G","C","D","Em","F#"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:121,title:"Floare de iris",slug:"floare-de-iris-121",content:`Am         Dm      E           E7  E
Floare de iris....floare de colt,
Am         Dm       E          E7  E
Ne-ai ocrotit , ne-ai dat un rost
             F           G
Iar cand noi nu vom mai fi
Dm        Am         C     G    Am
Va veti aminti ca a fost odata Iris

           F             G
Iar cand noi nu vom mai fi
Dm          Am        C     G    Am
Va veti aminti ca a fost odata Iris 

la fel peste tot....;)


Pe strazile viselor am alergat
Si v-am iubit si v-am cantat
Iar cand noi nu vom mai fi
Iar noaptea va fi zi
Va veti aminti ca-a fost odata Iris

Iar cand noi nu vom mai fi
Va veti aminti ca a fost odata Iris x2
Ca a fost odata Iris

 have fun! ne vedem la vama veche :D:D:D:D:D`,author:{id:56,name:"Iris",slug:"iris"},author_id:56,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Am","Dm","E","E7","F","G","C","D"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:122,title:"Singur",slug:"singur-122",content:`[1]\r
  Am\r
O vad tremurand cu ochii inchisi\r
                              G\r
Cu poze in jur, genunchii stransi\r
                                 Am \r
Slabita si trista, cu cearcani adanci\r
\r
\r
[2]\r
    Am\r
Si vrea sa-i promit ca n-o sa uit\r
                         G\r
Imagini si locuri din trecut\r
                          Am\r
Si visele-n care noi am crezut\r
\r
\r
\r
Anterefren:\r
F\r
Sunt nopti intregi cand palng\r
    C\r
Si-adorm cu tine-n gand\r
  Dm\r
Pleacta esti ep veci\r
    E\r
Departe-n umbre reci\r
\r
\r
Refren:\r
   C-G    Dm     C    \r
Singur, atat de singur\r
   Am           F \r
Simt dureri pe care\r
        C          G\r
Nu mai pot sa le-ndur\r
C     G   Dm      Am  \r
Lacrimi, nopti in lacrimi\r
   C        G             Am\r
Si-n inima mea, doar lacrimi\r
\r
\r
[3]\r
  Am\r
Si sta in genunchi la piept tinant\r
                         G\r
O veche scrisoare si plangand\r
\r
Si-mi spune prin lacrimi \r
                  Am\r
Ce mult i-a palcut\r
\r
\r
[4]\r
 Am\r
Ma roaga sa jur ca n-am mintit\r
                                G   \r
In tot ce i-am scris si mi-a soptit\r
\r
Ca pleaca cu gandul\r
                Am \r
Ca noi ne'am iubit\r
\r
\r
Anterefren + Refren\r
\r
\r
[5]\r
\r
Revad ochii tai cum s-au stins\r
\r
Cum tamplele reci le-am cuprins\r
\r
Destinul pe ne-a invins.\r
\r
Spor la zdranganit!`,author:{id:59,name:"Talisman",slug:"talisman"},author_id:59,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Am","G","F","C","Dm","E"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:123,title:"Doina haiducului",slug:"doina-haiducului-123",content:`Dm                     F \r
Freamătă frunza în vânt\r
Gm            C\r
Murmură apa în râu\r
Bb                 Gm\r
Spicul plecat la pământ\r
  C \r
Vălura lanul de grâu.\r
F\r
Fiul codrului sunt,\r
Gm                C\r
Liber ca pasărea-n zbor\r
Bb                Gm\r
Doina haiducului cânt\r
Bb       Gm       Dm\r
Plină de jale si dor\r
\r
Puşca-i logodnica mea,\r
Murgul e fratele meu\r
Viaţa în codru e grea\r
Traiul haiducului greu\r
Pune-ţi pistoalele-n brâu\r
Boierul la târg a pornit\r
Sloboade armăsarul din frâu\r
Răsplata prin noi a venit\r
\r
	F                   C\r
	şi cum îmi place să dorm\r
	Gm                   Dm  C\r
	Noaptea-n pădure la foc\r
	F                C\r
	Stăm împreună cu toţi\r
	Gm          Bb  Dm\r
	Visul, lângă izvor.\r
 \r
Seara la rug, obositi\r
Cântă haiducii de dor\r
Laşii au fost pedepsiti\r
De bogătiile lor\r
Drumul omului - greu\r
Până la ultima stea\r
Liber e sufletul meu,\r
Liberă-i inima mea.\r
\r
	Refren`,author:{id:60,name:"Zdob și Zdub",slug:"zdob-si-zdub"},author_id:60,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Dm","F","Gm","C","Bb"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:124,title:"Adio, deci pe curand",slug:"adio-deci-pe-curand-124",content:`D             G        D    G D\r
Iubito, poti fugi cât vrei,\r
D             G         D   G D\r
În gând vei auzi pasii mei.\r
D                  G        D  \r
Poti spune vorbe multe în vânt,\r
   A\r
Eu n-am sa ascult,\r
Oh! N-am sa le-ascult!\r
\r
Iubito, poti în lume umbla\r
De mine nu mai poti scapa.\r
Voi trece zilnic prin gândul tau\r
Prin ochii tai.\r
Prin ochii tai.\r
\r
Refren:\r
              G             D\r
Dar spune-mi cine te-a mai purtat prin nori?\r
              G             D\r
Si spune-mi cine te-a mai visat în culori?\r
             G              D\r
Si stii tu cine de toate a uitat,\r
             G               A\r
De când cu tine, prin ploaie   s-a plimblat?\r
\r
Nu uiti tu zilele de mister\r
Nici clipa când stele pier\r
Nu uiti ziua aceea de mai\r
Când îmi spuneai:\r
Mai stai, mai stai!\r
\r
Nu uiti tu zilele de mister\r
Nici clipa când stele pier\r
Când timpul pentru noi disparea\r
Si inima ta\r
Batea, batea!\r
\r
Refren\r
\r
Te vad acum grabita sa pleci\r
Cum cauti doar cuvinte mai reci\r
Le spui, dar în spatele lor\r
Mai simt cum te dor.\r
Mai simt cum te dor.\r
\r
Te vad cum mai încerci sa zâmbesti\r
Dar ochii tai fug de povesti\r
Si nu te uiti la mine plecând\r
Deci, pe curând!\r
Da, pe curând!`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","G","A"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:125,title:"Canarul",slug:"canarul-125",content:`E                         C#m\r
Canarul galben ca un galbenus\r
E        B  A           E\r
Cu pene moi  si ochii dusi\r
                           C#m\r
Canta de dupa sarmele de-argint\r
E            B A            E\r
Si viersu-i se  pierdea in vant\r
                               C#m\r
Deodata ochii tristi din cap tresar\r
E           A   F#m          E\r
Si da din aripi,   dar in zadar\r
                               C#m\r
Lovind cu pieptul sarmele de argint\r
B        A  F#m              E\r
Cade in jos     cu pieptul frant\r
  A      B             E\r
Sarman canar, ti s-a parut\r
    A  B              E\r
Ca zarile ti s-au deschis\r
     A        B             C#m\r
Dar n-a fost doar, decat un vis\r
A             E\r
Ranit tu ai cazut\r
\r
E                         C#m\r
Canarul galben ca un galbenus\r
E        B  A           E\r
Cu pene moi  si ochii dusi\r
                          C#m\r
Canta de dupa sarmele de-argint\r
            A  B               E\r
Si viersu-i se     pierdea in vant\r
Si viersu-i se pierdea in vant\r
Si viersu-i se pierdea in vant`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["E","C#m","B","A","F#m"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:126,title:"Cantec soptit",slug:"cantec-soptit-126",content:`Intro pian: D Em C Am D Em C Am G D G D G A Am C Bm G D\r
D             G    D\r
Odata am ucis   o vrabie.\r
                                A\r
Am tras cu prastia in ea si-am lovit-o.\r
G          D   G                D\r
 Pe urma o zi   si o noapte intreaga  |\r
G        A                   D        |  x2\r
 Am tot plans-o si am tot jelit-o.    |\r
\r
Pian:\r
D Em C Am D Em C Am\r
\r
Nu m-a batut mama, nu m-a certat.\r
In mana tineam o bucata de paine.\r
Degeaba mi-a spus, degeaba mai plangi,\r
Ce-ai omorat, omorat ramane.\r
\r
Mai tarziu am crescut flacaiandru,\r
M-am indragostit nebuneste de-o fata.\r
Nu stiu de ce, intr-o zi a murit\r
Si-n alta zi a fost ingropata.\r
\r
De mult nu mai trag cu prastia-n vrabii,\r
De mult nu mai merg la nici o-ngropare.\r
Soarele apune dupa niste maguri\r
Si rasare in flacari din mare.`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","Em","C","Am","G","A","Bm"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:127,title:"Daca ai ghici",slug:"daca-ai-ghici-127",content:`Intro: C Am F C G   C Am F G C\r
\r
C\r
Daca ai ghici\r
               Am\r
Tot ce-ti pot dori,\r
Eu ti-as prinde-n par\r
            F\r
Cununa de sori,\r
            C    G \r
Stopita cu floooori.\r
\r
C\r
Incearca sa zambesti\r
             Am\r
Far'sa te-amagesti\r
Si sa iti doresti\r
           F  G\r
Un lucru usor\r
              C        \r
Fiindca-i trecator.\r
\r
A||---0--2----|\r
Am                     \r
Daca iei un strop de ploaie\r
     Em\r
In palma ai sa vezi\r
Dm                      C\r
Ca nu-i atat de greu sa speri.\r
\r
A||---0--2----|\r
Am\r
Fur-o raza de lumina,\r
Em\r
Incearca-n ea sa crezi\r
Dm                         G\r
Si ridica-ti fruntea spre cer.\r
\r
C\r
Daca ai ghici\r
               Am\r
Tot ce-ti pot dori,\r
Eu ti-as prinde-n par\r
            F\r
Cununa de sori,\r
            C    G \r
Stopita cu floooori.\r
\r
C\r
Incearca sa zambesti\r
             Am\r
Far'sa te-amagesti\r
Si sa iti doresti\r
           F  G\r
Un lucru usor\r
              C        \r
Fiindca-i trecator.\r
\r
Ia un strop de fericire\r
Dintr-un colt de cer,\r
Ochii oglindeste-i in el.\r
Ia un fluture din soare,\r
Puneti-l in par,\r
Langa o cununa de mar.\r
\r
\r
Daca ai ghici\r
Tot ce-ti pot dori,\r
Eu ti-as prinde-n par\r
Cununa de sori,\r
Stopita cu flori.\r
\r
Incearca sa zambesti\r
Far'sa te-amagesti\r
Si sa iti doresti\r
Un lucru usor\r
Fiindca-i trecator.`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["C","Am","F","G","Em","Dm"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:128,title:"Esarfa in dar",slug:"esarfa-in-dar-128",content:`Capo pe II\r
 \r
D\r
Cu ape de rosu-n ochi,\r
Bm\r
Valuri largi de alb,\r
F#m\r
Mov si verde zboara cald\r
              Em   A\r
Pe chipul tau drag,\r
            D  G A\r
Esarfa in dar.\r
\r
D\r
Tin minte si-acum\r
Bm\r
Ne-am oprit din drum\r
F#m\r
Ce bine-mi amintesc, ce clar,\r
          Em    A\r
Ti-am infasurat\r
           G\r
Esarfa in dar.\r
\r
Pasaj: B E B E B \r
\r
D\r
Culorile alergau,\r
Bm\r
In vant se certau\r
F#m\r
Fata toata-ti lumina\r
            Em   A\r
Cu albul de var,\r
           D  G\r
Esarfa in dar.\r
\r
Aveam optsprezece ani,\r
Eram Beatles fani\r
Si umblam in tenisi albi.\r
Primavara-n par\r
Si miros de mar.\r
\r
Refren:\r
Bm         F#m\r
Aaaaaaaaaa mai trecut de-atunci ceva,\r
Bm           F#m\r
Aaaaaaaalbul de var nu-i chiar la fel\r
      G\r
Tu gandesti altceva\r
D           Bm\r
Si mai e si el.\r
Em\r
Eu, aici, tu, acolo,\r
E          A\r
Niciodata noi.\r
\r
\r
Te mai vad, cand si cand,\r
El in stanga ta,\r
Si nu pot sa-ti spun ce gandesc\r
Cand la gatu-i vad\r
Esarfa in dar.\r
\r
Cu ape de rosu-n ochi,\r
Valuri largi de alb,\r
Mov si verde zboara cald\r
Pe chipul tau drag,\r
Esarfa in dar.\r
Pe chipul tau drag,\r
Esarfa in dar...\r
Pe chipul tau drag...\r
Esarfa in dar...\r
 \r
\r
\r
\r
\r
E\r
Cu ape de rosu-n ochi,\r
C#m\r
Valuri largi de alb,\r
G#m\r
Mov si verde zboara cald\r
              F#m  B\r
Pe chipul tau drag,\r
            E  A B\r
Esarfa in dar.\r
\r
E\r
Tin minte si-acum\r
C#m\r
Ne-am oprit din drum\r
G#m\r
Ce bine-mi amintesc, ce clar,\r
          F#m   B\r
Ti-am infasurat\r
           A\r
Esarfa in dar.\r
\r
Pasaj: B E B E B \r
\r
E\r
Culorile alergau,\r
C#m\r
In vant se certau\r
G#m\r
Fata toata-ti lumina\r
            F#m  B\r
Cu albul de var,\r
           E  A\r
Esarfa in dar.\r
\r
Aveam optsprezece ani,\r
Eram Beatles fani\r
Si umblam in tenisi albi.\r
Primavara-n par\r
Si miros de mar.\r
\r
Refren:\r
C#m        G#m\r
Aaaaaaaaaa mai trecut de-atunci ceva,\r
C#m          G#m \r
Aaaaaaaalbul de var nu-i chiar la fel\r
      A\r
Tu gandesti altceva\r
E           C#m\r
Si mai e si el.\r
F#m\r
Eu, aici, tu, acolo,\r
F#         B\r
Niciodata noi.\r
\r
\r
Te mai vad, cand si cand,\r
El in stanga ta,\r
Si nu pot sa-ti spun ce gandesc\r
Cand la gatu-i vad\r
Esarfa in dar.\r
\r
Cu ape de rosu-n ochi,\r
Valuri largi de alb,\r
Mov si verde zboara cald\r
Pe chipul tau drag,\r
Esarfa in dar.\r
Pe chipul tau drag,\r
Esarfa in dar...\r
Pe chipul tau drag...\r
Esarfa in dar...`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","Bm","F#m","Em","A","G","E","C#m","G#m","B","F","F#"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:129,title:"Hanul lui Manuc",slug:"hanul-lui-manuc-129",content:`C              F\r
Fata frumoasa, fata straina,\r
C                G\r
Diseara am sa te duc\r
    C                 F\r
Pentru convorbiri pentru cina\r
   C     G     C\r
La Hanul lui Manuc,\r
   F     G     C\r
La Hanul lui Manuc.\r
\r
Refren:\r
C          F\r
Nu sînt trasuri,\r
   G       C\r
Nu poti sa pleci,\r
F       G     C\r
Secolul e douazeci.\r
C          F\r
Nu sînt trasuri,\r
     G      C\r
N-ai cum sa pleci,\r
F       G     C\r
Secolul e douazeci.\r
\r
C             F\r
Diseara sa fi pregatita,\r
  C              G\r
Diseara am sa te duc\r
         C               F\r
Pentru o cafea turceasca si-o clatita,\r
   C     G     C\r
La Hanul lui Manuc,\r
   F     G     C\r
La Hanul lui Manuc.\r
\r
Refren\r
\r
C                F\r
Nu vin haiducii, sînt ospatarii\r
C                G\r
Dulce iubito, eu sînt\r
       C             F\r
Gândul meu afla-l tu si tîlharii,\r
   C     G     C\r
La Hanul lui Manuc,\r
   F     G     C\r
La Hanul lui Manuc.\r
\r
Refren\r
\r
C               F\r
Haide frumoaso, haide straino,\r
C                  G\r
Dragostea mea fara leac\r
C               F\r
Vino cu mine, surâzi si vino,\r
   C     G      C\r
La Hanul lui Nalbea,\r
   F     G      C\r
La Hanul lui Nalbea.\r
\r
C          F\r
Sînt si trasuri,\r
G          C\r
Poti si sa pleci,\r
F          C     G       C\r
Mai e un mileniu pâna sa fie\r
F       G     C\r
Secolul e douazeci.\r
C          F\r
Sînt si trasuri,\r
G          C\r
Poti si sa pleci,\r
F          C     G       C\r
Mai e un mileniu pâna sa fie\r
F       G     C\r
Secolul e douazeci.\r
F          C     G       C\r
Mai e un mileniu pâna sa fie\r
F       G     C\r
Secolul e douazeci.`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["C","F","G"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:130,title:"Intoarcera la Orient",slug:"intoarcera-la-orient-130",content:`Intro: Va jucati pe Re si nota C (fretul 3)\r
\r
D                     C   \r
Se intoarce iar acasa Fat Frumos din pribegie \r
G                  D\r
La batranii sai parinti \r
\r
La batranii sai parinti \r
D                           C   \r
Si cu gand sa-si ia mireasa ca un fir de papadie \r
G                   D\r
Numai bun de rupt in dinti \r
\r
Numai bun de rupt in dinti \r
\r
Dar obloanele-s lasate pe o lipsa de mirese \r
Si-asta inca nu-i destul \r
Si-asta inca nu-i destul \r
Umbla zvonul ca-s plecate sa devina-mparatese \r
Undeva prin Istambul \r
Undeva prin Istambul \r
\r
Prin dughene si tramvaie cu confort sporit de cusca \r
Tatal zvon e imparat \r
Tatal zvon e imparat \r
Si se-arata ades pe ploaie zvon de mite goale pusca \r
Prin Orient dupa vanat \r
Prin Orient dupa vanat \r
\r
G            C         G            D    G\r
Radeti voi, radeti voi vechi amici din Bizant \r
G            C          G         D  \r
Radeti voi dar priviti diligenta zace-n sant \r
G         C         G        D        G\r
Chiar si calul abia mai respira de-un sfant \r
G             C        G         D\r
Iar sub noi, ce belea, bicicleta n-are lant \r
\r
Alte zvonuri vand comploturi cu savante tevi de pusca \r
Slugi marunte si mai mari \r
Slugi marunte si mai mari \r
Unele cu doua poturi ca sa-l afle in timp ce musca \r
Biata lume de salvari \r
Biata lume de salvari \r
Sub escorta din savana cic-ar fi sosit aseara \r
Intr-un tren accelerat \r
Intr-un tren accelerat \r
Chipul zeului banana ce va fi expus in gara \r
Si apoi sanctificat \r
Si apoi sanctificat \r
\r
Radeti voi, radeti voi, vechi amici din Bizant \r
Radeti voi dar priviti diligenta zace-n sant \r
Chiar si calul abia mai respira de-un sfant \r
Iar sub noi, ce belea, bicicleta n-are lant \r
\r
Poate nu-i exact decorul, poate-mparatia-i trista \r
Insa plina de umor \r
Insa plina de umor \r
Hai sa tragem zdrang zavorul realitatea nu exista \r
Noapte buna tuturor \r
Doamnelor si domnilor.`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","C","G"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:131,title:"Laptaria lui Enache",slug:"laptaria-lui-enache-131",content:`D\r
Iti amintesti, se inserase,\r
                    Em \r
Umblam pe starzi intortocheate,\r
                       G\r
Mergeam firesc pana la urma\r
                   D\r
La Laptaria lui Enache.\r
\r
D\r
Iubito, hai, prin poarta noptii,\r
                             Em\r
Sa trecem si-o sa-mi dai dreptate,\r
                           G\r
Sa stam macar un ceas sau doua,\r
                  D\r
La Laptaria lui Enache.\r
\r
F#m          G\r
   Habar nu am, habar nu ai,\r
        D                     A\r
   Ca timpul trece, se prea poate,\r
F#m         G\r
   Pana la ziua sa ramanem,\r
          D                    A\r
   Deci iarasi suntem pusi pe fapte.\r
\r
Iti mai spuneam din cand in cand,\r
C-o sa ma pierd cu tine-n noapte,\r
Dar tot ne-oprim sa bem o bere,\r
La Laptaria lui Enache.\r
\r
Erai usor infiorata,\r
E-adevarat, trecuse anu',\r
O, Doamne, cat de mult doreai\r
Sa cante Johnny Raducanu.\r
\r
Habar nu am, habar nu ai,\r
Ca timpul trece, se prea poate,\r
Pana la ziua sa ramanem,\r
Deci iarasi suntem pusi pe fapte.\r
\r
(solo )\r
\r
Habar nu am, habar nu ai,\r
Ca timpul trece, se prea poate,\r
Pana la ziua sa ramanem,\r
Deci iarasi suntem pusi pe fapte.\r
                      E\r
La umbra ochilor tai mari,\r
                        F#m\r
Sa stau s-ascult e-o sarbatoare,\r
                     A\r
Am reusit s-avem un loc\r
                  E\r
Si asta este de mirare.\r
\r
E\r
Si fiindca te doresc prea mult\r
                        F#m\r
Si casa mea nu-i prea departe,\r
                      A\r
Te iau de mana si te duc\r
                  E\r
Din Laptaria lui Enache.\r
\r
E        A \r
Laptaria  lui Enache (x5 & fade out)`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","Em","G","F#m","A","E","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:132,title:"Mica Tiganiada",slug:"mica-tiganiada-132",content:`Pasarea Colibri-Mica tiganiada\r
\r
INTRO: Am\r
\r
Am      C      G\r
Trec tigani pe drum,\r
Am       C      G\r
Drumu-i plin de fum,\r
Am     C       G\r
Fumu-i plin de scrum,\r
E     Am\r
Foc ardea!\r
\r
Vai tigani, tigani,\r
Gipsies si gitani,\r
Fara cer si ani,\r
Trec pe drum!\r
\r
G        C\r
Tiganie, rai\r
G         C\r
Rai care erai\r
G   C   G\r
Caravan serai\r
E     Am\r
Giacardea.\r
\r
Raiul meu beteag,\r
De pe alt meleag\r
Cat imi esti de drag,\r
Nu stiu cum.\r
\r
\r
Trec tigani prin colb\r
Colbul este orb,\r
Orbul e un corb,\r
Giacardea.\r
Cade seara-n camp,\r
Soarele-i scalamb,\r
Cortul este stramb,\r
Foc ardea.\r
\r
Fac tiganii foc,\r
Focu-i la mijloc,\r
Fete cu ghioc.\r
Si cu carti de joc,\r
Hai, noroc, noroc,\r
Vino la soroc.\r
\r
Vino sa-ti ghicesc,\r
Cartile vorbesc\r
Si nu ne mintesc,\r
Giacardea.\r
Fata de caro,\r
Sub cer indigo,\r
Sa-ti spun incotro\r
Foc ardea.\r
\r
Ca multi ani s-au scurs\r
De cand el s-a dus\r
Cu un pui de urs\r
Pe un drum.\r
Cu belciug si lant,\r
Fara nici un sfant,\r
Spre un targ bizant,\r
Foc ardea.\r
\r
Zaiafet acum,\r
Lautari duium,\r
Numai tu nicicum,\r
Giacardea.\r
Noaptea de-ar veni,\r
Pe pamantul gri,\r
De ne-ar adormi,\r
Orisicum.\r
\r
O, dar azi, dar azi,\r
Ceru-i de atlaz,\r
Soarele-n extaz.\r
Ei se duc la pas\r
Spre un alt popas,\r
Satra de pripas.\r
Pana nu-i mai vezi,\r
Pana nu-i mai crezi\r
Si din ochi ii pierzi.\r
Printre ceturi verzi,\r
Ceturi de livezi,\r
Vezi ca nu-i mai vezi.\r
\r
Giacardea, cardea,\r
Gialino mura,\r
Gia mura, mura,\r
Ce misto...\r
Giacardea, cardea,\r
Gialino mura,\r
Gia mura, mura,\r
Ce misto...\r
Giacardea, cardea,\r
Gialino mura,\r
Gia mura, mura,\r
Ce misto...\r
Giacardea, cardea,\r
Gialino mura,\r
Gia mura, mura,\r
Ce misto...\r
\r
Foarte simplu si foarte corect asa. Nu inteleg de ce se compica toata lumea \r
cu o gramada de acorduri la melodia asta :-?\r
Oricat de mult v-ati chinui, n-o sa va iasa niciodata ca lui Baniciu :))\r
(Capodastru pe tasta 4 daca vreti sa sune ca originalul)\r
\r
zdranga-zdranga, fun fun fun :)`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["Am","C","G","E"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:133,title:"Miruna",slug:"miruna-133",content:`Suna bine din D, cu capo pe III (originalul e in F)\r
\r
D\r
Dragă Miruna îţi spun printre şoapte\r
    G\r
Îmi place cămaşa ta de noapte\r
    A\r
Dar mai ales vreau să-ţi dau de ştire\r
        G        A\r
Să mi-o laşi ca amintire,\r
        G         A\r
Să mi-o laşi ca amintire\r
\r
Nespus de frumos dormeai o noapte blândă\r
Zâmbeai prin somn iau eu stăteam la pândă\r
Să nu te trezesc, să tulbur visele tale\r
Dar vreau să-ţi iau şi costumul de baie\r
Să te-admir cu şi fără costumul de baie\r
\r
     Bm                       G\r
În Grădina Botanică, într-o duminică\r
      D        A\r
Ea se plimbă\r
          Bm                   G\r
Ne-am fotografiat cu un vechi aparat\r
   D       A\r
Automat\r
\r
Un celebru şi bun coleg de facultate\r
Spunea c-aveai blugii rupţi la spate\r
Veneai spre casă când afară plouă\r
Cu troleibuzul 89\r
Blondă şi tristă cum ne-ai plăcut nouă\r
\r
Cu pălăria de paie cu panglică mov\r
Ieşeai din clădirea de pe strada Snagov\r
Uşor te-ndreptai spre calea Moşilor\r
Să-ţi iei bluză pepit de la Bucur Obor\r
Bluză pepit de la Bucur Obor\r
\r
Venind din practică poşetă galbenă\r
Ea îşi luă\r
În magazine-a intrat, fustă şi-a cumpărat\r
Maxi-nflorat\r
\r
Dragă Miruna, ce rost are să-ţi cumperi toate lucrurile acestea – cheltuieşti o... \r
sumă prea mare de bani. De fapt, ştii foarte bine ce-ţi spuneam in seara aceea, \r
printre şoapte...\r
\r
...Îmi place cămaşa ta de noapte\r
Dar mai ales vreau să-ţi dau de ştire\r
Să mi-o laşi ca amintire\r
Să mi-o laşi ca amintire\r
\r
Acum mă priveşti dintr-o poză cu zimţi \r
Atunci aveai nervi dar şi buze fierbinţi\r
şi te auzeam cum strigai printre şoapte\r
Unde-i cămaşa mea de noapte\r
Unde-i cămaşa mea de noapte\r
La mine-i cămaşa ta de noapte\r
La mine-i cămaşa ta de noapte\r
Plâng pe cămaşa ta de noapte\r
Plâng pe cămaşa ta de noapte`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","G","A","Bm"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:134,title:"Ploaia care va veni",slug:"ploaia-care-va-veni-134",content:`(adaptare de Dorin Liviu Zaharia dupa\r
o piesa a grupului "ECHIPA '84", Dorin Liviu Zaharia)\r
\r
D                          F#m\r
Sunt un frate tanar, care crede in dreptate,\r
         A                    D\r
Am ochi negri dar am mainile curate.\r
D                            F#m\r
Iubesc pletele si ploaia si camasile-nflorate,\r
      A                               D\r
Nu raspund cand mi se-arunca vorbe-n spate.\r
\r
Em                 D\r
Un fapt fara importanta\r
Em                D\r
ma poate face sa sper,\r
Em                  D\r
Ma-nclin si pun in balanta\r
Em                   D\r
ce-i sfant cu ce-i efemer.\r
                  Em\r
Peste tot atarna greu\r
A                D\r
 Teama de sinceritate...\r
\r
Dar de cate ori, prieteni, n-am suras cu intristare\r
Cand sperantele pareau inselatoare.\r
Cand necinstea si prostia\r
si-ascundeau prin gropi norocul,\r
Stiti de cate ori, prieteni, le-am prins jocul.\r
\r
Ne-am saturat de palavre,\r
de carti si filme de soc,\r
Cu vampe, regi si cadavre,\r
cu stele de iarmaroc.\r
Ploaia care va veni\r
Le va potopi pe toate.\r
\r
Ni-e lehamite de marsuri,\r
de tromboane si plocoane,\r
De blazoane, de canoane si fasoane.\r
Fiindca banul si prostia\r
sunt pericole morale\r
Circul vietii ne-a impus salturi mortale.\r
\r
Deasupra florilor noastre\r
ciuperca cheama a pustiu,\r
Din cer cad pasari albastre\r
si totusi nu e prea tarziu.\r
\r
Ploaia care va veni\r
Le va potopi pe toate.\r
Sa-ncercam sa facem noi\r
Un oras fara pacate.\r
4*| Ploaia care va veni\r
| Le va potopi pe toate.`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","F#m","A","Em","Am"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:135,title:"Sfarsitul nu-i aici",slug:"sfarsitul-nu-i-aici-135",content:`(original: "Death is not the end") \r
Autor muzica: Bob Dylan \r
Autor versuri: Bob Dylan, trad. Florian Pittis\r
\r
A\r
Cand necazuri te doboara\r
Si prieteni n-ai sa-i strigi,\r
      E\r
Tine minte\r
                A\r
sfarsitul nu-i aici.\r
\r
A\r
Si ce slaveai in taina\r
E-asa cum nu-ti explici,\r
       E\r
Tine minte\r
                A\r
sfarsitul nu-i aici.\r
\r
Refren\r
A\r
Nu-i aici, (nu, nu)\r
Nu-i aici, (nu, nu)\r
      E\r
Tine minte\r
 D       E     A\r
sfarsitul nu-i aici. (nu, nu)\r
\r
Cand oprit la o rascruce,\r
Drumul nu stii sa-l prezici,\r
Tine minte\r
sfarsitul nu-i aici.\r
\r
Cand nu mai ai nici vise\r
Si nu stii cum sa te ridici,\r
Tine minte\r
sfarsitul nu-i aici.\r
\r
Refren\r
\r
Cand se-aduna norii negri,\r
Ploaia cade ca un brici,\r
Tine minte\r
sfarsitul nu-i aici.\r
\r
Mangaiere n-ai, nu vezi acum\r
Maini intinse de amici\r
Tine minte\r
sfarsitul nu-i aici.\r
\r
Refren\r
\r
Bridge\r
        D\r
Pomul vietii creste mandru\r
       A\r
Unde spiritul e viu,\r
     D\r
Lumineaza ea, salvarea,\r
       A           E\r
Cerul gol si cenusiu.\r
\r
\r
Cand orasele-s in flacari,\r
Musuroaie de furnici,\r
Tine minte\r
sfarsitul nu-i aici.\r
\r
Si cand cauti in zadar un om\r
Printre-atatea mii de venetici,\r
Tine minte\r
sfarsitul nu-i aici.\r
\r
Refren & fade out`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["A","E","D"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:136,title:"Vanare de vant",slug:"vanare-de-vant-136",content:`C               F     G7      C
Cate drumuri un om ar avea de facut 
C               F      G7
Pana ei sa-l considere om?
Cate mari pescarusii mai au de batut
Pan-ajung pe nisip pentru somn?
Cate bombe vor mai sfarteca vieti intregi
Pan'sa le interzicem pe veci?

            F          G7         C       Am
Refren : Raspunsul, prieteni, e vanare de vant
            F          G7      C
         Raspunsul e vanare de vant
         Raspunsul, prieteni, e vanare de vant
         Raspunsul e vanare de vant.


Cati ani poate-un munte in lume trai
Pana marea sa-l spele-ntr-o zi?
Si cati ani si oamenii pot vietui
Pana liberi permis li-i a fi?
De cate ori omul vede un rau
Si tace intorcand capul sau?


Refren: ...


De cate ori omul in sus va privi
Pana cerul sa-l vada de-ajuns?
Cat de multe urechi necesare ii sunt
Ca s-auda al gurilor plans?
Cati mai au de murit ca s-aflam in sfarsit
ca oameni prea multi au pierit?


Refren: ...



*Nota: Cantec folk de referinta.

Succes!`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:24,name:"Country",slug:"country",description:""},{id:3,name:"Folk",slug:"folk",description:""}],chords:["C","F","G7","Am"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:137,title:"Viata la tara",slug:"viata-la-tara-137",content:`              \r
  G\r
| La, ra-ra-ru, la-p-ta,\r
\r
| La, ri-ra-ra-ra,\r
  C\r
| La, ri-li-lu-li-p-ti\r
\r
| La-la-ri-lu-la-la,\r
  D\r
| Lu, li-li-lu-li-p-ti,\r
   \r
| Lu-lu-lu-li-lu, \r
                             G C G\r
| Li-lu-lu, li-lu-lu, li-lu-lu !\r
\r
G    \r
Locuinta mea de vara \r
C\r
E la tara ...\r
D               G C G\r
Acolo era sa mor \r
G      \r
De urat si de-ntristare\r
C\r
Beat de soare\r
D                 G C G              \r
Si parlit ingrozitor!\r
\r
\r
Acolo, cand n-are treaba, \r
Orice baba\r
Este medic comunal. (medic!)\r
Viata ce aci palpita\r
E lipsita\r
De confort occidental.\r
\r
Nu exista berarie, (au!)\r
Nici regie ...\r
Doar un hot de carciumar (hot de carciumar! ha-ha!)\r
Care are marfa proasta\r
Si-o nevasta \r
Ce se tine c-un jandar'.\r
\r
| La, ra-ra-ru, la-p-ta,\r
| La, ri-ra-ra-ra,\r
| La, ri-li-lu-li-p-ti\r
2* | La-la-ri-lu-la-la,\r
| Lu, li-li-lu-li-p-ti,\r
| Lu-lu-lu-li-lu, \r
| Li-lu-lu, li-lu-lu, li-lu-lu !\r
\r
Cand te duci pe drumul mare\r
La plimbare\r
Este praf de nu te vezi: \r
Trec, miscand domol din coada,\r
Spre livada\r
Ale satului cirezi. (mmmmmmuu!)\r
\r
Si te poarta sub escorta\r
O cohorta\r
De tantari subtiri la glas, (sss! tz-tz-tz-tz!)\r
Inzestrati la cap c-o scula\r
Minuscula,\r
Cu pretentie de nas... (o-ho-hopa!)\r
\r
| La, ra-ra-ru, la-p-ta,\r
| La, ri-ra-ra-ra,\r
| La, ri-li-lu-li-p-ti\r
2* | La-la-ri-lu-la-la,\r
| Lu, li-li-lu-li-p-ti,\r
| Lu-lu-lu-li-lu, \r
| Li-lu-lu, li-lu-lu, li-lu-lu !\r
\r
Cand se ia cate-o masura,\r
Lumea-njura\r
Pe agentul sanitar\r
Si-l intreaba fara noima:\r
"CE-AI CU NOI, MA ?\r
PENTRU CE SA DAM CU VAR ?"\r
\r
Ale satului mari fete\r
Fara ghete\r
Ies la garduri pe-nserat... (aaah!)\r
(Am vazut aici-ntr-o noapte\r
Niste fapte\r
Care m-au scandalizat !)\r
\r
        A       \r
Dar in zori incep cocosii\r
D\r
Pacatosii,\r
E                   A D A\r
Ca sa faca iar scandal, (cucurigu!)\r
A          \r
Sa te saturi de viata\r
D\r
Si dulceata\r
E                 A D A\r
Traiului patriarhal !\r
\r
\r
D-aia zic eu, prin urmare,\r
Vorba mare:\r
Ca de-acuma, sa ma tai,\r
Nu-mi mai trebuie alta cura (nu!)\r
In natura\r
Sa ma duceti cu alai !\r
\r
| La, ra-ra-ru, la-p-ta,\r
| La, ri-ra-ra-ra,\r
| La, ri-li-lu-li-p-ti\r
2* | La-la-ri-lu-la-la,\r
| Lu, li-li-lu-li-p-ti,\r
| Lu-lu-lu-li-lu, \r
| Li-lu-lu, li-lu-lu, li-lu-lu !\r
\r
Mearga pictorii la tara (da!)\r
Ca sa piara\r
De caldura si de praf ! (asa le trebuie!)\r
Mie dati-mi strazi pavate, (se-aude, primaria?)\r
Maturate, (da!)\r
Dati-mi cinematograf ! (SI BINGO!)\r
\r
Dati-mi, dati-mi strada-ngusta\r
Unde gusta\r
Omul viata mai din plin,\r
Cu trasuri, femei cochete (ee!)\r
Si cu fete (EEE!)\r
Incaltate cel putin ! (hei!)\r
\r
| La, ra-ra-ru, la-p-ta,\r
| La, ri-ra-ra-ra,\r
| La, ri-li-lu-li-p-ti\r
2* | La-la-ri-lu-la-la,\r
| Lu, li-li-lu-li-p-ti,\r
| Lu-lu-lu-li-lu, \r
| Li-lu-lu, li-lu-lu, lï-lu-lu !\r
\r
\r
This one is really easy ;););)    zdranga-zdranga :D:D:D`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["G","C","D","A","E","Am"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:138,title:"Vinovatii fara vina",slug:"vinovatii-fara-vina-138",content:`D \r
Sunt curat la trup, curat la suflet,\r
                             Em\r
Vreau sa-i inteleg si sa-i iubesc.\r
                           D\r
Nu conteaza cat de lung am parul,\r
A                           D\r
Important e cat de mult gandesc.\r
\r
Simt in trup pletosii daci, comati,\r
Firea mea e saltul omenesc.\r
Nu conteaza cat de lung am parul,\r
Important e cat si cum gandesc.\r
\r
G           C    G\r
Lume, lume, sora lume,\r
G           C    G\r
Lume, lume, sora lume,\r
C               G      \r
De ce esti rea, rea de gura,\r
D                     G\r
De ce ne privesti cu ura?\r
C               G\r
Vinovatii fara vina\r
D                  G\r
Cer sa se faca lumina.\r
\r
Vrea sa-nalt castele de gandire,\r
Vreau sa fiu lasat sa simt cum cresc.\r
Nu conteaza cat de lung am parul,\r
Important e cat si cum gandesc.\r
\r
Nu e loc de noi in lumea voastra,\r
Nu-s din noi acei ce ne muncesc\r
Si tin cont de cat de lung am parul,\r
Nu de cum si cat de mult gandesc.\r
\r
Lume, lume, sora lume,\r
Lume, lume, sora lume,\r
De ce esti rea, rea de gura,\r
De ce ne privesti cu ura?\r
Vinovatii fara vina\r
Cer sa se faca lumina.\r
\r
E    \r
Hei, voi, neatenti la soarta noastra\r
                               F#m\r
Hei, voi, ce ne credeti pui de drac!\r
                          E\r
Gandurile voastr-s si-ale noastre,\r
B                     E\r
Gusturile insa nu ne plac.\r
\r
\r
Hei, voi, care-ati fost odata tineri,\r
Hei, voi, care stiti ce-i omenesc!\r
Nu conteaza cat de lung am parul,\r
Mai presus e cat si cum gandesc.\r
\r
Lume, lume, sora lume,\r
Lume, lume, sora lume,\r
De ce esti rea, rea de gura,\r
De ce ne privesti cu ura?\r
Vinovatii fara vina\r
Cer sa se faca lumïna.\r
\r
ACORDURILE SUNT SIMPLE, VEDETI VOI CUM VA DESCURCATI KU RITMUL :)`,author:{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri"},author_id:61,categories:[{id:3,name:"Folk",slug:"folk",description:""}],chords:["D","Em","A","G","C","E","F#m","B"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:139,title:"Pleaca",slug:"pleaca-139",content:`INTRO:\r
\r
Em  C  D  G  B   x2\r
\r
Em                  C\r
  Era miercuri spre joi\r
D                   G      B  Em\r
  Ma iubeai pan' la cer si inapoi\r
                    C\r
  Doua nopti mai tarziu\r
F#                 B\r
  Nu puteam sa zbor sau sa mai fiu...\r
\r
Em             C\r
  Poza ta la minut\r
D                 G      B       Em\r
  O scrisoare si-atat, nimic mai mult\r
                 C\r
  Scria negru pe alb\r
F#             B\r
  Adiooo! exclamat la final...\r
\r
  Em                    C\r
  Pleaca! maine o sa-mi treaca\r
     D                G      B      Em\r
  Ce daca durerea a venit si nu mai pleaca\r
             C      D\r
  Lasa-ma sa mor de dor\r
            G       B\r
  Fericirea mea, la naiba!\r
  Em\r
  Pleaca!\r
\r
Am ramas ca un orb\r
Nu te mai vad la mine-n viitor\r
Am ramas ca un mut\r
Nici n-am mai apucat sa te sarut...\r
\r
Pleaca! maine o sa-mi treaca\r
Ce daca durerea a venit si nu mai pleaca\r
Lasa-ma sa mor de dor\r
Fericirea mea, la naiba!\r
\r
Pleaca! maine o sa-mi treaca\r
Ce daca durerea a venit si nu mai pleaca\r
Lasa-ma sa mor de dor\r
Fericirea mea, la naiba!\r
\r
Lacrimi nu mai incap\r
Numai tu mi-ai dat lumea peste cap\r
In loc sa ne iubim\r
Ne purtam ca doi anonimi\r
\r
Pleaca! maine o sa-mi treaca\r
Ce daca durerea a venit si nu mai pleaca\r
Lasa-ma sa mor de dor\r
Fericirea mea, la naiba!\r
\r
Em                    C\r
Pleaca! Maine o sa-mi treaca\r
D\r
Pleaca!\r
\r
Pleaca! Maine o sa-mi treaca\r
Pleaca!\r
Pleaca! Maine o sa-mi treaca\r
Pleaca!\r
Pleaca! Maine o sa-mï treaca\r
Pleaca!\r
Pleaca`,author:{id:48,name:"Vunk",slug:"vunk"},author_id:48,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Em","C","D","G","B","F","F#","Am"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:140,title:"Fie sa renasca",slug:"fie-sa-renasca-140",content:`Intro: \r
  \r
Em D x4\r
\r
Em        G    D            Em\r
Fie sa renasca numai cel ce har\r
Em          G    D            Em\r
Are de-a renaste curatit prin jar\r
Em         G       D               Em\r
Din cenusa proprie si din propriul scrum\r
Em         G        D         Em\r
Asctazi ca si maine pururi si acum\r
\r
   Am           D              Em\r
   Cat am asteptat sa vina vara\r
   Am            D                 G\r
   Mugurii sa se preschimbe-n flori\r
   Am                D        G                   Em\r
   Am trait doar cu speranta, scump platitam cutezanta\r
   Am                D           Bm\r
   De-a ravni un cer fara de nori\r
   Am                   D      G                       Em\r
   Stai de veghe si i-a seama, sa nu-ti fure altul vama\r
   Am                   D            Em D\r
   Cum s-a intamplat de-atatea ori`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Em","G","D","Am","Bm"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:141,title:"Sa nu crezi nimic",slug:"sa-nu-crezi-nimic-141",content:`intro:\r
             repeta\r
e|-----------|---|----/12--/12---12p10p8---7---10b12--10--8--7---10b12~~-|\r
B|--<12>--0--|---|-------------------------------------------------------|\r
G|-----------|---|-------------------------------------------------------|\r
D|-----------|---|-------------------------------------------------------|\r
A|-----------|---|-------------------------------------------------------|\r
E|-----------|---|-------------------------------------------------------|\r
\r
Strofa:\r
                  Am\r
 Sa nu crezi ce-ti spun acum\r
                  Dm        G\r
 Vorbele-mi sunt vant nebun\r
 Am       G           F  \r
 Sa nu crezi ce-ti spun acum\r
  F  \r
 Chiar de eu iti spun\r
     Dm             G\r
    vei fi a mea oricum\r
\r
 Sa nu crezi ce-auzi acum\r
 E un cantec scris pe drum\r
 Pentru ea, doar pentru ea\r
    il voi canta oricum\r
\r
Ref:\r
                Em \r
 Sa nu crezi nimic\r
                Dm\r
 Vorbele-s doar fum\r
                Dm\r
 Iar ce simti tu lasi in drum\r
                Am\r
 In praf de amintire\r
\r
\r
solo:\r
\r
e|------5-7-8------------------------------------5-|\r
B|-----5------5---6p5\\3-5----/5p3------------5h8--|\r
G|----5---------------------------5-5p3--5/7-------|\r
D|---7---------------------------------------------|\r
A|-------------------------------------------------|\r
E|-------------------------------------------------|\r
\r
e|---8-10-8-7----5-7-7/8-7-5--8/10-8-7--|\r
B|--------------------------------------|\r
G|--------------------------------------|\r
D|--------------------------------------|\r
A|--------------------------------------|\r
E|--------------------------------------|\r
\r
\r
e|--10/12-10-8-7-------10-10-10--8-8-8--7-7-7-|\r
B|--------------------------------------------|\r
G|--------------------------------------------|\r
D|--------------------------------------------|\r
A|--------------------------------------------|\r
E|--------------------------------------------|\r
\r
e|-----------------------8-------------------|\r
B|-10-9~~-----------/10----10----------------|\r
G|----------10-9-10--------------------------|\r
D|-------------------------------------------|\r
A|-------------------------------------------|\r
E|-------------------------------------------|\r
\r
\r
e|------------------------8-7------7--------|\r
B|----/5-------------8h10-------10----8-8-8-|\r
G|-------7-5---5-7/9------------------9-9-9-|\r
D|-----------7------------------------------|\r
A|------------------------------------------|\r
E|------------------------------------------|\r
\r
e|---------------------------------------------|\r
B|-6-6-6--5-5-5-------------5-6-8/10-9---------|\r
G|-7-7-7--5-5-5-0h2-4-5/7----------------------|\r
D|---------------------------------------------|\r
A|---------------------------------------------|\r
E|---------------------------------------------|\r
\r
\r
Ref:`,author:{id:56,name:"Iris",slug:"iris"},author_id:56,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Am","Dm","G","F","Em","E"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:142,title:"Adeline",slug:"adeline-142",content:`-toata melodia e numai pe F#m, cu o bataie de manele\r
\r
Strofa:\r
   \r
   F#m\r
    Te-ai uitat ca un tolin\r
                               Adeline,Adeline\r
    Din minutul cel mai fin\r
                               Adeline,Adeline\r
    Scoate cu un gest de lin \r
                               Adeline,Adeline\r
    Geaca ei din vinilin\r
                               Geaca ei din vinilin\r
\r
 Ref :   solo\r
\r
E l---------------------------------------------------------------------l\r
B l---------------------------------------------------------------------l\r
G l---------------------------------------------------------------------l\r
D l-----------------------------2---------------------------------------l\r
A l--------------------2--2---------4---------4p2------2--2-------------l\r
E l----2--2----5--5-------------------------------5--------------5--5---l\r
\r
\r
               Adeline,Adelina\r
         Solo\r
               Adeline,Adelina\r
\r
   Aaa,aai,aai,aaai,aaa\r
                              La da di da di di da\r
\r
II  Adeline chiar daca termini\r
    Sunt vascularizat pe deplin\r
    Însa tin sa te previn\r
    Ai pus prea mult revulsin\r
                          Ai pus prea mult revulsin\r
\r
  Ref :   solo 2\r
                                 Se repeta\r
E l-------------------------------l----l-------------------0---------l\r
B l-----------2---------------2---l----l------2---------------2------l\r
G l--------------4---------4------l----l---------4-------------------l \r
D l------4-------------4----------l----l--4-----------4--------------l\r
A l-------------------------------l----l-----------------------------l\r
E l-------------------------------l----l-----------------------------l\r
 (se repeta)\r
\r
III  Adeline de lin e lin\r
     Unduitul din bazin \r
     Bântui iar cu-n carpatin\r
     Prin talazul Bizantin\r
                          Prin talazul Bizantin\r
 \r
  Ref`,author:{id:62,name:"Timpuri Noi",slug:"timpuri-noi"},author_id:62,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["F#m","E","B","G","D","A"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:143,title:"Nunta",slug:"nunta-143",content:`Am         C\r
Bine-i mirelui\r
F                G          Am\r
Ca nu-i nimeni-n lume ca mireasa lui\r
Am         C\r
Uita-te la ea\r
F            G            Am\r
Rupta e din cer si mandra ca o stea.\r
\r
Refren:\r
Am             C \r
Mai, ce-om mai juca\r
F            G         Am\r
Lai, la, lai, la, la, lai\r
Si ce-om mai canta,\r
Lai, la, lai, la, la, lai\r
\r
Am          F  G    Am  \r
Ce-om mai rupe la opinci\r
F          G        E\r
Si-om face gropi adanci\r
Dara nu ne vom opri\r
Pana in zori de zi.\r
\r
2.\r
Nasii mirelui,\r
Le duc fraga, grana campului, la, la\r
Iara nasii ei\r
Roua norilor si florile de teï.`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["Am","C","F","G","E"],strumming:[{pattern:["D","-","U","-","D","U","-","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:144,title:"Mila 2 de langa 3",slug:"mila-2-de-langa-3-144",content:`      G C D         G  C D    G   C D       G  C  D\r
O ghitara     si un cort,  si o mare  si un port.\r
     G   C D       G  C D\r
Geamandura, e pe nisip,\r
       G  C D      G  C D      \r
Norul are,  n-are slip.\r
\r
C        D          G\r
Hai sa vedem un Tarantino,\r
C        D          Em\r
In delta lunii cand vrei\r
C            D       G     C     D       G\r
Hai, fie-ti mila si vino, la mila 2 de langa 3\r
\r
D     G     D   C\r
La un semn delicat,\r
      D         G\r
Ne-apucam de piratat,\r
D        G  D    C\r
Spargem banca de stuff,\r
       D            Em\r
Ca in cel mai mare bluff.\r
\r
\r
O sirena si-un calcan,\r
Barca-i beata, baru-i van.\r
Hidro-fete, solduri gay,\r
Ghiata-i moale, ele-s ei.\r
Hai sa vedem un Tarantino,\r
In delta lunii cand vrei.\r
Hai, fie-ti mila si vino, la mila 2 de langa 3.\r
\r
La un semn delicat,\r
Ne-apucam de piratat,\r
Spargem banca de stuff,\r
Ca in cel mai mare bluff.\r
\r
Hai sa vedem un Tarantino,\r
In delta lunii cand vrei.\r
Hai, fie-ti mila si vino, la mila 2 de langa 3.\r
\r
La un semn delicat,\r
Ne-apucam de piratat,\r
Spargem banca de stuff,\r
Ca in cel mai mare bluff.\r
\r
La un semn delicat,\r
Ne-apucam de piratat,\r
Piratam doar pirati,\r
C-un pachet de mega-watti\r
\r
Numai crema, numai ruj,\r
Iasiul doarme langa Cluj\r
Jeepuri triste, Rolls-uri roi,\r
In reviste plin de ploi.\r
\r
\r
this song rulezzzzzzz....:D:D:D have fun!`,author:{id:55,name:"Phoenix",slug:"phoenix"},author_id:55,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["G","C","D","Em"],strumming:[{pattern:["D","-","D","U","D","-","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:145,title:"Ești frumoasă",slug:"esti-frumoasa-145",content:`G          D                     C\r
El avea ciocate, blugi originali și geacă\r
G            D                   C\r
Ea avea cosiță până-n brâu și costum tradițional\r
G                D                          C\r
Și zi de vară până-n seară făcând febră musculară la margine de codru s-au iubit\r
G                        D\r
Dar când soarele era la asfințit\r
         C\r
El ridicându-și pantalonii, exact așa-i spunea:\r
 \r
	G             D             C\r
	Fă, ești frumoasă, dar ești proastă\r
\r
	Dar ești proastă, oo\r
	G            D\r
	Fă, ești frumoasă,\r
	  C         G\r
	Proasta dracului\r
	(2 ori)\r
\r
Seara când a ajuns acasă, taică-su' se antrena cu furca-n poartă\r
Unde-ai fost fetița mea, ea că așa și-așa o tot scălda\r
Și zi de vară până-n seară făcând febră musculară mătura curtea cu eaiaiaiaiaa\r
Dar când soarele era la asfințit,\r
El aninându-și furca-n cui, părintește îi spunea:\r
 \r
	Refren.`,author:{id:63,name:"Antract",slug:"antract"},author_id:63,categories:[{id:18,name:"Rock",slug:"rock",description:""},{id:4,name:"Satiră și umor",slug:"satira-si-umor",description:""}],chords:["G","D","C"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0},{id:146,title:"Doi pasi in urma ta",slug:"doi-pasi-in-urma-ta-146",content:`  C            F                      C\r
1. Stau in urma trenului cu care vei pleca\r
         G\r
Si-mi pare rau.\r
C                F\r
Cred ca-i semnul raului,\r
C                               G\r
Nici nu te-am sarutat. Tare mi-e greu...\r
\r
         C      \r
       R. Doi pasi nu sunt departe,\r
          Bb     F         G\r
      Doi pasi, doi pasi in urma ta.\r
         C\r
      Doi pasi nu sunt departe,\r
          Bb\r
      Doi pasi\r
 \r
 C                   F\r
3. Stai sa mai vorbim putin\r
 C                      G\r
Si sa ne amintim de prima zi.\r
C                      F\r
Vreau ochii sa ti-i zaresc,\r
 C                           G\r
Sa pot sa iti soptesc ca te iubesc.\r
 \r
 F                              C\r
4. Vad cum la geam iti aprinzi o tigara,\r
F                          G\r
Tragi doar un fum si-o strivesti.\r
F                                C\r
Mana prin par ti-o petreci intr-o doara,\r
F                   G\r
Ma uit la ceas si oftez...\r
 \r
             C       \r
      R. Doi pasi nu sunt departe,\r
      Bb        F            G\r
      Doi pasi, doi pasi in urma ta.\r
         C\r
      Doi pasi nu sunt departe,\r
         Bb\r
      Doi pasi`,author:{id:53,name:"Cargo",slug:"cargo"},author_id:53,categories:[{id:18,name:"Rock",slug:"rock",description:""}],chords:["C","F","G","Bb"],strumming:[{pattern:["D","D","U","-","U","D","U","-"],timeSignature:"4/4",name:"Bază"}],views:0},{id:147,title:"1000 de pahare",slug:"1000-de-pahare-147",content:`Am             E
Bună, dar şi nebună-i viaţa mea,
 Am              E
Îmi dă, din când în când, câte-o belea,
 Dm                Am
Dar, niciodată, nu sparg şi nu dau foc
 E           Am  E Am
Când e să n-am noroc.

Femei am tot iubit şi-am să iubesc,
Normal că unele mă părăsesc,
Dar, niciodată, nu plâng şi nu turbez
Când e să divorţez.

          Dm
Refren: Şi iar beau tare
          Am
1000 dă pahare,
          E
Să uit de supărare,
          Am  A7
Să râd şi să petreeec,   x2
          Dm
Viaţa-i zbanghie,
          Am
O iau în băşcălie,
          E
O dau pă veselie
          Am   E Am
Şi toate trec.

Prieteni în viaţa mea grămadă sunt,
Ţeapă îmi trag şi ei, din când în când,
Dar, niciodată, nu mă apuc să-njur
Când, relaxat, mi-o fur.

Refren:   x2

Mereu prin viaţă vesel am să trec,
Chiar şi când pierd toţi banii, de zevzec,
Dar, niciodată, privirea nu mi-e rea
Când n-am nicio para.

Refren:   x2

Outro (pe acordurile de la refren): Ta-ra-ra-ra, ta-ra-ra-ra...   x2`,author:{id:38,name:"White Mahala",slug:"white-mahala"},author_id:38,categories:[{id:2,name:"Lăutărești",slug:"lautaresti",description:""}],chords:["Am","E","Dm","A7"],strumming:[{pattern:["D","-","D","U","-","U","D","U"],timeSignature:"4/4",name:"Bază"}],views:0}],Yi=[{id:1,name:"Azur",slug:"azur",song_count:2},{id:2,name:"Mihai Mărgineanu",slug:"mihai-margineanu",song_count:10},{id:3,name:"Anonim",slug:"anonim",song_count:7},{id:4,name:"Aurel Moldoveanu",slug:"aurel-moldoveanu",song_count:2},{id:5,name:"Șatra",slug:"satra",song_count:3},{id:6,name:"Gică Petrescu",slug:"gica-petrescu",song_count:2},{id:7,name:"Necunoscut",slug:"necunoscut",song_count:1},{id:8,name:"Folclor",slug:"folclor",song_count:2},{id:9,name:"Atlantic",slug:"atlantic",song_count:1},{id:10,name:"Ștefan Hrușcă",slug:"stefan-hrusca",song_count:9},{id:11,name:"Emeric Imre",slug:"emeric-imre",song_count:1},{id:12,name:"Ecoul",slug:"ecoul",song_count:3},{id:13,name:"Tatiana Stepa",slug:"tatiana-stepa",song_count:2},{id:14,name:"2 și jumătate",slug:"2-si-jumatate",song_count:1},{id:15,name:"Mayai Gyozo",slug:"mayai-gyozo",song_count:1},{id:16,name:"Andrei Păunescu",slug:"andrei-paunescu",song_count:1},{id:17,name:"Victor Socaciu",slug:"victor-socaciu",song_count:1},{id:18,name:"Nicu Alifantis",slug:"nicu-alifantis",song_count:2},{id:19,name:"Ducu Bertzi",slug:"ducu-bertzi",song_count:3},{id:20,name:"Valeriu Sterian",slug:"valeriu-sterian",song_count:1},{id:21,name:"Radu Gheorghe",slug:"radu-gheorghe",song_count:1},{id:22,name:"Trupa Şanţ",slug:"trupa-sant",song_count:1},{id:23,name:"Nae Berechet",slug:"nae-berechet",song_count:1},{id:24,name:"Cântece de munte",slug:"cantece-de-munte",song_count:13},{id:25,name:"Puiu Cazan",slug:"puiu-cazan",song_count:1},{id:26,name:"Karma",slug:"karma",song_count:1},{id:27,name:"Carmen Ciocolata",slug:"carmen-ciocolata",song_count:1},{id:28,name:"Vârf Carpatin",slug:"varf-carpatin",song_count:1},{id:29,name:"Mircea Rusu Band",slug:"mircea-rusu-band",song_count:1},{id:30,name:"Amurg",slug:"amurg",song_count:1},{id:31,name:"Magda Pușcaș",slug:"magda-puscas",song_count:1},{id:32,name:"Ursul Trubadur",slug:"ursul-trubadur",song_count:1},{id:33,name:"Roza Vânturilor",slug:"roza-vanturilor",song_count:1},{id:34,name:"Dida Drăgan",slug:"dida-dragan",song_count:1},{id:35,name:"Colinde",slug:"colinde",song_count:6},{id:36,name:"Mihai Constantinescu",slug:"mihai-constantinescu",song_count:1},{id:37,name:"Bulz Brotherz",slug:"bulz-brotherz",song_count:1},{id:38,name:"White Mahala",slug:"white-mahala",song_count:2},{id:39,name:"Mondial",slug:"mondial",song_count:1},{id:40,name:"Maria Tănase",slug:"maria-tanase",song_count:1},{id:41,name:"Maria Ciobanu",slug:"maria-ciobanu",song_count:1},{id:42,name:"Floarea Calotă",slug:"floarea-calota",song_count:1},{id:43,name:"Frații Petreuș",slug:"fratii-petreus",song_count:1},{id:44,name:"Ileana Sărăroiu",slug:"ileana-sararoiu",song_count:1},{id:45,name:"Traian Ilea",slug:"traian-ilea",song_count:1},{id:46,name:"Cristian Pățurcă",slug:"cristian-paturca",song_count:1},{id:47,name:"Bosquito",slug:"bosquito",song_count:1},{id:48,name:"Vunk",slug:"vunk",song_count:2},{id:49,name:"Vama",slug:"vama",song_count:1},{id:50,name:"Holograf",slug:"holograf",song_count:1},{id:51,name:"Vama Veche",slug:"vama-veche",song_count:3},{id:52,name:"Daniel Iancu",slug:"daniel-iancu",song_count:1},{id:53,name:"Cargo",slug:"cargo",song_count:4},{id:54,name:"Semnal M",slug:"semnal-m",song_count:1},{id:55,name:"Phoenix",slug:"phoenix",song_count:9},{id:56,name:"Iris",slug:"iris",song_count:4},{id:57,name:"Compact",slug:"compact",song_count:1},{id:58,name:"Alternosfera",slug:"alternosfera",song_count:1},{id:59,name:"Talisman",slug:"talisman",song_count:1},{id:60,name:"Zdob și Zdub",slug:"zdob-si-zdub",song_count:1},{id:61,name:"Pasărea Colibri",slug:"pasarea-colibri",song_count:15},{id:62,name:"Timpuri Noi",slug:"timpuri-noi",song_count:1},{id:63,name:"Antract",slug:"antract",song_count:1}],Ua=[{id:1,name:"Cântece de mahala",slug:"cantece-de-mahala",description:"",song_count:13},{id:2,name:"Lăutărești",slug:"lautaresti",description:"",song_count:8},{id:3,name:"Folk",slug:"folk",description:"",song_count:33},{id:4,name:"Satiră și umor",slug:"satira-si-umor",description:"",song_count:4},{id:5,name:"Cântece de munte",slug:"cantece-de-munte",description:"",song_count:35},{id:6,name:"Cântece țigănești",slug:"cantece-tiganesti",description:"",song_count:5},{id:7,name:"Aniversări",slug:"aniversari",description:"",song_count:7},{id:8,name:"Romanțe",slug:"romante",description:"",song_count:1},{id:9,name:"Școala și profesorii",slug:"scoala-si-profesorii",description:"",song_count:1},{id:10,name:"Cenaclul 'Flacăra'",slug:"cenaclul-flacara",description:"",song_count:18},{id:11,name:"Despre Patrie",slug:"despre-patrie",description:"",song_count:3},{id:12,name:"Cântece pentru copii",slug:"cantece-pentru-copii",description:"",song_count:2},{id:13,name:"De iarnă",slug:"de-iarna",description:"",song_count:1},{id:14,name:"Imnuri",slug:"imnuri",description:"",song_count:5},{id:15,name:"Colinde",slug:"colinde",description:"",song_count:13},{id:16,name:"Muzică ușoară",slug:"muzica-usoara",description:"",song_count:2},{id:17,name:"Etno / Folclor",slug:"etno-folclor",description:"",song_count:9},{id:18,name:"Rock",slug:"rock",description:"",song_count:26},{id:19,name:"Experimental",slug:"experimental",description:"",song_count:1},{id:20,name:"Eminescu",slug:"eminescu",description:"",song_count:1},{id:21,name:"Latino",slug:"latino",description:"",song_count:1},{id:22,name:"Pop-Rock",slug:"pop-rock",description:"",song_count:6},{id:23,name:"Din Republica Moldova",slug:"din-republica-moldova",description:"",song_count:1},{id:24,name:"Country",slug:"country",description:"",song_count:1}];function nm({name:s,onClick:c,linkToChord:o=!0}){const m=qi(),d=()=>{const C=s.toLowerCase();return C.includes("m")&&!C.includes("maj")?"chord-tag chord-tag-minor":C.includes("7")?"chord-tag chord-tag-seventh":C.includes("sus")||C.includes("#")||C.includes("b")?"chord-tag chord-tag-other":"chord-tag chord-tag-major"},f=()=>{c?c():o&&m(`/chords?highlight=${encodeURIComponent(s)}`)};return u.jsx("span",{className:d(),onClick:f,title:`Acord ${s}`,children:s})}function Wr({song:s}){const{isFavorite:c,toggleFavorite:o}=at(),m=c(s.id);return u.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow p-4",children:[u.jsxs("div",{className:"flex items-start justify-between gap-2",children:[u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx(ue,{to:`/songs/${s.slug}`,className:"text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1",children:s.title}),u.jsx(ue,{to:`/authors/${s.author.slug}`,className:"text-sm text-gray-500 hover:text-gray-700 mt-0.5 block",children:u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(rt,{size:12}),s.author.name]})})]}),u.jsx("button",{onClick:d=>{d.preventDefault(),o(s.id)},className:`shrink-0 p-1.5 rounded-lg transition-colors ${m?"text-red-500 hover:bg-red-50":"text-gray-300 hover:text-red-400 hover:bg-red-50"}`,title:m?"Elimină de la favorite":"Adaugă la favorite",children:u.jsx(Or,{size:18,fill:m?"currentColor":"none"})})]}),s.chords.length>0&&u.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-3",children:[s.chords.slice(0,8).map(d=>u.jsx(nm,{name:d},d)),s.chords.length>8&&u.jsxs("span",{className:"text-xs text-gray-400 self-center",children:["+",s.chords.length-8]})]}),s.categories.length>0&&u.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:s.categories.map(d=>u.jsx(ue,{to:`/categories/${d.slug}`,className:"text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full hover:bg-gray-200 transition-colors",children:d.name},d.id))})]})}function Gf(){const s=[{label:"Cântece",value:Sn.length,icon:rt,color:"blue",link:"/songs"},{label:"Artiști",value:Yi.length,icon:hs,color:"green",link:"/authors"},{label:"Categorii",value:Ua.length,icon:Ki,color:"purple",link:"/categories"},{label:"Acorduri",value:Ds.length,icon:gs,color:"yellow",link:"/chords"}],c=Sn.slice(0,6),o=b.useMemo(()=>{const m=new Map;return Sn.forEach(d=>{d.categories.forEach(f=>{m.set(f.id,(m.get(f.id)||0)+1)})}),Ua.map(d=>({...d,song_count:m.get(d.id)||0})).filter(d=>d.song_count>0).slice(0,6)},[]);return u.jsxs("div",{children:[u.jsx("section",{className:"bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[u.jsx("h1",{className:"text-4xl sm:text-5xl font-bold mb-4",children:"Acorduri și Tabulaturi pentru Chitară"}),u.jsx("p",{className:"text-lg text-blue-100 mb-8 max-w-2xl mx-auto",children:"Descoperă cântece românești cu versuri, acorduri și diagrame pentru chitară. Caută, salvează și creează playlisturi cu cântecele tale preferate."}),u.jsxs("div",{className:"flex flex-wrap justify-center gap-3",children:[u.jsx(ue,{to:"/songs",className:"px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors",children:"Explorează Cântecele"}),u.jsx(ue,{to:"/chords",className:"px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors border border-blue-500",children:"Dicționar Acorduri"})]})]})}),u.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8",children:u.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:s.map(m=>{const d=m.icon,f={blue:"bg-blue-50 text-blue-600 border-blue-100",green:"bg-green-50 text-green-600 border-green-100",purple:"bg-purple-50 text-purple-600 border-purple-100",yellow:"bg-yellow-50 text-yellow-600 border-yellow-100"};return u.jsxs(ue,{to:m.link,className:`${f[m.color]} border rounded-xl p-4 text-center hover:shadow-md transition-shadow`,children:[u.jsx(d,{size:24,className:"mx-auto mb-2"}),u.jsx("div",{className:"text-2xl font-bold",children:m.value}),u.jsx("div",{className:"text-sm opacity-75",children:m.label})]},m.label)})})}),u.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Categorii"}),u.jsxs(ue,{to:"/categories",className:"text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1",children:["Vezi toate ",u.jsx(Pc,{size:14})]})]}),u.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:o.map(m=>u.jsx(ue,{to:`/categories/${m.slug}`,className:"bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center",children:u.jsx(Ki,{size:20,className:"text-purple-600"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-900",children:m.name}),u.jsxs("p",{className:"text-xs text-gray-500",children:[m.song_count," cântece"]})]})]})},m.id))})]}),u.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("h2",{className:"text-2xl font-bold text-gray-900 flex items-center gap-2",children:[u.jsx(yf,{size:24,className:"text-blue-600"}),"Cântece Populare"]}),u.jsxs(ue,{to:"/songs",className:"text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1",children:["Vezi toate ",u.jsx(Pc,{size:14})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:c.map(m=>u.jsx(Wr,{song:m},m.id))})]})]})}const is=12,wf="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function Nf(){const[s,c]=Kc(),o=s.get("search")||"",m=s.get("letter")||"",[d,f]=b.useState(o),[C,z]=b.useState(m),[S,y]=b.useState(1),G=b.useMemo(()=>{let P=[...Sn];if(d.trim()){const w=d.toLowerCase();P=P.filter(Z=>Z.title.toLowerCase().includes(w)||Z.author.name.toLowerCase().includes(w)||Z.chords.some(te=>te.toLowerCase().includes(w)))}return C&&(P=P.filter(w=>w.title.toUpperCase().startsWith(C))),P.sort((w,Z)=>w.title.localeCompare(Z.title,"ro"))},[d,C]),E=Math.ceil(G.length/is),U=G.slice((S-1)*is,S*is),L=P=>{const w=C===P?"":P;z(w),y(1),c(w?{letter:w}:{})},H=P=>{f(P),y(1),c(P?{search:P}:{})};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Cântece"}),u.jsxs("p",{className:"text-gray-500 mb-6",children:[G.length," cântece ",d&&`pentru "${d}"`," ",C&&`începând cu "${C}"`]}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-6",children:[u.jsxs("div",{className:"relative flex-1",children:[u.jsx(Zi,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),u.jsx("input",{type:"text",value:d,onChange:P=>H(P.target.value),placeholder:"Caută după titlu, artist sau acord...",className:"w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),(d||C)&&u.jsxs("button",{onClick:()=>{f(""),z(""),y(1),c({})},className:"flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-600 hover:bg-gray-50",children:[u.jsx(hf,{size:14}),"Resetează filtrele"]})]}),u.jsx("div",{className:"flex flex-wrap gap-1 mb-6",children:wf.map(P=>u.jsx("button",{onClick:()=>L(P),className:`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${C===P?"bg-blue-600 text-white":"bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600"}`,children:P},P))}),U.length===0?u.jsxs("div",{className:"text-center py-16",children:[u.jsx("p",{className:"text-gray-400 text-lg",children:"Nu am găsit niciun cântec"}),u.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Încearcă să modifici criteriile de căutare"})]}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:U.map(P=>u.jsx(Wr,{song:P},P.id))}),E>1&&u.jsxs("div",{className:"flex items-center justify-center gap-2 mt-8",children:[u.jsx("button",{onClick:()=>y(P=>Math.max(1,P-1)),disabled:S===1,className:"px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50",children:"Anterior"}),Array.from({length:E},(P,w)=>w+1).map(P=>u.jsx("button",{onClick:()=>y(P),className:`w-10 h-10 rounded-lg text-sm font-medium ${S===P?"bg-blue-600 text-white":"border border-gray-300 text-gray-600 hover:bg-gray-50"}`,children:P},P)),u.jsx("button",{onClick:()=>y(P=>Math.min(E,P+1)),disabled:S===E,className:"px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50",children:"Următor"})]})]})}function _f({content:s}){const c=b.useMemo(()=>{const o=s.split(`
`),m=[];for(const d of o)d.trim()===""?m.push({type:"empty",text:""}):jf(d)?m.push({type:"chord",text:d}):m.push({type:"lyric",text:d});return m},[s]);return u.jsx("div",{className:"song-content bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 overflow-x-auto",children:c.map((o,m)=>o.type==="empty"?u.jsx("div",{className:"h-4"},m):o.type==="chord"?u.jsx("div",{className:"chord-line text-blue-600 font-bold select-all",children:o.text},m):u.jsx("div",{className:"lyric-line text-gray-800",children:o.text},m))})}function jf(s){const c=s.trim();if(!c)return!1;const o=/^[A-G][#b]?(m|maj|min|dim|aug|sus|add|7|9|11|13|6)*[0-9]*/,m=c.split(/\s+/),d=m.filter(f=>o.test(f));return d.length>0&&d.length>=m.length*.5}function cs({chord:s,size:c="md",onClick:o}){const d={sm:{width:80,height:100,fretH:16,stringGap:12,topPad:20,dotR:4,fontSize:8,titleSize:10},md:{width:120,height:150,fretH:24,stringGap:18,topPad:28,dotR:6,fontSize:10,titleSize:13},lg:{width:160,height:200,fretH:32,stringGap:24,topPad:36,dotR:8,fontSize:13,titleSize:16}}[c],f=5,C=6,z=(d.width-(C-1)*d.stringGap)/2,S=d.topPad,y=(C-1)*d.stringGap,G=f*d.fretH,E=s.start_fret||1,L=s.type==="minor"?"#22c55e":s.type.includes("7")?"#eab308":s.type.includes("sus")?"#a855f7":"#3b82f6";return u.jsxs("svg",{width:d.width,height:d.height,viewBox:`0 0 ${d.width} ${d.height}`,onClick:o,className:o?"cursor-pointer":"",children:[E===1?u.jsx("rect",{x:z-1,y:S-2,width:y+2,height:3,fill:"#1f2937",rx:1}):u.jsx("text",{x:z-10,y:S+d.fretH/2+4,fontSize:d.fontSize,fill:"#6b7280",textAnchor:"end",children:E}),Array.from({length:f+1}).map((H,P)=>u.jsx("line",{x1:z,y1:S+P*d.fretH,x2:z+y,y2:S+P*d.fretH,stroke:"#d1d5db",strokeWidth:1},`fret-${P}`)),Array.from({length:C}).map((H,P)=>u.jsx("line",{x1:z+P*d.stringGap,y1:S,x2:z+P*d.stringGap,y2:S+G,stroke:"#9ca3af",strokeWidth:1},`string-${P}`)),(s.open_strings||[]).map(H=>u.jsx("circle",{cx:z+(H-1)*d.stringGap,cy:S-10,r:d.dotR-1,fill:"none",stroke:"#6b7280",strokeWidth:1.5},`open-${H}`)),(s.muted_strings||[]).map(H=>u.jsx("text",{x:z+(H-1)*d.stringGap,y:S-6,fontSize:d.fontSize,fill:"#ef4444",textAnchor:"middle",children:"×"},`muted-${H}`)),s.barre&&u.jsx("rect",{x:z+(s.barre.from_string-1)*d.stringGap-d.dotR,y:S+(s.barre.fret-E)*d.fretH+d.fretH/2-d.dotR,width:(s.barre.to_string-s.barre.from_string)*d.stringGap+d.dotR*2,height:d.dotR*2,rx:d.dotR,fill:L,opacity:.8}),s.positions.map((H,P)=>u.jsxs("g",{children:[u.jsx("circle",{cx:z+(H.string-1)*d.stringGap,cy:S+(H.fret-E)*d.fretH+d.fretH/2,r:d.dotR,fill:L}),H.finger>0&&u.jsx("text",{x:z+(H.string-1)*d.stringGap,y:S+(H.fret-E)*d.fretH+d.fretH/2+d.fontSize/3,fontSize:d.fontSize-2,fill:"white",textAnchor:"middle",fontWeight:"bold",children:H.finger})]},`pos-${P}`))]})}function Pf({patterns:s}){return u.jsx("div",{className:"space-y-4",children:s.map((c,o)=>u.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[c.name&&u.jsx("span",{className:"text-sm font-semibold text-gray-700",children:c.name}),c.timeSignature&&u.jsx("span",{className:"text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-mono",children:c.timeSignature}),c.bpm&&u.jsxs("span",{className:"text-xs text-gray-400",children:[c.bpm," BPM"]})]}),u.jsx("div",{className:"flex items-end gap-1",children:c.pattern.map((m,d)=>u.jsxs("div",{className:"flex flex-col items-center",style:{minWidth:"28px"},children:[m==="D"&&u.jsxs(u.Fragment,{children:[u.jsxs("svg",{width:"24",height:"32",viewBox:"0 0 24 32",className:"text-blue-600",children:[u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"24",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"}),u.jsx("polygon",{points:"5,20 12,30 19,20",fill:"currentColor"})]}),u.jsx("span",{className:"text-xs font-bold text-blue-600 mt-0.5",children:"J"})]}),m==="U"&&u.jsxs(u.Fragment,{children:[u.jsxs("svg",{width:"24",height:"32",viewBox:"0 0 24 32",className:"text-orange-500",children:[u.jsx("line",{x1:"12",y1:"30",x2:"12",y2:"8",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"}),u.jsx("polygon",{points:"5,12 12,2 19,12",fill:"currentColor"})]}),u.jsx("span",{className:"text-xs font-bold text-orange-500 mt-0.5",children:"S"})]}),m==="x"&&u.jsxs(u.Fragment,{children:[u.jsxs("svg",{width:"24",height:"32",viewBox:"0 0 24 32",className:"text-red-400",children:[u.jsx("line",{x1:"6",y1:"8",x2:"18",y2:"24",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"}),u.jsx("line",{x1:"18",y1:"8",x2:"6",y2:"24",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]}),u.jsx("span",{className:"text-xs font-bold text-red-400 mt-0.5",children:"X"})]}),m==="-"&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:"24",height:"32",viewBox:"0 0 24 32",className:"text-gray-300",children:u.jsx("circle",{cx:"12",cy:"16",r:"4",fill:"currentColor"})}),u.jsx("span",{className:"text-xs text-gray-300 mt-0.5",children:"·"})]})]},d))}),u.jsxs("div",{className:"flex flex-wrap gap-3 mt-3 pt-3 border-t border-gray-200",children:[u.jsxs("span",{className:"flex items-center gap-1 text-xs text-gray-500",children:[u.jsx("span",{className:"inline-block w-3 h-3 bg-blue-600 rounded-sm"}),"J = Jos (down)"]}),u.jsxs("span",{className:"flex items-center gap-1 text-xs text-gray-500",children:[u.jsx("span",{className:"inline-block w-3 h-3 bg-orange-500 rounded-sm"}),"S = Sus (up)"]}),u.jsxs("span",{className:"flex items-center gap-1 text-xs text-gray-500",children:[u.jsx("span",{className:"inline-block w-3 h-3 bg-red-400 rounded-sm"}),"X = Mut"]}),u.jsxs("span",{className:"flex items-center gap-1 text-xs text-gray-500",children:[u.jsx("span",{className:"inline-block w-3 h-3 bg-gray-300 rounded-full"}),"Pauza"]})]})]},o))})}function kf({songId:s,songTitle:c,onClose:o}){const{playlists:m,createPlaylist:d,addSongToPlaylist:f,removeSongFromPlaylist:C,isSongInPlaylist:z}=it(),[S,y]=b.useState(!1),[G,E]=b.useState(""),[U,L]=b.useState(""),H=()=>{if(G.trim()){const w=d(G.trim(),U.trim());f(w.id,s),E(""),L(""),y(!1)}},P=w=>{z(w,s)?C(w,s):f(w,s)};return u.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:o,children:u.jsxs("div",{className:"bg-white rounded-2xl shadow-xl max-w-md w-full max-h-96 overflow-hidden",onClick:w=>w.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-100",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-900",children:"Adaugă la playlist"}),u.jsx("p",{className:"text-xs text-gray-500 mt-0.5 truncate max-w-64",children:c})]}),u.jsx("button",{onClick:o,className:"p-1 rounded-lg hover:bg-gray-100 text-gray-400",children:u.jsx(vs,{size:20})})]}),u.jsxs("div",{className:"p-4 overflow-y-auto max-h-60",children:[m.length===0&&!S&&u.jsxs("div",{className:"text-center py-6 text-gray-500",children:[u.jsx(Vr,{size:32,className:"mx-auto mb-2 text-gray-300"}),u.jsx("p",{className:"text-sm",children:"Nu ai niciun playlist încă"})]}),m.map(w=>{const Z=z(w.id,s);return u.jsxs("button",{onClick:()=>P(w.id),className:`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors mb-1 ${Z?"bg-blue-50 text-blue-700":"hover:bg-gray-50 text-gray-700"}`,children:[u.jsx("div",{className:`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${Z?"bg-blue-600 border-blue-600":"border-gray-300"}`,children:Z&&u.jsx(Yc,{size:14,className:"text-white"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:"font-medium text-sm truncate",children:w.name}),u.jsxs("p",{className:"text-xs text-gray-400",children:[w.songIds.length," cântece"]})]})]},w.id)}),S?u.jsxs("div",{className:"mt-2 p-3 border border-gray-200 rounded-lg bg-gray-50",children:[u.jsx("input",{type:"text",value:G,onChange:w=>E(w.target.value),placeholder:"Numele playlistului",className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2",autoFocus:!0}),u.jsx("input",{type:"text",value:U,onChange:w=>L(w.target.value),placeholder:"Descriere (opțional)",className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:H,disabled:!G.trim(),className:"flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Creează"}),u.jsx("button",{onClick:()=>y(!1),className:"px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50",children:"Anulează"})]})]}):u.jsxs("button",{onClick:()=>y(!0),className:"w-full flex items-center gap-2 p-3 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium mt-1",children:[u.jsx(os,{size:18}),"Playlist nou"]})]})]})})}function Ff(){const{slug:s}=et(),{isFavorite:c,toggleFavorite:o}=at(),[m,d]=b.useState(!1),f=b.useMemo(()=>Sn.find(y=>y.slug===s),[s]),C=b.useMemo(()=>f?f.chords.map(y=>Ds.find(G=>G.name===y)).filter(y=>y!==void 0):[],[f]),z=b.useMemo(()=>f?Sn.filter(y=>y.id!==f.id&&y.author.id===f.author.id).slice(0,5):[],[f]);if(!f)return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[u.jsx("p",{className:"text-gray-400 text-lg",children:"Cântecul nu a fost găsit"}),u.jsx(ue,{to:"/songs",className:"text-blue-600 hover:underline mt-4 inline-block",children:"Înapoi la cântece"})]});const S=c(f.id);return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-3",children:[u.jsxs(ue,{to:"/songs",className:"hover:text-blue-600 flex items-center gap-1",children:[u.jsx(nt,{size:14})," Cântece"]}),u.jsx("span",{children:"/"}),u.jsx("span",{className:"text-gray-900 font-medium truncate",children:f.title})]}),u.jsx("div",{className:"mb-3",children:u.jsxs("div",{className:"flex items-start justify-between gap-4 flex-wrap",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900 leading-tight",children:f.title}),u.jsxs("div",{className:"flex items-center gap-2 flex-wrap mt-0.5",children:[u.jsxs(ue,{to:`/authors/${f.author.slug}`,className:"text-gray-500 hover:text-blue-600 flex items-center gap-1.5 text-sm",children:[u.jsx(rt,{size:14}),f.author.name]}),f.categories.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"text-gray-300",children:"|"}),f.categories.map(y=>u.jsx(ue,{to:`/categories/${y.slug}`,className:"text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full hover:bg-purple-100",children:y.name},y.id))]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 no-print",children:[u.jsxs("button",{onClick:()=>o(f.id),className:`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${S?"bg-red-50 text-red-600 hover:bg-red-100":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[u.jsx(Or,{size:14,fill:S?"currentColor":"none"}),S?"Favorit":"Favorite"]}),u.jsxs("button",{onClick:()=>d(!0),className:"flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors",children:[u.jsx(vf,{size:14}),"Playlist"]}),u.jsxs("button",{onClick:()=>window.print(),className:"flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors",children:[u.jsx(xf,{size:14}),"Print"]})]})]})}),f.chords.length>0&&u.jsx("div",{className:"sticky top-16 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2 mb-3 shadow-sm",children:u.jsxs("div",{className:"flex items-center gap-2 max-w-7xl mx-auto",children:[u.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Acorduri:"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:f.chords.map(y=>u.jsx(nm,{name:y},y))})]})}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[u.jsx("div",{className:"lg:col-span-2",children:u.jsx(_f,{content:f.content})}),u.jsxs("div",{className:"lg:col-span-1 no-print space-y-4",children:[f.strumming&&f.strumming.length>0&&u.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-3",children:[u.jsx("h3",{className:"font-semibold text-gray-900 mb-2 text-sm",children:"Ritm (Strumming)"}),u.jsx(Pf,{patterns:f.strumming})]}),C.length>0&&u.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-3",children:[u.jsx("h3",{className:"font-semibold text-gray-900 mb-2 text-sm",children:"Diagrame Acorduri"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:C.map(y=>u.jsx("div",{className:"text-center",children:u.jsxs("div",{className:"inline-flex flex-col items-center",children:[u.jsx("span",{className:"text-xs font-bold text-blue-600 mb-0.5",children:y.name}),u.jsx(cs,{chord:y,size:"sm"})]})},y.id))})]}),z.length>0&&u.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-3",children:[u.jsxs("h3",{className:"font-semibold text-gray-900 mb-2 text-sm",children:["Alte cântece de ",f.author.name]}),u.jsx("div",{className:"space-y-1",children:z.map(y=>u.jsxs(ue,{to:`/songs/${y.slug}`,className:"block p-1.5 rounded-lg hover:bg-gray-50 transition-colors",children:[u.jsx("p",{className:"text-sm font-medium text-gray-900 line-clamp-1",children:y.title}),u.jsx("div",{className:"flex flex-wrap gap-1 mt-0.5",children:y.chords.slice(0,4).map(G=>u.jsx("span",{className:"text-xs text-gray-400",children:G},G))})]},y.id))})]})]})]}),m&&u.jsx(kf,{songId:f.id,songTitle:f.title,onClose:()=>d(!1)})]})}const Uf=["A","B","C","D","E","F","G"],Mf=["major","minor","dominant 7th","sus2","sus4","minor 7th","major 7th"];function Rf(){const[s]=Kc(),c=s.get("highlight")||"",[o,m]=b.useState(""),[d,f]=b.useState(""),[C,z]=b.useState(null),S=b.useMemo(()=>{let y=[...Ds];return o&&(y=y.filter(G=>G.root_note===o)),d&&(y=y.filter(G=>G.type===d)),y},[o,d]);return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Dicționar de Acorduri"}),u.jsx("p",{className:"text-gray-500 mb-6",children:"Toate acordurile pentru chitară cu diagrame și poziții"}),u.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-4 mb-8",children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("p",{className:"text-sm font-medium text-gray-600 mb-2",children:"Notă de bază:"}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>m(""),className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${o?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-blue-600 text-white"}`,children:"Toate"}),Uf.map(y=>u.jsx("button",{onClick:()=>m(o===y?"":y),className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${o===y?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:y},y))]})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-gray-600 mb-2",children:"Tip acord:"}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>f(""),className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${d?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-blue-600 text-white"}`,children:"Toate"}),Mf.map(y=>u.jsx("button",{onClick:()=>f(d===y?"":y),className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${d===y?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:y},y))]})]})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:S.map(y=>u.jsxs("div",{className:`bg-white rounded-xl border p-4 text-center cursor-pointer hover:shadow-md transition-all ${c===y.name?"border-blue-500 ring-2 ring-blue-200":"border-gray-200"}`,onClick:()=>z(y),children:[u.jsx(Bf,{name:y.name,type:y.type}),u.jsx("p",{className:"text-xs text-gray-400 mt-1",children:y.type}),u.jsx("div",{className:"mt-2 flex justify-center",children:u.jsx(cs,{chord:y,size:"sm"})})]},y.id))}),S.length===0&&u.jsx("div",{className:"text-center py-16",children:u.jsx("p",{className:"text-gray-400 text-lg",children:"Nu am găsit acorduri cu aceste filtre"})}),C&&u.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:()=>z(null),children:u.jsxs("div",{className:"bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center",onClick:y=>y.stopPropagation(),children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-1",children:C.name}),u.jsx("p",{className:"text-sm text-gray-500 mb-4",children:C.type}),u.jsx("div",{className:"flex justify-center mb-4",children:u.jsx(cs,{chord:C,size:"lg"})}),u.jsxs("div",{className:"text-sm text-gray-600",children:[u.jsxs("p",{children:["Notă de bază: ",u.jsx("strong",{children:C.root_note})]}),C.positions.length>0&&u.jsxs("p",{className:"mt-1",children:["Poziții: ",C.positions.map(y=>`S${y.string}F${y.fret}`).join(", ")]})]}),u.jsx("button",{onClick:()=>z(null),className:"mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium",children:"Închide"})]})})]})}function Bf({name:s,type:c}){const o=()=>c==="minor"||c==="minor 7th"?"bg-green-100 text-green-700":c.includes("7")?"bg-yellow-100 text-yellow-700":c.includes("sus")?"bg-purple-100 text-purple-700":"bg-blue-100 text-blue-700";return u.jsx("span",{className:`inline-flex items-center justify-center w-12 h-12 rounded-full text-sm font-bold ${o()}`,children:s})}function If(){const s=[...Ua].sort((c,o)=>c.name.localeCompare(o.name,"ro"));return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Categorii"}),u.jsxs("p",{className:"text-gray-500 mb-6",children:[Ua.length," categorii de cântece"]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map(c=>u.jsx(ue,{to:`/categories/${c.slug}`,className:"bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group",children:u.jsxs("div",{className:"flex items-start gap-4",children:[u.jsx("div",{className:"w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition-colors",children:u.jsx(Ki,{size:24,className:"text-purple-600"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-900 group-hover:text-purple-700 transition-colors",children:c.name}),c.description&&u.jsx("p",{className:"text-sm text-gray-500 mt-1 line-clamp-2",children:c.description}),u.jsxs("p",{className:"text-sm text-purple-600 font-medium mt-2",children:[c.song_count||0," cântece"]})]})]})},c.id))})]})}function Tf(){const{slug:s}=et(),c=b.useMemo(()=>Ua.find(m=>m.slug===s),[s]),o=b.useMemo(()=>c?Sn.filter(m=>m.categories.some(d=>d.id===c.id)):[],[c]);return c?u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-6",children:[u.jsxs(ue,{to:"/categories",className:"hover:text-blue-600 flex items-center gap-1",children:[u.jsx(nt,{size:14})," Categorii"]}),u.jsx("span",{children:"/"}),u.jsx("span",{className:"text-gray-900 font-medium",children:c.name})]}),u.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[u.jsx("div",{className:"w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center",children:u.jsx(Ki,{size:28,className:"text-purple-600"})}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:c.name}),c.description&&u.jsx("p",{className:"text-gray-500 mt-1",children:c.description}),u.jsxs("p",{className:"text-sm text-gray-400 mt-1",children:[o.length," cântece"]})]})]}),o.length===0?u.jsx("div",{className:"text-center py-16",children:u.jsx("p",{className:"text-gray-400 text-lg",children:"Nu am găsit cântece în această categorie"})}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:o.map(m=>u.jsx(Wr,{song:m},m.id))})]}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[u.jsx("p",{className:"text-gray-400 text-lg",children:"Categoria nu a fost găsită"}),u.jsx(ue,{to:"/categories",className:"text-blue-600 hover:underline mt-4 inline-block",children:"Înapoi la categorii"})]})}function Lf(){const[s,c]=b.useState(""),o=b.useMemo(()=>{let m=[...Yi].sort((d,f)=>d.name.localeCompare(f.name,"ro"));if(s.trim()){const d=s.toLowerCase();m=m.filter(f=>f.name.toLowerCase().includes(d))}return m},[s]);return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Artiști"}),u.jsxs("p",{className:"text-gray-500 mb-6",children:[Yi.length," artiști"]}),u.jsxs("div",{className:"relative max-w-md mb-6",children:[u.jsx(Zi,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),u.jsx("input",{type:"text",value:s,onChange:m=>c(m.target.value),placeholder:"Caută artiști...",className:"w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:o.map(m=>u.jsx(ue,{to:`/authors/${m.slug}`,className:"bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow group",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors",children:u.jsx(hs,{size:18,className:"text-green-600"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-900 group-hover:text-green-700 transition-colors",children:m.name}),u.jsxs("p",{className:"text-sm text-gray-500",children:[m.song_count||0," cântece"]})]})]})},m.id))}),o.length===0&&u.jsx("div",{className:"text-center py-16",children:u.jsx("p",{className:"text-gray-400 text-lg",children:"Nu am găsit artiști"})})]})}function Of(){const{slug:s}=et(),c=b.useMemo(()=>Yi.find(m=>m.slug===s),[s]),o=b.useMemo(()=>c?Sn.filter(m=>m.author.id===c.id):[],[c]);return c?u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-6",children:[u.jsxs(ue,{to:"/authors",className:"hover:text-blue-600 flex items-center gap-1",children:[u.jsx(nt,{size:14})," Artiști"]}),u.jsx("span",{children:"/"}),u.jsx("span",{className:"text-gray-900 font-medium",children:c.name})]}),u.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[u.jsx("div",{className:"w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center",children:u.jsx(hs,{size:28,className:"text-green-600"})}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:c.name}),u.jsxs("p",{className:"text-sm text-gray-400 mt-1",children:[o.length," cântece"]})]})]}),o.length===0?u.jsx("div",{className:"text-center py-16",children:u.jsx("p",{className:"text-gray-400 text-lg",children:"Nu am găsit cântece de la acest artist"})}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:o.map(m=>u.jsx(Wr,{song:m},m.id))})]}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[u.jsx("p",{className:"text-gray-400 text-lg",children:"Artistul nu a fost găsit"}),u.jsx(ue,{to:"/authors",className:"text-blue-600 hover:underline mt-4 inline-block",children:"Înapoi la artiști"})]})}function Vf(){const{favorites:s}=at(),c=b.useMemo(()=>Sn.filter(o=>s.includes(o.id)),[s]);return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx(Or,{size:28,className:"text-red-500",fill:"currentColor"}),u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Favorite"})]}),u.jsxs("p",{className:"text-gray-500 mb-6",children:[c.length," cântece favorite"]}),c.length===0?u.jsxs("div",{className:"text-center py-16",children:[u.jsx(Or,{size:48,className:"mx-auto mb-4 text-gray-200"}),u.jsx("p",{className:"text-gray-400 text-lg mb-2",children:"Nu ai cântece favorite încă"}),u.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"Apasă pe inima de lângă un cântec pentru a-l adăuga la favorite"}),u.jsx(ue,{to:"/songs",className:"inline-flex px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700",children:"Explorează cântece"})]}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:c.map(o=>u.jsx(Wr,{song:o},o.id))})]})}function Hf(){const{playlists:s,createPlaylist:c,deletePlaylist:o,updatePlaylist:m}=it(),[d,f]=b.useState(!1),[C,z]=b.useState(""),[S,y]=b.useState(""),[G,E]=b.useState(null),[U,L]=b.useState(""),[H,P]=b.useState(""),w=()=>{C.trim()&&(c(C.trim(),S.trim()),z(""),y(""),f(!1))},Z=(K,pe,_e)=>{E(K),L(pe),P(_e)},te=()=>{G&&U.trim()&&(m(G,{name:U.trim(),description:H.trim()}),E(null))},ne=K=>{window.confirm("Ești sigur că vrei să ștergi acest playlist?")&&o(K)};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx(Vr,{size:28,className:"text-purple-600"}),u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Playlisturi"})]}),u.jsxs("p",{className:"text-gray-500",children:[s.length," playlisturi"]})]}),u.jsxs("button",{onClick:()=>f(!0),className:"flex items-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors",children:[u.jsx(os,{size:16}),"Playlist nou"]})]}),d&&u.jsxs("div",{className:"bg-white rounded-xl border border-purple-200 p-4 mb-6",children:[u.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Playlist nou"}),u.jsx("input",{type:"text",value:C,onChange:K=>z(K.target.value),placeholder:"Numele playlistului",className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2",autoFocus:!0}),u.jsx("input",{type:"text",value:S,onChange:K=>y(K.target.value),placeholder:"Descriere (opțional)",className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:w,disabled:!C.trim(),className:"px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Creează"}),u.jsx("button",{onClick:()=>{f(!1),z(""),y("")},className:"px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50",children:"Anulează"})]})]}),s.length===0&&!d?u.jsxs("div",{className:"text-center py-16",children:[u.jsx(Vr,{size:48,className:"mx-auto mb-4 text-gray-200"}),u.jsx("p",{className:"text-gray-400 text-lg mb-2",children:"Nu ai playlisturi încă"}),u.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"Creează un playlist și adaugă cântecele tale preferate"}),u.jsxs("button",{onClick:()=>f(!0),className:"inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700",children:[u.jsx(os,{size:16}),"Creează primul playlist"]})]}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map(K=>u.jsx("div",{className:"bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow overflow-hidden",children:G===K.id?u.jsxs("div",{className:"p-4",children:[u.jsx("input",{type:"text",value:U,onChange:pe=>L(pe.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2",autoFocus:!0}),u.jsx("input",{type:"text",value:H,onChange:pe=>P(pe.target.value),placeholder:"Descriere",className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:te,className:"p-2 text-green-600 hover:bg-green-50 rounded-lg",children:u.jsx(Yc,{size:16})}),u.jsx("button",{onClick:()=>E(null),className:"p-2 text-gray-400 hover:bg-gray-50 rounded-lg",children:u.jsx(vs,{size:16})})]})]}):u.jsxs(u.Fragment,{children:[u.jsx(ue,{to:`/playlists/${K.id}`,className:"block p-4",children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0",children:u.jsx(rt,{size:18,className:"text-purple-600"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h3",{className:"font-semibold text-gray-900 line-clamp-1",children:K.name}),K.description&&u.jsx("p",{className:"text-sm text-gray-500 line-clamp-1 mt-0.5",children:K.description}),u.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:[K.songIds.length," cântece"]})]})]})}),u.jsxs("div",{className:"flex items-center gap-1 px-4 pb-3",children:[u.jsx("button",{onClick:()=>Z(K.id,K.name,K.description),className:"p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Editează",children:u.jsx(Cf,{size:14})}),u.jsx("button",{onClick:()=>ne(K.id),className:"p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"Șterge",children:u.jsx(Xc,{size:14})})]})]})},K.id))})]})}function $f(){const{id:s}=et(),{playlists:c,removeSongFromPlaylist:o}=it(),m=b.useMemo(()=>c.find(f=>f.id===s),[c,s]),d=b.useMemo(()=>m?m.songIds.map(f=>Sn.find(C=>C.id===f)).filter(f=>f!==void 0):[],[m]);return m?u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-6",children:[u.jsxs(ue,{to:"/playlists",className:"hover:text-blue-600 flex items-center gap-1",children:[u.jsx(nt,{size:14})," Playlisturi"]}),u.jsx("span",{children:"/"}),u.jsx("span",{className:"text-gray-900 font-medium",children:m.name})]}),u.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[u.jsx("div",{className:"w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center",children:u.jsx(Vr,{size:28,className:"text-purple-600"})}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:m.name}),m.description&&u.jsx("p",{className:"text-gray-500 mt-1",children:m.description}),u.jsxs("p",{className:"text-sm text-gray-400 mt-1",children:[d.length," cântece"]})]})]}),d.length===0?u.jsxs("div",{className:"text-center py-16",children:[u.jsx(Vr,{size:48,className:"mx-auto mb-4 text-gray-200"}),u.jsx("p",{className:"text-gray-400 text-lg mb-2",children:"Playlistul este gol"}),u.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"Adaugă cântece din pagina unui cântec"}),u.jsx(ue,{to:"/songs",className:"inline-flex px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700",children:"Explorează cântece"})]}):u.jsx("div",{className:"space-y-4",children:d.map((f,C)=>u.jsxs("div",{className:"flex items-start gap-4",children:[u.jsx("span",{className:"text-lg font-bold text-gray-300 mt-4 w-8 text-right shrink-0",children:C+1}),u.jsx("div",{className:"flex-1",children:u.jsx(Wr,{song:f})}),u.jsx("button",{onClick:()=>o(m.id,f.id),className:"mt-4 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0",title:"Elimină din playlist",children:u.jsx(Xc,{size:16})})]},f.id))})]}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[u.jsx("p",{className:"text-gray-400 text-lg",children:"Playlistul nu a fost găsit"}),u.jsx(ue,{to:"/playlists",className:"text-blue-600 hover:underline mt-4 inline-block",children:"Înapoi la playlisturi"})]})}function Wf(){return u.jsxs("div",{className:"min-h-screen flex flex-col",children:[u.jsx(bf,{}),u.jsx("main",{className:"flex-1",children:u.jsxs(ef,{children:[u.jsx(sn,{path:"/",element:u.jsx(Gf,{})}),u.jsx(sn,{path:"/songs",element:u.jsx(Nf,{})}),u.jsx(sn,{path:"/songs/:slug",element:u.jsx(Ff,{})}),u.jsx(sn,{path:"/chords",element:u.jsx(Rf,{})}),u.jsx(sn,{path:"/categories",element:u.jsx(If,{})}),u.jsx(sn,{path:"/categories/:slug",element:u.jsx(Tf,{})}),u.jsx(sn,{path:"/authors",element:u.jsx(Lf,{})}),u.jsx(sn,{path:"/authors/:slug",element:u.jsx(Of,{})}),u.jsx(sn,{path:"/favorites",element:u.jsx(Vf,{})}),u.jsx(sn,{path:"/playlists",element:u.jsx(Hf,{})}),u.jsx(sn,{path:"/playlists/:id",element:u.jsx($f,{})})]})}),u.jsx(zf,{})]})}lp.createRoot(document.getElementById("root")).render(u.jsx(Mc.StrictMode,{children:u.jsx(of,{basename:"/ChitaraMea",children:u.jsx(Af,{children:u.jsx(Ef,{children:u.jsx(Wf,{})})})})}));
