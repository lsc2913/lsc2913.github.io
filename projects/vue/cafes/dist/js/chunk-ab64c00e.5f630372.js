(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab64c00e"],{"053b":function(t,e,s){var i=s("1e2c"),a=s("d910").f,r=Function.prototype,n=r.toString,o=/^\s*function ([^ (]*)/,c="name";i&&!(c in r)&&a(r,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},"064b":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"08ba":function(t,e,s){var i=s("d890"),a=s("064b"),r=s("3c10"),n=s("0fc1");for(var o in a){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(d){l.forEach=r}}},"0d7a":function(t,e,s){"use strict";var i=s("b2a2"),a=s("8a1c"),r=s("857c"),n=s("2732"),o=s("ef4c"),c=s("38eb"),l=s("d88d"),d=s("59da"),u=s("5139"),f=s("efe2"),h=[].push,p=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));i("split",2,(function(t,e,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(n(this)),r=void 0===s?v:s>>>0;if(0===r)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,r);var o,c,l,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(o=u.call(g,i)){if(c=g.lastIndex,c>p&&(d.push(i.slice(p,o.index)),o.length>1&&o.index<i.length&&h.apply(d,o.slice(1)),l=o[0].length,p=c,d.length>=r))break;g.lastIndex===o.index&&g.lastIndex++}return p===i.length?!l&&g.test("")||d.push(""):d.push(i.slice(p)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var a=n(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a,s):i.call(String(a),e,s)},function(t,a){var n=s(i,t,this,a,i!==e);if(n.done)return n.value;var u=r(t),f=String(this),h=o(u,RegExp),m=u.unicode,C=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),b=new h(g?u:"^(?:"+u.source+")",C),S=void 0===a?v:a>>>0;if(0===S)return[];if(0===f.length)return null===d(b,f)?[f]:[];var x=0,L=0,y=[];while(L<f.length){b.lastIndex=g?L:0;var k,_=d(b,g?f:f.slice(L));if(null===_||(k=p(l(b.lastIndex+(g?0:L)),f.length))===x)L=c(f,L,m);else{if(y.push(f.slice(x,L)),y.length===S)return y;for(var A=1;A<=_.length-1;A++)if(y.push(_[A]),y.length===S)return y;L=x=k}}return y.push(f.slice(x)),y}]}),!g)},"3c10":function(t,e,s){"use strict";var i=s("5dfd").forEach,a=s("d7e1"),r=s("ff9c"),n=a("forEach"),o=r("forEach");t.exports=n&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"58e5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"outBox"},[s("van-nav-bar",{attrs:{title:"提交订单","left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),s("div",{staticClass:"order-box"},[s("div",{staticClass:"address",on:{click:t.openAddress}},[s("p",[t._v(t._s(t.userAddress.address))])]),s("div",{staticClass:"order-content"},[s("div",{staticClass:"order-item"},[t._l(t.orderData,(function(e,i){return s("div",{key:i,staticClass:"items"},[s("div",{staticClass:"clearfix"},[s("div",{staticClass:"fl pro-img"},[s("img",{staticClass:"auto-img",attrs:{src:e.small_img}})]),s("div",{staticClass:"fl pro-info"},[s("div",{staticClass:"fl"},[s("div",{staticClass:"names"},[s("div",{staticClass:"zh-name"},[t._v(t._s(e.name))]),s("div",{staticClass:"en-name"},[t._v(t._s(e.enname))])]),s("div",{staticClass:"rule"},[t._v(t._s(e.rule))])]),s("div",{staticClass:"fr"},[s("div",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),s("div",{staticClass:"count"},[t._v("x"+t._s(e.count))])])])])])})),s("div",{staticClass:"order-total clearfix"},[s("div",{staticClass:"fr clearfix"},[s("span",{staticClass:"fl total-count"},[t._v("共计 "+t._s(t.counts)+" 件商品 合计：")]),s("span",{staticClass:"fl total-price"},[t._v("￥"+t._s(t.total))])])])],2)])]),s("van-submit-bar",{attrs:{price:100*t.total,"button-text":"立即结算"},on:{submit:t.nowClearing}}),s("van-popup",{staticClass:"popup-box",attrs:{position:"bottom"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[s("van-address-list",{staticClass:"addressList",attrs:{list:t.addressList,"default-tag-text":"默认"},on:{"click-item":t.selectAddress,add:t.addNewAddress},model:{value:t.aid,callback:function(e){t.aid=e},expression:"aid"}})],1)],1)},a=[],r=(s("fe59"),s("053b"),s("e35a"),s("0d7a"),s("08ba"),s("e15d"),{data:function(){return{isOpen:!1,sids:[],orderData:[],total:null,counts:null,aid:"1",addressList:[],userAddress:{address:"请选择收货地址。",phone:"",receiver:""}}},created:function(){var t=this.$route.query.sids.split("-");this.sids=t,this.getPayOrderData(t),this.getAddressData()},methods:{openAddress:function(){this.isOpen=!0},getPayOrderData:function(t){var e=this,s=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/commitShopcart",params:{appkey:this.appkey,tokenString:s,sids:JSON.stringify(t)}}).then((function(t){e.$toast.clear(),5e4==t.data.code&&(t.data.result.forEach((function(t){e.counts+=t.count,e.total+=t.count*t.price})),e.orderData=t.data.result)})).catch((function(){e.$toast.clear()}))},getAddressData:function(){var t=this,e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),2e4==e.data.code&&e.data.result.forEach((function(e){var s={id:e.aid,tel:e.tel,name:e.name,address:e.province+e.city+e.county+e.addressDetail,isDefault:Boolean(e.isDefault)};e.isDefault&&(t.aid=e.aid,t.userAddress.address=s.address,t.userAddress.phone=s.tel,t.userAddress.receiver=s.name),t.addressList.push(s)}))})).catch((function(){t.$toast.clear()}))},selectAddress:function(t){this.isOpen=!1,this.address=t.address,this.userAddress={address:t.address,phone:t.tel,receiver:t.name}},addNewAddress:function(){this.$router.push({name:"address"})},nowClearing:function(){var t=this;if("请选择收货地址"!=this.userAddress.address){var e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/pay",data:{appkey:this.appkey,tokenString:e,sids:JSON.stringify(this.sids),phone:this.userAddress.phone,address:this.userAddress.address,receiver:this.userAddress.receiver}}).then((function(e){t.$toast.clear(),6e4===e.data.code&&t.$router.push({name:"order"})})).catch((function(){t.$toast.clear()}))}else this.$toast("请选择收货地址")}}}),n=r,o=s("9ca4"),c=Object(o["a"])(n,i,a,!1,null,"e4c342b0",null);e["default"]=c.exports},d7e1:function(t,e,s){"use strict";var i=s("efe2");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},e15d:function(t,e,s){},fe59:function(t,e,s){"use strict";var i=s("1c8b"),a=s("3c10");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})}}]);
//# sourceMappingURL=chunk-ab64c00e.5f630372.js.map