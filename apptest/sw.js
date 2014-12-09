APP_VERSION = '1.0.0';
PACKAGED_ASSETS = [
  'index.html',
  'cordova.js',
  'img/logo.png',
  'js/index.js',
  'css/index.css',
];
CACHE_NAME = 'packaged-assets-' + APP_VERSION;

importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(ev) {
  ev.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Cache opened!");
      return cache.addAll(PACKAGED_ASSETS);
    })
  );
});

self.addEventListener('fetch', function(ev) {
  ev.respondWith(
    caches.match(ev.request).then(function(response) {
      if (response) {
        console.log("Returning " + ev.request.url + " from cache");
        return response;
      }
      console.log("Fetching " + ev.request.url + " from network");
      return fetch(ev.request);
    })
  );
});
