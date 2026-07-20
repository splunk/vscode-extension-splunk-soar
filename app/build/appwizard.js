/*! For license information please see appwizard.js.LICENSE.txt */
(()=>{"use strict";var e={551(e,t,n){var o=n(540),i=n(982);function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var d=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),u=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},f={};function v(e,t,n,o,i,r,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=s}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new v(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new v(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new v(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new v(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new v(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new v(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,o){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:o||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,o)&&(n=null),o||null===i?function(e){return!!u.call(f,e)||!u.call(p,e)&&(h.test(e)?f[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,o=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(m,b);g[t]=new v(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(m,b);g[t]=new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(m,b);g[t]=new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});var _=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),w=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),P=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function N(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=L&&e[L]||e["@@iterator"])?e:null}var T,D=Object.assign;function B(e){if(void 0===T)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return"\n"+T+e}var V=!1;function F(e,t){if(!e||V)return"";V=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var o=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){o=e}e.call(t.prototype)}else{try{throw Error()}catch(e){o=e}e()}}catch(t){if(t&&o&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),r=o.stack.split("\n"),s=i.length-1,a=r.length-1;1<=s&&0<=a&&i[s]!==r[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==r[a]){if(1!==s||1!==a)do{if(s--,0>--a||i[s]!==r[a]){var l="\n"+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=a);break}}}finally{V=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?B(e):""}function M(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return F(e.type,!1);case 11:return F(e.type.render,!1);case 1:return F(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case k:return"Fragment";case w:return"Portal";case C:return"Profiler";case S:return"StrictMode";case $:return"Suspense";case O:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case I:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return H(e(t))}catch(e){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function j(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function W(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){o=""+e,r.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=q(e)?e.checked?"true":"false":e.value),(e=o)!==n&&(t.setValue(e),!0)}function G(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,o=null!=t.checked?t.checked:t.defaultChecked;n=j(null!=t.value?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=j(t.value),o=t.type;if(null!=n)"number"===o?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===o||"reset"===o)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,j(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!("submit"!==o&&"reset"!==o||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+j(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(o&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function oe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(r(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(r(92));if(te(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:j(n)}}function re(e,t){var n=j(t.value),o=j(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=o&&(e.defaultValue=""+o)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ae(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ae(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function fe(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var o=0===n.indexOf("--"),i=fe(n,t[n],o);"float"===n&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach(function(e){pe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});var ge=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function me(e,t){if(t){if(ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(r(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(r(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(r(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function _e(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var xe=null,we=null,ke=null;function Se(e){if(e=yi(e)){if("function"!=typeof xe)throw Error(r(280));var t=e.stateNode;t&&(t=xi(t),xe(e.stateNode,e.type,t))}}function Ce(e){we?ke?ke.push(e):ke=[e]:we=e}function Ee(){if(we){var e=we,t=ke;if(ke=we=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function Pe(e,t){return e(t)}function Ie(){}var $e=!1;function Oe(e,t,n){if($e)return e(t,n);$e=!0;try{return Pe(e,t,n)}finally{$e=!1,(null!==we||null!==ke)&&(Ie(),Ee())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var o=xi(n);if(null===o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(r(231,t,typeof n));return n}var Re=!1;if(d)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Re=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(e){Re=!1}function Le(e,t,n,o,i,r,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Ne=!1,Te=null,De=!1,Be=null,Ve={onError:function(e){Ne=!0,Te=e}};function Fe(e,t,n,o,i,r,s,a,l){Ne=!1,Te=null,Le.apply(Ve,arguments)}function Me(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function Ue(e){if(Me(e)!==e)throw Error(r(188))}function je(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Me(e)))throw Error(r(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(o=i.return)){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ue(i),e;if(s===o)return Ue(i),t;s=s.sibling}throw Error(r(188))}if(n.return!==o.return)n=i,o=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,o=s;break}if(l===o){a=!0,o=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,o=i;break}if(l===o){a=!0,o=s,n=i;break}l=l.sibling}if(!a)throw Error(r(189))}}if(n.alternate!==o)throw Error(r(190))}if(3!==n.tag)throw Error(r(188));return n.stateNode.current===n?e:t}(e),null!==e?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var We=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Ye=i.unstable_now,Xe=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,Je=i.unstable_UserBlockingPriority,et=i.unstable_NormalPriority,tt=i.unstable_LowPriority,nt=i.unstable_IdlePriority,ot=null,it=null,rt=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(st(e)/at|0)|0},st=Math.log,at=Math.LN2,lt=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ut(e,t){var n=e.pendingLanes;if(0===n)return 0;var o=0,i=e.suspendedLanes,r=e.pingedLanes,s=268435455&n;if(0!==s){var a=s&~i;0!==a?o=dt(a):0!==(r&=s)&&(o=dt(r))}else 0!==(s=n&~i)?o=dt(s):0!==r&&(o=dt(r));if(0===o)return 0;if(0!==t&&t!==o&&0===(t&i)&&((i=o&-o)>=(r=t&-t)||16===i&&4194240&r))return t;if(4&o&&(o|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=o;0<t;)i=1<<(n=31-rt(t)),o|=e[n],t&=~i;return o}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ft(){var e=lt;return!(4194240&(lt<<=1))&&(lt=64),e}function vt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-rt(t)]=n}function mt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-rt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var bt=0;function yt(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var _t,xt,wt,kt,St,Ct=!1,Et=[],Pt=null,It=null,$t=null,Ot=new Map,At=new Map,Rt=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function Nt(e,t,n,o,i,r){return null===e||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[i]},null!==t&&null!==(t=yi(t))&&xt(t),e):(e.eventSystemFlags|=o,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Tt(e){var t=bi(e.target);if(null!==t){var n=Me(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void St(e.priority,function(){wt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&xt(t),e.blockedOn=n,!1;var o=new(n=e.nativeEvent).constructor(n.type,n);ye=o,n.target.dispatchEvent(o),ye=null,t.shift()}return!0}function Bt(e,t,n){Dt(e)&&n.delete(t)}function Vt(){Ct=!1,null!==Pt&&Dt(Pt)&&(Pt=null),null!==It&&Dt(It)&&(It=null),null!==$t&&Dt($t)&&($t=null),Ot.forEach(Bt),At.forEach(Bt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function Mt(e){function t(t){return Ft(t,e)}if(0<Et.length){Ft(Et[0],e);for(var n=1;n<Et.length;n++){var o=Et[n];o.blockedOn===e&&(o.blockedOn=null)}}for(null!==Pt&&Ft(Pt,e),null!==It&&Ft(It,e),null!==$t&&Ft($t,e),Ot.forEach(t),At.forEach(t),n=0;n<Rt.length;n++)(o=Rt[n]).blockedOn===e&&(o.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Tt(n),null===n.blockedOn&&Rt.shift()}var Ht=_.ReactCurrentBatchConfig,Ut=!0;function jt(e,t,n,o){var i=bt,r=Ht.transition;Ht.transition=null;try{bt=1,Wt(e,t,n,o)}finally{bt=i,Ht.transition=r}}function qt(e,t,n,o){var i=bt,r=Ht.transition;Ht.transition=null;try{bt=4,Wt(e,t,n,o)}finally{bt=i,Ht.transition=r}}function Wt(e,t,n,o){if(Ut){var i=Gt(e,t,n,o);if(null===i)jo(e,t,o,Kt,n),Lt(e,o);else if(function(e,t,n,o,i){switch(t){case"focusin":return Pt=Nt(Pt,e,t,n,o,i),!0;case"dragenter":return It=Nt(It,e,t,n,o,i),!0;case"mouseover":return $t=Nt($t,e,t,n,o,i),!0;case"pointerover":var r=i.pointerId;return Ot.set(r,Nt(Ot.get(r)||null,e,t,n,o,i)),!0;case"gotpointercapture":return r=i.pointerId,At.set(r,Nt(At.get(r)||null,e,t,n,o,i)),!0}return!1}(i,e,t,n,o))o.stopPropagation();else if(Lt(e,o),4&t&&-1<zt.indexOf(e)){for(;null!==i;){var r=yi(i);if(null!==r&&_t(r),null===(r=Gt(e,t,n,o))&&jo(e,t,o,Kt,n),r===i)break;i=r}null!==i&&o.stopPropagation()}else jo(e,t,o,null,n)}}var Kt=null;function Gt(e,t,n,o){if(Kt=null,null!==(e=bi(e=_e(o))))if(null===(t=Me(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case Je:return 4;case et:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Yt=null,Xt=null,Zt=null;function Jt(){if(Zt)return Zt;var e,t,n=Xt,o=n.length,i="value"in Yt?Yt.value:Yt.textContent,r=i.length;for(e=0;e<o&&n[e]===i[e];e++);var s=o-e;for(t=1;t<=s&&n[o-t]===i[r-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function en(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tn(){return!0}function nn(){return!1}function on(e){function t(t,n,o,i,r){for(var s in this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=r,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?tn:nn,this.isPropagationStopped=nn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tn)},persist:function(){},isPersistent:tn}),t}var rn,sn,an,ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(ln),dn=D({},ln,{view:0,detail:0}),un=on(dn),hn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&"mousemove"===e.type?(rn=e.screenX-an.screenX,sn=e.screenY-an.screenY):sn=rn=0,an=e),rn)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),pn=on(hn),fn=on(D({},hn,{dataTransfer:0})),vn=on(D({},dn,{relatedTarget:0})),gn=on(D({},ln,{animationName:0,elapsedTime:0,pseudoElement:0})),mn=D({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(mn),yn=on(D({},ln,{data:0})),_n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=wn[e])&&!!t[e]}function Sn(){return kn}var Cn=D({},dn,{key:function(e){if(e.key){var t=_n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=en(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return"keypress"===e.type?en(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?en(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(Cn),Pn=on(D({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),In=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),$n=on(D({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=D({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=on(On),Rn=[9,13,27,32],zn=d&&"CompositionEvent"in window,Ln=null;d&&"documentMode"in document&&(Ln=document.documentMode);var Nn=d&&"TextEvent"in window&&!Ln,Tn=d&&(!zn||Ln&&8<Ln&&11>=Ln),Dn=String.fromCharCode(32),Bn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Mn=!1,Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function jn(e,t,n,o){Ce(o),0<(t=Wo(t,"onChange")).length&&(n=new cn("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var qn=null,Wn=null;function Kn(e){Bo(e,0)}function Gn(e){if(K(_i(e)))return e}function Qn(e,t){if("change"===e)return t}var Yn=!1;if(d){var Xn;if(d){var Zn="oninput"in document;if(!Zn){var Jn=document.createElement("div");Jn.setAttribute("oninput","return;"),Zn="function"==typeof Jn.oninput}Xn=Zn}else Xn=!1;Yn=Xn&&(!document.documentMode||9<document.documentMode)}function eo(){qn&&(qn.detachEvent("onpropertychange",to),Wn=qn=null)}function to(e){if("value"===e.propertyName&&Gn(Wn)){var t=[];jn(t,Wn,e,_e(e)),Oe(Kn,t)}}function no(e,t,n){"focusin"===e?(eo(),Wn=n,(qn=t).attachEvent("onpropertychange",to)):"focusout"===e&&eo()}function oo(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Wn)}function io(e,t){if("click"===e)return Gn(t)}function ro(e,t){if("input"===e||"change"===e)return Gn(t)}var so="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ao(e,t){if(so(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!u.call(t,i)||!so(e[i],t[i]))return!1}return!0}function lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function co(e,t){var n,o=lo(e);for(e=0;o;){if(3===o.nodeType){if(n=e+o.textContent.length,e<=t&&n>=t)return{node:o,offset:t-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=lo(o)}}function uo(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?uo(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ho(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fo(e){var t=ho(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uo(n.ownerDocument.documentElement,n)){if(null!==o&&po(n))if(t=o.start,void 0===(e=o.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,r=Math.min(o.start,i);o=void 0===o.end?r:Math.min(o.end,i),!e.extend&&r>o&&(i=o,o=r,r=i),i=co(n,r);var s=co(n,o);i&&s&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vo=d&&"documentMode"in document&&11>=document.documentMode,go=null,mo=null,bo=null,yo=!1;function _o(e,t,n){var o=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yo||null==go||go!==G(o)||(o="selectionStart"in(o=go)&&po(o)?{start:o.selectionStart,end:o.selectionEnd}:{anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},bo&&ao(bo,o)||(bo=o,0<(o=Wo(mo,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=go)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wo={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},ko={},So={};function Co(e){if(ko[e])return ko[e];if(!wo[e])return e;var t,n=wo[e];for(t in n)if(n.hasOwnProperty(t)&&t in So)return ko[e]=n[t];return e}d&&(So=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);var Eo=Co("animationend"),Po=Co("animationiteration"),Io=Co("animationstart"),$o=Co("transitionend"),Oo=new Map,Ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ro(e,t){Oo.set(e,t),l(t,[e])}for(var zo=0;zo<Ao.length;zo++){var Lo=Ao[zo];Ro(Lo.toLowerCase(),"on"+(Lo[0].toUpperCase()+Lo.slice(1)))}Ro(Eo,"onAnimationEnd"),Ro(Po,"onAnimationIteration"),Ro(Io,"onAnimationStart"),Ro("dblclick","onDoubleClick"),Ro("focusin","onFocus"),Ro("focusout","onBlur"),Ro($o,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),To=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Do(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,o,i,s,a,l,c){if(Fe.apply(this,arguments),Ne){if(!Ne)throw Error(r(198));var d=Te;Ne=!1,Te=null,De||(De=!0,Be=d)}}(o,t,void 0,e),e.currentTarget=null}function Bo(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var s=o.length-1;0<=s;s--){var a=o[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==r&&i.isPropagationStopped())break e;Do(i,a,c),r=l}else for(s=0;s<o.length;s++){if(l=(a=o[s]).instance,c=a.currentTarget,a=a.listener,l!==r&&i.isPropagationStopped())break e;Do(i,a,c),r=l}}}if(De)throw e=Be,De=!1,Be=null,e}function Vo(e,t){var n=t[vi];void 0===n&&(n=t[vi]=new Set);var o=e+"__bubble";n.has(o)||(Uo(t,e,2,!1),n.add(o))}function Fo(e,t,n){var o=0;t&&(o|=4),Uo(n,e,o,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Ho(e){if(!e[Mo]){e[Mo]=!0,s.forEach(function(t){"selectionchange"!==t&&(To.has(t)||Fo(t,!1,e),Fo(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mo]||(t[Mo]=!0,Fo("selectionchange",!1,t))}}function Uo(e,t,n,o){switch(Qt(t)){case 1:var i=jt;break;case 4:i=qt;break;default:i=Wt}n=i.bind(null,t,n,e),i=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),o?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function jo(e,t,n,o,i){var r=o;if(!(1&t||2&t||null===o))e:for(;;){if(null===o)return;var s=o.tag;if(3===s||4===s){var a=o.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===s)for(s=o.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==a;){if(null===(s=bi(a)))return;if(5===(l=s.tag)||6===l){o=r=s;continue e}a=a.parentNode}}o=o.return}Oe(function(){var o=r,i=_e(n),s=[];e:{var a=Oo.get(e);if(void 0!==a){var l=cn,c=e;switch(e){case"keypress":if(0===en(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=vn;break;case"focusout":c="blur",l=vn;break;case"beforeblur":case"afterblur":l=vn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=In;break;case Eo:case Po:case Io:l=gn;break;case $o:l=$n;break;case"scroll":l=un;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Pn}var d=!!(4&t),u=!d&&"scroll"===e,h=d?null!==a?a+"Capture":null:a;d=[];for(var p,f=o;null!==f;){var v=(p=f).stateNode;if(5===p.tag&&null!==v&&(p=v,null!==h&&null!=(v=Ae(f,h))&&d.push(qo(f,v,p))),u)break;f=f.return}0<d.length&&(a=new l(a,c,null,n,i),s.push({event:a,listeners:d}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===ye||!(c=n.relatedTarget||n.fromElement)||!bi(c)&&!c[fi])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=o,null!==(c=(c=n.relatedTarget||n.toElement)?bi(c):null)&&(c!==(u=Me(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=o),l!==c)){if(d=pn,v="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(d=Pn,v="onPointerLeave",h="onPointerEnter",f="pointer"),u=null==l?a:_i(l),p=null==c?a:_i(c),(a=new d(v,f+"leave",l,n,i)).target=u,a.relatedTarget=p,v=null,bi(i)===o&&((d=new d(h,f+"enter",c,n,i)).target=p,d.relatedTarget=u,v=d),u=v,l&&c)e:{for(h=c,f=0,p=d=l;p;p=Ko(p))f++;for(p=0,v=h;v;v=Ko(v))p++;for(;0<f-p;)d=Ko(d),f--;for(;0<p-f;)h=Ko(h),p--;for(;f--;){if(d===h||null!==h&&d===h.alternate)break e;d=Ko(d),h=Ko(h)}d=null}else d=null;null!==l&&Go(s,a,l,d,!1),null!==c&&null!==u&&Go(s,u,c,d,!0)}if("select"===(l=(a=o?_i(o):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Qn;else if(Un(a))if(Yn)g=ro;else{g=oo;var m=no}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=io);switch(g&&(g=g(e,o))?jn(s,g,n,i):(m&&m(e,a,o),"focusout"===e&&(m=a._wrapperState)&&m.controlled&&"number"===a.type&&ee(a,"number",a.value)),m=o?_i(o):window,e){case"focusin":(Un(m)||"true"===m.contentEditable)&&(go=m,mo=o,bo=null);break;case"focusout":bo=mo=go=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,_o(s,n,i);break;case"selectionchange":if(vo)break;case"keydown":case"keyup":_o(s,n,i)}var b;if(zn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Mn?Vn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Tn&&"ko"!==n.locale&&(Mn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Mn&&(b=Jt()):(Xt="value"in(Yt=i)?Yt.value:Yt.textContent,Mn=!0)),0<(m=Wo(o,y)).length&&(y=new yn(y,e,null,n,i),s.push({event:y,listeners:m}),(b||null!==(b=Fn(n)))&&(y.data=b))),(b=Nn?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Dn);case"textInput":return(e=t.data)===Dn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Mn)return"compositionend"===e||!zn&&Vn(e,t)?(e=Jt(),Zt=Xt=Yt=null,Mn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tn&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(o=Wo(o,"onBeforeInput")).length&&(i=new yn("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:o}),i.data=b)}Bo(s,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",o=[];null!==e;){var i=e,r=i.stateNode;5===i.tag&&null!==r&&(i=r,null!=(r=Ae(e,n))&&o.unshift(qo(e,r,i)),null!=(r=Ae(e,t))&&o.push(qo(e,r,i))),e=e.return}return o}function Ko(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Go(e,t,n,o,i){for(var r=t._reactName,s=[];null!==n&&n!==o;){var a=n,l=a.alternate,c=a.stateNode;if(null!==l&&l===o)break;5===a.tag&&null!==c&&(a=c,i?null!=(l=Ae(n,r))&&s.unshift(qo(n,l,a)):i||null!=(l=Ae(n,r))&&s.push(qo(n,l,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var Qo=/\r\n?/g,Yo=/\u0000|\uFFFD/g;function Xo(e){return("string"==typeof e?e:""+e).replace(Qo,"\n").replace(Yo,"")}function Zo(e,t,n){if(t=Xo(t),Xo(e)!==t&&n)throw Error(r(425))}function Jo(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var oi="function"==typeof setTimeout?setTimeout:void 0,ii="function"==typeof clearTimeout?clearTimeout:void 0,ri="function"==typeof Promise?Promise:void 0,si="function"==typeof queueMicrotask?queueMicrotask:void 0!==ri?function(e){return ri.resolve(null).then(e).catch(ai)}:oi;function ai(e){setTimeout(function(){throw e})}function li(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===o)return e.removeChild(i),void Mt(t);o--}else"$"!==n&&"$?"!==n&&"$!"!==n||o++;n=i}while(n);Mt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),hi="__reactFiber$"+ui,pi="__reactProps$"+ui,fi="__reactContainer$"+ui,vi="__reactEvents$"+ui,gi="__reactListeners$"+ui,mi="__reactHandles$"+ui;function bi(e){var t=e[hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fi]||n[hi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[hi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[hi]||e[fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function _i(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(r(33))}function xi(e){return e[pi]||null}var wi=[],ki=-1;function Si(e){return{current:e}}function Ci(e){0>ki||(e.current=wi[ki],wi[ki]=null,ki--)}function Ei(e,t){ki++,wi[ki]=e.current,e.current=t}var Pi={},Ii=Si(Pi),$i=Si(!1),Oi=Pi;function Ai(e,t){var n=e.type.contextTypes;if(!n)return Pi;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i,r={};for(i in n)r[i]=t[i];return o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ri(e){return null!=e.childContextTypes}function zi(){Ci($i),Ci(Ii)}function Li(e,t,n){if(Ii.current!==Pi)throw Error(r(168));Ei(Ii,t),Ei($i,n)}function Ni(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,"function"!=typeof o.getChildContext)return n;for(var i in o=o.getChildContext())if(!(i in t))throw Error(r(108,U(e)||"Unknown",i));return D({},n,o)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,Oi=Ii.current,Ei(Ii,e),Ei($i,$i.current),!0}function Di(e,t,n){var o=e.stateNode;if(!o)throw Error(r(169));n?(e=Ni(e,t,Oi),o.__reactInternalMemoizedMergedChildContext=e,Ci($i),Ci(Ii),Ei(Ii,e)):Ci($i),Ei($i,n)}var Bi=null,Vi=!1,Fi=!1;function Mi(e){null===Bi?Bi=[e]:Bi.push(e)}function Hi(){if(!Fi&&null!==Bi){Fi=!0;var e=0,t=bt;try{var n=Bi;for(bt=1;e<n.length;e++){var o=n[e];do{o=o(!0)}while(null!==o)}Bi=null,Vi=!1}catch(t){throw null!==Bi&&(Bi=Bi.slice(e+1)),We(Ze,Hi),t}finally{bt=t,Fi=!1}}return null}var Ui=[],ji=0,qi=null,Wi=0,Ki=[],Gi=0,Qi=null,Yi=1,Xi="";function Zi(e,t){Ui[ji++]=Wi,Ui[ji++]=qi,qi=e,Wi=t}function Ji(e,t,n){Ki[Gi++]=Yi,Ki[Gi++]=Xi,Ki[Gi++]=Qi,Qi=e;var o=Yi;e=Xi;var i=32-rt(o)-1;o&=~(1<<i),n+=1;var r=32-rt(t)+i;if(30<r){var s=i-i%5;r=(o&(1<<s)-1).toString(32),o>>=s,i-=s,Yi=1<<32-rt(t)+i|n<<i|o,Xi=r+e}else Yi=1<<r|n<<i|o,Xi=e}function er(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function tr(e){for(;e===qi;)qi=Ui[--ji],Ui[ji]=null,Wi=Ui[--ji],Ui[ji]=null;for(;e===Qi;)Qi=Ki[--Gi],Ki[Gi]=null,Xi=Ki[--Gi],Ki[Gi]=null,Yi=Ki[--Gi],Ki[Gi]=null}var nr=null,or=null,ir=!1,rr=null;function sr(e,t){var n=$c(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ar(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,nr=e,or=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,nr=e,or=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qi?{id:Yi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=$c(18,null,null,0)).stateNode=t,n.return=e,e.child=n,nr=e,or=null,!0);default:return!1}}function lr(e){return!(!(1&e.mode)||128&e.flags)}function cr(e){if(ir){var t=or;if(t){var n=t;if(!ar(e,t)){if(lr(e))throw Error(r(418));t=ci(n.nextSibling);var o=nr;t&&ar(e,t)?sr(o,n):(e.flags=-4097&e.flags|2,ir=!1,nr=e)}}else{if(lr(e))throw Error(r(418));e.flags=-4097&e.flags|2,ir=!1,nr=e}}}function dr(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;nr=e}function ur(e){if(e!==nr)return!1;if(!ir)return dr(e),ir=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=or)){if(lr(e))throw hr(),Error(r(418));for(;t;)sr(e,t),t=ci(t.nextSibling)}if(dr(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){or=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}or=null}}else or=nr?ci(e.stateNode.nextSibling):null;return!0}function hr(){for(var e=or;e;)e=ci(e.nextSibling)}function pr(){or=nr=null,ir=!1}function fr(e){null===rr?rr=[e]:rr.push(e)}var vr=_.ReactCurrentBatchConfig;function gr(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(r(309));var o=n.stateNode}if(!o)throw Error(r(147,e));var i=o,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function br(e){return(0,e._init)(e._payload)}function yr(e){function t(t,n){if(e){var o=t.deletions;null===o?(t.deletions=[n],t.flags|=16):o.push(n)}}function n(n,o){if(!e)return null;for(;null!==o;)t(n,o),o=o.sibling;return null}function o(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Ac(e,t)).index=0,e.sibling=null,e}function s(t,n,o){return t.index=o,e?null!==(o=t.alternate)?(o=o.index)<n?(t.flags|=2,n):o:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,o){return null===t||6!==t.tag?((t=Nc(n,e.mode,o)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,o){var r=n.type;return r===k?u(e,t,n.props.children,o,n.key):null!==t&&(t.elementType===r||"object"==typeof r&&null!==r&&r.$$typeof===R&&br(r)===t.type)?((o=i(t,n.props)).ref=gr(e,t,n),o.return=e,o):((o=Rc(n.type,n.key,n.props,null,e.mode,o)).ref=gr(e,t,n),o.return=e,o)}function d(e,t,n,o){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Tc(n,e.mode,o)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,o,r){return null===t||7!==t.tag?((t=zc(n,e.mode,o,r)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Nc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Rc(t.type,t.key,t.props,null,e.mode,n)).ref=gr(e,null,t),n.return=e,n;case w:return(t=Tc(t,e.mode,n)).return=e,t;case R:return h(e,(0,t._init)(t._payload),n)}if(te(t)||N(t))return(t=zc(t,e.mode,n,null)).return=e,t;mr(e,t)}return null}function p(e,t,n,o){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:l(e,t,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===i?c(e,t,n,o):null;case w:return n.key===i?d(e,t,n,o):null;case R:return p(e,t,(i=n._init)(n._payload),o)}if(te(n)||N(n))return null!==i?null:u(e,t,n,o,null);mr(e,n)}return null}function f(e,t,n,o,i){if("string"==typeof o&&""!==o||"number"==typeof o)return l(t,e=e.get(n)||null,""+o,i);if("object"==typeof o&&null!==o){switch(o.$$typeof){case x:return c(t,e=e.get(null===o.key?n:o.key)||null,o,i);case w:return d(t,e=e.get(null===o.key?n:o.key)||null,o,i);case R:return f(e,t,n,(0,o._init)(o._payload),i)}if(te(o)||N(o))return u(t,e=e.get(n)||null,o,i,null);mr(t,o)}return null}function v(i,r,a,l){for(var c=null,d=null,u=r,v=r=0,g=null;null!==u&&v<a.length;v++){u.index>v?(g=u,u=null):g=u.sibling;var m=p(i,u,a[v],l);if(null===m){null===u&&(u=g);break}e&&u&&null===m.alternate&&t(i,u),r=s(m,r,v),null===d?c=m:d.sibling=m,d=m,u=g}if(v===a.length)return n(i,u),ir&&Zi(i,v),c;if(null===u){for(;v<a.length;v++)null!==(u=h(i,a[v],l))&&(r=s(u,r,v),null===d?c=u:d.sibling=u,d=u);return ir&&Zi(i,v),c}for(u=o(i,u);v<a.length;v++)null!==(g=f(u,i,v,a[v],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?v:g.key),r=s(g,r,v),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach(function(e){return t(i,e)}),ir&&Zi(i,v),c}function g(i,a,l,c){var d=N(l);if("function"!=typeof d)throw Error(r(150));if(null==(l=d.call(l)))throw Error(r(151));for(var u=d=null,v=a,g=a=0,m=null,b=l.next();null!==v&&!b.done;g++,b=l.next()){v.index>g?(m=v,v=null):m=v.sibling;var y=p(i,v,b.value,c);if(null===y){null===v&&(v=m);break}e&&v&&null===y.alternate&&t(i,v),a=s(y,a,g),null===u?d=y:u.sibling=y,u=y,v=m}if(b.done)return n(i,v),ir&&Zi(i,g),d;if(null===v){for(;!b.done;g++,b=l.next())null!==(b=h(i,b.value,c))&&(a=s(b,a,g),null===u?d=b:u.sibling=b,u=b);return ir&&Zi(i,g),d}for(v=o(i,v);!b.done;g++,b=l.next())null!==(b=f(v,i,g,b.value,c))&&(e&&null!==b.alternate&&v.delete(null===b.key?g:b.key),a=s(b,a,g),null===u?d=b:u.sibling=b,u=b);return e&&v.forEach(function(e){return t(i,e)}),ir&&Zi(i,g),d}return function e(o,r,s,l){if("object"==typeof s&&null!==s&&s.type===k&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case x:e:{for(var c=s.key,d=r;null!==d;){if(d.key===c){if((c=s.type)===k){if(7===d.tag){n(o,d.sibling),(r=i(d,s.props.children)).return=o,o=r;break e}}else if(d.elementType===c||"object"==typeof c&&null!==c&&c.$$typeof===R&&br(c)===d.type){n(o,d.sibling),(r=i(d,s.props)).ref=gr(o,d,s),r.return=o,o=r;break e}n(o,d);break}t(o,d),d=d.sibling}s.type===k?((r=zc(s.props.children,o.mode,l,s.key)).return=o,o=r):((l=Rc(s.type,s.key,s.props,null,o.mode,l)).ref=gr(o,r,s),l.return=o,o=l)}return a(o);case w:e:{for(d=s.key;null!==r;){if(r.key===d){if(4===r.tag&&r.stateNode.containerInfo===s.containerInfo&&r.stateNode.implementation===s.implementation){n(o,r.sibling),(r=i(r,s.children||[])).return=o,o=r;break e}n(o,r);break}t(o,r),r=r.sibling}(r=Tc(s,o.mode,l)).return=o,o=r}return a(o);case R:return e(o,r,(d=s._init)(s._payload),l)}if(te(s))return v(o,r,s,l);if(N(s))return g(o,r,s,l);mr(o,s)}return"string"==typeof s&&""!==s||"number"==typeof s?(s=""+s,null!==r&&6===r.tag?(n(o,r.sibling),(r=i(r,s)).return=o,o=r):(n(o,r),(r=Nc(s,o.mode,l)).return=o,o=r),a(o)):n(o,r)}}var _r=yr(!0),xr=yr(!1),wr=Si(null),kr=null,Sr=null,Cr=null;function Er(){Cr=Sr=kr=null}function Pr(e){var t=wr.current;Ci(wr),e._currentValue=t}function Ir(e,t,n){for(;null!==e;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==o&&(o.childLanes|=t)):null!==o&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){kr=e,Cr=Sr=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ba=!0),e.firstContext=null)}function Or(e){var t=e._currentValue;if(Cr!==e)if(e={context:e,memoizedValue:t,next:null},null===Sr){if(null===kr)throw Error(r(308));Sr=e,kr.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Ar=null;function Rr(e){null===Ar?Ar=[e]:Ar.push(e)}function zr(e,t,n,o){var i=t.interleaved;return null===i?(n.next=n,Rr(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lr(e,o)}function Lr(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Nr=!1;function Tr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(e,t,n){var o=e.updateQueue;if(null===o)return null;if(o=o.shared,2&El){var i=o.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Lr(e,n)}return null===(i=o.interleaved)?(t.next=t,Rr(o)):(t.next=i.next,i.next=t),o.interleaved=t,Lr(e,n)}function Fr(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var o=t.lanes;n|=o&=e.pendingLanes,t.lanes=n,mt(e,n)}}function Mr(e,t){var n=e.updateQueue,o=e.alternate;if(null!==o&&n===(o=o.updateQueue)){var i=null,r=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===r?i=r=s:r=r.next=s,n=n.next}while(null!==n);null===r?i=r=t:r=r.next=t}else i=r=t;return n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:o.shared,effects:o.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hr(e,t,n,o){var i=e.updateQueue;Nr=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,c=l.next;l.next=null,null===s?r=c:s.next=c,s=l;var d=e.alternate;null!==d&&(a=(d=d.updateQueue).lastBaseUpdate)!==s&&(null===a?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l)}if(null!==r){var u=i.baseState;for(s=0,d=c=l=null,a=r;;){var h=a.lane,p=a.eventTime;if((o&h)===h){null!==d&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var f=e,v=a;switch(h=t,p=n,v.tag){case 1:if("function"==typeof(f=v.payload)){u=f.call(p,u,h);break e}u=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null==(h="function"==typeof(f=v.payload)?f.call(p,u,h):f))break e;u=D({},u,h);break e;case 2:Nr=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===d?(c=d=p,l=u):d=d.next=p,s|=h;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===d&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null!==(t=i.shared.interleaved)){i=t;do{s|=i.lane,i=i.next}while(i!==t)}else null===r&&(i.shared.lanes=0);Ll|=s,e.lanes=s,e.memoizedState=u}}function Ur(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(null!==i){if(o.callback=null,o=n,"function"!=typeof i)throw Error(r(191,i));i.call(o)}}}var jr={},qr=Si(jr),Wr=Si(jr),Kr=Si(jr);function Gr(e){if(e===jr)throw Error(r(174));return e}function Qr(e,t){switch(Ei(Kr,t),Ei(Wr,e),Ei(qr,jr),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(qr),Ei(qr,t)}function Yr(){Ci(qr),Ci(Wr),Ci(Kr)}function Xr(e){Gr(Kr.current);var t=Gr(qr.current),n=le(t,e.type);t!==n&&(Ei(Wr,e),Ei(qr,n))}function Zr(e){Wr.current===e&&(Ci(qr),Ci(Wr))}var Jr=Si(0);function es(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function ns(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var os=_.ReactCurrentDispatcher,is=_.ReactCurrentBatchConfig,rs=0,ss=null,as=null,ls=null,cs=!1,ds=!1,us=0,hs=0;function ps(){throw Error(r(321))}function fs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!so(e[n],t[n]))return!1;return!0}function vs(e,t,n,o,i,s){if(rs=s,ss=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,os.current=null===e||null===e.memoizedState?Zs:Js,e=n(o,i),ds){s=0;do{if(ds=!1,us=0,25<=s)throw Error(r(301));s+=1,ls=as=null,t.updateQueue=null,os.current=ea,e=n(o,i)}while(ds)}if(os.current=Xs,t=null!==as&&null!==as.next,rs=0,ls=as=ss=null,cs=!1,t)throw Error(r(300));return e}function gs(){var e=0!==us;return us=0,e}function ms(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ls?ss.memoizedState=ls=e:ls=ls.next=e,ls}function bs(){if(null===as){var e=ss.alternate;e=null!==e?e.memoizedState:null}else e=as.next;var t=null===ls?ss.memoizedState:ls.next;if(null!==t)ls=t,as=e;else{if(null===e)throw Error(r(310));e={memoizedState:(as=e).memoizedState,baseState:as.baseState,baseQueue:as.baseQueue,queue:as.queue,next:null},null===ls?ss.memoizedState=ls=e:ls=ls.next=e}return ls}function ys(e,t){return"function"==typeof t?t(e):t}function _s(e){var t=bs(),n=t.queue;if(null===n)throw Error(r(311));n.lastRenderedReducer=e;var o=as,i=o.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}o.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,o=o.baseState;var l=a=null,c=null,d=s;do{var u=d.lane;if((rs&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=h,a=o):c=c.next=h,ss.lanes|=u,Ll|=u}d=d.next}while(null!==d&&d!==s);null===c?a=o:c.next=l,so(o,t.memoizedState)||(ba=!0),t.memoizedState=o,t.baseState=a,t.baseQueue=c,n.lastRenderedState=o}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,ss.lanes|=s,Ll|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xs(e){var t=bs(),n=t.queue;if(null===n)throw Error(r(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);so(s,t.memoizedState)||(ba=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function ws(){}function ks(e,t){var n=ss,o=bs(),i=t(),s=!so(o.memoizedState,i);if(s&&(o.memoizedState=i,ba=!0),o=o.queue,Ns(Es.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||null!==ls&&1&ls.memoizedState.tag){if(n.flags|=2048,Os(9,Cs.bind(null,n,o,i,t),void 0,null),null===Pl)throw Error(r(349));30&rs||Ss(n,t,i)}return i}function Ss(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Cs(e,t,n,o){t.value=n,t.getSnapshot=o,Ps(t)&&Is(e)}function Es(e,t,n){return n(function(){Ps(t)&&Is(e)})}function Ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!so(e,n)}catch(e){return!0}}function Is(e){var t=Lr(e,1);null!==t&&ec(t,e,1,-1)}function $s(e){var t=ms();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t.queue=e,e=e.dispatch=Ks.bind(null,ss,e),[t.memoizedState,e]}function Os(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function As(){return bs().memoizedState}function Rs(e,t,n,o){var i=ms();ss.flags|=e,i.memoizedState=Os(1|t,n,void 0,void 0===o?null:o)}function zs(e,t,n,o){var i=bs();o=void 0===o?null:o;var r=void 0;if(null!==as){var s=as.memoizedState;if(r=s.destroy,null!==o&&fs(o,s.deps))return void(i.memoizedState=Os(t,n,r,o))}ss.flags|=e,i.memoizedState=Os(1|t,n,r,o)}function Ls(e,t){return Rs(8390656,8,e,t)}function Ns(e,t){return zs(2048,8,e,t)}function Ts(e,t){return zs(4,2,e,t)}function Ds(e,t){return zs(4,4,e,t)}function Bs(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vs(e,t,n){return n=null!=n?n.concat([e]):null,zs(4,4,Bs.bind(null,t,e),n)}function Fs(){}function Ms(e,t){var n=bs();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&fs(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Hs(e,t){var n=bs();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&fs(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Us(e,t,n){return 21&rs?(so(n,t)||(n=ft(),ss.lanes|=n,Ll|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ba=!0),e.memoizedState=n)}function js(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var o=is.transition;is.transition={};try{e(!1),t()}finally{bt=n,is.transition=o}}function qs(){return bs().memoizedState}function Ws(e,t,n){var o=Jl(e);n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Gs(e)?Qs(t,n):null!==(n=zr(e,t,n,o))&&(ec(n,e,o,Zl()),Ys(n,t,o))}function Ks(e,t,n){var o=Jl(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gs(e))Qs(t,i);else{var r=e.alternate;if(0===e.lanes&&(null===r||0===r.lanes)&&null!==(r=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=r(s,n);if(i.hasEagerState=!0,i.eagerState=a,so(a,s)){var l=t.interleaved;return null===l?(i.next=i,Rr(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=zr(e,t,i,o))&&(ec(n,e,o,i=Zl()),Ys(n,t,o))}}function Gs(e){var t=e.alternate;return e===ss||null!==t&&t===ss}function Qs(e,t){ds=cs=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ys(e,t,n){if(4194240&n){var o=t.lanes;n|=o&=e.pendingLanes,t.lanes=n,mt(e,n)}}var Xs={readContext:Or,useCallback:ps,useContext:ps,useEffect:ps,useImperativeHandle:ps,useInsertionEffect:ps,useLayoutEffect:ps,useMemo:ps,useReducer:ps,useRef:ps,useState:ps,useDebugValue:ps,useDeferredValue:ps,useTransition:ps,useMutableSource:ps,useSyncExternalStore:ps,useId:ps,unstable_isNewReconciler:!1},Zs={readContext:Or,useCallback:function(e,t){return ms().memoizedState=[e,void 0===t?null:t],e},useContext:Or,useEffect:Ls,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Rs(4194308,4,Bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var n=ms();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=ms();return t=void 0!==n?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Ws.bind(null,ss,e),[o.memoizedState,e]},useRef:function(e){return e={current:e},ms().memoizedState=e},useState:$s,useDebugValue:Fs,useDeferredValue:function(e){return ms().memoizedState=e},useTransition:function(){var e=$s(!1),t=e[0];return e=js.bind(null,e[1]),ms().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ss,i=ms();if(ir){if(void 0===n)throw Error(r(407));n=n()}else{if(n=t(),null===Pl)throw Error(r(349));30&rs||Ss(o,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ls(Es.bind(null,o,s,e),[e]),o.flags|=2048,Os(9,Cs.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=ms(),t=Pl.identifierPrefix;if(ir){var n=Xi;t=":"+t+"R"+(n=(Yi&~(1<<32-rt(Yi)-1)).toString(32)+n),0<(n=us++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=hs++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Js={readContext:Or,useCallback:Ms,useContext:Or,useEffect:Ns,useImperativeHandle:Vs,useInsertionEffect:Ts,useLayoutEffect:Ds,useMemo:Hs,useReducer:_s,useRef:As,useState:function(){return _s(ys)},useDebugValue:Fs,useDeferredValue:function(e){return Us(bs(),as.memoizedState,e)},useTransition:function(){return[_s(ys)[0],bs().memoizedState]},useMutableSource:ws,useSyncExternalStore:ks,useId:qs,unstable_isNewReconciler:!1},ea={readContext:Or,useCallback:Ms,useContext:Or,useEffect:Ns,useImperativeHandle:Vs,useInsertionEffect:Ts,useLayoutEffect:Ds,useMemo:Hs,useReducer:xs,useRef:As,useState:function(){return xs(ys)},useDebugValue:Fs,useDeferredValue:function(e){var t=bs();return null===as?t.memoizedState=e:Us(t,as.memoizedState,e)},useTransition:function(){return[xs(ys)[0],bs().memoizedState]},useMutableSource:ws,useSyncExternalStore:ks,useId:qs,unstable_isNewReconciler:!1};function ta(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function na(e,t,n,o){n=null==(n=n(o,t=e.memoizedState))?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var oa={isMounted:function(e){return!!(e=e._reactInternals)&&Me(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Zl(),i=Jl(e),r=Br(o,i);r.payload=t,null!=n&&(r.callback=n),null!==(t=Vr(e,r,i))&&(ec(t,e,i,o),Fr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Zl(),i=Jl(e),r=Br(o,i);r.tag=1,r.payload=t,null!=n&&(r.callback=n),null!==(t=Vr(e,r,i))&&(ec(t,e,i,o),Fr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zl(),o=Jl(e),i=Br(n,o);i.tag=2,null!=t&&(i.callback=t),null!==(t=Vr(e,i,o))&&(ec(t,e,o,n),Fr(t,e,o))}};function ia(e,t,n,o,i,r,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,r,s):!(t.prototype&&t.prototype.isPureReactComponent&&ao(n,o)&&ao(i,r))}function ra(e,t,n){var o=!1,i=Pi,r=t.contextType;return"object"==typeof r&&null!==r?r=Or(r):(i=Ri(t)?Oi:Ii.current,r=(o=null!=(o=t.contextTypes))?Ai(e,i):Pi),t=new t(n,r),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternals=e,o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),t}function sa(e,t,n,o){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function aa(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Tr(e);var r=t.contextType;"object"==typeof r&&null!==r?i.context=Or(r):(r=Ri(t)?Oi:Ii.current,i.context=Ai(e,r)),i.state=e.memoizedState,"function"==typeof(r=t.getDerivedStateFromProps)&&(na(e,t,r,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&oa.enqueueReplaceState(i,i.state,null),Hr(e,n,i,o),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function la(e,t){try{var n="",o=t;do{n+=M(o),o=o.return}while(o);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function ca(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function da(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ua="function"==typeof WeakMap?WeakMap:Map;function ha(e,t,n){(n=Br(-1,n)).tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Hl||(Hl=!0,Ul=o),da(0,t)},n}function pa(e,t,n){(n=Br(-1,n)).tag=3;var o=e.type.getDerivedStateFromError;if("function"==typeof o){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){da(0,t)}}var r=e.stateNode;return null!==r&&"function"==typeof r.componentDidCatch&&(n.callback=function(){da(0,t),"function"!=typeof o&&(null===jl?jl=new Set([this]):jl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function fa(e,t,n){var o=e.pingCache;if(null===o){o=e.pingCache=new ua;var i=new Set;o.set(t,i)}else void 0===(i=o.get(t))&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=kc.bind(null,e,t,n),t.then(e,e))}function va(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ga(e,t,n,o,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Br(-1,1)).tag=2,Vr(n,t,1))),n.lanes|=1),e)}var ma=_.ReactCurrentOwner,ba=!1;function ya(e,t,n,o){t.child=null===e?xr(t,null,n,o):_r(t,e.child,n,o)}function _a(e,t,n,o,i){n=n.render;var r=t.ref;return $r(t,i),o=vs(e,t,n,o,r,i),n=gs(),null===e||ba?(ir&&n&&er(t),t.flags|=1,ya(e,t,o,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ha(e,t,i))}function xa(e,t,n,o,i){if(null===e){var r=n.type;return"function"!=typeof r||Oc(r)||void 0!==r.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Rc(n.type,null,o,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=r,wa(e,t,r,o,i))}if(r=e.child,0===(e.lanes&i)){var s=r.memoizedProps;if((n=null!==(n=n.compare)?n:ao)(s,o)&&e.ref===t.ref)return Ha(e,t,i)}return t.flags|=1,(e=Ac(r,o)).ref=t.ref,e.return=t,t.child=e}function wa(e,t,n,o,i){if(null!==e){var r=e.memoizedProps;if(ao(r,o)&&e.ref===t.ref){if(ba=!1,t.pendingProps=o=r,0===(e.lanes&i))return t.lanes=e.lanes,Ha(e,t,i);131072&e.flags&&(ba=!0)}}return Ca(e,t,n,o,i)}function ka(e,t,n){var o=t.pendingProps,i=o.children,r=null!==e?e.memoizedState:null;if("hidden"===o.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==r?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ei(Al,Ol),Ol|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=null!==r?r.baseLanes:n,Ei(Al,Ol),Ol|=o}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ei(Al,Ol),Ol|=n;else null!==r?(o=r.baseLanes|n,t.memoizedState=null):o=n,Ei(Al,Ol),Ol|=o;return ya(e,t,i,n),t.child}function Sa(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,n,o,i){var r=Ri(n)?Oi:Ii.current;return r=Ai(t,r),$r(t,i),n=vs(e,t,n,o,r,i),o=gs(),null===e||ba?(ir&&o&&er(t),t.flags|=1,ya(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ha(e,t,i))}function Ea(e,t,n,o,i){if(Ri(n)){var r=!0;Ti(t)}else r=!1;if($r(t,i),null===t.stateNode)Ma(e,t),ra(t,n,o),aa(t,n,o,i),o=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;c="object"==typeof c&&null!==c?Or(c):Ai(t,c=Ri(n)?Oi:Ii.current);var d=n.getDerivedStateFromProps,u="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate;u||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&sa(t,s,o,c),Nr=!1;var h=t.memoizedState;s.state=h,Hr(t,o,s,i),l=t.memoizedState,a!==o||h!==l||$i.current||Nr?("function"==typeof d&&(na(t,n,d,o),l=t.memoizedState),(a=Nr||ia(t,n,a,o,h,l,c))?(u||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=c,o=a):("function"==typeof s.componentDidMount&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,Dr(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ta(t.type,a),s.props=c,u=t.pendingProps,h=s.context,l="object"==typeof(l=n.contextType)&&null!==l?Or(l):Ai(t,l=Ri(n)?Oi:Ii.current);var p=n.getDerivedStateFromProps;(d="function"==typeof p||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==u||h!==l)&&sa(t,s,o,l),Nr=!1,h=t.memoizedState,s.state=h,Hr(t,o,s,i);var f=t.memoizedState;a!==u||h!==f||$i.current||Nr?("function"==typeof p&&(na(t,n,p,o),f=t.memoizedState),(c=Nr||ia(t,n,c,o,h,f,l)||!1)?(d||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(o,f,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(o,f,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=f),s.props=o,s.state=f,s.context=l,o=c):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),o=!1)}return Pa(e,t,n,o,r,i)}function Pa(e,t,n,o,i,r){Sa(e,t);var s=!!(128&t.flags);if(!o&&!s)return i&&Di(t,n,!1),Ha(e,t,r);o=t.stateNode,ma.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:o.render();return t.flags|=1,null!==e&&s?(t.child=_r(t,e.child,null,r),t.child=_r(t,null,a,r)):ya(e,t,a,r),t.memoizedState=o.state,i&&Di(t,n,!0),t.child}function Ia(e){var t=e.stateNode;t.pendingContext?Li(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Li(0,t.context,!1),Qr(e,t.containerInfo)}function $a(e,t,n,o,i){return pr(),fr(i),t.flags|=256,ya(e,t,n,o),t.child}var Oa,Aa,Ra,za={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function Na(e,t,n){var o,i=t.pendingProps,s=Jr.current,a=!1,l=!!(128&t.flags);if((o=l)||(o=(null===e||null!==e.memoizedState)&&!!(2&s)),o?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Ei(Jr,1&s),null===e)return cr(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=i.children,e=i.fallback,a?(i=t.mode,a=t.child,l={mode:"hidden",children:l},1&i||null===a?a=Lc(l,i,0,null):(a.childLanes=0,a.pendingProps=l),e=zc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=La(n),t.memoizedState=za,e):Ta(t,l));if(null!==(s=e.memoizedState)&&null!==(o=s.dehydrated))return function(e,t,n,o,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,Da(e,t,a,o=ca(Error(r(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=o.fallback,i=t.mode,o=Lc({mode:"visible",children:o.children},i,0,null),(s=zc(s,i,a,null)).flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,1&t.mode&&_r(t,e.child,null,a),t.child.memoizedState=La(a),t.memoizedState=za,s);if(!(1&t.mode))return Da(e,t,a,null);if("$!"===i.data){if(o=i.nextSibling&&i.nextSibling.dataset)var l=o.dgst;return o=l,Da(e,t,a,o=ca(s=Error(r(419)),o,void 0))}if(l=0!==(a&e.childLanes),ba||l){if(null!==(o=Pl)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(o.suspendedLanes|a))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Lr(e,i),ec(o,e,i,-1))}return pc(),Da(e,t,a,o=ca(Error(r(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Cc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,or=ci(i.nextSibling),nr=t,ir=!0,rr=null,null!==e&&(Ki[Gi++]=Yi,Ki[Gi++]=Xi,Ki[Gi++]=Qi,Yi=e.id,Xi=e.overflow,Qi=t),(t=Ta(t,o.children)).flags|=4096,t)}(e,t,l,i,o,s,n);if(a){a=i.fallback,l=t.mode,o=(s=e.child).sibling;var c={mode:"hidden",children:i.children};return 1&l||t.child===s?(i=Ac(s,c)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null),null!==o?a=Ac(o,a):(a=zc(a,l,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,l=null===(l=e.child.memoizedState)?La(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=za,i}return e=(a=e.child).sibling,i=Ac(a,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ta(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Da(e,t,n,o){return null!==o&&fr(o),_r(t,e.child,null,n),(e=Ta(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ba(e,t,n){e.lanes|=t;var o=e.alternate;null!==o&&(o.lanes|=t),Ir(e.return,t,n)}function Va(e,t,n,o,i){var r=e.memoizedState;null===r?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=i)}function Fa(e,t,n){var o=t.pendingProps,i=o.revealOrder,r=o.tail;if(ya(e,t,o.children,n),2&(o=Jr.current))o=1&o|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ba(e,n,t);else if(19===e.tag)Ba(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ei(Jr,o),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===es(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Va(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===es(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Va(t,!0,n,null,r);break;case"together":Va(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Ma(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ha(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(r(153));if(null!==t.child){for(n=Ac(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ac(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ua(e,t){if(!ir)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;null!==n;)null!==n.alternate&&(o=n),n=n.sibling;null===o?t||null===e.tail?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ja(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,o|=14680064&i.subtreeFlags,o|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function qa(e,t,n){var o=t.pendingProps;switch(tr(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ja(t),null;case 1:case 17:return Ri(t.type)&&zi(),ja(t),null;case 3:return o=t.stateNode,Yr(),Ci($i),Ci(Ii),ns(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null!==e&&null!==e.child||(ur(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==rr&&(ic(rr),rr=null))),ja(t),null;case 5:Zr(t);var i=Gr(Kr.current);if(n=t.type,null!==e&&null!=t.stateNode)Aa(e,t,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(null===t.stateNode)throw Error(r(166));return ja(t),null}if(e=Gr(qr.current),ur(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[hi]=t,o[pi]=s,e=!!(1&t.mode),n){case"dialog":Vo("cancel",o),Vo("close",o);break;case"iframe":case"object":case"embed":Vo("load",o);break;case"video":case"audio":for(i=0;i<No.length;i++)Vo(No[i],o);break;case"source":Vo("error",o);break;case"img":case"image":case"link":Vo("error",o),Vo("load",o);break;case"details":Vo("toggle",o);break;case"input":Y(o,s),Vo("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Vo("invalid",o);break;case"textarea":ie(o,s),Vo("invalid",o)}for(var l in me(n,s),i=null,s)if(s.hasOwnProperty(l)){var c=s[l];"children"===l?"string"==typeof c?o.textContent!==c&&(!0!==s.suppressHydrationWarning&&Zo(o.textContent,c,e),i=["children",c]):"number"==typeof c&&o.textContent!==""+c&&(!0!==s.suppressHydrationWarning&&Zo(o.textContent,c,e),i=["children",""+c]):a.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Vo("scroll",o)}switch(n){case"input":W(o),J(o,s,!0);break;case"textarea":W(o),se(o);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(o.onclick=Jo)}o=i,t.updateQueue=o,null!==o&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ae(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof o.is?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),"select"===n&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[hi]=t,e[pi]=o,Oa(e,t),t.stateNode=e;e:{switch(l=be(n,o),n){case"dialog":Vo("cancel",e),Vo("close",e),i=o;break;case"iframe":case"object":case"embed":Vo("load",e),i=o;break;case"video":case"audio":for(i=0;i<No.length;i++)Vo(No[i],e);i=o;break;case"source":Vo("error",e),i=o;break;case"img":case"image":case"link":Vo("error",e),Vo("load",e),i=o;break;case"details":Vo("toggle",e),i=o;break;case"input":Y(e,o),i=Q(e,o),Vo("invalid",e);break;case"option":default:i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=D({},o,{value:void 0}),Vo("invalid",e);break;case"textarea":ie(e,o),i=oe(e,o),Vo("invalid",e)}for(s in me(n,i),c=i)if(c.hasOwnProperty(s)){var d=c[s];"style"===s?ve(e,d):"dangerouslySetInnerHTML"===s?null!=(d=d?d.__html:void 0)&&de(e,d):"children"===s?"string"==typeof d?("textarea"!==n||""!==d)&&ue(e,d):"number"==typeof d&&ue(e,""+d):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(a.hasOwnProperty(s)?null!=d&&"onScroll"===s&&Vo("scroll",e):null!=d&&y(e,s,d,l))}switch(n){case"input":W(e),J(e,o,!1);break;case"textarea":W(e),se(e);break;case"option":null!=o.value&&e.setAttribute("value",""+j(o.value));break;case"select":e.multiple=!!o.multiple,null!=(s=o.value)?ne(e,!!o.multiple,s,!1):null!=o.defaultValue&&ne(e,!!o.multiple,o.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ja(t),null;case 6:if(e&&null!=t.stateNode)Ra(0,t,e.memoizedProps,o);else{if("string"!=typeof o&&null===t.stateNode)throw Error(r(166));if(n=Gr(Kr.current),Gr(qr.current),ur(t)){if(o=t.stateNode,n=t.memoizedProps,o[hi]=t,(s=o.nodeValue!==n)&&null!==(e=nr))switch(e.tag){case 3:Zo(o.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zo(o.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(o=(9===n.nodeType?n:n.ownerDocument).createTextNode(o))[hi]=t,t.stateNode=o}return ja(t),null;case 13:if(Ci(Jr),o=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ir&&null!==or&&1&t.mode&&!(128&t.flags))hr(),pr(),t.flags|=98560,s=!1;else if(s=ur(t),null!==o&&null!==o.dehydrated){if(null===e){if(!s)throw Error(r(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(r(317));s[hi]=t}else pr(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ja(t),s=!1}else null!==rr&&(ic(rr),rr=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((o=null!==o)!=(null!==e&&null!==e.memoizedState)&&o&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Jr.current?0===Rl&&(Rl=3):pc())),null!==t.updateQueue&&(t.flags|=4),ja(t),null);case 4:return Yr(),null===e&&Ho(t.stateNode.containerInfo),ja(t),null;case 10:return Pr(t.type._context),ja(t),null;case 19:if(Ci(Jr),null===(s=t.memoizedState))return ja(t),null;if(o=!!(128&t.flags),null===(l=s.rendering))if(o)Ua(s,!1);else{if(0!==Rl||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=es(e))){for(t.flags|=128,Ua(s,!1),null!==(o=l.updateQueue)&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;null!==n;)e=o,(s=n).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ei(Jr,1&Jr.current|2),t.child}e=e.sibling}null!==s.tail&&Ye()>Fl&&(t.flags|=128,o=!0,Ua(s,!1),t.lanes=4194304)}else{if(!o)if(null!==(e=es(l))){if(t.flags|=128,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ua(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!ir)return ja(t),null}else 2*Ye()-s.renderingStartTime>Fl&&1073741824!==n&&(t.flags|=128,o=!0,Ua(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=s.last)?n.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ye(),t.sibling=null,n=Jr.current,Ei(Jr,o?1&n|2:1&n),t):(ja(t),null);case 22:case 23:return cc(),o=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==o&&(t.flags|=8192),o&&1&t.mode?!!(1073741824&Ol)&&(ja(t),6&t.subtreeFlags&&(t.flags|=8192)):ja(t),null;case 24:case 25:return null}throw Error(r(156,t.tag))}function Wa(e,t){switch(tr(t),t.tag){case 1:return Ri(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Yr(),Ci($i),Ci(Ii),ns(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zr(t),null;case 13:if(Ci(Jr),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(r(340));pr()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Jr),null;case 4:return Yr(),null;case 10:return Pr(t.type._context),null;case 22:case 23:return cc(),null;default:return null}}Oa=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Aa=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Gr(qr.current);var r,s=null;switch(n){case"input":i=Q(e,i),o=Q(e,o),s=[];break;case"select":i=D({},i,{value:void 0}),o=D({},o,{value:void 0}),s=[];break;case"textarea":i=oe(e,i),o=oe(e,o),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof o.onClick&&(e.onclick=Jo)}for(d in me(n,o),n=null,i)if(!o.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var l=i[d];for(r in l)l.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(a.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(l=null!=i?i[d]:void 0,o.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(r in l)!l.hasOwnProperty(r)||c&&c.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in c)c.hasOwnProperty(r)&&l[r]!==c[r]&&(n||(n={}),n[r]=c[r])}else n||(s||(s=[]),s.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(s=s||[]).push(d,c)):"children"===d?"string"!=typeof c&&"number"!=typeof c||(s=s||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(a.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Vo("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}},Ra=function(e,t,n,o){n!==o&&(t.flags|=4)};var Ka=!1,Ga=!1,Qa="function"==typeof WeakSet?WeakSet:Set,Ya=null;function Xa(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){wc(e,t,n)}else n.current=null}function Za(e,t,n){try{n()}catch(n){wc(e,t,n)}}var Ja=!1;function el(e,t,n){var o=t.updateQueue;if(null!==(o=null!==o?o.lastEffect:null)){var i=o=o.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,void 0!==r&&Za(t,n,r)}i=i.next}while(i!==o)}}function tl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function nl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&(delete t[hi],delete t[pi],delete t[vi],delete t[gi],delete t[mi]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function il(e){return 5===e.tag||3===e.tag||4===e.tag}function rl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||il(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function sl(e,t,n){var o=e.tag;if(5===o||6===o)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Jo));else if(4!==o&&null!==(e=e.child))for(sl(e,t,n),e=e.sibling;null!==e;)sl(e,t,n),e=e.sibling}function al(e,t,n){var o=e.tag;if(5===o||6===o)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==o&&null!==(e=e.child))for(al(e,t,n),e=e.sibling;null!==e;)al(e,t,n),e=e.sibling}var ll=null,cl=!1;function dl(e,t,n){for(n=n.child;null!==n;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(it&&"function"==typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(e){}switch(n.tag){case 5:Ga||Xa(n,t);case 6:var o=ll,i=cl;ll=null,dl(e,t,n),cl=i,null!==(ll=o)&&(cl?(e=ll,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ll.removeChild(n.stateNode));break;case 18:null!==ll&&(cl?(e=ll,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Mt(e)):li(ll,n.stateNode));break;case 4:o=ll,i=cl,ll=n.stateNode.containerInfo,cl=!0,dl(e,t,n),ll=o,cl=i;break;case 0:case 11:case 14:case 15:if(!Ga&&null!==(o=n.updateQueue)&&null!==(o=o.lastEffect)){i=o=o.next;do{var r=i,s=r.destroy;r=r.tag,void 0!==s&&(2&r||4&r)&&Za(n,t,s),i=i.next}while(i!==o)}dl(e,t,n);break;case 1:if(!Ga&&(Xa(n,t),"function"==typeof(o=n.stateNode).componentWillUnmount))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(e){wc(n,t,e)}dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:1&n.mode?(Ga=(o=Ga)||null!==n.memoizedState,dl(e,t,n),Ga=o):dl(e,t,n);break;default:dl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qa),t.forEach(function(t){var o=Ec.bind(null,e,t);n.has(t)||(n.add(t),t.then(o,o))})}}function pl(e,t){var n=t.deletions;if(null!==n)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,a=t,l=a;e:for(;null!==l;){switch(l.tag){case 5:ll=l.stateNode,cl=!1;break e;case 3:case 4:ll=l.stateNode.containerInfo,cl=!0;break e}l=l.return}if(null===ll)throw Error(r(160));ul(s,a,i),ll=null,cl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(e){wc(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)fl(t,e),t=t.sibling}function fl(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pl(t,e),vl(e),4&o){try{el(3,e,e.return),tl(3,e)}catch(t){wc(e,e.return,t)}try{el(5,e,e.return)}catch(t){wc(e,e.return,t)}}break;case 1:pl(t,e),vl(e),512&o&&null!==n&&Xa(n,n.return);break;case 5:if(pl(t,e),vl(e),512&o&&null!==n&&Xa(n,n.return),32&e.flags){var i=e.stateNode;try{ue(i,"")}catch(t){wc(e,e.return,t)}}if(4&o&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===s.type&&null!=s.name&&X(i,s),be(l,a);var d=be(l,s);for(a=0;a<c.length;a+=2){var u=c[a],h=c[a+1];"style"===u?ve(i,h):"dangerouslySetInnerHTML"===u?de(i,h):"children"===u?ue(i,h):y(i,u,h,d)}switch(l){case"input":Z(i,s);break;case"textarea":re(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?ne(i,!!s.multiple,f,!1):p!==!!s.multiple&&(null!=s.defaultValue?ne(i,!!s.multiple,s.defaultValue,!0):ne(i,!!s.multiple,s.multiple?[]:"",!1))}i[pi]=s}catch(t){wc(e,e.return,t)}}break;case 6:if(pl(t,e),vl(e),4&o){if(null===e.stateNode)throw Error(r(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(t){wc(e,e.return,t)}}break;case 3:if(pl(t,e),vl(e),4&o&&null!==n&&n.memoizedState.isDehydrated)try{Mt(t.containerInfo)}catch(t){wc(e,e.return,t)}break;case 4:default:pl(t,e),vl(e);break;case 13:pl(t,e),vl(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Vl=Ye())),4&o&&hl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Ga=(d=Ga)||u,pl(t,e),Ga=d):pl(t,e),vl(e),8192&o){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&1&e.mode)for(Ya=e,u=e.child;null!==u;){for(h=Ya=u;null!==Ya;){switch(f=(p=Ya).child,p.tag){case 0:case 11:case 14:case 15:el(4,p,p.return);break;case 1:Xa(p,p.return);var v=p.stateNode;if("function"==typeof v.componentWillUnmount){o=p,n=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(e){wc(o,n,e)}}break;case 5:Xa(p,p.return);break;case 22:if(null!==p.memoizedState){yl(h);continue}}null!==f?(f.return=p,Ya=f):yl(h)}u=u.sibling}e:for(u=null,h=e;;){if(5===h.tag){if(null===u){u=h;try{i=h.stateNode,d?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(l=h.stateNode,a=null!=(c=h.memoizedProps.style)&&c.hasOwnProperty("display")?c.display:null,l.style.display=fe("display",a))}catch(t){wc(e,e.return,t)}}}else if(6===h.tag){if(null===u)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(t){wc(e,e.return,t)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pl(t,e),vl(e),4&o&&hl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(il(n)){var o=n;break e}n=n.return}throw Error(r(160))}switch(o.tag){case 5:var i=o.stateNode;32&o.flags&&(ue(i,""),o.flags&=-33),al(e,rl(e),i);break;case 3:case 4:var s=o.stateNode.containerInfo;sl(e,rl(e),s);break;default:throw Error(r(161))}}catch(t){wc(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gl(e,t,n){Ya=e,ml(e,t,n)}function ml(e,t,n){for(var o=!!(1&e.mode);null!==Ya;){var i=Ya,r=i.child;if(22===i.tag&&o){var s=null!==i.memoizedState||Ka;if(!s){var a=i.alternate,l=null!==a&&null!==a.memoizedState||Ga;a=Ka;var c=Ga;if(Ka=s,(Ga=l)&&!c)for(Ya=i;null!==Ya;)l=(s=Ya).child,22===s.tag&&null!==s.memoizedState?_l(i):null!==l?(l.return=s,Ya=l):_l(i);for(;null!==r;)Ya=r,ml(r,t,n),r=r.sibling;Ya=i,Ka=a,Ga=c}bl(e)}else 8772&i.subtreeFlags&&null!==r?(r.return=i,Ya=r):bl(e)}}function bl(e){for(;null!==Ya;){var t=Ya;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Ga||tl(5,t);break;case 1:var o=t.stateNode;if(4&t.flags&&!Ga)if(null===n)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ta(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ur(t,s,o);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ur(t,a,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var h=u.dehydrated;null!==h&&Mt(h)}}}break;default:throw Error(r(163))}Ga||512&t.flags&&nl(t)}catch(e){wc(t,t.return,e)}}if(t===e){Ya=null;break}if(null!==(n=t.sibling)){n.return=t.return,Ya=n;break}Ya=t.return}}function yl(e){for(;null!==Ya;){var t=Ya;if(t===e){Ya=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Ya=n;break}Ya=t.return}}function _l(e){for(;null!==Ya;){var t=Ya;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(e){wc(t,n,e)}break;case 1:var o=t.stateNode;if("function"==typeof o.componentDidMount){var i=t.return;try{o.componentDidMount()}catch(e){wc(t,i,e)}}var r=t.return;try{nl(t)}catch(e){wc(t,r,e)}break;case 5:var s=t.return;try{nl(t)}catch(e){wc(t,s,e)}}}catch(e){wc(t,t.return,e)}if(t===e){Ya=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Ya=a;break}Ya=t.return}}var xl,wl=Math.ceil,kl=_.ReactCurrentDispatcher,Sl=_.ReactCurrentOwner,Cl=_.ReactCurrentBatchConfig,El=0,Pl=null,Il=null,$l=0,Ol=0,Al=Si(0),Rl=0,zl=null,Ll=0,Nl=0,Tl=0,Dl=null,Bl=null,Vl=0,Fl=1/0,Ml=null,Hl=!1,Ul=null,jl=null,ql=!1,Wl=null,Kl=0,Gl=0,Ql=null,Yl=-1,Xl=0;function Zl(){return 6&El?Ye():-1!==Yl?Yl:Yl=Ye()}function Jl(e){return 1&e.mode?2&El&&0!==$l?$l&-$l:null!==vr.transition?(0===Xl&&(Xl=ft()),Xl):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Qt(e.type):1}function ec(e,t,n,o){if(50<Gl)throw Gl=0,Ql=null,Error(r(185));gt(e,n,o),2&El&&e===Pl||(e===Pl&&(!(2&El)&&(Nl|=n),4===Rl&&rc(e,$l)),tc(e,o),1===n&&0===El&&!(1&t.mode)&&(Fl=Ye()+500,Vi&&Hi()))}function tc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var s=31-rt(r),a=1<<s,l=i[s];-1===l?0!==(a&n)&&0===(a&o)||(i[s]=ht(a,t)):l<=t&&(e.expiredLanes|=a),r&=~a}}(e,t);var o=ut(e,e===Pl?$l:0);if(0===o)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Vi=!0,Mi(e)}(sc.bind(null,e)):Mi(sc.bind(null,e)),si(function(){!(6&El)&&Hi()}),n=null;else{switch(yt(o)){case 1:n=Ze;break;case 4:n=Je;break;case 16:default:n=et;break;case 536870912:n=nt}n=Pc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(Yl=-1,Xl=0,6&El)throw Error(r(327));var n=e.callbackNode;if(_c()&&e.callbackNode!==n)return null;var o=ut(e,e===Pl?$l:0);if(0===o)return null;if(30&o||0!==(o&e.expiredLanes)||t)t=fc(e,o);else{t=o;var i=El;El|=2;var s=hc();for(Pl===e&&$l===t||(Ml=null,Fl=Ye()+500,dc(e,t));;)try{gc();break}catch(t){uc(e,t)}Er(),kl.current=s,El=i,null!==Il?t=0:(Pl=null,$l=0,t=Rl)}if(0!==t){if(2===t&&0!==(i=pt(e))&&(o=i,t=oc(e,i)),1===t)throw n=zl,dc(e,0),rc(e,o),tc(e,Ye()),n;if(6===t)rc(e,o);else{if(i=e.current.alternate,!(30&o||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var o=0;o<n.length;o++){var i=n[o],r=i.getSnapshot;i=i.value;try{if(!so(r(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=fc(e,o),2===t&&(s=pt(e),0!==s&&(o=s,t=oc(e,s))),1!==t)))throw n=zl,dc(e,0),rc(e,o),tc(e,Ye()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(r(345));case 2:case 5:yc(e,Bl,Ml);break;case 3:if(rc(e,o),(130023424&o)===o&&10<(t=Vl+500-Ye())){if(0!==ut(e,0))break;if(((i=e.suspendedLanes)&o)!==o){Zl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=oi(yc.bind(null,e,Bl,Ml),t);break}yc(e,Bl,Ml);break;case 4:if(rc(e,o),(4194240&o)===o)break;for(t=e.eventTimes,i=-1;0<o;){var a=31-rt(o);s=1<<a,(a=t[a])>i&&(i=a),o&=~s}if(o=i,10<(o=(120>(o=Ye()-o)?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*wl(o/1960))-o)){e.timeoutHandle=oi(yc.bind(null,e,Bl,Ml),o);break}yc(e,Bl,Ml);break;default:throw Error(r(329))}}}return tc(e,Ye()),e.callbackNode===n?nc.bind(null,e):null}function oc(e,t){var n=Dl;return e.current.memoizedState.isDehydrated&&(dc(e,t).flags|=256),2!==(e=fc(e,t))&&(t=Bl,Bl=n,null!==t&&ic(t)),e}function ic(e){null===Bl?Bl=e:Bl.push.apply(Bl,e)}function rc(e,t){for(t&=~Tl,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),o=1<<n;e[n]=-1,t&=~o}}function sc(e){if(6&El)throw Error(r(327));_c();var t=ut(e,0);if(!(1&t))return tc(e,Ye()),null;var n=fc(e,t);if(0!==e.tag&&2===n){var o=pt(e);0!==o&&(t=o,n=oc(e,o))}if(1===n)throw n=zl,dc(e,0),rc(e,t),tc(e,Ye()),n;if(6===n)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yc(e,Bl,Ml),tc(e,Ye()),null}function ac(e,t){var n=El;El|=1;try{return e(t)}finally{0===(El=n)&&(Fl=Ye()+500,Vi&&Hi())}}function lc(e){null!==Wl&&0===Wl.tag&&!(6&El)&&_c();var t=El;El|=1;var n=Cl.transition,o=bt;try{if(Cl.transition=null,bt=1,e)return e()}finally{bt=o,Cl.transition=n,!(6&(El=t))&&Hi()}}function cc(){Ol=Al.current,Ci(Al)}function dc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Il)for(n=Il.return;null!==n;){var o=n;switch(tr(o),o.tag){case 1:null!=(o=o.type.childContextTypes)&&zi();break;case 3:Yr(),Ci($i),Ci(Ii),ns();break;case 5:Zr(o);break;case 4:Yr();break;case 13:case 19:Ci(Jr);break;case 10:Pr(o.type._context);break;case 22:case 23:cc()}n=n.return}if(Pl=e,Il=e=Ac(e.current,null),$l=Ol=t,Rl=0,zl=null,Tl=Nl=Ll=0,Bl=Dl=null,null!==Ar){for(t=0;t<Ar.length;t++)if(null!==(o=(n=Ar[t]).interleaved)){n.interleaved=null;var i=o.next,r=n.pending;if(null!==r){var s=r.next;r.next=i,o.next=s}n.pending=o}Ar=null}return e}function uc(e,t){for(;;){var n=Il;try{if(Er(),os.current=Xs,cs){for(var o=ss.memoizedState;null!==o;){var i=o.queue;null!==i&&(i.pending=null),o=o.next}cs=!1}if(rs=0,ls=as=ss=null,ds=!1,us=0,Sl.current=null,null===n||null===n.return){Rl=1,zl=t,Il=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=$l,l.flags|=32768,null!==c&&"object"==typeof c&&"function"==typeof c.then){var d=c,u=l,h=u.tag;if(!(1&u.mode||0!==h&&11!==h&&15!==h)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=va(a);if(null!==f){f.flags&=-257,ga(f,a,l,0,t),1&f.mode&&fa(s,d,t),c=d;var v=(t=f).updateQueue;if(null===v){var g=new Set;g.add(c),t.updateQueue=g}else v.add(c);break e}if(!(1&t)){fa(s,d,t),pc();break e}c=Error(r(426))}else if(ir&&1&l.mode){var m=va(a);if(null!==m){!(65536&m.flags)&&(m.flags|=256),ga(m,a,l,0,t),fr(la(c,l));break e}}s=c=la(c,l),4!==Rl&&(Rl=2),null===Dl?Dl=[s]:Dl.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Mr(s,ha(0,c,t));break e;case 1:l=c;var b=s.type,y=s.stateNode;if(!(128&s.flags||"function"!=typeof b.getDerivedStateFromError&&(null===y||"function"!=typeof y.componentDidCatch||null!==jl&&jl.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t,Mr(s,pa(s,l,t));break e}}s=s.return}while(null!==s)}bc(n)}catch(e){t=e,Il===n&&null!==n&&(Il=n=n.return);continue}break}}function hc(){var e=kl.current;return kl.current=Xs,null===e?Xs:e}function pc(){0!==Rl&&3!==Rl&&2!==Rl||(Rl=4),null===Pl||!(268435455&Ll)&&!(268435455&Nl)||rc(Pl,$l)}function fc(e,t){var n=El;El|=2;var o=hc();for(Pl===e&&$l===t||(Ml=null,dc(e,t));;)try{vc();break}catch(t){uc(e,t)}if(Er(),El=n,kl.current=o,null!==Il)throw Error(r(261));return Pl=null,$l=0,Rl}function vc(){for(;null!==Il;)mc(Il)}function gc(){for(;null!==Il&&!Ge();)mc(Il)}function mc(e){var t=xl(e.alternate,e,Ol);e.memoizedProps=e.pendingProps,null===t?bc(e):Il=t,Sl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Wa(n,t)))return n.flags&=32767,void(Il=n);if(null===e)return Rl=6,void(Il=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=qa(n,t,Ol)))return void(Il=n);if(null!==(t=t.sibling))return void(Il=t);Il=t=e}while(null!==t);0===Rl&&(Rl=5)}function yc(e,t,n){var o=bt,i=Cl.transition;try{Cl.transition=null,bt=1,function(e,t,n,o){do{_c()}while(null!==Wl);if(6&El)throw Error(r(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rt(n),r=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~r}}(e,s),e===Pl&&(Il=Pl=null,$l=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||ql||(ql=!0,Pc(et,function(){return _c(),null})),s=!!(15990&n.flags),15990&n.subtreeFlags||s){s=Cl.transition,Cl.transition=null;var a=bt;bt=1;var l=El;El|=4,Sl.current=null,function(e,t){if(ei=Ut,po(e=ho())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(o&&0!==o.rangeCount){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var a=0,l=-1,c=-1,d=0,u=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(l=a+i),h!==s||0!==o&&3!==h.nodeType||(c=a+o),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++d===i&&(l=a),p===s&&++u===o&&(c=a),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ut=!1,Ya=t;null!==Ya;)if(e=(t=Ya).child,1028&t.subtreeFlags&&null!==e)e.return=t,Ya=e;else for(;null!==Ya;){t=Ya;try{var v=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==v){var g=v.memoizedProps,m=v.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:ta(t.type,g),m);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=t.stateNode.containerInfo;1===_.nodeType?_.textContent="":9===_.nodeType&&_.documentElement&&_.removeChild(_.documentElement);break;default:throw Error(r(163))}}catch(e){wc(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,Ya=e;break}Ya=t.return}v=Ja,Ja=!1}(e,n),fl(n,e),fo(ti),Ut=!!ei,ti=ei=null,e.current=n,gl(n,e,i),Qe(),El=l,bt=a,Cl.transition=s}else e.current=n;if(ql&&(ql=!1,Wl=e,Kl=i),0===(s=e.pendingLanes)&&(jl=null),function(e){if(it&&"function"==typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,!(128&~e.current.flags))}catch(e){}}(n.stateNode),tc(e,Ye()),null!==t)for(o=e.onRecoverableError,n=0;n<t.length;n++)o((i=t[n]).value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=Ul,Ul=null,e;!!(1&Kl)&&0!==e.tag&&_c(),1&(s=e.pendingLanes)?e===Ql?Gl++:(Gl=0,Ql=e):Gl=0,Hi()}(e,t,n,o)}finally{Cl.transition=i,bt=o}return null}function _c(){if(null!==Wl){var e=yt(Kl),t=Cl.transition,n=bt;try{if(Cl.transition=null,bt=16>e?16:e,null===Wl)var o=!1;else{if(e=Wl,Wl=null,Kl=0,6&El)throw Error(r(331));var i=El;for(El|=4,Ya=e.current;null!==Ya;){var s=Ya,a=s.child;if(16&Ya.flags){var l=s.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Ya=d;null!==Ya;){var u=Ya;switch(u.tag){case 0:case 11:case 15:el(8,u,s)}var h=u.child;if(null!==h)h.return=u,Ya=h;else for(;null!==Ya;){var p=(u=Ya).sibling,f=u.return;if(ol(u),u===d){Ya=null;break}if(null!==p){p.return=f,Ya=p;break}Ya=f}}}var v=s.alternate;if(null!==v){var g=v.child;if(null!==g){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(null!==g)}}Ya=s}}if(2064&s.subtreeFlags&&null!==a)a.return=s,Ya=a;else e:for(;null!==Ya;){if(2048&(s=Ya).flags)switch(s.tag){case 0:case 11:case 15:el(9,s,s.return)}var b=s.sibling;if(null!==b){b.return=s.return,Ya=b;break e}Ya=s.return}}var y=e.current;for(Ya=y;null!==Ya;){var _=(a=Ya).child;if(2064&a.subtreeFlags&&null!==_)_.return=a,Ya=_;else e:for(a=y;null!==Ya;){if(2048&(l=Ya).flags)try{switch(l.tag){case 0:case 11:case 15:tl(9,l)}}catch(e){wc(l,l.return,e)}if(l===a){Ya=null;break e}var x=l.sibling;if(null!==x){x.return=l.return,Ya=x;break e}Ya=l.return}}if(El=i,Hi(),it&&"function"==typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(e){}o=!0}return o}finally{bt=n,Cl.transition=t}}return!1}function xc(e,t,n){e=Vr(e,t=ha(0,t=la(n,t),1),1),t=Zl(),null!==e&&(gt(e,1,t),tc(e,t))}function wc(e,t,n){if(3===e.tag)xc(e,e,n);else for(;null!==t;){if(3===t.tag){xc(t,e,n);break}if(1===t.tag){var o=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===jl||!jl.has(o))){t=Vr(t,e=pa(t,e=la(n,e),1),1),e=Zl(),null!==t&&(gt(t,1,e),tc(t,e));break}}t=t.return}}function kc(e,t,n){var o=e.pingCache;null!==o&&o.delete(t),t=Zl(),e.pingedLanes|=e.suspendedLanes&n,Pl===e&&($l&n)===n&&(4===Rl||3===Rl&&(130023424&$l)===$l&&500>Ye()-Vl?dc(e,0):Tl|=n),tc(e,t)}function Sc(e,t){0===t&&(1&e.mode?(t=ct,!(130023424&(ct<<=1))&&(ct=4194304)):t=1);var n=Zl();null!==(e=Lr(e,t))&&(gt(e,t,n),tc(e,n))}function Cc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Sc(e,n)}function Ec(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(r(314))}null!==o&&o.delete(t),Sc(e,n)}function Pc(e,t){return We(e,t)}function Ic(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $c(e,t,n,o){return new Ic(e,t,n,o)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ac(e,t){var n=e.alternate;return null===n?((n=$c(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rc(e,t,n,o,i,s){var a=2;if(o=e,"function"==typeof e)Oc(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case k:return zc(n.children,i,s,t);case S:a=8,i|=8;break;case C:return(e=$c(12,n,t,2|i)).elementType=C,e.lanes=s,e;case $:return(e=$c(13,n,t,i)).elementType=$,e.lanes=s,e;case O:return(e=$c(19,n,t,i)).elementType=O,e.lanes=s,e;case z:return Lc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case E:a=10;break e;case P:a=9;break e;case I:a=11;break e;case A:a=14;break e;case R:a=16,o=null;break e}throw Error(r(130,null==e?e:typeof e,""))}return(t=$c(a,n,t,i)).elementType=e,t.type=o,t.lanes=s,t}function zc(e,t,n,o){return(e=$c(7,e,o,t)).lanes=n,e}function Lc(e,t,n,o){return(e=$c(22,e,o,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Nc(e,t,n){return(e=$c(6,e,null,t)).lanes=n,e}function Tc(e,t,n){return(t=$c(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dc(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vt(0),this.expirationTimes=vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,o,i,r,s,a,l){return e=new Dc(e,t,n,a,l),1===t?(t=1,!0===r&&(t|=8)):t=0,r=$c(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tr(r),e}function Vc(e){if(!e)return Pi;e:{if(Me(e=e._reactInternals)!==e||1!==e.tag)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ri(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(r(171))}if(1===e.tag){var n=e.type;if(Ri(n))return Ni(e,n,t)}return t}function Fc(e,t,n,o){var i=t.current,r=Zl(),s=Jl(i);return n=Vc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Br(r,s)).payload={element:e},null!==(o=void 0===o?null:o)&&(t.callback=o),null!==(e=Vr(i,t,s))&&(ec(e,i,s,r),Fr(e,i,s)),s}function Mc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Uc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}xl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||$i.current)ba=!0;else{if(0===(e.lanes&n)&&!(128&t.flags))return ba=!1,function(e,t,n){switch(t.tag){case 3:Ia(t),pr();break;case 5:Xr(t);break;case 1:Ri(t.type)&&Ti(t);break;case 4:Qr(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;Ei(wr,o._currentValue),o._currentValue=i;break;case 13:if(null!==(o=t.memoizedState))return null!==o.dehydrated?(Ei(Jr,1&Jr.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Na(e,t,n):(Ei(Jr,1&Jr.current),null!==(e=Ha(e,t,n))?e.sibling:null);Ei(Jr,1&Jr.current);break;case 19:if(o=0!==(n&t.childLanes),128&e.flags){if(o)return Fa(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ei(Jr,Jr.current),o)break;return null;case 22:case 23:return t.lanes=0,ka(e,t,n)}return Ha(e,t,n)}(e,t,n);ba=!!(131072&e.flags)}else ba=!1,ir&&1048576&t.flags&&Ji(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ma(e,t),e=t.pendingProps;var i=Ai(t,Ii.current);$r(t,n),i=vs(null,t,o,e,i,n);var s=gs();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ri(o)?(s=!0,Ti(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Tr(t),i.updater=oa,t.stateNode=i,i._reactInternals=t,aa(t,o,e,n),t=Pa(null,t,o,!0,s,n)):(t.tag=0,ir&&s&&er(t),ya(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ma(e,t),e=t.pendingProps,o=(i=o._init)(o._payload),t.type=o,i=t.tag=function(e){if("function"==typeof e)return Oc(e)?1:0;if(null!=e){if((e=e.$$typeof)===I)return 11;if(e===A)return 14}return 2}(o),e=ta(o,e),i){case 0:t=Ca(null,t,o,e,n);break e;case 1:t=Ea(null,t,o,e,n);break e;case 11:t=_a(null,t,o,e,n);break e;case 14:t=xa(null,t,o,ta(o.type,e),n);break e}throw Error(r(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,Ca(e,t,o,i=t.elementType===o?i:ta(o,i),n);case 1:return o=t.type,i=t.pendingProps,Ea(e,t,o,i=t.elementType===o?i:ta(o,i),n);case 3:e:{if(Ia(t),null===e)throw Error(r(387));o=t.pendingProps,i=(s=t.memoizedState).element,Dr(e,t),Hr(t,o,null,n);var a=t.memoizedState;if(o=a.element,s.isDehydrated){if(s={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=$a(e,t,o,n,i=la(Error(r(423)),t));break e}if(o!==i){t=$a(e,t,o,n,i=la(Error(r(424)),t));break e}for(or=ci(t.stateNode.containerInfo.firstChild),nr=t,ir=!0,rr=null,n=xr(t,null,o,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pr(),o===i){t=Ha(e,t,n);break e}ya(e,t,o,n)}t=t.child}return t;case 5:return Xr(t),null===e&&cr(t),o=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,ni(o,i)?a=null:null!==s&&ni(o,s)&&(t.flags|=32),Sa(e,t),ya(e,t,a,n),t.child;case 6:return null===e&&cr(t),null;case 13:return Na(e,t,n);case 4:return Qr(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=_r(t,null,o,n):ya(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,_a(e,t,o,i=t.elementType===o?i:ta(o,i),n);case 7:return ya(e,t,t.pendingProps,n),t.child;case 8:case 12:return ya(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ei(wr,o._currentValue),o._currentValue=a,null!==s)if(so(s.value,a)){if(s.children===i.children&&!$i.current){t=Ha(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var l=s.dependencies;if(null!==l){a=s.child;for(var c=l.firstContext;null!==c;){if(c.context===o){if(1===s.tag){(c=Br(-1,n&-n)).tag=2;var d=s.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,null!==(c=s.alternate)&&(c.lanes|=n),Ir(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(r(341));a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),Ir(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}ya(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,$r(t,n),o=o(i=Or(i)),t.flags|=1,ya(e,t,o,n),t.child;case 14:return i=ta(o=t.type,t.pendingProps),xa(e,t,o,i=ta(o.type,i),n);case 15:return wa(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ta(o,i),Ma(e,t),t.tag=1,Ri(o)?(e=!0,Ti(t)):e=!1,$r(t,n),ra(t,o,i),aa(t,o,i,n),Pa(null,t,o,!0,e,n);case 19:return Fa(e,t,n);case 22:return ka(e,t,n)}throw Error(r(156,t.tag))};"function"==typeof reportError&&reportError;function jc(e){this._internalRoot=e}function qc(e){this._internalRoot=e}function Wc(){}function Kc(e,t,n,o,i){var r=n._reactRootContainer;if(r){var s=r;if("function"==typeof i){var a=i;i=function(){var e=Mc(s);a.call(e)}}Fc(t,s,e,i)}else s=function(e,t,n,o,i){if(i){if("function"==typeof o){var r=o;o=function(){var e=Mc(s);r.call(e)}}var s=function(e,t,n,o,i,r,s,a,l){return(e=Bc(n,o,!0,e,0,r,0,a,l)).context=Vc(null),n=e.current,(r=Br(o=Zl(),i=Jl(n))).callback=null!=t?t:null,Vr(n,r,i),e.current.lanes=i,gt(e,i,o),tc(e,o),e}(t,o,e,0,null,!1,0,"",Wc);return e._reactRootContainer=s,e[fi]=s.current,Ho(8===e.nodeType?e.parentNode:e),lc(),s}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof o){var a=o;o=function(){var e=Mc(l);a.call(e)}}var l=Bc(e,0,!1,null,0,!1,0,"",Wc);return e._reactRootContainer=l,e[fi]=l.current,Ho(8===e.nodeType?e.parentNode:e),lc(function(){Fc(t,l,n,o)}),l}(n,t,e,i,o);return Mc(s)}qc.prototype.render=jc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(r(409));Fc(e,t,null,null)},qc.prototype.unmount=jc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lc(function(){Fc(null,e,null,null)}),t[fi]=null}},qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Tt(e)}},_t=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(mt(t,1|n),tc(t,Ye()),!(6&El)&&(Fl=Ye()+500,Hi()))}break;case 13:lc(function(){var t=Lr(e,1);if(null!==t){var n=Zl();ec(t,e,1,n)}}),Uc(e,1)}},xt=function(e){if(13===e.tag){var t=Lr(e,134217728);null!==t&&ec(t,e,134217728,Zl()),Uc(e,134217728)}},wt=function(e){if(13===e.tag){var t=Jl(e),n=Lr(e,t);null!==n&&ec(n,e,t,Zl()),Uc(e,t)}},kt=function(){return bt},St=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},xe=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=xi(o);if(!i)throw Error(r(90));K(o),Z(o,i)}}}break;case"textarea":re(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=ac,Ie=lc;var Gc={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qc={bundleType:Gc.bundleType,version:Gc.version,rendererPackageName:Gc.rendererPackageName,rendererConfig:Gc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=je(e))?null:e.stateNode},findFiberByHostInstance:Gc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{ot=Yc.inject(Qc),it=Yc}catch(e){}}t.render=function(e,t,n){if(!function(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}(t))throw Error(r(200));return Kc(null,e,t,!1,n)}},961(e,t,n){!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(551)},287(e,t){var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var _=y.prototype=new b;_.constructor=y,v(_,m.prototype),_.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,o){var i,r={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,i)&&!S.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===r[i]&&(r[i]=l[i]);return{$$typeof:n,type:e,key:s,ref:a,props:r,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,i,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case o:l=!0}}if(l)return s=s(l=e),e=""===r?"."+I(l,0):r,x(s)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),$(s,t,i,"",function(e){return e})):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",x(e))for(var c=0;c<e.length;c++){var d=r+I(a=e[c],c);l+=$(a,t,i,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(a=e.next()).done;)l+=$(a=a.value,t,i,d=r+I(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var o=[],i=0;return $(e,o,"","",function(e){return t.call(n,e,i++)}),o}function A(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},z={transition:null},L={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=s,t.PureComponent=y,t.StrictMode=r,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=N,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=v({},e.props),r=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)w.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=o;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:n,type:e.type,key:r,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},540(e,t,n){e.exports=n(287)},463(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var o=n-1>>>1,i=e[o];if(!(0<r(i,t)))break e;e[o]=t,e[n]=i,n=o}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,i=e.length,s=i>>>1;o<s;){var a=2*(o+1)-1,l=e[a],c=a+1,d=e[c];if(0>r(l,n))c<i&&0>r(d,l)?(e[o]=d,e[c]=n,o=c):(e[o]=l,e[a]=n,o=a);else{if(!(c<i&&0>r(d,n)))break e;e[o]=d,e[c]=n,o=c}}}return t}function r(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],u=1,h=null,p=3,f=!1,v=!1,g=!1,m="function"==typeof setTimeout?setTimeout:null,b="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function _(e){for(var t=o(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,n(c,t)}t=o(d)}}function x(e){if(g=!1,_(e),!v)if(null!==o(c))v=!0,z(w);else{var t=o(d);null!==t&&L(x,t.startTime-e)}}function w(e,n){v=!1,g&&(g=!1,b(E),E=-1),f=!0;var r=p;try{for(_(n),h=o(c);null!==h&&(!(h.expirationTime>n)||e&&!$());){var s=h.callback;if("function"==typeof s){h.callback=null,p=h.priorityLevel;var a=s(h.expirationTime<=n);n=t.unstable_now(),"function"==typeof a?h.callback=a:h===o(c)&&i(c),_(n)}else i(c);h=o(c)}if(null!==h)var l=!0;else{var u=o(d);null!==u&&L(x,u.startTime-n),l=!1}return l}finally{h=null,p=r,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,S=!1,C=null,E=-1,P=5,I=-1;function $(){return!(t.unstable_now()-I<P)}function O(){if(null!==C){var e=t.unstable_now();I=e;var n=!0;try{n=C(!0,e)}finally{n?k():(S=!1,C=null)}}else S=!1}if("function"==typeof y)k=function(){y(O)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=O,k=function(){R.postMessage(null)}}else k=function(){m(O,0)};function z(e){C=e,S||(S=!0,k())}function L(e,n){E=m(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){v||f||(v=!0,z(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return o(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,r){var s=t.unstable_now();switch(r="object"==typeof r&&null!==r&&"number"==typeof(r=r.delay)&&0<r?s+r:s,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:r,expirationTime:a=r+a,sortIndex:-1},r>s?(e.sortIndex=r,n(d,e),null===o(c)&&e===o(d)&&(g?(b(E),E=-1):g=!0,L(x,r-s))):(e.sortIndex=a,n(c,e),v||f||(v=!0,z(w))),e},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},982(e,t,n){e.exports=n(463)}};const t={};function n(o){const i=t[o];if(void 0!==i)return i.exports;const r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}var o=n(540),i=n(961);const r=new Set(["children","localName","ref","style","className"]),s=new WeakMap,a=(e,t,n,o,i)=>{const r=i?.[t];void 0===r?(e[t]=n,null==n&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==o&&((e,t,n)=>{let o=s.get(e);void 0===o&&s.set(e,o=new Map);let i=o.get(t);void 0!==n?void 0===i?(o.set(t,i={handleEvent:n}),e.addEventListener(t,i)):i.handleEvent=n:void 0!==i&&(o.delete(t),e.removeEventListener(t,i))})(e,r,n)},l=({react:e,tagName:t,elementClass:n,events:o,displayName:i})=>{const s=new Set(Object.keys(o??{})),l=e.forwardRef((i,l)=>{const c=e.useRef(new Map),d=e.useRef(null),u={},h={};for(const[e,t]of Object.entries(i))r.has(e)?u["className"===e?"class":e]=t:s.has(e)||e in n.prototype?h[e]=t:u[e]=t;return e.useLayoutEffect(()=>{if(null===d.current)return;const e=new Map;for(const t in h)a(d.current,t,i[t],c.current.get(t),o),c.current.delete(t),e.set(t,i[t]);for(const[e,t]of c.current)a(d.current,e,void 0,t,o);c.current=e}),e.useLayoutEffect(()=>{d.current?.removeAttribute("defer-hydration")},[]),u.suppressHydrationWarning=!0,e.createElement(t,{...u,ref:e.useCallback(e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)},[l])})});return l.displayName=i??n.name,l},c=globalThis,d=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),h=new WeakMap;class p{constructor(e,t,n){if(this._$cssResult$=!0,n!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(d&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}}const f=e=>new p("string"==typeof e?e:e+"",void 0,u),v=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new p(n,e,u)},g=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return f(t)})(e):e,{is:m,defineProperty:b,getOwnPropertyDescriptor:y,getOwnPropertyNames:_,getOwnPropertySymbols:x,getPrototypeOf:w}=Object,k=globalThis,S=k.trustedTypes,C=S?S.emptyScript:"",E=k.reactiveElementPolyfillSupport,P=(e,t)=>e,I={toAttribute(e,t){switch(t){case Boolean:e=e?C:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},$=(e,t)=>!m(e,t),O={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=O){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&b(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:i}=y(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const r=o?.call(this);i?.call(this,t),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??O}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,t=[..._(e),...x(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(d)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of t){const t=document.createElement("style"),o=c.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:I).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:I;this._$Em=o;const r=i.fromAttribute(t,e.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(void 0!==e){const r=this.constructor;if(!1===o&&(i=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??$)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==i||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[P("elementProperties")]=new Map,A[P("finalized")]=new Map,E?.({ReactiveElement:A}),(k.reactiveElementVersions??=[]).push("2.1.2");const R=globalThis,z=e=>e,L=R.trustedTypes,N=L?L.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+D,V=`<${B}>`,F=document,M=()=>F.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,j=e=>U(e)||"function"==typeof e?.[Symbol.iterator],q="[ \t\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,G=/>/g,Q=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,X=/"/g,Z=/^(?:script|style|textarea|title)$/i,J=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ee=J(1),te=J(2),ne=(J(3),Symbol.for("lit-noChange")),oe=Symbol.for("lit-nothing"),ie=new WeakMap,re=F.createTreeWalker(F,129);function se(e,t){if(!U(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(t):t}const ae=(e,t)=>{const n=e.length-1,o=[];let i,r=2===t?"<svg>":3===t?"<math>":"",s=W;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===W?"!--"===l[1]?s=K:void 0!==l[1]?s=G:void 0!==l[2]?(Z.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=Q):void 0!==l[3]&&(s=Q):s===Q?">"===l[0]?(s=i??W,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Q:'"'===l[3]?X:Y):s===X||s===Y?s=Q:s===K||s===G?s=W:(s=Q,i=void 0);const u=s===Q&&e[t+1].startsWith("/>")?" ":"";r+=s===W?n+V:c>=0?(o.push(a),n.slice(0,c)+T+n.slice(c)+D+u):n+D+(-2===c?t:u)}return[se(e,r+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class le{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,r=0;const s=e.length-1,a=this.parts,[l,c]=ae(e,t);if(this.el=le.createElement(l,n),re.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=re.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(T)){const t=c[r++],n=o.getAttribute(e).split(D),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:n,ctor:"."===s[1]?pe:"?"===s[1]?fe:"@"===s[1]?ve:he}),o.removeAttribute(e)}else e.startsWith(D)&&(a.push({type:6,index:i}),o.removeAttribute(e));if(Z.test(o.tagName)){const e=o.textContent.split(D),t=e.length-1;if(t>0){o.textContent=L?L.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],M()),re.nextNode(),a.push({type:2,index:++i});o.append(e[t],M())}}}else if(8===o.nodeType)if(o.data===B)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(D,e+1));)a.push({type:7,index:i}),e+=D.length-1}i++}}static createElement(e,t){const n=F.createElement("template");return n.innerHTML=e,n}}function ce(e,t,n=e,o){if(t===ne)return t;let i=void 0!==o?n._$Co?.[o]:n._$Cl;const r=H(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=i:n._$Cl=i),void 0!==i&&(t=ce(e,i._$AS(e,t.values),i,o)),t}class de{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??F).importNode(t,!0);re.currentNode=o;let i=re.nextNode(),r=0,s=0,a=n[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new ue(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ge(i,this,e)),this._$AV.push(t),a=n[++s]}r!==a?.index&&(i=re.nextNode(),r++)}return re.currentNode=F,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ue{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ce(this,e,t),H(e)?e===oe||null==e||""===e?(this._$AH!==oe&&this._$AR(),this._$AH=oe):e!==this._$AH&&e!==ne&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):j(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==oe&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=le.createElement(se(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new de(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ie.get(e.strings);return void 0===t&&ie.set(e.strings,t=new le(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const i of e)o===t.length?t.push(n=new ue(this.O(M()),this.O(M()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=z(e).nextSibling;z(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class he{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=oe}_$AI(e,t=this,n,o){const i=this.strings;let r=!1;if(void 0===i)e=ce(this,e,t,0),r=!H(e)||e!==this._$AH&&e!==ne,r&&(this._$AH=e);else{const o=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=ce(this,o[n+s],t,s),a===ne&&(a=this._$AH[s]),r||=!H(a)||a!==this._$AH[s],a===oe?e=oe:e!==oe&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}r&&!o&&this.j(e)}j(e){e===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pe extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===oe?void 0:e}}class fe extends he{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==oe)}}class ve extends he{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=ce(this,e,t,0)??oe)===ne)return;const n=this._$AH,o=e===oe&&n!==oe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==oe&&(n===oe||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ge{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ce(this,e)}}const me={M:T,P:D,A:B,C:1,L:ae,R:de,D:j,V:ce,I:ue,H:he,N:fe,U:ve,B:pe,F:ge},be=R.litHtmlPolyfillSupport;be?.(le,ue),(R.litHtmlVersions??=[]).push("3.3.3");const ye=(e,t,n)=>{const o=n?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=n?.renderBefore??null;o._$litPart$=i=new ue(t.insertBefore(M(),e),e,void 0,n??{})}return i._$AI(e),i},_e=globalThis;class xe extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ne}}xe._$litElement$=!0,xe.finalized=!0,_e.litElementHydrateSupport?.({LitElement:xe});const we=_e.litElementPolyfillSupport;we?.({LitElement:xe}),(_e.litElementVersions??=[]).push("4.2.2");const ke={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:$},Se=(e=ke,t,n)=>{const{kind:o,metadata:i}=n;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),r.set(n.name,e),"accessor"===o){const{name:o}=n;return{set(n){const i=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,i,e,!0,n)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=n;return function(n){const i=this[o];t.call(this,n),this.requestUpdate(o,i,e,!0,n)}}throw Error("Unsupported decorator location: "+o)};function Ce(e){return(t,n)=>"object"==typeof n?Se(e,t,n):((e,t,n)=>{const o=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),o?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Ee(e){return Ce({...e,state:!0,attribute:!1})}const Pe=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,n),n);function Ie(e,t){return(n,o,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?n:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Pe(n,o,{get(){let n=e.call(this);return void 0===n&&(n=r(this),(null!==n||this.hasUpdated)&&t.call(this,n)),n}})}return Pe(n,o,{get(){return r(this)}})}}let $e;function Oe(e){return(t,n)=>{const{slot:o,selector:i}=e??{},r="slot"+(o?`[name=${o}]`:":not([name])");return Pe(t,n,{get(){const t=this.renderRoot?.querySelector(r),n=t?.assignedElements(e)??[];return void 0===i?n:n.filter(e=>e.matches(i))}})}}const Ae="2.5.1",Re="__vscodeElements_disableRegistryWarning__",ze=(e,t)=>{t?console.warn(`[VSCode Elements] ${e}\n%o`,t):console.warn(`${e}\n%o`,t)};class Le extends xe{get version(){return Ae}warn(e){ze(e,this)}}const Ne=e=>t=>{if(!customElements.get(e))return void customElements.define(e,t);if(Re in window)return;const n=document.createElement(e),o=n?.version;let i="";o?o!==Ae?(i+="is already registered by a different version of VSCode Elements. ",i+=`This version is "${Ae}", while the other one is "${o}".`):i+=`is already registered by the same version of VSCode Elements (${Ae}).`:i+="is already registered by an unknown custom element handler class.",ze(`The custom element "${e}" ${i}\nTo suppress this warning, set window.${Re} to true`)},Te=v`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;function De(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const Be=[Te,v`
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
      font-family: var(--vscode-font-family, ${f(De())});
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
  `];var Ve=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Fe=class extends Le{constructor(){super(...arguments),this.variant="default"}render(){return ee`<div class="root"><slot></slot></div>`}};Fe.styles=Be,Ve([Ce({reflect:!0})],Fe.prototype,"variant",void 0),Fe=Ve([Ne("vscode-badge")],Fe);const Me=l({tagName:"vscode-badge",elementClass:Fe,react:o,displayName:"VscodeBadge"}),He=e=>(...t)=>({_$litDirective$:e,values:t});class Ue{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const je=He(class extends Ue{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ne}}),qe=e=>e??oe,We=He(class extends Ue{constructor(e){if(super(e),this._prevProperties={},3!==e.type||"style"!==e.name)throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[t]){return Object.entries(t).forEach(([t,n])=>{this._prevProperties[t]!==n&&(t.startsWith("--")?e.element.style.setProperty(t,n):e.element.style[t]=n,this._prevProperties[t]=n)}),ne}render(e){return ne}}),Ke=[Te,v`
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
  `];var Ge,Qe=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Ye=Ge=class extends Le{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:t}=this._getStylesheetConfig();Ge.stylesheetHref=e,Ge.nonce=t}_getStylesheetConfig(){if("undefined"==typeof document)return{nonce:void 0,href:void 0};const e=document.getElementById("vscode-codicon-stylesheet"),t=e?.getAttribute("href")||void 0,n=e?.nonce||void 0;if(!e){let e='To use the Icon component, the codicons.css file must be included in the page with the id "vscode-codicon-stylesheet"! ';e+="See https://vscode-elements.github.io/components/icon/ for more details.",this.warn(e)}return{nonce:n,href:t}}render(){const{stylesheetHref:e,nonce:t}=Ge,n=ee`<span
      class=${je({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${We({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,o=this.actionIcon?ee` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${n}
        </button>`:ee` <span class="icon" aria-hidden="true" role="presentation"
          >${n}</span
        >`;return ee`
      <link
        rel="stylesheet"
        href=${qe(e)}
        nonce=${qe(t)}
      />
      ${o}
    `}};Ye.styles=Ke,Ye.stylesheetHref="",Ye.nonce="",Qe([Ce()],Ye.prototype,"label",void 0),Qe([Ce({type:String})],Ye.prototype,"name",void 0),Qe([Ce({type:Number})],Ye.prototype,"size",void 0),Qe([Ce({type:Boolean,reflect:!0})],Ye.prototype,"spin",void 0),Qe([Ce({type:Number,attribute:"spin-duration"})],Ye.prototype,"spinDuration",void 0),Qe([Ce({type:Boolean,reflect:!0,attribute:"action-icon"})],Ye.prototype,"actionIcon",void 0),Ye=Ge=Qe([Ne("vscode-icon")],Ye);const Xe=[Te,v`
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
      font-family: var(--vscode-font-family, ${f(De())});
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
  `];var Ze=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Je=class extends Le{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.block=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._hasContentBefore=!1,this._hasContentAfter=!1,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){"submit"===this.type&&this._internals.form&&this._internals.form.requestSubmit(),"reset"===this.type&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if(("Enter"===e.key||" "===e.key)&&!this.hasAttribute("disabled")){const e=new MouseEvent("click",{bubbles:!0,cancelable:!0});e.synthetic=!0,this.dispatchEvent(e),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||this._executeAction()}_handleSlotChange(e){const t=e.target;"content-before"===t.name&&(this._hasContentBefore=t.assignedElements().length>0),"content-after"===t.name&&(this._hasContentAfter=t.assignedElements().length>0)}render(){const e=""!==this.icon,t=""!==this.iconAfter,n={base:!0,"icon-only":this.iconOnly,"has-content-before":this._hasContentBefore,"has-content-after":this._hasContentAfter},o=e?ee`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${qe(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:oe,i=t?ee`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${qe(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:oe;return ee`
      <div
        class=${je(n)}
        part="base"
        @slotchange=${this._handleSlotChange}
      >
        <slot name="content-before"></slot>
        ${o}
        <slot></slot>
        ${i}
        <slot name="content-after"></slot>
      </div>
    `}};Je.styles=Xe,Je.formAssociated=!0,Ze([Ce({type:Boolean,reflect:!0})],Je.prototype,"autofocus",void 0),Ze([Ce({type:Number,reflect:!0})],Je.prototype,"tabIndex",void 0),Ze([Ce({type:Boolean,reflect:!0})],Je.prototype,"secondary",void 0),Ze([Ce({type:Boolean,reflect:!0})],Je.prototype,"block",void 0),Ze([Ce({reflect:!0})],Je.prototype,"role",void 0),Ze([Ce({type:Boolean,reflect:!0})],Je.prototype,"disabled",void 0),Ze([Ce()],Je.prototype,"icon",void 0),Ze([Ce({type:Boolean,reflect:!0,attribute:"icon-spin"})],Je.prototype,"iconSpin",void 0),Ze([Ce({type:Number,reflect:!0,attribute:"icon-spin-duration"})],Je.prototype,"iconSpinDuration",void 0),Ze([Ce({attribute:"icon-after"})],Je.prototype,"iconAfter",void 0),Ze([Ce({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],Je.prototype,"iconAfterSpin",void 0),Ze([Ce({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],Je.prototype,"iconAfterSpinDuration",void 0),Ze([Ce({type:Boolean,reflect:!0})],Je.prototype,"focused",void 0),Ze([Ce({type:String,reflect:!0})],Je.prototype,"name",void 0),Ze([Ce({type:Boolean,reflect:!0,attribute:"icon-only"})],Je.prototype,"iconOnly",void 0),Ze([Ce({reflect:!0})],Je.prototype,"type",void 0),Ze([Ce()],Je.prototype,"value",void 0),Ze([Ee()],Je.prototype,"_hasContentBefore",void 0),Ze([Ee()],Je.prototype,"_hasContentAfter",void 0),Je=Ze([Ne("vscode-button")],Je);const et=l({tagName:"vscode-button",elementClass:Je,react:o,displayName:"VscodeButton"}),tt=[Te,v`
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
  `];let nt=class extends Le{render(){return ee`<div class="root"><slot></slot></div>`}};nt.styles=tt,nt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}([Ne("vscode-button-group")],nt),l({tagName:"vscode-button-group",elementClass:nt,react:o,displayName:"VscodeButtonGroup"});class ot extends Le{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"disabled"===e&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):"disabled"!==e||this.hasAttribute("disabled")||(this.tabIndex=this._prevTabindex)}}!function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);r>3&&s&&Object.defineProperty(t,n,s)}([Ce({type:Boolean,reflect:!0})],ot.prototype,"focused",void 0);const it=e=>{class t extends e{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(e){this._label=e,""===this._slottedText&&this.setAttribute("aria-label",e)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",""!==this._slottedText&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return""===this._slottedText?ee`<span class="label-attr">${this._label}</span>`:ee`${oe}`}}return function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);r>3&&s&&Object.defineProperty(t,n,s)}([Ce()],t.prototype,"label",null),t},rt=[v`
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
  `],st=[Te,rt,v`
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
  `];var at=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let lt=class extends(it(ot)){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.toggle=!1,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),this.disabled||this._toggleState()},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "===e.key&&this._toggleState(),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,t){e&&(this.checked=!0)}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=je({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),t=je({"label-inner":!0}),n=ee`<svg
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
    </svg>`,o=this.checked&&!this.indeterminate?n:oe,i=this.indeterminate?ee`<span class="indeterminate-icon"></span>`:oe,r=this.toggle?ee`<span class="thumb"></span>`:ee`${i}${o}`;return ee`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          role=${qe(this.toggle?"switch":void 0)}
          aria-checked=${qe(this.toggle?this.checked?"true":"false":void 0)}
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
    `}};lt.styles=st,lt.formAssociated=!0,lt.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0},at([Ce({type:Boolean,reflect:!0})],lt.prototype,"autofocus",void 0),at([Ce({type:Boolean,reflect:!0})],lt.prototype,"checked",null),at([Ce({type:Boolean,reflect:!0,attribute:"default-checked"})],lt.prototype,"defaultChecked",void 0),at([Ce({type:Boolean,reflect:!0})],lt.prototype,"invalid",void 0),at([Ce({reflect:!0})],lt.prototype,"name",void 0),at([Ce({type:Boolean,reflect:!0})],lt.prototype,"toggle",void 0),at([Ce()],lt.prototype,"value",void 0),at([Ce({type:Boolean,reflect:!0})],lt.prototype,"disabled",void 0),at([Ce({type:Boolean,reflect:!0})],lt.prototype,"indeterminate",void 0),at([Ce({type:Boolean,reflect:!0})],lt.prototype,"required",null),at([Ce()],lt.prototype,"type",void 0),at([Ie("#input")],lt.prototype,"_inputEl",void 0),lt=at([Ne("vscode-checkbox")],lt),l({tagName:"vscode-checkbox",elementClass:lt,react:o,displayName:"VscodeCheckbox",events:{onChange:"change"}});const ct=[Te,v`
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
  `];var dt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ut=class extends Le{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};ut.styles=ct,dt([Ce({reflect:!0})],ut.prototype,"role",void 0),dt([Ce({reflect:!0})],ut.prototype,"variant",void 0),ut=dt([Ne("vscode-checkbox-group")],ut),l({tagName:"vscode-checkbox-group",elementClass:ut,react:o,displayName:"VscodeCheckboxGroup"});const ht=[Te,v`
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
  `];var pt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ft=class extends Le{constructor(){super(...arguments),this.alwaysShowHeaderActions=!1,this.title="",this.heading="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){"Enter"===e.key&&(this.open=!this.open,this._emitToggleEvent())}_onHeaderSlotClick(e){e.stopPropagation()}render(){const e={collapsible:!0,open:this.open},t={actions:!0,"always-visible":this.alwaysShowHeaderActions},n=this.heading?this.heading:this.title,o=ee`<svg
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
    </svg>`,i=this.description?ee`<span class="description">${this.description}</span>`:oe;return ee`
      <div class=${je(e)}>
        <div
          class="collapsible-header"
          tabindex="0"
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${o}
          <h3 class="title">${n}${i}</h3>
          <div class="header-slots">
            <div class=${je(t)}>
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
    `}};ft.styles=ht,pt([Ce({type:Boolean,reflect:!0,attribute:"always-show-header-actions"})],ft.prototype,"alwaysShowHeaderActions",void 0),pt([Ce({type:String})],ft.prototype,"title",void 0),pt([Ce()],ft.prototype,"heading",void 0),pt([Ce()],ft.prototype,"description",void 0),pt([Ce({type:Boolean,reflect:!0})],ft.prototype,"open",void 0),ft=pt([Ne("vscode-collapsible")],ft),l({tagName:"vscode-collapsible",elementClass:ft,react:o,displayName:"VscodeCollapsible"});const vt=[Te,v`
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
  `];var gt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let mt=class extends Le{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return ee`
      ${this.separator?ee`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:ee`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?ee`<span class="label">${this.label}</span>`:oe}
                ${this.keybinding?ee`<span class="keybinding">${this.keybinding}</span>`:oe}
              </a>
            </div>
          `}
    `}};mt.styles=vt,gt([Ce({type:String})],mt.prototype,"label",void 0),gt([Ce({type:String})],mt.prototype,"keybinding",void 0),gt([Ce({type:String})],mt.prototype,"value",void 0),gt([Ce({type:Boolean,reflect:!0})],mt.prototype,"separator",void 0),gt([Ce({type:Number})],mt.prototype,"tabindex",void 0),mt=gt([Ne("vscode-context-menu-item")],mt);const bt=[Te,v`
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
  `];var yt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let _t=class extends Le{set data(e){this._data=e;const t=[];e.forEach((e,n)=>{e.separator||t.push(n)}),this._clickableItemIndexes=t}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:t}=e;switch("ArrowUp"!==t&&"ArrowDown"!==t&&"Escape"!==t&&"Enter"!==t||e.preventDefault(),t){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter()}}_handleArrowUp(){0===this._selectedClickableItemIndex?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:t,label:n,value:o,separator:i,tabindex:r}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:t,label:n,separator:i,tabindex:r,value:o}}))}_handleEnter(){if(-1===this._selectedClickableItemIndex)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],t=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchSelectEvent(t),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const t=e.currentTarget;this._dispatchSelectEvent(t),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const t=e.target,n=t.dataset.index?+t.dataset.index:-1,o=this._clickableItemIndexes.findIndex(e=>e===n);-1!==o&&(this._selectedClickableItemIndex=o)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return ee`${oe}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return ee`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:t="",keybinding:n="",value:o="",separator:i=!1,tabindex:r=0},s)=>ee`
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
              `):ee`<slot></slot>`}
      </div>
    `}};_t.styles=bt,yt([Ce({type:Array,attribute:!1})],_t.prototype,"data",null),yt([Ce({type:Boolean,reflect:!0,attribute:"prevent-close"})],_t.prototype,"preventClose",void 0),yt([Ce({type:Boolean,reflect:!0})],_t.prototype,"show",null),yt([Ce({type:Number,reflect:!0})],_t.prototype,"tabIndex",void 0),yt([Ee()],_t.prototype,"_selectedClickableItemIndex",void 0),yt([Ee()],_t.prototype,"_show",void 0),yt([Ie(".context-menu")],_t.prototype,"_wrapperEl",void 0),_t=yt([Ne("vscode-context-menu")],_t),l({tagName:"vscode-context-menu",elementClass:_t,react:o,displayName:"VscodeContextMenu",events:{onVscContextMenuSelect:"vsc-context-menu-select"}}),l({tagName:"vscode-context-menu-item",elementClass:mt,react:o,displayName:"VscodeContextMenuItem"});const xt=[Te,v`
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
  `];var wt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let kt=class extends Le{constructor(){super(...arguments),this.role="separator"}render(){return ee`<div></div>`}};kt.styles=xt,wt([Ce({reflect:!0})],kt.prototype,"role",void 0),kt=wt([Ne("vscode-divider")],kt),l({tagName:"vscode-divider",elementClass:kt,react:o,displayName:"VscodeDivider"});const St=[Te,v`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var Ct,Et=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};!function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(Ct||(Ct={}));let Pt=class extends Le{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(e){this._responsive=e,this._firstUpdateComplete&&(e?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}_toggleCompactLayout(e){this._assignedFormGroups.forEach(t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const n=t.dataset.originalVariant;e===Ct.VERTICAL&&"horizontal"===n?t.variant="vertical":t.variant=n,t.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(t=>{t.dataset.originalVariant||(t.dataset.originalVariant=t.variant);const n=t.dataset.originalVariant;e===Ct.HORIZONTAL&&n===Ct.HORIZONTAL?t.variant="horizontal":t.variant="vertical"})})}_resizeObserverCallback(e){let t=0;for(const n of e)t=n.contentRect.width;const n=t<this.breakpoint?Ct.VERTICAL:Ct.HORIZONTAL;n!==this._currentFormGroupLayout&&(this._toggleCompactLayout(n),this._currentFormGroupLayout=n)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){this._resizeObserver?.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Pt.styles=St,Et([Ce({type:Boolean,reflect:!0})],Pt.prototype,"responsive",null),Et([Ce({type:Number})],Pt.prototype,"breakpoint",void 0),Et([Ie(".wrapper")],Pt.prototype,"_wrapperElement",void 0),Et([Oe({selector:"vscode-form-group"})],Pt.prototype,"_assignedFormGroups",void 0),Pt=Et([Ne("vscode-form-container")],Pt),l({tagName:"vscode-form-container",elementClass:Pt,react:o,displayName:"VscodeFormContainer"});const It=[Te,v`
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
  `];var $t=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Ot=class extends Le{constructor(){super(...arguments),this.variant="horizontal"}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Ot.styles=It,$t([Ce({reflect:!0})],Ot.prototype,"variant",void 0),Ot=$t([Ne("vscode-form-group")],Ot),l({tagName:"vscode-form-group",elementClass:Ot,react:o,displayName:"VscodeFormGroup"});const At=[Te,v`
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
  `];let Rt;"undefined"!=typeof CSSStyleSheet&&(Rt=new CSSStyleSheet,Rt.replaceSync("\n    vscode-form-helper * {\n      margin: 0;\n    }\n\n    vscode-form-helper *:not(:last-child) {\n      margin-bottom: 8px;\n    }\n  "));let zt=class extends Le{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){if("undefined"==typeof document||!Rt)return;const e=document.adoptedStyleSheets.find(e=>e===Rt);e||document.adoptedStyleSheets.push(Rt)}render(){return ee`<slot></slot>`}};zt.styles=At,zt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}([Ne("vscode-form-helper")],zt),l({tagName:"vscode-form-helper",elementClass:zt,react:o,displayName:"VscodeFormHelper"}),l({tagName:"vscode-icon",elementClass:Ye,react:o,displayName:"VscodeIcon"});let Lt=0;const Nt=(e="")=>(Lt++,`${e}${Lt}`),Tt=[Te,v`
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
  `];var Dt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Bt=class extends Le{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n)}connectedCallback(){super.connectedCallback(),this._connected=!0,""===this._id&&(this._id=Nt("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const t=this.getRootNode({composed:!1});t&&(e=t.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();["vscode-radio-group","vscode-checkbox-group"].includes(e?.tagName.toLowerCase()??"")&&e.setAttribute("aria-labelledby",this._id);let t="";this.textContent&&(t=this.textContent.trim()),e&&"label"in e&&["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select"].includes(e?.tagName.toLowerCase()??"")&&(e.label=t)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return ee`
      <label
        class=${je({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Bt.styles=Tt,Dt([Ce({reflect:!0,attribute:"for"})],Bt.prototype,"htmlFor",null),Dt([Ce()],Bt.prototype,"id",null),Dt([Ce({type:Boolean,reflect:!0})],Bt.prototype,"required",void 0),Bt=Dt([Ne("vscode-label")],Bt),l({tagName:"vscode-label",elementClass:Bt,react:o,displayName:"VscodeLabel"});const Vt=ee`
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
`,Ft=te`<svg
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
</svg>`,{I:Mt}=me,Ht=e=>e,Ut=()=>document.createComment(""),jt=(e,t,n)=>{const o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(Ut(),i),r=o.insertBefore(Ut(),i);n=new Mt(t,r,e,e.options)}else{const t=n._$AB.nextSibling,r=n._$AM,s=r!==e;if(s){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==r._$AU&&n._$AP(t)}if(t!==i||s){let e=n._$AA;for(;e!==t;){const t=Ht(e).nextSibling;Ht(o).insertBefore(e,i),e=t}}}return n},qt=(e,t,n=e)=>(e._$AI(t,n),e),Wt={},Kt=e=>{e._$AR(),e._$AA.remove()},Gt=(e,t,n)=>{const o=new Map;for(let i=t;i<=n;i++)o.set(e[i],i);return o},Qt=He(class extends Ue{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;void 0===n?n=t:void 0!==t&&(o=t);const i=[],r=[];let s=0;for(const t of e)i[s]=o?o(t,s):s,r[s]=n(t,s),s++;return{values:r,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const i=(e=>e._$AH)(e),{values:r,keys:s}=this.dt(t,n,o);if(!Array.isArray(i))return this.ut=s,r;const a=this.ut??=[],l=[];let c,d,u=0,h=i.length-1,p=0,f=r.length-1;for(;u<=h&&p<=f;)if(null===i[u])u++;else if(null===i[h])h--;else if(a[u]===s[p])l[p]=qt(i[u],r[p]),u++,p++;else if(a[h]===s[f])l[f]=qt(i[h],r[f]),h--,f--;else if(a[u]===s[f])l[f]=qt(i[u],r[f]),jt(e,l[f+1],i[u]),u++,f--;else if(a[h]===s[p])l[p]=qt(i[h],r[p]),jt(e,i[u],i[h]),h--,p++;else if(void 0===c&&(c=Gt(s,p,f),d=Gt(a,u,h)),c.has(a[u]))if(c.has(a[h])){const t=d.get(s[p]),n=void 0!==t?i[t]:null;if(null===n){const t=jt(e,i[u]);qt(t,r[p]),l[p]=t}else l[p]=qt(n,r[p]),jt(e,i[u],n),i[t]=null;p++}else Kt(i[h]),h--;else Kt(i[u]),u++;for(;p<=f;){const t=jt(e,l[f+1]);qt(t,r[p]),l[p++]=t}for(;u<=h;){const e=i[u++];null!==e&&Kt(e)}return this.ut=s,((e,t=Wt)=>{e._$AH=t})(e,l),ne}}),Yt=Te;var Xt=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Zt=class extends Le{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return ee`<slot @slotchange=${this._handleSlotChange}></slot>`}};Zt.styles=Yt,Xt([Ce({type:String})],Zt.prototype,"value",void 0),Xt([Ce({type:String})],Zt.prototype,"description",void 0),Xt([Ce({type:Boolean,reflect:!0})],Zt.prototype,"selected",void 0),Xt([Ce({type:Boolean,reflect:!0})],Zt.prototype,"disabled",void 0),Zt=Xt([Ne("vscode-option")],Zt);const Jt=(e,t)=>{const n={match:!1,ranges:[]},o=e.toLowerCase(),i=t.toLowerCase(),r=o.split(" ");let s=0;return r.forEach((t,o)=>{if(o>0&&(s+=r[o-1].length+1),n.match)return;const a=t.indexOf(i),l=i.length;0===a&&(n.match=!0,n.ranges.push([s+a,Math.min(s+a+l,e.length)]))}),n},en=(e,t)=>{const n={match:!1,ranges:[]};return 0===e.toLowerCase().indexOf(t.toLowerCase())&&(n.match=!0,n.ranges=[[0,t.length]]),n},tn=(e,t)=>{const n={match:!1,ranges:[]},o=e.toLowerCase().indexOf(t.toLowerCase());return o>-1&&(n.match=!0,n.ranges=[[o,o+t.length]]),n},nn=(e,t)=>{const n={match:!1,ranges:[]};let o=0,i=0;const r=t.length-1,s=e.toLowerCase(),a=t.toLowerCase();for(let e=0;e<=r;e++){if(i=s.indexOf(a[e],o),-1===i)return{match:!1,ranges:[]};n.match=!0,n.ranges.push([i,i+1]),o=i+1}return n},on=e=>{const t=[];return" "===e?(t.push(ee`&nbsp;`),t):(0===e.indexOf(" ")&&t.push(ee`&nbsp;`),t.push(ee`${e.trimStart().trimEnd()}`),e.lastIndexOf(" ")===e.length-1&&t.push(ee`&nbsp;`),t)};class rn{constructor(e){this._activeIndex=-1,this._options=[],this._filterPattern="",this._filterMethod="fuzzy",this._combobox=!1,this._indexByValue=new Map,this._indexByLabel=new Map,this._selectedIndex=-1,this._selectedIndexes=new Set,this._multiSelect=!1,this._numOfVisibleOptions=0,(this._host=e).addController(this)}hostConnected(){}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this._host.requestUpdate()}get relativeActiveIndex(){return this._options[this._activeIndex]?.filteredIndex??-1}set comboboxMode(e){this._combobox=e,this._host.requestUpdate()}get comboboxMode(){return this._combobox}get multiSelect(){return this._multiSelect}set multiSelect(e){this._selectedIndex=-1,this._selectedIndexes.clear(),this._multiSelect=e,this._host.requestUpdate()}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){-1!==this._selectedIndex&&this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected??=!1);const t=this.getOptionByIndex(e);this._selectedIndex=t?e:-1,this._host.requestUpdate()}get selectedIndexes(){return Array.from(this._selectedIndexes)}set selectedIndexes(e){this._selectedIndexes.forEach(e=>{this._options[e].selected=!1}),this._selectedIndexes=new Set(e),e.forEach(e=>{void 0!==this._options[e]&&(this._options[e].selected=!0)}),this._host.requestUpdate()}set value(e){if(this._multiSelect){const t=e.map(e=>this._indexByValue.get(e)).filter(e=>void 0!==e);this._selectedIndexes=new Set(t)}else this._selectedIndex=this._indexByValue.get(e)??-1;this._host.requestUpdate()}get value(){return this._multiSelect?this._selectedIndexes.size>0?Array.from(this._selectedIndexes).filter(e=>e>=0&&e<this._options.length).map(e=>this._options[e].value):[]:this._selectedIndex>-1&&this._selectedIndex<this._options.length?this._options[this._selectedIndex].value:""}set multiSelectValue(e){const t=e.map(e=>this._indexByValue.get(e)).filter(e=>void 0!==e);this._selectedIndexes=new Set(t)}get multiSelectValue(){return this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]}get filterPattern(){return this._filterPattern}set filterPattern(e){e!==this._filterPattern&&(this._filterPattern=e,this._updateState())}get filterMethod(){return this._filterMethod}set filterMethod(e){e!==this._filterMethod&&(this._filterMethod=e,this._updateState())}get options(){return this._options}get numOfVisibleOptions(){return this._numOfVisibleOptions}get numOptions(){return this._options.length}populate(e){this._indexByValue.clear(),this._indexByLabel.clear(),this._options=e.map((e,t)=>(this._indexByValue.set(e.value??"",t),this._indexByLabel.set(e.label??"",t),{description:e.description??"",disabled:e.disabled??!1,label:e.label??"",selected:e.selected??!1,value:e.value??"",index:t,filteredIndex:t,ranges:[],visible:!0})),this._numOfVisibleOptions=this._options.length}add(e){const t=this._options.length,{description:n,disabled:o,label:i,selected:r,value:s}=e;let a=!0,l=[];if(this._combobox&&""!==this._filterPattern){const e=this._searchByPattern(i??"");a=e.match,l=e.ranges}this._indexByValue.set(s??"",t),this._indexByLabel.set(i??"",t),r&&(this._selectedIndex=t,this._selectedIndexes.add(t),this._activeIndex=t),this._options.push({index:t,filteredIndex:t,description:n??"",disabled:o??!1,label:i??"",selected:r??!1,value:s??"",visible:a,ranges:l}),a&&(this._numOfVisibleOptions+=1)}clear(){this._options=[],this._indexByValue.clear(),this._indexByLabel.clear(),this._numOfVisibleOptions=0,this._selectedIndex=-1,this._selectedIndexes.clear(),this._activeIndex=-1}getIsIndexSelected(e){return this._multiSelect?this._selectedIndexes.has(e):this._selectedIndex===e}expandMultiSelection(e){e.forEach(e=>{const t=this._indexByValue.get(e)??-1;-1!==t&&this._selectedIndexes.add(t)}),this._host.requestUpdate()}toggleActiveMultiselectOption(){const e=this._options[this._activeIndex]??null;e&&(this._selectedIndexes.has(e.index)?this._selectedIndexes.delete(e.index):this._selectedIndexes.add(e.index),this._host.requestUpdate())}toggleOptionSelected(e){const t=this._selectedIndexes.has(e);this._options[e].selected=!this._options[e].selected,t?this._selectedIndexes.delete(e):this._selectedIndexes.add(e),this._host.requestUpdate()}getActiveOption(){return this._options[this._activeIndex]??null}getSelectedOption(){return this._options[this._selectedIndex]??null}getOptionByIndex(e){return this._options[e]??null}findOptionIndex(e){return this._indexByValue.get(e)??-1}getOptionByValue(e,t=!1){const n=this._indexByValue.get(e)??-1;return-1===n?null:t||this._options[n].visible?this._options[n]:null}getOptionByLabel(e){const t=this._indexByLabel.get(e)??-1;return-1===t?null:this._options[t]}next(e){let t=-1;for(let n=(e??this._activeIndex)+1;n<this._options.length;n++)if(this._options[n]&&!this._options[n].disabled&&this._options[n].visible){t=n;break}return t>-1?this._options[t]:null}prev(e){let t=-1;for(let n=(e??this._activeIndex)-1;n>=0;n--)if(this._options[n]&&!this._options[n].disabled&&this._options[n].visible){t=n;break}return t>-1?this._options[t]:null}activateDefault(){if(this._multiSelect){if(this._selectedIndexes.size>0){const e=this._selectedIndexes.values().next();this._activeIndex=e.value?e.value:0}}else this._selectedIndex>-1?this._activeIndex=this._selectedIndex:this._activeIndex=0;this._host.requestUpdate()}selectAll(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!0,this._selectedIndexes.add(t)}),this._host.requestUpdate())}selectNone(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!1}),this._selectedIndexes.clear(),this._host.requestUpdate())}_searchByPattern(e){let t;switch(this._filterMethod){case"startsWithPerTerm":t=Jt(e,this._filterPattern);break;case"startsWith":t=en(e,this._filterPattern);break;case"contains":t=tn(e,this._filterPattern);break;default:t=nn(e,this._filterPattern)}return t}_updateState(){if(this._combobox&&""!==this._filterPattern){let e=-1;this._numOfVisibleOptions=0,this._options.forEach(({label:t},n)=>{const o=this._searchByPattern(t);this._options[n].visible=o.match,this._options[n].ranges=o.ranges,this._options[n].filteredIndex=o.match?++e:-1,o.match&&(this._numOfVisibleOptions+=1)})}else this._options.forEach((e,t)=>{this._options[t].visible=!0,this._options[t].ranges=[]}),this._numOfVisibleOptions=this._options.length;this._host.requestUpdate()}}const sn=[Te,v`
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
  `];var an=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ln=class extends Le{set scrollPos(e){this._scrollPos=this._limitScrollPos(e),this._updateScrollbar(),this._updateThumbPosition(),this.requestUpdate()}get scrollPos(){return this._scrollPos}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight-this._scrollableContainer.clientHeight:0}constructor(){super(),this.alwaysVisible=!1,this.fastScrollSensitivity=5,this.minThumbSize=20,this.mouseWheelScrollSensitivity=1,this.shadow=!0,this.scrolled=!1,this._scrollPos=0,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._componentHeight=0,this._contentHeight=0,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._componentHeight=this.offsetHeight,this._contentHeight=this._contentElement.offsetHeight,this._updateScrollbar(),this._updateThumbPosition()},this._handleSlotChange=()=>{this._updateScrollbar(),this._updateThumbPosition(),this._zIndexFix()},this._handleScrollThumbMouseMove=e=>{const t=this._scrollThumbStartY+(e.screenY-this._mouseStartY);this._thumbY=this._limitThumbPos(t),this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollThumbMouseUp=e=>{this._isDragging=!1,this._thumbActive=!1;const t=this.getBoundingClientRect(),{x:n,y:o,width:i,height:r}=t,{pageX:s,pageY:a}=e;(s>n+i||s<n||a>o+r||a<o)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._handleScrollThumbMouseMove),document.removeEventListener("mouseup",this._handleScrollThumbMouseUp)},this._handleComponentMouseOver=()=>{this._thumbVisible=!0,this._thumbFade=!1},this._handleComponentMouseOut=()=>{this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)},this._handleComponentWheel=e=>{if(this._contentHeight<=this._componentHeight)return;e.preventDefault();const t=e.altKey?this.mouseWheelScrollSensitivity*this.fastScrollSensitivity:this.mouseWheelScrollSensitivity;this.scrollPos=this._limitScrollPos(this.scrollPos+e.deltaY*t),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollableContainerScroll=e=>{e.currentTarget&&(this.scrollPos=e.currentTarget.scrollTop)},this.addEventListener("mouseover",this._handleComponentMouseOver),this.addEventListener("mouseout",this._handleComponentMouseOut),this.addEventListener("wheel",this._handleComponentWheel)}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement),this._updateThumbPosition()})}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect()}firstUpdated(e){this._updateThumbPosition()}_calcThumbHeight(){const e=this.offsetHeight,t=e*(e/(this._contentElement?.offsetHeight??0));return Math.max(this.minThumbSize,t)}_updateScrollbar(){const e=this._contentElement?.offsetHeight??0;this.offsetHeight>=e?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=this._calcThumbHeight()),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach(t=>{if("style"in t){const n=window.getComputedStyle(t).zIndex;/([0-9-])+/g.test(n)&&(e=Number(n)>e?Number(n):e)}}),this._scrollbarTrackZ=e+1,this.requestUpdate()}_updateThumbPosition(){if(!this._scrollableContainer)return;this.scrolled=this.scrollPos>0;const e=this.offsetHeight,t=this._thumbHeight,n=this._contentElement.offsetHeight-e,o=this.scrollPos/n,i=e-t;this._thumbY=Math.min(o*(e-t),i)}_calculateScrollPosFromThumbPos(e){const t=this.getBoundingClientRect().height,n=e/(t-this._scrollThumbElement.getBoundingClientRect().height)*(this._contentElement.getBoundingClientRect().height-t);return this._limitScrollPos(n)}_limitScrollPos(e){return e<0?0:e>this.scrollMax?this.scrollMax:e}_limitThumbPos(e){const t=this.getBoundingClientRect().height,n=this._scrollThumbElement.getBoundingClientRect().height;return e<0?0:e>t-n?t-n:e}_handleScrollThumbMouseDown(e){const t=this.getBoundingClientRect(),n=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=n.top-t.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._handleScrollThumbMouseMove),document.addEventListener("mouseup",this._handleScrollThumbMouseUp)}_handleScrollbarTrackPress(e){e.target===e.currentTarget&&(this._thumbY=e.offsetY-this._thumbHeight/2,this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY))}render(){return ee`
      <div
        class="scrollable-container"
        .style=${We({userSelect:this._isDragging?"none":"auto"})}
        .scrollTop=${this.scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${je({shadow:!0,visible:this.scrolled})}
          .style=${We({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?ee`<div class="prevent-interaction"></div>`:oe}
        <div
          class=${je({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${je({"scrollbar-thumb":!0,visible:!!this.alwaysVisible||this._thumbVisible,fade:!this.alwaysVisible&&this._thumbFade,active:this._thumbActive})}
            .style=${We({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};ln.styles=sn,an([Ce({type:Boolean,reflect:!0,attribute:"always-visible"})],ln.prototype,"alwaysVisible",void 0),an([Ce({type:Number,attribute:"fast-scroll-sensitivity"})],ln.prototype,"fastScrollSensitivity",void 0),an([Ce({type:Number,attribute:"min-thumb-size"})],ln.prototype,"minThumbSize",void 0),an([Ce({type:Number,attribute:"mouse-wheel-scroll-sensitivity"})],ln.prototype,"mouseWheelScrollSensitivity",void 0),an([Ce({type:Boolean,reflect:!0})],ln.prototype,"shadow",void 0),an([Ce({type:Boolean,reflect:!0})],ln.prototype,"scrolled",void 0),an([Ce({type:Number,attribute:"scroll-pos"})],ln.prototype,"scrollPos",null),an([Ee()],ln.prototype,"_isDragging",void 0),an([Ee()],ln.prototype,"_thumbHeight",void 0),an([Ee()],ln.prototype,"_thumbY",void 0),an([Ee()],ln.prototype,"_thumbVisible",void 0),an([Ee()],ln.prototype,"_thumbFade",void 0),an([Ee()],ln.prototype,"_thumbActive",void 0),an([Ie(".content")],ln.prototype,"_contentElement",void 0),an([Ie(".scrollbar-thumb",!0)],ln.prototype,"_scrollThumbElement",void 0),an([Ie(".scrollable-container")],ln.prototype,"_scrollableContainer",void 0),an([Oe()],ln.prototype,"_assignedElements",void 0),ln=an([Ne("vscode-scrollable")],ln);var cn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const dn=22;class un extends Le{set combobox(e){this._opts.comboboxMode=e}get combobox(){return this._opts.comboboxMode}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",!0===e?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){let t;["contains","fuzzy","startsWith","startsWithPerTerm"].includes(e)?t=e:(this.warn(`Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`),t="fuzzy"),this._opts.filterMethod=t}get filter(){return this._opts.filterMethod}set options(e){this._opts.populate(e)}get options(){return this._opts.options.map(({label:e,value:t,description:n,selected:o,disabled:i})=>({label:e,value:t,description:n,selected:o,disabled:i}))}constructor(){super(),this.creatable=!1,this.label="",this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this._prevXPos=0,this._prevYPos=0,this._opts=new rn(this),this._firstUpdateCompleted=!1,this._currentDescription="",this._filter="fuzzy",this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._optionListScrollPos=0,this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onOptionListScroll=e=>{this._optionListScrollPos=e.detail},this._onComponentKeyDown=e=>{[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),"Enter"===e.key&&this._onEnterKeyDown(e)," "===e.key&&this._onSpaceKeyDown(),"Escape"===e.key&&this._onEscapeKeyDown(),"ArrowUp"===e.key&&this._onArrowUpKeyDown(),"ArrowDown"===e.key&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this._handleWindowScroll=()=>{const{x:e,y:t}=this.getBoundingClientRect();e===this._prevXPos&&t===this._prevYPos||(this.open=!1)},this.addEventListener("vsc-option-state-change",e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur),this._setAutoFocus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(e){this._firstUpdateCompleted=!0}willUpdate(e){if(e.has("required")&&this._firstUpdateCompleted&&this._manageRequired(),e.has("open")&&this._firstUpdateCompleted)if(this.open){this._dropdownEl.showPopover();const{x:e,y:t}=this.getBoundingClientRect();this._prevXPos=e,this._prevYPos=t,window.addEventListener("scroll",this._handleWindowScroll,{capture:!0}),this._opts.activateDefault(),this._scrollActiveElementToTop()}else this._dropdownEl.hidePopover(),window.removeEventListener("scroll",this._handleWindowScroll)}get _filteredOptions(){return this.combobox&&""!==this._opts.filterPattern?((e,t,n)=>{const o=[];return e.forEach(e=>{let i;switch(n){case"startsWithPerTerm":i=Jt(e.label,t);break;case"startsWith":i=en(e.label,t);break;case"contains":i=tn(e.label,t);break;default:i=nn(e.label,t)}i.match&&o.push({...e,ranges:i.ranges})}),o})(this._options,this._opts.filterPattern,this._filter):this._options}_setAutoFocus(){this.hasAttribute("autofocus")&&(this.tabIndex<0&&(this.tabIndex=0),this.combobox?this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".combobox-input").focus()}):this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".select-face").focus()}))}get _isSuggestedOptionVisible(){if(!this.combobox||!this.creatable)return!1;const e=null!==this._opts.getOptionByValue(this._opts.filterPattern),t=this._opts.filterPattern.length>0;return!e&&t}_manageRequired(){}_setStateFromSlottedElements(){const e=this._assignedOptions??[];this._opts.clear(),e.forEach(e=>{const{innerText:t,description:n,disabled:o}=e,i="string"==typeof e.value?e.value:t.trim(),r=e.selected??!1,s={label:t.trim(),value:i,description:n,selected:r,disabled:o};this._opts.add(s)})}_createSuggestedOption(){const e=this._opts.numOptions,t=document.createElement("vscode-option");return t.value=this._opts.filterPattern,ye(this._opts.filterPattern,t),this.appendChild(t),e}_dispatchChangeEvent(){this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_toggleComboboxDropdown(){this._opts.filterPattern="",this.open=!this.open}_scrollActiveElementToTop(){this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*dn)}async _adjustOptionListScrollPos(e,t){let n=this._opts.numOfVisibleOptions;if(this._isSuggestedOptionVisible&&(n+=1),n<=10)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const o=this._optionListScrollPos,i=t*dn,r=i>=o&&i<=o+220-dn;"down"===e&&(r||(this._optionListScrollPos=t*dn-198)),"up"===e&&(r||(this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*dn)))}_onFaceClick(){this.open=!this.open}_handleDropdownToggle(e){this.open="open"===e.newState}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){"Enter"===e.key&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const t=e.target;t.matches(".option")&&(t.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._opts.activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._opts.activeIndex=+t.dataset.index))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(e){e.stopPropagation()}_onEnterKeyDown(e){this._isBeingFiltered=!1,e?.composedPath&&e.composedPath().find(e=>!!e.matches&&e.matches("vscode-button.button-accept"))}_onSpaceKeyDown(){this.open||(this.open=!0)}_onArrowUpKeyDown(){if(this.open){if(this._opts.activeIndex<=0&&(!this.combobox||!this.creatable))return;if(this._isPlaceholderOptionActive){const e=this._opts.numOfVisibleOptions-1;this._opts.activeIndex=e,this._isPlaceholderOptionActive=!1}else{const e=this._opts.prev();if(null!==e){this._opts.activeIndex=e?.index??-1;const t=e?.filteredIndex??-1;t>-1&&this._adjustOptionListScrollPos("up",t)}}}else this.open=!0,this._opts.activateDefault()}_onArrowDownKeyDown(){let e=this._opts.numOfVisibleOptions;const t=this._isSuggestedOptionVisible;if(t&&(e+=1),this.open){if(this._isPlaceholderOptionActive&&-1===this._opts.activeIndex)return;const n=this._opts.next();if(t&&null===n)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",e-1),this._opts.activeIndex=-1;else if(null!==n){const e=n?.filteredIndex??-1;this._opts.activeIndex=n?.index??-1,e>-1&&this._adjustOptionListScrollPos("down",e)}}else this.open=!0,this._opts.activateDefault()}_onEscapeKeyDown(){this.open=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select(),this._isBeingFiltered=!1,this._opts.filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(e){this._isBeingFiltered=!0,this._opts.filterPattern=e.target.value,this._opts.activeIndex=-1,this.open=!0}_onComboboxInputClick(){this._isBeingFiltered=""!==this._opts.filterPattern,this.open=!0}_onComboboxInputSpaceKeyDown(e){" "===e.key&&e.stopPropagation()}_onOptionClick(e){this._isBeingFiltered=!1}_renderCheckbox(e,t){return ee`<span class=${je({"checkbox-icon":!0,checked:e})}>${Ft}</span
      ><span class="option-label">${t}</span>`}_renderOptions(){const e=this._opts.options;return ee`
      <ul
        aria-label=${qe(this.label??void 0)}
        aria-multiselectable=${qe(this._opts.multiSelect?"true":void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${Qt(e,e=>e.index,(e,t)=>{if(!e.visible)return oe;const n=e.index===this._opts.activeIndex&&!e.disabled,o=this._opts.getIsIndexSelected(e.index),i={active:n,disabled:e.disabled,option:!0,"single-select":!this._opts.multiSelect,"multi-select":this._opts.multiSelect,selected:o},r=e.ranges?.length?((e,t)=>{const n=[],o=t.length;return o<1?ee`${e}`:(t.forEach((i,r)=>{const s=e.substring(i[0],i[1]);0===r&&0!==i[0]&&n.push(...on(e.substring(0,t[0][0]))),r>0&&r<o&&i[0]-t[r-1][1]!==0&&n.push(...on(e.substring(t[r-1][1],i[0]))),n.push(ee`<b>${on(s)}</b>`),r===o-1&&i[1]<e.length&&n.push(...on(e.substring(i[1],e.length)))}),n)})(e.label,e.ranges??[]):e.label;return ee`
              <li
                aria-selected=${o?"true":"false"}
                class=${je(i)}
                data-index=${e.index}
                data-filtered-index=${t}
                id=${`op-${e.index}`}
                role="option"
                tabindex="-1"
              >
                ${function(e,t){return e?t():r}(this._opts.multiSelect,()=>this._renderCheckbox(o,r))}
              </li>
            `})}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions<1)}
      </ul>
    `}_renderPlaceholderOption(e){return this.combobox?this._opts.getOptionByLabel(this._opts.filterPattern)?oe:this.creatable&&this._opts.filterPattern.length>0?ee`<li
        class=${je({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`:e?ee`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:oe:oe}_renderDescription(){const e=this._opts.getActiveOption();if(!e)return oe;const{description:t}=e;return t?ee`<div class="description">${t}</div>`:oe}_renderSelectFace(){return ee`${oe}`}_renderComboboxFace(){return ee`${oe}`}_renderDropdownControls(){return ee`${oe}`}_renderDropdown(){const e={dropdown:!0,multiple:this._opts.multiSelect,open:this.open},t=this._isSuggestedOptionVisible||0===this._opts.numOfVisibleOptions?this._opts.numOfVisibleOptions+1:this._opts.numOfVisibleOptions,n=Math.min(t*dn,220),o=this.getBoundingClientRect(),i={width:`${o.width}px`,left:`${o.left}px`,top:"below"===this.position?`${o.top+o.height}px`:"unset",bottom:"below"===this.position?"unset":document.documentElement.clientHeight-o.top+"px"};return ee`
      <div
        class=${je(e)}
        popover="auto"
        @toggle=${this._handleDropdownToggle}
        .style=${We(i)}
      >
        ${"above"===this.position?this._renderDescription():oe}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${We({height:`${n}px`})}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${"below"===this.position?this._renderDescription():oe}
      </div>
    `}}cn([Ce({type:Boolean,reflect:!0})],un.prototype,"creatable",void 0),cn([Ce({type:Boolean,reflect:!0})],un.prototype,"combobox",null),cn([Ce({reflect:!0})],un.prototype,"label",void 0),cn([Ce({type:Boolean,reflect:!0})],un.prototype,"disabled",null),cn([Ce({type:Boolean,reflect:!0})],un.prototype,"invalid",void 0),cn([Ce()],un.prototype,"filter",null),cn([Ce({type:Boolean,reflect:!0})],un.prototype,"focused",void 0),cn([Ce({type:Boolean,reflect:!0})],un.prototype,"open",void 0),cn([Ce({type:Array})],un.prototype,"options",null),cn([Ce({reflect:!0})],un.prototype,"position",void 0),cn([Oe({flatten:!0,selector:"vscode-option"})],un.prototype,"_assignedOptions",void 0),cn([Ie(".dropdown",!0)],un.prototype,"_dropdownEl",void 0),cn([Ee()],un.prototype,"_currentDescription",void 0),cn([Ee()],un.prototype,"_filter",void 0),cn([Ee()],un.prototype,"_filteredOptions",null),cn([Ee()],un.prototype,"_selectedIndexes",void 0),cn([Ee()],un.prototype,"_options",void 0),cn([Ee()],un.prototype,"_value",void 0),cn([Ee()],un.prototype,"_values",void 0),cn([Ee()],un.prototype,"_isPlaceholderOptionActive",void 0),cn([Ee()],un.prototype,"_isBeingFiltered",void 0),cn([Ee()],un.prototype,"_optionListScrollPos",void 0);const hn=[Te,v`
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
  `],pn=hn;var fn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let vn=class extends un{set selectedIndexes(e){this._opts.selectedIndexes=e}get selectedIndexes(){return this._opts.selectedIndexes}set value(e){this._opts.multiSelectValue=e,this._opts.selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._opts.multiSelectValue}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}selectAll(){this._opts.selectAll()}selectNone(){this._opts.selectNone()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=e=>{const t=e.composedPath().find(e=>"matches"in e&&e.matches("li.option"));if(!t)return;if(t.classList.contains("placeholder"))return void this._createAndSelectSuggestedOption();const n=Number(t.dataset.index);this._opts.toggleOptionSelected(n),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._opts.multiSelect=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(e,t){const n=Array.from(e.entries()).map(e=>String(e[1]));this.updateComplete.then(()=>{this.value=n})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map(e=>String(e));this.value=e}}_dispatchChangeEvent(){super._dispatchChangeEvent()}_onFaceClick(){super._onFaceClick(),this._opts.activeIndex=0}_toggleComboboxDropdown(){super._toggleComboboxDropdown(),this._opts.activeIndex=-1}_manageRequired(){const{value:e}=this;0===e.length&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach(t=>{e.append(this.name??"",t)}),this._internals.setFormValue(e)}async _createAndSelectSuggestedOption(){super._createAndSelectSuggestedOption();const e=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,e],this._dispatchChangeEvent();const t=new CustomEvent("vsc-multi-select-create-option",{detail:{value:this._opts.getOptionByIndex(e)?.value??""}});this.dispatchEvent(t),this.open=!1,this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&(this._opts.expandMultiSelection(this._requestedValueToSetLater),this._requestedValueToSetLater=this._requestedValueToSetLater.filter(e=>-1===this._opts.findOptionIndex(e)))}_onEnterKeyDown(e){super._onEnterKeyDown(e),this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(this._opts.toggleActiveMultiselectOption(),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()):(this._opts.filterPattern="",this.open=!0)}_onMultiAcceptClick(){this.open=!1}_onMultiDeselectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!0})),this._options.forEach((e,t)=>{this._selectedIndexes.push(t),this._values.push(e.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_onComboboxInputBlur(){super._onComboboxInputBlur(),this._opts.filterPattern=""}_renderLabel(){return 0===this._opts.selectedIndexes.length?ee`<span class="select-face-badge no-item">0 Selected</span>`:ee`<span class="select-face-badge"
          >${this._opts.selectedIndexes.length} Selected</span
        >`}_renderComboboxFace(){const e=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",t=this.open?"true":"false";return ee`
      <div class="combobox-face face">
        ${this._opts.multiSelect?this._renderLabel():oe}
        <input
          aria-activedescendant=${e}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${t}
          aria-haspopup="listbox"
          aria-label=${qe(this.label)}
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
          ${Vt}
        </button>
      </div>
    `}_renderSelectFace(){const e=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",t=this.open?"true":"false";return ee`
      <div
        aria-activedescendant=${qe(this._opts.multiSelect?void 0:e)}
        aria-controls="select-listbox"
        aria-expanded=${qe(this._opts.multiSelect?void 0:t)}
        aria-haspopup="listbox"
        aria-label=${qe(this.label??void 0)}
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        .tabIndex=${this.disabled?-1:0}
      >
        ${this._renderLabel()} ${Vt}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?ee`
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
        `:ee`${oe}`}render(){return ee`
      <div class="multi-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};vn.styles=pn,vn.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0},vn.formAssociated=!0,fn([Ce({type:Array,attribute:"default-value"})],vn.prototype,"defaultValue",void 0),fn([Ce({type:Boolean,reflect:!0})],vn.prototype,"required",void 0),fn([Ce({reflect:!0})],vn.prototype,"name",void 0),fn([Ce({type:Array,attribute:!1})],vn.prototype,"selectedIndexes",null),fn([Ce({type:Array})],vn.prototype,"value",null),fn([Ie(".face")],vn.prototype,"_faceElement",void 0),vn=fn([Ne("vscode-multi-select")],vn),l({tagName:"vscode-multi-select",elementClass:vn,react:o,displayName:"VscodeMultiSelect",events:{onChange:"change",onInvalid:"invalid",onVscMultiSelectCreateOption:"vsc-multi-select-create-option"}});const gn=l({tagName:"vscode-option",elementClass:Zt,react:o,displayName:"VscodeOption"}),mn=[Te,v`
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
  `];var bn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let yn=class extends Le{constructor(){super(...arguments),this.ariaLabel="Loading",this.max=100,this.indeterminate=!1,this.longRunningThreshold=15e3,this._longRunning=!1}get _isDeterminate(){return!this.indeterminate&&"number"==typeof this.value&&isFinite(this.value)}connectedCallback(){super.connectedCallback(),this._maybeStartLongRunningTimer()}disconnectedCallback(){super.disconnectedCallback(),this._clearLongRunningTimer()}willUpdate(){this._maybeStartLongRunningTimer()}render(){const e=this.max>0?this.max:100,t=this._isDeterminate?Math.min(Math.max(this.value??0,0),e):0,n=this._isDeterminate?t/e*100:0,o={container:!0,discrete:this._isDeterminate,infinite:!this._isDeterminate,"infinite-long-running":this._longRunning&&!this._isDeterminate};return ee`
      <div
        class=${je(o)}
        part="container"
        role="progressbar"
        aria-label=${this.ariaLabel}
        aria-valuemin="0"
        aria-valuemax=${String(e)}
        aria-valuenow=${qe(this._isDeterminate?String(Math.round(t)):void 0)}
      >
        <div class="track" part="track"></div>
        <div
          class="indicator"
          part="indicator"
          .style=${We({width:this._isDeterminate?`${n}%`:void 0})}
        ></div>
      </div>
    `}_maybeStartLongRunningTimer(){if(!(!this._isDeterminate&&this.longRunningThreshold>0&&this.isConnected))return this._clearLongRunningTimer(),void(this._longRunning=!1);this._longRunningHandle||(this._longRunningHandle=setTimeout(()=>{this._longRunning=!0,this._longRunningHandle=void 0,this.requestUpdate()},this.longRunningThreshold))}_clearLongRunningTimer(){this._longRunningHandle&&(clearTimeout(this._longRunningHandle),this._longRunningHandle=void 0)}};yn.styles=mn,bn([Ce({reflect:!0,attribute:"aria-label"})],yn.prototype,"ariaLabel",void 0),bn([Ce({type:Number,reflect:!0})],yn.prototype,"value",void 0),bn([Ce({type:Number,reflect:!0})],yn.prototype,"max",void 0),bn([Ce({type:Boolean,reflect:!0})],yn.prototype,"indeterminate",void 0),bn([Ce({type:Number,attribute:"long-running-threshold"})],yn.prototype,"longRunningThreshold",void 0),bn([Ee()],yn.prototype,"_longRunning",void 0),yn=bn([Ne("vscode-progress-bar")],yn),l({tagName:"vscode-progress-bar",elementClass:yn,react:o,displayName:"VscodeProgressBar"});const _n=[Te,v`
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
  `];var xn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let wn=class extends Le{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return ee`<svg class="progress" part="progress" viewBox="0 0 16 16">
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
    </svg>`}};wn.styles=_n,xn([Ce({reflect:!0,attribute:"aria-label"})],wn.prototype,"ariaLabel",void 0),xn([Ce({reflect:!0,attribute:"aria-live"})],wn.prototype,"ariaLive",void 0),xn([Ce({reflect:!0})],wn.prototype,"role",void 0),wn=xn([Ne("vscode-progress-ring")],wn),l({tagName:"vscode-progress-ring",elementClass:wn,react:o,displayName:"VscodeProgressRing"});const kn=[Te,rt,v`
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
  `];var Sn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Cn=class extends(it(ot)){get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.type="radio",this.value="",this.disabled=!1,this.required=!1,this.tabIndex=0,this._slottedText="",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault()," "!==e.key||this.checked||(this.checked=!0,this._handleValueChange(),this.dispatchEvent(new Event("change",{bubbles:!0}))),"Enter"===e.key&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick)}connectedCallback(){super.connectedCallback(),this._handleValueChange()}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(e=>{e.checked=e.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(e,t){this.value===e&&""!==e&&(this.checked=!0)}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_getRadios(){const e=this.getRootNode({composed:!1});if(!e)return[];const t=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(t)}_uncheckOthers(e){e.forEach(e=>{e!==this&&(e.checked=!1)})}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach(e=>{e!==this&&(e.checked=!1)})}_setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(e=>{e.setComponentValidity(t)})})}_setActualFormValue(){let e="";e=this.checked?this.value?this.value:"on":null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),t=e.some(e=>e.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const n=!!e.find(e=>e.checked),o=t&&!n;this._setGroupValidity(e,!o)}}render(){const e=je({icon:!0,checked:this.checked}),t=je({"label-inner":!0,"is-slot-empty":""===this._slottedText});return ee`
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
    `}};Cn.styles=kn,Cn.formAssociated=!0,Cn.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0},Sn([Ce({type:Boolean,reflect:!0})],Cn.prototype,"autofocus",void 0),Sn([Ce({type:Boolean,reflect:!0})],Cn.prototype,"checked",void 0),Sn([Ce({type:Boolean,reflect:!0,attribute:"default-checked"})],Cn.prototype,"defaultChecked",void 0),Sn([Ce({type:Boolean,reflect:!0})],Cn.prototype,"invalid",void 0),Sn([Ce({reflect:!0})],Cn.prototype,"name",void 0),Sn([Ce()],Cn.prototype,"type",void 0),Sn([Ce()],Cn.prototype,"value",void 0),Sn([Ce({type:Boolean,reflect:!0})],Cn.prototype,"disabled",void 0),Sn([Ce({type:Boolean,reflect:!0})],Cn.prototype,"required",void 0),Sn([Ce({type:Number,reflect:!0})],Cn.prototype,"tabIndex",void 0),Sn([Ee()],Cn.prototype,"_slottedText",void 0),Sn([Ie("#input")],Cn.prototype,"_inputEl",void 0),Cn=Sn([Ne("vscode-radio")],Cn),l({tagName:"vscode-radio",elementClass:Cn,react:o,displayName:"VscodeRadio",events:{onChange:"change",onInvalid:"invalid"}});const En=[Te,v`
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
  `];var Pn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let In=class extends Le{constructor(){super(),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._handleKeyDown=e=>{const{key:t}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(t)&&e.preventDefault(),"ArrowRight"!==t&&"ArrowDown"!==t||this._checkNext(),"ArrowLeft"!==t&&"ArrowUp"!==t||this._checkPrev()},this.addEventListener("keydown",this._handleKeyDown)}_uncheckPreviousChecked(e,t){-1!==e&&(this._radios[e].checked=!1),-1!==t&&(this._radios[t].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex(e=>e.checked),t=this._radios.findIndex(e=>e.focused),n=-1!==t?t:e;this._uncheckPreviousChecked(e,t),this._checkedRadio=-1===n?this._radios.length-1:n-1>=0?n-1:this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex(e=>e.checked),t=this._radios.findIndex(e=>e.focused),n=-1!==t?t:e;this._uncheckPreviousChecked(e,t),-1===n?this._checkedRadio=0:n+1<this._radios.length?this._checkedRadio=n+1:this._checkedRadio=0,this._afterCheck()}_handleChange(e){const t=this._radios.findIndex(t=>t===e.target);-1!==t&&(-1!==this._focusedRadio&&(this._radios[this._focusedRadio].tabIndex=-1),-1!==this._checkedRadio&&this._checkedRadio!==t&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=t,this._checkedRadio=t,this._radios[t].tabIndex=0)}_handleSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex(e=>e.autofocus);e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}let e=-1;this._radios.forEach((t,n)=>{this._focusedRadio>-1?t.tabIndex=n===this._focusedRadio?0:-1:t.tabIndex=0===n?0:-1,t.defaultChecked&&(e>-1&&(this._radios[e].defaultChecked=!1),e=n)}),e>-1&&(this._radios[e].checked=!0)}render(){return ee`
      <div class="wrapper">
        <slot
          @slotchange=${this._handleSlotChange}
          @change=${this._handleChange}
        ></slot>
      </div>
    `}};In.styles=En,Pn([Ce({reflect:!0})],In.prototype,"variant",void 0),Pn([Ce({reflect:!0})],In.prototype,"role",void 0),Pn([Oe({selector:"vscode-radio"})],In.prototype,"_radios",void 0),Pn([Ee()],In.prototype,"_focusedRadio",void 0),Pn([Ee()],In.prototype,"_checkedRadio",void 0),In=Pn([Ne("vscode-radio-group")],In),l({tagName:"vscode-radio-group",elementClass:In,react:o,displayName:"VscodeRadioGroup",events:{onChange:"change"}}),l({tagName:"vscode-scrollable",elementClass:ln,react:o,displayName:"VscodeScrollable"});const $n=hn;var On=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let An=class extends un{set selectedIndex(e){this._opts.selectedIndex=e;const t=this._opts.getOptionByIndex(e);t?(this._opts.activeIndex=e,this._value=t.value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._opts.selectedIndex}set value(e){this._opts.value=e,this._opts.selectedIndex>-1?this._requestedValueToSetLater="":this._requestedValueToSetLater=e,this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._opts.value}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");if(e){const t=this._opts.getSelectedOption();e.value=t?.label??""}}constructor(){super(),this.defaultValue="",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._opts.multiSelect=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){const e=this._createSuggestedOption();await this.updateComplete,this._opts.selectedIndex=e,this._dispatchChangeEvent();const t=new CustomEvent("vsc-single-select-create-option",{detail:{value:this._opts.getOptionByIndex(e)?.value??""}});this.dispatchEvent(t),this.open=!1,this._isPlaceholderOptionActive=!1}_setStateFromSlottedElements(){super._setStateFromSlottedElements(),this.combobox||0!==this._opts.selectedIndexes.length||(this._opts.selectedIndex=this._opts.options.length>0?0:-1)}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const e=this._opts.getOptionByValue(this._requestedValueToSetLater);e&&(this._opts.selectedIndex=e.index,this._requestedValueToSetLater="")}this._opts.selectedIndex>-1&&this._opts.numOptions>0?(this._internals.setFormValue(this._opts.value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onEnterKeyDown(e){super._onEnterKeyDown(e);let t=!1;this.combobox?this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()):this.open?(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()),t&&(this._dispatchChangeEvent(),this.updateInputValue(),this._internals.setFormValue(this._opts.value),this._manageRequired())}_onOptionClick(e){super._onOptionClick(e);const t=e.composedPath().find(e=>{if("matches"in e)return e.matches("li.option")});t&&!t.matches(".disabled")&&(t.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._opts.selectedIndex=Number(t.dataset.index),this.open=!1,this._internals.setFormValue(this._opts.value),this._manageRequired(),this._dispatchChangeEvent()))}_manageRequired(){const{value:e}=this;""===e&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const e=this._opts.getSelectedOption(),t=e?.label??"",n=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"";return ee`
      <div
        aria-activedescendant=${n}
        aria-controls="select-listbox"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="listbox"
        aria-label=${qe(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${t}</span> ${Vt}
      </div>
    `}_renderComboboxFace(){let e="";if(this._isBeingFiltered)e=this._opts.filterPattern;else{const t=this._opts.getSelectedOption();e=t?.label??""}const t=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",n=this.open?"true":"false";return ee`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${t}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${n}
          aria-haspopup="listbox"
          aria-label=${qe(this.label)}
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
          ${Vt}
        </button>
      </div>
    `}render(){return ee`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};An.styles=$n,An.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0},An.formAssociated=!0,On([Ce({attribute:"default-value"})],An.prototype,"defaultValue",void 0),On([Ce({reflect:!0})],An.prototype,"name",void 0),On([Ce({type:Number,attribute:"selected-index"})],An.prototype,"selectedIndex",null),On([Ce({type:String})],An.prototype,"value",null),On([Ce({type:Boolean,reflect:!0})],An.prototype,"required",void 0),On([Ie(".face")],An.prototype,"_face",void 0),An=On([Ne("vscode-single-select")],An);const Rn=l({tagName:"vscode-single-select",elementClass:An,react:o,displayName:"VscodeSingleSelect",events:{onChange:"change",onInvalid:"invalid",onVscSingleSelectCreateOption:"vsc-single-select-create-option"}}),zn=[Te,v`
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
  `];var Ln,Nn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const Tn=e=>{if(!e)return{value:0,unit:"pixel"};let t,n;return e.endsWith("%")?(t="percent",n=+e.substring(0,e.length-1)):e.endsWith("px")?(t="pixel",n=+e.substring(0,e.length-2)):(t="pixel",n=+e),{unit:t,value:isNaN(n)?0:n}},Dn=(e,t)=>0===t?0:Math.min(100,e/t*100),Bn=(e,t)=>t*(e/100);let Vn=Ln=class extends Le{set split(e){this._split!==e&&(this._split=e,this.resetHandlePosition())}get split(){return this._split}set handlePosition(e){this._rawHandlePosition=e,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(e){this._fixedPane=e,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}set minStart(e){const t=e??void 0;this._minStart!==t&&(this._minStart=t,this._applyMinSizeConstraints())}get minStart(){return this._minStart}set minEnd(e){const t=e??void 0;this._minEnd!==t&&(this._minEnd=t,this._applyMinSizeConstraints())}get minEnd(){return this._minEnd}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition="50%",this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=e=>{const t=e[0].contentRect,{width:n,height:o}=t;this._boundRect=t;const i="vertical"===this.split?n:o;"start"===this.fixedPane&&(this._handlePosition=this._fixedPaneSize),"end"===this.fixedPane&&(this._handlePosition=i-this._fixedPaneSize),this._handlePosition=this._clampHandlePosition(this._handlePosition,i),this._updateFixedPaneSize(i)},this._handleMouseUp=e=>{this._isDragActive=!1,e.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:t,height:n}=this._boundRect,o="vertical"===this.split?t:n,i=Dn(this._handlePosition,o);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:i},composed:!0}))},this._handleMouseMove=e=>{const{clientX:t,clientY:n}=e,{left:o,top:i,height:r,width:s}=this._boundRect,a="vertical"===this.split,l=a?s:r,c=(a?t-o:n-i)-this._handleOffset+this.handleSize/2;this._handlePosition=this._clampHandlePosition(c,l),this._updateFixedPaneSize(l)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl)return void(this._handlePosition=0);const{width:e,height:t}=this._wrapperEl.getBoundingClientRect(),n="vertical"===this.split?e:t,{value:o,unit:i}=Tn(this.initialHandlePosition??"50%"),r="percent"===i?Bn(o,n):o;this._handlePosition=this._clampHandlePosition(r,n),this._updateFixedPaneSize(n)}connectedCallback(){super.connectedCallback()}firstUpdated(e){"none"!==this.fixedPane&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:t,unit:n}=this.handlePosition?Tn(this.handlePosition):Tn(this.initialHandlePosition);this._setPosition(t,n),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:t}=Tn(this.handlePosition);this._setPosition(e,t)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if("none"===this.fixedPane)this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t;this._fixedPaneSize="start"===this.fixedPane?this._handlePosition:n-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_applyMinSizeConstraints(){if(!this._wrapperEl)return;this._boundRect=this._wrapperEl.getBoundingClientRect();const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t;this._handlePosition=this._clampHandlePosition(this._handlePosition,n),this._updateFixedPaneSize(n)}_resolveMinSizePx(e,t){if(!e)return 0;const{unit:n,value:o}=Tn(e),i="percent"===n?Bn(o,t):o;return isFinite(i)?Math.max(0,Math.min(i,t)):0}_clampHandlePosition(e,t){if(!isFinite(t)||t<=0)return 0;const n=this._resolveMinSizePx(this._minStart,t),o=this._resolveMinSizePx(this._minEnd,t),i=Math.min(n,t),r=Math.max(i,t-o),s=Math.max(i,Math.min(e,r));return Math.max(0,Math.min(s,t))}_updateFixedPaneSize(e){"start"===this.fixedPane?this._fixedPaneSize=this._handlePosition:"end"===this.fixedPane&&(this._fixedPaneSize=e-this._handlePosition)}_setPosition(e,t){const{width:n,height:o}=this._boundRect,i="vertical"===this.split?n:o,r="percent"===t?Bn(e,i):e;this._handlePosition=this._clampHandlePosition(r,i),this._updateFixedPaneSize(i)}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(e){1!==e.buttons&&(this._hover=!1,this._hide=!0)}_handleMouseDown(e){e.stopPropagation(),e.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:t,top:n}=this._boundRect,{left:o,top:i}=this._handleEl.getBoundingClientRect(),r=e.clientX-t,s=e.clientY-n;"vertical"===this.split&&(this._handleOffset=r-(o-t)),"horizontal"===this.split&&(this._handleOffset=s-(i-n)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(e=>{e instanceof Ln&&e.resetHandlePosition()})}render(){const{width:e,height:t}=this._boundRect,n="vertical"===this.split?e:t,o="none"!==this.fixedPane?`${this._handlePosition}px`:`${Dn(this._handlePosition,n)}%`;let i="";i="start"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${Dn(this._handlePosition,n)}%`;let r="";r="end"===this.fixedPane?`0 0 ${this._fixedPaneSize}px`:`1 1 ${Dn(n-this._handlePosition,n)}%`;const s={left:"vertical"===this.split?o:"0",top:"vertical"===this.split?"0":o},a=this.handleSize??4;"vertical"===this.split&&(s.marginLeft=0-a/2+"px",s.width=`${a}px`),"horizontal"===this.split&&(s.height=`${a}px`,s.marginTop=0-a/2+"px");const l=je({"handle-overlay":!0,active:this._isDragActive,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),c=je({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":"vertical"===this.split,"split-horizontal":"horizontal"===this.split}),d={wrapper:!0,horizontal:"horizontal"===this.split};return ee`
      <div class=${je(d)}>
        <div class="start" .style=${We({flex:i})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${We({flex:r})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${l}></div>
        <div
          class=${c}
          .style=${We(s)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};Vn.styles=zn,Nn([Ce({reflect:!0})],Vn.prototype,"split",null),Nn([Ce({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],Vn.prototype,"resetOnDblClick",void 0),Nn([Ce({type:Number,reflect:!0,attribute:"handle-size"})],Vn.prototype,"handleSize",void 0),Nn([Ce({reflect:!0,attribute:"initial-handle-position"})],Vn.prototype,"initialHandlePosition",void 0),Nn([Ce({attribute:"handle-position"})],Vn.prototype,"handlePosition",null),Nn([Ce({attribute:"fixed-pane"})],Vn.prototype,"fixedPane",null),Nn([Ce({attribute:"min-start"})],Vn.prototype,"minStart",null),Nn([Ce({attribute:"min-end"})],Vn.prototype,"minEnd",null),Nn([Ee()],Vn.prototype,"_handlePosition",void 0),Nn([Ee()],Vn.prototype,"_isDragActive",void 0),Nn([Ee()],Vn.prototype,"_hover",void 0),Nn([Ee()],Vn.prototype,"_hide",void 0),Nn([Ie(".wrapper")],Vn.prototype,"_wrapperEl",void 0),Nn([Ie(".handle")],Vn.prototype,"_handleEl",void 0),Nn([Oe({slot:"start",selector:"vscode-split-layout"})],Vn.prototype,"_nestedLayoutsAtStart",void 0),Nn([Oe({slot:"end",selector:"vscode-split-layout"})],Vn.prototype,"_nestedLayoutsAtEnd",void 0),Vn=Ln=Nn([Ne("vscode-split-layout")],Vn),l({tagName:"vscode-split-layout",elementClass:Vn,react:o,displayName:"VscodeSplitLayout",events:{onVscSplitLayoutChange:"vsc-split-layout-change"}});const Fn=[Te,v`
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
  `];var Mn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Hn=class extends Le{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),"active"===e){const e=null!==n;this.ariaSelected=e?"true":"false",this.tabIndex=e?0:-1}}render(){return ee`
      <div
        class=${je({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${je({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};Hn.styles=Fn,Mn([Ce({type:Boolean,reflect:!0})],Hn.prototype,"active",void 0),Mn([Ce({reflect:!0,attribute:"aria-controls"})],Hn.prototype,"ariaControls",void 0),Mn([Ce({type:Boolean,reflect:!0})],Hn.prototype,"panel",void 0),Mn([Ce({reflect:!0})],Hn.prototype,"role",void 0),Mn([Ce({type:Number,reflect:!0,attribute:"tab-id"})],Hn.prototype,"tabId",void 0),Hn=Mn([Ne("vscode-tab-header")],Hn);const Un=l({tagName:"vscode-tab-header",elementClass:Hn,react:o,displayName:"VscTabHeader"}),jn=e=>e,qn=[{test:e=>/^-?\d+(\.\d+)?%$/.test(e),parse:e=>Number(e.slice(0,-1))},{test:e=>/^-?\d+(\.\d+)?px$/.test(e),parse:(e,t)=>Number(e.slice(0,-2))/t*100},{test:e=>/^-?\d+(\.\d+)?$/.test(e),parse:(e,t)=>Number(e)/t*100}],Wn=(e,t)=>{if(!Number.isFinite(t)||0===t)return null;if("number"==typeof e)return Number.isFinite(e)?e/t*100:null;const n=e.trim(),o=qn.find(e=>e.test(n));return o?o.parse(n,t):null},Kn=[Te,v`
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
  `];class Gn{constructor(e){this._hostWidth=0,this._hostX=0,this._activeSplitter=null,this._columnMinWidths=new Map,this._columnWidths=[],this._dragState=null,this._cachedSplitterPositions=null,(this._host=e).addController(this)}hostConnected(){this.saveHostDimensions()}get isDragging(){return null!==this._dragState}get splitterPositions(){if(this._cachedSplitterPositions)return this._cachedSplitterPositions;const e=[];let t=0;for(let n=0;n<this._columnWidths.length-1;n++)t=jn(t+this._columnWidths[n]),e.push(t);return this._cachedSplitterPositions=e,e}getActiveSplitterCalculatedPosition(){const e=this.splitterPositions;if(!this._dragState)return 0;const t=e[this._dragState.splitterIndex];return this._toPx(t)}get columnWidths(){return this._columnWidths}get columnMinWidths(){return new Map(this._columnMinWidths)}saveHostDimensions(){const e=this._host.getBoundingClientRect(),{width:t,x:n}=e;return this._hostWidth=t,this._hostX=n,this}setActiveSplitter(e){return this._activeSplitter=e,this}getActiveSplitter(){return this._activeSplitter}setColumnMinWidthAt(e,t){return this._columnMinWidths.set(e,t),this._host.requestUpdate(),this}setColumWidths(e){return this._columnWidths=e,this._cachedSplitterPositions=null,this._host.requestUpdate(),this}shouldDrag(e){return+e.currentTarget.dataset.index===this._dragState?.splitterIndex}startDrag(e){if(e.stopPropagation(),this._dragState)return;this._activeSplitter?.setPointerCapture(e.pointerId);const t=e.pageX,n=e.currentTarget,o=t-n.getBoundingClientRect().x;this._dragState={dragOffset:o,pointerId:e.pointerId,splitterIndex:+n.dataset.index,prevX:t-o},this._host.requestUpdate()}drag(e){if(e.stopPropagation(),!e?.currentTarget?.hasPointerCapture?.(e.pointerId))return;if(!this._dragState)return;if(e.pointerId!==this._dragState.pointerId)return;if(!this.shouldDrag(e))return;const t=e.pageX,n=t-this._dragState.dragOffset,o=n-this._dragState.prevX,i=this._toPercent(o);this._dragState.prevX=n;const r=this.getActiveSplitterCalculatedPosition();o<=0&&t>r+this._hostX||o>0&&t<r+this._hostX||(this._columnWidths=function(e,t,n,o){const i=[...e];if(0===n||t<0||t>=e.length-1)return i;const r=Math.abs(n);let s=r;const a=[],l=[];for(let e=t;e>=0;e--)a.push(e);for(let n=t+1;n<e.length;n++)l.push(n);const c=n>0?l:a,d=n>0?a:l;let u=0;for(const e of c){const t=Math.max(0,i[e]-(o.get(e)??0));u=jn(u+t)}if(u<s)return i;for(const e of c){if(0===s)break;const t=Math.max(0,i[e]-(o.get(e)??0)),n=Math.min(t,s);i[e]=jn(i[e]-n),s=jn(s-n)}let h=r;for(const e of d){if(0===h)break;i[e]=jn(i[e]+h),h=jn(0)}return i}(this._columnWidths,this._dragState.splitterIndex,i,this._columnMinWidths),this._cachedSplitterPositions=null,this._host.requestUpdate())}stopDrag(e){if(e.stopPropagation(),!this._dragState)return;const t=e.currentTarget;try{t.releasePointerCapture(this._dragState.pointerId)}catch(e){}this._dragState=null,this._activeSplitter=null,this._host.requestUpdate()}_toPercent(e){return(e=>e/this._hostWidth*100)(e)}_toPx(e){return(e=>e/100*this._hostWidth)(e)}}var Qn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Yn=class extends Le{set columns(e){if(!Array.isArray(e))return this.warn('Invalid value for "columns": expected an array.'),void(this._columns=[]);this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}constructor(){super(),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._columnResizeController=new Gn(this),this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._handleSplitterPointerMove=e=>{this._columnResizeController.shouldDrag(e)&&(this._columnResizeController.drag(e),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0))},this._handleSplitterPointerUp=e=>{this._stopDrag(e)},this._handleSplitterPointerCancel=e=>{this._stopDrag(e)},this._handleMinColumnWidthChange=e=>{const{columnIndex:t,propertyValue:n}=e.detail,o=Wn(n,this._componentW);o&&this._columnResizeController.setColumnMinWidthAt(t,o)},this.addEventListener("vsc-table-change-min-column-width",this._handleMinColumnWidthChange)}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){super.disconnectedCallback(),this._componentResizeObserver?.unobserve(this),this._componentResizeObserver?.disconnect(),this._bodyResizeObserver?.disconnect()}willUpdate(e){if(e.has("minColumnWidth")){const e=Wn(this.minColumnWidth,this._componentW)??0,t=this._columnResizeController.columnMinWidths,n=this._columnResizeController.columnWidths;for(let o=0;o<n.length;o++)t.has(o)||this._columnResizeController.setColumnMinWidthAt(o,e)}}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let e=0,t=0;const n=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(t=this._assignedBodyElements[0].getBoundingClientRect().height);const o=t-e-n;this._scrollableElement.style.height=o>0?n-e+"px":"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calculateInitialColumnWidths(){const e=this._getHeaderCells().length;let t=this.columns.slice(0,e);const n=t.filter(e=>"auto"===e).length+e-t.length;let o=100;if(t=t.map(e=>{const t=Wn(e,this._componentW);return null===t?"auto":(o-=t,t)}),t.length<e)for(let n=t.length;n<e;n++)t.push("auto");return t=t.map(e=>"auto"===e?o/n:e),t}_initHeaderCellSizes(e){this._getHeaderCells().forEach((t,n)=>{t.style.width=`${e[n]}%`})}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach((t,n)=>{t.style.width=`${e[n]}%`})}_initSashes(e){const t=e.length;let n=0;this._sashPositions=[],e.forEach((e,o)=>{if(o<t-1){const t=n+e;this._sashPositions.push(t),n=t}})}_initDefaultColumnSizes(){const e=this._calculateInitialColumnWidths();this._columnResizeController.setColumWidths(e.map(e=>e)),this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const t=this._componentH-e.height;this._sashVisibleElements.forEach(n=>{n.style.height=`${t}px`,n.style.top=`${e.height}px`})}_applyCompactViewColumnLabels(){const e=this._getHeaderCells().map(e=>e.innerText);this.querySelectorAll("vscode-table-row").forEach(t=>{t.querySelectorAll("vscode-table-cell").forEach((t,n)=>{t.columnLabel=e[n],t.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(e=>{e.columnLabel="",e.compact=!1})}_toggleCompactView(){const e=this.getBoundingClientRect().width<this.breakpoint;this.compact!==e&&(this.compact=e,e?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_stopDrag(e){const t=this._columnResizeController.getActiveSplitter();t&&(t.removeEventListener("pointermove",this._handleSplitterPointerMove),t.removeEventListener("pointerup",this._handleSplitterPointerUp),t.removeEventListener("pointercancel",this._handleSplitterPointerCancel)),this._columnResizeController.stopDrag(e),this._resizeColumns(!0),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1}_onDefaultSlotChange(){this._assignedElements.forEach(e=>{"vscode-table-header"!==e.tagName.toLowerCase()?"vscode-table-body"!==e.tagName.toLowerCase()||(e.slot="body"):e.slot="header"})}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells(),[].fill(0,0,this._headerCells.length-1),this._headerCells.forEach((e,t)=>{if(e.index=t,e.minWidth){const n=Wn(e.minWidth,this._componentW)??0;this._columnResizeController.setColumnMinWidthAt(t,n)}})}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const t=e.currentTarget,n=Number(t.dataset.index);this._sashHovers[n]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const t=e.currentTarget,n=Number(t.dataset.index);this._sashHovers[n]=!1,this.requestUpdate()}_resizeColumns(e=!0){const t=this._columnResizeController.columnWidths;this._getHeaderCells().forEach((e,n)=>e.style.width=`${t[n]}%`),e&&this._getCellsOfFirstRow().forEach((e,n)=>e.style.width=`${t[n]}%`)}_handleSplitterPointerDown(e){e.stopPropagation();const t=e.currentTarget;this._columnResizeController.saveHostDimensions().setActiveSplitter(t).startDrag(e),t.addEventListener("pointermove",this._handleSplitterPointerMove),t.addEventListener("pointerup",this._handleSplitterPointerUp),t.addEventListener("pointercancel",this._handleSplitterPointerCancel)}render(){const e=this._columnResizeController.splitterPositions.map((e,t)=>{const n=je({sash:!0,hover:this._sashHovers[t],resizable:this.resizable}),o=`${e}%`;return this.resizable?ee`
            <div
              class=${n}
              data-index=${t}
              .style=${We({left:o})}
              @pointerdown=${this._handleSplitterPointerDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:ee`<div
            class=${n}
            data-index=${t}
            .style=${We({left:o})}
          >
            <div class="sash-visible"></div>
          </div>`}),t=je({wrapper:!0,"select-disabled":this._columnResizeController.isDragging,"resize-cursor":this._columnResizeController.isDragging,"compact-view":this.compact});return ee`
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
    `}};Yn.styles=Kn,Qn([Ce({reflect:!0})],Yn.prototype,"role",void 0),Qn([Ce({type:Boolean,reflect:!0})],Yn.prototype,"resizable",void 0),Qn([Ce({type:Boolean,reflect:!0})],Yn.prototype,"responsive",void 0),Qn([Ce({type:Boolean,reflect:!0})],Yn.prototype,"bordered",void 0),Qn([Ce({type:Boolean,reflect:!0,attribute:"bordered-columns"})],Yn.prototype,"borderedColumns",void 0),Qn([Ce({type:Boolean,reflect:!0,attribute:"bordered-rows"})],Yn.prototype,"borderedRows",void 0),Qn([Ce({type:Number})],Yn.prototype,"breakpoint",void 0),Qn([Ce({type:Array})],Yn.prototype,"columns",null),Qn([Ce({attribute:"min-column-width"})],Yn.prototype,"minColumnWidth",void 0),Qn([Ce({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],Yn.prototype,"delayedResizing",void 0),Qn([Ce({type:Boolean,reflect:!0})],Yn.prototype,"compact",void 0),Qn([Ce({type:Boolean,reflect:!0})],Yn.prototype,"zebra",void 0),Qn([Ce({type:Boolean,reflect:!0,attribute:"zebra-odd"})],Yn.prototype,"zebraOdd",void 0),Qn([Ie(".header")],Yn.prototype,"_headerElement",void 0),Qn([Ie(".scrollable")],Yn.prototype,"_scrollableElement",void 0),Qn([(e,t)=>Pe(e,t,{get(){return(this.renderRoot??($e??=document.createDocumentFragment())).querySelectorAll(".sash-visible")}})],Yn.prototype,"_sashVisibleElements",void 0),Qn([Oe({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],Yn.prototype,"_assignedElements",void 0),Qn([Oe({slot:"header",flatten:!0,selector:"vscode-table-header"})],Yn.prototype,"_assignedHeaderElements",void 0),Qn([Oe({slot:"body",flatten:!0,selector:"vscode-table-body"})],Yn.prototype,"_assignedBodyElements",void 0),Qn([Ee()],Yn.prototype,"_sashPositions",void 0),Qn([Ee()],Yn.prototype,"_isDragging",void 0),Yn=Qn([Ne("vscode-table")],Yn),l({tagName:"vscode-table",elementClass:Yn,react:o,displayName:"VscodeTable"});const Xn=[Te,v`
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
  `];var Zn=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Jn=class extends Le{constructor(){super(...arguments),this.role="rowgroup"}render(){return ee` <slot></slot> `}};Jn.styles=Xn,Zn([Ce({reflect:!0})],Jn.prototype,"role",void 0),Jn=Zn([Ne("vscode-table-body")],Jn),l({tagName:"vscode-table-body",elementClass:Jn,react:o,displayName:"VscodeTableBody"});const eo=[Te,v`
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
  `];var to=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let no=class extends Le{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?ee`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:oe;return ee`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};no.styles=eo,to([Ce({reflect:!0})],no.prototype,"role",void 0),to([Ce({attribute:"column-label"})],no.prototype,"columnLabel",void 0),to([Ce({type:Boolean,reflect:!0})],no.prototype,"compact",void 0),no=to([Ne("vscode-table-cell")],no),l({tagName:"vscode-table-cell",elementClass:no,react:o,displayName:"VscodeTableCell"});const oo=[Te,v`
    :host {
      background-color: var(
        --vscode-keybindingTable-headerBackground,
        rgba(204, 204, 204, 0.04)
      );
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var io=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ro=class extends Le{constructor(){super(...arguments),this.role="rowgroup"}render(){return ee` <slot></slot> `}};ro.styles=oo,io([Ce({reflect:!0})],ro.prototype,"role",void 0),ro=io([Ne("vscode-table-header")],ro),l({tagName:"vscode-table-header",elementClass:ro,react:o,displayName:"VscodeTableHeader"});const so=[Te,v`
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
  `];var ao=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let lo=class extends Le{constructor(){super(...arguments),this.minWidth="0",this.index=-1,this.role="columnheader"}willUpdate(e){e.has("minWidth")&&this.index>-1&&this.dispatchEvent(new CustomEvent("vsc-table-change-min-column-width",{detail:{columnIndex:this.index,propertyValue:this.minWidth},bubbles:!0}))}render(){return ee`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};lo.styles=so,ao([Ce({attribute:"min-width"})],lo.prototype,"minWidth",void 0),ao([Ce({type:Number})],lo.prototype,"index",void 0),ao([Ce({reflect:!0})],lo.prototype,"role",void 0),lo=ao([Ne("vscode-table-header-cell")],lo),l({tagName:"vscode-table-header-cell",elementClass:lo,react:o,displayName:"VscodeTableHeaderCell"});const co=[Te,v`
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
  `];var uo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ho=class extends Le{constructor(){super(...arguments),this.role="row"}render(){return ee` <slot></slot> `}};ho.styles=co,uo([Ce({reflect:!0})],ho.prototype,"role",void 0),ho=uo([Ne("vscode-table-row")],ho),l({tagName:"vscode-table-row",elementClass:ho,react:o,displayName:"VscodeTableRow"});const po=[Te,v`
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
  `];var fo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let vo=class extends Le{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return ee` <slot></slot> `}};vo.styles=po,fo([Ce({type:Boolean,reflect:!0})],vo.prototype,"hidden",void 0),fo([Ce({reflect:!0,attribute:"aria-labelledby"})],vo.prototype,"ariaLabelledby",void 0),fo([Ce({type:Boolean,reflect:!0})],vo.prototype,"panel",void 0),fo([Ce({reflect:!0})],vo.prototype,"role",void 0),fo([Ce({type:Number,reflect:!0})],vo.prototype,"tabIndex",void 0),vo=fo([Ne("vscode-tab-panel")],vo);const go=l({tagName:"vscode-tab-panel",elementClass:vo,react:o,displayName:"VscodeTabPanel"}),mo=[Te,v`
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
  `];var bo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let yo=class extends Le{constructor(){super(),this.panel=!1,this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=Nt()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"selected-index"===e&&this._setActiveTab(),"panel"===e&&(this._tabHeaders.forEach(e=>e.panel=null!==n),this._tabPanels.forEach(e=>e.panel=null!==n))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((e,t)=>{e.hidden=t!==this.selectedIndex}),this._tabHeaders.forEach((e,t)=>{e.active=t===this.selectedIndex})}_focusPrevTab(){0===this._tabFocus?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),"ArrowLeft"===e.key?this._focusPrevTab():"ArrowRight"===e.key&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),"Enter"===e.key&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter(e=>e instanceof Hn);e.length>0&&e.forEach(e=>e.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(e=>e instanceof vo),this._tabPanels.forEach((e,t)=>{e.ariaLabelledby=`t${this._componentId}-h${t}`,e.id=`t${this._componentId}-p${t}`,e.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(e=>e instanceof Hn),this._tabHeaders.forEach((e,t)=>{e.tabId=t,e.id=`t${this._componentId}-h${t}`,e.ariaControls=`t${this._componentId}-p${t}`,e.panel=this.panel,e.active=t===this.selectedIndex})}_onHeaderClick(e){const t=e.composedPath().find(e=>e instanceof Hn);t&&(this.selectedIndex=t.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return ee`
      <div
        class=${je({header:!0,panel:this.panel})}
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
    `}};yo.styles=mo,bo([Ce({type:Boolean,reflect:!0})],yo.prototype,"panel",void 0),bo([Ce({type:Number,reflect:!0,attribute:"selected-index"})],yo.prototype,"selectedIndex",void 0),bo([Oe({slot:"header"})],yo.prototype,"_headerSlotElements",void 0),bo([Oe()],yo.prototype,"_mainSlotElements",void 0),yo=bo([Ne("vscode-tabs")],yo);const _o=l({tagName:"vscode-tabs",elementClass:yo,react:o,events:{onVscTabsSelect:"vsc-tabs-select"},displayName:"VscodeTabs"}),xo=[Te,v`
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
  `];var wo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let ko=class extends Le{set value(e){this._value=e,this._internals.setFormValue(e)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(e){const t=["maxLength","minLength","required"];for(const n of e.keys())if(t.includes(String(n))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then(()=>{this._value=e})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change"))}_handleInput(){this._dataChanged(),this._setValidityFromInput()}_handleMouseMove(e){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight)return void(this._textareaPointerCursor=!1);const t=this._textareaEl.getBoundingClientRect(),n=e.clientX;this._textareaPointerCursor=n>=t.left+t.width-14-2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return ee`
      <div
        class=${je({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${qe(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${je({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${qe(this.maxLength)}
        minlength=${qe(this.minLength)}
        rows=${qe(this.rows)}
        cols=${qe(this.cols)}
        name=${qe(this.name)}
        placeholder=${qe(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${We({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};ko.styles=xo,ko.formAssociated=!0,ko.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0},wo([Ce()],ko.prototype,"autocomplete",void 0),wo([Ce({type:Boolean,reflect:!0})],ko.prototype,"autofocus",void 0),wo([Ce({attribute:"default-value"})],ko.prototype,"defaultValue",void 0),wo([Ce({type:Boolean,reflect:!0})],ko.prototype,"disabled",void 0),wo([Ce({type:Boolean,reflect:!0})],ko.prototype,"invalid",void 0),wo([Ce({attribute:!1})],ko.prototype,"label",void 0),wo([Ce({type:Number})],ko.prototype,"maxLength",void 0),wo([Ce({type:Number})],ko.prototype,"minLength",void 0),wo([Ce({type:Number})],ko.prototype,"rows",void 0),wo([Ce({type:Number})],ko.prototype,"cols",void 0),wo([Ce()],ko.prototype,"name",void 0),wo([Ce()],ko.prototype,"placeholder",void 0),wo([Ce({type:Boolean,reflect:!0})],ko.prototype,"readonly",void 0),wo([Ce()],ko.prototype,"resize",void 0),wo([Ce({type:Boolean,reflect:!0})],ko.prototype,"required",void 0),wo([Ce({type:Boolean})],ko.prototype,"spellcheck",void 0),wo([Ce({type:Boolean,reflect:!0})],ko.prototype,"monospace",void 0),wo([Ce()],ko.prototype,"value",null),wo([Ie("#textarea")],ko.prototype,"_textareaEl",void 0),wo([Ee()],ko.prototype,"_value",void 0),wo([Ee()],ko.prototype,"_textareaPointerCursor",void 0),wo([Ee()],ko.prototype,"_shadow",void 0),ko=wo([Ne("vscode-textarea")],ko);const So=l({tagName:"vscode-textarea",elementClass:ko,react:o,displayName:"VscodeTextarea",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}}),Co=f(De()),Eo=[Te,v`
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
      font-family: var(--vscode-font-family, ${Co});
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
      font-family: var(--vscode-font-family, ${Co});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var Po=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Io=class extends Le{set type(e){this._type=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"].includes(e)?e:"text"}get type(){return this._type}set value(e){"file"!==this.type&&(this._value=e,this._internals.setFormValue(e)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(e){this.minLength=e}get minlength(){return this.minLength}set maxlength(e){this.maxLength=e}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),["max","maxlength","min","minlength","pattern","required","step"].includes(e)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(e,t){this.value=e}_dataChanged(){if(this._value=this._inputEl.value,"file"===this.type&&this._inputEl.files)for(const e of this._inputEl.files)this._internals.setFormValue(e);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(){this._dataChanged(),this._setValidityFromInput()}_onChange(){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change"))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(e){"Enter"===e.key&&this._internals.form&&this._internals.form?.requestSubmit()}render(){return ee`
      <div class="root">
        <slot name="content-before"></slot>
        <input
          id="input"
          type=${this.type}
          ?autofocus=${this.autofocus}
          autocomplete=${qe(this.autocomplete)}
          aria-label=${this.label}
          ?disabled=${this.disabled}
          max=${qe(this.max)}
          maxlength=${qe(this.maxLength)}
          min=${qe(this.min)}
          minlength=${qe(this.minLength)}
          ?multiple=${this.multiple}
          name=${qe(this.name)}
          pattern=${qe(this.pattern)}
          placeholder=${qe(this.placeholder)}
          ?readonly=${this.readonly}
          ?required=${this.required}
          step=${qe(this.step)}
          .value=${this._value}
          @blur=${this._onBlur}
          @change=${this._onChange}
          @focus=${this._onFocus}
          @input=${this._onInput}
          @keydown=${this._onKeyDown}
        />
        <slot name="content-after"></slot>
      </div>
    `}};Io.styles=Eo,Io.formAssociated=!0,Io.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0},Po([Ce()],Io.prototype,"autocomplete",void 0),Po([Ce({type:Boolean,reflect:!0})],Io.prototype,"autofocus",void 0),Po([Ce({attribute:"default-value"})],Io.prototype,"defaultValue",void 0),Po([Ce({type:Boolean,reflect:!0})],Io.prototype,"disabled",void 0),Po([Ce({type:Boolean,reflect:!0})],Io.prototype,"focused",void 0),Po([Ce({type:Boolean,reflect:!0})],Io.prototype,"invalid",void 0),Po([Ce({attribute:!1})],Io.prototype,"label",void 0),Po([Ce({type:Number})],Io.prototype,"max",void 0),Po([Ce({type:Number})],Io.prototype,"maxLength",void 0),Po([Ce({type:Number})],Io.prototype,"min",void 0),Po([Ce({type:Number})],Io.prototype,"minLength",void 0),Po([Ce({type:Boolean,reflect:!0})],Io.prototype,"multiple",void 0),Po([Ce({reflect:!0})],Io.prototype,"name",void 0),Po([Ce()],Io.prototype,"pattern",void 0),Po([Ce()],Io.prototype,"placeholder",void 0),Po([Ce({type:Boolean,reflect:!0})],Io.prototype,"readonly",void 0),Po([Ce({type:Boolean,reflect:!0})],Io.prototype,"required",void 0),Po([Ce({type:Number})],Io.prototype,"step",void 0),Po([Ce({reflect:!0})],Io.prototype,"type",null),Po([Ce()],Io.prototype,"value",null),Po([Ie("#input")],Io.prototype,"_inputEl",void 0),Po([Ee()],Io.prototype,"_value",void 0),Po([Ee()],Io.prototype,"_type",void 0),Io=Po([Ne("vscode-textfield")],Io);const $o=l({tagName:"vscode-textfield",elementClass:Io,react:o,displayName:"VscodeTextfield",events:{onChange:"change",onInput:"input",onInvalid:"invalid"}}),Oo=[Te,v`
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
  `];var Ao=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let Ro=class extends Le{constructor(){super(...arguments),this.icon="",this.label=void 0,this.toggleable=!1,this.checked=!1,this._isSlotEmpty=!0}_handleSlotChange(){this._isSlotEmpty=!((this._assignedNodes?.length??0)>0)}_handleButtonClick(){this.toggleable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}render(){const e=this.checked?"true":"false";return ee`
      <button
        type="button"
        aria-label=${qe(this.label)}
        role=${qe(this.toggleable?"switch":void 0)}
        aria-checked=${qe(this.toggleable?e:void 0)}
        class=${je({checked:this.toggleable&&this.checked})}
        @click=${this._handleButtonClick}
      >
        ${this.icon?ee`<vscode-icon name=${this.icon}></vscode-icon>`:oe}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${je({empty:this._isSlotEmpty,textOnly:!this.icon})}
        ></slot>
      </button>
    `}};Ro.styles=Oo,Ao([Ce({reflect:!0})],Ro.prototype,"icon",void 0),Ao([Ce()],Ro.prototype,"label",void 0),Ao([Ce({type:Boolean,reflect:!0})],Ro.prototype,"toggleable",void 0),Ao([Ce({type:Boolean,reflect:!0})],Ro.prototype,"checked",void 0),Ao([Ee()],Ro.prototype,"_isSlotEmpty",void 0),Ao([function(e){return(t,n)=>{const{slot:o}={},i="slot"+(o?`[name=${o}]`:":not([name])");return Pe(t,n,{get(){const t=this.renderRoot?.querySelector(i);return t?.assignedNodes(e)??[]}})}}()],Ro.prototype,"_assignedNodes",void 0),Ro=Ao([Ne("vscode-toolbar-button")],Ro),l({tagName:"vscode-toolbar-button",elementClass:Ro,react:o,displayName:"VscodeToolbarButton",events:{onChange:"change"}});const zo=[Te,v`
    :host {
      display: block;
    }

    div {
      gap: 4px;
      display: flex;
      align-items: center;
    }
  `];let Lo=class extends Le{render(){return ee`<div><slot></slot></div>`}};Lo.styles=zo,Lo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}([Ne("vscode-toolbar-container")],Lo),l({tagName:"vscode-toolbar-container",elementClass:Lo,react:o,displayName:"VscodeToolbarContainer"});class No extends Event{constructor(e,t,n,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=o??!1}}class To{constructor(e,t,n,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){const e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new No(this.context,this.host,this.t,this.subscribe))}}class Do{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}class Bo extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}}class Vo extends Do{constructor(e,t,n){super(void 0!==t.context?t.initialValue:n),this.onContextRequest=e=>{if(e.context!==this.context)return;const t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context)return;if((e.contextTarget??e.composedPath()[0])===this.host)return;const t=new Set;for(const[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new No(this.context,n,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Bo(this.context,this.host))}}function Fo({context:e}){return(t,n)=>{const o=new WeakMap;if("object"==typeof n)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new Vo(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer(t=>{o.set(t,new Vo(t,{context:e}))});const i=Object.getOwnPropertyDescriptor(t,n);let r;if(void 0===i){const e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{const e=i.set;r={...i,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,n,r)}}}function Mo({context:e,subscribe:t}){return(n,o)=>{"object"==typeof o?o.addInitializer(function(){new To(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})}):n.constructor.addInitializer(n=>{new To(n,{context:e,callback:e=>{n[o]=e},subscribe:t})})}}const Ho=[Te,v`
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
  `],Uo="vscode-list",jo=Symbol("configContext"),qo=e=>e instanceof Element&&e.matches("vscode-tree-item"),Wo=(e,t)=>{const n=t.length,o=(i=e)instanceof Element&&i.matches("vscode-tree")?-1:e.level;var i;"branch"in e&&(e.branch=n>0),t.forEach((t,n)=>{t.path="path"in e?[...e.path,n]:[n],t.level=o+1,t.dataset.path=t.path.join(".")})},Ko=e=>{const t=e.lastElementChild;return t&&qo(t)?t.branch&&t.open?Ko(t):t:e},Go=e=>{if(!e.parentElement)return null;if(!qo(e.parentElement))return null;return Qo(e.parentElement)||Go(e.parentElement)},Qo=e=>{let t=e.nextElementSibling;for(;t&&!qo(t);)t=t.nextElementSibling;return t};function Yo(e){return e.parentElement&&qo(e.parentElement)?e.parentElement:null}var Xo=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const Zo="none",Jo=[" ","ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Enter","Escape","Shift"];let ei=class extends Le{constructor(){super(),this.expandMode="singleClick",this.hideArrows=!1,this.indent=8,this.indentGuides="onHover",this.multiSelect=!1,this._treeContextState={isShiftPressed:!1,activeItem:null,selectedItems:new Set,hoveredItem:null,allItems:null,itemListUpToDate:!1,focusedItem:null,prevFocusedItem:null,hasBranchItem:!1,rootElement:this,highlightedItems:new Set,highlightIndentGuides:()=>{this._highlightIndentGuides()},emitSelectEvent:()=>{this._emitSelectEvent()}},this._configContext={hideArrows:this.hideArrows,expandMode:this.expandMode,indent:this.indent,indentGuides:this.indentGuides,multiSelect:this.multiSelect},this._handleComponentKeyDown=e=>{const t=e.key;switch(Jo.includes(t)&&(e.stopPropagation(),e.preventDefault()),t){case" ":case"Enter":this._handleEnterPress();break;case"ArrowDown":this._handleArrowDownPress();break;case"ArrowLeft":this._handleArrowLeftPress(e);break;case"ArrowRight":this._handleArrowRightPress();break;case"ArrowUp":this._handleArrowUpPress();break;case"Shift":this._handleShiftPress()}},this._handleComponentKeyUp=e=>{"Shift"===e.key&&(this._treeContextState.isShiftPressed=!1)},this._handleSlotChange=()=>{this._treeContextState.itemListUpToDate=!1,Wo(this,this._assignedTreeItems),this.updateComplete.then(()=>{if(null===this._treeContextState.activeItem){const e=this.querySelector(":scope > vscode-tree-item");e&&(e.active=!0)}})},this.addEventListener("keyup",this._handleComponentKeyUp),this.addEventListener("keydown",this._handleComponentKeyDown)}connectedCallback(){super.connectedCallback(),this.role="tree"}willUpdate(e){this._updateConfigContext(e),e.has("multiSelect")&&(this.ariaMultiSelectable=this.multiSelect?"true":"false")}expandAll(){this.querySelectorAll("vscode-tree-item").forEach(e=>{e.branch&&(e.open=!0)})}collapseAll(){this.querySelectorAll("vscode-tree-item").forEach(e=>{e.branch&&(e.open=!1)})}updateHasBranchItemFlag(){const e=this._assignedTreeItems.some(e=>e.branch);this._treeContextState={...this._treeContextState,hasBranchItem:e}}_emitSelectEvent(){const e=new CustomEvent("vsc-tree-select",{detail:Array.from(this._treeContextState.selectedItems)});this.dispatchEvent(e)}_highlightIndentGuideOfItem(e){if(e.branch&&e.open)e.highlightedGuides=!0,this._treeContextState.highlightedItems?.add(e);else{const t=Yo(e);t&&(t.highlightedGuides=!0,this._treeContextState.highlightedItems?.add(t))}}_highlightIndentGuides(){this.indentGuides!==Zo&&(this._treeContextState.highlightedItems?.forEach(e=>e.highlightedGuides=!1),this._treeContextState.highlightedItems?.clear(),this._treeContextState.activeItem&&this._highlightIndentGuideOfItem(this._treeContextState.activeItem),this._treeContextState.selectedItems.forEach(e=>{this._highlightIndentGuideOfItem(e)}))}_updateConfigContext(e){const{hideArrows:t,expandMode:n,indent:o,indentGuides:i,multiSelect:r}=this;e.has("hideArrows")&&(this._configContext={...this._configContext,hideArrows:t}),e.has("expandMode")&&(this._configContext={...this._configContext,expandMode:n}),e.has("indent")&&(this._configContext={...this._configContext,indent:o}),e.has("indentGuides")&&(this._configContext={...this._configContext,indentGuides:i}),e.has("multiSelect")&&(this._configContext={...this._configContext,multiSelect:r})}_focusItem(e){e.active=!0,e.updateComplete.then(()=>{e.focus(),this._highlightIndentGuides()})}_focusPrevItem(){if(this._treeContextState.focusedItem){const e=(e=>{const{parentElement:t}=e;if(!t||!qo(e))return null;let n=e.previousElementSibling;for(;n&&!qo(n);)n=n.previousElementSibling;return!n&&qo(t)?t:n&&n.branch&&n.open?Ko(n):n})(this._treeContextState.focusedItem);e&&(this._focusItem(e),this._treeContextState.isShiftPressed&&this.multiSelect&&(e.selected=!e.selected,this._emitSelectEvent()))}}_focusNextItem(){if(this._treeContextState.focusedItem){const e=(e=>{const{parentElement:t}=e;if(!t||!qo(e))return null;let n;if(e.branch&&e.open){const t=e.querySelector("vscode-tree-item");t?n=t:(n=Qo(e),n||(n=Go(e)))}else n=Qo(e),n||(n=Go(e));return n||e})(this._treeContextState.focusedItem);e&&(this._focusItem(e),this._treeContextState.isShiftPressed&&this.multiSelect&&(e.selected=!e.selected,this._emitSelectEvent()))}}_handleArrowRightPress(){if(!this._treeContextState.focusedItem)return;const{focusedItem:e}=this._treeContextState;e.branch&&(e.open?this._focusNextItem():e.open=!0)}_handleArrowLeftPress(e){if(e.ctrlKey)return void this.collapseAll();if(!this._treeContextState.focusedItem)return;const{focusedItem:t}=this._treeContextState,n=Yo(t);t.branch&&t.open?t.open=!1:n&&n.branch&&this._focusItem(n)}_handleArrowDownPress(){this._treeContextState.focusedItem?this._focusNextItem():this._focusItem(this._assignedTreeItems[0])}_handleArrowUpPress(){this._treeContextState.focusedItem?this._focusPrevItem():this._focusItem(this._assignedTreeItems[0])}_handleEnterPress(){const{focusedItem:e}=this._treeContextState;e&&(this._treeContextState.selectedItems.forEach(e=>e.selected=!1),this._treeContextState.selectedItems.clear(),this._highlightIndentGuides(),e.selected=!0,this._emitSelectEvent(),e.branch&&(e.open=!e.open))}_handleShiftPress(){this._treeContextState.isShiftPressed=!0}render(){return ee`<div>
      <slot @slotchange=${this._handleSlotChange}></slot>
    </div>`}};ei.styles=Ho,Xo([Ce({type:String,attribute:"expand-mode"})],ei.prototype,"expandMode",void 0),Xo([Ce({type:Boolean,reflect:!0,attribute:"hide-arrows"})],ei.prototype,"hideArrows",void 0),Xo([Ce({type:Number,reflect:!0})],ei.prototype,"indent",void 0),Xo([Ce({type:String,attribute:"indent-guides",useDefault:!0,reflect:!0})],ei.prototype,"indentGuides",void 0),Xo([Ce({type:Boolean,reflect:!0,attribute:"multi-select"})],ei.prototype,"multiSelect",void 0),Xo([Fo({context:Uo})],ei.prototype,"_treeContextState",void 0),Xo([Fo({context:jo})],ei.prototype,"_configContext",void 0),Xo([Oe({selector:"vscode-tree-item"})],ei.prototype,"_assignedTreeItems",void 0),ei=Xo([Ne("vscode-tree")],ei),l({tagName:"vscode-tree",elementClass:ei,react:o,displayName:"VscodeTree",events:{onVscTreeSelect:"vsc-tree-select"}});const ti=[Te,v`
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
  `];var ni,oi=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};const ii=ee`<svg
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
</svg>`;let ri=ni=class extends Le{set selected(e){this._selected=e,e?this._treeContextState.selectedItems.add(this):this._treeContextState.selectedItems.delete(this),this.ariaSelected=e?"true":"false",this._updateActionsVisibility()}get selected(){return this._selected}set path(e){this._path=e}get path(){return this._path}constructor(){super(),this.active=!1,this.branch=!1,this.hasActiveItem=!1,this.hasSelectedItem=!1,this.highlightedGuides=!1,this.open=!1,this.level=0,this._selected=!1,this._path=[],this._hasBranchIcon=!1,this._hasBranchOpenedIcon=!1,this._hasLeafIcon=!1,this._hasDescriptionSlotContent=!1,this._hasActionsSlotContent=!1,this._hasDecorationSlotContent=!1,this._treeContextState={isShiftPressed:!1,selectedItems:new Set,hoveredItem:null,allItems:null,itemListUpToDate:!1,focusedItem:null,prevFocusedItem:null,hasBranchItem:!1,rootElement:null,activeItem:null},this._isPointerInside=!1,this._hasKeyboardFocus=!1,this._handleMainSlotChange=()=>{this._mainSlotChange(),this._treeContextState.itemListUpToDate=!1},this._handleComponentFocus=()=>{this._treeContextState.focusedItem&&this._treeContextState.focusedItem!==this&&(this._treeContextState.isShiftPressed||(this._treeContextState.prevFocusedItem=this._treeContextState.focusedItem),this._treeContextState.focusedItem=null),this._treeContextState.focusedItem=this},this._handlePointerEnter=()=>{this._isPointerInside=!0,this._claimHover()},this._handlePointerLeave=e=>{this._isPointerInside=!1,this._treeContextState.hoveredItem===this&&(this._treeContextState.hoveredItem=null),this._clearHoverState();const t=e.relatedTarget;if(t instanceof Element){const e=t.closest("vscode-tree-item");e&&e!==this&&e.isConnected&&e._adoptHoverFromSibling()}},this._handleFocusIn=()=>{this._updateFocusState()},this._handleFocusOut=()=>{this._updateFocusState()},this._internals=this.attachInternals(),this.addEventListener("focus",this._handleComponentFocus),this.addEventListener("pointerenter",this._handlePointerEnter),this.addEventListener("pointerleave",this._handlePointerLeave),this.addEventListener("focusin",this._handleFocusIn),this.addEventListener("focusout",this._handleFocusOut)}connectedCallback(){super.connectedCallback(),this._mainSlotChange(),this.role="treeitem",this.ariaDisabled="false"}firstUpdated(e){super.firstUpdated(e),this._refreshDescriptionSlotState(),this._refreshActionsSlotState(),this._refreshDecorationSlotState(),this.matches(":hover")?(this._isPointerInside=!0,this._claimHover()):this._updateActionsVisibility()}willUpdate(e){e.has("active")&&this._toggleActiveState(),(e.has("open")||e.has("branch"))&&this._setAriaExpanded()}_setAriaExpanded(){this.branch?this.ariaExpanded=this.open?"true":"false":this.ariaExpanded=null}_setHasActiveItemFlagOnParent(e,t){const n=function(e){return e.parentElement&&e.parentElement instanceof ri?e.parentElement:null}(e);n&&(n.hasActiveItem=t)}_refreshDescriptionSlotState(){const e=(this._descriptionSlotElements?.length??0)>0;this._hasDescriptionSlotContent=e,this._setCustomState("has-description",e)}_refreshActionsSlotState(){const e=(this._actionsSlotElements?.length??0)>0;this._hasActionsSlotContent=e,this._setCustomState("has-actions",e),this._updateActionsVisibility()}_refreshDecorationSlotState(){const e=(this._decorationSlotElements?.length??0)>0,t=this._hasDecorationSlotContent;this._hasDecorationSlotContent=e,this._setCustomState("has-decoration",e),t!==e&&this.requestUpdate()}_setCustomState(e,t){if(this._internals?.states)try{t?this._internals.states.add(e):this._internals.states.delete(e)}catch{t?this._internals.states.add(`--${e}`):this._internals.states.delete(`--${e}`)}}_getActiveElement(){const e=this.getRootNode({composed:!0});return e instanceof Document?e.activeElement instanceof Element?e.activeElement:null:e instanceof ShadowRoot&&e.activeElement instanceof Element?e.activeElement:null}_isActiveElementInActions(e){return!!e&&(this._actionsSlotElements??[]).some(t=>t===e||t.contains(e))}_updateActionsVisibility(){if(!this._hasActionsSlotContent)return void this._setCustomState("show-actions",!1);const e=this._getActiveElement(),t=this._isActiveElementInActions(e),n=this.selected||this._isPointerInside||this._hasKeyboardFocus||t;this._setCustomState("show-actions",n)}_updateFocusState(){const e=this.matches(":focus-visible");this._setCustomState("focus-visible",e);const t=this._getActiveElement();let n=null;if(t instanceof Element&&(n=t.closest("vscode-tree-item"),!n)){const e=t.getRootNode();e instanceof ShadowRoot&&e.host instanceof ni&&(n=e.host)}const o=n===this;this._hasKeyboardFocus=o,this._setCustomState("keyboard-focus",o),this._updateActionsVisibility()}_clearHoverState(){this._isPointerInside=!1,this._setCustomState("hover",!1),this._updateActionsVisibility()}_adoptHoverFromSibling(){this._isPointerInside=!0,this._claimHover()}_claimHover(){const e=this._treeContextState;e.hoveredItem&&e.hoveredItem!==this&&e.hoveredItem._clearHoverState(),e.hoveredItem=this,this._setCustomState("hover",!0),this._updateActionsVisibility()}_toggleActiveState(){this.active?(this._treeContextState.activeItem&&(this._treeContextState.activeItem.active=!1,this._setHasActiveItemFlagOnParent(this._treeContextState.activeItem,!1)),this._treeContextState.activeItem=this,this._setHasActiveItemFlagOnParent(this,!0),this.tabIndex=0,this._setCustomState("active",!0)):(this._treeContextState.activeItem===this&&(this._treeContextState.activeItem=null,this._setHasActiveItemFlagOnParent(this,!1)),this.tabIndex=-1,this._setCustomState("active",!1))}_selectItem(e){const{selectedItems:t}=this._treeContextState,{multiSelect:n}=this._configContext,o=new Set(t);n&&e?this.selected=!this.selected:(Array.from(t).forEach(e=>{e!==this&&(e.selected=!1)}),t.clear(),this.selected=!0);const i=new Set([...o,...t]);i.add(this),i.forEach(e=>e._updateActionsVisibility())}_selectRange(){const e=this._treeContextState.prevFocusedItem;if(!e||e===this)return;const t=new Set(this._treeContextState.selectedItems);this._treeContextState.itemListUpToDate||(this._treeContextState.allItems=this._treeContextState.rootElement.querySelectorAll("vscode-tree-item"),this._treeContextState.allItems&&this._treeContextState.allItems.forEach((e,t)=>{e.dataset.score=t.toString()}),this._treeContextState.itemListUpToDate=!0);let n=+(e.dataset.score??-1),o=+(this.dataset.score??-1);n>o&&([n,o]=[o,n]),Array.from(this._treeContextState.selectedItems).forEach(e=>e.selected=!1),this._treeContextState.selectedItems.clear(),this._selectItemsAndAllVisibleDescendants(n,o);const i=new Set([...t,...this._treeContextState.selectedItems]);i.add(this),i.forEach(e=>e._updateActionsVisibility())}_selectItemsAndAllVisibleDescendants(e,t){let n=e;for(;n<=t;)if(this._treeContextState.allItems){const e=this._treeContextState.allItems[n];e.branch&&!e.open?(e.selected=!0,n+=e.querySelectorAll("vscode-tree-item").length):e.branch&&e.open?(e.selected=!0,n+=this._selectItemsAndAllVisibleDescendants(n+1,t)):(e.selected=!0,n+=1)}return n}_mainSlotChange(){this._initiallyAssignedTreeItems.forEach(e=>{e.setAttribute("slot","children")})}_handleChildrenSlotChange(){Wo(this,this._childrenTreeItems),this._treeContextState.rootElement&&this._treeContextState.rootElement.updateHasBranchItemFlag()}_handleDescriptionSlotChange(){this._refreshDescriptionSlotState()}_handleActionsSlotChange(){this._refreshActionsSlotState()}_handleDecorationSlotChange(){this._refreshDecorationSlotState()}_handleContentClick(e){e.stopPropagation();const t=e.ctrlKey||e.metaKey,n=e.shiftKey;n&&this._configContext.multiSelect?(this._selectRange(),this._treeContextState.emitSelectEvent?.(),this.updateComplete.then(()=>{this._treeContextState.highlightIndentGuides?.()})):(this._selectItem(t),this._treeContextState.emitSelectEvent?.(),this.updateComplete.then(()=>{this._treeContextState.highlightIndentGuides?.()}),"singleClick"===this._configContext.expandMode&&(!this.branch||this._configContext.multiSelect&&t||(this.open=!this.open))),this.active=!0,n||(this._treeContextState.prevFocusedItem=this)}_handleDoubleClick(e){"doubleClick"===this._configContext.expandMode&&(!this.branch||this._configContext.multiSelect&&(e.ctrlKey||e.metaKey)||(this.open=!this.open))}_handleIconSlotChange(e){const t=e.target,n=t.assignedElements().length>0;switch(t.name){case"icon-branch":this._hasBranchIcon=n;break;case"icon-branch-opened":this._hasBranchOpenedIcon=n;break;case"icon-leaf":this._hasLeafIcon=n}}render(){const{hideArrows:e,indent:t,indentGuides:n}=this._configContext,{hasBranchItem:o}=this._treeContextState;let i=3+this.level*t;const r=e?3:13,s=3+this.level*t+r;this.branch||e||!o||(i+=30);const a=this._hasBranchIcon&&this.branch||this._hasBranchOpenedIcon&&this.branch&&this.open||this._hasLeafIcon&&!this.branch,l={wrapper:!0,active:this.active,"has-description":this._hasDescriptionSlotContent,"has-actions":this._hasActionsSlotContent,"has-decoration":this._hasDecorationSlotContent},c={children:!0,guide:n!==Zo,"default-guide":n!==Zo,"highlighted-guide":this.highlightedGuides},d={"icon-container":!0,"has-icon":a},u={content:!0,"has-description":this._hasDescriptionSlotContent,"has-decoration":this._hasDecorationSlotContent};return ee` <div class="root">
      <div
        class=${je(l)}
        part="wrapper"
        @click=${this._handleContentClick}
        @dblclick=${this._handleDoubleClick}
        .style=${We({paddingLeft:`${i}px`})}
      >
        ${this.branch&&!e?ee`<div
              class=${je({"arrow-container":!0,"icon-rotated":this.open})}
              part="arrow-icon-container"
            >
              ${ii}
            </div>`:oe}
        <div class=${je(d)} part="icon-container">
          ${this.branch&&!this.open?ee`<slot
                name="icon-branch"
                @slotchange=${this._handleIconSlotChange}
              ></slot>`:oe}
          ${this.branch&&this.open?ee`<slot
                name="icon-branch-opened"
                @slotchange=${this._handleIconSlotChange}
              ></slot>`:oe}
          ${this.branch?oe:ee`<slot
                name="icon-leaf"
                @slotchange=${this._handleIconSlotChange}
              ></slot>`}
        </div>
        <div class=${je(u)} part="content">
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
        class=${je(c)}
        .style=${We({"--indentation-guide-left":`${s}px`})}
        role="group"
        part="children"
      >
        <slot
          name="children"
          @slotchange=${this._handleChildrenSlotChange}
        ></slot>
      </div>
    </div>`}};ri.styles=ti,oi([Ce({type:Boolean})],ri.prototype,"active",void 0),oi([Ce({type:Boolean,reflect:!0})],ri.prototype,"branch",void 0),oi([Ce({type:Boolean})],ri.prototype,"hasActiveItem",void 0),oi([Ce({type:Boolean})],ri.prototype,"hasSelectedItem",void 0),oi([Ce({type:Boolean})],ri.prototype,"highlightedGuides",void 0),oi([Ce({type:Boolean,reflect:!0})],ri.prototype,"open",void 0),oi([Ce({type:Number,reflect:!0})],ri.prototype,"level",void 0),oi([Ce({type:Boolean,reflect:!0})],ri.prototype,"selected",null),oi([Ee()],ri.prototype,"_hasBranchIcon",void 0),oi([Ee()],ri.prototype,"_hasBranchOpenedIcon",void 0),oi([Ee()],ri.prototype,"_hasLeafIcon",void 0),oi([Ee()],ri.prototype,"_hasDescriptionSlotContent",void 0),oi([Ee()],ri.prototype,"_hasActionsSlotContent",void 0),oi([Ee()],ri.prototype,"_hasDecorationSlotContent",void 0),oi([Mo({context:Uo,subscribe:!0})],ri.prototype,"_treeContextState",void 0),oi([Mo({context:jo,subscribe:!0})],ri.prototype,"_configContext",void 0),oi([Oe({selector:"vscode-tree-item"})],ri.prototype,"_initiallyAssignedTreeItems",void 0),oi([Oe({selector:"vscode-tree-item",slot:"children"})],ri.prototype,"_childrenTreeItems",void 0),oi([Oe({slot:"description",flatten:!0})],ri.prototype,"_descriptionSlotElements",void 0),oi([Oe({slot:"actions",flatten:!0})],ri.prototype,"_actionsSlotElements",void 0),oi([Oe({slot:"decoration",flatten:!0})],ri.prototype,"_decorationSlotElements",void 0),ri=ni=oi([Ne("vscode-tree-item")],ri),l({tagName:"vscode-tree-item",elementClass:ri,react:o,displayName:"VscodeTreeItem"});const si=o.createContext();function ai(){const e=(0,o.useContext)(si),[t,n]=(0,o.useReducer)((e,t)=>({...e,...t}),{appName:"",appShortName:"",appDescription:"",productVendor:"",productName:"",appPublisher:"",appType:""}),{appName:i,appShortName:r,appDescription:s,appType:a,appPublisher:l,productName:c,productVendor:d}=t,u=function(e){const{name:t,value:o}=e.target;n({[t]:o})};return o.createElement("header",null,o.createElement("h1",null,"SOAR App Wizard ",o.createElement(Me,null,"experimental")),o.createElement("p",null,"Bootstrap a new SOAR App and save it to a local directory."),o.createElement(_o,null,o.createElement(Un,{slot:"header"},"Basic Information"),o.createElement(go,null,o.createElement("section",{style:{display:"flex",flexDirection:"column",width:"80%",gap:"10px"}},o.createElement("label",{htmlFor:"appName"},"App Name (Display Name)"),o.createElement($o,{id:"appName",onChange:u,name:"appName",value:i}),o.createElement("label",{htmlFor:"appShortName"},"App Shortname (File Prefix)"),o.createElement($o,{id:"appShortName",onChange:u,name:"appShortName",value:r}),o.createElement("label",{htmlFor:"appDescription"},"App Description"),o.createElement(So,{id:"appDescription",onChange:u,name:"appDescription",value:s}),o.createElement("label",{htmlFor:"appPublisher"},"App Publisher"),o.createElement($o,{id:"appPublisher",onChange:u,name:"appPublisher",value:l,placeholder:"Splunk Community"}),o.createElement("label",{htmlFor:"productName"},"Product Name"),o.createElement($o,{id:"productName",onChange:u,name:"productName",value:c}),o.createElement("label",{htmlFor:"productVendor"},"Product Vendor"),o.createElement($o,{id:"productVendor",onChange:u,name:"productVendor",value:d}),o.createElement("label",{htmlFor:"appType"},"App Type"),o.createElement(Rn,{id:"appType",value:a,onChange:u,name:"appType"},o.createElement(gn,{value:"information"},"information"),o.createElement(gn,{value:"ticketing"},"ticketing"))))),o.createElement(et,{onClick:function(){console.log(t),e.postMessage({command:"createApp",app:t})}},"Create"))}const li=acquireVsCodeApi();i.render(o.createElement(si.Provider,{value:li},o.createElement(ai,null)),document.getElementById("root"))})();