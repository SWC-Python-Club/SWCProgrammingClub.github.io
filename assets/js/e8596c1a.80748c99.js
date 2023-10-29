"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[858],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(o),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||l;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3111:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const l={title:"Cooldog's Love Letter",position:2},i="Cooldog's Love Letter",a={unversionedId:"archive/weekly-challenges/cooldogs-love-letter",id:"archive/weekly-challenges/cooldogs-love-letter",title:"Cooldog's Love Letter",description:"Cooldog has written a love letter to his favorite dog in the entire world, Dankdog.",source:"@site/docs/archive/weekly-challenges/cooldogs-love-letter.md",sourceDirName:"archive/weekly-challenges",slug:"/archive/weekly-challenges/cooldogs-love-letter",permalink:"/docs/archive/weekly-challenges/cooldogs-love-letter",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/archive/weekly-challenges/cooldogs-love-letter.md",tags:[],version:"current",frontMatter:{title:"Cooldog's Love Letter",position:2},sidebar:"tutorialSidebar",previous:{title:"Childish Calendar Condition",permalink:"/docs/archive/weekly-challenges/childish-calendar-condition"},next:{title:"Vincent's Various Vacations",permalink:"/docs/archive/weekly-challenges/vincents-various-vacations"}},c={},s=[{value:"Input Specification",id:"input-specification",level:2},{value:"Output Specification",id:"output-specification",level:2},{value:"Sample Data",id:"sample-data",level:2},{value:"Sample Input 1",id:"sample-input-1",level:3},{value:"Sample Output 1",id:"sample-output-1",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cooldogs-love-letter"},"Cooldog's Love Letter"),(0,r.kt)("p",null,"Cooldog has written a love letter to his favorite dog in the entire world, Dankdog.\nHe wishes to ask her out for Valentine's Day."),(0,r.kt)("p",null,"However, Cooldog's friend Trolldog has committed a nefarious amount of tomfoolery and has inserted a number of seemingly random symbols into the love letter, much to Cooldog's dismay."),(0,r.kt)("p",null,"After examining the seemingly ruined letter, Cooldog observes to his delight that there is a pattern: Trolldog only ever inserts the characters ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),". Thus, by removing all occurrences of these characters, he can obtain his original letter."),(0,r.kt)("p",null,"Because Cooldog is a busy student (and is behind on homework), he does not have the time to edit the letter himself. Help Cooldog out by outputting the original content of the letter."),(0,r.kt)("h2",{id:"input-specification"},"Input Specification"),(0,r.kt)("p",null,"The input is one line containing the vandalized love letter, which consists of alphabetic characters in addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),"."),(0,r.kt)("h2",{id:"output-specification"},"Output Specification"),(0,r.kt)("p",null,"Output one line containing the original content of the letter after removing Trolldog's insertions."),(0,r.kt)("h2",{id:"sample-data"},"Sample Data"),(0,r.kt)("h3",{id:"sample-input-1"},"Sample Input 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"De@ar Dank<>>d@og, I ><love you s@@o much!> You m@ake me <so ha>ppy every t@ime I see your beautif<>ul smi@l<>><@<>>@><e. I re@<ally enj<><oy ta@lki<>ng t<o you on Dogcord and y<@ou h<a><ve s>uch a g@o>ld<e>>>n sense of hum<our. W<>ill you >@<go out with m@><>e?\n")),(0,r.kt)("h3",{id:"sample-output-1"},"Sample Output 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dear Dankdog, I love you so much! You make me so happy every time I see your beautiful smile. I really enjoy talking to you on Dogcord and you have such a golden sense of humour. Will you go out with me?\n")))}d.isMDXComponent=!0}}]);