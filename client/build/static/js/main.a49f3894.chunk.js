(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){e.exports={ul:"pokemonCard_ul__3g_8N",li:"pokemonCard_li__3dXL_",subrayado:"pokemonCard_subrayado__3S-2-",cardContainer:"pokemonCard_cardContainer__2UfLf"}},34:function(e,t,n){e.exports={cardContainer:"home_cardContainer__3gV6A",home:"home_home__rZ6oY"}},38:function(e,t,n){e.exports={landingPage:"landingPage_landingPage__2DVgB"}},49:function(e,t,n){},50:function(e,t,n){},65:function(e,t){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(22),o=n.n(a),s=(n(49),n(50),n(5)),r=n(13),i=n(38),l=n.n(i),j=n.p+"static/media/pokeVideo.49720536.mp4",d=n(2);function p(){return Object(d.jsxs)("div",{className:l.a.landingPage,children:[Object(d.jsx)("video",{sound:!0,autoPlay:!0,loop:!0,children:Object(d.jsx)("source",{src:j,type:"video/mp4"})}),Object(d.jsx)("h1",{children:"Henry Pokemon PI App"}),Object(d.jsx)(r.b,{to:"/home",children:Object(d.jsx)("button",{children:Object(d.jsx)("i",{children:"Ingresar"})})})]})}var u=n(18),b=n(16),O=n(29),h=n(31),x=(n(65),n(19)),m=n.n(x);n(66);function v(e){var t=e.name,n=e.sprite,c=e.type,a=e.id;return Object(d.jsxs)("div",{className:m.a.cardContainer,children:[Object(d.jsxs)(r.b,{className:m.a.subrayado,to:"/home/".concat(a),children:[Object(d.jsx)("h3",{className:m.a.subrayado,children:t}),Object(d.jsx)("img",{src:n,alt:"img",width:"180px",height:"130px"})]}),Object(d.jsx)("ul",{className:m.a.ul,children:null===c||void 0===c?void 0:c.map((function(e){return Object(d.jsx)("li",{className:"".concat(e," ").concat(m.a.li),children:e})}))})]})}var f=n(34),_=n.n(f);function g(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.types}));Object(c.useEffect)((function(){e(function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)("http://localhost:3001/types");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_ALL_TYPES",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.useEffect)((function(){e(function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)("http://localhost:3001/pokemons");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_ALL_POKEMONS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var n=Object(u.c)((function(e){return e.pokemons}));return console.log(n),Object(d.jsxs)("div",{className:_.a.home,children:[Object(d.jsx)(r.b,{to:"/pokemons"}),Object(d.jsx)("h1",{children:"Pokemon App"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Name"}),Object(d.jsxs)("select",{children:[Object(d.jsx)("option",{value:"asc",children:"A-Z"}),Object(d.jsx)("option",{value:"desc",children:"Z-A"})]}),Object(d.jsx)("span",{children:"Stats"}),Object(d.jsxs)("select",{children:[Object(d.jsx)("option",{value:"asc",children:"Highest HP"}),Object(d.jsx)("option",{value:"desc",children:"Lower HP"}),Object(d.jsx)("option",{value:"asc",children:"Highest Attack"}),Object(d.jsx)("option",{value:"desc",children:"Lower Attack"}),Object(d.jsx)("option",{value:"asc",children:"Highest Defense"}),Object(d.jsx)("option",{value:"desc",children:"Lower Defense"}),Object(d.jsx)("option",{value:"asc",children:"Highest Special Attack"}),Object(d.jsx)("option",{value:"desc",children:"Lower Special Attack"}),Object(d.jsx)("option",{value:"asc",children:"Highest Special Defense"}),Object(d.jsx)("option",{value:"desc",children:"Lower Special Defense"}),Object(d.jsx)("option",{value:"asc",children:"Highest Speed"}),Object(d.jsx)("option",{value:"desc",children:"Lower Speed"})]}),Object(d.jsx)("span",{children:"Types"}),Object(d.jsxs)("select",{children:[Object(d.jsx)("option",{value:"All",children:"All"}),null===t||void 0===t?void 0:t.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("select",{children:[Object(d.jsx)("option",{value:"all",children:"All Pokemon"}),Object(d.jsx)("option",{value:"created",children:"Pokemon Created"}),Object(d.jsx)("option",{value:"api",children:"Existing Pokemon"})]})]}),Object(d.jsx)("div",{className:_.a.cardContainer,children:null===n||void 0===n?void 0:n.map((function(e){return Object(d.jsx)(v,{id:e.id,name:e.name,sprite:e.sprite,type:e.type},e.id)}))})]})}var y=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(s.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(s.a,{path:"/home",component:g})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))},E=n(30),P=n(44),L=n(11),A={pokemons:[],types:[],details:{}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_POKEMONS":return Object(L.a)(Object(L.a)({},e),{},{pokemons:t.payload});case"GET_POKEMON_DETAIL":return Object(L.a)(Object(L.a)({},e),{},{pokemonDetails:t.payload});case"CREATE_POKEMON":return Object(L.a)(Object(L.a)({},e),{},{pokemonCreate:[].concat(Object(P.a)(e.pokemons),[t.payload])});case"GET_ALL_TYPES":return Object(L.a)(Object(L.a)({},e),{},{types:t.payload});default:return e}},C=n(43),N="undefined"!==typeof window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||E.b,S=Object(E.c)(w,N(Object(E.a)(C.a)));o.a.render(Object(d.jsx)(u.a,{store:S,children:Object(d.jsx)(r.a,{children:Object(d.jsx)(y,{})})}),document.getElementById("root")),k()}},[[67,1,2]]]);
//# sourceMappingURL=main.a49f3894.chunk.js.map