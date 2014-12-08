importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(ev) {
  ev.waitUntil(
    caches.open('packaged-assets-1.0.0').then(function(cache) {
      console.log("Cache opened!");
      var r = cache.addAll(
        ['index.html',
         'cordova.js',
         'img/logo.png',
         'js/index.js',
         'css/index.css',
        ]
      );
      return r;
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
