// Register Service Worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js',{scope:'/GHPage/apptest/'}).then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
