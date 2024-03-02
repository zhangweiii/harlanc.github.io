"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[299],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var n=r(5680),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},g=(e,t)=>l(e,o(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_position:2},y="Quick Start",f={unversionedId:"docs/getting-started/setup/README",id:"docs/getting-started/setup/README",title:"Quick Start",description:"Install and Run",source:"@site/docs/docs/getting-started/setup/README.mdx",sourceDirName:"docs/getting-started/setup",slug:"/docs/getting-started/setup/",permalink:"/v0.12.4/docs/getting-started/setup/",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/dev/docs/docs/getting-started/setup/README.mdx",tags:[],version:"current",lastUpdatedAt:1709374513,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/v0.12.4/docs/getting-started/prerequisites"},next:{title:"Configurations",permalink:"/v0.12.4/docs/configurations/"}},h={},b=[{value:"Install and Run",id:"install-and-run",level:2},{value:"Using binary files directly",id:"using-binary-files-directly",level:3},{value:"Install with Docker image",id:"install-with-docker-image",level:3},{value:"Install with cargo",id:"install-with-cargo",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Clone Xiu",id:"clone-xiu",level:4},{value:"Compile",id:"compile",level:4},{value:"Run",id:"run",level:4}],v={toc:b},w="wrapper";function k(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.yg)(w,g(u(u({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"quick-start"}),"Quick Start"),(0,n.yg)("h2",u({},{id:"install-and-run"}),"Install and Run"),(0,n.yg)("p",null,"There are several ways to install xiu:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Using binary files directly"),(0,n.yg)("li",{parentName:"ul"},"Install with Docker image"),(0,n.yg)("li",{parentName:"ul"},"Install with cargo"),(0,n.yg)("li",{parentName:"ul"},"Build from source")),(0,n.yg)("h3",u({},{id:"using-binary-files-directly"}),"Using binary files directly"),(0,n.yg)("p",null,"Xiu compiles and generates binary files for common platforms in each release, which are placed on the GitHub release page. These files can be run directly on the corresponding platforms. Download Link: ",(0,n.yg)("a",u({parentName:"p"},{href:"https://github.com/harlanc/xiu/releases/tag/v0.12.4"}),"v0.12.4"),"."),(0,n.yg)("h3",u({},{id:"install-with-docker-image"}),"Install with Docker image"),(0,n.yg)("p",null,"For each release, xiu also builds Docker images for common platforms, and the download links: ",(0,n.yg)("a",u({parentName:"p"},{href:"https://hub.docker.com/repository/docker/harlancn/xiu/tags?page=1&ordering=last_updated"}),"Docker Image Download"),"."),(0,n.yg)("p",null,"Use the follow command to pull the docker image and run \uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"docker run -d -it --net=host --name xiu --privileged=true  harlancn/xiu:latest /app/start.sh /app/config.toml \n")),(0,n.yg)("p",null,"After the service starts, log files will be saved to the following directory defaultly:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"/app/logs\n")),(0,n.yg)("p",null,"You can mount this folder to the host machine for easier viewing logs. If you need , use the following command (replace $your_own_local_full_path with your own directory):"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"docker run -d -it --net=host --name xiu --privileged=true -v $your_own_local_full_path:/app/logs  harlancn/xiu:latest /app/start.sh /app/config.toml \n")),(0,n.yg)("p",null,"And if you need to modify the configurations, enter the Docker container, edit config.toml, and restart Docker for the changes to take effect. To enter the Docker container:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"docker exec -it xiu bash\n")),(0,n.yg)("p",null,"Use the following command to restart Docker :"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"docker restart xiu\n")),(0,n.yg)("h3",u({},{id:"install-with-cargo"}),"Install with cargo"),(0,n.yg)("p",null,"Issue the following command to install xiu:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"cargo install xiu\n")),(0,n.yg)("p",null,"Issue the following command to view help information:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"xiu -h\n")),(0,n.yg)("p",null,"Print the following information:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"A secure and easy to use live media server, hope you love it!!!\n\nUsage: xiu [OPTIONS] \n\nOptions:\n   -c, --config <path>   Specify the xiu server configuration file path.\n   -r, --rtmp <port>     Specify the RTMP listening port(e.g.:1935).\n   -t, --rtsp <port>     Specify the rtsp listening port.(e.g.:554).\n   -w, --webrtc <port>   Specify the whip/whep listening port.(e.g.:8900).\n   -f, --httpflv <port>  Specify the HTTP-FLV listening port(e.g.:8080).\n   -s, --hls <port>      Specify the HLS listening port(e.g.:8081).\n   -l, --log <level>     Specify the log level. [possible values: trace, debug, info, warn, error, debug]\n   -h, --help            Print help\n   -V, --version         Print version\n")),(0,n.yg)("h3",u({},{id:"build-from-source"}),"Build from source"),(0,n.yg)("h4",u({},{id:"clone-xiu"}),"Clone Xiu"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"git clone https://github.com/harlanc/xiu.git\n")),(0,n.yg)("p",null," checkout the latest code\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"git checkout tags/<tag_name> -b <branch_name>\n")),(0,n.yg)("h4",u({},{id:"compile"}),"Compile"),(0,n.yg)("p",null,"Currently, the master branch uses locally referenced project files by default and can be compiled directly:"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"make build\n")),(0,n.yg)("p",null,"or"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"cargo build\n")),(0,n.yg)("admonition",u({},{type:"note"}),(0,n.yg)("p",{parentName:"admonition"},"For the convenience of compilation, the cargo-related compilation commands are encapsulated into makeflie, and the locally referenced project files and online project files are backed up."),(0,n.yg)("p",{parentName:"admonition"},"Issue the following command to apply the local project files:"),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"make local && make build\n"))),(0,n.yg)("h4",u({},{id:"run"}),"Run"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"cd ./xiu/target/release or ./xiu/target/debug\n./xiu -h\n")))}k.isMDXComponent=!0}}]);