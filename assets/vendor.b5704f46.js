let e=h;const n={},t={owned:null,cleanups:null,context:null,owner:null};var l=null;let o=null,r=null,s=null,u=0;function i(e,n,o){a(function(e,n,o,r){const s={fn:e,state:1,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:l,context:null,pure:o};null===l||l!==t&&(l.owned?l.owned.push(s):l.owned=[s]);return s}(e,n,!1))}function f(e){let n;return n=e(),n}function c(e,t,l){return e.comparator&&e.comparator(e.value,t)?t:o?(e.pending===n&&o.push(e),e.pending=t,t):(e.value=t,!e.observers||r&&!e.observers.length||d((()=>{for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];null,t.observers&&2!==t.state&&v(t),t.state=1,t.pure?r.push(t):s.push(t)}if(r.length>1e6)throw r=[],new Error}),!1),t)}function a(e){if(!e.fn)return;y(e);const n=l,t=u;l=e,function(e,n,t){let l;try{l=e.fn(n)}catch(o){b(o)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?c(e,l):e.value=l,e.updatedAt=t)}(e,e.value,t),l=n}function p(e){if(1!==e.state)return;if(e.suspense&&f(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<u);)1!==e.state&&2!==e.state||n.push(e);for(let t=n.length-1;t>=0;t--)if(1===(e=n[t]).state)a(e);else if(2===e.state){const n=r;r=null,g(e),r=n}}function d(t,l){if(r)return t();let i=!1;l||(r=[]),s?i=!0:s=[],u++;try{t()}catch(f){b(f)}finally{!function(t){r&&(h(r),r=null);if(t)return;s.length?function(e){if(o)return e();let t;const l=o=[];try{t=e()}finally{o=null}d((()=>{for(let e=0;e<l.length;e+=1){const t=l[e];if(t.pending!==n){const e=t.pending;t.pending=n,c(t,e)}}}),!1)}((()=>{e(s),s=null})):s=null}(i)}}function h(e){for(let n=0;n<e.length;n++)p(e[n])}function g(e){e.state=0;for(let n=0;n<e.sources.length;n+=1){const t=e.sources[n];t.sources&&(1===t.state?p(t):2===t.state&&g(t))}}function v(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=2,t.observers&&v(t))}}function y(e){let n;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),t=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const e=l.pop(),o=n.observerSlots.pop();t<l.length&&(e.sourceSlots[o]=t,l[t]=e,n.observerSlots[t]=o)}}if(e.owned){for(n=0;n<e.owned.length;n++)y(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function b(e){throw e}function w(e,n){return f((()=>e(n)))}function x(e,n,t){let l=t.length,o=n.length,r=l,s=0,u=0,i=n[o-1].nextSibling,f=null;for(;s<o||u<r;)if(n[s]!==t[u]){for(;n[o-1]===t[r-1];)o--,r--;if(o===s){const n=r<l?u?t[u-1].nextSibling:t[r-u]:i;for(;u<r;)e.insertBefore(t[u++],n)}else if(r===u)for(;s<o;)f&&f.has(n[s])||e.removeChild(n[s]),s++;else if(n[s]===t[r-1]&&t[u]===n[o-1]){const l=n[--o].nextSibling;e.insertBefore(t[u++],n[s++].nextSibling),e.insertBefore(t[--r],l),n[o]=t[r]}else{if(!f){f=new Map;let e=u;for(;e<r;)f.set(t[e],e++)}const l=f.get(n[s]);if(null!=l)if(u<l&&l<r){let i,c=s,a=1;for(;++c<o&&c<r&&null!=(i=f.get(n[c]))&&i===l+a;)a++;if(a>l-u){const o=n[s];for(;u<l;)e.insertBefore(t[u++],o)}else e.replaceChild(t[u++],n[s++])}else s++;else e.removeChild(n[s++])}}else s++,u++}function A(e,n,o){let r;return function(e,n){n&&(l=n);const o=l,r=0===e.length?t:{owned:null,cleanups:null,context:null,owner:o};let s;l=r;try{d((()=>s=e((()=>y(r)))),!0)}finally{l=o}}((t=>{r=t,function(e,n,t,l){void 0===t||l||(l=[]);if("function"!=typeof n)return C(e,n,l,t);i((l=>C(e,n(),l,t)),l)}(n,e(),n.firstChild?null:void 0,o)})),()=>{r(),n.textContent=""}}function C(e,n,t,l,o){for(;"function"==typeof t;)t=t();if(n===t)return t;const r=typeof n,s=void 0!==l;if(e=s&&t[0]&&t[0].parentNode||e,"string"===r||"number"===r)if("number"===r&&(n=n.toString()),s){let o=t[0];o&&3===o.nodeType?o.data=n:o=document.createTextNode(n),t=N(e,t,l,o)}else t=""!==t&&"string"==typeof t?e.firstChild.data=n:e.textContent=n;else if(null==n||"boolean"===r)t=N(e,t,l);else{if("function"===r)return i((()=>{let o=n();for(;"function"==typeof o;)o=o();t=C(e,o,t,l)})),()=>t;if(Array.isArray(n)){const r=[];if(m(r,n,o))return i((()=>t=C(e,r,t,l,!0))),()=>t;if(0===r.length){if(t=N(e,t,l),s)return t}else Array.isArray(t)?0===t.length?S(e,r,l):x(e,t,r):null==t||""===t?S(e,r):x(e,s&&t||[e.firstChild],r);t=r}else if(n instanceof Node){if(Array.isArray(t)){if(s)return t=N(e,t,l,n);N(e,t,null,n)}else null!=t&&""!==t&&e.firstChild?e.replaceChild(n,e.firstChild):e.appendChild(n);t=n}}return t}function m(e,n,t){let l=!1;for(let o=0,r=n.length;o<r;o++){let r,s=n[o];if(s instanceof Node)e.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))l=m(e,s)||l;else if("string"==(r=typeof s))e.push(document.createTextNode(s));else if("function"===r)if(t){for(;"function"==typeof s;)s=s();l=m(e,Array.isArray(s)?s:[s])||l}else e.push(s),l=!0;else e.push(document.createTextNode(s.toString()))}return l}function S(e,n,t){for(let l=0,o=n.length;l<o;l++)e.insertBefore(n[l],t)}function N(e,n,t,l){if(void 0===t)return e.textContent="";const o=l||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const s=n[r];if(o!==s){const n=s.parentNode===e;l||r?n&&e.removeChild(s):n?e.replaceChild(o,s):e.insertBefore(o,t)}else l=!0}}else e.insertBefore(o,t);return[o]}function B(e,...n){}function T(e){}function k(){}function E(e){}export{T as a,k as b,w as c,E as e,A as r,B as s};