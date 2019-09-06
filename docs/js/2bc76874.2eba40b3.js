(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2bc76874"],{"3df3":function(e){e.exports=JSON.parse('{"name":"@quasar/quasar-app-extension-qwindow","version":"1.0.0-alpha.10","description":"Floating, movable, resizable windows for your Quasar App","author":"Jeff Galbraith <jeff@quasar.dev>","license":"MIT","main":"src/index.js","scripts":{"lint":"eslint --ext .js,.vue src","lint-fix":"eslint --ext .js,.vue src --fix","build-demo":"cd ./demo && yarn build && cd .. && cp ./_redirects ./demo/dist/spa && rm -r -f ./docs && cp -r ./demo/dist/spa/. ./docs","test":"echo \\"No test specified\\" && exit 0"},"publishConfig":{"access":"public"},"repository":{"type":"git","url":"git+https://github.com/quasarframework/app-extension-qwindow.git"},"bugs":"https://github.com/quasarframework/app-extension-qwindow/issues","homepage":"https://github.com/quasarframework/app-extension-qwindow","engines":{"node":">= 8.9.0","npm":">= 5.6.0","yarn":">= 1.6.0"},"devDependencies":{"@vue/eslint-config-standard":"^4.0.0","babel-eslint":"^10.0.3","eslint":"^6.3.0","eslint-loader":"^3.0.0","eslint-plugin-vue":"^5.2.3","fs":"^0.0.2","path":"^0.12.7"}}')},"713b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"HHh LpR fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),e.$q.screen.width>500?n("q-toolbar-title",[e._v("\n        QWindow "),n("span",{staticClass:"text-outline",staticStyle:{"font-size":"14px"}},[e._v(e._s(e.version))])]):e._e(),n("div",[e._v("Quasar v"+e._s(e.$q.version))]),n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1)],1)],1),n("q-drawer",{attrs:{bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[e._v("Essential Links")])],1),n("essential-links")],1),n("q-drawer",{attrs:{side:"right",bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[n("q-scroll-area",{staticClass:"fit"},[n("q-list",{attrs:{dense:""}},e._l(e.toc,function(t){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(n){return e.scrollTo(t.id)}}},[t.level>1?n("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),n("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)}),1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},i=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),s=n.n(o),a=n("2f62"),c=n("0831");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u=n("3df3").version,d={name:"MainLayout",components:{"essential-links":function(){return n.e("2d0cc070").then(n.bind(null,"4bd0"))}},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0,version:u}},computed:p({},Object(a["b"])({toc:"common/toc"})),mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout(function(){e.scrollTo(t)},350)}},methods:{scrollTo:function(e){this.activeToc=e;var t=document.getElementById(e);t&&this.scrollPage(t)},scrollPage:function(e){var t=e.offsetTop-50;c["a"].setScrollPosition(window,t,500)}}},f=d,b=n("2877"),w=Object(b["a"])(f,r,i,!1,null,null,null);t["default"]=w.exports}}]);