(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db4dc3fc"],{"0fd9":function(t,e,s){"use strict";s("13d5"),s("4b85");var a=s("2b0e"),n=s("d9f7"),r=s("80d2");const l=["sm","md","lg","xl"],o=["start","end","center"];function i(t,e){return l.reduce((s,a)=>(s[t+Object(r["q"])(a)]=e(),s),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=i("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),f=i("justify",()=>({type:String,default:null,validator:u})),g=t=>[...o,"space-between","space-around","stretch"].includes(t),p=i("alignContent",()=>({type:String,default:null,validator:g})),h={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,s){let a=b[t];if(null!=s){if(e){const s=e.replace(t,"");a+="-"+s}return a+="-"+s,a.toLowerCase()}}const y=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:s,children:a}){let r="";for(const n in e)r+=String(e[n]);let l=y.get(r);if(!l){let t;for(t in l=[],h)h[t].forEach(s=>{const a=e[s],n=v(t,s,a);n&&l.push(n)});l.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),y.set(r,l)}return t(e.tag,Object(n["a"])(s,{staticClass:"row",class:l}),a)}})},"4edb":function(t,e,s){},"54b9":function(t,e,s){"use strict";s("4edb")},"615b":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("13d5"),s("4b85");var a=s("2b0e"),n=s("d9f7"),r=s("80d2");const l=["sm","md","lg","xl"],o=(()=>l.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),i=(()=>l.reduce((t,e)=>(t["offset"+Object(r["q"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>l.reduce((t,e)=>(t["order"+Object(r["q"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(i),order:Object.keys(c)};function u(t,e,s){let a=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");a+="-"+s}return"col"!==t||""!==s&&!0!==s?(a+="-"+s,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:a,parent:r}){let l="";for(const n in e)l+=String(e[n]);let o=f.get(l);if(!o){let t;for(t in o=[],d)d[t].forEach(s=>{const a=e[s],n=u(t,s,a);n&&o.push(n)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(l,o)}return t(e.tag,Object(n["a"])(s,{class:o}),a)}})},"81a8":function(t,e,s){"use strict";s.r(e);var a=s("b0af"),n=s("62ad"),r=s("a523"),l=s("0fd9"),o=function(){var t=this,e=t._self._c;return e(r["a"],{attrs:{fluid:""}},[e(l["a"],[e(n["a"],{staticClass:"white--text text-h4",attrs:{cols:"12"}},[t._v(" "+t._s(t.id)+" ")]),t._l(t.srcs,(function(s){return e(n["a"],{key:s,attrs:{md:"2",cols:"4"},on:{click:function(e){return t.selectTarget(s)}}},[e(a["a"],{class:{"white--text":!0,"blue--text":t.target.split("?")[0].split("/").pop()===s,selectedCard:t.target.split("?")[0].split("/").pop()===s}},[t._v(" "+t._s(s.split(".")[0])+" ")])],1)}))],2),t.target?e("div",{staticClass:"height60"},[e("div",{staticClass:"vw-100"},[e("video",{attrs:{id:"video",src:t.target,controls:"",autoplay:"",controlslist:"nodownload",oncontextmenu:"return false;"}})])]):t._e(),e("div")],1)},i=[],c=s("bc3a"),d=s.n(c),u={props:["id"],data(){return{srcs:[],target:"",ip:null}},mounted(){this.setHeader(),this.getData()},methods:{selectTarget(t){this.target="https://animeapi.aylu.tw/video/"+this.id+"/"+t+"?token="+this.$cookie.get("token")},getData(){d.a.get("https://animeapi.aylu.tw/video/"+this.id).then(t=>t.data.forEach(t=>{this.srcs.push(t.src)}))},setHeader(){void 0==this.$cookie.get("token")&&this.$router.push("/"),d.a.defaults.headers.common["Authorization"]=this.$cookie.get("token"),d.a.defaults.headers.common["Access-Control-Allow-Origin"]="*"}}},f=u,g=(s("54b9"),s("2877")),p=Object(g["a"])(f,o,i,!1,null,"5513e5c4",null);e["default"]=p.exports},b0af:function(t,e,s){"use strict";s("615b");var a=s("10d2"),n=s("297c"),r=s("1c87"),l=s("58df");e["a"]=Object(l["a"])(n["a"],r["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-db4dc3fc.27e3e287.js.map