"use strict";(self.webpackChunkvscode_extension_splunk_soar_docs=self.webpackChunkvscode_extension_splunk_soar_docs||[]).push([[173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,slug:"/"},a="Getting Started",s={unversionedId:"index",id:"index",title:"Getting Started",description:"This is the documentation for the Visual Studio Code Extension for Splunk SOAR. It is designed for Splunk SOAR App Developers that want to improve their development workflow. It is built",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/vscode-extension-splunk-soar/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Basics",permalink:"/vscode-extension-splunk-soar/category/basics"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"From within VS Code (recommended)",id:"from-within-vs-code-recommended",level:3},{value:"From Azure Marketplace",id:"from-azure-marketplace",level:3},{value:"From Github Releases",id:"from-github-releases",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"This is the documentation for the Visual Studio Code Extension for Splunk SOAR. It is designed for Splunk SOAR App Developers that want to improve their development workflow. It is built\nbased on our experience, building and modifying many SOAR apps."),(0,o.kt)("p",null,"The VS Code Extension for SOAR has several key features that help with App Development:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure ",(0,o.kt)("strong",{parentName:"li"},"connections to multiple SOAR environments")," from your local development environment"),(0,o.kt)("li",{parentName:"ul"},"Quickly ",(0,o.kt)("strong",{parentName:"li"},"browse SOAR objects")," such as Containers, Assets, Apps, Action Runs, Playbook Runs from within the VS Code editing environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Upload an App in seconds")," from the local workstation to the connected SOAR environment using a custom build task or custom command."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Trigger individual App Actions and entire Playbooks")," and retrieve their logs and results within the VS Code Terminal windows, allowing for a tight feedback loop during development"),(0,o.kt)("li",{parentName:"ul"},"Ability to ",(0,o.kt)("strong",{parentName:"li"},"bootstrap new Apps using an integrated App Wizard")," (experimental)")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This section will guide you on getting the extension setup in your VS Code."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://code.visualstudio.com/"},"Visual Studio Code"))," latest version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.splunk.com/en_us/products/splunk-security-orchestration-and-automation.html"},"Splunk SOAR"))," 5.3.1 or later.")),(0,o.kt)("h3",{id:"from-within-vs-code-recommended"},"From within VS Code (recommended)"),(0,o.kt)("p",null,"The VS Code Extension for Splunk SOAR can be installed as any other extension, from the ",(0,o.kt)("em",{parentName:"p"},"Extensions")," panel. You can navigate to it from your editors sidebar.\nPlease review the ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-marketplace"},"Extension Marketplace Docs")," in case of any difficulties."),(0,o.kt)("p",null,'On the Extensions panel, enter "Splunk SOAR" in the search bar and press the button for installation. After installation, your editor will ask you to reload the editor window.\nOnce the reload completes, a new Splunk SOAR extension icon should be added to your sidebar.'),(0,o.kt)("h3",{id:"from-azure-marketplace"},"From Azure Marketplace"),(0,o.kt)("p",null,"It is also possible to trigger the installation from the Extension Listing on the Azure VS Code Marketplace. Pressing the installation button should open your VS Code editor and begin the installation process."),(0,o.kt)("h3",{id:"from-github-releases"},"From Github Releases"),(0,o.kt)("p",null,"We publish ",(0,o.kt)("inlineCode",{parentName:"p"},".vsix")," files for pre-release versions on Github Releases. They can also be installed via a context menu on the ",(0,o.kt)("em",{parentName:"p"},"Extensions")," panel.\nReview ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix"},"Install from VSIX")," in case of any difficulties."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Once you have the extension installed in your VS Code editor, it would be a great time to learn what features are available. Please start with our ",(0,o.kt)("a",{parentName:"p",href:"/category/basics"},"Basics"),"."))}d.isMDXComponent=!0}}]);