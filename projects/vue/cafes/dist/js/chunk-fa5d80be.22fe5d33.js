(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa5d80be"],{2701:function(t,e,a){},bc77:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outBox"},[a("van-nav-bar",{attrs:{title:"我的收藏","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.go(-1)}}}),t.productLists.length<=0?a("div",{staticClass:"emptyContent"},[a("van-empty",{attrs:{description:"您还没有收藏的宝贝哦！"}}),a("div",{staticClass:"goShopping",on:{click:t.goShopping}},[a("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}}),t._v("去逛逛")])],1):a("div",{staticClass:"productBox"},t._l(t.productLists,(function(e,i){return a("div",{key:i,staticClass:"ProductItem"},[a("div",{staticClass:"imgBox",on:{click:function(a){return t.goDetail(e.pid)}}},[a("img",{attrs:{src:e.smallImg}})]),a("p",{staticClass:"productName"},[t._v(t._s(e.name))]),a("p",{staticClass:"enName"},[t._v(t._s(e.enname))]),a("div",{staticClass:"clearfix pd"},[a("span",{staticClass:"fl price"},[t._v("￥"+t._s(e.price))]),a("span",{staticClass:"deleteBox fr",on:{click:function(a){return t.delProduct(e.pid,i)}}},[a("van-icon",{staticClass:"delete-icon",attrs:{name:"delete"}})],1)])])})),0)],1)},s=[],n=(a("ea69"),a("2701"),{data:function(){return{productLists:[]}},created:function(){this.findAllProduct()},methods:{findAllProduct:function(){var t=this,e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAllLike",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),2e3==e.data.code&&(t.productLists=e.data.result)})).catch((function(){t.$toast.clear()}))},delProduct:function(t,e){var a=this,i=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/notlike",data:{appkey:this.appkey,tokenString:i,pid:t}}).then((function(t){a.$toast.clear(),900==t.data.code&&a.productLists.splice(e,1)})).catch((function(){a.$toast.clear()}))},goDetail:function(t){this.$router.push({name:"detail",query:{pid:t}})},goShopping:function(){this.$router.push({name:"menu"})}}}),o=n,c=a("9ca4"),r=Object(c["a"])(o,i,s,!1,null,"3c0c9c26",null);e["default"]=r.exports},ea69:function(t,e,a){"use strict";var i=a("1c8b"),s=a("e1d6"),n=a("3da3"),o=a("d88d"),c=a("3553"),r=a("1ca1"),l=a("1bbd"),d=a("1ea7"),u=a("ff9c"),p=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,i,d,u,p,f,k=c(this),C=o(k.length),_=s(t,C),x=arguments.length;if(0===x?a=i=0:1===x?(a=0,i=C-_):(a=x-2,i=g(h(n(e),0),C-_)),C+a-i>m)throw TypeError(v);for(d=r(k,i),u=0;u<i;u++)p=_+u,p in k&&l(d,u,k[p]);if(d.length=i,a<i){for(u=_;u<C-i;u++)p=u+i,f=u+a,p in k?k[f]=k[p]:delete k[f];for(u=C;u>C-i+a;u--)delete k[u-1]}else if(a>i)for(u=C-i;u>_;u--)p=u+i-1,f=u+a-1,p in k?k[f]=k[p]:delete k[f];for(u=0;u<a;u++)k[u+_]=arguments[u+2];return k.length=C-i+a,d}})}}]);
//# sourceMappingURL=chunk-fa5d80be.22fe5d33.js.map