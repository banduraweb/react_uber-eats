(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(68)},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),c=t.n(r),s=t(4),i=t(14),o=t.n(i),m=t(26),u=t.n(m),d="SAVE_RESTAURANTS",_="SET_LOAD_RESTAURANTS_ERROR",g="START_LOADING",E="STOP_LOADING",v=function(e){var a=e.data;return{type:d,payload:a}},f=t(10),p=function(e){return e},b=Object(f.a)(p,function(e){var a=e.RestaurantListData;if(!a)return[];var t=a.feedItems,l=a.storesMap;return t.map(function(e){var a=e.uuid;return l[a]})}),h=Object(f.a)(p,function(e){return e.error}),N=Object(f.a)(p,function(e){return e.isLoading}),k=(t(58),function(e){var a=e.title,t=e.heroImageUrl,l=e.categories,r=e.etaRange;return n.a.createElement("div",{className:"restaurant-card"},n.a.createElement("img",{src:t,alt:a,className:"restaurant-card__img"}),n.a.createElement("h2",{className:"restaurant-card__title"},a),n.a.createElement("div",{className:"restaurant-card__categories"},l.join(" \u2022 ")),n.a.createElement("div",{className:"restaurant-card__eta"},r))});k.defaultProps={categories:[],etaRange:""};var y=k,O=(t(59),t(60),function(){return n.a.createElement("div",{className:"loader-container"},n.a.createElement("div",{className:"lds-default"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)))}),j=(t(61),function(e){var a=e.message;return n.a.createElement("div",{className:"error"},n.a.createElement("p",{className:"error__text"},a),n.a.createElement("a",{href:"/",className:"error__link"},"Go to Home"))});j.defaultProps={message:"Sorry, something went wrong"};var S=function(){var e=Object(s.b)(),a=Object(s.c)(function(e){return b(e)}),t=Object(s.c)(function(e){return h(e)}),r=Object(s.c)(function(e){return N(e)});return Object(l.useEffect)(function(){e(function(e){var a,t;return o.a.async(function(l){for(;;)switch(l.prev=l.next){case 0:return e({type:g}),l.prev=1,l.next=4,o.a.awrap(u.a.get("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants"));case 4:a=l.sent,t=a.data,e(v(t)),l.next=12;break;case 9:l.prev=9,l.t0=l.catch(1),e((n=l.t0.message,{type:_,payload:n}));case 12:return l.prev=12,e({type:E}),l.finish(12);case 15:case"end":return l.stop()}var n},null,null,[[1,9,12,15]])})},[]),r?n.a.createElement(O,null):t?n.a.createElement(j,{message:t}):n.a.createElement("div",{className:"restaurants-list"},a.map(function(e){var a=e.heroImageUrl,t=e.title,l=e.uuid,r=e.categories,c=e.etaRange;return n.a.createElement(y,{key:l,heroImageUrl:a,title:t,categories:r,etaRange:c.text})}))},w=t(6),R=t(27),U=t(28),A=t(2),I={RestaurantListData:null,isLoading:!1,error:null},T=Object(w.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:var t=a.payload;return Object(A.a)({},e,{error:null,RestaurantListData:t});case _:var l=a.payload;return Object(A.a)({},e,{error:l,restaurantsListData:null});case g:return Object(A.a)({},e,{isLoading:!0});case E:return Object(A.a)({},e,{isLoading:!1});default:return e}},Object(U.composeWithDevTools)(Object(w.applyMiddleware)(R.a))),D=(t(62),t(63),t(7)),C=t(9),L=(t(64),t(15)),M=t.n(L),V=(t(65),function(e){var a=e.iconUrl,t=e.value,r=e.onChange,c=e.type,s=e.placeholder,i=e.name,o=e.className,m=e.isSmall,u=e.label,d=Object(l.useState)(!1),_=Object(C.a)(d,2),g=_[0],E=_[1],v=M()("control__input-wrapper",Object(D.a)({"control__input-wrapper--focused":g},o,!!o)),f=M()("control__input",{"control__input--small":m,"control-input--time":"time"===c}),p=Object(l.useRef)(null);return n.a.createElement("label",{className:"control"},u&&n.a.createElement("p",{className:"control__Label"},u),n.a.createElement("div",{className:v},!!a&&n.a.createElement("img",{src:a,alt:s,className:"control__icon"}),n.a.createElement("input",{ref:p,type:c,value:t,onChange:r,onFocus:function(){E(!0)},onBlur:function(){E(!1)},name:i,className:f,placeholder:s})))});V.defaultProps={iconUrl:"",type:"text",placeholder:"",className:"",label:"",isSmall:!0};var x=V,P=function(){var e=Object(l.useState)({address:"",time:"",search:"",isMobileSearchVisible:!1,isMobileDeliveryInfoVisible:!1}),a=Object(C.a)(e,2),t=a[0],r=a[1],c=function(e){var a=e.target;r(Object(A.a)({},t,Object(D.a)({},a.name,a.value)))},s=t.address,i=t.time,o=t.search,m=t.isMobileSearchVisible,u=t.isMobileDeliveryInfoVisible;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"header__inner"},n.a.createElement("img",{className:"header__logo",src:"./img/logo.svg",alt:"uber eats logo"}),n.a.createElement("div",{className:"header__delivery-info"},n.a.createElement(x,{name:"address",onChange:c,value:s,placeholder:"Address",iconUrl:"./img/location.svg"}),n.a.createElement(x,{name:"time",onChange:c,value:i,placeholder:"Time",type:"time"})),n.a.createElement("div",{className:"header__search"},n.a.createElement(x,{name:"search",onChange:c,value:o,placeholder:"Search",iconUrl:"./img/search.svg"})),n.a.createElement("div",{className:"header__toggle-buttons"},n.a.createElement("button",{type:"button",className:"header__toggle-btn",onClick:function(){r(Object(A.a)({},t,{isMobileDeliveryInfoVisible:!u,isMobileSearchVisible:!1}))}},n.a.createElement("img",{src:"./img/location.svg",alt:"place icon"})),n.a.createElement("button",{type:"button",className:"header__toggle-btn",onClick:function(){r(Object(A.a)({},t,{isMobileSearchVisible:!m,isMobileDeliveryInfoVisible:!1}))}},n.a.createElement("img",{src:"./img/search.svg",alt:"search icon"}))),n.a.createElement("a",{href:"/sign-in",className:"header__link"},"Sign In")),(m||u)&&n.a.createElement("div",{className:"header__mobile-controls mobile-controls"},m&&n.a.createElement(x,{label:"Find",name:"search",onChange:c,value:o,placeholder:"Search",iconUrl:"./img/search.svg",isSmall:!1}),u&&n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{label:"Where",name:"address",onChange:c,value:s,placeholder:"Address",iconUrl:"./img/location.svg"}),n.a.createElement(x,{label:"To",name:"time",onChange:c,value:i,placeholder:"Time",type:"time"})),n.a.createElement("button",{type:"button",className:"mobile-controls__close",onClick:function(){r(Object(A.a)({},t,{isMobileSearchVisible:!1,isMobileDeliveryInfoVisible:!1}))}},n.a.createElement("img",{src:"./img/close.svg",alt:"close icon"})))))},F=(t(66),t(67),function(e){var a=e.name,t=e.value,l=e.onSelect,r=e.options,c=e.iconUrl;return n.a.createElement("div",{className:"select"},n.a.createElement("select",{name:a,value:t,onChange:l,className:"select__input"},r.map(function(e){var a=e.value,l=e.label;return n.a.createElement("option",{key:l,value:a,selected:t===a},l)})),!!c&&n.a.createElement("img",{className:"select__icon",src:c,alt:"select icon"}),n.a.createElement("img",{className:"select__arrow",src:"./img/arrow-down.svg",alt:"arrow down"}))});F.defaultProps={onSelect:function(){},options:[],iconUrl:""};var G=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"footer__top-part"},n.a.createElement("div",{className:"footer__main"},n.a.createElement("div",{className:"footer__logo-container"},n.a.createElement("img",{className:"footer__logo",src:"./img/footer-logo.svg",alt:"uber eats"}),n.a.createElement(F,{name:"language",options:[{value:"en",label:"English"},{value:"ua",label:"Ukrainian"}],iconUrl:"./img/world.svg"})),n.a.createElement("div",{className:"footer__mobile-apps"},n.a.createElement("a",{href:"#",className:"footer__mobile-app"},n.a.createElement("img",{src:"./img/apple-pay.png",alt:"apple store"})),n.a.createElement("a",{href:"#",className:"footer__mobile-app"},n.a.createElement("img",{src:"./img/google-pay.png",alt:"google play"})))),n.a.createElement("div",{className:"footer__top-links links"},n.a.createElement("a",{href:"#",className:"links__link links__link--intended"},"About UberEats"),n.a.createElement("a",{href:"#",className:"links__link"},"Read our blog"),n.a.createElement("a",{href:"#",className:"links__link"},"Sigh up to deliver"),n.a.createElement("a",{href:"#",className:"links__link"},"Add your restaurant")),n.a.createElement("div",{className:"footer__top-links links"},n.a.createElement("a",{href:"#",className:"links__link links__link--intended"},"Get help"),n.a.createElement("a",{href:"#",className:"links__link"},"Read FAQs"),n.a.createElement("a",{href:"#",className:"links__link"},"View all cities"))),n.a.createElement("div",{className:"footer__bottom-part"},n.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),n.a.createElement("div",{className:"footer__misc"},n.a.createElement("div",{className:"footer__bottom--links links"},n.a.createElement("a",{href:"#",className:"links__link"},"Privacy policy"),n.a.createElement("a",{href:"#",className:"links__link"},"Terms of use"),n.a.createElement("a",{href:"#",className:"links__link"},"Pricing")),n.a.createElement("div",{className:"footer__social social"},n.a.createElement("a",{href:"#",className:"social__link"},n.a.createElement("img",{src:"./img/fb.svg",alt:"facebook"})),n.a.createElement("a",{href:"#",className:"social__link"},n.a.createElement("img",{src:"./img/twitter.svg",alt:"twitter"})),n.a.createElement("a",{href:"#",className:"social__link"},n.a.createElement("img",{src:"./img/instagram.svg",alt:"instagram"})))))))},B=function(){return n.a.createElement(s.a,{store:T},n.a.createElement(P,null),n.a.createElement("main",{className:"page"},n.a.createElement("div",{className:"content"},n.a.createElement(S,null)),n.a.createElement(G,null)))};c.a.render(n.a.createElement(B,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d62f7702.chunk.js.map