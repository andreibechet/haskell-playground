(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Partials-Comment-index","DesignSystem-Actions-Link-LinkStyles-index","DesignSystem-Actions-Link-LinkTag-index","DesignSystem-Actions-Link-index","DesignSystem-Forms-Form-Help-index","DesignSystem-Forms-Form-Label-index","DesignSystem-Forms-Form-SelectField-SelectInput-index","DesignSystem-Layout-Spacer-index","DesignSystem-ProgressIndicators-StepNumber-index"],{"+1RX":function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("Eqpv");var l=a("rcTO");var s=a("hncr");var o=a("50/i");var c=a("XLo6");var m=e=>{var{isPinned:t,action:{href:a,method:r},onPin:m}=e;return n.a.createElement(i["default"],{remote:true,preventDoubleSubmission:false,action:a,method:r,onSuccess:m,"aria-live":"polite"},n.a.createElement(l["default"],{type:"submit",size:"xsmall","aria-label":"comment pin button"},n.a.createElement(o["default"],{spacing:"1",alignItems:"center"},n.a.createElement(s["default"],{name:t?"pin_solid":"pin",size:"small"}),n.a.createElement(c["default"],{belowBreakpoint:"medium"},"\xa0",t?"Pinned":"Pin"))))};t["default"]=m},"+IIu":function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));a.d(t,"a",(function(){return n}));a("+2oP");a("Rm1S");var r=e=>{var{top:t=0,right:a=0,bottom:r=0,left:n=0}=e;return"".concat(t," ").concat(a," ").concat(r," ").concat(n)};var n=e=>{if(!e)return{};var t=e.match(/\S+/g).map(e=>"0"===e?null:e);switch(t.slice(0,4).length){case 1:return{all:t[0]};case 2:return{vertical:t[0],horizontal:t[1]};case 3:return{top:t[0],horizontal:t[1],bottom:t[2]};case 4:return{top:t[0],right:t[1],bottom:t[2],left:t[3]};default:return{}}}},"3b5J":function(e,t,a){"use strict";a.r(t);a("yXV3");var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("GOQ/");var l=a("XNZb");var s=a("yqEF");var o=a("9OJ6");function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r))e[r]=a[r]}return e};return c.apply(this,arguments)}function m(e,t){if(null==e)return{};var a=d(e,t);var r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];if(t.indexOf(r)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,r))continue;a[r]=e[r]}}return a}function d(e,t){if(null==e)return{};var a={};var r=Object.keys(e);var n,i;for(i=0;i<r.length;i++){n=r[i];if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}var u=e=>{var{name:t,value:a="",label:r,help:d=null,isMarkdown:u=false,required:f=false,errors:v=[],spacing:p,maxCharacterCount:h}=e,b=m(e,["name","value","label","help","isMarkdown","required","errors","spacing","maxCharacterCount"]);var E=Object(i["a"])();return n.a.createElement(s["default"],{fieldId:E,label:r,help:d,required:f,errors:v,spacing:p},u&&n.a.createElement(l["default"],{href:"/admin/syntax-guide",size:"xsmall"},"Help with formatting this text"),n.a.createElement(o["a"],c({id:E,name:t,value:a,required:f,isError:v&&v.length>0,maxCharacterCount:h},b)))};t["default"]=u},"4fWa":function(e,t,a){"use strict";a.r(t);a.d(t,"ALIGNMENTS",(function(){return o}));a.d(t,"SIZES",(function(){return c}));var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("TSYQ");var l=a.n(i);var s=a("9ZU2");var o=["left","center","right"];var c=["xsmall","small","medium"];var m=e=>{var{align:t="left",children:a,isBold:r=false,isOnDarkBackground:i=false,isPageHeaderItemTitle:o=false,size:c="small",isSecondary:m=false,isSelected:d=false,noWrap:u=false}=e;return n.a.createElement("span",{className:l()(s["a"].link,s["a"][t],s["a"][c],{[s["a"].isBold]:r,[s["a"].isOnDarkBackground]:i,[s["a"].isPageHeaderItemTitle]:o,[s["a"].isSecondary]:m,[s["a"].isSelected]:d,[s["a"].noWrap]:u})},a)};t["default"]=m},"8Mr6":function(e,t,a){"use strict";a.r(t);a.d(t,"ALIGNMENTS",(function(){return c}));a.d(t,"SIZES",(function(){return m}));a.d(t,"COLORS",(function(){return d}));var r=a("q1tI");var n=a.n(r);var i=a("TSYQ");var l=a.n(i);a("17x9");var s=a("rQ6n");var o=a("ko5a");var c=["left","right","center"];var m=["xsmall","small","medium","large","xlarge","xxlarge"];var d=["black","coolGrey","mediumGrey","darkGrey","white"];var u=(e,t)=>{var{small:a,medium:r,large:n,xlarge:i,xxlarge:l}=Object(s["a"])(t);return{[o["a"]["sBreakpoint".concat(e).concat(a)]]:a,[o["a"]["mBreakpoint".concat(e).concat(r)]]:r,[o["a"]["lBreakpoint".concat(e).concat(n)]]:n,[o["a"]["xlBreakpoint".concat(e).concat(i)]]:i,[o["a"]["xxlBreakpoint".concat(e).concat(l)]]:l}};var f=e=>{var{children:t,alignment:a="left",elName:r="p",isInline:i=false,isBlock:s=false,isBold:c=false,isCompact:m=false,size:d="small",color:f="black"}=e;return n.a.createElement(r,{className:l()(o["a"].wrapper,o["a"][f],u("Size",d),u("Alignment",a),{[o["a"].isInline]:i,[o["a"].isBlock]:s,[o["a"].isBold]:c,[o["a"].isCompact]:m,[o["a"].isRegular]:!m})},t)};t["default"]=f},"8pS1":function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("Eqpv");var l=a("rcTO");var s=a("hncr");var o=a("50/i");var c=a("XLo6");var m=e=>{var{count:t,isLiked:a}=e;return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"is-visually-hidden"},t," ",1===t?"Like":"Likes"),a&&n.a.createElement("span",{className:"is-visually-hidden"},"You like this comment"),n.a.createElement("span",{"aria-hidden":true},"\xa0",t))};var d=m;var u=e=>{var{count:t,isLiked:a,action:r,method:m,onSuccess:u}=e;return n.a.createElement(i["default"],{remote:true,preventDoubleSubmission:false,action:r,method:m,onSuccess:u,"aria-live":"polite"},n.a.createElement(l["default"],{type:"submit",size:"xsmall","aria-label":"comment like button"},n.a.createElement(o["default"],{spacing:"1",alignItems:"center"},n.a.createElement(s["default"],{name:a?"like_solid":"like",size:"small"}),n.a.createElement(c["default"],{belowBreakpoint:"medium"},n.a.createElement("span",null,"\xa0",a?"Liked":"Like"),t>0&&n.a.createElement(d,{count:t,isLiked:a})))))};var f=u;class v extends n.a.PureComponent{constructor(e){super(e);var{count:t,likedByCurrentUser:a,action:r}=e;this.state={count:t,likedByCurrentUser:a,action:r};this.onSuccess=this.onSuccess.bind(this)}onSuccess(e){this.setState(e)}render(){var{count:e,likedByCurrentUser:t,action:{href:a,method:r}}=this.state;return n.a.createElement(f,{count:e,isLiked:t,action:a,method:r,onSuccess:this.onSuccess})}}t["default"]=v},"9OJ6":function(e,t,a){"use strict";a("yXV3");a("4mDm");a("3bBZ");var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("TSYQ");var l=a.n(i);var s=a("O6Fj");var o=a.n(s);var c=a("1Mz9");var m=a("JbhC");function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r))e[r]=a[r]}return e};return d.apply(this,arguments)}function u(e,t){if(null==e)return{};var a=f(e,t);var r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];if(t.indexOf(r)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,r))continue;a[r]=e[r]}}return a}function f(e,t){if(null==e)return{};var a={};var r=Object.keys(e);var n,i;for(i=0;i<r.length;i++){n=r[i];if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}var v=e=>{var{name:t,value:a="",maxCharacterCount:i=null,isError:s=false,id:f,required:v=false}=e,p=u(e,["name","value","maxCharacterCount","isError","id","required"]);var[h,b]=Object(r["useState"])(a);var E=e=>{if(i&&e.target.value.length>i)return;b(e.target.value)};var g=l()(m["a"].textarea,{[m["a"].isError]:s,[m["a"].isDisabled]:p.disabled});return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,d({id:f,value:h,className:g,rows:4,name:t,onChange:E,required:v},p)),i&&n.a.createElement(c["default"],{maxCharacterCount:i,characterCount:h.length}))};t["a"]=v},"9sck":function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("TSYQ");var l=a.n(i);var s=e=>{var{name:t,value:a,disabled:r}=e;return n.a.createElement("option",{disabled:r,key:a+t,value:a},t)};var o=s;var c=a("lZON");var m=e=>{var{name:t,value:a="",id:r,required:i=false,options:s,onChange:m,includeBlank:d=false,isError:u=false}=e;var f=l()(c["a"].wrapper,{[c["a"].isError]:u});return n.a.createElement("div",{className:f},n.a.createElement("select",{id:r,name:t,defaultValue:a,required:i,className:c["a"].select,onChange:m},d&&n.a.createElement("option",{value:""}," "),s.map(e=>{if(e.group)return n.a.createElement("optgroup",{label:e.name,key:e.name},e.group.map(e=>n.a.createElement(o,{disabled:e.disabled,name:e.label,value:e.value,key:e.value+e.label})));return n.a.createElement(o,{disabled:e.disabled,name:e.name,value:e.value,key:e.value+e.name})})))};t["default"]=m},"Aev+":function(e,t,a){"use strict";a.r(t);a("zKZe");var r=a("q1tI");var n=a.n(r);var i=a("17x9");var l=a.n(i);var s=a("6jyo");function o(){o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r))e[r]=a[r]}return e};return o.apply(this,arguments)}var c=n.a.forwardRef((e,t)=>{var{children:a,data:r,href:i,onClick:l,role:c,title:m,rel:d,target:u}=e;return n.a.createElement("a",o({className:s["a"].anchor,href:i,onClick:l,ref:t,role:c,title:m,rel:d,target:u},r),a)});c.propTypes={children:l.a.node.isRequired,data:l.a.shape(),href:l.a.string,onClick:l.a.func,role:l.a.string,title:l.a.string,rel:l.a.string,target:l.a.string};c.displayName="LinkTag";t["default"]=c},"GOQ/":function(e,t,a){"use strict";a("4mDm");a("3bBZ");var r=a("mBJF");var n=a("q1tI");var i={};var l=()=>{var{namespace:e}=Object(n["useContext"])(r["a"]);i[e]=i[e]||0;i[e]+=1;var[t]=Object(n["useState"])("".concat(e,"-").concat(i[e]));return t};t["a"]=l},Ls5e:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("hrVs");var l=e=>{var{fieldId:t,children:a}=e;return n.a.createElement("label",{htmlFor:t,className:i["a"].wrapper},a)};t["default"]=l},NfnI:function(e,t,a){"use strict";a.r(t);a.d(t,"Header",(function(){return m}));a.d(t,"Item",(function(){return u}));a.d(t,"Content",(function(){return v}));a.d(t,"ContentBody",(function(){return h}));a.d(t,"Body",(function(){return E}));a.d(t,"ContentAdditions",(function(){return y}));a.d(t,"Avatar",(function(){return C}));a.d(t,"Meta",(function(){return P}));var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("TSYQ");var l=a.n(i);var s=a("50/i");var o=a("hncr");var c=e=>{var{avatar:t,children:a,isPinned:r=false,pinnedLabel:i="",stampContent:c,primaryHeadingLink:m,primaryHeading:d}=e;var u=l()("m-feed-item__heading",{"m-feed-item__heading--with-stamp":c});return n.a.createElement("div",{className:"m-feed-item__header"},t&&n.a.createElement("div",{className:"m-feed-item__avatar"},t),r&&n.a.createElement("div",{className:"m-feed-item__pinned"},n.a.createElement(s["default"],{alignItems:"center",spacing:"1"},n.a.createElement(o["default"],{name:"pin_solid",size:"small",color:"blue"}),n.a.createElement("span",{className:"link-selected u-bold"},"Pinned by ",i))),n.a.createElement("div",{className:"m-feed-item__preamble"},n.a.createElement("div",{className:u},n.a.createElement("a",{className:"m-feed-item__heading__primary",href:m},d),c&&n.a.createElement("span",{className:"a-stamp a-stamp--compact"},c))),a)};var m=c;var d=e=>{var{id:t="",children:a,img:r=false,bordered:i=false,doubleBorder:s=false,pronounced:o=false,indented:c=false,dragAndDrop:m=false,dragging:d=false,alt:u=false}=e;var f=l()("m-feed-item",{"m-feed-item--with-img":r,"m-feed-item--bordered":i,"m-feed-item--double-border":s,"m-feed-item--pronounced":o,"m-feed-item--indented":c,"m-feed-item--alt":u,"m-feed-item--drag-and-drop":m,"m-feed-item--dragging":d});return n.a.createElement("li",{id:t,className:f},a)};var u=d;var f=e=>{var{children:t}=e;return n.a.createElement("div",{className:"m-feed-item__content"},t)};var v=f;var p=e=>{var{classes:t="",content:a}=e;return n.a.createElement("div",{className:t,dangerouslySetInnerHTML:a})};var h=p;var b=e=>{var{children:t}=e;return n.a.createElement("div",{className:"m-feed-item__body"},t)};var E=b;var g=e=>{var{children:t}=e;return n.a.createElement("div",{className:"m-feed-item__content__additions"},t)};var y=g;a("zKZe");var k=a("LdIB");function S(){S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r))e[r]=a[r]}return e};return S.apply(this,arguments)}var O=e=>n.a.createElement("div",{className:"m-feed-item__identifier","aria-hidden":true},n.a.createElement(k["default"],S({},e,{isBubble:true})));var C=O;var x=e=>{var{shortTimestamp:t,longTimestamp:a,generatedTimestamp:r}=e;return n.a.createElement("div",{className:"m-feed-item__meta"},n.a.createElement("span",{className:"m-feed-item__timestamp m-feed-item__timestamp--short"},n.a.createElement("time",{dateTime:r},t)),n.a.createElement("span",{className:"m-feed-item__timestamp m-feed-item__timestamp--long"},n.a.createElement("time",{dateTime:r},a)))};var P=x},"Qh/N":function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("GOQ/");var l=a("yqEF");var s=a("9sck");var o=e=>{var{name:t,value:a="",label:r,isLabelHidden:o,help:c=null,required:m=false,onChange:d,errors:u=[],options:f,includeBlank:v=false,spacing:p}=e;var h=Object(i["a"])();return n.a.createElement(l["default"],{fieldId:h,label:r,isLabelHidden:o,help:c,required:m,errors:u,spacing:p},n.a.createElement(s["default"],{id:h,name:t,value:a,required:m,options:f,includeBlank:v,isError:u&&u.length>0,onChange:d}))};t["default"]=o},Sqs6:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("TSYQ");var l=a.n(i);var s=a("JaZr");var o=e=>{var{forId:t,children:a,isRequired:r=false,isLarge:i=false,isSubtle:o=false,isLabelHidden:c=false}=e;var m=l()(s["a"].wrapper,{[s["a"].isLarge]:i,[s["a"].isRequired]:r,[s["a"].isSubtle]:o,[s["a"].visuallyHiddenText]:c});return n.a.createElement("label",{className:m,htmlFor:t},a,r&&n.a.createElement("span",{className:s["a"].visuallyHiddenText},"(required)"))};t["default"]=o},XNZb:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);var i=a("17x9");var l=a.n(i);var s=a("Aev+");var o=a("4fWa");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);if(t)r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};if(t%2)c(Object(a),true).forEach((function(t){d(e,t,a[t])}));else if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(a));else c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){if(t in e)Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true});else e[t]=a;return e}var u=n.a.forwardRef((e,t)=>{var{children:a,data:r,href:i,onClick:l,role:c,title:d,isBold:u=false,isOnDarkBackground:f=false,isPageHeaderItemTitle:v=false,size:p="small",align:h="left",isSecondary:b=false,isSelected:E=false,noWrap:g=false}=e;return n.a.createElement(s["default"],{href:i,onClick:l,ref:t,role:c,title:d,data:m({},r)},n.a.createElement(o["default"],{isBold:u,isOnDarkBackground:f,isPageHeaderItemTitle:v,size:p,align:h,isSecondary:b,isSelected:E,noWrap:g},a))});u.propTypes={children:l.a.node.isRequired,data:l.a.shape(),href:l.a.string,onClick:l.a.func,role:l.a.string,title:l.a.string,isBold:l.a.bool,isOnDarkBackground:l.a.bool,isPageHeaderItemTitle:l.a.bool,size:l.a.oneOf(o["SIZES"]),align:l.a.oneOf(o["ALIGNMENTS"]),isSecondary:l.a.bool,isSelected:l.a.bool,noWrap:l.a.bool};u.displayName="Link";t["default"]=u},XsN1:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);var i=a("TSYQ");var l=a.n(i);a("17x9");var s=a("+IIu");var o=a("ihAh");var c=e=>{var{children:t,elName:a="div",spacing:r="",className:i=""}=e;var c=a;var m=Object(s["a"])(r);var d={[o["a"]["all-".concat(m.all)]]:m.all,[o["a"]["vertical-".concat(m.vertical)]]:m.vertical,[o["a"]["horizontal-".concat(m.horizontal)]]:m.horizontal,[o["a"]["top-".concat(m.top)]]:m.top,[o["a"]["bottom-".concat(m.bottom)]]:m.bottom,[o["a"]["left-".concat(m.left)]]:m.left,[o["a"]["right-".concat(m.right)]]:m.right};return n.a.createElement(c,{className:l()(o["a"].default,i,d)},t)};t["default"]=c},"Z8/f":function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("rcTO");var l=a("Eqpv");var s=e=>{var{isFollowed:t,action:a,method:r,onSuccess:s,jsonAction:o,isCompact:c=false}=e;return n.a.createElement(l["default"],{remote:true,preventDoubleSubmission:false,action:a,jsonAction:o,method:r,onSuccess:s},n.a.createElement(i["default"],{type:"submit",size:c?"xsmall":"medium",isBold:c,isSelected:t},t?"Following":"Follow"))};var o=s;class c extends n.a.PureComponent{constructor(e){super(e);var{followedByCurrentUser:t,action:a}=e;this.state={followedByCurrentUser:t,action:a};this.onSuccess=this.onSuccess.bind(this)}onSuccess(e){this.setState(e)}render(){var{followedByCurrentUser:e,action:{href:t,method:a,json:r}}=this.state;var{isCompact:i=false}=this.props;return n.a.createElement(o,{isFollowed:e,method:a,action:t,jsonAction:r,onSuccess:this.onSuccess,isCompact:i})}}t["default"]=c},"fFl+":function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");a("zKZe");var i=a("NfnI");var l=a("Z8/f");var s=a("8pS1");var o=a("sIhE");var c=a("xDMq");var m=a("+1RX");var d=a("BWJd");var u=a("nmff");var f=e=>{var{body:t,discussionPromptStep:a}=e;return n.a.createElement("div",{className:"m-text-highlight"},a&&n.a.createElement("div",{className:"m-text-highlight__stepnumber"},n.a.createElement("a",{href:a.stepUrl},n.a.createElement(u["default"],{type:"dark",text:a.stepNumber}))),n.a.createElement("div",{className:"m-text-highlight__content"},n.a.createElement(i["ContentBody"],{content:t})))};var v=f;function p(){p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r))e[r]=a[r]}return e};return p.apply(this,arguments)}var h=e=>{var{body:t,likes:a,bookmarks:r,onPin:l,pinningEnabled:u,pinnings:f,children:h,isEdited:b,onReplyClick:E,reply:g,isDiscussionPrompt:y=false,discussionPromptStep:k,moderationReport:S}=e;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i["Content"],null,y?n.a.createElement(v,{body:t,discussionPromptStep:k}):n.a.createElement(i["ContentBody"],{content:t}),b&&n.a.createElement("span",{className:"m-feed-item__edit-status"},"(edited)")),n.a.createElement("div",{className:"m-feed-item__actions m-feed-item__actions--comment"},u&&f&&n.a.createElement(m["default"],p({onPin:l},f)),a&&n.a.createElement(s["default"],a),g&&n.a.createElement(c["default"],{link:g.link,onClick:E}),r&&n.a.createElement(o["default"],r),h,S&&n.a.createElement("div",{className:"m-feed-item__report"},n.a.createElement(d["default"],S))))};var b=h;var E=e=>{var{onClick:t,link:a}=e;return n.a.createElement("div",{className:"m-feed-item__edit"},n.a.createElement("a",{href:a,onClick:t,className:"link"},"Edit"))};var g=E;var y=a("u5XP");var k=a("lPj2");function S(){S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r))e[r]=a[r]}return e};return S.apply(this,arguments)}var O=e=>{var{bordered:t=false,author:a,createdAt:r,longCreatedAt:s,id:o,link:c,isEditing:m,isEdited:d,isReply:u,htmlBody:f,textBody:v,isPinned:p=false,pinnedLabel:h,onPin:E,pinningEnabled:O,followings:C,bookmarks:x,likes:P,pinnings:B,mute:_,isDiscussionPrompt:N,discussionPromptStep:I,mention:j,report:w,edit:q,onEditSuccess:L,onEditButtonClick:D,onCancel:T,onReplyClick:R,replyAction:A,children:z}=e;return n.a.createElement(i["Item"],{img:true,bordered:t,id:o},n.a.createElement(i["Avatar"],S({},a.avatar,{isReply:u,size:"small"})),n.a.createElement(i["Body"],null,n.a.createElement(i["Header"],{stampContent:a.publicRole,primaryHeading:a.userName,primaryHeadingLink:a.profilePath,isPinned:p,pinnedLabel:h},n.a.createElement("div",{className:"m-feed-item__meta"},C&&n.a.createElement(l["default"],S({isCompact:true},C)),n.a.createElement("a",{href:c},n.a.createElement("span",{className:"m-feed-item__timestamp m-feed-item__timestamp--long"},n.a.createElement("time",null,s)),n.a.createElement("span",{className:"m-feed-item__timestamp m-feed-item__timestamp--short"},n.a.createElement("time",null,r))))),m?n.a.createElement(y["default"],{onSuccess:L,method:q.action.method,action:q.action.href,mention:j,cancelLink:"#",onCancel:T,commentText:v}):n.a.createElement(b,{body:f,pinnings:B,onPin:E,pinningEnabled:O,likes:P,bookmarks:x,isEdited:d,onReplyClick:e=>R(e,a.handle),reply:A,isDiscussionPrompt:N,discussionPromptStep:I,moderationReport:w},q&&n.a.createElement(g,{onClick:D,link:q.link}),_&&n.a.createElement(k["default"],_))),z)};var C=O;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);if(t)r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};if(t%2)x(Object(a),true).forEach((function(t){B(e,t,a[t])}));else if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(a));else x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function B(e,t,a){if(t in e)Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true});else e[t]=a;return e}class _ extends n.a.PureComponent{constructor(e){super(e);var{comment:{content:{isEdited:t,htmlBody:a,textBody:r}}}=e;this.state={isEditing:false,isEdited:t,htmlBody:a,textBody:r};this.onEditButtonClick=this.onEditButtonClick.bind(this);this.onEditSuccess=this.onEditSuccess.bind(this);this.onCancel=this.onCancel.bind(this);this.handleReplyClick=this.handleReplyClick.bind(this)}onEditButtonClick(e){e.preventDefault();this.setState(e=>{var{isEditing:t}=e;return{isEditing:!t}})}onEditSuccess(e){var{content:{htmlBody:t,textBody:a,isEdited:r}}=e;this.setState({isEditing:false,textBody:a,htmlBody:t,isEdited:r})}onCancel(e){e.preventDefault();this.setState({isEditing:false})}handleReplyClick(e){var{onReplyClick:t,author:{handle:a}}=this.props;t(e,a)}render(){var{isEditing:e,isEdited:t,htmlBody:a,textBody:r}=this.state;var{bordered:i,isReply:l,onPin:s,pinningEnabled:o,author:c,comment:{content:{id:m,createdAt:d,longCreatedAt:u,link:f,isPinned:v,pinnedLabel:p,discussionPromptStep:h},actions:{report:b,edit:E,mention:g},followings:y,likes:k,pinnings:S,bookmarks:O,mute:x,isDiscussionPrompt:B},children:_,replyAction:N,reportBase:I}=this.props;var j=b&&P(P({},I),b);return n.a.createElement(C,{bordered:i,author:c,id:"comment_".concat(m),link:f,createdAt:d,longCreatedAt:u,isEditing:e,isEdited:t,isReply:l,htmlBody:a,textBody:r,isPinned:v,pinnedLabel:p,onPin:s,pinningEnabled:o,followings:y,bookmarks:O,likes:k,pinnings:S,mute:x,isDiscussionPrompt:B,discussionPromptStep:h,report:j,edit:E,mention:g,onEditSuccess:this.onEditSuccess,onEditButtonClick:this.onEditButtonClick,onCancel:this.onCancel,onReplyClick:this.handleReplyClick,replyAction:N},_)}}_.defaultProps={bordered:false,isReply:false,onPin:()=>{}};t["default"]=_},lPj2:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("Eqpv");function l(e,t,a){if(t in e)Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true});else e[t]=a;return e}class s extends n.a.PureComponent{constructor(e){super(e);l(this,"onSuccess",e=>{this.setState(e)});var{isMuted:t,action:a}=e;this.state={isMuted:t,action:a}}render(){var{isMuted:e,action:t}=this.state;return n.a.createElement("div",{className:"m-feed-item__actions m-feed-item__actions--secondary"},n.a.createElement(i["default"],{preventDoubleSubmission:false,action:t.href,method:t.method,onSuccess:this.onSuccess,remote:true},n.a.createElement("button",{type:"submit",className:"link"},e?"Unmute":"Mute"," this conversation")))}}t["default"]=s},nmff:function(e,t,a){"use strict";a.r(t);a.d(t,"TYPES",(function(){return o}));var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("TSYQ");var l=a.n(i);var s=a("qwKz");var o=["default","done","current","inverse","dark"];var c=e=>{var{text:t,type:a="default",title:r}=e;var i=l()(s["a"].wrapper,s["a"][a]);return n.a.createElement("div",{className:i,title:r},t)};t["default"]=c},sIhE:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("Eqpv");var l=a("rcTO");var s=a("hncr");var o=a("50/i");var c=a("XLo6");var m=e=>{var{isBookmarked:t,action:a,method:r,onSuccess:m,jsonAction:d}=e;return n.a.createElement(i["default"],{remote:true,preventDoubleSubmission:false,action:a,method:r,jsonAction:d,onSuccess:m,"aria-live":"polite"},n.a.createElement(l["default"],{type:"submit","aria-label":"comment bookmark button",size:"xsmall"},n.a.createElement(o["default"],{spacing:"1",alignItems:"center"},n.a.createElement(s["default"],{name:t?"bookmark_solid":"bookmark",size:"small"}),n.a.createElement(c["default"],{belowBreakpoint:"medium"},"\xa0",t?"Bookmarked":"Bookmark",t&&n.a.createElement("span",{className:"is-visually-hidden"},"You bookmarked this comment")))))};var d=m;class u extends n.a.Component{constructor(e){super(e);var{bookmarkedByCurrentUser:t,action:a}=e;this.state={bookmarkedByCurrentUser:t,action:a};this.onSuccess=this.onSuccess.bind(this)}onSuccess(e){this.setState(e)}render(){var{bookmarkedByCurrentUser:e,action:{href:t,method:a,json:r}}=this.state;return n.a.createElement(d,{isBookmarked:e,action:t,jsonAction:r,method:a,onSuccess:this.onSuccess,"aria-live":"polite"})}}t["default"]=u},u5XP:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("rcTO");var l=a("7fFR");var s=e=>{var{onSuccess:t,action:a,method:r,cancelLink:s,onCancel:o,mention:c,commentText:m}=e;return n.a.createElement(l["default"],{textareaId:"edit_comment",initialCommentText:m,action:{href:a,method:r},onSuccess:t,rows:3,mention:c,footerClass:"m-form__control-group",placeholder:"Add a comment... (plain text only, links will be auto-linked)",customFooterLinks:n.a.createElement("div",{className:"edit_comment u-no-margin-top"},n.a.createElement("footer",null,n.a.createElement(i["default"],{isBold:true,type:"submit"},"Finish editing"),n.a.createElement("p",{className:"comment-action-link"},n.a.createElement("a",{className:"cancel link-secondary",href:s,onClick:o},"Cancel"))))})};s.defaultProps={onSuccess:()=>{},onCancel:()=>{}};t["default"]=s},xDMq:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("XNZb");var l=a("hncr");var s=a("50/i");var o=a("XLo6");var c=e=>{var{link:t,onClick:a}=e;return n.a.createElement("span",null,n.a.createElement(i["default"],{href:t,onClick:a,"aria-label":"comment reply button",size:"xsmall"},n.a.createElement(s["default"],{spacing:"1",alignItems:"center"},n.a.createElement(l["default"],{name:"reply",size:"small"}),n.a.createElement(o["default"],{belowBreakpoint:"medium"},"\xa0Reply"))))};t["default"]=c},yqEF:function(e,t,a){"use strict";a.r(t);var r=a("q1tI");var n=a.n(r);a("17x9");var i=a("Sqs6");var l=a("ZQR6");var s=a("XsN1");var o=a("Ls5e");var c=e=>{var{fieldId:t,label:a,isLabelHidden:r,help:c,required:m=false,errors:d=[],children:u,spacing:f="0 0 4 0"}=e;return n.a.createElement(s["default"],{spacing:f},n.a.createElement(i["default"],{forId:t,isRequired:m,isLabelHidden:r},a),c&&n.a.createElement(o["default"],{fieldId:t},c),u,d&&d.length>0&&n.a.createElement(l["default"],{errors:d,forId:t}))};t["default"]=c}}]);