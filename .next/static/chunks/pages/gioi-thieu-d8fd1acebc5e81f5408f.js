_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/eHF":function(e,t,i){"use strict";function n(e,t){var i=t.distance,n=t.left,s=t.right,o=t.up,a=t.down,l=t.top,u=t.bottom,c=t.big,p=t.mirror,h=t.opposite,f=(i?i.toString():0)+((n?1:0)|(s?2:0)|(l||a?4:0)|(u||o?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(c?128:0));if(d.hasOwnProperty(f))return d[f];var v=n||s||o||a||l||u,m=void 0,y=void 0;if(v){if(!p!=!(e&&h)){var b=[s,n,u,l,a,o];n=b[0],s=b[1],l=b[2],u=b[3],o=b[4],a=b[5]}var w=i||(c?"2000px":"100%");m=n?"-"+w:s?w:"0",y=a||l?"-"+w:o||u?w:"0"}return d[f]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),d[f]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,s=(e.out,e.forever),o=e.timeout,a=e.duration,l=void 0===a?r.defaults.duration:a,c=e.delay,d=void 0===c?r.defaults.delay:c,p=e.count,h=void 0===p?r.defaults.count:p,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===o?l:o,delay:d,forever:s,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,u.default)(f,v,v,i):v}Object.defineProperty(t,"__esModule",{value:!0});var o,a=i("17x9"),r=i("ar19"),l=i("eH+L"),u=(o=l)&&o.__esModule?o:{default:o},c={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},d={};s.propTypes=c,t.default=s,e.exports=t.default},"0ZlR":function(e,t,i){e.exports={aboutUsWrapper:"AboutUs_aboutUsWrapper__2gSP8",img:"AboutUs_img__1jG2a",aboutUsCard:"AboutUs_aboutUsCard__3DNAw",title:"AboutUs_title__1UVSx",question:"AboutUs_question__hDtil",text:"AboutUs_text__3K8kd"}},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,s=!1,o=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){s=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(s)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i("q1tI"),u=(n=l)&&n.__esModule?n:{default:n},c=i("17x9"),d=i("ar19"),p=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),h={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:p.isRequired,outEffect:(0,c.oneOfType)([p,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},f={transitionGroup:c.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,d.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,s=i.forever,o=i.count,a=i.delay,r=i.duration;if(!s){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),a+(r+(t?r:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),s=this.isOn?this.getDimensionValue():0,o=void 0,a=void 0;if(t.collapseOnly)o=i.duration/3,a=i.delay;else{var r=n>>2,l=r>>1;o=r,a=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:s,transition:"height "+o+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,s=void 0;e.collapseOnly?s={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),s={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(s,e,i):s),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):u.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,r=n.reverse,l=i.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var p=r?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":s(e))&&e?u.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(r?p--:p++,0,l,o,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===s(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,s=n.style,o=n.className,r=n.children,l=this.props.disabled?o:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),c=a({},s,{opacity:1})):c=this.props.disabled?s:a({},s,this.state.style);var p=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:c},this.props.refProp,this.saveRef)),h=u.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),s=Math.min(i,window.innerHeight)*(d.globalHide?e.fraction:0);return n>s-window.innerHeight&&n<i-s}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(u.default.Component);v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},"9N20":function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i("q1tI"),s=i.n(n),o=i("oQai"),a=i.n(o),r=i("WxnA"),l=i("/eHF"),u=i.n(l),c=i("nOHt"),d=i("8nVP"),p=s.a.createElement;function h(e){var t=e.services,i=e.disableTitle,n=e.disableBackground,o=Object(c.useRouter)(),l=function(e){o.push("/dich-vu/".concat(e))};return p(s.a.Fragment,null,n?p(s.a.Fragment,null,!i&&p("div",{className:a.a.title},"D\u1ecaCH V\u1ee4"),p("div",{className:a.a.servicesWrapper},t.map((function(e,t){return p(u.a,{left:!(t%2),right:!!(t%2),key:t},p("div",{className:a.a.item,onClick:function(){return l(e.urlTitle)}},p("div",{className:a.a.name},e.title),p("div",{className:a.a.icon},p("img",{src:"".concat(d.a,"/api/post/image/").concat(e.urlTitle),alt:"icon"}))))})))):p(r.a,null,!i&&p("div",{className:a.a.title},"D\u1ecaCH V\u1ee4"),p("div",{className:a.a.servicesWrapper},t.map((function(e,t){return p(u.a,{left:!(t%2),right:!!(t%2),key:t},p("div",{className:a.a.item,onClick:function(){return l(e.urlTitle)}},p("div",{className:a.a.name},e.title),p("div",{className:a.a.icon},p("img",{src:"/api/post/image/".concat(e.urlTitle),alt:"icon"}))))})))))}},OJ0L:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("q1tI"),s=i.n(n),o=i("sWQt"),a=i.n(o),r=s.a.createElement;function l(e){var t=e.name,i=e.breadcrumb;return r("div",{className:a.a.shopWrapper},r("div",{className:a.a.blurBackgroundWrapper,style:{background:"url('/images/paint-shop.jpg')"}},r("div",{className:a.a.blurBackground}),r("div",{className:a.a.wave},r("img",{src:"/images/wave-white.svg",alt:"wave"})),r("div",{className:a.a.text},r("div",{className:a.a.name},t),r("div",{className:a.a.breadcrumb},i))))}},WxnA:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("q1tI"),s=i.n(n),o=i("z9DI"),a=i.n(o),r=s.a.createElement;function l(e){var t=e.children;return r("div",{className:a.a.wave},r("img",{src:"/images/wave.png",alt:"wave"}),r("div",{className:a.a.children},t))}},ar19:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function s(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",s,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",s,!0),window.document.removeEventListener("visibilitychange",s))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,s){var o=Math.log(n),a=(Math.log(s)-o)/(i-t);return Math.exp(o+a*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+p)+"{"+e+"}",i=h[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),h[e]=p,""+v+p++)},t.hideAll=s,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=a=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,v=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(u,1500),r||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",s,!0),window.addEventListener("orientationchange",s,!0),window.document.addEventListener("visibilitychange",s))}},"eH+L":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(a.default,s({},e,{inEffect:t,outEffect:i,children:n})):(n=o.default.Children.map(n,(function(n){return o.default.createElement(a.default,s({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(i("q1tI")),a=n(i("28nh"));e.exports=t.default},oQai:function(e,t,i){e.exports={title:"Services_title__CIQfd",servicesWrapper:"Services_servicesWrapper__2e2v7",item:"Services_item__2Cd0V",icon:"Services_icon__1qCug",name:"Services_name__2kVNv"}},pCuh:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gioi-thieu",function(){return i("x4B4")}])},sWQt:function(e,t,i){e.exports={shopWrapper:"Green_shopWrapper__3Ll6P",blurBackgroundWrapper:"Green_blurBackgroundWrapper__1V_mS",blurBackground:"Green_blurBackground__11moC",wave:"Green_wave__2plSM",text:"Green_text__2jMqj",breadcrumb:"Green_breadcrumb__341Lf"}},x4B4:function(e,t,i){"use strict";i.r(t),i.d(t,"__N_SSG",(function(){return h})),i.d(t,"default",(function(){return f}));var n=i("q1tI"),s=i.n(n),o=i("L7kf"),a=i("OJ0L"),r=i("/eHF"),l=i.n(r),u=i("0ZlR"),c=i.n(u),d=i("9N20"),p=s.a.createElement,h=!0;function f(e){var t=e.siteInfo,i=e.services;return p(o.a,{title:"Gi\u1edbi Thi\u1ec7u | S\u01a1n Ph\u01b0\u01a1ng Nam",contacts:t},p(a.a,{name:"Gi\u1edbi Thi\u1ec7u",breadcrumb:"Trang ch\u1ee7 / Gi\u1edbi Thi\u1ec7u"}),p("div",{className:c.a.aboutUsWrapper},p(l.a,{left:!0},p("div",{className:c.a.img},p("img",{src:"/images/company.jpeg",alt:"About Us"}))),p(l.a,{right:!0},p("div",{className:c.a.aboutUsCard},p("div",{className:c.a.title},"V\u1ec1 ch\xfang t\xf4i"),p("div",{className:c.a.question},"Ch\xfang t\xf4i l\xe0 ai?"),p("div",{className:c.a.text},"Chuy\xean b\xe1n v\xe0 ph\xe2n ph\u1ed1i c\xe1c s\u1ea3n ph\u1ea9m s\u01a1n epoxy H\xe0n qu\u1ed1c, \u0110\xe0i Loan. Ch\xfang t\xf4i lu\xf4n cam k\u1ebft mang l\u1ea1i cho kh\xe1ch h\xe0ng s\u1ea3n ph\u1ea9m s\u01a1n epoxy ch\u1ea5t l\u01b0\u1ee3ng t\u1ed1t nh\u1ea5t v\u1edbi gi\xe1 th\xe0nh r\u1ebb nh\u1ea5t gi\xfap c\xe1c doanh nghi\u1ec7p c\xf4ng ty ti\u1ebft ki\u1ec7m tri\u1ec7t \u0111\u1ec3 chi ph\xed \u0111\u1ea7u t\u01b0 nh\xe0 x\u01b0\u1edfng ban \u0111\u1ea7u ch\xednh h\xe3ng gi\xe1 r\u1ebb \u1edf Tp. H\u1ed3 Ch\xed Minh...")))),p(d.a,{services:i}))}},z9DI:function(e,t,i){e.exports={wave:"WaveBackgroundLayout_wave__2O8mP",children:"WaveBackgroundLayout_children__59GBZ"}}},[["pCuh",1,2,5,4,7,0,3,6,8,9]]]);