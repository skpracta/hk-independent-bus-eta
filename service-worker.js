(()=>{"use strict";var e={985:()=>{try{self["workbox:cacheable-response:6.6.0"]&&_()}catch(e){}},906:()=>{try{self["workbox:core:6.6.0"]&&_()}catch(e){}},83:()=>{try{self["workbox:expiration:6.6.0"]&&_()}catch(e){}},143:()=>{try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},337:()=>{try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},139:()=>{try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}(()=>{s(906);const e=function(e){let t=e;for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const n=new Set;const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},r=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||r(a.precache),o=e=>e||r(a.runtime);function c(e,t){const s=new URL(e);for(const n of t)s.searchParams.delete(n);return s.href}let h;function l(e){e.then((()=>{}))}class u{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const d=e=>new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),"");function p(e,t){const s=t();return e.waitUntil(s),s}async function f(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,o=function(){if(void 0===h){const t=new Response("");if("body"in t)try{new Response(t.body),h=!0}catch(e){h=!1}h=!1}return h}()?a.body:await a.blob();return new Response(o,i)}const g=(e,t)=>t.some((t=>e instanceof t));let w,m;const y=new WeakMap,_=new WeakMap,v=new WeakMap,b=new WeakMap,R=new WeakMap;let x={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return _.get(e);if("objectStoreNames"===t)return e.objectStoreNames||v.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return k(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function C(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(m||(m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return e.apply(L(this),s),k(y.get(this))}:function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return k(e.apply(L(this),s))}:function(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];const r=e.call(L(this),t,...n);return v.set(r,t.sort?t.sort():[t]),k(r)}}function E(e){return"function"===typeof e?C(e):(e instanceof IDBTransaction&&function(e){if(_.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));_.set(e,t)}(e),g(e,w||(w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,x):e)}function k(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(k(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&y.set(t,e)})).catch((()=>{})),R.set(t,e),t}(e);if(b.has(e))return b.get(e);const t=E(e);return t!==e&&(b.set(e,t),R.set(t,e)),t}const L=e=>R.get(e);const q=["get","getKey","getAll","getAllKeys","count"],U=["put","add","delete","clear"],T=new Map;function N(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=U.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!q.includes(s))return;const r=async function(e){const t=this.transaction(e,a?"readwrite":"readonly");let r=t.store;for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return n&&(r=r.index(o.shift())),(await Promise.all([r[s](...o),a&&t.done]))[0]};return T.set(t,r),r}x=(e=>({...e,get:(t,s,n)=>N(t,s)||e.get(t,s,n),has:(t,s)=>!!N(t,s)||e.has(t,s)}))(x);s(83);const D="cache-entries",M=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class A{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(D,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e){let{blocked:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),k(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=M(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(D,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(D,this._getId(e));return null===s||void 0===s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(D).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const o of a)await s.delete(D,o.id),i.push(o.url);return i}_getId(e){return this._cacheName+"|"+M(e)}async getDb(){return this._db||(this._db=await function(e,t){let{blocked:s,upgrade:n,blocking:a,terminated:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=indexedDB.open(e,t),o=k(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(k(i.result),e.oldVersion,e.newVersion,k(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),o.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class P{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new A(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s.delete(n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,l(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class I{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.cachedResponseWillBeUsed=async e=>{let{event:t,request:s,cacheName:n,cachedResponse:a}=e;if(!a)return null;const r=this._isResponseDateFresh(a),i=this._getCacheExpiration(n);l(i.expireEntries());const o=i.updateTimestamp(s.url);if(t)try{t.waitUntil(o)}catch(c){0}return r?a:null},this.cacheDidUpdate=async e=>{let{cacheName:t,request:s}=e;const n=this._getCacheExpiration(t);await n.updateTimestamp(s.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){n.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===o())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new P(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(143);function S(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}class K{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async e=>{let{request:t,state:s}=e;s&&(s.originalRequest=t)},this.cachedResponseWillBeUsed=async e=>{let{event:t,state:s,cachedResponse:n}=e;if("install"===t.type&&s&&s.originalRequest&&s.originalRequest instanceof Request){const e=s.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class O{constructor(e){let{precacheController:t}=e;this.cacheKeyWillBeUsed=async e=>{let{request:t,params:s}=e;const n=(null===s||void 0===s?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=t}}s(139);function W(e){return"string"===typeof e?new Request(e):e}class j{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let n=W(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(i){if(i instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(o){throw a&&await this.runCallbacks("fetchDidFail",{error:o,event:s,originalRequest:a.clone(),request:r.clone()}),o}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=W(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await o({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const a=W(e);var r;await(r=0,new Promise((e=>setTimeout(e,r))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:d(i.url)});const o=await this._ensureResponseSafeToCache(s);if(!o)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),p=this.hasCallback("cacheDidUpdate"),f=p?await async function(e,t,s,n){const a=c(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const o of i)if(a===c(o.url,s))return e.match(o,n)}(u,i.clone(),["__WB_REVISION__"],l):null;try{await u.put(i,p?o.clone():o)}catch(g){if(g instanceof Error)throw"QuotaExceededError"===g.name&&await async function(){for(const e of n)await e()}(),g}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:h,oldResponse:f,newResponse:o.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s="".concat(e.url," | ").concat(t);if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=W(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class B{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"===typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new j(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,s,n){let a;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,e),!a||"error"===a.type)throw new t("no-response",{url:s.url})}catch(r){if(r instanceof Error)for(const t of e.iterateCallbacks("handlerDidError"))if(a=await t({error:r,event:n,request:s}),a)break;if(!a)throw r}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class H extends B{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(H.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=a.integrity,r=e.integrity,i=!r||r===t;if(n=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||t:void 0})),t&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,n.clone());0}}return n}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==H.copyRedirectedCacheableResponsesPlugin&&(n===H.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(H.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}H.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate(e){let{response:t}=e;return!t||t.status>=400?null:t}},H.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate(e){let{response:t}=e;return t.redirected?await f(t):t}};class F{constructor(){let{cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new H({cacheName:i(e),plugins:[...t,new O({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const n of e){"string"===typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:a}=S(n),r="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),s.length>0){const e="Workbox is precaching URLs without revision "+"info: ".concat(s.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}install(e){return p(e,(async()=>{const t=new K;this.strategy.plugins.push(t);for(const[a,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a),n=new Request(a,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return p(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let V;const z=()=>(V||(V=new F),V);s(337);const G=e=>e&&"object"===typeof e?e:{handle:e};class Q{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.handler=G(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=G(e)}}class $ extends Q{constructor(e,t,s){super((t=>{let{url:s}=t;const n=e.exec(s.href);if(n&&(s.origin===location.origin||0===n.index))return n.slice(1)}),t,s)}}class J{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest(e){let{request:t,event:s}=e;const n=new URL(t.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const a=n.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:s,request:t,sameOrigin:a,url:n});let o=i&&i.handler;const c=t.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return void 0;let h;try{h=o.handle({url:n,request:t,event:s,params:r})}catch(u){h=Promise.reject(u)}const l=i&&i.catchHandler;return h instanceof Promise&&(this._catchHandler||l)&&(h=h.catch((async e=>{if(l){0;try{return await l.handle({url:n,request:t,event:s,params:r})}catch(a){a instanceof Error&&(e=a)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:t,event:s});throw e}))),h}findMatchingRoute(e){let{url:t,sameOrigin:s,request:n,event:a}=e;const r=this._routes.get(n.method)||[];for(const i of r){let e;const r=i.match({url:t,sameOrigin:s,request:n,event:a});if(r)return e=r,(Array.isArray(e)&&0===e.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"===typeof r)&&(e=void 0),{route:i,params:e}}return{}}setDefaultHandler(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET";this._defaultHandlerMap.set(t,G(e))}setCatchHandler(e){this._catchHandler=G(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let X;const Y=()=>(X||(X=new J,X.addFetchListener(),X.addCacheListener()),X);function Z(e,s,n){let a;if("string"===typeof e){const t=new URL(e,location.href);0;a=new Q((e=>{let{url:s}=e;return s.href===t.href}),s,n)}else if(e instanceof RegExp)a=new $(e,s,n);else if("function"===typeof e)a=new Q(e,s,n);else{if(!(e instanceof Q))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return Y().registerRoute(a),a}class ee extends Q{constructor(e,t){super((s=>{let{request:n}=s;const a=e.getURLsToCacheKeys();for(const r of function(e){let{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}()}(n.url,t)){const t=a.get(r);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}class te extends B{async _handle(e,s){let n,a=await s.cacheMatch(e);if(a)0;else{0;try{a=await s.fetchAndCachePut(e)}catch(r){r instanceof Error&&(n=r)}0}if(!a)throw new t("no-response",{url:e.url,error:n});return a}}const se={cacheWillUpdate:async e=>{let{response:t}=e;return 200===t.status||0===t.status?t:null}};s(985);class ne{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class ae{constructor(e){this.cacheWillUpdate=async e=>{let{response:t}=e;return this._cacheableResponse.isResponseCacheable(t)?t:null},this._cacheableResponse=new ne(e)}}(()=>{try{return Boolean(navigator&&navigator.userAgent&&navigator.userAgent.includes("Safari/")&&!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Chromium/")))}catch(e){return!1}})();const re=(e,t,s)=>{const n=255*(e+5)*(e+5),a=(e,t)=>t.key-e.key;return t.map((t=>{const s=(a=t.location.lng,r=e,Math.floor((a+180)/360*Math.pow(2,r)));var a,r;const i=function(e,t){return Math.floor((1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,t))}(t.location.lat,e);return{key:s*n+i,x:s,y:i}})).sort(a).reduce(((e,t)=>(((e,t,s)=>{let n=0,a=e.length-1;for(;n<=a;){let r=a+n>>1,i=s(t,e[r]);if(i>0)n=r+1;else{if(!(i<0))return r;a=r-1}}return-n-1})(e,t,a)<0&&e.push(t),e)),[]).flatMap((t=>["https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png".replace(/\{s\}/g,"a").replace(/\{x\}/g,String(t.x)).replace(/\{y\}/g,String(t.y)).replace(/\{z\}/g,String(e)).replace(/\{r\}/g,s?"@2x":""),"https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png".replace(/\{s\}/g,"a").replace(/\{x\}/g,String(t.x)).replace(/\{y\}/g,String(t.y)).replace(/\{z\}/g,String(e)).replace(/\{r\}/g,s?"@2x":"")]))};var ie;self.addEventListener("activate",(()=>self.clients.claim())),function(e){z().precache(e)}([{'revision':'1f925561f69b5e774534e8fd84c31967','url':'/index.html'},{'revision':null,'url':'/static/css/962.7a68a37b.chunk.css'},{'revision':null,'url':'/static/css/main.595b968a.css'},{'revision':null,'url':'/static/js/151.b58c2c2b.chunk.js'},{'revision':null,'url':'/static/js/21.bb3e3498.chunk.js'},{'revision':null,'url':'/static/js/291.e6e226e1.chunk.js'},{'revision':null,'url':'/static/js/299.344fc8ab.chunk.js'},{'revision':null,'url':'/static/js/312.0db37c79.chunk.js'},{'revision':null,'url':'/static/js/317.38f7d0df.chunk.js'},{'revision':null,'url':'/static/js/370.2acc415a.chunk.js'},{'revision':null,'url':'/static/js/393.d1019959.chunk.js'},{'revision':null,'url':'/static/js/418.66e6d967.chunk.js'},{'revision':null,'url':'/static/js/422.80337376.chunk.js'},{'revision':null,'url':'/static/js/481.aa4e3619.chunk.js'},{'revision':null,'url':'/static/js/506.116b84e9.chunk.js'},{'revision':null,'url':'/static/js/516.e4f7d509.chunk.js'},{'revision':null,'url':'/static/js/635.92eebd12.chunk.js'},{'revision':null,'url':'/static/js/657.96ad34a9.chunk.js'},{'revision':null,'url':'/static/js/724.a9a3449b.chunk.js'},{'revision':null,'url':'/static/js/742.035d7850.chunk.js'},{'revision':null,'url':'/static/js/776.d0fb0ce0.chunk.js'},{'revision':null,'url':'/static/js/779.3a7bac8d.chunk.js'},{'revision':null,'url':'/static/js/781.b760ea46.chunk.js'},{'revision':null,'url':'/static/js/92.4d831d77.chunk.js'},{'revision':null,'url':'/static/js/922.4fe5eaed.chunk.js'},{'revision':null,'url':'/static/js/930.387cfd03.chunk.js'},{'revision':null,'url':'/static/js/962.4f1ec71e.chunk.js'},{'revision':null,'url':'/static/js/998.80cc86cf.chunk.js'},{'revision':null,'url':'/static/js/main.bbac42e9.js'}]),function(e){const t=z();Z(new ee(t,e))}(ie);const oe=new RegExp("/[^/?]+\\.[^/]+$");var ce;Z((e=>{let{request:t,url:s}=e;return"navigate"===t.mode&&(!s.pathname.startsWith("/_")&&!s.pathname.match(oe))}),(ce="/index.html",z().createHandlerBoundToURL(ce)));Z((e=>{let{url:t}=e;return t.origin===self.location.origin&&t.pathname.startsWith("/static")}),new te({cacheName:"app-runtime",plugins:[new ae({statuses:[200]})]})),Z((e=>{let{url:t}=e;return t.origin===self.location.origin&&(t.pathname.startsWith("/zh/route/")||t.pathname.startsWith("/en/route/"))}),new class extends B{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(se)}async _handle(e,s){const n=s.fetchAndCachePut(e).catch((()=>{}));s.waitUntil(n);let a,r=await s.cacheMatch(e);if(r)0;else{0;try{r=await n}catch(i){i instanceof Error&&(a=i)}}if(!r)throw new t("no-response",{url:e.url,error:a});return r}}({cacheName:"app-runtime-public",plugins:[new ae({statuses:[200]}),new I({maxEntries:50,maxAgeSeconds:43200})]}));const he=new class extends B{async _handle(e,t){const s=await t.cacheMatch(e);if(void 0!==s)return s;let n=e;return"cors"!==n.mode&&(n=new Request(n.url,{mode:"cors",credentials:"omit",method:n.method})),t.fetchAndCachePut(n)}}({cacheName:"map",plugins:[new ae({statuses:[200]}),new I({maxAgeSeconds:43200,purgeOnQuotaError:!0})]});Z((e=>{let{url:t}=e;return t.origin.includes("fastly.net")}),he),Z((e=>{let{url:t}=e;return t.origin.includes("fonts.gstatic.com")||t.origin.includes("unpkg.com")||t.origin.includes("fonts.googleapis.com")}),new te({cacheName:"fonts-and-asset",plugins:[new ae({statuses:[0,200]}),new I({maxAgeSeconds:525600})]})),Z((e=>{let{url:t}=e;return t.origin.includes("rt.data.gov.hk")||t.origin.includes("data.etabus.gov.hk")}),new class extends B{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(se),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,s){const n=[];const a=[];let r;if(this._networkTimeoutSeconds){const{id:t,promise:i}=this._getTimeoutPromise({request:e,logs:n,handler:s});r=t,a.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:n,handler:s});a.push(i);const o=await s.waitUntil((async()=>await s.waitUntil(Promise.race(a))||await i)());if(!o)throw new t("no-response",{url:e.url});return o}_getTimeoutPromise(e){let t,{request:s,logs:n,handler:a}=e;return{promise:new Promise((e=>{t=setTimeout((async()=>{e(await a.cacheMatch(s))}),1e3*this._networkTimeoutSeconds)})),id:t}}async _getNetworkPromise(e){let t,s,{timeoutId:n,request:a,logs:r,handler:i}=e;try{s=await i.fetchAndCachePut(a)}catch(o){o instanceof Error&&(t=o)}return n&&clearTimeout(n),!t&&s||(s=await i.cacheMatch(a)),s}}({cacheName:"bus-route-and-eta",plugins:[new ae({statuses:[200]}),new I({maxAgeSeconds:43200})]}));const le=async(e,t,s,n)=>{try{let a;if(void 0===n){const e=await async function(){var e="routeFareList.min.json";return fetch("https://hkbus-data.skpracta.info/"+e,{cache:"no-store"}).then((e=>e.json())).catch((()=>fetch("https://data.hkbus.app/"+e,{cache:"no-store"}).then((e=>e.json())).catch((()=>fetch("https://hkbus.github.io/hk-bus-crawling/"+e,{cache:"no-store"}).then((e=>e.json()))))))}();a=Object.values(e.stopList)}else a=n;await Promise.all(e.map((async e=>{const n=function*(){const n=re(e,a,s);for(let e=0;e<n.length;e+=1)yield he.handleAll({event:t,request:new Request(n[e],{})})[1]}();let r=n.next();const i=new Set;for(;!0!==r.done;){const e=r.value;i.add(e),e.then((()=>i.delete(e))),i.size>=10&&await Promise.any(i),r=n.next()}})))}catch(a){console.error("error on warn cache",a)}};self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting(),e.data&&"CHECK_VERSION"===e.data.type&&self.clients.matchAll({includeUncontrolled:!0,type:"window"}).then((e=>e.map((e=>e.postMessage({type:"CURRENT_VERSION",payload:"build ".concat("b55db42")})))));const t=e.data;if("object"===typeof(s=t)&&"WARN_UP_MAP_CACHE"===s.type){console.log("warm up map cache",t);const s=async()=>{try{await le(t.zoomLevels,e,t.retinaDisplay,t.stopList)}catch(s){console.error("error on warn cache",s)}};e.waitUntil(s())}var s}))})()})();