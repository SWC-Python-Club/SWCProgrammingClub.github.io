"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={title:"Introduction",sidebar_position:1},o=void 0,l={unversionedId:"archive/linux/introduction",id:"archive/linux/introduction",title:"Introduction",description:"The Linux usage topic is currently being organized by Andrei and is purely online at the moment.",source:"@site/docs/archive/linux/introduction.md",sourceDirName:"archive/linux",slug:"/archive/linux/introduction",permalink:"/docs/archive/linux/introduction",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/archive/linux/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro To Unity",permalink:"/docs/archive/gamedev/intro-to-unity"},next:{title:"What is Linux?",permalink:"/docs/archive/linux/whatislinux"}},u={},s=[{value:"Topic Outline",id:"topic-outline",level:2},{value:"Planned content",id:"planned-content",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Linux usage")," topic is currently being organized by Andrei and is purely online at the moment.\nRelated content will be posted here, on the website."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you ever get stuck on something or need help resolving an issue, you can always post your question on the #linux channel on our discord server.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"While previous programming knowledge is not needed, it's recommended that you understand some basic programming concepts (what are variables, what if statements are, what a function is).")),(0,a.kt)("h2",{id:"topic-outline"},"Topic Outline"),(0,a.kt)("p",null,"Hi! I'm Andrei. I've been using Linux and similar operating systems for the past two years, so in this topic I want to casually explain and present different aspects of Linux and Unix-like operating systems. This topic is very different from the others, mostly focusing on computer history and general computer usage, although I will be organizing a significant \"unit\" that will contain very interesting programming concepts. This tutorial series is meant to guide completely inexperienced people from the basics of the command line to the usage of power user operating systems such as Arch Linux. I will try to post a tutorial discussing different aspects of Unix operating systems at least every two weeks."),(0,a.kt)("p",null,"If you have any questions about this content or just want to contact me, ping me in #linux on Discord or send me an email at ",(0,a.kt)("a",{parentName:"p",href:"mailto:andrei@sdf.org"},"andrei@sdf.org")),(0,a.kt)("h3",{id:"planned-content"},"Planned content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is GNU/Linux?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"What is the difference between Linux, Unix, and GNU?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"History of Unix"))))),(0,a.kt)("li",{parentName:"ul"},"Installing Debian"),(0,a.kt)("li",{parentName:"ul"},"The standard Unix file hierarchy"),(0,a.kt)("li",{parentName:"ul"},"What is a package manager?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using apt(1) and dpkg(1) to install packages on Debian"))),(0,a.kt)("li",{parentName:"ul"},"What is an operating system shell?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Simple shell scripting, pipes, job control, output redirection"),(0,a.kt)("li",{parentName:"ul"},"Shell builtins (echo,cd,etc)"))),(0,a.kt)("li",{parentName:"ul"},"Using standard Unix/GNU command line utilities",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ls(1)"),(0,a.kt)("li",{parentName:"ul"},"man(1)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Man pages"))),(0,a.kt)("li",{parentName:"ul"},"cp(1)"),(0,a.kt)("li",{parentName:"ul"},"mkdir(1)"),(0,a.kt)("li",{parentName:"ul"},"rm(1)"),(0,a.kt)("li",{parentName:"ul"},"top(1)"),(0,a.kt)("li",{parentName:"ul"},"ln(1)"),(0,a.kt)("li",{parentName:"ul"},"mount(1)"),(0,a.kt)("li",{parentName:"ul"},"vi(1)"))),(0,a.kt)("li",{parentName:"ul"},"Installing Arch Linux",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using pacman(1)"))),(0,a.kt)("li",{parentName:"ul"},"The X windowing system",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Wayland"))),(0,a.kt)("li",{parentName:"ul"},"Introduction to the C programming language",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pointers, Structs, implementing simple data structures in C",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dynamic Array"),(0,a.kt)("li",{parentName:"ul"},"Hash Map"),(0,a.kt)("li",{parentName:"ul"},"Linked List"))))),(0,a.kt)("li",{parentName:"ul"},"Basic systems programming in a Unix environment",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"suid, guid, stdlib and stdio functions"),(0,a.kt)("li",{parentName:"ul"},"file i/o using C"),(0,a.kt)("li",{parentName:"ul"},"using GCC"))),(0,a.kt)("li",{parentName:"ul"},"Gentoo (Maybe)"),(0,a.kt)("li",{parentName:"ul"},"Introduction to other Unixes (Maybe)")))}m.isMDXComponent=!0}}]);