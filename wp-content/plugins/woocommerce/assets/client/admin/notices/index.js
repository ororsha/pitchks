<<<<<<< HEAD
(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);var n={};e.r(n),e.d(n,{createErrorNotice:()=>f,createInfoNotice:()=>g,createNotice:()=>d,createSuccessNotice:()=>a,createWarningNotice:()=>p,removeNotice:()=>v});var i={};e.r(i),e.d(i,{getNotices:()=>y}),window.wp.notices;const o=window.wp.data,r=window.lodash,c=(u="context",e=>function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;const i=n[u];if(void 0===i)return t;const o=e(t[i],n);return o===t[i]?t:{...t,[i]:o}})((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NOTICE":return[...(0,r.reject)(e,{id:t.notice.id}),t.notice];case"REMOVE_NOTICE":return(0,r.reject)(e,{id:t.id})}return e})),s="global",l="info";var u;function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{speak:i=!0,isDismissible:o=!0,context:c=s,id:u=(0,r.uniqueId)(c),actions:d=[],type:a="default",__unstableHTML:g,icon:f=null,explicitDismiss:p=!1,onDismiss:v=null}=n;return t=String(t),{type:"CREATE_NOTICE",context:c,notice:{id:u,status:e,content:t,spokenMessage:i?t:null,__unstableHTML:g,isDismissible:o,actions:d,type:a,icon:f,explicitDismiss:p,onDismiss:v}}}function a(e,t){return d("success",e,t)}function g(e,t){return d("info",e,t)}function f(e,t){return d("error",e,t)}function p(e,t){return d("warning",e,t)}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return{type:"REMOVE_NOTICE",id:e,context:t}}const w=[];function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return e[t]||w}(0,o.registerStore)("core/notices2",{reducer:c,actions:n,selectors:i}),(window.wc=window.wc||{}).notices=t})();
=======
!function(){"use strict";var t={d:function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e);var n={};t.r(n),t.d(n,{createErrorNotice:function(){return g},createInfoNotice:function(){return f},createNotice:function(){return d},createSuccessNotice:function(){return a},createWarningNotice:function(){return p},removeNotice:function(){return v}});var i={};t.r(i),t.d(i,{getNotices:function(){return y}}),window.wp.notices;var o,r=window.wp.data,c=window.lodash,u=(o="context",t=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;const i=n[o];if(void 0===i)return e;const r=t(e[i],n);return r===e[i]?e:{...e,[i]:r}})((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_NOTICE":return[...(0,c.reject)(t,{id:e.notice.id}),e.notice];case"REMOVE_NOTICE":return(0,c.reject)(t,{id:e.id})}return t}));const s="global",l="info";function d(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{speak:i=!0,isDismissible:o=!0,context:r=s,id:u=(0,c.uniqueId)(r),actions:d=[],type:a="default",__unstableHTML:f,icon:g=null,explicitDismiss:p=!1,onDismiss:v=null}=n;return e=String(e),{type:"CREATE_NOTICE",context:r,notice:{id:u,status:t,content:e,spokenMessage:i?e:null,__unstableHTML:f,isDismissible:o,actions:d,type:a,icon:g,explicitDismiss:p,onDismiss:v}}}function a(t,e){return d("success",t,e)}function f(t,e){return d("info",t,e)}function g(t,e){return d("error",t,e)}function p(t,e){return d("warning",t,e)}function v(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return{type:"REMOVE_NOTICE",id:t,context:e}}const w=[];function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return t[e]||w}(0,r.registerStore)("core/notices2",{reducer:u,actions:n,selectors:i}),(window.wc=window.wc||{}).notices=e}();
>>>>>>> 2301bd9 (Added new theme)
