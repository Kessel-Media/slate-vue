(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1129:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[t("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement}})],1)};n._withStripped=!0;var i=r(12),a=r(65),o=r.n(a);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}for(var s=function(e){var t=e.attributes,r=e.children,n=e.element;return{render:function(){var e=arguments[0];switch(n.type){case"heading":return e("h1",{attrs:l({},t)},[r]);default:return e("p",{attrs:l({},t)},[r])}}}},p=[],f=0;f<100;f++){p.push({type:"heading",children:[{text:o.a.lorem.sentence()}]});for(var b=0;b<7;b++)p.push({children:[{text:o.a.lorem.paragraph()}]})}var d={name:"index",components:{Slate:i.e,Editable:i.a},data:function(){return{initialValue:p,renderElement:s}}},h=r(5),O=Object(h.a)(d,n,[],!1,null,"4096f3be",null);O.options.__file="site/pages/hugeDocument/index.vue";t.default=O.exports}}]);