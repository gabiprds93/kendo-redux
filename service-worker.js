"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/kendo-redux/index.html","96aa485d599b0707e905f4cfe9692ed0"],["/kendo-redux/static/css/main.9e791231.css","d41749fea30b47cfdf7aaeb19ecd4723"],["/kendo-redux/static/js/main.526e0ef4.js","8b18e6ba8008dcf416b68a44f2c95583"],["/kendo-redux/static/media/california-rolls.2b20ee88.jpg","2b20ee8853f24f7d50bcb9274162900b"],["/kendo-redux/static/media/chicken-teriyaki.75f1c40a.jpg","75f1c40ab627c5aab510a2fc777bc8f9"],["/kendo-redux/static/media/chirashi-sushi.7a63bb3f.jpg","7a63bb3fa528a296316bac0841809bf6"],["/kendo-redux/static/media/ebi-rolls.4f995cbf.jpg","4f995cbf55b72c92feb7f93122a966af"],["/kendo-redux/static/media/edamame.39a4bcfe.jpg","39a4bcfe3017dc4889a7082d6a03677e"],["/kendo-redux/static/media/gohan.9bbd5f0b.jpg","9bbd5f0b122552a62e2f926ccd5e484a"],["/kendo-redux/static/media/hosomaki-mix.ce85483b.jpg","ce85483be689ac9b5a25c0c1861ec583"],["/kendo-redux/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/kendo-redux/static/media/maguro.c3342387.jpg","c3342387e1764420adccd293797b661a"],["/kendo-redux/static/media/miso-soup.9b63c6ba.jpg","9b63c6baf3e794f2658713fd8b90895c"],["/kendo-redux/static/media/salmon-teriyaki.421ac72f.jpg","421ac72f1aab724ba884f531d6049b5f"],["/kendo-redux/static/media/sashimi-salad.92c039b7.jpg","92c039b72b6ad709d9e4bcbc4b27eea3"],["/kendo-redux/static/media/seattle-rolls.02b070a7.jpg","02b070a76a1dcc3fe52dc76670f994ff"],["/kendo-redux/static/media/seaweed-salad.18bb1024.jpg","18bb1024265003ce63f44fe62046218e"],["/kendo-redux/static/media/shake.7e2209eb.jpg","7e2209ebb2513c389be75666a80b0194"],["/kendo-redux/static/media/shiromi.89be6be3.jpg","89be6be350785a568770ab3fcfd0efcd"],["/kendo-redux/static/media/spicytuna-rolls.c6c7b894.jpg","c6c7b8940f85933192cf3ea6434ad8d1"],["/kendo-redux/static/media/sushi-preview.11f7eaaa.png","11f7eaaa40f6e23eb008e26bad57985f"],["/kendo-redux/static/media/tekka-maki.16ecdd9e.jpg","16ecdd9e69fa7fa4bbeafb735d346064"],["/kendo-redux/static/media/tori-katsu.57feaf0c.jpg","57feaf0cb0e86b1206929749ad961165"],["/kendo-redux/static/media/yaki-udon.8845d5c2.jpg","8845d5c2d3a14e139bede9d6b8e8cb36"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/kendo-redux/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});