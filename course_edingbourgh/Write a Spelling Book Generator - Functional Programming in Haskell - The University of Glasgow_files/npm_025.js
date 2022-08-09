/*! For license information please see npm.react-modal-91f21a4f7bbf56e12fd5-1.1.js.LICENSE.txt */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.react-modal"],{"2zs7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.canUseDOM=void 0;var o=n("2rMq");var r=a(o);function a(e){return e&&e.__esModule?e:{default:e}}var s=r.default;var l=s.canUseDOM?window.HTMLElement:{};t.canUseDOM=s.canUseDOM;t.default=l},"9rZX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n("qFS3");var r=a(o);function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default;e.exports=t["default"]},QEso:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o))e[o]=n[o]}return e};var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}return function(t,n,o){if(n)e(t.prototype,n);if(o)e(t,o);return t}}();var s=n("q1tI");var l=E(s);var u=n("17x9");var i=E(u);var f=n("VKEO");var c=w(f);var d=n("S1to");var p=E(d);var v=n("Ye7m");var h=w(v);var m=n("fbhf");var b=w(m);var y=n("2zs7");var O=E(y);var C=n("UIKY");var g=E(C);n("WkvU");function w(e){if(e&&e.__esModule)return e;else{var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n];t.default=e;return t}}function E(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function S(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var j={overlay:"ReactModal__Overlay",content:"ReactModal__Content"};var R=9;var N=27;var P=0;var A=function(e){S(t,e);function t(e){_(this,t);var n=M(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.setOverlayRef=function(e){n.overlay=e;n.props.overlayRef&&n.props.overlayRef(e)};n.setContentRef=function(e){n.content=e;n.props.contentRef&&n.props.contentRef(e)};n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&b.remove(document.body,a);r&&b.remove(document.getElementsByTagName("html")[0],r);if(o&&P>0){P-=1;if(0===P)h.show(t)}if(n.props.shouldFocusAfterRender)if(n.props.shouldReturnFocusAfterClose){c.returnFocus();c.teardownScopedFocus()}else c.popWithoutFocus();if(n.props.onAfterClose)n.props.onAfterClose();g.default.deregister(n)};n.open=function(){n.beforeOpen();if(n.state.afterOpen&&n.state.beforeClose){clearTimeout(n.closeTimer);n.setState({beforeClose:false})}else{if(n.props.shouldFocusAfterRender){c.setupScopedFocus(n.node);c.markForFocusLater()}n.setState({isOpen:true},(function(){n.setState({afterOpen:true});if(n.props.isOpen&&n.props.onAfterOpen)n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))}};n.close=function(){if(n.props.closeTimeoutMS>0)n.closeWithTimeout();else n.closeWithoutTimeout()};n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()};n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:true,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))};n.closeWithoutTimeout=function(){n.setState({beforeClose:false,isOpen:false,afterOpen:false,closesAt:null},n.afterClose)};n.handleKeyDown=function(e){if(e.keyCode===R)(0,p.default)(n.content,e);if(n.props.shouldCloseOnEsc&&e.keyCode===N){e.stopPropagation();n.requestClose(e)}};n.handleOverlayOnClick=function(e){if(null===n.shouldClose)n.shouldClose=true;if(n.shouldClose&&n.props.shouldCloseOnOverlayClick)if(n.ownerHandlesClose())n.requestClose(e);else n.focusContent();n.shouldClose=null};n.handleContentOnMouseUp=function(){n.shouldClose=false};n.handleOverlayOnMouseDown=function(e){if(!n.props.shouldCloseOnOverlayClick&&e.target==n.overlay)e.preventDefault()};n.handleContentOnClick=function(){n.shouldClose=false};n.handleContentOnMouseDown=function(){n.shouldClose=false};n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)};n.ownerHandlesClose=function(){return n.props.onRequestClose};n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose};n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)};n.buildClassName=function(e,t){var o="object"===("undefined"===typeof t?"undefined":r(t))?t:{base:j[e],afterOpen:j[e]+"--after-open",beforeClose:j[e]+"--before-close"};var a=o.base;if(n.state.afterOpen)a=a+" "+o.afterOpen;if(n.state.beforeClose)a=a+" "+o.beforeClose;return"string"===typeof t&&t?a+" "+t:a};n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){n[e+"-"+o]=t[o];return n}),{})};n.state={afterOpen:false,beforeClose:false};n.shouldClose=null;n.moveFromContentToOverlay=null;return n}a(t,[{key:"componentDidMount",value:function(){if(this.props.isOpen)this.open()}},{key:"componentDidUpdate",value:function(e,t){if(false);if(this.props.isOpen&&!e.isOpen)this.open();else if(!this.props.isOpen&&e.isOpen)this.close();if(this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen)this.focusContent()}},{key:"componentWillUnmount",value:function(){if(this.state.isOpen)this.afterClose();clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&b.add(document.body,r);o&&b.add(document.getElementsByTagName("html")[0],o);if(n){P+=1;h.hide(t)}g.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles;var s=n?{}:a.content;var u=r?{}:a.overlay;return this.shouldBeClosed()?null:l.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},u,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},l.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]);return t}(s.Component);A.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}};A.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.instanceOf(O.default),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,testId:i.default.string};t.default=A;e.exports=t["default"]},S1to:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=s;var o=n("ZDLa");var r=a(o);function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=(0,r.default)(e);if(!n.length){t.preventDefault();return}var o=void 0;var a=t.shiftKey;var s=n[0];var l=n[n.length-1];if(e===document.activeElement){if(!a)return;o=l}if(l===document.activeElement&&!a)o=s;if(s===document.activeElement&&a)o=l;if(o){t.preventDefault();o.focus();return}var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);var i=null!=u&&"Chrome"!=u[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent);if(!i)return;var f=n.indexOf(document.activeElement);if(f>-1)f+=a?-1:1;o=n[f];if("undefined"===typeof o){t.preventDefault();o=a?l:s;o.focus();return}t.preventDefault();o.focus()}e.exports=t["default"]},UIKY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function e(){var t=this;o(this,e);this.register=function(e){if(-1!==t.openInstances.indexOf(e)){if(false);return}t.openInstances.push(e);t.emit("register")};this.deregister=function(e){var n=t.openInstances.indexOf(e);if(-1===n){if(false);return}t.openInstances.splice(n,1);t.emit("deregister")};this.subscribe=function(e){t.subscribers.push(e)};this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))};this.openInstances=[];this.subscribers=[]};var a=new r;t.default=a;e.exports=t["default"]},VKEO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.handleBlur=i;t.handleFocus=f;t.markForFocusLater=c;t.returnFocus=d;t.popWithoutFocus=p;t.setupScopedFocus=v;t.teardownScopedFocus=h;var o=n("ZDLa");var r=a(o);function a(e){return e&&e.__esModule?e:{default:e}}var s=[];var l=null;var u=false;function i(){u=true}function f(){if(u){u=false;if(!l)return;setTimeout((function(){if(l.contains(document.activeElement))return;var e=(0,r.default)(l)[0]||l;e.focus()}),0)}}function c(){s.push(document.activeElement)}function d(){var e=null;try{if(0!==s.length){e=s.pop();e.focus()}return}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function p(){s.length>0&&s.pop()}function v(e){l=e;if(window.addEventListener){window.addEventListener("blur",i,false);document.addEventListener("focus",f,true)}else{window.attachEvent("onBlur",i);document.attachEvent("onFocus",f)}}function h(){l=null;if(window.addEventListener){window.removeEventListener("blur",i);document.removeEventListener("focus",f)}else{window.detachEvent("onBlur",i);document.detachEvent("onFocus",f)}}},WkvU:function(e,t,n){"use strict";var o=n("UIKY");var r=a(o);function a(e){return e&&e.__esModule?e:{default:e}}var s=void 0,l=void 0,u=[];function i(){if(0===u.length){if(false);return}u[u.length-1].focusContent()}function f(e,t){if(!s||!l){s=document.createElement("div");s.setAttribute("data-react-modal-body-trap","");s.style.position="absolute";s.style.opacity="0";s.setAttribute("tabindex","0");s.addEventListener("focus",i);l=s.cloneNode();l.addEventListener("focus",i)}u=t;if(u.length>0){if(document.body.firstChild!==s)document.body.insertBefore(s,document.body.firstChild);if(document.body.lastChild!==l)document.body.appendChild(l)}else{if(s.parentElement)s.parentElement.removeChild(s);if(l.parentElement)l.parentElement.removeChild(l)}}r.default.subscribe(f)},Ye7m:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.assertNodeList=u;t.setElement=i;t.validateElement=f;t.hide=c;t.show=d;t.documentNotReadyOrSSRTesting=p;t.resetForTesting=v;var o=n("2W6z");var r=s(o);var a=n("2zs7");function s(e){return e&&e.__esModule?e:{default:e}}var l=null;function u(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){var t=e;if("string"===typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);u(n,t);t="length"in n?n[0]:n}l=t||l;return l}function f(e){if(!e&&!l){(0,r.default)(false,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" "));return false}return true}function c(e){if(f(e))(e||l).setAttribute("aria-hidden","true")}function d(e){if(f(e))(e||l).removeAttribute("aria-hidden")}function p(){l=null}function v(){l=null}},ZDLa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=u;var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return true;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function a(e){var t=e;while(t){if(t===document.body)break;if(r(t))return false;t=t.parentNode}return true}function s(e,t){var n=e.nodeName.toLowerCase();var r=o.test(n)&&!e.disabled||("a"===n?e.href||t:t);return r&&a(e)}function l(e){var t=e.getAttribute("tabindex");if(null===t)t=void 0;var n=isNaN(t);return(n||t>=0)&&s(e,!n)}function u(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)}e.exports=t["default"]},fbhf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.dumpClassLists=a;var o={};var r={};function a(){if(false);}var s=function(e,t){if(!e[t])e[t]=0;e[t]+=1;return t};var l=function(e,t){if(e[t])e[t]-=1;return t};var u=function(e,t,n){n.forEach((function(n){s(t,n);e.add(n)}))};var i=function(e,t,n){n.forEach((function(n){l(t,n);0===t[n]&&e.remove(n)}))};t.add=function(e,t){return u(e.classList,"html"==e.nodeName.toLowerCase()?o:r,t.split(" "))};t.remove=function(e,t){return i(e.classList,"html"==e.nodeName.toLowerCase()?o:r,t.split(" "))}},qFS3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o))e[o]=n[o]}return e};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}return function(t,n,o){if(n)e(t.prototype,n);if(o)e(t,o);return t}}();var a=n("q1tI");var s=O(a);var l=n("i8i4");var u=O(l);var i=n("17x9");var f=O(i);var c=n("QEso");var d=O(c);var p=n("Ye7m");var v=y(p);var h=n("2zs7");var m=O(h);var b=n("VCL8");function y(e){if(e&&e.__esModule)return e;else{var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n];t.default=e;return t}}function O(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var E=t.portalClassName="ReactModalPortal";var _=t.bodyOpenClassName="ReactModal__Body--open";var M=void 0!==u.default.createPortal;var S=function(){return M?u.default.createPortal:u.default.unstable_renderSubtreeIntoContainer};function j(e){return e()}var R=function(e){w(t,e);function t(){var e;var n,r,a;C(this,t);for(var l=arguments.length,i=Array(l),f=0;f<l;f++)i[f]=arguments[f];return a=(n=(r=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r),r.removePortal=function(){!M&&u.default.unmountComponentAtNode(r.node);var e=j(r.props.parentSelector);if(e)e.removeChild(r.node);else console.warn('React-Modal: "parentSelector" prop did not returned any DOM '+"element. Make sure that the parent element is unmounted to "+"avoid any memory leaks.")},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=S();var a=n(r,s.default.createElement(d.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(a)},n),g(r,a)}r(t,[{key:"componentDidMount",value:function(){if(!h.canUseDOM)return;if(!M)this.node=document.createElement("div");this.node.className=this.props.portalClassName;var e=j(this.props.parentSelector);e.appendChild(this.node);!M&&this.renderPortal(this.props)}},{key:"getSnapshotBeforeUpdate",value:function(e){var t=j(e.parentSelector);var n=j(this.props.parentSelector);return{prevParent:t,nextParent:n}}},{key:"componentDidUpdate",value:function(e,t,n){if(!h.canUseDOM)return;var o=this.props,r=o.isOpen,a=o.portalClassName;if(e.portalClassName!==a)this.node.className=a;var s=n.prevParent,l=n.nextParent;if(l!==s){s.removeChild(this.node);l.appendChild(this.node)}if(!e.isOpen&&!r)return;!M&&this.renderPortal(this.props)}},{key:"componentWillUnmount",value:function(){if(!h.canUseDOM||!this.node||!this.portal)return;var e=this.portal.state;var t=Date.now();var n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);if(n){if(!e.beforeClose)this.portal.closeWithTimeout();setTimeout(this.removePortal,n-t)}else this.removePortal()}},{key:"render",value:function(){if(!h.canUseDOM||!M)return null;if(!this.node&&M)this.node=document.createElement("div");var e=S();return e(s.default.createElement(d.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(e){v.setElement(e)}}]);return t}(a.Component);R.propTypes={isOpen:f.default.bool.isRequired,style:f.default.shape({content:f.default.object,overlay:f.default.object}),portalClassName:f.default.string,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),overlayClassName:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),appElement:f.default.instanceOf(m.default),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,ariaHideApp:f.default.bool,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,parentSelector:f.default.func,aria:f.default.object,data:f.default.object,role:f.default.string,contentLabel:f.default.string,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func};R.defaultProps={isOpen:false,portalClassName:E,bodyOpenClassName:_,role:"dialog",ariaHideApp:true,closeTimeoutMS:0,shouldFocusAfterRender:true,shouldCloseOnEsc:true,shouldCloseOnOverlayClick:true,shouldReturnFocusAfterClose:true,parentSelector:function(){return document.body}};R.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,b.polyfill)(R);t.default=R}}]);