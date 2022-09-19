"use strict";(self.webpackChunkvscode_extension_splunk_soar_docs=self.webpackChunkvscode_extension_splunk_soar_docs||[]).push([[829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8},o="Releases",s={unversionedId:"development-guide/release",id:"development-guide/release",title:"Releases",description:"This page collects information on how a new version of the extension is published and what steps need to be taken.",source:"@site/docs/development-guide/release.md",sourceDirName:"development-guide",slug:"/development-guide/release",permalink:"/vscode-extension-splunk-soar/development-guide/release",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"categorySidebar",previous:{title:"Documentation",permalink:"/vscode-extension-splunk-soar/development-guide/documentation"}},l={},p=[{value:"Release Setup",id:"release-setup",level:2},{value:"Creating a Release",id:"creating-a-release",level:2},{value:"Ensure Build passes",id:"ensure-build-passes",level:3},{value:"Increment Version Number",id:"increment-version-number",level:3},{value:"Tag the commit",id:"tag-the-commit",level:3},{value:"Push the tag",id:"push-the-tag",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"releases"},"Releases"),(0,a.kt)("p",null,"This page collects information on how a new version of the extension is published and what steps need to be taken."),(0,a.kt)("h2",{id:"release-setup"},"Release Setup"),(0,a.kt)("p",null,"Following ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/working-with-extensions/publishing-extension"},"Publishing Extensions")," the app is packaged and published to the Azure Marketplace using the ",(0,a.kt)("inlineCode",{parentName:"p"},"vsce")," command-line utility."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vsce")," is added to the extension as a development dependency."),(0,a.kt)("h2",{id:"creating-a-release"},"Creating a Release"),(0,a.kt)("p",null,"Release candidates are created in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/splunk/vscode-extension-splunk-soar/actions/workflows/ci.yml"},"Github Actions CI workflow"),". As part of this workflow, a new Github release is created and the version is uploaded to the Azure Marketplace."),(0,a.kt)("h3",{id:"ensure-build-passes"},"Ensure Build passes"),(0,a.kt)("p",null,"Ensure the build passes by packaging locally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vsce package\n")),(0,a.kt)("h3",{id:"increment-version-number"},"Increment Version Number"),(0,a.kt)("p",null,"Ensure the version number is incremented in the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,a.kt)("h3",{id:"tag-the-commit"},"Tag the commit"),(0,a.kt)("p",null,"Tag the commit with the new version to-be-released following semantic versioning. See an example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git tag v0.1.0 \n")),(0,a.kt)("h3",{id:"push-the-tag"},"Push the tag"),(0,a.kt)("p",null,"Push the new tag. This will kick of a new release pipeline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push origin main --tags\n")))}c.isMDXComponent=!0}}]);