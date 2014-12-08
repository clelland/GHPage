importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(ev) {
  ev.waitUntil(
    caches.open('packaged-assets-1.0.0').then(function(cache) {
      console.log("Cache opened!");
      var r = cache.put('/index.html');
      return r;
    })
  );
});
