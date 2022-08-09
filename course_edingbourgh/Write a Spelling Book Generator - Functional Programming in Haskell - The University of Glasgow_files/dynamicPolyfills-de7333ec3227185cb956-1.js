/*! For license information please see dynamicPolyfills-de7333ec3227185cb956-1.1.es5.js.LICENSE.txt */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packs/dynamicPolyfills","components/Admin/components/PeerGradedAssignmentPromptForm","components/Admin/sections/PeerGradedAssignment/Prompts","components/DesignSystem/Actions/Dismissable","components/DesignSystem/FeedbackAndNotices/NewsletterSignupBanner","components/DesignSystem/Navigation/RelatedLinksQuiet","components/DesignSystem/Structure/CardCarousel","components/LearningManager/components/InvitationsTable/InvitationsTableRow","components/LearningManager/components/Navigation","components/LearningManager/sections/BulkProgramInvitations/DownloadCsvTemplate","components/LearningManager/sections/BulkProgramInvitations/Result","components/LearningManager/sections/BulkProgramInvitations/UploadCsv","components/LearningManager/sections/BulkProgramInvitations/UploadSuccess","components/LearningManager/sections/CourseInvitations/ChooseCourse","components/LearningManager/sections/InviteLearners","components/LearningManager/sections/LearnerInvitations/InvitationsTable/InvitationsTableRow","components/LearningManager/sections/ProgramEnrolmentFlow/Confirmation","components/LearningManager/sections/ProgramEnrolmentFlow/SelectProgramRun","components/LearningManager/sections/ProgramInvitations","components/LearningManager/sections/SamlEnrolmentLinks/ChooseCourse","components/Pages/Campus/LandingPage","components/Pages/Campus/LandingPage/EmailVerification","components/Pages/Campus/OrganisationCampusSettingsForm","components/Pages/CourseDescriptionPage/CallToAction","components/Pages/CourseDescriptionPage/Comparison/UnlimitedWhatsIncluded","components/Pages/CourseDescriptionPage/EducatorsSection","components/Pages/CourseDescriptionPage/ExpertTrackAboutSection","components/Pages/CourseDescriptionPage/ExpertTrackJoinSection","components/Pages/CourseDescriptionPage/PageHeader","components/Pages/CourseDescriptionPage/Partners","components/Pages/Homepage","components/Pages/ManageCourseCollectionPages","components/Pages/PeerGrade/ReviewItem","components/Pages/PeerGradedAssignment/SubmissionResponse","components/Pages/PeerGradedAssignment/SubmissionStatus","components/Pages/ProgramAchievement","components/Pages/ProgramAchievementDownload","components/Pages/Programs/ExpertTrackDescriptionPage","components/Pages/Programs/MicrocredentialDescriptionPage","components/Pages/ReviewsPage/FaqSection","components/Pages/ReviewsPage/Header","components/Pages/SendGridSegments/Delete","components/Pages/SubjectCategory/Show","components/Pages/UnpublishedExpertTracks","components/Partials/ArchetypeSurvey","components/Partials/Checkout/CertificateName","components/Partials/Comment","components/Partials/CommentSection","components/Partials/CourseProposalForm","components/Partials/CourseSchedule","components/Partials/CoursesSearch","components/Partials/DegreeEnrolmentsTable","components/Partials/DegreeSelectForm","components/Partials/EditProgramAchievementPage","components/Partials/EndOfCourseBanner","components/Partials/ExtraBenefitsSlideout","components/Partials/FacilitationDashboard","components/Partials/Footer","components/Partials/FooterNavigation","components/Partials/GroupWorkspaceContributions","components/Partials/IDVerificationPrompt","components/Partials/Insights","components/Partials/LeaveProgramToggle","components/Partials/MainNavigation","components/Partials/ManageCourse","components/Partials/ManageCourse/RetiredCourseForm","components/Partials/ManageCourses","components/Partials/ManageSubtopics","components/Partials/ManageSubtopics/SubtopicForm","components/Partials/ManageTeam","components/Partials/ManageTeam/PermissionForm","components/Partials/MarketingCourseCardsPreview","components/Partials/MarketingOptInPromo","components/Partials/MicrocredentialApplicationDeclaration","components/Partials/MicrocredentialApplicationEligibility","components/Partials/MicrocredentialApplicationYourDetails","components/Partials/NewProgramRunCourse","components/Partials/NewsletterSignup","components/Partials/Polls","components/Partials/PortfolioAssignment","components/Partials/PortfolioUpload","components/Partials/PostCourseSurvey","components/Partials/PrepaidCourseDeals","components/Partials/PrepaidEnrolmentsTable","components/Partials/PublishResults","components/Partials/Readability","components/Partials/RunLinks","components/Partials/RunProgresses","components/Partials/RunWeeklySurvey","components/Partials/SamlEnrolmentLinksTable","components/Partials/ScoresList","components/Partials/Search","components/Partials/SecureFileShare","components/Partials/SelectResultsToPublish","components/Partials/Testimonials","components/Partials/Topics","components/Partials/UpdateExternalLearnerIdsResult","components/Partials/UploadResultsFailureTable","components/Partials/VoucherTable","components/Partials/WishlistButtons","components/Partials/YourLearning/YourExpertTracks","components/Partials/YourWishlist","components/Shared/ActionLinkForm","components/Shared/ConnectAccount","components/Shared/FilteredCourseGrid","components/Shared/LandingPageCardGrid","components/Shared/Step/Base"],{"+wdc":function(e,n,t){"use strict";var r,o,a,i,s;if("undefined"===typeof window||"function"!==typeof MessageChannel){var c=null,u=null,l=function(){if(null!==c)try{var e=n.unstable_now();c(!0,e);c=null}catch(t){throw setTimeout(l,0),t}},f=Date.now();n.unstable_now=function(){return Date.now()-f};r=function(e){null!==c?setTimeout(r,0,e):(c=e,setTimeout(l,0))};o=function(e,n){u=setTimeout(e,n)};a=function(){clearTimeout(u)};i=function(){return!1};s=n.unstable_forceFrameRate=function(){}}else{var p=window.performance,m=window.Date,d=window.setTimeout,v=window.clearTimeout;if("undefined"!==typeof console){var g=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===typeof p&&"function"===typeof p.now)n.unstable_now=function(){return p.now()};else{var b=m.now();n.unstable_now=function(){return m.now()-b}}var y=!1,P=null,h=-1,w=5,S=0;i=function(){return n.unstable_now()>=S};s=function(){};n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):w=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,O=k.port2;k.port1.onmessage=function(){if(null!==P){var e=n.unstable_now();S=e+w;try{P(!0,e)?O.postMessage(null):(y=!1,P=null)}catch(t){throw O.postMessage(null),t}}else y=!1};r=function(e){P=e;y||(y=!0,O.postMessage(null))};o=function(e,t){h=d((function(){e(n.unstable_now())}),t)};a=function(){v(h);h=-1}}function C(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,o=e[r];if(void 0!==o&&0<T(o,n))e[r]=n,e[t]=o,t=r;else break e}}function j(e){e=e[0];return void 0===e?null:e}function E(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,i=e[a],s=a+1,c=e[s];if(void 0!==i&&0>T(i,t))void 0!==c&&0>T(c,i)?(e[r]=c,e[s]=t,r=s):(e[r]=i,e[a]=t,r=a);else if(void 0!==c&&0>T(c,t))e[r]=c,e[s]=t,r=s;else break e}}return n}return null}function T(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var _=[],M=[],L=1,R=null,D=3,I=!1,x=!1,A=!1;function F(e){for(var n=j(M);null!==n;){if(null===n.callback)E(M);else if(n.startTime<=e)E(M),n.sortIndex=n.expirationTime,C(_,n);else break;n=j(M)}}function B(e){A=!1;F(e);if(!x)if(null!==j(_))x=!0,r(N);else{var n=j(M);null!==n&&o(B,n.startTime-e)}}function N(e,t){x=!1;A&&(A=!1,a());I=!0;var r=D;try{F(t);for(R=j(_);null!==R&&(!(R.expirationTime>t)||e&&!i());){var s=R.callback;if(null!==s){R.callback=null;D=R.priorityLevel;var c=s(R.expirationTime<=t);t=n.unstable_now();"function"===typeof c?R.callback=c:R===j(_)&&E(_);F(t)}else E(_);R=j(_)}if(null!==R)var u=!0;else{var l=j(M);null!==l&&o(B,l.startTime-t);u=!1}return u}finally{R=null,D=r,I=!1}}function q(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var U=s;n.unstable_IdlePriority=5;n.unstable_ImmediatePriority=1;n.unstable_LowPriority=4;n.unstable_NormalPriority=3;n.unstable_Profiling=null;n.unstable_UserBlockingPriority=2;n.unstable_cancelCallback=function(e){e.callback=null};n.unstable_continueExecution=function(){x||I||(x=!0,r(N))};n.unstable_getCurrentPriorityLevel=function(){return D};n.unstable_getFirstCallbackNode=function(){return j(_)};n.unstable_next=function(e){switch(D){case 1:case 2:case 3:var n=3;break;default:n=D}var t=D;D=n;try{return e()}finally{D=t}};n.unstable_pauseExecution=function(){};n.unstable_requestPaint=U;n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=D;D=e;try{return n()}finally{D=t}};n.unstable_scheduleCallback=function(e,t,i){var s=n.unstable_now();if("object"===typeof i&&null!==i){var c=i.delay;c="number"===typeof c&&0<c?s+c:s;i="number"===typeof i.timeout?i.timeout:q(e)}else i=q(e),c=s;i=c+i;e={id:L++,callback:t,priorityLevel:e,startTime:c,expirationTime:i,sortIndex:-1};c>s?(e.sortIndex=c,C(M,e),null===j(_)&&e===j(M)&&(A?a():A=!0,o(B,c-s))):(e.sortIndex=i,C(_,e),x||I||(x=!0,r(N)));return e};n.unstable_shouldYield=function(){var e=n.unstable_now();F(e);var t=j(_);return t!==R&&null!==R&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<R.expirationTime||i()};n.unstable_wrapCallback=function(e){var n=D;return function(){var t=D;D=n;try{return e.apply(this,arguments)}finally{D=t}}}},"1zUv":function(e,n,t){"use strict";t.r(n);(function(e){t("4mDm");t("2B1R");t("07d7");t("5s+n");t("rB9j");t("PKPk");t("UxlC");t("3bBZ");t("Kz25");var n=t("Bndk");var r=t("mBJF");var o=function(){if(!Object(n["b"])())return r["d"].fail("Browser does not support the APIs needed to render React");return r["d"].succeed()};var a=function(e){var n=e.test,t=e.load;if(n)return Promise.resolve();return t()};var i=[{test:"fetch"in window,load:function(){return t.e("vendors~dynamic-polyfills").then(t.bind(null,"bZMm"))}},{test:"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&"isIntersecting"in window.IntersectionObserverEntry.prototype,load:function(){return t.e("vendors~dynamic-polyfills").then(t.t.bind(null,"Wr5T",7))}},{test:function(){try{var n=new e.URL("b","http://a");n.pathname="c%20d";return"http://a/c%20d"===n.href&&n.searchParams}catch(t){return false}}(),load:function(){return t.e("vendors~dynamic-polyfills").then(t.t.bind(null,"T1qB",7))}},{test:"scrollBehavior"in document.documentElement.style,load:function(){return t.e("vendors~dynamic-polyfills").then(t.t.bind(null,"dwco",7)).then((function(e){var n=e["default"];return n.polyfill()}))}},{test:Element.prototype.matches,load:function(){return t.e("vendors~dynamic-polyfills").then(t.t.bind(null,"AqrU",7))}},{test:"classList"in document.createElement("_")&&"replace"in document.createElement("_").classList,load:function(){return t.e("vendors~dynamic-polyfills").then(t.t.bind(null,"5yqK",7))}},{test:Element.prototype.closest,load:function(){return t.e("vendors~dynamic-polyfills").then(t.t.bind(null,"3FeN",7))}}];Promise.all(i.map(a)).then(o)}).call(this,t("yLpj"))},Bndk:function(e,n,t){"use strict";t.d(n,"b",(function(){return r}));t.d(n,"a",(function(){return o}));t.d(n,"c",(function(){return a}));t.d(n,"d",(function(){return i}));var r=function(){return"FormData"in window&&"classList"in document.createElement("p")&&"IntersectionObserver"in window};var o=function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(e){return false}};var a=function(){return"undefined"!==typeof window.__FL_DISABLE_IN_TEST__};var i=function(){return"noModule"in HTMLScriptElement.prototype}},MgzW:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty;var a=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function s(){try{if(!Object.assign)return false;var e=new String("abc");e[5]="de";if("5"===Object.getOwnPropertyNames(e)[0])return false;var n={};for(var t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(n).map((function(e){return n[e]}));if("0123456789"!==r.join(""))return false;var o={};"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e}));if("abcdefghijklmnopqrst"!==Object.keys(Object.assign({},o)).join(""))return false;return true}catch(a){return false}}e.exports=s()?Object.assign:function(e,n){var t;var s=i(e);var c;for(var u=1;u<arguments.length;u++){t=Object(arguments[u]);for(var l in t)if(o.call(t,l))s[l]=t[l];if(r){c=r(t);for(var f=0;f<c.length;f++)if(a.call(t,c[f]))s[c[f]]=t[c[f]]}}return s}},QCnb:function(e,n,t){"use strict";if(true)e.exports=t("+wdc")},a7mX:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:true});var r=function(){function e(e,n){var t=[];var r=true;var o=false;var a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done);r=true){t.push(i.value);if(n&&t.length===n)break}}catch(c){o=true;a=c}finally{try{if(!r&&s["return"])s["return"]()}finally{if(o)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;else if(Symbol.iterator in Object(n))return e(n,t);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n["default"]=y;function o(e,n,t){if(n in e)Object.defineProperty(e,n,{value:t,enumerable:true,configurable:true,writable:true});else e[n]=t;return e}var a="\x3c!--";var i="--\x3e";var s=[["&","&amp;"],[">","&gt;"]];var c="hypernova-key";var u="hypernova-id";function l(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^16*Math.random()>>e/4).toString(16)}))}function f(e){return s.reduce((function(e,n){var t=r(n,2),o=t[0],a=t[1];return e.replace(new RegExp(o,"g"),a)}),JSON.stringify(e))}function p(e){var n=s.reduceRight((function(e,n){var t=r(n,2),o=t[0],a=t[1];return e.replace(new RegExp(a,"g"),o)}),e);return JSON.parse(n)}function m(e,n){var t=e.toLowerCase().replace(/[^0-9a-z_-]/g,"");var r=n.replace(/&/g,"&amp;").replace(/"/g,"&quot;");return"data-"+String(t)+'="'+String(r)+'"'}function d(e,n){var t=Object.keys(e).map((function(n){return m(n,e[n])}));return'<script type="application/json" '+String(t.join(" "))+">"+a+String(f(n))+i+"<\/script>"}function v(e){var n=Object.keys(e).map((function(n){return"["+String(m(n,e[n]))+"]"})).join("");var t=document.querySelector("script"+String(n));if(!t)return null;var r=t.innerHTML;return p(r.slice(a.length,r.length-i.length))}function g(e,n,t){var r;var a=e.replace(/\W/g,"");var i=l();var s="<div data-"+c+'="'+String(a)+'" data-'+u+'="'+String(i)+'">'+String(n)+"</div>";var f=d((r={},o(r,c,a),o(r,u,i),r),t);return s+"\n"+String(f)}function b(e){var n=e.replace(/\W/g,"");var t=document.querySelectorAll("div[data-"+c+'="'+String(n)+'"]');return Array.prototype.map.call(t,(function(e){var t;var r=e.getAttribute("data-"+u);var a=v((t={},o(t,c,n),o(t,u,r),t));return{node:e,data:a}}))}function y(e){return"undefined"===typeof window?e.server():e.client()}y.toScript=d;y.fromScript=v;y.serialize=g;y.load=b;e.exports=n["default"]},mBJF:function(e,n,t){"use strict";t.d(n,"c",(function(){return J}));t.d(n,"d",(function(){return c}));t.d(n,"b",(function(){return _}));t.d(n,"a",(function(){return O}));t("QWBl");t("eoL8");t("FZtP");function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function a(e,n,t){if(n)o(e.prototype,n);if(t)o(e,t);return e}function i(e,n,t){if(n in e)Object.defineProperty(e,n,{value:t,enumerable:true,configurable:true,writable:true});else e[n]=t;return e}var s=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:console.log;r(this,e);this.reporter=n;i(this,"callbacks",[]);i(this,"success",void 0)}a(e,[{key:"succeed",value:function(){this.resolve(true);this.runCallbacks()}},{key:"fail",value:function(e){this.resolve(false);this.reporter("whenReady.fail failed to resolve: ".concat(e))}},{key:"perform",value:function(e){if(this.success)e();else this.callbacks.push(e)}},{key:"resolve",value:function(e){if("undefined"!==typeof this.success)throw new Error("WhenReady already resolved.");this.success=e}},{key:"runCallbacks",value:function(){this.callbacks.forEach((function(e){return e()}));this.callbacks=[]}}]);return e}();var c=new s;var u=t("q1tI");var l=t.n(u);var f=t("i8i4");var p=t.n(f);var m=t("KAy6");var d=t.n(m);var v=t("a7mX");var g=t.n(v);var b=function(e,n){return g()({server:function(){return function(t){var r=d.a.renderToString(l.a.createElement(n,t));return Object(v["serialize"])(e,r,t)}},client:function(){var t=Object(v["load"])(e);if(t)t.forEach((function(e){var t=e.node,r=e.data;if(!r)return;var o=l.a.createElement(n,r);p.a.hydrate(o,t)}));return n}})};t("pNMO");t("TeQF");t("E9XD");t("HRxU");t("5DmW");t("27RR");t("tkto");function y(){y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]}return e};return y.apply(this,arguments)}function P(e,n){if(null==e)return{};var t=h(e,n);var r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++){r=a[o];if(n.indexOf(r)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,r))continue;t[r]=e[r]}}return t}function h(e,n){if(null==e)return{};var t={};var r=Object.keys(e);var o,a;for(a=0;a<r.length;a++){o=r[a];if(n.indexOf(o)>=0)continue;t[o]=e[o]}return t}function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);if(n)r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}));t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};if(n%2)w(Object(t),true).forEach((function(n){k(e,n,t[n])}));else if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(t));else w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e,n,t){if(n in e)Object.defineProperty(e,n,{value:t,enumerable:true,configurable:true,writable:true});else e[n]=t;return e}var O=l.a.createContext({});var C=O.Consumer,j=O.Provider;var E=function(e,n){return e.reduce((function(e,t){return S(S({},e),{},k({},t,n[t]))}),{})};var T=function(e){var n=function(n){var t=n.namespace,r=n.csrfToken,o=n.location,a=P(n,["namespace","csrfToken","location"]);return l.a.createElement(j,{value:{namespace:t,csrfToken:r,location:o}},l.a.createElement(e,a))};return n};var _=function(e){return function(n){var t=function(t){return l.a.createElement(C,null,(function(r){var o=E(Object.keys(e),r);return l.a.createElement(n,y({},t,o))}))};return t}};t("DQNa");t("NBAS");t("ExoC");t("07d7");t("SuFq");t("JfAA");function M(e){"@babel/helpers - typeof";if("function"===typeof Symbol&&"symbol"===typeof Symbol.iterator)M=function(e){return typeof e};else M=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return M(e)}function L(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function R(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function D(e,n,t){if(n)R(e.prototype,n);if(t)R(e,t);return e}function I(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:true,configurable:true}});if(n)x(e,n)}function x(e,n){x=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return x(e,n)}function A(e){var n=N();return function(){var t,r=q(e);if(n){var o=q(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return F(this,t)}}function F(e,n){if(n&&("object"===M(n)||"function"===typeof n))return n;return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function q(e){q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return q(e)}var U=function(e){I(t,e);var n=A(t);function t(){L(this,t);return n.apply(this,arguments)}D(t,[{key:"componentDidCatch",value:function(e,n){t.notifyHoneybadger(e,n)}},{key:"render",value:function(){var e=this.props.children;return e}}],[{key:"notifyHoneybadger",value:function(e,n){if("undefined"!==typeof Honeybadger)Honeybadger.notify(e,{context:{stack_info:n}})}}]);return t}(l.a.Component);var W=function(e){return function(n){return l.a.createElement(U,null,l.a.createElement(e,n))}};var H=function(e){return c.perform(e)};var G=function(e){return T(W(e))};var J=function(e,n){if("undefined"!==typeof __SERVER__)return b(e,G(n));return H((function(){return b(e,G(n))}))}}},[["1zUv","runtime","npm.core-js","npm.webpack","npm.react","npm.react-dom"]]]);