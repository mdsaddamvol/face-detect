(this.webpackJsonpposenet=this.webpackJsonpposenet||[]).push([[0],{35:function(e,t,n){e.exports=n(57)},40:function(e,t,n){},48:function(e,t){},49:function(e,t){},50:function(e,t){},52:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(32),o=n.n(c),l=n(34),i=(n(40),n(5)),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement("h3",null,"welcome ".concat(e.location.state.state.fullName)))},s=n(10),m=n.n(s),f=n(17),h=n(13),d=n(8),p=(n(52),n(23)),g=n.n(p),b=n(24),E=n(18);n(58),n(59);E.a.apps.length?E.a.app():E.a.initializeApp({apiKey:"AIzaSyDPYIfRwC2hleM1sfAuFbDWo6mOPuSaaaA",authDomain:"smart-face-34f42.firebaseapp.com",projectId:"smart-face-34f42",storageBucket:"smart-face-34f42.appspot.com",messagingSenderId:"686839942351",appId:"1:686839942351:web:abb882c653e7cb991afbba"});var v=function(){var e=Object(f.a)(m.a.mark((function e(t,n,a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=w.doc("users/".concat(n)),e.next=5,r.get();case 5:if(!e.sent.exists)try{r.set({email:n,fullName:t,faceUri:a})}catch(c){console.log(c)}return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),w=E.a.firestore();E.a.storage().ref(),E.a;var j=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)([]),c=Object(h.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(),u=Object(h.a)(i,2),s=(u[0],u[1]),p=Object(a.useState)(1),E=Object(h.a)(p,2),v=E[0],j=E[1],O=Object(a.useState)([]),k=Object(h.a)(O,2),y=k[0],F=k[1],x=Object(a.useState)(""),S=Object(h.a)(x,2),C=S[0],D=S[1],N=Object(a.useState)("scan"),U=Object(h.a)(N,2),M=U[0],R=U[1];Object(a.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="http://localhost:3000models",Promise.all([d.d.tinyFaceDetector.loadFromUri(t),d.d.faceLandmark68Net.loadFromUri(t),d.d.faceRecognitionNet.loadFromUri(t),d.d.ssdMobilenetv1.loadFromUri(t)]).then(console.log("ok"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e;w.collection("users").where("email","==",C).get().then((function(t){t.forEach((function(t){e=t.data()})),l(e)}))}),[v]),Object(a.useEffect)((function(){"object"===typeof o&&F(o.faceUri)}),[o]),Object(a.useEffect)((function(){"sucess"===M&&e.history.push("/dashboard",{state:{fullName:o.fullName}})}),[M]);var I=function(){var e=Object(f.a)(m.a.mark((function e(){var n,a,r,c,o,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R("varifing"),n=t.current.getScreenshot(),s(n),a=new Image,r=new Image,a.src=n,r.src=y,e.next=9,d.b(a,new d.a).withFaceLandmarks().withFaceDescriptors();case 9:return c=e.sent,e.next=12,d.b(r,new d.a).withFaceLandmarks().withFaceDescriptors();case 12:o=e.sent,setTimeout((function(){0===c.length||0===o.length?(console.log("couldnotDetect"),R("couldnotDetect")):l=d.c(c[0].descriptor,o[0].descriptor)}),1e3),setTimeout((function(){"number"===typeof l?l<.4?R("sucess"):(console.log("notMatch"),R("notMatch")):(R("couldnotDetect"),console.log(l))}),2e3);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},1===v&&r.a.createElement("form",null,r.a.createElement("input",{style:{width:200,height:50},type:"email",name:"email",value:C,onChange:function(e){return D(e.target.value)},required:!0,placeholder:"email"}),r.a.createElement("button",{style:{width:200,height:50},onClick:function(){j(2)}},"Next")),2===v&&r.a.createElement(r.a.Fragment,null,"scan"===M&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{audio:!1,height:400,ref:t,screenshotFormat:"image/jpeg",width:500,videoConstraints:{width:1280,height:720,facingMode:"user"}}),r.a.createElement("button",{style:{width:200,height:50},onClick:function(){I()}},"verify")),"varifing"===M&&r.a.createElement("div",null,"processing"),"sucess"===M&&r.a.createElement("div",null,"sucess"),"failed"===M&&r.a.createElement("div",null,"Could not detect,refresh the page or try again "),"couldnotDetect"===M&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"no face detected "),r.a.createElement("button",{onClick:function(){return R("scan")}},"Try again")),"notMatch"===M&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"does not match"),r.a.createElement("button",{onClick:function(){return R("scan")}},"Try again"))),r.a.createElement(b.Link,{to:"/signup"},r.a.createElement("p",null,"Not have an account?")))};var O=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(1),c=Object(h.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(""),u=Object(h.a)(i,2),s=u[0],p=u[1],E=Object(a.useState)(""),w=Object(h.a)(E,2),j=w[0],O=w[1],k=Object(a.useState)(null),y=Object(h.a)(k,2),F=y[0],x=y[1];Object(a.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:3000models",e.next=3,Promise.all([d.d.tinyFaceDetector.loadFromUri(t),d.d.faceLandmark68Net.loadFromUri(t),d.d.faceRecognitionNet.loadFromUri(t),d.d.ssdMobilenetv1.loadFromUri(t)]).then(console.log("ok"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){}),[F]);var S=function(){var t=Object(f.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.current.getScreenshot(),x(n),console.log(n);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},1===o&&r.a.createElement("form",null,r.a.createElement("input",{name:"name",type:"text",value:s,onChange:function(e){return p(e.target.value)},required:!0}),r.a.createElement("input",{type:"email",name:"email",value:j,onChange:function(e){return O(e.target.value)},required:!0,placeholder:"email"}),r.a.createElement("button",{style:{width:200,height:50},onClick:function(){l(2)}})),2===o&&r.a.createElement(r.a.Fragment,null,null===F?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{audio:!1,height:400,ref:e,screenshotFormat:"image/jpeg",width:500,videoConstraints:{width:1280,height:720,facingMode:"user"}}),r.a.createElement("button",{style:{width:200,height:50},onClick:function(){S()}},"Take a shot")):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"text img",ref:t,src:F}),r.a.createElement("button",{style:{width:200,height:50},onClick:function(){x(null)}},"Take a shot again"),r.a.createElement("button",{style:{width:200,height:50},onClick:function(){v(s,j,F)}},"Confrim"))),r.a.createElement(b.Link,{to:"/"},r.a.createElement("p",null,"have an account?")))},k=function(){return r.a.createElement(i.Switch,null,r.a.createElement(i.Route,{exact:!0,path:"/",component:j}),r.a.createElement(i.Route,{exact:!0,path:"/signup",component:O}),r.a.createElement(i.Route,{exact:!0,path:"/dashboard",component:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.31a6840f.chunk.js.map