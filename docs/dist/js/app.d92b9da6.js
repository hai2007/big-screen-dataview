(function(e){function t(t){for(var r,a,i=t[0],c=t[1],d=t[2],l=0,s=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(s.length)s.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"000c":function(e,t,n){},"0363":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.create(null),o=n("b834"),u=n("7ad3"),a=n("1a2da");r.install=function(e){e.component("echart",o.default),e.component("image2d",u.default),e.component("image3d",a.default)},t.default=r},"0cfe":function(e,t,n){"use strict";n.r(t);var r=n("7e6b"),o=n("525c");for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);var a=n("6b0d"),i=n.n(a);const c=i()(o["default"],[["render",r["render"]]]);t["default"]=c},"0ecc":function(e,t,n){"use strict";var r=n("669b");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},1404:function(e,t,n){"use strict";n.r(t);var r=n("2a09"),o=n("8051");for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);var a=n("6b0d"),i=n.n(a);const c=i()(o["default"],[["render",r["render"]]]);t["default"]=c},"1a2da":function(e,t,n){"use strict";var r=n("dbce").default,o=r(n("7a23"));Object.defineProperty(t,"__esModule",{value:!0});var u=n("7a23"),a=n("90e7"),i=n("4c29"),c=n("1d50");t.default=(0,u.defineComponent)({props:{shader:{type:Object},draw:{type:Function,default:function(){return function(){}}}},setup:function(e){var t,n=(0,u.ref)(),r=(0,u.ref)();return(0,u.onMounted)((function(){var o=new c(r.value,{"vertex-shader":e.shader.vertex,"fragment-shader":e.shader.fragment,depth:!0}),u=function(){var t=i.default.size(n.value);i.default.setStyles(r.value,{width:t.width+"px",height:t.height+"px"}),e.draw(o,t.width,t.height)};u(),t=(0,a.default)(n.value,(function(){u()}))})),(0,u.onBeforeUnmount)((function(){t()})),function(){return o.createVNode("div",{ref:n,style:{width:"100%",height:"100%"}},[o.createVNode("canvas",{ref:r},[o.createTextVNode("非常抱歉，您的浏览器不支持canvas!")])])}}})},"1b6d":function(e,t,n){"use strict";n.r(t);var r=n("5a1f"),o=n("5d46");for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);var a=n("6b0d"),i=n.n(a);const c=i()(o["default"],[["render",r["render"]]]);t["default"]=c},"27a9":function(e,t,n){},"2a09":function(e,t,n){"use strict";var r=n("a560");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"2aa7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o={class:"ui-chart-config"};function u(e,t,n,u,a,i){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o)}t.render=u},"3dfd":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t){var n=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(n)}var u=n("6b0d"),a=n.n(u);const i={},c=a()(i,[["render",o]]);t["default"]=c},"408d":function(e,t,n){},"525c":function(e,t,n){"use strict";n.r(t);var r=n("6a28"),o=n.n(r);for(var u in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u)},"5a1f":function(e,t,n){"use strict";var r=n("2aa7");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"5d46":function(e,t,n){"use strict";n.r(t);var r=n("b97a"),o=n.n(r);for(var u in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u)},"5e62":function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("6c02"),o=[{path:"/",name:"Editor",component:function(){return Promise.resolve().then((function(){return n("83fc")}))}},{path:"/View",name:"View",component:function(){return Promise.resolve().then((function(){return n("0cfe")}))}}],u=(0,r.createRouter)({history:(0,r.createWebHashHistory)(),routes:o});t.default=u},"669b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o=function(e){return(0,r.pushScopeId)("data-v-4c9bffc4"),e=e(),(0,r.popScopeId)(),e},u={class:"editor-page"},a=o((function(){return(0,r.createElementVNode)("header",null,[(0,r.createElementVNode)("h2",null,"大屏编辑器")],-1)})),i={class:"container"},c=["onClick"],d={class:"config"};function f(e,t,n,o,f,l){var s=(0,r.resolveComponent)("ui-view-config"),v=(0,r.resolveComponent)("ui-chart-config"),p=(0,r.resolveDirective)("drag");return(0,r.openBlock)(),(0,r.createElementBlock)("div",u,[a,(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)({background:"color"==e.dataView.background.type?e.dataView.background.color:"url("+e.dataView.background.image+")"})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.dataView.chartlist,(function(t,n){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:n,onClick:function(t){return e.currentIndex=n},style:(0,r.normalizeStyle)([{outline:"1px dashed #f5f2f280",position:"absolute"},{left:t.left+"%",top:t.top+"%",width:t.width+"%",height:t.height+"%"}])},null,12,c)),[[p]])})),128))],4)]),(0,r.createElementVNode)("div",d,[(0,r.createVNode)(s,{background:e.dataView.background,"onUpdate:background":t[0]||(t[0]=function(t){return e.dataView.background=t})},null,8,["background"]),(0,r.createVNode)(v)])])])}t.render=f},"6a28":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23");t.default=(0,r.defineComponent)({setup:function(){return{}}})},"7ad3":function(e,t,n){"use strict";var r=n("dbce").default,o=r(n("7a23"));Object.defineProperty(t,"__esModule",{value:!0});var u=n("7a23"),a=n("90e7"),i=n("4c29"),c=n("acfc");t.default=(0,u.defineComponent)({props:{draw:{type:Function,default:function(){return function(){}}}},setup:function(e){var t,n=(0,u.ref)(),r=(0,u.ref)();return(0,u.onMounted)((function(){var o=c(r.value),u=function(){var t=i.default.size(n.value);o.css({width:t.width+"px",height:t.height+"px"}),e.draw(o.painter().clearRect(),t.width,t.height)};u(),t=(0,a.default)(n.value,(function(){u()}))})),(0,u.onBeforeUnmount)((function(){t()})),function(){return o.createVNode("div",{ref:n,style:{width:"100%",height:"100%"}},[o.createVNode("canvas",{ref:r},[o.createTextVNode("非常抱歉，您的浏览器不支持canvas!")])])}}})},"7c43":function(e,t,n){"use strict";n.r(t);var r=n("deac"),o=n.n(r);for(var u in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u)},"7e6b":function(e,t,n){"use strict";var r=n("cf1f");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"7f27":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),o=n("3b12"),u=n("8bc0");t.default=(0,r.defineComponent)({props:{background:u.default},setup:function(e,t){var n=(0,r.ref)(null),u=(0,r.ref)(e.background.type),a=(0,r.ref)(e.background.color),i=(0,r.ref)(e.background.image);function c(){t.emit("update:background",{type:u.value,color:a.value,image:i.value})}return(0,r.onMounted)((function(){o(n.value,e.background.color,"选择颜色").then((function(e){a.value=e,c()}))})),{type:u,color:a,image:i,colorBtn:n,setImage:function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(){i.value=n.result,c()},n.readAsDataURL(t)}}}})},8051:function(e,t,n){"use strict";n.r(t);var r=n("7f27"),o=n.n(r);for(var u in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u)},"83fc":function(e,t,n){"use strict";n.r(t);var r=n("0ecc"),o=n("7c43");for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("9f2e");var a=n("6b0d"),i=n.n(a);const c=i()(o["default"],[["render",r["render"]],["__scopeId","data-v-4c9bffc4"]]);t["default"]=c},"8bc0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e}();t.default=r},"90e7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=!0;function o(e,t){var n=null,o=!1,u=!1,a=function(){if(o)u=!0;else{o=!0;var e=window.setInterval((function(){u||(window.clearInterval(e),o=!1,t()),u=!1}),100)}};try{n=new ResizeObserver(a),n.observe(e)}catch(i){r&&(console.error("ResizeObserver undefined!"),r=!1),a(),window.addEventListener("resize",a,!1)}return function(){n&&n.disconnect()}}t.default=o},9864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(e){}}},"9a74":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={background:{type:"color",color:"",image:""},chartlist:[{width:100,height:10,left:0,top:0},{width:40,height:45,left:0,top:10},{width:20,height:45,left:40,top:10},{width:40,height:45,left:60,top:10},{width:33.3,height:45,left:0,top:55},{width:33.3,height:45,left:33.3,top:55},{width:33.3,height:45,left:66.6,top:55}]}},"9f2e":function(e,t,n){"use strict";n("408d")},a560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o={class:"ui-view-config"},u=(0,r.createElementVNode)("h4",null,"背景",-1),a=(0,r.createElementVNode)("label",null,"类型：",-1),i=(0,r.createTextVNode)("颜色 "),c=(0,r.createTextVNode)("图片 "),d=(0,r.createElementVNode)("label",null,"颜色：",-1),f=(0,r.createElementVNode)("label",null,"图片：",-1);function l(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[u,(0,r.createElementVNode)("div",null,[a,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"radio",name:"type","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.type=t}),value:"color"},null,512),[[r.vModelRadio,e.type]]),i,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"radio",name:"type","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.type=t}),value:"image"},null,512),[[r.vModelRadio,e.type]]),c]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[d,(0,r.createElementVNode)("button",{ref:"colorBtn",style:(0,r.normalizeStyle)({backgroundColor:e.color})}," ",4)],512),[[r.vShow,"color"==e.type]]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[f,(0,r.createElementVNode)("input",{type:"file",style:{width:"130px"},onChange:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.setImage&&e.setImage.apply(e,t)}),accept:"image/*"},null,32)],512),[[r.vShow,"image"==e.type]])])}t.render=l},ac33:function(e,t,n){},b81d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={textStyle:{color:"#ffffff"}}},b834:function(e,t,n){"use strict";var r=n("dbce").default,o=r(n("7a23"));n("e9c4"),Object.defineProperty(t,"__esModule",{value:!0});var u=n("7a23"),a=n("313e"),i=n("90e7"),c=n("4c29"),d=n("b81d");t.default=(0,u.defineComponent)({props:{options:{type:Object,default:function(){return{}}}},setup:function(e,t){var n,r,f=t.expose,l=(0,u.ref)();return(0,u.onMounted)((function(){a.registerTheme("big-screen-dataview",d.default),n=a.init(l.value,"big-screen-dataview"),n.setOption(e.options),r=(0,i.default)(l.value,(function(){var e=JSON.parse(JSON.stringify(n.getOption()));n.clear(),n.resize(c.default.size(l.value)),n.setOption(e)}))})),(0,u.onBeforeUnmount)((function(){n.dispose(),n=null,r()})),f({setOption:function(e){n.setOption(e)}}),function(){return o.createVNode("div",{ref:l,style:{width:"100%",height:"100%"}},null)}}})},b97a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23");t.default=(0,r.defineComponent)({setup:function(){return{}}})},cd49:function(e,t,n){"use strict";n("e260"),n("e6cf"),n("cca6"),n("a79d"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),o=n("3dfd");n("8afe"),n("000c"),n("27a9"),n("ac33");var u=n("5e62"),a=n("0363"),i=n("ee2f");(0,r.createApp)(o.default).use(i.default).use(a.default).use(u.default).mount("#app")},cf1f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o={class:"view-page"};function u(e,t,n,u,a,i){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o)}t.render=u},deac:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),o=n("9864"),u=n("1404"),a=n("1b6d"),i=n("9a74");t.default=(0,r.defineComponent)({setup:function(){var e=(0,r.reactive)(i.default);return{dataView:e,currentIndex:(0,r.ref)(-1)}},directives:{drag:o.default},components:{uiViewConfig:u.default,uiChartConfig:a.default}})},ee2f:function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.create(null),o=function(e,t,r){return new Promise((function(o,u){n("fd5e")({method:e,url:t,data:r,header:{},timeout:6e3},(function(e){o(e)}),(function(e){u(e)}))}))};r.install=function(e){e.mixin({methods:{$get:function(e){return o("GET",e)}}})},t.default=r}});