"use strict";(self.webpackChunkbulldog_computer_club_website=self.webpackChunkbulldog_computer_club_website||[]).push([[594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=i(a),k=s,h=c["".concat(m,".").concat(k)]||c[k]||u[k]||r;return a?n.createElement(h,p(p({ref:t},o),{},{components:a})):n.createElement(h,p({ref:t},o))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,p=new Array(r);p[0]=k;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:s,p[1]=l;for(var i=2;i<r;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=a(7462),s=(a(7294),a(3905));const r={title:"Lists, Stacks, and Queues",sidebar_position:7},p=void 0,l={unversionedId:"archive/ccc/lists-stacks-queues",id:"archive/ccc/lists-stacks-queues",title:"Lists, Stacks, and Queues",description:"An overview of three common data structures.",source:"@site/docs/archive/ccc/lists-stacks-queues.md",sourceDirName:"archive/ccc",slug:"/archive/ccc/lists-stacks-queues",permalink:"/docs/archive/ccc/lists-stacks-queues",draft:!1,editUrl:"https://github.com/bulldog-computer-club/bulldog-computer-club.github.io/edit/main/docs/archive/ccc/lists-stacks-queues.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Lists, Stacks, and Queues",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Algorithmic Analysis",permalink:"/docs/archive/ccc/algorithmic-analysis"},next:{title:"Two-Pointers on Sorted Sequences",permalink:"/docs/archive/ccc/two-pointers"}},m={},i=[{value:"Lists",id:"lists",level:2},{value:"List Usage Example",id:"list-usage-example",level:3},{value:"Stacks",id:"stacks",level:2},{value:"Exercise 1",id:"exercise-1",level:3},{value:"Exercise 2",id:"exercise-2",level:3},{value:"Queues",id:"queues",level:2}],o={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An overview of three common data structures."),(0,s.kt)("h2",{id:"lists"},"Lists"),(0,s.kt)("p",null,"Lists are ordered collections of values. Accessing and writing to elements by their position is very fast (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"), as is appending elements (amortized ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"). However, deleting elements takes more time -- to delete the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"k"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"h")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k^{th}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h")))))))))))))," element from the end, ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k - 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," elements need to be moved."),(0,s.kt)("p",null,"For example, to delete an element from the beginning of a list, all the elements have to be moved down.\nConsider removing the ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5]")," -- the ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," has to be shifted down to the place that the ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," used to be, the ",(0,s.kt)("inlineCode",{parentName:"p"},"3")," has to be shifted down to the place that the ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," used to be, and so on."),(0,s.kt)("p",null,"If deletion from the beginning of the list is an operation you plan on performing often, lists are likely ",(0,s.kt)("strong",{parentName:"p"},"the wrong collection type"),". However, in most other cases lists should be the first collection type you reach for as they are extremely versatile."),(0,s.kt)("h3",{id:"list-usage-example"},"List Usage Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'fruits = ["banana", "pineapple", "apple"] # declare a list using []\nfruits.append("grape") # add an element to the back using append()\n# now fruits = ["banana", "pineapple", "apple", "grape"]\n\nlast_fruit = fruits.pop() # remove and return the last element in the list; in this case last_fruit = "grape"\n# now fruits = ["banana", "pineapple", "apple"] again\n\nprint(fruits[0]) # use [] to index into a list; 0 refers to the first element, 1 to the second element, etc.\nprint(fruits[-1]) # negative indices are supported as well: -N refers to the Nth element from the back of the list: -1 refers to the last element, -2 to the second last, etc.\n\n# loop over the list using `for item in list`\nfor fruit in fruits:\n    print(fruit)\n')),(0,s.kt)("h2",{id:"stacks"},"Stacks"),(0,s.kt)("p",null,"Stacks are collections of values that allow you to ",(0,s.kt)("strong",{parentName:"p"},"retrieve and remove the last element added")," and ",(0,s.kt)("strong",{parentName:"p"},"add a new element to the end"),"."),(0,s.kt)("p",null,"In Python, a stack can be implemented efficiently via a list:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"list.append")," operation adds an element to the end;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"list[-1]")," retrieves the last element added;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"list.pop()")," removes and returns the last element addded.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"stack = []\nstack.append(1)\nstack.append(2)\nassert stack[-1] == 2 # last element added was 2\nstack.pop() # remove 2\nassert stack[-1] == 1 # now the last element is 1\n")),(0,s.kt)("h3",{id:"exercise-1"},"Exercise 1"),(0,s.kt)("p",null,'Solve the "balanced brackets" problem using a stack.'),(0,s.kt)("p",null,"More formally, given a string with round ",(0,s.kt)("inlineCode",{parentName:"p"},"()"),", curly ",(0,s.kt)("inlineCode",{parentName:"p"},"{}")," and square ",(0,s.kt)("inlineCode",{parentName:"p"},"[]")," brackets, determine whether all brackets are balanced.\nIn other words, ensure that all open brackets have a matching close bracket in the proper position."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Balanced:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"([])\n(([[{{}}]]))\n[]{}()\n[[{}]()]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Unbalanced:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[{]}\n[[[]]\n(){{})\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Solution"),(0,s.kt)("p",null,(0,s.kt)("p",null,"We can go through the string character-by-character, maintaining a stack of open brackets that we have seen. Upon seeing a close bracket,\nwe check whether the last open bracket we saw matches it. If so, pop the stack; otherwise, we know that the brackets are not balanced."),(0,s.kt)("p",null,"At the end of iteration, if the stack is not empty, the brackets are also unbalanced (as there were more open brackets than close)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'def is_balanced(s):\n    stack = []\n    for c in s:\n        if c in ("(", "[", "{"):\n            stack.append(c)\n        else:\n            if not stack:\n                return False\n            open_bracket = stack.pop()\n            if (\n                (open_bracket == "(" and c != ")") or\n                (open_bracket == "[" and c != "]") or\n                (open_bracket == "{" and c != "}")\n            ):\n                return False\n    return not stack\n\ns = input()\nprint(is_balanced(s))\n')))),(0,s.kt)("h3",{id:"exercise-2"},"Exercise 2"),(0,s.kt)("p",null,"Solve ",(0,s.kt)("a",{parentName:"p",href:"https://dmoj.ca/problem/ccc15s1"},"CCC '15 S1 - Zero that Out")," using a stack."),(0,s.kt)("h2",{id:"queues"},"Queues"),(0,s.kt)("p",null,"Queues are collections of values that allow you to ",(0,s.kt)("strong",{parentName:"p"},"retrieve and remove the first element added")," and ",(0,s.kt)("strong",{parentName:"p"},"add a new element to the end"),"."),(0,s.kt)("p",null,"They can be a bit more confusing to grasp than stacks, so here is an example to help you understand."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"queue = Queue()\nqueue.push(1) # queue = [1]\nqueue.push(2) # queue = [1, 2]\nqueue.push(3) # queue = [1, 2, 3]\nfront = queue.pop() # front = 1, queue = [2, 3]\nnext_front = queue.pop() # next_front = 2, queue = [3]\n")),(0,s.kt)("p",null,"In other words, queues support adding elements to the end and removing elements from the front."),(0,s.kt)("p",null,"Unfortunately, queues cannot be implemented efficiently using lists in Python as removing an element from the front of a list requires shifting all the elements after it forward, as discussed previously. However, in the ",(0,s.kt)("inlineCode",{parentName:"p"},"collections")," module there is a ",(0,s.kt)("inlineCode",{parentName:"p"},"deque")," class which can be used as a queue:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import collections\n\nqueue = collections.deque([1, 2, 3])\nqueue.append(4)\nqueue.append(5)\nqueue.popleft() # 1 (the first element); queue = [2, 3, 4, 5]\nqueue.popleft() # 2 (the new first element); queue = [3, 4, 5]\n")))}u.isMDXComponent=!0}}]);