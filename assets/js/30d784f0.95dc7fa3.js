(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8205],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6170:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l={unversionedId:"beatmania/game-intro",id:"beatmania/game-intro",isDocsHomePage:!1,title:"Introduction to the Game",description:"Wikipedia:",source:"@site/docs/beatmania/01-game-intro.md",sourceDirName:"beatmania",slug:"/beatmania/game-intro",permalink:"/test/docs/beatmania/game-intro",editUrl:"https://github.com/consandstuff/docs/beatmania/01-game-intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/test/docs/iidx"},next:{title:"Introduction to this guide",permalink:"/test/docs/beatmania/guide-intro"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Gameplay",id:"gameplay",children:[]},{value:"DIY Controller Design",id:"diy-controller-design",children:[]},{value:"Updates to this guide:",id:"updates-to-this-guide",children:[]},{value:"Thanks",id:"thanks",children:[]}],c={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"beatmania-iidx"},"BEATMANIA IIDX:"),(0,i.kt)("p",null,"Wikipedia:\nBeatmania IIDX is a series of rhythm video games, that was first introduced by Konami in Japan on February 26, 1999. IIDX has since spawned 29 arcade releases and 14 console releases on the Sony PlayStation 2. It is the sequel to the beatmania game series, and part of the Bemani line of music games. A PC release titled beatmania IIDX INFINITAS has been released, beginning alpha testing in September 2015, and was heavily updated to a new version in 2020."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Beatmania IIDX tasks the player with performing songs through a controller consisting of seven key buttons and a scratchable turntable. Hitting the notes with strong timing increases the score and groove gauge bar, allowing the player to finish the stage. Failing to do so depletes the gauge until it is empty, abruptly ending the song."),(0,i.kt)("p",null,"From beatmania IIDX to beatmania IIDX 4th Style, song difficulty ranged from Level 1 to Level 7. beatmania IIDX 5th Style introduced flashing Level 7s as the new top difficulty. Flashing 7s gave way to Level 8 difficulty in beatmania IIDX 10th Style, and Level 8+ was added in beatmania IIDX 11 IIDXRED. The version immediately after, beatmania IIDX 12 HAPPY SKY, introduced a new difficulty scale, from Level 1 to Level 12, which has remained the standard."),(0,i.kt)("p",null,"The controller has 7 buttons + 2 to 3 extra buttons (for START, VFX and EFFECT) and a Turntable (also known as TT)"),(0,i.kt)("h2",{id:"gameplay"},"Gameplay"),(0,i.kt)("div",{class:"video-responsive"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/xjvyHzzLZXs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h2",{id:"diy-controller-design"},"DIY Controller Design"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"controller design",src:n(1064).Z})),(0,i.kt)("h2",{id:"updates-to-this-guide"},"Updates to this guide:"),(0,i.kt)("p",null,"Last update: September 3rd, 2017"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added a turntable for this ghetto controller.")),(0,i.kt)("h2",{id:"thanks"},"Thanks"),(0,i.kt)("p",null,"Many thanks to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://sdvxdiy.github.io/"},"LEONARDOjoy original guide"),"\nFor the style of my old webpage and useful info.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User ",(0,i.kt)("strong",{parentName:"p"},"WAFU")," from the ",(0,i.kt)("strong",{parentName:"p"},"Enigma Discord")," for building the firmware for the Teensy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User ",(0,i.kt)("strong",{parentName:"p"},"BonDiggity")," from the ",(0,i.kt)("strong",{parentName:"p"},"Cons&Stuff Discord")," for helping me out with some files missing in the code and also for some nice circuit board ideas."))))}d.isMDXComponent=!0},1064:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pic003-1e4a6ea13256810aaa95cc58a4fc75e9.png"}}]);