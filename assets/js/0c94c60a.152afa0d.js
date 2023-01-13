"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[6],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>N});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var r=n.createContext({}),l=function(a){var e=n.useContext(r),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(r.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,r=a.parentName,o=i(a,["components","mdxType","originalType","parentName"]),h=l(t),N=s,k=h["".concat(r,".").concat(N)]||h[N]||c[N]||m;return t?n.createElement(k,p(p({ref:e},o),{},{components:t})):n.createElement(k,p({ref:e},o))}));function N(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=h;var i={};for(var r in e)hasOwnProperty.call(e,r)&&(i[r]=e[r]);i.originalType=a,i.mdxType="string"==typeof a?a:s,p[1]=i;for(var l=2;l<m;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1534:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>i,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const m={title:"Vincent's Various Vacations",position:3},p="Vincent's Various Vacations",i={unversionedId:"weekly-challenges/vincents-various-vacations",id:"weekly-challenges/vincents-various-vacations",title:"Vincent's Various Vacations",description:"Vincent has recently retired from the position of Supreme Leader of the Bulldog Computer Club after 80 long years of hard work and dedication.",source:"@site/docs/weekly-challenges/vincents-various-vacations.md",sourceDirName:"weekly-challenges",slug:"/weekly-challenges/vincents-various-vacations",permalink:"/docs/weekly-challenges/vincents-various-vacations",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/weekly-challenges/vincents-various-vacations.md",tags:[],version:"current",frontMatter:{title:"Vincent's Various Vacations",position:3},sidebar:"tutorialSidebar",previous:{title:"Cooldog's Love Letter",permalink:"/docs/weekly-challenges/cooldogs-love-letter"},next:{title:"Introduction",permalink:"/docs/archive/gamedev/introduction"}},r={},l=[{value:"Input Specification",id:"input-specification",level:2},{value:"Output Specification",id:"output-specification",level:2},{value:"Sample Data",id:"sample-data",level:2},{value:"Sample Input 1",id:"sample-input-1",level:3},{value:"Sample Output 1",id:"sample-output-1",level:3},{value:"Explanation for Sample Output 1",id:"explanation-for-sample-output-1",level:3},{value:"Sample Input 2",id:"sample-input-2",level:3},{value:"Sample Output 2",id:"sample-output-2",level:3},{value:"Explanation for Sample Output 2",id:"explanation-for-sample-output-2",level:3}],o={toc:l};function c(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"vincents-various-vacations"},"Vincent's Various Vacations"),(0,s.kt)("p",null,"Vincent has recently retired from the position of Supreme Leader of the Bulldog Computer Club after 80 long years of hard work and dedication."),(0,s.kt)("p",null,"During this time, he has accumulated a large amount of cash, and now wishes to spend his remaining days traveling.\nEvery month, he plans to visit a number of cities around the world."),(0,s.kt)("p",null,"As he wishes to visit as many cities as he can, Vincent does not want to visit any city more than once in a single month. (Visiting the same city in different months is still acceptable.)"),(0,s.kt)("p",null,"However, Vincent is growing forgetful with old age, and has therefore enlisted your assistance.\nGiven his travel plan for each month, help Vincent determine the total number of cities he visits more than once in a single month."),(0,s.kt)("h2",{id:"input-specification"},"Input Specification"),(0,s.kt)("p",null,"The first line contains a single integer ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," indicating the number of months Vincent will travel for."),(0,s.kt)("p",null,"Each of the next ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," lines contain an integer ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"M"),(0,s.kt)("mi",{parentName:"msub"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M_i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),", corresponding to the number of cities Vincent visits during month ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),", followed by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"M"),(0,s.kt)("mi",{parentName:"msub"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M_i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," spaced-separated city names.\nCity names will be no longer than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"20")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"20")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"20")))))," characters in length and will consist of lowercase alphabet characters."),(0,s.kt)("h2",{id:"output-specification"},"Output Specification"),(0,s.kt)("p",null,"The output will be one line, containing an integer ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"K")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"K")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"))))),", which is the total number of cities he visits more than once in a single month."),(0,s.kt)("h2",{id:"sample-data"},"Sample Data"),(0,s.kt)("h3",{id:"sample-input-1"},"Sample Input 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"2\n2 vancouver beijing\n3 washington vancouver washington\n")),(0,s.kt)("h3",{id:"sample-output-1"},"Sample Output 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1\n")),(0,s.kt)("h3",{id:"explanation-for-sample-output-1"},"Explanation for Sample Output 1"),(0,s.kt)("p",null,"In the first month, Vincent visits ",(0,s.kt)("inlineCode",{parentName:"p"},"vancouver")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"beijing"),", which are two different cities."),(0,s.kt)("p",null,"In the second month, Vincent visits ",(0,s.kt)("inlineCode",{parentName:"p"},"washington"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"vancouver"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"washington")," again; ",(0,s.kt)("inlineCode",{parentName:"p"},"washington")," is duplicated."),(0,s.kt)("p",null,"Note that though Vincent visits ",(0,s.kt)("inlineCode",{parentName:"p"},"vancouver")," in both month ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," and month ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),", he does not visit it more than once in a single month."),(0,s.kt)("h3",{id:"sample-input-2"},"Sample Input 2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"4\n5 montreal ottawa montreal edmonton montreal\n1 calgary\n10 cairo dallas madrid guelph london dallas chicago barcelona dallas barcelona\n2 montreal calgary\n")),(0,s.kt)("h3",{id:"sample-output-2"},"Sample Output 2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"3\n")),(0,s.kt)("h3",{id:"explanation-for-sample-output-2"},"Explanation for Sample Output 2"),(0,s.kt)("p",null,"Vincent visits ",(0,s.kt)("inlineCode",{parentName:"p"},"montreal")," twice in the first month, ",(0,s.kt)("inlineCode",{parentName:"p"},"dallas")," thrice in the third month, and ",(0,s.kt)("inlineCode",{parentName:"p"},"barcelona")," twice in the third month as well."))}c.isMDXComponent=!0}}]);