(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],b=0,d=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04e1":function(e,t,n){"use strict";n("2d05")},"10d0":function(e,t,n){"use strict";n("82af")},"1cf6":function(e,t,n){},"2d05":function(e,t,n){},"2f11":function(e,t,n){e.exports=n.p+"img/footerIcon.e9704230.svg"},4115:function(e,t,n){"use strict";n("95bb")},"56bb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"app"},c={class:"main"};function o(e,t,n,o,u,i){var s=Object(r["y"])("my-header"),l=Object(r["y"])("router-view"),b=Object(r["y"])("my-footer");return Object(r["s"])(),Object(r["e"])("div",a,[Object(r["h"])(s),Object(r["f"])("main",c,[Object(r["h"])(l)]),Object(r["h"])(b)])}var u={class:"header"},i=Object(r["f"])("h1",null,"Health Reader",-1),s={key:0,class:"header__name"},l={key:1,class:"burger"},b=["src"],d=Object(r["g"])(" Escanear "),f=Object(r["g"])(" Registrar Paciente "),g=Object(r["g"])(" Ver Pacientes Registrados "),O=Object(r["g"])(" Ver Historias "),p=Object(r["g"])(" Ver Usuarios ");function j(e,t,a,c,o,j){var v=Object(r["y"])("router-link");return Object(r["s"])(),Object(r["e"])("header",u,[Object(r["h"])(v,{to:"/"},{default:Object(r["F"])((function(){return[i]})),_:1}),c.userLogin?(Object(r["s"])(),Object(r["e"])("span",s,Object(r["A"])(c.userLogin.nombreUsuario),1)):Object(r["d"])("",!0),c.burgerShow?(Object(r["s"])(),Object(r["e"])("div",l,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return c.burgerSwitch=!c.burgerSwitch}),class:"burger__switch"},[Object(r["f"])("img",{src:n("9b78"),alt:""},null,8,b)]),Object(r["f"])("div",{onClick:t[1]||(t[1]=function(){return c.burgerSwitch=!1}),class:Object(r["n"])([c.burgerSwitch&&"burger__background--active","burger__background"])},null,2),Object(r["f"])("nav",{class:Object(r["n"])(["burger__menu",c.burgerSwitch&&"burger__menu--active"])},[Object(r["h"])(v,{to:"/scan",class:"btn btn--menu"},{default:Object(r["F"])((function(){return[d]})),_:1}),Object(r["h"])(v,{to:"",class:"btn btn--menu"},{default:Object(r["F"])((function(){return[f]})),_:1}),Object(r["h"])(v,{to:"",class:"btn btn--menu"},{default:Object(r["F"])((function(){return[g]})),_:1}),c.userLogin&&"administrador"===c.userLogin.rol?(Object(r["s"])(),Object(r["c"])(v,{key:0,to:"",class:"btn btn--menu"},{default:Object(r["F"])((function(){return[O]})),_:1})):Object(r["d"])("",!0),Object(r["h"])(v,{to:"",class:"btn btn--menu"},{default:Object(r["F"])((function(){return[p]})),_:1}),Object(r["f"])("button",{onClick:t[2]||(t[2]=function(){return c.logout&&c.logout.apply(c,arguments)}),class:"btn btn--menu"}," Salir ")],2)])):Object(r["d"])("",!0)])}var v=n("6c02"),m=n("5502"),h={setup:function(){var e=Object(m["b"])(),t=Object(r["x"])(!1),n=Object(r["x"])(!1),a=Object(v["c"])(),c=Object(r["a"])((function(){return e.state.userLogin}));return Object(r["E"])(a,(function(){t.value=!1,a.meta.requireAuth?n.value=!0:n.value=!1})),{logout:function(){return e.dispatch("logout")},burgerSwitch:t,burgerShow:n,userLogin:c}}},y=(n("7a3b"),n("6b0d")),k=n.n(y);const _=k()(h,[["render",j]]);var w=_,x={class:"footer"},S=["src"];function L(e,t){return Object(r["s"])(),Object(r["e"])("footer",x,[Object(r["f"])("img",{src:n("2f11"),alt:""},null,8,S)])}n("10d0");const I={},C=k()(I,[["render",L]]);var P=C,M={title:"Health Reader",components:{MyHeader:w,MyFooter:P},setup:function(){var e=Object(m["b"])(),t=function(){return e.dispatch("getDataLocalStorage")};Object(r["q"])((function(){t()}))}};n("c903");const H=k()(M,[["render",o]]);var U=H,R=(n("b0c0"),{class:"home"}),F=Object(r["g"])(" Escanear Historias "),E=Object(r["g"])(" ver Historias "),D=Object(r["g"])(" Registrar paciente "),T=Object(r["g"])(" Ver Pacientes Registrados ");function A(e,t,n,a,c,o){var u=Object(r["y"])("router-link");return Object(r["s"])(),Object(r["e"])("div",R,[Object(r["f"])("h2",null,"Que deseas Hacer "+Object(r["A"])(a.userLogin.nombreUsuario),1),Object(r["h"])(u,{to:"/scan",class:"btn"},{default:Object(r["F"])((function(){return[F]})),_:1}),Object(r["h"])(u,{to:"",class:"btn"},{default:Object(r["F"])((function(){return[E]})),_:1}),Object(r["h"])(u,{to:"",class:"btn"},{default:Object(r["F"])((function(){return[D]})),_:1}),Object(r["h"])(u,{to:"",class:"btn"},{default:Object(r["F"])((function(){return[T]})),_:1}),Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"btn"}," Salir ")])}var V={name:"Home",setup:function(){var e=Object(m["b"])(),t=Object(r["a"])((function(){return e.state.userLogin}));return{logout:function(){return e.dispatch("logout")},userLogin:t}}};n("fb92");const q=k()(V,[["render",A]]);var J=q,G=Object(r["f"])("h3",{class:"login__title"},"Login",-1),N={key:0,class:"text--error"},z={key:1,class:"btn"};function B(e,t,n,a,c,o){var u=Object(r["y"])("Loading");return Object(r["s"])(),Object(r["e"])("form",{onSubmit:t[2]||(t[2]=Object(r["H"])((function(e){return a.login(a.user)}),["prevent"])),class:"login",action:""},[G,Object(r["G"])(Object(r["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user.email=e}),class:"form-input",type:"text",placeholder:"Correo"},null,512),[[r["C"],a.user.email]]),Object(r["G"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.user.password=e}),class:"form-input",type:"password",placeholder:"Contraseña"},null,512),[[r["C"],a.user.password]]),a.error?(Object(r["s"])(),Object(r["e"])("span",N,Object(r["A"])(a.error.errors?a.error.errors[0].msg:a.error.msg),1)):Object(r["d"])("",!0),a.loading?(Object(r["s"])(),Object(r["c"])(u,{key:2})):(Object(r["s"])(),Object(r["e"])("button",z,"Iniciar Sesion"))],32)}var Q={class:"spinner"};function W(e,t){return Object(r["s"])(),Object(r["e"])("div",Q)}n("04e1");const $={},K=k()($,[["render",W],["__scopeId","data-v-b40efd5a"]]);var X=K,Y={name:"Login",components:{Loading:X},setup:function(){var e=Object(m["b"])(),t=Object(r["w"])({email:"",password:""}),n=Object(r["a"])((function(){return e.state.loading})),a=Object(r["a"])((function(){return e.state.error}));return{login:function(t){return e.dispatch("login",t)},user:t,loading:n,error:a}}};n("4115");const Z=k()(Y,[["render",B]]);var ee=Z,te={class:"scanner"},ne={ref:"Video",id:"video",autoplay:"",class:"scanner__video"},re={class:"scanner-modal"},ae={class:"scanner-modal__container"},ce={class:"scanner-modal__canvas",ref:"Canvas",id:"canvas"},oe={class:"scanner-modal__buttons"},ue={key:0,class:"scanner-modal scanner-modal--loading-error"},ie={class:"scanner-modal__container scanner-modal__container--loading-error"},se={class:"scanner__options"},le=["disabled"],be=["disabled"],de=["src"];function fe(e,t,a,c,o,u){var i=Object(r["y"])("Loading");return Object(r["s"])(),Object(r["e"])("div",te,[Object(r["f"])("video",ne,null,512),Object(r["G"])(Object(r["f"])("div",re,[Object(r["f"])("div",ae,[Object(r["f"])("canvas",ce,null,512),Object(r["f"])("div",oe,[Object(r["f"])("button",{class:"btn btn--scanner-modal",onClick:t[0]||(t[0]=function(){return c.discardImage&&c.discardImage.apply(c,arguments)})},"Descartar"),Object(r["f"])("button",{class:"btn btn--scanner-modal",onClick:t[1]||(t[1]=function(){return c.addImage&&c.addImage.apply(c,arguments)})},"añadir otra foto"),Object(r["f"])("button",{class:"btn btn--scanner-modal",onClick:t[2]||(t[2]=function(){return c.uploadImages&&c.uploadImages.apply(c,arguments)})},"Subir Historia")])])],512),[[r["D"],c.photoModal]]),c.loading||c.error?(Object(r["s"])(),Object(r["e"])("div",ue,[Object(r["f"])("div",ie,[c.loading?(Object(r["s"])(),Object(r["c"])(i,{key:0})):Object(r["d"])("",!0)])])):Object(r["d"])("",!0),Object(r["f"])("div",se,[Object(r["f"])("button",{disabled:c.photoModal,onClick:t[3]||(t[3]=function(){return c.pickPhoto&&c.pickPhoto.apply(c,arguments)}),class:"btn btn--scanner"},"Scanear",8,le),c.dispositives.length>1?(Object(r["s"])(),Object(r["e"])("button",{key:0,disabled:c.photoModal,onClick:t[4]||(t[4]=function(){return c.changeCamera&&c.changeCamera.apply(c,arguments)}),class:"scanner__change"},[Object(r["f"])("img",{src:n("9440"),alt:""},null,8,de)],8,be)):Object(r["d"])("",!0)])])}n("159b");var ge={name:"ScanHistory",components:{Loading:X},setup:function(){var e=Object(m["b"])(),t=Object(v["d"])(),n=Object(r["x"])([]),a=Object(r["x"])(),c=Object(r["x"])(null),o=Object(r["x"])(null),u=Object(r["x"])(null),i=Object(r["x"])([]),s=Object(r["x"])(null),l=Object(r["x"])(!1),b=Object(r["a"])((function(){return o.value.getContext("2d")})),d=Object(r["a"])((function(){return e.state.loading})),f=Object(r["a"])((function(){return e.state.error})),g=function(){return!!(navigator.getUserMedia||navigator.mozGetUserMedia||navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia)},O=function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=[];e.forEach((function(e){var n=e.kind;"videoinput"===n&&t.push(e)})),n.value=JSON.parse(JSON.stringify(t))}))};Object(r["q"])((function(){g()||t.push("/"),O()})),Object(r["E"])(n,(function(){n.value.length>0&&!u.value&&(a.value=0,p(n.value[a.value].deviceId))}));var p=function(e){navigator.mediaDevices.getUserMedia({video:{deviceId:e}}).then((function(e){u.value=e,c.value.srcObject=u.value,c.value.play()})).catch((function(e){console.error("Permiso denegado o error: ",e),t.push("/")}))},j=function(){u.value&&u.value.getTracks().forEach((function(e){e.stop()})),a.value=0===a.value?1:0,p(n.value[a.value].deviceId)},h=function(){c.value.pause(),o.value.width=c.value.videoWidth,o.value.height=c.value.videoHeight,b.value.drawImage(c.value,0,0,o.value.width,o.value.height),o.value.toBlob((function(e){s.value=e,l.value=!0}),"image/jpeg")},y=function(){i.value.push(s.value),s.value=null,l.value=!1,c.value.play()},k=function(){s.value=null,l.value=!1,c.value.play()},_=function(){i.value.push(s.value),e.dispatch("uploadPhoto",i.value),i.value=[],s.value=null,l.value=!1,c.value.play()};return{Video:c,Canvas:o,ctx:b,pickPhoto:h,changeCamera:j,dispositiveSelect:a,dispositives:n,photoModal:l,addImage:y,discardImage:k,uploadImages:_,loading:d,error:f}}};n("c14b");const Oe=k()(ge,[["render",fe]]);var pe=Oe,je={setToken:function(e,t){e.token=t},setUserLogin:function(e,t){e.userLogin=t},setLoading:function(e,t){e.loading=t,e.error=null},setCheckout:function(e,t){e.checkout=t},setError:function(e,t){e.loading=!1,e.error=t}},ve=n("1da1"),me=(n("96cf"),n("d3b7"),function(){var e=Object(ve["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/usuario/iniciarSesion",{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}});case 2:if(n=e.sent,!n.ok){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.next=9,n.json();case 9:throw e.sent;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),he=function(){var e=Object(ve["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,r=0,t.forEach((function(e){r++,n.append("archivo",e,"historia".concat(r,".jpeg"))})),e.next=5,fetch("api/usuario/historiaPaciente",{method:"POST",body:n});case 5:if(a=e.sent,!a.ok){e.next=10;break}return e.abrupt("return",a.json());case 10:return e.next=12,a.json();case 12:throw e.sent;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye={login:function(e,t){return Object(ve["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,r("setLoading",!0),n.next=5,me(t);case 5:a=n.sent,localStorage.setItem("token",a.token),localStorage.setItem("userLogin",JSON.stringify(a.usuario)),r("setToken",a.token),r("setUserLogin",a.usuario),r("setLoading",!1),Se.push("/"),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](1),r("setError",n.t0);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))()},uploadPhoto:function(e,t){return Object(ve["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,r("setLoading",!0),n.next=5,he(t);case 5:a=n.sent,r("setCheckout",a),r("setLoading",!1),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](1),r("setError",n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},logout:function(e){var t=e.commit;localStorage.removeItem("token"),t("setToken",null),localStorage.removeItem("userLogin"),t("setUserLogin",null),Se.push("/login")},getDataLocalStorage:function(e){var t=e.commit,n=localStorage.getItem("token");n&&t("setToken",n);var r=JSON.parse(localStorage.getItem("userLogin"));r&&t("setUserLogin",r)}},ke={},_e=Object(m["a"])({state:{token:null,error:null,users:[],userLogin:null,loading:!1,histories:[],checkout:null},mutations:je,actions:ye,getters:ke}),we=[{path:"/",name:"Home",component:J,meta:{requireAuth:!0}},{path:"/login",name:"Login",component:ee},{path:"/scan",name:"ScanHistory",component:pe,meta:{requireAuth:!0}}],xe=Object(v["a"])({history:Object(v["b"])("/"),routes:we});xe.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return"Login"===e.name})),a=e.matched.some((function(e){return e.meta.requireAuth})),c=e.matched.some((function(e){return e.meta.requireAdmin}));a&&!_e.state.token?n({name:"Login"}):r&&_e.state.token||c&&"administrador"!==_e.state.rol?n({name:"Home"}):n()}));var Se=xe;function Le(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var Ie={created:function(){var e=Le(this);e&&(document.title=e)}};Object(r["b"])(U).use(_e).use(Se).mixin(Ie).mount("#app")},6625:function(e,t,n){},"7a3b":function(e,t,n){"use strict";n("56bb")},"82af":function(e,t,n){},9189:function(e,t,n){},9440:function(e,t,n){e.exports=n.p+"img/change.7ae7fb2c.svg"},"95bb":function(e,t,n){},"9b78":function(e,t,n){e.exports=n.p+"img/burgerIcon.d7203fc1.svg"},c14b:function(e,t,n){"use strict";n("9189")},c903:function(e,t,n){"use strict";n("6625")},fb92:function(e,t,n){"use strict";n("1cf6")}});
//# sourceMappingURL=app.8dcceb50.js.map