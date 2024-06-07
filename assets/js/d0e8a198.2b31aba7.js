"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[369],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(s,".").concat(f)]||u[f]||h[f]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>T,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var o=n(5680),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},h=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n};const d={sidebar_position:2},g="Configuration File",m={unversionedId:"docs/configurations/config-file",id:"docs/configurations/config-file",title:"Configuration File",description:"Next, explain the configuration items of configuration file as follows:",source:"@site/docs/docs/configurations/config-file.md",sourceDirName:"docs/configurations",slug:"/docs/configurations/config-file",permalink:"/docs/configurations/config-file",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/main/docs/docs/configurations/config-file.md",tags:[],version:"current",lastUpdatedAt:1717765048,formattedLastUpdatedAt:"Jun 7, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/configurations/cli"},next:{title:"Authentication",permalink:"/docs/authentication/"}},y={},b=[{value:"RTMP",id:"rtmp",level:2},{value:"RTSP",id:"rtsp",level:2},{value:"WEBRTC(WHIP/WHEP)",id:"webrtcwhipwhep",level:2},{value:"HTTP-FLV",id:"http-flv",level:2},{value:"HLS",id:"hls",level:2},{value:"Log Configurations",id:"log-configurations",level:2},{value:"Authentication",id:"authentication",level:2},{value:"HTTP-API",id:"http-api",level:2},{value:"HTTP Notify",id:"http-notify",level:2}],v={toc:b},P="wrapper";function T(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,o.yg)(P,h(u(u({},v),r),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",u({},{id:"configuration-file"}),"Configuration File"),(0,o.yg)("p",null,"Next, explain the configuration items of configuration file as follows:"),(0,o.yg)("h2",u({},{id:"rtmp"}),"RTMP"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'#live server configurations\n##########################\n#   RTMP configurations  #\n##########################\n[rtmp]\nenabled = true #enable the RTMP media protocol or not\nport = 1935 #specify the RTMP protocol listening port.\ngop_num = 0 #specify the cache GOP count for instant playback.\uff08may increase latency\uff09\n# pull streams from other server node.\n[rtmp.pull]\nenabled = false # enable static pulling or not, if the stream is not available locally, fetch it from the configured server.\naddress = "192.168.0.1" # the server address to pull from\nport = 1935 # the server port to pull from\n# push streams to other server node.\n[[rtmp.push]]\nenabled = false  # enable static repushing. After receiving RTMP streams on the local machine, repush them to other nodes. Supports configuring multiple remote nodes\naddress = "localhost" # the server address to repush to\nport = 1936 # the server port to repush to\n[[rtmp.push]]\nenabled = false\naddress = "192.168.0.3"\nport = 1935\n[rtmp.auth] \npull_enabled = true # enable pulling stream authentication or not.\npush_enabled = true  # enable pushing stream authentication or not.\nalgorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).\n')),(0,o.yg)("h2",u({},{id:"rtsp"}),"RTSP"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'##########################\n#    RTSP configurations  #\n##########################\n[rtsp]\nenabled = false  # enable the RTSP media protocol or not\nport = 445  # specify the RTSP protocol listening port.\n[rtsp.auth] \npull_enabled = true # enable pulling stream authentication or not.\npush_enabled = true  # enable pushing stream authentication or not.\nalgorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).\n')),(0,o.yg)("h2",u({},{id:"webrtcwhipwhep"}),"WEBRTC(WHIP/WHEP)"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'##########################\n#    WebRTC configurations  #\n##########################\n[webrtc]\nenabled = false  # enable the WHIP/WHEP media protocol or not\nport = 8083  # specify the WHIP/WHEP protocol listening port.\n[webrtc.auth] \npull_enabled = true  # enable pulling stream authentication or not.\npush_enabled = true   # enable pushing stream authentication or not.\nalgorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).\n')),(0,o.yg)("h2",u({},{id:"http-flv"}),"HTTP-FLV"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'##########################\n# HTTPFLV configurations #\n##########################\n[httpflv]\nenabled = false  # enable the HTTP-FLV media protocol or not\nport = 8081  # specify the HTTP-FLV protocol listening port.\n[httpflv.auth] \npull_enabled = true # enable pulling stream authentication or not.\nalgorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).\n')),(0,o.yg)("h2",u({},{id:"hls"}),"HLS"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'##########################\n#    HLS configurations  #\n##########################\n[hls]\nenabled = false  # enable the HLS media protocol or not\nport = 8080  # specify the HLS protocol listening port.\nneed_record = true # enable HLS record or not\n[hls.auth] \npull_enabled = true # enable pulling stream authentication or not.\nalgorithm = "simple" # set authentication method, support simple authentication and MD5 authentication (fill in either "simple" or "md5" separately).\n')),(0,o.yg)("h2",u({},{id:"log-configurations"}),"Log Configurations"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'##########################\n#   LOG configurations   #\n##########################\n[log]\nlevel = "info" # set log level\n[log.file]\n# write log to file or not\uff08Writing logs to file or console cannot be satisfied at the same time\uff09.\nenabled = false # enable logging to log files or not.\nrotate = "hour" #[day,hour,minute] \uff0cset rotate level\npath = "./logs" # set log path\n')),(0,o.yg)("h2",u({},{id:"authentication"}),"Authentication"),(0,o.yg)("p",null,"The configurations of authentication are divided into two parts. Below are some common configurations, and the authentication for each media protocol can be configured separately, including whether authentication for pushing and pulling streams is enabled and the authentication algorithm\u3002",(0,o.yg)("a",u({parentName:"p"},{href:"/docs/authentication/introduction"}),"Authentication Algorithm Introduction")),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'[authsecret]\n# used for md5 authentication.  \nkey = "123"\n# used for simple authentication\npassword = "456"\n')),(0,o.yg)("h2",u({},{id:"http-api"}),"HTTP-API"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),"############################\n# HTTP-API configurations  #\n############################\n[httpapi]\nport = 8000 #specify the HTTP-API service listening port\n")),(0,o.yg)("h2",u({},{id:"http-notify"}),"HTTP Notify"),(0,o.yg)("p",null,"Notify the business users of certain events happening:"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{className:"language-toml"}),'[httpnotify]\nenabled = true # enable HTTP notify or not\non_publish = "http://localhost:3001/on_publish" # this HTTP interface will be called after publishing stream successfully.\non_unpublish = "http://localhost:3001/on_unpuslish"  # this HTTP interface will be called upon the end of streaming.\non_play = "http://localhost:3001/on_play" # this HTTP interface will be called upon the successful stream pulling\non_stop = "http://localhost:3001/on_stop" # this HTTP interface will be called upon the end of streaming pulling.\n')))}T.isMDXComponent=!0}}]);