<<<<<<< HEAD
(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.wp.element,o=window.wp.i18n,r=window.wc.components,c=window.wc.tracks,n=e=>{let{iframeSelector:o,isActive:r}=e;return(0,t.useEffect)((()=>{if(!r)return;const e=(e=>{let{iframeSelector:t,childSelector:o,className:r}=e;const c=document.querySelector(t),n=(null==c?void 0:c.contentDocument)||(null==c?void 0:c.contentWindow)&&(null==c?void 0:c.contentWindow.document);if(n){const e=()=>null==c?void 0:c.classList.add(r),t=()=>null==c?void 0:c.classList.remove(r),i=n.querySelector(o);return null==i||i.addEventListener("focus",e),null==i||i.addEventListener("blur",t),()=>{null==i||i.removeEventListener("focus",e),null==i||i.removeEventListener("blur",t)}}return()=>({})})({iframeSelector:`${o}`,childSelector:"#tinymce",className:"focus-within"});return()=>{e()}}),[r,o]),{style:r?`\n\t\t\t\t${o}.focus-within {\n\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t}\n\t\t\t\t`:null}},i=e=>{let{editorWrapSelector:o}=e;const r=(0,t.useRef)(document.querySelector(o));r||console.warn(`Editor Wrap ${o} not found`);const[c,n]=(0,t.useState)(r.current&&r.current.classList.contains("html-active")?"html":"tmce");return(0,t.useEffect)((()=>{const e=e=>{e.target&&n(e.target.classList.contains("switch-html")?"html":"tmce")},t=document.querySelector(`${o} .switch-tmce`);null==t||t.addEventListener("click",e);const r=document.querySelector(`${o} .switch-html`);return null==r||r.addEventListener("click",e),()=>{null==t||t.removeEventListener("click",e),null==r||r.removeEventListener("click",e)}}),[o]),{activeEditor:c,isTmce:"tmce"===c,isHtml:"html"===c}},d=e=>document.querySelector(e).value,s=e=>{var t;const o=document.querySelector(e),r=null==o||null===(t=o.contentWindow)||void 0===t?void 0:t.document.querySelector("#tinymce");return(null==r?void 0:r.innerHTML)||""},a=e=>{var t;return(null===(t=document.querySelector(e))||void 0===t?void 0:t.value)||""},l=e=>e?s("#content_ifr"):a("#wp-content-editor-container > .wp-editor-area"),u=e=>e?s("#excerpt_ifr"):a("#wp-excerpt-editor-container > .wp-editor-area"),p=document.createElement("div");p.setAttribute("id","product-tour-root"),(0,t.render)((0,t.createElement)((()=>{const[e,s]=(0,t.useState)(!1),{setIsLoaded:a,hasUpdatedInfo:p}=(()=>{const{isTmce:e}=i({editorWrapSelector:"#wp-content-wrap"}),{isTmce:o}=i({editorWrapSelector:"#wp-excerpt-wrap"}),[r,c]=(0,t.useState)({}),[n,s]=(0,t.useState)(!1),a=(0,t.useCallback)((()=>{return{"product-name":d("#title"),"product-description":l(e),"product-data":d("#_regular_price"),"product-short-description":u(o),"product-image":(null===(t=document.querySelector("#set-post-thumbnail img"))||void 0===t?void 0:t.src)||"","product-tags":Array.from(document.querySelectorAll("#product_tag li")).map((e=>e.lastChild.textContent)).join(","),"product-categories":Array.from(document.querySelectorAll("#product_cat-all #product_catchecklist input")).map((e=>e.checked)).join(",")};var t}),[e,o]),p=(0,t.useCallback)((e=>{const t=a();return r[e]!==t[e]&&""!==t[e]}),[a,r]);return(0,t.useEffect)((()=>{n&&c(a())}),[c,n,a]),{setIsLoaded:s,hasUpdatedInfo:p}})(),{isTmce:m}=i({editorWrapSelector:"#wp-content-wrap"}),{isTmce:w}=i({editorWrapSelector:"#wp-excerpt-wrap"}),{style:h}=n({isActive:e&&m,iframeSelector:"#content_ifr"}),{style:v}=n({isActive:e&&w,iframeSelector:"#excerpt_ifr"}),f=(e=>{let{isExcerptEditorTmceActive:t,isContentEditorTmceActive:r,closeHandler:c,onNextStepHandler:n}=e;return{placement:"bottom-start",options:{effects:{spotlight:{interactivity:{enabled:!0,rootElementSelector:"#wpwrap"}},arrowIndicator:!0,autoScroll:{behavior:"auto",block:"center"},liveResize:{mutation:!0,resize:!0,rootElementSelector:"#wpwrap"}},popperModifiers:[{name:"arrow",options:{padding:e=>{let{popper:t}=e;return{right:t.width-34}}}}],callbacks:{onNextStep:n}},steps:[{referenceElements:{desktop:"#title"},focusElement:{desktop:"#title"},meta:{name:"product-name",heading:(0,o.__)("Product name","woocommerce"),descriptions:{desktop:(0,o.__)("Start typing your new product name here. This will be what your customers will see in your store.","woocommerce")}}},{referenceElements:{desktop:"#postdivrich"},focusElement:{iframe:r?"#content_ifr":void 0,desktop:r?"#tinymce":"#wp-content-editor-container > .wp-editor-area"},meta:{name:"product-description",heading:(0,o.__)("Add your product description","woocommerce"),descriptions:{desktop:(0,o.__)("Add your full product description here. Describe your product in detail.","woocommerce")}}},{referenceElements:{desktop:"#woocommerce-product-data"},focusElement:{desktop:"#_regular_price"},meta:{name:"product-data",heading:(0,o.__)("Add your product data","woocommerce"),descriptions:{desktop:(0,o.__)("Use the tabs to switch between sections and insert product details. Start by adding your product price.","woocommerce")}}},{referenceElements:{desktop:"#postexcerpt"},focusElement:{iframe:t?"#excerpt_ifr":void 0,desktop:t?"#tinymce":"#wp-excerpt-editor-container > .wp-editor-area"},meta:{name:"product-short-description",heading:(0,o.__)("Add your short product description","woocommerce"),descriptions:{desktop:(0,o.__)("Type a quick summary for your product here. This will appear on the product page right under the product name.","woocommerce")}}},{referenceElements:{desktop:"#postimagediv"},focusElement:{desktop:"#set-post-thumbnail"},meta:{name:"product-image",heading:(0,o.__)("Add your product image","woocommerce"),descriptions:{desktop:(0,o.__)("Upload an image to your product here. Ideally a JPEG or PNG about 600 px wide or bigger. This image will be shown in your store’s catalog.","woocommerce")}}},{referenceElements:{desktop:"#tagsdiv-product_tag"},focusElement:{desktop:"#new-tag-product_tag"},meta:{name:"product-tags",heading:(0,o.__)("Add your product tags","woocommerce"),descriptions:{desktop:(0,o.__)("Add your product tags here. Tags are a method of labeling your products to make them easier for customers to find. For example, if you sell clothing, and you have a lot of cat prints, you could make a tag for “cat.”","woocommerce")}}},{referenceElements:{desktop:"#product_catdiv"},meta:{name:"product-categories",heading:(0,o.__)("Add your product categories","woocommerce"),descriptions:{desktop:(0,o.__)("Add your product categories here. Assign categories to your products to make them easier to browse through and find in your store.","woocommerce")}}},{referenceElements:{desktop:"#submitdiv"},focusElement:{desktop:"#submitdiv"},meta:{name:"publish",heading:(0,o.__)("Publish your product 🎉","woocommerce"),descriptions:{desktop:(0,o.__)("Good work! Now you can publish your product to your store by hitting the “Publish” button or keep editing it.","woocommerce")},primaryButton:{text:(0,o.__)("Keep editing","woocommerce")}}}],closeHandler:c}})({isContentEditorTmceActive:m,isExcerptEditorTmceActive:w,closeHandler:(e,t)=>{s(!1),e.length-1===t?(0,c.recordEvent)("walkthrough_product_completed"):(0,c.recordEvent)("walkthrough_product_dismissed",{step_name:e[t].meta.name})},onNextStepHandler:e=>{const t=f.steps[e].meta.name;(0,c.recordEvent)("walkthrough_product_step_completed",{step_name:t,added_info:p(t)?"yes":"no"})}});return(0,t.useEffect)((()=>{var e,t;if(e=e=>{e.preventDefault(),s(!0),(0,c.recordEvent)("walkthrough_product_enable_button_click")},null===(t=window.document.querySelector(".wp-heading-inline + .page-title-action"))||void 0===t||t.addEventListener("click",e),"true"===new URLSearchParams(window.location.search).get("tutorial")){var o;const e=((e,t,o)=>{const r=document.querySelector(e);let n=null==r?void 0:r.getBoundingClientRect().top;const i=setInterval((()=>{const e=null==r?void 0:r.getBoundingClientRect().top;n===e&&(s(!0),(0,c.recordEvent)("walkthrough_product_view",{spotlight:"yes",product_template:"physical"}),a(!0),clearInterval(i)),n=e}),500);return i})((null===(o=f.steps[0].referenceElements)||void 0===o?void 0:o.desktop)||"");return()=>clearInterval(e)}}),[]),(e=>{const o=(0,t.useRef)((()=>{}));(0,t.useEffect)((()=>(e?o.current=(e=>{const t=window.document.querySelector("#publish");return t&&t.addEventListener("click",e),function(){null==t||t.removeEventListener("click",e)}})((()=>{(0,c.recordEvent)("walkthrough_product_completed")})):(o.current(),o.current=()=>{}),function(){o.current()})),[e])})(e),e?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,h,v,".wp-editor-area:focus {\n\t\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t\t}"),(0,t.createElement)(r.TourKit,{config:f})):null}),null),document.body.appendChild(p)),(window.wc=window.wc||{}).productTour=e})();
=======
!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=window.wp.element,o=window.wp.i18n,r=window.wc.components,c=window.wc.tracks;const n=e=>{let{iframeSelector:o,isActive:r}=e;return(0,t.useEffect)((()=>{if(!r)return;const e=(e=>{let{iframeSelector:t,childSelector:o,className:r}=e;const c=document.querySelector(t),n=(null==c?void 0:c.contentDocument)||(null==c?void 0:c.contentWindow)&&(null==c?void 0:c.contentWindow.document);if(n){const e=()=>null==c?void 0:c.classList.add(r),t=()=>null==c?void 0:c.classList.remove(r),i=n.querySelector(o);return null==i||i.addEventListener("focus",e),null==i||i.addEventListener("blur",t),()=>{null==i||i.removeEventListener("focus",e),null==i||i.removeEventListener("blur",t)}}return()=>({})})({iframeSelector:`${o}`,childSelector:"#tinymce",className:"focus-within"});return()=>{e()}}),[r,o]),{style:r?`\n\t\t\t\t${o}.focus-within {\n\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t}\n\t\t\t\t`:null}},i=e=>{let{editorWrapSelector:o}=e;const r=(0,t.useRef)(document.querySelector(o));r||console.warn(`Editor Wrap ${o} not found`);const[c,n]=(0,t.useState)(r.current&&r.current.classList.contains("html-active")?"html":"tmce");return(0,t.useEffect)((()=>{const e=e=>{e.target&&n(e.target.classList.contains("switch-html")?"html":"tmce")},t=document.querySelector(`${o} .switch-tmce`);null==t||t.addEventListener("click",e);const r=document.querySelector(`${o} .switch-html`);return null==r||r.addEventListener("click",e),()=>{null==t||t.removeEventListener("click",e),null==r||r.removeEventListener("click",e)}}),[o]),{activeEditor:c,isTmce:"tmce"===c,isHtml:"html"===c}},d=e=>document.querySelector(e).value,s=e=>{var t;const o=document.querySelector(e),r=null==o||null===(t=o.contentWindow)||void 0===t?void 0:t.document.querySelector("#tinymce");return(null==r?void 0:r.innerHTML)||""},a=e=>{var t;return(null===(t=document.querySelector(e))||void 0===t?void 0:t.value)||""},l=e=>e?s("#content_ifr"):a("#wp-content-editor-container > .wp-editor-area"),u=e=>e?s("#excerpt_ifr"):a("#wp-excerpt-editor-container > .wp-editor-area"),p=document.createElement("div");p.setAttribute("id","product-tour-root"),(0,t.render)((0,t.createElement)((()=>{const[e,s]=(0,t.useState)(!1),{setIsLoaded:a,hasUpdatedInfo:p}=(()=>{const{isTmce:e}=i({editorWrapSelector:"#wp-content-wrap"}),{isTmce:o}=i({editorWrapSelector:"#wp-excerpt-wrap"}),[r,c]=(0,t.useState)({}),[n,s]=(0,t.useState)(!1),a=(0,t.useCallback)((()=>{return{"product-name":d("#title"),"product-description":l(e),"product-data":d("#_regular_price"),"product-short-description":u(o),"product-image":(null===(t=document.querySelector("#set-post-thumbnail img"))||void 0===t?void 0:t.src)||"","product-tags":Array.from(document.querySelectorAll("#product_tag li")).map((e=>e.lastChild.textContent)).join(","),"product-categories":Array.from(document.querySelectorAll("#product_cat-all #product_catchecklist input")).map((e=>e.checked)).join(",")};var t}),[e,o]),p=(0,t.useCallback)((e=>{const t=a();return r[e]!==t[e]&&""!==t[e]}),[a,r]);return(0,t.useEffect)((()=>{n&&c(a())}),[c,n,a]),{setIsLoaded:s,hasUpdatedInfo:p}})(),{isTmce:m}=i({editorWrapSelector:"#wp-content-wrap"}),{isTmce:w}=i({editorWrapSelector:"#wp-excerpt-wrap"}),{style:h}=n({isActive:e&&m,iframeSelector:"#content_ifr"}),{style:v}=n({isActive:e&&w,iframeSelector:"#excerpt_ifr"}),f=(e=>{let{isExcerptEditorTmceActive:t,isContentEditorTmceActive:r,closeHandler:c,onNextStepHandler:n}=e;return{placement:"bottom-start",options:{effects:{spotlight:{interactivity:{enabled:!0,rootElementSelector:"#wpwrap"}},arrowIndicator:!0,autoScroll:{behavior:"auto",block:"center"},liveResize:{mutation:!0,resize:!0,rootElementSelector:"#wpwrap"}},popperModifiers:[{name:"arrow",options:{padding:e=>{let{popper:t}=e;return{right:t.width-34}}}}],callbacks:{onNextStep:n}},steps:[{referenceElements:{desktop:"#title"},focusElement:{desktop:"#title"},meta:{name:"product-name",heading:(0,o.__)("Product name","woocommerce"),descriptions:{desktop:(0,o.__)("Start typing your new product name here. This will be what your customers will see in your store.","woocommerce")}}},{referenceElements:{desktop:"#postdivrich"},focusElement:{iframe:r?"#content_ifr":void 0,desktop:r?"#tinymce":"#wp-content-editor-container > .wp-editor-area"},meta:{name:"product-description",heading:(0,o.__)("Add your product description","woocommerce"),descriptions:{desktop:(0,o.__)("Add your full product description here. Describe your product in detail.","woocommerce")}}},{referenceElements:{desktop:"#woocommerce-product-data"},focusElement:{desktop:"#_regular_price"},meta:{name:"product-data",heading:(0,o.__)("Add your product data","woocommerce"),descriptions:{desktop:(0,o.__)("Use the tabs to switch between sections and insert product details. Start by adding your product price.","woocommerce")}}},{referenceElements:{desktop:"#postexcerpt"},focusElement:{iframe:t?"#excerpt_ifr":void 0,desktop:t?"#tinymce":"#wp-excerpt-editor-container > .wp-editor-area"},meta:{name:"product-short-description",heading:(0,o.__)("Add your short product description","woocommerce"),descriptions:{desktop:(0,o.__)("Type a quick summary for your product here. This will appear on the product page right under the product name.","woocommerce")}}},{referenceElements:{desktop:"#postimagediv"},focusElement:{desktop:"#set-post-thumbnail"},meta:{name:"product-image",heading:(0,o.__)("Add your product image","woocommerce"),descriptions:{desktop:(0,o.__)("Upload an image to your product here. Ideally a JPEG or PNG about 600 px wide or bigger. This image will be shown in your store’s catalog.","woocommerce")}}},{referenceElements:{desktop:"#tagsdiv-product_tag"},focusElement:{desktop:"#new-tag-product_tag"},meta:{name:"product-tags",heading:(0,o.__)("Add your product tags","woocommerce"),descriptions:{desktop:(0,o.__)("Add your product tags here. Tags are a method of labeling your products to make them easier for customers to find. For example, if you sell clothing, and you have a lot of cat prints, you could make a tag for “cat.”","woocommerce")}}},{referenceElements:{desktop:"#product_catdiv"},meta:{name:"product-categories",heading:(0,o.__)("Add your product categories","woocommerce"),descriptions:{desktop:(0,o.__)("Add your product categories here. Assign categories to your products to make them easier to browse through and find in your store.","woocommerce")}}},{referenceElements:{desktop:"#submitdiv"},focusElement:{desktop:"#submitdiv"},meta:{name:"publish",heading:(0,o.__)("Publish your product 🎉","woocommerce"),descriptions:{desktop:(0,o.__)("Good work! Now you can publish your product to your store by hitting the “Publish” button or keep editing it.","woocommerce")},primaryButton:{text:(0,o.__)("Keep editing","woocommerce")}}}],closeHandler:c}})({isContentEditorTmceActive:m,isExcerptEditorTmceActive:w,closeHandler:(e,t)=>{s(!1),e.length-1===t?(0,c.recordEvent)("walkthrough_product_completed"):(0,c.recordEvent)("walkthrough_product_dismissed",{step_name:e[t].meta.name})},onNextStepHandler:e=>{const t=f.steps[e].meta.name;(0,c.recordEvent)("walkthrough_product_step_completed",{step_name:t,added_info:p(t)?"yes":"no"})}});return(0,t.useEffect)((()=>{var e,t;if(e=e=>{e.preventDefault(),s(!0),(0,c.recordEvent)("walkthrough_product_enable_button_click")},null===(t=window.document.querySelector(".wp-heading-inline + .page-title-action"))||void 0===t||t.addEventListener("click",e),"true"===new URLSearchParams(window.location.search).get("tutorial")){var o;const e=((e,t,o)=>{const r=document.querySelector(e);let n=null==r?void 0:r.getBoundingClientRect().top;const i=setInterval((()=>{const e=null==r?void 0:r.getBoundingClientRect().top;n===e&&(s(!0),(0,c.recordEvent)("walkthrough_product_view",{spotlight:"yes",product_template:"physical"}),a(!0),clearInterval(i)),n=e}),500);return i})((null===(o=f.steps[0].referenceElements)||void 0===o?void 0:o.desktop)||"");return()=>clearInterval(e)}}),[]),(e=>{const o=(0,t.useRef)((()=>{}));(0,t.useEffect)((()=>(e?o.current=(e=>{const t=window.document.querySelector("#publish");return t&&t.addEventListener("click",e),function(){null==t||t.removeEventListener("click",e)}})((()=>{(0,c.recordEvent)("walkthrough_product_completed")})):(o.current(),o.current=()=>{}),function(){o.current()})),[e])})(e),e?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("style",null,h,v,".wp-editor-area:focus {\n\t\t\t\t\t\tborder: 1.5px solid #007CBA;\n\t\t\t\t\t}"),(0,t.createElement)(r.TourKit,{config:f})):null}),null),document.body.appendChild(p)),(window.wc=window.wc||{}).productTour=e}();
>>>>>>> 2301bd9 (Added new theme)
