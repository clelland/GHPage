self.addEventListener('install', function(ev) {
  ev.waitUntil(
    caches.open('packaged-assets-1.0.0').then(function(cache) {
      console.log("Cache opened!");
      var r = cache.add('/index.html');
      return r;
    })
  );
});
