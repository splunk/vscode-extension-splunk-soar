/*! For license information please see appwizard.js.LICENSE.txt */
(()=>{"use strict";const e=e=>{var t;return()=>{if(e){var n=e;e=0,t={exports:{}},n.call(t.exports,t,t.exports)}return t.exports}};var t=e((e,t)=>{var n=u(),o=l(),r=i();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(e){for(var t=e,n=t;n&&!n.alternate;)!!(4098&(t=n).flags)&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return 3===t.tag?e:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function d(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function h(e){if(a(e)!==e)throw Error(s(188))}function p(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=p(e)))return t;e=e.sibling}return null}function f(e,t,n,o,i,r){for(;null!==e;){if((5===e.tag||27===e.tag||6===e.tag)&&n(e,o,i,r)||(22!==e.tag||null===e.memoizedState)&&(t||5!==e.tag&&27!==e.tag)&&f(e.child,t,n,o,i,r))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;null!==e;){if(3===e.tag||5===e.tag||27===e.tag)return e;e=e.return}return null}function m(e){var t=!1;for(e=e.return;null!==e&&(4===e.tag&&(t=!0),3!==e.tag&&5!==e.tag&&27!==e.tag);)e=e.return;return t}function g(e){var t=[null,null],n=v(e);return null===n||b(t,e,n.child,{foundSelf:!1}),t}function b(e,t,n,o){for(;null!==n;){if(n===t)o.foundSelf=!0;else if(5===n.tag||27===n.tag||6===n.tag){if(o.foundSelf)return e[1]=n,!0;e[0]=n}else if((22!==n.tag||null===n.memoizedState)&&b(e,t,n.child,o))return!0;n=n.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,x=null;function w(e,t,n){return e===n||e===t&&(_=e,!0)}function k(e,t,n){return e===n?(x=e,!1):e===t&&(null!==x&&(_=e),!0)}function S(e){if(null===e)return null;do{e=null===e?null:e.return}while(e&&5!==e.tag&&27!==e.tag&&3!==e.tag);return e||null}function C(e,t,n){for(var o=0,i=e;i;i=n(i))o++;i=0;for(var r=t;r;r=n(r))i++;for(;0<o-i;)e=n(e),o--;for(;0<i-o;)t=n(t),i--;for(;o--;){if(e===t||null!==t&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var E=Object.assign,P=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),T=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),M=Symbol.for("react.lazy");Symbol.for("react.scope");var B=Symbol.for("react.activity"),V=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var H=Symbol.for("react.memo_cache_sentinel"),j=Symbol.for("react.view_transition"),U=Symbol.for("react.recoverable"),q=Symbol.iterator;function W(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=q&&e[q]||e["@@iterator"])?e:null}var K=Symbol.for("react.client.reference");function G(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===K?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case A:return"Fragment";case N:return"Profiler";case z:return"StrictMode";case L:return"Suspense";case D:return"SuspenseList";case B:return"Activity";case j:return"ViewTransition"}if("object"==typeof e)switch(e.$$typeof){case I:return"Portal";case T:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case R:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case F:return null!==(t=e.displayName||null)?t:G(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return G(e(t))}catch(e){}}return null}var Q=Array.isArray,Y=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},J=[],ee=-1;function te(e){return{current:e}}function ne(e){0>ee||(e.current=J[ee],J[ee]=null,ee--)}function oe(e,t){ee++,J[ee]=e.current,e.current=t}var ie,re,se=te(null),le=te(null),ae=te(null),ce=te(null);function ue(e,t){switch(oe(ae,t),oe(le,e),oe(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=Fh(t=Dh(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(se),oe(se,e)}function de(){ne(se),ne(le),ne(ae)}function he(e){var t=e.memoizedState;null!==t&&(hf._currentValue=t.memoizedState,oe(ce,e));var n=Fh(t=se.current,e.type);t!==n&&(oe(le,e),oe(se,n))}function pe(e){le.current===e&&(ne(se),ne(le)),ce.current===e&&(ne(ce),hf._currentValue=Z)}function fe(e){if(void 0===ie)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ie=t&&t[1]||"",re=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+ie+e+re}var ve=!1;function me(e,t){if(!e||ve)return"";ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var o=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){o=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(void 0!==i?Object.defineProperty(e.prototype,"props",i):delete e.prototype.props)}}}else{try{throw Error()}catch(e){o=e}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(e){if(e&&o&&"string"==typeof e.stack)return[e.stack,o.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),s=r[0],l=r[1];if(s&&l){var a=s.split("\n"),c=l.split("\n");for(i=o=0;o<a.length&&!a[o].includes("DetermineComponentFrameRoot");)o++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(o===a.length||i===c.length)for(o=a.length-1,i=c.length-1;1<=o&&0<=i&&a[o]!==c[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==c[i]){if(1!==o||1!==i)do{if(o--,0>--i||a[o]!==c[i]){var u="\n"+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=o&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?fe(n):""}function ge(e,t){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==t&&null!==t?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return fe("Activity");case 30:return fe("ViewTransition");default:return""}}function be(e){try{var t="",n=null;do{t+=ge(e,n),n=e,e=e.return}while(e);return t}catch(e){return"\nError generating stack: "+e.message+"\n"+e.stack}}var ye=Object.prototype.hasOwnProperty,_e=n.unstable_scheduleCallback,xe=n.unstable_cancelCallback,we=n.unstable_shouldYield,ke=n.unstable_requestPaint,Se=n.unstable_now,Ce=n.unstable_getCurrentPriorityLevel,Ee=n.unstable_ImmediatePriority,Pe=n.unstable_UserBlockingPriority,Oe=n.unstable_NormalPriority,Ie=n.unstable_LowPriority,Ae=n.unstable_IdlePriority,ze=n.log,Ne=n.unstable_setDisableYieldValue,$e=null,Te=null;function Re(e){if("function"==typeof ze&&Ne(e),Te&&"function"==typeof Te.setStrictMode)try{Te.setStrictMode($e,e)}catch(e){}}var Le=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(De(e)/Fe|0)|0},De=Math.log,Fe=Math.LN2,Me=256,Be=262144,Ve=4194304;function He(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function je(e,t,n){var o=e.pendingLanes;if(0===o)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var l=134217727&o;return 0!==l?0!==(o=l&~r)?i=He(o):0!==(s&=l)?i=He(s):n||0!==(n=l&~e)&&(i=He(n)):0!==(l=o&~r)?i=He(l):0!==s?i=He(s):n||0!==(n=o&~e)&&(i=He(n)),0===i?0:0!==t&&t!==i&&0===(t&r)&&((r=i&-i)>=(n=t&-t)||32===r&&4194048&n)?t:i}function Ue(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function qe(e,t){8&t&&(t|=32&t);var n=e.entangledLanes;if(0!==n)for(e=e.entanglements,n&=t;0<n;){var o=31-Le(n),i=1<<o;t|=e[o],n&=~i}return t}function We(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ke(){var e=Ve;return!(62914560&(Ve<<=1))&&(Ve=4194304),e}function Ge(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ye(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Le(t);e.entangledLanes|=t,e.entanglements[o]=1073741824|e.entanglements[o]|261930&n}function Xe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Le(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}function Ze(e,t){var n=t&-t;return 0!==((n=42&n?1:Je(n))&(e.suspendedLanes|t))?0:n}function Je(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function et(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}function tt(){var e=X.p;return 0!==e?e:void 0===(e=window.event)?32:Ef(e.type)}function nt(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var ot=Math.random().toString(36).slice(2),it="__reactFiber$"+ot,rt="__reactProps$"+ot,st="__reactContainer$"+ot,lt="__reactEvents$"+ot,at="__reactListeners$"+ot,ct="__reactHandles$"+ot,ut="__reactResources$"+ot,dt="__reactMarker$"+ot,ht="__reactLoad$"+ot;function pt(e){delete e[it],delete e[rt],delete e[at],delete e[ct]}function ft(e){var t;if(t=e[it])return t;for(var n=e.parentNode;n;){if(t=n[st]||n[it]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=zp(e);null!==e;){if(n=e[it])return n;e=zp(e)}return t}n=(e=n).parentNode}return null}function vt(e){if(e=e[it]||e[st]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function mt(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(s(33))}function gt(e){var t=e[ut];return t||(t=e[ut]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[dt]=!0}function yt(e){e[ht]=void 0}var _t=new Set,xt={};function wt(e,t){kt(e,t),kt(e+"Capture",t)}function kt(e,t){for(xt[e]=t,e=0;e<t.length;e++)_t.add(t[e])}var St=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ct={},Et={},Pt=!1;function Ot(){var e=Pt;return Pt=!1,e}function It(e,t,n){if(i=t,ye.call(Et,i)||!ye.call(Ct,i)&&(St.test(i)?Et[i]=!0:(Ct[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var o=t.toLowerCase().slice(0,5);if("data-"!==o&&"aria-"!==o)return void e.removeAttribute(t)}e.setAttribute(t,n)}var i}function At(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,n)}}function zt(e,t,n,o){if(null===o)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,o)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $t(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Tt(e){if(!e._valueTracker){var t=$t(e)?"checked":"value";e._valueTracker=function(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&void 0!==o&&"function"==typeof o.get&&"function"==typeof o.set){var i=o.get,r=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,r.call(this,e)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=$t(e)?e.checked?"true":"false":e.value),(e=o)!==n&&(t.setValue(e),!0)}var Lt=/[\n"\\]/g;function Dt(e){return e.replace(Lt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ft(e,t,n,o,i,r,s,l){e.name="",null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s?e.type=s:e.removeAttribute("type"),null!=t?"number"===s?(0===t&&""===e.value||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):"submit"!==s&&"reset"!==s||e.removeAttribute("value"),null!=t?"number"===s&&e.value==t?Bt(e,Nt(e.value)):Bt(e,Nt(t)):null!=n?Bt(e,Nt(n)):null!=o&&e.removeAttribute("value"),null==i&&null!=r&&(e.defaultChecked=!!r),null!=i&&(e.checked=i&&"function"!=typeof i&&"symbol"!=typeof i),null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l?e.name=""+Nt(l):e.removeAttribute("name")}function Mt(e,t,n,o,i,r,s,l){if(null!=r&&"function"!=typeof r&&"symbol"!=typeof r&&"boolean"!=typeof r&&(e.type=r),null!=t||null!=n){if(("submit"===r||"reset"===r)&&null==t)return void Tt(e);n=null!=n?""+Nt(n):"",t=null!=t?""+Nt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}o="function"!=typeof(o=null!=o?o:i)&&"symbol"!=typeof o&&!!o,e.checked=l?e.checked:!!o,e.defaultChecked=!!o,null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s&&(e.name=s),Tt(e)}function Bt(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Vt(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(o&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Ht(e,t,n){null==t||((t=""+Nt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+Nt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function jt(e,t,n,o){if(null==t){if(null!=o){if(null!=n)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}null==n&&(n=""),t=n}n=Nt(t),e.defaultValue=n,(o=e.textContent)===n&&""!==o&&null!==o&&(e.value=o),Tt(e)}function Ut(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wt(e,t,n){var o=0===t.indexOf("--");null==n||"boolean"==typeof n||""===n?o?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":o?e.setProperty(t,n):"number"!=typeof n||0===n||qt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Kt(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(s(62));if(e=e.style,null!=n){for(var o in n)!n.hasOwnProperty(o)||null!=t&&t.hasOwnProperty(o)||(0===o.indexOf("--")?e.setProperty(o,""):"float"===o?e.cssFloat="":e[o]="",Pt=!0);for(var i in t)o=t[i],t.hasOwnProperty(i)&&n[i]!==o&&(Wt(e,i,o),Pt=!0)}else for(var r in t)t.hasOwnProperty(r)&&Wt(e,r,t[r])}function Gt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return Yt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Jt=null;function en(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var tn=null,nn=null;function on(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ft(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=o[rt]||null;if(!i)throw Error(s(90));Ft(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(o=n[t]).form===e.form&&Rt(o)}break e;case"textarea":Ht(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&Vt(e,!!n.multiple,t,!1)}}}var rn=!1;function sn(e,t,n){if(rn)return e(t,n);rn=!0;try{return e(t)}finally{if(rn=!1,(null!==tn||null!==nn)&&(gd(),tn&&(t=tn,e=nn,nn=tn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(null===n)return null;var o=n[rt]||null;if(null===o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(s(231,t,typeof n));return n}var an=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),cn=!1;if(an)try{var un={};Object.defineProperty(un,"passive",{get:function(){cn=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch(e){cn=!1}var dn=null,hn=null,pn=null;function fn(){if(pn)return pn;var e,t,n=hn,o=n.length,i="value"in dn?dn.value:dn.textContent,r=i.length;for(e=0;e<o&&n[e]===i[e];e++);var s=o-e;for(t=1;t<=s&&n[o-t]===i[r-t];t++);return pn=i.slice(e,1<t?1-t:void 0)}function vn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function mn(){return!0}function gn(){return!1}function bn(e){function t(t,n,o,i,r){for(var s in this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=r,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?mn:gn,this.isPropagationStopped=gn,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),t}var yn,_n,xn,wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=bn(wn),Sn=E({},wn,{view:0,detail:0}),Cn=bn(Sn),En=E({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&"mousemove"===e.type?(yn=e.screenX-xn.screenX,_n=e.screenY-xn.screenY):_n=yn=0,xn=e),yn)},movementY:function(e){return"movementY"in e?e.movementY:_n}}),Pn=bn(En),On=bn(E({},En,{dataTransfer:0})),In=bn(E({},Sn,{relatedTarget:0})),An=bn(E({},wn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=bn(E({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),Nn=bn(E({},wn,{data:0})),$n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Rn[e])&&!!t[e]}function Dn(){return Ln}var Fn=bn(E({},Sn,{key:function(e){if(e.key){var t=$n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=vn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Tn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dn,charCode:function(e){return"keypress"===e.type?vn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?vn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Mn=bn(E({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Bn=bn(E({},wn,{submitter:0})),Vn=bn(E({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dn})),Hn=bn(E({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0})),jn=bn(E({},En,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Un=bn(E({},wn,{newState:0,oldState:0,source:0})),qn=[9,13,27,32],Wn=an&&"CompositionEvent"in window,Kn=null;an&&"documentMode"in document&&(Kn=document.documentMode);var Gn=an&&"TextEvent"in window&&!Kn,Qn=an&&(!Wn||Kn&&8<Kn&&11>=Kn),Yn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var eo=!1,to={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!to[e.type]:"textarea"===t}function oo(e,t,n,o){tn?nn?nn.push(o):nn=[o]:tn=o,0<(t=wh(t,"onChange")).length&&(n=new kn("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var io=null,ro=null;function so(e){fh(e,0)}function lo(e){if(Rt(mt(e)))return e}function ao(e,t){if("change"===e)return t}var co=!1;if(an){var uo;if(an){var ho="oninput"in document;if(!ho){var po=document.createElement("div");po.setAttribute("oninput","return;"),ho="function"==typeof po.oninput}uo=ho}else uo=!1;co=uo&&(!document.documentMode||9<document.documentMode)}function fo(){io&&(io.detachEvent("onpropertychange",vo),ro=io=null)}function vo(e){if("value"===e.propertyName&&lo(ro)){var t=[];oo(t,ro,e,en(e)),sn(so,t)}}function mo(e,t,n){"focusin"===e?(fo(),ro=n,(io=t).attachEvent("onpropertychange",vo)):"focusout"===e&&fo()}function go(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lo(ro)}function bo(e,t){if("click"===e)return lo(t)}function yo(e,t){if("input"===e||"change"===e)return lo(t)}var _o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function xo(e,t){if(_o(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!ye.call(t,i)||!_o(e[i],t[i]))return!1}return!0}function wo(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function So(e,t){var n,o=ko(e);for(e=0;o;){if(3===o.nodeType){if(n=e+o.textContent.length,e<=t&&n>=t)return{node:o,offset:t-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ko(o)}}function Co(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Co(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Eo(e){for(var t=wo((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=wo((e=t.contentWindow).document)}return t}function Po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Oo=an&&"documentMode"in document&&11>=document.documentMode,Io=null,Ao=null,zo=null,No=!1;function $o(e,t,n){var o=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;No||null==Io||Io!==wo(o)||(o="selectionStart"in(o=Io)&&Po(o)?{start:o.selectionStart,end:o.selectionEnd}:{anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},zo&&xo(zo,o)||(zo=o,0<(o=wh(Ao,"onSelect")).length&&(t=new kn("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Io)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ro={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionrun:To("Transition","TransitionRun"),transitionstart:To("Transition","TransitionStart"),transitioncancel:To("Transition","TransitionCancel"),transitionend:To("Transition","TransitionEnd")},Lo={},Do={};function Fo(e){if(Lo[e])return Lo[e];if(!Ro[e])return e;var t,n=Ro[e];for(t in n)if(n.hasOwnProperty(t)&&t in Do)return Lo[e]=n[t];return e}an&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);var Mo=Fo("animationend"),Bo=Fo("animationiteration"),Vo=Fo("animationstart"),Ho=Fo("transitionrun"),jo=Fo("transitionstart"),Uo=Fo("transitioncancel"),qo=Fo("transitionend"),Wo=new Map,Ko="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Go(e,t){Wo.set(e,t),wt(t,[e])}Ko.push("scrollEnd");var Qo=0;function Yo(e,t){return null!=e.name&&"auto"!==e.name?e.name:null!==t.autoName?t.autoName:(e="_"+(e=Zu.identifierPrefix)+"t_"+(Qo++).toString(32)+"_",t.autoName=e)}function Xo(e){if(null==e||"string"==typeof e)return e;var t=null,n=sd;if(null!==n)for(var o=0;o<n.length;o++){var i=e[n[o]];if(null!=i){if("none"===i)return"none";t=null==t?i:t+" "+i}}return t??e.default}function Zo(e,t){return e=Xo(e),null==(t=Xo(t))?"auto"===e?null:e:"auto"===t?null:t}var Jo="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},ei=[],ti=0,ni=0;function oi(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var o=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var r=ei[t];if(ei[t++]=null,null!==o&&null!==i){var s=o.pending;null===s?i.next=i:(i.next=s.next,s.next=i),o.pending=i}0!==r&&li(n,i,r)}}function ii(e,t,n,o){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=o,ni|=o,e.lanes|=o,null!==(e=e.alternate)&&(e.lanes|=o)}function ri(e,t,n,o){return ii(e,t,n,o),ai(e)}function si(e,t){return ii(e,null,null,t),ai(e)}function li(e,t,n){e.lanes|=n;var o=e.alternate;null!==o&&(o.lanes|=n);for(var i=!1,r=e.return;null!==r;)r.childLanes|=n,null!==(o=r.alternate)&&(o.childLanes|=n),22===r.tag&&(null===(e=r.stateNode)||1&e._visibility||(i=!0)),e=r,r=r.return;return 3===e.tag?(r=e.stateNode,i&&null!==t&&(i=31-Le(n),null===(o=(e=r.hiddenUpdates)[i])?e[i]=[t]:o.push(t),t.lane=536870912|n),r):null}function ai(e){if(50<ld)throw ld=0,ad=null,Error(s(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var ci={};function ui(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,o){return new ui(e,t,n,o)}function hi(e){return!(!(e=e.prototype)||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return null===n?((n=di(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=1206910976&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fi(e,t){e.flags&=1206910978;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,o,i,r){var l=0;if("function"==typeof(o=e))hi(o)&&(l=1);else if("string"==typeof o)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return!0;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e);case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,n,se.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(o){case B:return(e=di(31,n,t,i)).elementType=B,e.lanes=r,e;case A:return mi(n.children,i,r,t);case z:l=8,i|=24;break;case N:return(e=di(12,n,t,2|i)).elementType=N,e.lanes=r,e;case L:return(e=di(13,n,t,i)).elementType=L,e.lanes=r,e;case D:return(e=di(19,n,t,i)).elementType=D,e.lanes=r,e;case V:case j:return(e=di(30,n,t,e=32|i)).elementType=j,e.lanes=r,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if("object"==typeof o&&null!==o)switch(o.$$typeof){case T:l=10;break e;case $:l=9;break e;case R:l=11;break e;case F:l=14;break e;case M:l=16,o=null;break e}l=29,n=Error(s(130,null===e?"null":typeof e,"")),o=null}return(t=di(l,n,t,i)).elementType=e,t.type=o,t.lanes=r,t}function mi(e,t,n,o){return(e=di(7,e,o,t)).lanes=n,e}function gi(e,t,n){return(e=di(6,e,null,t)).lanes=n,e}function bi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return(t=di(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function xi(e,t){if("object"==typeof e&&null!==e){var n=_i.get(e);return void 0!==n?n:(t={value:e,source:t,stack:be(t)},_i.set(e,t),t)}return{value:e,source:t,stack:be(t)}}var wi=[],ki=0,Si=null,Ci=0,Ei=[],Pi=0,Oi=null,Ii=1,Ai="";function zi(e,t){wi[ki++]=Ci,wi[ki++]=Si,Si=e,Ci=t}function Ni(e,t,n){Ei[Pi++]=Ii,Ei[Pi++]=Ai,Ei[Pi++]=Oi,Oi=e;var o=Ii;e=Ai;var i=32-Le(o)-1;o&=~(1<<i),n+=1;var r=32-Le(t)+i;if(30<r){var s=i-i%5;r=(o&(1<<s)-1).toString(32),o>>=s,i-=s,Ii=1<<32-Le(t)+i|n<<i|o,Ai=r+e}else Ii=1<<r|n<<i|o,Ai=e}function $i(e){null!==e.return&&(zi(e,1),Ni(e,1,0))}function Ti(e){for(;e===Si;)Si=wi[--ki],wi[ki]=null,Ci=wi[--ki],wi[ki]=null;for(;e===Oi;)Oi=Ei[--Pi],Ei[Pi]=null,Ai=Ei[--Pi],Ei[Pi]=null,Ii=Ei[--Pi],Ei[Pi]=null}function Ri(e,t){Ei[Pi++]=Ii,Ei[Pi++]=Ai,Ei[Pi++]=Oi,Ii=t.id,Ai=t.overflow,Oi=e}var Li=null,Di=null,Fi=!1,Mi=null,Bi=!1,Vi=Error(s(519));function Hi(e){throw Gi(xi(Error(s(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),Vi}function ji(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[it]=e,t[rt]=o,n){case"dialog":vh("cancel",t),vh("close",t);break;case"iframe":case"object":case"embed":vh("load",t);break;case"video":case"audio":for(n=0;n<hh.length;n++)vh(hh[n],t);break;case"source":vh("error",t);break;case"img":case"image":case"link":vh("error",t),vh("load",t);break;case"details":vh("toggle",t);break;case"input":vh("invalid",t),Mt(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vh("invalid",t);break;case"textarea":vh("invalid",t),jt(t,o.value,o.defaultValue,o.children)}"string"!=typeof(n=o.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||!0===o.suppressHydrationWarning||Oh(t.textContent,n)?(null!=o.popover&&(vh("beforetoggle",t),vh("toggle",t)),null!=o.onScroll&&vh("scroll",t),null!=o.onScrollEnd&&vh("scrollend",t),null!=o.onClick&&(t.onclick=Zt),t=!0):t=!1,t||Hi(e,!0)}function Ui(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:return void(Bi=!1);case 27:case 3:return void(Bi=!0);default:Li=Li.return}}function qi(e){if(e!==Li)return!1;if(!Fi)return Ui(e),Fi=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Bh(e.type,e.memoizedProps)),t=!t),t&&Di&&Hi(e),Ui(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(s(317));Di=Ap(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(s(317));Di=Ap(e)}else 27===n?(n=Di,Gh(e.type)?(e=Ip,Ip=null,Di=e):Di=n):Di=Li?Op(e.stateNode.nextSibling):null;return!0}function Wi(){Di=Li=null,Fi=!1}function Ki(){var e=Mi;return null!==e&&(null===Uu?Uu=e:Uu.push.apply(Uu,e),Mi=null),e}function Gi(e){null===Mi?Mi=[e]:Mi.push(e)}var Qi=te(null),Yi=null,Xi=null;function Zi(e,t,n){oe(Qi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Qi.current,ne(Qi)}function er(e,t,n){for(;null!==e;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==o&&(o.childLanes|=t)):null!==o&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function tr(e,t,n,o){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var r=i.dependencies;if(null!==r){var l=i.child;r=r.firstContext;e:for(;null!==r;){var a=r;r=i;for(var c=0;c<t.length;c++)if(a.context===t[c]){r.lanes|=n,null!==(a=r.alternate)&&(a.lanes|=n),er(r.return,n,e),o||(l=null);break e}r=a.next}}else if(18===i.tag){if(null===(l=i.return))throw Error(s(341));l.lanes|=n,null!==(r=l.alternate)&&(r.lanes|=n),er(l,n,e),l=null}else 13===i.tag&&null!==i.memoizedState&&null===i.memoizedState.dehydrated?(i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),er(i.return,n,e),l=null!==(l=i.child)?l.sibling:null):l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===e){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}}function nr(e,t,n,o){e=null;for(var i=t,r=!1;null!==i;){if(!r)if(524288&i.flags)r=!0;else if(262144&i.flags)break;if(10===i.tag){var l=i.alternate;if(null===l)throw Error(s(387));if(null!==(l=l.memoizedProps)){var a=i.type;_o(i.pendingProps.value,l.value)||(null!==e?e.push(a):e=[a])}}else if(i===ce.current){if(null===(l=i.alternate))throw Error(s(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(hf):e=[hf])}i=i.return}return null!==e&&tr(t,e,n,o),t.flags|=262144,null!==e}function or(e){for(e=e.firstContext;null!==e;){if(!_o(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){Yi=e,Xi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function rr(e){return lr(Yi,e)}function sr(e,t){return null===Yi&&ir(e),lr(e,t)}function lr(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Xi){if(null===e)throw Error(s(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var ar="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},cr=n.unstable_scheduleCallback,ur=n.unstable_NormalPriority,dr={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hr(){return{controller:new ar,data:new Map,refCount:0}}function pr(e){e.refCount--,0===e.refCount&&cr(ur,function(){e.controller.abort()})}function fr(e,t){if(4194048&e.pendingLanes){var n=e.transitionTypes;for(null===n&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var o=t[e];-1===n.indexOf(o)&&n.push(o)}}}var vr=null,mr=null,gr=0,br=0,yr=null;function _r(){if(0===--gr&&(vr=null,null!==mr)){null!==yr&&(yr.status="fulfilled");var e=mr;mr=null,br=0,yr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var xr=Y.S;Y.S=function(e,t){if(Ku=Se(),"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===mr){var n=mr=[];gr=0,br=ah(),yr={status:"pending",value:void 0,then:function(e){n.push(e)}}}gr++,t.then(_r,_r)}(0,t),null!==vr)for(var n=Qd;null!==n;)fr(n,vr),n=n.next;if(null!==(n=e.types)){for(var o=Qd;null!==o;)fr(o,n),o=o.next;if(0!==br){null===(o=vr)&&(o=vr=[]);for(var i=0;i<n.length;i++){var r=n[i];-1===o.indexOf(r)&&o.push(r)}}}null!==xr&&xr(e,t)};var wr=te(null);function kr(){var e=wr.current;return null!==e?e:Ou.pooledCache}function Sr(e,t){oe(wr,null===t?wr.current:t.pool)}function Cr(){var e=kr();return null===e?null:{parent:dr._currentValue,pool:e}}var Er=Error(s(460)),Pr=Error(s(474)),Or=Error(s(542)),Ir={then:function(){}};function Ar(e){return"fulfilled"===(e=e.status)||"rejected"===e}function zr(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":if(Rr(e=t.reason),void 0===e&&!("reason"in t))throw Error(s(600));throw e;default:if("string"==typeof t.status)t.then(Zt,Zt);else{if(null!==(e=Ou)&&100<e.shellSuspendCounter)throw Error(s(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw Rr(e=t.reason),e}throw $r=t,Er}}function Nr(e){try{return(0,e._init)(e._payload)}catch(e){if(null!==e&&"object"==typeof e&&"function"==typeof e.then)throw $r=e,Er;throw e}}var $r=null;function Tr(){if(null===$r)throw Error(s(459));var e=$r;return $r=null,e}function Rr(e){if(e===Er||e===Or)throw Error(s(483))}var Lr=null,Dr=0;function Fr(e){var t=Dr;return Dr+=1,null===Lr&&(Lr=[]),zr(Lr,e,t)}function Mr(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Br(e,t){if(t.$$typeof===P)throw Error(s(525));throw e=Object.prototype.toString.call(t),Error(s(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vr(e){function t(t,n){if(e){var o=t.deletions;null===o?(t.deletions=[n],t.flags|=16):o.push(n)}}function n(n,o){if(!e)return null;for(;null!==o;)t(n,o),o=o.sibling;return null}function o(e){for(var t=new Map;null!==e;)null===e.key?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return(e=pi(e,t)).index=0,e.sibling=null,e}function r(t,n,o){return t.index=o,e?null!==(o=t.alternate)?(o=o.index)<n?(t.flags|=2,n):o:(t.flags|=134217730,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=134217730),t}function a(e,t,n,o){return null===t||6!==t.tag?((t=gi(n,e.mode,o)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,o){var r=n.type;return r===A?(Mr(e=d(e,t,n.props.children,o,n.key),n),e):null!==t&&(t.elementType===r||"object"==typeof r&&null!==r&&r.$$typeof===M&&Nr(r)===t.type)?(Mr(t=i(t,n.props),n),t.return=e,t):(Mr(t=vi(n.type,n.key,n.props,null,e.mode,o),n),t.return=e,t)}function u(e,t,n,o){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=yi(n,e.mode,o)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,o,r){return null===t||7!==t.tag?((t=mi(n,e.mode,o,r)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=gi(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case O:return Mr(n=vi(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case I:return(t=yi(t,e.mode,n)).return=e,t;case M:return h(e,t=Nr(t),n)}if(Q(t)||W(t))return(t=mi(t,e.mode,n,null)).return=e,t;if("function"==typeof t.then)return h(e,Fr(t),n);if(t.$$typeof===T)return h(e,sr(e,t),n);Br(e,t)}return null}function p(e,t,n,o){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==i?null:a(e,t,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case O:return n.key===i?c(e,t,n,o):null;case I:return n.key===i?u(e,t,n,o):null;case M:return p(e,t,n=Nr(n),o)}if(Q(n)||W(n))return null!==i?null:d(e,t,n,o,null);if("function"==typeof n.then)return p(e,t,Fr(n),o);if(n.$$typeof===T)return p(e,t,sr(e,n),o);Br(e,n)}return null}function f(e,t,n,o,i){if("string"==typeof o&&""!==o||"number"==typeof o||"bigint"==typeof o)return a(t,e=e.get(n)||null,""+o,i);if("object"==typeof o&&null!==o){switch(o.$$typeof){case O:return c(t,e=e.get(null===o.key?n:o.key)||null,o,i);case I:return u(t,e=e.get(null===o.key?n:o.key)||null,o,i);case M:return f(e,t,n,o=Nr(o),i)}if(Q(o)||W(o))return d(t,e=e.get(n)||null,o,i,null);if("function"==typeof o.then)return f(e,t,n,Fr(o),i);if(o.$$typeof===T)return f(e,t,n,sr(t,o),i);Br(t,o)}return null}function v(a,c,u,d){if("object"==typeof u&&null!==u&&u.type===A&&null===u.key&&void 0===u.props.ref&&(u=u.props.children),"object"==typeof u&&null!==u){switch(u.$$typeof){case O:e:{for(var m=u.key;null!==c;){if(c.key===m){if((m=u.type)===A){if(7===c.tag){n(a,c.sibling),Mr(d=i(c,u.props.children),u),d.return=a,a=d;break e}}else if(c.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===M&&Nr(m)===c.type){n(a,c.sibling),Mr(d=i(c,u.props),u),d.return=a,a=d;break e}n(a,c);break}t(a,c),c=c.sibling}u.type===A?(Mr(d=mi(u.props.children,a.mode,d,u.key),u),d.return=a,a=d):(Mr(d=vi(u.type,u.key,u.props,null,a.mode,d),u),d.return=a,a=d)}return l(a);case I:e:{for(m=u.key;null!==c;){if(c.key===m){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(a,c.sibling),(d=i(c,u.children||[])).return=a,a=d;break e}n(a,c);break}t(a,c),c=c.sibling}(d=yi(u,a.mode,d)).return=a,a=d}return l(a);case M:return v(a,c,u=Nr(u),d)}if(Q(u))return function(i,s,l,a){for(var c=null,u=null,d=s,v=s=0,m=null;null!==d&&v<l.length;v++){d.index>v?(m=d,d=null):m=d.sibling;var g=p(i,d,l[v],a);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(i,d),s=r(g,s,v),null===u?c=g:u.sibling=g,u=g,d=m}if(v===l.length)return n(i,d),Fi&&zi(i,v),c;if(null===d){for(;v<l.length;v++)null!==(d=h(i,l[v],a))&&(s=r(d,s,v),null===u?c=d:u.sibling=d,u=d);return Fi&&zi(i,v),c}for(d=o(d);v<l.length;v++)null!==(m=f(d,i,v,l[v],a))&&(e&&null!==(g=m.alternate)&&d.delete(null===g.key?v:g.key),s=r(m,s,v),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach(function(e){return t(i,e)}),Fi&&zi(i,v),c}(a,c,u,d);if(W(u)){if("function"!=typeof(m=W(u)))throw Error(s(150));return function(i,l,a,c){if(null==a)throw Error(s(151));for(var u=null,d=null,v=l,m=l=0,g=null,b=a.next();null!==v&&!b.done;m++,b=a.next()){v.index>m?(g=v,v=null):g=v.sibling;var y=p(i,v,b.value,c);if(null===y){null===v&&(v=g);break}e&&v&&null===y.alternate&&t(i,v),l=r(y,l,m),null===d?u=y:d.sibling=y,d=y,v=g}if(b.done)return n(i,v),Fi&&zi(i,m),u;if(null===v){for(;!b.done;m++,b=a.next())null!==(b=h(i,b.value,c))&&(l=r(b,l,m),null===d?u=b:d.sibling=b,d=b);return Fi&&zi(i,m),u}for(v=o(v);!b.done;m++,b=a.next())null!==(b=f(v,i,m,b.value,c))&&(e&&null!==(g=b.alternate)&&v.delete(null===g.key?m:g.key),l=r(b,l,m),null===d?u=b:d.sibling=b,d=b);return e&&v.forEach(function(e){return t(i,e)}),Fi&&zi(i,m),u}(a,c,u=m.call(u),d)}if("function"==typeof u.then)return v(a,c,Fr(u),d);if(u.$$typeof===T)return v(a,c,sr(a,u),d);Br(a,u)}return"string"==typeof u&&""!==u||"number"==typeof u||"bigint"==typeof u?(u=""+u,null!==c&&6===c.tag?(n(a,c.sibling),(d=i(c,u)).return=a,a=d):(n(a,c),(d=gi(u,a.mode,d)).return=a,a=d),l(a)):n(a,c)}return function(e,t,n,o){try{Dr=0;var i=v(e,t,n,o);return Lr=null,i}catch(t){if(t===Er||t===Or)throw t;var r=di(29,t,null,e.mode);return r.lanes=o,r.return=e,r}}}var Hr=Vr(!0),jr=Vr(!1),Ur=!1;function qr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gr(e,t,n){var o=e.updateQueue;if(null===o)return null;if(o=o.shared,2&Pu){var i=o.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),o.pending=t,t=ai(e),li(e,null,n),t}return ii(e,o,t,n),ai(e)}function Qr(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var o=t.lanes;n|=o&=e.pendingLanes,t.lanes=n,Xe(e,n)}}function Yr(e,t){var n=e.updateQueue,o=e.alternate;if(null!==o&&n===(o=o.updateQueue)){var i=null,r=null;if(null!==(n=n.firstBaseUpdate)){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===r?i=r=s:r=r.next=s,n=n.next}while(null!==n);null===r?i=r=t:r=r.next=t}else i=r=t;return n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xr=!1;function Zr(){if(Xr&&null!==yr)throw yr}function Jr(e,t,n,o){Xr=!1;var i=e.updateQueue;Ur=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var a=l,c=a.next;a.next=null,null===s?r=c:s.next=c,s=a;var u=e.alternate;null!==u&&(l=(u=u.updateQueue).lastBaseUpdate)!==s&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=a)}if(null!==r){var d=i.baseState;for(s=0,u=c=a=null,l=r;;){var h=-536870913&l.lane,p=h!==l.lane;if(p?(Au&h)===h:(o&h)===h){0!==h&&h===br&&(Xr=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var f=e,v=l;h=t;var m=n;switch(v.tag){case 1:if("function"==typeof(f=v.payload)){d=f.call(m,d,h);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null==(h="function"==typeof(f=v.payload)?f.call(m,d,h):f))break e;d=E({},d,h);break e;case 2:Ur=!0}}null!==(h=l.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=i.callbacks)?i.callbacks=[h]:p.push(h))}else p={lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,a=d):u=u.next=p,s|=h;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(p=l).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}null===u&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===r&&(i.shared.lanes=0),Fu|=s,e.lanes=s,e.memoizedState=d}}function es(e,t){if("function"!=typeof e)throw Error(s(191,e));e.call(t)}function ts(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)es(n[e],t)}var ns=te(null),os=te(0);function is(e,t){oe(os,e=Lu),oe(ns,t),Lu=e|t.baseLanes}function rs(){oe(os,Lu),oe(ns,ns.current)}function ss(){Lu=os.current,ne(ns),ne(os)}var ls=te(null),as=null;function cs(e){var t=e.alternate;oe(fs,1&fs.current),oe(ls,e),null===as&&(null===t||null!==ns.current||null!==t.memoizedState)&&(as=e)}function us(e){oe(fs,fs.current),oe(ls,e),null===as&&(as=e)}function ds(e){22===e.tag?(oe(fs,fs.current),oe(ls,e),null===as&&(as=e)):hs()}function hs(){oe(fs,fs.current),oe(ls,ls.current)}function ps(e){ne(ls),as===e&&(as=null),ne(fs)}var fs=te(0);function vs(e,t){oe(ls,ls.current),oe(fs,t)}function ms(e){ne(fs),ne(ls),as===e&&(as=null)}function gs(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Ep(n)||Pp(n)))return t}else if(19===t.tag&&"independent"!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bs=0,ys=null,_s=null,xs=null,ws=!1,ks=!1,Ss=!1,Cs=0,Es=0,Ps=null,Os=0;function Is(){throw Error(s(321))}function As(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_o(e[n],t[n]))return!1;return!0}function zs(e,t,n,o,i,r){return bs=r,ys=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=null===e||null===e.memoizedState?Wl:Kl,Ss=!1,r=n(o,i),Ss=!1,ks&&(r=$s(t,n,o,i)),Ns(e),r}function Ns(e){Y.H=ql;var t=null!==_s&&null!==_s.next;if(bs=0,xs=_s=ys=null,ws=!1,Es=0,Ps=null,t)throw Error(s(300));null===e||ca||null!==(e=e.dependencies)&&or(e)&&(ca=!0)}function $s(e,t,n,o){ys=e;var i=0;do{if(ks&&(Ps=null),Es=0,ks=!1,25<=i)throw Error(s(301));if(i+=1,xs=_s=null,null!=e.updateQueue){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,null!=r.memoCache&&(r.memoCache.index=0)}Y.H=Gl,r=t(n,o)}while(ks);return r}function Ts(){var e=Y.H,t=e.useState()[0];return t="function"==typeof t.then?Bs(t):t,e=e.useState()[0],(null!==_s?_s.memoizedState:null)!==e&&(ys.flags|=1024),t}function Rs(){var e=0!==Cs;return Cs=0,e}function Ls(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ds(e){if(ws){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ws=!1}bs=0,xs=_s=ys=null,ks=!1,Es=Cs=0,Ps=null}function Fs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===xs?ys.memoizedState=xs=e:xs=xs.next=e,xs}function Ms(){if(null===_s){var e=ys.alternate;e=null!==e?e.memoizedState:null}else e=_s.next;var t=null===xs?ys.memoizedState:xs.next;if(null!==t)xs=t,_s=e;else{if(null===e){if(null===ys.alternate)throw Error(s(467));throw Error(s(310))}e={memoizedState:(_s=e).memoizedState,baseState:_s.baseState,baseQueue:_s.baseQueue,queue:_s.queue,next:null},null===xs?ys.memoizedState=xs=e:xs=xs.next=e}return xs}function Bs(e){var t=Es;return Es+=1,null===Ps&&(Ps=[]),e=zr(Ps,e,t),t=ys,null===(null===xs?t.memoizedState:xs.next)&&(t=t.alternate,Y.H=null===t||null===t.memoizedState?Wl:Kl),e}function Vs(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return Bs(e);if(e.$$typeof===U)return;if(e.$$typeof===T)return rr(e)}throw Error(s(438,String(e)))}function Hs(e){var t=null,n=ys.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var o=ys.alternate;null!==o&&null!==(o=o.updateQueue)&&null!=(o=o.memoCache)&&(t={data:o.data.map(function(e){return e.slice()}),index:0})}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ys.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=H;return t.index++,n}function js(e,t){return"function"==typeof t?t(e):t}function Us(e){return qs(Ms(),_s,e)}function qs(e,t,n){var o=e.queue;if(null===o)throw Error(s(311));o.lastRenderedReducer=n;var i=e.baseQueue,r=o.pending;if(null!==r){if(null!==i){var l=i.next;i.next=r.next,r.next=l}t.baseQueue=i=r,o.pending=null}if(r=e.baseState,null===i)e.memoizedState=r;else{var a=l=null,c=null,u=t=i.next,d=!1;do{var h=-536870913&u.lane;if(h!==u.lane?(Au&h)===h:(bs&h)===h){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===br&&(d=!0);else{if((bs&p)===p){u=u.next,p===br&&(d=!0);continue}h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(a=c=h,l=r):c=c.next=h,ys.lanes|=p,Fu|=p}h=u.action,Ss&&n(r,h),r=u.hasEagerState?u.eagerState:n(r,h)}else p={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(a=c=p,l=r):c=c.next=p,ys.lanes|=h,Fu|=h;u=u.next}while(null!==u&&u!==t);if(null===c?l=r:c.next=a,!_o(r,e.memoizedState)&&(ca=!0,d&&null!==(n=yr)))throw n;e.memoizedState=r,e.baseState=l,e.baseQueue=c,o.lastRenderedState=r}return null===i&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ws(e){var t=Ms(),n=t.queue;if(null===n)throw Error(s(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,r=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{r=e(r,l.action),l=l.next}while(l!==i);_o(r,t.memoizedState)||(ca=!0),t.memoizedState=r,null===t.baseQueue&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function Ks(e,t,n){var o=ys,i=Ms(),r=Fi;if(r){if(void 0===n)throw Error(s(407));n=n()}else n=t();var l=!_o((_s||i).memoizedState,n);if(l&&(i.memoizedState=n,ca=!0),i=i.queue,bl(Ys.bind(null,o,i,e),[e]),pl((e=i.getSnapshot!==t||l||null!==xs&&!!(1&xs.memoizedState.tag))?9:8,{destroy:void 0},Qs.bind(null,o,i,n,t),null),e){if(o.flags|=2048,null===Ou)throw Error(s(349));r||127&bs||Gs(o,t,n)}return n}function Gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ys.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ys.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Qs(e,t,n,o){t.value=n,t.getSnapshot=o,Xs(t)&&Zs(e)}function Ys(e,t,n){return n(function(){Xs(t)&&Zs(e)})}function Xs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_o(e,n)}catch(e){return!0}}function Zs(e){var t=si(e,2);null!==t&&hd(t,0,2)}function Js(e){var t=Fs();if("function"==typeof e){var n=e;if(e=n(),Ss){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:e},t}function el(e,t,n,o){return e.baseState=n,qs(e,_s,"function"==typeof o?o:js)}function tl(e,t,n,o,i){if(Hl(e))throw Error(s(485));if(null!==(e=t.action)){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){r.listeners.push(e)}};null!==Y.T?n(!0):r.isTransition=!1,o(r),null===(n=t.pending)?(r.next=t.pending=r,nl(t,r)):(r.next=n.next,t.pending=n.next=r)}}function nl(e,t){var n=t.action,o=t.payload,i=e.state;if(t.isTransition){var r=Y.T,s={};s.types=null!==r?r.types:null,Y.T=s;try{var l=n(i,o),a=Y.S;null!==a&&a(s,l),ol(e,t,l)}catch(n){rl(e,t,n)}finally{null!==r&&null!==s.types&&(r.types=s.types),Y.T=r}}else try{ol(e,t,r=n(i,o))}catch(n){rl(e,t,n)}}function ol(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){il(e,t,n)},function(n){return rl(e,t,n)}):il(e,t,n)}function il(e,t,n){t.status="fulfilled",t.value=n,sl(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,nl(e,n)))}function rl(e,t,n){var o=e.pending;if(e.pending=null,null!==o){o=o.next;do{t.status="rejected",t.reason=n,sl(t),t=t.next}while(t!==o)}e.action=null}function sl(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ll(e,t){return t}function al(e,t){if(Fi){var n=Ou.formState;if(null!==n){e:{var o=ys;if(Fi){if(Di){t:{for(var i=Di,r=Bi;8!==i.nodeType;){if(!r){i=null;break t}if(null===(i=Op(i.nextSibling))){i=null;break t}}i="F!"===(r=i.data)||"F"===r?i:null}if(i){Di=Op(i.nextSibling),o="F!"===i.data;break e}}Hi(o)}o=!1}o&&(t=n[0])}}return(n=Fs()).memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:t},n.queue=o,n=Ml.bind(null,ys,o),o.dispatch=n,o=Js(!1),r=Vl.bind(null,ys,!1,o.queue),i={state:t,dispatch:null,action:e,pending:null},(o=Fs()).queue=i,n=tl.bind(null,ys,i,r,n),i.dispatch=n,o.memoizedState=e,[t,n,!1]}function cl(e){return ul(Ms(),_s,e)}function ul(e,t,n){if(t=qs(e,t,ll)[0],e=Us(js)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var o=Bs(t)}catch(e){if(e===Er)throw Or;throw e}else o=t;var i=(t=Ms()).queue,r=i.dispatch;return n!==t.memoizedState&&(ys.flags|=2048,pl(9,{destroy:void 0},dl.bind(null,i,n),null)),[o,r,e]}function dl(e,t){e.action=t}function hl(e){var t=Ms(),n=_s;if(null!==n)return ul(t,n,e);Ms(),t=t.memoizedState;var o=(n=Ms()).queue.dispatch;return n.memoizedState=e,[t,o,!1]}function pl(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},null===(t=ys.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ys.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function fl(){return Ms().memoizedState}function vl(e,t,n,o){var i=Fs();ys.flags|=e,i.memoizedState=pl(1|t,{destroy:void 0},n,void 0===o?null:o)}function ml(e,t,n,o){var i=Ms();o=void 0===o?null:o;var r=i.memoizedState.inst;null!==_s&&null!==o&&As(o,_s.memoizedState.deps)?i.memoizedState=pl(t,r,n,o):(ys.flags|=e,i.memoizedState=pl(1|t,r,n,o))}function gl(e,t){vl(8390656,8,e,t)}function bl(e,t){ml(2048,8,e,t)}function yl(e){var t=Ms().memoizedState;return function(e){ys.flags|=4;var t=ys.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},ys.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(2&Pu)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _l(e,t){return ml(4,2,e,t)}function xl(e,t){return ml(4,4,e,t)}function wl(e,t){if("function"==typeof t){e=e();var n=t(e);return function(){"function"==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function kl(e,t,n){n=null!=n?n.concat([e]):null,ml(4,4,wl.bind(null,t,e),n)}function Sl(){}function Cl(e,t){var n=Ms();t=void 0===t?null:t;var o=n.memoizedState;return null!==t&&As(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function El(e,t){var n=Ms();t=void 0===t?null:t;var o=n.memoizedState;if(null!==t&&As(t,o[1]))return o[0];if(o=e(),Ss){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[o,t],o}function Pl(e,t,n){return void 0===n||1073741824&bs&&!(261930&Au)?e.memoizedState=t:(e.memoizedState=n,e=ud(),ys.lanes|=e,Fu|=e,n)}function Ol(e,t,n,o){return _o(n,t)?n:null!==ns.current?(e=Pl(e,n,o),_o(e,t)||(ca=!0),e):106&bs&&(!(1073741824&bs)||261930&Au)?(e=ud(),ys.lanes|=e,Fu|=e,t):(ca=!0,e.memoizedState=n)}function Il(e,t,n,o,i){var r=X.p;X.p=0!==r&&8>r?r:8;var s,l,a,c=Y.T,u={};u.types=null!==c?c.types:null,Y.T=u,Vl(e,!1,t,n);try{var d=i(),h=Y.S;null!==h&&h(u,d),null!==d&&"object"==typeof d&&"function"==typeof d.then?Bl(e,t,(s=o,l=[],a={status:"pending",value:null,reason:null,then:function(e){l.push(e)}},d.then(function(){a.status="fulfilled",a.value=s;for(var e=0;e<l.length;e++)(0,l[e])(s)},function(e){for(a.status="rejected",a.reason=e,e=0;e<l.length;e++)(0,l[e])(void 0)}),a),cd()):Bl(e,t,o,cd())}catch(n){Bl(e,t,{then:function(){},status:"rejected",reason:n},cd())}finally{X.p=r,null!==c&&null!==u.types&&(c.types=u.types),Y.T=c}}function Al(){}function zl(e,t,n,o){if(5!==e.tag)throw Error(s(476));var i=Nl(e).queue;Il(e,i,t,Z,null===n?Al:function(){return $l(e),n(o)})}function Nl(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:Z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function $l(e){var t=Nl(e);null===t.next&&(t=e.alternate.memoizedState),Bl(e,t.next.queue,{},cd())}function Tl(){return rr(hf)}function Rl(){return Ms().memoizedState}function Ll(){return Ms().memoizedState}function Dl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=cd(),o=Gr(t,e=Kr(n),n);return null!==o&&(hd(o,0,n),Qr(o,t,n)),t={cache:hr()},void(e.payload=t)}t=t.return}}function Fl(e,t,n){var o=cd();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hl(e)?jl(t,n):null!==(n=ri(e,t,n,o))&&(hd(n,0,o),Ul(n,t,o))}function Ml(e,t,n){Bl(e,t,n,cd())}function Bl(e,t,n,o){var i={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))jl(t,i);else{var r=e.alternate;if(0===e.lanes&&(null===r||0===r.lanes)&&null!==(r=t.lastRenderedReducer))try{var s=t.lastRenderedState,l=r(s,n);if(i.hasEagerState=!0,i.eagerState=l,_o(l,s))return ii(e,t,i,0),null===Ou&&oi(),!1}catch(e){}if(null!==(n=ri(e,t,i,o)))return hd(n,0,o),Ul(n,t,o),!0}return!1}function Vl(e,t,n,o){if(o={lane:2,revertLane:ah(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(t)throw Error(s(479))}else null!==(t=ri(e,n,o,2))&&hd(t,0,2)}function Hl(e){var t=e.alternate;return e===ys||null!==t&&t===ys}function jl(e,t){ks=ws=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ul(e,t,n){if(4194048&n){var o=t.lanes;n|=o&=e.pendingLanes,t.lanes=n,Xe(e,n)}}var ql={readContext:rr,use:Vs,useCallback:Is,useContext:Is,useEffect:Is,useImperativeHandle:Is,useLayoutEffect:Is,useInsertionEffect:Is,useMemo:Is,useReducer:Is,useRef:Is,useState:Is,useDebugValue:Is,useDeferredValue:Is,useTransition:Is,useSyncExternalStore:Is,useId:Is,useHostTransitionStatus:Is,useFormState:Is,useActionState:Is,useOptimistic:Is,useMemoCache:Is,useCacheRefresh:Is,useEffectEvent:Is},Wl={readContext:rr,use:Vs,useCallback:function(e,t){return Fs().memoizedState=[e,void 0===t?null:t],e},useContext:rr,useEffect:gl,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,vl(4194308,4,wl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vl(4194308,4,e,t)},useInsertionEffect:function(e,t){vl(4,2,e,t)},useMemo:function(e,t){var n=Fs();t=void 0===t?null:t;var o=e();if(Ss){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=Fs();if(void 0!==n){var i=n(t);if(Ss){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return o.memoizedState=o.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=Fl.bind(null,ys,e),[o.memoizedState,e]},useRef:function(e){return e={current:e},Fs().memoizedState=e},useState:function(e){var t=(e=Js(e)).queue,n=Ml.bind(null,ys,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Sl,useDeferredValue:function(e,t){return Pl(Fs(),e,t)},useTransition:function(){var e=Js(!1);return e=Il.bind(null,ys,e.queue,!0,!1),Fs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=ys,i=Fs();if(Fi){if(void 0===n)throw Error(s(407));n=n()}else{if(n=t(),null===Ou)throw Error(s(349));127&Au||Gs(o,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,gl(Ys.bind(null,o,r,e),[e]),o.flags|=2048,pl(9,{destroy:void 0},Qs.bind(null,o,r,n,t),null),n},useId:function(){var e=Fs(),t=Ou.identifierPrefix;if(Fi){var n=Ai;t="_"+t+"R_"+(n=(Ii&~(1<<32-Le(Ii)-1)).toString(32)+n),0<(n=Cs++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Os++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Tl,useFormState:al,useActionState:al,useOptimistic:function(e){var t=Fs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vl.bind(null,ys,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hs,useCacheRefresh:function(){return Fs().memoizedState=Dl.bind(null,ys)},useEffectEvent:function(e){var t=Fs(),n={impl:e};return t.memoizedState=n,function(){if(2&Pu)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Kl={readContext:rr,use:Vs,useCallback:Cl,useContext:rr,useEffect:bl,useImperativeHandle:kl,useInsertionEffect:_l,useLayoutEffect:xl,useMemo:El,useReducer:Us,useRef:fl,useState:function(){return Us(js)},useDebugValue:Sl,useDeferredValue:function(e,t){return Ol(Ms(),_s.memoizedState,e,t)},useTransition:function(){var e=Us(js)[0],t=Ms().memoizedState;return["boolean"==typeof e?e:Bs(e),t]},useSyncExternalStore:Ks,useId:Rl,useHostTransitionStatus:Tl,useFormState:cl,useActionState:cl,useOptimistic:function(e,t){return el(Ms(),0,e,t)},useMemoCache:Hs,useCacheRefresh:Ll,useEffectEvent:yl},Gl={readContext:rr,use:Vs,useCallback:Cl,useContext:rr,useEffect:bl,useImperativeHandle:kl,useInsertionEffect:_l,useLayoutEffect:xl,useMemo:El,useReducer:Ws,useRef:fl,useState:function(){return Ws(js)},useDebugValue:Sl,useDeferredValue:function(e,t){var n=Ms();return null===_s?Pl(n,e,t):Ol(n,_s.memoizedState,e,t)},useTransition:function(){var e=Ws(js)[0],t=Ms().memoizedState;return["boolean"==typeof e?e:Bs(e),t]},useSyncExternalStore:Ks,useId:Rl,useHostTransitionStatus:Tl,useFormState:hl,useActionState:hl,useOptimistic:function(e,t){var n=Ms();return null!==_s?el(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hs,useCacheRefresh:Ll,useEffectEvent:yl};function Ql(e,t,n,o){n=null==(n=n(o,t=e.memoizedState))?t:E({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Yl={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=cd(),i=Kr(o);i.payload=t,null!=n&&(i.callback=n),null!==(t=Gr(e,i,o))&&(hd(t,0,o),Qr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=cd(),i=Kr(o);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=Gr(e,i,o))&&(hd(t,0,o),Qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=cd(),o=Kr(n);o.tag=2,null!=t&&(o.callback=t),null!==(t=Gr(e,o,n))&&(hd(t,0,n),Qr(t,e,n))}};function Xl(e,t,n,o,i,r,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,r,s):!(t.prototype&&t.prototype.isPureReactComponent&&xo(n,o)&&xo(i,r))}function Zl(e,t,n,o){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Yl.enqueueReplaceState(t,t.state,null)}function Jl(e,t){var n=t;if("ref"in t)for(var o in n={},t)"ref"!==o&&(n[o]=t[o]);if(e=e.defaultProps)for(var i in n===t&&(n=E({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}function ea(e){Jo(e)}function ta(e){console.error(e)}function na(e){Jo(e)}function oa(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ia(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ra(e,t,n){return(n=Kr(n)).tag=3,n.payload={element:null},n.callback=function(){oa(e,t)},n}function sa(e){return(e=Kr(e)).tag=3,e}function la(e,t,n,o){var i=n.type.getDerivedStateFromError;if("function"==typeof i){var r=o.value;e.payload=function(){return i(r)},e.callback=function(){ia(t,n,o)}}var s=n.stateNode;null!==s&&"function"==typeof s.componentDidCatch&&(e.callback=function(){ia(t,n,o),"function"!=typeof i&&(null===Yu?Yu=new Set([this]):Yu.add(this));var e=o.stack;this.componentDidCatch(o.value,{componentStack:null!==e?e:""})})}var aa=Error(s(461)),ca=!1;function ua(e,t,n,o){t.child=null===e?jr(t,null,n,o):Hr(t,e.child,n,o)}function da(e,t,n,o,i){n=n.render;var r=t.ref;if("ref"in o){var s={};for(var l in o)"ref"!==l&&(s[l]=o[l])}else s=o;return ir(t),o=zs(e,t,n,s,r,i),l=Rs(),null===e||ca?(Fi&&l&&$i(t),t.flags|=1,ua(e,t,o,i),t.child):(Ls(e,t,i),Da(e,t,i))}function ha(e,t,n,o,i){if(null===e){var r=n.type;return"function"!=typeof r||hi(r)||void 0!==r.defaultProps||null!==n.compare?((e=vi(n.type,null,o,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=r,pa(e,t,r,o,i))}if(r=e.child,!Fa(e,i)){var s=r.memoizedProps;if((n=null!==(n=n.compare)?n:xo)(s,o)&&e.ref===t.ref)return Da(e,t,i)}return t.flags|=1,(e=pi(r,o)).ref=t.ref,e.return=t,t.child=e}function pa(e,t,n,o,i){if(null!==e){var r=e.memoizedProps;if(xo(r,o)&&e.ref===t.ref){if(ca=!1,t.pendingProps=o=r,!Fa(e,i))return t.lanes=e.lanes,Da(e,t,i);131072&e.flags&&(ca=!0)}}return _a(e,t,n,o,i)}function fa(e,t,n,o){var i=o.children,r=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===o.mode){if(128&t.flags){if(r=null!==r?r.baseLanes|n:n,null!==e){for(o=t.child=e.child,i=0;null!==o;)i=i|o.lanes|o.childLanes,o=o.sibling;o=i&~r}else o=0,t.child=null;return ma(e,t,r,n,o)}if(!(536870912&n))return o=t.lanes=536870912,ma(e,t,null!==r?r.baseLanes|n:n,n,o);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Sr(0,null!==r?r.cachePool:null),null!==r?is(t,r):rs(),ds(t)}else null!==r?(Sr(0,r.cachePool),is(t,r),hs(),t.memoizedState=null):(null!==e&&Sr(0,null),rs(),hs());return ua(e,t,i,n),t.child}function va(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ma(e,t,n,o,i){var r=kr();return r=null===r?null:{parent:dr._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},null!==e&&Sr(0,null),rs(),ds(t),null!==e&&nr(e,t,o,!0),t.childLanes=i,null}function ga(e,t){return(t=Ia({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function ba(e,t,n){return Hr(t,e.child,null,n),(e=ga(t,t.pendingProps)).flags|=2,ps(t),t.memoizedState=null,e}function ya(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!=typeof n&&"object"!=typeof n)throw Error(s(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function _a(e,t,n,o,i){return ir(t),n=zs(e,t,n,o,void 0,i),o=Rs(),null===e||ca?(Fi&&o&&$i(t),t.flags|=1,ua(e,t,n,i),t.child):(Ls(e,t,i),Da(e,t,i))}function xa(e,t,n,o,i,r){return ir(t),t.updateQueue=null,n=$s(t,o,n,i),Ns(e),o=Rs(),null===e||ca?(Fi&&o&&$i(t),t.flags|=1,ua(e,t,n,r),t.child):(Ls(e,t,r),Da(e,t,r))}function wa(e,t,n,o,i){if(ir(t),null===t.stateNode){var r=ci,s=n.contextType;"object"==typeof s&&null!==s&&(r=rr(s)),r=new n(o,r),t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,r.updater=Yl,t.stateNode=r,r._reactInternals=t,(r=t.stateNode).props=o,r.state=t.memoizedState,r.refs={},qr(t),s=n.contextType,r.context="object"==typeof s&&null!==s?rr(s):ci,r.state=t.memoizedState,"function"==typeof(s=n.getDerivedStateFromProps)&&(Ql(t,n,s,o),r.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(s=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),s!==r.state&&Yl.enqueueReplaceState(r,r.state,null),Jr(t,o,r,i),Zr(),r.state=t.memoizedState),"function"==typeof r.componentDidMount&&(t.flags|=4194308),o=!0}else if(null===e){r=t.stateNode;var l=t.memoizedProps,a=Jl(n,l);r.props=a;var c=r.context,u=n.contextType;s=ci,"object"==typeof u&&null!==u&&(s=rr(u));var d=n.getDerivedStateFromProps;u="function"==typeof d||"function"==typeof r.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!=typeof r.UNSAFE_componentWillReceiveProps&&"function"!=typeof r.componentWillReceiveProps||(l||c!==s)&&Zl(t,r,o,s),Ur=!1;var h=t.memoizedState;r.state=h,Jr(t,o,r,i),Zr(),c=t.memoizedState,l||h!==c||Ur?("function"==typeof d&&(Ql(t,n,d,o),c=t.memoizedState),(a=Ur||Xl(t,n,a,o,h,c,s))?(u||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||("function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount()),"function"==typeof r.componentDidMount&&(t.flags|=4194308)):("function"==typeof r.componentDidMount&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),r.props=o,r.state=c,r.context=s,o=a):("function"==typeof r.componentDidMount&&(t.flags|=4194308),o=!1)}else{r=t.stateNode,Wr(e,t),u=Jl(n,s=t.memoizedProps),r.props=u,d=t.pendingProps,h=r.context,c=n.contextType,a=ci,"object"==typeof c&&null!==c&&(a=rr(c)),(c="function"==typeof(l=n.getDerivedStateFromProps)||"function"==typeof r.getSnapshotBeforeUpdate)||"function"!=typeof r.UNSAFE_componentWillReceiveProps&&"function"!=typeof r.componentWillReceiveProps||(s!==d||h!==a)&&Zl(t,r,o,a),Ur=!1,h=t.memoizedState,r.state=h,Jr(t,o,r,i),Zr();var p=t.memoizedState;s!==d||h!==p||Ur||null!==e&&null!==e.dependencies&&or(e.dependencies)?("function"==typeof l&&(Ql(t,n,l,o),p=t.memoizedState),(u=Ur||Xl(t,n,u,o,h,p,a)||null!==e&&null!==e.dependencies&&or(e.dependencies))?(c||"function"!=typeof r.UNSAFE_componentWillUpdate&&"function"!=typeof r.componentWillUpdate||("function"==typeof r.componentWillUpdate&&r.componentWillUpdate(o,p,a),"function"==typeof r.UNSAFE_componentWillUpdate&&r.UNSAFE_componentWillUpdate(o,p,a)),"function"==typeof r.componentDidUpdate&&(t.flags|=4),"function"==typeof r.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof r.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof r.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=p),r.props=o,r.state=p,r.context=a,o=u):("function"!=typeof r.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof r.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),o=!1)}return r=o,ya(e,t),o=!!(128&t.flags),r||o?(r=t.stateNode,n=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render(),t.flags|=1,null!==e&&o?(t.child=Hr(t,e.child,null,i),t.child=Hr(t,null,n,i)):ua(e,t,n,i),t.memoizedState=r.state,e=t.child):e=Da(e,t,i),e}function ka(e,t,n,o){return Wi(),t.flags|=256,ua(e,t,n,o),t.child}var Sa={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ca(e){return{baseLanes:e,cachePool:Cr()}}function Ea(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Vu),e}function Pa(e,t,n){var o,i=t.pendingProps,r=!1,l=!!(128&t.flags);if((o=l)||(o=(null===e||null!==e.memoizedState)&&!!(2&fs.current)),o&&(r=!0,t.flags&=-129),o=!!(32&t.flags),t.flags&=-33,null===e){if(Fi){if(r?cs(t):hs(),(e=Di)?null!==(e=null!==(e=Cp(e,Bi))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==Oi?{id:Ii,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},(n=bi(e)).return=t,t.child=n,Li=t,Di=null):e=null,null===e)throw Hi(t);return Pp(e)?t.lanes=32:t.lanes=536870912,null}return l=i.children,i=i.fallback,r?(hs(),l=Ia({mode:"hidden",children:l},r=t.mode),i=mi(i,r,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,(i=t.child).memoizedState=Ca(n),i.childLanes=Ea(e,o,n),t.memoizedState=Sa,va(null,i)):(cs(t),Oa(t,l))}var a=e.memoizedState;if(null!==a){var c=a.dehydrated;if(null!==c)return function(e,t,n,o,i,r,l,a){if(n)return 256&t.flags?(cs(t),t.flags&=-257,Aa(e,t,a)):null!==t.memoizedState?(hs(),t.child=e.child,t.flags|=128,null):(hs(),r=i.fallback,l=t.mode,i=Ia({mode:"visible",children:i.children},l),(r=mi(r,l,a,null)).flags|=2,i.return=t,r.return=t,i.sibling=r,t.child=i,Hr(t,e.child,null,a),(i=t.child).memoizedState=Ca(a),i.childLanes=Ea(e,o,a),t.memoizedState=Sa,va(null,i));if(cs(t),Pp(r)){if(o=r.nextSibling&&r.nextSibling.dataset)var c=o.dgst;return""!==(o=c)&&((i=Error(s(419))).stack="",i.digest=o,Gi({value:i,source:null,stack:null})),Aa(e,t,a)}if(ca||nr(e,t,a,!1),o=0!==(a&e.childLanes),ca||o){if(null!==ns.current)return Aa(e,t,a);if(null!==(o=Ou)&&0!==(i=Ze(o,a))&&i!==l.retryLane)throw l.retryLane=i,si(e,i),hd(o,0,i),aa;return Ep(r)||Sd(),Aa(e,t,a)}return Ep(r)?(t.flags|=192,t.child=e.child,null):(e=l.treeContext,Di=Op(r.nextSibling),Li=t,Fi=!0,Mi=null,Bi=!1,null!==e&&Ri(t,e),(t=Oa(t,i.children)).flags|=134221824,t)}(e,t,l,o,i,c,a,n)}return r?(hs(),r=i.fallback,l=t.mode,c=(a=e.child).sibling,(i=pi(a,{mode:"hidden",children:i.children})).subtreeFlags=1206910976&a.subtreeFlags,null!==c?r=pi(c,r):(r=mi(r,l,n,null)).flags|=2,r.return=t,i.return=t,i.sibling=r,t.child=i,va(null,i),i=t.child,null===(r=e.child.memoizedState)?r=Ca(n):(null!==(l=r.cachePool)?(a=dr._currentValue,l=l.parent!==a?{parent:a,pool:a}:l):l=Cr(),r={baseLanes:r.baseLanes|n,cachePool:l}),i.memoizedState=r,i.childLanes=Ea(e,o,n),t.memoizedState=Sa,va(e.child,i)):(cs(t),e=(n=e.child).sibling,(n=pi(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(o=t.deletions)?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Oa(e,t){return(t=Ia({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ia(e,t){return(e=di(22,e,null,t)).lanes=0,e}function Aa(e,t,n){return Hr(t,e.child,null,n),(e=Oa(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function za(e,t,n){e.lanes|=t;var o=e.alternate;null!==o&&(o.lanes|=t),er(e.return,t,n)}function Na(e){for(var t=null;null!==e;){var n=e.alternate;null!==n&&null===gs(n)&&(t=e),e=e.sibling}return t}function $a(e,t,n,o,i,r){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i,s.treeForkCount=r)}function Ta(e){var t=e.child;for(e.child=null;null!==t;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ra(e,t,n){var o=t.pendingProps,i=o.revealOrder,r=o.tail;o=o.children;var s=fs.current;if(128&t.flags)return vs(0,s),null;var l=!!(2&s);if(l?(s=1&s|2,t.flags|=128):s&=1,vs(0,s),"backwards"===i&&null!==e?(Ta(e),ua(e,t,o,n),Ta(e)):ua(e,t,o,n),o=Fi?Ci:0,!l&&null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&za(e,n,t);else if(19===e.tag)za(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"backwards":null===(n=Na(t.child))?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,Ta(t)),$a(t,!0,i,null,r,o);break;case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===gs(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$a(t,!0,n,null,r,o);break;case"together":$a(t,!1,null,null,void 0,o);break;case"independent":t.memoizedState=null;break;default:null===(n=Na(t.child))?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$a(t,!1,i,n,r,o)}return t.child}function La(e,t,n){var o=t.pendingProps;return Zi(0,t.type,o.value),ua(e,t,o.children,n),t.child}function Da(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Fu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(nr(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(s(153));if(null!==t.child){for(n=pi(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=pi(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Fa(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!or(e))}function Ma(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)ca=!0;else{if(!(Fa(e,n)||128&t.flags))return ca=!1,function(e,t,n){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),Zi(0,dr,e.memoizedState.cache),Wi();break;case 27:case 5:he(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:Zi(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,us(t),null;break;case 13:var o=t.memoizedState;if(null!==o){if(null!==o.dehydrated)return cs(t),t.flags|=128,null;o=nr(e,t,n,!1);var i=t.child.childLanes;return o||0!==(n&i)?Pa(e,t,n):(cs(t),null!==(e=Da(e,t,n))?e.sibling:null)}cs(t);break;case 19:if(128&t.flags)return Ra(e,t,n);if(i=!!(128&e.flags),(o=0!==(n&t.childLanes))||(nr(e,t,n,!1),o=0!==(n&t.childLanes)),i){if(o)return Ra(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),vs(0,fs.current),o)break;return null;case 22:return t.lanes=0,fa(e,t,n,t.pendingProps);case 24:Zi(0,dr,e.memoizedState.cache)}return Da(e,t,n)}(e,t,n);ca=!!(131072&e.flags)}else ca=!1,Fi&&1048576&t.flags&&Ni(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Nr(t.elementType),t.type=e,"function"!=typeof e){if(null!=e){var i=e.$$typeof;if(i===R){t.tag=11,t=da(null,t,e,o,n);break e}if(i===F){t.tag=14,t=ha(null,t,e,o,n);break e}if(i===T){t.tag=10,t.type=e,t=La(null,t,n);break e}}throw t=G(e)||e,Error(s(306,t,""))}hi(e)?(o=Jl(e,o),t.tag=1,t=wa(null,t,e,o,n)):(t.tag=0,t=_a(null,t,e,o,n))}return t;case 0:return _a(e,t,t.type,t.pendingProps,n);case 1:return wa(e,t,o=t.type,i=Jl(o,t.pendingProps),n);case 3:e:{if(ue(t,t.stateNode.containerInfo),null===e)throw Error(s(387));o=t.pendingProps;var r=t.memoizedState;i=r.element,Wr(e,t),Jr(t,o,null,n);var l=t.memoizedState;if(o=l.cache,Zi(0,dr,o),o!==r.cache&&tr(t,[dr],n,!0),Zr(),o=l.element,r.isDehydrated){if(r={element:o,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,256&t.flags){t=ka(e,t,o,n);break e}if(o!==i){Gi(i=xi(Error(s(424)),t)),t=ka(e,t,o,n);break e}for(e=9===(e=t.stateNode.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,Di=Op(e.firstChild),Li=t,Fi=!0,Mi=null,Bi=!0,n=jr(t,null,o,n),t.child=n;n;)n.flags=-3&n.flags|134221824,n=n.sibling}else{if(Wi(),o===i){t=Da(e,t,n);break e}ua(e,t,o,n)}t=t.child}return t;case 26:return ya(e,t),null===e?(n=Vp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Fi||(t.stateNode=Mh(t.type,t.pendingProps,ae.current,t)):t.memoizedState=Vp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),null===e&&Fi&&(o=t.stateNode=Np(t.type,t.pendingProps,ae.current),Li=t,Bi=!0,i=Di,Gh(t.type)?(Ip=i,Di=Op(o.firstChild)):Di=i),ua(e,t,t.pendingProps.children,n),ya(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&Fi&&((i=o=Di)&&(null!==(o=function(e,t,n,o){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(o){if(!e[dt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(r=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((r=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var r=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===r)return e}if(null===(e=Op(e.nextSibling)))break}return null}(o,t.type,t.pendingProps,Bi))?(t.stateNode=o,Li=t,Di=Op(o.firstChild),Bi=!1,i=!0):i=!1),i||Hi(t)),he(t),i=t.type,r=t.pendingProps,l=null!==e?e.memoizedProps:null,o=r.children,Bh(i,r)?o=null:null!==l&&Bh(i,l)&&(t.flags|=32),null!==t.memoizedState&&(i=zs(e,t,Ts,null,null,n),hf._currentValue=i),ya(e,t),ua(e,t,o,n),t.child;case 6:return null===e&&Fi&&((e=n=Di)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Op(e.nextSibling)))return null}return e}(n,t.pendingProps,Bi))?(t.stateNode=n,Li=t,Di=null,e=!0):e=!1),e||Hi(t)),null;case 13:return Pa(e,t,n);case 4:return ue(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=Hr(t,null,o,n):ua(e,t,o,n),t.child;case 11:return da(e,t,t.type,t.pendingProps,n);case 7:return o=t.pendingProps,ya(e,t),ua(e,t,o,n),t.child;case 8:case 12:return ua(e,t,t.pendingProps.children,n),t.child;case 10:return La(e,t,n);case 9:return i=t.type._context,o=t.pendingProps.children,ir(t),o=o(i=rr(i)),t.flags|=1,ua(e,t,o,n),t.child;case 14:return ha(e,t,t.type,t.pendingProps,n);case 15:return pa(e,t,t.type,t.pendingProps,n);case 19:return Ra(e,t,n);case 31:return function(e,t,n){var o=t.pendingProps,i=!!(128&t.flags);if(t.flags&=-129,null===e){if(Fi){if("hidden"===o.mode)return e=ga(t,o),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},va(null,e);if(us(t),(e=Di)?null!==(e=null!==(e=Cp(e,Bi))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==Oi?{id:Ii,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},(n=bi(e)).return=t,t.child=n,Li=t,Di=null):e=null,null===e)throw Hi(t);return t.lanes=536870912,null}return ga(t,o)}var r=e.memoizedState;if(null!==r){var l=r.dehydrated;if(us(t),i)if(256&t.flags)t.flags&=-257,t=ba(e,t,n);else{if(null===t.memoizedState)throw Error(s(558));t.child=e.child,t.flags|=128,t=null}else if(ca||nr(e,t,n,!1),i=0!==(n&e.childLanes),ca||i){if(null===ns.current){if(null!==(o=Ou)&&0!==(l=Ze(o,n))&&l!==r.retryLane)throw r.retryLane=l,si(e,l),hd(o,0,l),aa;Sd()}t=ba(e,t,n)}else e=r.treeContext,Di=Op(l.nextSibling),Li=t,Fi=!0,Mi=null,Bi=!1,null!==e&&Ri(t,e),(t=ga(t,o)).flags|=134221824;return t}return(e=pi(e.child,{mode:o.mode,children:o.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return fa(e,t,n,t.pendingProps);case 24:return ir(t),o=rr(dr),null===e?(null===(i=kr())&&(i=Ou,r=hr(),i.pooledCache=r,r.refCount++,null!==r&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:o,cache:i},qr(t),Zi(0,dr,i)):(0!==(e.lanes&n)&&(Wr(e,t),Jr(t,null,null,n),Zr()),i=e.memoizedState,r=t.memoizedState,i.parent!==o?(i={parent:o,cache:o},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),Zi(0,dr,o)):(o=r.cache,Zi(0,dr,o),o!==i.cache&&tr(t,[dr],n,!0))),ua(e,t,t.pendingProps.children,n),t.child;case 30:return null===t.stateNode&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),null!=(o=t.pendingProps).name&&"auto"!==o.name?t.flags|=null===e?18882560:18874368:Fi&&$i(t),null!==e&&e.memoizedProps.name!==o.name?t.flags|=4194816:ya(e,t),ua(e,t,o.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ba(e){e.flags|=4}function Va(e,t,n,o,i){var r;if((r=!!(32&e.mode))&&(r=null===n?ef(t,o):ef(t,o)&&(o.src!==n.src||o.srcSet!==n.srcSet)),r){if(e.flags|=16777216,(335544128&i)===i)if(e.stateNode.complete)e.flags|=8192;else{if(!xd())throw $r=Ir,Pr;e.flags|=8192}}else e.flags&=-16777217}function Ha(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217;else if(e.flags|=16777216,!tf(t)){if(!xd())throw $r=Ir,Pr;e.flags|=8192}}function ja(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ke():536870912,e.lanes|=t,Hu|=t)}function Ua(e,t){if(!Fi)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,o=null;null!==n;)null!==n.alternate&&(o=n),n=n.sibling;null===o?t||null===e.tail?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(t=e.tail,n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null}}function qa(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,o|=1206910976&i.subtreeFlags,o|=1206910976&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Wa(e,t,n){var o=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return qa(t),null;case 3:return n=t.stateNode,o=null,null!==e&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ji(dr),de(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(qi(t)?Ba(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,Ki())),qa(t),null;case 26:var i=t.type,r=t.memoizedState;return null===e?(Ba(t),null!==r?(qa(t),Ha(t,r)):(qa(t),Va(t,i,null,o,n))):r?r!==e.memoizedState?(Ba(t),qa(t),Ha(t,r)):(qa(t),t.flags&=-16777217):((e=e.memoizedProps)!==o&&Ba(t),qa(t),Va(t,i,e,o,n)),null;case 27:if(pe(t),n=ae.current,i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==o&&Ba(t);else{if(!o){if(null===t.stateNode)throw Error(s(166));return qa(t),t.subtreeFlags&=-33554433,null}e=se.current,qi(t)?ji(t):(e=Np(i,o,n),t.stateNode=e,Ba(t))}return qa(t),t.subtreeFlags&=-33554433,null;case 5:if(pe(t),i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==o&&Ba(t);else{if(!o){if(null===t.stateNode)throw Error(s(166));return qa(t),t.subtreeFlags&=-33554433,null}if(r=se.current,qi(t))ji(t);else{var l=Lh(ae.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":(r=l.createElement("div")).innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r="string"==typeof o.is?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?r.multiple=!0:o.size&&(r.size=o.size);break;default:r="string"==typeof o.is?l.createElement(i,{is:o.is}):l.createElement(i)}}r[it]=t,r[rt]=o;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)r.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(zh(r,i,o),i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ba(t)}}return qa(t),t.subtreeFlags&=-33554433,Va(t,t.type,null===e?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==o&&Ba(t);else{if("string"!=typeof o&&null===t.stateNode)throw Error(s(166));if(e=ae.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,null!==(i=Li))switch(i.tag){case 27:case 5:o=i.memoizedProps}e[it]=t,(e=!!(e.nodeValue===n||null!==o&&!0===o.suppressHydrationWarning||Oh(e.nodeValue,n)))||Hi(t,!0)}else(e=Lh(e).createTextNode(o))[it]=t,t.stateNode=e}return qa(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(o=qi(t),null!==n){if(null===e){if(!o)throw Error(s(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(s(557));e[it]=t}else Wi(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qa(t),e=!1}else n=Ki(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(ps(t),t):(ps(t),null);if(128&t.flags)throw Error(s(558))}return qa(t),null;case 13:if(o=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=qi(t),null!==o&&null!==o.dehydrated){if(null===e){if(!i)throw Error(s(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(s(317));i[it]=t}else Wi(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qa(t),i=!1}else i=Ki(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(ps(t),t):(ps(t),null)}return ps(t),128&t.flags?(t.lanes=n,t):(n=null!==o,e=null!==e&&null!==e.memoizedState,n&&(i=null,null!==(o=t.child).alternate&&null!==o.alternate.memoizedState&&null!==o.alternate.memoizedState.cachePool&&(i=o.alternate.memoizedState.cachePool.pool),r=null,null!==o.memoizedState&&null!==o.memoizedState.cachePool&&(r=o.memoizedState.cachePool.pool),r!==i&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ja(t,t.updateQueue),qa(t),null);case 4:return de(),null===e&&bh(t.stateNode.containerInfo),t.flags|=67108864,qa(t),null;case 10:return Ji(t.type),qa(t),null;case 19:if(ms(t),null===(o=t.memoizedState))return qa(t),null;if(i=!!(128&t.flags),null===(r=o.rendering))if(i)Ua(o,!1);else{if(0!==Du||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(r=gs(e))){for(t.flags|=128,Ua(o,!1),e=r.updateQueue,t.updateQueue=e,ja(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)fi(n,e),n=n.sibling;return vs(0,1&fs.current|2),Fi&&zi(t,o.treeForkCount),t.child}e=e.sibling}null!==o.tail&&Se()>Gu&&(t.flags|=128,i=!0,Ua(o,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=gs(r))){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ja(t,e),Ua(o,!0),null===o.tail&&"collapsed"!==o.tailMode&&"visible"!==o.tailMode&&!r.alternate&&!Fi)return qa(t),null}else 2*Se()-o.renderingStartTime>Gu&&536870912!==n&&(t.flags|=128,i=!0,Ua(o,!1),t.lanes=4194304);o.isBackwards?(r.sibling=t.child,t.child=r):(null!==(e=o.last)?e.sibling=r:t.child=r,o.last=r)}if(null!==o.tail){e:{for(n=e=o.tail;null!==n;){if(null!==n.alternate){n=!1;break e}n=n.sibling}n=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Se(),e.sibling=null,r=fs.current,r=i?1&r|2:1&r,"visible"===o.tailMode||"collapsed"===o.tailMode||!n||Fi?vs(0,r):(n=r,oe(ls,t),oe(fs,n),null===as&&(as=t)),Fi&&zi(t,o.treeForkCount),e}return qa(t),null;case 22:case 23:return ps(t),ss(),o=null!==t.memoizedState,null!==e?null!==e.memoizedState!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?!!(536870912&n)&&!(128&t.flags)&&(qa(t),6&t.subtreeFlags&&(t.flags|=8192)):qa(t),null!==(n=t.updateQueue)&&ja(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),o=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),null!==e&&ne(wr),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(dr),qa(t),null;case 25:return null;case 30:return t.flags|=33554432,qa(t),null}throw Error(s(156,t.tag))}function Ka(e,t){switch(Ti(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ji(dr),de(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return pe(t),null;case 31:if(null!==t.memoizedState){if(ps(t),null===t.alternate)throw Error(s(340));Wi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(ps(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(s(340));Wi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ms(t),65536&(e=t.flags)?(t.flags=-65537&e|128,null!==(e=t.memoizedState)&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return de(),null;case 10:return Ji(t.type),null;case 22:case 23:return ps(t),ss(),null!==e&&ne(wr),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Ji(dr),null;default:return null}}function Ga(e,t){switch(Ti(t),t.tag){case 3:Ji(dr),de();break;case 26:case 27:case 5:pe(t);break;case 4:de();break;case 31:null!==t.memoizedState&&ps(t);break;case 13:ps(t);break;case 19:ms(t);break;case 10:Ji(t.type);break;case 22:case 23:ps(t),ss(),null!==e&&ne(wr);break;case 24:Ji(dr)}}function Qa(e,t){try{var n=t.updateQueue,o=null!==n?n.lastEffect:null;if(null!==o){var i=o.next;n=i;do{if((n.tag&e)===e){o=void 0;var r=n.create,s=n.inst;o=r(),s.destroy=o}n=n.next}while(n!==i)}}catch(e){jd(t,t.return,e)}}function Ya(e,t,n){try{var o=t.updateQueue,i=null!==o?o.lastEffect:null;if(null!==i){var r=i.next;o=r;do{if((o.tag&e)===e){var s=o.inst,l=s.destroy;if(void 0!==l){s.destroy=void 0,i=t;var a=n,c=l;try{c()}catch(e){jd(i,a,e)}}}o=o.next}while(o!==r)}}catch(e){jd(t,t.return,e)}}function Xa(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ts(t,n)}catch(t){jd(e,e.return,t)}}}function Za(e,t,n){n.props=Jl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){jd(e,t,n)}}function Ja(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var i=e.stateNode,r=Yo(e.memoizedProps,i);null!==i.ref&&i.ref.name===r||(i.ref=ip(r)),o=i.ref;break;case 7:if(null===e.stateNode){var s=new rp(e);f(e.child,!1,_p,s,void 0,void 0),e.stateNode=s}o=e.stateNode;break;default:o=e.stateNode}"function"==typeof n?e.refCleanup=n(o):n.current=o}}catch(n){jd(e,t,n)}}function ec(e,t){var n=e.ref,o=e.refCleanup;if(null!==n)if("function"==typeof o)try{o()}catch(n){jd(e,t,n)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(n){jd(e,t,n)}else n.current=null}function tc(e,t){if((5===e.tag||27===e.tag||6===e.tag)&&null===e.alternate&&null!==t)for(var n=0;n<t.length;n++)wp(e.stateNode,t[n])}function nc(e){for(var t=e.return;null!==t&&(rc(t)&&wp(e.stateNode,t.stateNode),!ic(t));)t=t.return}function oc(e){for(var t=e.return;null!==t&&(rc(t)&&kp(e.stateNode,t.stateNode),!ic(t));)t=t.return}function ic(e){return 5===e.tag||3===e.tag||27===e.tag}function rc(e){return e&&7===e.tag&&null!==e.stateNode}function sc(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(t){jd(e,e.return,t)}}function lc(e,t,n){try{var o=e.stateNode;!function(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,l=null,a=null,c=null,u=null,d=null;for(f in n){var h=n[f];if(n.hasOwnProperty(f)&&null!=h)switch(f){case"checked":case"value":break;case"defaultValue":c=h;default:o.hasOwnProperty(f)||Ih(e,t,f,null,o,h)}}for(var p in o){var f=o[p];if(h=n[p],o.hasOwnProperty(p)&&(null!=f||null!=h))switch(p){case"type":f!==h&&(Pt=!0),r=f;break;case"name":f!==h&&(Pt=!0),i=f;break;case"checked":f!==h&&(Pt=!0),u=f;break;case"defaultChecked":f!==h&&(Pt=!0),d=f;break;case"value":f!==h&&(Pt=!0),l=f;break;case"defaultValue":f!==h&&(Pt=!0),a=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(s(137,t));break;default:f!==h&&Ih(e,t,p,f,o,h)}}return void Ft(e,l,a,c,u,d,r,i);case"select":for(r in f=l=a=p=null,n)if(c=n[r],n.hasOwnProperty(r)&&null!=c)switch(r){case"value":break;case"multiple":f=c;default:o.hasOwnProperty(r)||Ih(e,t,r,null,o,c)}for(i in o)if(r=o[i],c=n[i],o.hasOwnProperty(i)&&(null!=r||null!=c))switch(i){case"value":r!==c&&(Pt=!0),p=r;break;case"defaultValue":r!==c&&(Pt=!0),a=r;break;case"multiple":r!==c&&(Pt=!0),l=r;default:r!==c&&Ih(e,t,i,r,o,c)}return t=a,n=l,o=f,void(null!=p?Vt(e,!!n,p,!1):!!o!=!!n&&(null!=t?Vt(e,!!n,t,!0):Vt(e,!!n,n?[]:"",!1)));case"textarea":for(a in f=p=null,n)if(i=n[a],n.hasOwnProperty(a)&&null!=i&&!o.hasOwnProperty(a))switch(a){case"value":case"children":break;default:Ih(e,t,a,null,o,i)}for(l in o)if(i=o[l],r=n[l],o.hasOwnProperty(l)&&(null!=i||null!=r))switch(l){case"value":i!==r&&(Pt=!0),p=i;break;case"defaultValue":i!==r&&(Pt=!0),f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(s(91));break;default:i!==r&&Ih(e,t,l,i,o,r)}return void Ht(e,p,f);case"option":for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!o.hasOwnProperty(v)&&("selected"===v?e.selected=!1:Ih(e,t,v,null,o,p));for(c in o)p=o[c],f=n[c],!o.hasOwnProperty(c)||p===f||null==p&&null==f||("selected"===c?(p!==f&&(Pt=!0),e.selected=p&&"function"!=typeof p&&"symbol"!=typeof p):Ih(e,t,c,p,o,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!o.hasOwnProperty(m)&&Ih(e,t,m,null,o,p);for(u in o)if(p=o[u],f=n[u],o.hasOwnProperty(u)&&p!==f&&(null!=p||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(s(137,t));break;default:Ih(e,t,u,p,o,f)}return;default:if(Gt(t)){for(var g in n)p=n[g],n.hasOwnProperty(g)&&void 0!==p&&!o.hasOwnProperty(g)&&Ah(e,t,g,void 0,o,p);for(d in o)p=o[d],f=n[d],!o.hasOwnProperty(d)||p===f||void 0===p&&void 0===f||Ah(e,t,d,p,o,f);return}}for(var b in n)p=n[b],n.hasOwnProperty(b)&&null!=p&&!o.hasOwnProperty(b)&&Ih(e,t,b,null,o,p);for(h in o)p=o[h],f=n[h],!o.hasOwnProperty(h)||p===f||null==p&&null==f||Ih(e,t,h,p,o,f)}(o,e.type,n,t),o[rt]=t}catch(t){jd(e,e.return,t)}}function ac(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Gh(e.type)||4===e.tag}function cc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Gh(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function uc(e,t,n,o){var i=e.tag;if(5===i||6===i)i=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(i,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(i),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zt)),tc(e,o),Pt=!0;else if(4!==i&&(27===i&&(tc(e,o),o=null,Gh(e.type)&&(n=e.stateNode,t=null)),null!==(e=e.child)))for(uc(e,t,n,o),e=e.sibling;null!==e;)uc(e,t,n,o),e=e.sibling}function dc(e,t,n,o){var i=e.tag;if(5===i||6===i)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),tc(e,o),Pt=!0;else if(4!==i&&(27===i&&(tc(e,o),o=null,Gh(e.type)&&(n=e.stateNode)),null!==(e=e.child)))for(dc(e,t,n,o),e=e.sibling;null!==e;)dc(e,t,n,o),e=e.sibling}function hc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);zh(t,o,n),t[it]=e,t[rt]=n}catch(t){jd(e,e.return,t)}}var pc=!1,fc=null;function vc(e){(30===e.tag||33554432&e.subtreeFlags)&&(pc=!0)}var mc=null;function gc(){var e=mc;return mc=null,e}var bc=0;function yc(e,t,n,o,i){return bc=0,_c(e.child,t,n,o,i)}function _c(e,t,n,o,i){for(var r=!1;null!==e;){if(5===e.tag){var s=e.stateNode;if(null!==o){var l=ep(s);o.push(l),l.view&&(r=!0)}else r||ep(s).view&&(r=!0);pc=!0,Xh(s,0===bc?t:t+"_"+bc,n),bc++}else 22===e.tag&&null!==e.memoizedState||30===e.tag&&i||_c(e.child,t,n,o,i)&&(r=!0);e=e.sibling}return r}function xc(e,t){for(;null!==e;)5===e.tag?Zh(e.stateNode,e.memoizedProps):22===e.tag&&null!==e.memoizedState||30===e.tag&&t||xc(e.child,t),e=e.sibling}function wc(e){if(18874368&e.subtreeFlags)for(e=e.child;null!==e;){if((22!==e.tag||null===e.memoizedState)&&(wc(e),30===e.tag&&18874368&e.flags&&e.stateNode.paired)){var t=e.memoizedProps;if(null==t.name||"auto"===t.name)throw Error(s(544));var n=t.name;"none"!==(t=Zo(t.default,t.share))&&(yc(e,n,t,null,!1)||xc(e.child,!1))}e=e.sibling}}function kc(e,t){if(30===e.tag){var n=e.stateNode,o=e.memoizedProps,i=Yo(o,n),r=Zo(o.default,n.paired?o.share:o.enter);"none"!==r?yc(e,i,r,null,!1)?(wc(e),n.paired||t||dd(e,o.onEnter)):xc(e.child,!1):wc(e)}else if(33554432&e.subtreeFlags)for(e=e.child;null!==e;)kc(e,t),e=e.sibling;else wc(e)}function Sc(e){if(null!==fc&&0!==fc.size){var t=fc;if(18874368&e.subtreeFlags)for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&18874368&e.flags){var n=e.memoizedProps,o=n.name;if(null!=o&&"auto"!==o){var i=t.get(o);if(void 0!==i){var r=Zo(n.default,n.share);if("none"!==r&&(yc(e,o,r,null,!1)?(r=e.stateNode,i.paired=r,r.paired=i,dd(e,n.onShare)):xc(e.child,!1)),t.delete(o),0===t.size)break}}}Sc(e)}e=e.sibling}}}function Cc(e){if(30===e.tag){var t=e.memoizedProps,n=Yo(t,e.stateNode),o=null!==fc?fc.get(n):void 0,i=Zo(t.default,void 0!==o?t.share:t.exit);"none"!==i&&(yc(e,n,i,null,!1)?void 0!==o?(i=e.stateNode,o.paired=i,i.paired=o,fc.delete(n),dd(e,t.onShare)):dd(e,t.onExit):xc(e.child,!1)),null!==fc&&Sc(e)}else if(33554432&e.subtreeFlags)for(e=e.child;null!==e;)Cc(e),e=e.sibling;else null!==fc&&Sc(e)}function Ec(e){for(e=e.child;null!==e;){if(30===e.tag){var t=e.memoizedProps,n=Yo(t,e.stateNode);t=Zo(t.default,t.update),e.flags&=-5,"none"!==t&&yc(e,n,t,e.memoizedState=[],!1)}else 33554432&e.subtreeFlags&&Ec(e);e=e.sibling}}function Pc(e){if(18874368&e.subtreeFlags)for(e=e.child;null!==e;){if(22!==e.tag||null===e.memoizedState){if(30===e.tag&&18874368&e.flags){var t=e.stateNode;null!==t.paired&&(t.paired=null,xc(e.child,!1))}Pc(e)}e=e.sibling}}function Oc(e){if(30===e.tag)e.stateNode.paired=null,xc(e.child,!1),Pc(e);else if(33554432&e.subtreeFlags)for(e=e.child;null!==e;)Oc(e),e=e.sibling;else Pc(e)}function Ic(e){for(e=e.child;null!==e;)30===e.tag?xc(e.child,!1):!!(33554432&e.subtreeFlags)&&Ic(e),e=e.sibling}function Ac(e,t,n,o,i,r,s){for(var l=!1;null!==t;){if(5===t.tag){var a=t.stateNode;if(null!==r&&bc<r.length){var c,u=r[bc],d=ep(a);if((u.view||d.view)&&(l=!0),c=!(4&e.flags))if(d.clip)c=!0;else{c=u.rect;var h=d.rect;c=c.y!==h.y||c.x!==h.x||c.height!==h.height||c.width!==h.width}c&&(e.flags|=4),d.abs?d=!u.abs:(u=u.rect,d=d.rect,d=u.height!==d.height||u.width!==d.width),d&&(e.flags|=32)}else e.flags|=32;4&e.flags&&Xh(a,0===bc?n:n+"_"+bc,i),l&&4&e.flags||(null===mc&&(mc=[]),mc.push(a,0===bc?o:o+"_"+bc,t.memoizedProps)),bc++}else 22===t.tag&&null!==t.memoizedState||(30===t.tag&&s?e.flags|=32&t.flags:Ac(e,t.child,n,o,i,r,s)&&(l=!0));t=t.sibling}return l}function zc(e,t){for(e=e.child;null!==e;){if(30===e.tag){var n=e.memoizedProps,o=e.stateNode,i=Yo(n,o),r=Zo(n.default,n.update);if(t)var s=null===(o=o.clones)?null:o.map(tp);else s=e.memoizedState,e.memoizedState=null;o=e;var l=e.child;bc=0,i=Ac(o,l,i,i,r,s,!1),4&e.flags&&i&&(t||dd(e,n.onUpdate))}else 33554432&e.subtreeFlags&&zc(e,t);e=e.sibling}}var Nc=!1,$c=!1,Tc=!1,Rc=!1,Lc="function"==typeof WeakSet?WeakSet:Set,Dc=null,Fc=!1,Mc=!1,Bc=!1,Vc=!1;function Hc(e){for(;null!==Dc;){var t=Dc,n=e,o=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(1024&i&&null!==o){n=void 0,i=o.memoizedProps,o=o.memoizedState;var r=t.stateNode;try{var l=Jl(t.type,i);n=r.getSnapshotBeforeUpdate(l,o),r.__reactInternalSnapshotBeforeUpdate=n}catch(e){jd(t,t.return,e)}}break;case 3:if(1024&i)if(9===(n=(o=t.stateNode.containerInfo).nodeType))Sp(o);else if(1===n)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Sp(o);break;default:o.textContent=""}break;case 30:n&&null!==o&&(n=Yo(o.memoizedProps,o.stateNode),"none"!==(i=Zo((i=t.memoizedProps).default,i.update))&&yc(o,n,i,o.memoizedState=[],!0));break;default:if(1024&i)throw Error(s(163))}if(null!==(o=t.sibling)){o.return=t.return,Dc=o;break}Dc=t.return}}function jc(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:au(e,n),4&o&&Qa(5,n);break;case 1:if(au(e,n),4&o)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(e){jd(n,n.return,e)}else{var i=Jl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){jd(n,n.return,e)}}64&o&&Xa(n),512&o&&Ja(n,n.return);break;case 3:if(au(e,n),64&o&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ts(e,t)}catch(e){jd(n,n.return,e)}}break;case 27:null===t&&4&o&&hc(n);case 26:case 5:au(e,n),null===t&&4&o&&sc(n),512&o&&Ja(n,n.return);break;case 12:au(e,n);break;case 31:au(e,n),4&o&&Zc(e,n);break;case 13:au(e,n),4&o&&Jc(e,n),64&o&&null!==(e=n.memoizedState)&&null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}(e,n=Kd.bind(null,n));break;case 22:if(!(o=null!==n.memoizedState||Nc)){var r=null!==t&&null!==t.memoizedState||$c;t=Nc,i=$c,Nc=o,($c=r)&&!i?(o=2,!!(8772&n.subtreeFlags)&&(o|=1),uu(e,n,o)):au(e,n),Nc=t,$c=i}break;case 30:au(e,n),512&o&&Ja(n,n.return);break;case 7:512&o&&Ja(n,n.return);default:au(e,n)}}function Uc(e,t){for(e=e.child;null!==e;)qc(e,t),e=e.sibling}function qc(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var o=n.style;"function"==typeof o.setProperty?o.setProperty("display","none","important"):o.display="none"}else{var i=e.stateNode,r=e.memoizedProps.style,s=null!=r&&r.hasOwnProperty("display")?r.display:null;i.style.display=null==s||"boolean"==typeof s?"":(""+s).trim()}}catch(t){jd(e,e.return,t)}Wc(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Pt=!0}catch(t){jd(e,e.return,t)}break;case 18:try{var l=e.stateNode;t?Yh(l,!0):Yh(e.stateNode,!1)}catch(t){jd(e,e.return,t)}break;case 22:case 23:null===e.memoizedState&&Uc(e,t);break;default:Uc(e,t)}}function Wc(e,t){if(67108864&e.subtreeFlags)for(e=e.child;null!==e;){e:{var n=e,o=t;switch(n.tag){case 4:qc(n,o);break e;case 22:null===n.memoizedState&&Wc(n,o);break e;default:Wc(n,o)}}e=e.sibling}}function Kc(e){var t=e.alternate;null!==t&&(e.alternate=null,Kc(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&pt(t),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Gc=null,Qc=!1;function Yc(e,t,n){for(n=n.child;null!==n;)Xc(e,t,n),n=n.sibling}function Xc(e,t,n){if(Te&&"function"==typeof Te.onCommitFiberUnmount)try{Te.onCommitFiberUnmount($e,n)}catch(e){}switch(n.tag){case 26:$c||ec(n,t),Yc(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!$c&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:$c||ec(n,t),oc(n);var o=Gc,i=Qc;Gh(n.type)&&(Gc=n.stateNode,Qc=!1),Yc(e,t,n),$p(n.stateNode,n.type,n.memoizedProps),Gc=o,Qc=i;break;case 5:$c||ec(n,t),oc(n);case 6:if(6===n.tag&&oc(n),o=Gc,i=Qc,Gc=null,Yc(e,t,n),Qc=i,null!==(Gc=o))if(Qc)try{(9===Gc.nodeType?Gc.body:"HTML"===Gc.nodeName?Gc.ownerDocument.body:Gc).removeChild(n.stateNode),Pt=!0}catch(e){jd(n,t,e)}else try{Gc.removeChild(n.stateNode),Pt=!0}catch(e){jd(n,t,e)}break;case 18:null!==Gc&&(Qc?(Qh(9===(e=Gc).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Uf(e)):Qh(Gc,n.stateNode));break;case 4:o=Gc,i=Qc,Gc=n.stateNode.containerInfo,Qc=!0,Yc(e,t,n),Gc=o,Qc=i;break;case 0:case 11:case 14:case 15:Ya(2,n,t),$c||Ya(4,n,t),Yc(e,t,n);break;case 1:$c||(ec(n,t),"function"==typeof(o=n.stateNode).componentWillUnmount&&Za(n,t,o)),Yc(e,t,n);break;case 21:Yc(e,t,n);break;case 22:$c=(o=$c)||null!==n.memoizedState,Yc(e,t,n),$c=o;break;case 30:ec(n,t),Yc(e,t,n);break;case 7:$c||ec(n,t),Yc(e,t,n);break;default:Yc(e,t,n)}}function Zc(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)){e=e.dehydrated;try{Uf(e)}catch(e){jd(t,t.return,e)}}}function Jc(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{Uf(e)}catch(e){jd(t,t.return,e)}}function eu(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Lc),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Lc),t;default:throw Error(s(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var o=Gd.bind(null,e,t);t.then(o,o)}})}function tu(e,t,n){var o=t.deletions;if(null!==o)for(var i=0;i<o.length;i++){var r=o[i],l=e,a=t,c=a;e:for(;null!==c;){switch(c.tag){case 27:if(Gh(c.type)){Gc=c.stateNode,Qc=!1;break e}break;case 5:Gc=c.stateNode,Qc=!1;break e;case 3:case 4:Gc=c.stateNode.containerInfo,Qc=!0;break e}c=c.return}if(null===Gc)throw Error(s(160));Xc(l,a,r),Gc=null,Qc=!1,null!==(l=r.alternate)&&(l.return=null),r.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)ou(t,e,n),t=t.sibling}var nu=null;function ou(e,t,n){var o=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(4&i&&null!==(o=null!==(o=e.updateQueue)?o.events:null))for(var r=0;r<o.length;r++){var l=o[r];l.ref.impl=l.nextImpl}tu(t,e,n),iu(e),4&i&&(Ya(3,e,e.return),Qa(3,e),Ya(5,e,e.return));break;case 1:tu(t,e,n),iu(e),512&i&&($c||null===o||ec(o,o.return)),64&i&&Nc&&null!==(e=e.updateQueue)&&null!==(t=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?t:n.concat(t));break;case 26:if(r=nu,tu(t,e,n),iu(e),512&i&&($c||null===o||ec(o,o.return)),4&i)if(i=null!==o?o.memoizedState:null,n=e.memoizedState,null===o)if(null===n)if(null===e.stateNode)if(Nc)e.stateNode=Mh(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,i=r.ownerDocument||r;t:switch(t){case"title":(!(o=i.getElementsByTagName("title")[0])||o[dt]||o[it]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=i.createElement(t),i.head.insertBefore(o,i.querySelector("head > title"))),zh(o,t,n),o[it]=e,bt(o),t=o;break e;case"link":if(r=Zp("link","href",i).get(t+(n.href||"")))for(l=0;l<r.length;l++)if((o=r[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){r.splice(l,1);break t}zh(o=i.createElement(t),t,n),i.head.appendChild(o);break;case"meta":if(r=Zp("meta","content",i).get(t+(n.content||"")))for(l=0;l<r.length;l++)if((o=r[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){r.splice(l,1);break t}zh(o=i.createElement(t),t,n),i.head.appendChild(o);break;default:throw Error(s(468,t))}o[it]=e,bt(o),t=o}e.stateNode=t}else Nc||Jp(r,e.type,e.stateNode);else e.stateNode=Kp(r,n,e.memoizedProps);else i!==n?(null===i?null===(t=o.stateNode)||$c||t.parentNode.removeChild(t):i.count--,null===n?Nc||Jp(r,e.type,e.stateNode):Kp(r,n,e.memoizedProps)):null===n&&null!==e.stateNode&&lc(e,e.memoizedProps,o.memoizedProps);break;case 27:tu(t,e,n),iu(e),512&i&&($c||null===o||ec(o,o.return)),null!==o&&4&i&&lc(e,e.memoizedProps,o.memoizedProps);break;case 5:if(r=Tc,Tc=!1,tu(t,e,n),Tc=r,iu(e),512&i&&($c||null===o||ec(o,o.return)),32&e.flags){t=e.stateNode;try{Ut(t,""),Pt=!0}catch(t){jd(e,e.return,t)}}4&i&&null!=e.stateNode&&lc(e,t=e.memoizedProps,null!==o?o.memoizedProps:t),1024&i&&(Rc=!0);break;case 6:if(tu(t,e,n),iu(e),4&i){if(null===e.stateNode)throw Error(s(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Pt=!0}catch(t){jd(e,e.return,t)}}break;case 3:if(Pt=!1,Xp=null,r=nu,nu=Dp(t.containerInfo),tu(t,e,n),nu=r,iu(e),4&i&&null!==o&&o.memoizedState.isDehydrated)try{Uf(t.containerInfo)}catch(t){jd(e,e.return,t)}Rc&&(Rc=!1,ru(e)),Pt=!1;break;case 4:i=Tc,Tc=Nc,o=Ot(),r=nu,nu=Dp(e.stateNode.containerInfo),tu(t,e,n),iu(e),nu=r,Pt&&Mc&&(Bc=!0),Pt=o,Tc=i;break;case 12:tu(t,e,n),iu(e);break;case 31:tu(t,e,n),iu(e),4&i&&null!==(t=e.updateQueue)&&(e.updateQueue=null,eu(e,t));break;case 13:tu(t,e,n),iu(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==o&&null!==o.memoizedState)&&(Wu=Se()),4&i&&null!==(t=e.updateQueue)&&(e.updateQueue=null,eu(e,t));break;case 22:r=null!==e.memoizedState,l=null!==o&&null!==o.memoizedState;var a=Nc,c=$c,u=Tc;Nc=a||r,Tc=u||r,$c=c||l,tu(t,e,n),$c=c,Tc=u,Nc=a,iu(e),8192&i&&((t=e.stateNode)._visibility=r?-2&t._visibility:1|t._visibility,!r||null===o||l||Nc||$c||(n=Nc,o=$c,Nc=r||Nc,$c=t=l||$c,cu(e,2),Nc=n,$c=o),!r&&Tc||Uc(e,r)),4&i&&null!==(t=e.updateQueue)&&null!==(n=t.retryQueue)&&(t.retryQueue=null,eu(e,n));break;case 19:tu(t,e,n),iu(e),4&i&&null!==(t=e.updateQueue)&&(e.updateQueue=null,eu(e,t));break;case 30:512&i&&($c||null===o||ec(o,o.return)),i=Ot(),r=Mc,l=(335544064&n)===n,a=e.memoizedProps,Mc=l&&"none"!==Zo(a.default,a.update),tu(t,e,n),iu(e),l&&null!==o&&Pt&&(e.flags|=4),Mc=r,Pt=i;break;case 21:break;case 7:512&i&&($c||null===o||ec(o,o.return)),o&&null!==o.stateNode&&(o.stateNode._fragmentFiber=e);default:tu(t,e,n),iu(e)}}function iu(e){var t=e.flags;if(2&t){try{for(var n,o=e.return;null!==o;){if(ac(o)){n=o;break}o=o.return}o=null;for(var i=e.return;null!==i;){if(rc(i)){var r=i.stateNode;null===o?o=[r]:o.push(r)}if(ic(i))break;i=i.return}var l=o;if(null==n)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode;dc(e,cc(e),a,l);break;case 5:var c=n.stateNode;32&n.flags&&(Ut(c,""),n.flags&=-33),dc(e,cc(e),c,l);break;case 3:case 4:var u=n.stateNode.containerInfo;uc(e,cc(e),u,l);break;default:throw Error(s(161))}}catch(t){jd(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ru(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;ru(t),5===t.tag&&1024&t.flags&&(t=t.stateNode,yf=!0,t.reset(),yf=!1),e=e.sibling}}function su(e,t){if(9270&t.subtreeFlags)for(t=t.child;null!==t;)lu(t,e),t=t.sibling;else zc(t,!1)}function lu(e,t){var n=e.alternate;if(null===n)kc(e,!1);else switch(e.tag){case 3:if(Vc=Fc=!1,gc(),su(t,e),!Fc&&!Bc){if(null!==(e=mc))for(var o=0;o<e.length;o+=3){n=e[o];var i=e[o+1];Zh(n,e[o+2]),null!==(n=n.ownerDocument.documentElement)&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}null!==(e=9===(e=t.containerInfo).nodeType?e.documentElement:e.ownerDocument.documentElement)&&""===e.style.viewTransitionName&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Vc=!0}mc=null;break;case 5:default:su(t,e);break;case 4:o=Fc,Fc=!1,su(t,e),Fc&&(Bc=!0),Fc=o;break;case 22:null===e.memoizedState&&(null!==n.memoizedState?kc(e,!1):su(t,e));break;case 30:o=Fc,i=gc(),Fc=!1,su(t,e),Fc&&(e.flags|=4);var r=e.memoizedProps,s=e.stateNode;t=Yo(r,s),s=Yo(n.memoizedProps,s);var l=Zo(r.default,r.update);"none"===l?t=!1:(r=n.memoizedState,n.memoizedState=null,n=e.child,bc=0,t=Ac(e,n,t,s,l,r,!0),bc!==(null===r?0:r.length)&&(e.flags|=32)),4&e.flags&&t?(dd(e,e.memoizedProps.onUpdate),mc=i):null!==i&&(i.push.apply(i,mc),mc=i),Fc=!!(32&e.flags)||o}}function au(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)jc(e,t.alternate,t),t=t.sibling}function cu(e,t){for(e=e.child;null!==e;){var n=e,o=t;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),cu(n,o);break;case 1:ec(n,n.return);var i=n.stateNode;"function"==typeof i.componentWillUnmount&&Za(n,n.return,i),cu(n,o);break;case 27:2&o&&$p(n.stateNode,n.type,n.memoizedProps);case 5:ec(n,n.return),5!==n.tag&&27!==n.tag||oc(n),cu(n,o);break;case 6:oc(n);break;case 26:ec(n,n.return),i=n.stateNode,null!==n.memoizedState||null===i||$c||i.parentNode.removeChild(i),cu(n,o);break;case 22:null===n.memoizedState&&cu(n,o);break;case 30:ec(n,n.return),cu(n,o);break;case 7:ec(n,n.return);default:cu(n,o)}e=e.sibling}}function uu(e,t,n){for(n=8772&t.subtreeFlags?n:-2&n,t=t.child;null!==t;){var o=t.alternate,i=e,r=t,s=r.flags,l=!!(1&n);switch(r.tag){case 0:case 11:case 15:uu(i,r,n),Qa(4,r);break;case 1:if(uu(i,r,n),"function"==typeof(i=(o=r).stateNode).componentDidMount)try{i.componentDidMount()}catch(e){jd(o,o.return,e)}if(null!==(i=(o=r).updateQueue)){var a=o.stateNode;try{var c=i.shared.hiddenCallbacks;if(null!==c)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)es(c[i],a)}catch(e){jd(o,o.return,e)}}l&&64&s&&Xa(r),Ja(r,r.return);break;case 27:2&n&&hc(r);case 5:5!==r.tag&&27!==r.tag||nc(r),uu(i,r,n),l&&null===o&&4&s&&sc(r),Ja(r,r.return);break;case 6:nc(r);break;case 26:a=r.stateNode,null!==r.memoizedState||null===a||Nc||Jp(Dp(a.ownerDocument),r.type,a),uu(i,r,n),l&&null===o&&4&s&&sc(r),Ja(r,r.return);break;case 12:uu(i,r,n);break;case 31:uu(i,r,n),l&&4&s&&Zc(i,r);break;case 13:uu(i,r,n),l&&4&s&&Jc(i,r);break;case 22:null===r.memoizedState&&uu(i,r,n),Ja(r,r.return);break;case 30:uu(i,r,n),Ja(r,r.return);break;case 7:Ja(r,r.return);default:uu(i,r,n)}t=t.sibling}}function du(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&pr(n))}function hu(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&pr(e))}function pu(e,t,n,o){var i=(335544064&n)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;null!==t;)fu(e,t,n,o),t=t.sibling;else i&&Ic(t)}function fu(e,t,n,o){var i=(335544064&n)===n;i&&null===t.alternate&&null!==t.return&&null!==t.return.alternate&&Oc(t);var r=t.flags;switch(t.tag){case 0:case 11:case 15:pu(e,t,n,o),2048&r&&Qa(9,t);break;case 1:case 31:case 13:default:pu(e,t,n,o);break;case 3:pu(e,t,n,o),i&&Vc&&("root"===(e=9===(e=e.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e).style.viewTransitionName&&(e.style.viewTransitionName=""),null!==(e=e.ownerDocument.documentElement)&&"none"===e.style.viewTransitionName&&(e.style.viewTransitionName="")),2048&r&&(r=null,null!==t.alternate&&(r=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==r&&(t.refCount++,null!=r&&pr(r)));break;case 12:if(2048&r){pu(e,t,n,o),r=t.stateNode;try{var s=t.memoizedProps,l=s.id,a=s.onPostCommit;"function"==typeof a&&a(l,null===t.alternate?"mount":"update",r.passiveEffectDuration,-0)}catch(e){jd(t,t.return,e)}}else pu(e,t,n,o);break;case 23:break;case 22:s=t.stateNode,l=t.alternate,null!==t.memoizedState?(i&&null!==l&&null===l.memoizedState&&Oc(l),2&s._visibility?pu(e,t,n,o):mu(e,t)):(i&&null!==l&&null!==l.memoizedState&&Oc(t),2&s._visibility?pu(e,t,n,o):(s._visibility|=2,vu(e,t,n,o,!!(10256&t.subtreeFlags)||!1))),2048&r&&du(l,t);break;case 24:pu(e,t,n,o),2048&r&&hu(t.alternate,t);break;case 30:i&&null!==(r=t.alternate)&&(xc(r.child,!0),xc(t.child,!0)),pu(e,t,n,o)}}function vu(e,t,n,o,i){for(i=i&&(!!(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var r=e,s=t,l=n,a=o,c=s.flags;switch(s.tag){case 0:case 11:case 15:vu(r,s,l,a,i),Qa(8,s);break;case 23:break;case 22:var u=s.stateNode;null!==s.memoizedState?2&u._visibility?vu(r,s,l,a,i):mu(r,s):(u._visibility|=2,vu(r,s,l,a,i)),i&&2048&c&&du(s.alternate,s);break;case 24:vu(r,s,l,a,i),i&&2048&c&&hu(s.alternate,s);break;default:vu(r,s,l,a,i)}t=t.sibling}}function mu(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,o=t,i=o.flags;switch(o.tag){case 22:mu(n,o),2048&i&&du(o.alternate,o);break;case 24:mu(n,o),2048&i&&hu(o.alternate,o);break;default:mu(n,o)}t=t.sibling}}var gu=8192;function bu(e,t,n){if(e.subtreeFlags&gu)for(e=e.child;null!==e;)yu(e,t,n),e=e.sibling}function yu(e,t,n){switch(e.tag){case 26:bu(e,t,n),e.flags&gu&&(null!==e.memoizedState?function(e,t,n,o){if(!("stylesheet"!==n.type||"string"==typeof o.media&&!1===matchMedia(o.media).matches||4&n.state.loading)){if(null===n.instance){var i=Hp(o.href),r=t.querySelector(jp(i));if(r)return null!==(t=r._p)&&"object"==typeof t&&"function"==typeof t.then&&(e.count++,e=lf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,void bt(r);r=t.ownerDocument||t,o=Up(o),(i=Rp.get(i))&&Qp(o,i),bt(r=r.createElement("link"));var s=r;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),zh(r,"link",o),n.instance=r}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(3&n.state.loading)&&(e.count++,n=lf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,nu,e.memoizedState,e.memoizedProps):(e=e.stateNode,(335544128&t)===t&&of(n,e)));break;case 5:bu(e,t,n),e.flags&gu&&(e=e.stateNode,(335544128&t)===t&&of(n,e));break;case 3:case 4:var o=nu;nu=Dp(e.stateNode.containerInfo),bu(e,t,n),nu=o;break;case 22:null===e.memoizedState&&(null!==(o=e.alternate)&&null!==o.memoizedState?(o=gu,gu=16777216,bu(e,t,n),gu=o):bu(e,t,n));break;case 30:if(0!==(e.flags&gu)&&null!=(o=e.memoizedProps.name)&&"auto"!==o){var i=e.stateNode;i.paired=null,null===fc&&(fc=new Map),fc.set(o,i)}bu(e,t,n);break;default:bu(e,t,n)}}function _u(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function xu(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var o=t[n];Dc=o,Su(o,e)}_u(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)wu(e),e=e.sibling}function wu(e){switch(e.tag){case 0:case 11:case 15:xu(e),2048&e.flags&&Ya(9,e,e.return);break;case 3:case 12:default:xu(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,ku(e)):xu(e)}}function ku(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var o=t[n];Dc=o,Su(o,e)}_u(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Ya(8,t,t.return),ku(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,ku(t));break;default:ku(t)}e=e.sibling}}function Su(e,t){for(;null!==Dc;){var n=Dc;switch(n.tag){case 0:case 11:case 15:Ya(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var o=n.memoizedState.cachePool.pool;null!=o&&o.refCount++}break;case 24:pr(n.memoizedState.cache)}if(null!==(o=n.child))o.return=n,Dc=o;else e:for(n=e;null!==Dc;){var i=(o=Dc).sibling,r=o.return;if(Kc(o),o===n){Dc=null;break e}if(null!==i){i.return=r,Dc=i;break e}Dc=r}}}var Cu={getCacheForType:function(e){var t=rr(dr),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rr(dr).controller.signal}},Eu="function"==typeof WeakMap?WeakMap:Map,Pu=0,Ou=null,Iu=null,Au=0,zu=0,Nu=null,$u=!1,Tu=!1,Ru=!1,Lu=0,Du=0,Fu=0,Mu=0,Bu=0,Vu=0,Hu=0,ju=null,Uu=null,qu=!1,Wu=0,Ku=0,Gu=1/0,Qu=null,Yu=null,Xu=0,Zu=null,Ju=null,ed=0,td=0,nd=null,od=null,id=null,rd=null,sd=null,ld=0,ad=null;function cd(){return 2&Pu&&0!==Au?Au&-Au:null!==Y.T?ah():tt()}function ud(){if(0===Vu)if(536870912&Au&&!Fi)Vu=536870912;else{var e=Be;!(3932160&(Be<<=1))&&(Be=262144),Vu=e}return null!==(e=ls.current)&&(e.flags|=32),Vu}function dd(e,t){if(null!=t){var n=e.stateNode,o=n.ref;null===o&&(o=n.ref=ip(Yo(e.memoizedProps,n))),null===rd&&(rd=[]),rd.push(t.bind(null,o))}}function hd(e,t,n){(e!==Ou||2!==zu&&9!==zu)&&null===e.cancelPendingCommit||(yd(e,0),md(e,Au,Vu,!1)),Qe(e,n),2&Pu&&e===Ou||(e===Ou&&(!(2&Pu)&&(Mu|=n),4===Du&&md(e,Au,Vu,!1)),th(e))}function pd(e,t,n){if(6&Pu)throw Error(s(327));for(var o=!n&&!(127&t)&&0===(t&e.expiredLanes)||Ue(e,t),i=o?function(e,t){var n=Pu;Pu|=2;var o=wd(),i=kd();Ou!==e||Au!==t?(Qu=null,Gu=Se()+500,yd(e,t)):Tu=Ue(e,t);e:for(;;)try{if(0!==zu&&null!==Iu){t=Iu;var r=Nu;t:switch(zu){case 1:zu=0,Nu=null,Ad(e,t,r,1);break;case 2:case 9:if(Ar(r)){zu=0,Nu=null,Id(t);break}t=function(){2!==zu&&9!==zu||Ou!==e||(zu=7),th(e)},r.then(t,t);break e;case 3:zu=7;break e;case 4:zu=5;break e;case 7:Ar(r)?(zu=0,Nu=null,Id(t)):(zu=0,Nu=null,Ad(e,t,r,7));break;case 5:var l=null;switch(Iu.tag){case 26:l=Iu.memoizedState;case 5:case 27:var a=Iu;if(l?tf(l):a.stateNode.complete){zu=0,Nu=null;var c=a.sibling;if(null!==c)Iu=c;else{var u=a.return;null!==u?(Iu=u,zd(u)):Iu=null}break t}}zu=0,Nu=null,Ad(e,t,r,5);break;case 6:zu=0,Nu=null,Ad(e,t,r,6);break;case 8:bd(),Du=6;break e;default:throw Error(s(462))}}Pd();break}catch(t){_d(e,t)}return Xi=Yi=null,Y.H=o,Y.A=i,Pu=n,null!==Iu?0:(Ou=null,Au=0,oi(),Du)}(e,t):Cd(e,t,!0),r=o;;){if(0===i){Tu&&!o&&md(e,t,0,!1);break}if(n=e.current.alternate,!r||vd(n)){if(2===i){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=0!=(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var a=e;i=ju;var c=a.current.memoizedState.isDehydrated;if(c&&(yd(a,l).flags|=256),2!==(l=Cd(a,l,!1))&&6!==l){if(Ru&&!c){a.errorRecoveryDisabledLanes|=r,Mu|=r,i=4;break e}r=Uu,Uu=i,null!==r&&(null===Uu?Uu=r:Uu.push.apply(Uu,r))}i=l}if(r=!1,2!==i)continue}}if(1===i){yd(e,0),md(e,t,0,!0);break}e:{switch(o=e,r=i){case 0:case 1:throw Error(s(345));case 4:if((4194048&t)!==t&&(62914560&t)!==t)break;case 6:md(o,t,Vu,!$u);break e;case 2:Uu=null;break;case 3:case 5:break;default:throw Error(s(329))}if((62914560&t)===t&&10<(i=Wu+300-Se())){if(md(o,t,Vu,!$u),0!==je(o,0,!0))break e;ed=t,o.timeoutHandle=Hh(fd.bind(null,o,n,Uu,Qu,qu,t,Vu,Mu,Hu,$u,r,"Throttled",-0,0),i)}else fd(o,n,Uu,Qu,qu,t,Vu,Mu,Hu,$u,r,null,-0,0)}break}i=Cd(e,t,!1),r=!1}th(e)}function fd(e,t,n,o,i,r,s,l,a,c,u,d,h,p){e.timeoutHandle=-1;var f,v,m=t.subtreeFlags,g=(335544064&r)===r;if(d=null,(g||8192&m||!(16785408&~m))&&(fc=null,yu(t,r,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt}),g&&(m=d,null!=(g=(9===(g=e.containerInfo).nodeType?g:g.ownerDocument).__reactViewTransition)&&(m.count++,m.waitingForViewTransition=!0,m=lf.bind(m),g.finished.then(m,m))),m=(62914560&r)===r?Wu-Se():(4194048&r)===r?Ku-Se():0,v=m,(f=d).stylesheets&&0===f.count&&uf(f,f.stylesheets),null!==(m=0<f.count||0<f.imgCount?function(e){var t=setTimeout(function(){if(f.stylesheets&&uf(f,f.stylesheets),f.unsuspend){var e=f.unsuspend;f.unsuspend=null,e()}},6e4+v);0<f.imgBytes&&0===rf&&(rf=62500*function(){if("function"==typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var i=n[o],r=i.transferSize,s=i.initiatorType,l=i.duration;if(r&&l&&$h(s)){for(s=0,l=i.responseEnd,o+=1;o<n.length;o++){var a=n[o],c=a.startTime;if(c>l)break;var u=a.transferSize,d=a.initiatorType;u&&$h(d)&&(s+=u*((a=a.responseEnd)<l?1:(l-c)/(a-c)))}if(--o,t+=8*(r+s)/(i.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"==typeof(e=navigator.connection.downlink)?e:5}());var n=setTimeout(function(){if(f.waitingForImages=!1,0===f.count&&(f.stylesheets&&uf(f,f.stylesheets),f.unsuspend)){var e=f.unsuspend;f.unsuspend=null,e()}},(f.imgBytes>rf?50:800)+v);return f.unsuspend=e,function(){f.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null)))return ed=r,e.cancelPendingCommit=m($d.bind(null,e,t,r,n,o,i,s,l,a,c,u,d,null,h,p)),void md(e,r,s,!c);$d(e,t,r,n,o,0,s,l,a,0,0,d)}function vd(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&null!==(n=t.updateQueue)&&null!==(n=n.stores))for(var o=0;o<n.length;o++){var i=n[o],r=i.getSnapshot;i=i.value;try{if(!_o(r(),i))return!1}catch(e){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function md(e,t,n,o){t=qe(e,t),t&=~Bu,t&=~Mu,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var i=t;0<i;){var r=31-Le(i),s=1<<r;o[r]=-1,i&=~s}0!==n&&Ye(e,n,t)}function gd(){return!!(6&Pu)||(nh(0,!1),!1)}function bd(){if(null!==Iu){if(0===zu)var e=Iu.return;else Xi=Yi=null,Ds(e=Iu),Lr=null,Dr=0,e=Iu;for(;null!==e;)Ga(e.alternate,e),e=e.return;Iu=null}}function yd(e,t){var n=e.timeoutHandle;return-1!==n&&(e.timeoutHandle=-1,jh(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),ed=0,bd(),Ou=e,Iu=n=pi(e.current,null),Au=t,zu=0,Nu=null,$u=!1,Tu=Ue(e,t),Ru=!1,Hu=Vu=Bu=Mu=Fu=Du=0,Uu=ju=null,qu=!1,Lu=qe(e,t),oi(),n}function _d(e,t){ys=null,Y.H=ql,t===Er||t===Or?(t=Tr(),zu=3):t===Pr?(t=Tr(),zu=4):zu=t===aa?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,Nu=t,null===Iu&&(Du=1,oa(e,xi(t,e.current)))}function xd(){var e=ls.current;return null===e||((4194048&Au)===Au?null===as:!!((62914560&Au)===Au||536870912&Au)&&e===as)}function wd(){var e=Y.H;return Y.H=ql,null===e?ql:e}function kd(){var e=Y.A;return Y.A=Cu,e}function Sd(){Du=4,$u||(4194048&Au)!==Au&&null!==ls.current||(Tu=!0),!(134217727&Fu)&&!(134217727&Mu)||null===Ou||md(Ou,Au,Vu,!1)}function Cd(e,t,n){var o=Pu;Pu|=2;var i=wd(),r=kd();Ou===e&&Au===t||(Qu=null,yd(e,t)),t=!1;var s=Du;e:for(;;)try{if(0!==zu&&null!==Iu){var l=Iu,a=Nu;switch(zu){case 8:bd(),s=6;break e;case 3:case 2:case 9:case 6:null===ls.current&&(t=!0);var c=zu;if(zu=0,Nu=null,Ad(e,l,a,c),n&&Tu){s=0;break e}break;default:c=zu,zu=0,Nu=null,Ad(e,l,a,c)}}Ed(),s=Du;break}catch(t){_d(e,t)}return t&&e.shellSuspendCounter++,Xi=Yi=null,Pu=o,Y.H=i,Y.A=r,null===Iu&&(Ou=null,Au=0,oi()),s}function Ed(){for(;null!==Iu;)Od(Iu)}function Pd(){for(;null!==Iu&&!we();)Od(Iu)}function Od(e){var t=Ma(e.alternate,e,Lu);e.memoizedProps=e.pendingProps,null===t?zd(e):Iu=t}function Id(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xa(n,t,t.pendingProps,t.type,void 0,Au);break;case 11:t=xa(n,t,t.pendingProps,t.type.render,t.ref,Au);break;case 5:Ds(t);var o=t;o===Li&&(Fi?(Ui(o),5===o.tag&&null!=o.stateNode&&(Di=o.stateNode)):(Ui(o),Fi=!0));default:Ga(n,t),t=Ma(n,t=Iu=fi(t,Lu),Lu)}e.memoizedProps=e.pendingProps,null===t?zd(e):Iu=t}function Ad(e,t,n,o){Xi=Yi=null,Ds(t),Lr=null,Dr=0;var i=t.return;try{if(function(e,t,n,o,i){if(n.flags|=32768,null!==o&&"object"==typeof o&&"function"==typeof o.then){if(null!==(t=n.alternate)&&nr(t,n,i,!0),null!==(n=ls.current)){switch(n.tag){case 31:case 13:case 19:return null===as?Sd():null===n.alternate&&0===Du&&(Du=3),n.flags&=-257,n.flags|=65536,n.lanes=i,o===Ir?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([o]):t.add(o),Ud(e,o,i)),!1;case 22:return n.flags|=65536,o===Ir?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([o]):n.add(o),Ud(e,o,i)),!1}throw Error(s(435,n.tag))}return Ud(e,o,i),Sd(),!1}if(Fi)return null!==(t=ls.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,o!==Vi&&Gi(xi(e=Error(s(422),{cause:o}),n))):(o!==Vi&&Gi(xi(t=Error(s(423),{cause:o}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,o=xi(o,n),Yr(e,i=ra(e.stateNode,o,i)),4!==Du&&(Du=2)),!1;var r=Error(s(520),{cause:o});if(r=xi(r,n),null===ju?ju=[r]:ju.push(r),4!==Du&&(Du=2),null===t)return!0;o=xi(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,Yr(n,e=ra(n.stateNode,o,e)),!1;case 1:if(t=n.type,r=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===r||"function"!=typeof r.componentDidCatch||null!==Yu&&Yu.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,la(i=sa(i),e,n,o),Yr(n,i),!1;break;case 22:if(null!==n.memoizedState)return n.flags|=65536,!1}n=n.return}while(null!==n);return!1}(e,i,t,n,Au))return Du=1,oa(e,xi(n,e.current)),void(Iu=null)}catch(t){if(null!==i)throw Iu=i,t;return Du=1,oa(e,xi(n,e.current)),void(Iu=null)}32768&t.flags?(Fi||1===o?e=!0:Tu||536870912&Au?e=!1:($u=e=!0,(2===o||9===o||3===o||6===o)&&null!==(o=ls.current)&&13===o.tag&&(o.flags|=16384)),Nd(t,e)):zd(t)}function zd(e){var t=e;do{if(32768&t.flags)return void Nd(t,$u);e=t.return;var n=Wa(t.alternate,t,Lu);if(null!==n)return void(Iu=n);if(null!==(t=t.sibling))return void(Iu=t);Iu=t=e}while(null!==t);0===Du&&(Du=5)}function Nd(e,t){do{var n=Ka(e.alternate,e);if(null!==n)return n.flags&=32767,void(Iu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(Iu=e);Iu=e=n}while(null!==e);Du=6,Iu=null}function $d(e,t,n,o,i,r,l,a,c,u,d,h){e.cancelPendingCommit=null;do{Bd()}while(0!==Xu);if(6&Pu)throw Error(s(327));if(null!==t){if(t===e.current)throw Error(s(177));e===Ou&&(Iu=Ou=null,Au=0),Ju=t,Zu=e,ed=n,nd=i,od=o,function(e,t,n,o,i,r,s){var l=t.lanes|t.childLanes;if(td=l,function(e,t,n,o,i,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,a=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var u=31-Le(n),d=1<<u;l[u]=0,a[u]=-1;var h=c[u];if(null!==h)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==o&&Ye(e,o,0),0!==r&&0===i&&0!==e.tag&&(e.suspendedLanes|=r&~(s&~t))}(e,n,l|=ni,o,i,r),rd=null,(335544064&n)===n?(sd=function(e){var t=e.transitionTypes;return e.transitionTypes=null,t}(e),o=10262):(sd=null,o=10256),0!==(t.subtreeFlags&o)||0!==(t.flags&o)?(e.callbackNode=null,e.callbackPriority=0,_e(Oe,function(){return Vd(),null})):(e.callbackNode=null,e.callbackPriority=0),pc=!1,o=!!(13878&t.flags),13878&t.subtreeFlags||o){o=Y.T,Y.T=null,i=X.p,X.p=2,r=Pu,Pu|=4;try{!function(e,t,n){if(e=e.containerInfo,Th=yf,Po(e=Eo(e))){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(o=(o=e.ownerDocument)&&o.defaultView||window).getSelection&&o.getSelection();if(i&&0!==i.rangeCount){o=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{o.nodeType,s.nodeType}catch(e){o=null;break e}var l=0,a=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==o||0!==r&&3!==h.nodeType||(a=l+r),h!==s||0!==i&&3!==h.nodeType||(c=l+i),3===h.nodeType&&(l+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===o&&++u===r&&(a=l),p===s&&++d===i&&(c=l),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}o=-1===a||-1===c?null:{start:a,end:c}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rh={focusedElem:e,selectionRange:o},yf=!1,Dc=t,t=(n=(335544064&n)===n)?9270:1024;null!==Dc;){if(e=Dc,n&&null!==(o=e.deletions))for(r=0;r<o.length;r++)n&&Cc(o[r]);if(null===e.alternate&&2&e.flags)n&&vc(e),Hc(n);else{if(22===e.tag){if(o=e.alternate,null!==e.memoizedState){null!==o&&null===o.memoizedState&&n&&Cc(o),Hc(n);continue}if(null!==o&&null!==o.memoizedState){n&&vc(e),Hc(n);continue}}o=e.child,0!==(e.subtreeFlags&t)&&null!==o?(o.return=e,Dc=o):(n&&Ec(e),Hc(n))}}fc=null}(e,t,n)}finally{Pu=r,X.p=i,Y.T=o}}Xu=1,pc?id=function(e,t,n,o,i,r,s,l,a){var c=9===t.nodeType?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var t=c.defaultView,n=t.navigation&&t.navigation.transition,s=c.fonts.status;o();var l=[];if("loaded"===s&&(function(e){e.documentElement.clientHeight}(c),"loading"===c.fonts.status&&l.push(c.fonts.ready)),s=l.length,null!==e)for(var a=e.suspenseyImages,u=0,d=0;d<a.length;d++){var h=a[d];if(!h.complete){var p=h.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if((u+=nf(h))>rf){l.length=s;break}h=new Promise(np.bind(h)),l.push(h)}}}return 0<l.length?(t=Promise.race([Promise.all(l),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(r,r)):(i(),n?n.finished.then(r,r):void r())},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=c.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],o=n.effect,i=o.pseudoElement;if(null!=i&&i.startsWith("::view-transition")){d.push(n),n=o.getKeyframes();for(var r=i=void 0,l=!0,a=0;a<n.length;a++){var u=n[a],h=u.width;if(void 0===i)i=h;else if(i!==h){l=!1;break}if(h=u.height,void 0===r)r=h;else if(r!==h){l=!1;break}delete u.width,delete u.height,"none"===u.transform&&delete u.transform}l&&void 0!==i&&void 0!==r&&(o.setKeyframes(n),(l=getComputedStyle(o.target,o.pseudoElement)).width!==i||l.height!==r)&&((l=n[0]).width=i,l.height=r,(l=n[n.length-1]).width=i,l.height=r,o.setKeyframes(n))}}s()},function(e){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{"object"==typeof e&&null!==e&&"InvalidStateError"===e.name&&("View transition was skipped because document visibility state is hidden."!==e.message&&"Skipping view transition because document visibility state has become hidden."!==e.message&&"Skipping view transition because viewport size changed."!==e.message&&"Transition was aborted because of invalid state"!==e.message||(e=null)),null!==e&&a(e)}finally{o(),i(),s()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),l()}),u}catch(e){return o(),i(),s(),null}}(s,e.containerInfo,sd,Ld,Dd,Rd,Fd,Vd,Td):(Ld(),Dd(),Fd())}(e,t,n,l,a,c,h)}}function Td(e){0!==Xu&&(0,Zu.onRecoverableError)(e,{componentStack:null})}function Rd(){3===Xu&&(Xu=0,lu(Ju,Zu),Xu=4)}function Ld(){if(1===Xu){Xu=0;var e=Zu,t=Ju,n=ed,o=!!(13878&t.flags);if(13878&t.subtreeFlags||o){o=Y.T,Y.T=null;var i=X.p;X.p=2;var r=Pu;Pu|=4;try{Mc=Bc=!1,ou(t,e,n),n=Rh;var s=Eo(e.containerInfo),l=n.focusedElem,a=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Co(l.ownerDocument.documentElement,l)){if(null!==a&&Po(l)){var c=a.start,u=a.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),f=l.textContent.length,v=Math.min(a.start,f),m=void 0===a.end?v:Math.min(a.end,f);!p.extend&&v>m&&(s=m,m=v,v=s);var g=So(l,v),b=So(l,m);if(g&&b&&(1!==p.rangeCount||p.anchorNode!==g.node||p.anchorOffset!==g.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var y=d.createRange();y.setStart(g.node,g.offset),p.removeAllRanges(),v>m?(p.addRange(y),p.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),p.addRange(y))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"==typeof l.focus&&l.focus(),l=0;l<d.length;l++){var _=d[l];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}yf=!!Th,Rh=Th=null}finally{Pu=r,X.p=i,Y.T=o}}e.current=t,Xu=2}}function Dd(){if(2===Xu){Xu=0;var e=Zu,t=Ju,n=!!(8772&t.flags);if(8772&t.subtreeFlags||n){n=Y.T,Y.T=null;var o=X.p;X.p=2;var i=Pu;Pu|=4;try{jc(e,t.alternate,t)}finally{Pu=i,X.p=o,Y.T=n}}Xu=3}}function Fd(){if(4===Xu||3===Xu){Xu=0;var e=id;id=null,ke();var t=Zu,n=Ju,o=ed,i=od,r=(335544064&o)===o?10262:10256;if(0!==(n.subtreeFlags&r)||0!==(n.flags&r)?Xu=5:(Xu=0,Ju=Zu=null,Md(t,t.pendingLanes)),0===(r=t.pendingLanes)&&(Yu=null),et(o),n=n.stateNode,Te&&"function"==typeof Te.onCommitFiberRoot)try{Te.onCommitFiberRoot($e,n,void 0,!(128&~n.current.flags))}catch(e){}if(null!==i){n=Y.T,r=X.p,X.p=2,Y.T=null;try{for(var s=t.onRecoverableError,l=0;l<i.length;l++){var a=i[l];s(a.value,{componentStack:a.stack})}}finally{Y.T=n,X.p=r}}if(s=sd,sd=null,null!==(i=rd)&&(rd=null,null===s&&(s=[]),null!==e))for(a=0;a<i.length;a++)void 0!==(n=(0,i[a])(s))&&e.finished.finally(n);3&ed&&Bd(),th(t),r=t.pendingLanes,261930&o&&42&r?t===ad?ld++:(ld=0,ad=t):(ld=0,ad=null),nh(0,!1)}}function Md(e,t){0===(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,pr(t))}function Bd(){return null!==id&&(id.skipTransition(),id=null),Ld(),Dd(),Fd(),Vd()}function Vd(){if(5!==Xu)return!1;var e=Zu,t=td;td=0;var n=et(ed),o=Y.T,i=X.p;try{X.p=32>n?32:n,Y.T=null,n=nd,nd=null;var r=Zu,l=ed;if(Xu=0,Ju=Zu=null,ed=0,6&Pu)throw Error(s(331));var a=Pu;if(Pu|=4,wu(r.current),fu(r,r.current,l,n),Pu=a,nh(0,!1),Te&&"function"==typeof Te.onPostCommitFiberRoot)try{Te.onPostCommitFiberRoot($e,r)}catch(e){}return!0}finally{X.p=i,Y.T=o,Md(e,t)}}function Hd(e,t,n){t=xi(n,t),null!==(e=Gr(e,t=ra(e.stateNode,t,2),2))&&(Qe(e,2),th(e))}function jd(e,t,n){if(3===e.tag)Hd(e,e,n);else for(;null!==t;){if(3===t.tag){Hd(t,e,n);break}if(1===t.tag){var o=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===Yu||!Yu.has(o))){e=xi(n,e),null!==(o=Gr(t,n=sa(2),2))&&(la(n,o,t,e),Qe(o,2),th(o));break}}t=t.return}}function Ud(e,t,n){var o=e.pingCache;if(null===o){o=e.pingCache=new Eu;var i=new Set;o.set(t,i)}else void 0===(i=o.get(t))&&(i=new Set,o.set(t,i));i.has(n)||(Ru=!0,i.add(n),e=qd.bind(null,e,t,n),t.then(e,e))}function qd(e,t,n){var o=e.pingCache;null!==o&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ou===e&&(Au&n)===n&&(4===Du||3===Du&&(62914560&Au)===Au&&300>Se()-Wu?2&Pu?Bu|=n:yd(e,0):Bu|=n,Hu===Au&&(Hu=0)),th(e)}function Wd(e,t){0===t&&(t=Ke()),null!==(e=si(e,t))&&(Qe(e,t),th(e))}function Kd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Wd(e,n)}function Gd(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}null!==o&&o.delete(t),Wd(e,n)}var Qd=null,Yd=null,Xd=!1,Zd=!1,Jd=!1,eh=0;function th(e){e!==Yd&&null===e.next&&(null===Yd?Qd=Yd=e:Yd=Yd.next=e),Zd=!0,Xd||(Xd=!0,Wh(function(){6&Pu?_e(Ee,oh):ih()}))}function nh(e,t){if(!Jd&&Zd){Jd=!0;do{for(var n=!1,o=Qd;null!==o;){if(!t)if(0!==e){var i=o.pendingLanes;if(0===i)var r=0;else{var s=o.suspendedLanes,l=o.pingedLanes;r=(1<<31-Le(42|e)+1)-1,r=201326741&(r&=i&~(s&~l))?201326741&r|1:r?2|r:0}0!==r&&(n=!0,lh(o,r))}else r=Au,!(3&(r=je(o,o===Ou?r:0,null!==o.cancelPendingCommit||-1!==o.timeoutHandle)))||Ue(o,r)||(n=!0,lh(o,r));o=o.next}}while(n);Jd=!1}}function oh(){ih()}function ih(){Zd=Xd=!1;var e,t=0;0!==eh&&((e=window.event)&&"popstate"===e.type?e!==Vh&&(Vh=e,1):(Vh=null,0))&&(t=eh);for(var n=Se(),o=null,i=Qd;null!==i;){var r=i.next,s=rh(i,n);0===s?(i.next=null,null===o?Qd=r:o.next=r,null===r&&(Yd=o)):(o=i,(0!==t||3&s)&&(Zd=!0)),i=r}0!==Xu&&5!==Xu||nh(t,!1),0!==eh&&(eh=0)}function rh(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,r=-62914561&e.pendingLanes;0<r;){var s=31-Le(r),l=1<<s,a=i[s];-1===a?0!==(l&n)&&0===(l&o)||(i[s]=We(l,t)):a<=t&&(e.expiredLanes|=l),r&=~l}if(n=Au,n=je(e,e===(t=Ou)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),o=e.callbackNode,0===n||e===t&&(2===zu||9===zu)||null!==e.cancelPendingCommit)return null!==o&&null!==o&&xe(o),e.callbackNode=null,e.callbackPriority=0;if(!(3&n)||Ue(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==o&&xe(o),et(n)){case 2:case 8:n=Pe;break;case 32:default:n=Oe;break;case 268435456:n=Ae}return o=sh.bind(null,e),n=_e(n,o),e.callbackPriority=t,e.callbackNode=n,t}return null!==o&&null!==o&&xe(o),e.callbackPriority=2,e.callbackNode=null,2}function sh(e,t){if(0!==Xu&&5!==Xu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bd()&&e.callbackNode!==n)return null;var o=Au;return 0===(o=je(e,e===Ou?o:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(pd(e,o,t),rh(e,Se()),null!=e.callbackNode&&e.callbackNode===n?sh.bind(null,e):null)}function lh(e,t){if(Bd())return null;pd(e,t,!0)}function ah(){if(0===eh){var e=br;0===e&&(e=Me,!(261888&(Me<<=1))&&(Me=256)),eh=e}return eh}function ch(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Xt(e)}for(var uh=0;uh<Ko.length;uh++){var dh=Ko[uh];Go(dh.toLowerCase(),"on"+(dh[0].toUpperCase()+dh.slice(1)))}Go(Mo,"onAnimationEnd"),Go(Bo,"onAnimationIteration"),Go(Vo,"onAnimationStart"),Go("dblclick","onDoubleClick"),Go("focusin","onFocus"),Go("focusout","onBlur"),Go(Ho,"onTransitionRun"),Go(jo,"onTransitionStart"),Go(Uo,"onTransitionCancel"),Go(qo,"onTransitionEnd"),kt("onMouseEnter",["mouseout","mouseover"]),kt("onMouseLeave",["mouseout","mouseover"]),kt("onPointerEnter",["pointerout","pointerover"]),kt("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hh="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ph=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hh));function fh(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var s=o.length-1;0<=s;s--){var l=o[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==r&&i.isPropagationStopped())break e;r=l,i.currentTarget=c;try{r(i)}catch(e){Jo(e)}i.currentTarget=null,r=a}else for(s=0;s<o.length;s++){if(a=(l=o[s]).instance,c=l.currentTarget,l=l.listener,a!==r&&i.isPropagationStopped())break e;r=l,i.currentTarget=c;try{r(i)}catch(e){Jo(e)}i.currentTarget=null,r=a}}}}function vh(e,t){var n=t[lt];void 0===n&&(n=t[lt]=new Set);var o=e+"__bubble";n.has(o)||(yh(t,e,2,!1),n.add(o))}function mh(e,t,n){var o=0;t&&(o|=4),yh(n,e,o,t)}var gh="_reactListening"+Math.random().toString(36).slice(2);function bh(e){if(!e[gh]){e[gh]=!0,_t.forEach(function(t){"selectionchange"!==t&&(ph.has(t)||mh(t,!1,e),mh(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[gh]||(t[gh]=!0,mh("selectionchange",!1,t))}}function yh(e,t,n,o){switch(Ef(t)){case 2:var i=_f;break;case 8:i=xf;break;default:i=wf}n=i.bind(null,t,n,e),i=void 0,!cn||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),o?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _h(e,t,n,o,i){var r=o;if(!(1&t||2&t||null===o))e:for(;;){if(null===o)return;var s=o.tag;if(3===s||4===s){var l=o.stateNode.containerInfo;if(l===i)break;if(4===s)for(s=o.return;null!==s;){var c=s.tag;if((3===c||4===c)&&s.stateNode.containerInfo===i)return;s=s.return}for(;null!==l;){if(null===(s=ft(l)))return;if(5===(c=s.tag)||6===c||26===c||27===c){o=r=s;continue e}l=l.parentNode}}o=o.return}sn(function(){var o=r,i=en(n),s=[];e:{var l=Wo.get(e);if(void 0!==l){var c=kn,u=e;switch(e){case"keypress":if(0===vn(n))break e;case"keydown":case"keyup":c=Fn;break;case"focusin":u="focus",c=In;break;case"focusout":u="blur",c=In;break;case"beforeblur":case"afterblur":c=In;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=On;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Vn;break;case Mo:case Bo:case Vo:c=An;break;case qo:c=Hn;break;case"scroll":case"scrollend":c=Cn;break;case"wheel":c=jn;break;case"copy":case"cut":case"paste":c=zn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Mn;break;case"submit":c=Bn;break;case"toggle":case"beforetoggle":c=Un}var d=!!(4&t),h=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var f,v=o;null!==v;){var m=v;if(f=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===f||null===p||null!=(m=ln(v,p))&&d.push(xh(v,m,f)),h)break;v=v.return}0<d.length&&(l=new c(l,u,null,n,i),s.push({event:l,listeners:d}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(c="mouseover"===e||"pointerover"===e)&&n!==Jt&&(u=n.relatedTarget||n.fromElement)&&(ft(u)||u[st])||(l||c)&&(u=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(l=o,null!==(c=(c=n.relatedTarget||n.toElement)?ft(c):null)&&(h=a(c),d=c.tag,c!==h||5!==d&&27!==d&&6!==d)&&(c=null)):(l=null,c=o),l!==c&&(d=Pn,m="onMouseLeave",p="onMouseEnter",v="mouse","pointerout"!==e&&"pointerover"!==e||(d=Mn,m="onPointerLeave",p="onPointerEnter",v="pointer"),h=null==l?u:mt(l),f=null==c?u:mt(c),(u=new d(m,v+"leave",l,n,i)).target=h,u.relatedTarget=f,m=null,ft(i)===o&&((d=new d(p,v+"enter",c,n,i)).target=f,d.relatedTarget=h,m=d),h=m,d=l&&c?C(l,c,kh):null,null!==l&&Sh(s,u,l,d,!1),null!==c&&null!==h&&Sh(s,h,c,d,!0))),"select"===(c=(l=o?mt(o):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var g=ao;else if(no(l))if(co)g=yo;else{g=go;var b=mo}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?o&&Gt(o.elementType)&&(g=ao):g=bo;switch(g&&(g=g(e,o))?oo(s,g,n,i):b&&b(e,l,o),b=o?mt(o):window,e){case"focusin":(no(b)||"true"===b.contentEditable)&&(Io=b,Ao=o,zo=null);break;case"focusout":zo=Ao=Io=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,$o(s,n,i);break;case"selectionchange":if(Oo)break;case"keydown":case"keyup":$o(s,n,i)}var y;if(Wn)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else eo?Zn(e,n)&&(_="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(_="onCompositionStart");_&&(Qn&&"ko"!==n.locale&&(eo||"onCompositionStart"!==_?"onCompositionEnd"===_&&eo&&(y=fn()):(hn="value"in(dn=i)?dn.value:dn.textContent,eo=!0)),0<(b=wh(o,_)).length&&(_=new Nn(_,e,null,n,i),s.push({event:_,listeners:b}),(y||null!==(y=Jn(n)))&&(_.data=y))),(y=Gn?function(e,t){switch(e){case"compositionend":return Jn(t);case"keypress":return 32!==t.which?null:(Xn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(eo)return"compositionend"===e||!Wn&&Zn(e,t)?(e=fn(),pn=hn=dn=null,eo=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qn&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(_=wh(o,"onBeforeInput")).length&&(b=new Nn("onBeforeInput","beforeinput",null,n,i),s.push({event:b,listeners:_}),b.data=y),function(e,t,n,o,i){if("submit"===t&&n&&n.stateNode===i){var r=ch((i[rt]||null).action),s=o.submitter;s&&null!==(t=(t=s[rt]||null)?ch(t.formAction):s.getAttribute("formAction"))&&(r=t,s=null);var l=new kn("action","action",null,o,i);e.push({event:l,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(0!==eh){var e=new FormData(i,s);zl(n,{pending:!0,data:e,method:i.method,action:r},null,e)}}else"function"==typeof r&&(l.preventDefault(),e=new FormData(i,s),zl(n,{pending:!0,data:e,method:i.method,action:r},r,e))},currentTarget:i}]})}}(s,e,o,n,i)}fh(s,t)})}function xh(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wh(e,t){for(var n=t+"Capture",o=[];null!==e;){var i=e,r=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===r||(null!=(i=ln(e,n))&&o.unshift(xh(e,i,r)),null!=(i=ln(e,t))&&o.push(xh(e,i,r))),3===e.tag)return o;e=e.return}return[]}function kh(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Sh(e,t,n,o,i){for(var r=t._reactName,s=[];null!==n&&n!==o;){var l=n,a=l.alternate,c=l.stateNode;if(l=l.tag,null!==a&&a===o)break;5!==l&&26!==l&&27!==l||null===c||(a=c,i?null!=(c=ln(n,r))&&s.unshift(xh(n,c,a)):i||null!=(c=ln(n,r))&&s.push(xh(n,c,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var Ch=/\r\n?/g,Eh=/\u0000|\uFFFD/g;function Ph(e){return("string"==typeof e?e:""+e).replace(Ch,"\n").replace(Eh,"")}function Oh(e,t){return t=Ph(t),Ph(e)===t}function Ih(e,t,n,o,i,r){switch(n){case"children":if("string"==typeof o)"body"===t||"textarea"===t&&""===o||Ut(e,o);else{if("number"!=typeof o&&"bigint"!=typeof o)return;"body"!==t&&Ut(e,""+o)}break;case"className":At(e,"class",o);break;case"tabIndex":At(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":At(e,n,o);break;case"style":return void Kt(e,o,r);case"data":if("object"!==t){At(e,"data",o);break}case"src":case"href":if(""===o&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==o||"function"==typeof o||"symbol"==typeof o||"boolean"==typeof o){e.removeAttribute(n);break}o=Xt(o),e.setAttribute(n,o);break;case"action":case"formAction":if("function"==typeof o){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"==typeof r&&("formAction"===n?("input"!==t&&Ih(e,t,"name",i.name,i,null),Ih(e,t,"formEncType",i.formEncType,i,null),Ih(e,t,"formMethod",i.formMethod,i,null),Ih(e,t,"formTarget",i.formTarget,i,null)):(Ih(e,t,"encType",i.encType,i,null),Ih(e,t,"method",i.method,i,null),Ih(e,t,"target",i.target,i,null))),null==o||"symbol"==typeof o||"boolean"==typeof o){e.removeAttribute(n);break}o=Xt(o),e.setAttribute(n,o);break;case"onClick":return void(null!=o&&(e.onclick=Zt));case"onScroll":return void(null!=o&&vh("scroll",e));case"onScrollEnd":return void(null!=o&&vh("scrollend",e));case"dangerouslySetInnerHTML":if(null!=o){if("object"!=typeof o||!("__html"in o))throw Error(s(61));if(null!=(n=o.__html)){if(null!=i.children)throw Error(s(60));(null!=r?r.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=o&&"function"!=typeof o&&"symbol"!=typeof o;break;case"muted":e.muted=o&&"function"!=typeof o&&"symbol"!=typeof o;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==o||"function"==typeof o||"boolean"==typeof o||"symbol"==typeof o){e.removeAttribute("xlink:href");break}n=Xt(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=o&&"function"!=typeof o&&"symbol"!=typeof o?e.setAttribute(n,o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&"function"!=typeof o&&"symbol"!=typeof o?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===o?e.setAttribute(n,""):!1!==o&&null!=o&&"function"!=typeof o&&"symbol"!=typeof o?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":null==o||"function"==typeof o||"symbol"==typeof o||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":vh("beforetoggle",e),vh("toggle",e),It(e,"popover",o);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":It(e,"is",o);break;case"innerText":case"textContent":return;default:if(2<n.length&&("o"===n[0]||"O"===n[0])&&("n"===n[1]||"N"===n[1]))return;It(e,n=Qt.get(n)||n,o)}Pt=!0}function Ah(e,t,n,o,i,r){switch(n){case"style":return void Kt(e,o,r);case"dangerouslySetInnerHTML":if(null!=o){if("object"!=typeof o||!("__html"in o))throw Error(s(61));if(null!=(n=o.__html)){if(null!=i.children)throw Error(s(60));(null!=r?r.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if("string"==typeof o)Ut(e,o);else{if("number"!=typeof o&&"bigint"!=typeof o)return;Ut(e,""+o)}break;case"onScroll":return void(null!=o&&vh("scroll",e));case"onScrollEnd":return void(null!=o&&vh("scrollend",e));case"onClick":return void(null!=o&&(e.onclick=Zt));case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":return;default:return void(xt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),r=n.slice(2,i?n.length-7:void 0),"function"==typeof(t=null!=(t=e[rt]||null)?t[n]:null)&&e.removeEventListener(r,t,i),"function"!=typeof o)?(Pt=!0,n in e?e[n]=o:!0===o?e.setAttribute(n,""):It(e,n,o)):("function"!=typeof t&&null!==t&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(r,o,i))))}Pt=!0}function zh(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vh("error",e),vh("load",e);var o,i=!1,r=!1;for(o in n)if(n.hasOwnProperty(o)){var l=n[o];if(null!=l)switch(o){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ih(e,t,o,l,n,null)}}return r&&Ih(e,t,"srcSet",n.srcSet,n,null),void(i&&Ih(e,t,"src",n.src,n,null));case"input":vh("invalid",e);var a=o=l=r=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":r=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":o=d;break;case"defaultValue":a=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(s(137,t));break;default:Ih(e,t,i,d,n,null)}}return void Mt(e,o,a,c,u,l,r,!1);case"select":for(r in vh("invalid",e),i=l=o=null,n)if(n.hasOwnProperty(r)&&null!=(a=n[r]))switch(r){case"value":o=a;break;case"defaultValue":l=a;break;case"multiple":i=a;default:Ih(e,t,r,a,n,null)}return t=o,n=l,e.multiple=!!i,void(null!=t?Vt(e,!!i,t,!1):null!=n&&Vt(e,!!i,n,!0));case"textarea":for(l in vh("invalid",e),o=r=i=null,n)if(n.hasOwnProperty(l)&&null!=(a=n[l]))switch(l){case"value":i=a;break;case"defaultValue":r=a;break;case"children":o=a;break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(s(91));break;default:Ih(e,t,l,a,n,null)}return void jt(e,i,r,o);case"option":for(c in n)n.hasOwnProperty(c)&&null!=(i=n[c])&&("selected"===c?e.selected=i&&"function"!=typeof i&&"symbol"!=typeof i:Ih(e,t,c,i,n,null));return;case"dialog":vh("beforetoggle",e),vh("toggle",e),vh("cancel",e),vh("close",e);break;case"iframe":case"object":vh("load",e);break;case"video":case"audio":for(i=0;i<hh.length;i++)vh(hh[i],e);break;case"image":vh("error",e),vh("load",e);break;case"details":vh("toggle",e);break;case"embed":case"source":case"link":vh("error",e),vh("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ih(e,t,u,i,n,null)}return;default:if(Gt(t)){for(d in n)n.hasOwnProperty(d)&&void 0!==(i=n[d])&&Ah(e,t,d,i,n,void 0);return}}for(a in n)n.hasOwnProperty(a)&&null!=(i=n[a])&&Ih(e,t,a,i,n,null)}var Nh={};function $h(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var Th=null,Rh=null;function Lh(e){return 9===e.nodeType?e:e.ownerDocument}function Dh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fh(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Mh(e,t,n,o){return(n=Lh(n).createElement(e))[it]=o,n[rt]=t,zh(n,e,t),bt(n),n}function Bh(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Vh=null,Hh="function"==typeof setTimeout?setTimeout:void 0,jh="function"==typeof clearTimeout?clearTimeout:void 0,Uh="function"==typeof Promise?Promise:void 0,qh="function"==typeof requestAnimationFrame?requestAnimationFrame:Hh,Wh="function"==typeof queueMicrotask?queueMicrotask:void 0!==Uh?function(e){return Uh.resolve(null).then(e).catch(Kh)}:Hh;function Kh(e){setTimeout(function(){throw e})}function Gh(e){return"head"===e}function Qh(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)||"/&"===n){if(0===o)return e.removeChild(i),void Uf(t);o--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)o++;else if("html"===n)Tp(e.ownerDocument.documentElement);else if("head"===n){Tp(n=e.ownerDocument.head);for(var r=n.firstChild;r;){var s=r.nextSibling,l=r.nodeName;r[dt]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===r.rel.toLowerCase()||n.removeChild(r),r=s}}else"body"===n&&Tp(e.ownerDocument.body);n=i}while(n);Uf(t)}function Yh(e,t){var n=e;e=0;do{var o=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=o}while(n)}function Xh(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,null!=n&&(e.style.viewTransitionClass=n),"inline"===(n=getComputedStyle(e)).display){if(1===(t=e.getClientRects()).length)var o=1;else for(var i=o=0;i<t.length;i++){var r=t[i];0<r.width&&0<r.height&&o++}1===o&&((e=e.style).display=1===t.length?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Zh(e,t){e=e.style;var n=null!=(t=t.style)?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=null==n||"boolean"==typeof n?"":(""+n).trim(),n=null!=t?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=null==n||"boolean"==typeof n?"":(""+n).trim(),"inline-block"===e.display&&(null==t?e.display=e.margin="":(n=t.display,e.display=null==n||"boolean"==typeof n?"":n,null!=(n=t.margin)?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=null==n||"boolean"==typeof n?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=null==t||"boolean"==typeof t?"":t)))}function Jh(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:"absolute"===t.position||"fixed"===t.position,clip:"none"!==t.clipPath||"visible"!==t.overflow||"none"!==t.filter||"none"!==t.mask||"none"!==t.mask||"0px"!==t.borderRadius,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ep(e){return Jh(e.getBoundingClientRect(),getComputedStyle(e),e)}function tp(e){var t=e.getBoundingClientRect();return Jh(t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height),getComputedStyle(e),e)}function np(e){this.addEventListener("load",e),this.addEventListener("error",e)}function op(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}function ip(e){return{name:e,group:new op("group",e),imagePair:new op("image-pair",e),old:new op("old",e),new:new op("new",e)}}function rp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function sp(e,t,n,o){return y(e).addEventListener(t,n,o),!1}function lp(e,t,n,o){return y(e).removeEventListener(t,n,o),!1}function ap(e){return null!=e&&"boolean"!=typeof e&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function cp(e){return null==e?"c=0":"boolean"==typeof e?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function up(e,t,n,o){if(0===e.length)return-1;o=cp(o);for(var i=0;i<e.length;i++){var r=e[i];if(r.type===t&&r.listener===n&&cp(r.optionsOrUseCapture)===o)return i}return-1}function dp(e,t){return 6!==e.tag&&function(e,t){function n(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return o}(e=y(e),t)}function hp(e,t){return t.push(e),!1}function pp(e,t){return!(6===e.tag||(e=y(e))!==t&&!e.contains(t)||(t.blur(),0))}function fp(e,t){return 6===e.tag||(e=y(e),t.observe(e)),!1}function vp(e,t){return 6===e.tag||(e=y(e),t.unobserve(e)),!1}op.prototype.animate=function(e,t){return(t="number"==typeof t?{duration:t}:E({},t)).pseudoElement=this._selector,this._scope.animate(e,t)},op.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),o=[],i=0;i<n.length;i++){var r=n[i].effect;null!==r&&r.target===e&&r.pseudoElement===t&&o.push(n[i])}return o},op.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},rp.prototype.addEventListener=function(e,t,n){var o=null,i=null;if(null==n||"boolean"==typeof n||null===(o=n.signal||null)||!o.aborted){null===this._eventListeners&&(this._eventListeners=[]);var r=this._eventListeners;if(-1===up(r,e,t,n)){var s=this,l=t;null!=n&&"boolean"!=typeof n&&!0===n.once&&(l=function(o){s.removeEventListener(e,t,n),"function"==typeof t?t.call(this,o):t.handleEvent(o)}),null!==o&&(i=s.removeEventListener.bind(s,e,t,n),o.addEventListener("abort",i,{once:!0}),i=o.removeEventListener.bind(o,"abort",i)),o=ap(n),r.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:l,cleanup:i}),f(this._fragmentFiber.child,!1,sp,e,l,o)}this._eventListeners=r}},rp.prototype.removeEventListener=function(e,t,n){var o=this._eventListeners;if(null!==o&&-1!==(t=up(o,e,t,n))){var i=o[t];n=i.attachedListener;var r=i.cleanup;i=ap(i.optionsOrUseCapture),f(this._fragmentFiber.child,!1,lp,e,n,i),o.splice(t,1),null!==r&&r()}},rp.prototype.dispatchEvent=function(e){var t=v(this._fragmentFiber);if(null===t)return!0;t=y(t);var n=this._eventListeners;if(null!==n&&0<n.length||!e.bubbles){var o=9===t.nodeType?t.createComment(""):document.createTextNode("");if(n)for(var i=0;i<n.length;i++){var r=n[i];o.addEventListener(r.type,r.attachedListener,ap(r.optionsOrUseCapture))}if(t.appendChild(o),e=o.dispatchEvent(e),n)for(i=0;i<n.length;i++)r=n[i],o.removeEventListener(r.type,r.attachedListener,ap(r.optionsOrUseCapture));return t.removeChild(o),e}return t.dispatchEvent(e)},rp.prototype.focus=function(e){f(this._fragmentFiber.child,!0,dp,e,void 0,void 0)},rp.prototype.focusLast=function(e){var t=[];f(this._fragmentFiber.child,!0,hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!dp(t[n],e);n--);},rp.prototype.blur=function(){var e=v(this._fragmentFiber);null!==e&&null!==(e=Lh(e=y(e)).activeElement)&&f(this._fragmentFiber.child,!1,pp,e,void 0,void 0)},rp.prototype.observeUsing=function(e){null===this._observers&&(this._observers=new Set),this._observers.add(e),f(this._fragmentFiber.child,!1,fp,e,void 0,void 0)},rp.prototype.unobserveUsing=function(e){var t=this._observers;if(null!==t&&t.has(e)){t.delete(e),f(this._fragmentFiber.child,!1,vp,e,void 0,void 0);for(var n=t=0;n<mp.length;n++){var o=mp[n];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):mp[t++]=o}mp.length=t}};var mp=[],gp=!1;function bp(e,t){if(6===e.tag){var n=(e=e.stateNode).ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=y(e),t.push.apply(t,e.getClientRects());return!1}function yp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function _p(e,t){return xp(e=y(e),t),!1}function xp(e,t){null==e.reactFragments&&(e.reactFragments=new Set),e.reactFragments.add(t)}function wp(e,t){var n=t._eventListeners;if(null!==n)for(var o=0;o<n.length;o++){var i=n[o];e.addEventListener(i.type,i.attachedListener,ap(i.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){for(var o=0,i=0;i<mp.length;i++){var r=mp[i];r.fragmentInstance===t&&r.observer===n&&r.instance===e||(mp[o++]=r)}mp.length=o,n.observe(e)}),xp(e,t))}function kp(e,t){var n=t._eventListeners;if(null!==n)for(var o=0;o<n.length;o++){var i=n[o];e.removeEventListener(i.type,i.attachedListener,ap(i.optionsOrUseCapture))}3!==e.nodeType&&(null!==(n=t._observers)&&n.forEach(function(n){"string"==typeof n.rootMargin?function(e,t,n){var o;mp.push({fragmentInstance:e,observer:t,instance:n}),gp||(gp=!0,o=function(){gp=!1;var e=mp;mp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}},qh(function(){qh(function(e){return o()})}))}(t,n,e):n.unobserve(e)}),null!=e.reactFragments&&e.reactFragments.delete(t))}function Sp(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Sp(n),pt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Cp(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Op(e.nextSibling)))return null}return e}function Ep(e){return"$?"===e.data||"$~"===e.data}function Pp(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Op(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}rp.prototype.getClientRects=function(){var e=[];return f(this._fragmentFiber.child,!1,bp,e,void 0,void 0),e},rp.prototype.getRootNode=function(e){var t=v(this._fragmentFiber);return null===t?this:y(t).getRootNode(e)},rp.prototype.compareDocumentPosition=function(e){var t=v(this._fragmentFiber);if(null===t)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];f(this._fragmentFiber.child,!1,hp,n,void 0,void 0);var o=y(t);if(0===n.length){if(n=o,m(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;null!==t;){if(4===t.tag){t=t.stateNode.containerInfo;break e}if(3===t.tag||5===t.tag||27===t.tag)break;t=t.return}t=null}null!=t&&(n=t)}t=this._fragmentFiber;var i=o=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=null===(n=g(t)[1])?Node.DOCUMENT_POSITION_PRECEDING:0===(e=y(n).compareDocumentPosition(e))||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING),i|Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=y(n[0]),i=y(n[n.length-1]);var r=m(this._fragmentFiber)?t.parentElement:o;if(null==r)return Node.DOCUMENT_POSITION_DISCONNECTED;o=r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=t.compareDocumentPosition(e),l=i.compareDocumentPosition(e),a=s&Node.DOCUMENT_POSITION_CONTAINED_BY||l&Node.DOCUMENT_POSITION_CONTAINED_BY;return l=o&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&l&Node.DOCUMENT_POSITION_PRECEDING,(t=o&&t===e||r&&i===e||a||l?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&t===e||!r&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s)&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||function(e,t,n,o,i){var r=ft(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)e:{for(;null!==r;){if(7===r.tag&&(r===t||r.alternate===t)){n=!0;break e}r=r.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(null===r)return i===(r=i.ownerDocument)||i===r.documentElement||i===r.body;e:{for(r=t,t=v(t);null!==r;){if(!(5!==r.tag&&3!==r.tag&&27!==r.tag||r!==t&&r.alternate!==t)){r=!0;break e}r=r.return}r=!1}return r}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!r)&&!(t=r===n)&&(null===(t=C(n,r,S))?t=!1:(f(t,!0,w,r,n),r=_,_=null,t=null!==r)),t):!!(e&Node.DOCUMENT_POSITION_FOLLOWING)&&((t=!!r)&&!(t=r===o)&&(null===(t=C(o,r,S))?t=!1:(f(t,!0,k,r,o),r=_,x=_=null,t=null!==r)),t)}(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},rp.prototype.scrollIntoView=function(e){if("object"==typeof e)throw Error(s(566));var t=[];f(this._fragmentFiber.child,!1,hp,t,void 0,void 0);var n=!1!==e;if(0===t.length){var o=g(this._fragmentFiber);if(null===(o=n?o[1]||o[0]||v(this._fragmentFiber):o[0]||o[1]))return;if(6===o.tag)return void yp(e=y(o),n);if(9!==(o=y(o)).nodeType){if(11===o.nodeType)return void(null!==(n="host"in o?o.host:null)&&n.scrollIntoView(e));o.scrollIntoView(e)}}for(o=n?t.length-1:0;o!==(n?-1:t.length);){var i=t[o];6===i.tag?yp(i=y(i),n):y(i).scrollIntoView(e),o+=n?-1:1}};var Ip=null;function Ap(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Op(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function zp(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Np(e,t,n){switch(t=Lh(n),e){case"html":if(!(e=t.documentElement))throw Error(s(452));return e;case"head":if(!(e=t.head))throw Error(s(453));return e;case"body":if(!(e=t.body))throw Error(s(454));return e;default:throw Error(s(451))}}function $p(e,t,n){for(var o in n){var i=n[o];n.hasOwnProperty(o)&&null!=i&&Ih(e,t,o,null,Nh,i)}null!=n.dangerouslySetInnerHTML&&(e.textContent=""),e.onclick===Zt&&(e.onclick=null),pt(e)}function Tp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pt(e)}var Rp=new Map,Lp=new Set;function Dp(e){if("function"==typeof e.getRootNode){var t=e.getRootNode();if(9===t.nodeType||11===t.nodeType)return t}return 9===e.nodeType?e:e.ownerDocument}var Fp=X.d;X.d={f:function(){var e=Fp.f(),t=gd();return e||t},r:function(e){var t=vt(e);null!==t&&5===t.tag&&"form"===t.type?$l(t):Fp.r(e)},D:function(e){Fp.D(e),Bp("dns-prefetch",e,null)},C:function(e,t){Fp.C(e,t),Bp("preconnect",e,t)},L:function(e,t,n){Fp.L(e,t,n);var o=Mp;if(o&&e&&t){var i='link[rel="preload"][as="'+Dt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Dt(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(i+='[imagesizes="'+Dt(n.imageSizes)+'"]')):i+='[href="'+Dt(e)+'"]';var r=i;switch(t){case"style":r=Hp(e);break;case"script":r=qp(e)}if(!(Rp.has(r)||(e=E({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Rp.set(r,e),null!==o.querySelector(i)||"style"===t&&o.querySelector(jp(r))||"script"===t&&o.querySelector(Wp(r))))){var s=o.createElement("link");zh(s,"link",e),"style"===t&&(s[ht]=!0,s.onload=s.onerror=function(){yt(s)}),bt(s),o.head.appendChild(s)}}},m:function(e,t){Fp.m(e,t);var n=Mp;if(n&&e){var o=t&&"string"==typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+Dt(o)+'"][href="'+Dt(e)+'"]',r=i;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=qp(e)}if(!Rp.has(r)&&(e=E({rel:"modulepreload",href:e},t),Rp.set(r,e),null===n.querySelector(i))){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wp(r)))return}zh(o=n.createElement("link"),"link",e),bt(o),n.head.appendChild(o)}}},X:function(e,t){Fp.X(e,t);var n=Mp;if(n&&e){var o=gt(n).hoistableScripts,i=qp(e),r=o.get(i);r||((r=n.querySelector(Wp(i)))||(e=E({src:e,async:!0},t),(t=Rp.get(i))&&Yp(e,t),bt(r=n.createElement("script")),zh(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(i,r))}},S:function(e,t,n){Fp.S(e,t,n);var o=Mp;if(o&&e){var i=gt(o).hoistableStyles,r=Hp(e);t=t||"default";var s=i.get(r);if(!s){var l={loading:0,preload:null};if(s=o.querySelector(jp(r)))l.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Rp.get(r))&&Qp(e,n);var a=s=o.createElement("link");bt(a),zh(a,"link",e),a._p=new Promise(function(e,t){a.onload=e,a.onerror=t}),a.addEventListener("load",function(){l.loading|=1}),a.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Gp(s,t,o)}s={type:"stylesheet",instance:s,count:1,state:l},i.set(r,s)}}},M:function(e,t){Fp.M(e,t);var n=Mp;if(n&&e){var o=gt(n).hoistableScripts,i=qp(e),r=o.get(i);r||((r=n.querySelector(Wp(i)))||(e=E({src:e,async:!0,type:"module"},t),(t=Rp.get(i))&&Yp(e,t),bt(r=n.createElement("script")),zh(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(i,r))}}};var Mp="undefined"==typeof document?null:document;function Bp(e,t,n){var o=Mp;if(o&&"string"==typeof t&&t){var i=Dt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"==typeof n&&(i+='[crossorigin="'+n+'"]'),Lp.has(i)||(Lp.add(i),e={rel:e,crossOrigin:n,href:t},null===o.querySelector(i)&&(zh(t=o.createElement("link"),"link",e),bt(t),o.head.appendChild(t)))}}function Vp(e,t,n,o){var i=(i=ae.current)?Dp(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(n=Hp(n.href),(o=(t=gt(i).hoistableStyles).get(n))||(o={type:"style",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=Hp(n.href);var r=gt(i).hoistableStyles,l=r.get(e);if(l||(i=i.ownerDocument||i,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=i.querySelector(jp(e)))?r._p||(l.instance=r,l.state.loading=5):((r=Rp.get(e))||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Rp.set(e,r)),function(e,t,n,o){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(!0!==t[ht])return void(o.loading=1)}else(t=e.createElement("link"))[ht]=!0,t.onload=t.onerror=yt.bind(null,t),zh(t,"link",n),bt(t),e.head.appendChild(t);o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2})}(i,e,r,l.state))),t&&null===o)throw Error(s(528,""));return l}if(t&&null!==o)throw Error(s(529,""));return null;case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(n=qp(n),(o=(t=gt(i).hoistableScripts).get(n))||(o={type:"script",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Hp(e){return'href="'+Dt(e)+'"'}function jp(e){return'link[rel="stylesheet"]['+e+"]"}function Up(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function qp(e){return'[src="'+Dt(e)+'"]'}function Wp(e){return"script[async]"+e}function Kp(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Dt(n.href)+'"]');if(o)return t.instance=o,bt(o),o;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return bt(o=(e.ownerDocument||e).createElement("style")),zh(o,"style",i),Gp(o,n.precedence,e),t.instance=o;case"stylesheet":i=Hp(n.href);var r=e.querySelector(jp(i));if(r)return t.state.loading|=4,t.instance=r,bt(r),r;o=Up(n),(i=Rp.get(i))&&Qp(o,i),bt(r=(e.ownerDocument||e).createElement("link"));var l=r;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),zh(r,"link",o),t.state.loading|=4,Gp(r,n.precedence,e),t.instance=r;case"script":return r=qp(n.src),(i=e.querySelector(Wp(r)))?(t.instance=i,bt(i),i):(o=n,(i=Rp.get(r))&&Yp(o=E({},n),i),bt(i=(e=e.ownerDocument||e).createElement("script")),zh(i,"link",o),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else"stylesheet"===t.type&&!(4&t.state.loading)&&(o=t.instance,t.state.loading|=4,Gp(o,n.precedence,e));return t.instance}function Gp(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,r=i,s=0;s<o.length;s++){var l=o[s];if(l.dataset.precedence===t)r=l;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Qp(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Yp(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Xp=null;function Zp(e,t,n){if(null===Xp){var o=new Map,i=Xp=new Map;i.set(n,o)}else(o=(i=Xp).get(n))||(o=new Map,i.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[dt]||r[it]||"link"===e&&"stylesheet"===r.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==r.namespaceURI){var s=r.getAttribute(t)||"";s=e+s;var l=o.get(s);l?l.push(r):o.set(s,[r])}}return o}function Jp(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function ef(e,t){return"img"===e&&null!=t.src&&""!==t.src&&null==t.onLoad&&"lazy"!==t.loading}function tf(e){return!!("stylesheet"!==e.type||3&e.state.loading)}function nf(e){return(e.width||100)*(e.height||100)*("number"==typeof devicePixelRatio?devicePixelRatio:1)*.25}function of(e,t){"function"==typeof t.decode&&(e.imgCount++,t.complete||(e.imgBytes+=nf(t),e.suspenseyImages.push(t)),e=af.bind(e),t.decode().then(e,e))}var rf=0;function sf(e){if(0===e.count&&(0===e.imgCount||!e.waitingForImages))if(e.stylesheets)uf(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}function lf(){this.count--,sf(this)}function af(){this.imgCount--,sf(this)}var cf=null;function uf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,cf=new Map,t.forEach(df,e),cf=null,lf.call(e))}function df(e,t){if(!(4&t.state.loading)){var n=cf.get(e);if(n)var o=n.get(null);else{n=new Map,cf.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var s=i[r];"LINK"!==s.nodeName&&"not all"===s.getAttribute("media")||(n.set(s.dataset.precedence,s),o=s)}o&&n.set(null,o)}s=(i=t.instance).getAttribute("data-precedence"),(r=n.get(s)||o)===o&&n.set(null,i),n.set(s,i),this.count++,o=lf.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),r?r.parentNode.insertBefore(i,r.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var hf={$$typeof:T,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function pf(e,t,n,o,i,r,s,l,a){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.hiddenUpdates=Ge(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=a,this.transitionTypes=null,this.incompleteTransitions=new Map}function ff(e,t,n,o,i,r){i=function(e){return e?e=ci:ci}(i),null===o.context?o.context=i:o.pendingContext=i,(o=Kr(t)).payload={element:n},null!==(r=void 0===r?null:r)&&(o.callback=r),null!==(n=Gr(e,o,t))&&(hd(n,0,t),Qr(n,e,t))}function vf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function mf(e,t){vf(e,t),(e=e.alternate)&&vf(e,t)}function gf(e){if(13===e.tag||31===e.tag){var t=si(e,67108864);null!==t&&hd(t,0,67108864),mf(e,67108864)}}function bf(e){if(13===e.tag||31===e.tag){var t=cd(),n=si(e,t=Je(t));null!==n&&hd(n,0,t),mf(e,t)}}var yf=!0;function _f(e,t,n,o){var i=Y.T;Y.T=null;var r=X.p;try{X.p=2,wf(e,t,n,o)}finally{X.p=r,Y.T=i}}function xf(e,t,n,o){var i=Y.T;Y.T=null;var r=X.p;try{X.p=8,wf(e,t,n,o)}finally{X.p=r,Y.T=i}}function wf(e,t,n,o){if(yf){var i=kf(o);if(null===i)_h(e,t,o,Sf,n),Rf(e,o);else if(function(e,t,n,o,i){switch(t){case"focusin":return Of=Lf(Of,e,t,n,o,i),!0;case"dragenter":return If=Lf(If,e,t,n,o,i),!0;case"mouseover":return Af=Lf(Af,e,t,n,o,i),!0;case"pointerover":var r=i.pointerId;return zf.set(r,Lf(zf.get(r)||null,e,t,n,o,i)),!0;case"gotpointercapture":return r=i.pointerId,Nf.set(r,Lf(Nf.get(r)||null,e,t,n,o,i)),!0}return!1}(i,e,t,n,o))o.stopPropagation();else if(Rf(e,o),4&t&&-1<Tf.indexOf(e)){for(;null!==i;){var r=vt(i);if(null!==r)switch(r.tag){case 3:if((r=r.stateNode).current.memoizedState.isDehydrated){var s=He(r.pendingLanes);if(0!==s){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;s;){var a=1<<31-Le(s);l.entanglements[1]|=a,s&=~a}th(r),!(6&Pu)&&(Gu=Se()+500,nh(0,!1))}}break;case 31:case 13:null!==(l=si(r,2))&&hd(l,0,2),gd(),mf(r,2)}if(null===(r=kf(o))&&_h(e,t,o,Sf,n),r===i)break;i=r}null!==i&&o.stopPropagation()}else _h(e,t,o,null,n)}}function kf(e){return Cf(e=en(e))}var Sf=null;function Cf(e){if(Sf=null,null!==(e=ft(e))){var t=a(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=d(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sf=e,null}function Ef(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ce()){case Ee:return 2;case Pe:return 8;case Oe:case Ie:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Pf=!1,Of=null,If=null,Af=null,zf=new Map,Nf=new Map,$f=[],Tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rf(e,t){switch(e){case"focusin":case"focusout":Of=null;break;case"dragenter":case"dragleave":If=null;break;case"mouseover":case"mouseout":Af=null;break;case"pointerover":case"pointerout":zf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nf.delete(t.pointerId)}}function Lf(e,t,n,o,i,r){return null===e||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[i]},null!==t&&null!==(t=vt(t))&&gf(t),e):(e.eventSystemFlags|=o,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Df(e){var t=ft(e.target);if(null!==t){var n=a(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void nt(e.priority,function(){bf(n)})}else if(31===t){if(null!==(t=d(n)))return e.blockedOn=t,void nt(e.priority,function(){bf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ff(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=kf(e.nativeEvent);if(null!==n)return null!==(t=vt(n))&&gf(t),e.blockedOn=n,!1;var o=new(n=e.nativeEvent).constructor(n.type,n);Jt=o,n.target.dispatchEvent(o),Jt=null,t.shift()}return!0}function Mf(e,t,n){Ff(e)&&n.delete(t)}function Bf(){Pf=!1,null!==Of&&Ff(Of)&&(Of=null),null!==If&&Ff(If)&&(If=null),null!==Af&&Ff(Af)&&(Af=null),zf.forEach(Mf),Nf.forEach(Mf)}function Vf(e,t){e.blockedOn===t&&(e.blockedOn=null,Pf||(Pf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Bf)))}var Hf=null;function jf(e){Hf!==e&&(Hf=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Hf===e&&(Hf=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],i=e[t+2];if("function"!=typeof o){if(null===Cf(o||n))continue;break}var r=vt(n);null!==r&&(e.splice(t,3),t-=3,zl(r,{pending:!0,data:i,method:n.method,action:o},o,i))}}))}function Uf(e){function t(t){return Vf(t,e)}null!==Of&&Vf(Of,e),null!==If&&Vf(If,e),null!==Af&&Vf(Af,e),zf.forEach(t),Nf.forEach(t);for(var n=0;n<$f.length;n++){var o=$f[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$f.length&&null===(n=$f[0]).blockedOn;)Df(n),null===n.blockedOn&&$f.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(o=0;o<n.length;o+=3){var i=n[o],r=n[o+1],s=i[rt]||null;if("function"==typeof r)s||jf(n);else if(s){var l=null;if(r&&r.hasAttribute("formAction")){if(i=r,s=r[rt]||null)l=s.formAction;else if(null!==Cf(i))continue}else l=s.action;"function"==typeof l?n[o+1]=l:(n.splice(o,3),o-=3),jf(n)}}}function qf(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==i&&(i(),i=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"==typeof navigation){var o=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==i&&(i(),i=null)}}}function Wf(e){this._internalRoot=e}function Kf(e){this._internalRoot=e}Kf.prototype.render=Wf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(s(409));ff(t.current,cd(),e,t,null,null)},Kf.prototype.unmount=Wf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ff(e.current,2,null,e,null,null),gd(),t[st]=null}},Kf.prototype.unstable_scheduleHydration=function(e){if(e){var t=tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$f.length&&0!==t&&t<$f[n].priority;n++);$f.splice(n,0,e),0===n&&Df(e)}};var Gf=o.version;if("19.3.1"!==Gf)throw Error(s(527,Gf,"19.3.1"));X.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(s(188));throw e=Object.keys(e).join(","),Error(s(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=a(e)))throw Error(s(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(null===i)break;var r=i.alternate;if(null===r){if(null!==(o=i.return)){n=o;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return h(i),e;if(r===o)return h(i),t;r=r.sibling}throw Error(s(188))}if(n.return!==o.return)n=i,o=r;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,o=r;break}if(c===o){l=!0,o=i,n=r;break}c=c.sibling}if(!l){for(c=r.child;c;){if(c===n){l=!0,n=r,o=i;break}if(c===o){l=!0,o=r,n=i;break}c=c.sibling}if(!l)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(3!==n.tag)throw Error(s(188));return n.stateNode.current===n?e:t}(t),null===(e=null!==e?p(e):null)?null:e.stateNode};var Qf={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.3.1"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Yf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yf.isDisabled&&Yf.supportsFiber)try{$e=Yf.inject(Qf),Te=Yf}catch(e){}}t.createRoot=function(e,t){if(!(n=e)||1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType)throw Error(s(299));var n,o=!1,i="",r=ea,l=ta,a=na;return null!=t&&(!0===t.unstable_strictMode&&(o=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onUncaughtError&&(r=t.onUncaughtError),void 0!==t.onCaughtError&&(l=t.onCaughtError),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=function(e,t,n,o,i,r,s,l,a,c,u,d){return e=new pf(e,t,n,s,a,c,u,d,l),t=1,!0===r&&(t|=24),r=di(3,null,null,t),e.current=r,r.stateNode=e,(t=hr()).refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:o,isDehydrated:n,cache:t},qr(r),e}(e,1,!1,null,0,o,i,null,r,l,a,qf),e[st]=t.current,bh(e),new Wf(t)}}),n=e((e,t)=>{var n=l();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal"),a=Symbol.for("react.recoverable"),c=Symbol.for("react.optimistic_key"),u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,t.browser=function(e){return{$$typeof:a,_reason:e}},t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==o?null:o===c?c:""+o,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=u.T,n=r.p;try{if(u.T=null,r.p=2,e)return e()}finally{u.T=t,r.p=n,r.d.f()}},t.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,r.d.C(e,t))},t.prefetchDNS=function(e){"string"==typeof e&&r.d.D(e)},t.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,o=d(n,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,s="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?r.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:o,integrity:i,fetchPriority:s}):"script"===n&&r.d.X(e,{crossOrigin:o,integrity:i,fetchPriority:s,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=d(t.as,t.crossOrigin);r.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0})}}else null==t&&r.d.M(e)},t.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,o=d(n,t.crossOrigin);r.d.L(e,n,{crossOrigin:o,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=d(t.as,t.crossOrigin);r.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0})}else r.d.m(e)},t.requestFormReset=function(e){r.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},t.useFormStatus=function(){return u.H.useHostTransitionStatus()},t.version="19.3.1"}),o=e(e=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=t()}),i=e(e=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n()}),r=e((e,t)=>{var n=Symbol.for("react.transitional.element");function o(e,t,o){var i=null;if(void 0!==o&&(i=""+o),void 0!==t.key&&(i=""+t.key),"key"in t)for(var r in o={},t)"key"!==r&&(o[r]=t[r]);else o=t;return t=o.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:o}}Symbol.for("react.fragment"),t.jsx=o,t.jsxs=o}),s=e((e,t)=>{var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),f=Symbol.for("react.view_transition"),v=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function _(){}function x(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=y.prototype;var w=x.prototype=new _;w.constructor=x,g(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function P(e,t,o){var i=o.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==i?i:null,props:o}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,o={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return o[e]})):t.toString(36);var n,o}function z(e,t,i,r,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var a,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case o:u=!0;break;case h:return z((u=e._init)(e._payload),t,i,r,s)}}if(u)return s=s(e),u=""===r?"."+A(e,0):r,k(s)?(i="",null!=u&&(i=u.replace(I,"$&/")+"/"),z(s,t,i,"",function(e){return e})):null!=s&&(O(s)&&(a=s,c=i+(null==s.key||e&&e.key===s.key?"":(""+s.key).replace(I,"$&/")+"/")+u,s=P(a.type,c,a.props)),t.push(s)),1;u=0;var d,p=""===r?".":r+":";if(k(e))for(var f=0;f<e.length;f++)u+=z(r=e[f],t,i,l=p+A(r,f),s);else if("function"==typeof(f=null===(d=e)||"object"!=typeof d?null:"function"==typeof(d=v&&d[v]||d["@@iterator"])?d:null))for(e=f.call(e),f=0;!(r=e.next()).done;)u+=z(r=r.value,t,i,l=p+A(r,f++),s);else if("object"===l){if("function"==typeof e.then)return z(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(S,S):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,r,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function N(e,t,n){if(null==e)return e;var o=[],i=0;return z(e,o,"","",function(e){return t.call(n,e,i++)}),o}function $(e){if(-1===e._status){var t=(0,e._result)();t.then(function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n,void 0===t.status&&(t.status="fulfilled",t.value=n))},function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n,void 0===t.status&&(t.status="rejected",t.reason=n))}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(e){var t=C.T,n={};n.types=null!==t?t.types:null,C.T=n;try{var o=e(),i=C.S;null!==i&&i(n,o),"object"==typeof o&&null!==o&&"function"==typeof o.then&&o.then(S,T)}catch(e){T(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),C.T=t}}var L={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=L,t.Component=y,t.Fragment=i,t.Profiler=s,t.PureComponent=x,t.StrictMode=r,t.Suspense=u,t.ViewTransition=f,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},t.addTransitionType=function e(t){var n=C.T;if(null!==n){var o=n.types;null===o?n.types=[t]:-1===o.indexOf(t)&&o.push(t)}else R(e.bind(null,t))},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var o=g({},e.props),i=e.key;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)!E.call(t,r)||"key"===r||"__self"===r||"__source"===r||"ref"===r&&void 0===t.ref||(o[r]=t[r]);var r=arguments.length-2;if(1===r)o.children=n;else if(1<r){for(var s=Array(r),l=0;l<r;l++)s[l]=arguments[l+2];o.children=s}return P(e.type,i,o)},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var o,i={},r=null;if(null!=t)for(o in void 0!==t.key&&(r=""+t.key),t)E.call(t,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+2];i.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return P(e,r,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=R,t.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},t.use=function(e){return C.H.use(e)},t.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},t.useCallback=function(e,t){return C.H.useCallback(e,t)},t.useContext=function(e){return C.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return C.H.useEffect(e,t)},t.useEffectEvent=function(e){return C.H.useEffectEvent(e)},t.useId=function(){return C.H.useId()},t.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.H.useMemo(e,t)},t.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},t.useRef=function(e){return C.H.useRef(e)},t.useState=function(e){return C.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.H.useTransition()},t.version="19.3.1"}),l=e(e=>{e.exports=s()}),a=e(e=>{e.exports=r()}),c=e((e,t)=>{function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var o=n-1>>>1,i=e[o];if(!(0<r(i,t)))break e;e[o]=t,e[n]=i,n=o}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,i=e.length,s=i>>>1;o<s;){var l=2*(o+1)-1,a=e[l],c=l+1,u=e[c];if(0>r(a,n))c<i&&0>r(u,a)?(e[o]=u,e[c]=n,o=c):(e[o]=a,e[l]=n,o=l);else{if(!(c<i&&0>r(u,n)))break e;e[o]=u,e[c]=n,o=c}}}return t}function r(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var c=[],u=[],d=1,h=null,p=3,f=!1,v=!1,m=!1,g=!1,b="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,_="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var t=o(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=o(u)}}function w(e){if(m=!1,x(e),!v)if(null!==o(c))v=!0,S||(S=!0,k());else{var t=o(u);null!==t&&N(w,t.startTime-e)}}var k,S=!1,C=-1,E=5,P=-1;function O(){return!(!g&&t.unstable_now()-P<E)}function I(){if(g=!1,S){var e=t.unstable_now();P=e;var n=!0;try{e:{v=!1,m&&(m=!1,y(C),C=-1),f=!0;var r=p;try{t:{for(x(e),h=o(c);null!==h&&!(h.expirationTime>e&&O());){var s=h.callback;if("function"==typeof s){h.callback=null,p=h.priorityLevel;var l=s(h.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){h.callback=l,x(e),n=!0;break t}h===o(c)&&i(c),x(e)}else i(c);h=o(c)}if(null!==h)n=!0;else{var a=o(u);null!==a&&N(w,a.startTime-e),n=!1}}break e}finally{h=null,p=r,f=!1}n=void 0}}finally{n?k():S=!1}}}if("function"==typeof _)k=function(){_(I)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,z=A.port2;A.port1.onmessage=I,k=function(){z.postMessage(null)}}else k=function(){b(I,0)};function N(e,n){C=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){g=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,r){var s=t.unstable_now();switch(r="object"==typeof r&&null!==r&&"number"==typeof(r=r.delay)&&0<r?s+r:s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:r,expirationTime:l=r+l,sortIndex:-1},r>s?(e.sortIndex=r,n(u,e),null===o(c)&&e===o(u)&&(m?(y(C),C=-1):m=!0,N(w,r-s))):(e.sortIndex=l,n(c,e),v||f||(v=!0,S||(S=!0,k()))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}}),u=e(e=>{e.exports=c()});l(),o();const d=new Set(["children","localName","ref","style","className"]),h=new WeakMap,p=(e,t,n,o,i)=>{const r=i?.[t];void 0===r?(e[t]=n,null==n&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==o&&((e,t,n)=>{let o=h.get(e);void 0===o&&h.set(e,o=new Map);let i=o.get(t);void 0!==n?void 0===i?(o.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n:void 0!==i&&(o.delete(t),e.removeEventListener(t,i))})(e,r,n)},f=({react:e,tagName:t,elementClass:n,events:o,displayName:i})=>{const r=new Set(Object.keys(o??{})),s=e.forwardRef((i,s)=>{const l=e.useRef(new Map),a=e.useRef(null),c={},u={};for(const[e,t]of Object.entries(i))d.has(e)?c["className"===e?"class":e]=t:r.has(e)||e in n.prototype?u[e]=t:c[e]=t;return e.useLayoutEffect(()=>{if(null===a.current)return;const e=new Map;for(const t in u)p(a.current,t,i[t],l.current.get(t),o),l.current.delete(t),e.set(t,i[t]);for(const[e,t]of l.current)p(a.current,e,void 0,t,o);l.current=e}),e.useLayoutEffect(()=>{a.current?.removeAttribute("defer-hydration")},[]),c.suppressHydrationWarning=!0,e.createElement(t,{...c,ref:e.useCallback(e=>{a.current=e,"function"==typeof s?s(e):null!==s&&(s.current=e)},[s])})});return s.displayName=i??n.name,s},v=globalThis,m=v.ShadowRoot&&(void 0===v.ShadyCSS||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,g=Symbol(),b=new WeakMap;class y{constructor(e,t,n){if(this._$cssResult$=!0,n!==g)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(m&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=b.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&b.set(t,e))}return e}toString(){return this.cssText}}const _=e=>new y("string"==typeof e?e:e+"",void 0,g),x=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new y(n,e,g)},w=m?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:k,defineProperty:S,getOwnPropertyDescriptor:C,getOwnPropertyNames:E,getOwnPropertySymbols:P,getPrototypeOf:O}=Object,I=globalThis,A=I.trustedTypes,z=A?A.emptyScript:"",N=I.reactiveElementPolyfillSupport,$=(e,t)=>e,T={toAttribute(e,t){switch(t){case Boolean:e=e?z:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},R=(e,t)=>!k(e,t),L={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:R};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;class D extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=L){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&S(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:i}=C(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const r=o?.call(this);i?.call(this,t),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??L}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=O(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const e=this.properties,t=[...E(e),...P(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(w(e))}else void 0!==e&&t.push(w(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(m)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of t){const t=document.createElement("style"),o=v.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:T).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:T;this._$Em=o;const r=i.fromAttribute(t,e.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(void 0!==e){const r=this.constructor;if(!1===o&&(i=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??R)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==i||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[$("elementProperties")]=new Map,D[$("finalized")]=new Map,N?.({ReactiveElement:D}),(I.reactiveElementVersions??=[]).push("2.1.2");const F=globalThis,M=e=>e,B=F.trustedTypes,V=B?B.createPolicy("lit-html",{createHTML:e=>e}):void 0,H="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+j,q=`<${U}>`,W=document,K=()=>W.createComment(""),G=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Q=Array.isArray,Y=e=>Q(e)||"function"==typeof e?.[Symbol.iterator],X="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,ee=/>/g,te=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,oe=/"/g,ie=/^(?:script|style|textarea|title)$/i,re=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),se=re(1),le=re(2),ae=(re(3),Symbol.for("lit-noChange")),ce=Symbol.for("lit-nothing"),ue=new WeakMap,de=W.createTreeWalker(W,129);function he(e,t){if(!Q(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==V?V.createHTML(t):t}const pe=(e,t)=>{const n=e.length-1,o=[];let i,r=2===t?"<svg>":3===t?"<math>":"",s=Z;for(let t=0;t<n;t++){const n=e[t];let l,a,c=-1,u=0;for(;u<n.length&&(s.lastIndex=u,a=s.exec(n),null!==a);)u=s.lastIndex,s===Z?"!--"===a[1]?s=J:void 0!==a[1]?s=ee:void 0!==a[2]?(ie.test(a[2])&&(i=RegExp("</"+a[2],"g")),s=te):void 0!==a[3]&&(s=te):s===te?">"===a[0]?(s=i??Z,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?te:'"'===a[3]?oe:ne):s===oe||s===ne?s=te:s===J||s===ee?s=Z:(s=te,i=void 0);const d=s===te&&e[t+1].startsWith("/>")?" ":"";r+=s===Z?n+q:c>=0?(o.push(l),n.slice(0,c)+H+n.slice(c)+j+d):n+j+(-2===c?t:d)}return[he(e,r+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class fe{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,r=0;const s=e.length-1,l=this.parts,[a,c]=pe(e,t);if(this.el=fe.createElement(a,n),de.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=de.nextNode())&&l.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(H)){const t=c[r++],n=o.getAttribute(e).split(j),s=/([.?@])?(.*)/.exec(t);l.push({type:1,index:i,name:s[2],strings:n,ctor:"."===s[1]?ye:"?"===s[1]?_e:"@"===s[1]?xe:be}),o.removeAttribute(e)}else e.startsWith(j)&&(l.push({type:6,index:i}),o.removeAttribute(e));if(ie.test(o.tagName)){const e=o.textContent.split(j),t=e.length-1;if(t>0){o.textContent=B?B.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],K()),de.nextNode(),l.push({type:2,index:++i});o.append(e[t],K())}}}else if(8===o.nodeType)if(o.data===U)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(j,e+1));)l.push({type:7,index:i}),e+=j.length-1}i++}}static createElement(e,t){const n=W.createElement("template");return n.innerHTML=e,n}}function ve(e,t,n=e,o){if(t===ae)return t;let i=void 0!==o?n._$Co?.[o]:n._$Cl;const r=G(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=i:n._$Cl=i),void 0!==i&&(t=ve(e,i._$AS(e,t.values),i,o)),t}class me{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??W).importNode(t,!0);de.currentNode=o;let i=de.nextNode(),r=0,s=0,l=n[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new ge(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new we(i,this,e)),this._$AV.push(t),l=n[++s]}r!==l?.index&&(i=de.nextNode(),r++)}return de.currentNode=W,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ge{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=ce,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ve(this,e,t),G(e)?e===ce||null==e||""===e?(this._$AH!==ce&&this._$AR(),this._$AH=ce):e!==this._$AH&&e!==ae&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Y(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ce&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=fe.createElement(he(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new me(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ue.get(e.strings);return void 0===t&&ue.set(e.strings,t=new fe(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const i of e)o===t.length?t.push(n=new ge(this.O(K()),this.O(K()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=M(e).nextSibling;M(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=ce,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ce}_$AI(e,t=this,n,o){const i=this.strings;let r=!1;if(void 0===i)e=ve(this,e,t,0),r=!G(e)||e!==this._$AH&&e!==ae,r&&(this._$AH=e);else{const o=e;let s,l;for(e=i[0],s=0;s<i.length-1;s++)l=ve(this,o[n+s],t,s),l===ae&&(l=this._$AH[s]),r||=!G(l)||l!==this._$AH[s],l===ce?e=ce:e!==ce&&(e+=(l??"")+i[s+1]),this._$AH[s]=l}r&&!o&&this.j(e)}j(e){e===ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ye extends be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ce?void 0:e}}class _e extends be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ce)}}class xe extends be{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=ve(this,e,t,0)??ce)===ae)return;const n=this._$AH,o=e===ce&&n!==ce||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==ce&&(n===ce||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class we{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}}const ke={M:H,P:j,A:U,C:1,L:pe,R:me,D:Y,V:ve,I:ge,H:be,N:_e,U:xe,B:ye,F:we},Se=F.litHtmlPolyfillSupport;Se?.(fe,ge),(F.litHtmlVersions??=[]).push("3.3.3");const Ce=(e,t,n)=>{const o=n?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=n?.renderBefore??null;o._$litPart$=i=new ge(t.insertBefore(K(),e),e,void 0,n??{})}return i._$AI(e),i},Ee=globalThis;class Pe extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}}Pe._$litElement$=!0,Pe.finalized=!0,Ee.litElementHydrateSupport?.({LitElement:Pe});const Oe=Ee.litElementPolyfillSupport;Oe?.({LitElement:Pe}),(Ee.litElementVersions??=[]).push("4.2.2");const Ie={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:R},Ae=(e=Ie,t,n)=>{const{kind:o,metadata:i}=n;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),r.set(n.name,e),"accessor"===o){const{name:o}=n;return{set(n){const i=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,i,e,!0,n)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=n;return function(n){const i=this[o];t.call(this,n),this.requestUpdate(o,i,e,!0,n)}}throw Error("Unsupported decorator location: "+o)};function ze(e){return(t,n)=>"object"==typeof n?Ae(e,t,n):((e,t,n)=>{const o=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),o?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Ne(e){return ze({...e,state:!0,attribute:!1})}const $e=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,n),n);function Te(e,t){return(n,o,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?n:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return $e(n,o,{get(){let n=e.call(this);return void 0===n&&(n=r(this),(null!==n||this.hasUpdated)&&t.call(this,n)),n}})}return $e(n,o,{get(){return r(this)}})}}let Re;function Le(e){return(t,n)=>{const{slot:o,selector:i}=e??{},r="slot"+(o?`[name=${o}]`:":not([name])");return $e(t,n,{get(){const t=this.renderRoot?.querySelector(r),n=t?.assignedElements(e)??[];return void 0===i?n:n.filter(e=>e.matches(i))}})}}const De="2.5.1",Fe="__vscodeElements_disableRegistryWarning__",Me=(e,t)=>{t?console.warn(`[VSCode Elements] ${e}\n%o`,t):console.warn(`${e}\n%o`,t)};class Be extends Pe{get version(){return De}warn(e){Me(e,this)}}const Ve=e=>t=>{if(!customElements.get(e))return void customElements.define(e,t);if(Fe in window)return;const n=document.createElement(e),o=n?.version;let i="";o?o!==De?(i+="is already registered by a different version of VSCode Elements. ",i+=`This version is "${De}", while the other one is "${o}".`):i+=`is already registered by the same version of VSCode Elements (${De}).`:i+="is already registered by an unknown custom element handler class.",Me(`The custom element "${e}" ${i}\nTo suppress this warning, set window.${Fe} to true`)},He=x`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;function je(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const Ue=[He,x`
    :host {
      display: inline-block;
    }

    .root {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: block;
      font-family: var(--vscode-font-family, ${_(je())});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) .root {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) .root {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) .root {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `];var qe=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let We=class extends Be{constructor(){super(...arguments),this.variant="default"}render(){return se`<div class="root"><slot></slot></div>`}};We.styles=Ue,qe([ze({reflect:!0})],We.prototype,"variant",void 0),We=qe([Ve("vscode-badge")],We);const Ke=f({tagName:"vscode-badge",elementClass:We,react:l(),displayName:"VscodeBadge"}),Ge=e=>(...t)=>({_$litDirective$:e,values:t});class Qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Ye=Ge(class extends Qe{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ae}}),Xe=e=>e??ce,Ze=Ge(class extends Qe{constructor(e){if(super(e),this._prevProperties={},3!==e.type||"style"!==e.name)throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[t]){return Object.entries(t).forEach(([t,n])=>{this._prevProperties[t]!==n&&(t.startsWith("--")?e.element.style.setProperty(t,n):e.element.style[t]=n,this._prevProperties[t]=n)}),ae}render(e){return ae}}),Je=[He,x`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var et,tt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let nt=et=class extends Be{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:t}=this._getStylesheetConfig();et.stylesheetHref=e,et.nonce=t}_getStylesheetConfig(){if("undefined"==typeof document)return{nonce:void 0,href:void 0};const e=document.getElementById("vscode-codicon-stylesheet"),t=e?.getAttribute("href")||void 0,n=e?.nonce||void 0;if(!e){let e='To use the Icon component, the codicons.css file must be included in the page with the id "vscode-codicon-stylesheet"! ';e+="See https://vscode-elements.github.io/components/icon/ for more details.",this.warn(e)}return{nonce:n,href:t}}render(){const{stylesheetHref:e,nonce:t}=et,n=se`<span
      class=${Ye({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${Ze({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,o=this.actionIcon?se` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${n}
        </button>`:se` <span class="icon" aria-hidden="true" role="presentation"
          >${n}</span
        >`;return se`
      <link
        rel="stylesheet"
        href=${Xe(e)}
        nonce=${Xe(t)}
      />
      ${o}
    `}};nt.styles=Je,nt.stylesheetHref="",nt.nonce="",tt([ze()],nt.prototype,"label",void 0),tt([ze({type:String})],nt.prototype,"name",void 0),tt([ze({type:Number})],nt.prototype,"size",void 0),tt([ze({type:Boolean,reflect:!0})],nt.prototype,"spin",void 0),tt([ze({type:Number,attribute:"spin-duration"})],nt.prototype,"spinDuration",void 0),tt([ze({type:Boolean,reflect:!0,attribute:"action-icon"})],nt.prototype,"actionIcon",void 0),nt=et=tt([Ve("vscode-icon")],nt);const ot=[He,x`
    :host {
      cursor: pointer;
      display: inline-block;
      width: auto;
    }

    :host([block]) {
      display: block;
      width: 100%;
    }

    .base {
      align-items: center;
      background-color: var(--vscode-button-background, #0078d4);
      border-bottom-left-radius: var(--vsc-border-left-radius, 4px);
      border-bottom-right-radius: var(--vsc-border-right-radius, 4px);
      border-bottom-width: 1px;
      border-color: var(--vscode-button-border, transparent);
      border-left-width: var(--vsc-border-left-width, 1px);
      border-right-width: var(--vsc-border-right-width, 1px);
      border-style: solid;
      border-top-left-radius: var(--vsc-border-left-radius, 4px);
      border-top-right-radius: var(--vsc-border-right-radius, 4px);
      border-top-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-button-foreground, #ffffff);
      display: flex;
      font-family: var(--vscode-font-family, ${_(je())});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      justify-content: center;
      line-height: 22px;
      overflow: hidden;
      padding: 1px calc(13px + var(--vsc-base-additional-right-padding, 0px))
        1px 13px;
      position: relative;
      user-select: none;
      white-space: nowrap;
      width: 100%;
    }

    :host([block]) .base {
      min-height: 28px;
      text-align: center;
      width: 100%;
    }

    .base:after {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      content: var(--vsc-base-after-content);
      display: var(--vsc-divider-display, none);
      position: absolute;
      right: 0;
      top: 4px;
      bottom: 4px;
      width: 1px;
    }

    :host([secondary]) .base:after {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }

    :host([secondary]) .base {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) .base {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) .base {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) .base {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) .base {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) .base {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) .base {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) .base {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) .base {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .content {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .base,
    .base.icon-only {
      min-height: 24px;
      min-width: 26px;
      padding: 1px 4px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .has-content-before slot[name='content-before'] {
      margin-right: 4px;
    }

    .has-content-after slot[name='content-after'] {
      margin-left: 4px;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }
  `];var it=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let rt=class extends Be{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.block=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._hasContentBefore=!1,this._hasContentAfter=!1,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){"submit"===this.type&&this._internals.form&&this._internals.form.requestSubmit(),"reset"===this.type&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if(("Enter"===e.key||" "===e.key)&&!this.hasAttribute("disabled")){const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});e.synthetic=!0,this.dispatchEvent(e),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||this._executeAction()}_handleSlotChange(e){const t=e.target;"content-before"===t.name&&(this._hasContentBefore=t.assignedElements().length>0),"content-after"===t.name&&(this._hasContentAfter=t.assignedElements().length>0)}render(){const e=""!==this.icon,t=""!==this.iconAfter,n={base:!0,"icon-only":this.iconOnly,"has-content-before":this._hasContentBefore,"has-content-after":this._hasContentAfter},o=e?se`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${Xe(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:ce,i=t?se`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${Xe(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:ce;return se`
      <div
        class=${Ye(n)}
        part="base"
        @slotchange=${this._handleSlotChange}
      >
        <slot name="content-before"></slot>
        ${o}
        <slot></slot>
        ${i}
        <slot name="content-after"></slot>
      </div>
    `}};rt.styles=ot,rt.formAssociated=!0,it([ze({type:Boolean,reflect:!0})],rt.prototype,"autofocus",void 0),it([ze({type:Number,reflect:!0})],rt.prototype,"tabIndex",void 0),it([ze({type:Boolean,reflect:!0})],rt.prototype,"secondary",void 0),it([ze({type:Boolean,reflect:!0})],rt.prototype,"block",void 0),it([ze({reflect:!0})],rt.prototype,"role",void 0),it([ze({type:Boolean,reflect:!0})],rt.prototype,"disabled",void 0),it([ze()],rt.prototype,"icon",void 0),it([ze({type:Boolean,reflect:!0,attribute:"icon-spin"})],rt.prototype,"iconSpin",void 0),it([ze({type:Number,reflect:!0,attribute:"icon-spin-duration"})],rt.prototype,"iconSpinDuration",void 0),it([ze({attribute:"icon-after"})],rt.prototype,"iconAfter",void 0),it([ze({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],rt.prototype,"iconAfterSpin",void 0),it([ze({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],rt.prototype,"iconAfterSpinDuration",void 0),it([ze({type:Boolean,reflect:!0})],rt.prototype,"focused",void 0),it([ze({type:String,reflect:!0})],rt.prototype,"name",void 0),it([ze({type:Boolean,reflect:!0,attribute:"icon-only"})],rt.prototype,"iconOnly",void 0),it([ze({reflect:!0})],rt.prototype,"type",void 0),it([ze()],rt.prototype,"value",void 0),it([Ne()],rt.prototype,"_hasContentBefore",void 0),it([Ne()],rt.prototype,"_hasContentAfter",void 0),rt=it([Ve("vscode-button")],rt);const st=f({tagName:"vscode-button",elementClass:rt,react:l(),displayName:"VscodeButton"}),lt=[He,x`
    :host {
      display: inline-block;
    }

    .root {
      align-items: stretch;
      display: flex;
      width: 100%;
    }

    ::slotted(vscode-button:not(:first-child)) {
      --vsc-border-left-width: 0;
      --vsc-border-left-radius: 0;
      --vsc-border-left-width: 0;
    }

    ::slotted(vscode-button:not(:last-child)) {
      --vsc-divider-display: block;
      --vsc-base-additional-right-padding: 1px;
      --vsc-base-after-content: '';
      --vsc-border-right-width: 0;
      --vsc-border-right-radius: 0;
      --vsc-border-right-width: 0;
    }

    ::slotted(vscode-button:focus) {
      z-index: 1;
    }

    ::slotted(vscode-button:not(:empty)) {
      width: 100%;
    }
  `];let at=class extends Be{render(){return se`<div class="root"><slot></slot></div>`}};at.styles=lt,at=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}([Ve("vscode-button-group")],at),f({tagName:"vscode-button-group",elementClass:at,react:l(),displayName:"VscodeButtonGroup"});class ct extends Be{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"disabled"===e&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):"disabled"!==e||this.hasAttribute("disabled")||(this.tabIndex=this._prevTabindex)}}!function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);r>3&&s&&Object.defineProperty(t,n,s)}([ze({type:Boolean,reflect:!0})],ct.prototype,"focused",void 0);const ut=e=>{class t extends e{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(e){this._label=e,""===this._slottedText&&this.setAttribute("aria-label",e)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",""!==this._slottedText&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return""===this._slottedText?se`<span class="label-attr">${this._label}</span>`:se`${ce}`}}return function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);r>3&&s&&Object.defineProperty(t,n,s)}([ze()],t.prototype,"label",null),t},dt=[x`
    :host {
      display: inline-block;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      left: 9px;
      margin: 0;
      overflow: hidden;
      position: absolute;
      top: 17px;
      white-space: nowrap;
      width: 1px;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],ht=[He,dt,x`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    /* Toggle appearance */
    :host([toggle]) .icon {
      /* Track */
      width: 36px;
      height: 20px;
      border-radius: 999px;
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(--vscode-button-border, transparent);
      justify-content: flex-start;
      position: absolute;
    }

    :host(:focus):host([toggle]):host(:not([disabled])) .icon {
      outline-offset: 2px;
    }

    /* Reserve space for the wider toggle track so text doesn't overlap */
    :host([toggle]) .label-inner {
      padding-left: 45px; /* 36px track + 9px spacing */
    }

    :host([toggle]) .label {
      min-height: 20px;
    }

    :host([toggle]) .wrapper {
      min-height: 20px;
      line-height: 20px;
    }

    :host([toggle]) .thumb {
      /* Thumb */
      box-sizing: border-box;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      margin-left: 1px;
      transition: transform 120ms ease-in-out;
    }

    :host([toggle][checked]) .icon {
      background-color: var(--vscode-button-background, #04395e);
      border-color: var(--vscode-button-border, transparent);
    }

    :host([toggle][checked]) .thumb {
      transform: translateX(16px);
      background-color: var(--vscode-button-foreground, #ffffff);
    }

    :host([toggle]):host(:invalid) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([toggle]):host(:invalid) .thumb {
      background-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([toggle]) .check-icon,
    :host([toggle]) .indeterminate-icon {
      display: none;
    }

    :host([toggle]:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var pt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ft=class extends(ut(ct)){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.toggle=!1,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),this.disabled||this._toggleState()},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "===e.key&&this._toggleState(),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,t){e&&(this.checked=!0)}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=Ye({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),t=Ye({"label-inner":!0}),n=se`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,o=this.checked&&!this.indeterminate?n:ce,i=this.indeterminate?se`<span class="indeterminate-icon"></span>`:ce,r=this.toggle?se`<span class="thumb"></span>`:se`${i}${o}`;return se`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          role=${Xe(this.toggle?"switch":void 0)}
          aria-checked=${Xe(this.toggle?this.checked?"true":"false":void 0)}
          value=${this.value}
        />
        <div class=${e}>${r}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${t}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};ft.styles=ht,ft.formAssociated=!0,ft.shadowRootOptions={...Pe.shadowRootOptions,delegatesFocus:!0},pt([ze({type:Boolean,reflect:!0})],ft.prototype,"autofocus",void 0),pt([ze({type:Boolean,reflect:!0})],ft.prototype,"checked",null),pt([ze({type:Boolean,reflect:!0,attribute:"default-checked"})],ft.prototype,"defaultChecked",void 0),pt([ze({type:Boolean,reflect:!0})],ft.prototype,"invalid",void 0),pt([ze({reflect:!0})],ft.prototype,"name",void 0),pt([ze({type:Boolean,reflect:!0})],ft.prototype,"toggle",void 0),pt([ze()],ft.prototype,"value",void 0),pt([ze({type:Boolean,reflect:!0})],ft.prototype,"disabled",void 0),pt([ze({type:Boolean,reflect:!0})],ft.prototype,"indeterminate",void 0),pt([ze({type:Boolean,reflect:!0})],ft.prototype,"required",null),pt([ze()],ft.prototype,"type",void 0),pt([Te("#input")],ft.prototype,"_inputEl",void 0),ft=pt([Ve("vscode-checkbox")],ft),f({tagName:"vscode-checkbox",elementClass:ft,react:l(),displayName:"VscodeCheckbox",events:{onChange:"change"}});const vt=[He,x`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `];var mt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let gt=class extends Be{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return se`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};gt.styles=vt,mt([ze({reflect:!0})],gt.prototype,"role",void 0),mt([ze({reflect:!0})],gt.prototype,"variant",void 0),gt=mt([Ve("vscode-checkbox-group")],gt),f({tagName:"vscode-checkbox-group",elementClass:gt,react:l(),displayName:"VscodeCheckboxGroup"});const bt=[He,x`
    :host {
      display: block;
    }

    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions.always-visible,
    .collapsible.open:hover .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var yt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let _t=class extends Be{constructor(){super(...arguments),this.alwaysShowHeaderActions=!1,this.title="",this.heading="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){"Enter"===e.key&&(this.open=!this.open,this._emitToggleEvent())}_onHeaderSlotClick(e){e.stopPropagation()}render(){const e={collapsible:!0,open:this.open},t={actions:!0,"always-visible":this.alwaysShowHeaderActions},n=this.heading?this.heading:this.title,o=se`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,i=this.description?se`<span class="description">${this.description}</span>`:ce;return se`
      <div class=${Ye(e)}>
        <div
          class="collapsible-header"
          tabindex="0"
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${o}
          <h3 class="title">${n}${i}</h3>
          <div class="header-slots">
            <div class=${Ye(t)}>
              <slot name="actions" @click=${this._onHeaderSlotClick}></slot>
            </div>
            <div class="decorations">
              <slot name="decorations" @click=${this._onHeaderSlotClick}></slot>
            </div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};_t.styles=bt,yt([ze({type:Boolean,reflect:!0,attribute:"always-show-header-actions"})],_t.prototype,"alwaysShowHeaderActions",void 0),yt([ze({type:String})],_t.prototype,"title",void 0),yt([ze()],_t.prototype,"heading",void 0),yt([ze()],_t.prototype,"description",void 0),yt([ze({type:Boolean,reflect:!0})],_t.prototype,"open",void 0),_t=yt([Ve("vscode-collapsible")],_t),f({tagName:"vscode-collapsible",elementClass:_t,react:l(),displayName:"VscodeCollapsible"});const xt=[He,x`
    :host {
      display: block;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var wt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let kt=class extends Be{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return se`
      ${this.separator?se`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:se`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?se`<span class="label">${this.label}</span>`:ce}
                ${this.keybinding?se`<span class="keybinding">${this.keybinding}</span>`:ce}
              </a>
            </div>
          `}
    `}};kt.styles=xt,wt([ze({type:String})],kt.prototype,"label",void 0),wt([ze({type:String})],kt.prototype,"keybinding",void 0),wt([ze({type:String})],kt.prototype,"value",void 0),wt([ze({type:Boolean,reflect:!0})],kt.prototype,"separator",void 0),wt([ze({type:Number})],kt.prototype,"tabindex",void 0),kt=wt([Ve("vscode-context-menu-item")],kt);const St=[He,x`
    :host {
      display: block;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var Ct=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Et=class extends Be{set data(e){this._data=e;const t=[];e.forEach((e,n)=>{e.separator||t.push(n)}),this._clickableItemIndexes=t}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:t}=e;switch("ArrowUp"!==t&&"ArrowDown"!==t&&"Escape"!==t&&"Enter"!==t||e.preventDefault(),t){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter()}}_handleArrowUp(){0===this._selectedClickableItemIndex?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:t,label:n,value:o,separator:i,tabindex:r}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:t,label:n,separator:i,tabindex:r,value:o}}))}_handleEnter(){if(-1===this._selectedClickableItemIndex)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],t=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchSelectEvent(t),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const t=e.currentTarget;this._dispatchSelectEvent(t),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const t=e.target,n=t.dataset.index?+t.dataset.index:-1,o=this._clickableItemIndexes.findIndex(e=>e===n);-1!==o&&(this._selectedClickableItemIndex=o)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return se`${ce}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return se`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:t="",keybinding:n="",value:o="",separator:i=!1,tabindex:r=0},s)=>se`
                <vscode-context-menu-item
                  label=${t}
                  keybinding=${n}
                  value=${o}
                  ?separator=${i}
                  ?selected=${s===e}
                  tabindex=${r}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${s}
                ></vscode-context-menu-item>
              `):se`<slot></slot>`}
      </div>
    `}};Et.styles=St,Ct([ze({type:Array,attribute:!1})],Et.prototype,"data",null),Ct([ze({type:Boolean,reflect:!0,attribute:"prevent-close"})],Et.prototype,"preventClose",void 0),Ct([ze({type:Boolean,reflect:!0})],Et.prototype,"show",null),Ct([ze({type:Number,reflect:!0})],Et.prototype,"tabIndex",void 0),Ct([Ne()],Et.prototype,"_selectedClickableItemIndex",void 0),Ct([Ne()],Et.prototype,"_show",void 0),Ct([Te(".context-menu")],Et.prototype,"_wrapperEl",void 0),Et=Ct([Ve("vscode-context-menu")],Et),f({tagName:"vscode-context-menu",elementClass:Et,react:l(),displayName:"VscodeContextMenu",events:{onVscContextMenuSelect:"vsc-context-menu-select"}}),f({tagName:"vscode-context-menu-item",elementClass:kt,react:l(),displayName:"VscodeContextMenuItem"});const Pt=[He,x`
    :host {
      display: block;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    div {
      background-color: var(--vscode-foreground, #cccccc);
      height: 1px;
      opacity: 0.4;
    }
  `];var Ot=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let It=class extends Be{constructor(){super(...arguments),this.role="separator"}render(){return se`<div></div>`}};It.styles=Pt,Ot([ze({reflect:!0})],It.prototype,"role",void 0),It=Ot([Ve("vscode-divider")],It),f({tagName:"vscode-divider",elementClass:It,react:l(),displayName:"VscodeDivider"});const At=[He,x`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var zt,Nt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};!function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(zt||(zt={}));let $t=class extends Be{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}_toggleCompactLayout(e){this._assignedFormGroups.forEach(t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const n=t.dataset.originalVariant;e===zt.VERTICAL&&"horizontal"===n?t.variant="vertical":t.variant=n,t.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const n=t.dataset.originalVariant;e===zt.HORIZONTAL&&n===zt.HORIZONTAL?t.variant="horizontal":t.variant="vertical"})})}_resizeObserverCallback(e){let t=0;for(const n of e)t=n.contentRect.width;const n=t<this.breakpoint?zt.VERTICAL:zt.HORIZONTAL;n!==this._currentFormGroupLayout&&(this._toggleCompactLayout(n),this._currentFormGroupLayout=n)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){this._resizeObserver?.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return se`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};$t.styles=At,Nt([ze({type:Boolean,reflect:!0})],$t.prototype,"responsive",null),Nt([ze({type:Number})],$t.prototype,"breakpoint",void 0),Nt([Te(".wrapper")],$t.prototype,"_wrapperElement",void 0),Nt([Le({selector:"vscode-form-group"})],$t.prototype,"_assignedFormGroups",void 0),$t=Nt([Ve("vscode-form-container")],$t),f({tagName:"vscode-form-container",elementClass:$t,react:l(),displayName:"VscodeFormContainer"});const Tt=[He,x`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var Rt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Lt=class extends Be{constructor(){super(...arguments),this.variant="horizontal"}render(){return se`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Lt.styles=Tt,Rt([ze({reflect:!0})],Lt.prototype,"variant",void 0),Lt=Rt([Ve("vscode-form-group")],Lt),f({tagName:"vscode-form-group",elementClass:Lt,react:l(),displayName:"VscodeFormGroup"});const Dt=[He,x`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `];let Ft;"undefined"!=typeof CSSStyleSheet&&(Ft=new CSSStyleSheet,Ft.replaceSync("\n    vscode-form-helper * {\n      margin: 0;\n    }\n\n    vscode-form-helper *:not(:last-child) {\n      margin-bottom: 8px;\n    }\n  "));let Mt=class extends Be{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){"undefined"!=typeof document&&Ft&&(document.adoptedStyleSheets.find(e=>e===Ft)||document.adoptedStyleSheets.push(Ft))}render(){return se`<slot></slot>`}};Mt.styles=Dt,Mt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}([Ve("vscode-form-helper")],Mt),f({tagName:"vscode-form-helper",elementClass:Mt,react:l(),displayName:"VscodeFormHelper"}),f({tagName:"vscode-icon",elementClass:nt,react:l(),displayName:"VscodeIcon"});let Bt=0;const Vt=(e="")=>(Bt++,`${e}${Bt}`),Ht=[He,x`
    :host {
      display: block;
    }

    .wrapper {
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${16/13};
      padding: 5px 0;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `];var jt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Ut=class extends Be{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n)}connectedCallback(){super.connectedCallback(),this._connected=!0,""===this._id&&(this._id=Vt("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const t=this.getRootNode({composed:!1});t&&(e=t.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();["vscode-radio-group","vscode-checkbox-group"].includes(e?.tagName.toLowerCase()??"")&&e.setAttribute("aria-labelledby",this._id);let t="";this.textContent&&(t=this.textContent.trim()),e&&"label"in e&&["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select"].includes(e?.tagName.toLowerCase()??"")&&(e.label=t)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return se`
      <label
        class=${Ye({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Ut.styles=Ht,jt([ze({reflect:!0,attribute:"for"})],Ut.prototype,"htmlFor",null),jt([ze()],Ut.prototype,"id",null),jt([ze({type:Boolean,reflect:!0})],Ut.prototype,"required",void 0),Ut=jt([Ve("vscode-label")],Ut),f({tagName:"vscode-label",elementClass:Ut,react:l(),displayName:"VscodeLabel"});const qt=se`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`,Wt=le`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
  />
</svg>`,{I:Kt}=ke,Gt=e=>e,Qt=()=>document.createComment(""),Yt=(e,t,n)=>{const o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(Qt(),i),r=o.insertBefore(Qt(),i);n=new Kt(t,r,e,e.options)}else{const t=n._$AB.nextSibling,r=n._$AM,s=r!==e;if(s){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==r._$AU&&n._$AP(t)}if(t!==i||s){let e=n._$AA;for(;e!==t;){const t=Gt(e).nextSibling;Gt(o).insertBefore(e,i),e=t}}}return n},Xt=(e,t,n=e)=>(e._$AI(t,n),e),Zt={},Jt=e=>{e._$AR(),e._$AA.remove()},en=(e,t,n)=>{const o=new Map;for(let i=t;i<=n;i++)o.set(e[i],i);return o},tn=Ge(class extends Qe{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;void 0===n?n=t:void 0!==t&&(o=t);const i=[],r=[];let s=0;for(const t of e)i[s]=o?o(t,s):s,r[s]=n(t,s),s++;return{values:r,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const i=e._$AH,{values:r,keys:s}=this.dt(t,n,o);if(!Array.isArray(i))return this.ut=s,r;const l=this.ut??=[],a=[];let c,u,d=0,h=i.length-1,p=0,f=r.length-1;for(;d<=h&&p<=f;)if(null===i[d])d++;else if(null===i[h])h--;else if(l[d]===s[p])a[p]=Xt(i[d],r[p]),d++,p++;else if(l[h]===s[f])a[f]=Xt(i[h],r[f]),h--,f--;else if(l[d]===s[f])a[f]=Xt(i[d],r[f]),Yt(e,a[f+1],i[d]),d++,f--;else if(l[h]===s[p])a[p]=Xt(i[h],r[p]),Yt(e,i[d],i[h]),h--,p++;else if(void 0===c&&(c=en(s,p,f),u=en(l,d,h)),c.has(l[d]))if(c.has(l[h])){const t=u.get(s[p]),n=void 0!==t?i[t]:null;if(null===n){const t=Yt(e,i[d]);Xt(t,r[p]),a[p]=t}else a[p]=Xt(n,r[p]),Yt(e,i[d],n),i[t]=null;p++}else Jt(i[h]),h--;else Jt(i[d]),d++;for(;p<=f;){const t=Yt(e,a[f+1]);Xt(t,r[p]),a[p++]=t}for(;d<=h;){const e=i[d++];null!==e&&Jt(e)}return this.ut=s,((e,t=Zt)=>{e._$AH=t})(e,a),ae}}),nn=He;var on=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let rn=class extends Be{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return se`<slot @slotchange=${this._handleSlotChange}></slot>`}};rn.styles=nn,on([ze({type:String})],rn.prototype,"value",void 0),on([ze({type:String})],rn.prototype,"description",void 0),on([ze({type:Boolean,reflect:!0})],rn.prototype,"selected",void 0),on([ze({type:Boolean,reflect:!0})],rn.prototype,"disabled",void 0),rn=on([Ve("vscode-option")],rn);const sn=(e,t)=>{const n={match:!1,ranges:[]},o=e.toLowerCase(),i=t.toLowerCase(),r=o.split(" ");let s=0;return r.forEach((t,o)=>{if(o>0&&(s+=r[o-1].length+1),n.match)return;const l=t.indexOf(i),a=i.length;0===l&&(n.match=!0,n.ranges.push([s+l,Math.min(s+l+a,e.length)]))}),n},ln=(e,t)=>{const n={match:!1,ranges:[]};return 0===e.toLowerCase().indexOf(t.toLowerCase())&&(n.match=!0,n.ranges=[[0,t.length]]),n},an=(e,t)=>{const n={match:!1,ranges:[]},o=e.toLowerCase().indexOf(t.toLowerCase());return o>-1&&(n.match=!0,n.ranges=[[o,o+t.length]]),n},cn=(e,t)=>{const n={match:!1,ranges:[]};let o=0,i=0;const r=t.length-1,s=e.toLowerCase(),l=t.toLowerCase();for(let e=0;e<=r;e++){if(i=s.indexOf(l[e],o),-1===i)return{match:!1,ranges:[]};n.match=!0,n.ranges.push([i,i+1]),o=i+1}return n},un=e=>{const t=[];return" "===e?(t.push(se`&nbsp;`),t):(0===e.indexOf(" ")&&t.push(se`&nbsp;`),t.push(se`${e.trimStart().trimEnd()}`),e.lastIndexOf(" ")===e.length-1&&t.push(se`&nbsp;`),t)};class dn{constructor(e){this._activeIndex=-1,this._options=[],this._filterPattern="",this._filterMethod="fuzzy",this._combobox=!1,this._indexByValue=new Map,this._indexByLabel=new Map,this._selectedIndex=-1,this._selectedIndexes=new Set,this._multiSelect=!1,this._numOfVisibleOptions=0,(this._host=e).addController(this)}hostConnected(){}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this._host.requestUpdate()}get relativeActiveIndex(){return this._options[this._activeIndex]?.filteredIndex??-1}set comboboxMode(e){this._combobox=e,this._host.requestUpdate()}get comboboxMode(){return this._combobox}get multiSelect(){return this._multiSelect}set multiSelect(e){this._selectedIndex=-1,this._selectedIndexes.clear(),this._multiSelect=e,this._host.requestUpdate()}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){-1!==this._selectedIndex&&this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected??=!1);const t=this.getOptionByIndex(e);this._selectedIndex=t?e:-1,this._host.requestUpdate()}get selectedIndexes(){return Array.from(this._selectedIndexes)}set selectedIndexes(e){this._selectedIndexes.forEach(e=>{this._options[e].selected=!1}),this._selectedIndexes=new Set(e),e.forEach(e=>{void 0!==this._options[e]&&(this._options[e].selected=!0)}),this._host.requestUpdate()}set value(e){if(this._multiSelect){const t=e.map(e=>this._indexByValue.get(e)).filter(e=>void 0!==e);this._selectedIndexes=new Set(t)}else this._selectedIndex=this._indexByValue.get(e)??-1;this._host.requestUpdate()}get value(){return this._multiSelect?this._selectedIndexes.size>0?Array.from(this._selectedIndexes).filter(e=>e>=0&&e<this._options.length).map(e=>this._options[e].value):[]:this._selectedIndex>-1&&this._selectedIndex<this._options.length?this._options[this._selectedIndex].value:""}set multiSelectValue(e){const t=e.map(e=>this._indexByValue.get(e)).filter(e=>void 0!==e);this._selectedIndexes=new Set(t)}get multiSelectValue(){return this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]}get filterPattern(){return this._filterPattern}set filterPattern(e){e!==this._filterPattern&&(this._filterPattern=e,this._updateState())}get filterMethod(){return this._filterMethod}set filterMethod(e){e!==this._filterMethod&&(this._filterMethod=e,this._updateState())}get options(){return this._options}get numOfVisibleOptions(){return this._numOfVisibleOptions}get numOptions(){return this._options.length}populate(e){this._indexByValue.clear(),this._indexByLabel.clear(),this._options=e.map((e,t)=>(this._indexByValue.set(e.value??"",t),this._indexByLabel.set(e.label??"",t),{description:e.description??"",disabled:e.disabled??!1,label:e.label??"",selected:e.selected??!1,value:e.value??"",index:t,filteredIndex:t,ranges:[],visible:!0})),this._numOfVisibleOptions=this._options.length}add(e){const t=this._options.length,{description:n,disabled:o,label:i,selected:r,value:s}=e;let l=!0,a=[];if(this._combobox&&""!==this._filterPattern){const e=this._searchByPattern(i??"");l=e.match,a=e.ranges}this._indexByValue.set(s??"",t),this._indexByLabel.set(i??"",t),r&&(this._selectedIndex=t,this._selectedIndexes.add(t),this._activeIndex=t),this._options.push({index:t,filteredIndex:t,description:n??"",disabled:o??!1,label:i??"",selected:r??!1,value:s??"",visible:l,ranges:a}),l&&(this._numOfVisibleOptions+=1)}clear(){this._options=[],this._indexByValue.clear(),this._indexByLabel.clear(),this._numOfVisibleOptions=0,this._selectedIndex=-1,this._selectedIndexes.clear(),this._activeIndex=-1}getIsIndexSelected(e){return this._multiSelect?this._selectedIndexes.has(e):this._selectedIndex===e}expandMultiSelection(e){e.forEach(e=>{const t=this._indexByValue.get(e)??-1;-1!==t&&this._selectedIndexes.add(t)}),this._host.requestUpdate()}toggleActiveMultiselectOption(){const e=this._options[this._activeIndex]??null;e&&(this._selectedIndexes.has(e.index)?this._selectedIndexes.delete(e.index):this._selectedIndexes.add(e.index),this._host.requestUpdate())}toggleOptionSelected(e){const t=this._selectedIndexes.has(e);this._options[e].selected=!this._options[e].selected,t?this._selectedIndexes.delete(e):this._selectedIndexes.add(e),this._host.requestUpdate()}getActiveOption(){return this._options[this._activeIndex]??null}getSelectedOption(){return this._options[this._selectedIndex]??null}getOptionByIndex(e){return this._options[e]??null}findOptionIndex(e){return this._indexByValue.get(e)??-1}getOptionByValue(e,t=!1){const n=this._indexByValue.get(e)??-1;return-1===n?null:t||this._options[n].visible?this._options[n]:null}getOptionByLabel(e){const t=this._indexByLabel.get(e)??-1;return-1===t?null:this._options[t]}next(e){let t=-1;for(let n=(e??this._activeIndex)+1;n<this._options.length;n++)if(this._options[n]&&!this._options[n].disabled&&this._options[n].visible){t=n;break}return t>-1?this._options[t]:null}prev(e){let t=-1;for(let n=(e??this._activeIndex)-1;n>=0;n--)if(this._options[n]&&!this._options[n].disabled&&this._options[n].visible){t=n;break}return t>-1?this._options[t]:null}activateDefault(){if(this._multiSelect){if(this._selectedIndexes.size>0){const e=this._selectedIndexes.values().next();this._activeIndex=e.value?e.value:0}}else this._selectedIndex>-1?this._activeIndex=this._selectedIndex:this._activeIndex=0;this._host.requestUpdate()}selectAll(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!0,this._selectedIndexes.add(t)}),this._host.requestUpdate())}selectNone(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!1}),this._selectedIndexes.clear(),this._host.requestUpdate())}_searchByPattern(e){let t;switch(this._filterMethod){case"startsWithPerTerm":t=sn(e,this._filterPattern);break;case"startsWith":t=ln(e,this._filterPattern);break;case"contains":t=an(e,this._filterPattern);break;default:t=cn(e,this._filterPattern)}return t}_updateState(){if(this._combobox&&""!==this._filterPattern){let e=-1;this._numOfVisibleOptions=0,this._options.forEach(({label:t},n)=>{const o=this._searchByPattern(t);this._options[n].visible=o.match,this._options[n].ranges=o.ranges,this._options[n].filteredIndex=o.match?++e:-1,o.match&&(this._numOfVisibleOptions+=1)})}else this._options.forEach((e,t)=>{this._options[t].visible=!0,this._options[t].ranges=[]}),this._numOfVisibleOptions=this._options.length;this._host.requestUpdate()}}const hn=[He,x`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var pn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let fn=class extends Be{set scrollPos(e){this._scrollPos=this._limitScrollPos(e),this._updateScrollbar(),this._updateThumbPosition(),this.requestUpdate()}get scrollPos(){return this._scrollPos}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight-this._scrollableContainer.clientHeight:0}constructor(){super(),this.alwaysVisible=!1,this.fastScrollSensitivity=5,this.minThumbSize=20,this.mouseWheelScrollSensitivity=1,this.shadow=!0,this.scrolled=!1,this._scrollPos=0,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._componentHeight=0,this._contentHeight=0,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._componentHeight=this.offsetHeight,this._contentHeight=this._contentElement.offsetHeight,this._updateScrollbar(),this._updateThumbPosition()},this._handleSlotChange=()=>{this._updateScrollbar(),this._updateThumbPosition(),this._zIndexFix()},this._handleScrollThumbMouseMove=e=>{const t=this._scrollThumbStartY+(e.screenY-this._mouseStartY);this._thumbY=this._limitThumbPos(t),this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollThumbMouseUp=e=>{this._isDragging=!1,this._thumbActive=!1;const t=this.getBoundingClientRect(),{x:n,y:o,width:i,height:r}=t,{pageX:s,pageY:l}=e;(s>n+i||s<n||l>o+r||l<o)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._handleScrollThumbMouseMove),document.removeEventListener("mouseup",this._handleScrollThumbMouseUp)},this._handleComponentMouseOver=()=>{this._thumbVisible=!0,this._thumbFade=!1},this._handleComponentMouseOut=()=>{this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)},this._handleComponentWheel=e=>{if(this._contentHeight<=this._componentHeight)return;e.preventDefault();const t=e.altKey?this.mouseWheelScrollSensitivity*this.fastScrollSensitivity:this.mouseWheelScrollSensitivity;this.scrollPos=this._limitScrollPos(this.scrollPos+e.deltaY*t),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollableContainerScroll=e=>{e.currentTarget&&(this.scrollPos=e.currentTarget.scrollTop)},this.addEventListener("mouseover",this._handleComponentMouseOver),this.addEventListener("mouseout",this._handleComponentMouseOut),this.addEventListener("wheel",this._handleComponentWheel)}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement),this._updateThumbPosition()})}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect()}firstUpdated(e){this._updateThumbPosition()}_calcThumbHeight(){const e=this.offsetHeight,t=e*(e/(this._contentElement?.offsetHeight??0));return Math.max(this.minThumbSize,t)}_updateScrollbar(){const e=this._contentElement?.offsetHeight??0;this.offsetHeight>=e?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=this._calcThumbHeight()),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach(t=>{if("style"in t){const n=window.getComputedStyle(t).zIndex;/([0-9-])+/g.test(n)&&(e=Number(n)>e?Number(n):e)}}),this._scrollbarTrackZ=e+1,this.requestUpdate()}_updateThumbPosition(){if(!this._scrollableContainer)return;this.scrolled=this.scrollPos>0;const e=this.offsetHeight,t=this._thumbHeight,n=this._contentElement.offsetHeight-e,o=this.scrollPos/n,i=e-t;this._thumbY=Math.min(o*(e-t),i)}_calculateScrollPosFromThumbPos(e){const t=this.getBoundingClientRect().height,n=e/(t-this._scrollThumbElement.getBoundingClientRect().height)*(this._contentElement.getBoundingClientRect().height-t);return this._limitScrollPos(n)}_limitScrollPos(e){return e<0?0:e>this.scrollMax?this.scrollMax:e}_limitThumbPos(e){const t=this.getBoundingClientRect().height,n=this._scrollThumbElement.getBoundingClientRect().height;return e<0?0:e>t-n?t-n:e}_handleScrollThumbMouseDown(e){const t=this.getBoundingClientRect(),n=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=n.top-t.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._handleScrollThumbMouseMove),document.addEventListener("mouseup",this._handleScrollThumbMouseUp)}_handleScrollbarTrackPress(e){e.target===e.currentTarget&&(this._thumbY=e.offsetY-this._thumbHeight/2,this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY))}render(){return se`
      <div
        class="scrollable-container"
        .style=${Ze({userSelect:this._isDragging?"none":"auto"})}
        .scrollTop=${this.scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${Ye({shadow:!0,visible:this.scrolled})}
          .style=${Ze({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?se`<div class="prevent-interaction"></div>`:ce}
        <div
          class=${Ye({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${Ye({"scrollbar-thumb":!0,visible:!!this.alwaysVisible||this._thumbVisible,fade:!this.alwaysVisible&&this._thumbFade,active:this._thumbActive})}
            .style=${Ze({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};fn.styles=hn,pn([ze({type:Boolean,reflect:!0,attribute:"always-visible"})],fn.prototype,"alwaysVisible",void 0),pn([ze({type:Number,attribute:"fast-scroll-sensitivity"})],fn.prototype,"fastScrollSensitivity",void 0),pn([ze({type:Number,attribute:"min-thumb-size"})],fn.prototype,"minThumbSize",void 0),pn([ze({type:Number,attribute:"mouse-wheel-scroll-sensitivity"})],fn.prototype,"mouseWheelScrollSensitivity",void 0),pn([ze({type:Boolean,reflect:!0})],fn.prototype,"shadow",void 0),pn([ze({type:Boolean,reflect:!0})],fn.prototype,"scrolled",void 0),pn([ze({type:Number,attribute:"scroll-pos"})],fn.prototype,"scrollPos",null),pn([Ne()],fn.prototype,"_isDragging",void 0),pn([Ne()],fn.prototype,"_thumbHeight",void 0),pn([Ne()],fn.prototype,"_thumbY",void 0),pn([Ne()],fn.prototype,"_thumbVisible",void 0),pn([Ne()],fn.prototype,"_thumbFade",void 0),pn([Ne()],fn.prototype,"_thumbActive",void 0),pn([Te(".content")],fn.prototype,"_contentElement",void 0),pn([Te(".scrollbar-thumb",!0)],fn.prototype,"_scrollThumbElement",void 0),pn([Te(".scrollable-container")],fn.prototype,"_scrollableContainer",void 0),pn([Le()],fn.prototype,"_assignedElements",void 0),fn=pn([Ve("vscode-scrollable")],fn);var vn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const mn=22;class gn extends Be{set combobox(e){this._opts.comboboxMode=e}get combobox(){return this._opts.comboboxMode}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",!0===e?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){let t;["contains","fuzzy","startsWith","startsWithPerTerm"].includes(e)?t=e:(this.warn(`Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`),t="fuzzy"),this._opts.filterMethod=t}get filter(){return this._opts.filterMethod}set options(e){this._opts.populate(e)}get options(){return this._opts.options.map(({label:e,value:t,description:n,selected:o,disabled:i})=>({label:e,value:t,description:n,selected:o,disabled:i}))}constructor(){super(),this.creatable=!1,this.label="",this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this._prevXPos=0,this._prevYPos=0,this._opts=new dn(this),this._firstUpdateCompleted=!1,this._currentDescription="",this._filter="fuzzy",this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._optionListScrollPos=0,this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onOptionListScroll=e=>{this._optionListScrollPos=e.detail},this._onComponentKeyDown=e=>{[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),"Enter"===e.key&&this._onEnterKeyDown(e)," "===e.key&&this._onSpaceKeyDown(),"Escape"===e.key&&this._onEscapeKeyDown(),"ArrowUp"===e.key&&this._onArrowUpKeyDown(),"ArrowDown"===e.key&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this._handleWindowScroll=()=>{const{x:e,y:t}=this.getBoundingClientRect();e===this._prevXPos&&t===this._prevYPos||(this.open=!1)},this.addEventListener("vsc-option-state-change",e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur),this._setAutoFocus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(e){this._firstUpdateCompleted=!0}willUpdate(e){if(e.has("required")&&this._firstUpdateCompleted&&this._manageRequired(),e.has("open")&&this._firstUpdateCompleted)if(this.open){this._dropdownEl.showPopover();const{x:e,y:t}=this.getBoundingClientRect();this._prevXPos=e,this._prevYPos=t,window.addEventListener("scroll",this._handleWindowScroll,{capture:!0}),this._opts.activateDefault(),this._scrollActiveElementToTop()}else this._dropdownEl.hidePopover(),window.removeEventListener("scroll",this._handleWindowScroll)}get _filteredOptions(){return this.combobox&&""!==this._opts.filterPattern?((e,t,n)=>{const o=[];return e.forEach(e=>{let i;switch(n){case"startsWithPerTerm":i=sn(e.label,t);break;case"startsWith":i=ln(e.label,t);break;case"contains":i=an(e.label,t);break;default:i=cn(e.label,t)}i.match&&o.push({...e,ranges:i.ranges})}),o})(this._options,this._opts.filterPattern,this._filter):this._options}_setAutoFocus(){this.hasAttribute("autofocus")&&(this.tabIndex<0&&(this.tabIndex=0),this.combobox?this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".combobox-input").focus()}):this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".select-face").focus()}))}get _isSuggestedOptionVisible(){if(!this.combobox||!this.creatable)return!1;const e=null!==this._opts.getOptionByValue(this._opts.filterPattern),t=this._opts.filterPattern.length>0;return!e&&t}_manageRequired(){}_setStateFromSlottedElements(){const e=this._assignedOptions??[];this._opts.clear(),e.forEach(e=>{const{innerText:t,description:n,disabled:o}=e,i="string"==typeof e.value?e.value:t.trim(),r=e.selected??!1,s={label:t.trim(),value:i,description:n,selected:r,disabled:o};this._opts.add(s)})}_createSuggestedOption(){const e=this._opts.numOptions,t=document.createElement("vscode-option");return t.value=this._opts.filterPattern,Ce(this._opts.filterPattern,t),this.appendChild(t),e}_dispatchChangeEvent(){this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_toggleComboboxDropdown(){this._opts.filterPattern="",this.open=!this.open}_scrollActiveElementToTop(){this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*mn)}async _adjustOptionListScrollPos(e,t){let n=this._opts.numOfVisibleOptions;if(this._isSuggestedOptionVisible&&(n+=1),n<=10)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const o=this._optionListScrollPos,i=t*mn,r=i>=o&&i<=o+220-mn;"down"===e&&(r||(this._optionListScrollPos=t*mn-198)),"up"===e&&(r||(this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*mn)))}_onFaceClick(){this.open=!this.open}_handleDropdownToggle(e){this.open="open"===e.newState}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){"Enter"===e.key&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const t=e.target;t.matches(".option")&&(t.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._opts.activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._opts.activeIndex=+t.dataset.index))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(e){e.stopPropagation()}_onEnterKeyDown(e){this._isBeingFiltered=!1,e?.composedPath&&e.composedPath().find(e=>!!e.matches&&e.matches("vscode-button.button-accept"))}_onSpaceKeyDown(){this.open||(this.open=!0)}_onArrowUpKeyDown(){if(this.open){if(this._opts.activeIndex<=0&&(!this.combobox||!this.creatable))return;if(this._isPlaceholderOptionActive){const e=this._opts.numOfVisibleOptions-1;this._opts.activeIndex=e,this._isPlaceholderOptionActive=!1}else{const e=this._opts.prev();if(null!==e){this._opts.activeIndex=e?.index??-1;const t=e?.filteredIndex??-1;t>-1&&this._adjustOptionListScrollPos("up",t)}}}else this.open=!0,this._opts.activateDefault()}_onArrowDownKeyDown(){let e=this._opts.numOfVisibleOptions;const t=this._isSuggestedOptionVisible;if(t&&(e+=1),this.open){if(this._isPlaceholderOptionActive&&-1===this._opts.activeIndex)return;const n=this._opts.next();if(t&&null===n)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",e-1),this._opts.activeIndex=-1;else if(null!==n){const e=n?.filteredIndex??-1;this._opts.activeIndex=n?.index??-1,e>-1&&this._adjustOptionListScrollPos("down",e)}}else this.open=!0,this._opts.activateDefault()}_onEscapeKeyDown(){this.open=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select(),this._isBeingFiltered=!1,this._opts.filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(e){this._isBeingFiltered=!0,this._opts.filterPattern=e.target.value,this._opts.activeIndex=-1,this.open=!0}_onComboboxInputClick(){this._isBeingFiltered=""!==this._opts.filterPattern,this.open=!0}_onComboboxInputSpaceKeyDown(e){" "===e.key&&e.stopPropagation()}_onOptionClick(e){this._isBeingFiltered=!1}_renderCheckbox(e,t){return se`<span class=${Ye({"checkbox-icon":!0,checked:e})}>${Wt}</span
      ><span class="option-label">${t}</span>`}_renderOptions(){const e=this._opts.options;return se`
      <ul
        aria-label=${Xe(this.label??void 0)}
        aria-multiselectable=${Xe(this._opts.multiSelect?"true":void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${tn(e,e=>e.index,(e,t)=>{if(!e.visible)return ce;const n=e.index===this._opts.activeIndex&&!e.disabled,o=this._opts.getIsIndexSelected(e.index),i={active:n,disabled:e.disabled,option:!0,"single-select":!this._opts.multiSelect,"multi-select":this._opts.multiSelect,selected:o},r=e.ranges?.length?((e,t)=>{const n=[],o=t.length;return o<1?se`${e}`:(t.forEach((i,r)=>{const s=e.substring(i[0],i[1]);0===r&&0!==i[0]&&n.push(...un(e.substring(0,t[0][0]))),r>0&&r<o&&i[0]-t[r-1][1]!==0&&n.push(...un(e.substring(t[r-1][1],i[0]))),n.push(se`<b>${un(s)}</b>`),r===o-1&&i[1]<e.length&&n.push(...un(e.substring(i[1],e.length)))}),n)})(e.label,e.ranges??[]):e.label;return se`
              <li
                aria-selected=${o?"true":"false"}
                class=${Ye(i)}
                data-index=${e.index}
                data-filtered-index=${t}
                id=${`op-${e.index}`}
                role="option"
                tabindex="-1"
              >
                ${s=this._opts.multiSelect,l=()=>this._renderCheckbox(o,r),a=()=>r,s?l():a?.()}
              </li>
            `;var s,l,a})}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions<1)}
      </ul>
    `}_renderPlaceholderOption(e){return this.combobox?this._opts.getOptionByLabel(this._opts.filterPattern)?ce:this.creatable&&this._opts.filterPattern.length>0?se`<li
        class=${Ye({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`:e?se`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:ce:ce}_renderDescription(){const e=this._opts.getActiveOption();if(!e)return ce;const{description:t}=e;return t?se`<div class="description">${t}</div>`:ce}_renderSelectFace(){return se`${ce}`}_renderComboboxFace(){return se`${ce}`}_renderDropdownControls(){return se`${ce}`}_renderDropdown(){const e={dropdown:!0,multiple:this._opts.multiSelect,open:this.open},t=this._isSuggestedOptionVisible||0===this._opts.numOfVisibleOptions?this._opts.numOfVisibleOptions+1:this._opts.numOfVisibleOptions,n=Math.min(t*mn,220),o=this.getBoundingClientRect(),i={width:`${o.width}px`,left:`${o.left}px`,top:"below"===this.position?`${o.top+o.height}px`:"unset",bottom:"below"===this.position?"unset":document.documentElement.clientHeight-o.top+"px"};return se`
      <div
        class=${Ye(e)}
        popover="auto"
        @toggle=${this._handleDropdownToggle}
        .style=${Ze(i)}
      >
        ${"above"===this.position?this._renderDescription():ce}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${Ze({height:`${n}px`})}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${"below"===this.position?this._renderDescription():ce}
      </div>
    `}}vn([ze({type:Boolean,reflect:!0})],gn.prototype,"creatable",void 0),vn([ze({type:Boolean,reflect:!0})],gn.prototype,"combobox",null),vn([ze({reflect:!0})],gn.prototype,"label",void 0),vn([ze({type:Boolean,reflect:!0})],gn.prototype,"disabled",null),vn([ze({type:Boolean,reflect:!0})],gn.prototype,"invalid",void 0),vn([ze()],gn.prototype,"filter",null),vn([ze({type:Boolean,reflect:!0})],gn.prototype,"focused",void 0),vn([ze({type:Boolean,reflect:!0})],gn.prototype,"open",void 0),vn([ze({type:Array})],gn.prototype,"options",null),vn([ze({reflect:!0})],gn.prototype,"position",void 0),vn([Le({flatten:!0,selector:"vscode-option"})],gn.prototype,"_assignedOptions",void 0),vn([Te(".dropdown",!0)],gn.prototype,"_dropdownEl",void 0),vn([Ne()],gn.prototype,"_currentDescription",void 0),vn([Ne()],gn.prototype,"_filter",void 0),vn([Ne()],gn.prototype,"_filteredOptions",null),vn([Ne()],gn.prototype,"_selectedIndexes",void 0),vn([Ne()],gn.prototype,"_options",void 0),vn([Ne()],gn.prototype,"_value",void 0),vn([Ne()],gn.prototype,"_values",void 0),vn([Ne()],gn.prototype,"_isPlaceholderOptionActive",void 0),vn([Ne()],gn.prototype,"_isBeingFiltered",void 0),vn([Ne()],gn.prototype,"_optionListScrollPos",void 0);const bn=[He,x`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
      padding-right: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      outline: none;
    }

    :host(:focus:not([open])) .select-face,
    :host(:focus:not([open])) .combobox-face,
    :host([focused]:not([open])) .select-face,
    :host([focused]:not([open])) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      bottom: unset;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      box-sizing: border-box;
      display: none;
      padding: 0;
      right: unset;
    }

    .dropdown.open {
      display: block;
    }

    :host([position='above']) .dropdown {
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: unset;
    }

    .scrollable {
      display: block;
      max-height: 222px;
      margin: 0;
      outline: none;
      overflow: hidden;
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .option {
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 20px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .option.single-select {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .option.multi-select {
      align-items: center;
      display: flex;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      overflow: hidden;
      pointer-events: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      align-items: center;
      background-color: var(--vscode-checkbox-background, #313131);
      border-radius: 2px;
      border: 1px solid var(--vscode-checkbox-border);
      box-sizing: border-box;
      color: var(--vscode-checkbox-foreground);
      display: flex;
      flex-basis: 15px;
      flex-shrink: 0;
      height: 15px;
      justify-content: center;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 15px;
    }

    .checkbox-icon svg {
      display: none;
      height: 13px;
      width: 13px;
    }

    .checkbox-icon.checked svg {
      display: block;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `],yn=bn;var _n=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let xn=class extends gn{set selectedIndexes(e){this._opts.selectedIndexes=e}get selectedIndexes(){return this._opts.selectedIndexes}set value(e){this._opts.multiSelectValue=e,this._opts.selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._opts.multiSelectValue}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}selectAll(){this._opts.selectAll()}selectNone(){this._opts.selectNone()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=e=>{const t=e.composedPath().find(e=>"matches"in e&&e.matches("li.option"));if(!t)return;if(t.classList.contains("placeholder"))return void this._createAndSelectSuggestedOption();const n=Number(t.dataset.index);this._opts.toggleOptionSelected(n),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._opts.multiSelect=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(e,t){const n=Array.from(e.entries()).map(e=>String(e[1]));this.updateComplete.then(()=>{this.value=n})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map(e=>String(e));this.value=e}}_dispatchChangeEvent(){super._dispatchChangeEvent()}_onFaceClick(){super._onFaceClick(),this._opts.activeIndex=0}_toggleComboboxDropdown(){super._toggleComboboxDropdown(),this._opts.activeIndex=-1}_manageRequired(){const{value:e}=this;0===e.length&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach(t=>{e.append(this.name??"",t)}),this._internals.setFormValue(e)}async _createAndSelectSuggestedOption(){super._createAndSelectSuggestedOption();const e=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,e],this._dispatchChangeEvent();const t=new CustomEvent("vsc-multi-select-create-option",{detail:{value:this._opts.getOptionByIndex(e)?.value??""}});this.dispatchEvent(t),this.open=!1,this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&(this._opts.expandMultiSelection(this._requestedValueToSetLater),this._requestedValueToSetLater=this._requestedValueToSetLater.filter(e=>-1===this._opts.findOptionIndex(e)))}_onEnterKeyDown(e){super._onEnterKeyDown(e),this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(this._opts.toggleActiveMultiselectOption(),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()):(this._opts.filterPattern="",this.open=!0)}_onMultiAcceptClick(){this.open=!1}_onMultiDeselectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!0})),this._options.forEach((e,t)=>{this._selectedIndexes.push(t),this._values.push(e.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_onComboboxInputBlur(){super._onComboboxInputBlur(),this._opts.filterPattern=""}_renderLabel(){return 0===this._opts.selectedIndexes.length?se`<span class="select-face-badge no-item">0 Selected</span>`:se`<span class="select-face-badge"
          >${this._opts.selectedIndexes.length} Selected</span
        >`}_renderComboboxFace(){const e=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",t=this.open?"true":"false";return se`
      <div class="combobox-face face">
        ${this._opts.multiSelect?this._renderLabel():ce}
        <input
          aria-activedescendant=${e}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${t}
          aria-haspopup="listbox"
          aria-label=${Xe(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${this._opts.filterPattern}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        />
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${qt}
        </button>
      </div>
    `}_renderSelectFace(){const e=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",t=this.open?"true":"false";return se`
      <div
        aria-activedescendant=${Xe(this._opts.multiSelect?void 0:e)}
        aria-controls="select-listbox"
        aria-expanded=${Xe(this._opts.multiSelect?void 0:t)}
        aria-haspopup="listbox"
        aria-label=${Xe(this.label??void 0)}
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        .tabIndex=${this.disabled?-1:0}
      >
        ${this._renderLabel()} ${qt}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?se`
          <div class="dropdown-controls">
            <button
              type="button"
              @click=${this._onMultiSelectAllClick}
              title="Select all"
              class="action-icon"
              id="select-all"
            >
              <vscode-icon name="checklist"></vscode-icon>
            </button>
            <button
              type="button"
              @click=${this._onMultiDeselectAllClick}
              title="Deselect all"
              class="action-icon"
              id="select-none"
            >
              <vscode-icon name="clear-all"></vscode-icon>
            </button>
            <vscode-button
              class="button-accept"
              @click=${this._onMultiAcceptClick}
              >OK</vscode-button
            >
          </div>
        `:se`${ce}`}render(){return se`
      <div class="multi-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};xn.styles=yn,xn.shadowRootOptions={...Pe.shadowRootOptions,delegatesFocus:!0},xn.formAssociated=!0,_n([ze({type:Array,attribute:"default-value"})],xn.prototype,"defaultValue",void 0),_n([ze({type:Boolean,reflect:!0})],xn.prototype,"required",void 0),_n([ze({reflect:!0})],xn.prototype,"name",void 0),_n([ze({type:Array,attribute:!1})],xn.prototype,"selectedIndexes",null),_n([ze({type:Array})],xn.prototype,"value",null),_n([Te(".face")],xn.prototype,"_faceElement",void 0),xn=_n([Ve("vscode-multi-select")],xn),f({tagName:"vscode-multi-select",elementClass:xn,react:l(),displayName:"VscodeMultiSelect",events:{onChange:"change",onInvalid:"invalid",onVscMultiSelectCreateOption:"vsc-multi-select-create-option"}});const wn=f({tagName:"vscode-option",elementClass:rn,react:l(),displayName:"VscodeOption"}),kn=[He,x`
    :host {
      display: block;
      height: 2px;
      width: 100%;
      outline: none;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .track {
      position: absolute;
      inset: 0;
      background: transparent;
    }

    .indicator {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      background: var(--vscode-progressBar-background, #0078d4);
      will-change: transform, width, left;
    }

    /* Determinate mode: width is set inline via style attribute */
    .discrete .indicator {
      transition: width 100ms linear;
    }

    /* Indeterminate mode: VS Code style progress bit */
    .infinite .indicator {
      width: 2%;
      animation-name: progress;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      transform: translate3d(0px, 0px, 0px);
    }

    /* Long running: reduce GPU pressure using stepped animation */
    .infinite.infinite-long-running .indicator {
      animation-timing-function: steps(100);
    }

    /* Keyframes adapted from VS Code */
    @keyframes progress {
      from {
        transform: translateX(0%) scaleX(1);
      }
      50% {
        transform: translateX(2500%) scaleX(3);
      }
      to {
        transform: translateX(4900%) scaleX(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .discrete .indicator {
        transition: none;
      }
      .infinite .indicator,
      .infinite-long-running .indicator {
        animation: none;
        width: 100%;
      }
    }
  `];var Sn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Cn=class extends Be{constructor(){super(...arguments),this.ariaLabel="Loading",this.max=100,this.indeterminate=!1,this.longRunningThreshold=15e3,this._longRunning=!1}get _isDeterminate(){return!this.indeterminate&&"number"==typeof this.value&&isFinite(this.value)}connectedCallback(){super.connectedCallback(),this._maybeStartLongRunningTimer()}disconnectedCallback(){super.disconnectedCallback(),this._clearLongRunningTimer()}willUpdate(){this._maybeStartLongRunningTimer()}render(){const e=this.max>0?this.max:100,t=this._isDeterminate?Math.min(Math.max(this.value??0,0),e):0,n=this._isDeterminate?t/e*100:0,o={container:!0,discrete:this._isDeterminate,infinite:!this._isDeterminate,"infinite-long-running":this._longRunning&&!this._isDeterminate};return se`
      <div
        class=${Ye(o)}
        part="container"
        role="progressbar"
        aria-label=${this.ariaLabel}
        aria-valuemin="0"
        aria-valuemax=${String(e)}
        aria-valuenow=${Xe(this._isDeterminate?String(Math.round(t)):void 0)}
      >
        <div class="track" part="track"></div>
        <div
          class="indicator"
          part="indicator"
          .style=${Ze({width:this._isDeterminate?`${n}%`:void 0})}
        ></div>
      </div>
    `}_maybeStartLongRunningTimer(){if(!(!this._isDeterminate&&this.longRunningThreshold>0&&this.isConnected))return this._clearLongRunningTimer(),void(this._longRunning=!1);this._longRunningHandle||(this._longRunningHandle=setTimeout(()=>{this._longRunning=!0,this._longRunningHandle=void 0,this.requestUpdate()},this.longRunningThreshold))}_clearLongRunningTimer(){this._longRunningHandle&&(clearTimeout(this._longRunningHandle),this._longRunningHandle=void 0)}};Cn.styles=kn,Sn([ze({reflect:!0,attribute:"aria-label"})],Cn.prototype,"ariaLabel",void 0),Sn([ze({type:Number,reflect:!0})],Cn.prototype,"value",void 0),Sn([ze({type:Number,reflect:!0})],Cn.prototype,"max",void 0),Sn([ze({type:Boolean,reflect:!0})],Cn.prototype,"indeterminate",void 0),Sn([ze({type:Number,attribute:"long-running-threshold"})],Cn.prototype,"longRunningThreshold",void 0),Sn([Ne()],Cn.prototype,"_longRunning",void 0),Cn=Sn([Ve("vscode-progress-bar")],Cn),f({tagName:"vscode-progress-bar",elementClass:Cn,react:l(),displayName:"VscodeProgressBar"});const En=[He,x`
    :host {
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var Pn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let On=class extends Be{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return se`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};On.styles=En,Pn([ze({reflect:!0,attribute:"aria-label"})],On.prototype,"ariaLabel",void 0),Pn([ze({reflect:!0,attribute:"aria-live"})],On.prototype,"ariaLive",void 0),Pn([ze({reflect:!0})],On.prototype,"role",void 0),On=Pn([Ve("vscode-progress-ring")],On),f({tagName:"vscode-progress-ring",elementClass:On,react:l(),displayName:"VscodeProgressRing"});const In=[He,dt,x`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var An=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let zn=class extends(ut(ct)){get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.type="radio",this.value="",this.disabled=!1,this.required=!1,this.tabIndex=0,this._slottedText="",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "!==e.key||this.checked||(this.checked=!0,this._handleValueChange(),this.dispatchEvent(new Event("change",{bubbles:!0}))),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick)}connectedCallback(){super.connectedCallback(),this._handleValueChange()}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(e=>{e.checked=e.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(e,t){this.value===e&&""!==e&&(this.checked=!0)}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_getRadios(){const e=this.getRootNode({composed:!1});if(!e)return[];const t=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(t)}_uncheckOthers(e){e.forEach(e=>{e!==this&&(e.checked=!1)})}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach(e=>{e!==this&&(e.checked=!1)})}_setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(e=>{e.setComponentValidity(t)})})}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),t=e.some(e=>e.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const n=!!e.find(e=>e.checked),o=t&&!n;this._setGroupValidity(e,!o)}}render(){const e=Ye({icon:!0,checked:this.checked}),t=Ye({"label-inner":!0,"is-slot-empty":""===this._slottedText});return se`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        />
        <div class=${e}></div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${t}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};zn.styles=In,zn.formAssociated=!0,zn.shadowRootOptions={...Pe.shadowRootOptions,delegatesFocus:!0},An([ze({type:Boolean,reflect:!0})],zn.prototype,"autofocus",void 0),An([ze({type:Boolean,reflect:!0})],zn.prototype,"checked",void 0),An([ze({type:Boolean,reflect:!0,attribute:"default-checked"})],zn.prototype,"defaultChecked",void 0),An([ze({type:Boolean,reflect:!0})],zn.prototype,"invalid",void 0),An([ze({reflect:!0})],zn.prototype,"name",void 0),An([ze()],zn.prototype,"type",void 0),An([ze()],zn.prototype,"value",void 0),An([ze({type:Boolean,reflect:!0})],zn.prototype,"disabled",void 0),An([ze({type:Boolean,reflect:!0})],zn.prototype,"required",void 0),An([ze({type:Number,reflect:!0})],zn.prototype,"tabIndex",void 0),An([Ne()],zn.prototype,"_slottedText",void 0),An([Te("#input")],zn.prototype,"_inputEl",void 0),zn=An([Ve("vscode-radio")],zn),f({tagName:"vscode-radio",elementClass:zn,react:l(),displayName:"VscodeRadio",events:{onChange:"change",onInvalid:"invalid"}});const Nn=[He,x`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var $n=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Tn=class extends Be{constructor(){super(),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._handleKeyDown=e=>{const{key:t}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(t)&&e.preventDefault(),"ArrowRight"!==t&&"ArrowDown"!==t||this._checkNext(),"ArrowLeft"!==t&&"ArrowUp"!==t||this._checkPrev()},this.addEventListener("keydown",this._handleKeyDown)}_uncheckPreviousChecked(e,t){-1!==e&&(this._radios[e].checked=!1),-1!==t&&(this._radios[t].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex(e=>e.checked),t=this._radios.findIndex(e=>e.focused),n=-1!==t?t:e;this._uncheckPreviousChecked(e,t),this._checkedRadio=-1===n?this._radios.length-1:n-1>=0?n-1:this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex(e=>e.checked),t=this._radios.findIndex(e=>e.focused),n=-1!==t?t:e;this._uncheckPreviousChecked(e,t),-1===n?this._checkedRadio=0:n+1<this._radios.length?this._checkedRadio=n+1:this._checkedRadio=0,this._afterCheck()}_handleChange(e){const t=this._radios.findIndex(t=>t===e.target);-1!==t&&(-1!==this._focusedRadio&&(this._radios[this._focusedRadio].tabIndex=-1),-1!==this._checkedRadio&&this._checkedRadio!==t&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=t,this._checkedRadio=t,this._radios[t].tabIndex=0)}_handleSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex(e=>e.autofocus);e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}let e=-1;this._radios.forEach((t,n)=>{this._focusedRadio>-1?t.tabIndex=n===this._focusedRadio?0:-1:t.tabIndex=0===n?0:-1,t.defaultChecked&&(e>-1&&(this._radios[e].defaultChecked=!1),e=n)}),e>-1&&(this._radios[e].checked=!0)}render(){return se`
      <div class="wrapper">
        <slot
          @slotchange=${this._handleSlotChange}
          @change=${this._handleChange}
        ></slot>
      </div>
    `}};Tn.styles=Nn,$n([ze({reflect:!0})],Tn.prototype,"variant",void 0),$n([ze({reflect:!0})],Tn.prototype,"role",void 0),$n([Le({selector:"vscode-radio"})],Tn.prototype,"_radios",void 0),$n([Ne()],Tn.prototype,"_focusedRadio",void 0),$n([Ne()],Tn.prototype,"_checkedRadio",void 0),Tn=$n([Ve("vscode-radio-group")],Tn),f({tagName:"vscode-radio-group",elementClass:Tn,react:l(),displayName:"VscodeRadioGroup",events:{onChange:"change"}}),f({tagName:"vscode-scrollable",elementClass:fn,react:l(),displayName:"VscodeScrollable"});const Rn=bn;var Ln=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Dn=class extends gn{set selectedIndex(e){this._opts.selectedIndex=e;const t=this._opts.getOptionByIndex(e);t?(this._opts.activeIndex=e,this._value=t.value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._opts.selectedIndex}set value(e){this._opts.value=e,this._opts.selectedIndex>-1?this._requestedValueToSetLater="":this._requestedValueToSetLater=e,this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._opts.value}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");if(e){const t=this._opts.getSelectedOption();e.value=t?.label??""}}constructor(){super(),this.defaultValue="",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._opts.multiSelect=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){const e=this._createSuggestedOption();await this.updateComplete,this._opts.selectedIndex=e,this._dispatchChangeEvent();const t=new CustomEvent("vsc-single-select-create-option",{detail:{value:this._opts.getOptionByIndex(e)?.value??""}});this.dispatchEvent(t),this.open=!1,this._isPlaceholderOptionActive=!1}_setStateFromSlottedElements(){super._setStateFromSlottedElements(),this.combobox||0!==this._opts.selectedIndexes.length||(this._opts.selectedIndex=this._opts.options.length>0?0:-1)}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const e=this._opts.getOptionByValue(this._requestedValueToSetLater);e&&(this._opts.selectedIndex=e.index,this._requestedValueToSetLater="")}this._opts.selectedIndex>-1&&this._opts.numOptions>0?(this._internals.setFormValue(this._opts.value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onEnterKeyDown(e){super._onEnterKeyDown(e);let t=!1;this.combobox?this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()):this.open?(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()),t&&(this._dispatchChangeEvent(),this.updateInputValue(),this._internals.setFormValue(this._opts.value),this._manageRequired())}_onOptionClick(e){super._onOptionClick(e);const t=e.composedPath().find(e=>{if("matches"in e)return e.matches("li.option")});t&&!t.matches(".disabled")&&(t.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._opts.selectedIndex=Number(t.dataset.index),this.open=!1,this._internals.setFormValue(this._opts.value),this._manageRequired(),this._dispatchChangeEvent()))}_manageRequired(){const{value:e}=this;""===e&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const e=this._opts.getSelectedOption(),t=e?.label??"",n=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"";return se`
      <div
        aria-activedescendant=${n}
        aria-controls="select-listbox"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="listbox"
        aria-label=${Xe(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${t}</span> ${qt}
      </div>
    `}_renderComboboxFace(){let e="";if(this._isBeingFiltered)e=this._opts.filterPattern;else{const t=this._opts.getSelectedOption();e=t?.label??""}const t=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",n=this.open?"true":"false";return se`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${t}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${n}
          aria-haspopup="listbox"
          aria-label=${Xe(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        />
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${qt}
        </button>
      </div>
    `}render(){return se`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};Dn.styles=Rn,Dn.shadowRootOptions={...Pe.shadowRootOptions,delegatesFocus:!0},Dn.formAssociated=!0,Ln([ze({attribute:"default-value"})],Dn.prototype,"defaultValue",void 0),Ln([ze({reflect:!0})],Dn.prototype,"name",void 0),Ln([ze({type:Number,attribute:"selected-index"})],Dn.prototype,"selectedIndex",null),Ln([ze({type:String})],Dn.prototype,"value",null),Ln([ze({type:Boolean,reflect:!0})],Dn.prototype,"required",void 0),Ln([Te(".face")],Dn.prototype,"_face",void 0),Dn=Ln([Ve("vscode-single-select")],Dn);const Fn=f({tagName:"vscode-single-select",elementClass:Dn,react:l(),displayName:"VscodeSingleSelect",events:{onChange:"change",onInvalid:"invalid",onVscSingleSelectCreateOption:"vsc-single-select-create-option"}}),Mn=[He,x`
    :host {
      --separator-border: var(--vscode-editorWidget-border, #454545);

      border: 1px solid var(--vscode-editorWidget-border, #454545);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder, #0078d4);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var Bn,Vn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const Hn=e=>{if(!e)return{value:0,unit:"pixel"};let t,n;return e.endsWith("%")?(t="percent",n=+e.substring(0,e.length-1)):e.endsWith("px")?(t="pixel",n=+e.substring(0,e.length-2)):(t="pixel",n=+e),{unit:t,value:isNaN(n)?0:n}},jn=(e,t)=>0===t?0:Math.min(100,e/t*100),Un=(e,t)=>t*(e/100);let qn=Bn=class extends Be{set split(e){this._split!==e&&(this._split=e,this.resetHandlePosition())}get split(){return this._split}set handlePosition(e){this._rawHandlePosition=e,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(e){this._fixedPane=e,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}set minStart(e){const t=e??void 0;this._minStart!==t&&(this._minStart=t,this._applyMinSizeConstraints())}get minStart(){return this._minStart}set minEnd(e){const t=e??void 0;this._minEnd!==t&&(this._minEnd=t,this._applyMinSizeConstraints())}get minEnd(){return this._minEnd}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition="50%",this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=e=>{const t=e[0].contentRect,{width:n,height:o}=t;this._boundRect=t;const i="vertical"===this.split?n:o;"start"===this.fixedPane&&(this._handlePosition=this._fixedPaneSize),"end"===this.fixedPane&&(this._handlePosition=i-this._fixedPaneSize),this._handlePosition=this._clampHandlePosition(this._handlePosition,i),this._updateFixedPaneSize(i)},this._handleMouseUp=e=>{this._isDragActive=!1,e.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:t,height:n}=this._boundRect,o="vertical"===this.split?t:n,i=jn(this._handlePosition,o);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:i},composed:!0}))},this._handleMouseMove=e=>{const{clientX:t,clientY:n}=e,{left:o,top:i,height:r,width:s}=this._boundRect,l="vertical"===this.split,a=l?s:r,c=(l?t-o:n-i)-this._handleOffset+this.handleSize/2;this._handlePosition=this._clampHandlePosition(c,a),this._updateFixedPaneSize(a)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl)return void(this._handlePosition=0);const{width:e,height:t}=this._wrapperEl.getBoundingClientRect(),n="vertical"===this.split?e:t,{value:o,unit:i}=Hn(this.initialHandlePosition??"50%"),r="percent"===i?Un(o,n):o;this._handlePosition=this._clampHandlePosition(r,n),this._updateFixedPaneSize(n)}connectedCallback(){super.connectedCallback()}firstUpdated(e){"none"!==this.fixedPane&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:t,unit:n}=this.handlePosition?Hn(this.handlePosition):Hn(this.initialHandlePosition);this._setPosition(t,n),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:t}=Hn(this.handlePosition);this._setPosition(e,t)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if("none"===this.fixedPane)this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t;this._fixedPaneSize="start"===this.fixedPane?this._handlePosition:n-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_applyMinSizeConstraints(){if(!this._wrapperEl)return;this._boundRect=this._wrapperEl.getBoundingClientRect();const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t;this._handlePosition=this._clampHandlePosition(this._handlePosition,n),this._updateFixedPaneSize(n)}_resolveMinSizePx(e,t){if(!e)return 0;const{unit:n,value:o}=Hn(e),i="percent"===n?Un(o,t):o;return isFinite(i)?Math.max(0,Math.min(i,t)):0}_clampHandlePosition(e,t){if(!isFinite(t)||t<=0)return 0;const n=this._resolveMinSizePx(this._minStart,t),o=this._resolveMinSizePx(this._minEnd,t),i=Math.min(n,t),r=Math.max(i,t-o),s=Math.max(i,Math.min(e,r));return Math.max(0,Math.min(s,t))}_updateFixedPaneSize(e){"start"===this.fixedPane?this._fixedPaneSize=this._handlePosition:"end"===this.fixedPane&&(this._fixedPaneSize=e-this._handlePosition)}_setPosition(e,t){const{width:n,height:o}=this._boundRect,i="vertical"===this.split?n:o,r="percent"===t?Un(e,i):e;this._handlePosition=this._clampHandlePosition(r,i),this._updateFixedPaneSize(i)}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){1!==e.buttons&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:t,top:n}=this._boundRect,{left:o,top:i}=this._handleEl.getBoundingClientRect(),r=e.clientX-t,s=e.clientY-n;"vertical"===this.split&&(this._handleOffset=r-(o-t)),"horizontal"===this.split&&(this._handleOffset=s-(i-n)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(e=>{e instanceof Bn&&e.resetHandlePosition()})}render(){const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t,o="none"!==this.fixedPane?`${this._handlePosition}px`:`${jn(this._handlePosition,n)}%`;let i="";i="start"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${jn(this._handlePosition,n)}%`;let r="";r="end"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${jn(n-this._handlePosition,n)}%`;const s={left:"vertical"===this.split?o:"0",top:"vertical"===this.split?"0":o},l=this.handleSize??4;"vertical"===this.split&&(s.marginLeft=0-l/2+"px",s.width=`${l}px`),"horizontal"===this.split&&(s.height=`${l}px`,s.marginTop=0-l/2+"px");const a=Ye({"handle-overlay":!0,active:this._isDragActive,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),c=Ye({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),u={wrapper:!0,horizontal:"horizontal"===this.split};return se`
      <div class=${Ye(u)}>
        <div class="start" .style=${Ze({flex:i})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${Ze({flex:r})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${a}></div>
        <div
          class=${c}
          .style=${Ze(s)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};qn.styles=Mn,Vn([ze({reflect:!0})],qn.prototype,"split",null),Vn([ze({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],qn.prototype,"resetOnDblClick",void 0),Vn([ze({type:Number,reflect:!0,attribute:"handle-size"})],qn.prototype,"handleSize",void 0),Vn([ze({reflect:!0,attribute:"initial-handle-position"})],qn.prototype,"initialHandlePosition",void 0),Vn([ze({attribute:"handle-position"})],qn.prototype,"handlePosition",null),Vn([ze({attribute:"fixed-pane"})],qn.prototype,"fixedPane",null),Vn([ze({attribute:"min-start"})],qn.prototype,"minStart",null),Vn([ze({attribute:"min-end"})],qn.prototype,"minEnd",null),Vn([Ne()],qn.prototype,"_handlePosition",void 0),Vn([Ne()],qn.prototype,"_isDragActive",void 0),Vn([Ne()],qn.prototype,"_hover",void 0),Vn([Ne()],qn.prototype,"_hide",void 0),Vn([Te(".wrapper")],qn.prototype,"_wrapperEl",void 0),Vn([Te(".handle")],qn.prototype,"_handleEl",void 0),Vn([Le({slot:"start",selector:"vscode-split-layout"})],qn.prototype,"_nestedLayoutsAtStart",void 0),Vn([Le({slot:"end",selector:"vscode-split-layout"})],qn.prototype,"_nestedLayoutsAtEnd",void 0),qn=Bn=Vn([Ve("vscode-split-layout")],qn),f({tagName:"vscode-split-layout",elementClass:qn,react:l(),displayName:"VscodeSplitLayout",events:{onVscSplitLayoutChange:"vsc-split-layout-change"}});const Wn=[He,x`
    :host {
      cursor: pointer;
      display: block;
      user-select: none;
    }

    .wrapper {
      align-items: center;
      border-bottom: 1px solid transparent;
      color: var(--vscode-foreground, #cccccc);
      display: flex;
      min-height: 20px;
      overflow: hidden;
      padding: 7px 8px;
      position: relative;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host([active]) .wrapper {
      border-bottom-color: var(--vscode-panelTitle-activeForeground, #cccccc);
      color: var(--vscode-panelTitle-activeForeground, #cccccc);
    }

    :host([panel]) .wrapper {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground, #cccccc);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground, #9d9d9d);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground, #cccccc);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder, #0078d4);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var Kn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Gn=class extends Be{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"active"===e){const e=null!==n;this.ariaSelected=e?"true":"false",this.tabIndex=e?0:-1}}render(){return se`
      <div
        class=${Ye({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${Ye({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};Gn.styles=Wn,Kn([ze({type:Boolean,reflect:!0})],Gn.prototype,"active",void 0),Kn([ze({reflect:!0,attribute:"aria-controls"})],Gn.prototype,"ariaControls",void 0),Kn([ze({type:Boolean,reflect:!0})],Gn.prototype,"panel",void 0),Kn([ze({reflect:!0})],Gn.prototype,"role",void 0),Kn([ze({type:Number,reflect:!0,attribute:"tab-id"})],Gn.prototype,"tabId",void 0),Gn=Kn([Ve("vscode-tab-header")],Gn);const Qn=f({tagName:"vscode-tab-header",elementClass:Gn,react:l(),displayName:"VscTabHeader"}),Yn=e=>e,Xn=[{test:e=>/^-?\d+(\.\d+)?%$/.test(e),parse:e=>Number(e.slice(0,-1))},{test:e=>/^-?\d+(\.\d+)?px$/.test(e),parse:(e,t)=>Number(e.slice(0,-2))/t*100},{test:e=>/^-?\d+(\.\d+)?$/.test(e),parse:(e,t)=>Number(e)/t*100}],Zn=(e,t)=>{if(!Number.isFinite(t)||0===t)return null;if("number"==typeof e)return Number.isFinite(e)?e/t*100:null;const n=e.trim(),o=Xn.find(e=>e.test(n));return o?o.parse(n,t):null},Jn=[He,x`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(
        --vscode-keybindingTable-rowsBackground,
        rgba(204, 204, 204, 0.04)
      );
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(
        --vscode-keybindingTable-rowsBackground,
        rgba(204, 204, 204, 0.04)
      );
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(
        --vscode-editorGroup-border,
        rgba(255, 255, 255, 0.09)
      );
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(
        --vscode-editorGroup-border,
        rgba(255, 255, 255, 0.09)
      );
      height: calc(100% - 30px);
      position: absolute;
      top: 30px;
      width: ${1}px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder, #0078d4);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      height: 100%;
      left: ${-2}px;
      position: absolute;
      width: ${5}px;
    }
  `];class eo{constructor(e){this._hostWidth=0,this._hostX=0,this._activeSplitter=null,this._columnMinWidths=new Map,this._columnWidths=[],this._dragState=null,this._cachedSplitterPositions=null,(this._host=e).addController(this)}hostConnected(){this.saveHostDimensions()}get isDragging(){return null!==this._dragState}get splitterPositions(){if(this._cachedSplitterPositions)return this._cachedSplitterPositions;const e=[];let t=0;for(let n=0;n<this._columnWidths.length-1;n++)t=Yn(t+this._columnWidths[n]),e.push(t);return this._cachedSplitterPositions=e,e}getActiveSplitterCalculatedPosition(){const e=this.splitterPositions;if(!this._dragState)return 0;const t=e[this._dragState.splitterIndex];return this._toPx(t)}get columnWidths(){return this._columnWidths}get columnMinWidths(){return new Map(this._columnMinWidths)}saveHostDimensions(){const e=this._host.getBoundingClientRect(),{width:t,x:n}=e;return this._hostWidth=t,this._hostX=n,this}setActiveSplitter(e){return this._activeSplitter=e,this}getActiveSplitter(){return this._activeSplitter}setColumnMinWidthAt(e,t){return this._columnMinWidths.set(e,t),this._host.requestUpdate(),this}setColumWidths(e){return this._columnWidths=e,this._cachedSplitterPositions=null,this._host.requestUpdate(),this}shouldDrag(e){return+e.currentTarget.dataset.index===this._dragState?.splitterIndex}startDrag(e){if(e.stopPropagation(),this._dragState)return;this._activeSplitter?.setPointerCapture(e.pointerId);const t=e.pageX,n=e.currentTarget,o=t-n.getBoundingClientRect().x;this._dragState={dragOffset:o,pointerId:e.pointerId,splitterIndex:+n.dataset.index,prevX:t-o},this._host.requestUpdate()}drag(e){if(e.stopPropagation(),!e?.currentTarget?.hasPointerCapture?.(e.pointerId))return;if(!this._dragState)return;if(e.pointerId!==this._dragState.pointerId)return;if(!this.shouldDrag(e))return;const t=e.pageX,n=t-this._dragState.dragOffset,o=n-this._dragState.prevX,i=this._toPercent(o);this._dragState.prevX=n;const r=this.getActiveSplitterCalculatedPosition();o<=0&&t>r+this._hostX||o>0&&t<r+this._hostX||(this._columnWidths=function(e,t,n,o){const i=[...e];if(0===n||t<0||t>=e.length-1)return i;const r=Math.abs(n);let s=r;const l=[],a=[];for(let e=t;e>=0;e--)l.push(e);for(let n=t+1;n<e.length;n++)a.push(n);const c=n>0?a:l,u=n>0?l:a;let d=0;for(const e of c){const t=Math.max(0,i[e]-(o.get(e)??0));d=Yn(d+t)}if(d<s)return i;for(const e of c){if(0===s)break;const t=Math.max(0,i[e]-(o.get(e)??0)),n=Math.min(t,s);i[e]=Yn(i[e]-n),s=Yn(s-n)}let h=r;for(const e of u){if(0===h)break;i[e]=Yn(i[e]+h),h=Yn(0)}return i}(this._columnWidths,this._dragState.splitterIndex,i,this._columnMinWidths),this._cachedSplitterPositions=null,this._host.requestUpdate())}stopDrag(e){if(e.stopPropagation(),!this._dragState)return;const t=e.currentTarget;try{t.releasePointerCapture(this._dragState.pointerId)}catch(e){}this._dragState=null,this._activeSplitter=null,this._host.requestUpdate()}_toPercent(e){return(e=>e/this._hostWidth*100)(e)}_toPx(e){return e/100*this._hostWidth}}var to=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let no=class extends Be{set columns(e){if(!Array.isArray(e))return this.warn('Invalid value for "columns": expected an array.'),void(this._columns=[]);this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}constructor(){super(),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._columnResizeController=new eo(this),this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._handleSplitterPointerMove=e=>{this._columnResizeController.shouldDrag(e)&&(this._columnResizeController.drag(e),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0))},this._handleSplitterPointerUp=e=>{this._stopDrag(e)},this._handleSplitterPointerCancel=e=>{this._stopDrag(e)},this._handleMinColumnWidthChange=e=>{const{columnIndex:t,propertyValue:n}=e.detail,o=Zn(n,this._componentW);o&&this._columnResizeController.setColumnMinWidthAt(t,o)},this.addEventListener("vsc-table-change-min-column-width",this._handleMinColumnWidthChange)}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){super.disconnectedCallback(),this._componentResizeObserver?.unobserve(this),this._componentResizeObserver?.disconnect(),this._bodyResizeObserver?.disconnect()}willUpdate(e){if(e.has("minColumnWidth")){const e=Zn(this.minColumnWidth,this._componentW)??0,t=this._columnResizeController.columnMinWidths,n=this._columnResizeController.columnWidths;for(let o=0;o<n.length;o++)t.has(o)||this._columnResizeController.setColumnMinWidthAt(o,e)}}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let e=0,t=0;const n=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(t=this._assignedBodyElements[0].getBoundingClientRect().height);const o=t-e-n;this._scrollableElement.style.height=o>0?n-e+"px":"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calculateInitialColumnWidths(){const e=this._getHeaderCells().length;let t=this.columns.slice(0,e);const n=t.filter(e=>"auto"===e).length+e-t.length;let o=100;if(t=t.map(e=>{const t=Zn(e,this._componentW);return null===t?"auto":(o-=t,t)}),t.length<e)for(let n=t.length;n<e;n++)t.push("auto");return t=t.map(e=>"auto"===e?o/n:e),t}_initHeaderCellSizes(e){this._getHeaderCells().forEach((t,n)=>{t.style.width=`${e[n]}%`})}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach((t,n)=>{t.style.width=`${e[n]}%`})}_initSashes(e){const t=e.length;let n=0;this._sashPositions=[],e.forEach((e,o)=>{if(o<t-1){const t=n+e;this._sashPositions.push(t),n=t}})}_initDefaultColumnSizes(){const e=this._calculateInitialColumnWidths();this._columnResizeController.setColumWidths(e.map(e=>e)),this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const t=this._componentH-e.height;this._sashVisibleElements.forEach(n=>{n.style.height=`${t}px`,n.style.top=`${e.height}px`})}_applyCompactViewColumnLabels(){const e=this._getHeaderCells().map(e=>e.innerText);this.querySelectorAll("vscode-table-row").forEach(t=>{t.querySelectorAll("vscode-table-cell").forEach((t,n)=>{t.columnLabel=e[n],t.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(e=>{e.columnLabel="",e.compact=!1})}_toggleCompactView(){const e=this.getBoundingClientRect().width<this.breakpoint;this.compact!==e&&(this.compact=e,e?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_stopDrag(e){const t=this._columnResizeController.getActiveSplitter();t&&(t.removeEventListener("pointermove",this._handleSplitterPointerMove),t.removeEventListener("pointerup",this._handleSplitterPointerUp),t.removeEventListener("pointercancel",this._handleSplitterPointerCancel)),this._columnResizeController.stopDrag(e),this._resizeColumns(!0),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1}_onDefaultSlotChange(){this._assignedElements.forEach(e=>{"vscode-table-header"!==e.tagName.toLowerCase()?"vscode-table-body"!==e.tagName.toLowerCase()||(e.slot="body"):e.slot="header"})}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells(),[].fill(0,0,this._headerCells.length-1),this._headerCells.forEach((e,t)=>{if(e.index=t,e.minWidth){const n=Zn(e.minWidth,this._componentW)??0;this._columnResizeController.setColumnMinWidthAt(t,n)}})}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const t=e.currentTarget,n=Number(t.dataset.index);this._sashHovers[n]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const t=e.currentTarget,n=Number(t.dataset.index);this._sashHovers[n]=!1,this.requestUpdate()}_resizeColumns(e=!0){const t=this._columnResizeController.columnWidths;this._getHeaderCells().forEach((e,n)=>e.style.width=`${t[n]}%`),e&&this._getCellsOfFirstRow().forEach((e,n)=>e.style.width=`${t[n]}%`)}_handleSplitterPointerDown(e){e.stopPropagation();const t=e.currentTarget;this._columnResizeController.saveHostDimensions().setActiveSplitter(t).startDrag(e),t.addEventListener("pointermove",this._handleSplitterPointerMove),t.addEventListener("pointerup",this._handleSplitterPointerUp),t.addEventListener("pointercancel",this._handleSplitterPointerCancel)}render(){const e=this._columnResizeController.splitterPositions.map((e,t)=>{const n=Ye({sash:!0,hover:this._sashHovers[t],resizable:this.resizable}),o=`${e}%`;return this.resizable?se`
            <div
              class=${n}
              data-index=${t}
              .style=${Ze({left:o})}
              @pointerdown=${this._handleSplitterPointerDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:se`<div
            class=${n}
            data-index=${t}
            .style=${Ze({left:o})}
          >
            <div class="sash-visible"></div>
          </div>`}),t=Ye({wrapper:!0,"select-disabled":this._columnResizeController.isDragging,"resize-cursor":this._columnResizeController.isDragging,"compact-view":this.compact});return se`
      <div class=${t}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${e}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `}};no.styles=Jn,to([ze({reflect:!0})],no.prototype,"role",void 0),to([ze({type:Boolean,reflect:!0})],no.prototype,"resizable",void 0),to([ze({type:Boolean,reflect:!0})],no.prototype,"responsive",void 0),to([ze({type:Boolean,reflect:!0})],no.prototype,"bordered",void 0),to([ze({type:Boolean,reflect:!0,attribute:"bordered-columns"})],no.prototype,"borderedColumns",void 0),to([ze({type:Boolean,reflect:!0,attribute:"bordered-rows"})],no.prototype,"borderedRows",void 0),to([ze({type:Number})],no.prototype,"breakpoint",void 0),to([ze({type:Array})],no.prototype,"columns",null),to([ze({attribute:"min-column-width"})],no.prototype,"minColumnWidth",void 0),to([ze({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],no.prototype,"delayedResizing",void 0),to([ze({type:Boolean,reflect:!0})],no.prototype,"compact",void 0),to([ze({type:Boolean,reflect:!0})],no.prototype,"zebra",void 0),to([ze({type:Boolean,reflect:!0,attribute:"zebra-odd"})],no.prototype,"zebraOdd",void 0),to([Te(".header")],no.prototype,"_headerElement",void 0),to([Te(".scrollable")],no.prototype,"_scrollableElement",void 0),to([(e,t)=>$e(e,t,{get(){return(this.renderRoot??(Re??=document.createDocumentFragment())).querySelectorAll(".sash-visible")}})],no.prototype,"_sashVisibleElements",void 0),to([Le({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],no.prototype,"_assignedElements",void 0),to([Le({slot:"header",flatten:!0,selector:"vscode-table-header"})],no.prototype,"_assignedHeaderElements",void 0),to([Le({slot:"body",flatten:!0,selector:"vscode-table-body"})],no.prototype,"_assignedBodyElements",void 0),to([Ne()],no.prototype,"_sashPositions",void 0),to([Ne()],no.prototype,"_isDragging",void 0),no=to([Ve("vscode-table")],no),f({tagName:"vscode-table",elementClass:no,react:l(),displayName:"VscodeTable"});const oo=[He,x`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var io=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ro=class extends Be{constructor(){super(...arguments),this.role="rowgroup"}render(){return se` <slot></slot> `}};ro.styles=oo,io([ze({reflect:!0})],ro.prototype,"role",void 0),ro=io([Ve("vscode-table-body")],ro),f({tagName:"vscode-table-body",elementClass:ro,react:l(),displayName:"VscodeTableBody"});const so=[He,x`
    :host {
      border-bottom-color: var(
        --vscode-editorGroup-border,
        rgba(255, 255, 255, 0.09)
      );
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      display: table-cell;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var lo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ao=class extends Be{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?se`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:ce;return se`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};ao.styles=so,lo([ze({reflect:!0})],ao.prototype,"role",void 0),lo([ze({attribute:"column-label"})],ao.prototype,"columnLabel",void 0),lo([ze({type:Boolean,reflect:!0})],ao.prototype,"compact",void 0),ao=lo([Ve("vscode-table-cell")],ao),f({tagName:"vscode-table-cell",elementClass:ao,react:l(),displayName:"VscodeTableCell"});const co=[He,x`
    :host {
      background-color: var(
        --vscode-keybindingTable-headerBackground,
        rgba(204, 204, 204, 0.04)
      );
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var uo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ho=class extends Be{constructor(){super(...arguments),this.role="rowgroup"}render(){return se` <slot></slot> `}};ho.styles=co,uo([ze({reflect:!0})],ho.prototype,"role",void 0),ho=uo([Ve("vscode-table-header")],ho),f({tagName:"vscode-table-header",elementClass:ho,react:l(),displayName:"VscodeTableHeader"});const po=[He,x`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      display: table-cell;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var fo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let vo=class extends Be{constructor(){super(...arguments),this.minWidth="0",this.index=-1,this.role="columnheader"}willUpdate(e){e.has("minWidth")&&this.index>-1&&this.dispatchEvent(new CustomEvent("vsc-table-change-min-column-width",{detail:{columnIndex:this.index,propertyValue:this.minWidth},bubbles:!0}))}render(){return se`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};vo.styles=po,fo([ze({attribute:"min-width"})],vo.prototype,"minWidth",void 0),fo([ze({type:Number})],vo.prototype,"index",void 0),fo([ze({reflect:!0})],vo.prototype,"role",void 0),vo=fo([Ve("vscode-table-header-cell")],vo),f({tagName:"vscode-table-header-cell",elementClass:vo,react:l(),displayName:"VscodeTableHeaderCell"});const mo=[He,x`
    :host {
      border-top-color: var(
        --vscode-editorGroup-border,
        rgba(255, 255, 255, 0.09)
      );
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var go=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let bo=class extends Be{constructor(){super(...arguments),this.role="row"}render(){return se` <slot></slot> `}};bo.styles=mo,go([ze({reflect:!0})],bo.prototype,"role",void 0),bo=go([Ve("vscode-table-row")],bo),f({tagName:"vscode-table-row",elementClass:bo,react:l(),displayName:"VscodeTableRow"});const yo=[He,x`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background, #181818);
    }
  `];var _o=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let xo=class extends Be{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return se` <slot></slot> `}};xo.styles=yo,_o([ze({type:Boolean,reflect:!0})],xo.prototype,"hidden",void 0),_o([ze({reflect:!0,attribute:"aria-labelledby"})],xo.prototype,"ariaLabelledby",void 0),_o([ze({type:Boolean,reflect:!0})],xo.prototype,"panel",void 0),_o([ze({reflect:!0})],xo.prototype,"role",void 0),_o([ze({type:Number,reflect:!0})],xo.prototype,"tabIndex",void 0),xo=_o([Ve("vscode-tab-panel")],xo);const wo=f({tagName:"vscode-tab-panel",elementClass:xo,react:l(),displayName:"VscodeTabPanel"}),ko=[He,x`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder, #2b2b2b);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background, #181818);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    .tablist {
      display: flex;
      margin-bottom: -1px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var So=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Co=class extends Be{constructor(){super(),this.panel=!1,this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=Vt()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"selected-index"===e&&this._setActiveTab(),"panel"===e&&(this._tabHeaders.forEach(e=>e.panel=null!==n),this._tabPanels.forEach(e=>e.panel=null!==n))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((e,t)=>{e.hidden=t!==this.selectedIndex}),this._tabHeaders.forEach((e,t)=>{e.active=t===this.selectedIndex})}_focusPrevTab(){0===this._tabFocus?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),"ArrowLeft"===e.key?this._focusPrevTab():"ArrowRight"===e.key&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),"Enter"===e.key&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter(e=>e instanceof Gn);e.length>0&&e.forEach(e=>e.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(e=>e instanceof xo),this._tabPanels.forEach((e,t)=>{e.ariaLabelledby=`t${this._componentId}-h${t}`,e.id=`t${this._componentId}-p${t}`,e.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(e=>e instanceof Gn),this._tabHeaders.forEach((e,t)=>{e.tabId=t,e.id=`t${this._componentId}-h${t}`,e.ariaControls=`t${this._componentId}-p${t}`,e.panel=this.panel,e.active=t===this.selectedIndex})}_onHeaderClick(e){const t=e.composedPath().find(e=>e instanceof Gn);t&&(this.selectedIndex=t.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return se`
      <div
        class=${Ye({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <div role="tablist" class="tablist">
          <slot
            name="header"
            @slotchange=${this._onHeaderSlotChange}
            role="tablist"
          ></slot>
        </div>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};Co.styles=ko,So([ze({type:Boolean,reflect:!0})],Co.prototype,"panel",void 0),So([ze({type:Number,reflect:!0,attribute:"selected-index"})],Co.prototype,"selectedIndex",void 0),So([Le({slot:"header"})],Co.prototype,"_headerSlotElements",void 0),So([Le()],Co.prototype,"_mainSlotElements",void 0),Co=So([Ve("vscode-tabs")],Co);const Eo=f({tagName:"vscode-tabs",elementClass:Co,react:l(),events:{onVscTabsSelect:"vsc-tabs-select"},displayName:"VscodeTabs"}),Po=[He,x`
    :host {
      display: inline-block;
      height: auto;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var Oo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Io=class extends Be{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(e){const t=["maxLength","minLength","required"];for(const n of e.keys())if(t.includes(String(n))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then(()=>{this._value=e})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change"))}_handleInput(){this._dataChanged(),this._setValidityFromInput()}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight)return void(this._textareaPointerCursor=!1);const t=this._textareaEl.getBoundingClientRect(),n=e.clientX;this._textareaPointerCursor=n>=t.left+t.width-14-2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return se`
      <div
        class=${Ye({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${Xe(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${Ye({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${Xe(this.maxLength)}
        minlength=${Xe(this.minLength)}
        rows=${Xe(this.rows)}
        cols=${Xe(this.cols)}
        name=${Xe(this.name)}
        placeholder=${Xe(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${Ze({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};Io.styles=Po,Io.formAssociated=!0,Io.shadowRootOptions={...Pe.shadowRootOptions,delegatesFocus:!0},Oo([ze()],Io.prototype,"autocomplete",void 0),Oo([ze({type:Boolean,reflect:!0})],Io.prototype,"autofocus",void 0),Oo([ze({attribute:"default-value"})],Io.prototype,"defaultValue",void 0),Oo([ze({type:Boolean,reflect:!0})],Io.prototype,"disabled",void 0),Oo([ze({type:Boolean,reflect:!0})],Io.prototype,"invalid",void 0),Oo([ze({attribute:!1})],Io.prototype,"label",void 0),Oo([ze({type:Number})],Io.prototype,"maxLength",void 0),Oo([ze({type:Number})],Io.prototype,"minLength",void 0),Oo([ze({type:Number})],Io.prototype,"rows",void 0),Oo([ze({type:Number})],Io.prototype,"cols",void 0),Oo([ze()],Io.prototype,"name",void 0),Oo([ze()],Io.prototype,"placeholder",void 0),Oo([ze({type:Boolean,reflect:!0})],Io.prototype,"readonly",void 0),Oo([ze()],Io.prototype,"resize",void 0),Oo([ze({type:Boolean,reflect:!0})],Io.prototype,"required",void 0),Oo([ze({type:Boolean})],Io.prototype,"spellcheck",void 0),Oo([ze({type:Boolean,reflect:!0})],Io.prototype,"monospace",void 0),Oo([ze()],Io.prototype,"value",null),Oo([Te("#textarea")],Io.prototype,"_textareaEl",void 0),Oo([Ne()],Io.prototype,"_value",void 0),Oo([Ne()],Io.prototype,"_textareaPointerCursor",void 0),Oo([Ne()],Io.prototype,"_shadow",void 0),Io=Oo([Ve("vscode-textarea")],Io);const Ao=f({tagName:"vscode-textarea",elementClass:Io,react:l(),displayName:"VscodeTextarea",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}}),zo=_(je()),No=[He,x`
    :host {
      display: inline-block;
      width: 320px;
    }

    .root {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: flex;
      max-width: 100%;
      position: relative;
      width: 100%;
    }

    :host([focused]) .root {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${zo});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${zo});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var $o=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let To=class extends Be{set type(e){this._type=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"].includes(e)?e:"text"}get type(){return this._type}set value(e){"file"!==this.type&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,t){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,"file"===this.type&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(){this._dataChanged(),this._setValidityFromInput()}_onChange(){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change"))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){"Enter"===e.key&&this._internals.form&&this._internals.form?.requestSubmit()}render(){return se`
      <div class="root">
        <slot name="content-before"></slot>
        <input
          id="input"
          type=${this.type}
          ?autofocus=${this.autofocus}
          autocomplete=${Xe(this.autocomplete)}
          aria-label=${this.label}
          ?disabled=${this.disabled}
          max=${Xe(this.max)}
          maxlength=${Xe(this.maxLength)}
          min=${Xe(this.min)}
          minlength=${Xe(this.minLength)}
          ?multiple=${this.multiple}
          name=${Xe(this.name)}
          pattern=${Xe(this.pattern)}
          placeholder=${Xe(this.placeholder)}
          ?readonly=${this.readonly}
          ?required=${this.required}
          step=${Xe(this.step)}
          .value=${this._value}
          @blur=${this._onBlur}
          @change=${this._onChange}
          @focus=${this._onFocus}
          @input=${this._onInput}
          @keydown=${this._onKeyDown}
        />
        <slot name="content-after"></slot>
      </div>
    `}};To.styles=No,To.formAssociated=!0,To.shadowRootOptions={...Pe.shadowRootOptions,delegatesFocus:!0},$o([ze()],To.prototype,"autocomplete",void 0),$o([ze({type:Boolean,reflect:!0})],To.prototype,"autofocus",void 0),$o([ze({attribute:"default-value"})],To.prototype,"defaultValue",void 0),$o([ze({type:Boolean,reflect:!0})],To.prototype,"disabled",void 0),$o([ze({type:Boolean,reflect:!0})],To.prototype,"focused",void 0),$o([ze({type:Boolean,reflect:!0})],To.prototype,"invalid",void 0),$o([ze({attribute:!1})],To.prototype,"label",void 0),$o([ze({type:Number})],To.prototype,"max",void 0),$o([ze({type:Number})],To.prototype,"maxLength",void 0),$o([ze({type:Number})],To.prototype,"min",void 0),$o([ze({type:Number})],To.prototype,"minLength",void 0),$o([ze({type:Boolean,reflect:!0})],To.prototype,"multiple",void 0),$o([ze({reflect:!0})],To.prototype,"name",void 0),$o([ze()],To.prototype,"pattern",void 0),$o([ze()],To.prototype,"placeholder",void 0),$o([ze({type:Boolean,reflect:!0})],To.prototype,"readonly",void 0),$o([ze({type:Boolean,reflect:!0})],To.prototype,"required",void 0),$o([ze({type:Number})],To.prototype,"step",void 0),$o([ze({reflect:!0})],To.prototype,"type",null),$o([ze()],To.prototype,"value",null),$o([Te("#input")],To.prototype,"_inputEl",void 0),$o([Ne()],To.prototype,"_value",void 0),$o([Ne()],To.prototype,"_type",void 0),To=$o([Ve("vscode-textfield")],To);const Ro=f({tagName:"vscode-textfield",elementClass:To,react:l(),displayName:"VscodeTextfield",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}}),Lo=[He,x`
    :host {
      display: inline-flex;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 5px;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      outline-offset: -1px;
      outline-width: 1px;
      padding: 0;
      user-select: none;
    }

    button:focus-visible {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-style: solid;
    }

    button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    button.checked {
      background-color: var(
        --vscode-inputOption-activeBackground,
        rgba(36, 137, 219, 0.51)
      );
      outline-color: var(--vscode-inputOption-activeBorder, #2488db);
      outline-style: solid;
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    button.checked vscode-icon {
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    vscode-icon {
      display: block;
      padding: 3px;
    }

    slot:not(.empty) {
      align-items: center;
      display: flex;
      height: 22px;
      padding: 0 5px 0 2px;
    }

    slot.textOnly:not(.empty) {
      padding: 0 5px;
    }
  `];var Do=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Fo=class extends Be{constructor(){super(...arguments),this.icon="",this.label=void 0,this.toggleable=!1,this.checked=!1,this._isSlotEmpty=!0}_handleSlotChange(){this._isSlotEmpty=!((this._assignedNodes?.length??0)>0)}_handleButtonClick(){this.toggleable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}render(){const e=this.checked?"true":"false";return se`
      <button
        type="button"
        aria-label=${Xe(this.label)}
        role=${Xe(this.toggleable?"switch":void 0)}
        aria-checked=${Xe(this.toggleable?e:void 0)}
        class=${Ye({checked:this.toggleable&&this.checked})}
        @click=${this._handleButtonClick}
      >
        ${this.icon?se`<vscode-icon name=${this.icon}></vscode-icon>`:ce}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${Ye({empty:this._isSlotEmpty,textOnly:!this.icon})}
        ></slot>
      </button>
    `}};var Mo;Fo.styles=Lo,Do([ze({reflect:!0})],Fo.prototype,"icon",void 0),Do([ze()],Fo.prototype,"label",void 0),Do([ze({type:Boolean,reflect:!0})],Fo.prototype,"toggleable",void 0),Do([ze({type:Boolean,reflect:!0})],Fo.prototype,"checked",void 0),Do([Ne()],Fo.prototype,"_isSlotEmpty",void 0),Do([(e,t)=>{const{slot:n}={},o="slot"+(n?`[name=${n}]`:":not([name])");return $e(e,t,{get(){const e=this.renderRoot?.querySelector(o);return e?.assignedNodes(Mo)??[]}})}],Fo.prototype,"_assignedNodes",void 0),Fo=Do([Ve("vscode-toolbar-button")],Fo),f({tagName:"vscode-toolbar-button",elementClass:Fo,react:l(),displayName:"VscodeToolbarButton",events:{onChange:"change"}});const Bo=[He,x`
    :host {
      display: block;
    }

    div {
      gap: 4px;
      display: flex;
      align-items: center;
    }
  `];let Vo=class extends Be{render(){return se`<div><slot></slot></div>`}};Vo.styles=Bo,Vo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}([Ve("vscode-toolbar-container")],Vo),f({tagName:"vscode-toolbar-container",elementClass:Vo,react:l(),displayName:"VscodeToolbarContainer"});class Ho extends Event{constructor(e,t,n,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=o??!1}}class jo{constructor(e,t,n,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){const e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ho(this.context,this.host,this.t,this.subscribe))}}class Uo{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}class qo extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}}class Wo extends Uo{constructor(e,t,n){super(void 0!==t.context?t.initialValue:n),this.onContextRequest=e=>{if(e.context!==this.context)return;const t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context)return;if((e.contextTarget??e.composedPath()[0])===this.host)return;const t=new Set;for(const[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new Ho(this.context,n,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new qo(this.context,this.host))}}function Ko({context:e}){return(t,n)=>{const o=new WeakMap;if("object"==typeof n)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new Wo(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer(t=>{o.set(t,new Wo(t,{context:e}))});const i=Object.getOwnPropertyDescriptor(t,n);let r;if(void 0===i){const e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{const e=i.set;r={...i,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,n,r)}}}function Go({context:e,subscribe:t}){return(n,o)=>{"object"==typeof o?o.addInitializer(function(){new jo(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})}):n.constructor.addInitializer(n=>{new jo(n,{context:e,callback:e=>{n[o]=e},subscribe:t})})}}const Qo=[He,x`
    :host {
      --vsc-tree-item-arrow-display: flex;
      --internal-selectionBackground: var(
        --vscode-list-inactiveSelectionBackground,
        #37373d
      );
      --internal-selectionForeground: var(--vscode-foreground, #cccccc);
      --internal-selectionIconForeground: var(
        --vscode-icon-foreground,
        #cccccc
      );
      --internal-defaultIndentGuideDisplay: none;
      --internal-highlightedIndentGuideDisplay: block;

      display: block;
    }

    :host(:hover) {
      --internal-defaultIndentGuideDisplay: block;
      --internal-highlightedIndentGuideDisplay: block;
    }

    :host(:focus-within) {
      --internal-selectionBackground: var(
        --vscode-list-activeSelectionBackground,
        #04395e
      );
      --internal-selectionForeground: var(
        --vscode-list-activeSelectionForeground,
        #ffffff
      );
      --internal-selectionIconForeground: var(
        --vscode-list-activeSelectionIconForeground,
        #ffffff
      );
    }

    :host([hide-arrows]) {
      --vsc-tree-item-arrow-display: none;
    }

    :host([indent-guides='none']),
    :host([indent-guides='none']:hover) {
      --internal-defaultIndentGuideDisplay: none;
      --internal-highlightedIndentGuideDisplay: none;
    }

    :host([indent-guides='always']),
    :host([indent-guides='always']:hover) {
      --internal-defaultIndentGuideDisplay: block;
      --internal-highlightedIndentGuideDisplay: block;
    }
  `],Yo="vscode-list",Xo=Symbol("configContext"),Zo=e=>e instanceof Element&&e.matches("vscode-tree-item"),Jo=(e,t)=>{const n=t.length,o=(i=e)instanceof Element&&i.matches("vscode-tree")?-1:e.level;var i;"branch"in e&&(e.branch=n>0),t.forEach((t,n)=>{t.path="path"in e?[...e.path,n]:[n],t.level=o+1,t.dataset.path=t.path.join(".")})},ei=e=>{const t=e.lastElementChild;return t&&Zo(t)?t.branch&&t.open?ei(t):t:e},ti=e=>{if(!e.parentElement)return null;if(!Zo(e.parentElement))return null;return ni(e.parentElement)||ti(e.parentElement)},ni=e=>{let t=e.nextElementSibling;for(;t&&!Zo(t);)t=t.nextElementSibling;return t};function oi(e){return e.parentElement&&Zo(e.parentElement)?e.parentElement:null}var ii=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const ri="none",si=[" ","ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Enter","Escape","Shift"];let li=class extends Be{constructor(){super(),this.expandMode="singleClick",this.hideArrows=!1,this.indent=8,this.indentGuides="onHover",this.multiSelect=!1,this._treeContextState={isShiftPressed:!1,activeItem:null,selectedItems:new Set,hoveredItem:null,allItems:null,itemListUpToDate:!1,focusedItem:null,prevFocusedItem:null,hasBranchItem:!1,rootElement:this,highlightedItems:new Set,highlightIndentGuides:()=>{this._highlightIndentGuides()},emitSelectEvent:()=>{this._emitSelectEvent()}},this._configContext={hideArrows:this.hideArrows,expandMode:this.expandMode,indent:this.indent,indentGuides:this.indentGuides,multiSelect:this.multiSelect},this._handleComponentKeyDown=e=>{const t=e.key;switch(si.includes(t)&&(e.stopPropagation(),e.preventDefault()),t){case" ":case"Enter":this._handleEnterPress();break;case"ArrowDown":this._handleArrowDownPress();break;case"ArrowLeft":this._handleArrowLeftPress(e);break;case"ArrowRight":this._handleArrowRightPress();break;case"ArrowUp":this._handleArrowUpPress();break;case"Shift":this._handleShiftPress()}},this._handleComponentKeyUp=e=>{"Shift"===e.key&&(this._treeContextState.isShiftPressed=!1)},this._handleSlotChange=()=>{this._treeContextState.itemListUpToDate=!1,Jo(this,this._assignedTreeItems),this.updateComplete.then(()=>{if(null===this._treeContextState.activeItem){const e=this.querySelector(":scope > vscode-tree-item");e&&(e.active=!0)}})},this.addEventListener("keyup",this._handleComponentKeyUp),this.addEventListener("keydown",this._handleComponentKeyDown)}connectedCallback(){super.connectedCallback(),this.role="tree"}willUpdate(e){this._updateConfigContext(e),e.has("multiSelect")&&(this.ariaMultiSelectable=this.multiSelect?"true":"false")}expandAll(){this.querySelectorAll("vscode-tree-item").forEach(e=>{e.branch&&(e.open=!0)})}collapseAll(){this.querySelectorAll("vscode-tree-item").forEach(e=>{e.branch&&(e.open=!1)})}updateHasBranchItemFlag(){const e=this._assignedTreeItems.some(e=>e.branch);this._treeContextState={...this._treeContextState,hasBranchItem:e}}_emitSelectEvent(){const e=new CustomEvent("vsc-tree-select",{detail:Array.from(this._treeContextState.selectedItems)});this.dispatchEvent(e)}_highlightIndentGuideOfItem(e){if(e.branch&&e.open)e.highlightedGuides=!0,this._treeContextState.highlightedItems?.add(e);else{const t=oi(e);t&&(t.highlightedGuides=!0,this._treeContextState.highlightedItems?.add(t))}}_highlightIndentGuides(){this.indentGuides!==ri&&(this._treeContextState.highlightedItems?.forEach(e=>e.highlightedGuides=!1),this._treeContextState.highlightedItems?.clear(),this._treeContextState.activeItem&&this._highlightIndentGuideOfItem(this._treeContextState.activeItem),this._treeContextState.selectedItems.forEach(e=>{this._highlightIndentGuideOfItem(e)}))}_updateConfigContext(e){const{hideArrows:t,expandMode:n,indent:o,indentGuides:i,multiSelect:r}=this;e.has("hideArrows")&&(this._configContext={...this._configContext,hideArrows:t}),e.has("expandMode")&&(this._configContext={...this._configContext,expandMode:n}),e.has("indent")&&(this._configContext={...this._configContext,indent:o}),e.has("indentGuides")&&(this._configContext={...this._configContext,indentGuides:i}),e.has("multiSelect")&&(this._configContext={...this._configContext,multiSelect:r})}_focusItem(e){e.active=!0,e.updateComplete.then(()=>{e.focus(),this._highlightIndentGuides()})}_focusPrevItem(){if(this._treeContextState.focusedItem){const e=(e=>{const{parentElement:t}=e;if(!t||!Zo(e))return null;let n=e.previousElementSibling;for(;n&&!Zo(n);)n=n.previousElementSibling;return!n&&Zo(t)?t:n&&n.branch&&n.open?ei(n):n})(this._treeContextState.focusedItem);e&&(this._focusItem(e),this._treeContextState.isShiftPressed&&this.multiSelect&&(e.selected=!e.selected,this._emitSelectEvent()))}}_focusNextItem(){if(this._treeContextState.focusedItem){const e=(e=>{const{parentElement:t}=e;if(!t||!Zo(e))return null;let n;if(e.branch&&e.open){const t=e.querySelector("vscode-tree-item");t?n=t:(n=ni(e),n||(n=ti(e)))}else n=ni(e),n||(n=ti(e));return n||e})(this._treeContextState.focusedItem);e&&(this._focusItem(e),this._treeContextState.isShiftPressed&&this.multiSelect&&(e.selected=!e.selected,this._emitSelectEvent()))}}_handleArrowRightPress(){if(!this._treeContextState.focusedItem)return;const{focusedItem:e}=this._treeContextState;e.branch&&(e.open?this._focusNextItem():e.open=!0)}_handleArrowLeftPress(e){if(e.ctrlKey)return void this.collapseAll();if(!this._treeContextState.focusedItem)return;const{focusedItem:t}=this._treeContextState,n=oi(t);t.branch&&t.open?t.open=!1:n&&n.branch&&this._focusItem(n)}_handleArrowDownPress(){this._treeContextState.focusedItem?this._focusNextItem():this._focusItem(this._assignedTreeItems[0])}_handleArrowUpPress(){this._treeContextState.focusedItem?this._focusPrevItem():this._focusItem(this._assignedTreeItems[0])}_handleEnterPress(){const{focusedItem:e}=this._treeContextState;e&&(this._treeContextState.selectedItems.forEach(e=>e.selected=!1),this._treeContextState.selectedItems.clear(),this._highlightIndentGuides(),e.selected=!0,this._emitSelectEvent(),e.branch&&(e.open=!e.open))}_handleShiftPress(){this._treeContextState.isShiftPressed=!0}render(){return se`<div>
      <slot @slotchange=${this._handleSlotChange}></slot>
    </div>`}};li.styles=Qo,ii([ze({type:String,attribute:"expand-mode"})],li.prototype,"expandMode",void 0),ii([ze({type:Boolean,reflect:!0,attribute:"hide-arrows"})],li.prototype,"hideArrows",void 0),ii([ze({type:Number,reflect:!0})],li.prototype,"indent",void 0),ii([ze({type:String,attribute:"indent-guides",useDefault:!0,reflect:!0})],li.prototype,"indentGuides",void 0),ii([ze({type:Boolean,reflect:!0,attribute:"multi-select"})],li.prototype,"multiSelect",void 0),ii([Ko({context:Yo})],li.prototype,"_treeContextState",void 0),ii([Ko({context:Xo})],li.prototype,"_configContext",void 0),ii([Le({selector:"vscode-tree-item"})],li.prototype,"_assignedTreeItems",void 0),li=ii([Ve("vscode-tree")],li),f({tagName:"vscode-tree",elementClass:li,react:l(),displayName:"VscodeTree",events:{onVscTreeSelect:"vsc-tree-select"}});const ai=[He,x`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;

      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      cursor: pointer;
      display: block;
      user-select: none;
    }

    ::slotted(vscode-icon) {
      display: block;
    }

    .root {
      display: block;
    }

    .wrapper {
      align-items: flex-start;
      color: var(--vscode-foreground, #cccccc);
      display: flex;
      flex-wrap: nowrap;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      min-height: 22px;
      outline-offset: -1px;
      padding-right: 12px;
    }

    .wrapper:hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(
        --vscode-list-hoverForeground,
        var(--vscode-foreground, #cccccc)
      );
    }

    :host([selected]) .wrapper {
      color: var(--internal-selectionForeground);
      background-color: var(--internal-selectionBackground);
    }

    :host([selected]) ::slotted(vscode-icon) {
      color: var(--internal-selectionForeground);
    }

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .wrapper.active {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline, #0078d4)
      );
      outline-style: solid;
      outline-width: 1px;
    }

    .arrow-container {
      align-items: center;
      display: var(--vsc-tree-item-arrow-display);
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .arrow-container svg {
      display: block;
      fill: var(--vscode-icon-foreground, #cccccc);
    }

    .arrow-container.icon-rotated svg {
      transform: rotate(90deg);
    }

    :host([selected]) .arrow-container svg {
      fill: var(--internal-selectionIconForeground);
    }

    .icon-container {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-right: 3px;
      min-height: 22px;
      overflow: hidden;
    }

    .icon-container slot {
      display: block;
    }

    .icon-container.has-icon {
      min-width: 22px;
      max-width: 22px;
      max-height: 22px;
    }

    :host(:is(:--show-actions, :state(show-actions))) .icon-container {
      overflow: visible;
    }

    .children {
      position: relative;
    }

    .children.guide:before {
      background-color: var(
        --vscode-tree-inactiveIndentGuidesStroke,
        rgba(88, 88, 88, 0.4)
      );
      content: '';
      display: none;
      height: 100%;
      left: var(--indentation-guide-left);
      pointer-events: none;
      position: absolute;
      width: 1px;
      z-index: 1;
    }

    .children.guide.default-guide:before {
      display: var(--internal-defaultIndentGuideDisplay);
    }

    .children.guide.highlighted-guide:before {
      display: var(--internal-highlightedIndentGuideDisplay);
      background-color: var(--vscode-tree-indentGuidesStroke, #585858);
    }

    .content {
      display: flex;
      align-items: center;
      flex-wrap: nowrap; /* prevent wrapping; allow ellipses via min-width: 0 */
      min-width: 0;
      width: 100%;
      line-height: 22px;
    }

    .label {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      flex: 0 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .description {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.7;
      display: none;
      flex: 0 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .content.has-description .description {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1 1 0%; /* description takes remaining space, yields first when shrinking */
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 0.5em;
    }

    .content.has-description .label {
      flex: 0 1 auto; /* label only grows when description missing */
    }

    .content:not(.has-description) .label {
      flex: 1 1 auto;
    }

    .label ::slotted(*) {
      display: inline-block;
      max-width: 100%;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .description ::slotted(*) {
      display: inline-block;
      max-width: 100%;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .actions {
      align-items: center;
      align-self: center;
      display: none;
      flex: 0 0 auto;
      gap: 2px;
      margin-left: auto;
      min-height: 22px;
      color: inherit;
    }

    .actions ::slotted(*) {
      align-items: center;
      display: inline-flex;
      height: 22px;
    }

    .actions ::slotted(button) {
      cursor: pointer;
    }

    .actions ::slotted([hidden]) {
      display: none !important;
    }

    :host(
        :is(
          :--has-actions:--show-actions,
          :--has-actions:state(show-actions),
          :state(has-actions):--show-actions,
          :state(has-actions):state(show-actions)
        )
      )
      .actions {
      display: inline-flex;
    }

    .decoration {
      align-items: center;
      align-self: center;
      color: inherit;
      display: none;
      flex: 0 0 auto;
      gap: 4px;
      margin-left: auto;
      min-height: 22px;
    }

    :host(:is(:--has-decoration, :state(has-decoration))) .decoration {
      display: inline-flex;
    }

    :host(:is(:--show-actions, :state(show-actions))) .decoration {
      margin-left: 6px;
    }

    :host([selected]) ::slotted([slot='decoration']),
    :host([selected]) ::slotted([slot='decoration']) * {
      color: inherit !important;
    }

    :host([selected]) .description {
      color: var(--internal-selectionForeground, #ffffff);
      opacity: 0.8;
    }

    :host([selected]) :is(:state(focus-visible), :--focus-visible) .description,
    :host([selected]:focus-within) .description {
      opacity: 0.95;
    }

    :host([branch]) ::slotted(vscode-tree-item) {
      display: none;
    }

    :host([branch][open]) ::slotted(vscode-tree-item) {
      display: block;
    }
  `];var ci,ui=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const di=se`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
  />
</svg>`;let hi=ci=class extends Be{set selected(e){this._selected=e,e?this._treeContextState.selectedItems.add(this):this._treeContextState.selectedItems.delete(this),this.ariaSelected=e?"true":"false",this._updateActionsVisibility()}get selected(){return this._selected}set path(e){this._path=e}get path(){return this._path}constructor(){super(),this.active=!1,this.branch=!1,this.hasActiveItem=!1,this.hasSelectedItem=!1,this.highlightedGuides=!1,this.open=!1,this.level=0,this._selected=!1,this._path=[],this._hasBranchIcon=!1,this._hasBranchOpenedIcon=!1,this._hasLeafIcon=!1,this._hasDescriptionSlotContent=!1,this._hasActionsSlotContent=!1,this._hasDecorationSlotContent=!1,this._treeContextState={isShiftPressed:!1,selectedItems:new Set,hoveredItem:null,allItems:null,itemListUpToDate:!1,focusedItem:null,prevFocusedItem:null,hasBranchItem:!1,rootElement:null,activeItem:null},this._isPointerInside=!1,this._hasKeyboardFocus=!1,this._handleMainSlotChange=()=>{this._mainSlotChange(),this._treeContextState.itemListUpToDate=!1},this._handleComponentFocus=()=>{this._treeContextState.focusedItem&&this._treeContextState.focusedItem!==this&&(this._treeContextState.isShiftPressed||(this._treeContextState.prevFocusedItem=this._treeContextState.focusedItem),this._treeContextState.focusedItem=null),this._treeContextState.focusedItem=this},this._handlePointerEnter=()=>{this._isPointerInside=!0,this._claimHover()},this._handlePointerLeave=e=>{this._isPointerInside=!1,this._treeContextState.hoveredItem===this&&(this._treeContextState.hoveredItem=null),this._clearHoverState();const t=e.relatedTarget;if(t instanceof Element){const e=t.closest("vscode-tree-item");e&&e!==this&&e.isConnected&&e._adoptHoverFromSibling()}},this._handleFocusIn=()=>{this._updateFocusState()},this._handleFocusOut=()=>{this._updateFocusState()},this._internals=this.attachInternals(),this.addEventListener("focus",this._handleComponentFocus),this.addEventListener("pointerenter",this._handlePointerEnter),this.addEventListener("pointerleave",this._handlePointerLeave),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut)}connectedCallback(){super.connectedCallback(),this._mainSlotChange(),this.role="treeitem",this.ariaDisabled="false"}firstUpdated(e){super.firstUpdated(e),this._refreshDescriptionSlotState(),this._refreshActionsSlotState(),this._refreshDecorationSlotState(),this.matches(":hover")?(this._isPointerInside=!0,this._claimHover()):this._updateActionsVisibility()}willUpdate(e){e.has("active")&&this._toggleActiveState(),(e.has("open")||e.has("branch"))&&this._setAriaExpanded()}_setAriaExpanded(){this.branch?this.ariaExpanded=this.open?"true":"false":this.ariaExpanded=null}_setHasActiveItemFlagOnParent(e,t){const n=function(e){return e.parentElement&&e.parentElement instanceof hi?e.parentElement:null}(e);n&&(n.hasActiveItem=t)}_refreshDescriptionSlotState(){const e=(this._descriptionSlotElements?.length??0)>0;this._hasDescriptionSlotContent=e,this._setCustomState("has-description",e)}_refreshActionsSlotState(){const e=(this._actionsSlotElements?.length??0)>0;this._hasActionsSlotContent=e,this._setCustomState("has-actions",e),this._updateActionsVisibility()}_refreshDecorationSlotState(){const e=(this._decorationSlotElements?.length??0)>0,t=this._hasDecorationSlotContent;this._hasDecorationSlotContent=e,this._setCustomState("has-decoration",e),t!==e&&this.requestUpdate()}_setCustomState(e,t){if(this._internals?.states)try{t?this._internals.states.add(e):this._internals.states.delete(e)}catch{t?this._internals.states.add(`--${e}`):this._internals.states.delete(`--${e}`)}}_getActiveElement(){const e=this.getRootNode({composed:!0});return e instanceof Document?e.activeElement instanceof Element?e.activeElement:null:e instanceof ShadowRoot&&e.activeElement instanceof Element?e.activeElement:null}_isActiveElementInActions(e){return!!e&&(this._actionsSlotElements??[]).some(t=>t===e||t.contains(e))}_updateActionsVisibility(){if(!this._hasActionsSlotContent)return void this._setCustomState("show-actions",!1);const e=this._getActiveElement(),t=this._isActiveElementInActions(e),n=this.selected||this._isPointerInside||this._hasKeyboardFocus||t;this._setCustomState("show-actions",n)}_updateFocusState(){const e=this.matches(":focus-visible");this._setCustomState("focus-visible",e);const t=this._getActiveElement();let n=null;if(t instanceof Element&&(n=t.closest("vscode-tree-item"),!n)){const e=t.getRootNode();e instanceof ShadowRoot&&e.host instanceof ci&&(n=e.host)}const o=n===this;this._hasKeyboardFocus=o,this._setCustomState("keyboard-focus",o),this._updateActionsVisibility()}_clearHoverState(){this._isPointerInside=!1,this._setCustomState("hover",!1),this._updateActionsVisibility()}_adoptHoverFromSibling(){this._isPointerInside=!0,this._claimHover()}_claimHover(){const e=this._treeContextState;e.hoveredItem&&e.hoveredItem!==this&&e.hoveredItem._clearHoverState(),e.hoveredItem=this,this._setCustomState("hover",!0),this._updateActionsVisibility()}_toggleActiveState(){this.active?(this._treeContextState.activeItem&&(this._treeContextState.activeItem.active=!1,this._setHasActiveItemFlagOnParent(this._treeContextState.activeItem,!1)),this._treeContextState.activeItem=this,this._setHasActiveItemFlagOnParent(this,!0),this.tabIndex=0,this._setCustomState("active",!0)):(this._treeContextState.activeItem===this&&(this._treeContextState.activeItem=null,this._setHasActiveItemFlagOnParent(this,!1)),this.tabIndex=-1,this._setCustomState("active",!1))}_selectItem(e){const{selectedItems:t}=this._treeContextState,{multiSelect:n}=this._configContext,o=new Set(t);n&&e?this.selected=!this.selected:(Array.from(t).forEach(e=>{e!==this&&(e.selected=!1)}),t.clear(),this.selected=!0);const i=new Set([...o,...t]);i.add(this),i.forEach(e=>e._updateActionsVisibility())}_selectRange(){const e=this._treeContextState.prevFocusedItem;if(!e||e===this)return;const t=new Set(this._treeContextState.selectedItems);this._treeContextState.itemListUpToDate||(this._treeContextState.allItems=this._treeContextState.rootElement.querySelectorAll("vscode-tree-item"),this._treeContextState.allItems&&this._treeContextState.allItems.forEach((e,t)=>{e.dataset.score=t.toString()}),this._treeContextState.itemListUpToDate=!0);let n=+(e.dataset.score??-1),o=+(this.dataset.score??-1);n>o&&([n,o]=[o,n]),Array.from(this._treeContextState.selectedItems).forEach(e=>e.selected=!1),this._treeContextState.selectedItems.clear(),this._selectItemsAndAllVisibleDescendants(n,o);const i=new Set([...t,...this._treeContextState.selectedItems]);i.add(this),i.forEach(e=>e._updateActionsVisibility())}_selectItemsAndAllVisibleDescendants(e,t){let n=e;for(;n<=t;)if(this._treeContextState.allItems){const e=this._treeContextState.allItems[n];e.branch&&!e.open?(e.selected=!0,n+=e.querySelectorAll("vscode-tree-item").length):e.branch&&e.open?(e.selected=!0,n+=this._selectItemsAndAllVisibleDescendants(n+1,t)):(e.selected=!0,n+=1)}return n}_mainSlotChange(){this._initiallyAssignedTreeItems.forEach(e=>{e.setAttribute("slot","children")})}_handleChildrenSlotChange(){Jo(this,this._childrenTreeItems),this._treeContextState.rootElement&&this._treeContextState.rootElement.updateHasBranchItemFlag()}_handleDescriptionSlotChange(){this._refreshDescriptionSlotState()}_handleActionsSlotChange(){this._refreshActionsSlotState()}_handleDecorationSlotChange(){this._refreshDecorationSlotState()}_handleContentClick(e){e.stopPropagation();const t=e.ctrlKey||e.metaKey,n=e.shiftKey;n&&this._configContext.multiSelect?(this._selectRange(),this._treeContextState.emitSelectEvent?.(),this.updateComplete.then(()=>{this._treeContextState.highlightIndentGuides?.()})):(this._selectItem(t),this._treeContextState.emitSelectEvent?.(),this.updateComplete.then(()=>{this._treeContextState.highlightIndentGuides?.()}),"singleClick"===this._configContext.expandMode&&(!this.branch||this._configContext.multiSelect&&t||(this.open=!this.open))),this.active=!0,n||(this._treeContextState.prevFocusedItem=this)}_handleDoubleClick(e){"doubleClick"===this._configContext.expandMode&&(!this.branch||this._configContext.multiSelect&&(e.ctrlKey||e.metaKey)||(this.open=!this.open))}_handleIconSlotChange(e){const t=e.target,n=t.assignedElements().length>0;switch(t.name){case"icon-branch":this._hasBranchIcon=n;break;case"icon-branch-opened":this._hasBranchOpenedIcon=n;break;case"icon-leaf":this._hasLeafIcon=n}}render(){const{hideArrows:e,indent:t,indentGuides:n}=this._configContext,{hasBranchItem:o}=this._treeContextState;let i=3+this.level*t;const r=e?3:13,s=3+this.level*t+r;this.branch||e||!o||(i+=30);const l=this._hasBranchIcon&&this.branch||this._hasBranchOpenedIcon&&this.branch&&this.open||this._hasLeafIcon&&!this.branch,a={wrapper:!0,active:this.active,"has-description":this._hasDescriptionSlotContent,"has-actions":this._hasActionsSlotContent,"has-decoration":this._hasDecorationSlotContent},c={children:!0,guide:n!==ri,"default-guide":n!==ri,"highlighted-guide":this.highlightedGuides},u={"icon-container":!0,"has-icon":l},d={content:!0,"has-description":this._hasDescriptionSlotContent,"has-decoration":this._hasDecorationSlotContent};return se` <div class="root">
      <div
        class=${Ye(a)}
        part="wrapper"
        @click=${this._handleContentClick}
        @dblclick=${this._handleDoubleClick}
        .style=${Ze({paddingLeft:`${i}px`})}
      >
        ${this.branch&&!e?se`<div
              class=${Ye({"arrow-container":!0,"icon-rotated":this.open})}
              part="arrow-icon-container"
            >
              ${di}
            </div>`:ce}
        <div class=${Ye(u)} part="icon-container">
          ${this.branch&&!this.open?se`<slot
                name="icon-branch"
                @slotchange=${this._handleIconSlotChange}
              ></slot>`:ce}
          ${this.branch&&this.open?se`<slot
                name="icon-branch-opened"
                @slotchange=${this._handleIconSlotChange}
              ></slot>`:ce}
          ${this.branch?ce:se`<slot
                name="icon-leaf"
                @slotchange=${this._handleIconSlotChange}
              ></slot>`}
        </div>
        <div class=${Ye(d)} part="content">
          <span class="label" part="label">
            <slot @slotchange=${this._handleMainSlotChange}></slot>
          </span>
          <span
            class="description"
            part="description"
            ?hidden=${!this._hasDescriptionSlotContent}
          >
            <slot
              name="description"
              @slotchange=${this._handleDescriptionSlotChange}
            ></slot>
          </span>
          <div class="actions" part="actions">
            <slot
              name="actions"
              @slotchange=${this._handleActionsSlotChange}
            ></slot>
          </div>
          <div class="decoration" part="decoration">
            <slot
              name="decoration"
              @slotchange=${this._handleDecorationSlotChange}
            ></slot>
          </div>
        </div>
      </div>
      <div
        class=${Ye(c)}
        .style=${Ze({"--indentation-guide-left":`${s}px`})}
        role="group"
        part="children"
      >
        <slot
          name="children"
          @slotchange=${this._handleChildrenSlotChange}
        ></slot>
      </div>
    </div>`}};hi.styles=ai,ui([ze({type:Boolean})],hi.prototype,"active",void 0),ui([ze({type:Boolean,reflect:!0})],hi.prototype,"branch",void 0),ui([ze({type:Boolean})],hi.prototype,"hasActiveItem",void 0),ui([ze({type:Boolean})],hi.prototype,"hasSelectedItem",void 0),ui([ze({type:Boolean})],hi.prototype,"highlightedGuides",void 0),ui([ze({type:Boolean,reflect:!0})],hi.prototype,"open",void 0),ui([ze({type:Number,reflect:!0})],hi.prototype,"level",void 0),ui([ze({type:Boolean,reflect:!0})],hi.prototype,"selected",null),ui([Ne()],hi.prototype,"_hasBranchIcon",void 0),ui([Ne()],hi.prototype,"_hasBranchOpenedIcon",void 0),ui([Ne()],hi.prototype,"_hasLeafIcon",void 0),ui([Ne()],hi.prototype,"_hasDescriptionSlotContent",void 0),ui([Ne()],hi.prototype,"_hasActionsSlotContent",void 0),ui([Ne()],hi.prototype,"_hasDecorationSlotContent",void 0),ui([Go({context:Yo,subscribe:!0})],hi.prototype,"_treeContextState",void 0),ui([Go({context:Xo,subscribe:!0})],hi.prototype,"_configContext",void 0),ui([Le({selector:"vscode-tree-item"})],hi.prototype,"_initiallyAssignedTreeItems",void 0),ui([Le({selector:"vscode-tree-item",slot:"children"})],hi.prototype,"_childrenTreeItems",void 0),ui([Le({slot:"description",flatten:!0})],hi.prototype,"_descriptionSlotElements",void 0),ui([Le({slot:"actions",flatten:!0})],hi.prototype,"_actionsSlotElements",void 0),ui([Le({slot:"decoration",flatten:!0})],hi.prototype,"_decorationSlotElements",void 0),hi=ci=ui([Ve("vscode-tree-item")],hi),f({tagName:"vscode-tree-item",elementClass:hi,react:l(),displayName:"VscodeTreeItem"});const pi=s().createContext();function fi(){const e=(0,s().useContext)(pi),[t,n]=(0,s().useReducer)((e,t)=>({...e,...t}),{appName:"",appShortName:"",appDescription:"",productVendor:"",productName:"",appPublisher:"",appType:""}),{appName:o,appShortName:i,appDescription:l,appType:a,appPublisher:c,productName:u,productVendor:d}=t,h=function(e){const{name:t,value:o}=e.target;n({[t]:o})};return(0,r().jsxs)("header",{children:[(0,r().jsxs)("h1",{children:["SOAR App Wizard ",(0,r().jsx)(Ke,{children:"experimental"})]}),(0,r().jsx)("p",{children:"Bootstrap a new SOAR App and save it to a local directory."}),(0,r().jsxs)(Eo,{children:[(0,r().jsx)(Qn,{slot:"header",children:"Basic Information"}),(0,r().jsx)(wo,{children:(0,r().jsxs)("section",{style:{display:"flex",flexDirection:"column",width:"80%",gap:"10px"},children:[(0,r().jsx)("label",{htmlFor:"appName",children:"App Name (Display Name)"}),(0,r().jsx)(Ro,{id:"appName",onChange:h,name:"appName",value:o}),(0,r().jsx)("label",{htmlFor:"appShortName",children:"App Shortname (File Prefix)"}),(0,r().jsx)(Ro,{id:"appShortName",onChange:h,name:"appShortName",value:i}),(0,r().jsx)("label",{htmlFor:"appDescription",children:"App Description"}),(0,r().jsx)(Ao,{id:"appDescription",onChange:h,name:"appDescription",value:l}),(0,r().jsx)("label",{htmlFor:"appPublisher",children:"App Publisher"}),(0,r().jsx)(Ro,{id:"appPublisher",onChange:h,name:"appPublisher",value:c,placeholder:"Splunk Community"}),(0,r().jsx)("label",{htmlFor:"productName",children:"Product Name"}),(0,r().jsx)(Ro,{id:"productName",onChange:h,name:"productName",value:u}),(0,r().jsx)("label",{htmlFor:"productVendor",children:"Product Vendor"}),(0,r().jsx)(Ro,{id:"productVendor",onChange:h,name:"productVendor",value:d}),(0,r().jsx)("label",{htmlFor:"appType",children:"App Type"}),(0,r().jsxs)(Fn,{id:"appType",value:a,onChange:h,name:"appType",children:[(0,r().jsx)(wn,{value:"information",children:"information"}),(0,r().jsx)(wn,{value:"ticketing",children:"ticketing"})]})]})})]}),(0,r().jsx)(st,{onClick:function(){console.log(t),e.postMessage({command:"createApp",app:t})},children:"Create"})]})}a();const vi=acquireVsCodeApi();(0,t().createRoot)(document.getElementById("root")).render((0,r().jsx)(pi.Provider,{value:vi,children:(0,r().jsx)(fi,{})}))})();