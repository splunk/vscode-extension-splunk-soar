"use strict";(self.webpackChunkvscode_extension_splunk_soar_docs=self.webpackChunkvscode_extension_splunk_soar_docs||[]).push([[83],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>C,frontMatter:()=>h,metadata:()=>g,toc:()=>O});var a=n(7462),r=n(7294),o=n(3905),l=n(6010),s=n(2389),i=n(7392),u=n(7094),c=n(2466);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:s,defaultValue:p,values:b,groupId:f,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(t=null!=p?p:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:w}=(0,u.U)(),[C,T]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=f){const e=O[f];null!=e&&e!==C&&k.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==C&&(N(t),T(a),null!=f&&w(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function b(e){const t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function v(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(f,a),hidden:n},t)}const h={sidebar_position:6},k="Commands",g={unversionedId:"user-guide/commands",id:"user-guide/commands",title:"Commands",description:"Download this document",source:"@site/docs/user-guide/commands.md",sourceDirName:"user-guide",slug:"/user-guide/commands",permalink:"/vscode-extension-splunk-soar/user-guide/commands",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Beyond the Basics",permalink:"/vscode-extension-splunk-soar/user-guide/beyond-the-basics"},next:{title:"Settings",permalink:"/vscode-extension-splunk-soar/user-guide/settings"}},y={},O=[{value:"Command Palette",id:"command-palette",level:2},{value:"Command Categories",id:"command-categories",level:2}],w={toc:O};function C(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commands"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Download this document",src:n(4734).Z,width:"1718",height:"1220"})),(0,o.kt)("h2",{id:"command-palette"},"Command Palette"),(0,o.kt)("p",null,"Many of the most common SOAR commands are built right into the Command Palette. This allows to quickly interact with SOAR environments without reaching for the mouse or touchpad."),(0,o.kt)("admonition",{title:"Opening the VS Code Command Palette",type:"note"},(0,o.kt)(b,{mdxType:"Tabs"},(0,o.kt)(v,{value:"apple",label:"Mac",mdxType:"TabItem"},(0,o.kt)("kbd",null,"\u2318")," + ",(0,o.kt)("kbd",null,"Shift")," + ",(0,o.kt)("kbd",null,"P")),(0,o.kt)(v,{value:"windows_linux",label:"Windows + Linux",mdxType:"TabItem"},(0,o.kt)("kbd",null,"Ctrl")," + ",(0,o.kt)("kbd",null,"Shift")," + ",(0,o.kt)("kbd",null,"P")))),(0,o.kt)("h2",{id:"command-categories"},"Command Categories"),(0,o.kt)("p",null,"VS Code allows to categorize commands in order to prefix them in the Command Palette. The following categories of commands are available."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SOAR"),(0,o.kt)("li",{parentName:"ul"},"SOAR Environments"),(0,o.kt)("li",{parentName:"ul"},"SOAR Apps"),(0,o.kt)("li",{parentName:"ul"},"SOAR Action Runs"),(0,o.kt)("li",{parentName:"ul"},"SOAR Playbook Runs"),(0,o.kt)("li",{parentName:"ul"},"SOAR Artifacts"),(0,o.kt)("li",{parentName:"ul"},"SOAR Assets"),(0,o.kt)("li",{parentName:"ul"},"SOAR Containers"),(0,o.kt)("li",{parentName:"ul"},"SOAR Notes"),(0,o.kt)("li",{parentName:"ul"},"SOAR Vault Files")))}C.isMDXComponent=!0},4734:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/soar_commands-d7d86ea1fe3fb693dcfbe552ec8b15d4.png"}}]);