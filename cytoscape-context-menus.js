!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cytoscapeContextMenus=t():e.cytoscapeContextMenus=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var i=n(1).contextMenus,o=function(e){e&&e("core","contextMenus",i)};"undefined"!=typeof cytoscape&&o(cytoscape),e.exports=o},function(e,t,n){"use strict";function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,u=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw u}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){return!function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||e.style&&e.style.display||getComputedStyle(e).display}(e)}function u(e){for(var t="",n=0;n<e.length;n++){t+=e[n],n!==e.length-1&&(t+=" ")}return t}function s(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}n.r(t),n.d(t,"contextMenus",(function(){return _}));var c={evtType:"cxttap",menuItems:[],menuItemClasses:["cy-context-menus-cxt-menuitem"],contextMenuClasses:["cy-context-menus-cxt-menu"],submenuIndicator:{src:"assets/submenu-indicator-default.svg",width:12,height:12},hideOnZoom:!1,hideOnNonCyClick:!0};function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,r=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}function v(e){var t=C();return function(){var n,i=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e){var t="function"==typeof Map?new Map:void 0;return(x=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return w(e,arguments,I(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),M(i,e)})(e)}function w(e,t,n){return(w=C()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&M(o,n.prototype),o}).apply(null,arguments)}function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){y(n,e);var t=v(n);function n(e,i,o){var r,u,c,a,l;d(this,n),g((r=b(l=t.call(this)),I(n.prototype)),"setAttribute",r).call(r,"id",e.id);var h=l._getMenuItemClassStr(o.cxtMenuItemClasses,e.hasTrailingDivider);if(g((u=b(l),I(n.prototype)),"setAttribute",u).call(u,"class",h),void 0!==f(e.tooltipText)&&g((c=b(l),I(n.prototype)),"setAttribute",c).call(c,"title",e.tooltipText),e.disabled&&s(b(l),"disabled",!0),e.image){var m=document.createElement("img");m.src=e.image.src,m.width=e.image.width,m.height=e.image.height,m.style.position="absolute",m.style.top=e.image.y+"px",m.style.left=e.image.x+"px",g((a=b(l),I(n.prototype)),"appendChild",a).call(a,m)}if(l.innerHTML+=e.content,l.onMenuItemClick=i,l.data={},l.clickFns=[],l.selector=e.selector,l.show=e.show||!0,l.coreAsWell=e.coreAsWell||!1,l.scratchpad=o,void 0===e.onClickFunction&&void 0===e.submenu)throw new Error("A menu item must either have click function or a submenu or both");return l.onClickFunction=e.onClickFunction,e.submenu instanceof Array&&l._createSubmenu(e.submenu),l}return m(n,[{key:"bindOnClickFunction",value:function(e){this.clickFns.push(e),g(I(n.prototype),"addEventListener",this).call(this,"click",e)}},{key:"unbindOnClickFunctions",value:function(){var e,t=a(this.clickFns);try{for(t.s();!(e=t.n()).done;){var i=e.value;g(I(n.prototype),"removeEventListener",this).call(this,"click",i)}}catch(e){t.e(e)}finally{t.f()}this.clickFns=[]}},{key:"enable",value:function(){s(this,"disabled",!1),this.hasSubmenu()&&this.addEventListener("mouseenter",this.mouseEnterHandler)}},{key:"disable",value:function(){s(this,"disabled",!0),this.hasSubmenu()&&this.removeEventListener("mouseenter",this.mouseEnterHandler)}},{key:"hide",value:function(){this.show=!1,this.style.display="none"}},{key:"hasSubmenu",value:function(){return this.submenu instanceof S}},{key:"appendSubmenuItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.hasSubmenu()||this._createSubmenu(),this.submenu.appendMenuItem(e,t)}},{key:"isClickable",value:function(){return void 0!==this.onClickFunction}},{key:"display",value:function(){this.show=!0,this.style.display="block"}},{key:"removeSubmenu",value:function(){this.hasSubmenu()&&(this.submenu.removeAllMenuItems(),this.detachSubmenu())}},{key:"detachSubmenu",value:function(){this.hasSubmenu()&&(this.removeChild(this.submenu),this.removeChild(this.indicator),this.removeEventListener("mouseenter",this.mouseEnterHandler),this.removeEventListener("mouseleave",this.mouseLeaveHandler),this.submenu=void 0,this.indicator=void 0)}},{key:"_onMouseEnter",value:function(e){var t=this.getBoundingClientRect(),n=function(e){e.style.opacity="0",e.style.display="block";var t=e.getBoundingClientRect();return e.style.opacity="1",e.style.display="none",t}(this.submenu),i=t.right+n.width>window.innerWidth,o=t.top+n.height>window.innerHeight;i||o?i&&!o?(this.submenu.style.right=this.clientWidth+"px",this.submenu.style.top="0px",this.submenu.style.left="auto",this.submenu.style.bottom="auto"):i&&o?(this.submenu.style.right=this.clientWidth+"px",this.submenu.style.bottom="0px",this.submenu.style.top="auto",this.submenu.style.left="auto"):(this.submenu.style.left=this.clientWidth+"px",this.submenu.style.bottom="0px",this.submenu.style.right="auto",this.submenu.style.top="auto"):(this.submenu.style.left=this.clientWidth+"px",this.submenu.style.top="0px",this.submenu.style.right="auto",this.submenu.style.bottom="auto"),this.submenu.display()}},{key:"_onMouseLeave",value:function(e){var t,n,i,o,r,u={x:e.clientX,y:e.clientY};t=u,n=this.submenu,i=t.x,o=t.y,r=n.getBoundingClientRect(),i>=r.left&&i<=r.right&&o>=r.top&&o<=r.bottom||this.submenu.hide()}},{key:"_createSubmenu",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.indicator=this.scratchpad.submenuIndicatorGen(),this.submenu=new S(this.onMenuItemClick,this.scratchpad),this.appendChild(this.indicator),this.appendChild(this.submenu);var t,i=a(e);try{for(i.s();!(t=i.n()).done;){var o=t.value,r=new n(o,this.onMenuItemClick,this.scratchpad);this.submenu.appendMenuItem(r)}}catch(e){i.e(e)}finally{i.f()}this.mouseEnterHandler=this._onMouseEnter.bind(this),this.mouseLeaveHandler=this._onMouseLeave.bind(this),this.addEventListener("mouseenter",this.mouseEnterHandler),this.addEventListener("mouseleave",this.mouseLeaveHandler)}},{key:"_getMenuItemClassStr",value:function(e,t){return t?e+" cy-context-menus-divider":e}}],[{key:"define",value:function(){customElements.define("ctx-menu-item",n,{extends:"button"})}}]),n}(x(HTMLButtonElement)),S=function(e){y(n,e);var t=v(n);function n(e,i){var o,r;return d(this,n),g((o=b(r=t.call(this)),I(n.prototype)),"setAttribute",o).call(o,"class",i.cxtMenuClasses),r.style.position="absolute",r.onMenuItemClick=e,r.scratchpad=i,r}return m(n,[{key:"hide",value:function(){this.hideMenuItemSubmenus(),this.style.display="none"}},{key:"display",value:function(){this.style.display="block"}},{key:"hideMenuItems",value:function(){var e,t=a(this.children);try{for(t.s();!(e=t.n()).done;){var n=e.value;n instanceof HTMLElement?n.style.display="none":console.warn("".concat(n," is not a HTMLElement"))}}catch(e){t.e(e)}finally{t.f()}}},{key:"hideMenuItemSubmenus",value:function(){var e,t=a(this.children);try{for(t.s();!(e=t.n()).done;){var n=e.value;n instanceof k&&n.submenu&&n.submenu.hide()}}catch(e){t.e(e)}finally{t.f()}}},{key:"appendMenuItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(void 0!==t){if(t.parentNode!==this)throw new Error("The item with id='".concat(t.id,"' is not a child of the context menu"));this.insertBefore(e,t)}else this.appendChild(e);e.isClickable()&&this._performBindings(e)}},{key:"moveBefore",value:function(e,t){if(e.parentNode!==this)throw new Error("The item with id='".concat(e.id,"' is not a child of context menu"));if(t.parentNode!==this)throw new Error("The item with id='".concat(t.id,"' is not a child of context menu"));this.removeChild(e),this.insertBefore(e,t)}},{key:"removeAllMenuItems",value:function(){for(;this.firstChild;){var e=this.lastChild;e instanceof k?this._removeImmediateMenuItem(e):(console.warn("Found non menu item in the context menu: ",e),this.removeChild(e))}}},{key:"_removeImmediateMenuItem",value:function(e){if(!this._detachImmediateMenuItem(e))throw new Error("menu item(id=".concat(e.id,") is not in the context menu"));e.detachSubmenu(),e.unbindOnClickFunctions()}},{key:"_detachImmediateMenuItem",value:function(e){if(e.parentNode===this){if(this.removeChild(e),this.children.length<=0){var t=this.parentNode;t instanceof k&&t.detachSubmenu()}return!0}return!1}},{key:"_performBindings",value:function(e){var t=this._bindOnClick(e.onClickFunction);e.bindOnClickFunction(t),e.bindOnClickFunction(this.onMenuItemClick)}},{key:"_bindOnClick",value:function(e){var t=this;return function(){var n=t.scratchpad.currentCyEvent;e(n)}}}],[{key:"define",value:function(){customElements.define("menu-item-list",n,{extends:"div"})}}]),n}(x(HTMLDivElement)),E=function(e){y(n,e);var t=v(n);function n(e,i){var o;return d(this,n),(o=t.call(this,e,i)).onMenuItemClick=function(t){t.stopPropagation(),o.hide(),e()},o}return m(n,[{key:"removeMenuItem",value:function(e){var t=e.parentElement;t instanceof S&&this.contains(t)&&t._removeImmediateMenuItem(e)}},{key:"appendMenuItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.ensureDoesntContain(e.id),g(I(n.prototype),"appendMenuItem",this).call(this,e,t)}},{key:"insertMenuItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.before,i=t.parent;if(this.ensureDoesntContain(e.id),void 0!==n){if(!this.contains(n))throw new Error("before(id=".concat(n.id,") is not in the context menu"));var o=n.parentNode;if(!(o instanceof S))throw new Error("Parent of before(id=".concat(n.id,") is not a submenu"));o.appendMenuItem(e,n)}else if(void 0!==i){if(!this.contains(i))throw new Error("parent(id=".concat(i.id,") is not a descendant of the context menu"));i.appendSubmenuItem(e)}else this.appendMenuItem(e)}},{key:"moveBefore",value:function(e,t){var n=e.parentElement;if(!this.contains(n))throw new Error("parent(id=".concat(n.id,") is not in the contex menu"));if(!this.contains(t))throw new Error("before(id=".concat(t.id,") is not in the context menu"));n.removeChild(e),this.insertMenuItem(e,{before:t})}},{key:"moveToSubmenu",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.parentElement;if(!(i instanceof S))throw new Error("current parent(id=".concat(i.id,") is not a submenu"));if(!this.contains(i))throw new Error("parent of the menu item(id=".concat(i.id,") is not in the context menu"));if(null!==t){if(!this.contains(t))throw new Error("parent(id=".concat(t.id,") is not in the context menu"));i._detachImmediateMenuItem(e),t.appendSubmenuItem(e)}else null!==n&&(e.selector=n.selector,e.coreAsWell=n.coreAsWell),i._detachImmediateMenuItem(e),this.appendMenuItem(e)}},{key:"ensureDoesntContain",value:function(e){var t=document.getElementById(e);if(void 0!==t&&this.contains(t))throw new Error("There is already an element with id=".concat(e," in the context menu"))}}],[{key:"define",value:function(){customElements.define("ctx-menu",n,{extends:"div"})}}]),n}(S);function O(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,r=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw r}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _(e){var t=this;t.scratch("cycontextmenus")||t.scratch("cycontextmenus",{});var n,o=function(e){return t.scratch("cycontextmenus")[e]},s=function(e,n){return t.scratch("cycontextmenus")[e]=n},a=function(e){return void 0!==t.scratch("cycontextmenus")[e]},l=o("options"),f=o("cxtMenu"),d=function(e){var n,i=t.container(),r=o("cxtMenuPosition"),u=e.position||e.cyPosition;if(r!=u){f.hideMenuItems(),s("anyVisibleChild",!1),s("cxtMenuPosition",u);var c={top:(n=i.getBoundingClientRect()).top,left:n.left},a=e.renderedPosition||e.cyRenderedPosition,l=getComputedStyle(i)["border-width"],d=parseInt(l.replace("px",""))||0;d>0&&(c.top+=d,c.left+=d);var h=i.clientHeight/2,m=i.clientWidth/2,y=window.innerHeight,v=window.innerWidth;a.y>h&&a.x<=m?(f.style.left=a.x+c.left+"px",f.style.bottom=y-(c.top+a.y)+"px",f.style.right="auto",f.style.top="auto"):a.y>h&&a.x>m?(f.style.right=v-(c.left+a.x)+"px",f.style.bottom=y-(c.top+a.y)+"px",f.style.left="auto",f.style.top="auto"):a.y<=h&&a.x<=m?(f.style.left=a.x+c.left+"px",f.style.top=a.y+c.top+"px",f.style.right="auto",f.style.bottom="auto"):(f.style.right=v-(a.x+c.left)+"px",f.style.top=a.y+c.top+"px",f.style.left="auto",f.style.bottom="auto")}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=y(e);if(void 0!==t){var i=p(t);f.insertMenuItem(n,{parent:i})}else f.insertMenuItem(n)},m=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=0;n<e.length;n++)h(e[n],t)},y=function(e){var n=t.scratch("cycontextmenus");return new k(e,f.onMenuItemClick,n)},v=function(){o("active")&&(f.removeAllMenuItems(),t.off("tapstart",o("eventCyTapStart")),t.off(l.evtType,o("onCxttap")),a("onZoom")&&(t.off("zoom",o("onZoom")),s("onZoom",void 0)),a("hideOnNonCyClick")&&(document.body.removeEventListener("click",o("hideOnNonCyClick")),s("hideOnNonCyClick",void 0)),f.parentNode.removeChild(f),f=void 0,s("cxtMenu",void 0),s("active",!1),s("anyVisibleChild",!1),s("onCxttap",void 0))},p=function(e){var t=document.getElementById(e);if(t instanceof k)return t;throw new Error("The item with id=".concat(e," is not a menu item"))};if("get"!==e){k.define(),S.define(),E.define(),l=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var o in t)n[o]instanceof Array?n[o]=n[o].concat(t[o]):n[o]=t[o];return n}(c,e),s("options",l),o("active")&&v(),s("active",!0),s("submenuIndicatorGen",function(e){var t=document.createElement("img");return t.src=e.src,t.width=e.width,t.height=e.height,t.classList.add("cy-context-menus-submenu-indicator"),t}.bind(void 0,l.submenuIndicator));var b=u(l.contextMenuClasses);s("cxtMenuClasses",b);var g=t.scratch("cycontextmenus");f=new E((function(){return s("cxtMenuPosition",void 0)}),g),s("cxtMenu",f),document.body.appendChild(f),s("cxtMenuItemClasses",u(l.menuItemClasses));var x=l.menuItems;if(m(x),n=function(e){s("currentCyEvent",e),d(e);var n,i=e.target||e.cyTarget,u=O(f.children);try{for(u.s();!(n=u.n()).done;){var c=n.value;c instanceof k&&(i===t?c.coreAsWell:i.is(c.selector))&&c.show&&(f.display(),s("anyVisibleChild",!0),c.display())}}catch(e){u.e(e)}finally{u.f()}!o("anyVisibleChild")&&r(f)&&f.hide()},t.on(l.evtType,n),s("onCxttap",n),function(e){var n=function(){f.hide(),s("cxtMenuPosition",void 0),s("currentCyEvent",void 0)};if(t.on("tapstart",n),s("eventCyTapStart",n),e){var i=function(){f.hide()};t.on("zoom",i),s("onZoom",i)}}(l.hideOnZoom),l.hideOnNonCyClick){var w=function(){f.hide(),s("cxtMenuPosition",void 0)};document.body.addEventListener("click",w),s("hideOnNonCyClick",w)}!function(){var e,t=i(document.getElementsByClassName("cy-context-menus-cxt-menu"));try{for(t.s();!(e=t.n()).done;){e.value.addEventListener("contextmenu",(function(e){return e.preventDefault()}))}}catch(e){t.e(e)}finally{t.f()}}()}return function(e){return{isActive:function(){return o("active")},appendMenuItem:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return h(t,n),e},appendMenuItems:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return m(t,n),e},removeMenuItem:function(t){var n=p(t);return f.removeMenuItem(n),e},setTrailingDivider:function(t,n){var i=p(t);return n?i.classList.add("cy-context-menus-divider"):i.classList.remove("cy-context-menus-divider"),e},insertBeforeMenuItem:function(t,n){var i=y(t),o=p(n);return f.insertMenuItem(i,{before:o}),e},moveToSubmenu:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=p(t);if(null===n)f.moveToSubmenu(i);else if("string"==typeof n){var o=p(n.toString());f.moveToSubmenu(i,o)}else void 0!==n.coreAsWell||void 0!==n.selector?f.moveToSubmenu(i,null,n):console.warn("options neither has coreAsWell nor selector property but it is an object. Are you sure that this is what you want to do?");return e},moveBeforeOtherMenuItem:function(t,n){var i=p(t),o=p(n);return f.moveBefore(i,o),e},disableMenuItem:function(t){return p(t).disable(),e},enableMenuItem:function(t){return p(t).enable(),e},hideMenuItem:function(t){return p(t).hide(),e},showMenuItem:function(t){return p(t).display(),e},destroy:function(){return v(),e}}}(this)}}])}));