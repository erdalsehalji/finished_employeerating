(function(e){function n(n){for(var r,a,o=n[0],u=n[1],p=n[2],c=0,g=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&g.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(g.length)g.shift()();return s.push.apply(s,p||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==i[o]&&(r=!1)}r&&(s.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},i={app:0},s=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b438b79a"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={about:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"f254e35d"}[e]+".css",i=u.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var p=s[o],c=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(c===r||c===i))return n()}var g=document.getElementsByTagName("style");for(o=0;o<g.length;o++){p=g[o],c=p.getAttribute("data-href");if(c===r||c===i)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],l.parentNode.removeChild(l),t(s)},l.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(n,t){r=i[e]=[n,t]}));n.push(r[2]=s);var p,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=o(e);var g=new Error;p=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;g.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",g.name="ChunkLoadError",g.type=r,g.request=a,t[1](g)}i[e]=void 0}};var l=setTimeout((function(){p({type:"timeout",target:c})}),12e4);c.onerror=c.onload=p,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=n,p=p.slice();for(var g=0;g<p.length;g++)n(p[g]);var l=c;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2f39":function(e,n,t){"use strict";var r=t("5858"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light",attrs:{id:"mainbar"}},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t("h",[e._v("EMPLOYEE RATING")])],1),e._m(0),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[t("ul",{staticClass:"navbar-nav"},[t("li",[t("div",{staticClass:"cntr"},[t("div",{staticClass:"cntr-innr"},[t("label",{staticClass:"search",attrs:{for:"inpt_search"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{id:"inpt_search",type:"text",placeholder:"Search something"},domProps:{value:e.searchTerm},on:{input:function(n){n.target.composing||(e.searchTerm=n.target.value)}}})])])])]),t("li",{staticClass:"nav-item active"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home")])],1),t("li"),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/AdminDashboard"}},[e._v("Admin dashboard")])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/EmployeeCardList"}},[e._v("All Employee List")])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/EmployeeCard"}},[e._v("Employee List")])],1),t("li",[t("div",{staticClass:"containerr"},[t("a",{staticClass:"button",on:{click:e.logout}},[e._v("Logout")])])]),t("li")])])]),t("router-view")],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],s=t("c0d6"),o=t("dde5"),u={data:function(){return s["a"]},methods:{logout:function(){o["a"].logout(),this.$router.go()}}},p=u,c=(t("5c0b"),t("2877")),g=Object(c["a"])(p,a,i,!1,null,null,null),l=g.exports,d=(t("caad"),t("d3b7"),t("8c4f")),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home",staticStyle:{"background-image":"linear-gradient(rgba(0, 141, 136, 0.557), rgb(5, 150, 161))","padding-top":"20px","padding-bottom":"20px"}},[t("div",{staticClass:"container"},[t("br"),t("br"),t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("p",[e._v("Employee rating is web app for simply rating your employees. Application is not made for measuring the accurate opinion of employee effinency and its quality, but for brief view of its work. All employees and its data are visible to other users ( yes, everyone who use the app can see your score ). ")]),t("br"),t("br"),t("router-link",{attrs:{to:"/Register",id:"signupButton"}},[e._v("SIGN ME UP")]),t("br"),t("br"),t("router-link",{attrs:{to:"/Login",id:"signupButton"}},[e._v("LOGIN ME IN")]),t("br"),t("br"),t("br"),t("h",[e._v("TYPES OF USER")]),t("p",[e._v("3 types: Guest (can see list of all employees of all enterprises), Employee (view rates and data), Admin (view, add, edit, remove).")]),t("br"),t("br"),t("h",[e._v("ADDING, EDITING, REMOVING")]),t("p",[e._v("New employees and admins are added by using signup form. Admin dashboard is used only by admins. In Admin Dashboard user can edit one attribute or entire document and can also delete employee or other admin.")]),t("br"),t("br"),t("h",[e._v("RATING")]),t("p",[e._v("Rating is admin only feature that enables admins to rate other users by putting number (1-5) in score form, and also putting their grade in score history ( along with previous scores).")])],1)]),t("br"),t("br")]),t("br")])},f=[],v={data:function(){return s["a"]},name:"Home",components:{}};$(".popover-dismiss").popover({trigger:"hover"}),$((function(){$('[data-toggle="popover"]').popover()})),$("#myModal").on("shown.bs.modal",(function(){$("#myInput").trigger("hover")}));var b=v,h=(t("2f39"),Object(c["a"])(b,m,f,!1,null,"424d6599",null)),y=h.exports;r["a"].use(d["a"]);var E=[{path:"/",name:"Home",component:y},{path:"/AdminDashboard",name:"AdminDashboard",component:function(){return t.e("about").then(t.bind(null,"a83b"))}},{path:"/EmployeeCard",name:"EmployeeCard",component:function(){return t.e("about").then(t.bind(null,"0b2b"))}},{path:"/EmployeeCardList",name:"EmployeeCardList",component:function(){return t.e("about").then(t.bind(null,"d52a"))}},{path:"/AdminDashboard/:id",props:!0,name:"card-detail",component:function(){return t.e("about").then(t.bind(null,"b3d0"))}},{path:"/Login",name:"Login",component:function(){return t.e("about").then(t.bind(null,"a55b"))}},{path:"/Register",name:"Register",component:function(){return t.e("about").then(t.bind(null,"73cf"))}}],w=new d["a"]({mode:"history",base:"/",routes:E});w.beforeEach((function(e,n,t){var r=["/Login","/Register","/","/EmployeeCardList"],a=!r.includes(e.path),i=o["a"].getUser();!a||i?t():t("/Login")}));var C=w;r["a"].config.productionTip=!1,new r["a"]({router:C,render:function(e){return e(l)}}).$mount("#app")},5858:function(e,n,t){},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),a=t.n(r);a.a},"9c0c":function(e,n,t){},c0d6:function(e,n,t){"use strict";n["a"]={cards:[{signupName:"Ivan",signupSurname:"Ivic",signupEnterprise:"Agrokor",signupPosition:"Big boss",signupAge:"45",signupSex:"M",signupEmail:"iveboss@gmail.com",signupPassword:"jpozo",signupAddress:"Ulica Kneza Trpimira",signupCity:"Umag",signupImage:""},{signupName:"Zoran",signupSurname:"Zolic",signupEnterprise:"Zoki Gradnja",signupPosition:"direktor",signupAge:"32",signupSex:"M",signupEmail:"zoki@gmail.com",signupPassword:"sfssdf",signupAddress:"Maruliceva 32",signupCity:"Split",signupImage:""}],searchTerm:""}},dde5:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return u}));t("d81d"),t("96cf");var r=t("1da1"),a=t("bc3a"),i=t.n(a),s=i.a.create({baseURL:"https://immense-hollows-39976.herokuapp.com/",timeout:2e3});s.interceptors.request.use((function(e){try{e.headers["Authorization"]="Bearer "+u.getToken()}catch(n){console.error(n)}return e})),s.interceptors.response.use((function(e){return e}),(function(e){401!=e.response.status&&403!=e.response.status||u.logout()}));var o={getOneCard:function(e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.get("/AdminDashboard/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",{id:r._id,signupEmail:r.signupEmail,signupPassword:r.signupPassword,signupName:r.signupName,signupSurname:r.signupSurname,signupAddress:r.signupAddress,signupEnterprise:r.signupEnterprise,signupAge:r.signupAge,signupPosition:r.signupPosition,signupCity:r.signupCity,signupImage:r.signupImage,signupSex:r.signupSex,signupType:r.signupType,signupScore:r.signupScore});case 5:case"end":return n.stop()}}),n)})))()},getCardsEnterprise:function(e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var t,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=u.getUser(),n.next=3,s.post("/EmployeeCards/".concat(e),{signupEmail:t.signupEmail});case 3:return r=n.sent,n.next=6,r.data;case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()},deleteEmployee:function(e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s["delete"]("/AdminDashboard/delete/".concat(e));case 2:t=n.sent,console.log("Deleting post response",t);case 4:case"end":return n.stop()}}),n)})))()},updateEmployeeOne:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={signupName:e.signupName,signupSurname:e.signupSurname,signupAddress:e.signupAddress,signupEnterprise:e.signupEnterprise,signupAge:e.signupAge,signupPosition:e.signupPosition,signupCity:e.signupCity,signupSex:e.signupSex,signupScore:e.signupScore,signupScoreHistory:e.signupScoreHistory},t.next=3,s.patch("/AdminDashboard/".concat(n),r);case 3:return console.log("Updated",r),t.abrupt("return");case 5:case"end":return t.stop()}}),t)})))()},updateEmployee:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={signupName:e.signupName,signupSurname:e.signupSurname,signupAddress:e.signupAddress,signupEnterprise:e.signupEnterprise,signupAge:e.signupAge,signupPosition:e.signupPosition,signupCity:e.signupCity,signupSex:e.signupSex,signupScore:e.signupScore,signupScoreHistory:e.signupScoreHistory},t.next=3,s.put("/AdminDashboard/".concat(n),r);case 3:return console.log("Updated",r),t.abrupt("return");case 5:case"end":return t.stop()}}),t)})))()},getAllCards:function(e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.get("/EmployeeCards?_any=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.map((function(e){return{id:e._id,signupEmail:e.signupEmail,signupPassword:e.signupPassword,signupName:e.signupName,signupSurname:e.signupSurname,signupAddress:e.signupAddress,signupEnterprise:e.signupEnterprise,signupAge:e.signupAge,signupPosition:e.signupPosition,signupCity:e.signupCity,signupImage:e.signupImage,signupSex:e.signupSex}})));case 4:case"end":return n.stop()}}),n)})))()}},u={login:function(e,n,t){return Object(r["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s.post("/Login",{signupEmail:e,signupPassword:n,signupEnterprise:t});case 2:return a=r.sent,i=a.data,localStorage.setItem("user",JSON.stringify(i)),r.abrupt("return",!0);case 6:case"end":return r.stop()}}),r)})))()},register:function(e,n,t,a,i,o,u,p,c,g,l){var d=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:m={signupEmail:l,signupPassword:t,signupName:e,signupSurname:n,signupAddress:a,signupEnterprise:u,signupAge:i,signupPosition:p,signupCity:o,signupSex:c,signupType:g},s.post("/Register",m).then((function(e){console.log("Response: ",e),console.log("Error: ",e.data.status),e.data.status&&(d.error=!0)}));case 2:case"end":return r.stop()}}),r)})))()},logout:function(){localStorage.removeItem("user")},getUser:function(){return JSON.parse(localStorage.getItem("user"))},authenticated:function(){var e=u.getUser();return!(!e||!e.token)},getEnterprise:function(){var e=u.getUser();if(e&&e.signupEnterprise)return e.signupEnterprise},getToken:function(){var e=u.getUser();return!(!e||!e.token)&&e.token},state:{get authenticated(){return u.authenticated()},get userEmail(){var e=u.getUser();if(e)return e.signupEmail}}}}});
//# sourceMappingURL=app.e9355322.js.map