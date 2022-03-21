(this["webpackJsonpresume-cv"]=this["webpackJsonpresume-cv"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(0),a=t(1),i=t(17),l=t(3),s=t(12),o=Object({NODE_ENV:"production",PUBLIC_URL:"/resume-cv",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=o.NODE_ENV,j=o.REACT_APP_GA_TRACKING_ID;"production"===r&&s.a.initialize(j);var b=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){"production"===r&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},d=t(5),u=t(23),h=[{index:!0,label:"Padmalochan",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],m=Object(a.lazy)((function(){return t.e(6).then(t.t.bind(null,178,7))})),O=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(m,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(O,{})]})},x=t(27),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/resume-cv","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Padmalochan Sahoo"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:padmasahoo17@gmail.com",children:"padmasahoo17@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{align:"justify",children:"Hi, I'm Padmalochan. I like building things. Accomplished Software Developer with 2 years of experience in development of applications. Excels in every stage of the life cycle of software development, including design creation, coding, debugging, testing and maintenance. Expert in devising innovative and tailored solutions to assist businesses achieve their goals in avariety of industries.Advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(d.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(d.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(x.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 Padmalochan Sahoo"})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Padmalochan Sahoo",defaultTitle:"Padmalochan Sahoo",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Padmalochan Sahoo's personal website."};n.a=v},27:function(e,n,t){"use strict";var c=t(0),a=(t(1),t(31)),i=t(32),l=t(33),s=t(34),o=t(35),r=t(36),j=t(37),b=t(38),d=[{link:"https://github.com/rintukv4",label:"Github",icon:i.faGithub},{link:"https://www.facebook.com/padmalochan.sahoo.731135/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/__.paddy._/",label:"Instagram",icon:s.faInstagram},{link:"https://linkedin.com/in/padmalochan-sahoo/",label:"LinkedIn",icon:o.faLinkedinIn},{link:"https://angel.co/u/padmalochan-sahoo",label:"Angel List",icon:r.faAngellist},{link:"https://twitter.com/rintukv4",label:"Twitter",icon:j.faTwitter},{link:"mailto:padmasahoo17@gmail.com",label:"Email",icon:b.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},51:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),i=t.n(a),l=t(16),s=t(5),o=t(3),r=t(21),j=(t(51),Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(9)]).then(t.bind(null,175))}))),b=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,182))})),d=Object(a.lazy)((function(){return Promise.all([t.e(4),t.e(11)]).then(t.bind(null,176))})),u=Object(a.lazy)((function(){return t.e(12).then(t.bind(null,177))})),h=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,181))})),m=Object(a.lazy)((function(){return t.e(7).then(t.bind(null,179))})),O=Object(a.lazy)((function(){return Promise.all([t.e(5),t.e(13)]).then(t.bind(null,180))})),p=function(){return Object(c.jsx)(s.a,{basename:"/resume-cv",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(r.a,{}),children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(o.a,{path:"/about",component:j}),Object(c.jsx)(o.a,{path:"/projects",component:h}),Object(c.jsx)(o.a,{path:"/stats",component:O}),Object(c.jsx)(o.a,{path:"/contact",component:b}),Object(c.jsx)(o.a,{path:"/resume",component:m}),Object(c.jsx)(o.a,{component:u,status:404})]})})})},x=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(x,{}),f):Object(l.render)(Object(c.jsx)(x,{}),f)}},[[52,1,3]]]);
//# sourceMappingURL=main.3ea39ea3.chunk.js.map