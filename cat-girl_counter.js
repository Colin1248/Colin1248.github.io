/* License: MIT Copyright © 2023 SurvExE-Pc (https://github.com/SurvExE-Pc), X-Tags (https://x-tags.org/) | Image copyright: https://rule34.xxx/ (18+) | This app uses version 1.5.11 of X-Tags | Current version is v1.1 */
(function(){"use strict";var t=new function(){},e=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function n(t){var n=e.has(t);return t=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t),!n&&t}function o(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function i(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function r(t,e,n){n=n||new Set;for(var o=t;o;){if(o.nodeType===Node.ELEMENT_NODE){var a=o;e(a);var l=a.localName;if("link"===l&&"import"===a.getAttribute("rel")){if((o=a.import)instanceof Node&&!n.has(o))for(n.add(o),o=o.firstChild;o;o=o.nextSibling)r(o,e,n);o=i(t,a);continue}if("template"===l){o=i(t,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)r(a,e,n)}o=o.firstChild?o.firstChild:i(t,o)}}function a(t,e,n){t[e]=n}function l(){this.a=new Map,this.m=new Map,this.f=[],this.b=!1}function c(t,e){t.b=!0,t.f.push(e)}function s(t,e){t.b&&r(e,function(e){return f(t,e)})}function f(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.f.length;n++)t.f[n](e)}}function h(t,e){var n=[];for(r(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state?t.connectedCallback(o):d(t,o)}}function u(t,e){var n=[];for(r(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state&&t.disconnectedCallback(o)}}function p(t,e,n){var o=(n=n||{}).w||new Set,i=n.s||function(e){return d(t,e)},a=[];if(r(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&"complete"===n.readyState?(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0):e.addEventListener("load",function(){var n=e.import;n.__CE_documentLoadHandled||(n.__CE_documentLoadHandled=!0,n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0,o.delete(n),p(t,n,{w:o,s:i}))})}else a.push(e)},o),t.b)for(e=0;e<a.length;e++)f(t,a[e]);for(e=0;e<a.length;e++)i(a[e])}function d(t,e){if(void 0===e.__CE_state){var n=t.a.get(e.localName);if(n){n.constructionStack.push(e);var i=n.constructor;try{try{if(new i!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{n.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=n,n.attributeChangedCallback)for(n=n.observedAttributes,i=0;i<n.length;i++){var r=n[i],a=e.getAttribute(r);null!==a&&t.attributeChangedCallback(e,r,null,a,null)}o(e)&&t.connectedCallback(e)}}}function m(t,e){this.c=t,this.a=e,this.b=void 0,p(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function w(t){t.b&&t.b.disconnect()}function y(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function g(t){this.h=!1,this.c=t,this.l=new Map,this.i=function(t){return t()},this.g=!1,this.j=[],this.u=new m(t,document)}l.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},l.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},l.prototype.attributeChangedCallback=function(t,e,n,o,i){var r=t.__CE_definition;r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(e)&&r.attributeChangedCallback.call(t,e,n,o,i)},m.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||w(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,o=0;o<n.length;o++)p(this.c,n[o])},g.prototype.define=function(t,e){var o,i,r,a,l,c=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!n(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.c.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.h)throw Error("A custom element is already being defined.");this.h=!0;try{var s=function(t){var e=f[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},f=e.prototype;if(!(f instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");o=s("connectedCallback"),i=s("disconnectedCallback"),r=s("adoptedCallback"),a=s("attributeChangedCallback"),l=e.observedAttributes||[]}catch(t){return}finally{this.h=!1}e={localName:t,constructor:e,connectedCallback:o,disconnectedCallback:i,adoptedCallback:r,attributeChangedCallback:a,observedAttributes:l,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.m.set(n.constructor,n)}(this.c,t,e),this.j.push(e),this.g||(this.g=!0,this.i(function(){return function(t){if(!1!==t.g){t.g=!1;for(var e=t.j,n=[],o=new Map,i=0;i<e.length;i++)o.set(e[i].localName,[]);for(p(t.c,document,{s:function(e){if(void 0===e.__CE_state){var i=e.localName,r=o.get(i);r?r.push(e):t.c.a.get(i)&&n.push(e)}}}),i=0;i<n.length;i++)d(t.c,n[i]);for(;0<e.length;){for(var r=e.shift(),i=r.localName,r=o.get(r.localName),a=0;a<r.length;a++)d(t.c,r[a]);(i=t.l.get(i))&&y(i)}}}(c)}))},g.prototype.get=function(t){if(t=this.c.a.get(t))return t.constructor},g.prototype.whenDefined=function(t){if(!n(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.l.get(t);return e?e.f:(e=new function(){var t=this;this.b=this.a=void 0,this.f=new Promise(function(e){t.b=e,t.a&&e(t.a)})},this.l.set(t,e),this.c.a.get(t)&&!this.j.some(function(e){return e.localName===t})&&y(e),e.f)},g.prototype.v=function(t){w(this.u);var e=this.i;this.i=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=g,g.prototype.define=g.prototype.define,g.prototype.get=g.prototype.get,g.prototype.whenDefined=g.prototype.whenDefined,g.prototype.polyfillWrapFlushCallback=g.prototype.v;var b=window.Document.prototype.createElement,v=window.Document.prototype.createElementNS,_=window.Document.prototype.importNode,E=window.Document.prototype.prepend,C=window.Document.prototype.append,N=window.Node.prototype.cloneNode,k=window.Node.prototype.appendChild,A=window.Node.prototype.insertBefore,D=window.Node.prototype.removeChild,S=window.Node.prototype.replaceChild,T=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),j=window.Element.prototype.attachShadow,M=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),O=window.Element.prototype.getAttribute,L=window.Element.prototype.setAttribute,H=window.Element.prototype.removeAttribute,x=window.Element.prototype.getAttributeNS,R=window.Element.prototype.setAttributeNS,P=window.Element.prototype.removeAttributeNS,F=window.Element.prototype.insertAdjacentElement,I=window.Element.prototype.prepend,z=window.Element.prototype.append,W=window.Element.prototype.before,B=window.Element.prototype.after,X=window.Element.prototype.replaceWith,$=window.Element.prototype.remove,q=window.HTMLElement,G=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),J=window.HTMLElement.prototype.insertAdjacentElement;function K(t,e,n){e.prepend=function(e){for(var i=[],r=0;r<arguments.length;++r)i[r-0]=arguments[r];r=i.filter(function(t){return t instanceof Node&&o(t)}),n.o.apply(this,i);for(var a=0;a<r.length;a++)u(t,r[a]);if(o(this))for(r=0;r<i.length;r++)(a=i[r])instanceof Element&&h(t,a)},e.append=function(e){for(var i=[],r=0;r<arguments.length;++r)i[r-0]=arguments[r];r=i.filter(function(t){return t instanceof Node&&o(t)}),n.append.apply(this,i);for(var a=0;a<r.length;a++)u(t,r[a]);if(o(this))for(r=0;r<i.length;r++)(a=i[r])instanceof Element&&h(t,a)}}var Q,U=window.customElements;if(!U||U.forcePolyfill||"function"!=typeof U.define||"function"!=typeof U.get){var V=new l;Q=V,window.HTMLElement=function(){function e(){var e=this.constructor;if(!(o=Q.m.get(e)))throw Error("The custom element being constructed was not registered with `customElements`.");var n=o.constructionStack;if(!n.length)return n=b.call(document,o.localName),Object.setPrototypeOf(n,e.prototype),n.__CE_state=1,n.__CE_definition=o,f(Q,n),n;var o,i=n[o=n.length-1];if(i===t)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[o]=t,Object.setPrototypeOf(i,e.prototype),f(Q,i),i}return e.prototype=q.prototype,e}(),function(){var t=V;a(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructor}return e=b.call(this,e),f(t,e),e}),a(Document.prototype,"importNode",function(e,n){return e=_.call(this,e,n),this.__CE_hasRegistry?p(t,e):s(t,e),e}),a(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var o=t.a.get(n);if(o)return new o.constructor}return e=v.call(this,e,n),f(t,e),e}),K(t,Document.prototype,{o:E,append:C})}(),function(){var t=V;function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,e);else{var i=void 0;if(this.firstChild){var r=this.childNodes,a=r.length;if(0<a&&o(this)){i=Array(a);for(var l=0;l<a;l++)i[l]=r[l]}}if(n.set.call(this,e),i)for(e=0;e<i.length;e++)u(t,i[e])}}})}a(Node.prototype,"insertBefore",function(e,n){if(e instanceof DocumentFragment){var i=Array.prototype.slice.apply(e.childNodes);if(e=A.call(this,e,n),o(this))for(n=0;n<i.length;n++)h(t,i[n]);return e}return i=o(e),n=A.call(this,e,n),i&&u(t,e),o(this)&&h(t,e),n}),a(Node.prototype,"appendChild",function(e){if(e instanceof DocumentFragment){var n=Array.prototype.slice.apply(e.childNodes);if(e=k.call(this,e),o(this))for(var i=0;i<n.length;i++)h(t,n[i]);return e}return n=o(e),i=k.call(this,e),n&&u(t,e),o(this)&&h(t,e),i}),a(Node.prototype,"cloneNode",function(e){return e=N.call(this,e),this.ownerDocument.__CE_hasRegistry?p(t,e):s(t,e),e}),a(Node.prototype,"removeChild",function(e){var n=o(e),i=D.call(this,e);return n&&u(t,e),i}),a(Node.prototype,"replaceChild",function(e,n){if(e instanceof DocumentFragment){var i=Array.prototype.slice.apply(e.childNodes);if(e=S.call(this,e,n),o(this))for(u(t,n),n=0;n<i.length;n++)h(t,i[n]);return e}i=o(e);var r=S.call(this,e,n),a=o(this);return a&&u(t,n),i&&u(t,e),a&&h(t,e),r}),T&&T.get?e(Node.prototype,T):c(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)D.call(this,this.firstChild);k.call(this,document.createTextNode(t))}})})}(),function(){var t=V;function e(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var i=this,a=void 0;if(o(this)&&(a=[],r(this,function(t){t!==i&&a.push(t)})),n.set.call(this,e),a)for(var l=0;l<a.length;l++){var c=a[l];1===c.__CE_state&&t.disconnectedCallback(c)}return this.ownerDocument.__CE_hasRegistry?p(t,this):s(t,this),e}})}function n(e,n){a(e,"insertAdjacentElement",function(e,i){var r=o(i);return e=n.call(this,e,i),r&&u(t,i),o(e)&&h(t,i),e})}if(j?a(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=j.call(this,t)}):console.warn("Custom Elements: `Element#attachShadow` was not patched."),M&&M.get)e(Element.prototype,M);else if(G&&G.get)e(HTMLElement.prototype,G);else{var i=b.call(document,"div");c(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){return N.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName?this.content:this;for(i.innerHTML=t;0<e.childNodes.length;)D.call(e,e.childNodes[0]);for(;0<i.childNodes.length;)k.call(e,i.childNodes[0])}})})}a(Element.prototype,"setAttribute",function(e,n){if(1!==this.__CE_state)return L.call(this,e,n);var o=O.call(this,e);L.call(this,e,n),n=O.call(this,e),t.attributeChangedCallback(this,e,o,n,null)}),a(Element.prototype,"setAttributeNS",function(e,n,o){if(1!==this.__CE_state)return R.call(this,e,n,o);var i=x.call(this,e,n);R.call(this,e,n,o),o=x.call(this,e,n),t.attributeChangedCallback(this,n,i,o,e)}),a(Element.prototype,"removeAttribute",function(e){if(1!==this.__CE_state)return H.call(this,e);var n=O.call(this,e);H.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)}),a(Element.prototype,"removeAttributeNS",function(e,n){if(1!==this.__CE_state)return P.call(this,e,n);var o=x.call(this,e,n);P.call(this,e,n);var i=x.call(this,e,n);o!==i&&t.attributeChangedCallback(this,n,o,i,e)}),J?n(HTMLElement.prototype,J):F?n(Element.prototype,F):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),K(t,Element.prototype,{o:I,append:z}),function(t){var e=Element.prototype;e.before=function(e){for(var n=[],i=0;i<arguments.length;++i)n[i-0]=arguments[i];i=n.filter(function(t){return t instanceof Node&&o(t)}),W.apply(this,n);for(var r=0;r<i.length;r++)u(t,i[r]);if(o(this))for(i=0;i<n.length;i++)(r=n[i])instanceof Element&&h(t,r)},e.after=function(e){for(var n=[],i=0;i<arguments.length;++i)n[i-0]=arguments[i];i=n.filter(function(t){return t instanceof Node&&o(t)}),B.apply(this,n);for(var r=0;r<i.length;r++)u(t,i[r]);if(o(this))for(i=0;i<n.length;i++)(r=n[i])instanceof Element&&h(t,r)},e.replaceWith=function(e){for(var n=[],i=0;i<arguments.length;++i)n[i-0]=arguments[i];i=n.filter(function(t){return t instanceof Node&&o(t)});var r=o(this);X.apply(this,n);for(var a=0;a<i.length;a++)u(t,i[a]);if(r)for(u(t,this),i=0;i<n.length;i++)(r=n[i])instanceof Element&&h(t,r)},e.remove=function(){var e=o(this);$.call(this),e&&u(t,this)}}(t)}(),document.__CE_hasRegistry=!0;var Y=new g(V);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:Y})}}).call(self);
!function(){var e=document.documentElement;Element.prototype.matches||(Element.prototype.matches=e.webkitMatchesSelector||e.msMatchesSelector||e.oMatchesSelector);var t=/([\w\-]+)|(::|:)(\w+)(?:\((.+?(?=\)))\))?/g,n=/,\s*/,r=/[A-Z]/g,s=e=>"-"+e.toLowerCase();var o={events:{},pseudos:{delegate:{onInvoke:function(e,t,n){for(var r,s=n.target,o=n.currentTarget;!r&&s&&s!=o;)s.tagName&&s.matches(t.args)&&(r=s),s=s.parentNode;if(!r&&o.tagName&&o.matches(t.args)&&(r=o),!r)return null;t.fn=t.fn.bind(r)}}},extensions:{rxn:{onParse:(e,t,n,r,s)=>(delete e.prototype[s],!1),onConstruct(e,t,n,r){e.rxn(t,r.value,!!n[1])}},attr:{mixin:e=>(class extends e{attributeChangedCallback(e,t,n){var r=this.constructor.getOptions("attributes")[e];r&&r.set&&!r._skip&&(r.set.call(this,n),r._skip=null)}}),types:{boolean:{set:function(e,t){t||""===t?this.setAttribute(e,""):this.removeAttribute(e)},get:function(e){return this.hasAttribute(e)}}},onParse(e,t,n,o,i){if(o.value)throw'Attribute accessor "'+t+'" was declared as a value, but must be declared as get or set';var a=t.replace(r,s);e.getOptions("attributes")[a]=o;var l=this.types[n[0]]||{};let c=o.set,u=l.set||HTMLElement.prototype.setAttribute;o.set=function(e){var t;o._skip||(o._skip=!0,c&&(t=c.call(this,e)),u.call(this,a,void 0===t?e:t),o._skip=null)};let d=o.get,p=l.get||HTMLElement.prototype.getAttribute;o.get=function(){var e,t=p.call(this,a);return d&&(e=d.call(this,t)),void 0===e?t:e},delete e.prototype[i]},onCompiled(e){e.observedAttributes=Object.keys(e.getOptions("attributes")).concat(e.observedAttributes||[])}},event:{onParse:(e,t,n,r,s)=>(delete e.prototype[s],!1),onConstruct(e,t,n,r){o.addEvent(e,t,r.value)}},template:{throttle:{frame:function(e,t,n){n.cancel=cancelAnimationFrame.bind(window,requestAnimationFrame(()=>{e._render(t,n)}))},debounce:function(e,t,n,r){n.cancel=clearTimeout.bind(window,setTimeout(()=>{node_.render(t,n)},r.throttle))}},mixin:e=>(class extends e{set"template::attr"(e){this.render(e)}get templates(){return this.constructor.getOptions("templates")}_render(e,t){this.innerHTML=e.call(this),this._XTagRender=null,t.resolve&&t.resolve(this)}render(e,t={}){var n=e||"default",r=this.templates[n];if(!r)throw new ReferenceError('Template "'+n+'" undefined for '+this.nodeName);var s=this._XTagRender;if(s){if(s.name===n)return s.promise;s.cancel&&s.cancel()}this.getAttribute("template")!=n&&this.setAttribute("template",n),s=this._XTagRender={name:n};var i=o.extensions.template.throttle,a=!!t.throttle&&(i[t.throttle]||i.debounce);return a?s.promise=new Promise(e=>{s.resolve=e,a(this,r,s,t)}):(this._render(r,s),Promise.resolve(this))}}),onParse:(e,t,n,r)=>(e.getOptions("templates")[t||"default"]=r.value,!1),onReady(e,t,n,r){r[0]&&("ready"===r[0]?e.render(n):e.rxn("firstpaint",()=>e.render(n))),t()}}},create(e,t){var n=t||e;return n.options=Object.assign({},n.options),c(n),t&&e&&customElements.define(e,n),n},register(e,t){customElements.define(e,t)},addEvents(e,t){let n={};for(let r in t)n[r]=o.addEvent(e,r,t[r]);return n},addEvent(e,r,s,i){var a,c=s,u=i||{};u.data={},r.replace(t,(t,r,s,i,d)=>{if(r)a=r;else if(":"==s){i=o.pseudos[i];var p=d?d.split(n):[];c=l(i,p,c,u),i.onParse&&i.onParse(e,a,p,c,u)}}),e.addEventListener(a,c,u),u.type=a,u.listener=c;var d=o.events[a];if(d){var p=function(e){new Promise(t=>{d.onFilter?d.onFilter(this,e,u,t):t()}).then(()=>{let t="_"+a+"EventFired";e[t]||(e[t]=!0,o.fireEvent(e.target||this,a))})};u.attached=d.attach.map(t=>o.addEvent(e,t,p,{capture:!0})),d.onAdd&&d.onAdd(e,u)}return u},removeEvents(e,t){for(let n in t)o.removeEvent(e,t[n])},removeEvent(e,t){e.removeEventListener(t.type,t.listener,t.capture);var n=o.events[t.type];n&&n.onRemove&&n.onRemove(e,t),t.attached&&t.attached.forEach(n=>{o.removeEvent(e,t)})},fireEvent(e,t,n={}){let r=Object.assign({bubbles:!0,cancelable:!0},n);e.dispatchEvent(new CustomEvent(t,r))}},i=0;function a(e,t){var n=e.rxns[t],r=n.queue;for(let t in r)r[t].fn.call(e),!n.singleton&&r[t].recurring||delete r[t];n.fired=!0}function l(e,t,n,r){return function(){var s={fn:n,args:t,detail:r},o=e.onInvoke(this,s,...arguments);return null===o||!1===o?o:s.fn.apply(this,o instanceof Array?o:arguments)}}function c(e){var r={},s=function(e){var t={},n=e.prototype;return Object.getOwnPropertyNames(n).forEach(e=>{t[e]=Object.getOwnPropertyDescriptor(n,e)}),t}(e),i=e.getOptions("extensions"),a=e._processedExtensions=new Map;for(let c in s){let u,d,p,f=[],m=[],h=s[c],v=e._pseudos||o.pseudos;if(c.replace(t,function(){f.unshift(arguments)}),f.forEach(t=>(function(t,r,s,c,p){if(u=r||u,p)var f=p.split(n);if("::"==s)m=f||[],d=i[c]||o.extensions[c],a.get(d)||a.set(d,[]);else if(!r){let t=v[c];if(t)for(let n in h){let r=h[n];"function"==typeof r&&t.onInvoke&&(r=h[n]=l(t,f,r),t.onParse&&t.onParse(e,u,f,r))}}}).apply(null,t)),d&&(a.get(d).push([u,m,h]),d.onParse&&(p=d.onParse(e,u,m,h,c))),u){if(!1!==p){let e=r[u]||(r[u]={});for(let t in h)e[t]=h[t]}}else delete e.prototype[c]}for(let t of a.keys())t.onCompiled&&t.onCompiled(e,r);Object.defineProperties(e.prototype,r)}XTagElement=function e(t={}){var n;return(n=class extends(t.native?Object.getPrototypeOf(document.createElement(t.native)).constructor:HTMLElement){constructor(){super(),this.rxns||(this.rxns={ready:{queue:{},singleton:!0},firstpaint:{queue:{},singleton:!0},render:{queue:{}}}),function(e){var t=e.constructor._processedExtensions;for(let[n,r]of t)n.onConstruct&&r.forEach(t=>n.onConstruct(e,...t))}(this),new Promise(e=>(function(e,t){var n=e.constructor._processedExtensions;for(let[r,s]of n)r.onReady&&Promise.all(s.map(t=>new Promise(n=>r.onReady(e,n,...t)))).then(t)})(this,e)).then(()=>{a(this,"ready"),this.readyCallback&&this.readyCallback()})}connectedCallback(){!function(e){var t=e.constructor._processedExtensions;for(let[n,r]of t)n.onConnect&&r.forEach(t=>n.onConnect(e,...t))}(this),this.rxns.firstpaint.frame||(this.rxns.firstpaint.frame=requestAnimationFrame(()=>a(this,"firstpaint")))}rxn(e,t,n){var r=this.rxns[e];if(!r.singleton||!r.fired)return r.queue[i++]={fn:t,recurring:n},i;t.call(this)}cancelRxn(e,t){delete this.rxns[e].queue[t]}}).options={extensions:{},pseudos:{}},n.getOptions=function(e){return this.options[e]||(this.options[e]=Object.assign({},Object.getPrototypeOf(this).options?Object.getPrototypeOf(this).options[e]:{}))},n.extensions=function(...e){var t=this.getOptions("extensions");return e.reduce((e,n)=>{var r,s=e;return t[n.name]||("string"==typeof n?r=o.extensions[n].mixin:(r=n.mixin,t[n.name]=n),r&&c(s=r(e))),s},this)},n.as=function(t){return e({native:t})},n.extensions("attr","event","template")}(),"function"==typeof define&&define.amd?(define(o),define(XTagElement)):"undefined"!=typeof module&&module.exports?module.exports={xtag:o,XTagElement:XTagElement}:(window.xtag=o,window.XTagElement=XTagElement)}();(()=>{const t="https://surv.is-a.dev/Cat-Girl-Display/counter-images/@.gif\nhttps://rule34.xxx/counter/@.gif\nhttps://gelbooru.com/counter/@.gif";var e=1;xtag.create("cat-girl-counter",class extends XTagElement{super_constructor(){console.log("New cat girl counter initiated.")}set"count::attr"(n){const r=[],i=parseInt(n).toString().split("");e=t.split("\n")[e-1];for(let t=0;t<i.length;t++)r.push(`<img src="${e.replace("@",i[t])}" alt="cat girl #${i[1]}"></img>`);this.innerHTML="",this.appendChild(document.createElement("div")).innerHTML=r.join("")}});console.log("Loaded Cat Girl Counter.")})();