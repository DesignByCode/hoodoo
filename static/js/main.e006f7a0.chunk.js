(this.webpackJsonphoodoo=this.webpackJsonphoodoo||[]).push([[0],{38:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(2),r=c.n(n),a=c(21),l=c.n(a),b=c(8),d=c(60),o=function(){return Object(s.jsx)("div",{className:"nav__icon",children:Object(s.jsx)(d.a,{size:20})})},i=function(e){e.children;return Object(s.jsx)("nav",{className:"nav shadow--1",children:Object(s.jsxs)("div",{className:"nav__wrapper--fluid",children:[Object(s.jsx)("div",{className:"nav__brand",children:Object(s.jsx)(b.b,{to:"/",children:"\u2728Hoodoo"})}),Object(s.jsx)("ul",{className:"nav__links",children:Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)(b.c,{exact:!0,activeClassName:"active",to:"/",children:"Home"})})}),Object(s.jsx)(o,{})]})})},j=(c(38),c(10)),x=c(11),u=function(e){var t=e.fluid,c=e.children,n=e.className,r=Object(x.a)(e,["fluid","children","className"]);return Object(s.jsx)("div",Object(j.a)(Object(j.a)({className:"wrapper".concat(t?"--fluid":""," ").concat(n)},r),{},{children:c}))};u.defaultProps={fluid:!1,className:""};var h=u,m=function(e){var t=e.children,c=e.direction,n=Object(x.a)(e,["children","direction"]);return Object(s.jsx)("div",Object(j.a)(Object(j.a)({className:"row".concat(c&&"reverse"===c?" row--reverse":"")},n),{},{children:t}))};m.defaultProps={direction:""};var O=m,y=function(e){var t=e.className,c=e.children,n=Object(x.a)(e,["className","children"]);return Object(s.jsx)("div",Object(j.a)(Object(j.a)({className:t},n),{},{children:c}))},N=function(){return Object(s.jsx)("div",{className:"sticky-sidebar",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/buttons",children:"Buttons"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/panels",children:"Panels"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/tables",children:"Tables"})})]})})},f=c(3),v=c(13),p=c.n(v),g=c(18),C=c.n(g),k=c(23),w=c.n(k),P=(c(57),function(e){var t=e.children,c=e.lang,r=Object(n.useRef)();return Object(n.useEffect)((function(){switch(c){case"sass":p.a.registerLanguage("sass",w.a);break;case"html":p.a.registerLanguage("html",C.a);break;default:p.a.registerLanguage("html",C.a)}p.a.highlightBlock(r.current)})),Object(s.jsxs)("div",{style:{position:"relative"},children:[Object(s.jsx)("div",{style:{position:"absolute",zIndex:2,right:"15px",top:"15px"},className:"btn btn--xs btn--primary-outline",children:"COPY"}),Object(s.jsx)("pre",{className:"shadow--1 r-4",ref:r,style:{padding:"30px 15px"},children:Object(s.jsx)("code",{children:t})})]})});P.defaultProps={lang:"html"};var D=P,S=c(24),_=function(){return Object(s.jsx)(O,{children:Object(s.jsxs)(y,{className:"md-col-12",children:[Object(s.jsx)("h1",{children:"Buttons"}),Object(s.jsxs)("div",{id:"default-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Default Buttons"}),Object(s.jsx)("p",{children:"Hoodoo has 4 default button colors to start with "})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn",children:"Plain"}),Object(s.jsx)("button",{className:"btn btn--default",children:"Default"}),Object(s.jsx)("button",{className:"btn btn--white",children:"White"}),Object(s.jsx)("button",{className:"btn btn--black",children:"Black"})]}),Object(s.jsxs)(D,{children:["<button class='btn'>Plain</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--default'>Default</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--white'>White</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--black'>Black</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"custom-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Custom Colors Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn btn--primary",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--secondary",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--mute",children:"Mute Color"}),Object(s.jsx)("button",{className:"btn btn--dark",children:"Dark Color"})]}),Object(s.jsx)(D,{lang:"sass",children:"$colors: (primary: #1f7a8c, secondary: #bfdbf7, dark: #022b3a, mute: #e1e5f2)"}),Object(s.jsxs)(D,{children:["<button class='btn btn--primary'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--secondary'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--mute'>Mute Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--dark'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"outline-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Outline Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn btn--primary-outline",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--secondary-outline",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--dark-outline",children:"Dark Color"})]}),Object(s.jsxs)(D,{children:["<button class='btn btn--primary-outline'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--secondary-outline'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--dark-outline'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"gradient-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Gradient Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn btn--primary-gradient",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--secondary-gradient",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--default-gradient",children:"Dark Color"}),Object(s.jsx)("button",{className:"btn btn--mute-gradient",children:"Dark Color"}),Object(s.jsx)("button",{className:"btn btn--dark-gradient",children:"Dark Color"})]}),Object(s.jsxs)(D,{children:["<button class='btn btn--primary-gradient'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--secondary-gradient'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--dark-gradient'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"glass-buttons",className:"mb-8 ",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Glass Buttons"}),Object(s.jsxs)("p",{children:["Custom colored button can be added by adding your colors in the colors array in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file. "]})]}),Object(s.jsxs)("div",{className:"pat2 py-5",children:[Object(s.jsx)("button",{className:"btn btn--glass ",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--glass text--secondary",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--glass text--dark",children:"Dark Color"})]}),Object(s.jsxs)(D,{children:["<button class='btn btn--glass'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--glass'>Secondary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--glass'>Dark Color</button> ",Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{id:"rounded-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"Rounded Buttons"}),Object(s.jsxs)("p",{children:["Make your buttons corners rounded by simply adding a class of ",Object(s.jsx)("code",{children:"btn--rounded"})]})]}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("button",{className:"btn btn--rounded btn--primary",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--secondary",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--dark",children:"Dark Color"})]}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("button",{className:"btn btn--rounded btn--primary-outline",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--secondary-outline",children:"Secondary Color"}),Object(s.jsx)("button",{className:"btn btn--rounded btn--dark-outline",children:"Dark Color"})]}),Object(s.jsxs)(D,{children:["<button class='btn btn--rounded btn--primary'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--rounded btn--secondary-outline'>Secondary Color</button> ",Object(s.jsx)("br",{})]}),Object(s.jsxs)("blockquote",{className:"p-6 my-8 bg--dark text--white r-5 shadow--7 flex flex--row flex--align-center",children:[Object(s.jsx)("div",{style:{width:"40px"},children:Object(s.jsx)(S.a,{style:{marginRight:"10px"},size:20})}),Object(s.jsx)("p",{children:"Note that the background-color, text-color, border-radius and more... can be use to alter the look of the button."})]}),Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("button",{className:"btn bg--dark text--secondary border--secondary r-7",children:"Primary Color"}),Object(s.jsx)("button",{className:"btn border--primary border--primary text--secondary",children:"Secondary Color"})]}),Object(s.jsxs)(D,{children:["<button class='btn btn--rounded btn--primary'>Primary Color</button> ",Object(s.jsx)("br",{}),"<button class='btn btn--rounded btn--secondary'>Secondary Color</button> ",Object(s.jsx)("br",{})]})]})]})})},B=function(){return Object(s.jsx)(O,{children:Object(s.jsxs)(y,{className:"md-col-12",children:[Object(s.jsx)("h1",{children:"Column Layout"}),Object(s.jsxs)("div",{id:"default-buttons",className:"mb-8",children:[Object(s.jsxs)("div",{className:"mb-5",children:[Object(s.jsx)("h3",{children:"The Grid"}),Object(s.jsxs)("p",{children:["Hoodoo is by default a 12 column grid, but this can be easly changed in the ",Object(s.jsx)("code",{children:"_theme.sass"})," file."]})]}),Object(s.jsx)("div",{className:"row",children:Array(12).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-1",children:Object(s.jsx)("div",{className:"border--default bg--dark text--white r-5 py-4  flex justify--center flex--align-center py-2"})},e)}))}),Object(s.jsx)("div",{className:"row",children:Array(6).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-2",children:Object(s.jsx)("div",{className:"border--default bg--dark text--white r-5 py-4  flex justify--center flex--align-center py-2"})},e)}))}),Object(s.jsx)("div",{className:"row",children:Array(4).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-3",children:Object(s.jsx)("div",{className:"border--default bg--dark text--white r-5 py-4  flex justify--center flex--align-center py-2"})},e)}))}),Object(s.jsx)("div",{className:"row",children:Array(3).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-4",children:Object(s.jsx)("div",{className:"border--default bg--dark text--white r-5 py-4  flex justify--center flex--align-center py-2"})},e)}))}),Object(s.jsx)("div",{className:"row",children:Array(2).fill().map((function(e){return Object(s.jsx)("div",{className:"sm-col-6 md-col-6",children:Object(s.jsx)("div",{className:"border--default bg--dark text--white r-5 py-4  flex justify--center flex--align-center py-2"})},e)}))}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"sm-col-6 md-col-12",children:Object(s.jsx)("div",{className:"border--default bg--dark text--white r-5 py-4  flex justify--center flex--align-center py-2"})})}),Object(s.jsxs)(D,{children:["<div className='wrapper'> ",Object(s.jsx)("br",{}),"\xa0 <div className='row'> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 \xa0 <div className='sm-col-6 md-col-3'></div> ",Object(s.jsx)("br",{}),"\xa0 </div> ",Object(s.jsx)("br",{}),"</div>"]})]})]})})},H=function(){return Object(s.jsx)(O,{children:Object(s.jsx)(y,{className:"md-col-12",children:Object(s.jsxs)("table",{className:"shadow--1",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"First Name"}),Object(s.jsx)("th",{children:"Last Name"}),Object(s.jsx)("th",{children:"Points"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Jill"}),Object(s.jsx)("td",{children:"Smith"}),Object(s.jsx)("td",{children:"50"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Eve"}),Object(s.jsx)("td",{children:"Jackson"}),Object(s.jsx)("td",{children:"94"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Adam"}),Object(s.jsx)("td",{children:"Johnson"}),Object(s.jsx)("td",{children:"67"})]})]})})})},A=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(O,{children:Object(s.jsx)(y,{className:"md-col-12",children:Object(s.jsx)("h1",{children:"Home"})})})})},L=[{name:"Home",path:"/",exact:!0,main:function(){return Object(s.jsx)(A,{})}},{name:"Layout",path:"/layouts",exact:!0,main:function(){return Object(s.jsx)(B,{})}},{name:"Buttons",path:"/buttons",exact:!0,main:function(){return Object(s.jsx)(_,{})}},{name:"Table",path:"/tables",exact:!0,main:function(){return Object(s.jsx)(H,{})}},{name:"Panel",path:"/panels",exact:!0,main:function(){return Object(s.jsx)("h1",{children:"Panels"})}}],J=function(){return Object(s.jsx)(h,{children:Object(s.jsx)(f.c,{children:L.map((function(e,t){return Object(s.jsx)(f.a,{strict:!0,path:e.path,exact:e.exact,component:e.main},t)}))})})},M=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)(i,{}),Object(s.jsx)(h,{fluid:!0,className:"mt-7",children:Object(s.jsxs)(O,{children:[Object(s.jsx)(y,{className:"md-col-3 lg-col-2 sidebar bg--default",children:Object(s.jsx)(N,{})}),Object(s.jsx)(y,{className:"md-col-9 lg-col-10",children:Object(s.jsx)(J,{})})]})})]})})};l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.e006f7a0.chunk.js.map