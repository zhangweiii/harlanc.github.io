"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[898],{5680:(t,e,n)=>{n.d(e,{xA:()=>p,yg:()=>f});var r=n(6540);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),h=i,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7111:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>m,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(5680),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&p(t,n,e[n]);if(s)for(var n of s(e))l.call(e,n)&&p(t,n,e[n]);return t},d=(t,e)=>a(t,o(e)),h=(t,e)=>{var n={};for(var r in t)c.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&s)for(var r of s(t))e.indexOf(r)<0&&l.call(t,r)&&(n[r]=t[r]);return n};const f={sidebar_position:1},m="Introduction for Authentication Algorithms",y={unversionedId:"docs/authentication/introduction",id:"docs/authentication/introduction",title:"Introduction for Authentication Algorithms",description:"Xiu has provided some Authentication algorithms, including Simple Authentication, MD5 Authentication, and User-defined Authentication. Refer to the configuration .",source:"@site/docs/docs/authentication/introduction.md",sourceDirName:"docs/authentication",slug:"/docs/authentication/introduction",permalink:"/v0.12.4/docs/authentication/introduction",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/dev/docs/docs/authentication/introduction.md",tags:[],version:"current",lastUpdatedAt:1710497140,formattedLastUpdatedAt:"Mar 15, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Authentication",permalink:"/v0.12.4/docs/authentication/"},next:{title:"HTTP Callback",permalink:"/v0.12.4/docs/httpcallback/"}},g={},b=[{value:"Simple Authentication",id:"simple-authentication",level:2},{value:"MD5 Authentication",id:"md5-authentication",level:2},{value:"User-defined Authentication",id:"user-defined-authentication",level:2}],v={toc:b},w="wrapper";function O(t){var e=t,{components:n}=e,i=h(e,["components"]);return(0,r.yg)(w,d(u(u({},v),i),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"introduction-for-authentication-algorithms"}),"Introduction for Authentication Algorithms"),(0,r.yg)("p",null,"Xiu has provided some Authentication algorithms, including Simple Authentication, MD5 Authentication, and User-defined Authentication. Refer to the ",(0,r.yg)("a",u({parentName:"p"},{href:"../configurations/config-file#authentication"}),"configuration")," ."),(0,r.yg)("h2",u({},{id:"simple-authentication"}),"Simple Authentication"),(0,r.yg)("p",null,"After configuring the password, use it as a token in the push/pull stream address, for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'[authsecret]\n# used for simple authentication\npassword = "thisisthepassword"\n')),(0,r.yg)("p",null,"The authenticated push/pull stream address is:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"rtmp://127.0.0.1:1935/live/test?token=thisisthepassword\nrtsp://127.0.0.1:5544/live/test?token=thisisthepassword\nhttp://127.0.0.1:8080/live/test.flv?token=thisisthepassword\nhttp://127.0.0.1:8081/live/test/test.m3u8?token=thisisthepassword\nhttp://127.0.0.1:8900/whip?app=live&stream=test&token=thisisthepassword\nhttp://127.0.0.1:8900/whep?app=live&stream=test&token=thisisthepassword\n")),(0,r.yg)("h2",u({},{id:"md5-authentication"}),"MD5 Authentication"),(0,r.yg)("p",null,"Firstly, configure the key:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'[authsecret]\n# used for md5 authentication.  \nkey = "md5string"\n')),(0,r.yg)("p",null,"the authentication algorithms is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"token={md5({key}{stream_name})}\n")),(0,r.yg)("p",null,"The push stream is as follows\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"rtmp://127.0.0.1:1935/live/test\n")),(0,r.yg)("p",null,"the stream_name is test\uff0cthe computed authentication string is\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),'md5("testmd5string") = 3af79b11816b118e497810c9fb69ee65\n')),(0,r.yg)("p",null,"The authenticated push stream address is:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"rtmp://127.0.0.1:1935/live/test?token=3af79b11816b118e497810c9fb69ee65\n")),(0,r.yg)("admonition",u({},{type:"note"}),(0,r.yg)("p",{parentName:"admonition"},"Online MD5 Calculation Tool\uff1a",(0,r.yg)("a",u({parentName:"p"},{href:"https://www.md5hashgenerator.com/"}),"https://www.md5hashgenerator.com/"))),(0,r.yg)("h2",u({},{id:"user-defined-authentication"}),"User-defined Authentication"),(0,r.yg)("p",null,'Users can use the httpnotify+kickoff client method for authentication, which means informing the business side of the push/pull stream events. The business side extracts the token and relevant parameters for verifying the push/pull stream address. If the verification fails, the kickoff client is called to kick out the push/pull stream party."'),(0,r.yg)("p",null,"About HTTP-Notify refer to ",(0,r.yg)("a",u({parentName:"p"},{href:"../httpcallback/http-callback"}),"http-notify"),"."),(0,r.yg)("p",null,"About Kickoff client refer to ",(0,r.yg)("a",u({parentName:"p"},{href:"../httpapi/http-api"}),"http-api"),"."))}O.isMDXComponent=!0}}]);