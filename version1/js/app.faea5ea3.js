(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1a22e9fa":"59197543","chunk-296d4549":"e7884a52","chunk-5d0b1de3":"2bec18d6","chunk-db4dc3fc":"27e3e287"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-296d4549":1,"chunk-db4dc3fc":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1a22e9fa":"31d6cfe0","chunk-296d4549":"71178a29","chunk-5d0b1de3":"31d6cfe0","chunk-db4dc3fc":"1ba3660a"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0962":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("7496"),a=n("40dc"),i=n("8336"),u=n("a523"),s=n("553a"),c=n("f6c4"),l=n("2fa4"),d=n("8654"),h=n("2a7f"),p=function(){var e=this,t=e._self._c;return t(o["a"],[t(a["a"],{attrs:{app:"",color:"primary mx-auto"}},[t("router-link",{attrs:{to:"/home"}},[t(h["a"],{on:{click:e.resetPage}},[e._v(" AnimeGFans ")])],1),t(l["a"]),e.routerHome()?t(d["a"],{staticStyle:{"margin-right":"10px","max-width":"300px","margin-left":"10px"},attrs:{"append-icon":"mdi-magnify","hide-details":"","solo-inverted":"",rounded:""},on:{input:e.resetPage},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}):e._e(),e.activeUser()?t(i["a"],{on:{click:function(t){return e.Logout()}}},[e._v("登出")]):e._e()],1),t(c["a"],[t(u["a"],{attrs:{fluid:"","fill-height":""}},[t("router-view",{attrs:{keywords:e.keywords,page:e.page},on:{"update-page":e.updatePage}})],1)],1),e.visits?t(s["a"],[e._v(" 瀏覽人次 : "+e._s(e.visits)+" ")]):e._e()],1)},f=[],m={data(){return{keywords:"",page:1}},methods:{resetPage(){this.page=1},updatePage(e){this.page=e},routerHome(){return"/home"==this.$router.history.current["path"]},Logout(){this.$store.dispatch("logOut").then(()=>{this.$router.push({name:"Login"})})},activeUser(){return localStorage.getItem("user")}},computed:{visits(){for(var e="visits=",t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n];while(" "==r.charAt(0))r=r.substring(1,r.length);0==r.indexOf(e)&&this.$store.commit("SET_VISITS",r.substring(e.length,r.length))}return this.$store.state.visits}}},g=m,v=(n("eb08"),n("2877")),b=Object(v["a"])(g,p,f,!1,null,null,null),y=b.exports,k=n("f309");r["a"].use(k["a"]);var w=new k["a"]({theme:{dark:!0,themes:{light:{primary:"#41B883"},dark:{primary:"#34495E",anchor:"#fff",font:"#fff"}}}}),S=n("8c4f");r["a"].use(S["a"]);const _=[{path:"/home",name:"home",component:()=>n.e("chunk-296d4549").then(n.bind(null,"bb51")),meta:{title:"在線動漫-AnimeGFans",requiresAuth:!0}},{path:"/page/:page",name:"About",component:()=>n.e("chunk-296d4549").then(n.bind(null,"bb51")),props:!0,meta:{title:"AnimeGFans"}},{path:"/video/:id",name:"Video",component:()=>n.e("chunk-db4dc3fc").then(n.bind(null,"81a8")),props:!0,meta:{title:"影片播放",requiresAuth:!0}},{path:"/",name:"Login",component:()=>n.e("chunk-5d0b1de3").then(n.bind(null,"a55b")),meta:{title:"登入"}},{path:"/signup",name:"Signup",component:()=>n.e("chunk-1a22e9fa").then(n.bind(null,"5c9c"))},{path:"/:pathMatch(.*)*",redirect:"/"}],A=new S["a"]({mode:"hash",base:"/",routes:_});A.beforeEach((e,t,n)=>{const r=E("token");if(e.meta.title&&(document.title=e.meta.title),e.matched.some(e=>e.meta.requiresAuth)&&null==r)return document.next=e,document.title="登入",void n("/login");if(r&&null!=document.next){let e=document.next.path;return document.next=null,void n(e)}!r||"/"!=e.path&&"/login"!=e.path?n():n("/home")});const E=e=>{for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var o=n[r];while(" "==o.charAt(0))o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null};var O=A,x=n("2f62"),T=n("bc3a"),P=n.n(T),j=n("00e7"),I=n.n(j);r["a"].use(x["a"]);var L=new x["a"].Store({state:{user:null,visits:null},mutations:{SET_USER_DATA(e,t){I.a.set("token",t.token,1/0),I.a.set("visits",t.visits,1/0),e.visits=t.visits,delete t["visits"],delete t["token"],e.user=t,localStorage.setItem("user",JSON.stringify(t))},REMOVE_USER_DATA(e){e.user=null,e.visits=null,I.a.delete("token"),I.a.delete("visits"),localStorage.removeItem("user")},SET_VISITS(e,t){e.visits=t}},actions:{login({commit:e},t){return P.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",P.a.post("https://animeapi.aylu.tw/login",t).then(({data:t})=>{e("SET_USER_DATA",t)})},logOut({commit:e}){e("REMOVE_USER_DATA")},createUser({commit:e},t){return console.log(e),P.a.post("https://animeapi.aylu.tw/signup",t)}},getters:{loggedIn(e){return!!e.user}}});r["a"].config.productionTip=!1,r["a"].use(n("395c")),r["a"].use(I.a),new r["a"]({vuetify:w,router:O,store:L,render:e=>e(y)}).$mount("#app")},eb08:function(e,t,n){"use strict";n("0962")}});
//# sourceMappingURL=app.faea5ea3.js.map