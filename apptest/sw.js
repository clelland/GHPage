self.addEventListener('install', function(ev) {
  event.waitUntil(
    caches.open('packaged-assets-1.0.0').then(function(cache) {
      console.log("Cache opened!");
      return cache.add('/index.html');
    });
  );
});
