(this["webpackJsonphoodoo-sass"]=this["webpackJsonphoodoo-sass"]||[]).push([[0],{33:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(2),a=c.n(n),r=c(24),l=c.n(r),i=c(11),b=c(5),j=(c(33),c(8)),d=c(13),o=function(e){var t=e.fluid,c=e.children,n=e.className,a=Object(d.a)(e,["fluid","children","className"]);return Object(s.jsx)("div",Object(j.a)(Object(j.a)({className:"wrapper".concat(t?"--fluid":""," ").concat(n)},a),{},{children:c}))};o.defaultProps={fluid:!1,className:""};var u=o,x=function(e){var t=e.className,c=e.children,n=e.direction,a=Object(d.a)(e,["className","children","direction"]);return Object(s.jsx)("div",Object(j.a)(Object(j.a)({className:"row".concat(n&&"reverse"===n?" row--reverse":""," ").concat(t)},a),{},{children:c}))};x.defaultProps={direction:""};var h=x,m=function(e){var t=e.className,c=e.children,n=Object(d.a)(e,["className","children"]);return Object(s.jsx)("div",Object(j.a)(Object(j.a)({className:t},n),{},{children:c}))},O=Object(n.createContext)(),v=Object(n.createContext)(),f=function(e){var t=e.children,c=Object(n.useState)(!0),a=Object(i.a)(c,2),r=a[0],l=a[1];return Object(s.jsx)(O.Provider,{value:r,children:Object(s.jsx)(v.Provider,{value:function(){l((function(e){return!e}))},children:t})})},N=function(){var e=Object(n.useContext)(O),t=Object(n.useContext)(v);return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:t,className:"btn btn--primary btn--block",children:"TOGGLE THEME"}),e]})},p=function(e){e.toggleTheme,e.theme;return Object(s.jsxs)("div",{className:"sticky-sidebar",children:[Object(s.jsx)(N,{}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/layout",children:"Layout"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/navigation",children:"Navigation"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/buttons",children:"Buttons"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/panels",children:"Panels"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/tables",children:"Tables"})})]})]})},y=c(3),g=c(15),w=c.n(g),_=c(20),k=c.n(_),C=c(26),P=c.n(C),S=(c(59),function(e){var t=e.children,c=e.lang,a=(e.theme,Object(n.useRef)());return Object(n.useEffect)((function(){switch(c){case"sass":w.a.registerLanguage("sass",P.a);break;case"html":w.a.registerLanguage("html",k.a);break;default:w.a.registerLanguage("html",k.a)}w.a.highlightBlock(a.current)})),Object(s.jsxs)("div",{style:{position:"relative"},children:[Object(s.jsx)("div",{style:{position:"absolute",zIndex:2,right:"15px",top:"15px"},className:"btn btn--xs btn--white-outline",children:"COPY"}),Object(s.jsx)("pre",{className:"shadow--1 r-4",ref:a,style:{padding:"30px 15px"},children:Object(s.jsx)("code",{children:t})})]})});S.defaultProps={lang:"html"};var L=S,B=c(27),A=function(){return Object(s.jsx)(h,{children:Object(s.jsxs)(m,{className:"md-col-12",children:[Object(s.jsx)("h1",{children:"Buttons"}),Object(s.jsxs)("div",{id:"default-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Default Buttons"}),Object(s.jsx)("p",{children:"Hoodoo has 4 default button colors to start with "})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn",children:"Plain"}),Object(s.jsx)("button",{className:"btn btn--default",children:"Default"}),Object(s.jsx)("button",{className:"btn btn--white",children:"White"}),Object(s.jsx)("button",{className:"btn btn--black",children:"Black"})]}),Object(s.jsxs)(L,{children:["<button class='btn'>Plain</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--default'>Default</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--white'>White</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--black'>Black</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"custom-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Custom Colors Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn btn--primary",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--secondary",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--mute",children:"Mute Color"}),Object(s.jsx)("button",{className:"btn btn--dark",children:"Dark Color"})]}),Object(s.jsx)(L,{lang:"sass",children:"$colors: (primary: #1f7a8c, secondary: #bfdbf7, dark: #022b3a, mute: #e1e5f2)"}),Object(s.jsxs)(L,{children:["<button class='btn btn--primary'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--secondary'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--mute'>Mute Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--dark'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"outline-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Outline Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn btn--primary-outline",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--secondary-outline",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--dark-outline",children:"Dark Color"})]}),Object(s.jsxs)(L,{children:["<button class='btn btn--primary-outline'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--secondary-outline'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--dark-outline'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"gradient-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Gradient Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn btn--primary-gradient",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--secondary-gradient",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--default-gradient",children:"Dark Color"}),Object(s.jsx)("button",{className:"btn btn--mute-gradient",children:"Dark Color"}),Object(s.jsx)("button",{className:"btn btn--dark-gradient",children:"Dark Color"})]}),Object(s.jsxs)(L,{children:["<button class='btn btn--primary-gradient'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--secondary-gradient'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--dark-gradient'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"glass-buttons",className:"mb-8 ",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Glass Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{className:"pat2 py-5",children:[Object(s.jsx)("button",{className:"btn btn--glass ",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--glass text--secondary",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--glass text--dark",children:"Dark Color"})]}),Object(s.jsxs)(L,{children:["<button class='btn btn--glass'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--glass'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--glass'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"rounded-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Rounded Buttons"}),Object(s.jsxs)("p",{children:["Make your buttons corners rounded by simply adding a class of ",Object(s.jsx)("code",{children:"btn--rounded"})]})]}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("button",{className:"btn btn--rounded btn--primary",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--secondary",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--dark",children:"Dark Color"})]}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("button",{className:"btn btn--rounded btn--primary-outline",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--secondary-outline",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--dark-outline",children:"Dark Color"})]}),Object(s.jsxs)(L,{children:["<button class='btn btn--rounded btn--primary'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--rounded btn--secondary-outline'>Secondary Color</button> ",Object(s.jsx)("br",{})]}),Object(s.jsxs)("blockquote",{className:"p-6 my-8 bg--dark text--white r-5 shadow--7 flex flex--row flex--align-center",children:[Object(s.jsx)("div",{style:{width:"40px"},children:Object(s.jsx)(B.a,{style:{marginRight:"10px"},size:20})}),Object(s.jsx)("p",{children:"Note that the background-color, text-color, border-radius and more... can be use to alter the look of the button."})]}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("button",{className:"btn bg--dark text--secondary border--secondary r-7",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn border--primary border--primary text--secondary",children:"Secondary Color"})]}),Object(s.jsxs)(L,{children:["<button class='btn btn--rounded btn--primary'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--rounded btn--secondary'>Secondary Color</button> ",Object(s.jsx)("br",{})]})]})]})})},D=c(10),H=function(){return Object(s.jsxs)(h,{children:[Object(s.jsxs)(m,{className:"md-col-12",children:[Object(s.jsx)("h1",{children:"Column Layout"}),Object(s.jsxs)("div",{id:"default-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"The Grid"}),Object(s.jsxs)("p",{children:["Hoodoo is by default a 12 column grid, but this can be easly changed in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file."]})]}),Object(s.jsx)("div",{className:"row",children:Array(12).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-1",children:Object(s.jsx)("div",{className:"border--default bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2"})},Object(D.uniqueId)())}))}),Object(s.jsx)("div",{className:"row",children:Array(6).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-2",children:Object(s.jsx)("div",{className:"border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2"})},Object(D.uniqueId)())}))}),Object(s.jsx)("div",{className:"row",children:Array(4).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-3",children:Object(s.jsx)("div",{className:"border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2"})},Object(D.uniqueId)())}))}),Object(s.jsx)("div",{className:"row",children:Array(3).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-4",children:Object(s.jsx)("div",{className:"border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2"})},Object(D.uniqueId)())}))}),Object(s.jsx)("div",{className:"row",children:Array(2).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-6",children:Object(s.jsx)("div",{className:"border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2"})},Object(D.uniqueId)())}))}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"sm-col-6 md-col-12",children:Object(s.jsx)("div",{className:"border--default  bg--default border--black-light text--white r-5 py-4  flex justify--center flex--align-center py-2"})})}),Object(s.jsxs)(L,{children:["<div className='wrapper'> ",Object(s.jsx)("br",{}),"\xa0 <div className='row'> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 </div> ",Object(s.jsx)("br",{}),"</div>"]})]})]}),Object(s.jsx)(m,{className:"md-col-12",children:Object(s.jsx)("div",{className:"row",children:Array(6).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-2 border--default bg--default border--black-light "},Object(D.uniqueId)())}))})})]})},I=function(){return Object(s.jsx)(h,{children:Object(s.jsx)(m,{className:"md-col-12",children:Object(s.jsx)("div",{className:"panel",children:Object(s.jsx)("div",{className:"panel__body",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"First Name"}),Object(s.jsx)("th",{children:"Last Name"}),Object(s.jsx)("th",{children:"Points"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Jill"}),Object(s.jsx)("td",{children:"Smith"}),Object(s.jsx)("td",{children:"50"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Eve"}),Object(s.jsx)("td",{children:"Jackson"}),Object(s.jsx)("td",{children:"94"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Adam"}),Object(s.jsx)("td",{children:"Johnson"}),Object(s.jsx)("td",{children:"67"})]})]})]})})})})})},q=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(h,{children:Object(s.jsxs)(m,{className:"md-col-12",children:[Object(s.jsx)("h1",{children:"Home"}),Object(s.jsx)("a",{href:"#home",children:"HOME PAGE LINK"})]})})})},E=function(e){var t=e.children,c=e.shadow,n=e.mode;return Object(s.jsx)("div",{className:"panel ".concat(n," ").concat(c?"shadow--4":""),children:t})};E.defaultProps={shadow:!1,mode:""};var T=E,J=function(e){for(var t=e.children,c=arguments.length,n=new Array(c>1?c-1:0),a=1;a<c;a++)n[a-1]=arguments[a];return Object(s.jsx)("header",Object(j.a)(Object(j.a)({className:"panel__header"},n),{},{children:t}))},G=function(e){var t=e.children;return Object(s.jsx)("article",{className:"panel__body",children:t})},F=function(e){var t=e.children;return Object(s.jsx)("footer",{className:"panel__footer",children:t})},M=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{children:Object(s.jsx)(m,{className:"md-col-12",children:Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Default Panel"}),Object(s.jsx)("p",{children:"Panel building block "})]})})}),Object(s.jsxs)(h,{children:[Object(s.jsx)(m,{className:"sm-col-4",children:Object(s.jsx)("div",{className:"panel",children:Object(s.jsx)("div",{className:"panel__body",children:Object(s.jsxs)("div",{className:"flex flex--row flex--nowrap",children:[Object(s.jsx)("div",{className:"avatar shadow--3 mr-4",children:Object(s.jsx)("img",{src:"https://www.placecage.com/50/50",alt:""})}),Object(s.jsxs)("div",{className:"flex flex--column justify--evenly truncate",children:[Object(s.jsx)("div",{children:"Nicolas Cage"}),Object(s.jsx)("small",{children:"Born: 7 January 1964 (age 56 years)"})]})]})})})}),Object(s.jsx)(m,{className:"sm-col-4",children:Object(s.jsx)("div",{className:"panel",children:Object(s.jsx)("div",{className:"panel__body",children:Object(s.jsxs)("div",{className:"flex flex--row flex--nowrap",children:[Object(s.jsx)("div",{className:"avatar shadow--3 avatar--rounded mr-4",children:Object(s.jsx)("img",{src:"https://www.placecage.com/50/50",alt:""})}),Object(s.jsxs)("div",{className:"flex flex--column justify--evenly truncate",children:[Object(s.jsx)("div",{children:"Nicolas Cage"}),Object(s.jsx)("small",{children:"Born: 7 January 1964 (age 56 years)"})]})]})})})}),Object(s.jsx)(m,{className:"sm-col-4",children:Object(s.jsx)("div",{className:"panel",children:Object(s.jsx)("div",{className:"panel__body",children:Object(s.jsxs)("div",{className:"flex flex--row flex--nowrap",children:[Object(s.jsx)("div",{className:"avatar shadow--3 avatar--round mr-4",children:Object(s.jsx)("img",{src:"https://www.placecage.com/50/50",alt:""})}),Object(s.jsxs)("div",{className:"flex flex--column justify--evenly truncate",children:[Object(s.jsx)("div",{children:"Nicolas Cage"}),Object(s.jsx)("small",{children:"Born: 7 January 1964 (age 56 years)"})]})]})})})})]}),Object(s.jsxs)(h,{children:[Object(s.jsx)(m,{className:"sm-col-6 flex",children:Object(s.jsxs)(T,{shadow:!0,children:[Object(s.jsx)("img",{className:"panel__img",src:"https://www.placecage.com/640/360",alt:"placeholder"}),Object(s.jsx)(J,{children:"Hello Panel"}),Object(s.jsx)(G,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente."}),Object(s.jsx)(F,{children:"Footer area"})]})}),Object(s.jsx)(m,{className:"sm-col-6 flex",children:Object(s.jsxs)(T,{shadow:!0,children:[Object(s.jsxs)("figure",{className:"panel__figure",children:[Object(s.jsx)("img",{className:"panel__img",src:"https://www.placecage.com/640/360",alt:"Trulli"}),Object(s.jsx)("figcaption",{className:"panel__caption",children:"Nicolas Cage"})]}),Object(s.jsx)(J,{children:"Hello Panel"}),Object(s.jsx)(G,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente."}),Object(s.jsx)(F,{children:"Footer area"})]})})]}),Object(s.jsx)(h,{className:"flex justify--between",children:Array(2).fill().map((function(){return Object(s.jsx)(m,{className:"md-col-6",children:Object(s.jsxs)(T,{mode:"dark",shadow:!0,children:[Object(s.jsx)(J,{children:"Hello Panel"}),Object(s.jsx)(G,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente."}),Object(s.jsx)(F,{children:"Footer area"})]})},Object(D.uniqueId)("dark_"))}))}),Object(s.jsx)(h,{children:Array(2).fill().map((function(){return Object(s.jsx)(m,{className:"md-col-6",children:Object(s.jsxs)(T,{mode:"primary",shadow:!0,children:[Object(s.jsxs)(J,{children:["Hello Panel ",Object(D.uniqueId)("default_")]}),Object(s.jsx)(G,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi corporis ducimus facilis incidunt mollitia natus necessitatibus ratione sapiente."}),Object(s.jsxs)(F,{children:[Object(s.jsx)("button",{className:"btn btn--white btn--sm",children:"Button"}),Object(s.jsx)("button",{className:"btn btn--white-outline btn--sm",children:"Button"})]})]})},Object(D.uniqueId)("default_"))}))})]})},z=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(h,{children:Object(s.jsxs)(m,{className:"md-col-12",children:[Object(s.jsx)("h1",{children:"Navigation"}),"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores aspernatur, commodi cum delectus distinctio doloribus dolorum ea eum laudantium, maiores modi molestias mollitia natus nisi",Object(s.jsxs)(L,{children:['<nav class="nav"> ',Object(s.jsx)("br",{}),'\xa0 <div class="nav__wrapper"> ',Object(s.jsx)("br",{}),"\xa0 \xa0 /** Contains the logo and navigation trigger button **/ ",Object(s.jsx)("br",{}),'\xa0 \xa0 <div class="nav__container"> ',Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 <div class="nav__brand"> ',Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 \xa0 <a href="#">Hoodoo</a> ',Object(s.jsx)("br",{}),"\xa0 \xa0 \xa0 </div> ",Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 <div class="nav__trigger"> ',Object(s.jsx)("br",{}),"\xa0 \xa0 \xa0 \xa0 /** Add your own image, emoji, icon or custom element **/ ",Object(s.jsx)("br",{}),"\xa0 \xa0 \xa0 </div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 </div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 /** elements in the responsive div will conform to the mobile view **/ ",Object(s.jsx)("br",{}),'\xa0 \xa0 <div class="nav__responsive"> ',Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 <ul class="nav__links"> ',Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 \xa0 <li class="nav__link"> ',Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 \xa0 \xa0 <a href="#">Home</a> ',Object(s.jsx)("br",{}),"\xa0 \xa0 \xa0 \xa0 </li> ",Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 \xa0 <li class="nav__link"> ',Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 \xa0 \xa0 <a href="#">About</a> ',Object(s.jsx)("br",{}),"\xa0 \xa0 \xa0 \xa0 </li> ",Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 \xa0 <li class="nav__link"> ',Object(s.jsx)("br",{}),'\xa0 \xa0 \xa0 \xa0 \xa0 <a href="#">Contact Us</a> ',Object(s.jsx)("br",{}),"\xa0 \xa0 \xa0 \xa0 </li> ",Object(s.jsx)("br",{}),"\xa0 \xa0 \xa0 </ul> ",Object(s.jsx)("br",{}),"\xa0 \xa0 </div> ",Object(s.jsx)("br",{}),"\xa0 </div> ",Object(s.jsx)("br",{}),"</nav>"]})]})})})},R=[{name:"Home",path:"/",exact:!0,main:function(){return Object(s.jsx)(q,{})}},{name:"Layout (The Grid)",path:"/layout",exact:!0,main:function(){return Object(s.jsx)(H,{})}},{name:"Navigation",path:"/navigation",exact:!0,main:function(){return Object(s.jsx)(z,{})}},{name:"Buttons",path:"/buttons",exact:!0,main:function(){return Object(s.jsx)(A,{})}},{name:"Table",path:"/tables",exact:!0,main:function(){return Object(s.jsx)(I,{})}},{name:"Panel",path:"/panels",exact:!0,main:function(){return Object(s.jsx)(M,{})}}],W=function(){return Object(s.jsx)(u,{children:Object(s.jsx)(y.c,{children:R.map((function(e,t){return Object(s.jsx)(y.a,{strict:!0,path:e.path,exact:e.exact,component:e.main},t)}))})})},K=c(63),U=function(){var e=Object(y.f)(),t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],r=c[1],l=function(t){return e.pathname===t?"nav__link--active":""};return Object(s.jsx)("nav",{className:"nav nav--fluid nav--fixed shadow--1",children:Object(s.jsxs)("div",{className:"nav__wrapper gap justify--between",children:[Object(s.jsxs)("div",{className:"nav__container",children:[Object(s.jsx)("div",{className:"nav__brand",children:Object(s.jsx)(b.b,{to:"/",children:"HOODOO"})}),Object(s.jsx)("div",{onClick:function(){r(!a)},className:"nav__trigger",children:Object(s.jsx)(K.a,{size:24})})]}),Object(s.jsx)("div",{className:"nav__responsive ".concat(a&&" nav--open"),children:Object(s.jsxs)("ul",{className:"nav__links",children:[Object(s.jsx)("li",{className:"nav__link ".concat(l("/")),children:Object(s.jsx)(b.c,{to:"/",exact:!0,children:"Home"})}),Object(s.jsx)("li",{className:"nav__link ".concat(l("/buttons")),children:Object(s.jsx)(b.c,{to:"/buttons",exact:!0,children:"Buttons"})}),Object(s.jsx)("li",{className:"nav__link ".concat(l("/panels")),children:Object(s.jsx)(b.c,{to:"/panels",exact:!0,children:"Panels"})})]})})]})})},Y=function(){var e=Object(n.useState)("light"),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(i.a)(a,2),l=r[0],b=r[1],j=function(e){window.localStorage.setItem("theme",e),s(e)};return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");e?s(e):j("light"),b(!0)}),[]),[c,function(){"light"===c?(j("dark"),document.body.classList.remove("light"),document.body.classList.add("dark")):(j("light"),document.body.classList.remove("dark"),document.body.classList.add("light"))},l]},$=function(){var e=Y(),t=Object(i.a)(e,3),c=t[0],n=t[1];return t[2]?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(U,{}),Object(s.jsx)(u,{fluid:!0,className:"mt-7",children:Object(s.jsxs)(h,{children:[Object(s.jsx)(m,{className:"md-col-3 lg-col-2 sidebar bg--default",children:Object(s.jsx)(p,{theme:c,toggleTheme:n})}),Object(s.jsx)(m,{className:"md-col-6 lg-col-8",children:Object(s.jsx)(W,{})}),Object(s.jsx)(m,{className:"md-col-3 lg-col-2 sidebar bg--default",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, nobis."})]})})]})})}):Object(s.jsx)("div",{children:"Loading... "})};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{children:Object(s.jsx)($,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.a64c64fb.chunk.js.map