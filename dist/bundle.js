(()=>{var n={365:(n,t,e)=>{"use strict";e.d(t,{A:()=>s});var o=e(601),i=e.n(o),r=e(314),a=e.n(r)()(i());a.push([n.id,"@import url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css);"]),a.push([n.id,'@charset "utf-8";\n/* Reset */\n* {\n  margin: 0;\n  padding: 0;\n  user-select: none;\n  -webkit-user-select: none;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nli {\n  list-style: none;\n}\naddress,\nem,\ni {\n  font-style: normal;\n}\nbutton {\n  background: none;\n  border: none;\n}\nimg {\n  vertical-align: middle;\n}\n\nbody,\nhtml {\n  font-family: "pretendard", sans-serif;\n  font-size: 16px;\n  letter-spacing: -0.01rem;\n  overflow: hidden;\n}\n.wrap {\n  position: relative;\n  background-color: #141212;\n  color: #fff;\n}\nheader {\n  position: fixed;\n  width: 100%;\n  z-index: 9999;\n  pointer-events: none;\n}\n\nheader .inner {\n  padding: 30px 50px;\n  .logo {\n    width: 150px;\n    display: flex;\n    justify-content: space-between;\n    gap: 2px;\n    span {\n      img {\n        width: 100%;\n      }\n    }\n  }\n}\n@media screen and (max-width: 1024px) {\n  header .inner {\n    padding: 20px;\n    .logo {\n      width: 100px;\n    }\n  }\n}\n\n/** common */\n.progress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: all 1s linear;\n  z-index: -1;\n}\nsection {\n  margin-bottom: 150px;\n}\n.inner {\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n.box {\n  border-radius: 10px;\n  overflow: hidden;\n}\n.btn {\n  font-size: 11px;\n  padding: 12px 24px;\n  box-sizing: border-box;\n  border-radius: 30px;\n  background-color: #fff;\n  color: #000;\n  display: inline-block;\n  cursor: pointer;\n  text-transform: uppercase;\n  margin-top: 50px;\n}\n.titleBox {\n  overflow: hidden;\n  * {\n    text-align: center;\n  }\n}\n.titleText {\n  font-size: 5rem;\n  font-weight: bold;\n  letter-spacing: 0.1rem;\n}\n.mainText {\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: 0.1rem;\n}\n.subText {\n  font-size: 1rem;\n  font-weight: normal;\n  letter-spacing: 0.05rem;\n}\n@media screen and (max-width: 1024px) {\n  .inner {\n    padding: 0 20px;\n  }\n  .titleText {\n    font-size: 2rem;\n  }\n  .mainText {\n    font-size: 1.5rem;\n  }\n  .subText {\n    font-size: 1rem;\n  }\n}\n\n/* visual */\n.visual {\n  margin-bottom: 0px;\n  .inner {\n    display: grid;\n    height: 100vh;\n    padding: 25px 50px;\n    box-sizing: border-box;\n    grid-template-rows: auto 1fr auto;\n    .titleText {\n      margin-left: auto;\n    }\n    .subText {\n      align-self: flex-end;\n      margin-bottom: 30px;\n      span {\n        color: #585858;\n      }\n    }\n  }\n  .logoWrap {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    object-fit: cover;\n    width: 100%;\n    span {\n      img {\n        width: 100%;\n      }\n    }\n    .star {\n      display: none;\n    }\n  }\n}\n@media screen and (max-width: 1024px) {\n  .visual .inner {\n    .titleText {\n      margin-top: 50px;\n      font-size: 4rem;\n    }\n    .logoWrap {\n      display: grid;\n      grid-template-rows: auto auto; /* 2개의 행을 자동 크기로 설정 */\n      grid-template-columns: repeat(3, 1fr); /* 3개의 열을 동일한 비율로 설정 */\n      .star {\n        display: block;\n      }\n    }\n  }\n}\n/* con1 */\n.con1 {\n  padding: 60px 0;\n  background-color: rgba(55, 55, 55, 0.4);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n\n  .textBox {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n    .imgBox {\n      width: 400px;\n      z-index: 1;\n      img {\n        width: 100%;\n      }\n    }\n    .subTextBox {\n      display: flex;\n      flex-grow: 1;\n      flex-direction: column;\n      gap: 50px;\n      .subText {\n        p {\n          margin-top: 16px;\n          a {\n            margin-top: 4px;\n            color: #e36840;\n            display: flex;\n            gap: 0px;\n            align-items: end;\n            font-weight: bold;\n            transition: all 0.3s;\n          }\n          a:hover {\n            transform: translateX(10px);\n          }\n          a:focus {\n            transform: translateX(30px);\n          }\n        }\n        .icon {\n          font-size: 2rem;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n}\n@media screen and (max-width: 1024px) {\n  .con1 .inner .textBox {\n    flex-direction: column;\n    gap: 10px;\n    .imgBox {\n      width: 300px;\n    }\n  }\n}\n\n.textAni {\n  position: relative;\n  ul {\n    display: grid;\n    li {\n      font-size: 2rem;\n      text-transform: uppercase;\n      letter-spacing: -1px;\n      grid-row-start: 1;\n      grid-column-start: 1;\n      transform: translateX(30px);\n      opacity: 0;\n    }\n  }\n}\n\n/* con4 */\n.con4 {\n  margin-bottom: 0;\n  .listBox {\n    margin-top: 100px;\n    perspective: 999px;\n    li.box {\n      background: #fff;\n      color: #000;\n      padding: 50px;\n      margin-bottom: 50px;\n      position: -webkit-sticky;\n      position: sticky;\n      top: 10px;\n      filter: brightness(1);\n      display: flex;\n      flex-direction: column;\n      .contentBox {\n        display: flex;\n        padding: 50px;\n        gap: 50px;\n        .imgBox {\n          width: 500px;\n          img {\n            width: 100%;\n          }\n        }\n        .textBox {\n          flex-grow: 1;\n        }\n      }\n\n      h2 {\n        border-bottom: 1px solid #ddd;\n        grid-column: 1/3;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .con4 {\n    .listBox {\n      li.box {\n        padding: 30px;\n        .contentBox {\n          flex-direction: column;\n          padding: 20px;\n          .imgBox {\n            width: 100%;\n          }\n        }\n      }\n    }\n  }\n}\n\n/* con5 */\n/* 색상 변수 */\n:root {\n  --border-color: #e36840;\n  --bg-color1: #a89ce6;\n  --bg-color2: #4772b1;\n  --bg-color3: #ffb84f;\n}\n.con5 {\n  padding: 50px 0;\n  border-top: 3px solid var(--border-color);\n  border-bottom: 3px solid var(--border-color);\n\n  .inner {\n    padding: 50px;\n  }\n\n  .listBox {\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n    border-top: 1px solid #fff;\n\n    li {\n      padding: 20px;\n      color: #fff;\n      border-bottom: 1px solid #fff;\n      transition: all 0.2s;\n      .header {\n        pointer-events: none;\n        display: flex;\n        justify-content: space-between;\n      }\n      .body {\n        box-sizing: border-box;\n        width: 100%;\n        display: none;\n        transition: all 0.3s;\n        padding: 20px;\n        img {\n          width: 50%;\n          border-radius: 10px;\n        }\n        h3 {\n          font-size: 4rem;\n        }\n        p {\n          font-size: 2rem;\n        }\n      }\n\n      &:nth-child(3n + 1) {\n        &:hover,\n        &.on {\n          background: var(--bg-color1);\n        }\n      }\n\n      &:nth-child(3n + 2) {\n        &:hover,\n        &.on {\n          background: var(--bg-color2);\n        }\n      }\n\n      &:nth-child(3n + 3) {\n        &:hover,\n        &.on {\n          background: var(--bg-color3);\n        }\n      }\n\n      &.on .body {\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        gap: 20px;\n      }\n    }\n  }\n\n  .cursor {\n    position: absolute;\n    pointer-events: none;\n    z-index: 1;\n    transform: translate(-50%, -50%) scale(0);\n    width: 25px;\n    height: 25px;\n    background: var(--border-color);\n    border-radius: 100%;\n\n    i {\n      opacity: 0;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      font-size: 0.5rem;\n    }\n  }\n\n  .imgBox {\n    position: absolute;\n    pointer-events: none;\n    width: 500px;\n    height: 250px;\n    transform: translate(-50%, -50%) scale(0);\n    overflow: hidden;\n    border-radius: 10px;\n\n    .imgWarp {\n      display: flex;\n    }\n\n    img {\n      width: 500px;\n      height: auto;\n      object-fit: cover;\n    }\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .con5 {\n    .imgBox {\n      opacity: 0;\n    }\n\n    li.on .body {\n      flex-direction: column;\n      width: 100%;\n      display: none;\n      transition: all 0.3s;\n      padding: 10px;\n      img {\n        width: 100%;\n        height: auto;\n        border-radius: 10px;\n      }\n      h3 {\n        font-size: 2rem;\n      }\n      p {\n        font-size: 1rem;\n      }\n    }\n  }\n}\n\n/* footer */\nfooter {\n  position: relative;\n  overflow: hidden;\n  background: white;\n  .inner {\n    padding: 75px;\n    box-sizing: border-box;\n    z-index: 2;\n    position: relative;\n    .box {\n      padding: 50px;\n      background: rgba(55, 55, 55, 0.4);\n      backdrop-filter: blur(20px);\n      -webkit-backdrop-filter: blur(20px);\n      border-radius: 10px;\n      display: flex;\n      .textBox {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n      }\n      .btnBox {\n        display: grid;\n        grid-template-columns: repeat(2, auto);\n        justify-content: center;\n        align-items: center;\n        font-size: 5rem;\n        flex-grow: 1;\n        padding: 50px;\n\n        div {\n          transition: all 0.3s;\n        }\n        div:hover {\n          color: #e36840;\n        }\n        div:after {\n          content: "";\n          width: 10px;\n          height: 10px;\n          border-radius: 100%;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: #e36840;\n          transition: all 0.5s;\n        }\n        div:hover:after {\n          top: 45%;\n          right: 45%;\n          transform: scale(10);\n          z-index: -1;\n          background: #fff;\n        }\n        div:active:after {\n          top: 45%;\n          right: 45%;\n          transform: scale(10);\n          z-index: -1;\n          background: #e36840;\n        }\n        div:active {\n          color: #fff;\n          z-index: 999;\n        }\n      }\n    }\n  }\n  .copyright {\n    padding-bottom: 10px;\n    color: black;\n    text-align: center;\n    font-size: 0.75rem;\n  }\n  .logoWrap {\n    position: absolute;\n    left: 0;\n    top: -50%;\n    width: 100%;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n    span {\n      width: 16%;\n      img {\n        width: 100%;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  footer {\n    .inner {\n      padding: 90px 30px;\n      .box {\n        padding: 30px;\n        flex-direction: column;\n      }\n    }\n  }\n}\n/* loading */\n.loading {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #141212;\n  z-index: 9999;\n  .logo {\n    opacity: 0;\n    width: 200px;\n    display: flex;\n    justify-content: space-between;\n    position: absolute;\n    transform: translateY(100%);\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    overflow: hidden;\n    gap: 2px;\n    span img {\n      width: 90%;\n    }\n  }\n}\n\n.loading.scene1 {\n  display: block;\n  .logo {\n    opacity: 1;\n  }\n  .logo span {\n    animation-name: up;\n    animation-duration: 0.5s;\n  }\n}\n\n.loading.scene2 {\n  .logo span:nth-child(1) {\n    opacity: 0;\n    transition: 0.1s;\n  }\n  .logo span:nth-child(2) {\n    opacity: 0;\n    transition: 0.2s;\n  }\n  .logo span:nth-child(3) {\n    opacity: 0;\n    transition: 0.3s;\n  }\n  .logo span:nth-child(4) {\n    opacity: 0;\n    transition: 0.4s;\n  }\n  .logo span:nth-child(5) {\n    opacity: 0;\n    transition: 0.5s;\n  }\n}\n\n.loading.displayNone {\n  display: none;\n}\n\n.rotate.on {\n  animation-name: up;\n  animation-duration: 1s;\n}\n\n.opacity.on {\n  animation-name: fadeIn;\n  animation-duration: 1s;\n}\n\n/* media */\n::-webkit-scrollbar-thumb {\n  background-color: #ff764a; /* 스크롤바 색상 */\n}\n::-webkit-scrollbar-track {\n  background-color: #141212; /* 스크롤바 트랙 색상 */\n}\n::-webkit-scrollbar {\n  width: 5px; /* 스크롤바 너비 */\n}\n\n/* 키프레임 */\n@keyframes opa {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]);const s=a},314:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);o&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),t.push(p))}},t}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var l=n[s],d=o.base?l[0]+o.base:l[0],p=r[d]||0,c="".concat(d," ").concat(p);r[d]=p+1;var u=e(c),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var m=i(g,o);o.byIndex=s,t.splice(s,0,{identifier:c,updater:m,references:1})}a.push(c)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=e(r[a]);t[s].references--}for(var l=o(n,i),d=0;d<r.length;d++){var p=e(r[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=l}}},659:n=>{"use strict";var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,i&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},981:()=>{window.onload=function(){const n=(n,t,e)=>{setTimeout((()=>{n.forEach((n=>{n.classList.add(t)}))}),e)},t=(n,t,e,o,i)=>{gsap.timeline({scrollTrigger:{trigger:n,start:t,end:e,scrub:o}}).add(i)};let e=document.querySelector(".loading"),o=document.querySelectorAll(".rotate"),i=document.querySelectorAll(".opacity");var r;e.classList.add("scene1"),r=e,setTimeout((()=>{r.classList.add("scene2")}),1e3),setTimeout((()=>{e.classList.remove("scene1","scene2"),e.classList.add("displayNone")}),2e3),n(o,"on",2e3),n(i,"on",2e3),gsap.registerPlugin(ScrollTrigger),t(".visual","100% 100%","100% 0%",1,[gsap.to(".visual h1",{opacity:0,duration:1},0),gsap.to(".visual h2",{opacity:0,duration:1},1),gsap.to(".visual h2 span",{color:"#e36840",duration:1},0),gsap.to(" .logoWrap .y",{x:70,y:350,rotate:20,ease:"none",duration:2},0),gsap.to(" .logoWrap .o",{x:-50,y:250,rotate:-50,ease:"none",duration:2},0),gsap.to(".logoWrap .u",{x:0,y:400,rotate:-5,ease:"none",duration:2},0),gsap.to(".logoWrap .n",{x:40,y:200,rotate:-40,ease:"none",duration:2},0),gsap.to(".logoWrap .g",{x:-90,y:450,rotate:150,ease:"none",duration:2},0),gsap.to(".logoWrap .star",{x:-50,y:200,rotate:-350,ease:"none",duration:2},0)]),gsap.utils.toArray(".titleBox *").forEach((n=>{t(n,"top bottom","top bottom",1,gsap.fromTo(n,{overflow:"hidden",y:150},{overflow:"hidden",y:0},0))})),gsap.utils.toArray(".subText p").forEach((n=>{t(n,"top bottom","top bottom",2,gsap.fromTo(n,{opacity:0,y:100},{opacity:1,y:0,ease:"none",duration:1},0))})),gsap.utils.toArray(".con1 .imgBox").forEach((n=>{t(n,"bottom bottom","bottom top",2,gsap.fromTo(n,{rotate:"10deg"},{rotate:"-10deg"}))})),gsap.utils.toArray(".con4 .listBox .box").forEach(((n,e)=>{t(n,"0% 0%","50% 0%",1,gsap.to(n,{y:20*e,scale:.9+.05*e,transform:"rotateX(-10deg)",transformOrigin:"top",filter:"brightness(0.7)"},0))})),gsap.utils.toArray(".con3 .listBox li").forEach(((n,e)=>{t(n,"top bottom","50% bottom",1,gsap.fromTo(n,{opacity:0,rotationY:"45deg"},{opacity:1,rotationY:"0deg",ease:"none",delay:e%3*1},0))}));const a=document.querySelector(".con5"),s=document.querySelector(".con5 .listBox"),l=document.querySelector(".con5 .imgBox"),d=document.querySelector(".con5 .imgBox .imgWarp"),p=document.querySelector(".con5 .cursor"),c=document.querySelector(".con5 .cursor i"),u=document.querySelectorAll(".con5 .listBox li"),g=(n,t)=>{let e=0;return function(...o){const i=(new Date).getTime();i-e>=t&&(e=i,n.apply(this,o))}};document.querySelectorAll(".con5 .body img").forEach((n=>{n.addEventListener("mouseenter",(()=>{gsap.to(p,{backgroundColor:"rgba(999,999, 999, .8)",scale:3,duration:.3}),gsap.to(c,{opacity:1}),c.classList.add("ri-external-link-line"),c.innerHTML="",c.style.color="black",p.style.borderRadius="1px"})),n.addEventListener("mouseleave",(()=>{gsap.to(p,{backgroundColor:"#e36840",scale:1,duration:.3}),gsap.to(c,{opacity:0}),c.classList.remove("ri-external-link-line"),c.innerHTML="Click",c.style.color="white",p.style.borderRadius="100%"}))}));const m=(n,t,e)=>{document.body.style.cursor=t,gsap.to(a,{borderTop:`3px solid ${e}`,borderBottom:`3px solid ${e}`,duration:.3,ease:"power2.out"}),gsap.to(p,{scale:n,duration:.3,ease:"power2.out"})};a.addEventListener("mouseenter",(n=>{console.log("con5 mouseenter"),m(1,"none","#fff"),p.style.left=`${n.pageX}px`,p.style.top=`${n.pageY}px`})),a.addEventListener("mouseleave",(()=>{m(0,"auto","#e36840")})),a.addEventListener("mousemove",g((n=>{const{pageX:t,pageY:e}=n;gsap.to([p,l],{duration:.2,ease:"back.out(2)",stagger:.1,left:t,top:e})}),50));const f=n=>{gsap.to(l,{scale:n?0:1,duration:.3,ease:"expo.out"}),gsap.to(p,{backgroundColor:n?"#e36840":"rgba(55, 55, 55, 0.5)",scale:n?1:3,duration:.3}),gsap.to(c,{opacity:n?0:1})};u.forEach((n=>{n.addEventListener("click",(()=>{n.classList.toggle("on"),f(n.classList.contains("on"))}))}));const x=g((n=>{if(n.target&&"LI"===n.target.nodeName){const t=Array.from(s.children).indexOf(n.target);f(n.target.classList.contains("on")),n.target.classList.contains("on")||gsap.to(d,{transform:`translateX(-${500*t}px)`})}}),10);s.addEventListener("mousemove",(n=>x(n))),s.addEventListener("mouseleave",(()=>f(!0))),t("footer","top bottom","top top",1,[gsap.to(".logoWrap",{top:"20%",ease:"none",duration:2},0),gsap.to(".logoWrap .y",{x:100,y:100,rotate:20,ease:"none",duration:2},0),gsap.to(".logoWrap .o",{x:80,y:120,rotate:-50,ease:"none",duration:2},0),gsap.to(".logoWrap .u",{x:10,y:80,rotate:70,ease:"none",duration:2},0),gsap.to(".logoWrap .n",{x:-30,y:70,rotate:-30,ease:"none",duration:2},0),gsap.to(".logoWrap .g",{x:-80,y:80,rotate:100,ease:"none",duration:2},0)]),t("footer .btnBox","top bottom","bottom bottom",1,[gsap.to("footer .btnBox div:nth-of-type(1)",{rotate:"20deg",y:6,x:-20,duration:3},0),gsap.to("footer .btnBox div:nth-of-type(2)",{rotate:"-25deg",y:-20,x:8,duration:3},0),gsap.to("footer .btnBox div:nth-of-type(3)",{rotate:"-20deg",y:30,x:-6,duration:3},0),gsap.to("footer .btnBox div:nth-of-type(4)",{rotate:"45deg",y:-25,x:-15,duration:3},0)])}},222:()=>{setTimeout((()=>{document.documentElement.style.overflowY="scroll"}),3e3),window.onbeforeunload=n=>{window.scrollTo(0,0)}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";e(222),e(981);var n=e(72),t=e.n(n),o=e(825),i=e.n(o),r=e(659),a=e.n(r),s=e(56),l=e.n(s),d=e(540),p=e.n(d),c=e(113),u=e.n(c),g=e(365),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),t()(g.A,m),g.A&&g.A.locals&&g.A.locals;const f=(n,t,e)=>{const o=document.createElement(n);return t&&(o.className=t),e&&(o.textContent=e),o},x=document.querySelector(".con5 .imgBox .imgWarp"),h=document.getElementById("project-preview-list"),b=document.querySelector("footer .btnBox");((n,t,e)=>{Object.values({TodoList:{title:"TodoList",desc:"처음으로 만든 TodoList",link:"https://qpwoei0123.github.io/todolist/",created:"2022"},WhoIsElon:{title:"WhoIsElon",desc:"일론머스크는 누구인가?",link:"https://qpwoei0123.github.io/Who_is_Elon_Musk/",created:"2022"},VoiceLabeling:{title:"VoiceLabeling",desc:"더존비즈온 산학협력 프로젝트",link:"https://github.com/qpwoei0123/graduation_project",created:"2022"},AgoraBoard:{title:"AgoraBoard",desc:"질문과 답변을 주고받는",link:"https://qpwoei0123.github.io/my-agora-states/",created:"2023"},CloneSOF:{title:"CloneSOF",desc:"첫 팀 프로젝트 StackOverFlow Clone",link:"http://sofcloneproject.s3-website-ap-northeast-1.amazonaws.com/",created:"2023"},CozyState:{title:"CozyState",desc:"멍때리기 좋은 미디어 서비스",link:"https://www.cozystates.com/",created:"2023"},SnapWeather:{title:"SnapWeather",desc:"나의 동네 날씨를 한눈에 보여주는",link:"https://weather-app-qpwoei0123s-projects.vercel.app/",created:"2023"},Magnet:{title:"Magnet",desc:"멘토멘티 매칭 서비스",link:"https://project-magnet.site/",created:"2024"},BurgerQueen:{title:"BurgerQueen",desc:"버거킹 컨셉의 반응형 헤더",link:"https://qpwoei0123.github.io/resat/reactiveNav/",created:"2024"},HelloThreeJs:{title:"HelloThreeJs",desc:"three.js 학습용 프로젝트, 멋진 소화기는 덤",link:"https://qpwoei0123.github.io/hello-three.js/",created:"2024"},ResatTimer:{title:"ResatTimer",desc:"Resat챌린지 타이머구현",link:"https://qpwoei0123.github.io/resat/timer/",created:"2024"},ResatTodoList:{title:"ResatTodoList",desc:"Resat챌린지 TodoList구현",link:"https://qpwoei0123.github.io/resat/todoList/",created:"2024"},ResatCalendar:{title:"ResatCalendar",desc:"Resat챌린지 캘린더 구현",link:"https://qpwoei0123.github.io/resat/calendar/",created:"2024"},ResatCarousel:{title:"ResatCarousel",desc:"쓰로틀을 이용한 안정적인 Carousel 구현",link:"https://qpwoei0123.github.io/resat/carosel/",created:"2024"},CloneMiniintern:{title:"CloneMiniintern",desc:"미니인턴 페이지 하루만에 클론하기",link:"https://qpwoei0123.github.io/resat/miniintern/",created:"2024"},MyPortfolio:{title:"MyPortfolio",desc:"프론트엔드라면.. 포트폴리오는 필수!",link:"https://qpwoei0123.github.io/",created:"2024"}}).forEach((n=>{t.appendChild((n=>{const t=f("li");return t.appendChild((({title:n,created:t})=>{const e=f("div","header");return e.appendChild(f("h3",null,n)),e.appendChild(f("p",null,t)),e})(n)),t.appendChild((({title:n,desc:t,link:e})=>{const o=f("div","body"),i=f("img");i.src=`./images/gif/${n}.gif`,i.addEventListener("click",(()=>{window.open(e,"_blank")}));const r=f("div");return r.appendChild(f("h3",null,n)),r.appendChild(f("p",null,t)),o.appendChild(i),o.appendChild(r),o})(n)),t})(n)),e.appendChild((n=>{const t=f("img");return t.src=`./images/${n}.png`,t})(n.title))}))})(0,h,x),((n,t)=>{Object.values({Github:{icon:"ri-github-fill",link:"https://github.com/qpwoei0123"},Gmail:{icon:"ri-google-fill",link:"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=qpwoei01234@gmail.com"},Notion:{icon:"ri-notion-fill",link:"https://qpwoei0123.notion.site/1aa3453374c44410810e4793011d0f52?pvs=4"},Resume:{icon:"ri-file-user-line",link:"https://qpwoei0123.notion.site/f0b738c4514c49cb8721dc8cbf671995"}}).forEach((n=>t.appendChild((({icon:n,link:t})=>{const e=f("i",n);e.addEventListener("click",(()=>window.open(t,"_blank")));const o=f("div");return o.appendChild(e),o})(n))))})(0,b)})()})();