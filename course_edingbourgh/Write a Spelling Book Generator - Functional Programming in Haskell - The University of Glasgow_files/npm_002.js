(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.futurelearn"],{"3POp":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=n("q1tI"),i=r(a),o=n("V2qZ"),c=n("UxO+"),s=n("LgcO"),u=n("LvDl"),l=r(n("CK61")),d=n("fwbU"),g=n("ABBN"),f=n("hyZr"),p=n("Zl/q"),m=n("MEpN"),h=n("+V57"),v=n("mG1W"),y=r(n("POQ2")),E=r(n("Eg6H")),b=r(n("K3a0")),_=r(n("M9Iz")),k=r(n("s5gA")),M=r(n("iumw")),N=r(n("TSYQ")),w=["horizontal_rule","hard_break"],O=["hr","hardbreak"],C={code:"backticks",heading:"heading",blockquote:"blockquote",code_block:"code",fence:"fence",bullet_list:"list",ordered_list:"list",hr:"hr",image:"image",link:"link"},S=function(e){var t=[].concat(O,e.disabledNodes,e.disabledMarks),n=u.omit(s.defaultMarkdownParser.tokens,t),r=l("commonmark",{html:!1}),a=u.compact(t.map((function(e){return C[e]})));return r.disable(a),new s.MarkdownParser(e,r,n)},A=function(){return s.defaultMarkdownSerializer.nodes.code_block=function(e,t){e.write("~~~"+(t.attrs.params||"")+"\n"),e.text(t.textContent,!1),e.ensureNewLine(),e.write("~~~"),e.closeBlock(t)},s.defaultMarkdownSerializer}(),T=function(e,t){return new c.Plugin({props:{attributes:{class:e.length?"rich-text-editor "+e:"rich-text-editor","data-placeholder":t}}})},x=function(e,t){return new c.Plugin({props:{clipboardTextParser:function(t){var n=S(e).parse(t).content;return m.Slice.maxOpen(n)},transformPastedHTML:function(e){return e.includes("<img src")?(t("Pasted content cannot contain images"),""):e}}})},R=function(e,t,n){return new h.InputRule(e,(function(e,r,a,i){var o=n instanceof Function?n(r):n,c=e.tr,s=r.length-1,u=i,l=a;if(r[s]){var d=a+r[0].indexOf(r[s-1]),g=d+r[s-1].length-1,f=d+r[s-1].lastIndexOf(r[s]),p=f+r[s].length;if(function(e,t,n){var r=[];return n.doc.nodesBetween(e,t,(function(e,t){r=[].concat(r,e.marks.map((function(n){return{start:t,end:t+e.nodeSize,mark:n}})))})),r}(a,i,e).filter((function(e){return e.mark.type.excludes(t)})).filter((function(e){return e.end>d})).length)return null;p<g&&c.delete(p,g),f>d&&c.delete(d,f),u=(l=d)+r[s].length}return c.addMark(l,u,t.create(o)),c.removeStoredMark(t),c}))},I=function(e,t){return new h.InputRule(e,(function(e,n,r,a){var i=e.tr.insertText(n[1],r,a),o=t.create({href:n[2],title:n[3]});return i.addMark(r,r+n[1].length,o)}))},L=function(e,t){var n=v.findSelectedNodeOfType(t)(e.selection)||v.findParentNode((function(e){return e.type===t}))(e.selection);return{isActive:!!n,node:null==n?void 0:n.node}},D=function(e,t){return function(n,r){return L(n,e).isActive?g.setBlockType(t)(n,r):g.setBlockType(e)(n,r)}},B=function(e,t){return e.type===t.nodes.bullet_list||e.type===t.nodes.ordered_list||e.type===t.nodes.todo_list},P=function(e,t){return function(n,r){var a=n.schema,i=n.selection,o=i.$from.blockRange(i.$to);if(!o)return!1;var c=v.findParentNode((function(e){return B(e,a)}))(i);if(o.depth>=1&&c&&o.depth-c.depth<=1){if(c.node.type===e)return p.liftListItem(t)(n,r);if(B(c.node,a)&&e.validContent(c.node.content)){var s=n.tr;return s.setNodeMarkup(c.pos,e),r&&r(s),!1}}return p.wrapInList(e)(n,r)}},U=function(){function e(e,t,n){this.items=e,this.editorView=t,this.onUpdate=n}var t=e.prototype;return t.markActive=function(e){var t=this.editorView.state;return e instanceof m.NodeType?L(t,e).isActive:function(e,t){var n=e.selection,r=n.from,a=n.to;return n.empty?!!t.isInSet(e.storedMarks||n.$from.marks()):!!e.doc.rangeHasMark(r,a,t)}(t,e)},t.update=function(){var e=this,t=this.items.filter((function(t){return e.markActive(t.type)}));this.onUpdate(t.length?t.map((function(e){return e.name})):[])},t.destroy=function(){this.onUpdate([])},e}(),z=new c.Plugin({state:{init:function(){return o.DecorationSet.empty},apply:function(e,t){t=t.map(e.mapping,e.doc);var n=e.getMeta(this);if(n&&n.add){var r=document.createElement("div");r.className="image__placeholder";var a=document.createElement("div");a.className="loader",r.appendChild(a);var i=o.Decoration.widget(n.add.pos,r,{id:n.add.id});t=t.add(e.doc,[i])}else n&&n.remove&&(t=t.remove(t.find(void 0,void 0,(function(e){return e.id===n.remove.id}))));return t}},props:{decorations:function(e){return this.getState(e)}}}),H=function(e,t,n,r,a){var i={};if(!window.confirm(n.alertMessage||"I am authorised to use this content"))return!1;var o=e.state.tr;o.setMeta(z,{add:{id:i,pos:r}}),o.setSelection(o.selection),e.dispatch(o);var c=e.state.schema;return t.forEach((function(t){var r=function(e,t){var n=z.getState(e).find(void 0,void 0,(function(e){return e.id===t}));return n.length?n[0].from:null}(e.state,i);if(r){var o=new FormData;o.append("image",t);var s=new XMLHttpRequest;s.withCredentials=!0,s.open("POST",n.url,!0),s.setRequestHeader("X-CSRF-TOKEN",n.csrfToken),s.onerror=function(){var t=e.state.tr.setMeta(z,{remove:{id:i}});a("Sorry something went wrong"),e.dispatch(t)},s.onload=function(){var t,n;try{n=JSON.parse(s.response)}catch(e){n={errors:"Sorry something went wrong"}}if([200,201].includes(s.status)){var o=c.nodes.image.create({src:n.data.url});t=e.state.tr.replaceWith(r,r,o).setMeta(z,{remove:{id:i}})}else t=e.state.tr.setMeta(z,{remove:{id:i}}),a(n.errors);e.dispatch(t)},s.send(o)}})),!0};function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return t&&K(e.prototype,t),n&&K(e,n),e}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function j(e){var t=e.doc,n=e.name,r=[],a=[];return v.findBlockNodes(t).filter((function(e){return e.node.type.name===n})).forEach((function(e){var t=e.pos+1,n=y.highlightAuto(e.node.textContent),i=n.value,c=n.language;n.relevance>1&&(c&&c!==e.node.attrs.params&&a.push({language:c,pos:e.pos,type:e.node.type}),u.flattenDeep(function e(t,n){return void 0===n&&(n=[]),t.map((function(t){var r=[].concat(n,t.properties?t.properties.className:[]);return t.children?e(t.children,r):{text:t.value,classes:r}}))}(i)).map((function(e){var n=t,r=n+e.text.length;return t=r,G({},e,{from:n,to:r})})).forEach((function(e){var t=o.Decoration.inline(e.from,e.to,{class:e.classes.join(" ")});r.push(t)})))})),{decorations:o.DecorationSet.create(t,r),languages:a}}var V=function(){function e(e){this.schema=e}var t=e.prototype;return t.getPlugins=function(){return this._type?[d.keymap(this.shortcuts),h.inputRules({rules:this.rules})]:[]},t.getToolbarItem=function(){return this._type&&this.inToolbar&&this.command?{name:this.name,icon:this.icon,command:this.command,type:this.type,label:this.label}:null},$(e,[{key:"name",get:function(){return""}},{key:"label",get:function(){return""}},{key:"icon",get:function(){return""}},{key:"inToolbar",get:function(){return!0}},{key:"command",get:function(){return function(e,t){}}},{key:"shortcuts",get:function(){return{}}},{key:"rules",get:function(){return[]}},{key:"type",get:function(){return this._type}},{key:"_type",get:function(){return null}}]),e}(),F=function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"type",get:function(){return this._type}},{key:"_type",get:function(){return this.schema.marks[this.name]}}]),t}(V),q=/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*))\s$/g,Q=/\[(.+)\]\((https?[^ ]+)(?: "(.+)")?\)$/,W=[function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"strong"}},{key:"label",get:function(){return"Toggle bold"}},{key:"icon",get:function(){return"Bold"}},{key:"command",get:function(){return g.toggleMark(this.type)}},{key:"shortcuts",get:function(){return{"Mod-b":g.toggleMark(this.type),"Mod-B":g.toggleMark(this.type)}}},{key:"rules",get:function(){return[R(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/,this.type)]}}]),t}(F),function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"em"}},{key:"label",get:function(){return"Toggle emphasis"}},{key:"icon",get:function(){return"Italic"}},{key:"shortcuts",get:function(){return{"Mod-i":g.toggleMark(this.type),"Mod-I":g.toggleMark(this.type)}}},{key:"rules",get:function(){return[R(/(?:^|[^_])(_([^_]+)_)$/,this.type),R(/(?:^|[^*])(\*([^*]+)\*)$/,this.type)]}},{key:"command",get:function(){return g.toggleMark(this.type)}}]),t}(F),function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"code"}},{key:"label",get:function(){return"Toggle code"}},{key:"icon",get:function(){return"Code"}},{key:"shortcuts",get:function(){return{"Mod-`":g.toggleMark(this.type)}}},{key:"rules",get:function(){return[R(/(?:`)([^`]+)(?:`)$/,this.type)]}},{key:"command",get:function(){return g.toggleMark(this.type)}}]),t}(F),function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"link"}},{key:"rules",get:function(){return[(e=q,t=this.type,new h.InputRule(e,(function(e,n,r,a){var i=e.tr.insertText(n[0],r,a),o=t.create({href:n[1]});return i.addMark(r,r+n[1].length,o)}))),I(Q,this.type)];var e,t}},{key:"inToolbar",get:function(){return!1}}]),t}(F)],J=function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"type",get:function(){return this._type}},{key:"_type",get:function(){return this.schema.nodes[this.name]}},{key:"paragraphType",get:function(){return this.schema.nodes.paragraph}},{key:"listItemType",get:function(){return this.schema.nodes.list_item}}]),t}(V),X=[1,2,3,4,5,6],Y=[function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"blockquote"}},{key:"label",get:function(){return"Toggle block quote"}},{key:"icon",get:function(){return"Quote"}},{key:"command",get:function(){return e=this.type,function(t,n){return L(t,e).isActive?g.lift(t,n):g.wrapIn(e)(t,n)};var e}},{key:"rules",get:function(){return[h.wrappingInputRule(/^\s*>\s$/,this.type)]}}]),t}(J),function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"heading"}},{key:"label",get:function(){return"Toggle heading"}},{key:"icon",get:function(){return"Heading"}},{key:"command",get:function(){return D(this.type,this.paragraphType)}},{key:"rules",get:function(){var e=this;return X.map((function(t){return h.textblockTypeInputRule(new RegExp("^(#{1,"+t+"})\\s$"),e.type,(function(){return{level:t}}))}))}}]),t}(J),function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"bullet_list"}},{key:"label",get:function(){return"Toggle bullet list"}},{key:"icon",get:function(){return"UnorderedList"}},{key:"command",get:function(){return P(this.type,this.listItemType)}},{key:"rules",get:function(){return[h.wrappingInputRule(/^\s*([-+*])\s$/,this.type)]}}]),t}(J),function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"ordered_list"}},{key:"label",get:function(){return"Toggle ordered list"}},{key:"icon",get:function(){return"OrderedList"}},{key:"command",get:function(){return P(this.type,this.listItemType)}},{key:"rules",get:function(){return[h.wrappingInputRule(/^(\d+)\.\s$/,this.type,(function(e){return{order:+e[1]}}),(function(e,t){return t.childCount+t.attrs.order===+e[1]}))]}}]),t}(J),function(e){function t(){return e.apply(this,arguments)||this}return Z(t,e),$(t,[{key:"name",get:function(){return"code_block"}},{key:"label",get:function(){return"Toggle code block"}},{key:"icon",get:function(){return"CodeBlock"}},{key:"command",get:function(){return D(this.type,this.paragraphType)}},{key:"rules",get:function(){return[h.textblockTypeInputRule(/^(```|~~~)$/,this.type)]}}]),t}(J)],ee=function(e){return[].concat(function(e){return u.compact(W.map((function(t){return new t(e).getToolbarItem()})))}(e),function(e){return u.compact(Y.map((function(t){return new t(e).getToolbarItem()})))}(e))},te={Bold:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--bold",viewBox:"0 0 32 32"},i.createElement("path",{d:"M24.2,17.4c-0.9-0.9-2-1.7-3.3-2.1c1.8-1,3.6-3,3.6-6.7c0-0.1,0.2-3.5-2.1-5.9C20.8,0.9,18.5,0,15.5,0H9v0H7\n  v32h0.8v0H16c0.1,0,0.1,0,0.2,0c1.5,0,5.3-0.1,7.8-2.6c1.5-1.5,2.3-3.6,2.3-6.1C26.3,22.8,26.4,19.8,24.2,17.4z M15.5,2\n  c2.4,0,4.2,0.6,5.4,1.9c1.7,1.8,1.6,4.4,1.6,4.5c0,2.6-1,4.3-3,5.3c-1.1,0.5-2.4,0.8-4,0.8H9V2H15.5z M24.2,23.1l0,0.1\n  c0,2-0.6,3.6-1.7,4.8c-2,2-5.5,2-6.6,2H9V16.5h6.8c3.2-0.1,5.5,0.7,6.9,2.2C24.4,20.6,24.2,23.1,24.2,23.1z"}))},Code:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--code",viewBox:"0 0 32 32"},i.createElement("polygon",{points:"13.1,6.7 11.6,5.3 1,16 11.7,26.7 13.1,25.3 3.8,16 "}),i.createElement("polygon",{points:"20.4,5.3 19,6.7 28.2,16 19,25.3 20.4,26.7 31,16 "}))},CodeBlock:function(){return i.createElement("svg",{viewBox:"0 0 32 32"},i.createElement("path",{fill:"#3A343A",d:"M11.97,1.02L10.69,1v0C10.47,1,8.7,0.85,7.48,1.96c-0.6,0.55-0.92,1.31-0.92,2.2v9.66  c0,0.42-0.15,0.6-0.27,0.72C5.77,15.06,3.97,15,3.97,15v2c0,0,1.79-0.07,2.33,0.46c0.12,0.12,0.27,0.3,0.27,0.72v9.66  c0,0.89,0.32,1.65,0.92,2.2C8.7,31.15,10.47,31,10.69,31v0l1.28-0.02V29L10.69,29c-0.33,0.02-1.38,0-1.86-0.44  c-0.12-0.11-0.27-0.3-0.27-0.72v-9.66c0-0.87-0.31-1.63-0.9-2.18c0.58-0.55,0.9-1.31,0.9-2.18V4.16c0-0.42,0.14-0.61,0.27-0.72  C9.31,2.99,10.36,2.97,10.69,3v0L11.97,3V1.02z"}),i.createElement("path",{fill:"#3A343A",d:"M19.98,1.02L21.26,1v0c0.22,0,1.99-0.15,3.21,0.97c0.6,0.55,0.92,1.31,0.92,2.2v9.66  c0,0.42,0.15,0.6,0.27,0.72c0.52,0.52,2.33,0.46,2.33,0.46v2c0,0-1.79-0.07-2.33,0.46c-0.12,0.12-0.27,0.3-0.27,0.72v9.66  c0,0.89-0.32,1.65-0.92,2.2C23.25,31.15,21.49,31,21.26,31v0l-1.28-0.02V29L21.26,29c0.33,0.02,1.38,0,1.86-0.44  c0.12-0.11,0.27-0.3,0.27-0.72v-9.66c0-0.87,0.31-1.63,0.9-2.18c-0.58-0.55-0.9-1.31-0.9-2.18V4.16c0-0.42-0.14-0.61-0.27-0.72  C22.64,2.99,21.59,2.97,21.26,3v0L19.98,3V1.02z"}))},Heading:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--heading",viewBox:"0 0 32 32"},i.createElement("polygon",{points:"25,0 25,15 7,15 7,0 5,0 5,32 7,32 7,17 25,17 25,32 27,32 27,0 "}))},Image:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--italic",viewBox:"0 0 32 32"},i.createElement("circle",{cx:"21.5",cy:"11.5",r:"4.5"}),i.createElement("polygon",{points:"32,6 32,0 0,0 0,32 32,32 32,11 30,11 30,30 16,20 2,30 2,2 30,2 30,6"}))},Italic:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--italic",viewBox:"0 0 32 32"},i.createElement("polygon",{points:"25.3,2 25.3,0 13.3,0 13.3,2 18.1,2 12.2,30 7,30 7,32 19,32 19,30 14.2,30 20.1,2 "}))},OrderedList:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--ordered-list",viewBox:"0 0 32 32"},i.createElement("rect",{x:"10",y:"3",width:"22",height:"2"}),i.createElement("rect",{x:"10",y:"15",width:"22",height:"2"}),i.createElement("rect",{x:"10",y:"27",width:"22",height:"2"}),i.createElement("path",{d:"M3.8,25.1c-1,0-1.3,0.8-1.3,0.8l-1.3-0.7c0,0,0.7-1.6,2.7-1.6c1.5,0,2.9,0.8,2.9,2.4c0,1.1-0.9,1.4-0.9,1.4\n    s1,0.4,1,1.7c0,1.6-1.4,2.4-2.9,2.4c-2.2,0-2.8-1.8-2.8-1.8l1.4-0.8c0,0,0.3,1.1,1.4,1.1c0.7,0,1-0.4,1-0.9c0-0.6-0.5-0.9-1.3-0.9\n    H3.3v-1.3h0.3c0.6,0,1.3-0.2,1.3-0.9C4.9,25.5,4.5,25.1,3.8,25.1z"}),i.createElement("path",{d:"M4.1,16C4.4,15.6,5,15,5,14.3c0-0.6-0.5-1.1-1.2-1.1c-1,0-1.3,1.1-1.3,1.1L1,13.8c0,0,0.6-2.3,2.8-2.3\n    c2,0,3,1.4,3,2.7c0,0.8-0.4,1.5-0.6,1.7L4.7,18h2.2v1.6H1.1L4.1,16z"}),i.createElement("path",{d:"M4.4,0.6H6v7.9H4.2V2.9L2.4,4.5l-1-1.3L4.4,0.6z"}))},Quote:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--quote",viewBox:"0 0 32 32"},i.createElement("path",{d:"M11.1,26V15.9H5.6C6,12.3,8.3,9.5,12,9.5V5.8c-5.8,0-10.5,4.4-11,10.1l0,0V26H11.1z"}),i.createElement("path",{d:"M20.9,5.8v10.1h5.5c-0.5,3.6-2.7,6.4-6.4,6.4V26c5.8,0,10.5-4.4,11-10.1l0,0V5.8L20.9,5.8z"}))},UnorderedList:function(){return i.createElement("svg",{className:"a-svg-icon a-svg-icon--unordered-list",viewBox:"0 0 32 32"},i.createElement("circle",{cx:"2.5",cy:"4",r:"2.5"}),i.createElement("circle",{cx:"2.5",cy:"16",r:"2.5"}),i.createElement("circle",{cx:"2.5",cy:"28",r:"2.5"}),i.createElement("rect",{x:"8",y:"3",width:"24",height:"2"}),i.createElement("rect",{x:"8",y:"15",width:"24",height:"2"}),i.createElement("rect",{x:"8",y:"27",width:"24",height:"2"}))}},ne=function(e){var t=e.item,n=e.item,r=n.name,a=e.onClick,o=te[n.icon];return i.createElement("button",{className:N("item",{"item--active":e.isActive}),"data-item":r,onClick:function(){return a(t)},type:"button","aria-label":t.label,title:t.label},i.createElement(o,null))},re=function(e){var t=e.editor,n=e.imageUploadEndpoint,r=e.onError;return i.createElement("div",{className:"fileUploadWrapper"},i.createElement("input",{type:"file",accept:".jpg,.jpeg,.png,.gif",onChange:function(e){if(n&&t&&e.target){var a=e.target;a.files&&(e.preventDefault(),H(t,Array.from(a.files),n,t.state.tr.selection.from,r),t.focus(),a.value="")}}}),i.createElement("button",{"data-item":"image",className:"item fileUploadWrapper--button","aria-label":"Upload image",title:"Upload image"},i.createElement(te.Image,null)))},ae=function(e){var t=e.onClick,n=e.activeOptions,r=e.editor,o=e.imageUploadEndpoint,c=e.disabledItems,s=void 0===c?[]:c,u=e.onError,l=a.useMemo((function(){return ee(r.state.schema).filter((function(e){return!s.includes(e.name)}))}),[s,r.state.schema]);return i.createElement("div",{className:"toolbar"},l.map((function(e){return i.createElement(ne,{key:e.name,item:e,onClick:t,isActive:n.includes(e.name)})})),!s.includes("image")&&i.createElement(re,{editor:r,imageUploadEndpoint:o,onError:u}))},ie=i.memo(ae),oe=function(e){var t={code_block:"Hold down shift and press enter to exit the code block"};return i.createElement("p",null,e.activeOptions.map((function(e){return t[e]})))};t.default=function(e){var t=e.id,n=e.name,r=e.onChange,l=void 0===r?function(){}:r,m=e.value,h=void 0===m?"":m,v=e.placeholder,O=void 0===v?"Enter text":v,C=e.classes,R=void 0===C?"":C,I=e.imageUploadEndpoint,L=e.onError,D=void 0===L?function(){}:L,B=e.disabledMarks,P=void 0===B?[]:B,K=e.disabledNodes,$=void 0===K?[]:K,G=e.inputRef,Z=a.useRef(null),V=a.useState(null),F=V[0],q=V[1],Q=a.useState(h),J=Q[0],X=Q[1],te=a.useState([]),ne=te[0],re=te[1],ae=a.useRef([].concat(P,$)),ce=a.useRef(ne),se=function(e){X(e),l(e)},ue=function(e){JSON.stringify(e)!==JSON.stringify(ce.current)&&re(e)},le=function(){if(Z.current){var e=function(e){var t,n,r=e.node,a=e.value,i=e.onChange,l=e.classes,m=e.placeholder,h=e.onToolbarChange,v=e.imageUploadEndpoint,N=e.onError,O=function(e){var t=e.disabledMarks,n=void 0===t?[]:t,r=e.disabledNodes,a=void 0===r?[]:r;return a.includes("code_block")?a.push("fence"):s.schema.nodes.code_block.isolating=!0,s.schema.nodes=u.omit(s.schema.nodes,[].concat(w,a)),s.schema.marks=u.omit(s.schema.marks,n),s.schema.disabledNodes=a,s.schema.disabledMarks=n,s.schema}({disabledMarks:e.disabledMarks,disabledNodes:e.disabledNodes}),C=O.nodes.list_item,R=[f.history(),d.keymap({"Mod-z":f.undo,"Mod-y":f.redo,Enter:p.splitListItem(C),Backspace:function(e,t){var n=e.selection.$from.parent;return!(![O.nodes.heading,O.nodes.code_block].includes(n.type)||n.textContent.length||(g.setBlockType(O.nodes.paragraph)(e,t),0))}}),d.keymap({"Shift-Enter":g.exitCode}),d.keymap(g.baseKeymap),x(O,N),(t=ee(O),n=h,new c.Plugin({view:function(e){return new U(t,e,n)}}))].concat(function(e){return u.flatMap(W,(function(t){return new t(e).getPlugins()}))}(O),function(e){return u.flatMap(Y,(function(t){return new t(e).getPlugins()}))}(O),[T(l,m)]);O.nodes.code_block&&R.push(function(e){var t=e.name;y.registerLanguage("javascript",E),y.registerLanguage("python",b),y.registerLanguage("r",_),y.registerLanguage("css",k),y.registerLanguage("java",M);var n=new c.PluginKey("highlight");return new c.Plugin({key:n,state:{init:function(e,n){return j({doc:n.doc,name:t})},apply:function(e,n,r,a){return e.docChanged&&[a.selection.$head.parent.type.name,r.selection.$head.parent.type.name].includes(t)?j({doc:e.doc,name:t}):(n.decorations||n).map(e.mapping,e.doc)}},props:{decorations:function(e){var t=this.getState(e);return t.decorations||t}},view:function(e){return{update:function(e,t){var r=n.get(t);if(r){var a=r.getState(e.state).languages;a&&a.length&&a.forEach((function(t){var n=e.state.tr.setNodeMarkup(t.pos,t.type,{params:t.language});e.dispatch(n)}))}}}}})}({name:O.nodes.code_block.name})),v&&O.nodes.image&&R.push(z,function(e,t){return new c.Plugin({props:{handleDOMEvents:{drop:function(n,r){var a=r;if(!a.dataTransfer)return!1;if(!a.dataTransfer.files||!a.dataTransfer.files.length)return!1;var i=Array.from(a.dataTransfer.files).filter((function(e){return/image/i.test(e.type)}));if(0===i.length)return!1;r.preventDefault();var o=n.posAtCoords({left:a.clientX,top:a.clientY});return!!o&&H(n,i,e,o.pos,t)}}}})}(v,N));var I=new o.EditorView(r,{state:c.EditorState.create({schema:O,doc:S(O).parse(a),plugins:R}),dispatchTransaction:function(e){var t=I.state.apply(e);I.updateState(t),i(A.serialize(I.state.doc))}});return I}({node:Z.current,value:h,onChange:se,classes:R,placeholder:O,onToolbarChange:ue,imageUploadEndpoint:I,onError:D,disabledNodes:$,disabledMarks:P});q(e)}},de=a.useCallback((function(e){var t=e.command;F&&(F.focus(),t(F.state,F.dispatch,F))}),[F]);return a.useEffect((function(){ce.current=ne}),[ne]),a.useEffect((function(){G&&(G.current=F)}),[F,G]),a.useEffect((function(){h!==J&&F&&(F.destroy(),le())}),[h]),a.useEffect((function(){le()}),[]),i.createElement(i.Fragment,null,F&&i.createElement(ie,{activeOptions:ne,onClick:de,editor:F,disabledItems:ae.current,imageUploadEndpoint:I,onError:D}),i.createElement("div",{id:t,className:N({hasPlaceholder:!J.length}),ref:Z}),i.createElement(oe,{activeOptions:ne}),i.createElement("input",{type:"hidden",value:J,onChange:function(){},name:n}))}},Ay05:function(e,t){e.exports.short=300;e.exports.medium=400;e.exports.long=600},Eg6H:function(e,t){e.exports=function(e){var t={begin:"<>",end:"</>"};var n={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/};var r="[A-Za-z$_][0-9A-Za-z$_]*";var a={keyword:"in of if for while finally var new function do return void else break catch "+"instanceof with throw case default try this switch continue typeof delete "+"let yield const export super debugger as async await static "+"import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent "+"encodeURI encodeURIComponent escape unescape Object Function Boolean Error "+"EvalError InternalError RangeError ReferenceError StopIteration SyntaxError "+"TypeError URIError Number Math Date String RegExp Array Float32Array "+"Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array "+"Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require "+"module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect "+"Promise"};var i={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0};var o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]};var c={begin:"html`",end:"",starts:{end:"`",returnEnd:false,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"xml"}};var s={begin:"css`",end:"",starts:{end:"`",returnEnd:false,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"css"}};var u={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]};o.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,c,s,u,i,e.REGEXP_MODE];var l=o.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx","mjs","cjs"],keywords:a,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,c,s,u,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:true,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,i,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:r+"\\s*:",returnBegin:true,relevance:0,contains:[{className:"attr",begin:r,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+r+")\\s*=>",returnBegin:true,end:"\\s*=>",contains:[{className:"params",variants:[{begin:r},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:true,excludeEnd:true,keywords:a,contains:l}]}]},{className:"",begin:/\s/,end:/\s*/,skip:true},{variants:[{begin:t.begin,end:t.end},{begin:n.begin,end:n.end}],subLanguage:"xml",contains:[{begin:n.begin,end:n.end,skip:true,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:true,contains:[e.inherit(e.TITLE_MODE,{begin:r}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:true,excludeEnd:true,contains:l}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:true,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:true}],illegal:/#(?!!)/}}},K3a0:function(e,t){e.exports=function(e){var t={keyword:"and elif is global as in if from raise for except finally print import pass return "+"exec else break not with class assert yield try while continue del or def lambda "+"async await nonlocal|10",built_in:"Ellipsis NotImplemented",literal:"False None True"};var n={className:"meta",begin:/^(>>>|\.\.\.) /};var r={className:"subst",begin:/\{/,end:/\}/,keywords:t,illegal:/#/};var a={begin:/\{\{/,relevance:0};var i={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/(u|b)?r?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,n],relevance:10},{begin:/(u|b)?r?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,n],relevance:10},{begin:/(fr|rf|f)'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,n,a,r]},{begin:/(fr|rf|f)"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,n,a,r]},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{begin:/(b|br)"/,end:/"/},{begin:/(fr|rf|f)'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,a,r]},{begin:/(fr|rf|f)"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,a,r]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]};var o={className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]};var c={className:"params",begin:/\(/,end:/\)/,contains:["self",n,o,i,e.HASH_COMMENT_MODE]};r.contains=[i,o,n];return{aliases:["py","gyp","ipython"],keywords:t,illegal:/(<\/|->|\?)|=>/,contains:[n,o,{beginKeywords:"if",relevance:0},i,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,c,{begin:/->/,endsWithParent:true,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{begin:/\b(print|exec)\(/}]}}},M9Iz:function(e,t){e.exports=function(e){var t="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{contains:[e.HASH_COMMENT_MODE,{begin:t,lexemes:t,keywords:{keyword:"function if in break next repeat else for return switch while try tryCatch "+"stop warning require library attach detach source setMethod setGeneric "+"setGroupGeneric setClass ...",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 "+"NA_complex_|10"},relevance:0},{className:"number",begin:"0[xX][0-9a-fA-F]+[Li]?\\b",relevance:0},{className:"number",begin:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",relevance:0},{className:"number",begin:"\\d+\\.(?!\\d)(?:i\\b)?",relevance:0},{className:"number",begin:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",relevance:0},{className:"number",begin:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",relevance:0},{begin:"`",end:"`",relevance:0},{className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:'"',end:'"'},{begin:"'",end:"'"}]}]}}},P9es:function(e,t){e.exports.static="linear";e.exports.motion="ease-out"},WlYr:function(e,t,n){"use strict";if(true)e.exports=n("3POp")},Xl3M:function(e,t){e.exports.typeScaleMedium=680;e.exports.typeScaleLarge=1695;e.exports.small=480;e.exports.medium=648;e.exports.large=900;e.exports.xlarge=1280;e.exports.xxlarge=1600;e.exports.comments=1392},iumw:function(e,t){e.exports=function(e){var t="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*";var n=t+"(<"+t+"(\\s*,\\s*"+t+")*>)?";var r="false synchronized int abstract float private char boolean var static null if const "+"for true while long strictfp finally protected import native final void "+"enum else break transient catch instanceof byte super volatile case assert short "+"package default double public try this switch continue throws protected public private "+"module requires exports do";var a="\\b"+"("+"0[bB]([01]+[01_]+[01]+|[01]+)"+"|"+"0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)"+"|"+"("+"([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?"+"|"+"\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)"+")"+"([eE][-+]?\\d+)?"+")"+"[lLfF]?";var i={className:"number",begin:a,relevance:0};return{aliases:["jsp"],keywords:r,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface",end:/[{;=]/,excludeEnd:true,keywords:"class interface",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"function",begin:"("+n+"\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:true,end:/[{;=]/,excludeEnd:true,keywords:r,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:true,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:r,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},i,{className:"meta",begin:"@[A-Za-z]+"}]}}},s5gA:function(e,t){e.exports=function(e){var t={begin:/[\w-]+\(/,returnBegin:true,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]};var n={className:"attribute",begin:/\S/,end:":",excludeEnd:true,starts:{endsWithParent:true,excludeEnd:true,contains:[t,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}};var r="@[a-z-]+";var a="and or not only";var i=/@\-?\w[\w]*(\-\w+)*/;var o="[a-zA-Z-][a-zA-Z0-9_-]*";var c={begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:true,end:";",endsWithParent:true,contains:[n]};return{case_insensitive:true,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",lexemes:r,keywords:"@page @font-face"},{begin:"@",end:"[{;]",illegal:/:/,returnBegin:true,contains:[{className:"keyword",begin:i},{begin:/\s/,endsWithParent:true,excludeEnd:true,relevance:0,keywords:a,contains:[{begin:/[a-z-]+:/,className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:o,relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,c]}]}}}}]);