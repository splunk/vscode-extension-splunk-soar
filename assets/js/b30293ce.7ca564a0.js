"use strict";(self.webpackChunkvscode_extension_splunk_soar_docs=self.webpackChunkvscode_extension_splunk_soar_docs||[]).push([[91],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},i="Container Watcher",c={unversionedId:"tutorial-basics/the-container-watcher",id:"tutorial-basics/the-container-watcher",title:"Container Watcher",description:"The container watcher panel can be used to keep track of events in SOAR throughout development.",source:"@site/docs/tutorial-basics/the-container-watcher.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/the-container-watcher",permalink:"/vscode-extension-splunk-soar/tutorial-basics/the-container-watcher",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Run a Playbook",permalink:"/vscode-extension-splunk-soar/tutorial-basics/run-a-playbook"},next:{title:"Scaffold a new App",permalink:"/vscode-extension-splunk-soar/tutorial-basics/scaffold-an-app"}},s={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"container-watcher"},"Container Watcher"),(0,a.kt)("p",null,"The container watcher panel can be used to keep track of events in SOAR throughout development. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Container Watcher",src:n(7976).Z,width:"2704",height:"626"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new container in SOAR"),(0,a.kt)("li",{parentName:"ul"},"Watch / Unwatch containers"),(0,a.kt)("li",{parentName:"ul"},"Browse artifacts, notes and the container vault files")))}u.isMDXComponent=!0},7976:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/container_watcher-4d0231a1bf3112c5ebb235277bc13161.png"}}]);