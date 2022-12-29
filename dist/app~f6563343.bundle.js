/*! For license information please see app~f6563343.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,n={774:(t,n,e)=>{e.d(n,{Z:()=>d});var i=e(67),r=(e(53),e(510));function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function A(){A=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function d(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{d({},"")}catch(t){d=function(t,n,e){return t[n]=e}}function s(t,n,e,i){var r=n&&n.prototype instanceof m?n:m,o=Object.create(r.prototype),A=new E(i||[]);return o._invoke=function(t,n,e){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return{value:void 0,done:!0}}for(e.method=r,e.arg=o;;){var A=e.delegate;if(A){var a=b(A,e);if(a){if(a===l)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===i)throw i="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i="executing";var c=p(t,n,e);if("normal"===c.type){if(i=e.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(i="completed",e.method="throw",e.arg=c.arg)}}}(t,e,A),o}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function m(){}function h(){}function u(){}var C={};d(C,r,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(k([])));g&&g!==n&&e.call(g,r)&&(C=g);var x=u.prototype=m.prototype=Object.create(C);function v(t){["next","throw","return"].forEach((function(n){d(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function i(r,A,a,c){var d=p(t[r],t,A);if("throw"!==d.type){var s=d.arg,l=s.value;return l&&"object"==o(l)&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){i("next",t,a,c)}),(function(t){i("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return i("throw",t,a,c)}))}c(d.arg)}var r;this._invoke=function(t,e){function o(){return new n((function(n,r){i(t,e,n,r)}))}return r=r?r.then(o,o):o()}}function b(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,b(t,n),"throw"===n.method))return l;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var i=p(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,l;var r=i.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function y(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(y,this),this.reset(!0)}function k(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(e.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:B}}function B(){return{value:void 0,done:!0}}return h.prototype=u,d(x,"constructor",u),d(u,"constructor",h),h.displayName=d(u,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,d(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},v(w.prototype),d(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,i,r,o){void 0===o&&(o=Promise);var A=new w(s(n,e,i,r),o);return t.isGeneratorFunction(e)?A:A.next().then((function(t){return t.done?t.value:A.next()}))},v(x),d(x,c,"Generator"),d(x,r,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(e,i){return A.type="throw",A.arg=t,n.next=e,i&&(n.method="next",n.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],A=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var a=e.call(o,"catchLoc"),c=e.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var A=o?o.completion:{};return A.type=t,A.arg=n,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(A)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var r=i.arg;_(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:k(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}function a(t,n,e,i,r,o,A){try{var a=t[o](A),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(i,r)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var o=t.apply(n,e);function A(t){a(o,i,r,A,c,"next",t)}function c(t){a(o,i,r,A,c,"throw",t)}A(void 0)}))}}const d={render:function(){return c(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="content">\n        <h2 class="content__heading">Explore Restaurant</h2>\n        <div id="data-list" class="item-col">\n        </div>\n      </div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return c(A().mark((function t(){var n,e;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.getListRestaurant();case 2:n=t.sent,e=document.querySelector("#data-list"),n.forEach((function(t){e.innerHTML+=(0,r.J1)(t)}));case 5:case"end":return t.stop()}}),t)})))()}}},510:(t,n,e)=>{e.d(n,{$x:()=>A,J1:()=>c,ci:()=>p,m9:()=>d,pU:()=>a,pn:()=>o,ty:()=>s});var i=e(736),r=function(t){return t.map((function(t){return"<span>".concat(t.name,"</span>")}))},o=function(t){return'<div class="item-review">\n    <div class="item__name">'.concat(t.name,'</div>\n    <div class="item__review_date">').concat(t.date,"</div>\n    <div>").concat(t.review,"</div>\n  </div>\n  ")},A=function(t){return'\n    <h2 class="item__title">'.concat(t.name,'</h2>\n    <img class="item__poster" src="').concat(i.Z.BASE_IMAGE_URL+t.pictureId,'" alt="').concat(t.name,'" />\n    <div class="item__info">\n      <h4>Address</h4>\n      <p>').concat(t.address,", ").concat(t.city,"</p>\n      <h4>Rating</h4>\n      <p>").concat(t.rating,"</p>\n      <h4>Categories</h4>\n      ").concat(r(t.categories),"\n      <h4>Menus</h4>\n      <b>Foods</b><p>").concat(r(t.menus.foods),"</p>\n      <b>Drink</b><p>").concat(r(t.menus.drinks),'</p>\n    </div>\n    <div class="item__overview">\n      <h3>Description</h3>\n      <p>').concat(t.description,'</p>\n    </div>\n    <div>\n    <h4 class="title-review">Customer Review</h4>\n    </div>\n')},a=function(t){return'\n    <h2 class="item__title">'.concat(t.name,'</h2>\n    <img class="item__poster" src="').concat(i.Z.BASE_IMAGE_URL+t.pictureId,'" alt="').concat(t.name,'" />\n    <div class="item__info">\n      <h4>Address</h4>\n      <p>').concat(t.address,", ").concat(t.city,"</p>\n      <h4>Rating</h4>\n      <p>").concat(t.rating,'</p>\n    </div>\n    <div class="item__overview">\n      <h3>Description</h3>\n      <p>').concat(t.description,"</p>\n    </div>\n    <div>\n    </div>\n")},c=function(t){return' <div class="item-row">\n  <div class="img-item">\n    <img tabindex="0" class="lazyload fan-art-item" weight="100%" height="auto" data-src="'.concat(t.pictureId?i.Z.BASE_IMAGE_URL+t.pictureId:"https://picsum.photos/id/666/800/450?grayscale",'" alt="Fan Art">\n    <span tabindex="0" class="city-item">').concat(t.city,'</span>\n  </div>\n  <div class="item-info">\n    <span tabindex="0">Rating ').concat(t.rating,'</span>\n    <h2 tabindex="0"><a href="/#/detail/').concat(t.id,'">').concat(t.name,'</a></h2>\n    <p tabindex="0">').concat(t.description,"</p>\n  </div>\n  </div>")},d=function(t){return' <div class="item-row">\n  <div class="img-item">\n    <img tabindex="0" class="lazyload fan-art-item" data-src="'.concat(t.pictureId?i.Z.BASE_IMAGE_URL+t.pictureId:"https://picsum.photos/id/666/800/450?grayscale",'" alt="Fan Art">\n    <span tabindex="0" class="city-item">').concat(t.city,'</span>\n  </div>\n  <div class="item-info">\n    <span tabindex="0">Rating ').concat(t.rating,'</span>\n    <h2 tabindex="0"><a href="/#/detail-fav/').concat(t.id,'">').concat(t.name,'</a></h2>\n    <p tabindex="0">').concat(t.description,"</p>\n  </div>\n  </div>")},s=function(){return'\n  <button aria-label="like this resto" id="likeButton" class="like">\n  <i class="far fa-heart"></i>\n  </button>\n'},p=function(){return'\n  <button aria-label="unlike this resto" id="likeButton" class="like">\n  <i class="fas fa-heart"></i>\n  </button>\n'}},598:(t,n,e)=>{e.d(n,{Z:()=>a});var i=e(537),r=e.n(i),o=e(645),A=e.n(o)()(r());A.push([t.id,'*{padding:0;margin:0;box-sizing:border-box}body,html{margin:0;padding:0;width:100%;height:100%}body{font-family:"Roboto",sans-serif;font-size:12px;color:#424242}main{margin:20px;padding:20px}img{display:block}.list{text-align:center;margin-bottom:30px}.line{height:2px;width:400px;background-color:gray;margin:10px auto;padding:auto}.item-col{display:grid;grid-template-columns:34% 34% 33%;grid-template-rows:auto;margin:0 auto}@media screen and (max-width: 1199px){.item-col{grid-template-columns:50% 50%}}@media screen and (max-width: 499px){.line{font-size:14px;width:70%}.item-col{grid-template-columns:100%}}footer{background-color:#424242;min-height:56px;display:block;color:#fff;padding:16px;text-align:end}:host{display:block;margin-bottom:18px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);border-radius:10px;overflow:hidden}.fan-art-item{width:100%;height:auto;max-height:250px;object-fit:cover;object-position:center;border-radius:20px}.item-row{width:100%;padding:10px;margin:auto;padding:auto}.item-info{padding:24px 0px}.item-info>h2{font-weight:lighter;margin-top:10px;font-weight:700;min-height:44px;min-width:44px}.item-info>p{margin-top:10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:10}.city-item{position:relative;bottom:22px;padding:10px 30px;font-weight:700;background-color:#c8dbbe;border-top-right-radius:5px;border-bottom-right-radius:5px}@media screen and (max-width: 1199px){.item-row{width:100%;padding:10px}.fan-art-item{width:100%;text-align:center;max-height:200px;object-fit:cover;object-position:center}}.item-item{width:100%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);border-radius:8px;overflow:hidden}.item-item__header{position:relative}.item-item .item-item__header .item-item__header__poster{width:100%}.item-item .item-item__header .item-item__header__rating{position:absolute;padding:8px;bottom:20px;left:0;display:inline-block;background-color:#000;color:#fff}.item-item .item-item__header .item-item__header__rating .item-item__header__rating__score{margin-left:16px}.item-item .item-item__content{padding:16px}.item-item .item-item__content h3{margin:0 0 10px 0}.item-item .item-item__content h3 a{color:#db0000;text-decoration:none}.item-item .item-item__content p{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.item{margin:0 auto;width:100%;max-width:800px}.item .item__poster{width:100%}.item .item__info{margin-top:20px}h4{margin-bottom:10px}.review{margin-top:30px}.review .item-review .item__name{font-weight:700}.review .item-review .item__review_date{color:#ccc}.title-review{width:100%;margin-bottom:0}.item__title{padding:10px;min-height:44px;min-width:44px}.item-info>h2>a{min-height:44px;min-width:44px;padding:12px}@media screen and (min-width: 650px){.item{grid-template-columns:auto 1fr}.item .item__overview{grid-column-start:1;grid-column-end:3}}.like{width:55px;height:55px;display:flex;align-items:center;justify-content:center;background-color:#db0000;position:fixed;bottom:16px;right:16px;border-radius:50%;border:0;font-size:18px;color:#fff;cursor:pointer}',"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAAA,EACE,SAAA,CACA,QAAA,CACA,qBAAA,CAGF,UACE,QAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CAGF,KACE,+BAAA,CACA,cAAA,CACA,aAAA,CAGF,KACE,WAAA,CACA,YAAA,CAEF,IACE,aAAA,CAGF,MACE,iBAAA,CACA,kBAAA,CAGF,MACE,UAAA,CACA,WAAA,CACA,qBAAA,CACA,gBAAA,CACA,YAAA,CAKF,UACE,YAAA,CACA,iCAAA,CACA,uBAAA,CACA,aAAA,CAGF,sCACE,UACE,6BAAA,CAAA,CAKJ,qCACE,MACE,cAAA,CACA,SAAA,CAGF,UACE,0BAAA,CAAA,CAKJ,OACE,wBAAA,CACA,eAAA,CACA,aAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CAMF,MACE,aAAA,CACA,kBAAA,CACA,qCAAA,CACA,kBAAA,CACA,eAAA,CAEF,cACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,gBAAA,CACA,sBAAA,CACA,kBAAA,CAGF,UACE,UAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CAEF,WACE,gBAAA,CAEF,cACE,mBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,cAAA,CAEF,aACE,eAAA,CACA,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,2BAAA,CACA,qBAAA,CAGF,WACE,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,wBAAA,CACA,2BAAA,CACA,8BAAA,CAKF,sCACE,UACE,UAAA,CACA,YAAA,CAIF,cACE,UAAA,CACA,iBAAA,CACA,gBAAA,CACA,gBAAA,CACA,sBAAA,CAAA,CAQJ,WACE,UAAA,CACA,qCAAA,CACA,iBAAA,CACA,eAAA,CAGF,mBACE,iBAAA,CAGF,yDACE,UAAA,CAGF,yDACE,iBAAA,CACA,WAAA,CACA,WAAA,CACA,MAAA,CACA,oBAAA,CACA,qBAAA,CACA,UAAA,CAGF,2FACE,gBAAA,CAGF,+BACE,YAAA,CAGF,kCACE,iBAAA,CAGF,oCACE,aAAA,CACA,oBAAA,CAGF,iCACE,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,2BAAA,CAKF,MACE,aAAA,CACA,UAAA,CACA,eAAA,CAMF,oBACE,UAAA,CAIF,kBACE,eAAA,CAGF,GACE,kBAAA,CAGF,QACE,eAAA,CAEE,iCACE,eAAA,CAEF,wCACE,UAAA,CAKN,cACE,UAAA,CACA,eAAA,CAGF,aACE,YAAA,CACA,eAAA,CACA,cAAA,CAGF,gBACE,eAAA,CACA,cAAA,CACA,YAAA,CAGF,qCACE,MACE,8BAAA,CAEF,sBACE,mBAAA,CACA,iBAAA,CAAA,CAQJ,MACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAEA,cAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,QAAA,CAEA,cAAA,CACA,UAAA,CACA,cAAA",sourcesContent:['* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\nmain {\n  margin: 20px;\n  padding: 20px;\n}\nimg {\n  display: block;\n}\n\n.list{\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.line{\n  height: 2px;\n  width: 400px;\n  background-color: gray;\n  margin: 10px auto;\n  padding: auto;\n}\n\n\n\n.item-col {\n  display: grid;\n  grid-template-columns: 34% 34% 33%;\n  grid-template-rows: auto;\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 1199px) {\n  .item-col {\n    grid-template-columns: 50% 50%;\n  }\n  \n}\n\n@media screen and (max-width: 499px) {\n  .line{\n    font-size: 14px;\n    width : 70%;\n    /* display: none; */\n  }\n  .item-col {\n    grid-template-columns: 100%;\n  }\n}\n\n\nfooter {\n  background-color: #424242;\n  min-height: 56px;\n  display: block;\n  color: white;\n  padding: 16px;\n  text-align: end;\n}\n\n\n// list\n\n:host {\n  display: block;\n  margin-bottom: 18px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.fan-art-item {\n  width: 100%;\n  height: auto;\n  max-height: 250px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 20px;\n}\n\n.item-row{\n  width: 100%;\n  padding: 10px;\n  margin: auto;\n  padding: auto;\n}\n.item-info {\n  padding: 24px 0px;\n}\n.item-info > h2 {\n  font-weight: lighter;\n  margin-top: 10px;\n  font-weight: 700;\n  min-height: 44px;\n  min-width: 44px;\n}\n.item-info > p {\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 10; /* number of lines to show */\n}\n\n.city-item {\n  position: relative;\n  bottom: 22px;\n  padding: 10px 30px;\n  font-weight: 700;\n  background-color: #C8DBBE;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n/* .item-info > span {\n  padding-bottom: 100px;\n} */\n@media screen and (max-width: 1199px) {\n  .item-row{\n    width: 100%;\n    padding: 10px;\n    /* display: none; */\n  }\n\n  .fan-art-item {\n    width: 100%;\n    text-align: center;\n    max-height: 200px;\n    object-fit: cover;\n    object-position: center;\n  }\n}\n\n// list item\n\n/* movie item */\n\n.item-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.item-item__header {\n  position: relative;\n}\n\n.item-item .item-item__header .item-item__header__poster {\n  width: 100%;\n}\n\n.item-item .item-item__header .item-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.item-item .item-item__header .item-item__header__rating .item-item__header__rating__score {\n  margin-left: 16px;\n}\n\n.item-item .item-item__content {\n  padding: 16px;\n}\n\n.item-item .item-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.item-item .item-item__content h3 a {\n  color: #db0000;\n  text-decoration: none;\n}\n\n.item-item .item-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\n/* item */\n\n.item {\n  margin : 0 auto;\n  width: 100%;\n  max-width: 800px;\n  // display: grid;\n  // grid-template-columns: 1fr;\n  // gap: 18px 16px;\n}\n\n.item .item__poster {\n  width: 100%;\n  // max-width: 400px;\n}\n\n.item .item__info {\n  margin-top: 20px;\n}\n\nh4 {\n  margin-bottom: 10px;\n}\n\n.review {\n  margin-top: 30px;\n  .item-review {\n    .item__name {\n      font-weight: 700;\n    }\n    .item__review_date {\n      color: #CCCCCC;\n    }\n  }\n}\n\n.title-review{\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.item__title {\n  padding: 10px;\n  min-height: 44px;\n  min-width: 44px;\n}\n\n.item-info > h2 > a {\n  min-height: 44px;\n  min-width: 44px;\n  padding: 12px;\n}\n\n@media screen and (min-width: 650px){\n  .item {\n    grid-template-columns: auto 1fr;\n  }\n  .item .item__overview {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n}\n\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n \n\n'],sourceRoot:""}]);const a=A},130:(t,n,e)=>{var i=e(379),r=e.n(i),o=e(795),A=e.n(o),a=e(569),c=e.n(a),d=e(565),s=e.n(d),p=e(216),l=e.n(p),m=e(589),h=e.n(m),u=e(598),C={};C.styleTagTransform=h(),C.setAttributes=s(),C.insert=c().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=l(),r()(u.Z,C),u.Z&&u.Z.locals&&u.Z.locals}},e={};function i(t){var r=e[t];if(void 0!==r)return r.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,i),o.exports}i.m=n,t=[],i.O=(n,e,r,o)=>{if(!e){var A=1/0;for(s=0;s<t.length;s++){for(var[e,r,o]=t[s],a=!0,c=0;c<e.length;c++)(!1&o||A>=o)&&Object.keys(i.O).every((t=>i.O[t](e[c])))?e.splice(c--,1):(a=!1,o<A&&(A=o));if(a){t.splice(s--,1);var d=r();void 0!==d&&(n=d)}}return n}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[e,r,o]},i.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return i.d(n,{a:n}),n},i.d=(t,n)=>{for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var n=i.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={535:0};i.O.j=n=>0===t[n];var n=(n,e)=>{var r,o,[A,a,c]=e,d=0;if(A.some((n=>0!==t[n]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var s=c(i)}for(n&&n(e);d<A.length;d++)o=A[d],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),i.nc=void 0;var r=i.O(void 0,[666,576,193,495,82,268],(()=>i(359)));r=i.O(r)})();
//# sourceMappingURL=app~f6563343.bundle.js.map