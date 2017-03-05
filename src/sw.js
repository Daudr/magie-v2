// Polyfill for Chrome caching
importScripts('/assets/js/cache-polyfill.js');

// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(

    // Open a cache
    caches.open('v1').then(function(cache) {

      // Define what we want to cache
      return cache.addAll([
        '/',
        'index.html',
        '/assets/css/styles-full.css',
        '/assets/js/scripts.js',
        '/assets/videos/background.mp4',
        '/assets/icons/background/back-img.jpg',
        '/assets/icons/cd-top/cd-top-arrow.svg',
        '/assets/icons/logo/magie_dinverno_logo.png',
        '/assets/icons/logo/logo-asd-trasp.png',
        '/assets/icons/services/casette.jpg',
        '/assets/icons/services/corsimattina.jpg',
        '/assets/icons/services/gonfiabili.jpg',
        '/assets/icons/services/pattini.jpg',
        '/assets/icons/services/pista1.jpg',
        '/assets/icons/services/taverna.jpg',
        'inline.bundle.js',
        'styles.bundle.js',
        'vendor.bundle.js',
        'main.bundle.js',
        'favicon.ico',
      ]);
    })
  );
});

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {

  event.respondWith(

    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {

      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});